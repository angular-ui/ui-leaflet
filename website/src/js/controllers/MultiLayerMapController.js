app.controller("MultiLayerMapController", [ '$scope', function($scope) {

    var tiles = {
        osm: {
            url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        },
        cycle: {
            url: 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png'
        },
        mapbox_light: {
            name: 'Mapbox Light',
            url: '//api.mapbox.com/styles/v1/{user}/{mapId}/tiles/256/{z}/{x}/{y}?access_token={apiKey}',
            type: 'xyz',
            options: {
                user: 'elesdoar',
                apiKey: 'pk.eyJ1IjoiZWxlc2RvYXIiLCJhIjoiY2l0bmcwaDNpMDQzMTJvbDRpaTltN2dlbiJ9.KDnhRVh9St6vpQovMI7iLg',
                mapId: 'citojtj9e00022iqjmdzhrdwd'
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
        }
    };

    $scope.setBaseLayer = function(layerKey) {
        var tile = tiles[layerKey];
        var url = tile.url;

        if (tile.hasOwnProperty("options")) {
            for (var key in tile.options) {
                if (tile.options.hasOwnProperty(key)) {
                    url = url.replace("{" + key + "}", tile.options[key]);
                }
            }
        }
        $scope.tiles.url = url;
    };

    var osm;
    osm = angular.copy(tiles.osm, osm);
    angular.extend($scope, {
        center: {
            lat: 40.8471,
            lng: 14.0625,
            zoom: 3
        },
        defaults: {
            scrollWheelZoom: false
        },
        tiles: osm
    });
} ]);
