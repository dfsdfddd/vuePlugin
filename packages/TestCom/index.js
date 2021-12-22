import TestCom from "./TestCom.vue";

// 为组件提供 install 安装方法，供按需引入
TestCom.install = function (Vue) {
  Vue.component(TestCom.name, TestCom);
};

// 默认导出组件
export default TestCom;
