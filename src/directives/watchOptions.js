angular.module('ui-leaflet').directive('watchOptions', [
    '$log', '$rootScope', '$q', 'leafletData', 'leafletHelpers',
    function (leafletLogger, $rootScope, $q, leafletData, leafletHelpers) {

        var isDefined = leafletHelpers.isDefined,
            errorHeader = leafletHelpers.errorHeader,
            isObject = leafletHelpers.isObject,
            $log = leafletLogger;

        return {
            restrict: "A",
            scope: false,
            replace: false,
            require: ['leaflet'],

            link: function (scope, element, attrs, controller) {
                var mapController = controller[0],
                    leafletScope = mapController.getLeafletScope();

                var _isValidWatchType = function(type) {
                    return type === 'watch' ||
                            type === 'watchCollection' ||
                            type === 'watchDeep' ||
                            type === null;
                };

                if(isDefined(leafletScope.watchOptions) && isObject(leafletScope.watchOptions)) {
                    angular.forEach(['markers', 'geojson', 'paths'], function(name) {
                        if (isDefined(leafletScope.watchOptions[name])) {
                            if(!_isValidWatchType(leafletScope.watchOptions[name].type)) {
                                $log.error(errorHeader + ' watchOptions.' + name + '.type is not a valid type.');
                            }
                            if(isDefined(leafletScope.watchOptions[name].individual)) {
                                if(!_isValidWatchType(leafletScope.watchOptions[name].individual.type)) {
                                    $log.error(errorHeader + ' watchOptions.' + name + '.individual.type is not a valid type.');
                                }
                            }
                            else {
                                $log.error(errorHeader + ' watchOptions.' + name + '.type.individual must be defined.');
                            }
                        }
                    });
                }
            }
        };
}]);
