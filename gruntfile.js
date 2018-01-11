module.exports = function(grunt) {

    grunt.initConfig({

        uglify: {
            my_target: {
                files: {
                    'dist/js/main.js': ['src/js/main.js']
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['css/*.css', 'css/!*.min.css'],
                    dest: 'dist',
                    ext: '.css'
                }]
            }
        },
        copy: {
            main:{
                expand: true,
                cwd: 'src/',
                src: ['**'],
                dest: 'dist/'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', [ 'copy', 'uglify', 'cssmin']);

};