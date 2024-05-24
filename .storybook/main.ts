module.exports = {
    stories: ['../stories/**/*.stories.tsx'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-actions'],
    typescript: {
      check: false, // O true si quieres habilitar la comprobación de tipos
      checkOptions: {},
      reactDocgen: 'react-docgen-typescript',
      reactDocgenTypescriptOptions: {
        shouldExtractLiteralValuesFromEnum: true,
        propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
      },
    },
  };
  