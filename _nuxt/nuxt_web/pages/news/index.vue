<template>
  <div>
    <h1>这个是新闻页面</h1>
    <h2>{{$route.params.newsId}}</h2>
    <ul>
      <li><a href="/">首页</a></li>
      <li><nuxt-link :to="{name:'news-id',params:{id:123}}">新闻123</nuxt-link></li>
      <li><nuxt-link :to="{name:'news-id',params:{id:456}}">新闻456</nuxt-link></li>
      <li><nuxt-link :to="{name:'news-id',params:{title:'这个是新闻title',id:123}}">新闻title</nuxt-link></li>
    </ul>
  </div>
</template>
<script>
  export default {};
</script>

