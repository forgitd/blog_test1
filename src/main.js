import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'lib-flexible'
import highlight from 'highlight.js';


Vue.use(highlight);
Vue.config.productionTip = false
Vue.use(ElementUI);

// 自定义指令
Vue.directive('rainbow',{
  bind(el, binding , vnode) {
    el.style.color = "#" + Math.random().toString(16).slice(2,8)
  }
})

Vue.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    highlight.highlightBlock(block)
  })
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
