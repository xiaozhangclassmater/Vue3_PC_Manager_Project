const path = require("path");
const { defineConfig } = require("@vue/cli-service");

const resolve = (dir) => path.join(__dirname, dir);

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {},

  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  }
});
