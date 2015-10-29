'use strict';

module.exports = function (grunt, options) {
    return {
        options: {
            banner: require('./utils/banner')
        },
        dist: {
            files: {
                'dist/<%= pkg.name %>.min.no-header.js': ['dist/<%= pkg.name %>.js']
            }
        }
    };
};
