var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
// 一些常用路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    entry: {
        app: path.resolve(APP_PATH, 'app.jsx')
    },
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    // 开启dev source map
    devtool: 'eval-source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    module: {
        preLoaders: [{
            test: /\.jsx?$/,
            loaders: ['eslint'],
            include: APP_PATH
        }],
        loaders: [{
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: APP_PATH
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Deskmark app'
        })
    ],
    // 可以在js中import jsx文件
    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: APP_PATH
    }
};
