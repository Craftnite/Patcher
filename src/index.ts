// @ts-nocheck muahahaha
import type { Server } from "http";
import express from "express";
import cors from "cors";
import { getGameStatus, getPatchedGameFile } from "./util";
import { DOWNLOAD_LINK, VERSION } from "./constants";
import beautify from "js-beautify";
import fs from 'fs';
const unminifySource = false;
(async () => {
	const app = express();
	app.set('trust proxy', true)
	const gs = await getGameStatus();

	if (!gs) throw new Error("The game status request failed.");

	app.use(cors());
	app.use((req, res, next) => {
		res.set('Cache-Control', 'no-store')
		next()
	})



	app.get(/\/(api\/)?bro.js/, async (req, res) => {
		if (req.query.version && typeof req.query.version !== "string")
			return res.status(400).send("Invalid version specified.");
		const version = req.query.version ?? gs.gameClientVersion;
		try {
			res.type("js").send(`// game.min.js v${version}\n\n`+
				(unminifySource ? beautify : (_: any) => _)
					(await getPatchedGameFile(version))
			);
		} catch (e: unknown) {
			if (!(e instanceof Error)) throw e;
			return res.status(400).send(e.message);
		}
	});

	app.get("/version", (req, res) => res.send(VERSION));
	app.get("/download", (req, res) => res.redirect(DOWNLOAD_LINK));

	
	const addr: ReturnType<Server["address"]> = app.listen(process.env.PORT ?? 1337, () =>
		console.log(`CraftnitePatcher has started on :${typeof addr === "string" ? addr : addr?.port ?? ""}!`)).address();
})();
