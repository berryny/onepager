$.when(
	$.getJSON( "https://data.cityofnewyork.us/resource/94pk-v63f.json" ),
	$.ready
).done(function( data ) {
	// Document is ready.
	// Value of test.json is passed as `data`.
	//console.log('data',data)
	var farmersMarketFoodBox = data[0];
	console.log('farmersMarketFoodBox', farmersMarketFoodBox);
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
});