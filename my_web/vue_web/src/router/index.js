import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import html from '@/pages/html/html'
import js from '@/pages/js/js'
import php from '@/pages/php/php'
import xcx from '@/pages/xcx/xcx'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/html',
      name: 'html',
      component: html
    },
    {
      path: '/js',
      name: 'js',
      component: js
    },
    {
      path: '/php',
      name: 'php',
      component: php
    },
    {
      path: '/xcx',
      name: 'xcx',
      component: xcx
    },
  ]
})
