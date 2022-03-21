const path = require('path');

const config = {
    mode: 'production',
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: "index.bundle.js"
    }
};

module.exports = config;
