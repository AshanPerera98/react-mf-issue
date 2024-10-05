const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  devServer: {
    port: 3000,
  },
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "RemoteApp",
          filename: "remoteEntry.js",
          exposes: {
            "./App": "./src/App",
          },
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
