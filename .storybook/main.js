module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "scripts": [
  "build-storybook": "build-storybook"
]
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "core": {
    "builder": "storybook-builder-vite"
  },
  "viteFinal": (config) => {
    return {
      ...config,
      base: "/<storybook_test2>/"
    };
  }
}
