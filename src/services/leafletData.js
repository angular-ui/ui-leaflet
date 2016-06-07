angular.module('ui-leaflet').service('leafletData', function (leafletLogger, $q, leafletHelpers) {
    var getDefer = leafletHelpers.getDefer,
        getUnresolvedDefer = leafletHelpers.getUnresolvedDefer,
        setResolvedDefer = leafletHelpers.setResolvedDefer;
        // $log = leafletLogger;

    var _private = {};
    var self = this;

    var upperFirst = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    var _privateItems = [
        'map',
        'tiles',
        'layers',
        'paths',
        'markers',
        'geoJSON',
        'UTFGrid', //odd ball on naming convention keeping to not break
        'decorations',
        'directiveControls'];

    //init
    _privateItems.forEach(function(itemName){
        _private[itemName] = {};
    });

    this.unresolveMap = function (mapId) {
        var id = leafletHelpers.obtainEffectiveMapId(_private.map, mapId);
        _privateItems.forEach(function (itemName) {
            _private[itemName][id] = undefined;
        });
    };

    //int repetitive stuff (get and sets)
    _privateItems.forEach(function (itemName) {
        var name = upperFirst(itemName);
        self['set' + name] = function (lObject, mapId) {
            var defer = getUnresolvedDefer(_private[itemName], mapId);
            defer.resolve(lObject);
            setResolvedDefer(_private[itemName], mapId);
        };

        self['get' + name] = function (mapId) {
            var defer = getDefer(_private[itemName], mapId);
            return defer.promise;
        };
    });
});
