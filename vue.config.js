const path = require("path");

module.exports = {
  productionSourceMap: false, // 生产打包时不输出map文件，增加打包速度
  // 修改 src 为 examples
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  // 强制内联CSS
  // css: { extract: false },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: (config) => {
    config.resolve.alias.set("@", path.join(__dirname));
    config.module
      .rule("js")
      .include.add("/packages")
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        // 修改它的选项...
        return options;
      });
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      config.externals = {
        Vue: "Vue",
        tinymce: "tinymce",
      };
    }
  },
};
