// path 模块提供了一些实用工具，用于处理文件和目录的路径。
const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: "./src/main.js", // 入口 注意是相对路径
    output: { // 出口
        // __dirname 表示当前文件：webpack.config.js 的当前文件的目录名
        path: path.join(__dirname, "dist"), // 出口路径 文件夹名称
        filename: "bundle.js" // 出口js文件名
    },
    plugins: [ // plugins插件配置
        new HtmlWebpackPlugin({
            template: './public/index.html' // 告诉webpack使用插件时, 以我们自己的html文件作为模板去生成dist/html文件
        })
    ],
    module: { // 加载器配置
        rules: [ // 规则
            { // 一个具体的规则对象
                test: /\.css$/i, // 匹配.css结尾的文件
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.less/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            { // 图片文件的配置(仅适用于webpack5版本)
                test: /\.(gif|png|jpg|jpeg)/,
                type: 'asset'
            },
            { // webpack5默认内部不认识这些文件, 所以当做静态资源直接输出即可
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                type: 'asset/resource', // 所有的字体图标文件, 都输出到dist下
                generator: { // 生成文件名字 - 定义规则
                    filename: 'fonts/[name].[hash:6][ext]' // [ext]会替换成.eot/.woff
                }
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/, // 不去匹配这些文件夹下的文件（防止影响其他第三方依赖包）
                use: {
                    loader: 'babel-loader', // 使用这个loader处理js文件
                    options: { // 加载器选项
                        presets: ['@babel/preset-env'] // 预设: @babel/preset-env 降级规则-按照这里的规则降级我们的js语法
                    }
                }
            }
        ],
    },
}