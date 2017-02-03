    app.controller('MixedMOverlaysMarkersNoWatchController', function ($scope, leafletData, $timeout, leafletLogger) {
      leafletLogger.currentLevel = leafletLogger.LEVELS.debug;
        var _clonedMarkers;
        $timeout(function () {
            //should do nothing (not watched) and only see one destroy
            _clonedMarkers = angular.copy($scope.markers);
        },1000);
        $timeout(function () {
            leafletData.getDirectiveControls().then(function (controls) {
                //move all markers by a few decimal points
                for (var markerName in _clonedMarkers) {
                    var marker = _clonedMarkers[markerName];
                    marker.lat += .05;
                }
                //force manual update
                controls.markers.create(_clonedMarkers ,$scope.markers);
                $scope.markers = _clonedMarkers;
            });
        }, 4000);
        angular.extend($scope, {
            markersWatchOptions: {
                doWatch: false,
                isDeep: false,
                individual: {
                    doWatch: false,
                    isDeep: false
                }
            },
            center: {
                lat: 42.20133,
                lng: 2.19110,
                zoom: 11
            },
            markers: {
              m1: {
                  lat: 42.20133,
                  lng: 2.19110,
                  message: "I'm a car"
              },
              m2: {
                  lat: 42.21133,
                  lng: 2.18110,
                  message: "I'm a car"
              }
            }
        });
    });