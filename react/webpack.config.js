'use strict';

const path = require('path')

module.exports = [
    {
        entry: {
            //'checkout': "./src/checkout/index.js",
            'purchase': "./src/purchase/index.js",
        },
        module: {
            rules: [
                {
                    test: /\.(js)$|\.(jsx)$/,
                    exclude: /node-modules/,
                    use: ['babel-loader']
                },
                {
                    test: /\.(css)$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        },
        resolve: {
            extensions: ['*', '.js', '.jsx', '.json']
        },
        output: {
            path: path.resolve(__dirname, '../static'),
            publicPath: "/",
            filename: "[name].bundle.js"
        },
        devServer: {
            static: {
                directory: path.join(__dirname, 'dist'),
            },
            historyApiFallback: true
        }
    }
]