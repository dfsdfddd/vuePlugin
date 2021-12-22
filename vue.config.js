const path = require("path");

module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: "examples/main.js",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
    },
  },
  // publicPath: "/dist/",
  // 静态文件保存目录
  // assetsDir: "static",

  // 生产环境是否打包成sourcemap
  productionSourceMap: false,

  // 保存时是否做lint检查
  lintOnSave: true,

  devServer: {
    open: false, // 启动默认不打开页面
    https: false,
    hotOnly: false,
    port: 8890,
    host: "0.0.0.0",
  },

  chainWebpack: (config) => {
    config.module.rule("js").include.add("/packages").end();
    // .use("babel")
    // .loader("babel-loader")
    // .tap((options) => {
    //   // 修改它的选项...
    //   return options;
    // });
    // 添加别名
    config.resolve.alias
      .set("@examples", path.resolve("examples"))
      .set("@packages", path.resolve("packages"));
  },
  css: {
    extract: false,
  },

  // css: {
  //   loaderOptions: {
  //     less: {
  //       // 若使用 less-loader@5，请移除 lessOptions 这一级，直接配置选项。
  //       modifyVars: {
  //         "text-color": "#111",
  //         "border-color": "#eee",
  //         // 直接覆盖变量
  //         // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
  //         hack: `true; @import "${path.resolve(
  //           __dirname,
  //           "src/styles/theme.less"
  //         )}";`,
  //       },
  //     },
  //   },
  // },
};
