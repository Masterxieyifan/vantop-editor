import Vue from 'vue'
import App from './App.vue'

// 加载 tinymce
// import '@/packages/VantopEditor/plugins/tinymce';

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
