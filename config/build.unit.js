process.env.NODE_ENV = 'production';
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ora = require('ora');
const jcyFs = require('jcy-fs')
var webpackConfig = require('./build.unit.config.js')
var entry = webpackConfig.entry;

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

}), function() {})