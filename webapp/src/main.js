import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/lib/mdbvue.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify";
import VModal from "vue-js-modal";
import "vuetify/dist/vuetify.min.css";
import vSelect from 'vue-select'

Vue.component('v-select', vSelect)

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(VModal);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
