const sqlite3 = require("sqlite3");

var db = new sqlite3.Database("./db.db", (err) => {
    if (err) throw err;
});
function insert2(data,index){
    var item =data[index]
    db.run(`insert into apkhistory values (${item.time},"${item.icon}","${item.fuwuqi}","${item.baoming}","${item.icon2}","${item.path}")`,(err)=>{
        if(err) throw err;
        console.log("数据插入成功");
        if(index<(data.length-1)){
            index+=1;
            insert2(data,index)
        }
        
    })
}
db.run("create table apkhistory (time INT,icon TEXT,fuwuqi VARCHAR,baoming VARCHAR,icon2 TEXT,path VARCHAR)",(err)=>{
    if(err) throw err;
    var data=require('./api/apkhistory.json')
    insert2(data,0)

})
