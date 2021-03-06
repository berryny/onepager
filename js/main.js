/*
	Dynamically populate content to create the main Navigation Bar.
*/

var navbar = {
	home: {
		"url": "index.html",
		"heading": "Home"
	},
	about: {
		"url": "about.html",
		"heading": "Who Are We"
	},
	blog: {
		"url": "blog.html",
		"heading": "Blog"
	},
	services: {
		"url": "services.html",
		"heading": "Services"
	},
	contact: {
		"url": "contact.html",
		"heading": "Contact Us"
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
var l = 0;
function navigationBar(pageID){ 
	console.log("bodyID", pageID);
	if( typeof navbar === 'object') {
		console.log('yes', navbar)
		for (var n in navbar) {
			console.log('enter for navbar', l, n, navbar[n]);
			document.getElementById("navbarUL").appendChild(document.createElement('li')).setAttribute('class', 'item');

			var navHTML;
			createAnchor = document.createElement('a');
			createAnchor.innerHTML = navbar[n].heading;

			if(pageID === n) {
				//navHTML = '<a href="'+navbar["home"].url+'#'+n+'">'+navbar[n].heading+'</a>';
				/*if (n !== pageID) {
					createAnchor.setAttribute('href', navbar[pageID].url+'#'+n);
					navHTML = createAnchor;					
				} else {
					createAnchor.setAttribute('style', "display: none");
					navHTML = createAnchor;
				}*/
				createAnchor.setAttribute('href', navbar[pageID].url+'#'+n);
				navHTML = createAnchor;
			} else {
				//navHTML = '<a href="'+navbar[n].url+'">'+navbar[n].heading+'</a>';
				createAnchor.setAttribute('href', navbar[n].url);
				navHTML = createAnchor;
			}
			//document.getElementsByTagName("li")[l].innerHTML = navHTML;
			if (n !== pageID) {
				document.getElementsByTagName("li")[l].appendChild(navHTML);
				l++;
				console.log('l',l);
			}
		}
	} else {
		console.log('error');
	}
} 

/*
	The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
*/
document.addEventListener('DOMContentLoaded', function(event) {
	console.log("ready!");

	var bodyID = document.getElementsByTagName("body")[0].getAttribute("id");
	navigationBar(bodyID);

});