//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  onLoad(){
    console.log('index页面正在加载')
  },
  onReady(){
    console.log('index页面加载完成了')
  },
  onShow(){
    console.log('index页面显示了')
  },
  onHide(){
    console.log('index页面隐藏了')
  },
  onUnload(){
    console.log('index页面卸载了')
  }
})
