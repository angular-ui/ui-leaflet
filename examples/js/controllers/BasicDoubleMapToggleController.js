        app.controller("BasicDoubleMapToggleController", [ "$scope", "$log", "leafletData", function($scope, $log, leafletData) {
            angular.extend($scope, {
                center: {
                    lat: 51.505,
                    lng: -0.09,
                    zoom: 5
                },
                paths: {
                    p1: {
                        color: 'blue',
                        weight: 8,
                        latlngs: [{
                            lat: 51.50,
                            lng: -0.082
                        }, {
                            lat: 48.83,
                            lng: 2.37
                        }, {
                            lat: 41.91,
                            lng: 12.48
                        }]
                    }
                },
            });
            angular.extend($scope, {
                center2: {
                    lat: 51.505,
                    lng: -0.09,
                    zoom: 5
                },
                tiles2: {
                    name: 'Mapbox Outdoors',
                    url: '//api.mapbox.com/styles/v1/{user}/{mapId}/tiles/256/{z}/{x}/{y}?access_token={apiKey}',
                    type: 'xyz',
                    options: {
                        user: 'elesdoar',
                        apiKey: 'pk.eyJ1IjoiZWxlc2RvYXIiLCJhIjoiY2l0bmcwaDNpMDQzMTJvbDRpaTltN2dlbiJ9.KDnhRVh9St6vpQovMI7iLg',
                        mapId: 'citng3g0g003s2it88y9lg769'
                    }
                },
                paths2: {
                    p1: {
                        color: 'red',
                        weight: 8,
                        latlngs: [{
                            lat: 51.50,
                            lng: -0.082
                        }, {
                            lat: 48.83,
                            lng: 2.37
                        }, {
                            lat: 41.91,
                            lng: 12.48
                        }]
                    }
                },
            });
        }]);