# Angular Leaflet

![](https://cdn.rawgit.com/angular-ui/ui-leaflet/master/logo.svg)

##Why the [fork](https://github.com/tombatossals/angular-leaflet-directive)?

While we are grateful for all the original work at [tombatossals/angular-leaflet-directive](https://github.com/tombatossals/angular-leaflet-directive). We need to be able to operate as an organization to respond to issues, pull-requests and other various items quicker. We need to be able to add other developers as admins easier via group permissions via github orgs. Lastly this project needs to be more credible via being a group / org.

## Master Branch State

Please note the master branch is currently in a "in-progress state" and is not suitable for use at this point. We are trying
break up the library to be more unix / plugin like. This will reduce the burden of constant changes to the core repo (this repo)
for each and every unforseeable plugin that leaflet has. Therefore, the new usage plugins will require developers (angular-ui or not)
to create specific angular directives, services, factories, and etc to extend the main ui-leaflet directive. Where ui-leaflet
would be the main dependency.

Examples:

- [ui-leaflet-draw](https://github.com/angular-ui/ui-leaflet-draw) leaflet draw implemented as a directive
- [ui-leaflet-layers](https://github.com/elesdoar/ui-leaflet-layers) Most layer directive logic outsourced to support all random layer plugins.

How to extend:
Create new directives, factories, and services specific to plugins. Use the decorator pattern to extend existing services, factories and directives. Specifically see [ui-leaflet-draw](https://github.com/angular-ui/ui-leaflet-draw) as it decorates ui-leaflet.

More about decorators:

- [Ben Nadel Decorating (Monkey Patching)](http://www.bennadel.com/blog/2775-monkey-patching-the-q-service-using-provide-decorator-in-angularjs.htm)
- [Ben Nadel - Using Module.decorator() In AngularJS 1.4 (new way)](http://www.bennadel.com/blog/2870-using-module-decorator-in-angularjs-1-4.htm)
- [Jesus Rodriguez - Experiment: Decorating Directives](http://angular-tips.com/blog/2013/09/experiment-decorating-directives/)

## Goal

[AngularJS](http://angularjs.org/) directive for the [Leaflet](http://www.leafletjs.com/) Javascript
Library. This software aims to easily embed maps managed by Leaflet on your project.

[![Join the chat at https://gitter.im/angular-ui/ui-leaflet](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/angular-ui/ui-leaflet?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Build Status](https://travis-ci.org/angular-ui/ui-leaflet.png?branch=master)](https://travis-ci.org/angular-ui/ui-leaflet) [![Dependencies](https://david-dm.org/angular-ui/ui-leaflet.svg)](https://david-dm.org/angular-ui/ui-leaflet)&nbsp;
[![Dependencies](https://david-dm.org/angular-ui/ui-leaflet/dev-status.svg)](https://david-dm.org/angular-ui/ui-leaflet) [![Coverage
Status](https://coveralls.io/repos/angular-ui/ui-leaflet/badge.png?branch=master)](http://angular-ui.github.io/ui-leaflet/coverage/PhantomJS%201.9.7%20%28Linux%29/lcov-report/dist/ui-leaflet.js.html)


## Examples

[Browse all the examples](http://angular-ui.github.io/ui-leaflet/examples/0000-viewer.html) added by the community to learn about the directive and its possibilities.

## Documentation

See https://angular-ui.github.com/ui-leaflet

## How to use it

Include [angular-simple-logger](https://github.com/nmccready/angular-simple-logger) before Angular-Leaflet js files. Logger gets installed as a requirement of Angular-Leaflet with `bower install` or `npm install`. Note that if you're using the browser to load it without CommonJS (browserify, webpack) please use angular-simple-logger.js (not index.js).

Include the `ui-leaflet` dependency on your Angular module:
```
var app = angular.module('demoapp', ['nemLogging','ui-leaflet']);
```

After that, you can change the default values of the directive on
your angular controller. For example, you can change the tiles source, the
maxzoom on the Leaflet map or the polyline path properties.

```javascript
angular.extend($scope, {
    defaults: {
        tileLayer: 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
        maxZoom: 14,
        path: {
            weight: 10,
            color: '#800000',
            opacity: 1
        }
    }
});
```

If you want to set the start of the map to a precise position, you can define
the "center" property of the scope (lat, lng, zoom). It will be updated
interacting on the scope and on the leaflet map in two-way binding. Example:
```javascript
angular.extend($scope, {
    center: {
        lat: 51.505,
        lng: -0.09,
        zoom: 8
    }
});
```

If you need to run any method on the map object, use `leafletData` as following (notice the map object is returned in a form of a promise):

```javascript
angular.module('myModule').controller('MapController', ['$scope', 'leafletData',
    function($scope, leafletData) {
        leafletData.getMap().then(function(map) {
            L.GeoIP.centerMapOnPosition(map, 15);
        });
    }
]);
```

Finally, you must include the markup directive on your HTML page:
```html
<leaflet defaults="defaults" lf-center="center" height="480px" width="640px"></leaflet>
```

If you want to have more than one map on the page and access their respective map objects, add an *id* attribute to your leaflet directive in HTML:

```html
<leaflet id="mymap" defaults="defaults" lf-center="center" height="480px" width="640px"></leaflet>
```

And then you can use this id in `getMap()`:

```javascript
angular.module('myModule').controller('MapController', ['$scope', 'leafletData',
    function($scope, leafletData) {
        leafletData.getMap('mymap').then(function(map) {
            L.GeoIP.centerMapOnPosition(map, 15);
        });
    }
]);
```
