const withPlugins = require("next-compose-plugins");
const withReactSvg = require("next-react-svg");
const withBundleAnalyzer = require("@next/bundle-analyzer");

const path = require("path");

const nextConfig = {
  include: path.resolve(__dirname, "public/static/svg"),
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: "static",
      reportFilename: "../bundles/server.html",
    },
    browser: {
      analyzerMode: "static",
      reportFilename: "../bundles/client.html",
    },
  },
};

module.exports = withPlugins(
  [[withBundleAnalyzer], [withReactSvg]],
  nextConfig
);
