"use strict";
console.log("%cCraftnite Patcher: loader.js", "font-size:20px;color:#540052;font-weight:900;font-family:sans-serif;");



// ----------- BEGIN REQUIRED FUNCTIONS  -----------

const prefix = "[Patcher]"; // Patcher Prefix
const filename = "loader.js"; // Filename
const filecat = "added file"; // File Category

function log (message) {
    return console.log(prefix + " *at " + filecat + " " + filename + "* " + message);
}

log("Craftnite Patcher is running: " + filename);
log("loader.js is not a modified file from Craftnite. It is loaded from Patcher.");

// ----------- END REQUIRED FUNCTIONS  -----------




// ----------- BEGIN MAIN CODE  -----------


(async () => { // Asynchronous function won't hold up the program.
    // Load the remote code. This'll be used for hack status, hotfixes, etc.
	eval(await (await fetch("https://raw.githubusercontent.com/Craftnite/Patcher/master/assets/remote.js?updated=${Date.now()}")).text());
	 // ?updated parameter is so browser ignores cached version
})()



// ----------- END MAIN CODE  -----------
