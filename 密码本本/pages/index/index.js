const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    isFocus: true,
    oldPasswd: "",
    // 用户输入得解锁码
    passwd: "",
    firstUse: true
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    // 从本地缓存获得之前设置的解锁码
    const oldPasswd = wx.getStorageSync('oldPasswd')
    if (oldPasswd == '') {
      this.setData({firstUse: true})
    }else{
      this.setData({
        oldPasswd: oldPasswd,
        firstUse: false
      })
    }
  },
  getUserInfo: function(e) {   
    console.log(e)
    // app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  // 解锁码输入
  passwdInput(e) {
    var that = this;
    console.log(e.detail.value);
    var inputValue = e.detail.value;
    that.setData({
      passwd: inputValue,
    })
    if(inputValue.length == 4) {
      if(that.data.firstUse) {
        wx.redirecTo({
          key: 'oldPasswd',
          data: inputValue
        })
      } else{
        if (inputValue != that.data.oldPasswd) {
          wx.showToast({
            title: '密码错误，请重试',
            icon: 'none',
            duration: 1500
          })
          that.setData({passwd: ''})

          // 查询是否已经输入错误一次了，如果有则清空数据，否则删除上回错误标记
          const tried = wx.getStorageSync('wrong_password')
          if (tried) {
            wx.clearStorageSync()
            wx.showToast({
              title: '密码连续两次错误，清空数据',
              icon: 'none',
              duration: 1500
            })
          }else{
            wx.setStorageSync('wrong_password', true)
          }
          return
        }
      }
      wx.redirectTo({
        url: '../list/list'
      })
      wx.removeStorageSync('wrong_password')
    }
  },
  Tap() {
    var that = this;
    that.setData({
      isFocus: true,
    })
  }
})