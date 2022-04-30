// Import required modules
const readline = require("readline");
const express = require('express');
const app = express();
const fs = require('fs');





// Constants
const port : number = 1003;


// Utilities
const dashboard = (`
[Patcher]
The Craftnite.io file modifier runs along, listening on port ::${port}
Patcher Dashboard:

    [X] - Shut down Patcher
`);

// -- BEGIN GAME FILES --



// Game files: bro.js

var bro : String = "";

fs.readFile("assets/bro.js", "utf8", (error : unknown, patchedBro : String) => {
bro = new String(patchedBro);
})


app.use(express.static("dist"));
// @ts-ignore
app.get("/bro.js", (req, res) => {
    res.type("js").send(bro.toString());
});





// Game files: G.js

var G : String = "";

fs.readFile("assets/G.js", "utf8", (error : unknown, patchedG : String) => {
G = new String(patchedG);
})


app.use(express.static("dist"));
// @ts-ignore
app.get("/G.js", (req, res) => {
    res.type("js").send(G.toString());
});





// Game files: sup.js

var sup : String = "";

fs.readFile("assets/sup.js", "utf8", (error : unknown, patchedSup : String) => {
sup = new String(patchedSup);
})


app.use(express.static("dist"));
// @ts-ignore
app.get("/sup.js", (req, res) => {
    res.type("js").send(sup.toString());
});




// Game files: yo.js

var yo : String = "";

fs.readFile("assets/yo.js", "utf8", (error : unknown, patchedYo : String) => {
yo = new String(patchedYo);
})


app.use(express.static("dist"));
// @ts-ignore
app.get("/yo.js", (req, res) => {
    res.type("js").send(yo.toString());
});



// -- END GAME FILES --





// Notify us that Patcher is now running
console.log(`[Patcher] Running Patcher at http://localhost:${port}`);




// Add keypress listener and send the dashboard
app.listen(port, () => {
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);
    console.log(dashboard);
});




// On Keypress
process.stdin.on("keypress", (str, key) => {
    // Key name
    const { name, ctrl } = key;

    // If it's [x] or [ctrl + c], then exit Patcher.
    if (name === "x" || (name === "c" && ctrl)) {
        console.log("[Patcher] Exiting Patcher...");
        process.exit();
    }

});