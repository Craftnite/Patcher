"use strict";
console.log("%cCraftnite Patcher: remote.js", "font-size:20px;color:#540052;font-weight:900;font-family:sans-serif;");



// ----------- BEGIN REQUIRED FUNCTIONS  -----------

const prefix = "[Patcher]"; // Patcher Prefix
const filename = "remote.js"; // Filename
const filecat = "remote file"; // File Category

function log (message) {
    return console.log(prefix + " *at " + filecat + " " + filename + "* " + message);
}

log("Craftnite Patcher is running: " + filename);
log(filename + " is not a modified file from Craftnite. It is loaded from Patcher, by using loader.js");

// ----------- END REQUIRED FUNCTIONS  -----------



// remote.js is a file for QUICKLY loading updatable code into Craftnite, no pull on the patcher instance required.
// this is very useful for notifying when hacks are down, pushing hotfixes, etc.



// ----------- BEGIN MAIN CODE  -----------


console.log("Hacks are currently WORKING!");


// ----------- END MAIN CODE  -----------
