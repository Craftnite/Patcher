"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const util_1 = require("./util");
const constants_1 = require("./constants");
const js_beautify_1 = __importDefault(require("js-beautify"));
const unminifySource = false;
(async () => {
    const app = (0, express_1.default)();
    app.set('trust proxy', true);
    const gs = await (0, util_1.getGameStatus)();
    if (!gs)
        throw new Error("The game status request failed.");
    app.use((0, cors_1.default)());
    app.use((req, res, next) => {
        res.set('Cache-Control', 'no-store');
        next();
    });
    app.get(/\/(api\/)?bro.js/, async (req, res) => {
        if (req.query.version && typeof req.query.version !== "string")
            return res.status(400).send("Invalid version specified.");
        const version = req.query.version ?? gs.gameClientVersion;
        try {
            res.type("js").send(`// game.min.js v${version}\n\n` +
                (unminifySource ? js_beautify_1.default : (_) => _)(await (0, util_1.getPatchedGameFile)(version)));
        }
        catch (e) {
            if (!(e instanceof Error))
                throw e;
            return res.status(400).send(e.message);
        }
    });
    app.get("/version", (req, res) => res.send(constants_1.VERSION));
    app.get("/download", (req, res) => res.redirect(constants_1.DOWNLOAD_LINK));
    const addr = app.listen(process.env.PORT ?? 1337, () => console.log(`CraftnitePatcher has started on :${typeof addr === "string" ? addr : addr?.port ?? ""}!`)).address();
})();
