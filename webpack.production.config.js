var webpack = require ('webpack');
var HtmlWebpackPlugin = require ('html-webpack-plugin');
var ExtractTextPlugin = require ('extract-text-webpack-plugin');

module.exports = {
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/build",
        filename: "[name]-[hash].js"
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: "json-loader", },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/, loader: 'style-loader!css-loader?modules' }
        ]
    },
    //postcss: [
        //require('autoprefixer')
    //],
    plugins: [
        new HtmlWebpackPlugin({ template: __dirname + "/app/templates/index.tmpl.html" }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("[name]-[hash].css"),
        new webpack.BannerPlugin("Copyright Flying Unicorns inc.")
    ],
}
