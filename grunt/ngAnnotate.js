'use strict';

module.exports = function ngAnnotate(grunt, options) {
    return {
        options: {},
        dist: {
            files: {
                'dist/<%= pkg.name %>.js': ['dist/<%= pkg.name %>.pre.js']
            }
        }
    };
};
