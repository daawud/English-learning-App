const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const plugins = [new webpack.SourceMapDevToolPlugin({ filename: '[file].map' }), new MiniCssExtractPlugin()];

const rules = [
    {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    url: false,
                    hmr: true,
                    reloadAll: true,
                },
            },
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true,
                },
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true,
                },
            },
        ],
    },
    {
        test: /\.(png|gif|jpe?g|svg)$/,
        exclude: /node_modules/,
        loaders: ['url-loader'],
    },
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        use: ['url-loader'],
    },
];

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: '#@cheap-module-eval-source-map',
    devServer: {
        contentBase: baseWebpackConfig.externals.PATHS.build,
        compress: true,
        port: 9000,
        headers: { 'Access-Control-Allow-Origin': '*' },
        historyApiFallback: true,
    },
    module: {
        rules,
    },
    plugins,
});

module.exports = new Promise(res => {
    res(devWebpackConfig);
});
