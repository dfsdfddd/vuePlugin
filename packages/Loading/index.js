import Loading from "./Loading.vue";

// 为组件提供 install 安装方法，供按需引入
Loading.install = function (Vue, options) {
  // 使用vue构造器，Vue.extend()创建一个类
  const subClass = Vue.extend(Loading);
  // 实例化子类，并挂载到HTMLElement实例上
  const Profile = new subClass({
    el: document.createElement("div"),
  });
  document.body.appendChild(Profile.$el);
  // 处理可选的参数
  // 在Vue.use(xxx, options)的第二个参数传入tips则会初始化全屏加载中的默认文字
  // 例如Vue.use(xxx, { tips: "请稍等..." })
  if (options) {
    if (options.tips) {
      Profile.opTips = options.tips;
    }
  }
  // 添加实例方法，挂载到vue原型上
  Vue.prototype.$Loading = Profile;
};

// 默认导出组件
export default Loading;
