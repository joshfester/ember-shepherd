var path = require('path');

module.exports = {
  extends: [
    require.resolve('ember-cli-eslint/coding-standard/ember-application.js'),
    "plugin:ember-suave/recommended"
  ],
  globals: {
    'Shepherd': false
  }
};
