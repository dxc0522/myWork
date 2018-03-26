<template>
  <div>
    <v-head></v-head>
    <menus></menus>
    <lunbo :listImg="lunboImg"></lunbo>
  </div>
</template>

<script>
  import Vhead from '@/components/head/head';
  import menus from "@/components/menus/menus";
  import lunbo from '@/components/lunbo/lunbo';
  import banner1 from '../../../static/img/21352730423103.jpg';
  import banner2 from '../../../static/img/21352734823100.jpg';
  import banner3 from '../../../static/img/picture.png';

  export default {
    name: "home",
    data() {
      return {
        lunboImg: [banner1, banner2, banner3]
      }
    },
    components: {
      "v-head": Vhead,
      'menus': menus,
      'lunbo':lunbo
    }
  }
</script>

<style scoped>

</style>
