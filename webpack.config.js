const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack =  require('webpack');

module.exports = {
    entry: {
        app: './src/scripts/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'SA'
        }),
        require('autoprefixer'),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets:['es2015','react']
                }
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    'css-loader?sourceMap',
                    'sass-loader?sourceMap'
                ]
            }, {
                test: /\.css$/,
                loaders: [
                    "style-loader",
                    "css-loader?sourceMap"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: ['file-loader'],
                //options: {name: "images/[name].[ext]",}
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: ['file-loader'],
                //options: {name: "fonts/[name].[ext]",}
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            },
        ]
    }
};