import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import uView from "uview-ui";
import './uni.promisify.adaptor'
Vue.config.productionTip = false
Vue.use(uView)
App.mpType = 'app'
const app = new Vue({
  ...App
})
// app.use(uView);
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif