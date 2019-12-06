// ==UserScript==
// @name     iris 36c3 flavor
// @version  1
// @grant    none
// ==/UserScript==

function doChange() {
 
  document.getElementById("logo-0-0").src = "https://events.ccc.de/congress/2019/wiki/images/thumb/6/6b/Destruction.png/600px-Destruction.png";
  document.getElementById("termsOfUse").outerHTML = "";
  document.getElementById("impressum").outerHTML = "";
  
  var color1 = "00BB31";
  var color2 = "FE5000";
  
  document.head.innerHTML += "<style>" + 
    ".additionalText {border-top: 1px solid #000000;color: #000000;font-size: 32px;padding-top: 3px;text-align: left;width: 100%;height: 40px;}"+
    "body {background-color:#000000}"+
    ".titleBar {background-color:#000000;color:#"+color2+";}"+
    "table * th, table * td {border-bottom:3px solid #000000;}"+
    "tbody tr td{background-color:#000000 !important; border-bottom:1px solid #000000 !important; color:#FFFFFF !important; overflow:hidden;}"+
    ".cell_time {background-color:#"+color2+" !important; color:#000000 !important;}" +
    ".to_from, .platform {color: #"+color1+";}"+
    ".path {color:#"+color2+";}"+
    "@font-face{font-family:blackout-midnight;src:url(https://raw.githubusercontent.com/izumariu/iris-flavor/master/BlackoutMidnight_umlauts.ttf);}"+
    "@font-face{font-family:blackout-2am;src:url(https://raw.githubusercontent.com/theleagueof/blackout/master/Blackout%202%20AM.ttf);}"+
    "body {font-family:blackout-midnight !important;}"+
    ".tripMessage {color:#"+color1+"; font-family:blackout-midnight !important;}"+
    "thead th {background-color:#"+color1+" !important;overflow: hidden;}"+
    ".additionalLanguage {font-style:normal !important;}"+
  "</style>";
  
}

function waitForLoad() {
  if(document.getElementsByTagName("tbody").length == 0)
    setTimeout(waitForLoad, 200);
  else
    doChange();
}


var flavor = document.location.href.match(/[?&]flavor=([^&]+)/);

if (flavor[1] == "36c3") {
  
  console.log("36c3 flavor activated!");
  document.body.style.visibility = "hidden";
  waitForLoad();
  window.setInterval(function(){
  	[].slice.call(document.getElementsByClassName("imgstadion")).map(i => i.src="https://raw.githubusercontent.com/izumariu/iris-flavor/master/stadium.png");
		[].slice.call(document.getElementsByClassName("imgflughafen")).map(i => i.src="https://raw.githubusercontent.com/izumariu/iris-flavor/master/plane.png")
	}, 300);
  document.body.style.visibility = "visible";

}
