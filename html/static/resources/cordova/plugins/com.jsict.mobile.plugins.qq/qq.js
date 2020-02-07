cordova.define("com.jsict.mobile.plugins.qq", function(require, exports, module){
	var exec = require("cordova/exec");
	var Qq = function(){};
	Qq.prototype = {
	    shareFriend : function(successCallback, errorCallback, config){
		    cordova.exec(successCallback, errorCallback, "QqPlugin", "shareFriend", [config]);
	    },
	    shareQzone : function(successCallback, errorCallback, config){
		    cordova.exec(successCallback, errorCallback, "QqPlugin", "shareQzone", [config]);
	    }
	};
	module.exports = new Qq();
});