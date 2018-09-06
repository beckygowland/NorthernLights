const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { AngularCompilerPlugin } = require('@ngtools/webpack');
 
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = function () {
    return {
        watchOptions: {
            aggregateTimeout: 300,
            poll: 500
        },
        target: 'web',
        entry: {
            'polyfills': './src/webapp/polyfills.ts',
            'app': './src/webapp/main.ts'
        },
        output: {
            path: __dirname + '/dist',
            filename:  '/dist/[name].js'
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        module: {
            rules: [
              {
                test: /\.ts$/,
                loader: '@ngtools/webpack',
                exclude: [/\.(spec|e2e)\.ts$/, /node_modules/],
            },
              {
                test: /\.html$/,
                loader: 'html-loader'
              },
              {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
              },
              {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' })
              },
              {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                loader: 'raw-loader'
              },
              {
                  test: /\.scss$/,
                  exclude: /node_modules/,
                  loaders: ['raw-loader', 'sass-loader'] // sass-loader not scss-loader
              },
            ]
          },

        plugins: [
            new CopyWebpackPlugin([
                { from: 'src/assets', to: 'assets'}
            ]),
            new HtmlWebpackPlugin({
                template: __dirname + '/src/webapp/index.html',
                output: __dirname + '/dist',
                inject: 'head'
            }),
            // Workaround for angular/angular#11580
            new webpack.ContextReplacementPlugin(
                // The (\\|\/) piece accounts for path separators in *nix and Windows
                /angular(\\|\/)core(\\|\/)@angular/,
                helpers.root('./src/webapp'), // location of your src
                {} // a map of your routes
            ),
        
            new webpack.optimize.CommonsChunkPlugin({
                name: ['app', 'polyfills']
            }),
            new AngularCompilerPlugin({
               tsConfigPath: './tsconfig.json',
               entryModule: '/usr/src/app/src/webapp/app.module#AppModule',
               sourceMap: true,
               platform: 0,
               skipCodeGeneration: true
            })
 
        ]
    };
}