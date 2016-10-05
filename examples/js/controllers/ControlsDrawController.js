        app.controller("ControlsDrawController", [ "$scope", "leafletData", function($scope, leafletData) {
            angular.extend($scope, {
                london: {
                    lat: 51.505,
                    lng: -0.09,
                    zoom: 4
                },
                controls: {
                    draw: {}
                },
                layers: {
                    baselayers: {
                        mapbox_light: {
                            name: 'Mapbox Light',
                            type: 'mapbox',
                            user: 'elesdoar',
                            key: 'citojtj9e00022iqjmdzhrdwd',
                            apiKey: 'pk.eyJ1IjoiZWxlc2RvYXIiLCJhIjoiY2l0bmcwaDNpMDQzMTJvbDRpaTltN2dlbiJ9.KDnhRVh9St6vpQovMI7iLg',
                            layerParams: {
                                showOnSelector: false
                            }
                        }
                    },
                    overlays: {
                        draw: {
                            name: 'draw',
                            type: 'group',
                            visible: true,
                            layerParams: {
                                showOnSelector: false
                            }
                        }
                    }
                }
           });
           leafletData.getMap().then(function(map) {
               leafletData.getLayers().then(function(baselayers) {
                  var drawnItems = baselayers.overlays.draw;
                  map.on('draw:created', function (e) {
                    var layer = e.layer;
                    drawnItems.addLayer(layer);
                    console.log(JSON.stringify(layer.toGeoJSON()));
                  });
               });
           });
       }]);