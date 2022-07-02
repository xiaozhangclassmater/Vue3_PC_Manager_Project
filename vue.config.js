const path = require("path");

const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  transpileDependencies: true,

  devServer: {
    proxy: {
      "/api": {
        target: "http://152.136.185.210:5000"
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  }
};
