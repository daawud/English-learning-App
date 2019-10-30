const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ImageMinPlugin = require('imagemin-webpack-plugin').default;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const plugins = [
    new MiniCssExtractPlugin({
        filename: path.join('assets', 'css', '[name].[hash].css'),
        chunkFilename: '[id].[hash].css',
    }),
    new CleanWebpackPlugin(),
];

const rules = [
    {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    url: false,
                },
            },
            'css-loader',
            {
                loader: 'postcss-loader',
                options: {
                    config: { path: path.join(__dirname, 'postcss.config.js') },
                },
            },
            'sass-loader',
        ],
    },
    {
        test: /\.(png|gif|jpe?g|svg)$/,
        exclude: /node_modules/,
        loaders: [
            {
                loader: 'url-loader',
                options: {
                    name: '[path][name].[contenthash].[ext]',
                    context: path.join(baseWebpackConfig.externals.PATHS.app, 'assets', 'images'),
                    outputPath: (url, resourcePath) => {
                        const file = path.parse(url);

                        if (/assets(\/|\\)images/.test(resourcePath)) {
                            return path.join('assets', 'images', url);
                        }

                        return path.join('assets', 'images', 'components_data', file.base);
                    },
                    limit: 256,
                },
            },
        ],
    },
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    name: '[name].[contenthash].[ext]',
                    publicPath: url => `fonts/${path.parse(url).base}`,
                    outputPath: path.join('assets', 'css', 'fonts'),
                    limit: 256,
                },
            },
        ],
    },
];

const optimization = {
    splitChunks: {
        cacheGroups: {
            vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all',
                enforce: true,
            },
        },
    },
    minimizer: [
        new UglifyJsPlugin({
            test: /\.js(\?.*)?$/i,
            chunkFilter: chunk => {
                if (chunk.name === 'vendor') {
                    return false;
                }

                return true;
            },
            cache: true,
            parallel: true,
            uglifyOptions: {
                output: {
                    comments: false,
                },
            },
        }),
        new ImageMinPlugin({
            test: /\.(png|jpe?g|gif|svg)$/,
        }),
    ],
};

const prodWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    module: {
        rules,
    },
    plugins,
    optimization,
});

module.exports = new Promise(res => {
    res(prodWebpackConfig);
});
