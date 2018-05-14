<template>
  <div>
      <h1>{{$route.params.id}}</h1>
      <nuxt-link :to="{name:'index'}">首页</nuxt-link>
  </div>
</template>
<script>
  export default {
    validate ({ params }) {
      console.log(params)
      // Must be a number
      return /^\d+$/.test(params.id)
    },
    data(){
      return{
        title:this.$route.params.title
      }
    },
    head(){
      return{
        title:this.title,
        meta:[
          {
            hid:'云企汇小程序',
            name:'新闻大事件',
            content:'云企汇小程序正式推出了'
          }
        ]
      }
    }
  }
</script>
