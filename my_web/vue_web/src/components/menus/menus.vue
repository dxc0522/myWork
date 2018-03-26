<template>
  <div class="menus dis_f ali_ct jus_bt">
    <router-link to="/html">
      <div class="menus_each">
        <div class="menus_icon">
          <i class="icon-h5 iconfont"></i>
        </div>
        <p>H5</p>
      </div>
    </router-link>
    <router-link to="/js">
      <div class="menus_each">
        <div class="menus_icon">
          <i class="icon-js iconfont"></i>
        </div>
        <p>js</p>
      </div>
    </router-link>
    <router-link to="/xcx">
      <div class="menus_each">
        <div class="menus_icon">
          <i class="icon-xiaochengxu iconfont"></i>
        </div>
        <p>小程序</p>
      </div>
    </router-link>
    <router-link to="/php">
      <div class="menus_each">
        <div class="menus_icon">
          <i class="icon-php iconfont"></i>
        </div>
        <p>php</p>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "menus",
    data() {
      return {
        /*menus:[
          {
            name:"H5",
            icon:"<i  class=\"icon-h5 iconfont\"></i>"
          },
          {
            name:"Js",
            icon:"<i  class=\"icon-js iconfont\"></i>"
          },
          {
            name:"小程序",
            icon:"<i  class=\"icon-xiaochengxu iconfont\"></i>"
          },
          {
            name:"PHP",
            icon:"<i  class=\"icon-php iconfont\"></i>"
          }
        ]*/
      }
    }
  }
</script>

<style lang="less" rel="stylesheet">
  .menus {
    width: 100%;
    background: #fff;
    font-size: .2rem;
    padding: .2rem .6rem 0;
    .menus_each {
      width: 1.5rem;
      height: 1rem;
      .menus_icon {
        width: 100%;
        height: .6rem;
        text-align: center;
        line-height: .6rem;
        i {
          display: inline-block;
          font-size: .6rem;
          color: red;
        }
      }
      p {
        text-align: center;
        line-height: .4rem;
        color: #000;
        font-size: .3rem;
      }
      &:hover {
        background: blue;
      }
    }
  }
</style>
