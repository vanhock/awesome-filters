const path = require("path");
const SVGSpritemapPlugin = require("svg-spritemap-webpack-plugin");
module.exports = (analyze = false) => ({
  lintOnSave: false,
  filenameHashing: false,
  productionSourceMap: false,
  integrity: false /** https://cli.vuejs.org/ru/config/#integrity **/,
  css: {
    extract: {
      filename: "af_[name].css",
      chunkFilename: "af_[id].css"
    }
  },
  configureWebpack: () => {
    const plugins = [
      new SVGSpritemapPlugin("src/_assets/img/icons/*.svg", {
        styles: path.join(__dirname, "src/_assets/styles/_sprites.scss")
      })
    ];
    if (process.env.NODE_ENV !== "production") {
      return {
        plugins: plugins
      };
    }
    return {
      output: {
        filename: "af_[name].js",
        chunkFilename: "af_[name].js"
      },
      performance: {
        hints: process.env.NODE_ENV !== "production"
      },
      plugins: plugins,
      resolve: {
        alias: {
          vue$: "vue/dist/vue.esm.js"
        }
      }
    };
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        path.resolve(__dirname, "src/_assets/styles/_mixins.scss"),
        path.resolve(__dirname, "src/_assets/styles/_sprites.scss"),
        path.resolve(__dirname, "src/_assets/styles/_vars.scss")
      ]
    },
    webpackBundleAnalyzer: {
      openAnalyzer: process.env.NODE_ENV === "production" && analyze
    }
  }
});
