// const path = require("path");

// module.exports = {
//   publicPath: "/mer_weekly/",
//   // 静态文件保存目录
//   assetsDir: "static",

//   // 生产环境是否打包成sourcemap
//   productionSourceMap: false,

//   // 保存时是否做lint检查
//   lintOnSave: true,

//   devServer: {
//     open: false, // 启动默认不打开页面
//     https: false,
//     hotOnly: false,
//     port: 8890,
//     host: "0.0.0.0",
//     proxy: {
//       "/api": {
//         // target:"https://ads.ysepay.com:8443", // 目标代理接口地址
//         target: "http://data-process-gate-fat.yspos-fat.com/", // 目标代理接口地址
//         // target:"http://10.211.61.158:8081",
//         // secure: false,
//         changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
//         pathRewrite: {
//           "^/api": "",
//         },
//       },
//       "/op": {
//         // target:"https://ads.ysepay.com:8443", // 目标代理接口地址
//         target: "http://op.eptok.com/", // 目标代理接口地址
//         // target:"http://10.211.61.158:8081",
//         // secure: false,
//         changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
//         pathRewrite: {
//           "^/op": "",
//         },
//       },
//       "/ads2": {
//         // target:"https://ads.ysepay.com:8443", // 目标代理接口地址
//         target: "https://ads.ysepay.com:8443", // 目标代理接口地址
//         // secure: false,
//         changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
//         pathRewrite: {
//           "^/ads2": "",
//         },
//       },
//     },
//   },

//   chainWebpack: (config) => {
//     // 保存eslint自动格式化代码
//     config.module
//       .rule("eslint")
//       .use("eslint-loader")
//       .loader("eslint-loader")
//       .tap((options) => {
//         options.fix = true;
//         return options;
//       });
//     // 添加别名
//     config.resolve.alias
//       .set("@", path.resolve("src"))
//       .set("@assets", path.resolve("src/assets"))
//       .set("@api", path.resolve("src/api"))
//       .set("@views", path.resolve("src/views"))
//       .set("@components", path.resolve("src/components"));
//   },

//   outputDir: "mer_weekly",
//   css: {
//     loaderOptions: {
//       less: {
//         // 若使用 less-loader@5，请移除 lessOptions 这一级，直接配置选项。
//         modifyVars: {
//           "text-color": "#111",
//           "border-color": "#eee",
//           // 直接覆盖变量
//           // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
//           hack: `true; @import "${path.resolve(
//             __dirname,
//             "src/styles/theme.less"
//           )}";`,
//         },
//       },
//     },
//   },
// };
