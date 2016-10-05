window.ngLeafLetTestGlobals = {}

afterEach ->
    window.doTestLog = false

beforeEach ->
    digest = (scope, fn, $timeout = ngLeafLetTestGlobals.$timeout) ->

        while $timeout.hasPendingTasks()
            $timeout.flush()

        fn() if fn?
        scope.$digest() unless scope.$$phase
    @digest = digest

    angular.module('ui-leaflet')
    .config ($provide) ->
        if window.doTestLog
            $provide.value('$log', console)
        $provide.decorator '$timeout', ($delegate, $browser) ->
            $delegate.hasPendingTasks = ->
                $browser.deferredFns.length > 0

            $delegate
    .run (leafletLogger) ->
        leafletLogger.currentLevel = leafletLogger.LEVELS.info
    .service 'digestor', ($timeout, $rootScope) ->
        digest: (scope = $rootScope, fn) ->
            digest(scope, fn, $timeout)
