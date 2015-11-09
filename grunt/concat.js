'use strict';

var concatDist, concatDistMapped = null;

concatDist = {
    options: {
        banner: require('./utils/banner') + "(function(angular){\n" + "'use strict';\n",
        footer: '\n}(angular));'
    },
    src: [
        'dist/src/directives/leaflet.js',
        'dist/src/services/*.js',
        'dist/src/**/*.js'

    ],
    dest: 'dist/<%= pkg.name %>.pre.js'
};

concatDistMapped = _.clone(concatDist, true);
concatDistMapped.options.sourceMap = true;
concatDistMapped.options.sourceMapName = "dist/<%= pkg.name %>_dev_mapped.js.map";
concatDistMapped.dest = "dist/<%= pkg.name %>_dev_mapped.js";


module.exports = function (grunt, options) {
    return {
        dist: concatDist,
        distMapped: concatDistMapped,
        license: {
            src: [
                'src/header-MIT-license.txt',
                'dist/<%= pkg.name %>.min.no-header.js'
            ],
            dest: 'dist/<%= pkg.name %>.min.js'
        },
        examples: {
            options: {
                banner: '(function(angular){ \nvar app = angular.module(\'webapp\');\n',
                footer: '}(angular));'
            },
            src: ['examples/js/controllers/*.js'],
            dest: 'examples/js/controllers.js'
        },
        website: {
            options: {
                //separator: ';',
                banner: '(function (angular) {\n',
                footer: '})(window.angular);'
            },
            src: ['website/src/js/app.js', 'website/src/js/**/*.js'],
            dest: 'website/dist/js/<%= pkg.name %>-webpage.js',
        }
    };
};
