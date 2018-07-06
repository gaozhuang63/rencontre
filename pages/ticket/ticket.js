var filmNullTip = {
  tipText: '亲，找不到电影的收藏',
  actionText: '去逛逛',
  routeUrl: '../../pages/popular/popular'
}
var personNullTip = {
  tipText: '亲，找不到人物的收藏',
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
    /*wx.getStorage({
      key: 'person_favorite',
      success: function (res) {
        that.setData({
          person_favorite: res.data
        })
      }
    })*/
    wx.stopPullDownRefresh()
  },
  viewFilmDetail: function (e) {
    var data = e.currentTarget.dataset
    wx.redirectTo({
      url: "../booking/booking?id=" + data.id
    })
  },
  /*viewPersonDetail: function (e) {
    var data = e.currentTarget.dataset
    wx.redirectTo({
      url: "../personDetail/personDetail?id=" + data.id
    })
  },*/
  changeViewType: function (e) {
    var data = e.currentTarget.dataset
    this.setData({
      show: data.type,
      nullTip: data.type == 'ticket_getting' ? filmNullTip : personNullTip
    })
  }
})
