        app.controller("LayersHideOverlaysOnSelectorController", [ "$scope", function($scope) {
            angular.extend($scope, {
                center: {
                    lat: 39,
                    lng: -100,
                    zoom: 4
                },
                defaults: {
                    scrollWheelZoom: false
                },
                layers: {
                    baselayers: {
                        xyz: {
                            name: 'Mapbox Outdoors',
                            type: 'mapbox',
                            user: 'elesdoar',
                            apiKey: 'pk.eyJ1IjoiZWxlc2RvYXIiLCJhIjoiY2l0bmcwaDNpMDQzMTJvbDRpaTltN2dlbiJ9.KDnhRVh9St6vpQovMI7iLg',
                            key: 'citng3g0g003s2it88y9lg769'
                        }
                    },
                    overlays: {
                        wms: {
                            name: 'EEUU States (WMS)',
                            type: 'wms',
                            visible: true,
                            url: 'http://suite.opengeo.org/geoserver/usa/wms',
                            layerParams: {
                                showOnSelector: false,
                                layers: 'usa:states',
                                format: 'image/png',
                                transparent: true
                            }
                        }
                    }
                }
            });
        }]);