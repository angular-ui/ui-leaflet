'use strict';

module.exports = function (grunt, options) {
    return {
        watchServe: {
            tasks: ['watch:fast', 'connect:webserver'],
            options: {
                logConcurrentOutput: true
            }
        },
        unit: {
            tasks: ['karma', 'watch:unit'],
            options: {
                logConcurrentOutput: true
            }
        },
        dev: {
            tasks: ['karma', 'watch:unit', 'watch:source'],
            options: {
                logConcurrentOutput: true
            }
        },
        website: {
            tasks: ['concat:website', 'watch:website', 'connect:webserver'],
            options: {
                logConcurrentOutput: true
            }
        }
    };
};
