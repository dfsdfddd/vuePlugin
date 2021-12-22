<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div @click="showLoading">showloading</div>
    <div @click="hideLoading">hideloading</div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <TestCom msg="nnnnnnnn2" />
    <!-- <Loading ref="loadRef" /> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
// import TestCom from "../packages/TestCom/TestCom.vue";
// import Loading from "../packages/Loading/Loading.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    // Loading,
  },
  methods: {
    showLoading() {
      // this.$refs.loadRef.show();
      this.$Loading.show();
    },
    hideLoading() {
      // this.$refs.loadRef.hide();
      this.$Loading.hide();
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
