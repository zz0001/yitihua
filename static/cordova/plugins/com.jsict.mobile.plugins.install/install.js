cordova.define("com.jsict.mobile.plugins.install", function (require, exports, module) {
    var exec = require("cordova/exec");
    var InstallApk = function () {

    };
    InstallApk.prototype = {
        "install": function (win, fail, fileName) {
            exec(win, fail, "InstallApkUtil", "install", [fileName]);
        }
    };
    module.exports = new InstallApk();
});