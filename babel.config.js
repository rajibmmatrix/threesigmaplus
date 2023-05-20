module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          types: './src/types',
          '~app': './src/app',
          '~assets': ['./src/assets/'],
          '~components': './src/components',
          '~common': './src/components/common',
          '~shared': './src/components/shared',
          '~config': './src/config/config',
          '~constants': './src/constants',
          '~navigations': './src/navigations',
          '~screens': './src/screens',
          '~services': './src/services',
          '~utils': './src/utils',
          '~src': './src/',
        },
      },
    ],
  ],
};
