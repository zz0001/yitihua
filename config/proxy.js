const conf = require('../webpack.config.js');
const proxy = require('http-proxy-middleware')
module.exports = function(app) {
    if (conf.proxy) {
        conf.proxy.forEach(item => {
            if (typeof(item) == 'string') {
                app.use(proxy({
                    target: item,
                    changeOrigin: true
                }))
            } else {
                app.use(proxy(item.api, {
                    target: item.target,
                    changeOrigin: item.changeOrigin ? item.changeOrigin : true
                }))
            }
        });
    }

}