        app.controller("ControlsFullscreenController", [ "$scope", function($scope) {
            angular.extend($scope, {
                london: {
                    lat: 37.8,
                    lng: -96,
                    zoom: 5
                },
                tiles: {
                    name: 'Mapbox Comic',
                    url: '//api.mapbox.com/styles/v1/{user}/{mapId}/tiles/256/{z}/{x}/{y}?access_token={apiKey}',
                    type: 'xyz',
                    options: {
                        user: 'elesdoar',
                        apiKey: 'pk.eyJ1IjoiZWxlc2RvYXIiLCJhIjoiY2l0bmcwaDNpMDQzMTJvbDRpaTltN2dlbiJ9.KDnhRVh9St6vpQovMI7iLg',
                        mapId: 'cii0r8pax00zvaikonyem8014'
                    }
                },
                controls: {
                    fullscreen: {
                        position: 'topleft'
                    }
                }
           });
       }]);