module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-docs'],
  babel: async (options) => ({
    ...options
  })
};