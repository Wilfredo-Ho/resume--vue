// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import VueI18n from 'vue-i18n'
import Lang from './common/lang'
import 'muse-ui/dist/muse-ui.css'

Vue.use(VueI18n)
Vue.use(MuseUI);

Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'en',
  messages: {...Lang}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
