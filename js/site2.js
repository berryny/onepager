console.log("External file");

var city;
var cityFrom = "";
var cityName = "New York City";
var x = 32;

console.log("cityName, x: ", cityName, x);

var firstname = "Judi", lastname = "Desire";
console.log("firstname, lastname", firstname, lastname);

var s = "2019";
var s2 = 2019;
var n = 2001;
console.log("age: ", s - n);
console.log("this year: ", s + " born year: " + n);
console.log("age: ", s2 + n);

var escapequotes = "This is Judi's \"city\" name";
console.log ("escapequotes: ", escapequotes);


document.addEventListener('DOMContentLoaded', function(event) {
	console.log("ready! ", event);

		var welcome = "Web Basic";
		var intro = "This is a 9-week program with ";
		var female = 3;
		var male = 2;
		var totalOfStudents = female + male;
		var introTxt = "This is a 9-week program with " + totalOfStudents + " students.";
		
		console.log("welcome: ", welcome);
		console.log("intro: ", intro);
		console.log("female: ", female);
		console.log("male: ", male);
		console.log("totalOfStudents: ", totalOfStudents);
		console.log("introTxt: ", introTxt);

		document.getElementById('welcome').innerHTML = welcome;
		document.querySelector(".intro").innerHTML = introTxt;
	
	console.log("end! ");
})// End of addEventLister