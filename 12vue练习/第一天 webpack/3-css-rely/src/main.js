// 引入jquery
import $ from 'jquery'
$(function() {
  $('#app li:nth-child(odd)').css('color', 'red') // 奇数红色
  $('#app li:nth-child(even)').css('color', 'green') // 偶数绿色
})
// 引入css文件
import "./css/index.css"

// 引入less
import "../less/index.less"
// 引入图片-使用
// webpack眼里万物皆模块
import imgUrl from '../assets/1.gif'
const theImg = document.createElement("img")
theImg.src = imgUrl
document.body.appendChild(theImg)

// 引入 iconffont 字体图标
// 8. 引入字体图标样式文件
import "../fonts/iconfont.css"
let theI = document.createElement("i")
theI.className = "iconfont icon-qq"
document.body.appendChild(theI)

// 9. 书写高版本的js语法 兼容低版本浏览器读取
const fn = () => {
  console.log("我是一个ES6箭头函数")
}
console.log(fn)