import Dialog from '../../miniprogram_npm/vant-weapp/dialog/dialog';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:null
  },
  /**
   * 点击加入活动
   */
  handleSubmit:function(){
    Dialog.confirm({
      title: '确认信息',
      message: '你确认加入本次活动吗qwq确认后不可以取消的哦'
    })
  },
/**
 * dialog确认和取消按钮绑定的事件
 */
  onCancle:function(){
    Dialog.close()
    
  },
  onConfirm: function () {
    wx.showLoading({
      title: '正在提交'
    })
    //修改数据库信息 需要人数-- 现有人数++
    wx.hideLoading()
    Dialog.close()
    wx.redirectTo({
      url: '/pages/activityDetail/activityDetail?activityUserId=50',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.setData({
      id: options.activityUserId
    })
  },

})