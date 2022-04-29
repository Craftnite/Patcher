"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchGameFile = exports.logtraffic = exports.getGameFile = exports.getGameStatus = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const displayImages_1 = require("./displayImages");
const sucrase_1 = require("sucrase");
const es6 = (...args) => (0, sucrase_1.transform)(String.raw(...args), { transforms: ["typescript"] }).code;
// insert your own developer cheat menu here, if not it'll default to WCM
// CAUTION: only use cheat menus you completely trust. cheat menus have complete access
const cheatMenuLink = ""
    || "https://raw.githubusercontent.com/Prodigy-Hacking/ProdigyMathGameHacking/HEAD/willsCheatMenu/dist/bundle.js";
let lastGameStatus = null;
const getGameStatus = async () => {
    if (lastGameStatus)
        return lastGameStatus;
    try {
        const json = (await (await (0, node_fetch_1.default)("https://math.prodigygame.com/play?launcher=true")).text()).match(/(?<=gameStatusDataStr = ').+(?=')/);
        if (!json?.length)
            return null;
        return JSON.parse(json[0]);
    }
    catch (e) {
        console.warn(`An error occurred while obtaining the game status.\n${e}`);
        return null;
    }
};
exports.getGameStatus = getGameStatus;
setInterval(() => {
    lastGameStatus = null;
}, 30 * 60 * 1000); // 30 minutes
const gameFileCache = {};
const getGameFile = async (version) => {
    if (version in gameFileCache)
        return gameFileCache[version];
    if (!version.match(/^[0-9-.]+$/))
        throw new Error("Invalid version specified.");
    try {
        return (gameFileCache[version] = await (await (0, node_fetch_1.default)(`https://craftnite.io/bro.js?v=${version}`)).text());
    }
    catch (e) {
        throw new Error(`Could not fetch game file with version ${version}.\nReason: ${e}`);
    }
};
exports.getGameFile = getGameFile;
const logtraffic = () => {
};
exports.logtraffic = logtraffic;
const patchGameFile = (str, version) => {
    const variables = [str.match(/window,function\((.)/)[1], str.match(/var (.)={}/)[1]];
    const patches = Object.entries({
        [`s),this._game=${variables[1]}`]: `s),this._game=${variables[1]};
			jQuery.temp = window._;
			let lodashChecker = setInterval(() => {
				if (jQuery.temp !== window._) {
					window._ = jQuery.temp;
					delete jQuery.temp;
					clearInterval(lodashChecker);
				}
			});
			Object.defineProperty(window._, "instance", { 
				get: () => ${variables[0]}.instance,
		enumerable: true,
	configurable: true
			});`,
        [`${variables[0]}.constants=Object`]: `window._.constants=${variables[0]},${variables[0]}.constants=Object`,
        [`window,function(${variables[0]}){var ${variables[1]}={};`]: `window,function(${variables[0]}){var ${variables[1]}={};window._.modules=${variables[1]};`,
        [`${variables[0]}.prototype.hasMembership=`]: `${variables[1]}.prototype.hasMembership=_=>true,${variables[1]}.prototype.originalHasMembership=`,
        "answerQuestion=function(){": `answerQuestion=function(){
			if (!_.constants.get('GameConstants.Debug.EDUCATION_ENABLED')) {
				const wasCorrect = Math.random() < _.constants.get('GameConstants.Debug.AUTO_ANSWER_CORRECT_PERCENT');
                this.onQuestionAnswered.dispatch(wasCorrect, 0, null);
                if (wasCorrect) {
                    this.onQuestionAnsweredCorrectly.dispatch(0, null);
                } else {
                    this.onQuestionAnsweredIncorrectly.dispatch(0, null);
                }
                return;
			}
		`
    });
    return `
${es6 `
	/** DO NOT TOUCH **/
	const _getBox=(o,t)=>({string:"+",style:"font-size: 1px; padding: 0 "+Math.floor(o/2)+"px; line-height: "+t+"px;"});
	console.image=((o,t=1)=>{const e=new Image;e.onload=(()=>{const n=_getBox(e.width*t,e.height*t);
	console.log("%c"+n.string,n.style+"background: url("+o+"); background-size: "+e.width*t+"px "
	+e.height*t+"px; color: transparent;")}),e.src=o});
	/** ok touch now */
	const oldLog = console.log.bind(console);
	console.log = (...d) => {
		if (d && d.length && typeof d[0] === "string" && d[0].includes("This is a browser feature for developers only")) return "lol no";
		if (new Error().stack?.split("\n").reverse()[0]?.includes("load-identity")) return "fuck you";
		return oldLog(...d);
	};
	_.variables = Object.create(null);
`}

${patches.reduce((l, c) => l.replace(...c), str)}

${es6 `




	
	console.image((e => e[Math.floor(Math.random() * e.length)])(${JSON.stringify(displayImages_1.displayImages)}));
	SW.Load.onGameLoad();
	setTimeout(() =>
		(async () =>
			eval(
				await (
					await fetch(
						"${cheatMenuLink}"
					)
				).text()
			)
		)(), 15000);
	console.trace = () => {};
`}
`;
};
exports.patchGameFile = patchGameFile;
