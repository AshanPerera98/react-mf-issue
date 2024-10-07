const {
  ModuleFederationPlugin,
} = require("@module-federation/enhanced/webpack");

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
            react: { singleton: true },
            "react-router": { singleton: true },
            redux: { singleton: true },
            "react-redux": { singleton: true },
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
