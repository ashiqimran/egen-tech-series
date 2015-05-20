module.exports = function(grunt) {
    //http://quickleft.com/blog/grunt-js-tips-tricks
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });

    //application config
    grunt.config('appConfig', {
        version: grunt.template.today("yyyy.mm.dd"),
        app: '<%= pkg.name %>'
    });

    //watch
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.config('watch', {
        options: {
            livereload: true
        },
        css: {
            files: ['styles/**/*.css'],
            tasks: []
        },
        js: {
            files: ['scripts/**/*.js'],
            tasks: []
        },
        html: {
            files: ['*.html'],
            tasks: []
        }
    });

    //connect
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.config('connect', {
        server: {
            options: {
                livereload: true,
                base: '.',
                port: 3000
            }
        }
    });

    //tasks
    grunt.registerTask('default', ['connect', 'watch']);
};
