import Vue from "vue";
import App from "./App.vue";

import "lw-chajian/lib/TestCom.css";

// import packages, { TestCom } from "../packages";
import packages, { TestCom } from "lw-chajian";

console.log(TestCom);
console.log(packages);
// Vue.use(packages);
Vue.use(TestCom);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
