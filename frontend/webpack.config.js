// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = 'style-loader';



const config = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true, // Open browser once started
        historyApiFallback: true,
        host: process.env.HOST || '0.0.0.0', // Listens on all interfaces
        port: process.env.PORT || 8000,

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html',
        }),
        new webpack.EnvironmentPlugin({
            'BACKEND_PORT': 9000 // Use 9000 unless BACKEND_PORT is defined in the environment
        }),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
