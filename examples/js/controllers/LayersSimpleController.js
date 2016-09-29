        app.controller("LayersSimpleController", [ "$scope", function($scope) {
            angular.extend($scope, {
                center: {
                    lat: 25.0391667,
                    lng: 121.525,
                    zoom: 6
                },
                markers: {
                    taipei: {
                        lat: 25.0391667,
                        lng: 121.525,
                    }
                },
                layers: {
                    baselayers: {
                        mapbox_light: {
                            name: 'Mapbox Light',
                            type: 'mapbox',
                            user: 'elesdoar',
                            key: 'citojtj9e00022iqjmdzhrdwd',
                            apiKey: 'pk.eyJ1IjoiZWxlc2RvYXIiLCJhIjoiY2l0bmcwaDNpMDQzMTJvbDRpaTltN2dlbiJ9.KDnhRVh9St6vpQovMI7iLg'
                        },
                        osm: {
                            name: 'OpenStreetMap',
                            url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                            type: 'xyz'
                        }
                    }
                }
            });
        }]);