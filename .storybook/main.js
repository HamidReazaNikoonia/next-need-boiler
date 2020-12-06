const path = require("path");
module.exports = {
  stories: ["../src/**/*.stories.[tj]s[x]"],
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-links",
    "@storybook/addon-knobs/register",
    "@storybook/addon-storysource/register",
    "storybook-addon-styled-component-theme/dist/register",
    "@storybook/addon-viewport/register",
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]],
      },
    });

    config.module.rules.push({
      test:/\.module\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader","postcss-loader",],
      // include: path.resolve(__dirname, "../"),
      // exclude: /\.module\.scss$/,
    });

    // config.module.rules.push({
    //   test: /\.css$/,
    //   loaders: ['style-loader', 'css-loader', 'postcss-loader'],
    //   include: path.resolve(__dirname, '../'),
    // });

    // config.module.rules.filter((rule) => rule.test.toString() !== '/\.module\.scss$/'),

    config.resolve.extensions.push(".ts", ".tsx");

    config.module.rules.push({
      test: /\.stories\.tsx?$/,
      loaders: [require.resolve("@storybook/source-loader")],
      enforce: "pre",
    });

    // config.module.rules.push({
    //   test: /\.module\.css$/,
    //   exclude: /\.module\.css$/,
    //   use: ['style-loader', 'css-loader'],
    //   include: path.resolve(__dirname, '../'),
    // });

    // config.module.rules.push({
    //   include: path.resolve(__dirname, '../'),
    //   exclude: /\.module\.scss$/,
    //   test: /\.module\.scss$/,
    //   use: [
        
    //     // "style-loader",
    //     "sass-loader",
    //     "css-loader",
    //     "postcss-loader",
        
        
    //     // {
    //     //   loader: "css-loader",
    //     //   options: {
    //     //     modules: true,
    //     //   },
    //     // },
    //     // {
    //     //   loader: "sass-loader",
    //     //   options: {
    //     //     modules: true,
    //     //   },
    //     // },
    //   ],
    // });

    // config.module.rules.push({
    //   test: /\.module\.scss$/,
    //   exclude: /\.module\.css$/,
    //   use: ['style-loader', 'css-loader', "sass-loader"],
    //   include: path.resolve(__dirname, '../'),
    // });

    return config;
  },
};
