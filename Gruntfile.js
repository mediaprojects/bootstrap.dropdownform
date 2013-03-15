module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        preserveComments: 'some'
      },
      build: {
        src: 'bootstrap.dropdownform.js',
        dest: 'bootstrap.dropdownform.min.js'
      }
    },
    jshint: {
            all: ['bootstrap.dropdownform.js']
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};