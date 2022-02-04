module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@react-theming/storybook-addon",
    '@storybook/preset-scss',
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },

  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      sideEffects: true,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      // include: path.resolve(__dirname, '../'),
    });
    
    return config;
  },
}