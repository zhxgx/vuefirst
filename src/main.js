import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//引入路由
import router from './plugins/router';

//引入axios
import  './plugins/axios';

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
