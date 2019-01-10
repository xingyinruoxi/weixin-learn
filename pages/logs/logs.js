//logs.js
const util = require('../../utils/util.js')

Page({
  pageData:{
    b:9
  },
  data: {
    logs: []
  },
  onLoad: function () {
    // console.log(this.pageData);
    console.log('logs页面正在加载')
    
  },
  onReady() {
    console.log('logs页面加载完成了')
  },
  onShow() {
    console.log('logs页面显示了')
  },
  onHide() {
    console.log('logs页面隐藏了')
  },
  onUnload() {
    console.log('logs页面卸载了')
  }
})
