// pages/QRCodePayment/QRCodePayment.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    receivablesLabel:['收款','付款'],
    sweepCodeResults:{
      resultType:'',
      resultKey:'',
      resultTitle: '',
      resultMoney: '',
      resultUser:'',
      scanCode:'',
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('~',options)
    this.setData({
      sweepCodeResults: JSON.parse(options.SweepCodeResults)
    },()=>{
      console.log('ff', this.data.sweepCodeResults)
    })
  },
  ensure: function (op){
    let resultType = op.currentTarget.dataset.resulttype
    // console.log('op', op.currentTarget.dataset.resulttype)
    // 收款业务
    if (resultType=='SHOP'){
      app.Ajax(
        'Staff',
        'POST',
        'ShopPay',
        {
          scanCode: this.data.sweepCodeResults.scanCode,
          shopId: this.data.sweepCodeResults.resultKey,
          shopUserId: this.data.sweepCodeResults.resultUser,
         },
        function (json) {
          // console.log('jsonsss',json);
          if (json.success) {
            app.Toast('收款成功','success',2000)
            setTimeout(function(){
              wx.navigateBack({
                delta:1
              })
            },2000)
          } else {
            app.Toast('', 'none', 2500,json.msg.code)
          }
        }
      )
    } else if (resultType =='USER'){
      console.log('付款业务')
      app.Ajax(
        'Staff',
        'POST',
        'UserPay',
        {
          scanCode: this.data.sweepCodeResults.scanCode,
          guid: this.data.sweepCodeResults.resultKey,
          userId: this.data.sweepCodeResults.resultUser,
        },
        function (json) {
          // console.log('jsonsss',json);
          if (json.success) {
            app.Toast('付款成功', 'success', 2000)
            setTimeout(function () {
              wx.navigateBack({
                delta: 1
              })
            }, 2000)
          } else {
            app.Toast('', 'none', 2500, json.msg.code)
          }
        }
      )
    }
  },
  checkDetail: function (e) {
    let resultType = e.currentTarget.dataset.resulttype
    if (resultType == 'SHOP'){
      wx.navigateTo({
        url: '../receivablesDetails/receivablesDetails?params=' + JSON.stringify(e.currentTarget.dataset),
      })
    } else if (resultType == 'USER'){
      wx.navigateTo({
        url: '../paymentDetails/paymentDetails?params=' + JSON.stringify(e.currentTarget.dataset),
      })
    }
    // console.log('qqq', e.currentTarget)
    
  },
})