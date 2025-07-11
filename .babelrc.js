module.exports = {
  presets: [
    [
      "next/babel",
      {
        "preset-react": {
          runtime: "automatic",
          importSource: "@emotion/react",
        },
      },
    ],
  ],
  plugins: [
    ["import",
      {
        "libraryName": "antd",
        "style": true,
      },
    ],
    "@emotion/babel-plugin",
    "babel-plugin-twin",
    "babel-plugin-macros",
  ],
};
