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
          name:'1张三',
          tel:'13912341234',
          applyCash:'银行卡付款已完成',
          common:'2',
          consumptionAmount:'10000.00',
          returnPoint: '17%',
          alreadyPaid: '780000.00',
          time: '2018/08/10 9:00',
          address:'仁川市XXX路3路市XXX路3路市XXX路3路',
          applyCard:'已申请银行卡提现',
          noCash:'未申请提现',
          scavenging:'扫码付款',
          cardImg: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/PurchasingAssistantWorkbench/home_bg.jpg',
        }, {
          id: '002',
          name: '2张三',
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
          cardImg: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/PurchasingAssistantWorkbench/home_page_icon_planetbg@3x.png',
        }, {
          id: '003',
          name: '3张三',
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
          cardImg: 'http://bpic.588ku.com/element_origin_min_pic/16/10/30/528aa13209e86d5d9839890967a6b9c1.jpg',
        }
        ],
      total: {
        strip: '3',
        money: '3000.00',
        receivables: '8000.00'
      },
      num:'',
      imgArr: [
        'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/PurchasingAssistantWorkbench/home_bg.jpg'
      ]
    }
  },
  previewImg: function (e) {
    //console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.All.receivables_list;
    var shu = new Array()
     console.log(shu)
    // console.log(imgArr[index].cardImg)
    //var str = imgArr[index].cardImg
    var shua = shu.push(imgArr[index].cardImg)
    //console.log(shua)
    //console.log(imgArr[index].cardImg)
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      //urls: imgArr,               //所有要预览的图片的地址集合 数组形式
      urls: shu,               //所有要预览的图片的地址集合 数组形式

      // success: function (res) { },
      // fail: function (res) { },
      // complete: function (res) { },
    })
  },

  next(e){
    var num = this.data.activeIndex;
    console.log(num)
    wx.navigateTo({
      url: '../paymentDetails/paymentDetails?num=' + this.data.activeIndex,
    })
  },
  card(){
    
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
  search: function (e) {
    console.log('e', e.detail.value)

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