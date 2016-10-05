'use strict';
var _pkg = require('../package.json');
var argv = require('yargs').argv;

/*
 _pkg.nextVersion only works for patch updates

 Using changelog in the workflow is not really recommended right now as changelog is not really able to be modified until
 a new tag is released.

 Using Yargs as a workaround which grunt should be used in this way:

 `grunt changelog --ui_leaflet_ver SOME_TAG_NUMBER`
 */

module.exports = function (grunt, options) {
    console.log('version:', argv.ui_leaflet_ver || _pkg.version);
    return {
        options: {
            changelogOpts: {
                // conventional-changelog options go here
                preset: 'angular',
                releaseCount: 0
            },
            context: {
                currentTag: 'v' + (argv.ui_leaflet_ver || _pkg.version)
            }
        },
        release: {
            src: 'CHANGELOG.md'
        }
    };
};
