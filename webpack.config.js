var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// 一些常用路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    entry: {
        // 业务代码
        bundle: path.resolve(APP_PATH, 'app.jsx'),
        // 第三方库
        vendor: ["react", "react-dom", "utils/ajax"]
    },
    // 输出路径
    output: {
        path: BUILD_PATH,
        filename: './[name].js'
    },
    // 开启dev source map
    devtool: false,
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
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            }
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Deskmark app'
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false // remove all comments
            },
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            }
        }),
        new ExtractTextPlugin("bundle.css"),
        //将第三方库打包到vendor.js
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ],
    // 可以在js中import jsx文件
    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: APP_PATH
    }
};
