// Karma configuration
// Generated on Wed Oct 19 2016 15:49:09 GMT+0530 (IST)
let path = require('path')
let webpackConfig = require('./webpack.config')

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-webpack',
      'karma-spec-reporter',
      'karma-phantomjs-launcher',
      'karma-sourcemap-loader'
    ],
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    },
    files: [
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['PhantomJS'],
  })
}
