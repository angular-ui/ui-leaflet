global._ = require('lodash');

const karmaRunner = require('./grunt/utils/karma');

module.exports = (grunt) => {
    require('load-grunt-config')(grunt);
    grunt.registerTask('karma', 'karma runner', function() {
        return karmaRunner('../../test/karma.conf.js', grunt)(this.async());
    });
    grunt.registerTask("force", function(set) {
        if (set === "on") {
            grunt.option("force", true);
        } else if (set === "off") {
            grunt.option("force", false);
        }
    });
};
