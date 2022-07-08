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
    ]
}