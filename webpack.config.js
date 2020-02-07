var ip = 'http://180.100.74.68'
module.exports = {
    "rem": 16, //是否修改px为rem
    "auto_open_browser": true,
    "https":false,//是否为https服务
    "postCss": true,
    "entry": "index",
    "commonJs": "base",
    "port": 8090,
    "static": true,
    "compress": false,
    "proxy": [
        {
            api: ["/wgh"],
            // target: "http://192.168.3.49:6080"
            target: "http://10.1.163.172:8087"
        },{
            api: ["/xzsp"],
            target: "http://10.1.163.173:8084"
        },
        {
            api:['/api'],
            target:"http://localhost:3333"
        },{
            api:['/zhzf'],
            target:"http://10.1.163.172:8085"
        },{
            api:['/ump'],
            target:"http://10.1.163.172:8081"
            // target:"http://192.168.123.108:8080"
        }
    ]
}
