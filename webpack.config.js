const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ScriptExtPlugin = require('script-ext-html-webpack-plugin');
const { AngularCompilerPlugin } = require('@ngtools/webpack');
 
 
module.exports = function () {
    return {
        watchOptions: {
            aggregateTimeout: 300,
            poll: 500
        },
        entry: './src/webapp/main.ts',
        output: {
            path: __dirname + '/dist',
            filename: 'app.js'
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        module: {
            rules: [
                {   test: /\.ts$/, 
                    loader: '@ngtools/webpack'
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    loaders: ['raw-loader', 'sass-loader'] // sass-loader not scss-loader
                }
            ],
            loaders: [
                /* Embed files. */
                { 
                    test: /\.(html|css)$/, 
                    loader: 'raw-loader',
                    exclude: /\.async\.(html|css)$/
                },
                /* Async loading. */
                {
                    test: /\.async\.(html|css)$/, 
                    loaders: ['file?name=[name].[hash].[ext]', 'extract']
                }
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
 
            new ScriptExtPlugin({
                defaultAttribute: 'defer'
            }),
            new AngularCompilerPlugin({
               tsConfigPath: './tsconfig.json',
               entryModule: './src/webapp/app.module#AppModule',
               sourceMap: true
            })
 
        ]
    };
}