var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // devtool: 'eval-source-map',
    // devtool: 'inline-source-map',  //<== chrome debugger error;
    devtool: 'eval-source-map',
    debug: true,
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        "./src/js/index.js"
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/, loader: "style-loader!css-loader"
            },
            {
                test: /\.sass/,
                loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
            },
            {
                test: /\.less/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.styl/,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test: /\.(png|jpg|gif|woff|woff2)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.(mp4|ogg|svg)$/,
                loader: 'file-loader'
            }
        ]
    },

    resolve: {
        root: path.resolve(__dirname),
        alias: {
            jquery: 'src/vendor/jquery.js'
        }
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                // This has effect on the react lib size
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: 'jquery'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin("[name].css"),

        new webpack.HotModuleReplacementPlugin()

    ],

    devServer: {
        port: 3000,
        publicPath: '/dist/',
        hot: true,
        inline: true,
        colors: true,
        historyApiFallback: true,
        compress: true,
        quiet: false,
        progress: true
    }
};