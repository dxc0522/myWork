<template>
  <section class="container">
    <div>
      <app-logo/>
      <ul>
        <li>
          <nuxt-link :to="{name:'index'}">首页</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{name:'about'}">关于我们</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{name:'news',params:{newsId:2134}}">新闻</nuxt-link>
        </li>
      </ul>
      <h1>姓名：{{info.name}}</h1>
      <h2>年龄：{{info.age}}</h2>
      <h2>兴趣：{{info.interest}}</h2>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
  import AppLogo from "~/components/AppLogo.vue";

  export default {
    components: {
      AppLogo
    },
    data(){
      return{

      }
    },
    async asyncData(){
      let {data}=await axios.get('https://api.myjson.com/bins/eqv42')
      return {info: data}

    }
  };
</script>

<style>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
