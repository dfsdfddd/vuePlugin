<template>
  <div @click="hide" class="loading-box" v-show="display">
    <p class="loading-text">{{ tips }}</p>
  </div>
</template>

<script>
export default {
  name: "Loading",
  // props: {
  //   show: {
  //     type: Boolean,
  //     default: false,
  //   },
  //   tips: {
  //     type: String,
  //     default: "加载中...",
  //   },
  // },

  data() {
    return {
      display: false,
      tips: "",
      opTips: "加载中...",
    };
  },

  methods: {
    show(tips) {
      this.tips = tips || this.opTips;
      this.display = true;
    },

    hide() {
      this.display = false;
    },
  },
};
</script>

<style scoped>
.loading-box {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.loading-text {
  color: yellowgreen;
}
</style>
