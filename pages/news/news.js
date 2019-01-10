const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  onLoad: function () {
    console.log('news页面正在加载')

  },
  onReady() {
    console.log('news页面加载完成了')
  },
  onShow() {
    console.log('news页面显示了')
  },
  onHide() {
    console.log('news页面隐藏了')
  },
  onUnload() {
    console.log('news页面卸载了')
  }
})