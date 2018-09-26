// pages/paymentDetails/paymentDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    All: {
      detailsList: [{
        id: '001',
        tiem: '2018/08/10 9:00',
        money: '1000.00',
        returnPoint: '15%',
        receivables: '150.00',
        cardImg: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/PurchasingAssistantWorkbench/home_bg.jpg',
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
        time: '2018/09/10 9:00'
      },
      isshow: '',
      cardImg:'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/PurchasingAssistantWorkbench/home_bg.jpg',
      imgArr: [
        'http://bpic.588ku.com/element_origin_min_pic/16/10/30/528aa13209e86d5d9839890967a6b9c1.jpg',
      ],
      title:'李四/13911078862-银行卡付款已完成'
    },
    
  },
  previewImg: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.All.imgArr;
    console.log(imgArr)
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式
      // success: function (res) { },
      // fail: function (res) { },
      // complete: function (res) { },
    })
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
  setModalStatus: function (e) {
    console.log("设置显示状态，1显示0不显示", e.currentTarget.dataset.status);
    if (e.currentTarget.dataset.status == 1) {
      this.setData(
        {
          showModalStatus: true
        }
      );
    }
    setTimeout(function () {
      if (e.currentTarget.dataset.status == 0) {
        this.setData(
          {
            showModalStatus: false
          }
        );
      }
    }.bind(this), 200)
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      isshow:options.num
    })
    if (this.data.isshow == 1) {
      wx.setNavigationBarTitle({
        title: '已付款业务详情'
      })
    } else {
      wx.setNavigationBarTitle({
        title: '待付款业务详情'
      })
    }
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