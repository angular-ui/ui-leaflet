angular.module('ui-leaflet').service('leafletLogger', function(nemSimpleLogger) {
  return nemSimpleLogger.spawn();
});
