function sponsorSchool(name,url) {
	var ele = document.createElement("div");
	ele.className="sponsorSchool";
	ele.innerHTML='<a href="'+url+'">'+name+'</a>';
	document.getElementById("contributors").appendChild(ele);
}

function getSponsorSchoolCount() {
	realKids = 0;
	parents = document.getElementById("contributors");
	kids = parents.childNodes.length;
	i=0;
	while(i<kids) {
		if(parents.childNodes[i].nodeType!=3) { //ensure child is not whitespace for IE
			realKids++;
		}
		i++;
	}
	return realKids;
}

function setContributorChildrenWidth(width) {
	parents = document.getElementById("contributors");
	kids = parents.childNodes.length;
	i=0;
	while(i<kids) {
		if(parents.childNodes[i].nodeType!=3) {
			parents.childNodes[i].style.width=width+"px";
			parents.childNodes[i].style.padding="5px 0 5px 0";
		}
		i++;
	}
}

//Sets the width of the contributors' children to be evenly spaced divs
function setSponsorSchoolWidth() {
	page = document.getElementById("paper");
	pageWidth = page.clientWidth - 20;
	width = pageWidth/getSponsorSchoolCount();
	setContributorChildrenWidth(width);
}

function linkify(name,href){
	var ele=document.createElement("a");
	if(location.href==href) ele.style.backgroundColor="#1A344B";
	ele.innerHTML=name;
	ele.href=href;
	document.getElementById("header").appendChild(ele);
}

function getCSS() {
	url = "http://"+window.location.host+"/";
	getCSS(gUrl+"styles/main.css");

	var $ = document; // shortcut
	var cssId = 'stlaursCSS';  // you could encode the css path itself to generate id..
	if (!$.getElementById(cssId))
	{
		var head  = $.getElementsByTagName('head')[0];
		var link  = $.createElement('link');
		link.id   = cssId;
		link.rel  = 'stylesheet';
		link.type = 'text/css';
		link.href = url;
		link.media = 'all';
		head.appendChild(link);
	}
}

gUrl = "http://"+window.location.host+"/";

linkify("Home",gUrl);
linkify("Keynote Speaker",gUrl+"speaker/");
linkify("Event Schedule",gUrl+"schedule/");
linkify("Guidelines",gUrl+"guidelines/");
linkify("Awards",gUrl+"awards/");
linkify("Contact",gUrl+"contact/");
linkify("Get Involved",gUrl+"getInvolved/");
linkify("Panel Application",gUrl+"apply/panel/");

sponsorSchool("Southern Illinois University at Carbondale","http://www.siu.edu");
sponsorSchool("St. Louis University","http://www.slu.edu");
sponsorSchool("University of Missouri at Columbia","http://www.missouri.edu/");
sponsorSchool("St. Louis College of Pharmacy","http://www.stlcop.edu");
sponsorSchool("Washington University in St. Louis","http://wustl.edu/");
sponsorSchool("Webster<br />University","http://www.webster.edu/");
sponsorSchool("Southern Illinois University at Edwardsville","http://www.siue.edu");

setSponsorSchoolWidth();
