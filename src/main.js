import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'



import App from './App.vue'
import router from './router'
import Plugins from './plugins'
import store from './store/index'

import './assets/css/style.css'

Vue.use(Vuetify);

Vue.use(Plugins);
Vue.config.productionTip = false


new Vue({
  vuetify: new Vuetify(),
  router,
  store,
  render: h => h(App)
}).$mount('#app')
