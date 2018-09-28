// pages/registeredSalesperson/registeredSalesperson.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    language: '',
    languages: ['zh', 'ko'],
    langIndex: 0,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    num: '',
    title:'注册成为流连业务员'
  },
  userNumInput: function (e) {
    this.setData({
      num: e.detail.value
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  bindGetUserInfo: function (e) {
    var that = this;
    //此处授权得到userInfo
    console.log(e.detail.userInfo);
    //接下来写业务代码

    //最后，记得返回刚才的页面
    // wx.navigateBack({
    //   delta: 1
    // })
    // wx.navigateTo({
    //   url: '../receivablesBusiness/receivablesBusiness',
    // })
    // wx.switchTab({
    //   url: '../homePage/homePage',
    // })
  },


  formSubmit: function (e) {

    console.log('app.globalData.userInfo，携带数据为：', app.globalData.userInfo)

    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    if (!!e.detail.value && app.globalData.userInfo.nickName){
      app.Ajax(
        // 方法组名称为：User（代购用户），不是系统通用用户Users
        'Users',
        'POST',
        'StaffReg',
        { staffCode: e.detail.value.num, ...app.globalData.userInfo },
        function (json) {
          // console.log('json',json);
          if (json.success) {
            wx.switchTab({
              url: '../homePage/homePage',
            })
          } else {
            app.Toast('', 'none', 3000, json.msg.code);
          }
        }
      )
    }
    

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log({ ...app.globalData.userInfo})
  },
  setLanguage() {
    this.setData({
      index: wx.T.getLanguage().index
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