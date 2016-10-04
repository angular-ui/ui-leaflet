        app.controller("LayersHeatmapController", [ "$scope", function($scope) {
            var dataPoints = [
                [50.5, 30.5, 0.2], // lat, lng, intensity
                [50.6, 30.4, 0.5],
                [44.651144316,-63.586260171, 0.5],
                [44.75, -63.5, 0.8] ];
            angular.extend($scope, {
                center: {
                    lat: -37.87,
                    lng: 175.475,
                    zoom: 12
                },
                layers: {
                    baselayers: {
                        osm: {
                            name: 'OpenStreetMap',
                            url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                            type: 'xyz'
                        }
                    },
                    overlays: {
                        heatmap: {
                            name: 'Heat Map',
                            type: 'heat',
                            data: addressPoints.map(function (p) { return [p[0], p[1]]; }),
                            visible: true
                        }
                    }
                }
            });
        }]);