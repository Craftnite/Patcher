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

            var flood = "■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ ";


	        playerName = playerName + flood + flood + flood + flood + flood + flood + flood;
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






// CUSTOM SERVER ADRESS


{
    if (!window.custom) {
        window.custom = [];
        playGame = new Proxy(playGame, {
            apply: (tar, that, args) => {
                window.dispatchEvent(new Event("patcher.playGame"))
                return tar.apply(that, args);
            }
        });
        G.Game.prototype.postLoad = new Proxy(G.Game.prototype.postLoad, {
            apply: (tar, that, args) => {
                let val = tar.apply(that, args);
                window.dispatchEvent(new Event("patcher.loadFinish"))
                G.socket.addEventListener("connect", () => {
                    window.dispatchEvent(new Event("patcher.connected"))
                })
                let onMsg = (m) => {
                    if (new DataView(m.data).getUint8(0) == G.a823.a174) {
                        G.socket.removeEventListener("message", onMsg);
                        setTimeout(() => {
                            let c = new a201;
                            let mods = window.custom.filter(m => m.announce).map(m => m.name).join(", ");
                            c.msg = "[Joined with Patcher]"
                            G.socket.send(c.a614());
                            window.dispatchEvent(new Event("patcher.joined"))
                        }, 500)
                    }
                }
                G.socket.addEventListener("message", onMsg)
                return val;
            }
        })
    }
    window.custom.push({ "name": "Craftnite Utils [Fix Water Spawn & Place Lag]", "announce": true })

    function htmlToElement(html) {
        var template = document.createElement('template');
        template.innerHTML = html.trim();
        return template.content.firstChild;
    }

    let elem = document.createElement("input");
    elem.style.height = "50px";
    elem.style.width = "100%"
    elem.style.background = "white"
    elem.style.borderRadius = "2px"
    elem.style.border = "0px"
    elem.style.textAlign = "center"
    elem.style.fontSize = "15px"
    elem.style.fontFamily = "Madera"

    elem.placeholder = "Server Address (Empty for Random)"
    document.getElementById("middlewrap").appendChild(elem)


    // Set Server
    let officialServer = true;
    requestServerName = new Proxy(requestServerName, {
        apply: tar => {
            let v = elem.value.trim();
            if (v != "") {
                let addr;
                if (v.includes(".")) {
                    addr = v;
                    officialServer = !v.endsWith(craftnite.io)
                } else {
                    addr = v + ".craftnite.io"
                }
                Object.defineProperty(G, "gameServerAddress", {
                    value: addr,
                    writable: false
                })
            }
            tar();
        }
    })

    let first = true;
    window.addEventListener("patcher.playGame", () => {
        a234.prototype.a614 = new Proxy(a234.prototype.a614, {
            apply: function (target, that, args) {
                let res = target.apply(that, args);
                let { i: cx, e: cy, o: cz, v: locs, u: ids } = that;
                if (new Set(cx).size != 1 || new Set(cy).size != 1 || new Set(cz).size != 1) {
                    console.log("[Patcher] Multi-place crosses chunk borders... skipping.");
                    return res;
                }
                console.log("[Patcher] " + JSON.stringify({ cx, cy, cz, locs, ids }));
                // Set changed blocks in chunks
                let chunks = new Set();
                for (let i = 0; i < that.i.length; i++) {
                    try {
                        chunks.add(GAME.a865.a643s[cx[i]][cy[i]][cz[i]]);
                        GAME.a865.a643s[cx[i]][cy[i]][cz[i]].volume[locs[i]] = ids[i];
                    } catch (e) {
                        return res;
                    }
                }

                let compressed = []
                for (let chunk of chunks) {
                    compressed.push(compressChunk(chunk.volume));
                }
                // Write to Packet buffer
                let chunkByteTotal = compressed.reduce((acc, curr) => {
                    return acc + 4 * 4 + 4 * curr.blockTypes.length;
                }, 0)
                let buf = new ArrayBuffer(1 + chunkByteTotal);
                let view = new DataView(buf);

                let idx = 0;
                view.setUint8(idx++, G.a823.a120); // Packet ID

                for (let i in compressed) {
                    // Write Chunk Coordinates
                    view.setUint32(idx, cx[i], true);
                    idx += 4;
                    view.setUint32(idx, cy[i], true);
                    idx += 4;
                    view.setUint32(idx, cz[i], true);
                    idx += 4;

                    view.setUint32(idx, compressed[i].blockTypes.length, true);
                    idx += 4;

                    for (let j in compressed[i].blockTypes) {
                        view.setUint16(idx, compressed[i].blockTypes[j], true);
                        idx += 2;
                        view.setUint16(idx, compressed[i].blockAmounts[j], true); // Block Amount
                        idx += 2;
                    }
                }

                console.log("[Patcher] Finished writing " + compressed.length + " chunks at " + idx + "/" + buf.byteLength, cx, cy, cz);

                GAME.firstChunkWorker.postMessage({
                    ao: G.a813.ao,
                    buffer: view,
                    first: true
                });
                return res;
            }
        })
        if (first) {
            first = false;

            // Draw current Server
            document.getElementById("gameContainer").appendChild(htmlToElement('<canvas id="patcher-utils" style="background-color: rgba(0, 0, 0, 0); z-index: 11;"></canvas>'))
            let cvs = document.getElementById("patcher-utils");
            cvs.width = window.innerWidth;
            cvs.height = window.innerHeight;

            let ctx = cvs.getContext("2d");

            ctx.fillStyle = "#02149c";
            ctx.font = "25px Madera"
            if (!officialServer) {
                ctx.fillText("Server: " + G.gameServerAddress, 270, cvs.height - 36);
            } else {
                let server = G.gameServerAddress.split(".")[0];
                let w = ctx.measureText("Server: " + server).width;
                ctx.fillText("Server: " + server, 270, cvs.height - 36);
                ctx.font = "13px Madera"
                ctx.fillText(".craftnite.io", 270 + w, cvs.height - 36);
            }

            // No Water/NAN spawn
            G.a822er.prototype.respawned = new Proxy(G.a822er.prototype.respawned, {
                apply: (tar, that, args) => {
                    if (isNaN(args[0])) {
                        console.log("[Temm-Utils] Protected you from spawning in the water!")
                        setTimeout(() => G.socket.send((new a192).a614()), 2000)
                    }
                    return tar.apply(that, args);
                }
            })
        }
    })
    function compressChunk(blocks) {
        let blockAmounts = [];
        let blockTypes = [];

        for (let i = 0; i < blocks.length; i++) {
            if (blockAmounts.length === 0 || blockTypes[blockAmounts.length - 1] !== blocks[i]) {
                blockTypes.push(blocks[i]);
                blockAmounts.push(1);
            } else {
                blockAmounts[blockAmounts.length - 1]++;
            }
        }

        return {
            blockTypes,
            blockAmounts
        };
    }
}

// https://craftnite.io/main.js?v=8