const { ModuleFederationPlugin } = require("webpack").container;

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
              react: { singleton: true, eager: true },
              "react-router": { singleton: true, eager: true },
              redux: { singleton: true, eager: true },
              "react-redux": { singleton: true, eager: true },
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
