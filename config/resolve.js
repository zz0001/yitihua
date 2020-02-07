const path = require('path');
module.exports = {
    alias: {
        '%': path.resolve(__dirname, '../public'),
        '$': path.resolve(__dirname, '../public'),
        '@': path.resolve(__dirname, '../src'),
        '/static': path.resolve(__dirname, '../static'),
        'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.js', '.less', '.tpl', '.json', '.css', '.vue']
}