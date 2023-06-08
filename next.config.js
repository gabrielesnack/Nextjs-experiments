const webpack = require("webpack");

//...
/** @type {import('next').NextConfig} */
module.exports = {
  pageExtensions: ["page.tsx"],
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      // Ensures no server modules are included on the client.
      config.plugins.push(
        new webpack.IgnorePlugin({ resourceRegExp: /lib\/server/ })
      );
    }

    return config;
  },
};