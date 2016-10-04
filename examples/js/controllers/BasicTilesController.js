        app.controller('BasicTilesController', [ '$scope', function($scope) {
            var tilesDict = {
                openstreetmap: {
                    url: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                    options: {
                        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    }
                },
                opencyclemap: {
                    url: "http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png",
                    options: {
                        attribution: 'All maps &copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>, map data &copy; <a href="http://www.openstreetmap.org">OpenStreetMap</a> (<a href="http://www.openstreetmap.org/copyright">ODbL</a>'
                    }
                },
                mapbox_outdoors: {
                    name: 'Mapbox Outdoors',
                    url: '//api.mapbox.com/styles/v1/{user}/{mapId}/tiles/256/{z}/{x}/{y}?access_token={apiKey}',
                    type: 'xyz',
                    options: {
                        user: 'elesdoar',
                        apiKey: 'pk.eyJ1IjoiZWxlc2RvYXIiLCJhIjoiY2l0bmcwaDNpMDQzMTJvbDRpaTltN2dlbiJ9.KDnhRVh9St6vpQovMI7iLg',
                        mapId: 'citng3g0g003s2it88y9lg769'
                    }
                },
                mapbox_satellite: {
                    name: 'Mapbox Wheat Paste',
                    url: '//api.mapbox.com/styles/v1/{user}/{mapId}/tiles/256/{z}/{x}/{y}?access_token={apiKey}',
                    type: 'xyz',
                    options: {
                        user: 'elesdoar',
                        apiKey: 'pk.eyJ1IjoiZWxlc2RvYXIiLCJhIjoiY2l0bmcwaDNpMDQzMTJvbDRpaTltN2dlbiJ9.KDnhRVh9St6vpQovMI7iLg',
                        mapId: 'citngqecv00362hphvm5m7myb'
                    }
                }
            };
            angular.extend($scope, {
                london: {
                    lat: 51.505,
                    lng: -0.09,
                    zoom: 8
                },
                tiles: tilesDict.mapbox_satellite
            });
            $scope.changeTiles = function(tiles) {
                $scope.tiles = tilesDict[tiles];
            };
        } ]);