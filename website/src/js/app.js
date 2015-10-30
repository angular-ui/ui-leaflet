var app = angular.module("mainPage", ['ngRoute', 'ui-leaflet', 'nemLogging', 'hljs']),
    websitePath = 'website';
app.value('$anchorScroll', angular.noop)
.config(['$provide','nemSimpleLoggerProvider', function($provide, nemSimpleLoggerProvider) {
  return $provide.decorator.apply(null, nemSimpleLoggerProvider.decorator);
}])
.config(['nemDebugProvider', function(nemDebugProvider) {
  var debug = nemDebugProvider.debug;
  debug.enable("website:*");
}])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
      templateUrl: websitePath + '/partials/main.html'
  }).when('/getting-started', {
      templateUrl: websitePath + '/partials/main.html'
  }).when('/howto-extend', {
      templateUrl: websitePath + '/partials/extend.html'
  }).when('/examples/:example', {
      templateUrl: websitePath + '/partials/examples.html',
      reloadOnSearch: false
  });
  $locationProvider.hashPrefix('!');
}]);
