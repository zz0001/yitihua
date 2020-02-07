cordova.define("com.jsict.mobile.plugins.checkpermission", function (require, exports, module) {
    var exec = require("cordova/exec");
    var CheckPermissionUtil = function () {

    };
    CheckPermissionUtil.prototype = {
        "check": function (win, fail, type) {
            exec(win, fail, "CheckPermissionUtil", "check", [type]);
        }
    };
    module.exports = new CheckPermissionUtil();
});