        app.controller("LegendEsriLegendDataLegendServiceController", ["$scope", "$http", "$log", "leafletData", function($scope, $http, $log, leafletData) {
            angular.extend($scope, {
            	options: {
            		controls: {
            			layers: {
            				visible: false
            			}
            		}
            	},
                usa: {
	            	lat: 39.931486,
	                lng: -101.406250,
	                zoom: 3
	            },
                markers: {
                    m1: {
                        lat: 39.931486,
	                	lng: -101.406250,
                    }
                },
                layers: {
					baselayers: {
                        mapbox_light: {
                            name: 'Mapbox Light',
                            type: 'mapbox',
                            user: 'elesdoar',
                            key: 'citojtj9e00022iqjmdzhrdwd',
                            apiKey: 'pk.eyJ1IjoiZWxlc2RvYXIiLCJhIjoiY2l0bmcwaDNpMDQzMTJvbDRpaTltN2dlbiJ9.KDnhRVh9St6vpQovMI7iLg'
                        }
                   },
                   overlays: {
				    	usa_pop: {
					    	name: "USA 2000-2010 Population Change",
					        type: "agsDynamic",
					        url: "http://services.arcgisonline.com/arcgis/rest/services/Demographics/USA_1990-2000_Population_Change/MapServer",
					        visible: true,
					        layerOptions: {
				                opacity: 0.85,
				                attribution: "Copyright:© 2014 Esri, DeLorme, HERE, TomTom"
					        }
				    	}
                    },
                },
                legend: {
                	legendClass: "info legend-esri",
					position: "bottomleft",
                    legendData: null
                }
            });
            leafletData.getMap().then(function(map) {
                $http.get("http://services.arcgisonline.com/arcgis/rest/services/Demographics/USA_1990-2000_Population_Change/MapServer/legend?f=json")
                    .then(function(data) {
                        $log.debug('data', data);
                        $scope.legend.legendData = data.data;
                    });
            });
        }]);