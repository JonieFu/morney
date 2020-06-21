const path = require("path");
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/complete-morney/" : "/",
  lintOnSave: false,
  chainWebpack: (config) => {
    const dir = path.resolve(__dirname, "src/assets/icons");
    config.module
      .rule("svg-sprite")
      .test(/\.(svg)(\?.*)?$/)
      .include.add(dir)
      .end() //8-9行包含的icons目录
      .use("svg-sprite-loader-mod")
      .loader("svg-sprite-loader-mod")
      .options({ extract: false })
      .end()
      .use("svgo-loader") //svg优化的loader
      .loader("svgo-loader")
      .tap((options) => ({
        ...options,
        plugins: [{ removeAttrs: { attrs: "fill" } }], //删除一个属性，fill
      }))
      .end();
    config
      .plugin("svg-sprite")
      .use(require("svg-sprite-loader-mod/plugin"), [{ plainSprite: true }]);
    config.module.rule("svg").exclude.add(dir); //其他svg loader 排除icons目录
  },
};
