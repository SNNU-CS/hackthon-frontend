// pages/edit/addActivity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "组局！",
    param: { "title": "",
           "description": "",
           "number": "",
           "location": "",},
    time: new Date().getTime(),
  },

  onInput(event) {
    var date = new Date(event.detail);
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = date.getDate() + ' ';
    var h = date.getHours() + ':';
    var m = date.getMinutes() + ':';
    var s = date.getSeconds();
    this.data.time = Y + M + D + h + m + s;
    wx.showToast({
      title: '时间确认成功',
      icon: 'success',
      duration: 1000
    })
  },

  addActivity: function () {
    wx.request({
      url: 'http://148.70.15.188:8000/activity/',
      data: JSON.stringify({
            title: this.data.param['title'],
            description: this.data.param['description'],
            time: this.data.time,
            // number: this.data.param['number'],
            location: this.data.param['location']}),
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      }, // 设置请求的 header
      success: function (res) {
        if(res.data.status == 403){
          wx.showModal({
            content: '请将活动内容填写完整',
            showCancel: false,
          })
        } else {
          wx.showModal({
            title: '组局成功~',
            content: '将去往个人中心',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                wx.switchTab({
                  url: '../personal_center/index',
                });
              }
            }
          })
        }
        // success
      },
    })
  },

  onChange(event) {
    this.data.param[event.currentTarget.id] = event.detail;
  }
})