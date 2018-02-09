// pages/components/components.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    getData:{
      type:null,
      observer(newVal,oldVal){
        console.log(newVal, oldVal)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _click() {
      console.log(123)
    },
    onTap: function () {
      var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('myevent', myEventDetail, myEventOption)
    }
  }
})
