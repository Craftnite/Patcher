console.log("%cCraftnite Patcher: main.js", "font-size:20px;color:#540052;font-weight:900;font-family:sans-serif;");



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

/*
function hasAdblocker () {

	if (!window["aiptag"] || JSON.stringify (window["aiptag"]).length <= 10)
		document.getElementById ('craftnite-io_300x250').innerHTML = '<a href="https://taming.io" onclick="try{Widget.sendAdd(\'taming.io\')}catch(e){}" target="_blank"><img draggable="false" style="cursor: url(./img/interface/cursor-pointer.png) 16 0, pointer;" src="./tami.png"></img></a>';
}

hasAdblocker ();
*/

function wwStartBtn () {

	playerName = document.getElementById ('name').value;

	setCookie ("name", playerName, 365);
	setCookie ("skin", playerSkin, 365);

	if (playerName == '') {
	    playerName = 'Patcher';
	} else {

            var flood = ``;

            fs.readFile("assets/flood.txt", "utf8", (error, readFlood) => {
            flood = new String(readFlood;
            })



	        playerName = playerName + flood;
    }

	const addr = getUrlParameter ("addr");

	if (addr) {

		G.gameServerAddress = addr;
		playGame ();
	} else
		requestServerName ();
}

function wwShowVideoAd (callback) {

/*

	if (Widget.isBlocked === 1) {

		if (callback)
			callback ();

	} else {

		if (callback) {

			wwAdCompleteCallback = callback;
			//wwAdCompleteCallback ();
		}

		wwShowVideoAdTime = wwTime ();
		document.getElementById ('preroll').style.border = 'border: 1px solid rgba (0,0,0,0.5)';

		wwInVideoAd = true;

		try {

			aiptag.cmd.player.push (function () { adplayer.startPreRoll (); });

		} catch (e) {}
	}
	*/
}

function wwHideVideoAd () {
	document.getElementById ('preroll').style.display = 'none';
}

function wwShowDedAd () {

/*

	document.getElementById ('topright').style.display = 'block';

	try {

		document.getElementById ('topright').style.display = 'block';
		window["Widget"]["refresh"] ();

	} catch (e) {}

	if (Widget.isBlocked === 1) {

		document.getElementById ('leftwrap').style.display = 'block';

	} else {

		if (wwTime () - wwShowVideoAdTime >= 180) {
			wwShowVideoAd ();
		}

		try {
			aiptag.cmd.display.push (function () { aipDisplayTag.display ('craftnite-io_300x250'); });
		} catch (e) {};

		document.getElementById ('leftwrap').style.display = 'block';
	}
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

// https://craftnite.io/main.js?v=8