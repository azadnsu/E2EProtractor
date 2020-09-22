// conf.js

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../tests/calc.js'],
  capabilities: {
    browserName: 'chrome'
  }
}