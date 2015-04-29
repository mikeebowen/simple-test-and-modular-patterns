"use strict";
// create wrapper function
module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-simple-mocha");
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.initConfig({
    jshint: {
      dev: {
        src: ["Gruntfile.js", "greet*.js", "test/**/*.js"]
      },
      options: {
        jshintrc: ".jshintrc"
      },
    },
    simplemocha: {
      dev: {
        src: ["test/**/*.js"]
      }
    },
    watch: {
      files: ["<%= jshint.dev.src %>"],
      tasks: ["jshint"]
    }
  });
  grunt.registerTask("test", ["jshint:dev", "simplemocha:dev", "watch"]);
  grunt.registerTask("default", ["test"]);
};
