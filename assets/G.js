console.log("%cCraftnite Patcher: G.js", "font-size:20px;color:#540052;font-weight:900;font-family:sans-serif;");



// ----------- BEGIN APPENDED FUNCTIONS  -----------

const prefix2 = "[Patcher]"; // Patcher Prefix
const filename2 = "G.js"; // Filename
const filecat2 = "modified gamefile"; // File Category

function log (message) {
    return console.log(prefix2 + " *at " + filecat2 + " " + filename2 + "* " + message);
}

log("Craftnite Patcher is running: " + filename2);

// ----------- END APPENDED FUNCTIONS  -----------






// ----------- BEGIN GAME FILES -----------


var GAME, G = G || {};
G.CONFIG = {}, G.a863 = {}, G.a805 = {}, G.a867_a863 = {}, G.GameVersion = "", G.ReleaseDate = "", G.a817 = {
    a818: 0,
    a819: 1,
    a820: 2,
    a821: 3,
    a822: 4,
    a793: 5
}, G.Keys = {
    Tab: 9,
    Enter: 13,
    Escape: 27
}, G.othera822ers = Array(120), G.mya822er = {
    ID: null
}, G.assets = null, G.socket = null, G.httpServers = new XMLHttpRequest, G.gameServerAddress = "";
var inFrustum = [],
    a643s = [];

function a97(t, r) {
    return r
}

function pascalTriangle(t, r) {
    for (var o = 1, e = 0; e < r; ++e) o *= (t - e) / (e + 1);
    return o
}

function clamp(t, r, o) {
    return t < r && (t = r), t > o && (t = o), t
}

function milliTimeToTimer(t) {
    var r, o = t / 1e3,
        e = Math.floor(o / 60);
    return r = (o = (o -= 60 * e).toString().split("."))[1] ? o[1] : 0, e < 10 && (e = "0" + e), (o = o[0]) < 10 && (o = "0" + o), r < 10 && (r = "0" + r), e + ":" + o + ":" + r[0].toString() + r[1].toString()
}
G.inherit = function(t, r) {
    var o = Object.create(t.prototype);
    return Object.getOwnPropertyNames(r).forEach((function(t) {
        var e = Object.getOwnPropertyDescriptor(r, t);
        void 0 !== e.get ? o.__defineGetter__(t, e.get) : o[t] = r[t], void 0 !== e.set && o.__defineSetter__(t, e.set)
    })), o
}, G.pushArray = function(t, r) {
    r.forEach((function(t) {
        this.push(t)
    }), t)
}, G.a512 = function(t) {
    return Math.round(t / 16.66)
}, G.pad = function(t, r, o) {
    return o = o || "0", (t += "").length >= r ? t : Array(r - t.length + 1).join(o) + t
}, G.logOnce = function(t, r) {
    !0 !== G.logOnce[t.toString()] && (G.logOnce[t.toString()] = !0, console.log(r))
}, G.isFirefox = "undefined" != typeof InstallTrigger, G.isIFrame = function() {
    try {
        return window.self !== window.top
    } catch (t) {
        return !0
    }
}(), G.isBlockSolid = function(t) {
    return t && "air" != t && "water" != t && "flowing_water" != t && "tallgrass" != t && "yellow_flower" != t && "red_flower" != t && "deadbush" != t && "red_mushroom" != t && "brown_mushroom" != t && "wheat" != t && "ladder" != t && "pumpkin_stem" != t && "melon_stem" != t && "vinea" != t && "vine" != t && "double_plant" != t && "sapling" != t && "lava" != t && "flowing_lava" != t && "slime" != t && "portal" != t
}, G.rotateFromPoint = function(t, r, o, e, n) {
    (n = void 0 !== n && n) && t.parent.localToWorld(t.position), t.position.sub(r), t.position.applyAxisAngle(o, e), t.position.add(r), n && t.parent.worldToLocal(t.position), t.rotateOnAxis(o, e)
}, G.lerp = function(t, r, o) {
    return t + o * (r - t)
}, G.smoothLerp = function(t, r, o) {
    var e = t + G.smoothStep(o) * (r - t),
        n = t + o * (r - t);
    return console.log(t + "|" + r + "|" + o + "|" + G.smoothStep(o) + "|" + e + "|" + n), e
}, G.lerpArr3 = function(t, r, o, e, n, a, i) {
    return [G.lerp(t, r, i), G.lerp(o, e, i), G.lerp(n, a, i)]
}, G.lerpV3 = function(t, r, o) {
    var e = G.lerp(t.x, t.x, o),
        n = G.lerp(t.y, t.y, o),
        a = G.lerp(t.z, t.z, o);
    return new THREE.Vector3(e, n, a)
}, G.smoothLerpV3 = function(t, r, o) {
    var e = G.smoothLerp(t.x, t.x, o),
        n = G.smoothLerp(t.y, t.y, o),
        a = G.smoothLerp(t.z, t.z, o);
    return new THREE.Vector3(e, n, a)
}, G.a488 = function(t, r, o) {
    return t + (((r - t) % THREE.Math.degToRad(360) + THREE.Math.degToRad(540)) % THREE.Math.degToRad(360) - THREE.Math.degToRad(180)) * o
}, G.rotateXWorld = function(t, r) {
    t.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), THREE.Math.degToRad(r))
}, G.rotateYWorld = function(t, r) {
    t.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), THREE.Math.degToRad(r))
}, G.rotateZWorld = function(t, r) {
    t.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), THREE.Math.degToRad(r))
}, G.time = function() {
    return Date.now()
}, G.randInt = function(t, r) {
    return Math.floor(Math.random() * (r - t + 1) + t)
}, G.randFloat = function(t, r, o) {
    return parseFloat(Math.min(t + Math.random() * (r - t), r).toFixed(o))
}, G.isInt = function(t) {
    return t % 1 == 0
}, G.smoothStep = function(t) {
    return t * t * 3 - t * t * t * 2
}, G.sameVector = function(t, r) {
    return t.x == r.x && t.y == r.y && t.z == r.z
}, G.intersectAABB = function(t, r, o, e, n, a, i, l, u, s, c, G) {
    return t <= l && r >= i && o <= s && e >= u && n <= G && a >= c
}, G.timeToTimer = function(t) {
    var r = t,
        o = Math.floor(r / 60);
    return r -= 60 * o, o < 10 && (o = "0" + o), (r = (r = r.toString().split("."))[0]) < 10 && (r = "0" + r), o + ":" + r
}, G.worldObjToScreenCoords = function(t, r, o, e) {
    let n = new THREE.Vector3(0, 0, 0);
    n.project(r);
    let a = o / 2,
        i = e / 2;
    return n.x = n.x * a + a, n.y = -n.y * i + i, n.z = 0, n
}, G.worldPosToScreenCoords = function(t, r, o, e, n) {
    n || (n = 0);
    var a = t.clone();
    a.project(r);
    var i = !1;
    a.z > 1 && (i = !0, a.x *= -1, a.y *= -1);
    let l = o / 2,
        u = e / 2;
    var s;
    if (a.x = a.x * l + l, a.y = -a.y * u + u, i || (a.x < 0 || a.x > o || a.y < 0 || a.y > e) && (i = !0), i) {
        var c = new THREE.Vector3(l, u, 0);
        a.x -= c.x, a.y -= c.y;
        var G = Math.atan2(a.y, a.x),
            d = Math.cos(G -= 2 * Math.PI / 360 * 90),
            p = -Math.sin(G);
        a.x = c.x + 150 * p, a.y = c.y + 150 * d;
        var f = d / p;
        d > 0 ? (a.x = c.y / f, a.y = c.y) : (a.x = -c.y / f, a.y = -c.y), a.x > c.x ? (a.x = c.x, a.y = c.x * f) : a.x < -c.x && (a.x = -c.x, a.y = -c.x * f), a.x += c.x, a.y += c.y
    }
    return s = "", a.y <= n ? (a.y = n, s = "top") : a.y >= e - n && (a.y = e - n, s = "bottom"), a.x <= n ? (a.x = n, s += "left") : a.x >= o - n && (a.x = o - n, s += "right"), "" == s && (s = "center"), {
        orientation: s,
        angle: G,
        coords: a
    }
}, G.gunClip = function(t, r) {
    var o = 0,
        e = 0;
    return t > 0 && (0 == (o = t % r) && (o = r), e = (t - o) / r), {
        totalClips: e,
        totalInClip: o
    }
}, G.shortToIdMeta = function(t) {
    for (var r = 0;;) {
        if (t < 256) return {
            id: r,
            meta: t
        };
        t -= 256, r++
    }
};


// ----------- END GAME FILES -----------


// https://craftnite.io/G.js?v=10