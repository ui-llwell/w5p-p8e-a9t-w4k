const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isshow:'',
    All: {
      detailsList: [{
        id:'001',
        tiem:'2018/08/10 9:00',
        money:'1000.00',
        returnPoint:'15%',
        receivables:'150.00'
      }, {
          id: '002',
          tiem: '2018/09/10 9:00',
          money: '2000.00',
          returnPoint: '25%',
          receivables: '450.00'
        }, {
          id: '003',
          tiem: '2018/10/10 9:00',
          money: '3000.00',
          returnPoint: '35%',
          receivables: '350.00'
        }, {
          id: '003',
          tiem: '2018/10/10 9:00',
          money: '3000.00',
          returnPoint: '35%',
          receivables: '350.00'
        }],
      total: {
        strip: '3',
        money: '3000.00',
        receivables: '8000.00',
        time:'2018/09/10 9:00'
      },
      title:'韩国东大门3号店-待收款'
    }
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
    console.log(options)
    this.setData({
      isshow: options.collection || options.num
      
    })
    if (this.data.isshow == 1) {
      wx.setNavigationBarTitle({
        title: '已收款业务详情'
      })
    } else {
      wx.setNavigationBarTitle({
        title: '待收款业务详情'
      })
    }
    //console.log(isshow)
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