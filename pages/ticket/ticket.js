var filmNullTip = {
  tipText: '还没有购买电影票哦',
  actionText: '去逛逛',
  routeUrl: '../../pages/popular/popular'
}
Page({
  data: {
    ticket_getting: [],
    person_favorite: [],
    show: 'ticket_getting',
    nullTip: filmNullTip
  },
  onLoad: function (options) {
    var that = this
    wx.getStorage({
      key: 'ticket_getting',
      success: function (res) {
        that.setData({
          ticket_getting: res.data
        })
      }
    })
    
    wx.stopPullDownRefresh()
  },
  viewFilmDetail: function (e) {
    var data = e.currentTarget.dataset
    wx.redirectTo({
      url: "../booking/booking?id=" + data.id
    })
  },
 
  changeViewType: function (e) {
    var data = e.currentTarget.dataset
    this.setData({
      show: data.type,
      nullTip: data.type == filmNullTip 
    })
  }
})
