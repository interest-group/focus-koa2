const gulp = require('gulp')
const eslint = require('gulp-eslint')
const friendlyFormatter = require('eslint-friendly-formatter')
const nodemon = require('gulp-nodemon')

function lint (aims) {
  return gulp.src(aims)
    .pipe(eslint({ configFile: './.eslintrc.js' }))
    .pipe(eslint.format(friendlyFormatter))
    .pipe(eslint.results(results => {
      console.log(`- [Results]:${results.length}  [Warnings]:${results.warningCount}  [Errors]:${results.errorCount}`)
      console.log('Finished eslint')
    }))
}

// eslint检查
gulp.task('ESlint', () => {
  return lint(['src/*.js'])
})

// 修改代码自动重启
gulp.task('nodemon', () => {
  return nodemon({
    script: './main.js',
    execMap: {
      js: 'node'
    },
    tasks: (aims) => {
      lint(aims)
      return []
    },
    verbose: true,
    env: {
      NODE_ENV: 'development'
    },
    watch: ['src'],
    ext: 'js json'
  }).on('crash', () => {
    console.error('Application has crashed!\n')
  })
})

gulp.task('default', gulp.series('ESlint', 'nodemon'))
