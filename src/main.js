import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/sass/style.scss'
import MasonryWall from '@yeger/vue2-masonry-wall'

Vue.use(MasonryWall)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
