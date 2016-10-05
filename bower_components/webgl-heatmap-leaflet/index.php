<?php 
function printTitle ($title) {
	echo '<a name="' . strtolower($title) . '"></a>';
	echo '<h3><a href="#' . strtolower($title) . '">'.ucwords($title).':</a></h3>';
}
?>		
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="author" content="Ursudio" />
	<meta name="robots" content="noindex, nofollow, noarchive" />
	<meta name="viewport" content="width=820" />
	<link rel="stylesheet" href="//cdn.leafletjs.com/leaflet/v0.7.7/leaflet.css"></link>
	<link href='http://fonts.googleapis.com/css?family=Open+Sans|Fjalla+One' rel='stylesheet' type='text/css'>
	<link type="text/css" rel="stylesheet" href="css/shCoreEclipse.css"/>
	<style>
		html { 
			background:#F0F0F0; 
			color:#555; 
			font-family:arial, sans-serif; font-family: 'Open Sans', sans-serif; 
		}
		h1, 
		h2 { 
			text-shadow: #FFF 1px 1px 0; 
			font-family: 'Fjalla One', sans-serif; 
		}
		h3 { 
			color:#7CAD55; 
		}
		h3:before { 
			content:"#"; 
			color:#DDD; 
			position:absolute; 
			margin-left:-20px; 
		}
		a { 
			color:#7C9ED1; 
			text-decoration:none; 
			transition: all .3s; 
			-moz-transition: all .3s; 
			-webkit-transition: all .3s; 
		}
		a:hover { 
			color:#BDBD44; 
		}
		#navigation a:before, 
		#navigation a:after { 
			margin-top:5px;
			transition: all .1s ease-out;
			-webkit-transition: all .1s ease-out;
			-moz-transition: all .1s ease-out;
			position: absolute;
			opacity:0;
			display:block;
			visibility:hidden;
		}
		#navigation a:before {
			content: '';
			border: 8px solid transparent;
			border-bottom-color:black;
			top:24px;
			left:35%;
		}
		#navigation a:after {
			content: attr(data-title);
			background: black;
			color: white;
			padding: 2px 7px;
			top: 40px;
			font-size:.8em;
			text-align:center;
			white-space:nowrap;
		}
		#navigation li.floatRight a:after {
			right:0;
		}
		#navigation a:hover:before, 
		#navigation a:hover:after { 
			margin-top:0;
			opacity: 1;
			visibility: visible;
		}

		#navigation ul {
			padding: 0 50px;
		}

		a[name] {
			position:absolute;
			margin-top:-40px;
		}
		body { 
			margin:0; 
		}
		.container { 
			padding:15px 10%; 
		}
		.container.first { 
			padding:5px 0; 
			position:fixed; 
			z-index:9999; 
			width:100%; 
			background: #DDD;
		}
		.container.last { 
			background:#222 url(images/dark_wall.png); 
			min-height:185px; 
		}
		ul { 
			list-style:none; 
			margin:0; 
		}
		li { 
			line-height:40px; 
		} 
		#navigation ul { 
			list-style:none; 
			height:29px; 
			margin:0; 
		}
		#navigation li { 
			float:left; 
			line-height:initial; 
			position:relative;
		}
		#navigation li.floatRight {
			float:right;
		}
		li a { 
			padding: 12px 20px; 
			color:#222; 
			transition: all .3s; 
			-moz-transition: all .3s; 
			-webkit-transition: all .3s; 
		}
		li a:hover { 
			background-color:rgba(255,255,255,.2); 
		}
		li a img { 
			vertical-align:middle; 
		}
		#header { 	
			padding:100px 0 0; 
			text-align:center; 
		}
		#map { 
			width:100%; 
			height:500px; 
			margin:0 auto 40px;
		}
		#map a { 
			color:initial; 
		}
		canvas { 
			opacity: 1 
		}
		.syntaxhighlighter { 
			overflow-y:hidden !important; 
			padding: 10px 0; 
		}
	</style>
	<!--[if lte IE 8]>
	    <link rel="stylesheet" href="leaflet/dist/leaflet.ie.css" />
	<![endif]-->
	<title>
	Web GL Heatmap Leaflet Plugin
	</title>
</head>
	<body>
	<?php
	if (file_exists('ga.php')) {
		include 'ga.php';
	}
	?>
		<div class="first container">
			<div id="navigation">
				<ul>
					<li><a target="_blank" data-title="View on Github" href="https://github.com/ursudio/webgl-heatmap-leaflet"><img src="images/github_icon_20.png" height="20"
					 /></a></li>
					 <li class="floatRight"><a target="_blank" data-title="See more Ursudio projects" href="http://www.ursudio.com/"><img src="/apple-touch-icon.png" height="20"
					 /></a></li>
					 <li class="floatRight"><a target="_blank" data-title="Try out Leaflet" href="http://www.leafletjs.com/"><img src="images/leaflet_icon_20.png" height="20"
					 /></a></li>
				</ul>
			</div>
		</div>
		<div class="container">
			<div id="header">
				<h1>WebGL Heatmap Leaflet Plugin</h1>
				<h2>Using the <a href="http://codeflow.org/entries/2013/feb/04/high-performance-js-heatmaps/" target="_blank">WebGL Heatmap library</a>, made by Florian Bösch <a href="https://twitter.com/pyalot" target="_blank">(@pyalot)</a></h2>
			</div>
		</div>
		<div id="map"></div>
		<div class="container">
			<?php printTitle('data'); ?> 
			<p>
			A visualization of the frequency and location of instagram photos tagged with <a href="http://instagram.com/aokhalifax" target="_blank">#aokhalifax</a>, a grass roots initiative to brighten the perspective of citizens and tourists: the goal being to promote positivity in Halifax.
			</p>
			<?php printTitle('options'); ?> 
			<ul>
				<li><b>size</b>: in meters (default: 30km)</li>
				<li><b>opacity</b>: in percent/100 (default: 1)</li>
				<li><b>gradientTexture</b>: url-to-texture-image (default: false)</li>
				<li><b>alphaRange</b>: change transparency in heatmap (default: 1)</li>
				<li><b>autoresize</b>: resize heatmap when map size changes (default: false)</li>
			</ul>
			<?php printTitle('usage'); ?> 
			<pre class="brush: js;">
    //Halifax, Nova Scotia
	var map = L.map('map', {
		layers : [base],
		center : [44.65, -63.57],
		zoom: 12 
	});
    
	L.tileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpg', {
		subdomains: '1234'
	}).addTo( map );

	L.control.scale().addTo(map);
	
	//custom size for this example
	var heatmap = L.webGLHeatmap({size: 1000}); 
	
	// dataPoints is an array of arrays: [[lat, lng, intensity]...]
	var dataPoints = [[44.6674, -63.5703, 37], [44.6826, -63.7552, 34], [44.6325, -63.5852, 41], [44.6467, -63.4696, 67], [44.6804, -63.487, 64], [44.6622, -63.5364, 40], [44.603, - 63.743, 52] ...];

	heatmap.setData( dataPoints );
	
	map.addLayer(heatmap);</pre>
		</div>
		<div class="last container">
			<div id="footer">
			</div>
		</div>
	<script src="//cdn.leafletjs.com/leaflet/v0.7.7/leaflet.js"></script>
	<script type="text/javascript" src="js/shCore.js"></script>
	<script type="text/javascript" src="js/shBrushJScript.js"></script>
	
	<script type="text/javascript" src="js/webgl-heatmap.js"></script>
	<script type="text/javascript" src="js/webgl-heatmap-leaflet.js"></script>
	
	<script type="text/javascript">
	var map = L.map('map', {
		center : [44.68, -63.62],
		zoom: 12 
	});
	
	L.tileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpg', {
		subdomains: '1234'
	}).addTo( map );

	map.attributionControl.addAttribution('Tiles Courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" />');
    map.attributionControl.addAttribution(' © <a href="http://www.openstreetmap.org/">OpenStreetMap</a> contributors');
	map.scrollWheelZoom.disable();
    
	L.control.scale().addTo(map);
	
	//custom size for this example, and autoresize because map style has a percentage width
	var heatmap = L.webGLHeatmap({
		size: 50,
		units : 'px',
		alphaRange: 0.4
	}); 
	
	var dataPoints = [[50.880509986,-114.081560859],[50.880509986,-114.081560859],[50.880509986,-114.081560859],[44.53666687,-64.243164062],[44.639999389,-63.613998413],[44.676998138,-63.612499237],[44.679332733,-63.610500335],[50.970165252,-114.06916809],[34.104833333,-118.323],[50.579812463,-113.872800754],[51.055080414,-114.056716919],[44.648111204,-63.577139396],[44.642322778,-63.579243422],[44.643284609,-63.568868637],[44.64246,-63.578947],[44.718542104,-63.683588477],[44.718418471,-63.683593422],[44.718461344,-63.683637427],[44.718412771,-63.683782686],[44.718390978,-63.683674224],[44.718426894,-63.683400638],[44.718389102,-63.683563615],[44.643199507,-63.568366686],[44.718326605,-63.683847729],[44.7157814,-63.686402518],[44.718411484,-63.683636892],[44.718421013,-63.683612197],[44.718408703,-63.683583046],[44.718479198,-63.683512285],[44.718442462,-63.683621787],[44.70944854,-63.693567955],[44.718409395,-63.683602933],[44.718338801,-63.684254335],[44.718401488,-63.683540924],[44.718386997,-63.683626363],[44.718386997,-63.683626363],[44.718386997,-63.683626363],[44.717759553,-63.677263503],[44.642686,-63.578319],[44.718392151,-63.683523433],[44.718386997,-63.683626363],[44.718355229,-63.683762904],[44.718500027,-63.683851836],[44.718399905,-63.683797438],[44.718426224,-63.683320424],[44.647744146,-63.575160526],[44.642261709,-63.579683304],[44.649856,-63.586578],[44.647437,-63.580284],[44.718402168,-63.683638014],[44.718503631,-63.68352226],[44.718453507,-63.683740692],[44.718406694,-63.683453947],[44.718592538,-63.683768395],[44.718500529,-63.68364891],[44.718374717,-63.683847142],[44.718296221,-63.683787212],[44.718322533,-63.683521553],[44.718461344,-63.683620161],[44.718429676,-63.683640406],[44.71843339,-63.683663914],[44.718477647,-63.683813028],[44.718398396,-63.683542209],[44.718504084,-63.683465428],[44.718575212,-63.683621166],[44.718387784,-63.683589918],[44.718244917,-63.683892581],[44.718385838,-63.683624545],[44.718397606,-63.683539988],[44.718408668,-63.683616944],[44.718401751,-63.683572637],[44.718407164,-63.683572267],[44.718424391,-63.683666915],[44.718339513,-63.683889806],[44.718404213,-63.683593903],[44.718376712,-63.683603459],[44.718365334,-63.683625158],[44.718406172,-63.683623469],[44.718357136,-63.683653095],[44.71841303,-63.683625434],[44.718367131,-63.683636757],[44.718337501,-63.683804059],[44.718377546,-63.683478126],[44.718491649,-63.68370368],[44.718393032,-63.683595266],[44.718385449,-63.683592853]];
	
	heatmap.setData( dataPoints );
	heatmap.multiply( 2 );
	
	map.addLayer( heatmap );
	
	SyntaxHighlighter.all();
	
	</script>
	
	</body>
</html>
