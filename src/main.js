import Vue from 'vue';
import App from './App.vue';
// import router from './router';
import ViewUI from 'view-design';

import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false;

Vue.use(ViewUI);

new Vue({
  el: '#app',
  // router,
  render: h => h(App)
})
