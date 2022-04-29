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



// Game files: bro.js

var bro : String = "";

fs.readFile("assets/bro.js", 'utf8', (error : unknown, patchedBro : String) => {
bro = new String(patchedBro);
})


app.use(express.static("dist"));
// @ts-ignore
app.get("/bro.js", (req, res) => {
    // res.send(bro.toString());
    res.type("js").send(bro.toString());
});





// Game files: G.js

var G : String = "";

fs.readFile("assets/G.js", 'utf8', (error : unknown, patchedG : String) => {
G = new String(patchedG);
})


app.use(express.static("dist"));
// @ts-ignore
app.get("/G.js", (req, res) => {
    // res.send(G.toString());
    res.type("js").send(G.toString());

});







// Notify us that Patcher is now running
console.log(`Running Patcher at http://localhost:${port}`);




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
