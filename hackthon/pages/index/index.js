//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=919646662,166522488&fm=26&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2100067790,1782582700&fm=26&gp=0.jpg',
      'https://cdn-images-1.medium.com/max/1600/1*Y7cuggpW2zltTN-E41CwIw.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    id:20,
    banner:[],
    statusid:null,
    msg:'',
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    console.log("hello")
    console.log(this.data.banner)
    reda(this, 'banner');
  },
  buttonListener:function(){
    var that = this
    wx.navigateTo({
      url: '/pages/activityDetail/activityDetail?activityUserId='+that.data.id
    })
  }
})
function reda(_self, type) {
  wx.request({
    url: 'https://test.xiekeyi98.com/activity/list/',
    header: {
      'content-type': 'application/json'
    },

    success: function (res) {
      console.log(res.data);
      _self.setData({
      
        "banner": res.data.data,
      
      });
    }
  })
}
