        app.controller("LayersHeatmapController", ["$scope", "$http", function($scope, $http) {
            var points = [];
            var heatmap = {
                name: 'Heat Map',
                type: 'heat',
                data: points,
                visible: true
            };
            $http.get("json/heat-points.json").success(function(data) {
                $scope.layers.overlays = {
                    heat: {
                        name: 'Heat Map',
                        type: 'heat',
                        data: data,
                        layerOptions: {
                            radius: 20,
                            blur: 10
                        },
                        visible: true
                    }
                };
            });
            angular.extend($scope, {
                center: {
                    lat: 37.774546,
                    lng: -122.433523,
                    zoom: 12
                },
                layers: {
                    baselayers: {
                        mapbox_light: {
                            name: 'Mapbox Light',
                            type: 'mapbox',
                            user: 'elesdoar',
                            key: 'citojtj9e00022iqjmdzhrdwd',
                            apiKey: 'pk.eyJ1IjoiZWxlc2RvYXIiLCJhIjoiY2l0bmcwaDNpMDQzMTJvbDRpaTltN2dlbiJ9.KDnhRVh9St6vpQovMI7iLg'
                        }
                    }
                }
            });
        }]);