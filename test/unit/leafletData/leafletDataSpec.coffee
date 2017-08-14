describe 'leafletData', ->
    $q = geojsonData = mainLayers = leafletHelpers = leafletData = $rootScope = $compile = undefined

    beforeEach ->
        module('ui-leaflet')
        inject (_$compile_, _$rootScope_, _$timeout_, _leafletData_, _leafletHelpers_, _$q_) ->
            $q = _$q_
            $compile = _$compile_
            $rootScope = _$rootScope_
            leafletData = _leafletData_
            $timeout = _$timeout_
            window.ngLeafLetTestGlobals.$timeout = $timeout

    describe 'markers no mapId', ->
        beforeEach ->
            @knownMarkers = [1,2,3]
            leafletData.setMarkers(@knownMarkers)

        it 'has unique data', (done)->
            knownMarkers = @knownMarkers
            @digest $rootScope, ->
                leafletData.getMarkers().then (markers) ->
                    expect(knownMarkers).toBe(markers)
                    done()

        it "modifying localScope modifies leafletData's version", (done) ->
            @knownMarkers.push 4
            knownMarkers = @knownMarkers
            @digest $rootScope, =>
                leafletData.getMarkers().then (markers) ->
                    expect(knownMarkers).toBe(markers)
                    done()

    describe 'geojson no mapId', ->
        beforeEach ->
            @knownGeoJSON = ['1','2','3']
            leafletData.setGeoJSON(@knownGeoJSON)

        it 'has unique data', (done) ->
            knownGeoJSON = @knownGeoJSON
            @digest $rootScope, ->
                leafletData.getGeoJSON().then (geoJSON) ->
                    expect(knownGeoJSON).toBe(geoJSON)
                    done()

        it "modifying localScope modifies leafletData's version", (done) ->
            @knownGeoJSON.push '4'
            knownGeoJSON = @knownGeoJSON
            @digest $rootScope, =>
                leafletData.getGeoJSON().then (geoJSON) ->
                    expect(knownGeoJSON).toBe(geoJSON)
                    done()
