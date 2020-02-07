cordova.define("com.jsict.mobile.plugins.logininfo", function(require, exports, module){
	var exec = require("cordova/exec");
	var LoginInfo = function(){

	};
	LoginInfo.prototype = {
	    "save" : function(win, fail, id, server){
		    exec(win, fail, "LoginInfo", "save", [id, server]);
	    },
	    "start" : function(win, fail){
            exec(win, fail, "LoginInfo", "start", []);
        },
         "getLocation" : function(win, fail){
            exec(win, fail, "LoginInfo", "getLocation", []);
        },
		"stop" : function(win, fail){
			exec(win, fail, "LoginInfo", "stop", []);
		},
	};
	module.exports = new LoginInfo();
});
