const fs = require('fs');
const express = require('express')
const bodyParser = require("body-parser");
const WebSocketServer = require('ws').Server;
var mime = require('mime');
const sqlite3 = require("sqlite3");
module.exports = function(app, server) {
    var db = new sqlite3.Database("./server/db.db", (err) => {
        db.run("create table if not exists apkhistory (time INT,icon TEXT,fuwuqi VARCHAR,baoming VARCHAR,icon2 TEXT,path VARCHAR)",(err)=>{
            if(err) throw err;
        })
    });
    
    var wss = new WebSocketServer({
        server
    });
    var peoples = [];
    wss.broadcast = function broadcast(info) {
        this.clients.forEach(function each(client) {
            client.send(JSON.stringify(info))
        })
    }
    
    function isJSON(str) {
        if (typeof str == 'string') {
            try {
                var obj = eval('(' + str + ')');
                if (typeof obj == 'object' && obj) {
                    return true;
                } else {
                    return false;
                }
    
            } catch (e) {
                console.log('error：' + str + '!!!' + e);
                return false;
            }
        }
    }
    wss.on('connection', function(ws, abc) {
        ws.on('message', function(jsonStr, flags) {
            console.log(jsonStr)
            jsonStr = jsonStr || '{}'
            if (!isJSON(jsonStr)) {
                return console.log('数据不是json格式')
            }
            var j = eval('(' + jsonStr + ')');
            if (j.type == 'connect') {
                this.uid = j.uid;
                peoples.push(j.uid);
            }
            wss.broadcast(j);
        })
        ws.on('close', function() {
            //		peoples.splice(peoples.indexOf(this.uid), 1);
        })
    })
    var urlencodedParser =bodyParser.urlencoded({
            limit: '50mb',
            extended: true,
            parameterLimit: 50000
        })
    app.all('/server/:viewname?', urlencodedParser,function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By", ' 3.2.1');
        // res.header("Content-Type", "application/json;charset=utf-8");
        next();
    });
    app.post('/server/delete', function(req, res) {
        var body = req.body;
        var id=body.id;
        db.run(`delete from apkhistory WHERE time = ${id}`, (err) => {
            if (err) throw err;
            console.log("数据删除成功")
            res.json({
                code:0
            })
        })
        
    })
    app.post('/server/download', function(req, res) {
        const shell = require('shelljs');
        var body = req.body;
        var time=new Date().getTime();
        var baoming=body.baoming;
        var fuwuqi=body.fuwuqi;
        var icon=body.icon;
        var icon2=body.icon2;
        var path='/static/apkhistory/'+time+'.apk'
        var buffer=fs.readFileSync('./android/template/strings.tpl');
        var buffer2=fs.readFileSync('./android/template/MainActivity.tpl');
        
        var result=buffer.toString();
        var result2=buffer2.toString();
        result=result.replace('{{baoming}}',function(){
            return baoming;
        })
        result2=result2.replace('{{loadUrl}}',function(){
            return fuwuqi
        })
        if(icon){
            var base64Data = icon.replace(/^data:image\/\w+;base64,/, "");
            var dataBuffer = new Buffer(base64Data, 'base64');
            fs.writeFileSync("./android/app/src/main/res/mipmap-hdpi/icon.png", dataBuffer);
        }
        if(icon2){
            var base64Data2 = icon2.replace(/^data:image\/\w+;base64,/, "");
            var dataBuffer2 = new Buffer(base64Data2, 'base64');
            fs.writeFileSync("./android/app/src/main/res/drawable-port-xhdpi/screen.png", dataBuffer2);
        }
        fs.writeFileSync('./android/app/src/main/res/values/strings.xml',result);
        fs.writeFileSync('./android/app/src/main/java/com/jsict/zonghezhifa/activity/MainActivity.java',result2);
        shell.cd('android')
        try{
            shell.exec('rm -f ./app/build/outputs/apk/release/app-release.apk')
        }catch(e){
            console.log(e)
        }
        shell.exec('./gradlew build');
        shell.cd('..');
        
        db.run(`insert into apkhistory values (${time},"${icon}","${fuwuqi}","${baoming}","${icon2}","${path}")`,(err)=>{
            if(err) throw err;
            console.log("数据插入成功");
        })
        fs.writeFileSync('./static/apkhistory/'+time+'.apk', fs.readFileSync('./android/app/build/outputs/apk/release/app-release.apk'));
        res.json({
            code:0,
            path
        })
    })
    app.all('/server/api/:viewname?', function(req, res) {
        if (req.params.viewname) {
            db.all(`select * from ${req.params.viewname}`, function(err, row) {
                if (err) throw err
                else {
                    res.status(200)
                    res.json(row)
                }
            })
           
        } else {
            res.json('无数据')
        }
    });
}
