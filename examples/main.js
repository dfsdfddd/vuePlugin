import Vue from "vue";
import App from "./App.vue";

// import "lw-chajian/lib/TestCom.css";

// import packages, { TestCom, Loading } from "../packages";
import packages, { TestCom, Loading } from "lw-chajian";

console.log(TestCom);
console.log(Loading);
console.log(packages);
Vue.use(packages);
// Vue.use(TestCom);
// Vue.use(Loading);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
