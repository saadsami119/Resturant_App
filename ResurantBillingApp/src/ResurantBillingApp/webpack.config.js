var path = require('path');

module.exports = {
    context: path.join(__dirname, 'wwwroot/reactjs'),
    entry: "./app.jsx",
    output: {
        path: path.join(__dirname, 'wwwroot/build'),
        filename: "app.bundle.js"
    },
    devServer: {
        contentBase: ".",
        host: "localhost",port: 9000
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel",
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};