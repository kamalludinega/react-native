module.exports = {
  root: true,
  extends: [
    'standard',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
    'prettier/standard'
  ],
  plugins: ['react', 'react-native', 'flowtype', 'prettier', 'standard'],
  rules: {
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 0,
    'react-native/no-color-literals': 0,
    'react-native/no-raw-text': 0,
    'no-unused-vars': 0,
    eqeqeq: 0,
    indent: ['error', 2]
  }
}
