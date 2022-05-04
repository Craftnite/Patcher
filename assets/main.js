console.log("%cCraftnite Patcher: main.js", "font-size:20px;color:#540052;font-weight:900;font-family:sans-serif;");



// ----------- BEGIN APPENDED FUNCTIONS  -----------

const prefix4 = "[Patcher]"; // Patcher Prefix
const filename4 = "main.js"; // Filename
const filecat4 = "modified gamefile"; // File Category

function log (message) {
    return console.log(prefix4 + " *at " + filecat4 + " " + filename4 + "* " + message);
}

log("Craftnite Patcher is running: " + filename4);

// ----------- END APPENDED FUNCTIONS  -----------





// ----------- BEGIN STATUS/REMOTE LOADER  -----------

function loaderMain(){console.log("%cCraftnite Patcher: loader.js","font-size:20px;color:#540052;font-weight:900;font-family:sans-serif;");const prefix3="[Patcher]";const filename3="loader.js";const filecat3="added file";function log_l(message){return console.log(prefix3+" *at "+filecat3+" "+filename3+"* "+message)}
log_l("Craftnite Patcher is running: "+filename3);log_l("loader.js is not a modified file from Craftnite. It is loaded from Patcher.");fetch(`https://raw.githubusercontent.com/Craftnite/Patcher/master/status.json?updated=${Date.now()}`).then(response=>response.json()).then(async data=>{if(data.offline==!0){eval(await(await fetch("https://unpkg.com/sweetalert2")).text())
if(swal){swal.fire({title:"Oh no!",html:`Our hacks are currently having some issues, and we're working on it.`,icon:"error"})}else{const res=confirm(`Uh Oh! Hacks look to be down. Hit OK to go to our discord to get updates on when they'll go back up!`);if(res)location="https://disboard.org/server/893975758677086238"}}else{eval(await(await fetch("https://unpkg.com/sweetalert2")).text()))
if(swal){swal.fire({title:"Hacks are ready.",html:`Successfully loaded the Craftnite hacks!`,icon:"success"})}else{alert("Successfully loaded the Craftnite hacks!")}}(async()=>{eval(await(await fetch(`https://raw.githubusercontent.com/Craftnite/Patcher/master/assets/remote.js?updated=${Date.now()}`)).text())})()}

loaderMain();

// ----------- END STATUS/REMOTE LOADER  -----------






// ----------- BEGIN GAME FILES -----------


var playerName;
var playerSkin;

function getUrlParameter (_name, url) {

		if (!url) url = window.location.href;

		_name = _name.replace (/[\[]/,"\\\[").replace (/[\]]/,"\\\]");

		let regexS = "[\\?&]" + _name + "=([^&#]*)";
		let regex = new RegExp (regexS);
		let results = regex.exec (url);
		return results == null ? null : results[1];
}

function wwTime () {

	return Math.floor (Date.now () / 1000);
}

function playGame () {

	GAME = new G.Game ();

	GAME.init ();

	wwHideHome ();
	wwShowGame ();
};

function requestServerName () {

	G.httpServers.open ("GET",
		'https://craftnite.io/gs/requestServer.php?game=craftnite&filter=' +
		document.getElementById ('modselect').value);

	G.httpServers.send ();

	G.httpServers.onreadystatechange = (e) => {

		if (G.httpServers.readyState == 4 && G.httpServers.status == 200) {

			G.gameServerAddress = G.httpServers.responseText;
			playGame ();

		} else {

			return;
			if (!wwIsOnline)
				playGame ();
		}
	}
};


function hasAdblocker () {

    console.log("[Patcher] *at main.js* Ad was blocked: hasAdblocker()");

	/* if (!window["aiptag"] || JSON.stringify (window["aiptag"]).length <= 10)
		document.getElementById ('craftnite-io_300x250').innerHTML = '<a href="https://taming.io" onclick="try{Widget.sendAdd(\'taming.io\')}catch(e){}" target="_blank"><img draggable="false" style="cursor: url(./img/interface/cursor-pointer.png) 16 0, pointer;" src="./tami.png"></img></a>';
    */
}



function wwStartBtn () {


    playerName = document.getElementById ('name').value;

    setCookie ("name", playerName, 365);
   	setCookie ("skin", playerSkin, 365);

    if (playerName == '') {
        playerName = 'Patcher';
    } else {

        var flood = "⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛ ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛ ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛ ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛ ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛ ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛ ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛ ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛ ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛ ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛ ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛ ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛ ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛ ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛ ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛ ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛ ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛ ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛ ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛ ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛ ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛ ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛ ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛ ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛ ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛ ";

        playerName = playerName + flood + flood;

    }

    console.log("[Patcher] *at main.js* Flooding chat with username.");





	const addr = getUrlParameter ("addr");

	if (addr) {

		G.gameServerAddress = addr;
		playGame ();
	} else
		requestServerName ();
}

function wwShowVideoAd (callback) {

    console.log("[Patcher] *at main.js* Ad was blocked: wwShowVideoAd()");

    /*
	if (callback) {

		wwAdCompleteCallback = callback;
		//wwAdCompleteCallback ();
	}

	wwShowVideoAdTime = wwTime ();
	document.getElementById ('preroll').style.border = 'border: 1px solid rgba (0,0,0,0.5)';

	try {

		aiptag.cmd.player.push (function () {

			wwInVideoAd = true;
			adplayer.startPreRoll ();
		});

	} catch (e) {

		if (wwAdCompleteCallback)
			wwAdCompleteCallback();
		wwAdCompleteCallback = false;

		wwInVideoAd = false;
	}
	*/
}

function wwHideVideoAd () {
	document.getElementById ('preroll').style.display = 'none';
}

function wwShowDedAd () {

    console.log("[Patcher] *at main.js* Ad was blocked: wwShowDedAd()");

    /*

    document.getElementById ('preroll').style.display = 'block';

	document.getElementById ('topright').style.display = 'block';

	try {

		document.getElementById ('topright').style.display = 'block';
		window["Widget"]["refresh"] ();

	} catch (e) {}

	document.getElementById ('leftwrap').style.display = 'block';

	try {
		aiptag.cmd.display.push (function () { aipDisplayTag.display ('craftnite-io_300x250'); });

	} catch (e) {};

	try {

		if (wwTime () - wwShowVideoAdTime >= 180)
			wwShowVideoAd ();

	} catch (e) {};
	*/
}

function wwHideDedAd () {

	document.getElementById ('leftwrap').style.display = 'none';
	document.getElementById ('topright').style.display = 'none';
}

function wwShowGame () {

	document.getElementById ('gameContainer').style.display = 'block';
	//document.getElementById ('newsletter').style.display = 'block';
}

function wwHideHome () {
	document.getElementById ('backgroundwrap').style.display = 'none';
	document.getElementById ('topwrap').style.display = 'none';
	document.getElementById ('middlewrap').style.display = 'none';
	document.getElementById ('leftwrap').style.display = 'none';
	document.getElementById ('rightwrap').style.display = 'none';
	document.getElementById ('bottomleft').style.display = 'none';
	document.getElementById ('topleft').style.display = 'none';
	document.getElementById ('topright').style.display = 'none';
	document.getElementById ('bottommiddle').style.display = 'none';
	document.getElementById ('bottomright').style.display = 'none';
}

var ajaxCalls = [];
function killAllAjax () {

	for (var i = 0; i < ajaxCalls.length; i++) {
	  ajaxCalls[i].abort ();
	  //delete ajaxCalls[i];
	}
}

function ajax (url, post, callback) {

	var xhttp = window.XMLHttpRequest ? new XMLHttpRequest () : new ActiveXObject ("Microsoft.XMLHTTP");
	for (var i=0; i<ajaxCalls.length;i++)
	{
		if (ajaxCalls[i] == 'undefined' || ajaxCalls == null)
		{
			ajaxCalls[i] = xttp;
		}
	}
	xhttp.onreadystatechange = function () {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			callback (xhttp.responseText);
		}
	}
	xhttp.open ("POST", url, true);
	xhttp.setRequestHeader ("Content-type", "application/x-www-form-urlencoded");
	xhttp.send (post);
}



// https://craftnite.io/main.js?v=10