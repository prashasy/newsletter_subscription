var webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ]
    },
    output: {
        path: path.join(__dirname, '/static/frontend/'),
        filename: 'main.js',
        publicPath: "/templates/frontend/"
    },
    // devServer: {
    //     inline: true,
    //     port: 3000,
    //     hot: true
    // },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
};