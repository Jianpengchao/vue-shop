//引入vue
import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';
//第三方库需要use一下才能用
Vue.use(VueRouter)
//引用page1页面
// import login  from './views/login/login.vue';
import home  from './views/home.vue';
import layout  from './layout'

import systemRouter from './router/modules/first.js'
export const asyncRoutes = [
  systemRouter
]
const routes = [
  {
    path: '/',
    redirect: '/index/page1'
  },
  {
    path: '/index',
    name: 'layout',
    component: layout,
    children: [
      {
        path:"page1",
        component: () => import('./views/page1.vue')
      },
      {
        path:"fenlei",
        name:"fenlei",
        component:() => import('./views/fenlei.vue'),
        children:[
           {
        path:"page2",
        component:() => import('./views/page2.vue')
      },
        ]
      },
      {
        path:"user",
       component:() => import('./views/user.vue')

      },
      {
        path:"goods",
        component:() => import('./views/goods.vue')
      },
      {
        path:"userInfo",
        component:() => import('./views/userInfo.vue')

      },
    ]
  },
 
]

//实例化VueRouter并将routes添加进去
const router=new VueRouter({
//ES6简写，等于routes：routes
  mode: 'history',
  routes
});

//抛出这个这个实例对象方便外部读取以及访问
export default router
