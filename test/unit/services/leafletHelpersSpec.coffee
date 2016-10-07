describe 'leafletHelpers', ->
    beforeEach ->
        module('ui-leaflet')
        inject (_$compile_, _$rootScope_, _leafletData_, _leafletHelpers_) ->
            @$compile = _$compile_
            @$rootScope = _$rootScope_
            @leafletData = _leafletData_
            @subject = _leafletHelpers_

    describe 'isTruthy', ->

        describe 'is true', ->
            it "'true'", ->
                expect(@subject.isTruthy("true")).toBeTruthy()
            it "true", ->
                expect(@subject.isTruthy(true)).toBeTruthy()

        describe 'is false', ->
            it "'false'", ->
                expect(@subject.isTruthy("false")).toBeFalsy()
            it "false", ->
                expect(@subject.isTruthy(false)).toBeFalsy()
            it "undefined", ->
                expect(@subject.isTruthy(undefined)).toBeFalsy()

    describe 'defaultTo', ->

        it 'keeps value', ->
            it 'false', ->
                expect(@subject.defaultTo(false, true)).toBeTruthy()

            it 'string', ->
                expect(@subject.defaultTo('hi', 'nope')).toBe('hi')

            it '{}', ->
                expect(@subject.defaultTo({}, null)).toBe({})

        describe 'gets default', ->
            it 'undefined', ->
                expect(@subject.defaultTo(undefined, '')).toBe('')
            it 'null', ->
                expect(@subject.defaultTo(null, '')).toBe('')

    describe 'Object Helpers', ->
        describe 'get / getObjectValue', ->
            it 'should correctly fetch object values using dot-notation', ->
                object = { foo: { sea: 'hawks' }}
                expect(@subject.getObjectValue(object, 'foo.sea')).toEqual('hawks')
                expect(@subject.getObjectValue(object, 'foo.sea.birds')).toEqual(undefined)
                expect(@subject.getObjectValue(object, 'boo.hoo')).toEqual(undefined)


            describe 'undefined tests', ->
                it 'starts undefined is undefined', ->
                    object = undefined
                    expect(@subject.get(object, 'foo.sea')).toBeFalsy()

                it 'second depth field undefined, with attempt to access third depth', ->
                    object =
                        second:
                            third:
                                fourth: true

                    expect(@subject.get(object, 'second.third.fourth')).toBeTruthy()

                    object.second.third = undefined
                    expect(@subject.get(object, 'second.third.fourth'))


    describe 'obtainEffectiveMapId', ->
        describe 'no mapId', ->
            it 'zero args bombs', ->
                expect(=> @subject.obtainEffectiveMapId()).toThrow()
            it 'root obj only', ->
                expect(@subject.obtainEffectiveMapId({})).toBe('main')
            it 'root obj only d: main:{}', ->
                expect(@subject.obtainEffectiveMapId(main: {})).toBe('main')
            it 'root many maps no mapId with "main" throws', ->
                expect( => @subject.obtainEffectiveMapId({main: {}, map2: {}}))
                .toThrow()
            it 'root many maps no mapId throws', ->
                expect( => @subject.obtainEffectiveMapId({map1: {}, map2: {}}))
                .toThrow()
