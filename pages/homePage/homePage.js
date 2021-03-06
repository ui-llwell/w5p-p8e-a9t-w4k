// pages/homePage/homePage.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //添加消费记录扫描二维码 成功或失败
  toSweepOrder: function () {
    var that = this;
    var show;
    wx.scanCode({
      success: (res) => {
        app.Ajax(
          'Staff',
          'POST',
          'ScanTheCode',
          { scanCode: res.result },
          function (json) {
            console.log('sss',json);
            if (json.success) {
              wx.navigateTo({
                url: '../QRCodePayment/QRCodePayment?SweepCodeResults=' + JSON.stringify({ ...json.data, scanCode: res.result}),
              })
            }else{
              app.Toast('','none',2500,json.msg.code)
            }
          }
        )



        // console.log(res)
        // this.show = "结果:" + res.result + "二维码类型:" + res.scanType + "字符集:" + res.charSet + "路径:" + res.path;
        // that.setData({
        //   show: this.show
        // })
        // wx.showToast({
        //   title: '成功',
        //   icon: 'success',
        //   duration: 2000
        // })
        

      },
      fail: (res) => {
        wx.showToast({
          title: '失败',
          icon: 'loading',
          duration: 2000
        })
      },
      complete: (res) => {
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onload',options)
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