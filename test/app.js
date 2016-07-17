'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-simple-react-app:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        type: 'input',
        name: 'myAppDir',
        message: 'What would like to name your app?',
        default: 'myReactApp'
      })
      .toPromise();
  });

  it('creates files', function () {
    assert.file(['client/', 'server', 'package.json', 'webpack.config.js', 'README.md']
    );
  });
});
