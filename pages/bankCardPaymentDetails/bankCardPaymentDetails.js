
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ifpay:0,
    getData: {},
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
    if (params.ifpay == 0) {
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
      { guid: params.guid, payType: 1 },
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