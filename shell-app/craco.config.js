const {
  ModuleFederationPlugin,
} = require("@module-federation/enhanced/webpack");

module.exports = {
  devServer: {
    port: 3000,
  },
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "ShellApp",
          filename: "remoteEntry.js",
          exposes: {
            "./App": "./src/App",
          },
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
