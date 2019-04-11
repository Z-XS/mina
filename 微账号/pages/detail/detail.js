// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    unlock: false,
    record: { id: 0, name: '', value: '' }
  },
  target: function () {
    this.setData({
      unlock: !this.data.unlock
    })
    console.log(this.data.unlock)
  },
  copyBtn: function(e) {
    wx.setClipboardData({
      data: '123'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let detailStorage = wx.getStorageSync('account_password')
    if(!detailStorage) {
      wx.setStorageSync('account_password',[])
    }
  },
  saveRecord: function (e) {
    console.log(e.detail.value)
    const val = e.detail.value
    wx.getStorage({
      key: 'account_password',
      success: function(res) {
        const arr = res.data
        val.id = arr.length
        arr.push(val)
        console.log(res)
        wx.setStorage({
          key: 'account_password',
          data: arr,
        })
      }
    })
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