// Karma configuration
const webpackConfig = require('./webpack.config.js');
module.exports = function(config) {
  
  config.set({
    logLevel: config.LOG_DEBUG,
    client: {
      captureConsole: true,
      mocha: {
        bail: true
      }
    },
    basePath: "",
    frameworks: ['jquery-3.2.1', 'jasmine','browserify'],
    files: [
      'src/*.js',
      'spec/*spec.js'
    ],
    webpack: webpackConfig,
    exclude: [
    ],
    preprocessors: {
      'src/*.js': ['webpack', 'sourcemap'],
      'spec/*spec.js': ['webpack', 'sourcemap']
    },
    plugins: [
      'karma-jquery',
      'karma-webpack',
      'karma-jasmine',
      'karma-Chrome-launcher',
      'karma-jasmine-html-reporter',
      'karma-sourcemap-loader',
      'karma-browserify'
    ],
    reporters: ['progress', 'kjhtml'],
    
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,

  })
}