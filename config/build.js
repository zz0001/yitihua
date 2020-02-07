process.env.NODE_ENV = 'production';
const compiler = require('./compiler.js');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ora = require('ora');
const jcyFs = require('jcy-fs')
var project='';
if(process.env.PRO_ENV){
    project='public/'+process.env.PRO_ENV
}
console.log(project)
var webpackConfig = compiler(project||'src');
var entry = webpackConfig.entry;

for (var key in entry) {
    entry[key].unshift('./config/production.entry.js')
}

function buildPack(webpackConfig, callback) {
    var spinner = ora('building for uncompressed files...')
    spinner.start()
    webpack(webpackConfig, function(err, stats) {
        spinner.stop()
        if (err) {
            throw err
        }
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n')
        callback && callback()
    })
}
buildPack(merge(webpackConfig, {
    plugins: [new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })]
}), function() {
    var output_path = webpackConfig.output.path;
    jcyFs.copyDir(path.resolve(__dirname, '../static'), output_path + '/static')
})
