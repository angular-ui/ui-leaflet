        app.controller('MapboxGLController', function($scope, $timeout) {
            var defaults = {
                center: {
                    lat: 38.91275,
                    lng: -77.032194,
                    zoom: 15
                },
                layers: {
                    overlays: {},
                    baselayers: {}
                }
            };
            angular.extend($scope, defaults);
            $scope.style = 'mapbox://styles/mapbox/streets-v8';
            $scope.pitch = 0;
            var mapboxGlLayer = {
                name: 'Sample',
                type: 'mapboxGL',
                layerOptions: {
                    accessToken: $scope.accessToken,
                    style: $scope.style,
                    pitch: $scope.pitch
                }
            };
            $scope.$watch('accessToken', function (newToken) {
                if (!newToken) {
                    $scope.error = 'Mapbox GL Token needed!';
                    return;
                }
                $scope.error = null;
                $scope.layers.baselayers = {};
                $timeout(function () {
                    angular.extend(mapboxGlLayer.layerOptions, {accessToken: newToken});
                    $scope.layers.baselayers[mapboxGlLayer.name] = mapboxGlLayer;
                });
            });
            $scope.$watch('style', function (newStyle) {
                $scope.layers.baselayers = {};
                $timeout(function () {
                    angular.extend(mapboxGlLayer.layerOptions, {style: newStyle});
                    $scope.layers.baselayers[mapboxGlLayer.name] = mapboxGlLayer;
                });
            })
            $scope.$watch('pitch', function (pitch) {
                $scope.layers.baselayers = {};
                $timeout(function () {
                    angular.extend(mapboxGlLayer.layerOptions, {pitch: pitch});
                    $scope.layers.baselayers[mapboxGlLayer.name] = mapboxGlLayer;
                });
            });
        });