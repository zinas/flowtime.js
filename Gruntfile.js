module.exports = function(grunt) {

    grunt.initConfig({
        'connect': {
            demo: {
                options: {
                    port: 9001,
                    hostname: 'localhost',
                    open: true,
                    keepalive: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('serve', ['connect:demo']);
};
