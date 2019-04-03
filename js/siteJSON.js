var navbar = {
	"about": "About",
	"blog" : "Blog",
	"services": "services",
	"contact": "Contact"
};

/*
	Shorthand for $( document ).ready()
	https://api.jquery.com/ready/
*/
$(function() {
	for (var n in navbar) {
		console.log('navbar', n, navbar[n])
		/* 
			Append li into ul container 
			https://api.jquery.com/append/#append-content-content
		*/
		$("ul.navbar").append('<li><a href="#'+n+'">'+navbar[n]+'</a></li>');
	}
});
$.when(
	$.getJSON( "https://data.cityofnewyork.us/resource/94pk-v63f.json" ),
	$.ready
).done(function( data ) {
	// Document is ready.
	// Value of test.json is passed as `data`.
	//console.log('data',data)
	var nycMarkets = data[0];
	console.log('nycMarkets', nycMarkets);
	/* 
		Use tidy markup for visibility. https://www.10bestdesign.com/dirtymarkup/js/

		Fields:
			service_type
			facilityname
			address
			zipcode
			borough
			accepts_ebt
			website
			open_year_round
			var daysoftheweek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
			nyc_dept_of_health_cooking
			additionalinfo

		Read 'Fields' dataset at https://dev.socrata.com/foundry/data.cityofnewyork.us/94pk-v63f
	*/


	//Market display
	if (document.getElementById("dohmh")) {
		console.log('found #dohmh');
		var div = document.createElement('div');
		document.getElementById("dohmh").appendChild(div).setAttribute('id', 'dohmh_container')
		document.getElementById("dohmh_container").setAttribute('class', 'clearfix');

		console.log('nycMarkets', nycMarkets, nycMarkets.length);
		var i = 0;
		for ( i; i < nycMarkets.length; i++) {
			//nycMarkets[i];
			//console.log('nycMarkets[i]', nycMarkets[i])
			document.getElementById("dohmh_container").appendChild(document.createElement('div')).setAttribute('class', 'boxes');
			console.log(document.getElementsByClassName("boxes")[i]);
			var cooking = (nycMarkets[i].nyc_dept_of_health_cooking === true) ? "Yes" : "No";
			var openYearRound = (nycMarkets[i].open_year_round === true) ? "Yes" : "No";
			var acceptsEBT = (nycMarkets[i].accepts_ebt === true)
				? "Yes, learn more at <a href='http://otda.ny.gov/workingfamilies/ebt/' target='_blank'>Electronic Benefits Transfer (EBT) Card</a>" 
				: "No";

			var html = "<h2 class='facilityname'>"+nycMarkets[i].facilityname+"</h2>" +
						"<address>"+nycMarkets[i].address+"<br>"+nycMarkets[i].borough+"<br>"+nycMarkets[i].zipcode+"</address>" +
						"<p class='service'><span>"+nycMarkets[i].service_category+"</span><span>"+nycMarkets[i].service_type+"</span></p>" +
						"<p class='open_year_round'>Open Year Round: "+openYearRound+"</p>" +
						"<p class='website'><a href='"+nycMarkets[i].website+"' target='_blank'>website</a></p>" +
						"<p class='nyc_dept_of_health_cooking'>Cooking: "+ cooking +"</p>" + 
						"<p class='accepts_ebt'>Accepts EBT: "+acceptsEBT+"</p>"

			document.getElementsByClassName("boxes")[i].innerHTML = html;
		}
	} else {
		console.log('error');		
	}

	
});

	var map;
	      function initMap() {
	        map = new google.maps.Map(document.getElementById('map'), {
	          zoom: 2,
	          center: new google.maps.LatLng(2.8,-187.3),
	          mapTypeId: 'terrain'
	        });

	        // Create a <script> tag and set the USGS URL as the source.
	        var script = document.createElement('script');
	        // This example uses a local copy of the GeoJSON stored at
	        // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
	        script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
	        document.getElementsByTagName('head')[0].appendChild(script);
	      }

	      // Loop through the results array and place a marker for each
	      // set of coordinates.
	      window.eqfeed_callback = function(results) {
	        for (var i = 0; i < results.features.length; i++) {
	          var coords = results.features[i].geometry.coordinates;
	          var latLng = new google.maps.LatLng(coords[1],coords[0]);
	          var marker = new google.maps.Marker({
	            position: latLng,
	            map: map
	          });
	        }
	      }
/*
	      window.eqfeed_callback = function(results) {
	        for (var i = 0; i < nycMarkets.length; i++) {
	          var coords = nycMarkets[i].coordinates;
	          var latLng = new google.maps.LatLng(coords[1],coords[0]);
	          var marker = new google.maps.Marker({
	            position: latLng,
	            map: map
	          });
	        }
	      }
*/