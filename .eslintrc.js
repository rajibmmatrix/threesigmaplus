module.exports = {
  root: true,
  extends: '@react-native-community',
  overrides: [
    {
      rules: {
        'react/no-unstable-nested-components': [
          'off' | 'warn' | 'error',
          {
            allowAsProps: true,
            customValidators: [],
          },
        ],
      },
    },
  ],
};
