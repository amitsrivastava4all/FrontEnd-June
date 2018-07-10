module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            myfiles: {
              files: {
                'release/output.min.js': ['js/*.js']
              }
            }
        },
        watch: {
            scripts: {
                files: '**/*.js',
             tasks: ['uglify:myfiles'],
              options: {
                spawn: false,
              },
            },
          }

    });
    // Load the Plugins
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Register Task
    grunt.registerTask('default', ['watch']);

}