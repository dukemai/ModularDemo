module.exports = {
    entry: "./Webpack/app/main.js",
    output: {
        path: __dirname + 'build',
        filename: "main.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};