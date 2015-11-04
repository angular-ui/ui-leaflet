angular.module('ui-leaflet')
.service('leafletWatchHelpers', function (){

    var _maybe = function(scope, watchFunctionName, thingToWatchStr, watchOptions, initCb){
        var unWatch = scope[watchFunctionName](thingToWatchStr, function(newValue, oldValue) {
            //make the unWatch function available to the callback as well.
            initCb(newValue, oldValue, unWatch);
            if(watchOptions.type === null)
                unWatch();
        }, watchOptions.type === 'watchDeep');

        return unWatch;
    };

  /*
  @name: maybeWatch
  @description: Utility to watch something once or forever.
  @returns unWatch function
  @param watchOptions - This object is used to determine the type of
  watch used.
  */
  var _maybeWatch = function(scope, thingToWatchStr, watchOptions, initCb){
      var watchMethod;

      if(watchOptions.type === 'watchCollection') {
          watchMethod = '$watchCollection';
      }
      else {
          watchMethod = '$watch';
      }


      return _maybe(scope, watchMethod, thingToWatchStr, watchOptions, initCb);
  };

  return {
    maybeWatch: _maybeWatch
  };
});
