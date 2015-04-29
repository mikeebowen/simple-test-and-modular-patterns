"use strict";
// create wrapper function
module.exports = function (grunt) {
  //Load tasks
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-simple-mocha");
  grunt.loadNpmTasks('grunt-contrib-watch');
  // initialize grunt
  grunt.initConfig({
    // create jshint task
    jshint: {
      dev: {
        src: ["Gruntfile.js", "greet*.js", "test/**/*.js"]
      },
      options: {
        jshintrc: ".jshintrc"
      },
    },
    // create simple mocha task
    simplemocha: {
      dev: {
        src: ["test/**/*.js"]
      }
    },
    // create watch task
    watch: {
      files: ["<%= jshint.dev.src %>"],
      tasks: ["jshint"]
    }
  });
  // register the created tasks to run as "test"
  grunt.registerTask("test", ["jshint:dev", "simplemocha:dev", "watch"]);
  // make "test" the default grunt task
  grunt.registerTask("default", ["test"]);
};
