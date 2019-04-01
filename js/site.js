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

var myArray = new Array;
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
	Pushing list items to the end of an arrary 
*/
nycBoroughs[nycBoroughs.length] = "Westchester";
console.log('extra boroughs: ', nycBoroughs)
nycBoroughs.push("Yonkers")
console.log('push boroughs: ', nycBoroughs)

// Removing last item from the arrary
nycBoroughs.pop();
console.log('pop boroughs: ', nycBoroughs)

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
var animal2 = "tiger";
// And
console.log('and', (animal1 == 'cow') && (animal2 == 'bear'));
// Or
console.log('one || two', one || two);

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


})