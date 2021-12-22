<template>
  <div class="com-color">{{ msg }}</div>
</template>

<script>
export default {
  props: ["msg"],
  name: "TestCom",
};
</script>

<style lang="less" scoped>
.com-color {
  color: red;
  font-size: 50px;
}
</style>
