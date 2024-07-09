const path = require("path");
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.publicPath = process.env.PUBLIC_URL || "/";
      return webpackConfig;
    },
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
};
