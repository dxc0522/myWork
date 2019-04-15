const path = require("path"),
    htmlPlugin = require('html-webpack-plugin'),
    glob = require('glob'),
    PurifyCSSPlugin = require("purifycss-webpack"),
    entry = require("./webpack_config/entry_webpack"),
    copyWebpackPlugin = require("copy-webpack-plugin"),
    webpack = require("webpack");
console.log(encodeURIComponent(process.env.type));

if (process.env.type == "build") {
    const website = {
        publicPath: "http://192.168.0.104:1717/"
    };
} else {
    const website = {
        publicPath: "http://cdn.jspang.com/"
    };
}

module.exports = {
    entry: entry.path,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "js/[name].js"
    },
    module: {
        rules: [{
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                    options: {
                        modules: true,
                    }
                }, {
                    loader: "postcss-loader",
                }
            ]
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 5000,
                    outputPath: "./img/"
                },
            }]
        },
        {
            test: /\.(html|htm)$/,
            use: ["html-withimg-loader"]
        },
        {
            test: /\.less$/,
            use: ["style-loader", "css-loader", "less-loader", "postcss-loader"]
        },
        {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"]
        },
        {
            test: /\.(js|jsx)$/,
            use: {
                loader: 'babel-loader',
            },
            exclude: /node_modules/
        }
        ]
    },
    devServer: {
        //设置基本目录结构
        contentBase: path.resolve(__dirname, 'dist'),
        //服务器的IP地址，可以使用IP也可以使用localhost
        host: 'localhost',
        //服务端压缩是否开启
        compress: true,
        //配置服务端口号
        port: 1717
    },
    plugins: [
        new htmlPlugin({
            minify: {
                removeAttributeQuotes: true,
            },
            hash: true,
            template: './src/index.html'
        }),
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute!
            paths: glob.sync(path.join(__dirname, 'src/*.html')),
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new webpack.BannerPlugin("豆豆版权所有，我写的"),
        new copyWebpackPlugin([{
            from: __dirname + '/src/public',
            to: './public'
        }])
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            filename: "assets/js/[name].min.js",
        }
    },
    watchOptions: {
        poll: 1000,
        aggregateTimeout: 500,
        ignored: /node_modules/,
    },
    devtool: 'eval-source-map',
    mode: "production"
}