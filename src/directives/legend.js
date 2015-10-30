angular.module("ui-leaflet").directive('legend', function (leafletLogger, $http, $timeout, leafletHelpers, leafletLegendHelpers) {
        var $log = leafletLogger,
            errorHeader = leafletHelpers.errorHeader + ' [Legend] ';
        return {
            restrict: "A",
            scope: false,
            replace: false,
            require: 'leaflet',
            transclude: false,

            link: function (scope, element, attrs, controller) {

                var isArray = leafletHelpers.isArray,
                    isString = leafletHelpers.isString,
                    isDefined = leafletHelpers.isDefined,
                    isFunction = leafletHelpers.isFunction,
                    leafletScope = controller.getLeafletScope(),
                    legend = leafletScope.legend;

                var legendClass;
                var position;
                var leafletLegend;
                var type;

                leafletScope.$watch('legend', function (newLegend) {

                    if (isDefined(newLegend)) {
                        legendClass = newLegend.legendClass ? newLegend.legendClass : "legend";
                        position = newLegend.position || 'bottomright';
                        // default to arcgis
                        type = newLegend.type || 'arcgis';
                    }
                }, true);

                var createLegend = function(map, legendData, newURL) {
                    if(legendData && legendData.layers && legendData.layers.length > 0) {
                        if (isDefined(leafletLegend)) {
                            leafletLegendHelpers.updateLegend(leafletLegend.getContainer(), legendData, type, newURL);
                        } else {
                            leafletLegend = L.control({
                                position: position
                            });
                            leafletLegend.onAdd = leafletLegendHelpers.getOnAddLegend(legendData, legendClass, type, newURL);
                            leafletLegend.addTo(map);
                        }

                        if (isDefined(legend.loadedData) && isFunction(legend.loadedData)) {
                            legend.loadedData();
                        }
                    }
                };

                controller.getMap().then(function (map) {
                    leafletScope.$watch('legend', function (newLegend) {
                        if (!isDefined(newLegend)) {
                            if (isDefined(leafletLegend)) {
                                leafletLegend.removeFrom(map);
                                leafletLegend= null;
                            }

                            return;
                        }

                        if (!isDefined(newLegend.url) && (type === 'arcgis') && (!isArray(newLegend.colors) || !isArray(newLegend.labels) || newLegend.colors.length !== newLegend.labels.length)) {
                            $log.warn(errorHeader + " legend.colors and legend.labels must be set.");
                            return;
                        }

                        if (isDefined(newLegend.url)) {
                            $log.info(errorHeader + " loading legend service.");
                            return;
                        }

                        if (isDefined(leafletLegend)) {
                            leafletLegend.removeFrom(map);
                            leafletLegend= null;
                        }

                        leafletLegend = L.control({
                            position: position
                        });

                        if (type === 'arcgis') {
                            leafletLegend.onAdd = leafletLegendHelpers.getOnAddArrayLegend(newLegend, legendClass);
                        }
                        leafletLegend.addTo(map);
                    });

                    leafletScope.$watch('legend.url', function (newURL) {
                        if (!isDefined(newURL)) {
                            return;
                        }

                        if(!isArray(newURL) && !isString(newURL)) {
                            $log.warn(errorHeader + " legend.url must be an array or string.");
                            return;
                        }

                        var urls = isString(newURL)? [newURL]:newURL;

                        var legendData;
                        var onResult = function(idx, url) {
                            return function(ld) {
                                if(isDefined(ld.data.error)) {
                                    $log.warn(errorHeader + 'Error loadin legend from: ' + url, ld.data.error.message);
                                } else {
                                    if(legendData && legendData.layers && legendData.layers.length > 0) {
                                        legendData.layers = legendData.layers.concat(ld.data.layers);
                                    } else {
                                        legendData = ld.data;
                                    }
                                }

                                if(idx === urls.length-1) {
                                    createLegend(map, legendData, newURL);
                                }
                            };
                        };
                        var onError = function(err) {
                            $log.warn(errorHeader + ' legend.url not loaded.', err);
                        };

                        for(var i = 0; i < urls.length; i++) {
                            leafletLegendHelpers.addLegendURL(attrs.id, {
                                url: urls[i],
                                method: 'GET'
                            }).then(onResult(i)).catch(onError);
                        }
                    });

                    leafletScope.$watch('legend.legendData', function (legendData) {
                        $log.debug('legendData', legendData);
                        if(isDefined(leafletScope.legend.url) || !isDefined(legendData)) {
                            return;
                        }

                        createLegend(map, legendData);
                    }, true);
                });

            }
        };
    });
