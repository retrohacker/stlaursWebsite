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

sponsorSchool("Southern Illinois University at Carbondale","http://www.siu.edu");
sponsorSchool("St. Louis University","http://www.slu.edu");
sponsorSchool("University of Missouri at Columbia","http://www.missouri.edu/");
sponsorSchool("St. Louis College of Pharmacy","http://www.stlcop.edu");
sponsorSchool("Washington University in St. Louis","http://wustl.edu/");
sponsorSchool("Webster<br />University","http://www.webster.edu/");
sponsorSchool("Southern Illinois University at Edwardsville","http://www.siue.edu");

setSponsorSchoolWidth();

function linkify(name,href){
	var ele=document.createElement("a");
	if(location.href==href) ele.style.backgroundColor="#1A344B";
	ele.innerHTML=name;
	ele.href=href;
	document.getElementById("header").appendChild(ele);
}

linkify("Home","http://www.stlaurs.com/");
linkify("Keynote Speaker","http://www.stlaurs.com/speaker/");
linkify("Event Schedule","http://www.stlaurs.com/schedule/");
linkify("Guidelines","http://www.stlaurs.com/guidelines/");
linkify("Awards","http://www.stlaurs.com/awards/");
linkify("Contact","http://www.stlaurs.com/contact/");
linkify("Get Involved","http://www.stlaurs.com/getInvolved/");
linkify("Panel Application","http://www.stlaurs.com/apply/panel/");
