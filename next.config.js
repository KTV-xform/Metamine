// eslint-disable-next-line no-undef
const withAntdLess = require("next-plugin-antd-less");

// eslint-disable-next-line no-undef
module.exports = withAntdLess({
  modifyVars: { "@primary-color": "#007BFF" },
  webpack(config) {
    return config;
  },
  images: {
    loader: "custom",
    nextImageExportOptimizer: {
      imageFolderPath: "public/images",
      exportFolderPath: "out",
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      quality: 75,
    },
  },
  env: {
    storePicturesInWEBP: true,
  },
  async rewrites() {
    return [{ source: "/", destination: "/" }];
  },
});
