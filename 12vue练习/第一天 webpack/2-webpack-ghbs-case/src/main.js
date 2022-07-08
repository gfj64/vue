// 引入jquery
import $ from 'jquery'
$(function() {
  $('#app li:nth-child(odd)').css('color', 'red') // 奇数红色
  $('#app li:nth-child(even)').css('color', 'green') // 偶数绿色
})