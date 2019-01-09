//app.js
App({
  onLaunch: function () {
    console.log('小程序启动了')
  },
  onShow(){
    console.log('小程序在前台运行了')
  },
  onHide(){
    console.log('小程序在后台运行了')
  },
  gloData:{
    a:4
  }
})