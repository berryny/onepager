console.log('External File: site.js');

/*
Assigning a variable to store strings and integer:
Create a variable called cityName and assign the value New York to it.
*/
var city;
var cityFrom = "";
var cityName = "New York City";
var x = 32;

console.log("cityName, x: ", cityName, x);

var firstname = "Judi", lastname = "Desire", occupation = "Web Developer";
console.log("firstname, lastname, occupation: ", firstname, lastname, occupation);

var num = 2019;
var numString = "2019";
console.log("x + num = ", (x+num)); // x + num =  – 2051
console.log("x + numString = ", (x+numString)); // x + numString =  – "322019"

var escapequotes = "This is Judi's \"city\" name";
console.log ("escapequotes: ", escapequotes);

/*
	String properties and methods
*/
var myString = "This is my string.";
var stringLength = myString.length;
console.log("stringLength: ", stringLength);
var convertoUpperCase = myString.toUpperCase();
console.log("convertoUpperCase: ", convertoUpperCase, myString.toUpperCase);

/* 
Number 
	JavaScript has only one type of number. Numbers can be written with or without decimals.
*/
var x = 3.14;    // A number with decimals
var y = 3;       // A number without decimals
console.log("x + y = ", (x+y), x); // 6.140000000000001 – 3.14

var x1 = 123e5;    // 12300000
var y2 = 123e-5;   // 0.00123

var a = 0.2 + 0.1;         // x will be 0.30000000000000004
var d = (0.2 * 10 + 0.1 * 10) / 10;       // x will be 0.3

/* 
Math 
	The JavaScript Math object allows you to perform mathematical tasks on numbers.
*/
var xy = (x+y);
var m = Math.round(xy);
console.log("m: ", m);

var show_random_num = Math.random();
console.log("show_random_num: ", show_random_num);

/* Boolen */
console.log("cityName: ", Boolean(cityName), cityName);
console.log("city: ", Boolean(city), city);
var x = null;
console.log("x: ", Boolean(x));

console.log("City From: ", cityFrom, Boolean(cityFrom));
cityFrom = "Brooklyn"
console.log("City From: ", cityFrom, Boolean(cityFrom));

/* Objects */
var myObj = {}
console.log(myObj)
var myObj = {
	"state": "New York",
	"zipcode": 10027
}
console.log("object: ",myObj, myObj.zipcode)

/* Arrays are used for list; JS doesn't care the type of data in the list*/

var myArray = new Array; //var myArray = new Array();
console.log(myArray);
myArray = [0, 1, 2, 'string1', 'string2', 'string3', true, false];
console.log(myArray, myArray[2]);

var daysoftheweek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(daysoftheweek, daysoftheweek[0]);
var d = new Date();
console.log("date: ", d)
var getWeekDay = d.getDay();
console.log("daysoftheweek", daysoftheweek[getWeekDay], "getWeekDay", getWeekDay);

var arrayofStuff = [
	{'name': 'Judi'}, 
	[3,4,5],
	'nifty'
]
console.log("arrayofStuff", arrayofStuff.length);

var nycBoroughs = [
	'Manhattan', 
	'Brooklyn', 
	'Queens', 
	'Bronx', 
	'Staten Island'
];
console.log('nycBoroughs: ', nycBoroughs, nycBoroughs[3])
nycBoroughs[3] = "The Bronx"
console.log('boroughs: ', nycBoroughs, nycBoroughs[3])
/* 
	Pushing list items to the end of an array 
*/
nycBoroughs[nycBoroughs.length] = "Westchester";
console.log('extra boroughs: ', nycBoroughs);
nycBoroughs.push("Yonkers");
console.log('push boroughs: ', nycBoroughs);

// Removing last item from the arrary
nycBoroughs.pop();
console.log('pop boroughs: ', nycBoroughs);
console.log('what pop? ', nycBoroughs.pop());

//shift(): Remove an item from the beginning of an array
nycBoroughs.shift();
console.log('shift boroughs: ', nycBoroughs);

//unshift(): Add items to the beginning of an array
nycBoroughs.unshift('Long Island');
nycBoroughs.unshift('Hudson Valley', 'Albany');
console.log('unshift boroughs: ', nycBoroughs); 
console.log('unshift() returns length: ', nycBoroughs.unshift()); //unshift() returns the new array length.

//Splice (where you want to start, how many to remove)
nycBoroughs.splice(2, 2)
console.log('splice boroughs: ', nycBoroughs)

//Using a Strict
var one = 1, two = 2;
console.log('one === one', one === one);
console.log('one == one', one == one);
console.log('one === two', one === two);
console.log('one !== two', one !== two);
//Using a non-Strict
one = "1";
console.log('one == one', one == one);
console.log('one === one', one === one);
console.log('one != one', one != one);

console.log('one < two', one < two);
console.log('one > two', one > two);
console.log('one <= two', one <= two);
console.log('one >= two', one >= two);

var animal1 = "cow";
var animal2 = "bear";
var animal3 = "tiger";
var animal4 = "lion";
// And
console.log('animal &&', animal1 === "cow" && animal2 === "bear");
// Or
console.log('one || two', one || two);
console.log('animal1 || animal2', animal1 === "cow" || animal2 === "lion");
console.log('animal1 || animal3', animal1 === "bear" || animal3 === "lion");
console.log('animal1 || animal3 && animal2', animal1 === "bear" || animal3 === "lion" && animal2 === "bear");
console.log('(animal1 || animal3) && animal2', (animal1 === "bear" || animal3 === "lion") && animal2 === "bear");

// Nor or Bang
console.log("not true", !true);
console.log("not false", !false);
console.log('not animal1 || animal2', !(animal1 === "cow" || animal2 === "bear"));

// If statements
/*
	Conpare the difference between alert and window confirm.
	window.confirm() 
	alert()
*/

var answer = window.confirm("Click Ok, get true. Click Cancel, get false.");
answer;
// alert('alert box');
console.log("click answer: ", answer)
if (answer === true) {
	console.log("You clicked Ok.");
}

// If Else statment
if (answer === true) {
	console.log("You clicked Ok.");
} else {
	console.log("You clicked Cancel.");
}

var answer = window.prompt("Type YES, NO, MAYBE. Then click Ok");
if (answer === 'YES') {
	console.log("You wrote YES.");
} 
else if(answer === 'MAYBE') {
	console.log("You wrote Maybe.");
}
else if(answer === 'NO') {
	console.log("You wrote NO.");
}
else {
	console.log('else answer', answer)
	//console.log('Boolean(answer.length)	answer.length 	answer', Boolean(answer.length), answer.length, answer);
	// Boolean(answer.length)	answer.length 	answer
	if (answer) {
		console.log("Your wrote: ", answer);	
	} else {
		console.log("Empty");	
	}
}

//answer.toUpperCase()
//var makeAnswerUpperCase = answer.toUpperCase();

/* 
	Switch Statement
	The switch statement is used to perform different actions based on different conditions.
	https://www.w3schools.com/js/js_switch.asp
		switch(expression) {
			case x:
				// code block
				break;
			case y:
				// code block
				break;
			default:
				// code block
		}
*/
switch(answer) {
  case "YES":
    // code block
    console.log("You wrote YES.");
    break;
  case "MAYBE":
    // code block
    console.log("You wrote MAYBE.");
    break;
  case "NO":
    // code block
    console.log("You wrote NO.");
    break;
  default:
    // code block
    console.log("Your wrote: ", answer);
}
//	What happens when you don't include a break?

//One line If statement
var fname = "FirstName"
if (fname === "FirstName") console.log("first name", fname);

var transportation = "bicycle", birthdayGift = "bicycle", iGot = false;
//birthdayGift = "metrocard"
if( transportation === birthdayGift) {
	console.log("YAY!")
	iGot = false;
} else {
	console.log('Oh no! I need to give more hints.');
	iGot = true;
}
if (iGot){ console.log("Cry, WAAAAAA!") }
if (!iGot){ console.log("Scream, WEEEEE!") }

/*
	Terse ifs are condition statements
	? is true
	: is false
	https://stackoverflow.com/questions/29043135/javascript-one-line-if-else-else-if-statement/34860002
*/
var transport = "bicycle";
//var transport = "subway";
transport === "bicycle"
	? console.log("Your transport is bicycle")
	: console.log("Your transport is subway")
//Why we don't use semicolon?

// Ternary (conditional) operator setting a variable
var transportType = transport === "bicycle" ? "type bicycle" : "type subway";
console.log("transportType", transportType)
//readability 
var transportType = (transport === "bicycle") ? "type bicycle" : "type subway";

// Type checking
var thing = 12;
console.log('typeof', typeof thing);
var thing = "twelve";
console.log('typeof', typeof thing);
var thing = false;
console.log('typeof', typeof thing);
var thing = {};
console.log('typeof', typeof thing);
var thing = [];
console.log('typeof', typeof thing);

// For loops: Sequential
var i = 0; //set interger index
console.log("i, daysoftheweek, daysoftheweek.length", i, daysoftheweek, daysoftheweek.length)
// ( index; when to stop; increments)
for ( i; i < daysoftheweek.length; i++) {
	daysoftheweek[i];
	console.log('daysoftheweek[i]', daysoftheweek[i])
}

/*
	Dynamically populate content to create the main Navigation Bar.
*/

var navbar = {
	"home": {
		"url": "index.html",
		"heading": "Home"
	},
	"about": {
		"url": "about.html",
		"heading": "About"
	},
	"blog": {
		"url": "blog.html",
		"heading": "Blog"
	},
	"services": {
		"url": "services.html",
		"heading": "Services"
	},
	"contact": {
		"url": "contact.html",
		"heading": "contact"
	}
/*	
	"about" : "About",
	"blog" : "Blog",
	"services": "Services",
	"contact": "contact"
*/
};
/*
	JavaScript Functions
	A JavaScript function is a block of code designed to perform a particular task.
*/

var location = 0;
function navigationBar(pageID){ 
	console.log("bodyID", pageID);
	if( typeof navbar === 'object') {
		// For loops: Enumerative
		for (var n in navbar) {
			console.log('enter for navbar', location, n, navbar[n].url);
			/*
				The hasOwnProperty() method returns a boolean indicating whether the object has 
				the specified property as its own property (as opposed to inheriting it).
			*/
			console.log('navbar hasOwnProperty', navbar.hasOwnProperty(n));

			document.getElementById("navbarUL").appendChild(document.createElement('li')).setAttribute('class', 'item');
			console.log('get li',document.getElementsByTagName("li")[location]);
			
			var nav;
			if(pageID === "home") {
				nav = '<a href="'+navbar["home"].url+'#'+n+'">'+navbar[n].heading+'</a>';
			} else {
				nav = '<a href="'+navbar[n].url+'">'+navbar[n].heading+'</a>';
			}
			document.getElementsByTagName("li")[location].innerHTML = nav;
			
			location++;
			console.log('location++',location);
		}
	} else {
		console.log('Error: argument typeof isnot an object. It is: ', typeof navbar);
	}
}

var nycMarkets = [
	{
		"accepts_ebt": true,
		"additionalinfo": "Open year-round",
		"address": "Union bet Driggs & N 12th St",
		"borough": "Brooklyn",
		"facilityname": "McCarren Park Greenmarket",
		"nyc_dept_of_health_cooking": false,
		"open_year_round": true,
		"saturday": "8am-3pm ",
		"service_category": "Farmers Markets and Food Boxes ",
		"service_type": "Farmers Markets",
		"website": "https://www.grownyc.org/greenmarket",
		"zipcode": "11222"
	}, {
		"accepts_ebt": true,
		"additionalinfo": "Market open dates: 7/14/2017 to 11/22/2017",
		"address": "E 163rd St & Hunts Point Ave",
		"borough": "Bronx",
		"enddate": "2017-11-22T00:00:00.000",
		"facilityname": "Harvest Home Hunts Point Market",
		"nyc_dept_of_health_cooking": false,
		"open_year_round": false,
		"service_category": "Farmers Markets and Food Boxes ",
		"service_type": "Farmers Markets",
		"startdate": "2017-07-14T00:00:00.000",
		"website": "https://www.harvesthomefm.org/",
		"wednesday": "8am-4pm",
		"zipcode": "10459"
	}, {
		"accepts_ebt": true,
		"additionalinfo": "Market open dates: 6/28/2017 to 11/15/2017",
		"address": "Clarkson & Troy Aves",
		"borough": "Brooklyn",
		"enddate": "2017-11-15T00:00:00.000",
		"facilityname": "Urban Oasis Farmers Market",
		"nyc_dept_of_health_cooking": false,
		"open_year_round": false,
		"service_category": "Farmers Markets and Food Boxes ",
		"service_type": "Farmers Markets",
		"startdate": "2017-06-28T00:00:00.000",
		"wednesday": "2pm-5:30pm",
		"zipcode": "11203"
	}, {
		"accepts_ebt": false,
		"additionalinfo": "Market open dates: 7/6/2017 to 11/16/2017",
		"address": "114-02 Guy R Brewer Blvd",
		"borough": "Queens",
		"enddate": "2017-11-16T00:00:00.000",
		"facilityname": "Queens Hospital Center Farmers Market II",
		"nyc_dept_of_health_cooking": false,
		"open_year_round": false,
		"service_category": "Farmers Markets and Food Boxes ",
		"service_type": "Farmers Markets",
		"startdate": "2017-07-06T00:00:00.000",
		"thursday": "8am-4pm",
		"zipcode": "11434"
	}, {
		"accepts_ebt": true,
		"additionalinfo": "Market open dates: 7/8/2017 to 10/28/2017",
		"address": "90 W 164th St bet Ogden & Nelson Aves",
		"borough": "Bronx",
		"enddate": "2017-10-28T00:00:00.000",
		"facilityname": "Taqwa Community Farmers Market",
		"nyc_dept_of_health_cooking": false,
		"open_year_round": false,
		"saturday": "10am-4pm",
		"service_category": "Farmers Markets and Food Boxes ",
		"service_type": "Farmers Markets",
		"startdate": "2017-07-08T00:00:00.000",
		"zipcode": "10452"
	}, {
		"accepts_ebt": true,
		"additionalinfo": "Open year-round",
		"address": "506 Lenox Ave bet 135th & 137th Sts",
		"borough": "Manhattan",
		"facilityname": "Harvest Home Harlem Hospital Farmers Market",
		"friday": "8am-7pm",
		"nyc_dept_of_health_cooking": false,
		"open_year_round": true,
		"service_category": "Farmers Markets and Food Boxes ",
		"service_type": "Farmers Markets",
		"website": "https://www.harvesthomefm.org/",
		"zipcode": "10037"
	}, {
		"accepts_ebt": true,
		"additionalinfo": "Market open dates: 6/24/2017 to 10/28/2017",
		"address": "Livonia Ave bet Powell & Junius Sts",
		"borough": "Brooklyn",
		"enddate": "2017-10-28T00:00:00.000",
		"facilityname": "Isabahlia Farmers Market",
		"nyc_dept_of_health_cooking": false,
		"open_year_round": false,
		"saturday": "8am-3pm ",
		"service_category": "Farmers Markets and Food Boxes ",
		"service_type": "Farmers Markets",
		"startdate": "2017-06-24T00:00:00.000",
		"website": "https://www.isabahlialoefinc.org/",
		"zipcode": "11212"
	}
];

/*
	The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
*/
document.addEventListener('DOMContentLoaded', function(event) {
	console.log("ready!");
	document.getElementById("day").innerHTML = daysoftheweek[1];

	document.querySelector(".coursename").innerHTML = "Let's learn ";
	var header2 = document.getElementsByTagName("h2")[0]
	header2.innerHTML = "Let's learn about ";
	var small = document.createElement("small");   // Create a <small> 
	small.innerHTML = "Judi";                   // Insert text
	header2.appendChild(small);               // Append <small> to <h2>

	var pString = document.getElementsByClassName("coursename");
	console.log("pString", pString);
	pString[1].innerHTML = "Basic Web Development";

	var bodyID = document.getElementsByTagName("body")[0].getAttribute("id");
	navigationBar(bodyID);

	//Market display
	if (document.getElementById("dohmh")) {
		console.log('found #dohmh');
		var div = document.createElement('div');
		document.getElementById("dohmh").appendChild(div).setAttribute('id', 'dohmh_container');

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

})