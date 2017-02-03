module.exports = (karma) => {
    karma.set({
        basePath: '../',

        frameworks: ['jasmine'],

        preprocessors: {
            'test/**/**/*.coffee': ['coffee'],
            'dist/src/**/*.js': ['coverage']
        },
        coverageReporter: {
            reporters: [{
                type: 'html',
                dir: 'dist/coverage/',
                subdir: "lib"
            }, {
                type: 'text-summary',
                dir: 'dist/coverage/',
                subdir: 'lib'
            }]
        },

        reporters: ['dots', 'coverage'],

        coffeePreprocessor: {
            options: {
                bare: true,
                sourceMap: false
            },
            transformPath: (path) => {
                return path.replace(/\.js$/, '.coffee');
            }
        },
        // list of files / patterns to load in the browser
        files: [
            'node_modules/phantomjs-polyfill/bind-polyfill.js',
            'bower_components/leaflet/dist/leaflet-src.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-simple-logger/dist/angular-simple-logger.js', //THIS IS BROWSER version
            /*
             See Issue https://github.com/Leaflet/Leaflet.markercluster/issues/528
             'bower_components/leaflet.markercluster/dist/leaflet.markercluster.js',
             */
            'http://pastebin.com/raw.php?i=3ZjK6LtA',
            'bower_components/leaflet.vector-markers/dist/Leaflet.vector-markers.js',
            //source
            'dist/src/directives/leaflet.js',
            'dist/src/services/*.js',
            'dist/src/**/*.js',
            //tests
            'test/unit/bootstrap.coffee',
            'test/unit/*.js',
            'test/unit/**/*.js',
            'test/unit/**/*.coffee',
            'bower_components/Leaflet.PolylineDecorator/leaflet.polylineDecorator.js', {
                pattern: 'test/**/*.coffee',
                included: false
            }, {
                pattern: 'dist/*.js.map',
                included: false
            }
        ],

        // list of files to exclude
        exclude: [],

        browsers: ['PhantomJS'],

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: karma.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        singleRun: true
    });
};
