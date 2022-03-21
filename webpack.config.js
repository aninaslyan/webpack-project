const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const config = {
    mode: 'production',
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: "index.bundle.js"
    },
    devServer: {
        historyApiFallback: true,
        port: 4200,
        open: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html",
        }),
    ]
};

module.exports = config;
