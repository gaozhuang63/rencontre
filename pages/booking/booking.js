Page({
  data: {
    cells: []
  },
  onLoad: function (options) {
    var that = this
    wx.getStorage({
      key: 'booking_ticket',
      success: function (res) {
        var data = res.data
        var cells = [[],[],[]]
        cells[0].push({ title: '姓名', text: data.name == '' ? '未填写' : data.name, access: false, fn: '' })
        cells[0].push({ title: '订票时间', text: data.ticketdate == '' ? '未填写' : data.ticketdate, access: false, fn: '' })
        cells[0].push({ title: '座位信息', text: data.position == '' ? '未填写' : data.position, access: false, fn: '' })
        cells[0].push({ title: '购票价格', text: data.money == '' ? '未填写' : data.money, access: false, fn: '' })
        cells[0].push({ title: '支付方式', text: data.taking == '' ? '未填写' : data.taking, access: false, fn: '' })
        cells[0].push({ title: '手机号码', text: data.tel == '' ? '未填写' : data.tel, access: false, fn: '' })
        that.setData({
          cells: cells
        })
      }
    })
   




  }
})