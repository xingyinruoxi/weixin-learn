//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  // tab之间的切换,不会让页面重新加载，当然也不会卸载了，只会显示隐藏
  // 在用NavigatorTo跳转的目标页会另加载，跳转之前的页面会隐藏
  // 回退（NavigatorBack）,目标页面会被显示（show）,不会加载，回退之前的页面会被卸载


  onLoad(){
    console.log('index页面正在加载 onLoad')
  },
  onReady(){
    console.log('index页面加载完成了 onReady')
  },
  onShow(){
    console.log('index页面显示了 onShow')
  },
  onHide(){
    console.log('index页面隐藏了 onHide')
  },
  onUnload(){
    console.log('index页面卸载了 onUnload')
  }
})
