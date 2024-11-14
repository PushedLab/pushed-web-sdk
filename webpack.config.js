const path = require('path');

module.exports = {
    entry: './src/lib/pushed.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'pushed-sdk.js',
        library: 'Pushed',
        publicPath: 'build/'
    }
};