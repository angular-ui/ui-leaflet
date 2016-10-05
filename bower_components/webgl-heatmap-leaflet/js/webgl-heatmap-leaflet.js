/*
 * MIT Copyright 2016 Ursudio <info@ursudio.com>
 * http://www.ursudio.com/
 * Please attribute Ursudio in any production associated with this JavaScript plugin.
 */

L.WebGLHeatMap = L.Class.extend({

	version : '0.7.7', // tested with leaflet v 0.7.7

    options: {
        size: 30000,
        units : 'm', // m|px
        opacity: 1,
		gradientTexture: false,
		alphaRange: 1
    },

    initialize: function (options) {
    	var c = document.createElement("canvas");

        L.Util.setOptions(this, options);

		c.id = 'webgl-leaflet-' + L.Util.stamp(this);
        c.style.opacity = this.options.opacity;
        c.style.position = 'absolute';
        	
        this.gl = createWebGLHeatmap({ 
			canvas: c, 
			gradientTexture: this.options.gradientTexture, 
			alphaRange: [0, this.options.alphaRange]
		});

		this.canvas = c;
    },

    addTo : function (map) {
    	map.addLayer( this );
    	return this;
    },

    onAdd: function (map) {
        this.map = map;

        if ( map.options.zoomAnimation ) {
        	this.canvas.className = 'leaflet-zoom-animated';
        }

		map.getPanes().overlayPane.appendChild( this.canvas );
		this._events('on');
		this.resize();
    },
    
    onRemove: function (map) {
       	map.getPanes().overlayPane.removeChild( this.canvas );
       	this._events('off');
    },

    _events : function ( onoff ) {
        var onoff = onoff || 'on',
        	map = this.map,
            events = [
                'resize',
                'move',
                'moveend'
            ];

        if ( map.options.zoomAnimation ) {
        	events.push( 'zoomanim' );
        }

        for (var i = 0, len = events.length; i < len; i++) {
            var e = events[ i ];
            map[ onoff ](e, this[ e ], this);
        }
    },

    resize: function () {
		var canvas = this.canvas,
			size = this.map.getSize();
		
		canvas.width = size.x;
		canvas.height = size.y;

		this.gl.adjustSize();
		this.reposition();
		this.draw();
    },
    
    reposition: function () {
    	var pos = this.map._getMapPanePos().multiplyBy(-1);

		L.DomUtil.setPosition(this.canvas, pos);
    },

    zoomanim : function ( e ) {
        var map = this.map,
            scale = e.scale,
            offset = map._getCenterOffset( e.center )
                ._multiplyBy( -scale )
                .subtract( map._getMapPanePos() );

        this.canvas.style[L.DomUtil.TRANSFORM] = L.DomUtil
        	.getTranslateString( offset ) + 
        	' scale(' + scale + ') ';
    },

    move : function () {
		this.draw();
    },

    moveend : function () {
    	this.resize();
    },
	
    draw : function () {
		var map = this.map,
			heatmap = this.gl,
			dataLen = this.data.length,
			options = this.options;

		if (!map) return;

		this.reposition();

		heatmap.clear();

		if (dataLen) {

            for (var i = 0; i < dataLen; i++) {
				var dataVal = this.data[i],
					latlng = L.latLng.apply(this, dataVal),
					point = map.latLngToContainerPoint( latlng );
                
                heatmap.addPoint(
                    Math.floor(point.x),
                    Math.floor(point.y),
                    this._scale(latlng),
					dataVal[2]
				);
            }

            heatmap.update();

            if (this._multiply) {
            	heatmap.multiply( this._multiply );
            	heatmap.update();
            }

        }
        heatmap.display();
    },
	
	// necessary to maintain accurately sized circles
	// to change scale to miles (for example), you will need to convert 40075017 (equatorial circumference of the Earth in metres) to miles
    _scale: function (latlng) {
    	if (this.options.units == 'px') return this.options.size;

        var map = this.map,
        	lngRadius = (this.options.size / 40075017) * 
        	360 / Math.cos(L.LatLng.DEG_TO_RAD * latlng.lat),
			latlng2 = new L.LatLng(latlng.lat, latlng.lng - lngRadius),
			point = map.latLngToLayerPoint(latlng),
			point2 = map.latLngToLayerPoint(latlng2);
	        
		return Math.max(Math.round(point.x - point2.x), 1);
    },

    data : [],
	
    addDataPoint: function (lat, lon, value) {
        this.data.push( [ lat, lon, value / 100 ] );
    },
	
    setData: function (dataset) {
		// format: [[lat, lon, intensity],...]
		this.data = dataset;
		this._multiply = null;
		this.draw();
    },
	
    clear: function () {
		this.setData([]);
    },

    // affects original points
    multiply: function (n) {
    	this._multiply = n;
    	this.draw();
    }

});

L.webGLHeatmap = function ( options ) {
    return new L.WebGLHeatMap( options );
};
