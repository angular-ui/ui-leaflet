        app.controller("ControlsMinimapController", [ "$scope", "leafletData", function($scope, leafletData) {
            angular.extend($scope, {
                bogota: {
                    lat: 4.649,
                    lng: -74.086,
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
                controls: {}
           });
           // Wait for center to be stablished
           leafletData.getMap().then(function() {
               angular.extend($scope.controls, {
                   minimap: {
                       type: 'minimap',
                       layer: {
                           name: 'OpenStreetMap',
                           url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                           type: 'xyz'
                       },
                       toggleDisplay: true
                   }
               });
           });
       }]);