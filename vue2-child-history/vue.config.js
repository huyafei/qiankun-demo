const { defineConfig } = require("@vue/cli-service");
const { name } = require("./package");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8083,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    // name 与 注册的应用名称一致
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      // jsonpFunction: `webpackJsonp_${name}`, // webpack5 废弃
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
  },
});
