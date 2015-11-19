'use strict';
var getAvailPort = require('./utils/getAvailPort');
var port = getAvailPort(7777);

var _files = ['src/**/*.js'];
var _testFiles = ['test/unit/**.js', 'test/unit/**.coffee',
    'test/e2e/**.js', 'test/unit/**/**.js', 'test/unit/**/**.coffee', 'test/e2e/**/**.js'];

module.exports = function (grunt, options) {
    return {
        // NOT WORTH THE PINTA when having multiple watches
        // options: {
        //     livereload: port
        // },
        fast: {
            files: _files,
            tasks: [
                'fastbuild',
                'uglify',
                'concat:license'
            ]
        },
        source: {
            files: _files,
            tasks: [
                'fastbuild',
                'uglify',
                'testunit',
                'concat:license'
            ]
        },
        unit: {
            files: _testFiles,
            tasks: [
                'fastbuild',
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
