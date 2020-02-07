cordova.define("org.custom.startActivity.StartActivity", function(require, exports, module) {
    var exec = require('cordova/exec');

    exports.startActivity = function (arg0, success, error) {
        exec(success, error, 'StartActivity', 'startActivity', [arg0]);
    };

    exports.setJpushAlias = function (arg0, success, error) {
            exec(success, error, 'StartActivity', 'setJpushAlias', [arg0]);
        };
});
