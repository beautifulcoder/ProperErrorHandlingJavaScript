module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        simplemocha: {
            all: {
                src: ['tests/**/*.js'],
                options: {
                    ui: 'bdd',
                    reporter: 'spec'
                }
            }
        },
        jshint: {
            options: {
                camelcase: true,
                curly: true,
                eqeqeq: true,
                freeze: true,
                indent: 4,
                newcap: true,
                quotmark: 'single',
                maxdepth: 3,
                maxstatements: 15,
                maxlen: 120,
                eqnull: true,
                funcscope: true
            },
            all: ['*.js', 'bin/www', 'routes/*.js', 'tests/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', ['simplemocha', 'jshint']);
};
