const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const modules = require('./module.js');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production'
const PostCompilePlugin = require('webpack-post-compile-plugin')
const resolve = require('./resolve.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = function(src, odist) {
    return {
        target: 'web',
        entry: {
            index: ['./' + src + '/index.js']
        }, //入口JS
        devtool: isProd ?
            false : '#cheap-module-source-map',
        output: {
            filename: "./js/[name].[hash:6].js",
            path: path.resolve(__dirname, '../html')
        },
        resolve,
        module: modules,
        plugins: [
            new PostCompilePlugin(),
            new HtmlWebpackPlugin({
                template: './index.html', // 模板文件           
                filename: 'index.html',
                env: isDev ? 'development' : 'production',
                chunks: ['vendor', 'utils', 'index'],
                chunkSortMode: 'manual',
                inject: true,
                minify: {
                    minimize: false,
                    removeConments: false, //remove the note in html
                    collapseWhitespace: false // delete the white and space
                }
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
                'process.env.VUE_ENV': '"spa"'
            }),
            new VueLoaderPlugin(),
            new CleanWebpackPlugin(['dist', 'build'], {
                verbose: false
            })
        ].concat(isProd ? [new ExtractTextPlugin({
            filename: './[name].[chunkhash].css', //此处不能修改，放置image资源引用不到
            allChunks: true
        })] : [])
    }
}