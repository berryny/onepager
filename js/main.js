function goBack() {
	window.history.back();
	console.log("window", window);
	console.log("window.history: ", window.history);
}
goBack();

var navbar = {	
	"home": {
		"url": "http://google.com",
		"heading": "Home"
	},
	"about": {
		"url": "about.html",
		"heading": "About Me"
	},
	"blog": {
		"url": "blog.html",
		"heading": "Blog"
	},
	"contact": {
		"url": "contact.html",
		"heading": "Contact Us"
	}
};
var location = 0;
function navigationBar(pageID,logo) {
	console.log("pageID", pageID, logo, typeof navbar);
	if (typeof navbar === "object") {
		console.log("yes");
		for( var n in navbar){
			console.log("n -> ", n);
			console.log("navbar -> ", navbar);
			document.getElementById("navbarUL").appendChild(
						document.createElement('li')
						)
					.setAttribute('class', 'item');

			var nav;
			if (pageID === "home") {
				//<a href="index.html#home">Home</a>
				nav = '<a href="'+navbar[pageID].url+'#'+n+'">'+navbar[n].heading+'</a>'
			} else {
				//<a href="about.html">About</a>
				nav = '<a href="'+navbar[n].url+'">'+navbar[n].heading+'</a>';
			}
			document.getElementsByTagName("li")[location].innerHTML = nav;
			
			location++;
			console.log('l++',location);
		}
	} else {
		console.log("error");
	}
}
navigationBar("home","img/logo.png");