// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account: [
      '我的密码',
      '游戏'
    ],
    searchAccount: []
  },
  bindSearch: function (e) {
    console.log(e.detail.value)
    const res = e.detail.value
    let searchAccount
    // if(res.trim()) {
    //    searchAccount = this.data.account.filter(val => val.indexOf(res) != -1)
    // }else {
    //    searchAccount = this.data.account
    // }
    searchAccount = this.data.account.filter(val => val.indexOf(res.trim()) != -1)
    this.setData({
      searchAccount
    })
  },
  // bindGetUserInfo: function(e) {
  //   console.log(e)
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      searchAccount : this.data.account
    })
    // wx.getUserInfo({
    //   success(res){
    //     console.log(res)
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})