<a name="2.0.0"></a>
# [2.0.0](https://github.com/angular-ui/ui-leaflet/compare/v1.0.0...v1.0.2) (2016-10-05)


### Bug Fixes

* **angular 1.5:** codebase works with angular 1.5, and some other random jshint fixes ([e2b78d4](https://github.com/angular-ui/ui-leaflet/commit/e2b78d4))
* **events:** fix [#235](https://github.com/angular-ui/ui-leaflet/issues/235) errors when id is interpolated ([e6b7790](https://github.com/angular-ui/ui-leaflet/commit/e6b7790)), closes [#278](https://github.com/angular-ui/ui-leaflet/issues/278)
* **grunt, karma:** huge glob would run out of memory. Removed ([06657c9](https://github.com/angular-ui/ui-leaflet/commit/06657c9))
* **markers:** change _existDomContainer to existDomContainer ([10b7ae3](https://github.com/angular-ui/ui-leaflet/commit/10b7ae3))
* **markers:** change angular.isDefined to isDefined ([6488ece](https://github.com/angular-ui/ui-leaflet/commit/6488ece))
* **markers:** fix dom markers memory leaks ([ceb4169](https://github.com/angular-ui/ui-leaflet/commit/ceb4169))
* **markers:** fix problem with old groups ([bd65183](https://github.com/angular-ui/ui-leaflet/commit/bd65183))
* **markers:** reduce angular.equals calls ([68ac352](https://github.com/angular-ui/ui-leaflet/commit/68ac352))
* **markers:** reset only unused markers groups ([2220515](https://github.com/angular-ui/ui-leaflet/commit/2220515))


### Features

* **center:** add url-hash-param, URL param for center ([0664847](https://github.com/angular-ui/ui-leaflet/commit/0664847))
* **EventManager:** Added an event manager which is part of our ui-leaflet modularization refactor. It allows us to dispatch/trigger events for our plugins to listen for. ([d34bfc8](https://github.com/angular-ui/ui-leaflet/commit/d34bfc8))
* **layers:** add z-index watch for ordering layers ([5438017](https://github.com/angular-ui/ui-leaflet/commit/5438017))
* **layers:** watch to layerOptions.opacity property ([12003b4](https://github.com/angular-ui/ui-leaflet/commit/12003b4))
* **markers,paths,geojson,watchOptions:** More flexible watch options and more ([963de33](https://github.com/angular-ui/ui-leaflet/commit/963de33))
* **travis:** Added travis slack integration ([d1fc37d](https://github.com/angular-ui/ui-leaflet/commit/d1fc37d))


### BREAKING CHANGES

* markers,paths,geojson,watchOptions: `markersWatchOptions`, `geojsonWatchOptions`, `watch-markers`,
and `watch-paths` are no longer supported. The format of the watch options has
also changed.

Before:

```
<leaflet defaults='defaults' markers-watch-options='markerWatchOptions'>
```

After:

```
<leaflet defaults='defaults' watch-options='watchOptions'>

<script>
    $scope.watchOptions = {
        markers: <watchOptions>
    }
</script>
```

The same can be said for `geojson`.

WatchOptions. `shouldWatch` and `isDeep` are no longer supported, but the
same behaviour can be achieved:

`shouldWatch: true`, `isDeep: true` = `type = 'watchDeep'`
`shouldWatch: true`, `isDeep: false` = `type = 'watch'`
`shouldWatch: false`, `isDeep: false` = `type = null`
`shouldWatch: false`, `isDeep: true` = `type = null`

Furthermore,

Before:

```
<leaflet watch-markers='false'>
```

After:

```
<leaflet watch-options='watchOptions'>

<script>
$scope.watchOptions = {
    markers: {
        type: null,
        individual: {
            type: null
        }
    }
};
</script>
```

`watch-paths='false'` can be achieved in a similar manner.



<a name="1.0.0"></a>
# [1.0.0](https://github.com/angular-ui/ui-leaflet/compare/v0.9.0...v1.0.0) (2015-10-29)



<a name="0.9.0"></a>
# [0.9.0](https://github.com/angular-ui/ui-leaflet/compare/v0.8.8...v0.9.0) (2015-10-12)


### Bug Fixes

* **build:** Added "core" to .gitignore to avoid more "core" files inside distributed version. ([2ff48c3](https://github.com/angular-ui/ui-leaflet/commit/2ff48c3))



<a name="0.8.8"></a>
## [0.8.8](https://github.com/angular-ui/ui-leaflet/compare/v0.8.7...v0.8.8) (2015-09-04)


### Bug Fixes

* **center:** Fix bug with scope.center ([277ebc5](https://github.com/angular-ui/ui-leaflet/commit/277ebc5))
* **center:** Fix bug with scope.center via [@ageblade](https://github.com/ageblade) ([7e718c5](https://github.com/angular-ui/ui-leaflet/commit/7e718c5))


### Features

* **layers:** Add support for Leaflet.TileLayer.IIP ([ec0fe74](https://github.com/angular-ui/ui-leaflet/commit/ec0fe74))
* **lf-center:** lfCenter or 'lf-center' added which is a dupe of ([06b5a3f](https://github.com/angular-ui/ui-leaflet/commit/06b5a3f))



<a name="0.8.7"></a>
## [0.8.7](https://github.com/angular-ui/ui-leaflet/compare/v0.8.6...v0.8.7) (2015-08-26)


### Bug Fixes

* **code:** Deleted uneeded file ([5be6c45](https://github.com/angular-ui/ui-leaflet/commit/5be6c45))
* **controls:** Solved a problem with loading custom controls, as reported by [@adgoncal](https://github.com/adgoncal) here: ([a1843f2](https://github.com/angular-ui/ui-leaflet/commit/a1843f2))
* **dependencies:** remove dependency font-awesome ([f735e85](https://github.com/angular-ui/ui-leaflet/commit/f735e85))
* **dependencies:** utfgrid now specifies main file ([79c6a25](https://github.com/angular-ui/ui-leaflet/commit/79c6a25))
* **paths:** Better log description with a path inside overlay error ([a02c304](https://github.com/angular-ui/ui-leaflet/commit/a02c304))


### Features

* **examples:** Added new example of loading custom controls ([979a733](https://github.com/angular-ui/ui-leaflet/commit/979a733))
* **examples:** Compiled the examples with the new GeoGJSON Shape Layer added by [@stev](https://github.com/stev)-0 here: ([1f5e86a](https://github.com/angular-ui/ui-leaflet/commit/1f5e86a))



<a name="0.8.6"></a>
## [0.8.6](https://github.com/angular-ui/ui-leaflet/compare/v0.8.5...v0.8.6) (2015-07-28)


### Bug Fixes

* **dependencies:** JSDOM must be version below 4.x to be able to work with NodeJS ([45f706b](https://github.com/angular-ui/ui-leaflet/commit/45f706b))
* **dependencies:** JSDOM must be version below 4.x to be able to work with NodeJS ([575bd06](https://github.com/angular-ui/ui-leaflet/commit/575bd06))
* **dependencies:** Require any AngularJS library between the 1.x major versions ([ad7d402](https://github.com/angular-ui/ui-leaflet/commit/ad7d402))
* **libraries:** Updated bower.json with AngularJS latest stable version: ([50ec972](https://github.com/angular-ui/ui-leaflet/commit/50ec972))
* **marker:** use correct individual isDeep watch parameter ([17fb090](https://github.com/angular-ui/ui-leaflet/commit/17fb090)), closes [#854](https://github.com/angular-ui/ui-leaflet/issues/854)


### Features

* **bounds:** Added the nominatim address way of setting bounds, as requested by [@stefan](https://github.com/stefan)-niedermann here: ([6e16cad](https://github.com/angular-ui/ui-leaflet/commit/6e16cad))
* **bounds:** Extracted the nominatim functionality as a service, to be able to use it from center and markers ([11e9e31](https://github.com/angular-ui/ui-leaflet/commit/11e9e31))
* **controls:** Added new example of the search-plugin ([18597cb](https://github.com/angular-ui/ui-leaflet/commit/18597cb))
* **controls:** Reworked and cleaned up "controls" code. Now is possible to add/remove controls dinamically, and it's very easy to extend controls with new ones. ([2d008cc](https://github.com/angular-ui/ui-leaflet/commit/2d008cc))
* **examples:** Added a new example of setting bounds with Nominatim feature. ([4898629](https://github.com/angular-ui/ui-leaflet/commit/4898629))



<a name="0.8.5"></a>
## [0.8.5](https://github.com/angular-ui/ui-leaflet/compare/v0.8.4...v0.8.5) (2015-06-29)


### Bug Fixes

* **build:** grunt-graphviz added to devDeps ([b2236ac](https://github.com/angular-ui/ui-leaflet/commit/b2236ac))
* **center:** cleanup some center code, based on this issue by [@pieterjandesmedt](https://github.com/pieterjandesmedt): ([ea1d52a](https://github.com/angular-ui/ui-leaflet/commit/ea1d52a))
* **labels:** labels added to existing markers are now bound ([f464f9c](https://github.com/angular-ui/ui-leaflet/commit/f464f9c))
* **markers updates:** Marker Clean up and storage was incorrect on how ([6fc72b4](https://github.com/angular-ui/ui-leaflet/commit/6fc72b4))


### Features

* **control:** Add minimap control option ([d25962d](https://github.com/angular-ui/ui-leaflet/commit/d25962d)), closes [#797](https://github.com/angular-ui/ui-leaflet/issues/797)
* **layercontrol:** Add group option ([93e3397](https://github.com/angular-ui/ui-leaflet/commit/93e3397))
* **layercontrol:** Add groups for layers ([6c35d44](https://github.com/angular-ui/ui-leaflet/commit/6c35d44))
* **layercontrol:** New layer control ([2767705](https://github.com/angular-ui/ui-leaflet/commit/2767705))
* **layers:** Add Esri basemap layer ([267f2a9](https://github.com/angular-ui/ui-leaflet/commit/267f2a9))
* **layers:** Add Esri clustered layer ([103af26](https://github.com/angular-ui/ui-leaflet/commit/103af26))
* **layers:** Add Esri feature layer ([8e2c2c9](https://github.com/angular-ui/ui-leaflet/commit/8e2c2c9))
* **layers:** Add Esri heatmap layer ([8e9f7fa](https://github.com/angular-ui/ui-leaflet/commit/8e9f7fa))
* **layers:** Add Esri image layer ([6bad236](https://github.com/angular-ui/ui-leaflet/commit/6bad236))
* **layers:** Add Esri tile map layer ([831d2ae](https://github.com/angular-ui/ui-leaflet/commit/831d2ae))



<a name="0.8.4"></a>
## [0.8.4](https://github.com/angular-ui/ui-leaflet/compare/v0.8.3...v0.8.4) (2015-06-14)


### Bug Fixes

* **popups position markers:** POST BUILD/MERGE popups position after being compiled. Refactored open popup functionality ([0b88566](https://github.com/angular-ui/ui-leaflet/commit/0b88566))


### Features

* **graphs:** architecture png graphs in dist/architecture/** ([f00fcd3](https://github.com/angular-ui/ui-leaflet/commit/f00fcd3))



<a name="0.8.3"></a>
## [0.8.3](https://github.com/angular-ui/ui-leaflet/compare/v0.8.2...v0.8.3) (2015-06-11)



<a name="0.8.2"></a>
## [0.8.2](https://github.com/angular-ui/ui-leaflet/compare/v0.8.1...v0.8.2) (2015-06-03)



<a name="0.8.1"></a>
## [0.8.1](https://github.com/angular-ui/ui-leaflet/compare/v0.8.0...v0.8.1) (2015-05-13)



<a name="0.8.0"></a>
# [0.8.0](https://github.com/angular-ui/ui-leaflet/compare/v0.7.15...v0.8.0) (2015-05-13)


### Bug Fixes

* **layers:** Extra check to the doRefresh property ([874a7a3](https://github.com/angular-ui/ui-leaflet/commit/874a7a3))
* **layers:** Extra check to the doRefresh property ([dec7a60](https://github.com/angular-ui/ui-leaflet/commit/dec7a60))


### Features

* **layers:** Added the possibility to manually refresh a layer without removing and adding again using the doRefrsh property. ([480bdde](https://github.com/angular-ui/ui-leaflet/commit/480bdde))



<a name="0.7.15"></a>
## [0.7.15](https://github.com/angular-ui/ui-leaflet/compare/v0.7.14...v0.7.15) (2015-04-22)



<a name="0.7.14"></a>
## [0.7.14](https://github.com/angular-ui/ui-leaflet/compare/v0.7.13...v0.7.14) (2015-04-20)



<a name="0.7.13"></a>
## [0.7.13](https://github.com/angular-ui/ui-leaflet/compare/v0.7.12...v0.7.13) (2015-04-14)



<a name="0.7.12"></a>
## [0.7.12](https://github.com/angular-ui/ui-leaflet/compare/v0.7.11...v0.7.12) (2015-04-14)


### Bug Fixes

* bad caching for _layerControl ([bbeb54e](https://github.com/angular-ui/ui-leaflet/commit/bbeb54e))
* **marker:** Tests passing again after this new functionality: ([e0c7d2d](https://github.com/angular-ui/ui-leaflet/commit/e0c7d2d))
* **markers:** Solved a bug related with the default icon position, thanks to [@Jespersm75](https://github.com/Jespersm75) for reporting here: ([9626e19](https://github.com/angular-ui/ui-leaflet/commit/9626e19))


### Features

* **controls:** Added the scale control and an example showing it. Thanks to [@dts](https://github.com/dts) here: ([7f1fbf5](https://github.com/angular-ui/ui-leaflet/commit/7f1fbf5))
* **events:** Reworked the marker events. We use the "emit" login instead of "broadcast" for markers. ([5c50f7f](https://github.com/angular-ui/ui-leaflet/commit/5c50f7f))
* **examples:** New bootstrap-ui integration with modal and a map with marker-clustering. Example by [@Getz85](https://github.com/Getz85) here: ([bceff46](https://github.com/angular-ui/ui-leaflet/commit/bceff46))



<a name="0.7.11"></a>
## [0.7.11](https://github.com/angular-ui/ui-leaflet/compare/v0.7.10...v0.7.11) (2015-01-17)


### Bug Fixes

* **geojson:** Shallow watch of the geojson object to accomplish better performance, as stated by [@facultymatt](https://github.com/facultymatt) here: ([c893a1a](https://github.com/angular-ui/ui-leaflet/commit/c893a1a))
* **markerCompilation:** use specified scope to listen to includeContentLoaded ([2d93794](https://github.com/angular-ui/ui-leaflet/commit/2d93794))
* **paths:** Solved a bug with paths and layerGroup management. Reported by [@ValentinH](https://github.com/ValentinH) here: ([10ac4e8](https://github.com/angular-ui/ui-leaflet/commit/10ac4e8))



<a name="0.7.10"></a>
## [0.7.10](https://github.com/angular-ui/ui-leaflet/compare/v0.7.9...v0.7.10) (2014-12-12)



<a name="0.7.9"></a>
## [0.7.9](https://github.com/angular-ui/ui-leaflet/compare/v0.7.8...v0.7.9) (2014-10-28)


### Bug Fixes

* Pass popup options in all calls to marker.bindPopup() ([6f47631](https://github.com/angular-ui/ui-leaflet/commit/6f47631))
* Solved bug on utfgrid example ([9f78d3a](https://github.com/angular-ui/ui-leaflet/commit/9f78d3a))
* **center:** Solved the autodiscover problem reported by [@facultymatt](https://github.com/facultymatt) here: ([ba9d6ef](https://github.com/angular-ui/ui-leaflet/commit/ba9d6ef))
* **core:** Fixed a bug in the fuction obtainEffectiveMapId as reported by [@porjo](https://github.com/porjo) here: ([5e6b73b](https://github.com/angular-ui/ui-leaflet/commit/5e6b73b))
* **core:** Fixed a map destroy bug reported by [@porjo](https://github.com/porjo) here: ([7255d91](https://github.com/angular-ui/ui-leaflet/commit/7255d91))
* **examples:** Fixed some mess on the path-types-example ([a40dee2](https://github.com/angular-ui/ui-leaflet/commit/a40dee2))
* **layers:** Added a log error message when no layer type is provided ([53c6bcb](https://github.com/angular-ui/ui-leaflet/commit/53c6bcb))


### Features

* Updated examples ([0e7d02b](https://github.com/angular-ui/ui-leaflet/commit/0e7d02b))
* **examples:** Little improvement on decorations-simple-example.html ([4573100](https://github.com/angular-ui/ui-leaflet/commit/4573100))
* **examples:** new example of paths with ajax loading of data ([99ca74f](https://github.com/angular-ui/ui-leaflet/commit/99ca74f))
* **examples:** Updated simple layers example with Mapbox maps ([fabaa05](https://github.com/angular-ui/ui-leaflet/commit/fabaa05))



<a name="0.7.8"></a>
## [0.7.8](https://github.com/angular-ui/ui-leaflet/compare/v0.7.7...v0.7.8) (2014-08-27)


### Features

* **build:** Used load-grunt-config to modularize the build process ([5644088](https://github.com/angular-ui/ui-leaflet/commit/5644088))



<a name="0.7.7"></a>
## [0.7.7](https://github.com/angular-ui/ui-leaflet/compare/v0.7.6...v0.7.7) (2014-05-06)



<a name="0.7.6"></a>
## [0.7.6](https://github.com/angular-ui/ui-leaflet/compare/v0.7.5...v0.7.6) (2014-03-20)


### Bug Fixes

* **center:** solved a bug with the autoDiscover property. ([823934d](https://github.com/angular-ui/ui-leaflet/commit/823934d))
* **markers:** Bug solved which prevents to create a markers group without overlay ([2017f1a](https://github.com/angular-ui/ui-leaflet/commit/2017f1a))
* **tiles:** Fixed a bug related with multiple maps on screen and tiles. Thanks to [@gabrielhase](https://github.com/gabrielhase). ([3a77452](https://github.com/angular-ui/ui-leaflet/commit/3a77452))
* **url-center:** round the latlng to 4 digits as suggested by [@fbuchinger](https://github.com/fbuchinger) here: ([4a6d755](https://github.com/angular-ui/ui-leaflet/commit/4a6d755))


### Features

* **build:** Added a new GeoJSON layer. Thanks to [@cktong](https://github.com/cktong): ([e9c391d](https://github.com/angular-ui/ui-leaflet/commit/e9c391d))
* **build:** Added a special property "url-hash-center" which allows to sync the center with an URL param. ([e361dad](https://github.com/angular-ui/ui-leaflet/commit/e361dad))
* **build:** Dinamically add and remove the layers control. ([ac0ce4b](https://github.com/angular-ui/ui-leaflet/commit/ac0ce4b))
* **documentation:** Added more "markers" attribute documentation. ([4dacd3d](https://github.com/angular-ui/ui-leaflet/commit/4dacd3d))
* **example:** Added a new example of marker clustering without overlays ([8a65587](https://github.com/angular-ui/ui-leaflet/commit/8a65587))
* **test:** Added unitary tests and protractor tests for the new url-hash-center property ([d43ff38](https://github.com/angular-ui/ui-leaflet/commit/d43ff38))
* **url-center-hash:** Listen for URL changes to update the center. ([ebad626](https://github.com/angular-ui/ui-leaflet/commit/ebad626))



<a name="0.7.5"></a>
## [0.7.5](https://github.com/angular-ui/ui-leaflet/compare/v0.7.4...v0.7.5) (2014-02-09)


### Features

* **build:** Avoid conflicts on bower installation. Reported by [@petka535](https://github.com/petka535) here: ([ec7711b](https://github.com/angular-ui/ui-leaflet/commit/ec7711b))



<a name="0.7.4"></a>
## [0.7.4](https://github.com/angular-ui/ui-leaflet/compare/v0.7.3...v0.7.4) (2014-02-09)


### Features

* **build:** Embed default marker icon as a base64 string. Thanks to [@couclock](https://github.com/couclock) for reporting here: ([b0e40cb](https://github.com/angular-ui/ui-leaflet/commit/b0e40cb))
* **build:** Solved some bugs with the markers management, and reworked example markers-update. ([754db7f](https://github.com/angular-ui/ui-leaflet/commit/754db7f))
* **build:** travis integration with coveralls.io. ([8270989](https://github.com/angular-ui/ui-leaflet/commit/8270989))
* **documentation:** Initial "markers" attribute documentation. ([ec7dc69](https://github.com/angular-ui/ui-leaflet/commit/ec7dc69))
* **layers:** Added the GeoJSON layer functionality by [@cktong](https://github.com/cktong). ([fba0d0d](https://github.com/angular-ui/ui-leaflet/commit/fba0d0d))
* **markers:** When a marker popup is changed on map the marker object is updated in the scope ([ae66898](https://github.com/angular-ui/ui-leaflet/commit/ae66898))



<a name="0.7.3"></a>
## [0.7.3](https://github.com/angular-ui/ui-leaflet/compare/v0.7.2...v0.7.3) (2014-01-11)


### Bug Fixes

* **paths:** Solved a bug on the scope watching of the paths attribute. ([0663b30](https://github.com/angular-ui/ui-leaflet/commit/0663b30))


### Features

* **build:** Added the possibility to group the markers in MarkerCluster without using overlays. ([0d35b2c](https://github.com/angular-ui/ui-leaflet/commit/0d35b2c))
* **build:** Moved all the event management functionality into leafletEvents service. ([cd5fc09](https://github.com/angular-ui/ui-leaflet/commit/cd5fc09))
* **build:** Refactor paths attribute ([c321784](https://github.com/angular-ui/ui-leaflet/commit/c321784))
* **documentation:** Started the paths attribute documentation ([972cad1](https://github.com/angular-ui/ui-leaflet/commit/972cad1))
* **documentation:** Updated paths attribute documentation ([082b16c](https://github.com/angular-ui/ui-leaflet/commit/082b16c))
* **examples:** Added a new and simplified paths example ([2e991d7](https://github.com/angular-ui/ui-leaflet/commit/2e991d7))
* **examples:** Added a new paths example: paths-simple-example.html ([66bc692](https://github.com/angular-ui/ui-leaflet/commit/66bc692))
* **examples:** Added a new simplified example to the paths attribute ([c380b74](https://github.com/angular-ui/ui-leaflet/commit/c380b74))
* **examples:** All the examples dependencies linked to the bower_components folder. ([d9b0cdb](https://github.com/angular-ui/ui-leaflet/commit/d9b0cdb))
* **examples:** New example of layer+markers with markerclustering usage ([d0230d0](https://github.com/angular-ui/ui-leaflet/commit/d0230d0))
* **examples:** New examples of markers attribute. ([753e509](https://github.com/angular-ui/ui-leaflet/commit/753e509))
* **Gruntfile:** Updated protractor-runner to allow running the e2e tests from various browsers from command-line parameters. ([01e9f0d](https://github.com/angular-ui/ui-leaflet/commit/01e9f0d))
* **markers:** The icon definition has ben changed to be an object of properties, not a Leaflet Icon object ([b45df20](https://github.com/angular-ui/ui-leaflet/commit/b45df20))
* **tests:** Added a new E2E protractor tests for the paths-simple-example.html ([c74c231](https://github.com/angular-ui/ui-leaflet/commit/c74c231))



<a name="0.7.2"></a>
## [0.7.2](https://github.com/angular-ui/ui-leaflet/compare/v0.7.1...v0.7.2) (2013-12-29)


### Bug Fixes

* **build:** Solved some performance and functional issues with the "bounds" attribute. ([901259a](https://github.com/angular-ui/ui-leaflet/commit/901259a))
* **build:** When a baselayer + overlay was added the layer switch control was not shown. ([20ca399](https://github.com/angular-ui/ui-leaflet/commit/20ca399))
* **features:** Reworked 'maxBounds' attribute with new maxbounds-example.html ([e60a152](https://github.com/angular-ui/ui-leaflet/commit/e60a152))
* **tests:** Fixed the waiting times on the protractor e2e test googlemaps-example.html ([4e67f35](https://github.com/angular-ui/ui-leaflet/commit/4e67f35))


### Features

* **build:** 'maxBounds' attribute renamed as 'maxbounds'. ([b2f541c](https://github.com/angular-ui/ui-leaflet/commit/b2f541c))
* **build:** 'maxbounds' updated to work with leaflet 0.7.1 ([fe57501](https://github.com/angular-ui/ui-leaflet/commit/fe57501))
* **build:** Added a new createBoundsFromArray helper, proposed by [@lukasz](https://github.com/lukasz)-zak here: ([0adacda](https://github.com/angular-ui/ui-leaflet/commit/0adacda))
* **build:** Added a new service of bounds helpers: leafletBoundsHelpers ([eac699a](https://github.com/angular-ui/ui-leaflet/commit/eac699a))
* **build:** Updated grunt-protractor-runner and protractor configuration to version 0.15.0 ([ea836c3](https://github.com/angular-ui/ui-leaflet/commit/ea836c3))
* **documentation:** Added the 'layers' documentation section. ([bf783e8](https://github.com/angular-ui/ui-leaflet/commit/bf783e8))
* **documentation:** Added the layers attribute documentation ([d26b01a](https://github.com/angular-ui/ui-leaflet/commit/d26b01a))
* **examples:** Added a new example: layers-imageoverlay-example.html ([ebfd4b6](https://github.com/angular-ui/ui-leaflet/commit/ebfd4b6))
* **examples:** Added a new overlays-simple-example.html ([55a24a2](https://github.com/angular-ui/ui-leaflet/commit/55a24a2))
* **examples:** Added the tiles-zoom-changer example by [@yagoferrer](https://github.com/yagoferrer) as an standalone example. ([8abe8b4](https://github.com/angular-ui/ui-leaflet/commit/8abe8b4))
* **test:** Added a new e2e test for layers-simple-example.html ([85ac00f](https://github.com/angular-ui/ui-leaflet/commit/85ac00f))
* **test:** Added a new test for the maxbounds-example.html ([ee45e41](https://github.com/angular-ui/ui-leaflet/commit/ee45e41))
* **test:** Added a test for overlay-simple-example.html ([6134220](https://github.com/angular-ui/ui-leaflet/commit/6134220))
* **test:** Added the SauceLabs selenium testing to the travis build CI ([51d5154](https://github.com/angular-ui/ui-leaflet/commit/51d5154))
* **tests:** Added a new e2e test for: layers-imageoverlay-example.html ([5eb20dc](https://github.com/angular-ui/ui-leaflet/commit/5eb20dc))



<a name="0.7.1"></a>
## [0.7.1](https://github.com/angular-ui/ui-leaflet/compare/v0.7.0...v0.7.1) (2013-12-22)


### Bug Fixes

* **build:** Removed the center undefined log message as noted by [@ngoldman](https://github.com/ngoldman) here: ([a41e4ef](https://github.com/angular-ui/ui-leaflet/commit/a41e4ef))
* **build:** Solved a problem with the render of the Google Maps Layer, reported by [@pwoloszum](https://github.com/pwoloszum) here: ([73f17c0](https://github.com/angular-ui/ui-leaflet/commit/73f17c0))
* **grunt:** Added the e2e protractor tests to the Grunt watch cycle. ([95ac183](https://github.com/angular-ui/ui-leaflet/commit/95ac183))
* **libraries:** Updated Leaflet.markercluster to version 0.4 on bower.json. Thanks to [@Hyzhak](https://github.com/Hyzhak) for reporting here: ([a7adada](https://github.com/angular-ui/ui-leaflet/commit/a7adada))
* **test:** Updated e2e tests to pass the jshint validations ([acee2b0](https://github.com/angular-ui/ui-leaflet/commit/acee2b0))
* **tests:** Some code updates to the e2e tests ([5e47141](https://github.com/angular-ui/ui-leaflet/commit/5e47141))


### Features

* **examples:** Make the buttons toggable on the marker-groups-example.html made by [@yagoferrer](https://github.com/yagoferrer) here: ([0699cf7](https://github.com/angular-ui/ui-leaflet/commit/0699cf7))
* **test:** Added a test for the googlemaps-example.html ([98f68c0](https://github.com/angular-ui/ui-leaflet/commit/98f68c0))
* **test:** Added an e2e test to the custom-parameters-example.html ([3ce6a72](https://github.com/angular-ui/ui-leaflet/commit/3ce6a72))
* **test:** Completed e2e tests for the bounds example. ([1c40d60](https://github.com/angular-ui/ui-leaflet/commit/1c40d60))



<a name="0.7.0"></a>
# [0.7.0](https://github.com/angular-ui/ui-leaflet/compare/v0.6.2...v0.7.0) (2013-12-15)


### Bug Fixes

* **build:** Removed the center undefined log message as noted by [@ngoldman](https://github.com/ngoldman) here: https://github.com/tombatossals/angular-leaflet-directive/issues/206 ([08b569f](https://github.com/angular-ui/ui-leaflet/commit/08b569f))


### Features

* **build:** Added a new layers management example (layers-simple-example.html). ([1be141c](https://github.com/angular-ui/ui-leaflet/commit/1be141c))
* **build:** Added a new service leafletMarkerHelpers with the methods needed to manage the marker attribute ([f0dadaf](https://github.com/angular-ui/ui-leaflet/commit/f0dadaf))
* **build:** Only show the layer selector switch control if the layers added are more than one. ([343a662](https://github.com/angular-ui/ui-leaflet/commit/343a662))
* **build:** Re-worked layer type code, lot easier to add new layer types now. ([061a52c](https://github.com/angular-ui/ui-leaflet/commit/061a52c))
* **build:** We can disable the watch on the markers adding a 'watch-markers="no"' to our directive. Thanks to [@fwitzke](https://github.com/fwitzke). ([543b625](https://github.com/angular-ui/ui-leaflet/commit/543b625))
* **documentation:** Added a detailed CONTRIBUTING.md file which explains the software development cycle used. ([c773738](https://github.com/angular-ui/ui-leaflet/commit/c773738))
* **documentation:** Started a new documentation section inside the folder "doc" of the project, written in markdown. ([cf238d7](https://github.com/angular-ui/ui-leaflet/commit/cf238d7))
* **Documentation:** More detailed documentation of how to contribute to the project. ([5eaf07f](https://github.com/angular-ui/ui-leaflet/commit/5eaf07f))
* **test:** Added a new e2e test for the bounds-example.html ([1fa57eb](https://github.com/angular-ui/ui-leaflet/commit/1fa57eb))



<a name="0.6.2"></a>
## [0.6.2](https://github.com/angular-ui/ui-leaflet/compare/v0.6.1...v0.6.2) (2013-12-13)


### Bug Fixes

* **build:** Updated dependencies versions on package.json file ([0ac454d](https://github.com/angular-ui/ui-leaflet/commit/0ac454d))


### Features

* **build:** Added grunt-bump to the project: https://github.com/vojtajina/grunt-bump ([1a1c074](https://github.com/angular-ui/ui-leaflet/commit/1a1c074))
* **build:** Manage the Changelog with "grunt-conventional-changelog": ([ac807a3](https://github.com/angular-ui/ui-leaflet/commit/ac807a3))



<a name="0.6.1"></a>
## [0.6.1](https://github.com/angular-ui/ui-leaflet/compare/v0.6.0...v0.6.1) (2013-11-01)



<a name="0.5.2"></a>
## [0.5.2](https://github.com/angular-ui/ui-leaflet/compare/v0.5.1...v0.5.2) (2013-08-22)



<a name="0.5.1"></a>
## [0.5.1](https://github.com/angular-ui/ui-leaflet/compare/v0.5.0...v0.5.1) (2013-07-17)



<a name="0.3.3"></a>
## [0.3.3](https://github.com/angular-ui/ui-leaflet/compare/v0.4.0...v0.3.3) (2013-07-05)



<a name="0.4.0"></a>
# [0.4.0](https://github.com/angular-ui/ui-leaflet/compare/v0.3.2...v0.4.0) (2013-07-04)



