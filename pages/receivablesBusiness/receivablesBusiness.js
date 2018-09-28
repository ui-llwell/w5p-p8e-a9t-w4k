// pages/receivablesBusiness/receivablesBusiness.js
var app = getApp();
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // inputShowed: false,
    // inputVal: "",
    tabs: ["待收款", "已收款"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    getData:{},
    noRecord:'您还没有相关记录哦'
  },
 
  next: function(){
    var num = this.data.activeIndex
    wx.navigateTo({
      url: '../receivablesDetails/receivablesDetails?collection=' + num,
    })
    console.log(num)
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
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getData()
  },
  getData:function(){
    const that = this;
    app.Ajax(
      'Staff',
      'POST',
      'GetGatherList',
      { },
      function (json) {
        // console.log('getData',json);
        if (json.success) {
          that.setData({
            getData:json.data
          })
        } else {
          app.Toast('','none',2500,json.msg.code)
        }
      }
    )
  },
  getPayRecordList:function(e){
    // console.log('e', e.currentTarget.dataset.shopid)
    wx.navigateTo({
      url: '../receivablesDetails/receivablesDetails?params=' + JSON.stringify(e.currentTarget.dataset),
    })
  },
  getPaidRecordList: function (e) {
    // console.log('e', e.currentTarget.dataset.shopid)
    wx.navigateTo({
      url: '../receivablesDetails/receivablesDetails?params=' + JSON.stringify(e.currentTarget.dataset),
    })
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