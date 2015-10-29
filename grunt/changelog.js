'use strict';
var _ = require('lodash'),
    _pkg = require('../package.json'),
    last = _.last(_pkg.version.split('.')),
    next = Number(last) + 1,
    argv = require('yargs').argv;

/*
_pkg.nextVersion only works for patch updates

Using changelog in the workflow is not really recommended right now as changelog is not really able to be modified until
a new tag is released.

Using Yargs as a workaround which grunt should be used in this way:

`grunt changelog --ui_leaflet_ver SOME_TAG_NUMBER`
*/
_pkg.nextVersion = _pkg.version.replace(last, String(next));

module.exports = function (grunt, options) {
    return {
        options:{
            version: argv.ui_leaflet_ver || _pkg.nextVersion
        }
    };
};
