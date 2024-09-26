const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  devServer: {
    port: 3002,
  },
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "SupportApp",
          filename: "remoteEntry.js",
          exposes: {
            "./Button": "./src/Button",
          },
          remotes: {},
          shared: {
            react: { singleton: true, eager: true },
            "react-router": { singleton: true, eager: true },
          },
        }),
      ],
    },
    configure: (webpackConfig) => ({
      ...webpackConfig,
      output: {
        ...webpackConfig.output,
        publicPath: "auto",
      },
    }),
  },
};
