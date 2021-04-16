module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: 'standard',
  plugins: [
    'promise'
  ],
  env: {
    'node': true
  },
  rules: {
    'no-debugger': 0
  },
}