cordova.define("com.jsict.mobile.plugins.speech", function (require, exports, module) {
    var exec = require("cordova/exec");
    var SpeechTextUtil = function () {

    };
    SpeechTextUtil.prototype = {
        "startListen": function (win, fail) {
            exec(win, fail, "SpeechTextUtil", "startListen", []);
        }
    };
    module.exports = new SpeechTextUtil();
});
