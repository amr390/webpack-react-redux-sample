var webpack = require ('webpack');
var HtmlWebpackPlugin = require ('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json-loader",
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules'
            }
        ]
    },
    //postcss: [
        //require('autoprefixer')
    //],
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/app/templates/index.tmpl.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.BannerPlugin("Copyright Flying Unicorns inc.")
    ],

    devServer: {
        contentBase: "./public",
        //colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true
    }
}
