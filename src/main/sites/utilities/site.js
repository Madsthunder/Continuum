function preinitsite()
{
	var style = document.createElement("link");
	style.rel = "stylesheet";
	style.type = "text/css";
	style.href = "https://madsthunder.github.io/Continuum/src/main/sites/utilities/site.css";
	document.getElementsByTagName("head")[0].appendChild(style);
	var http = getxmlhttp();
	http.onreadystatechange = function(){if(this.readyState==4&&this.status==200){document.body.innerHTML=this.responseText}};
	sendrequest(http, "https://madsthunder.github.io/Continuum/src/main/sites/utilities/site.html");
	console.log(document);
}
function postinitsite(resources)
{
	console.log(document.getElementById("titlebar"));
	
}

function getxmlhttp()
{
	if(navigator.appName == "Microsoft Internet Explorer")
	{
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
	else
	{
		return new XMLHttpRequest();
	}
}

function sendrequest(http, location)
{
	http.open("get", location, true);
	http.send();
}
