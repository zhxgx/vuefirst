import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


import home from '../pages/home.vue';
import news from '../pages/news.vue';
import detail from '../pages/detail.vue';
import user from '../pages/user.vue';
import login from '../pages/login.vue';
import reg from '../pages/reg.vue';
import error from '../pages/error.vue';

let routes = [
  {path:'/home',component:home},
  {path:'/news',component:news},
  {path:'/detail',component:detail},
  {path:'/login',component:login},
  {path:'/reg',component:reg},
  {path:'/user',component:user},
  {path:'/',redirect:'/home'},
  {path:'*',component:error},
  {
        path: '/detail/:id',
        name: "news",
        component:news 
  }
];

let router = new VueRouter({routes});

export default router;