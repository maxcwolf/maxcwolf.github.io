module.exports = function(grunt) {
        // Project configuration.
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            eslint: {
                src: ['./admin/scripts*.js', './blog/scripts', './bio/scripts', './history/scripts', './nav/scripts'],
            },
            watch: {
                scripts: {
                  files: ['./admin/scripts*.js', './blog/scripts', './bio/scripts', './history/scripts', './nav/scripts'],
                  tasks: ['eslint', 'uglify'],
                  options: {
                    spawn: false,
                  },
                },
            },
            uglify: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                },
                build: {
                    files: [{
                        expand: true,
                        cwd: 'admin/scripts',
                        src: '*.js',
                        dest: 'build/admin',
                        ext: '.min.js',
                    }, {
                        expand: true,
                        cwd: 'bio/scripts',
                        src: '*.js',
                        dest: 'build/bio',
                        ext: '.min.js',
                    }, {
                        expand: true,
                        cwd: 'history/scripts',
                        src: '*.js',
                        dest: 'build/history',
                        ext: '.min.js',
                    }, {
                        expand: true,
                        cwd: 'nav/scripts',
                        src: '*.js',
                        dest: 'build/nav',
                        ext: '.min.js',
                    }, {
                        expand: true,
                        cwd: 'projects/scripts',
                        src: '*.js',
                        dest: 'build/projects',
                        ext: '.min.js',
                    }],
                },
            },
        });
        // Load the plugin that provides the "uglify" task.
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('gruntify-eslint');
        // Default task(s).
        grunt.registerTask('default', ['uglify', 'watch', 'eslint']);
    };
