angular.module('ui-leaflet')
.factory('leafletDrawEvents', function(leafletEventsHelpersFactory) {

  class DrawEvents extends leafletEventsHelpersFactory{
    constructor() {
      super('leafletDirectiveDraw', 'draw');
    }

    getAvailableEvents() {
      return [
        'created',
        'edited',
        'deleted',
        'drawstart',
        'drawstop',
        'editstart',
        'editstop',
        'deletestart',
        'deletestop'].map( (n) => {
          return 'draw:' + n;
      });
    }

  }
  return new DrawEvents();
});
