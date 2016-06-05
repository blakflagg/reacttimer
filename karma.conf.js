var webpackConfig = require('./webpack.config.js');

module.exports = function(config){
     config.set({
        browsers: ['Chrome'],
        singleRun: true,
        frameworks: ['mocha'],
        files: ['app/tests/**/*.test.jsx'], // match any files ending .test.jsx in any folder located in app/tests/ directory
        preprocessors: {
          'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
        },
        reporters: ['mocha'], //displays fancy way to show test fail or success
        client: {
          mocha: {
            timeout: '5000'
          }
        },
        webpack: webpackConfig,
        webpackServer:{
          noInfo: true
        }
     });
}
