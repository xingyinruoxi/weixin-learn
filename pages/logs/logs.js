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
    console.log(this.pageData)
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
