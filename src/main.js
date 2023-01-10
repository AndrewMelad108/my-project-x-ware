import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "element-ui/lib/theme-chalk/display.css";
import locale from "element-ui/lib/locale/lang/en";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BModal, VBModal } from 'bootstrap-vue'
Vue.component('MyComponent', {
  components: { BModal },
  // Note that Vue automatically prefixes directive names with `v-`
  directives: { 'b-modal': VBModal }
  // ...
})

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(ElementUI, { locale });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
