'use strict';
var getAvailPort = require('./utils/getAvailPort');
var port = getAvailPort(7777);

var _files = ['src/**/*.js'];
var _testFiles = ['test/unit/**.js', 'test/unit/**.coffee',
 'test/e2e/**.js', 'test/unit/**/**.js', 'test/unit/**/**.coffee', 'test/e2e/**/**.js'];

module.exports = function(grunt, options) {
    return {
        options: {
            livereload: port
        },
        fast: {
            files: _files,
            tasks: [
                'fast-build',
                'uglify',
                'concat:license'
            ]
        },
        source: {
            files: _files,
            tasks: [
                'fast-build',
                'uglify',
                'test-unit',
                'concat:license'
            ]
        },
        unit: {
            files: _testFiles,
            tasks: [
                'fast-build',
                'karma'
            ]
        },
        examples: {
            files: ['examples/*.html'],
            tasks: [
                'examples'
            ]
        },
        website: {
          files: ['website/src/js/app.js', 'website/src/js/**/*.js'],
          tasks: ['jshint', 'concat:website', 'uglify'] //'ngmin'
        }
    };
};
