const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const dest = 'build';
const isProd = process.env.NODE_ENV === 'production';

module.exports = {

    // @see https://webpack.js.org/configuration/entry-context/#entry
    entry: './src/main.js',

    // @see https://webpack.js.org/configuration/output/
    output: {

        // The output directory as an absolute path.
        path: path.resolve(__dirname, dest),

        // This is an important option when using on-demand-loading or loading
        // external resources like images, files, etc. If an incorrect value is
        // specified you'll receive 404 errors while loading these resources.
        //
        // This option specifies the public URL of the output directory when
        // referenced in a browser. A relative URL is resolved relative to the
        // HTML page (or <base> tag). Server-relative URLs, protocol-relative
        // URLs or absolute URLs are also possible and sometimes required, i.e.
        // when hosting assets on a CDN.
        //
        // @see https://webpack.js.org/configuration/output/#output-publicpath
        publicPath: `./${dest}/`,

        // This option determines the name of each output bundle. The bundle is
        // written to the directory specified by the output.path option.
        //
        // @see https://webpack.js.org/configuration/output/#output-filename
        filename: 'app.js'
    },

    // @see https://webpack.js.org/configuration/module/
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: isProd,
                    preserveWhitespace: false,
                    postcss: [
                        require('autoprefixer')({
                            browsers: ['last 3 versions']
                        })
                    ]
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'env'
                    ]
                }
            },
            {
                test: /\.css$/,
                use: isProd ? ExtractTextPlugin.extract({
                    use: 'css-loader?minimize',
                    fallback: 'vue-style-loader'
                }) : ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: path.join('images', '[name].[hash].[ext]')
                }
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: path.join('fonts', '[name].[hash].[ext]')
                }
            },
        ]
    },

    // @see https://webpack.js.org/configuration/resolve/
    resolve: {

        // Create aliases to import or require certain modules more easily.
        alias: {
            // @see https://github.com/vuejs/vue/tree/dev/dist#runtime--compiler-vs-runtime-only
            vue$: 'vue/dist/vue.esm.js'
        },

        // Automatically resolve certain extensions.
        // This defaults to: extensions: [".js", ".json"]
        //
        // ⚠️ For modules that are imported with their extension, e.g.
        // import SomeFile from "./somefile.ext", to be properly resolved,
        // a string containing "*" must be included in the array.
        extensions: ['*', '.vue', '.js']
    },

    // @see https://webpack.js.org/configuration/dev-server/
    devServer: {

        // When using the HTML5 History API, the index.html page will likely
        // have to be served in place of any 404 responses.
        historyApiFallback: true,

        // With noInfo enabled, messages like the webpack bundle information
        // that is shown when starting up and after each save, will be hidden.
        // Errors and warnings will still be shown.
        noInfo: false,

        // Tell the server where to serve content from. This is only necessary
        // if you want to serve static files.
        contentBase: path.resolve(__dirname, './'),

        // Enable gzip compression for everything served.
        compress: true,

        // The bundled files will be available in the browser under this path.
        // ⚠️ Make sure publicPath always starts and ends with a forward slash.
        // ⚠️ It’s recommended that devServer.publicPath is the same as output.publicPath.
        publicPath: `/${dest}/`,

        // Add some colors to the output
        stats: { colors: true }
    },

    // @see https://webpack.js.org/configuration/target/
    // target: 'web',

    // These options allows you to control how webpack notifies you of assets
    // and entrypoints that exceed a specific file limit.
    //
    // @see https://webpack.js.org/configuration/performance/
    performance: {
        hints: isProd ? 'warning' : false
    },

    // This option controls if and how source maps are generated.
    //
    // @see https://webpack.js.org/configuration/devtool/
    devtool: isProd ? false : '#cheap-module-source-map',

    // @see https://webpack.js.org/configuration/plugins/
    plugins: isProd ? [
        // @see https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/33
        // new UglifyJSPlugin({
        //     compress: { warnings: false }
        // }),
        new ExtractTextPlugin({
            filename: 'common.[chunkhash].css'
        })
    ] : [
        new FriendlyErrorsPlugin()
    ]
}
