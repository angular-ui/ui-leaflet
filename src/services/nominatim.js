angular
    .module("ui-leaflet")
    .factory("nominatimService", function(
        $q,
        $http,
        leafletHelpers,
        leafletMapDefaults
    ) {
        return {
            query: function query(address, mapId) {
                var defaults = leafletMapDefaults.getDefaults(mapId);
                var url = defaults.nominatim.server;
                var df = $q.defer();

                if (angular.version.major === 1 && angular.version.minor < 6) {
                    $http
                        .get(url, {
                            params: { format: "json", limit: 1, q: address }
                        })
                        .success(function(data) {
                            resolvePromise(data, df);
                        });
                } else {
                    $http
                        .get(url, {
                            params: { format: "json", limit: 1, q: address }
                        })
                        .then(function(response) {
                            resolvePromise(response.data, df);
                        });
                }
                return df.promise;
            }
        };

        function resolvePromise(data, promise) {
            var isDefined = leafletHelpers.isDefined;
            if (data.length > 0 && isDefined(data[0].boundingbox)) {
                promise.resolve(data[0]);
            } else {
                promise.reject("[Nominatim] Invalid address");
            }
        }
    });
