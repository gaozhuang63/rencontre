var util = require('../../util/util')
Page({
  data:{
    name: '',
    nickName: '',
    gender: 0,
    ticketdate: '',
    genderArray: ['男', '女'],
    genderIndex: 0,
    age: 0,
    birthday: '',
    constellation: '',
    constellationArray: ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座'],
    constellationIndex: 0,
    company: '',
    school: '',
    tel: '',
    email:'',
    intro: '',
    birthdayEndDate: ''
  },
  onLoad:function(options){
    var birthdayEndDate = util.getDate()
    var ticketdate = util.getticketDate()
    var that = this
    wx.getStorage({
      key: 'person_info',
      success: function(res){
        var data = res.data
        that.setData({
          name: data.name,
          nickName: data.nickName,
          gender: data.gender,
          age: data.age,
          ticketdate: data.ticketdate,
          birthday: data.birthday,
          constellation: data.constellation,
          company: data.company,
          school: data.school,
          tel: data.tel,
          email: data.email,
          intro: data.intro,
          birthdayEndDate: data.birthdayEndDate
        })
      },
    })
  },
  
  savePersonInfo: function(e) {
    var data = e.detail.value
    console.log(data);
    wx.setStorage({
      key: 'person_info',
      data: {
        name: data.name,
        nickName: data.nickName,
        gender: data.gender,
        age: data.age,
        birthday: data.birthday,
        constellation: data.constellation,
        company: data.company,
        school: data.school,
        tel: data.tel,
        email:data.email,
        intro: data.intro
      },
      success: function(res){
        var reg = /^[\u4E00-\u9FA5]{2,6}$/;      //正则表达式 用于判断姓名输入是否合法
        var reg1 = /^[\u4E00-\u9FA5]{2,10}$/;      //正则表达式 用于判断昵称输入是否合法
        var reg2 = /^[\u4E00-\u9FA5]{0,30}$/; 
        var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/; //邮箱验证
        if (!reg.test(e.detail.value.name)) {
          wx.showToast({
            title: '请正确填写姓名！',
            image: '../../dist/images/error.png',
            mask: false,
            duration: 2000
          })
        }
        else if (!reg1.test(e.detail.value.nickName)) {
          wx.showToast({
            title: '请正确填写昵称！',
            image: '../../dist/images/error.png',
            mask: false,
            duration: 2000
          })
        }
        else if (!reg2.test(e.detail.value.company)) {
          wx.showToast({
            title: '请正确填写公司！',
            image: '../../dist/images/error.png',
            mask: false,
            duration: 2000
          })
        }
        else if (!reg2.test(e.detail.value.school)) {
          wx.showToast({
            title: '请正确填写学校！',
            image: '../../dist/images/error.png',
            mask: false,
            duration: 2000
          })
        }
        else if (e.detail.value.age>100){
          wx.showToast({
            title: '请正确填写年龄!',
            image: '../../dist/images/error.png',
            mask: false,
            duration: 2000
          })
        }
        else if (e.detail.value.tel.length != 11 || e.detail.value.tel < 10000000000 || e.detail.value.tel > 20000000000) {
          wx.showToast({
            title: '请正确填写手机号码！',
            image: '../../dist/images/error.png',
            mask: false,
            duration: 2000
          })
        }
        else if (!myreg.test(e.detail.value.email)) {
          wx.showToast({
            title: '请正确填写邮箱!',
            image: '../../dist/images/error.png',
            mask: false,
            duration: 2000
          })
        }
        else {
          wx.showToast({
            title: '保存成功！',
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
  changeGender: function(e) {
    console.log(e)
    var genderIndex = e.detail.value
    if (genderIndex != "null") {
      this.setData({
        genderIndex: genderIndex,
        gender: this.data.genderArray[this.data.genderIndex]
      })
    }
  },
  changeBirthday: function(e) {
    var birthday = e.detail.value
    if (birthday != "null") {
      this.setData(
        {birthday: birthday}
      )
    }
  },
  changeConstellation: function(e) {
    var constellationIndex = e.detail.value
    if (constellationIndex != "null") {
      this.setData({
        constellationIndex: constellationIndex,
        constellation: this.data.constellationArray[this.data.constellationIndex]
      })
    }
  }
})