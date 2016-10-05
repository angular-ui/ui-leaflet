        app.controller("LayersRefreshOverlayEveryMinuteController", [ "$scope", "$interval", function($scope, $interval) {
            angular.extend($scope, {
                amberes: {
                    lat: 51.2,
                    lng: 4.4,
                    zoom: 8
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
                    },
                    overlays: {
                        traffic: {
                            name: "Traffic Jams",
                            type: "xyz",
                            url: "http://map.be-mobile.be/customer/mobileninja/nl/los/{z}/{x}/{y}.png",
                            visible: 1,
                            doRefresh: false
                        }
                    }
                }
            });
            var refreshIntervalInSeconds = 60;
            var actualSeconds = 0;
            $interval(function() {
                if (actualSeconds === refreshIntervalInSeconds) {
                    $scope.layers.overlays.traffic.doRefresh = true;
                    console.log("Overlay refreshed.")
                    actualSeconds = 0;
                } else {
                    console.log("Next update of overlay in " + (refreshIntervalInSeconds - actualSeconds) + " seconds.");
                    actualSeconds += 1;
                }
            }, 1000);
        }]);