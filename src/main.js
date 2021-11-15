import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Notifications from 'vue-notification'
import VueMoment from 'vue-moment'
import '@/assets/css/styles.css'

Vue.config.productionTip = false
Vue.use(VueMoment);
Vue.use(Notifications)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
