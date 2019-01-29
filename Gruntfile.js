/**
 * GRUNT
 * http://gruntjs.com/getting-started
 * 
 * @param {type} grunt
 * @retuns {undefined}
 */
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            options: {
                sourceMap: true,
                cleancss: true,
                compress: true
            },
            dev: {
                files: {
                    "css/styt.css": "less/app/style.less"
                }
            }
        },
        autoprefixer: {
            dev: {
                files: {
                    'css/styt.css': 'css/styt.css'
                }
            }
        },
        uglify: {
            options: {
                sourceMap: true
            },
            dev: {
                files: {
                    'js/styt.js': 'js/yt.js'
                }
            }
        },
        watch: {
            script: {
                files: ['js/*.js'],
                tasks: ['uglify']
            },
            style: {
                files: ['less/app/*.less'],
                tasks: ['less']
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('build', ['less', 'autoprefixer', 'uglify']);
};