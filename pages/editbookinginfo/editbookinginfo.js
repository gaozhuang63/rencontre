var util = require('../../util/util')
Page({
  data: {
    name: '',
    ticketdate: '',
    gender: 0,
    genderArray: ['微信支付', '现场支付'],
    genderIndex: 0,
    positionArray: [
      [
        {
          id: 0,
          name: '一列'
        },
        {
          id: 1,
          name: '二列'
        },
        {
          id: 2,
          name: '三列'
        },
        {
          id: 3,
          name: '四列'
        },
        {
          id: 4,
          name: '五列'
        },
        {
          id: 5,
          name: '六列'
        },
        {
          id: 6,
          name: '七列'
        },
        {
          id: 7,
          name: '八列'
        },
        {
          id: 8,
          name: '九列'
        }
      ], [
        {
          no: 0,
          name: '一行'
        },
        {
          no: 1,
          name: '二行'
        },
        {
          no: 2,
          name: '三行'
        },
        {
          no: 3,
          name: '四行'
        },
        {
          no: 4,
          name: '五行'
        },
        {
          no: 5,
          name: '六行'
        },
        {
          no: 6,
          name: '七行'
        },
        {
          no: 7,
          name: '八行'
        },
        {
          no: 8,
          name: '九行'
        }
      ]
    ],
    position: [0, 0],
    money:  '',
    tel: ''
  },
  
  onLoad: function (options) {
    var birthdayEndDate = util.getticketDate()
    var ticketdate = util.getticketDate()
  
    var that = this
    wx.getStorage({
      key: 'booking_ticket',
      success: function (res) {
        var data = res.data
        that.setData({
          name: data.name,
          ticketdate: data.ticketdate,
          taking: data.taking,
          money: data.money,
          position:data.position,
          tel: data.tel,
        })
      }
    })
  },
  savebooking: function (e) {
    var data = e.detail.value
    console.log(data);
    wx.setStorage({
      key: 'booking_ticket',
      data: {
        name: data.name,
        ticketdate: data.ticketdate,
        taking: data.taking,
        money: data.money,
        position: data.position,
        tel: data.tel,
      },
      success: function (res) {
        
        if (e.detail.value.name.length == 0 || e.detail.value.ticketdate.length == 0 || e.detail.value.taking.length == 0 || e.detail.value.position.length == 0 || e.detail.value.tel.length == 0) {
          wx.showToast({
            title: '请完整填写信息！',
            image: '../../dist/images/error.png',
            mask: false, 
            duration: 2000
          })
        }else {  
        wx.showToast({
          title: '购买成功！',
          icon: 'success',
          duration: 2000
        })
        setTimeout(function () {
          wx.navigateTo({
            url: '../ticket/ticket'
          })
        }, 2000)

        }
      }
    })
  },

  
  bindMultiPickerChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      position: e.detail.value
    })
  },


  changeGender: function (e) {
    console.log(e)
    var genderIndex = e.detail.value
    if (genderIndex != "null") {
      this.setData({
        genderIndex: genderIndex,
        taking: this.data.genderArray[this.data.genderIndex]
      })
    }
  },


  
  changedate: function (e) {
    var ticketdate = e.detail.value
    if (ticketdate!= "null") {
      this.setData(
        { ticketdate: ticketdate }
      )
    }
  }
})