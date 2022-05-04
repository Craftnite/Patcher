
console.log("%cCraftnite Patcher: sup.js", "font-size:20px;color:#540052;font-weight:900;font-family:sans-serif;");



// ----------- BEGIN APPENDED FUNCTIONS  -----------

const prefix = "[Patcher]"; // Patcher Prefix
const filename = "sup.js"; // Filename
const filecat = "modified gamefile"; // File Category

function log (message) {
    return console.log(prefix + " *at " + filecat + " " + filename + "* " + message);
}

log("Craftnite Patcher is running: " + filename);

// ----------- END APPENDED FUNCTIONS  -----------






// ----------- BEGIN GAME FILES -----------


const a1 = 1,
    a2 = .44,
    a3 = .4,
    a4 = .3,
    a5 = .6;
var a65, a66, a67 = new Int32Array(32768),
    mask = new Int32Array(32768),
    collisionMask = new Int32Array(4096);

function f(e, r, t, o, s) {
    return o[e + s[0] * (r + s[1] * t)]
}
for (var collisionD = 8, volumePerBlock = collisionD * collisionD * collisionD, totalBlocks = 32768 / volumePerBlock, blocksD = 32 / collisionD, a6 = Array(totalBlocks), i = 0; i < totalBlocks; i++) a6[i] = new Uint16Array(volumePerBlock);
var coords, x, y, z, blockX, blockY, blockZ, blockU, blockU2, blockUCoords = Array(totalBlocks),
    blockHasBlocks = Array(totalBlocks),
    collisionVertices = Array(totalBlocks);

function collisionTriangles(e, r) {
    var t = 999999999999999,
        o = 0,
        s = 999999999999999,
        n = 0,
        l = [32, 32, 32],
        a = new Uint16Array(32768);
    blockHasBlocks = Array(totalBlocks);
    for (var i = 0; i < e.length; i++) e[i] > 0 ? a[i] = 1 : a[i] = 0, v = (coords = a33(i))[0], y = coords[1], z = coords[2], blockX = Math.floor(v / collisionD), blockY = Math.floor(y / collisionD), blockUCoords[blockU = blockX * blocksD * blocksD + (blockZ = Math.floor(z / collisionD)) * blocksD + blockY] = {
        x: blockX,
        y: blockY,
        z: blockZ
    }, blockU2 = (blockZ = z - blockZ * collisionD) * collisionD * collisionD + (blockY = y - blockY * collisionD) * collisionD + (blockX = v - blockX * collisionD), e[i] > 0 && "water" != BLOCK_CONFIG[e[i]].name && "flowing_water" != BLOCK_CONFIG[e[i]].name && "tallgrass" != BLOCK_CONFIG[e[i]].name && "yellow_flower" != BLOCK_CONFIG[e[i]].name && "red_flower" != BLOCK_CONFIG[e[i]].name && "deadbush" != BLOCK_CONFIG[e[i]].name && "red_mushroom" != BLOCK_CONFIG[e[i]].name && "brown_mushroom" != BLOCK_CONFIG[e[i]].name && "wheat" != BLOCK_CONFIG[e[i]].name && "ladder" != BLOCK_CONFIG[e[i]].name && "pumpkin_stem" != BLOCK_CONFIG[e[i]].name && "melon_stem" != BLOCK_CONFIG[e[i]].name && "vine" != BLOCK_CONFIG[e[i]].name && "double_plant" != BLOCK_CONFIG[e[i]].name && "sapling" != BLOCK_CONFIG[e[i]].name && "lava" != BLOCK_CONFIG[e[i]].name && "flowing_lava" != BLOCK_CONFIG[e[i]].name && "slime" != BLOCK_CONFIG[e[i]].name && "portal" != BLOCK_CONFIG[e[i]].name ? (a6[blockU][blockU2] = 1, blockHasBlocks[blockU] = !0) : a6[blockU][blockU2] = 0;
    collisionVertices = [];
    l = [collisionD, collisionD, collisionD];
    for (var c = 0; c < totalBlocks; c++)
        if (blockHasBlocks[c]) {
            if (blockUCoords[c]) var _ = [5 * blockUCoords[c].x * collisionD, 5 * blockUCoords[c].y * collisionD, 5 * blockUCoords[c].z * collisionD];
            for (var C = [], E = 0; E < 3; ++E) {
                var h = (E + 1) % 3,
                    I = (E + 2) % 3,
                    v = [0, 0, 0],
                    u = [0, 0, 0];
                for (collisionMask.length < l[h] * l[I] && (collisionMask = new Int32Array(l[h] * l[I])), u[E] = 1, v[E] = -1; v[E] < l[E];) {
                    var p = 0;
                    for (v[I] = 0; v[I] < l[I]; ++v[I])
                        for (v[h] = 0; v[h] < l[h]; ++v[h], ++p) {
                            var k = 0 <= v[E] ? f(v[0], v[1], v[2], a6[c], l) : 0,
                                O = v[E] < l[E] - 1 ? f(v[0] + u[0], v[1] + u[1], v[2] + u[2], a6[c], l) : 0;
                            collisionMask[p] = !!k == !!O ? 0 : k || -O
                        }
                    for (++v[E], p = 0, D = 0; D < l[I]; ++D)
                        for (i = 0; i < l[h];) {
                            if (L = collisionMask[p]) {
                                for (F = 1; L === collisionMask[p + F] && i + F < l[h]; ++F);
                                var A = !1;
                                for (U = 1; D + U < l[I]; ++U) {
                                    for (N = 0; N < F; ++N)
                                        if (L !== collisionMask[p + N + U * l[h]]) {
                                            A = !0;
                                            break
                                        } if (A) break
                                }
                                v[h] = i, v[I] = D;
                                var S = [0, 0, 0],
                                    d = [0, 0, 0];
                                for (L > 0 ? (d[I] = U, S[h] = F) : (L = -L, S[I] = U, d[h] = F), a8 = [r[0] + _[0] + v[0] * a12, r[1] + _[1] + v[1] * a12, r[2] + _[2] + v[2] * a12], a9 = [r[0] + _[0] + (v[0] + S[0]) * a12, r[1] + _[1] + (v[1] + S[1]) * a12, r[2] + _[2] + (v[2] + S[2]) * a12], a10 = [r[0] + _[0] + (v[0] + S[0] + d[0]) * a12, r[1] + _[1] + (v[1] + S[1] + d[1]) * a12, r[2] + _[2] + (v[2] + S[2] + d[2]) * a12], a11 = [r[0] + _[0] + (v[0] + d[0]) * a12, r[1] + _[1] + (v[1] + d[1]) * a12, r[2] + _[2] + (v[2] + d[2]) * a12], C.push(a8[0]), C.push(a8[1]), C.push(a8[2]), C.push(a9[0]), C.push(a9[1]), C.push(a9[2]), C.push(a10[0]), C.push(a10[1]), C.push(a10[2]), C.push(a8[0]), C.push(a8[1]), C.push(a8[2]), C.push(a10[0]), C.push(a10[1]), C.push(a10[2]), C.push(a11[0]), C.push(a11[1]), C.push(a11[2]), B = 0; B < U; ++B)
                                    for (N = 0; N < F; ++N) collisionMask[p + N + B * l[h]] = 0;
                                i += F, p += F
                            } else ++i, ++p
                        }
                }
            }
            collisionVertices.push(new Float32Array(C))
        } C = [];
    for (l = [32, 32, 32], E = 0; E < 3; ++E) {
        var D, N, B, F, U;
        h = (E + 1) % 3, I = (E + 2) % 3, v = [0, 0, 0], u = [0, 0, 0];
        for (mask.length < l[h] * l[I] && (mask = new Int32Array(l[h] * l[I])), u[E] = 1, v[E] = -1; v[E] < l[E];) {
            p = 0;
            for (v[I] = 0; v[I] < l[I]; ++v[I])
                for (v[h] = 0; v[h] < l[h]; ++v[h], ++p) {
                    k = 0 <= v[E] ? f(v[0], v[1], v[2], a, l) : 0, O = v[E] < l[E] - 1 ? f(v[0] + u[0], v[1] + u[1], v[2] + u[2], a, l) : 0;
                    mask[p] = !!k == !!O ? 0 : k || -O
                }
            for (++v[E], p = 0, D = 0; D < l[I]; ++D)
                for (i = 0; i < l[h];) {
                    var L;
                    if (L = mask[p]) {
                        for (F = 1; L === mask[p + F] && i + F < l[h]; ++F);
                        A = !1;
                        for (U = 1; D + U < l[I]; ++U) {
                            for (N = 0; N < F; ++N)
                                if (L !== mask[p + N + U * l[h]]) {
                                    A = !0;
                                    break
                                } if (A) break
                        }
                        v[h] = i, v[I] = D;
                        S = [0, 0, 0], d = [0, 0, 0];
                        for (L > 0 ? (d[I] = U, S[h] = F) : (L = -L, S[I] = U, d[h] = F), a8 = [r[0] + v[0] * a12, r[1] + v[1] * a12, r[2] + v[2] * a12], a9 = [r[0] + (v[0] + S[0]) * a12, r[1] + (v[1] + S[1]) * a12, r[2] + (v[2] + S[2]) * a12], a10 = [r[0] + (v[0] + S[0] + d[0]) * a12, r[1] + (v[1] + S[1] + d[1]) * a12, r[2] + (v[2] + S[2] + d[2]) * a12], a11 = [r[0] + (v[0] + d[0]) * a12, r[1] + (v[1] + d[1]) * a12, r[2] + (v[2] + d[2]) * a12], C.push(a8[0]), C.push(a8[1]), C.push(a8[2]), C.push(a9[0]), C.push(a9[1]), C.push(a9[2]), C.push(a10[0]), C.push(a10[1]), C.push(a10[2]), C.push(a8[0]), C.push(a8[1]), C.push(a8[2]), C.push(a10[0]), C.push(a10[1]), C.push(a10[2]), C.push(a11[0]), C.push(a11[1]), C.push(a11[2]), a8[0] < t && (t = a8[0]), a8[0] > o && (o = a8[0]), a8[2] < s && (s = a8[2]), a8[2] > n && (n = a8[2]), a9[0] < t && (t = a9[0]), a9[0] > o && (o = a9[0]), a9[2] < s && (s = a9[2]), a9[2] > n && (n = a9[2]), a10[0] < t && (t = a10[0]), a10[0] > o && (o = a10[0]), a10[2] < s && (s = a10[2]), a10[2] > n && (n = a10[2]), a11[0] < t && (t = a11[0]), a11[0] > o && (o = a11[0]), a11[2] < s && (s = a11[2]), a11[2] > n && (n = a11[2]), B = 0; B < U; ++B)
                            for (N = 0; N < F; ++N) mask[p + N + B * l[h]] = 0;
                        i += F, p += F
                    } else ++i, ++p
                }
        }
    }
    return {
        shapeVertices: new Float32Array(C),
        volume: e = new Uint16Array(e),
        pointMinX: t,
        pointMinZ: s,
        pointMaxX: o,
        pointMaxZ: n,
        collisionVertices: collisionVertices
    }
}
const a12 = 5,
    a13 = a12 / 2,
    a14 = 32,
    a15 = 32,
    a16 = 32768,
    SQUARE_a14 = 1024,
    a18 = 32 * a12,
    a19 = a18 / 2,
    Z = 0,
    N = -1,
    P = 1,
    a20 = [
        [0, 0, N],
        [0, 0, 1],
        [1, 0, 0],
        [N, 0, 0],
        [0, 1, 0],
        [0, N, 0]
    ],
    a21 = [
        [1, 0, N],
        [N, 0, N],
        [0, 1, N],
        [0, N, N],
        [1, 0, 1],
        [N, 0, 1],
        [0, 1, 1],
        [0, N, 1],
        [1, 1, 0],
        [1, N, 0],
        [N, 1, 0],
        [N, N, 0]
    ],
    a22 = [
        [N, N, N],
        [1, N, N],
        [1, N, 1],
        [N, N, 1],
        [N, 1, N],
        [1, 1, N],
        [1, 1, 1],
        [N, 1, 1]
    ],
    a23 = [
        [5, 4, 0, 1],
        [7, 6, 2, 3],
        [6, 5, 1, 2],
        [4, 7, 3, 0],
        [6, 7, 4, 5],
        [1, 0, 3, 2]
    ],
    a24 = [
        [0, 0, 0],
        [1, 0, 0],
        [1, 0, 1],
        [0, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [1, 1, 1],
        [0, 1, 1]
    ],
    a25 = [0, 3, 1, 1, 3, 2],
    a25_FLIPPED = [0, 3, 2, 2, 1, 0],
    a27 = [
        [0, 2, 1, 3],
        [5, 6, 4, 7],
        [4, 8, 0, 9],
        [1, 10, 5, 11],
        [8, 6, 10, 2],
        [9, 3, 11, 7]
    ],
    EDGE_a23 = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ];
for (let e = 0; e < 6; e++)
    for (let r of a27[e]) EDGE_a23[r].push(e);
const CORNER_a23 = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];
for (let e = 0; e < 6; e++)
    for (let r of a23[e]) CORNER_a23[r].push(e);
const a30 = [
        [32, 32, 32],
        [32, 32, 32],
        [32, 32, 32],
        [32, 32, 32],
        [32, 32, 32],
        [32, 32, 32]
    ],
    a31 = [(e, r, t) => a32(r, t, e), (e, r, t) => a32(r, t, e), (e, r, t) => a32(e, r, t), (e, r, t) => a32(e, r, t), (e, r, t) => a32(r, e, t), (e, r, t) => a32(r, e, t)],
    a43 = {
        a44: 1,
        a45: 2
    };
class a650Chunk {
    constructor(e) {
        this.ao = e, this._block = new Uint16Array(32768), this.a57 = new Uint32Array(32768), this.a58 = new Uint16Array(32768), this.a59 = new Uint16Array(32768), this.a60 = new Uint16Array(32768), this.a63 = [new Uint16Array(32768), new Uint16Array(32768), new Uint16Array(32768), new Uint16Array(32768), new Uint16Array(32768), new Uint16Array(32768)], this.a61 = [new Uint16Array(32768), new Uint16Array(32768), new Uint16Array(32768), new Uint16Array(32768), new Uint16Array(32768), new Uint16Array(32768)], this._quads = null, this.a62 = null
    }
    a46(e, r, t) {
        return r < 0 || r >= 32 || e < 0 || e >= 32 || t < 0 || t >= 32 ? null : this._block[a32(e, r, t)]
    }
    a46Indexed(e) {
        return this._block[e]
    }
    a48(e, r, t, o) {
        this._block[a32(r, t, o)] = e
    }
    a49(e) {
        this.a50(), this._a37();
        let r = this.a54(e);
        return this._quads = null, this.a62 = null, r
    }
    a50() {
        for (let e = 0; e < 32; e++)
            for (let r = 0; r < 32; r++)
                for (let t = 0; t < 32; t++) this.a50ForIndex(e, r, t)
    }
    a50ForIndex(e, r, t) {
        let o = 0,
            s = 0,
            n = 0,
            l = 0,
            a = 0,
            i = a32(e, r, t),
            c = this._block[i];
        if (!c) return;
        let _ = BLOCK_CONFIG[c],
            C = !!_.transparency,
            E = !!_.partialTransparency;
        for (let s = 0; s < 6; s++) {
            let n = a20[s],
                l = this._a46FromDir(e, r, t, n);
            l && (!BLOCK_CONFIG[l].transparency || 1 !== BLOCK_CONFIG[l].transparency && l === c) || (o |= 1 << s)
        }
        for (let o = 0; o < 12; o++) {
            let n = a21[o],
                l = this._a46FromDir(e, r, t, n);
            l && (!BLOCK_CONFIG[l].transparency || 1 !== BLOCK_CONFIG[l].transparency && l === c) || (s |= 1 << o)
        }
        for (let o = 0; o < 8; o++) {
            let s = a22[o],
                l = this._a46FromDir(e, r, t, s);
            l && (!BLOCK_CONFIG[l].transparency || 1 !== BLOCK_CONFIG[l].transparency && l === c) || (n |= 1 << o)
        }
        if (C) a = o;
        else if (this.ao)
            for (let e = 0; e < 6; e++) {
                if (!(1 << e & o)) continue;
                let r = a23[e],
                    t = !1;
                for (let o = 0; o < 4 && (s & 1 << a27[e][o] && s & 1 << a27[e][o] && n & 1 << r[o] || (t = !0), !t); o++);
                t && (l |= 1 << e)
            }
        let h = E ? this.a61 : this.a63;
        for (let e = 0; e < 6; e++) {
            let r = 1 << e;
            h[e][i] = 0 != (o & r) && 0 == (l & r) ? c : 0
        }
        this.a57[i] = s, this.a58[i] = n, this.a59[i] = l, this.a60[i] = a
    }
    _a46FromDir(e, r, t, o) {
        return e += o[0], r += o[1], t += o[2], this.a46(e, r, t)
    }
    _a37() {
        this._quads = a37(this.a63), this.a62 = a37(this.a61)
    }
    a54(e) {
        let r = 0;
        for (let e = 0; e < 32; e++)
            for (let t = 0; t < 32; t++)
                for (let o = 0; o < 32; o++) {
                    let s = a32(e, t, o),
                        n = this.a59[s];
                    for (let e = 0; e < 6; e++) 0 != (n & 1 << e) && r++
                }
        for (let e = 0; e < 6; e++) r += Math.floor(this._quads[e].length / 6);
        let t = 4 * r,
            o = 0;
        for (let e = 0; e < 6; e++) o += Math.floor(this.a62[e].length / 6);
        let s = 4 * o,
            n = 0,
            l = new Uint32Array(6 * r),
            a = new Float32Array(3 * t),
            i = new Float32Array(2 * t),
            c = new Float32Array(2 * t),
            _ = new Float32Array(t),
            C = 0,
            E = new Uint32Array(6 * o),
            h = new Float32Array(3 * s),
            I = new Float32Array(2 * s),
            v = new Float32Array(2 * s);
        for (let r = 0; r < 32; r++)
            for (let t = 0; t < 32; t++)
                for (let o = 0; o < 32; o++) {
                    let s = this.a55(n, r, t, o, l, a, i, c, _, e);
                    s && (n = s)
                }
        return n = a56(n, e, this._quads, l, a, i, c, _), C = a56(C, e, this.a62, E, h, I, v), {
            indices: l,
            vertices: a,
            shading: _,
            uvBases: i,
            uvProgresses: c,
            transparentIndices: E,
            transparentVertices: h,
            transparentUvBases: I,
            transparentUvProgresses: v
        }
    }
    a55(e, r, t, o, s, n, l, a, i, c) {
        let _ = a32(r, t, o),
            C = this.a57[_],
            E = this.a58[_],
            h = this.a59[_];
        if (0 === h) return;
        let I = a32(r, t, o),
            v = this._block[I];
        for (let c = 0; c < 6; c++) {
            if (0 == (h & 1 << c)) continue;
            let _, I, p, f, k = a23[c],
                O = a20[c],
                A = BLOCK_CONFIG[v],
                S = A.textures[c],
                d = A.cross;
            _ = 0, I = C & 1 << a27[c][_], p = C & 1 << a27[c][(_ + 1) % 4], f = 0 != (E & 1 << k[_]);
            let D = 0;
            I && p && f || (D = 1), I && p || f || (D = 2), I || p || f || (D = 3), _ = 1, I = C & 1 << a27[c][_], p = C & 1 << a27[c][(_ + 1) % 4], f = 0 != (E & 1 << k[_]);
            let N = 0;
            I && p && f || (N = 1), I && p || f || (N = 2), I || p || f || (N = 3), _ = 2, I = C & 1 << a27[c][_], p = C & 1 << a27[c][(_ + 1) % 4], f = 0 != (E & 1 << k[_]);
            let B = 0;
            I && p && f || (B = 1), I && p || f || (B = 2), I || p || f || (B = 3), _ = 3, I = C & 1 << a27[c][_], p = C & 1 << a27[c][(_ + 1) % 4], f = 0 != (E & 1 << k[_]);
            let F = 0;
            I && p && f || (F = 1), I && p || f || (F = 2), I || p || f || (F = 3);
            let y = !!D + !!B < !!N + !!F ? a25_FLIPPED : a25;
            s[6 * e] = 4 * e + y[0], s[6 * e + 1] = 4 * e + y[1], s[6 * e + 2] = 4 * e + y[2], s[6 * e + 3] = 4 * e + y[3], s[6 * e + 4] = 4 * e + y[4], s[6 * e + 5] = 4 * e + y[5];
            for (let s = 0; s < 4; s++) {
                let _, C = 4 * e + s,
                    E = k[s],
                    h = a24[E];
                n[3 * C] = r + h[0], n[3 * C + 1] = t + h[1], n[3 * C + 2] = o + h[2], d && (n[3 * C] -= O[0] / 2, n[3 * C + 1] -= O[1] / 2, n[3 * C + 2] -= O[2] / 2), l[2 * C] = a35(S[0]), l[2 * C + 1] = a36(S[1]), a[2 * C] = 1 === s || 2 === s ? 0 : 1, a[2 * C + 1] = 2 === s || 3 === s ? 0 : 1, 0 === s && (_ = D), 1 === s && (_ = N), 2 === s && (_ = B), 3 === s && (_ = F);
                var u = 1;
                switch (c) {
                    case 0:
                        u -= .44 / 3;
                        break;
                    case 1:
                        u -= .22;
                        break;
                    case 2:
                        u -= .11;
                        break;
                    case 3:
                        u -= .44;
                        break;
                    case 4:
                        break;
                    case 5:
                        u -= .44
                }
                switch (_) {
                    case 0:
                        u -= 0;
                        break;
                    case 1:
                        u -= .3;
                        break;
                    case 2:
                        u -= .4;
                        break;
                    case 3:
                        u -= .6;
                        break;
                    default:
                        console.warn("Invalid AO value", _)
                }
                i[C] = u
            }
            e++
        }
        return e
    }
}

function a64(e, r) {
    return (e % r + r) % r
}

function a32(e, r, t) {
    return 32 * t * 32 + 32 * r + e
}

function a33(e) {
    let r = Math.floor(e / 1024);
    return [(e -= 32 * r * 32) % 32, Math.floor(e / 32), r]
}

function a34(e, r, t, o, s) {
    let n = t & 1 << a27[r][e],
        l = t & 1 << a27[r][(e + 1) % 4],
        a = 0 != (o & 1 << s[e]),
        i = 0;
    return n && l && a || (i = 1), n && l || a || (i = 2), n || l || a || (i = 3), i
}

function a35(e) {
    return (e * a40_PADDED + a41) / a39[0]
}

function a36(e) {
    return (a39[1] - (e + 1) * a40_PADDED + a41) / a39[1]
}

function a37(e) {
    let r = [];
    for (let t = 0; t < 6; t++) r.push(a37ForDimension(e, t));
    return r
}

function a37ForDimension(e, r) {
    let t = [],
        o = e[r],
        s = a30[r],
        n = s[0],
        l = s[1],
        a = s[2],
        i = a31[r];
    for (let e = 0; e < n; e++)
        for (let r = 0; r < a; r++)
            for (let s = 0; s < l; s++) {
                let n = o[i(e, s, r)];
                if (0 === n) continue;
                let c = 0;
                for (; s + c + 1 < l;) {
                    if (o[i(e, s + c + 1, r)] !== n) break;
                    c += 1
                }
                let _ = 0;
                e: for (; r + _ + 1 < a;) {
                    for (let t = 0; t <= c; t++) {
                        if (o[i(e, s + t, r + _ + 1)] !== n) break e
                    }
                    _ += 1
                }
                t.push(e, s, r, c, _, n);
                for (let t = r; t <= r + _; t++)
                    for (let r = s; r <= s + c; r++) o[i(e, r, t)] = 0;
                s += c
            }
    return t
}

function a56(e, r, t, o, s, n, l, a = null) {
    for (let r = 0; r < 6; r++) {
        let c = t[r],
            _ = a23[r],
            C = a31[r],
            E = a20[r];
        for (let t = 0; t < c.length; t += 6) {
            let h = c[t],
                I = c[t + 1],
                v = c[t + 2],
                u = c[t + 3],
                p = c[t + 4],
                f = c[t + 5],
                k = C(h, I, v),
                O = Math.floor(k / 1024);
            k -= 32 * O * 32;
            let A = Math.floor(k / 32),
                S = k % 32,
                d = C(1, u, p),
                D = Math.floor(d / 1024);
            d -= 32 * D * 32;
            let N = Math.floor(d / 32),
                B = d % 32;
            B += E[0] ? 0 : 1, N += E[1] ? 0 : 1, D += E[2] ? 0 : 1;
            let F, y, U = BLOCK_CONFIG[f],
                L = U.textures[r],
                G = U.cross;
            0 === r || 1 === r ? (F = B, y = N) : 2 === r || 3 === r ? (F = D, y = N) : 4 !== r && 5 !== r || (F = B, y = D), o[6 * e] = 4 * e + a25[0], o[6 * e + 1] = 4 * e + a25[1], o[6 * e + 2] = 4 * e + a25[2], o[6 * e + 3] = 4 * e + a25[3], o[6 * e + 4] = 4 * e + a25[4], o[6 * e + 5] = 4 * e + a25[5];
            for (let t = 0; t < 4; t++) {
                let o = 4 * e + t,
                    c = _[t],
                    C = a24[c];
                s[3 * o] = S + C[0] * B, s[3 * o + 1] = A + C[1] * N, s[3 * o + 2] = O + C[2] * D, G && (s[3 * o] -= E[0] / 2, s[3 * o + 1] -= E[1] / 2, s[3 * o + 2] -= E[2] / 2), n[2 * o] = a35(L[0]), n[2 * o + 1] = a36(L[1]), l[2 * o] = 1 === t || 2 === t ? 0 : F, l[2 * o + 1] = 2 === t || 3 === t ? 0 : y;
                var i = 1;
                switch (r) {
                    case 0:
                        i -= .44 / 3;
                        break;
                    case 1:
                        i -= .22;
                        break;
                    case 2:
                        i -= .11;
                        break;
                    case 3:
                        i -= .44;
                        break;
                    case 4:
                        break;
                    case 5:
                        i -= .44
                }
                a && (a[o] = i)
            }
            e++
        }
    }
    return e
}

function greedy(e) {
    for (var r = new a650Chunk(e.ao), t = [e.i * a18 + a19, e.e * a18 + a19, e.o * a18 + a19], o = [t[0] - 32 * a12 / 2, t[1] - 32 * a12 / 2, t[2] - 32 * a12 / 2], s = a67, n = 0, l = 0; l < e.vArrType.length; l++)
        for (var a = 0; a < e.vArr[l]; a++) {
            if (s[n] = e.vArrType[l], s[n] > 0 && !BLOCK_CONFIG[s[n]]) {
                var i = G.shortToIdMeta(s[n]),
                    c = s[n] - i.meta;
                BLOCK_CONFIG[c] ? s[n] = c : s[n] = 0
            }
            n++
        }
    r._block = s;
    var _ = r.a49({
            buildP: o
        }),
        C = collisionTriangles(s, o);
    return {
        i: e.i,
        e: e.e,
        o: e.o,
        pos: t,
        buildP: o,
        shapeVertices: C.shapeVertices,
        collisionVertices: C.collisionVertices,
        volume: C.volume,
        solidIndices: _.indices,
        solidVertices: _.vertices,
        solidShading: _.shading,
        solidUvBases: _.uvBases,
        solidUvProgresses: _.uvProgresses,
        transparentIndices: _.transparentIndices,
        transparentVertices: _.transparentVertices,
        transparentUvBases: _.transparentUvBases,
        transparentUvProgresses: _.transparentUvProgresses,
        pointMinX: C.pointMinX,
        pointMinZ: C.pointMinZ,
        pointMaxX: C.pointMaxX,
        pointMaxZ: C.pointMaxZ
    }
}
class a233 {
    constructor() {
        this.i = [], this.e = [], this.o = []
    }
    a615(e) {
        for (var r = 1; r < e.byteLength; r += 6) this.i.push(e.getUint16(r, !0)), this.e.push(e.getUint16(r + 2, !0)), this.o.push(e.getUint16(r + 4, !0))
    }
}
class a2313 {
    constructor() {
        this.i = [], this.e = [], this.o = [], this.a635 = [], this.vArr = []
    }
    a615(e, r) {
        for (var t = 1; t < e.byteLength;) {
            this.i.push(e.getUint32(t, !0)), t += 4, this.e.push(e.getUint32(t, !0)), t += 4, this.o.push(e.getUint32(t, !0)), t += 4;
            var o = e.getUint32(t, !0);
            t += 4, a65 = new Uint16Array(o), a66 = new Uint16Array(o);
            for (var s = 0, n = 0; n < o; n++) a65[s] = e.getUint16(t, !0), t += 2, a66[s] = e.getUint16(t, !0), t += 2, s++;
            this.a635.push(a65), this.vArr.push(a66)
        }
    }
}

// ----------- END GAME FILES -----------


// https://craftnite.io/sup.js?v=10