'use strict';

/*jshint -W117 */
/*jshint globalstrict: true*/
/* jasmine specs for directives go here */

describe('Directive: leaflet', function() {
    var $compile = null, $rootScope = null, $timeout, leafletData = null, leafletMapDefaults = null;

    beforeEach(function(){
      // window.doTestLog = true;
      module('ui-leaflet');
      inject(function(_$compile_, _$rootScope_, _$timeout_, _leafletData_, _leafletMapDefaults_) {
          $compile = _$compile_;
          $rootScope = _$rootScope_;
          $timeout = _$timeout_;
          leafletData = _leafletData_;
          leafletMapDefaults = _leafletMapDefaults_;
      });
    });

    afterEach(inject(function($rootScope) {
        $rootScope.$apply();
    }));

    it('should change the center if maxbounds specified', function() {
        angular.extend($rootScope, {
            maxbounds: {
                southWest: {
                    lat: 52.14823737817847,
                    lng: 20.793685913085934
                },
                northEast: {
                    lat: 52.31645452105213,
                    lng: 21.233139038085938
                }
            },
            defaults: {
                zoomAnimation: false
            }
        });
        var element = angular.element('<leaflet defaults="defaults" maxbounds="maxbounds"></leaflet>');
        element = $compile(element)($rootScope);
        var leafletMap;
        leafletData.getMap().then(function(map) {
            leafletMap = map;
        });
        this.digest($rootScope);
        var decimalPlaces = 13; //PhantomJS appears to be diff then chrome
        //This test doesn't really prove anything; be better to create a map object from scratch and
        //set its maxbounds and compare it to this one through the directive
        expect(leafletMap.getCenter().lat.toFixed(decimalPlaces)).toBe((52.2324256302307).toFixed(decimalPlaces));
        expect(leafletMap.getCenter().lng.toFixed(decimalPlaces)).toBe((21.0134124755859).toFixed(decimalPlaces));
    });

});
