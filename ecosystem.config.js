module.exports = {
  apps: [
    {
      name: 'focus',
      script: './dist/app.js',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
}
