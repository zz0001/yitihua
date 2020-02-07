const program = require('commander');
// let merge=require('webpack-merge') 
const modules = require('./module')
const webpack = require('webpack')
const PostCompilePlugin = require('webpack-post-compile-plugin')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const resolve = require('./resolve.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
program
    .option('-s, --src [type]', 'src')
    .parse(process.argv);
module.exports = {
    entry: program.src,
    devtool: '#cheap-source-map',
    output: {
        filename: "./[name].js",
        path: path.resolve(__dirname, '../unit')
    },
    resolve,
    module: modules,
    plugins: [
        new VueLoaderPlugin(),
        new PostCompilePlugin(),
        new ExtractTextPlugin({
            filename: './[name].css', //此处不能修改，放置image资源引用不到
            allChunks: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}