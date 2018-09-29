// pages/paymentDetails/paymentDetails.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ifpay:0,
    getData:{},
  },
  
  //添加消费记录扫描二维码 成功或失败
  toSweepOrder: function () {
    var that = this;
    var show;
    wx.scanCode({
      success: (res) => {
        this.show = "结果:" + res.result + "二维码类型:" + res.scanType + "字符集:" + res.charSet + "路径:" + res.path;
        that.setData({
          show: this.show
        })
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
        wx.navigateTo({
          url: '../QRCodePayment/QRCodePayment',

        })

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

    const that = this;
    const params = JSON.parse(options.params)
    // console.log('asdadsads', params)
    this.setData({
      ifpay: params.ifpay
    })
    if (params.ifpay==0) {
      wx.setNavigationBarTitle({
        title: '待付款业务详情'
      })
    } else if (params.ifpay == 1) {
      wx.setNavigationBarTitle({
        title: '已付款业务详情'
      })
    }
    app.Ajax(
      'Staff',
      'POST',
      'GetUserPayRecordList',
      { guid: params.guid, payType:0 },
      function (json) {
        // console.log('guid', json);
        if (json.success) {
          that.setData({
            getData: json.data
          })
        } else {
          app.Toast('', 'none', 2500, json.msg.code)
        }
      }
    )
  },
})