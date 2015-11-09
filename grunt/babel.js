'use strict';

module.exports = function (grunt, options) {
    return {
        options: {
            sourceMap: false,
            compact: false,
            presets: ['es2015']
        },
        dist: {
            files: [{
                expand: true,
                cwd: 'src',
                src: ['**/*.js'],
                dest: 'dist/src',
                ext: '.js'
            }]
        }
    };
};
