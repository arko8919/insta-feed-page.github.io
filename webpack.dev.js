const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { EnvironmentPlugin } = require("webpack");

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        // Resolve absolute path to this directory
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            //minify: false
        }),
        new EnvironmentPlugin({
            INSTAGRAM_APP_TOKEN: ""
        })
    ],
    module: {
        rules: [
            {
                test: /\.s?css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader']
            },
        ]
    }
});