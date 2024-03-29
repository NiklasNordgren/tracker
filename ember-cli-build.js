'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {

  //var bootstrapPath = 'bower_components/bootstrap-sass/assets/';

  //Bronze Challenge: Limiting Imports
  var collapsePath = 'bower_components/bootstrap-sass/assets/';
  var transitionPath = 'bower_components/bootstrap-sass/assets/';

  let app = new EmberApp(defaults, {
    sassOptions: {

      includePaths: [
        //bootstrapPath + 'stylesheets',
        collapsePath + 'stylesheets',
        transitionPath + 'stylesheets'
      ]
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  // Create paths to bootstrap assets
  // Add assets to app with import
  //app.import(bootstrapPath + 'javascripts/bootstrap.js');
  app.import(collapsePath + 'javascripts/bootstrap/collapse.js');
  app.import(transitionPath + 'javascripts/bootstrap/transition.js');
  app.import('bower_components/moment/moment.js');

  return app.toTree();
};
