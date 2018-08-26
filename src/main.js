import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.config.productionTip = false

Vue.directive('theme', {
  bind (el, binding, vnode) {
    if (binding.value === 'wide') {
      el.style.maxWidth = '1000px'
    } else if (binding.value === 'narrow') {
      el.style.maxWidth = '600px'
    }
    if (binding.arg === 'column') {
      el.style.background = '#E6E6FA'
      el.style.padding = '20px'
    }
  }
})

Vue.directive('rainbow', {
  bind (el, binding, vnode) {
    el.style.color = "#" + Math.random().toString().slice(2, 8)
  }
})

Vue.filter('snippet', (value) => {
  return value.slice(0, 100) + '...'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
