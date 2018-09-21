var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    tabs: ["待付款", "已付款"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    All: {
      receivables_list: [
        {
          id: '001',
          name:'张三',
          tel:'13912341234',
          applyCash:'已申请现金提现',
          common:'2',
          consumptionAmount:'10000.00',
          returnPoint: '17%',
          alreadyPaid: '780000.00',
          time: '2018/08/10 9:00',
          address:'仁川市XXX路3路市XXX路3路市XXX路3路',
          applyCard:'已申请银行卡提现',
          noCash:'未申请提现',
          scavenging:'扫码付款'
        }, {
          id: '002',
          name: '张三',
          tel: '13912341234',
          applyCash: '已申请现金提现',
          common: '2',
          consumptionAmount: '10000.00',
          returnPoint: '17%',
          alreadyPaid: '780000.00',
          time: '2018/08/10 9:00',
          address: '仁川市XXX路3路市XXX路3路市XXX路3路',
          applyCard: '已申请银行卡提现',
          noCash: '未申请提现',
        }, {
          id: '003',
          name: '张三',
          tel: '13912341234',
          applyCash: '已申请现金提现',
          common: '2',
          consumptionAmount: '10000.00',
          returnPoint: '17%',
          alreadyPaid: '780000.00',
          time: '2018/08/10 9:00',
          address: '仁川市XXX路3路市XXX路3路市XXX路3路',
          applyCard: '已申请银行卡提现',
          noCash: '未申请提现',
        }, {
          id: '004',
          name: '张三',
          tel: '13912341234',
          applyCash: '已申请现金提现',
          common: '2',
          consumptionAmount: '10000.00',
          returnPoint: '17%',
          alreadyPaid: '780000.00',
          time: '2018/08/10 9:00',
          address: '仁川市XXX路3路市XXX路3路市XXX路3路',
          applyCard: '已申请银行卡提现',
          noCash: '未申请提现',
        }
        ],
      total: {
        strip: '3',
        money: '3000.00',
        receivables: '8000.00'
      }
    }
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
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
          icon: 'success',
          duration: 2000
        })
      },
      complete: (res) => {
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