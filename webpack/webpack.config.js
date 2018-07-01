const path = require("path"),
    htmlPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        build: "./src/build.js",
        entry: './src/entry.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
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
                test:/\.less$/,
                use:["style-loader","css-loader","less-loader"]
            },
            {
                test:/\.sass$/,
                use:["style-loader","css-loader","sass-loader"]
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
        })
    ],
    mode: "development"
}