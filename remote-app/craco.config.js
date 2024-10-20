const {
  ModuleFederationPlugin,
} = require("@module-federation/enhanced/webpack");

module.exports = {
  devServer: {
    port: 3001,
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
          remotes: {
            SupportApp: "SupportApp@http://localhost:3002/remoteEntry.js",
          },
          shared: [
            {
              react: { singleton: true },
              "react-router": { singleton: true },
              redux: { singleton: true },
              "react-redux": { singleton: true },
            },
          ],
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
