import Dialog from '../../miniprogram_npm/vant-weapp/dialog/dialog';
import Toast from '../../miniprogram_npm/vant-weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:null,
    openid:null,
    banner:[]
  },
 
  /**
   * 点击加入活动
   */
  handleSubmit:function(){
    Dialog.confirm({
      title: '确认信息',
      message: '你确认加入本次活动吗qwq确认后不可以取消的哦'
    })
    console.log(this.data.openid)
  },
/**
 * dialog确认和取消按钮绑定的事件
 */
  onCancle:function(){
    Dialog.close()
    
  },
  onConfirm: function () {
    wx.showLoading({
      title: '正在提交请求'
    })
    //获取用户openid
    wx.login({
      success: res => {
        var code = res.code;
        if (code) {
          wx.request({
            url: 'https://test.xiekeyi98.com/user/',
            data: JSON.stringify({
              nickName: this.data.userInfo.nickName,
              avatarUrl: this.data.userInfo.avatarUrl,
              gender: this.data.userInfo.gender,
              code: code
            }),
            method: 'POST',
            header: {
              'content-type': 'application/json'
            },
          })
        } else {
          console.log('获取用户登录失败：' + res.errMsg);
        }
      }
    })
    //修改数据库信息 需要人数-- 现有人数++
    wx.hideLoading()
    Dialog.close()
    Toast('成功加入活动')
    setTimeout(function () {
      //要延时执行的代码
      wx.navigateBack({
        delta: 1
      })
    }, 2000) //延迟时间 这里是1秒
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.setData({
      id: options.activityUserId
    })
    console.log("id"+this.data.id),
    reda(this, 'banner');
  },

})
function reda(_self, type) {
  console.log("now"+_self.data.id),
  wx.request({
    url: 'https://test.xiekeyi98.com/activity/'+_self.data.id+'/', //仅为示例，并非真实的接口地址
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
