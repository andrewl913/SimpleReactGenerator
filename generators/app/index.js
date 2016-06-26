'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.blue('React Simple Template') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'myAppDir',
      message: 'What would like to name your app?',
      default: 'myReactApp'
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('./'),
      this.destinationPath('./' + this.props.myAppDir)
    );
  },

  install: function () {
    const myAppDir = this.props.myAppDir;
    var projectPath = path.join(process.cwd(), myAppDir);
    process.chdir(projectPath);
    this.npmInstall();
  }
});
