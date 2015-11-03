describe 'leafletMarkersHelpers', ->
    beforeEach ->
        module('ui-leaflet')
        inject (_$compile_, _$rootScope_, _leafletMarkersHelpers_) ->
            @$compile = _$compile_
            @$rootScope = _$rootScope_
            @subject = _leafletMarkersHelpers_

    it 'is defined', ->
        expect(@subject).toBeDefined()

    describe 'getLayerModels', ->
        it 'undefined models', ->
            expect(@subject.getLayerModels()).toBeUndefined()

        describe 'models', ->
            it 'defined', ->
                models =
                    1: {}
                expect(@subject.getLayerModels(models, undefined)).toBe(models)

            it 'layer defined', ->
                models =
                  layer1:
                      1: {}
                expect(@subject.getLayerModels(models, 'layer1')).toBe(models.layer1)

    describe 'getModelFromModels', ->
        it 'undefined models', ->
            expect(@subject.getModelFromModels()).toBeUndefined()

        describe 'id', ->
            it 'undefined id throws', ->
                models =
                    1: {}
                expect( -> @subject.getModelFromModels(models)).toThrow()
            it 'has id', ->
                models =
                    1: {}
                id = '1'
                expect(@subject.getModelFromModels(models, id)).toBe(models[id])

        describe 'layer, id', ->
            it 'undefined id throws', ->
                models =
                    layer1:
                        1: {}
                layer = 'layer1'
                expect( -> @subject.getModelFromModels(models, undefined, layer)).toThrow()
            it 'has id', ->
                models =
                    layer1:
                        1: {}
                id = '1'
                layer = 'layer1'
                expect(@subject.getModelFromModels(models, id, layer)).toBe(models[layer][id])
