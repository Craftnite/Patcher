console.log("%cCraftnite Patcher: yo.js", "font-size:20px;color:#540052;font-weight:900;font-family:sans-serif;");

console.log("[Patcher] Craftnite Patcher is running: yo.js");


! function(t) {
    var e, i, o, n, s = 1e3 / 60,
        r = 0,
        a = 0,
        h = 60,
        l = 0,
        c = 0,
        u = 0,
        d = 0,
        p = !1,
        f = !1,
        g = !1,
        m = "object" == typeof window ? window : t,
        y = m.requestAnimationFrame || (n = Date.now(), function(t) {
            return i = Date.now(), n = i + (o = Math.max(0, s - (i - n))), setTimeout((function() {
                t(i + o)
            }), o)
        }),
        v = m.cancelAnimationFrame || clearTimeout,
        w = function() {},
        O = w,
        E = w,
        G = w,
        b = w;

    function k(t) {
        if (e = y(k), !(t < a + d)) {
            for (r += t - a, a = t, O(t, r), t > l + 1e3 && (h = .9 * c * 1e3 / (t - l) + (1 - .9) * h, l = t, c = 0), c++, u = 0; r >= s;)
                if (E(s), r -= s, ++u >= 240) {
                    g = !0;
                    break
                } G(r / s), b(h, g), g = !1
        }
    }
    t.MainLoop = {
        getSimulationTimestep: function() {
            return s
        },
        setSimulationTimestep: function(t) {
            return s = t, this
        },
        getFPS: function() {
            return h
        },
        getMaxAllowedFPS: function() {
            return 1e3 / d
        },
        setMaxAllowedFPS: function(t) {
            return void 0 === t && (t = 1 / 0), 0 === t ? this.stop() : d = 1e3 / t, this
        },
        resetFrameDelta: function() {
            var t = r;
            return r = 0, t
        },
        setBegin: function(t) {
            return O = t || O, this
        },
        setUpdate: function(t) {
            return E = t || E, this
        },
        setDraw: function(t) {
            return G = t || G, this
        },
        setEnd: function(t) {
            return b = t || b, this
        },
        start: function() {
            return f || (f = !0, e = y((function(t) {
                G(1), p = !0, a = t, l = t, c = 0, e = y(k)
            }))), this
        },
        stop: function() {
            return p = !1, f = !1, v(e), this
        },
        a751: function() {
            return p
        }
    }, "function" == typeof define && define.amd ? define(t.MainLoop) : "object" == typeof module && null !== module && "object" == typeof module.exports && (module.exports = t.MainLoop)
}(this),
function() {
    function t(t, e, i) {
        i = (i || 0) - 1;
        for (var o = t ? t.length : 0; ++i < o;)
            if (t[i] === e) return i;
        return -1
    }

    function e(e, i) {
        var o = typeof i;
        if (e = e.l, "boolean" == o || null == i) return e[i] ? 0 : -1;
        "number" != o && "string" != o && (o = "object");
        var n = "number" == o ? i : m + i;
        return e = (e = e[o]) && e[n], "object" == o ? e && -1 < t(e, i) ? 0 : -1 : e ? 0 : -1
    }

    function i(t) {
        var e = this.l,
            i = typeof t;
        if ("boolean" == i || null == t) e[t] = !0;
        else {
            "number" != i && "string" != i && (i = "object");
            var o = "number" == i ? t : m + t;
            e = e[i] || (e[i] = {});
            "object" == i ? (e[o] || (e[o] = [])).push(t) : e[o] = !0
        }
    }

    function o(t) {
        return t.charCodeAt(0)
    }

    function n(t, e) {
        for (var i = t.m, o = e.m, n = -1, s = i.length; ++n < s;) {
            var r = i[n],
                a = o[n];
            if (r !== a) {
                if (r > a || void 0 === r) return 1;
                if (r < a || void 0 === a) return -1
            }
        }
        return t.n - e.n
    }

    function s(t) {
        var e = -1,
            o = t.length,
            n = t[0],
            s = t[o / 2 | 0],
            r = t[o - 1];
        if (n && "object" == typeof n && s && "object" == typeof s && r && "object" == typeof r) return !1;
        for ((n = h()).false = n.null = n.true = n.undefined = !1, (s = h()).k = t, s.l = n, s.push = i; ++e < o;) s.push(t[e]);
        return s
    }

    function r(t) {
        return "\\" + N[t]
    }

    function a() {
        return p.pop() || []
    }

    function h() {
        return f.pop() || {
            k: null,
            l: null,
            m: null,
            false: !1,
            n: 0,
            null: !1,
            number: null,
            object: null,
            push: null,
            string: null,
            true: !1,
            undefined: !1,
            o: null
        }
    }

    function l(t) {
        t.length = 0, p.length < v && p.push(t)
    }

    function c(t) {
        var e = t.l;
        e && c(e), t.k = t.l = t.m = t.object = t.number = t.string = t.o = null, f.length < v && f.push(t)
    }

    function u(t, e, i) {
        e || (e = 0), void 0 === i && (i = t ? t.length : 0);
        for (var o = -1, n = Array(0 > (i = i - e || 0) ? 0 : i); ++o < i;) n[o] = t[e + o];
        return n
    }
    var d, p = [],
        f = [],
        g = 0,
        m = +new Date + "",
        y = 75,
        v = 40,
        w = " \t\v\f \ufeff\n\r\u2028\u2029 ᠎             　",
        O = /\b__p\+='';/g,
        E = /\b(__p\+=)''\+/g,
        G = /(__e\(.*?\)|\b__t\))\+'';/g,
        b = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        k = /\w*$/,
        T = /^\s*function[ \n\r\t]+\w/,
        S = /<%=([\s\S]+?)%>/g,
        x = RegExp("^[" + w + "]*0+(?=.$)"),
        C = /($^)/,
        A = /\bthis\b/,
        R = /['\n\r\t\u2028\u2029\\]/g,
        M = "Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setTimeout".split(" "),
        I = "[object Arguments]",
        L = "[object Array]",
        z = "[object Boolean]",
        P = "[object Date]",
        H = "[object Function]",
        B = "[object Number]",
        V = "[object Object]",
        F = "[object RegExp]",
        U = "[object String]",
        _ = {};
    _[H] = !1, _[I] = _[L] = _[z] = _[P] = _[B] = _[V] = _[F] = _[U] = !0;
    var D = {
            leading: !1,
            maxWait: 0,
            trailing: !1
        },
        W = {
            configurable: !1,
            enumerable: !1,
            value: null,
            writable: !1
        },
        j = {
            boolean: !1,
            function: !0,
            object: !0,
            number: !1,
            string: !1,
            undefined: !1
        },
        N = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\t": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        Y = j[typeof window] && window || this,
        Z = j[typeof exports] && exports && !exports.nodeType && exports,
        $ = j[typeof module] && module && !module.nodeType && module,
        X = $ && $.exports === Z && Z,
        K = j[typeof global] && global;
    !K || K.global !== K && K.window !== K || (Y = K);
    var q = function i(p) {
        function f(t, e, i) {
            if (!t || !j[typeof t]) return t;
            e = e && void 0 === i ? e : tt(e, i, 3);
            for (var o = -1, n = j[typeof t] && Pe(t), s = n ? n.length : 0; ++o < s && !1 !== e(t[i = n[o]], i, t););
            return t
        }

        function v(t, e, i) {
            var o;
            if (!t || !j[typeof t]) return t;
            for (o in e = e && void 0 === i ? e : tt(e, i, 3), t)
                if (!1 === e(t[o], o, t)) break;
            return t
        }

        function N(t, e, i) {
            var o, n = t,
                s = n;
            if (!n) return s;
            for (var r = arguments, a = 0, h = "number" == typeof i ? 2 : r.length; ++a < h;)
                if ((n = r[a]) && j[typeof n])
                    for (var l = -1, c = j[typeof n] && Pe(n), u = c ? c.length : 0; ++l < u;) void 0 === s[o = c[l]] && (s[o] = n[o]);
            return s
        }

        function Z(t, e, i) {
            var o, n = t,
                s = n;
            if (!n) return s;
            var r = arguments,
                a = 0,
                h = "number" == typeof i ? 2 : r.length;
            if (3 < h && "function" == typeof r[h - 2]) var l = tt(r[--h - 1], r[h--], 2);
            else 2 < h && "function" == typeof r[h - 1] && (l = r[--h]);
            for (; ++a < h;)
                if ((n = r[a]) && j[typeof n])
                    for (var c = -1, u = j[typeof n] && Pe(n), d = u ? u.length : 0; ++c < d;) s[o = u[c]] = l ? l(s[o], n[o]) : n[o];
            return s
        }

        function $(t) {
            return t && "object" == typeof t && !ze(t) && me.call(t, "__wrapped__") ? t : new X(t)
        }

        function X(t, e) {
            this.__chain__ = !!e, this.__wrapped__ = t
        }

        function K(t) {
            function e() {
                if (o) {
                    var t = u(o);
                    ye.apply(t, arguments)
                }
                if (this instanceof e) {
                    var s = Q(i.prototype);
                    return Ot(t = i.apply(s, t || arguments)) ? t : s
                }
                return i.apply(n, t || arguments)
            }
            var i = t[0],
                o = t[2],
                n = t[4];
            return Le(e, t), e
        }

        function J(t, e, i, o, n) {
            if (i) {
                var s = i(t);
                if (void 0 !== s) return s
            }
            if (!Ot(t)) return t;
            var r = le.call(t);
            if (!_[r]) return t;
            var h = Me[r];
            switch (r) {
                case z:
                case P:
                    return new h(+t);
                case B:
                case U:
                    return new h(t);
                case F:
                    return (s = h(t.source, k.exec(t))).lastIndex = t.lastIndex, s
            }
            if (r = ze(t), e) {
                var c = !o;
                o || (o = a()), n || (n = a());
                for (var d = o.length; d--;)
                    if (o[d] == t) return n[d];
                s = r ? h(t.length) : {}
            } else s = r ? u(t) : Z({}, t);
            return r && (me.call(t, "index") && (s.index = t.index), me.call(t, "input") && (s.input = t.input)), e ? (o.push(t), n.push(s), (r ? Ct : f)(t, (function(t, r) {
                s[r] = J(t, e, i, o, n)
            })), c && (l(o), l(n)), s) : s
        }

        function Q(t) {
            return Ot(t) ? Ge(t) : {}
        }

        function tt(t, e, i) {
            if ("function" != typeof t) return Nt;
            if (void 0 === e || !("prototype" in t)) return t;
            var o = t.__bindData__;
            if (void 0 === o && (Ie.funcNames && (o = !t.name), !(o = o || !Ie.funcDecomp))) {
                var n = fe.call(t);
                Ie.funcNames || (o = !T.test(n)), o || (o = A.test(n), Le(t, o))
            }
            if (!1 === o || !0 !== o && 1 & o[1]) return t;
            switch (i) {
                case 1:
                    return function(i) {
                        return t.call(e, i)
                    };
                case 2:
                    return function(i, o) {
                        return t.call(e, i, o)
                    };
                case 3:
                    return function(i, o, n) {
                        return t.call(e, i, o, n)
                    };
                case 4:
                    return function(i, o, n, s) {
                        return t.call(e, i, o, n, s)
                    }
            }
            return Wt(t, e)
        }

        function et(t) {
            function e() {
                var t = h ? r : this;
                if (n) {
                    var f = u(n);
                    ye.apply(f, arguments)
                }
                return (s || c) && (f || (f = u(arguments)), s && ye.apply(f, s), c && f.length < a) ? (o |= 16, et([i, d ? o : -4 & o, f, null, r, a])) : (f || (f = arguments), l && (i = t[p]), this instanceof e ? (t = Q(i.prototype), Ot(f = i.apply(t, f)) ? f : t) : i.apply(t, f))
            }
            var i = t[0],
                o = t[1],
                n = t[2],
                s = t[3],
                r = t[4],
                a = t[5],
                h = 1 & o,
                l = 2 & o,
                c = 4 & o,
                d = 8 & o,
                p = i;
            return Le(e, t), e
        }

        function it(i, o) {
            var n = -1,
                r = ut(),
                a = i ? i.length : 0,
                h = a >= y && r === t,
                l = [];
            if (h) {
                var u = s(o);
                u ? (r = e, o = u) : h = !1
            }
            for (; ++n < a;) 0 > r(o, u = i[n]) && l.push(u);
            return h && c(o), l
        }

        function ot(t, e, i, o) {
            o = (o || 0) - 1;
            for (var n = t ? t.length : 0, s = []; ++o < n;) {
                var r = t[o];
                if (r && "object" == typeof r && "number" == typeof r.length && (ze(r) || gt(r))) {
                    e || (r = ot(r, e, i));
                    var a = -1,
                        h = r.length,
                        l = s.length;
                    for (s.length += h; ++a < h;) s[l++] = r[a]
                } else i || s.push(r)
            }
            return s
        }

        function nt(t, e, i, o, n, s) {
            if (i && void 0 !== (p = i(t, e))) return !!p;
            if (t === e) return 0 !== t || 1 / t == 1 / e;
            if (t == t && !(t && j[typeof t] || e && j[typeof e])) return !1;
            if (null == t || null == e) return t === e;
            var r = le.call(t),
                h = le.call(e);
            if (r == I && (r = V), h == I && (h = V), r != h) return !1;
            switch (r) {
                case z:
                case P:
                    return +t == +e;
                case B:
                    return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
                case F:
                case U:
                    return t == ne(e)
            }
            if (!(h = r == L)) {
                var c = me.call(t, "__wrapped__"),
                    u = me.call(e, "__wrapped__");
                if (c || u) return nt(c ? t.__wrapped__ : t, u ? e.__wrapped__ : e, i, o, n, s);
                if (r != V) return !1;
                if ((r = t.constructor) != (c = e.constructor) && !(wt(r) && r instanceof r && wt(c) && c instanceof c) && "constructor" in t && "constructor" in e) return !1
            }
            for (r = !n, n || (n = a()), s || (s = a()), c = n.length; c--;)
                if (n[c] == t) return s[c] == e;
            var d = 0,
                p = !0;
            if (n.push(t), s.push(e), h) {
                if (c = t.length, d = e.length, (p = d == c) || o)
                    for (; d--;)
                        if (h = c, u = e[d], o)
                            for (; h-- && !(p = nt(t[h], u, i, o, n, s)););
                        else if (!(p = nt(t[d], u, i, o, n, s))) break
            } else v(e, (function(e, r, a) {
                return me.call(a, r) ? (d++, p = me.call(t, r) && nt(t[r], e, i, o, n, s)) : void 0
            })), p && !o && v(t, (function(t, e, i) {
                return me.call(i, e) ? p = -1 < --d : void 0
            }));
            return n.pop(), s.pop(), r && (l(n), l(s)), p
        }

        function st(t, e, i, o, n) {
            (ze(e) ? Ct : f)(e, (function(e, s) {
                var r, a, h = e,
                    l = t[s];
                if (e && ((a = ze(e)) || Ue(e))) {
                    for (h = o.length; h--;)
                        if (r = o[h] == e) {
                            l = n[h];
                            break
                        } var c;
                    if (!r) i && (c = void 0 !== (h = i(l, e))) && (l = h), c || (l = a ? ze(l) ? l : [] : Ue(l) ? l : {}), o.push(e), n.push(l), c || st(l, e, i, o, n)
                } else i && (void 0 === (h = i(l, e)) && (h = e)), void 0 !== h && (l = h);
                t[s] = l
            }))
        }

        function rt(t, e) {
            return t + pe(Re() * (e - t + 1))
        }

        function at(i, o, n) {
            var r = -1,
                h = ut(),
                u = i ? i.length : 0,
                d = [],
                p = !o && u >= y && h === t,
                f = n || p ? a() : d;
            for (p && (f = s(f), h = e); ++r < u;) {
                var g = i[r],
                    m = n ? n(g, r, i) : g;
                (o ? !r || f[f.length - 1] !== m : 0 > h(f, m)) && ((n || p) && f.push(m), d.push(g))
            }
            return p ? (l(f.k), c(f)) : n && l(f), d
        }

        function ht(t) {
            return function(e, i, o) {
                var n = {};
                i = $.createCallback(i, o, 3), o = -1;
                var s = e ? e.length : 0;
                if ("number" == typeof s)
                    for (; ++o < s;) {
                        var r = e[o];
                        t(n, r, i(r, o, e), e)
                    } else f(e, (function(e, o, s) {
                        t(n, e, i(e, o, s), s)
                    }));
                return n
            }
        }

        function lt(t, e, i, o, n, s) {
            var r = 1 & e,
                a = 4 & e,
                h = 16 & e,
                l = 32 & e;
            if (!(2 & e || wt(t))) throw new se;
            h && !i.length && (e &= -17, h = i = !1), l && !o.length && (e &= -33, l = o = !1);
            var c = t && t.__bindData__;
            return c && !0 !== c ? ((c = u(c))[2] && (c[2] = u(c[2])), c[3] && (c[3] = u(c[3])), !r || 1 & c[1] || (c[4] = n), !r && 1 & c[1] && (e |= 8), !a || 4 & c[1] || (c[5] = s), h && ye.apply(c[2] || (c[2] = []), i), l && Oe.apply(c[3] || (c[3] = []), o), c[1] |= e, lt.apply(null, c)) : (1 == e || 17 === e ? K : et)([t, e, i, o, n, s])
        }

        function ct(t) {
            return He[t]
        }

        function ut() {
            var e = (e = $.indexOf) === Bt ? t : e;
            return e
        }

        function dt(t) {
            return "function" == typeof t && ce.test(t)
        }

        function pt(t) {
            var e, i;
            return !!(t && le.call(t) == V && (e = t.constructor, !wt(e) || e instanceof e)) && (v(t, (function(t, e) {
                i = e
            })), void 0 === i || me.call(t, i))
        }

        function ft(t) {
            return Be[t]
        }

        function gt(t) {
            return t && "object" == typeof t && "number" == typeof t.length && le.call(t) == I || !1
        }

        function mt(t, e, i) {
            var o = Pe(t),
                n = o.length;
            for (e = tt(e, i, 3); n-- && !1 !== e(t[i = o[n]], i, t););
            return t
        }

        function yt(t) {
            var e = [];
            return v(t, (function(t, i) {
                wt(t) && e.push(i)
            })), e.sort()
        }

        function vt(t) {
            for (var e = -1, i = Pe(t), o = i.length, n = {}; ++e < o;) {
                var s = i[e];
                n[t[s]] = s
            }
            return n
        }

        function wt(t) {
            return "function" == typeof t
        }

        function Ot(t) {
            return !(!t || !j[typeof t])
        }

        function Et(t) {
            return "number" == typeof t || t && "object" == typeof t && le.call(t) == B || !1
        }

        function Gt(t) {
            return "string" == typeof t || t && "object" == typeof t && le.call(t) == U || !1
        }

        function bt(t) {
            for (var e = -1, i = Pe(t), o = i.length, n = Kt(o); ++e < o;) n[e] = t[i[e]];
            return n
        }

        function kt(t, e, i) {
            var o = -1,
                n = ut(),
                s = t ? t.length : 0,
                r = !1;
            return i = (0 > i ? xe(0, s + i) : i) || 0, ze(t) ? r = -1 < n(t, e, i) : "number" == typeof s ? r = -1 < (Gt(t) ? t.indexOf(e, i) : n(t, e, i)) : f(t, (function(t) {
                return ++o < i ? void 0 : !(r = t === e)
            })), r
        }

        function Tt(t, e, i) {
            var o = !0;
            e = $.createCallback(e, i, 3), i = -1;
            var n = t ? t.length : 0;
            if ("number" == typeof n)
                for (; ++i < n && (o = !!e(t[i], i, t)););
            else f(t, (function(t, i, n) {
                return o = !!e(t, i, n)
            }));
            return o
        }

        function St(t, e, i) {
            var o = [];
            e = $.createCallback(e, i, 3), i = -1;
            var n = t ? t.length : 0;
            if ("number" == typeof n)
                for (; ++i < n;) {
                    var s = t[i];
                    e(s, i, t) && o.push(s)
                } else f(t, (function(t, i, n) {
                    e(t, i, n) && o.push(t)
                }));
            return o
        }

        function xt(t, e, i) {
            e = $.createCallback(e, i, 3), i = -1;
            var o, n = t ? t.length : 0;
            if ("number" != typeof n) return f(t, (function(t, i, n) {
                return e(t, i, n) ? (o = t, !1) : void 0
            })), o;
            for (; ++i < n;) {
                var s = t[i];
                if (e(s, i, t)) return s
            }
        }

        function Ct(t, e, i) {
            var o = -1,
                n = t ? t.length : 0;
            if (e = e && void 0 === i ? e : tt(e, i, 3), "number" == typeof n)
                for (; ++o < n && !1 !== e(t[o], o, t););
            else f(t, e);
            return t
        }

        function At(t, e, i) {
            var o = t ? t.length : 0;
            if (e = e && void 0 === i ? e : tt(e, i, 3), "number" == typeof o)
                for (; o-- && !1 !== e(t[o], o, t););
            else {
                var n = Pe(t);
                o = n.length;
                f(t, (function(t, i, s) {
                    return i = n ? n[--o] : --o, e(s[i], i, s)
                }))
            }
            return t
        }

        function Rt(t, e, i) {
            var o = -1,
                n = t ? t.length : 0;
            if (e = $.createCallback(e, i, 3), "number" == typeof n)
                for (var s = Kt(n); ++o < n;) s[o] = e(t[o], o, t);
            else s = [], f(t, (function(t, i, n) {
                s[++o] = e(t, i, n)
            }));
            return s
        }

        function Mt(t, e, i) {
            var n = -1 / 0,
                s = n;
            if ("function" != typeof e && i && i[e] === t && (e = null), null == e && ze(t)) {
                i = -1;
                for (var r = t.length; ++i < r;) {
                    var a = t[i];
                    a > s && (s = a)
                }
            } else e = null == e && Gt(t) ? o : $.createCallback(e, i, 3), Ct(t, (function(t, i, o) {
                (i = e(t, i, o)) > n && (n = i, s = t)
            }));
            return s
        }

        function It(t, e, i, o) {
            if (!t) return i;
            var n = 3 > arguments.length;
            e = $.createCallback(e, o, 4);
            var s = -1,
                r = t.length;
            if ("number" == typeof r)
                for (n && (i = t[++s]); ++s < r;) i = e(i, t[s], s, t);
            else f(t, (function(t, o, s) {
                i = n ? (n = !1, t) : e(i, t, o, s)
            }));
            return i
        }

        function Lt(t, e, i, o) {
            var n = 3 > arguments.length;
            return e = $.createCallback(e, o, 4), At(t, (function(t, o, s) {
                i = n ? (n = !1, t) : e(i, t, o, s)
            })), i
        }

        function zt(t) {
            var e = -1,
                i = t ? t.length : 0,
                o = Kt("number" == typeof i ? i : 0);
            return Ct(t, (function(t) {
                var i = rt(0, ++e);
                o[e] = o[i], o[i] = t
            })), o
        }

        function Pt(t, e, i) {
            var o;
            e = $.createCallback(e, i, 3), i = -1;
            var n = t ? t.length : 0;
            if ("number" == typeof n)
                for (; ++i < n && !(o = e(t[i], i, t)););
            else f(t, (function(t, i, n) {
                return !(o = e(t, i, n))
            }));
            return !!o
        }

        function Ht(t, e, i) {
            var o = 0,
                n = t ? t.length : 0;
            if ("number" != typeof e && null != e) {
                var s = -1;
                for (e = $.createCallback(e, i, 3); ++s < n && e(t[s], s, t);) o++
            } else if (null == (o = e) || i) return t ? t[0] : d;
            return u(t, 0, Ce(xe(0, o), n))
        }

        function Bt(e, i, o) {
            if ("number" == typeof o) {
                var n = e ? e.length : 0;
                o = 0 > o ? xe(0, n + o) : o || 0
            } else if (o) return e[o = Ft(e, i)] === i ? o : -1;
            return t(e, i, o)
        }

        function Vt(t, e, i) {
            if ("number" != typeof e && null != e) {
                var o = 0,
                    n = -1,
                    s = t ? t.length : 0;
                for (e = $.createCallback(e, i, 3); ++n < s && e(t[n], n, t);) o++
            } else o = null == e || i ? 1 : xe(0, e);
            return u(t, o)
        }

        function Ft(t, e, i, o) {
            var n = 0,
                s = t ? t.length : n;
            for (e = (i = i ? $.createCallback(i, o, 1) : Nt)(e); n < s;) i(t[o = n + s >>> 1]) < e ? n = o + 1 : s = o;
            return n
        }

        function Ut(t, e, i, o) {
            return "boolean" != typeof e && null != e && (o = i, i = "function" != typeof e && o && o[e] === t ? null : e, e = !1), null != i && (i = $.createCallback(i, o, 3)), at(t, e, i)
        }

        function _t() {
            for (var t = 1 < arguments.length ? arguments : arguments[0], e = -1, i = t ? Mt(je(t, "length")) : 0, o = Kt(0 > i ? 0 : i); ++e < i;) o[e] = je(t, e);
            return o
        }

        function Dt(t, e) {
            var i = -1,
                o = t ? t.length : 0,
                n = {};
            for (e || !o || ze(t[0]) || (e = []); ++i < o;) {
                var s = t[i];
                e ? n[s] = e[i] : s && (n[s[0]] = s[1])
            }
            return n
        }

        function Wt(t, e) {
            return 2 < arguments.length ? lt(t, 17, u(arguments, 2), null, e) : lt(t, 1, null, null, e)
        }

        function jt(t, e, i) {
            function o() {
                c && de(c), r = c = u = d, (g || f !== e) && (p = Ne(), a = t.apply(l, s), c || r || (s = l = null))
            }

            function n() {
                var i = e - (Ne() - h);
                0 < i ? c = ve(n, i) : (r && de(r), i = u, r = c = u = d, i && (p = Ne(), a = t.apply(l, s), c || r || (s = l = null)))
            }
            var s, r, a, h, l, c, u, p = 0,
                f = !1,
                g = !0;
            if (!wt(t)) throw new se;
            if (e = xe(0, e) || 0, !0 === i) {
                var m = !0;
                g = !1
            } else Ot(i) && (m = i.leading, f = "maxWait" in i && (xe(e, i.maxWait) || 0), g = "trailing" in i ? i.trailing : g);
            return function() {
                if (s = arguments, h = Ne(), l = this, u = g && (c || !m), !1 === f) var i = m && !c;
                else {
                    r || m || (p = h);
                    var d = f - (h - p),
                        y = 0 >= d;
                    y ? (r && (r = de(r)), p = h, a = t.apply(l, s)) : r || (r = ve(o, d))
                }
                return y && c ? c = de(c) : c || e === f || (c = ve(n, e)), i && (y = !0, a = t.apply(l, s)), !y || c || r || (s = l = null), a
            }
        }

        function Nt(t) {
            return t
        }

        function Yt(t, e, i) {
            var o = !0,
                n = e && yt(e);
            e && (i || n.length) || (null == i && (i = e), s = X, e = t, t = $, n = yt(e)), !1 === i ? o = !1 : Ot(i) && "chain" in i && (o = i.chain);
            var s = t,
                r = wt(s);
            Ct(n, (function(i) {
                var n = t[i] = e[i];
                r && (s.prototype[i] = function() {
                    var e = this.__chain__,
                        i = this.__wrapped__,
                        r = [i];
                    if (ye.apply(r, arguments), r = n.apply(t, r), o || e) {
                        if (i === r && Ot(r)) return this;
                        (r = new s(r)).__chain__ = e
                    }
                    return r
                })
            }))
        }

        function Zt() {}

        function $t(t) {
            return function(e) {
                return e[t]
            }
        }

        function Xt() {
            return this.__wrapped__
        }
        var Kt = (p = p ? q.defaults(Y.Object(), p, q.pick(Y, M)) : Y).Array,
            qt = p.Boolean,
            Jt = p.Date,
            Qt = p.Function,
            te = p.Math,
            ee = p.Number,
            ie = p.Object,
            oe = p.RegExp,
            ne = p.String,
            se = p.TypeError,
            re = [],
            ae = ie.prototype,
            he = p._,
            le = ae.toString,
            ce = oe("^" + ne(le).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
            ue = te.ceil,
            de = p.clearTimeout,
            pe = te.floor,
            fe = Qt.prototype.toString,
            ge = dt(ge = ie.getPrototypeOf) && ge,
            me = ae.hasOwnProperty,
            ye = re.push,
            ve = p.setTimeout,
            we = re.splice,
            Oe = re.unshift,
            Ee = function() {
                try {
                    var t = {},
                        e = dt(e = ie.defineProperty) && e,
                        i = e(t, t, t) && e
                } catch (t) {}
                return i
            }(),
            Ge = dt(Ge = ie.create) && Ge,
            be = dt(be = Kt.isArray) && be,
            ke = p.isFinite,
            Te = p.isNaN,
            Se = dt(Se = ie.keys) && Se,
            xe = te.max,
            Ce = te.min,
            Ae = p.parseInt,
            Re = te.random,
            Me = {};
        Me[L] = Kt, Me[z] = qt, Me[P] = Jt, Me[H] = Qt, Me[V] = ie, Me[B] = ee, Me[F] = oe, Me[U] = ne, X.prototype = $.prototype;
        var Ie = $.support = {};
        Ie.funcDecomp = !dt(p.a) && A.test(i), Ie.funcNames = "string" == typeof Qt.name, $.templatea813 = {
            escape: /<%-([\s\S]+?)%>/g,
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: S,
            variable: "",
            imports: {
                _: $
            }
        }, Ge || (Q = function() {
            function t() {}
            return function(e) {
                if (Ot(e)) {
                    t.prototype = e;
                    var i = new t;
                    t.prototype = null
                }
                return i || p.Object()
            }
        }());
        var Le = Ee ? function(t, e) {
                W.value = e, Ee(t, "__bindData__", W)
            } : Zt,
            ze = be || function(t) {
                return t && "object" == typeof t && "number" == typeof t.length && le.call(t) == L || !1
            },
            Pe = Se ? function(t) {
                return Ot(t) ? Se(t) : []
            } : function(t) {
                var e, i = [];
                if (!t || !j[typeof t]) return i;
                for (e in t) me.call(t, e) && i.push(e);
                return i
            },
            He = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            },
            Be = vt(He),
            Ve = oe("(" + Pe(Be).join("|") + ")", "g"),
            Fe = oe("[" + Pe(He).join("") + "]", "g"),
            Ue = ge ? function(t) {
                if (!t || le.call(t) != V) return !1;
                var e = t.valueOf,
                    i = dt(e) && (i = ge(e)) && ge(i);
                return i ? t == i || ge(t) == i : pt(t)
            } : pt,
            _e = ht((function(t, e, i) {
                me.call(t, i) ? t[i]++ : t[i] = 1
            })),
            De = ht((function(t, e, i) {
                (me.call(t, i) ? t[i] : t[i] = []).push(e)
            })),
            We = ht((function(t, e, i) {
                t[i] = e
            })),
            je = Rt,
            Ne = dt(Ne = Jt.now) && Ne || function() {
                return (new Jt).getTime()
            },
            Ye = 8 == Ae(w + "08") ? Ae : function(t, e) {
                return Ae(Gt(t) ? t.replace(x, "") : t, e || 0)
            };
        return $.after = function(t, e) {
            if (!wt(e)) throw new se;
            return function() {
                return 1 > --t ? e.apply(this, arguments) : void 0
            }
        }, $.assign = Z, $.at = function(t) {
            for (var e = -1, i = ot(o = arguments, !0, !1, 1), o = o[2] && o[2][o[1]] === t ? 1 : i.length, n = Kt(o); ++e < o;) n[e] = t[i[e]];
            return n
        }, $.bind = Wt, $.bindAll = function(t) {
            for (var e = 1 < arguments.length ? ot(arguments, !0, !1, 1) : yt(t), i = -1, o = e.length; ++i < o;) {
                var n = e[i];
                t[n] = lt(t[n], 1, null, null, t)
            }
            return t
        }, $.bindKey = function(t, e) {
            return 2 < arguments.length ? lt(e, 19, u(arguments, 2), null, t) : lt(e, 3, null, null, t)
        }, $.chain = function(t) {
            return (t = new X(t)).__chain__ = !0, t
        }, $.compact = function(t) {
            for (var e = -1, i = t ? t.length : 0, o = []; ++e < i;) {
                var n = t[e];
                n && o.push(n)
            }
            return o
        }, $.compose = function() {
            for (var t = arguments, e = t.length; e--;)
                if (!wt(t[e])) throw new se;
            return function() {
                for (var e = arguments, i = t.length; i--;) e = [t[i].apply(this, e)];
                return e[0]
            }
        }, $.constant = function(t) {
            return function() {
                return t
            }
        }, $.countBy = _e, $.create = function(t, e) {
            var i = Q(t);
            return e ? Z(i, e) : i
        }, $.createCallback = function(t, e, i) {
            var o = typeof t;
            if (null == t || "function" == o) return tt(t, e, i);
            if ("object" != o) return $t(t);
            var n = Pe(t),
                s = n[0],
                r = t[s];
            return 1 != n.length || r != r || Ot(r) ? function(e) {
                for (var i = n.length, o = !1; i-- && (o = nt(e[n[i]], t[n[i]], null, !0)););
                return o
            } : function(t) {
                return t = t[s], r === t && (0 !== r || 1 / r == 1 / t)
            }
        }, $.curry = function(t, e) {
            return lt(t, 4, null, null, null, e = "number" == typeof e ? e : +e || t.length)
        }, $.debounce = jt, $.defaults = N, $.defer = function(t) {
            if (!wt(t)) throw new se;
            var e = u(arguments, 1);
            return ve((function() {
                t.apply(d, e)
            }), 1)
        }, $.delay = function(t, e) {
            if (!wt(t)) throw new se;
            var i = u(arguments, 2);
            return ve((function() {
                t.apply(d, i)
            }), e)
        }, $.difference = function(t) {
            return it(t, ot(arguments, !0, !0, 1))
        }, $.filter = St, $.flatten = function(t, e, i, o) {
            return "boolean" != typeof e && null != e && (o = i, i = "function" != typeof e && o && o[e] === t ? null : e, e = !1), null != i && (t = Rt(t, i, o)), ot(t, e)
        }, $.forEach = Ct, $.forEachRight = At, $.forIn = v, $.forInRight = function(t, e, i) {
            var o = [];
            v(t, (function(t, e) {
                o.push(e, t)
            }));
            var n = o.length;
            for (e = tt(e, i, 3); n-- && !1 !== e(o[n--], o[n], t););
            return t
        }, $.forOwn = f, $.forOwnRight = mt, $.functions = yt, $.groupBy = De, $.indexBy = We, $.initial = function(t, e, i) {
            var o = 0,
                n = t ? t.length : 0;
            if ("number" != typeof e && null != e) {
                var s = n;
                for (e = $.createCallback(e, i, 3); s-- && e(t[s], s, t);) o++
            } else o = null == e || i ? 1 : e || o;
            return u(t, 0, Ce(xe(0, n - o), n))
        }, $.a743 = function() {
            for (var i = [], o = -1, n = arguments.length, r = a(), h = ut(), u = h === t, d = a(); ++o < n;) {
                (ze(v = arguments[o]) || gt(v)) && (i.push(v), r.push(u && v.length >= y && s(o ? i[o] : d)))
            }
            var p = -1,
                f = (u = i[0]) ? u.length : 0,
                g = [];
            t: for (; ++p < f;) {
                var m = r[0],
                    v = u[p];
                if (0 > (m ? e(m, v) : h(d, v))) {
                    for (o = n, (m || d).push(v); --o;)
                        if (0 > ((m = r[o]) ? e(m, v) : h(i[o], v))) continue t;
                    g.push(v)
                }
            }
            for (; n--;)(m = r[n]) && c(m);
            return l(r), l(d), g
        }, $.invert = vt, $.invoke = function(t, e) {
            var i = u(arguments, 2),
                o = -1,
                n = "function" == typeof e,
                s = t ? t.length : 0,
                r = Kt("number" == typeof s ? s : 0);
            return Ct(t, (function(t) {
                r[++o] = (n ? e : t[e]).apply(t, i)
            })), r
        }, $.keys = Pe, $.map = Rt, $.mapValues = function(t, e, i) {
            var o = {};
            return e = $.createCallback(e, i, 3), f(t, (function(t, i, n) {
                o[i] = e(t, i, n)
            })), o
        }, $.max = Mt, $.memoize = function(t, e) {
            function i() {
                var o = i.cache,
                    n = e ? e.apply(this, arguments) : m + arguments[0];
                return me.call(o, n) ? o[n] : o[n] = t.apply(this, arguments)
            }
            if (!wt(t)) throw new se;
            return i.cache = {}, i
        }, $.merge = function(t) {
            var e = arguments,
                i = 2;
            if (!Ot(t)) return t;
            if ("number" != typeof e[2] && (i = e.length), 3 < i && "function" == typeof e[i - 2]) var o = tt(e[--i - 1], e[i--], 2);
            else 2 < i && "function" == typeof e[i - 1] && (o = e[--i]);
            e = u(arguments, 1, i);
            for (var n = -1, s = a(), r = a(); ++n < i;) st(t, e[n], o, s, r);
            return l(s), l(r), t
        }, $.min = function(t, e, i) {
            var n = 1 / 0,
                s = n;
            if ("function" != typeof e && i && i[e] === t && (e = null), null == e && ze(t)) {
                i = -1;
                for (var r = t.length; ++i < r;) {
                    var a = t[i];
                    a < s && (s = a)
                }
            } else e = null == e && Gt(t) ? o : $.createCallback(e, i, 3), Ct(t, (function(t, i, o) {
                (i = e(t, i, o)) < n && (n = i, s = t)
            }));
            return s
        }, $.omit = function(t, e, i) {
            var o = {};
            if ("function" != typeof e) {
                var n = [];
                v(t, (function(t, e) {
                    n.push(e)
                }));
                for (var s = -1, r = (n = it(n, ot(arguments, !0, !1, 1))).length; ++s < r;) {
                    var a = n[s];
                    o[a] = t[a]
                }
            } else e = $.createCallback(e, i, 3), v(t, (function(t, i, n) {
                e(t, i, n) || (o[i] = t)
            }));
            return o
        }, $.once = function(t) {
            var e, i;
            if (!wt(t)) throw new se;
            return function() {
                return e || (e = !0, i = t.apply(this, arguments), t = null), i
            }
        }, $.pairs = function(t) {
            for (var e = -1, i = Pe(t), o = i.length, n = Kt(o); ++e < o;) {
                var s = i[e];
                n[e] = [s, t[s]]
            }
            return n
        }, $.partial = function(t) {
            return lt(t, 16, u(arguments, 1))
        }, $.partialRight = function(t) {
            return lt(t, 32, null, u(arguments, 1))
        }, $.pick = function(t, e, i) {
            var o = {};
            if ("function" != typeof e)
                for (var n = -1, s = ot(arguments, !0, !1, 1), r = Ot(t) ? s.length : 0; ++n < r;) {
                    var a = s[n];
                    a in t && (o[a] = t[a])
                } else e = $.createCallback(e, i, 3), v(t, (function(t, i, n) {
                    e(t, i, n) && (o[i] = t)
                }));
            return o
        }, $.pluck = je, $.property = $t, $.pull = function(t) {
            for (var e = arguments, i = 0, o = e.length, n = t ? t.length : 0; ++i < o;)
                for (var s = -1, r = e[i]; ++s < n;) t[s] === r && (we.call(t, s--, 1), n--);
            return t
        }, $.range = function(t, e, i) {
            t = +t || 0, null == e && (e = t, t = 0);
            var o = -1;
            e = xe(0, ue((e - t) / ((i = "number" == typeof i ? i : +i || 1) || 1)));
            for (var n = Kt(e); ++o < e;) n[o] = t, t += i;
            return n
        }, $.reject = function(t, e, i) {
            return e = $.createCallback(e, i, 3), St(t, (function(t, i, o) {
                return !e(t, i, o)
            }))
        }, $.remove = function(t, e, i) {
            var o = -1,
                n = t ? t.length : 0,
                s = [];
            for (e = $.createCallback(e, i, 3); ++o < n;) e(i = t[o], o, t) && (s.push(i), we.call(t, o--, 1), n--);
            return s
        }, $.rest = Vt, $.shuffle = zt, $.sortBy = function(t, e, i) {
            var o = -1,
                s = ze(e),
                r = t ? t.length : 0,
                u = Kt("number" == typeof r ? r : 0);
            for (s || (e = $.createCallback(e, i, 3)), Ct(t, (function(t, i, n) {
                    var r = u[++o] = h();
                    s ? r.m = Rt(e, (function(e) {
                        return t[e]
                    })) : (r.m = a())[0] = e(t, i, n), r.n = o, r.o = t
                })), r = u.length, u.sort(n); r--;) t = u[r], u[r] = t.o, s || l(t.m), c(t);
            return u
        }, $.tap = function(t, e) {
            return e(t), t
        }, $.throttle = function(t, e, i) {
            var o = !0,
                n = !0;
            if (!wt(t)) throw new se;
            return !1 === i ? o = !1 : Ot(i) && (o = "leading" in i ? i.leading : o, n = "trailing" in i ? i.trailing : n), D.leading = o, D.maxWait = e, D.trailing = n, jt(t, e, D)
        }, $.times = function(t, e, i) {
            t = -1 < (t = +t) ? t : 0;
            var o = -1,
                n = Kt(t);
            for (e = tt(e, i, 1); ++o < t;) n[o] = e(o);
            return n
        }, $.toArray = function(t) {
            return t && "number" == typeof t.length ? u(t) : bt(t)
        }, $.transform = function(t, e, i, o) {
            var n = ze(t);
            if (null == i)
                if (n) i = [];
                else {
                    var s = t && t.constructor;
                    i = Q(s && s.prototype)
                } return e && (e = $.createCallback(e, o, 4), (n ? Ct : f)(t, (function(t, o, n) {
                return e(i, t, o, n)
            }))), i
        }, $.union = function() {
            return at(ot(arguments, !0, !0))
        }, $.uniq = Ut, $.values = bt, $.where = St, $.without = function(t) {
            return it(t, u(arguments, 1))
        }, $.wrap = function(t, e) {
            return lt(e, 16, [t])
        }, $.xor = function() {
            for (var t = -1, e = arguments.length; ++t < e;) {
                var i = arguments[t];
                if (ze(i) || gt(i)) var o = o ? at(it(o, i).concat(it(i, o))) : i
            }
            return o || []
        }, $.zip = _t, $.zipObject = Dt, $.collect = Rt, $.drop = Vt, $.each = Ct, $.eachRight = At, $.extend = Z, $.methods = yt, $.object = Dt, $.select = St, $.tail = Vt, $.unique = Ut, $.unzip = _t, Yt($), $.clone = function(t, e, i, o) {
            return "boolean" != typeof e && null != e && (o = i, i = e, e = !1), J(t, e, "function" == typeof i && tt(i, o, 1))
        }, $.cloneDeep = function(t, e, i) {
            return J(t, !0, "function" == typeof e && tt(e, i, 1))
        }, $.contains = kt, $.escape = function(t) {
            return null == t ? "" : ne(t).replace(Fe, ct)
        }, $.every = Tt, $.find = xt, $.findIndex = function(t, e, i) {
            var o = -1,
                n = t ? t.length : 0;
            for (e = $.createCallback(e, i, 3); ++o < n;)
                if (e(t[o], o, t)) return o;
            return -1
        }, $.findKey = function(t, e, i) {
            var o;
            return e = $.createCallback(e, i, 3), f(t, (function(t, i, n) {
                return e(t, i, n) ? (o = i, !1) : void 0
            })), o
        }, $.findLast = function(t, e, i) {
            var o;
            return e = $.createCallback(e, i, 3), At(t, (function(t, i, n) {
                return e(t, i, n) ? (o = t, !1) : void 0
            })), o
        }, $.findLastIndex = function(t, e, i) {
            var o = t ? t.length : 0;
            for (e = $.createCallback(e, i, 3); o--;)
                if (e(t[o], o, t)) return o;
            return -1
        }, $.findLastKey = function(t, e, i) {
            var o;
            return e = $.createCallback(e, i, 3), mt(t, (function(t, i, n) {
                return e(t, i, n) ? (o = i, !1) : void 0
            })), o
        }, $.has = function(t, e) {
            return !!t && me.call(t, e)
        }, $.identity = Nt, $.indexOf = Bt, $.isArguments = gt, $.isArray = ze, $.isBoolean = function(t) {
            return !0 === t || !1 === t || t && "object" == typeof t && le.call(t) == z || !1
        }, $.isDate = function(t) {
            return t && "object" == typeof t && le.call(t) == P || !1
        }, $.isElement = function(t) {
            return t && 1 === t.nodeType || !1
        }, $.isEmpty = function(t) {
            var e = !0;
            if (!t) return e;
            var i = le.call(t),
                o = t.length;
            return i == L || i == U || i == I || i == V && "number" == typeof o && wt(t.splice) ? !o : (f(t, (function() {
                return e = !1
            })), e)
        }, $.isEqual = function(t, e, i, o) {
            return nt(t, e, "function" == typeof i && tt(i, o, 2))
        }, $.isFinite = function(t) {
            return ke(t) && !Te(parseFloat(t))
        }, $.isFunction = wt, $.isNaN = function(t) {
            return Et(t) && t != +t
        }, $.isNull = function(t) {
            return null === t
        }, $.isNumber = Et, $.isObject = Ot, $.isPlainObject = Ue, $.isRegExp = function(t) {
            return t && "object" == typeof t && le.call(t) == F || !1
        }, $.isString = Gt, $.isUndefined = function(t) {
            return void 0 === t
        }, $.lastIndexOf = function(t, e, i) {
            var o = t ? t.length : 0;
            for ("number" == typeof i && (o = (0 > i ? xe(0, o + i) : Ce(i, o - 1)) + 1); o--;)
                if (t[o] === e) return o;
            return -1
        }, $.mixin = Yt, $.noConflict = function() {
            return p._ = he, this
        }, $.noop = Zt, $.now = Ne, $.parseInt = Ye, $.random = function(t, e, i) {
            var o = null == t,
                n = null == e;
            return null == i && ("boolean" == typeof t && n ? (i = t, t = 1) : n || "boolean" != typeof e || (i = e, n = !0)), o && n && (e = 1), t = +t || 0, n ? (e = t, t = 0) : e = +e || 0, i || t % 1 || e % 1 ? (i = Re(), Ce(t + i * (e - t + parseFloat("1e-" + ((i + "").length - 1))), e)) : rt(t, e)
        }, $.reduce = It, $.reduceRight = Lt, $.result = function(t, e) {
            if (t) {
                var i = t[e];
                return wt(i) ? t[e]() : i
            }
        }, $.runInContext = i, $.size = function(t) {
            var e = t ? t.length : 0;
            return "number" == typeof e ? e : Pe(t).length
        }, $.some = Pt, $.sortedIndex = Ft, $.template = function(t, e, i) {
            var o = $.templatea813;
            t = ne(t || ""), i = N({}, i, o);
            var n, s = N({}, i.imports, o.imports),
                a = (o = Pe(s), s = bt(s), 0),
                h = i.interpolate || C,
                l = "__p+='";
            h = oe((i.escape || C).source + "|" + h.source + "|" + (h === S ? b : C).source + "|" + (i.evaluate || C).source + "|$", "g");
            t.replace(h, (function(e, i, o, s, h, c) {
                return o || (o = s), l += t.slice(a, c).replace(R, r), i && (l += "'+__e(" + i + ")+'"), h && (n = !0, l += "';" + h + ";\n__p+='"), o && (l += "'+((__t=(" + o + "))==null?'':__t)+'"), a = c + e.length, e
            })), l += "';", (h = i = i.variable) || (l = "with(" + (i = "obj") + "){" + l + "}"), l = (n ? l.replace(O, "") : l).replace(E, "$1").replace(G, "$1;"), l = "function(" + i + "){" + (h ? "" : i + "||(" + i + "={});") + "var __t,__p='',__e=_.escape" + (n ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + l + "return __p}";
            try {
                var c = Qt(o, "return " + l).apply(d, s)
            } catch (t) {
                throw t.source = l, t
            }
            return e ? c(e) : (c.source = l, c)
        }, $.unescape = function(t) {
            return null == t ? "" : ne(t).replace(Ve, ft)
        }, $.uniqueId = function(t) {
            var e = ++g;
            return ne(null == t ? "" : t) + e
        }, $.all = Tt, $.any = Pt, $.detect = xt, $.findWhere = xt, $.foldl = It, $.foldr = Lt, $.include = kt, $.inject = It, Yt(function() {
            var t = {};
            return f($, (function(e, i) {
                $.prototype[i] || (t[i] = e)
            })), t
        }(), !1), $.first = Ht, $.last = function(t, e, i) {
            var o = 0,
                n = t ? t.length : 0;
            if ("number" != typeof e && null != e) {
                var s = n;
                for (e = $.createCallback(e, i, 3); s-- && e(t[s], s, t);) o++
            } else if (null == (o = e) || i) return t ? t[n - 1] : d;
            return u(t, xe(0, n - o))
        }, $.sample = function(t, e, i) {
            return t && "number" != typeof t.length && (t = bt(t)), null == e || i ? t ? t[rt(0, t.length - 1)] : d : ((t = zt(t)).length = Ce(xe(0, e), t.length), t)
        }, $.take = Ht, $.head = Ht, f($, (function(t, e) {
            var i = "sample" !== e;
            $.prototype[e] || ($.prototype[e] = function(e, o) {
                var n = this.__chain__,
                    s = t(this.__wrapped__, e, o);
                return n || null != e && (!o || i && "function" == typeof e) ? new X(s, n) : s
            })
        })), $.VERSION = "2.4.1", $.prototype.chain = function() {
            return this.__chain__ = !0, this
        }, $.prototype.toString = function() {
            return ne(this.__wrapped__)
        }, $.prototype.value = Xt, $.prototype.valueOf = Xt, Ct(["join", "pop", "shift"], (function(t) {
            var e = re[t];
            $.prototype[t] = function() {
                var t = this.__chain__,
                    i = e.apply(this.__wrapped__, arguments);
                return t ? new X(i, t) : i
            }
        })), Ct(["push", "reverse", "sort", "unshift"], (function(t) {
            var e = re[t];
            $.prototype[t] = function() {
                return e.apply(this.__wrapped__, arguments), this
            }
        })), Ct(["concat", "slice", "splice"], (function(t) {
            var e = re[t];
            $.prototype[t] = function() {
                return new X(e.apply(this.__wrapped__, arguments), this.__chain__)
            }
        })), $
    }();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (Y._ = q, define((function() {
        return q
    }))) : Z && $ ? X ? ($.exports = q)._ = q : Z._ = q : Y._ = q
}.call(this),
    function(t) {
        "object" == typeof exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : "undefined" != typeof window ? window.JSZip = t() : "undefined" != typeof global ? global.JSZip = t() : "undefined" != typeof self && (self.JSZip = t())
    }((function() {
        return function t(e, i, o) {
            function n(r, a) {
                if (!i[r]) {
                    if (!e[r]) {
                        var h = "function" == typeof require && require;
                        if (!a && h) return h(r, !0);
                        if (s) return s(r, !0);
                        throw Error("Cannot find module '" + r + "'")
                    }
                    var l = i[r] = {
                        exports: {}
                    };
                    e[r][0].call(l.exports, (function(t) {
                        var i = e[r][1][t];
                        return n(i || t)
                    }), l, l.exports, t, e, i, o)
                }
                return i[r].exports
            }
            for (var s = "function" == typeof require && require, r = 0; r < o.length; r++) n(o[r]);
            return n
        }({
            1: [function(t, e, i) {
                "use strict";
                var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                i.encode = function(t) {
                    for (var e, i, n, s, r, a, h, l = "", c = 0; c < t.length;) s = (e = t.charCodeAt(c++)) >> 2, r = (3 & e) << 4 | (i = t.charCodeAt(c++)) >> 4, a = (15 & i) << 2 | (n = t.charCodeAt(c++)) >> 6, h = 63 & n, isNaN(i) ? a = h = 64 : isNaN(n) && (h = 64), l = l + o.charAt(s) + o.charAt(r) + o.charAt(a) + o.charAt(h);
                    return l
                }, i.decode = function(t) {
                    var e, i, n, s, r, a, h = "",
                        l = 0;
                    for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l < t.length;) n = o.indexOf(t.charAt(l++)), e = (15 & (s = o.indexOf(t.charAt(l++)))) << 4 | (r = o.indexOf(t.charAt(l++))) >> 2, i = (3 & r) << 6 | (a = o.indexOf(t.charAt(l++))), h += String.fromCharCode(n << 2 | s >> 4), 64 != r && (h += String.fromCharCode(e)), 64 != a && (h += String.fromCharCode(i));
                    return h
                }
            }, {}],
            2: [function(t, e) {
                "use strict";

                function i() {
                    this.compressedSize = 0, this.uncompressedSize = 0, this.crc32 = 0, this.compressionMethod = null, this.compressedContent = null
                }
                i.prototype = {
                    getContent: function() {
                        return null
                    },
                    getCompressedContent: function() {
                        return null
                    }
                }, e.exports = i
            }, {}],
            3: [function(t, e, i) {
                "use strict";
                i.STORE = {
                    magic: "\0\0",
                    compress: function(t) {
                        return t
                    },
                    uncompress: function(t) {
                        return t
                    },
                    compressInputType: null,
                    uncompressInputType: null
                }, i.DEFLATE = t("./flate")
            }, {
                "./flate": 6
            }],
            4: [function(t, e) {
                "use strict";

                function i() {
                    this.data = null, this.length = 0, this.index = 0
                }
                var o = t("./utils");
                i.prototype = {
                    checkOffset: function(t) {
                        this.checkIndex(this.index + t)
                    },
                    checkIndex: function(t) {
                        if (this.length < t || 0 > t) throw Error("End of data reached (data length = " + this.length + ", asked index = " + t + "). Corrupted zip ?")
                    },
                    setIndex: function(t) {
                        this.checkIndex(t), this.index = t
                    },
                    skip: function(t) {
                        this.setIndex(this.index + t)
                    },
                    byteAt: function() {},
                    readInt: function(t) {
                        var e, i = 0;
                        for (this.checkOffset(t), e = this.index + t - 1; e >= this.index; e--) i = (i << 8) + this.byteAt(e);
                        return this.index += t, i
                    },
                    readString: function(t) {
                        return o.transformTo("string", this.readData(t))
                    },
                    readData: function() {},
                    lastIndexOfSignature: function() {},
                    readDate: function() {
                        var t = this.readInt(4);
                        return new Date(1980 + (t >> 25 & 127), (t >> 21 & 15) - 1, t >> 16 & 31, t >> 11 & 31, t >> 5 & 63, (31 & t) << 1)
                    }
                }, e.exports = i
            }, {
                "./utils": 14
            }],
            5: [function(t, e, i) {
                "use strict";
                i.base64 = !1, i.binary = !1, i.dir = !1, i.date = null, i.compression = null
            }, {}],
            6: [function(t, e, i) {
                "use strict";
                var o = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array,
                    n = t("zlibjs/bin/rawdeflate.min").Zlib,
                    s = t("zlibjs/bin/rawinflate.min").Zlib;
                i.uncompressInputType = o ? "uint8array" : "array", i.compressInputType = o ? "uint8array" : "array", i.magic = "\b\0", i.compress = function(t) {
                    return new n.RawDeflate(t).compress()
                }, i.uncompress = function(t) {
                    return new s.RawInflate(t).decompress()
                }
            }, {
                "zlibjs/bin/rawdeflate.min": 19,
                "zlibjs/bin/rawinflate.min": 20
            }],
            7: [function(t, e) {
                "use strict";

                function i(t, e) {
                    return this instanceof i ? (this.files = {}, this.root = "", t && this.load(t, e), void(this.clone = function() {
                        var t = new i;
                        for (var e in this) "function" != typeof this[e] && (t[e] = this[e]);
                        return t
                    })) : new i(t, e)
                }
                i.prototype = t("./object"), i.prototype.load = t("./load"), i.support = t("./support"), i.defaults = t("./defaults"), i.utils = t("./utils"), i.base64 = t("./base64"), i.compressions = t("./compressions"), e.exports = i
            }, {
                "./base64": 1,
                "./compressions": 3,
                "./defaults": 5,
                "./load": 8,
                "./object": 9,
                "./support": 12,
                "./utils": 14
            }],
            8: [function(t, e) {
                "use strict";
                var i = t("./base64"),
                    o = t("./zipEntries");
                e.exports = function(t, e) {
                    var n, s, r;
                    for ((e = e || {}).base64 && (t = i.decode(t)), n = new o(t, e).files, s = 0; s < n.length; s++) r = n[s], this.file(r.fileName, r.decompressed, {
                        binary: !0,
                        optimizedBinaryString: !0,
                        date: r.date,
                        dir: r.dir
                    });
                    return this
                }
            }, {
                "./base64": 1,
                "./zipEntries": 15
            }],
            9: [function(t, e) {
                "use strict";
                var i, o, n = t("./support"),
                    s = t("./utils"),
                    r = t("./signature"),
                    a = t("./defaults"),
                    h = t("./base64"),
                    l = t("./compressions"),
                    c = t("./compressedObject"),
                    u = t("./nodeBuffer");
                n.uint8array && "function" == typeof TextEncoder && "function" == typeof TextDecoder && (i = new TextEncoder("utf-8"), o = new TextDecoder("utf-8"));
                var d = function(t) {
                        if (t._data instanceof c && (t._data = t._data.getContent(), t.options.binary = !0, t.options.base64 = !1, "uint8array" === s.getTypeOf(t._data))) {
                            var e = t._data;
                            t._data = new Uint8Array(e.length), 0 !== e.length && t._data.set(e, 0)
                        }
                        return t._data
                    },
                    p = function(t) {
                        var e = d(t);
                        if ("string" === s.getTypeOf(e)) {
                            if (!t.options.binary) {
                                if (i) return i.encode(e);
                                if (n.nodebuffer) return u(e, "utf-8")
                            }
                            return t.asBinary()
                        }
                        return e
                    },
                    f = function(t) {
                        var e = d(this);
                        return null == e ? "" : (this.options.base64 && (e = h.decode(e)), e = t && this.options.binary ? T.utf8decode(e) : s.transformTo("string", e), t || this.options.binary || (e = T.utf8encode(e)), e)
                    },
                    g = function(t, e, i) {
                        this.name = t, this._data = e, this.options = i
                    };
                g.prototype = {
                    asText: function() {
                        return f.call(this, !0)
                    },
                    asBinary: function() {
                        return f.call(this, !1)
                    },
                    asNodeBuffer: function() {
                        var t = p(this);
                        return s.transformTo("nodebuffer", t)
                    },
                    asUint8Array: function() {
                        var t = p(this);
                        return s.transformTo("uint8array", t)
                    },
                    asArrayBuffer: function() {
                        return this.asUint8Array().buffer
                    }
                };
                var m = function(t, e) {
                        var i, o = "";
                        for (i = 0; e > i; i++) o += String.fromCharCode(255 & t), t >>>= 8;
                        return o
                    },
                    y = function() {
                        var t, e, i = {};
                        for (t = 0; t < arguments.length; t++)
                            for (e in arguments[t]) arguments[t].hasOwnProperty(e) && void 0 === i[e] && (i[e] = arguments[t][e]);
                        return i
                    },
                    v = function(t, e, i) {
                        var o = w(t),
                            n = s.getTypeOf(e);
                        if (o && O.call(this, o), (i = function(t) {
                                return !0 !== (t = t || {}).base64 || null !== t.binary && void 0 !== t.binary || (t.binary = !0), (t = y(t, a)).date = t.date || new Date, null !== t.compression && (t.compression = t.compression.toUpperCase()), t
                            }(i)).dir || null == e) i.base64 = !1, i.binary = !1, e = null;
                        else if ("string" === n) i.binary && !i.base64 && !0 !== i.optimizedBinaryString && (e = s.string2binary(e));
                        else {
                            if (i.base64 = !1, i.binary = !0, !(n || e instanceof c)) throw Error("The data of '" + t + "' is in an unsupported format !");
                            "arraybuffer" === n && (e = s.transformTo("uint8array", e))
                        }
                        var r = new g(t, e, i);
                        return this.files[t] = r, r
                    },
                    w = function(t) {
                        "/" == t.slice(-1) && (t = t.substring(0, t.length - 1));
                        var e = t.lastIndexOf("/");
                        return e > 0 ? t.substring(0, e) : ""
                    },
                    O = function(t) {
                        return "/" != t.slice(-1) && (t += "/"), this.files[t] || v.call(this, t, null, {
                            dir: !0
                        }), this.files[t]
                    },
                    E = function(t, e) {
                        var i, o = new c;
                        return t._data instanceof c ? (o.uncompressedSize = t._data.uncompressedSize, o.crc32 = t._data.crc32, 0 === o.uncompressedSize || t.options.dir ? (e = l.STORE, o.compressedContent = "", o.crc32 = 0) : t._data.compressionMethod === e.magic ? o.compressedContent = t._data.getCompressedContent() : (i = t._data.getContent(), o.compressedContent = e.compress(s.transformTo(e.compressInputType, i)))) : ((!(i = p(t)) || 0 === i.length || t.options.dir) && (e = l.STORE, i = ""), o.uncompressedSize = i.length, o.crc32 = this.crc32(i), o.compressedContent = e.compress(s.transformTo(e.compressInputType, i))), o.compressedSize = o.compressedContent.length, o.compressionMethod = e.magic, o
                    },
                    G = function(t, e, i, o) {
                        var n, s, a = (i.compressedContent, this.utf8encode(e.name)),
                            h = a !== e.name,
                            l = e.options,
                            c = "",
                            u = "";
                        n = l.date.getHours(), n <<= 6, n |= l.date.getMinutes(), n <<= 5, n |= l.date.getSeconds() / 2, s = l.date.getFullYear() - 1980, s <<= 4, s |= l.date.getMonth() + 1, s <<= 5, s |= l.date.getDate(), h && (u = m(1, 1) + m(this.crc32(a), 4) + a, c += "up" + m(u.length, 2) + u);
                        var d = "";
                        return d += "\n\0", d += h ? "\0\b" : "\0\0", d += i.compressionMethod, d += m(n, 2), d += m(s, 2), d += m(i.crc32, 4), d += m(i.compressedSize, 4), d += m(i.uncompressedSize, 4), d += m(a.length, 2), d += m(c.length, 2), {
                            fileRecord: r.LOCAL_FILE_HEADER + d + a + c,
                            dirRecord: r.CENTRAL_FILE_HEADER + "\0" + d + "\0\0\0\0\0\0" + (!0 === e.options.dir ? "\0\0\0" : "\0\0\0\0") + m(o, 4) + a + c,
                            compressedObject: i
                        }
                    },
                    b = function() {
                        this.data = []
                    };
                b.prototype = {
                    append: function(t) {
                        t = s.transformTo("string", t), this.data.push(t)
                    },
                    finalize: function() {
                        return this.data.join("")
                    }
                };
                var k = function(t) {
                    this.data = new Uint8Array(t), this.index = 0
                };
                k.prototype = {
                    append: function(t) {
                        0 !== t.length && (t = s.transformTo("uint8array", t), this.data.set(t, this.index), this.index += t.length)
                    },
                    finalize: function() {
                        return this.data
                    }
                };
                var T = {
                    load: function() {
                        throw Error("Load method is not defined. Is the file jszip-load.js included ?")
                    },
                    filter: function(t) {
                        var e, i, o, n, s = [];
                        for (e in this.files) this.files.hasOwnProperty(e) && (o = this.files[e], n = new g(o.name, o._data, y(o.options)), i = e.slice(this.root.length, e.length), e.slice(0, this.root.length) === this.root && t(i, n) && s.push(n));
                        return s
                    },
                    file: function(t, e, i) {
                        if (1 === arguments.length) {
                            if (s.isRegExp(t)) {
                                var o = t;
                                return this.filter((function(t, e) {
                                    return !e.options.dir && o.test(t)
                                }))
                            }
                            return this.filter((function(e, i) {
                                return !i.options.dir && e === t
                            }))[0] || null
                        }
                        return t = this.root + t, v.call(this, t, e, i), this
                    },
                    folder: function(t) {
                        if (!t) return this;
                        if (s.isRegExp(t)) return this.filter((function(e, i) {
                            return i.options.dir && t.test(e)
                        }));
                        var e = this.root + t,
                            i = O.call(this, e),
                            o = this.clone();
                        return o.root = i.name, o
                    },
                    remove: function(t) {
                        t = this.root + t;
                        var e = this.files[t];
                        if (e || ("/" != t.slice(-1) && (t += "/"), e = this.files[t]), e)
                            if (e.options.dir)
                                for (var i = this.filter((function(e, i) {
                                        return i.name.slice(0, t.length) === t
                                    })), o = 0; o < i.length; o++) delete this.files[i[o].name];
                            else delete this.files[t];
                        return this
                    },
                    generate: function(t) {
                        t = y(t || {}, {
                            base64: !0,
                            compression: "STORE",
                            type: "base64"
                        }), s.checkSupport(t.type);
                        var e, i, o = [],
                            n = 0,
                            a = 0;
                        for (var c in this.files)
                            if (this.files.hasOwnProperty(c)) {
                                var u = this.files[c],
                                    d = u.options.compression || t.compression.toUpperCase(),
                                    p = l[d];
                                if (!p) throw Error(d + " is not a valid compression method !");
                                var f = E.call(this, u, p),
                                    g = G.call(this, c, u, f, n);
                                n += g.fileRecord.length + f.compressedSize, a += g.dirRecord.length, o.push(g)
                            } var v;
                        v = r.CENTRAL_DIRECTORY_END + "\0\0\0\0" + m(o.length, 2) + m(o.length, 2) + m(a, 4) + m(n, 4) + "\0\0";
                        var w = t.type.toLowerCase();
                        for (e = "uint8array" === w || "arraybuffer" === w || "blob" === w || "nodebuffer" === w ? new k(n + a + v.length) : new b(n + a + v.length), i = 0; i < o.length; i++) e.append(o[i].fileRecord), e.append(o[i].compressedObject.compressedContent);
                        for (i = 0; i < o.length; i++) e.append(o[i].dirRecord);
                        e.append(v);
                        var O = e.finalize();
                        switch (t.type.toLowerCase()) {
                            case "uint8array":
                            case "arraybuffer":
                            case "nodebuffer":
                                return s.transformTo(t.type.toLowerCase(), O);
                            case "blob":
                                return s.arrayBuffer2Blob(s.transformTo("arraybuffer", O));
                            case "base64":
                                return t.base64 ? h.encode(O) : O;
                            default:
                                return O
                        }
                    },
                    crc32: function(t, e) {
                        if (void 0 === t || !t.length) return 0;
                        var i = "string" !== s.getTypeOf(t),
                            o = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117];
                        void 0 === e && (e = 0);
                        e ^= -1;
                        for (var n = 0, r = t.length; r > n; n++) e = e >>> 8 ^ o[255 & (e ^ (i ? t[n] : t.charCodeAt(n)))];
                        return -1 ^ e
                    },
                    utf8encode: function(t) {
                        if (i) {
                            var e = i.encode(t);
                            return s.transformTo("string", e)
                        }
                        if (n.nodebuffer) return s.transformTo("string", u(t, "utf-8"));
                        for (var o = [], r = 0, a = 0; a < t.length; a++) {
                            var h = t.charCodeAt(a);
                            128 > h ? o[r++] = String.fromCharCode(h) : h > 127 && 2048 > h ? (o[r++] = String.fromCharCode(h >> 6 | 192), o[r++] = String.fromCharCode(63 & h | 128)) : (o[r++] = String.fromCharCode(h >> 12 | 224), o[r++] = String.fromCharCode(h >> 6 & 63 | 128), o[r++] = String.fromCharCode(63 & h | 128))
                        }
                        return o.join("")
                    },
                    utf8decode: function(t) {
                        var e = [],
                            i = 0,
                            r = "string" !== s.getTypeOf(t),
                            a = 0,
                            h = 0,
                            l = 0,
                            c = 0;
                        if (o) return o.decode(s.transformTo("uint8array", t));
                        if (n.nodebuffer) return s.transformTo("nodebuffer", t).toString("utf-8");
                        for (; a < t.length;) 128 > (h = r ? t[a] : t.charCodeAt(a)) ? (e[i++] = String.fromCharCode(h), a++) : h > 191 && 224 > h ? (l = r ? t[a + 1] : t.charCodeAt(a + 1), e[i++] = String.fromCharCode((31 & h) << 6 | 63 & l), a += 2) : (l = r ? t[a + 1] : t.charCodeAt(a + 1), c = r ? t[a + 2] : t.charCodeAt(a + 2), e[i++] = String.fromCharCode((15 & h) << 12 | (63 & l) << 6 | 63 & c), a += 3);
                        return e.join("")
                    }
                };
                e.exports = T
            }, {
                "./base64": 1,
                "./compressedObject": 2,
                "./compressions": 3,
                "./defaults": 5,
                "./nodeBuffer": 17,
                "./signature": 10,
                "./support": 12,
                "./utils": 14
            }],
            10: [function(t, e, i) {
                "use strict";
                i.LOCAL_FILE_HEADER = "PK", i.CENTRAL_FILE_HEADER = "PK", i.CENTRAL_DIRECTORY_END = "PK", i.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK", i.ZIP64_CENTRAL_DIRECTORY_END = "PK", i.DATA_DESCRIPTOR = "PK\b"
            }, {}],
            11: [function(t, e) {
                "use strict";

                function i(t, e) {
                    this.data = t, e || (this.data = n.string2binary(this.data)), this.length = this.data.length, this.index = 0
                }
                var o = t("./dataReader"),
                    n = t("./utils");
                i.prototype = new o, i.prototype.byteAt = function(t) {
                    return this.data.charCodeAt(t)
                }, i.prototype.lastIndexOfSignature = function(t) {
                    return this.data.lastIndexOf(t)
                }, i.prototype.readData = function(t) {
                    this.checkOffset(t);
                    var e = this.data.slice(this.index, this.index + t);
                    return this.index += t, e
                }, e.exports = i
            }, {
                "./dataReader": 4,
                "./utils": 14
            }],
            12: [function(t, e, i) {
                var o = t("__browserify_process");
                if (i.base64 = !0, i.array = !0, i.string = !0, i.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, i.nodebuffer = !o.browser, i.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer) i.blob = !1;
                else {
                    var n = new ArrayBuffer(0);
                    try {
                        i.blob = 0 === new Blob([n], {
                            type: "application/zip"
                        }).size
                    } catch (t) {
                        try {
                            var s = new(window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder);
                            s.append(n), i.blob = 0 === s.getBlob("application/zip").size
                        } catch (t) {
                            i.blob = !1
                        }
                    }
                }
            }, {
                __browserify_process: 18
            }],
            13: [function(t, e) {
                "use strict";

                function i(t) {
                    t && (this.data = t, this.length = this.data.length, this.index = 0)
                }
                var o = t("./dataReader");
                i.prototype = new o, i.prototype.byteAt = function(t) {
                    return this.data[t]
                }, i.prototype.lastIndexOfSignature = function(t) {
                    for (var e = t.charCodeAt(0), i = t.charCodeAt(1), o = t.charCodeAt(2), n = t.charCodeAt(3), s = this.length - 4; s >= 0; --s)
                        if (this.data[s] === e && this.data[s + 1] === i && this.data[s + 2] === o && this.data[s + 3] === n) return s;
                    return -1
                }, i.prototype.readData = function(t) {
                    this.checkOffset(t);
                    var e = this.data.subarray(this.index, this.index + t);
                    return this.index += t, e
                }, e.exports = i
            }, {
                "./dataReader": 4
            }],
            14: [function(t, e, i) {
                "use strict";

                function o(t) {
                    return t
                }

                function n(t, e) {
                    for (var i = 0; i < t.length; ++i) e[i] = 255 & t.charCodeAt(i);
                    return e
                }

                function s(t) {
                    var e = 65536,
                        o = [],
                        n = t.length,
                        s = i.getTypeOf(t),
                        r = 0,
                        a = !0;
                    try {
                        switch (s) {
                            case "uint8array":
                                String.fromCharCode.apply(null, new Uint8Array(0));
                                break;
                            case "nodebuffer":
                                String.fromCharCode.apply(null, l(0))
                        }
                    } catch (t) {
                        a = !1
                    }
                    if (!a) {
                        for (var h = "", c = 0; c < t.length; c++) h += String.fromCharCode(t[c]);
                        return h
                    }
                    for (; n > r && e > 1;) try {
                        o.push("array" === s || "nodebuffer" === s ? String.fromCharCode.apply(null, t.slice(r, Math.min(r + e, n))) : String.fromCharCode.apply(null, t.subarray(r, Math.min(r + e, n)))), r += e
                    } catch (t) {
                        e = Math.floor(e / 2)
                    }
                    return o.join("")
                }

                function r(t, e) {
                    for (var i = 0; i < t.length; i++) e[i] = t[i];
                    return e
                }
                var a = t("./support"),
                    h = t("./compressions"),
                    l = t("./nodeBuffer");
                i.string2binary = function(t) {
                    for (var e = "", i = 0; i < t.length; i++) e += String.fromCharCode(255 & t.charCodeAt(i));
                    return e
                }, i.string2Uint8Array = function(t) {
                    return i.transformTo("uint8array", t)
                }, i.uint8Array2String = function(t) {
                    return i.transformTo("string", t)
                }, i.string2Blob = function(t) {
                    var e = i.transformTo("arraybuffer", t);
                    return i.arrayBuffer2Blob(e)
                }, i.arrayBuffer2Blob = function(t) {
                    i.checkSupport("blob");
                    try {
                        return new Blob([t], {
                            type: "application/zip"
                        })
                    } catch (i) {
                        try {
                            var e = new(window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder);
                            return e.append(t), e.getBlob("application/zip")
                        } catch (t) {
                            throw Error("Bug : can't construct the Blob.")
                        }
                    }
                };
                var c = {};
                c.string = {
                    string: o,
                    array: function(t) {
                        return n(t, Array(t.length))
                    },
                    arraybuffer: function(t) {
                        return c.string.uint8array(t).buffer
                    },
                    uint8array: function(t) {
                        return n(t, new Uint8Array(t.length))
                    },
                    nodebuffer: function(t) {
                        return n(t, l(t.length))
                    }
                }, c.array = {
                    string: s,
                    array: o,
                    arraybuffer: function(t) {
                        return new Uint8Array(t).buffer
                    },
                    uint8array: function(t) {
                        return new Uint8Array(t)
                    },
                    nodebuffer: function(t) {
                        return l(t)
                    }
                }, c.arraybuffer = {
                    string: function(t) {
                        return s(new Uint8Array(t))
                    },
                    array: function(t) {
                        return r(new Uint8Array(t), Array(t.byteLength))
                    },
                    arraybuffer: o,
                    uint8array: function(t) {
                        return new Uint8Array(t)
                    },
                    nodebuffer: function(t) {
                        return l(new Uint8Array(t))
                    }
                }, c.uint8array = {
                    string: s,
                    array: function(t) {
                        return r(t, Array(t.length))
                    },
                    arraybuffer: function(t) {
                        return t.buffer
                    },
                    uint8array: o,
                    nodebuffer: function(t) {
                        return l(t)
                    }
                }, c.nodebuffer = {
                    string: s,
                    array: function(t) {
                        return r(t, Array(t.length))
                    },
                    arraybuffer: function(t) {
                        return c.nodebuffer.uint8array(t).buffer
                    },
                    uint8array: function(t) {
                        return r(t, new Uint8Array(t.length))
                    },
                    nodebuffer: o
                }, i.transformTo = function(t, e) {
                    if (e || (e = ""), !t) return e;
                    i.checkSupport(t);
                    var o = i.getTypeOf(e);
                    return c[o][t](e)
                }, i.getTypeOf = function(t) {
                    return "string" == typeof t ? "string" : "[object Array]" === Object.prototype.toString.call(t) ? "array" : a.nodebuffer && l.test(t) ? "nodebuffer" : a.uint8array && t instanceof Uint8Array ? "uint8array" : a.arraybuffer && t instanceof ArrayBuffer ? "arraybuffer" : void 0
                }, i.checkSupport = function(t) {
                    if (!a[t.toLowerCase()]) throw Error(t + " is not supported by this browser")
                }, i.MAX_VALUE_16BITS = 65535, i.MAX_VALUE_32BITS = -1, i.pretty = function(t) {
                    var e, i, o = "";
                    for (i = 0; i < (t || "").length; i++) o += "\\x" + (16 > (e = t.charCodeAt(i)) ? "0" : "") + e.toString(16).toUpperCase();
                    return o
                }, i.findCompression = function(t) {
                    for (var e in h)
                        if (h.hasOwnProperty(e) && h[e].magic === t) return h[e];
                    return null
                }, i.isRegExp = function(t) {
                    return "[object RegExp]" === Object.prototype.toString.call(t)
                }
            }, {
                "./compressions": 3,
                "./nodeBuffer": 17,
                "./support": 12
            }],
            15: [function(t, e) {
                "use strict";

                function i(t, e) {
                    this.files = [], this.loadOptions = e, t && this.load(t)
                }
                var o = t("./stringReader"),
                    n = t("./nodeBufferReader"),
                    s = t("./uint8ArrayReader"),
                    r = t("./utils"),
                    a = t("./signature"),
                    h = t("./zipEntry"),
                    l = t("./support");
                i.prototype = {
                    checkSignature: function(t) {
                        var e = this.reader.readString(4);
                        if (e !== t) throw Error("Corrupted zip or bug : unexpected signature (" + r.pretty(e) + ", expected " + r.pretty(t) + ")")
                    },
                    readBlockEndOfCentral: function() {
                        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2), this.zipComment = this.reader.readString(this.zipCommentLength)
                    },
                    readBlockZip64EndOfCentral: function() {
                        this.zip64EndOfCentralSize = this.reader.readInt(8), this.versionMadeBy = this.reader.readString(2), this.versionNeeded = this.reader.readInt(2), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
                        for (var t, e, i, o = this.zip64EndOfCentralSize - 44; o > 0;) t = this.reader.readInt(2), e = this.reader.readInt(4), i = this.reader.readString(e), this.zip64ExtensibleData[t] = {
                            id: t,
                            length: e,
                            value: i
                        }
                    },
                    readBlockZip64EndOfCentralLocator: function() {
                        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), this.disksCount > 1) throw Error("Multi-volumes zip are not supported")
                    },
                    readLocalFiles: function() {
                        var t, e;
                        for (t = 0; t < this.files.length; t++) e = this.files[t], this.reader.setIndex(e.localHeaderOffset), this.checkSignature(a.LOCAL_FILE_HEADER), e.readLocalPart(this.reader), e.handleUTF8()
                    },
                    readCentralDir: function() {
                        var t;
                        for (this.reader.setIndex(this.centralDirOffset); this.reader.readString(4) === a.CENTRAL_FILE_HEADER;)(t = new h({
                            zip64: this.zip64
                        }, this.loadOptions)).readCentralPart(this.reader), this.files.push(t)
                    },
                    readEndOfCentral: function() {
                        var t = this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);
                        if (-1 === t) throw Error("Corrupted zip : can't find end of central directory");
                        if (this.reader.setIndex(t), this.checkSignature(a.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === r.MAX_VALUE_16BITS || this.diskWithCentralDirStart === r.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === r.MAX_VALUE_16BITS || this.centralDirRecords === r.MAX_VALUE_16BITS || this.centralDirSize === r.MAX_VALUE_32BITS || this.centralDirOffset === r.MAX_VALUE_32BITS) {
                            if (this.zip64 = !0, -1 === (t = this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))) throw Error("Corrupted zip : can't find the ZIP64 end of central directory locator");
                            this.reader.setIndex(t), this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral()
                        }
                    },
                    prepareReader: function(t) {
                        var e = r.getTypeOf(t);
                        this.reader = "string" !== e || l.uint8array ? "nodebuffer" === e ? new n(t) : new s(r.transformTo("uint8array", t)) : new o(t, this.loadOptions.optimizedBinaryString)
                    },
                    load: function(t) {
                        this.prepareReader(t), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles()
                    }
                }, e.exports = i
            }, {
                "./nodeBufferReader": 17,
                "./signature": 10,
                "./stringReader": 11,
                "./support": 12,
                "./uint8ArrayReader": 13,
                "./utils": 14,
                "./zipEntry": 16
            }],
            16: [function(t, e) {
                "use strict";

                function i(t, e) {
                    this.options = t, this.loadOptions = e
                }
                var o = t("./stringReader"),
                    n = t("./utils"),
                    s = t("./compressedObject"),
                    r = t("./object");
                i.prototype = {
                    isEncrypted: function() {
                        return 1 == (1 & this.bitFlag)
                    },
                    useUTF8: function() {
                        return 2048 == (2048 & this.bitFlag)
                    },
                    prepareCompressedContent: function(t, e, i) {
                        return function() {
                            var o = t.index;
                            t.setIndex(e);
                            var n = t.readData(i);
                            return t.setIndex(o), n
                        }
                    },
                    prepareContent: function(t, e, i, o, s) {
                        return function() {
                            var t = n.transformTo(o.uncompressInputType, this.getCompressedContent()),
                                e = o.uncompress(t);
                            if (e.length !== s) throw Error("Bug : uncompressed data size mismatch");
                            return e
                        }
                    },
                    readLocalPart: function(t) {
                        var e, i;
                        if (t.skip(22), this.fileNameLength = t.readInt(2), i = t.readInt(2), this.fileName = t.readString(this.fileNameLength), t.skip(i), -1 == this.compressedSize || -1 == this.uncompressedSize) throw Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)");
                        if (null === (e = n.findCompression(this.compressionMethod))) throw Error("Corrupted zip : compression " + n.pretty(this.compressionMethod) + " unknown (inner file : " + this.fileName + ")");
                        if (this.decompressed = new s, this.decompressed.compressedSize = this.compressedSize, this.decompressed.uncompressedSize = this.uncompressedSize, this.decompressed.crc32 = this.crc32, this.decompressed.compressionMethod = this.compressionMethod, this.decompressed.getCompressedContent = this.prepareCompressedContent(t, t.index, this.compressedSize, e), this.decompressed.getContent = this.prepareContent(t, t.index, this.compressedSize, e, this.uncompressedSize), this.loadOptions.checkCRC32 && (this.decompressed = n.transformTo("string", this.decompressed.getContent()), r.crc32(this.decompressed) !== this.crc32)) throw Error("Corrupted zip : CRC32 mismatch")
                    },
                    readCentralPart: function(t) {
                        if (this.versionMadeBy = t.readString(2), this.versionNeeded = t.readInt(2), this.bitFlag = t.readInt(2), this.compressionMethod = t.readString(2), this.date = t.readDate(), this.crc32 = t.readInt(4), this.compressedSize = t.readInt(4), this.uncompressedSize = t.readInt(4), this.fileNameLength = t.readInt(2), this.a826FieldsLength = t.readInt(2), this.fileCommentLength = t.readInt(2), this.diskNumberStart = t.readInt(2), this.internalFileAttributes = t.readInt(2), this.externalFileAttributes = t.readInt(4), this.localHeaderOffset = t.readInt(4), this.isEncrypted()) throw Error("Encrypted zip are not supported");
                        this.fileName = t.readString(this.fileNameLength), this.readExtraFields(t), this.parseZIP64ExtraField(t), this.fileComment = t.readString(this.fileCommentLength), this.dir = !!(16 & this.externalFileAttributes)
                    },
                    parseZIP64ExtraField: function() {
                        if (this.a826Fields[1]) {
                            var t = new o(this.a826Fields[1].value);
                            this.uncompressedSize === n.MAX_VALUE_32BITS && (this.uncompressedSize = t.readInt(8)), this.compressedSize === n.MAX_VALUE_32BITS && (this.compressedSize = t.readInt(8)), this.localHeaderOffset === n.MAX_VALUE_32BITS && (this.localHeaderOffset = t.readInt(8)), this.diskNumberStart === n.MAX_VALUE_32BITS && (this.diskNumberStart = t.readInt(4))
                        }
                    },
                    readExtraFields: function(t) {
                        var e, i, o, n = t.index;
                        for (this.a826Fields = this.a826Fields || {}; t.index < n + this.a826FieldsLength;) e = t.readInt(2), i = t.readInt(2), o = t.readString(i), this.a826Fields[e] = {
                            id: e,
                            length: i,
                            value: o
                        }
                    },
                    handleUTF8: function() {
                        if (this.useUTF8()) this.fileName = r.utf8decode(this.fileName), this.fileComment = r.utf8decode(this.fileComment);
                        else {
                            var t = this.findExtraFieldUnicodePath();
                            null !== t && (this.fileName = t)
                        }
                    },
                    findExtraFieldUnicodePath: function() {
                        var t = this.a826Fields[28789];
                        if (t) {
                            var e = new o(t.value);
                            return 1 !== e.readInt(1) || r.crc32(this.fileName) !== e.readInt(4) ? null : r.utf8decode(e.readString(t.length - 5))
                        }
                        return null
                    }
                }, e.exports = i
            }, {
                "./compressedObject": 2,
                "./object": 9,
                "./stringReader": 11,
                "./utils": 14
            }],
            17: [function() {}, {}],
            18: [function(t, e) {
                var i = e.exports = {};
                i.nextTick = function() {
                    var t = "undefined" != typeof window && window.setImmediate,
                        e = "undefined" != typeof window && window.postMessage && window.addEventListener;
                    if (t) return function(t) {
                        return window.setImmediate(t)
                    };
                    if (e) {
                        var i = [];
                        return window.addEventListener("message", (function(t) {
                                var e = t.source;
                                (e === window || null === e) && "process-tick" === t.data && (t.stopPropagation(), i.length > 0) && i.shift()()
                            }), !0),
                            function(t) {
                                i.push(t), window.postMessage("process-tick", "*")
                            }
                    }
                    return function(t) {
                        setTimeout(t, 0)
                    }
                }(), i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.binding = function() {
                    throw Error("process.binding is not supported")
                }, i.cwd = function() {
                    return "/"
                }, i.chdir = function() {
                    throw Error("process.chdir is not supported")
                }
            }, {}],
            19: [function() {
                /** @license zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */
                (function() {
                    "use strict";

                    function t(t, e) {
                        var i, o = t.split("."),
                            n = d;
                        !(o[0] in n) && n.execScript && n.execScript("var " + o[0]);
                        for (; o.length && (i = o.shift());) o.length || e === c ? n = n[i] ? n[i] : n[i] = {} : n[i] = e
                    }

                    function e(t, e) {
                        if (this.index = "number" == typeof e ? e : 0, this.d = 0, this.buffer = t instanceof(p ? Uint8Array : Array) ? t : new(p ? Uint8Array : Array)(32768), 2 * this.buffer.length <= this.index) throw Error("invalid index");
                        this.buffer.length <= this.index && i(this)
                    }

                    function i(t) {
                        var e, i = t.buffer,
                            o = i.length,
                            n = new(p ? Uint8Array : Array)(o << 1);
                        if (p) n.set(i);
                        else
                            for (e = 0; o > e; ++e) n[e] = i[e];
                        return t.buffer = n
                    }

                    function o(t) {
                        this.buffer = new(p ? Uint16Array : Array)(2 * t), this.length = 0
                    }

                    function n(t, e) {
                        this.e = E, this.f = 0, this.input = p && t instanceof Array ? new Uint8Array(t) : t, this.c = 0, e && (e.lazy && (this.f = e.lazy), "number" == typeof e.compressionType && (this.e = e.compressionType), e.outputBuffer && (this.b = p && e.outputBuffer instanceof Array ? new Uint8Array(e.outputBuffer) : e.outputBuffer), "number" == typeof e.outputIndex && (this.c = e.outputIndex)), this.b || (this.b = new(p ? Uint8Array : Array)(32768))
                    }

                    function s(t, e) {
                        this.length = t, this.g = e
                    }

                    function r(t, e) {
                        function i(t, e) {
                            var i, o, n, s, r = t.g,
                                a = [],
                                h = 0;
                            switch (i = k[t.length], a[h++] = 65535 & i, a[h++] = i >> 16 & 255, a[h++] = i >> 24, u) {
                                case 1 === r:
                                    o = [0, r - 1, 0];
                                    break;
                                case 2 === r:
                                    o = [1, r - 2, 0];
                                    break;
                                case 3 === r:
                                    o = [2, r - 3, 0];
                                    break;
                                case 4 === r:
                                    o = [3, r - 4, 0];
                                    break;
                                case 6 >= r:
                                    o = [4, r - 5, 1];
                                    break;
                                case 8 >= r:
                                    o = [5, r - 7, 1];
                                    break;
                                case 12 >= r:
                                    o = [6, r - 9, 2];
                                    break;
                                case 16 >= r:
                                    o = [7, r - 13, 2];
                                    break;
                                case 24 >= r:
                                    o = [8, r - 17, 3];
                                    break;
                                case 32 >= r:
                                    o = [9, r - 25, 3];
                                    break;
                                case 48 >= r:
                                    o = [10, r - 33, 4];
                                    break;
                                case 64 >= r:
                                    o = [11, r - 49, 4];
                                    break;
                                case 96 >= r:
                                    o = [12, r - 65, 5];
                                    break;
                                case 128 >= r:
                                    o = [13, r - 97, 5];
                                    break;
                                case 192 >= r:
                                    o = [14, r - 129, 6];
                                    break;
                                case 256 >= r:
                                    o = [15, r - 193, 6];
                                    break;
                                case 384 >= r:
                                    o = [16, r - 257, 7];
                                    break;
                                case 512 >= r:
                                    o = [17, r - 385, 7];
                                    break;
                                case 768 >= r:
                                    o = [18, r - 513, 8];
                                    break;
                                case 1024 >= r:
                                    o = [19, r - 769, 8];
                                    break;
                                case 1536 >= r:
                                    o = [20, r - 1025, 9];
                                    break;
                                case 2048 >= r:
                                    o = [21, r - 1537, 9];
                                    break;
                                case 3072 >= r:
                                    o = [22, r - 2049, 10];
                                    break;
                                case 4096 >= r:
                                    o = [23, r - 3073, 10];
                                    break;
                                case 6144 >= r:
                                    o = [24, r - 4097, 11];
                                    break;
                                case 8192 >= r:
                                    o = [25, r - 6145, 11];
                                    break;
                                case 12288 >= r:
                                    o = [26, r - 8193, 12];
                                    break;
                                case 16384 >= r:
                                    o = [27, r - 12289, 12];
                                    break;
                                case 24576 >= r:
                                    o = [28, r - 16385, 13];
                                    break;
                                case 32768 >= r:
                                    o = [29, r - 24577, 13];
                                    break;
                                default:
                                    throw "invalid distance"
                            }
                            for (i = o, a[h++] = i[0], a[h++] = i[1], a[h++] = i[2], n = 0, s = a.length; s > n; ++n) y[v++] = a[n];
                            O[a[0]]++, E[a[3]]++, w = t.length + e - 1, f = null
                        }
                        var o, n, s, r, h, l, d, f, g, m = {},
                            y = p ? new Uint16Array(2 * e.length) : [],
                            v = 0,
                            w = 0,
                            O = new(p ? Uint32Array : Array)(286),
                            E = new(p ? Uint32Array : Array)(30),
                            G = t.f;
                        if (!p) {
                            for (s = 0; 285 >= s;) O[s++] = 0;
                            for (s = 0; 29 >= s;) E[s++] = 0
                        }
                        for (O[256] = 1, o = 0, n = e.length; n > o; ++o) {
                            for (s = h = 0, r = 3; r > s && o + s !== n; ++s) h = h << 8 | e[o + s];
                            if (m[h] === c && (m[h] = []), l = m[h], !(0 < w--)) {
                                for (; 0 < l.length && 32768 < o - l[0];) l.shift();
                                if (o + 3 >= n) {
                                    for (f && i(f, -1), s = 0, r = n - o; r > s; ++s) g = e[o + s], y[v++] = g, ++O[g];
                                    break
                                }
                                0 < l.length ? (d = a(e, o, l), f ? f.length < d.length ? (g = e[o - 1], y[v++] = g, ++O[g], i(d, 0)) : i(f, -1) : d.length < G ? f = d : i(d, 0)) : f ? i(f, -1) : (g = e[o], y[v++] = g, ++O[g])
                            }
                            l.push(o)
                        }
                        return y[v++] = 256, O[256]++, t.j = O, t.i = E, p ? y.subarray(0, v) : y
                    }

                    function a(t, e, i) {
                        var o, n, r, a, h, l, c = 0,
                            u = t.length;
                        a = 0, l = i.length;
                        t: for (; l > a; a++) {
                            if (o = i[l - a - 1], r = 3, c > 3) {
                                for (h = c; h > 3; h--)
                                    if (t[o + h - 1] !== t[e + h - 1]) continue t;
                                r = c
                            }
                            for (; 258 > r && u > e + r && t[o + r] === t[e + r];) ++r;
                            if (r > c && (n = o, c = r), 258 === r) break
                        }
                        return new s(c, e - n)
                    }

                    function h(t, e) {
                        var i, n, s, r, a, h = t.length,
                            l = new o(572),
                            c = new(p ? Uint8Array : Array)(h);
                        if (!p)
                            for (r = 0; h > r; r++) c[r] = 0;
                        for (r = 0; h > r; ++r) 0 < t[r] && l.push(r, t[r]);
                        if (i = Array(l.length / 2), n = new(p ? Uint32Array : Array)(l.length / 2), 1 === i.length) return c[l.pop().index] = 1, c;
                        for (r = 0, a = l.length / 2; a > r; ++r) i[r] = l.pop(), n[r] = i[r].value;
                        for (s = function(t, e, i) {
                                function o(t) {
                                    var i = f[t][g[t]];
                                    i === e ? (o(t + 1), o(t + 1)) : --u[i], ++g[t]
                                }
                                var n, s, r, a, h, l = new(p ? Uint16Array : Array)(i),
                                    c = new(p ? Uint8Array : Array)(i),
                                    u = new(p ? Uint8Array : Array)(e),
                                    d = Array(i),
                                    f = Array(i),
                                    g = Array(i),
                                    m = (1 << i) - e,
                                    y = 1 << i - 1;
                                for (l[i - 1] = e, s = 0; i > s; ++s) y > m ? c[s] = 0 : (c[s] = 1, m -= y), m <<= 1, l[i - 2 - s] = (l[i - 1 - s] / 2 | 0) + e;
                                for (l[0] = c[0], d[0] = Array(l[0]), f[0] = Array(l[0]), s = 1; i > s; ++s) l[s] > 2 * l[s - 1] + c[s] && (l[s] = 2 * l[s - 1] + c[s]), d[s] = Array(l[s]), f[s] = Array(l[s]);
                                for (n = 0; e > n; ++n) u[n] = i;
                                for (r = 0; r < l[i - 1]; ++r) d[i - 1][r] = t[r], f[i - 1][r] = r;
                                for (n = 0; i > n; ++n) g[n] = 0;
                                for (1 === c[i - 1] && (--u[0], ++g[i - 1]), s = i - 2; s >= 0; --s) {
                                    for (a = n = 0, h = g[s + 1], r = 0; r < l[s]; r++)(a = d[s + 1][h] + d[s + 1][h + 1]) > t[n] ? (d[s][r] = a, f[s][r] = e, h += 2) : (d[s][r] = t[n], f[s][r] = n, ++n);
                                    g[s] = 0, 1 === c[s] && o(s)
                                }
                                return u
                            }(n, n.length, e), r = 0, a = i.length; a > r; ++r) c[i[r].index] = s[r];
                        return c
                    }

                    function l(t) {
                        var e, i, o, n, s = new(p ? Uint16Array : Array)(t.length),
                            r = [],
                            a = [],
                            h = 0;
                        for (e = 0, i = t.length; i > e; e++) r[t[e]] = 1 + (0 | r[t[e]]);
                        for (e = 1, i = 16; i >= e; e++) a[e] = h, h += 0 | r[e], h <<= 1;
                        for (e = 0, i = t.length; i > e; e++)
                            for (h = a[t[e]], a[t[e]] += 1, o = s[e] = 0, n = t[e]; n > o; o++) s[e] = s[e] << 1 | 1 & h, h >>>= 1;
                        return s
                    }
                    var c = void 0,
                        u = !0,
                        d = this,
                        p = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array && "undefined" != typeof DataView;
                    e.prototype.a = function(t, e, o) {
                        var n, s = this.buffer,
                            r = this.index,
                            a = this.d,
                            h = s[r];
                        if (o && e > 1 && (t = e > 8 ? (w[255 & t] << 24 | w[t >>> 8 & 255] << 16 | w[t >>> 16 & 255] << 8 | w[t >>> 24 & 255]) >> 32 - e : w[t] >> 8 - e), 8 > e + a) h = h << e | t, a += e;
                        else
                            for (n = 0; e > n; ++n) h = h << 1 | t >> e - n - 1 & 1, 8 == ++a && (a = 0, s[r++] = w[h], h = 0, r === s.length && (s = i(this)));
                        s[r] = h, this.buffer = s, this.d = a, this.index = r
                    }, e.prototype.finish = function() {
                        var t, e = this.buffer,
                            i = this.index;
                        return 0 < this.d && (e[i] <<= 8 - this.d, e[i] = w[e[i]], i++), p ? t = e.subarray(0, i) : (e.length = i, t = e), t
                    };
                    var f, g = new(p ? Uint8Array : Array)(256);
                    for (f = 0; 256 > f; ++f) {
                        for (var m = v = f, y = 7, v = v >>> 1; v; v >>>= 1) m <<= 1, m |= 1 & v, --y;
                        g[f] = (m << y & 255) >>> 0
                    }
                    var w = g;
                    o.prototype.getParent = function(t) {
                        return 2 * ((t - 2) / 4 | 0)
                    }, o.prototype.push = function(t, e) {
                        var i, o, n, s = this.buffer;
                        for (i = this.length, s[this.length++] = e, s[this.length++] = t; i > 0 && (o = this.getParent(i), s[i] > s[o]);) n = s[i], s[i] = s[o], s[o] = n, n = s[i + 1], s[i + 1] = s[o + 1], s[o + 1] = n, i = o;
                        return this.length
                    }, o.prototype.pop = function() {
                        var t, e, i, o, n, s = this.buffer;
                        for (e = s[0], t = s[1], this.length -= 2, s[0] = s[this.length], s[1] = s[this.length + 1], n = 0; !((o = 2 * n + 2) >= this.length) && (o + 2 < this.length && s[o + 2] > s[o] && (o += 2), s[o] > s[n]);) i = s[n], s[n] = s[o], s[o] = i, i = s[n + 1], s[n + 1] = s[o + 1], s[o + 1] = i, n = o;
                        return {
                            index: t,
                            value: e,
                            length: this.length
                        }
                    };
                    var O, E = 2,
                        G = [];
                    for (O = 0; 288 > O; O++) switch (u) {
                        case 143 >= O:
                            G.push([O + 48, 8]);
                            break;
                        case 255 >= O:
                            G.push([O - 144 + 400, 9]);
                            break;
                        case 279 >= O:
                            G.push([O - 256 + 0, 7]);
                            break;
                        case 287 >= O:
                            G.push([O - 280 + 192, 8]);
                            break;
                        default:
                            throw "invalid literal: " + O
                    }
                    n.prototype.h = function() {
                        var t, i, o, n, s = this.input;
                        switch (this.e) {
                            case 0:
                                for (o = 0, n = s.length; n > o;) {
                                    var a, d, f, g = i = p ? s.subarray(o, o + 65535) : s.slice(o, o + 65535),
                                        m = (o += i.length) === n,
                                        y = c,
                                        v = c,
                                        w = this.b,
                                        O = this.c;
                                    if (p) {
                                        for (w = new Uint8Array(this.b.buffer); w.length <= O + g.length + 5;) w = new Uint8Array(w.length << 1);
                                        w.set(this.b)
                                    }
                                    if (a = m ? 1 : 0, w[O++] = 0 | a, f = 65536 + ~(d = g.length) & 65535, w[O++] = 255 & d, w[O++] = d >>> 8 & 255, w[O++] = 255 & f, w[O++] = f >>> 8 & 255, p) w.set(g, O), O += g.length, w = w.subarray(0, O);
                                    else {
                                        for (y = 0, v = g.length; v > y; ++y) w[O++] = g[y];
                                        w.length = O
                                    }
                                    this.c = O, this.b = w
                                }
                                break;
                            case 1:
                                var b = new e(p ? new Uint8Array(this.b.buffer) : this.b, this.c);
                                b.a(1, 1, u), b.a(1, 2, u);
                                var k, T, S, x = r(this, s);
                                for (k = 0, T = x.length; T > k; k++)
                                    if (S = x[k], e.prototype.a.apply(b, G[S]), S > 256) b.a(x[++k], x[++k], u), b.a(x[++k], 5), b.a(x[++k], x[++k], u);
                                    else if (256 === S) break;
                                this.b = b.finish(), this.c = this.b.length;
                                break;
                            case E:
                                var C, A, R, M, I, L, z, P, H, B, V, F, U, _, D, W = new e(p ? new Uint8Array(this.b.buffer) : this.b, this.c),
                                    j = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                                    N = Array(19);
                                for (C = E, W.a(1, 1, u), W.a(C, 2, u), A = r(this, s), z = l(L = h(this.j, 15)), H = l(P = h(this.i, 7)), R = 286; R > 257 && 0 === L[R - 1]; R--);
                                for (M = 30; M > 1 && 0 === P[M - 1]; M--);
                                var Y, Z, $, X, K, q, J = R,
                                    Q = M,
                                    tt = new(p ? Uint32Array : Array)(J + Q),
                                    et = new(p ? Uint32Array : Array)(316),
                                    it = new(p ? Uint8Array : Array)(19);
                                for (Y = Z = 0; J > Y; Y++) tt[Z++] = L[Y];
                                for (Y = 0; Q > Y; Y++) tt[Z++] = P[Y];
                                if (!p)
                                    for (Y = 0, X = it.length; X > Y; ++Y) it[Y] = 0;
                                for (Y = K = 0, X = tt.length; X > Y; Y += Z) {
                                    for (Z = 1; X > Y + Z && tt[Y + Z] === tt[Y]; ++Z);
                                    if ($ = Z, 0 === tt[Y])
                                        if (3 > $)
                                            for (; 0 < $--;) et[K++] = 0, it[0]++;
                                        else
                                            for (; $ > 0;)(q = 138 > $ ? $ : 138) > $ - 3 && $ > q && (q = $ - 3), 10 >= q ? (et[K++] = 17, et[K++] = q - 3, it[17]++) : (et[K++] = 18, et[K++] = q - 11, it[18]++), $ -= q;
                                    else if (et[K++] = tt[Y], it[tt[Y]]++, 3 > --$)
                                        for (; 0 < $--;) et[K++] = tt[Y], it[tt[Y]]++;
                                    else
                                        for (; $ > 0;)(q = 6 > $ ? $ : 6) > $ - 3 && $ > q && (q = $ - 3), et[K++] = 16, et[K++] = q - 3, it[16]++, $ -= q
                                }
                                for (t = p ? et.subarray(0, K) : et.slice(0, K), B = h(it, 7), _ = 0; 19 > _; _++) N[_] = B[j[_]];
                                for (I = 19; I > 4 && 0 === N[I - 1]; I--);
                                for (V = l(B), W.a(R - 257, 5, u), W.a(M - 1, 5, u), W.a(I - 4, 4, u), _ = 0; I > _; _++) W.a(N[_], 3, u);
                                for (_ = 0, D = t.length; D > _; _++)
                                    if (F = t[_], W.a(V[F], B[F], u), F >= 16) {
                                        switch (_++, F) {
                                            case 16:
                                                U = 2;
                                                break;
                                            case 17:
                                                U = 3;
                                                break;
                                            case 18:
                                                U = 7;
                                                break;
                                            default:
                                                throw "invalid code: " + F
                                        }
                                        W.a(t[_], U, u)
                                    } var ot, nt, st, rt, at, ht, lt, ct, ut = [z, L],
                                    dt = [H, P];
                                for (at = ut[0], ht = ut[1], lt = dt[0], ct = dt[1], ot = 0, nt = A.length; nt > ot; ++ot)
                                    if (st = A[ot], W.a(at[st], ht[st], u), st > 256) W.a(A[++ot], A[++ot], u), rt = A[++ot], W.a(lt[rt], ct[rt], u), W.a(A[++ot], A[++ot], u);
                                    else if (256 === st) break;
                                this.b = W.finish(), this.c = this.b.length;
                                break;
                            default:
                                throw "invalid compression type"
                        }
                        return this.b
                    };
                    var b = function() {
                            function t(t) {
                                switch (u) {
                                    case 3 === t:
                                        return [257, t - 3, 0];
                                    case 4 === t:
                                        return [258, t - 4, 0];
                                    case 5 === t:
                                        return [259, t - 5, 0];
                                    case 6 === t:
                                        return [260, t - 6, 0];
                                    case 7 === t:
                                        return [261, t - 7, 0];
                                    case 8 === t:
                                        return [262, t - 8, 0];
                                    case 9 === t:
                                        return [263, t - 9, 0];
                                    case 10 === t:
                                        return [264, t - 10, 0];
                                    case 12 >= t:
                                        return [265, t - 11, 1];
                                    case 14 >= t:
                                        return [266, t - 13, 1];
                                    case 16 >= t:
                                        return [267, t - 15, 1];
                                    case 18 >= t:
                                        return [268, t - 17, 1];
                                    case 22 >= t:
                                        return [269, t - 19, 2];
                                    case 26 >= t:
                                        return [270, t - 23, 2];
                                    case 30 >= t:
                                        return [271, t - 27, 2];
                                    case 34 >= t:
                                        return [272, t - 31, 2];
                                    case 42 >= t:
                                        return [273, t - 35, 3];
                                    case 50 >= t:
                                        return [274, t - 43, 3];
                                    case 58 >= t:
                                        return [275, t - 51, 3];
                                    case 66 >= t:
                                        return [276, t - 59, 3];
                                    case 82 >= t:
                                        return [277, t - 67, 4];
                                    case 98 >= t:
                                        return [278, t - 83, 4];
                                    case 114 >= t:
                                        return [279, t - 99, 4];
                                    case 130 >= t:
                                        return [280, t - 115, 4];
                                    case 162 >= t:
                                        return [281, t - 131, 5];
                                    case 194 >= t:
                                        return [282, t - 163, 5];
                                    case 226 >= t:
                                        return [283, t - 195, 5];
                                    case 257 >= t:
                                        return [284, t - 227, 5];
                                    case 258 === t:
                                        return [285, t - 258, 0];
                                    default:
                                        throw "invalid length: " + t
                                }
                            }
                            var e, i, o = [];
                            for (e = 3; 258 >= e; e++) i = t(e), o[e] = i[2] << 24 | i[1] << 16 | i[0];
                            return o
                        }(),
                        k = p ? new Uint32Array(b) : b;
                    t("Zlib.RawDeflate", n), t("Zlib.RawDeflate.prototype.compress", n.prototype.h);
                    var T, S, x, C, A = {
                        NONE: 0,
                        FIXED: 1,
                        DYNAMIC: E
                    };
                    if (Object.keys) T = Object.keys(A);
                    else
                        for (S in T = [], x = 0, A) T[x++] = S;
                    for (x = 0, C = T.length; C > x; ++x) t("Zlib.RawDeflate.CompressionType." + (S = T[x]), A[S])
                }).call(this)
            }, {}],
            20: [function() {
                /** @license zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */
                (function() {
                    "use strict";

                    function t(t, e) {
                        var i, o = t.split("."),
                            n = r;
                        !(o[0] in n) && n.execScript && n.execScript("var " + o[0]);
                        for (; o.length && (i = o.shift());) o.length || void 0 === e ? n = n[i] ? n[i] : n[i] = {} : n[i] = e
                    }

                    function e(t) {
                        var e, i, o, n, s, r, h, l, c, u, d = t.length,
                            p = 0,
                            f = 1 / 0;
                        for (l = 0; d > l; ++l) t[l] > p && (p = t[l]), t[l] < f && (f = t[l]);
                        for (e = 1 << p, i = new(a ? Uint32Array : Array)(e), o = 1, n = 0, s = 2; p >= o;) {
                            for (l = 0; d > l; ++l)
                                if (t[l] === o) {
                                    for (r = 0, h = n, c = 0; o > c; ++c) r = r << 1 | 1 & h, h >>= 1;
                                    for (u = o << 16 | l, c = r; e > c; c += s) i[c] = u;
                                    ++n
                                }++ o, n <<= 1, s <<= 1
                        }
                        return [i, p, f]
                    }

                    function i(t, e) {
                        switch (this.g = [], this.h = 32768, this.c = this.f = this.d = this.k = 0, this.input = a ? new Uint8Array(t) : t, this.l = !1, this.i = l, this.q = !1, (e || !(e = {})) && (e.index && (this.d = e.index), e.bufferSize && (this.h = e.bufferSize), e.bufferType && (this.i = e.bufferType), e.resize && (this.q = e.resize)), this.i) {
                            case h:
                                this.a = 32768, this.b = new(a ? Uint8Array : Array)(32768 + this.h + 258);
                                break;
                            case l:
                                this.a = 0, this.b = new(a ? Uint8Array : Array)(this.h), this.e = this.v, this.m = this.s, this.j = this.t;
                                break;
                            default:
                                throw Error("invalid inflate mode")
                        }
                    }

                    function o(t, e) {
                        for (var i, o = t.f, n = t.c, s = t.input, r = t.d, a = s.length; e > n;) {
                            if (r >= a) throw Error("input buffer is broken");
                            o |= s[r++] << n, n += 8
                        }
                        return i = o & (1 << e) - 1, t.f = o >>> e, t.c = n - e, t.d = r, i
                    }

                    function n(t, e) {
                        for (var i, o, n = t.f, s = t.c, r = t.input, a = t.d, h = r.length, l = e[0], c = e[1]; c > s && !(a >= h);) n |= r[a++] << s, s += 8;
                        return o = (i = l[n & (1 << c) - 1]) >>> 16, t.f = n >> o, t.c = s - o, t.d = a, 65535 & i
                    }

                    function s(t) {
                        function i(t, e, i) {
                            var s, r, a, h = this.p;
                            for (a = 0; t > a;) switch (s = n(this, e)) {
                                case 16:
                                    for (r = 3 + o(this, 2); r--;) i[a++] = h;
                                    break;
                                case 17:
                                    for (r = 3 + o(this, 3); r--;) i[a++] = 0;
                                    h = 0;
                                    break;
                                case 18:
                                    for (r = 11 + o(this, 7); r--;) i[a++] = 0;
                                    h = 0;
                                    break;
                                default:
                                    h = i[a++] = s
                            }
                            return this.p = h, i
                        }
                        var s, r, h, l, c = o(t, 5) + 257,
                            u = o(t, 5) + 1,
                            d = o(t, 4) + 4,
                            f = new(a ? Uint8Array : Array)(p.length);
                        for (l = 0; d > l; ++l) f[p[l]] = o(t, 3);
                        if (!a)
                            for (l = d, d = f.length; d > l; ++l) f[p[l]] = 0;
                        s = e(f), r = new(a ? Uint8Array : Array)(c), h = new(a ? Uint8Array : Array)(u), t.p = 0, t.j(e(i.call(t, c, s, r)), e(i.call(t, u, s, h)))
                    }
                    var r = this,
                        a = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array && "undefined" != typeof DataView,
                        h = 0,
                        l = 1;
                    i.prototype.u = function() {
                        for (; !this.l;) {
                            var t = o(this, 3);
                            switch (1 & t && (this.l = !0), t >>>= 1) {
                                case 0:
                                    var e = this.input,
                                        i = this.d,
                                        n = this.b,
                                        r = this.a,
                                        c = e.length,
                                        u = void 0,
                                        d = n.length,
                                        p = void 0;
                                    if (this.c = this.f = 0, i + 1 >= c) throw Error("invalid uncompressed block header: LEN");
                                    if (u = e[i++] | e[i++] << 8, i + 1 >= c) throw Error("invalid uncompressed block header: NLEN");
                                    if (u === ~(e[i++] | e[i++] << 8)) throw Error("invalid uncompressed block header: length verify");
                                    if (i + u > e.length) throw Error("input buffer is broken");
                                    switch (this.i) {
                                        case h:
                                            for (; r + u > n.length;) {
                                                if (u -= p = d - r, a) n.set(e.subarray(i, i + p), r), r += p, i += p;
                                                else
                                                    for (; p--;) n[r++] = e[i++];
                                                this.a = r, n = this.e(), r = this.a
                                            }
                                            break;
                                        case l:
                                            for (; r + u > n.length;) n = this.e({
                                                o: 2
                                            });
                                            break;
                                        default:
                                            throw Error("invalid inflate mode")
                                    }
                                    if (a) n.set(e.subarray(i, i + u), r), r += u, i += u;
                                    else
                                        for (; u--;) n[r++] = e[i++];
                                    this.d = i, this.a = r, this.b = n;
                                    break;
                                case 1:
                                    this.j(T, x);
                                    break;
                                case 2:
                                    s(this);
                                    break;
                                default:
                                    throw Error("unknown BTYPE: " + t)
                            }
                        }
                        return this.m()
                    };
                    var c, u, d = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                        p = a ? new Uint16Array(d) : d,
                        f = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258],
                        g = a ? new Uint16Array(f) : f,
                        m = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0],
                        y = a ? new Uint8Array(m) : m,
                        v = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
                        w = a ? new Uint16Array(v) : v,
                        O = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
                        E = a ? new Uint8Array(O) : O,
                        G = new(a ? Uint8Array : Array)(288);
                    for (c = 0, u = G.length; u > c; ++c) G[c] = 143 >= c ? 8 : 255 >= c ? 9 : 279 >= c ? 7 : 8;
                    var b, k, T = e(G),
                        S = new(a ? Uint8Array : Array)(30);
                    for (b = 0, k = S.length; k > b; ++b) S[b] = 5;
                    var x = e(S);
                    i.prototype.j = function(t, e) {
                        var i = this.b,
                            s = this.a;
                        this.n = t;
                        for (var r, a, h, l, c = i.length - 258; 256 !== (r = n(this, t));)
                            if (256 > r) s >= c && (this.a = s, i = this.e(), s = this.a), i[s++] = r;
                            else
                                for (l = g[a = r - 257], 0 < y[a] && (l += o(this, y[a])), r = n(this, e), h = w[r], 0 < E[r] && (h += o(this, E[r])), s >= c && (this.a = s, i = this.e(), s = this.a); l--;) i[s] = i[s++ - h];
                        for (; 8 <= this.c;) this.c -= 8, this.d--;
                        this.a = s
                    }, i.prototype.t = function(t, e) {
                        var i = this.b,
                            s = this.a;
                        this.n = t;
                        for (var r, a, h, l, c = i.length; 256 !== (r = n(this, t));)
                            if (256 > r) s >= c && (c = (i = this.e()).length), i[s++] = r;
                            else
                                for (l = g[a = r - 257], 0 < y[a] && (l += o(this, y[a])), r = n(this, e), h = w[r], 0 < E[r] && (h += o(this, E[r])), s + l > c && (c = (i = this.e()).length); l--;) i[s] = i[s++ - h];
                        for (; 8 <= this.c;) this.c -= 8, this.d--;
                        this.a = s
                    }, i.prototype.e = function() {
                        var t, e, i = new(a ? Uint8Array : Array)(this.a - 32768),
                            o = this.a - 32768,
                            n = this.b;
                        if (a) i.set(n.subarray(32768, i.length));
                        else
                            for (t = 0, e = i.length; e > t; ++t) i[t] = n[t + 32768];
                        if (this.g.push(i), this.k += i.length, a) n.set(n.subarray(o, o + 32768));
                        else
                            for (t = 0; 32768 > t; ++t) n[t] = n[o + t];
                        return this.a = 32768, n
                    }, i.prototype.v = function(t) {
                        var e, i, o, n = this.input.length / this.d + 1 | 0,
                            s = this.input,
                            r = this.b;
                        return t && ("number" == typeof t.o && (n = t.o), "number" == typeof t.r && (n += t.r)), 2 > n ? i = (o = (s.length - this.d) / this.n[2] / 2 * 258 | 0) < r.length ? r.length + o : r.length << 1 : i = r.length * n, a ? (e = new Uint8Array(i)).set(r) : e = r, this.b = e
                    }, i.prototype.m = function() {
                        var t, e, i, o, n, s = 0,
                            r = this.b,
                            h = this.g,
                            l = new(a ? Uint8Array : Array)(this.k + (this.a - 32768));
                        if (0 === h.length) return a ? this.b.subarray(32768, this.a) : this.b.slice(32768, this.a);
                        for (e = 0, i = h.length; i > e; ++e)
                            for (o = 0, n = (t = h[e]).length; n > o; ++o) l[s++] = t[o];
                        for (e = 32768, i = this.a; i > e; ++e) l[s++] = r[e];
                        return this.g = [], this.buffer = l
                    }, i.prototype.s = function() {
                        var t, e = this.a;
                        return a ? this.q ? (t = new Uint8Array(e)).set(this.b.subarray(0, e)) : t = this.b.subarray(0, e) : (this.b.length > e && (this.b.length = e), t = this.b), this.buffer = t
                    }, t("Zlib.RawInflate", i), t("Zlib.RawInflate.prototype.decompress", i.prototype.u);
                    var C, A, R, M, I = {
                        ADAPTIVE: l,
                        BLOCK: h
                    };
                    if (Object.keys) C = Object.keys(I);
                    else
                        for (A in C = [], R = 0, I) C[R++] = A;
                    for (R = 0, M = C.length; M > R; ++R) t("Zlib.RawInflate.BufferType." + (A = C[R]), I[A])
                }).call(this)
            }, {}]
        }, {}, [7])(7)
    })), THREE.OBJLoader = function() {
        var t = /^[og]\s*(.+)?/,
            e = /^mtllib /,
            i = /^usemtl /;

        function o() {
            var t = {
                objects: [],
                object: {},
                vertices: [],
                normals: [],
                colors: [],
                uvs: [],
                materialLibraries: [],
                startObject: function(t, e) {
                    if (this.object && !1 === this.object.fromDeclaration) return this.object.name = t, void(this.object.fromDeclaration = !1 !== e);
                    var i = this.object && "function" == typeof this.object.currentMaterial ? this.object.currentMaterial() : void 0;
                    if (this.object && "function" == typeof this.object._finalize && this.object._finalize(!0), this.object = {
                            name: t || "",
                            fromDeclaration: !1 !== e,
                            geometry: {
                                vertices: [],
                                normals: [],
                                colors: [],
                                uvs: []
                            },
                            materials: [],
                            smooth: !0,
                            startMaterial: function(t, e) {
                                var i = this._finalize(!1);
                                i && (i.inherited || i.groupCount <= 0) && this.materials.splice(i.index, 1);
                                var o = {
                                    index: this.materials.length,
                                    name: t || "",
                                    mtllib: Array.isArray(e) && e.length > 0 ? e[e.length - 1] : "",
                                    smooth: void 0 !== i ? i.smooth : this.smooth,
                                    groupStart: void 0 !== i ? i.groupEnd : 0,
                                    groupEnd: -1,
                                    groupCount: -1,
                                    inherited: !1,
                                    clone: function(t) {
                                        var e = {
                                            index: "number" == typeof t ? t : this.index,
                                            name: this.name,
                                            mtllib: this.mtllib,
                                            smooth: this.smooth,
                                            groupStart: 0,
                                            groupEnd: -1,
                                            groupCount: -1,
                                            inherited: !1
                                        };
                                        return e.clone = this.clone.bind(e), e
                                    }
                                };
                                return this.materials.push(o), o
                            },
                            currentMaterial: function() {
                                if (this.materials.length > 0) return this.materials[this.materials.length - 1]
                            },
                            _finalize: function(t) {
                                var e = this.currentMaterial();
                                if (e && -1 === e.groupEnd && (e.groupEnd = this.geometry.vertices.length / 3, e.groupCount = e.groupEnd - e.groupStart, e.inherited = !1), t && this.materials.length > 1)
                                    for (var i = this.materials.length - 1; i >= 0; i--) this.materials[i].groupCount <= 0 && this.materials.splice(i, 1);
                                return t && 0 === this.materials.length && this.materials.push({
                                    name: "",
                                    smooth: this.smooth
                                }), e
                            }
                        }, i && i.name && "function" == typeof i.clone) {
                        var o = i.clone(0);
                        o.inherited = !0, this.object.materials.push(o)
                    }
                    this.objects.push(this.object)
                },
                finalize: function() {
                    this.object && "function" == typeof this.object._finalize && this.object._finalize(!0)
                },
                parseVertexIndex: function(t, e) {
                    var i = parseInt(t, 10);
                    return 3 * (i >= 0 ? i - 1 : i + e / 3)
                },
                parseNormalIndex: function(t, e) {
                    var i = parseInt(t, 10);
                    return 3 * (i >= 0 ? i - 1 : i + e / 3)
                },
                parseUVIndex: function(t, e) {
                    var i = parseInt(t, 10);
                    return 2 * (i >= 0 ? i - 1 : i + e / 2)
                },
                addVertex: function(t, e, i) {
                    var o = this.vertices,
                        n = this.object.geometry.vertices;
                    n.push(o[t + 0], o[t + 1], o[t + 2]), n.push(o[e + 0], o[e + 1], o[e + 2]), n.push(o[i + 0], o[i + 1], o[i + 2])
                },
                addVertexPoint: function(t) {
                    var e = this.vertices;
                    this.object.geometry.vertices.push(e[t + 0], e[t + 1], e[t + 2])
                },
                addVertexLine: function(t) {
                    var e = this.vertices;
                    this.object.geometry.vertices.push(e[t + 0], e[t + 1], e[t + 2])
                },
                addNormal: function(t, e, i) {
                    var o = this.normals,
                        n = this.object.geometry.normals;
                    n.push(o[t + 0], o[t + 1], o[t + 2]), n.push(o[e + 0], o[e + 1], o[e + 2]), n.push(o[i + 0], o[i + 1], o[i + 2])
                },
                addColor: function(t, e, i) {
                    var o = this.colors,
                        n = this.object.geometry.colors;
                    n.push(o[t + 0], o[t + 1], o[t + 2]), n.push(o[e + 0], o[e + 1], o[e + 2]), n.push(o[i + 0], o[i + 1], o[i + 2])
                },
                addUV: function(t, e, i) {
                    var o = this.uvs,
                        n = this.object.geometry.uvs;
                    n.push(o[t + 0], o[t + 1]), n.push(o[e + 0], o[e + 1]), n.push(o[i + 0], o[i + 1])
                },
                addUVLine: function(t) {
                    var e = this.uvs;
                    this.object.geometry.uvs.push(e[t + 0], e[t + 1])
                },
                addFace: function(t, e, i, o, n, s, r, a, h) {
                    var l = this.vertices.length,
                        c = this.parseVertexIndex(t, l),
                        u = this.parseVertexIndex(e, l),
                        d = this.parseVertexIndex(i, l);
                    if (this.addVertex(c, u, d), void 0 !== o && "" !== o) {
                        var p = this.uvs.length;
                        c = this.parseUVIndex(o, p), u = this.parseUVIndex(n, p), d = this.parseUVIndex(s, p), this.addUV(c, u, d)
                    }
                    if (void 0 !== r && "" !== r) {
                        var f = this.normals.length;
                        c = this.parseNormalIndex(r, f), u = r === a ? c : this.parseNormalIndex(a, f), d = r === h ? c : this.parseNormalIndex(h, f), this.addNormal(c, u, d)
                    }
                    this.colors.length > 0 && this.addColor(c, u, d)
                },
                addPointGeometry: function(t) {
                    this.object.geometry.type = "Points";
                    for (var e = this.vertices.length, i = 0, o = t.length; i < o; i++) this.addVertexPoint(this.parseVertexIndex(t[i], e))
                },
                addLineGeometry: function(t, e) {
                    this.object.geometry.type = "Line";
                    for (var i = this.vertices.length, o = this.uvs.length, n = 0, s = t.length; n < s; n++) this.addVertexLine(this.parseVertexIndex(t[n], i));
                    var r = 0;
                    for (s = e.length; r < s; r++) this.addUVLine(this.parseUVIndex(e[r], o))
                }
            };
            return t.startObject("", !1), t
        }

        function n(t) {
            this.manager = void 0 !== t ? t : THREE.Defaulta820Manager, this.materials = null
        }
        return n.prototype = {
            constructor: n,
            load: function(t, e, i, o) {
                var n = this,
                    s = new THREE.FileLoader(n.manager);
                s.setPath(this.path), s.load(t, (function(t) {
                    e(n.parse(t))
                }), i, o)
            },
            setPath: function(t) {
                return this.path = t, this
            },
            setMaterials: function(t) {
                return this.materials = t, this
            },
            parse: function(n) {
                console.time("OBJLoader");
                var s = new o; - 1 !== n.indexOf("\r\n") && (n = n.replace(/\r\n/g, "\n")), -1 !== n.indexOf("\\\n") && (n = n.replace(/\\\n/g, ""));
                for (var r = n.split("\n"), a = "", h = "", l = [], c = "function" == typeof "".trimLeft, u = 0, d = r.length; u < d; u++)
                    if (a = r[u], 0 !== (a = c ? a.trimLeft() : a.trim()).length && "#" !== (h = a.charAt(0)))
                        if ("v" === h) {
                            var p = a.split(/\s+/);
                            switch (p[0]) {
                                case "v":
                                    s.vertices.push(parseFloat(p[1]), parseFloat(p[2]), parseFloat(p[3])), 8 === p.length && s.colors.push(parseFloat(p[4]), parseFloat(p[5]), parseFloat(p[6]));
                                    break;
                                case "vn":
                                    s.normals.push(parseFloat(p[1]), parseFloat(p[2]), parseFloat(p[3]));
                                    break;
                                case "vt":
                                    s.uvs.push(parseFloat(p[1]), parseFloat(p[2]))
                            }
                        } else if ("f" === h) {
                    for (var f = a.substr(1).trim().split(/\s+/), g = [], m = 0, y = f.length; m < y; m++) {
                        var v = f[m];
                        if (v.length > 0) {
                            var w = v.split("/");
                            g.push(w)
                        }
                    }
                    var O = g[0];
                    for (m = 1, y = g.length - 1; m < y; m++) {
                        var E = g[m],
                            G = g[m + 1];
                        s.addFace(O[0], E[0], G[0], O[1], E[1], G[1], O[2], E[2], G[2])
                    }
                } else if ("l" === h) {
                    var b = a.substring(1).trim().split(" "),
                        k = [],
                        T = [];
                    if (-1 === a.indexOf("/")) k = b;
                    else
                        for (var S = 0, x = b.length; S < x; S++) {
                            var C = b[S].split("/");
                            "" !== C[0] && k.push(C[0]), "" !== C[1] && T.push(C[1])
                        }
                    s.addLineGeometry(k, T)
                } else if ("p" === h) {
                    var A = a.substr(1).trim().split(" ");
                    s.addPointGeometry(A)
                } else if (null !== (l = t.exec(a))) {
                    var R = (" " + l[0].substr(1).trim()).substr(1);
                    s.startObject(R)
                } else if (i.test(a)) s.object.startMaterial(a.substring(7).trim(), s.materialLibraries);
                else if (e.test(a)) s.materialLibraries.push(a.substring(7).trim());
                else {
                    if ("s" !== h) {
                        if ("\0" === a) continue;
                        throw Error('THREE.OBJLoader: Unexpected line: "' + a + '"')
                    }
                    if ((l = a.split(" ")).length > 1) {
                        var M = l[1].trim().toLowerCase();
                        s.object.smooth = "0" !== M && "off" !== M
                    } else s.object.smooth = !0;
                    (N = s.object.currentMaterial()) && (N.smooth = s.object.smooth)
                }
                s.finalize();
                var I = new THREE.Group;
                I.materialLibraries = [].concat(s.materialLibraries);
                for (u = 0, d = s.objects.length; u < d; u++) {
                    var L = s.objects[u],
                        z = L.geometry,
                        P = L.materials,
                        H = "Line" === z.type,
                        B = "Points" === z.type,
                        V = !1;
                    if (0 !== z.vertices.length) {
                        var F = new THREE.BufferGeometry;
                        F.setAttribute("position", new THREE.Float32BufferAttribute(z.vertices, 3)), z.normals.length > 0 ? F.setAttribute("normal", new THREE.Float32BufferAttribute(z.normals, 3)) : F.computeVertexNormals(), z.colors.length > 0 && (V = !0, F.setAttribute("color", new THREE.Float32BufferAttribute(z.colors, 3))), z.uvs.length > 0 && F.setAttribute("uv", new THREE.Float32BufferAttribute(z.uvs, 2));
                        for (var U, _ = [], D = 0, W = P.length; D < W; D++) {
                            var j = P[D],
                                N = void 0;
                            if (null !== this.materials)
                                if (N = this.materials.create(j.name), !H || !N || N instanceof THREE.LineBasicMaterial) {
                                    if (B && N && !(N instanceof THREE.PointsMaterial)) {
                                        var Y = new THREE.PointsMaterial({
                                            size: 10,
                                            sizeAttenuation: !1
                                        });
                                        THREE.Material.prototype.copy.call(Y, N), Y.color.copy(N.color), Y.map = N.map, Y.lights = !1, N = Y
                                    }
                                } else {
                                    var Z = new THREE.LineBasicMaterial;
                                    THREE.Material.prototype.copy.call(Z, N), Z.color.copy(N.color), Z.lights = !1, N = Z
                                } N || ((N = H ? new THREE.LineBasicMaterial : B ? new THREE.PointsMaterial({
                                size: 1,
                                sizeAttenuation: !1
                            }) : new THREE.MeshPhongMaterial).name = j.name), N.flatShading = !j.smooth, N.vertexColors = V ? THREE.VertexColors : THREE.NoColors, _.push(N)
                        }
                        if (_.length > 1) {
                            for (D = 0, W = P.length; D < W; D++) {
                                j = P[D];
                                F.addGroup(j.groupStart, j.groupCount, D)
                            }
                            U = H ? new THREE.a459(F, _) : B ? new THREE.Points(F, _) : new THREE.Mesh(F, _)
                        } else U = H ? new THREE.a459(F, _[0]) : B ? new THREE.Points(F, _[0]) : new THREE.Mesh(F, _[0]);
                        U.name = L.name, I.add(U)
                    }
                }
                return console.timeEnd("OBJLoader"), I
            }
        }, n
    }(), THREE.MTLLoader = function(t) {
        this.manager = void 0 !== t ? t : THREE.Defaulta820Manager
    }, THREE.MTLLoader.prototype = {
        constructor: THREE.MTLLoader,
        load: function(t, e, i, o) {
            var n = this,
                s = void 0 === this.path ? THREE.LoaderUtils.a826ctUrlBase(t) : this.path,
                r = new THREE.FileLoader(this.manager);
            r.setPath(this.path), r.load(t, (function(t) {
                e(n.parse(t, s))
            }), i, o)
        },
        setPath: function(t) {
            return this.path = t, this
        },
        setResourcePath: function(t) {
            return this.resourcePath = t, this
        },
        setTexturePath: function(t) {
            return console.warn("THREE.MTLLoader: .setTexturePath() has been renamed to .setResourcePath()."), this.setResourcePath(t)
        },
        setCrossOrigin: function(t) {
            return this.crossOrigin = t, this
        },
        setMaterialOptions: function(t) {
            return this.materialOptions = t, this
        },
        parse: function(t, e) {
            for (var i = t.split("\n"), o = {}, n = /\s+/, s = {}, r = 0; r < i.length; r++) {
                var a = i[r];
                if (0 !== (a = a.trim()).length && "#" !== a.charAt(0)) {
                    var h = a.indexOf(" "),
                        l = h >= 0 ? a.substring(0, h) : a;
                    l = l.toLowerCase();
                    var c = h >= 0 ? a.substring(h + 1) : "";
                    if (c = c.trim(), "newmtl" === l) o = {
                        name: c
                    }, s[c] = o;
                    else if ("ka" === l || "kd" === l || "ks" === l || "ke" === l) {
                        var u = c.split(n, 3);
                        o[l] = [parseFloat(u[0]), parseFloat(u[1]), parseFloat(u[2])]
                    } else o[l] = c
                }
            }
            var d = new THREE.MTLLoader.MaterialCreator(this.resourcePath || e, this.materialOptions);
            return d.setCrossOrigin(this.crossOrigin), d.setManager(this.manager), d.setMaterials(s), d
        }
    }, THREE.MTLLoader.MaterialCreator = function(t, e) {
        this.baseUrl = t || "", this.options = e, this.materialsInfo = {}, this.materials = {}, this.materialsArray = [], this.nameLookup = {}, this.side = this.options && this.options.side ? this.options.side : THREE.FrontSide, this.wrap = this.options && this.options.wrap ? this.options.wrap : THREE.RepeatWrapping
    }, THREE.MTLLoader.MaterialCreator.prototype = {
        constructor: THREE.MTLLoader.MaterialCreator,
        crossOrigin: "anonymous",
        setCrossOrigin: function(t) {
            return this.crossOrigin = t, this
        },
        setManager: function(t) {
            this.manager = t
        },
        setMaterials: function(t) {
            this.materialsInfo = this.convert(t), this.materials = {}, this.materialsArray = [], this.nameLookup = {}
        },
        convert: function(t) {
            if (!this.options) return t;
            var e = {};
            for (var i in t) {
                var o = t[i],
                    n = {};
                for (var s in e[i] = n, o) {
                    var r = !0,
                        a = o[s],
                        h = s.toLowerCase();
                    switch (h) {
                        case "kd":
                        case "ka":
                        case "ks":
                            this.options && this.options.normalizeRGB && (a = [a[0] / 255, a[1] / 255, a[2] / 255]), this.options && this.options.ignoreZeroRGBs && 0 === a[0] && 0 === a[1] && 0 === a[2] && (r = !1)
                    }
                    r && (n[h] = a)
                }
            }
            return e
        },
        preload: function() {
            for (var t in this.materialsInfo) this.create(t)
        },
        getIndex: function(t) {
            return this.nameLookup[t]
        },
        getAsArray: function() {
            var t = 0;
            for (var e in this.materialsInfo) this.materialsArray[t] = this.create(e), this.nameLookup[e] = t, t++;
            return this.materialsArray
        },
        create: function(t) {
            return void 0 === this.materials[t] && this.createMaterial_(t), this.materials[t]
        },
        createMaterial_: function(t) {
            var e = this,
                i = this.materialsInfo[t],
                o = {
                    name: t,
                    side: this.side
                };

            function n(t, i) {
                if (!o[t]) {
                    var n, s, r = e.getTextureParams(i, o),
                        a = e.loadTexture((n = e.baseUrl, "string" != typeof(s = r.url) || "" === s ? "" : /^https?:\/\//i.test(s) ? s : n + s));
                    a.repeat.copy(r.scale), a.offset.copy(r.offset), a.wrapS = e.wrap, a.wrapT = e.wrap, o[t] = a
                }
            }
            for (var s in i) {
                var r, a = i[s];
                if ("" !== a) switch (s.toLowerCase()) {
                    case "kd":
                        o.color = (new THREE.Color).fromArray(a);
                        break;
                    case "ks":
                        o.specular = (new THREE.Color).fromArray(a);
                        break;
                    case "ke":
                        o.emissive = (new THREE.Color).fromArray(a);
                        break;
                    case "map_kd":
                        n("map", a);
                        break;
                    case "map_ks":
                        n("specularMap", a);
                        break;
                    case "map_ke":
                        n("emissiveMap", a);
                        break;
                    case "norm":
                        n("normalMap", a);
                        break;
                    case "map_bump":
                    case "bump":
                        n("bumpMap", a);
                        break;
                    case "map_d":
                        n("alphaMap", a), o.transparent = !0;
                        break;
                    case "ns":
                        o.shininess = parseFloat(a);
                        break;
                    case "d":
                        (r = parseFloat(a)) < 1 && (o.opacity = r, o.transparent = !0);
                        break;
                    case "tr":
                        r = parseFloat(a), this.options && this.options.invertTrProperty && (r = 1 - r), r > 0 && (o.opacity = 1 - r, o.transparent = !0)
                }
            }
            return this.materials[t] = new THREE.MeshPhongMaterial(o), this.materials[t]
        },
        getTextureParams: function(t, e) {
            var i, o = {
                    scale: new THREE.Vector2(1, 1),
                    offset: new THREE.Vector2(0, 0)
                },
                n = t.split(/\s+/);
            return (i = n.indexOf("-bm")) >= 0 && (e.bumpScale = parseFloat(n[i + 1]), n.splice(i, 2)), (i = n.indexOf("-s")) >= 0 && (o.scale.set(parseFloat(n[i + 1]), parseFloat(n[i + 2])), n.splice(i, 4)), (i = n.indexOf("-o")) >= 0 && (o.offset.set(parseFloat(n[i + 1]), parseFloat(n[i + 2])), n.splice(i, 4)), o.url = n.join(" ").trim(), o
        },
        loadTexture: function(t, e, i, o, n) {
            var s, r = THREE.Loader.Handlers.get(t),
                a = void 0 !== this.manager ? this.manager : THREE.Defaulta820Manager;
            return null === r && (r = new THREE.TextureLoader(a)), r.setCrossOrigin && r.setCrossOrigin(this.crossOrigin), s = r.load(t, i, o, n), void 0 !== e && (s.mapping = e), s
        }
    };
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

function a97(t, e) {
    return e
}

function pascalTriangle(t, e) {
    for (var i = 1, o = 0; o < e; ++o) i *= (t - o) / (o + 1);
    return i
}

function clamp(t, e, i) {
    return t < e && (t = e), t > i && (t = i), t
}

function milliTimeToTimer(t) {
    var e, i = t / 1e3,
        o = Math.floor(i / 60);
    return e = (i = (i -= 60 * o).toString().split("."))[1] ? i[1] : 0, o < 10 && (o = "0" + o), (i = i[0]) < 10 && (i = "0" + i), e < 10 && (e = "0" + e), o + ":" + i + ":" + e[0].toString() + e[1].toString()
}
G.inherit = function(t, e) {
        var i = Object.create(t.prototype);
        return Object.getOwnPropertyNames(e).forEach((function(t) {
            var o = Object.getOwnPropertyDescriptor(e, t);
            void 0 !== o.get ? i.__defineGetter__(t, o.get) : i[t] = e[t], void 0 !== o.set && i.__defineSetter__(t, o.set)
        })), i
    }, G.pushArray = function(t, e) {
        e.forEach((function(t) {
            this.push(t)
        }), t)
    }, G.a512 = function(t) {
        return Math.round(t / 16.66)
    }, G.pad = function(t, e, i) {
        return i = i || "0", (t += "").length >= e ? t : Array(e - t.length + 1).join(i) + t
    }, G.logOnce = function(t, e) {
        !0 !== G.logOnce[t.toString()] && (G.logOnce[t.toString()] = !0, console.log(e))
    }, G.isFirefox = "undefined" != typeof InstallTrigger, G.isIFrame = function() {
        try {
            return window.self !== window.top
        } catch (t) {
            return !0
        }
    }(), G.isBlockSolid = function(t) {
        return t && "air" != t && "water" != t && "flowing_water" != t && "tallgrass" != t && "yellow_flower" != t && "red_flower" != t && "deadbush" != t && "red_mushroom" != t && "brown_mushroom" != t && "wheat" != t && "ladder" != t && "pumpkin_stem" != t && "melon_stem" != t && "vinea" != t && "vine" != t && "double_plant" != t && "sapling" != t && "lava" != t && "flowing_lava" != t && "slime" != t && "portal" != t
    }, G.rotateFromPoint = function(t, e, i, o, n) {
        (n = void 0 !== n && n) && t.parent.localToWorld(t.position), t.position.sub(e), t.position.applyAxisAngle(i, o), t.position.add(e), n && t.parent.worldToLocal(t.position), t.rotateOnAxis(i, o)
    }, G.lerp = function(t, e, i) {
        return t + i * (e - t)
    }, G.smoothLerp = function(t, e, i) {
        var o = t + G.smoothStep(i) * (e - t),
            n = t + i * (e - t);
        return console.log(t + "|" + e + "|" + i + "|" + G.smoothStep(i) + "|" + o + "|" + n), o
    }, G.lerpArr3 = function(t, e, i, o, n, s, r) {
        return [G.lerp(t, e, r), G.lerp(i, o, r), G.lerp(n, s, r)]
    }, G.lerpV3 = function(t, e, i) {
        var o = G.lerp(t.x, t.x, i),
            n = G.lerp(t.y, t.y, i),
            s = G.lerp(t.z, t.z, i);
        return new THREE.Vector3(o, n, s)
    }, G.smoothLerpV3 = function(t, e, i) {
        var o = G.smoothLerp(t.x, t.x, i),
            n = G.smoothLerp(t.y, t.y, i),
            s = G.smoothLerp(t.z, t.z, i);
        return new THREE.Vector3(o, n, s)
    }, G.a488 = function(t, e, i) {
        return t + (((e - t) % THREE.Math.degToRad(360) + THREE.Math.degToRad(540)) % THREE.Math.degToRad(360) - THREE.Math.degToRad(180)) * i
    }, G.rotateXWorld = function(t, e) {
        t.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), THREE.Math.degToRad(e))
    }, G.rotateYWorld = function(t, e) {
        t.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), THREE.Math.degToRad(e))
    }, G.rotateZWorld = function(t, e) {
        t.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), THREE.Math.degToRad(e))
    }, G.time = function() {
        return Date.now()
    }, G.randInt = function(t, e) {
        return Math.floor(Math.random() * (e - t + 1) + t)
    }, G.randFloat = function(t, e, i) {
        return parseFloat(Math.min(t + Math.random() * (e - t), e).toFixed(i))
    }, G.isInt = function(t) {
        return t % 1 == 0
    }, G.smoothStep = function(t) {
        return t * t * 3 - t * t * t * 2
    }, G.sameVector = function(t, e) {
        return t.x == e.x && t.y == e.y && t.z == e.z
    }, G.intersectAABB = function(t, e, i, o, n, s, r, a, h, l, c, u) {
        return t <= a && e >= r && i <= l && o >= h && n <= u && s >= c
    }, G.timeToTimer = function(t) {
        var e = t,
            i = Math.floor(e / 60);
        return e -= 60 * i, i < 10 && (i = "0" + i), (e = (e = e.toString().split("."))[0]) < 10 && (e = "0" + e), i + ":" + e
    }, G.worldObjToScreenCoords = function(t, e, i, o) {
        let n = new THREE.Vector3(0, 0, 0);
        n.project(e);
        let s = i / 2,
            r = o / 2;
        return n.x = n.x * s + s, n.y = -n.y * r + r, n.z = 0, n
    }, G.worldPosToScreenCoords = function(t, e, i, o, n) {
        n || (n = 0);
        var s = t.clone();
        s.project(e);
        var r = !1;
        s.z > 1 && (r = !0, s.x *= -1, s.y *= -1);
        let a = i / 2,
            h = o / 2;
        var l;
        if (s.x = s.x * a + a, s.y = -s.y * h + h, r || (s.x < 0 || s.x > i || s.y < 0 || s.y > o) && (r = !0), r) {
            var c = new THREE.Vector3(a, h, 0);
            s.x -= c.x, s.y -= c.y;
            var u = Math.atan2(s.y, s.x),
                d = Math.cos(u -= 2 * Math.PI / 360 * 90),
                p = -Math.sin(u);
            s.x = c.x + 150 * p, s.y = c.y + 150 * d;
            var f = d / p;
            d > 0 ? (s.x = c.y / f, s.y = c.y) : (s.x = -c.y / f, s.y = -c.y), s.x > c.x ? (s.x = c.x, s.y = c.x * f) : s.x < -c.x && (s.x = -c.x, s.y = -c.x * f), s.x += c.x, s.y += c.y
        }
        return l = "", s.y <= n ? (s.y = n, l = "top") : s.y >= o - n && (s.y = o - n, l = "bottom"), s.x <= n ? (s.x = n, l += "left") : s.x >= i - n && (s.x = i - n, l += "right"), "" == l && (l = "center"), {
            orientation: l,
            angle: u,
            coords: s
        }
    }, G.gunClip = function(t, e) {
        var i = 0,
            o = 0;
        return t > 0 && (0 == (i = t % e) && (i = e), o = (t - i) / e), {
            totalClips: o,
            totalInClip: i
        }
    }, G.shortToIdMeta = function(t) {
        for (var e = 0;;) {
            if (t < 256) return {
                id: e,
                meta: t
            };
            t -= 256, e++
        }
    }, G.Base = function() {}, G.Base.prototype = {
        constructor: G.Base,
        init: function() {
            var t = this;
            this.renderer = new THREE.WebGLRenderer({
                antialias: this.antialias
            }), this.renderer.setSize(window.innerWidth, window.innerHeight), this.renderer.domElement.id = "game-canvas", this.camera = new THREE.PerspectiveCamera(this.cameraFov, window.innerWidth / window.innerHeight, this.cameraNear, this.cameraFar), window.addEventListener("resize", (function() {
                t.onResize()
            }), !1), this.onResize(), document.getElementById("gameContainer").appendChild(this.renderer.domElement), this.load()
        },
        load: function() {
            var t = this;
            MainLoop.setUpdate(t.doUpdate).setDraw(t.doDraw).setEnd(t.doEnd).start()
        },
        doEnd: function(t, e) {
            if (e) MainLoop.resetFrameDelta()
        },
        doUpdate: function() {
            GAME.update()
        },
        doDraw: function() {
            GAME.draw()
        },
        update: function() {},
        onResize: function() {
            this.camera.aspect = window.innerWidth / window.innerHeight, this.camera.updateProjectionMatrix(), this.renderer.setSize(window.innerWidth, window.innerHeight)
        }
    }, G.a691 = function(t) {
        this.id = G.a396, this.a865 = t, this.a386 = [], this.points = [], this.boundingBox = {}, this.triangles = !1, this.subBoundingBox = !1, this.subTriangles = !1, this.a675 = this.size, this.points = [new THREE.Vector2, new THREE.Vector2], this.a647 = !1, this.a655 = !1, this.a690 = !1, this.position = new THREE.Vector3(0, 0, 0), this.size = new THREE.Vector3(2.4, 4, 2.4), this.offset = new THREE.Vector3(0, 0, 0), this.box2 = new THREE.Box2, this.a699 = new THREE.Vector2, this.a700 = new THREE.Vector2, this.newGridMin = new THREE.Vector2, this.newGridMax = new THREE.Vector2, G.a396++
    }, G.a691.prototype = {
        constructor: G.a691,
        init: function() {},
        update: function() {},
        a400: function(t) {},
        a642: function(t) {
            t ? this.a865.a642[this.id] = !0 : delete this.a865.a642[this.id]
        },
        a666: function(t) {
            this.points[0].set(t.x + this.size.x, t.z + this.size.z), this.points[1].set(t.x - this.size.x, t.z - this.size.z), this.a401(this.points), this.a690 = !this.position.equals(t), this.position.copy(t)
        },
        a407: function(t) {
            this.triangles = t
        },
        a402: function(t) {
            for (var e = this.triangles, i = 0; i < e.length; i += 3) e[i] += t.x, e[i + 1] += t.y, e[i + 2] += t.z
        },
        a408: function() {
            this.boundingBox.minX = 1 / 0, this.boundingBox.minY = 1 / 0, this.boundingBox.minZ = 1 / 0, this.boundingBox.maxX = -1 / 0, this.boundingBox.maxY = -1 / 0, this.boundingBox.maxZ = -1 / 0;
            for (var t = 0, e = this.triangles.length; t < e; t += 3) {
                var i = this.triangles[t],
                    o = this.triangles[t + 1],
                    n = this.triangles[t + 2];
                i < this.boundingBox.minX && (this.boundingBox.minX = i), o < this.boundingBox.minY && (this.boundingBox.minY = o), n < this.boundingBox.minZ && (this.boundingBox.minZ = n), i > this.boundingBox.maxX && (this.boundingBox.maxX = i), o > this.boundingBox.maxY && (this.boundingBox.maxY = o), n > this.boundingBox.maxZ && (this.boundingBox.maxZ = n)
            }
        },
        updateSubBoundingBoxesFromTriangles: function() {
            this.triangles = !1, this.subBoundingBox = Array(this.subTriangles.length);
            for (var t = 0; t < this.subTriangles.length; t++) {
                this.subBoundingBox[t] = {}, this.subBoundingBox[t].minX = 1 / 0, this.subBoundingBox[t].minY = 1 / 0, this.subBoundingBox[t].minZ = 1 / 0, this.subBoundingBox[t].maxX = -1 / 0, this.subBoundingBox[t].maxY = -1 / 0, this.subBoundingBox[t].maxZ = -1 / 0;
                for (var e = 0, i = this.subTriangles[t].length; e < i; e += 3) {
                    var o = this.subTriangles[t][e],
                        n = this.subTriangles[t][e + 1],
                        s = this.subTriangles[t][e + 2];
                    o < this.subBoundingBox[t].minX && (this.subBoundingBox[t].minX = o), n < this.subBoundingBox[t].minY && (this.subBoundingBox[t].minY = n), s < this.subBoundingBox[t].minZ && (this.subBoundingBox[t].minZ = s), o > this.subBoundingBox[t].maxX && (this.subBoundingBox[t].maxX = o), n > this.subBoundingBox[t].maxY && (this.subBoundingBox[t].maxY = n), s > this.subBoundingBox[t].maxZ && (this.subBoundingBox[t].maxZ = s)
                }
            }
        },
        intersectBox: function(t, e, i, o, n, s) {
            return !(this.boundingBox.maxX < t || this.boundingBox.minX > e || this.boundingBox.maxY < i || this.boundingBox.minY > o || this.boundingBox.maxZ < n || this.boundingBox.minZ > s)
        },
        intersectSubBox: function(t, e, i, o, n, s, r) {
            return !(this.subBoundingBox[t].maxX < e || this.subBoundingBox[t].minX > i || this.subBoundingBox[t].maxY < o || this.subBoundingBox[t].minY > n || this.subBoundingBox[t].maxZ < s || this.subBoundingBox[t].minZ > r)
        },
        a401: function(t) {
            if (this.box2.setFromPoints(t), this.newGridMin.copy(this.box2.min), this.newGridMin.x = Math.floor(this.newGridMin.x / this.a865.a698), this.newGridMin.y = Math.floor(this.newGridMin.y / this.a865.a698), this.newGridMax.copy(this.box2.max), this.newGridMax.x = Math.floor(this.newGridMax.x / this.a865.a698), this.newGridMax.y = Math.floor(this.newGridMax.y / this.a865.a698), this.newGridMin.x = G.a785.clamp(this.newGridMin.x, 0, this.a865.width - 1), this.newGridMin.y = G.a785.clamp(this.newGridMin.y, 0, this.a865.height - 1), this.newGridMax.x = G.a785.clamp(this.newGridMax.x, 0, this.a865.width - 1), this.newGridMax.y = G.a785.clamp(this.newGridMax.y, 0, this.a865.height - 1), !this.a699.equals(this.newGridMin) || !this.a700.equals(this.newGridMax)) {
                for (var e = 0; e < this.a386.length; e++) {
                    var i = this.a386[e],
                        o = i.children.indexOf(this); - 1 != o && i.children.splice(o, 1)
                }
                this.a386.length = 0
            }
            for (e = this.newGridMin.y; e <= this.newGridMax.y; e++)
                for (var n = this.newGridMin.x; n <= this.newGridMax.x; n++) this.a865.cells[e][n].children.push(this), this.a386.push(this.a865.cells[e][n])
        },
        a409: function() {
            for (var t = 0; t < this.a386.length; t++) {
                var e = this.a386[t],
                    i = e.children.indexOf(this); - 1 != i && e.children.splice(i, 1)
            }
            this.a386.length = 0
        },
        a646: function() {},
        a404: function() {},
        a405: function() {},
        remove: function() {
            this.a647 = !0, this.a409(), delete this.a865.a642[this.id]
        }
    }, G.a396 = 0, G.Canvas2d = function(t) {
        this.canvasId = "canvas2d", this.hideOnStart = void 0 !== t && t, this.minWidth = 800, this.minHeight = 600, this.alpha = 1, this.redrawOnResize = !1
    }, G.Canvas2d.prototype = {
        constructor: G.Canvas2d,
        init: function() {
            var t = this,
                e = document.createElement("canvas");
            e.width = window.innerWidth, e.height = window.innerHeight, e.style.backgroundColor = "rgba(0, 0, 0, " + this.alpha + ")", e.id = this.canvasId, this.screenCanvas = e, this.hideOnStart && this.hide(), document.getElementById("gameContainer").appendChild(this.screenCanvas);
            var i = e.getContext("2d");
            i.globalCompositeOperation = "source-over", i.save(), this.screenCtx = i;
            var o = document.createElement("canvas");
            o.width = window.innerWidth, o.height = window.innerHeight, o.style.backgroundColor = "rgba(0, 0, 0, 1)", this.bufferCanvas = o;
            var n = o.getContext("2d");
            n.globalCompositeOperation = "source-over", n.save(), this.bufferCtx = n, $(window).on("resize." + this.canvasId, (function() {
                t.onResize()
            })), this.onResize()
        },
        show: function() {
            this.screenCanvas.style.display = ""
        },
        hide: function() {
            this.screenCanvas.style.display = "none"
        },
        clear: function() {
            this.bufferCtx.clearRect(0, 0, this.bufferCanvas.width, this.bufferCanvas.height)
        },
        flip: function() {
            this.screenCtx.clearRect(0, 0, this.screenCanvas.width, this.screenCanvas.height), this.screenCtx.drawImage(this.bufferCanvas, 0, 0), this.bufferCtx.globalAlpha = 1
        },
        line: function(t, e, i, o) {
            i = void 0 !== i ? i : "#fff", o = o || 3, this.bufferCtx.save(), this.bufferCtx.strokeStyle = i, this.bufferCtx.lineWidth = o, this.bufferCtx.beginPath(), this.bufferCtx.moveTo(t[0], t[1]), this.bufferCtx.lineTo(e[0], e[1]), this.bufferCtx.closePath(), this.bufferCtx.stroke(), this.bufferCtx.restore()
        },
        box: function(t, e, i, o) {
            i = void 0 !== i ? i : "#fff", o = o || 3, this.bufferCtx.save(), this.bufferCtx.strokeStyle = i, this.bufferCtx.lineWidth = o, this.bufferCtx.beginPath(), this.bufferCtx.moveTo(t[0], t[1]), this.bufferCtx.lineTo(e[0], t[1]), this.bufferCtx.lineTo(e[0], e[1]), this.bufferCtx.lineTo(t[0], e[1]), this.bufferCtx.closePath(), this.bufferCtx.stroke(), this.bufferCtx.restore()
        },
        boxFill: function(t, e, i) {
            i = void 0 !== i ? i : "#fff";
            var o = Math.min(t[0], e[0]),
                n = Math.min(t[1], e[1]),
                s = Math.max(t[0], e[0]) - o,
                r = Math.max(t[1], e[1]) - n;
            this.bufferCtx.save(), this.bufferCtx.fillStyle = i, this.bufferCtx.fillRect(o, n, s, r), this.bufferCtx.restore()
        },
        _roundedBox: function(t, e, i, o, n, s) {
            n = void 0 !== n ? n : "#fff", s = s || 3;
            var r = Math.min(t[0], e[0]),
                a = Math.min(t[1], e[1]),
                h = Math.max(t[0], e[0]),
                l = Math.max(t[1], e[1]);
            this.bufferCtx.save(), o ? this.bufferCtx.fillStyle = n : (this.bufferCtx.strokeStyle = n, this.bufferCtx.lineWidth = s), this.bufferCtx.beginPath(), this.bufferCtx.moveTo(r, a + i), this.bufferCtx.lineTo(r, l - i), this.bufferCtx.quadraticCurveTo(r, l, r + i, l), this.bufferCtx.lineTo(h - i, l), this.bufferCtx.quadraticCurveTo(h, l, h, l - i), this.bufferCtx.lineTo(h, a + i), this.bufferCtx.quadraticCurveTo(h, a, h - i, a), this.bufferCtx.lineTo(r + i, a), this.bufferCtx.quadraticCurveTo(r, a, r, a + i), this.bufferCtx.closePath(), o ? this.bufferCtx.fill() : this.bufferCtx.stroke(), this.bufferCtx.restore()
        },
        roundedBox: function(t, e, i, o, n) {
            this._roundedBox(t, e, i, !1, o, n)
        },
        a449: function(t, e, i, o) {
            this._roundedBox(t, e, i, !0, o)
        },
        polygon: function(t, e, i) {
            e = void 0 !== e ? e : "#fff", i = i || 3, this.bufferCtx.save(), this.bufferCtx.strokeStyle = e, this.bufferCtx.lineWidth = i, this.bufferCtx.beginPath(), this.bufferCtx.moveTo(t[0][0], t[0][1]);
            for (var o = 1; o < t.length; o++) this.bufferCtx.lineTo(t[o][0], t[o][1]);
            this.bufferCtx.closePath(), this.bufferCtx.stroke(), this.bufferCtx.restore()
        },
        polygonFill: function(t, e) {
            e = void 0 !== e ? e : "#fff", this.bufferCtx.save(), this.bufferCtx.fillStyle = e, this.bufferCtx.beginPath(), this.bufferCtx.moveTo(t[0][0], t[0][1]);
            for (var i = 1; i < t.length; i++) this.bufferCtx.lineTo(t[i][0], t[i][1]);
            this.bufferCtx.closePath(), this.bufferCtx.fill(), this.bufferCtx.restore()
        },
        circle: function(t, e, i, o) {
            i = void 0 !== i ? i : "#fff", o = o || 3, this.bufferCtx.save(), this.bufferCtx.beginPath(), this.bufferCtx.arc(t[0], t[1], e, 0, 2 * Math.PI), this.bufferCtx.strokeStyle = i, this.bufferCtx.lineWidth = o, this.bufferCtx.stroke(), this.bufferCtx.restore()
        },
        circleFill: function(t, e, i) {
            i = void 0 !== i ? i : "#fff", this.bufferCtx.save(), this.bufferCtx.beginPath(), this.bufferCtx.arc(t[0], t[1], e, 0, 2 * Math.PI), this.bufferCtx.fillStyle = i, this.bufferCtx.fill(), this.bufferCtx.restore()
        },
        text: function(t, e, i, o, n, s, r, a, h) {
            if (a) var l = e.join("");
            else l = e;
            this.bufferCtx.save(), this.bufferCtx.textBaseline = n, this.bufferCtx.textAlign = "left", this.bufferCtx.font = o + "px " + r;
            var c = 0;
            if ("left" != s) {
                var u = this.bufferCtx.measureText(l).width;
                c = "center" == s ? -u / 2 : -u
            }
            if (a)
                for (var d = 0, p = 0; p < e.length; p++) this.bufferCtx.fillStyle = i[p], this.bufferCtx.fillText(e[p], t[0] + d + c, t[1], h), d += this.bufferCtx.measureText(e[p]).width;
            else this.bufferCtx.fillStyle = i, this.bufferCtx.fillText(e, t[0] + c, t[1], h);
            this.bufferCtx.restore()
        },
        drawImage: function(t, e, i, o, n) {
            n && (this.bufferCtx.translate(this.screenCanvas.width / 2, this.screenCanvas.height / 2), this.bufferCtx.rotate(n)), o && (this.bufferCtx.globalAlpha = o), this.bufferCtx.imageSmoothingEnabled = !1, this.bufferCtx.drawImage(e, t[0], t[1], i[0], i[1]), n && (this.bufferCtx.rotate(-n), this.bufferCtx.translate(-this.screenCanvas.width / 2, -this.screenCanvas.height / 2))
        },
        a451: function(t, e, i, o) {
            this.bufferCtx.drawImage(e, i[0], i[1], o[0], o[1], t[0], t[1], o[0], o[1])
        },
        getTextWidth: function(t, e, i) {
            e = void 0 !== e ? e : 16, i = i || "'Lucida Console', Monaco, monospace", this.bufferCtx.save(), this.bufferCtx.font = e + "px '" + i + "'";
            var o = this.bufferCtx.measureText(t).width;
            return this.bufferCtx.restore(), o
        },
        onResize: function() {
            var t;
            this.redrawOnResize && (t = this.clone()), this.screenCanvas.width = Math.max(window.innerWidth, this.minWidth), this.screenCanvas.height = Math.max(window.innerHeight, this.minHeight), this.bufferCanvas.width = Math.max(window.innerWidth, this.minWidth), this.bufferCanvas.height = Math.max(window.innerHeight, this.minHeight), $(this.screenCanvas).css("width", window.innerWidth + "px").css("height", window.innerHeight + "px"), this.redrawOnResize && this.screenCtx.drawImage(t, 0, 0)
        },
        clone: function() {
            var t = document.createElement("canvas");
            t.width = this.screenCanvas.width, t.height = this.screenCanvas.height;
            var e = t.getContext("2d");
            return e.globalCompositeOperation = "source-over", e.save(), e.drawImage(this.screenCanvas, 0, 0), t
        },
        dispose: function() {
            $(window).off("resize." + this.canvasId), $("#" + this.canvasId).remove()
        }
    },
    function() {
        var t, e, i, o, n, s, r, a, h, l;
        THREE.Vector3.prototype.a663 = function(t) {
            var e = t || new THREE.Vector2;
            return e.x = this.x, e.y = this.z, e
        }, THREE.Vector3.prototype.toString = function(t) {
            return t = t || 0, ["[", this.x.toFixed(t), this.y.toFixed(t), this.z.toFixed(t), "]"].join(" ")
        }, THREE.Vector3.prototype.equalsEpsilon = function(t, e) {
            return e = e || 1e-4, Math.abs(t.x - this.x) < e && Math.abs(t.y - this.y) < e && Math.abs(t.z - this.z) < e
        }, THREE.Vector3.prototype.minCoord = function() {
            return Math.min(Math.min(this.x, this.y), Math.min(this.y, this.z))
        }, THREE.Vector3.prototype.maxCoord = function() {
            return Math.max(Math.max(this.x, this.y), Math.max(this.y, this.z))
        }, THREE.Box3.prototype.a463Swept = (t = new THREE.Vector3, e = new THREE.Vector3, i = new THREE.Box3, o = new THREE.Vector3, n = new THREE.Vector3, s = new THREE.Vector3, r = new THREE.Vector3, a = new THREE.Vector3, h = new THREE.Vector3, l = new THREE.Vector3, function(c, u, d, p, f) {
            if (o.copy(u).sub(c), t.copy(this.min).add(o), e.copy(this.max).add(o), i.setFromPoints([this.min, this.max, t, e]), !i.intersectsBox(d)) return !1;
            if (this.intersectsBox(d)) return f.copy(c), !0;
            if (i.min.copy(this.min).add(o), i.max.copy(this.max).add(o), i.intersectsBox(d)) return f.copy(u), !0;
            h.copy(this.max).sub(this.min), l.copy(d.max).sub(d.min), o.x > 0 ? (n.x = d.min.x - (this.min.x + h.x), s.x = d.min.x + l.x - this.min.x) : (n.x = d.min.x + l.x - this.min.x, s.x = d.min.x - (this.min.x + h.x)), o.y > 0 ? (n.y = d.min.y - (this.min.y + h.y), s.y = d.min.y + l.y - this.min.y) : (n.y = d.min.y + l.y - this.min.y, s.y = d.min.y - (this.min.y + h.y)), o.z > 0 ? (n.z = d.min.z - (this.min.z + h.z), s.z = d.min.z + l.z - this.min.z) : (n.z = d.min.z + l.z - this.min.z, s.z = d.min.z - (this.min.z + h.z)), 0 === o.x ? (r.x = -1 / 0, a.x = 1 / 0) : (r.x = n.x / o.x, a.x = s.x / o.x), 0 === o.y ? (r.y = -1 / 0, a.y = 1 / 0) : (r.y = n.y / o.y, a.y = s.y / o.y), 0 === o.z ? (r.z = -1 / 0, a.z = 1 / 0) : (r.z = n.z / o.z, a.z = s.z / o.z);
            var g = r.maxCoord();
            return !(g > a.minCoord() || r.x < 0 && r.y < 0 && r.z < 0 || r.x > 1 || r.y > 1 || r.z > 1 || (o.multiplyScalar(g), f.copy(c).add(o), 0))
        }), THREE.Ray.prototype.a337 = function(t, e) {
            var i = e || new THREE.Vector3;
            return t.containsPoint(this.origin) ? i.copy(this.origin) : this.intersectBox(t, i), i
        }, THREE.Vector2.prototype.toString = function(t) {
            return t = t || 0, ["[", this.x.toFixed(t), this.y.toFixed(t), "]"].join(" ")
        }, THREE.Vector2.prototype.equalsEpsilon = function(t, e) {
            return e = e || 1e-4, Math.abs(t.x - this.x) < e && Math.abs(t.y - this.y) < e
        }, THREE.Vector2.prototype.minCoord = function() {
            return Math.min(this.x, this.y)
        }, THREE.Vector2.prototype.maxCoord = function() {
            return Math.max(this.x, this.y)
        }, THREE.Box2.prototype.a463Swept = function() {
            var t = new THREE.Vector2,
                e = new THREE.Vector2,
                i = new THREE.Box2,
                o = new THREE.Vector2,
                n = new THREE.Vector2,
                s = new THREE.Vector2,
                r = new THREE.Vector2,
                a = new THREE.Vector2,
                h = new THREE.Vector2,
                l = new THREE.Vector2;
            return function(c, u, d, p, f) {
                if (o.copy(u).sub(c), t.copy(this.min).add(o), e.copy(this.max).add(o), i.setFromPoints([this.min, this.max, t, e]), !i.a463(d)) return !1;
                if (this.a463(d)) return f.copy(c), !0;
                if (i.min.copy(this.min).add(o), i.max.copy(this.max).add(o), i.a463(d)) return f.copy(u), !0;
                h.copy(this.max).sub(this.min), l.copy(d.max).sub(d.min), o.x > 0 ? (n.x = d.min.x - (this.min.x + h.x), s.x = d.min.x + l.x - this.min.x) : (n.x = d.min.x + l.x - this.min.x, s.x = d.min.x - (this.min.x + h.x)), o.y > 0 ? (n.y = d.min.y - (this.min.y + h.y), s.y = d.min.y + l.y - this.min.y) : (n.y = d.min.y + l.y - this.min.y, s.y = d.min.y - (this.min.y + h.y)), 0 === o.x ? (r.x = -1 / 0, a.x = 1 / 0) : (r.x = n.x / o.x, a.x = s.x / o.x), 0 === o.y ? (r.y = -1 / 0, a.y = 1 / 0) : (r.y = n.y / o.y, a.y = s.y / o.y);
                var g = r.maxCoord();
                return !(g > a.minCoord() || r.x < 0 && r.y < 0 || r.x > 1 || r.y > 1) && (o.multiplyScalar(g), f.copy(c).add(o), !0)
            }
        }()
    }(), G.a783 = {
        a415: [],
        a416: !1,
        a417: !1,
        a418: !1,
        a709: 0,
        a710: 0,
        a419: 1,
        a420: 1,
        a421: [],
        ctrl: !1,
        shift: !1,
        alt: !1,
        a422: [],
        a423: !1,
        init: function() {
            var t = this;
            $(document).on("contextmenu", (function() {
                return !1
            })), $(document).keydown((function(e) {
                if (t.a415[e.keyCode] = !0, t.ctrl = e.ctrlKey, t.alt = e.altKey, t.shift = e.shiftKey, 9 == e.keyCode || 65 == e.keyCode && e.ctrlKey || 90 == e.keyCode && e.ctrlKey || 71 == e.keyCode && e.ctrlKey || 189 == e.keyCode && e.ctrlKey || 187 == e.keyCode && e.ctrlKey || 48 == e.keyCode && e.ctrlKey) return !1
            })), $(document).keyup((function(e) {
                t.a415[e.keyCode] = !1, t.ctrl = e.ctrlKey, t.alt = e.altKey, t.shift = e.shiftKey
            })), $(document).mousedown((function(e) {
                1 == e.which && (t.a416 = !0), 2 == e.which && (t.a417 = !0), 3 == e.which && (t.a418 = !0)
            })), $(document).mouseup((function(e) {
                1 == e.which && (t.a416 = !1), 2 == e.which && (t.a417 = !1), 3 == e.which && (t.a418 = !1)
            })), $(document).mousemove((function(e) {
                t.a709 = e.pageX * t.a419, t.a710 = e.pageY * t.a420
            })), document.addEventListener("mousewheel", (function(e) {
                t.a421.push(e.a424)
            }), !1), document.addEventListener("DOMMouseScroll", (function(e) {
                t.a421.push(-1 * e.detail)
            }), !1)
        },
        a425: function(t) {
            return !this.a415[t]
        },
        a426: function(t, e) {
            return e || this.a415[t] && (-1 == this.a422.indexOf(t) && this.a422.push(t), this.a423 = !0), this.a415[t]
        },
        a428: function() {
            if (this.a422.length > 0) {
                for (var t = 0, e = 0; e < this.a422.length; e++) {
                    if (!this.a425(this.a422[e])) return;
                    t++
                }
                t == this.a422.length && (this.a423 = !1)
            }
        }
    }, G.a783.init(), G.a785 = {
        clamp: function(t, e, i) {
            return t < e && (t = e), t > i && (t = i), t
        },
        getConvexHullPoints: function(t) {
            var e = function(t, e, i) {
                    return (e.x - t.x) * (i.y - t.y) - (e.y - t.y) * (i.x - t.x)
                },
                i = t.length,
                o = 0,
                n = [];
            t.sort((function(t, e) {
                return t.x == e.x ? t.y - e.y : t.x - e.x
            }));
            for (var s = 0; s < i; s++) {
                for (; o >= 2 && e(n[o - 2], n[o - 1], t[s]) <= 0;) o--;
                n[o++] = t[s]
            }
            var r = o + 1;
            for (s = i - 2; s >= 0; s--) {
                for (; o >= r && e(n[o - 2], n[o - 1], t[s]) <= 0;) o--;
                n[o++] = t[s]
            }
            return n.length = o - 1, n
        },
        pointInTriangle: function(t, e, i, o) {
            return this.getTriangleBarycentricCoordinates(t, e, i, o).inTriangle
        },
        getTriangleBarycentricCoordinates: function(t, e, i, o) {
            var n = (new THREE.Vector2).subVectors(o, e),
                s = (new THREE.Vector2).subVectors(i, e),
                r = (new THREE.Vector2).subVectors(t, e),
                a = n.dot(n),
                h = n.dot(s),
                l = n.dot(r),
                c = s.dot(s),
                u = s.dot(r),
                d = 1 / (a * c - h * h),
                p = (c * l - h * u) * d,
                f = (a * u - h * l) * d;
            return {
                u: p,
                v: f,
                inTriangle: p >= 0 && f >= 0 && p + f < 1
            }
        },
        vec2Rotate: function(t, e) {
            var i = Math.sin(Math.PI / 180 * e),
                o = Math.cos(Math.PI / 180 * e),
                n = t.x * o - t.y * i,
                s = t.x * i + t.y * o;
            t.x = n, t.y = s
        },
        vec2RotateRadians: function(t, e) {
            var i = Math.sin(e),
                o = Math.cos(e),
                n = t.x * o - t.y * i,
                s = t.x * i + t.y * o;
            t.x = n, t.y = s
        },
        vec2Angle: function(t, e) {
            return -Math.atan2(e.y - t.y, e.x - t.x) * (180 / Math.PI) * 2
        },
        vec2AngleRadians: function(t, e) {
            return 2 * -Math.atan2(e.y - t.y, e.x - t.x)
        },
        a505: function(t, e) {
            return Math.atan2(t.y, t.x) - Math.atan2(e.y, e.x)
        },
        vec2Normal: function(t, e, i) {
            var o = i || new THREE.Vector2,
                n = e.x - t.x,
                s = e.y - t.y;
            return o.set(s, -n).normalize(), o
        },
        vec2PointSide: function(t, e, i) {
            return (e.x - t.x) * (i.y - t.y) - (e.y - t.y) * (i.x - t.x) > 0
        }
    }, G.SmoothNumber = function(t, e) {
        this.value = t, this.targetValue = t, this.a676 = e
    }, G.SmoothNumber.prototype = {
        setTargetValue: function(t) {
            this.targetValue = t
        },
        update: function() {
            this.value < this.targetValue && (this.value += this.a676, this.value > this.targetValue && (this.value = this.targetValue)), this.value > this.targetValue && (this.value -= this.a676, this.value < this.targetValue && (this.value = this.targetValue))
        }
    }, G.SmoothVector3 = function(t, e, i, o) {
        THREE.Vector3.call(this, t, e, i), this.targetValue = this.clone(), this.a676 = void 0 !== o ? o : .1, this.color = new THREE.Color
    }, G.SmoothVector3.prototype = G.inherit(THREE.Vector3, {
        setTargetValue: function(t) {
            this.targetValue = t.clone()
        },
        update: function() {
            this.updateProperty("x"), this.updateProperty("y"), this.updateProperty("z"), this.updateColor()
        },
        updateColor: function() {
            this.color.r = this.x, this.color.g = this.y, this.color.b = this.z
        },
        updateProperty: function(t) {
            this[t] < this.targetValue[t] && (this[t] += this.a676, this[t] > this.targetValue[t] && (this[t] = this.targetValue[t])), this[t] > this.targetValue[t] && (this[t] -= this.a676, this[t] < this.targetValue[t] && (this[t] = this.targetValue[t]))
        }
    }), G.a786 = function(t) {
        this.keybinds = t, this.enabled = !0, this.onModifyingKeybindStart = function() {}, this.onModifyingKeybindStop = function() {}
    }, G.a786.prototype = {
        init: function() {
            var t = this;
            $(document).on("keydown.keybindKeyDown", (function(e) {
                if (t.enabled) {
                    var i = _.find(t.keybinds, {
                        code: e.keyCode
                    });
                    i && (i.a730 ? i.justPressed = !1 : i.justPressed = !0, i.a730 = !0, e.preventDefault())
                }
            })), $(document).on("keyup.keybindKeyU", (function(e) {
                if (t.enabled) {
                    var i = _.find(t.keybinds, {
                        code: e.keyCode
                    });
                    i && (i.a730 = !1, e.preventDefault())
                }
            })), $(document).on("mousedown.keybindMouseDown", (function(e) {
                if (t.enabled) {
                    var i = _.find(t.keybinds, {
                        mouse: !0,
                        button: e.which
                    });
                    i && (i.a730 = !0)
                }
            })), $(document).on("mouseup.keybindMouseUp", (function(e) {
                if (t.enabled) {
                    var i = _.find(t.keybinds, {
                        mouse: !0,
                        button: e.which
                    });
                    i && (i.a730 = !1)
                }
            }))
        },
        getKeybindByActionName: function(t) {
            return _.find(this.keybinds, {
                actionName: t
            })
        },
        modifyKeybind: function(t) {
            var e = this;
            this.enabled && (this.enabled = !1, this.onModifyingKeybindStart({
                keybind: t
            }), $(document).on("keydown.modifyKeybind", (function(i) {
                i.keyCode || i.which;
                $(document).off("keydown.modifyKeybind"), $(document).off("mousedown.modifyKeybind");
                var o = e.changeKey(t, i);
                e.enabled = !0, e.onModifyingKeybindStop({
                    keybind: t,
                    success: o
                }), i.preventDefault()
            })), $(document).on("mousedown.modifyKeybind", (function(i) {
                i.keyCode || i.which;
                $(document).off("keydown.modifyKeybind"), $(document).off("mousedown.modifyKeybind");
                var o = e.changeMouse(t, i);
                e.enabled = !0, e.onModifyingKeybindStop({
                    keybind: t,
                    success: o
                }), i.preventDefault()
            })))
        },
        changeKey: function(t, e) {
            var i = this.isKeyAllowed(e);
            if (!i) return !1;
            e.preventDefault();
            var o = e.keyCode,
                n = _.find(this.keybinds, {
                    code: o
                });
            return n && (n.code = void 0, n.mouse = void 0, n.button = void 0, n.controlName = "EMPTY"), t.code = o, t.mouse = void 0, t.button = void 0, t.controlName = i, !0
        },
        changeMouse: function(t, e) {
            var i;
            if (1 === e.which ? i = "LMOUSE" : 2 === e.which ? i = "MMOUSE" : 3 === e.which && (i = "RMOUSE"), !i) return !1;
            var o = _.find(this.keybinds, {
                mouse: !0,
                button: e.which
            });
            return o && (o.code = void 0, o.mouse = void 0, o.button = void 0, o.controlName = "EMPTY"), t.code = void 0, t.mouse = !0, t.button = e.which, t.controlName = i, !0
        },
        isKeyAllowed: function(t) {
            if (t.keyCode >= 65 && t.keyCode <= 90) return String.fromCharCode(t.keyCode);
            if (t.keyCode >= 48 && t.keyCode <= 57) return String.fromCharCode(t.keyCode);
            if (t.keyCode >= 37 && t.keyCode <= 40) return t.originalEvent.key.toUpperCase();
            if (t.keyCode >= 16 && t.keyCode <= 18) return t.originalEvent.key.toUpperCase();
            switch (t.keyCode) {
                case 32:
                    return "SPACE";
                case 13:
                    return "ENTER";
                case 8:
                    return "BACKSPACE";
                case 91:
                case 93:
                    return "COMMAND"
            }
            return !1
        }
    }, G.a613 = function() {
        this.queue = [], this.a759s = {
            a107: function(t) {
                var e = {};
                return GAME.currentOceanHeight != GAME.oceanHeightTo && (e.oceanHeight = {
                    a842: GAME.oceanHeightDuration
                }), e.ocean = {
                    a842: 7e3,
                    reset: !1
                }, e.finishFlag = {
                    a842: 9999
                }, e
            },
            start: function(t) {},
            a759s: {
                finishFlag: {
                    a843: {
                        1: {
                            start: function(t) {},
                            a853: function(t) {
                                for (var e = 0; e < GAME.winPos.length; e++) {
                                    var i, o = G.worldPosToScreenCoords(GAME.winPos[e], GAME.camera, GAME.bottleneckCanvas.cvs.screenCanvas.width, GAME.bottleneckCanvas.cvs.screenCanvas.height, 50);
                                    "center" == o.orientation ? i = G.assets[G.a836.UI].flag : "topleft" == o.orientation || "bottomleft" == o.orientation || "left" == o.orientation ? i = G.assets[G.a836.UI].flagLeft : "topright" == o.orientation || "bottomright" == o.orientation || "right" == o.orientation ? i = G.assets[G.a836.UI].flagRight : "top" == o.orientation ? i = G.assets[G.a836.UI].flagTop : "bottom" == o.orientation && (i = G.assets[G.a836.UI].flagBottom), GAME.bottleneckCanvas.drawImage([o.coords.x - 30, o.coords.y - 26], [0, 0], i, [48, 48], !0)
                                }
                            },
                            end: function(t) {}
                        }
                    }
                },
                oceanHeight: {
                    a843: {
                        1: {
                            start: function(t) {},
                            a853: function(t) {
                                GAME.currentOceanHeight = GAME.oceanHeightFrom + (GAME.oceanHeightTo - GAME.oceanHeightFrom) * G.smoothStep(t.a852)
                            },
                            end: function(t) {
                                GAME.currentOceanHeight = GAME.oceanHeightTo
                            }
                        }
                    }
                },
                ocean: {
                    a843: {
                        .48: {
                            start: function(t) {
                                t.toX = G.randInt(5, 5), t.toZ = G.randInt(5, 5)
                            },
                            a853: function(t) {
                                var e = GAME.currentOceanHeight + 2 * G.smoothStep(t.a852);
                                GAME.oceanPlane.position.y = e, GAME.oceanPlane.position.x = 0 + t.toX * G.smoothStep(t.a852), GAME.oceanPlane.position.z = 0 + t.toZ * G.smoothStep(t.a852), GAME.oceanPlane.rotation.z = 0 + .005 * G.smoothStep(t.a852)
                            },
                            end: function(t) {}
                        },
                        .52: {
                            start: function(t) {},
                            a853: function(t) {
                                var e = GAME.currentOceanHeight + 2 - 2 * G.smoothStep(t.a852);
                                GAME.oceanPlane.position.y = e, GAME.oceanPlane.position.x = t.toX - t.toX * G.smoothStep(t.a852), GAME.oceanPlane.position.z = t.toZ - t.toZ * G.smoothStep(t.a852), GAME.oceanPlane.rotation.z = .005 - .005 * G.smoothStep(t.a852)
                            },
                            end: function(t) {}
                        }
                    }
                }
            }
        }, this.a759 = new G.Animation(this.a759s, this, this, {})
    }, G.a613.prototype = {
        update: function() {
            this.a759.update()
        }
    }, G.a788 = function() {
        this.redraw = !0, this.hidden = !0, this.screenInfo = {
            width: null,
            height: null,
            center: [0, 0]
        }, this.loadingBox = {
            width: .5,
            height: .05,
            contentPadding: 0,
            topLeft: [0, 0],
            bottomRight: [0, 0],
            contentTopLeft: [0, 0],
            contentBottomRight: [0, 0],
            contentCurrentBottomRight: [0, 0]
        }, this.percentLoaded = 0
    }, G.a788.prototype = {
        init: function() {
            this.cvs = new G.Canvas2d(!0), this.cvs.canvasId = "loading-canvas", this.cvs.init(), this.cvs.screenCanvas.style.zIndex = 50, this.onResize()
        },
        draw: function() {
            !this.hidden && this.redraw && (this.redraw = !1, this.cvs.clear(), this.cvs.box(this.loadingBox.topLeft, this.loadingBox.bottomRight, "#fff", 3), this.cvs.boxFill(this.loadingBox.contentTopLeft, this.loadingBox.contentCurrentBottomRight, "#fff"), this.cvs.flip())
        },
        updateProgress: function(t) {
            this.percentLoaded = t.percentLoaded
        },
        updatea820BoxContent: function() {
            var t = this.loadingBox.contentBottomRight[0] - this.loadingBox.contentTopLeft[0];
            this.loadingBox.contentCurrentBottomRight[0] = this.loadingBox.contentTopLeft[0] + Math.floor(t * this.percentLoaded * .01), this.redraw = !0
        },
        show: function() {
            this.cvs.show(), this.hidden = !1
        },
        hide: function() {
            this.cvs.hide(), this.hidden = !0
        },
        onResize: function() {
            this.screenInfo.width = this.cvs.bufferCanvas.width, this.screenInfo.height = this.cvs.bufferCanvas.height, this.screenInfo.center[0] = Math.floor(this.screenInfo.width / 2), this.screenInfo.center[1] = Math.floor(this.screenInfo.height / 2), this.loadingBox.topLeft[0] = this.screenInfo.center[0] - Math.floor(.5 * this.loadingBox.width * this.screenInfo.width), this.loadingBox.topLeft[1] = this.screenInfo.center[1] - Math.floor(.5 * this.loadingBox.height * this.screenInfo.height), this.loadingBox.bottomRight[0] = this.screenInfo.center[0] + Math.floor(.5 * this.loadingBox.width * this.screenInfo.width), this.loadingBox.bottomRight[1] = this.screenInfo.center[1] + Math.floor(.5 * this.loadingBox.height * this.screenInfo.height), this.loadingBox.contentTopLeft[0] = this.loadingBox.topLeft[0] + Math.floor(this.loadingBox.contentPadding * this.screenInfo.width), this.loadingBox.contentTopLeft[1] = this.loadingBox.topLeft[1] + Math.floor(this.loadingBox.contentPadding * this.screenInfo.width), this.loadingBox.contentBottomRight[0] = this.loadingBox.bottomRight[0] - Math.floor(this.loadingBox.contentPadding * this.screenInfo.width), this.loadingBox.contentBottomRight[1] = this.loadingBox.bottomRight[1] - Math.floor(this.loadingBox.contentPadding * this.screenInfo.width), this.loadingBox.contentCurrentBottomRight[1] = this.loadingBox.contentBottomRight[1], this.updatea820BoxContent()
        },
        set percentLoaded(t) {
            this._percentLoaded = t, this.updatea820BoxContent()
        },
        get percentLoaded() {
            return this._percentLoaded
        }
    }, G.a815 = {
        background: "rgba(0, 0, 0, 0.75)",
        menuBackground: "rgba(0, 0, 0, 0.9)",
        foreground: "rgba(255, 255, 255, 1)",
        foregroundDisabled: "rgba(64, 64, 64, 1)",
        buttonHover: "rgba(0, 0, 0, 0.6)",
        buttonActive: "rgba(0, 0, 0, 1)",
        transparent: "rgba(0, 0, 0, 0)",
        crosshair: "rgba(50, 250, 50, 1)",
        hpGood: "rgba(50, 250, 50, 0.75)",
        hpBad: "rgba(250, 50, 50, 0.75)"
    }, G.a816 = "hudFont", G.a814 = G.a814 || {}, G.a790 = function(t) {
        this.game = t, this.a865 = void 0, this.hidden = !0, this.menuOnly = !0, this.menuActive = !1, this.menuBackOffset = [0, 0], this.menuBackPos = [0, 0], this.menuBackSize = [1e3, 1e3], this.showHUD = G.a813.showHUD
    }, G.a790.prototype = {
        constructor: G.a790,
        init: function() {
            this.cvs = new G.Canvas2d(!0), this.cvs.alpha = 0, this.cvs.canvasId = "ui-canvas", this.cvs.redrawOnResize = !1, this.cvs.init(), this.cvs.screenCanvas.style.zIndex = 30, this.a429 = new G.a791(this.cvs), this.a429.init()
        },
        initComponents: function(t) {
            this.a865 = t, this.components = [], void 0 !== this.a865 && (this.powerBars = new G.a814.a116(this.a429, this.a865.player), this.powerBars.init(), this.components.push(this.powerBars), this.inventory = new G.a814.a866(this.a429, this.a865.player), this.inventory.init(), this.components.push(this.inventory)), void 0 === this.menu && (this.menu = new G.a814.a793(this.a429, this.game), this.menu.init()), this.overrideRedraw = !0
        },
        show: function() {
            this.overrideRedraw = !0, this.cvs.show(), this.hidden = !1
        },
        hide: function() {
            this.cvs.hide(), this.hidden = !0
        },
        update: function() {
            for (var t = 0; t < this.components.length; t++) this.components[t].update();
            this.menuActive && this.menu.update()
        },
        draw: function() {
            if (this.menuActive) this.cvs.clear(), this.a429.drawImage(this.menuBackOffset, this.menuBackPos, G.assets[G.a836.UI].menuBack, this.menuBackSize, !1), this.menu.draw(), this.cvs.flip();
            else if (!this.hidden && this.checkIfRedraw()) {
                this.cvs.clear();
                for (var t = 0; t < this.components.length; t++) this.components[t].visible && (this.components[t].draw(), this.components[t].a448 = !1);
                this.cvs.flip()
            }
        },
        checkIfRedraw: function() {
            if (this.overrideRedraw) return this.overrideRedraw = !1, !0;
            for (var t = 0; t < this.components.length; t++)
                if (this.components[t].a448) return !0;
            return !1
        },
        useIngamea793: function() {
            this.menuOnly = !1, this.menu.switchToIngame()
        },
        onResize: function() {
            this.overrideRedraw = !0, this.a429.onResize(), G.a783.a419 = this.cvs.bufferCanvas.width / window.innerWidth, G.a783.a420 = this.cvs.bufferCanvas.height / window.innerHeight
        },
        dispose: function() {
            this.a865 = void 0, this.powerBars = void 0, this.notifications = void 0, this.winScreen = void 0, this.components = []
        }
    }, G.a791 = function(t) {
        this.cvs = t, this.ratio = new Float32Array(2), this.ratio[0] = 0, this.ratio[1] = 0
    }, G.a791.prototype = {
        constructor: G.a791,
        init: function() {
            var t = this;
            $(window).on("resize." + this.canvasId, (function() {
                t.onResize()
            })), this.onResize()
        },
        onResize: function() {
            this.ratio[0] = this.cvs.bufferCanvas.width, this.ratio[1] = this.cvs.bufferCanvas.height
        },
        convertToScreenCoords: function(t, e, i) {
            e[0] = Math.floor(t[0] * this.ratio[0]), e[1] = Math.floor(t[1] * this.ratio[1]), void 0 !== i && (e[0] += i[0], e[1] += i[1])
        },
        fixedLine: function() {
            var t = [0, 0],
                e = [0, 0];
            return function(i, o, n, s, r) {
                this.convertToScreenCoords(i, t, o), this.convertToScreenCoords(i, e, n), this.cvs.line(t, e, s, r)
            }
        }(),
        line: function() {
            var t = [0, 0],
                e = [0, 0];
            return function(i, o, n, s, r, a) {
                this.convertToScreenCoords(o, t, i), s ? (e[0] = t[0] + n[0], e[1] = t[1] + n[1]) : (this.convertToScreenCoords(n, e), e[0] += t[0], e[1] += t[1]), this.cvs.line(t, e, r, a)
            }
        }(),
        box: function(t, e, i, o, n, s, r, a) {
            null == r && (r = [0, 0]), null == a && (a = [0, 0]), this.convertToScreenCoords(e, r, t), o ? (a[0] = r[0] + i[0], a[1] = r[1] + i[1]) : (this.convertToScreenCoords(i, a), a[0] += r[0], a[1] += r[1]), this.cvs.box(r, a, n, s)
        },
        boxFill: function(t, e, i, o, n, s, r) {
            if (null == s) s = [0, 0];
            if (null == r) r = [0, 0];
            this.convertToScreenCoords(e, s, t), o ? (r[0] = s[0] + i[0], r[1] = s[1] + i[1]) : (this.convertToScreenCoords(i, r), r[0] += s[0], r[1] += s[1]), this.cvs.boxFill(s, r, n)
        },
        circle: function() {
            var t = [0, 0];
            return function(e, i, o, n, s) {
                this.convertToScreenCoords(i, t, e), this.cvs.circle(t, o, n, s)
            }
        }(),
        circleFill: function() {
            var t = [0, 0];
            return function(e, i, o, n) {
                this.convertToScreenCoords(i, t, e), this.cvs.circleFill(t, o, n)
            }
        }(),
        text: function() {
            var t = [0, 0];
            return function(e, i, o, n, s, r, a, h, l, c) {
                this.convertToScreenCoords(i, t, e), this.cvs.text(t, o, n, s, r, a, h, l, c)
            }
        }(),
        drawImage: function() {
            var t = [0, 0],
                e = [0, 0];
            return function(i, o, n, s, r, a, h) {
                this.convertToScreenCoords(o, t, i), r ? (e[0] = s[0], e[1] = s[1]) : this.convertToScreenCoords(s, e), this.cvs.drawImage(t, n, e, a, h)
            }
        }(),
        a451: function(t, e, i, o, n, s) {
            if (null == s) s = [0, 0];
            this.convertToScreenCoords(e, s, t), this.cvs.a451(s, i, o, n)
        },
        getTextWidth: function(t, e, i) {
            return this.cvs.getTextWidth(t, e, i)
        },
        roundedBox: function() {
            var t = [0, 0],
                e = [0, 0];
            return function(i, o, n, s, r, a, h) {
                this.convertToScreenCoords(o, t, i), s ? (e[0] = t[0] + n[0], e[1] = t[1] + n[1]) : (this.convertToScreenCoords(n, e), e[0] += t[0], e[1] += t[1]), this.cvs.roundedBox(t, e, r, a, h)
            }
        }(),
        a449: function(t, e, i, o, n, s, r, a) {
            if (null == r) r = [0, 0];
            if (null == a) a = [0, 0];
            this.convertToScreenCoords(e, r, t), o ? (a[0] = r[0] + i[0], a[1] = r[1] + i[1]) : (this.convertToScreenCoords(i, a), a[0] += r[0], a[1] += r[1]), this.cvs.a449(r, a, n, s)
        }
    }, G.a814.a793 = function(t, e) {
        this.cvs = t, this.game = e, this.fontSize = 60, this.a430 = 0, this.background = {
            offset: [0, 0],
            pos: [0, 0],
            size: [1, 1]
        }, this.text = {
            offset: [0, 0],
            pos: [.5, .5]
        }, this.logo = {
            offset: [-300, -384],
            pos: [.5, .5],
            size: [600, 200],
            image: G.assets[G.a836.UI].logo
        }, this.children = [], this.activePanel = null, this.backgroundColor = G.a815.menuBackground, this.ingame = !1, this.visible = !0
    }, G.a814.a793.prototype = {
        constructor: G.a814.a793,
        init: function() {
            this.initTopPanel(), this.initOptionsPanel(), this.initGraphicsPanel(), this.initSoundPanel(), this.initControlsPanel(), this.activePanel = this.topPanel
        },
        initTopPanel: function() {
            var t = this;
            this.topPanel = new G.a814.a793Panel(this.cvs, [-400, -160], [.5, .5], [800, 520], 54, 70), this.btnNewGame = this.topPanel.addButton("disconnect"), this.btnNewGame.onClick = function() {
                t.game.disconnect()
            }, this.btnOptions = this.topPanel.addButton("options"), this.btnOptions.onClick = function() {
                t.activePanel = t.optionsPanel
            }, this.topPanel.addEmptyRow(), this.btnTopBack = this.topPanel.addButton("Back"), this.btnTopBack.onClick = function() {
                t.game.closea793(), $(document).on("mousedown.pointerLock", (function(t) {
                    GAME.a865.player.controls.lock()
                }))
            }
        },
        initOptionsPanel: function() {
            var t = this;
            this.optionsPanel = new G.a814.a793Panel(this.cvs, [-400, -160], [.5, .5], [800, 520], 44, 65), this.btnControls = this.optionsPanel.addButton("controls"), this.btnControls.onClick = function() {
                t.activePanel = t.controlsPanel
            }, this.btnGraphics = this.optionsPanel.addButton("graphics"), this.btnGraphics.onClick = function() {
                t.activePanel = t.graphicsPanel
            }, this.btnSound = this.optionsPanel.addButton("sound"), this.btnSound.onClick = function() {
                t.activePanel = t.soundPanel
            }, this.optionsPanel.addEmptyRow(), this.btnOptionsBack = this.optionsPanel.addButton("Back"), this.btnOptionsBack.onClick = function() {
                t.activePanel = t.topPanel
            }
        },
        initGraphicsPanel: function() {
            var t = this;
            this.graphicsPanel = new G.a814.a793Panel(this.cvs, [-400, -160], [.5, .5], [800, 520], 32, 43), this.btnAo = this.graphicsPanel.a824ggleButton("ambient occlusion"), this.btnAo.button.currentStateIndex = !0 === G.a813.ao ? 0 : 1, this.btnAo.button.onClick = function(t) {
                G.a813.ao = "on" === t.state
            }, this.numberPickerFOV = this.graphicsPanel.addNumberPicker("field of view", G.a813.fov, G.a813.fovMin, G.a813.fovMax, 5), this.numberPickerFOV.numberPicker.onChange = function(t) {
                G.a813.fov = t.value
            }, this.graphicsPanel.addEmptyRow(), this.btnGraphicsBack = this.graphicsPanel.addButton("Back"), this.btnGraphicsBack.onClick = function() {
                t.activePanel = t.optionsPanel
            }
        },
        initSoundPanel: function() {
            var t = this;
            this.soundPanel = new G.a814.a793Panel(this.cvs, [-400, -160], [.5, .5], [800, 520], 32, 43), this.numberPickerSound = this.soundPanel.addNumberPicker("sound volume", G.a813.sound, G.a813.soundMin, G.a813.soundMax, 1), this.numberPickerSound.numberPicker.onChange = function(t) {
                G.a813.sound = t.value
            }, this.numberPickerMusic = this.soundPanel.addNumberPicker("music volume", G.a813.music, G.a813.musicMin, G.a813.musicMax, 1), this.numberPickerMusic.numberPicker.onChange = function(t) {
                G.a813.music = t.value
            }, this.soundPanel.addEmptyRow(), this.btnSoundBack = this.soundPanel.addButton("Back"), this.btnSoundBack.onClick = function() {
                t.activePanel = t.optionsPanel
            }
        },
        initControlsPanel: function() {
            var t = this;
            this.controlsPanel = new G.a814.a793Panel(this.cvs, [-400, -180], [.5, .5], [800, 520], 28, 40), this.numberPickerMouse = this.controlsPanel.addNumberPicker("mouse sensitivity", G.a813.mouse, G.a813.mouseMin, G.a813.mouseMax, 1), this.numberPickerMouse.numberPicker.onChange = function(t) {
                G.a813.mouse = t.value
            }, this.btnToggleMouseInvertY = this.controlsPanel.a824ggleButton("invert mouse y axis"), this.btnToggleMouseInvertY.button.currentStateIndex = !0 === G.a813.mouseInvertY ? 0 : 1, this.btnToggleMouseInvertY.button.onClick = function(t) {
                G.a813.mouseInvertY = "on" === t.state
            }, this.controlsPanel.addEmptyRow(), this.btnToggleMoveForward = this.controlsPanel.a824ggleButton("move front", ["W"]), this.btnToggleMoveBackward = this.controlsPanel.a824ggleButton("move back", ["S"]), this.btnToggleStrafeLeft = this.controlsPanel.a824ggleButton("move left", ["A"]), this.btnToggleStrafeRight = this.controlsPanel.a824ggleButton("move right", ["D"]), this.btnToggleMoveUpward = this.controlsPanel.a824ggleButton("jump", ["SPACE"]), this.btnToggleBuild = this.controlsPanel.a824ggleButton("build (hold)", ["SHIFT"]), this.btnToggleUse = this.controlsPanel.a824ggleButton("use", ["E"]), this.btnToggleShoot = this.controlsPanel.a824ggleButton("shoot", ["LMOUSE"]), this.btnToggleAim = this.controlsPanel.a824ggleButton("aim", ["RMOUSE"]), this.controlsPanel.addEmptyRow(), this.btnControlsBack = this.controlsPanel.addButton("Back"), this.btnControlsBack.onClick = function() {
                t.activePanel = t.optionsPanel
            }, this.attacha786EventHandlers()
        },
        attacha786EventHandlers: function() {
            var t = {
                moveForward: this.btnToggleMoveForward,
                moveBackward: this.btnToggleMoveBackward,
                strafeLeft: this.btnToggleStrafeLeft,
                strafeRight: this.btnToggleStrafeRight,
                moveUpward: this.btnToggleMoveUpward,
                build: this.btnToggleBuild,
                use: this.btnToggleUse,
                shoot: this.btnToggleShoot,
                aim: this.btnToggleAim
            };
            for (var e in t) {
                var i = t[e].button;
                i.onClick = o(e), i.a837 = [G.Keybinds[e].controlName], i.currentStateIndex = 0
            }

            function o(t) {
                return function() {
                    G.a597.rebound.modifyKeybind(G.Keybinds[t])
                }
            }
            G.a597.rebound.onModifyingKeybindStart = function(e) {
                var i = t[e.keybind.actionName].button;
                i.a837 = ["press key"], i.currentStateIndex = 0
            }, G.a597.rebound.onModifyingKeybindStop = function(e) {
                for (var i in t) {
                    var o = t[i].button;
                    o.a837 = [G.Keybinds[i].controlName], o.currentStateIndex = 0
                }
                if (e.success) {
                    var n = t[e.keybind.actionName].button,
                        s = n.onClick;
                    n.onClick = function() {}, setTimeout((function() {
                        n.onClick = s
                    }), 100), G.a813.savea813()
                }
            }
        },
        switchToIngame: function() {
            this.ingame = !0
        },
        update: function() {
            this.activePanel.update();
            for (var t = 0; t < this.children.length; t++) this.children[t].update()
        },
        draw: function() {
            this.ingame && this.cvs.boxFill(this.background.offset, this.background.pos, this.background.size, !1, this.backgroundColor), this.activePanel.draw();
            for (var t = 0; t < this.children.length; t++) this.children[t].draw()
        }
    }, G.a814.a793Button = function(t, e, i, o, n, s, r) {
        this.cvs = t, this.fontSize = 40, this.text = e, this.textBaseline = "middle", this.textAlign = "center", this.offset = i, this.pos = o, this.size = n, this.borderRadius = 0, this.onClick = s || function() {}, this.a837 = r, this._currentStateIndex = 0, this.min = [0, 0], this.max = [0, 0], this.textOffset = [this.offset[0] + .5 * this.size[0], this.offset[1] + .5 * this.size[1]], this.hover = !1, this.active = !1, this.disabled = !1, this.backgroundColor = G.a815.buttonHover, this.foregroundColor = G.a815.foregroundDisabled
    }, G.a814.a793Button.prototype = {
        constructor: G.a814.a793Button,
        init: function() {},
        update: function() {
            var t = G.a783.a709,
                e = G.a783.a710;
            this.cvs.convertToScreenCoords(this.pos, this.min, this.offset), this.max[0] = this.min[0] + this.size[0], this.max[1] = this.min[1] + this.size[1], this.disabled ? this.foregroundColor = G.a815.foregroundDisabled : (this.foregroundColor = G.a815.foreground, t >= this.min[0] && e >= this.min[1] && t < this.max[0] && e < this.max[1] ? (this.hover = !0, this.backgroundColor = G.a815.buttonHover) : this.hover = !1, this.hover && (G.a783.a416 ? (this.active = !0, this.backgroundColor = G.a815.buttonActive) : this.active && (void 0 !== this.a837 ? (this._currentStateIndex++, this._currentStateIndex >= this.a837.length && (this._currentStateIndex = 0), this.text = this.a837[this._currentStateIndex], this.onClick({
                state: this.text,
                stateIndex: this._currentStateIndex
            })) : this.onClick(), this.active = !1, this.backgroundColor = G.a815.buttonHover)))
        },
        draw: function() {
            !this.disabled && this.hover && this.cvs.a449(this.offset, this.pos, this.size, !0, this.borderRadius, this.backgroundColor), this.cvs.text(this.textOffset, this.pos, this.text, this.foregroundColor, this.fontSize, this.textBaseline, this.textAlign, G.a816)
        },
        set currentStateIndex(t) {
            void 0 !== this.a837 && t >= 0 && t < this.a837.length && (this._currentStateIndex = t, this.text = this.a837[this._currentStateIndex])
        },
        get currentStateIndex() {
            return this._currentStateIndex
        }
    }, G.a814.a793ImageButton = function(t, e, i, o, n, s, r, a) {
        this.cvs = t, this.fontSize = n || 40, this.offset = e, this.pos = i, this.size = o, this.text = s, this.image = r, this.onClick = a || function() {}, this.init()
    }, G.a814.a793ImageButton.prototype = {
        constructor: G.a814.a793ImageButton,
        init: function() {
            var t = this,
                e = [this.offset[0], this.offset[1]],
                i = [this.size[0], this.size[1]],
                o = new G.a814.a793Button(this.cvs, this.text, e, this.pos, i, (function() {
                    t.onClick()
                }));
            o.textOffset[0] -= .1 * this.size[0], o.textAlign = "left", o.fontSize = this.fontSize, this.button = o, this.imageSize = [231, 130], this.a438 = [this.offset[0], this.offset[1]], this.a438[0] += .2 * this.size[0] - this.imageSize[0] / 2, this.a438[1] += .5 * this.size[1] - this.imageSize[1] / 2
        },
        update: function() {
            this.button.update()
        },
        draw: function() {
            this.button.draw(), this.cvs.drawImage(this.a438, this.pos, this.image, this.imageSize, !0)
        }
    }, G.a814.a793Label = function(t, e, i, o) {
        this.cvs = t, this.fontSize = 40, this.text = e, this.textBaseline = "middle", this.textAlign = "center", this.offset = i, this.pos = o, this.foregroundColor = G.a815.foreground
    }, G.a814.a793Label.prototype = {
        constructor: G.a814.a793Label,
        init: function() {},
        update: function() {},
        draw: function() {
            this.cvs.text(this.offset, this.pos, this.text, this.foregroundColor, this.fontSize, this.textBaseline, this.textAlign, G.a816)
        }
    }, G.a814.a793NumberPicker = function(t, e, i, o, n, s, r, a, h, l) {
        this.cvs = t, this.fontSize = n || 40, this.offset = e, this.pos = i, this.size = o, this.value = void 0 !== s ? s : 5, this.min = void 0 !== r ? r : 1, this.max = void 0 !== a ? a : 10, this.step = void 0 !== h ? h : 1, this.onChange = l || function() {}, this.init()
    }, G.a814.a793NumberPicker.prototype = {
        constructor: G.a814.a793NumberPicker,
        init: function() {
            var t = this,
                e = [.2 * this.size[0], this.size[1]],
                i = [this.offset[0], this.offset[1]];
            this.leftButton = new G.a814.a793Button(this.cvs, "<", i, this.pos, e), this.leftButton.fontSize = this.fontSize, this.leftButton.onClick = function() {
                t.value -= t.step, t.value = Math.max(t.min, t.value), t.label.text = t.value, t.onChange({
                    value: t.value
                })
            };
            var o = [this.offset[0], this.offset[1]];
            o[0] += .8 * this.size[0], this.rightButton = new G.a814.a793Button(this.cvs, ">", o, this.pos, e), this.rightButton.fontSize = this.fontSize, this.rightButton.onClick = function() {
                t.value += t.step, t.value = Math.min(t.max, t.value), t.label.text = t.value, t.onChange({
                    value: t.value
                })
            };
            var n = [this.offset[0], this.offset[1]];
            n[0] += .5 * this.size[0], n[1] += .5 * this.size[1], this.label = new G.a814.a793Label(this.cvs, this.value, n, this.pos), this.label.fontSize = this.fontSize
        },
        update: function() {
            this.leftButton.update(), this.rightButton.update()
        },
        draw: function() {
            this.leftButton.draw(), this.rightButton.draw(), this.label.draw()
        }
    }, G.a814.a793Panel = function(t, e, i, o, n, s) {
        this.cvs = t, this.children = [], this.fontSize = n || 40, this.offset = e, this.pos = i, this.size = o, this.rowHeight = s || 40, this.rowOffset = 0
    }, G.a814.a793Panel.prototype = {
        constructor: G.a814.a793Panel,
        init: function() {},
        addButton: function(t, e) {
            var i = this.getRowOffset(),
                o = [this.size[0], this.rowHeight],
                n = new G.a814.a793Button(this.cvs, t, i, this.pos, o, e);
            return n.fontSize = this.fontSize, this.children.push(n), this.rowOffset += this.rowHeight, n
        },
        a824ggleButton: function(t, e, i, o) {
            i = i || .2;
            var n = this.getRowOffset(),
                s = [n[0], n[1]];
            s[0] += .5 * this.size[0] - 10, s[1] += .5 * this.rowHeight;
            var r = new G.a814.a793Label(this.cvs, t, s, this.pos);
            r.fontSize = this.fontSize, r.textAlign = "right", this.children.push(r);
            var a = [n[0], n[1]];
            i = [this.size[0] * i, this.rowHeight];
            a[0] += .5 * this.size[0] + 10, e = e || ["on", "off"];
            var h = new G.a814.a793Button(this.cvs, e[0], a, this.pos, i, o, e);
            return h.fontSize = this.fontSize, this.children.push(h), this.rowOffset += this.rowHeight, {
                label: r,
                button: h
            }
        },
        addDoubleLabel: function(t, e) {
            var i = this.getRowOffset(),
                o = [i[0], i[1]];
            o[0] += .5 * this.size[0] - 30, o[1] += .5 * this.rowHeight;
            var n = new G.a814.a793Label(this.cvs, t, o, this.pos);
            n.fontSize = this.fontSize, n.textAlign = "right", this.children.push(n);
            var s = [i[0], i[1]];
            s[0] += .5 * this.size[0] + 30, s[1] += .5 * this.rowHeight;
            var r = new G.a814.a793Label(this.cvs, e, s, this.pos);
            return r.fontSize = this.fontSize, r.textAlign = "left", this.children.push(r), this.rowOffset += this.rowHeight, {
                label1: n,
                label2: r
            }
        },
        addNumberPicker: function(t, e, i, o, n, s) {
            var r = this.getRowOffset(),
                a = [r[0], r[1]];
            a[0] += .5 * this.size[0] - 10, a[1] += .5 * this.rowHeight;
            var h = new G.a814.a793Label(this.cvs, t, a, this.pos);
            h.fontSize = this.fontSize, h.textAlign = "right", this.children.push(h);
            var l = [r[0], r[1]],
                c = [.2 * this.size[0], this.rowHeight];
            l[0] += .5 * this.size[0] + 10;
            var u = new G.a814.a793NumberPicker(this.cvs, l, this.pos, c, this.fontSize, e, i, o, n, s);
            return this.children.push(u), this.rowOffset += this.rowHeight, {
                label: h,
                numberPicker: u
            }
        },
        addImageButton: function(t, e, i) {
            var o = this.getRowOffset(),
                n = [o[0], o[1]],
                s = [this.size[0], this.rowHeight],
                r = new G.a814.a793ImageButton(this.cvs, n, this.pos, s, this.fontSize, t, e, i);
            return this.children.push(r), this.rowOffset += this.rowHeight, r
        },
        addEmptyRow: function() {
            this.rowOffset += this.rowHeight
        },
        getRowOffset: function() {
            var t = [this.offset[0], this.offset[1]];
            if (t[1] += this.rowOffset, !(Math.abs(t[1] - this.offset[1]) > this.size[1])) return t;
            GAME.handleFatalError("menu panel exceeds height")
        },
        update: function() {
            for (var t = 0; t < this.children.length; t++) this.children[t].update()
        },
        draw: function() {
            for (var t = 0; t < this.children.length; t++) this.children[t].draw()
        },
        add: function(t) {
            this.children.push(t)
        }
    }, G.a814.a116 = function(t, e) {
        this.cvs = t, this.player = e, this.fontSize = 60, this.a430 = 0, this.offset = [20, -20], this.pos = [0, 1], this.size = [240, 50], this.textOffset = [86, -2], this.a438 = [10, 14], this.a439 = [0, 0], this.a440 = [50, 40], this.offset[1] -= this.size[1], this.a438[0] += this.offset[0], this.a438[1] += this.offset[1], this.textOffset[0] += this.offset[0] + .5 * this.size[0], this.textOffset[1] += this.offset[1] + .5 * this.size[1], this.visible = !0, this.a746 = "", this.oldHealth = -1, this.HPSize = [0, 0], this.HPSize2 = [0, 0], this.HPOffset = [0, 0]
    }, G.a814.a116.prototype = {
        constructor: G.a814.a116,
        init: function() {},
        update: function() {
            this.a746 = Math.floor(this.player.a746), this.a746 != this.oldHealth && (this.a448 = !0, this.oldHealth = this.a746)
        },
        draw: function() {
                this.HPSize[0] = this.size[0] * (this.a746 / 100), this.HPSize[1] = this.size[1];
                var t = "rgba(50, 250, 50, .8)";
                this.a746 < 70 && (t = G.a815.hpBad), this.cvs.a449(this.offset, this.pos, this.HPSize, !0, 1, t), this.HPSize2[0] = this.size[0] - this.HPSize[0], this.HPSize2[1] = this.size[1], this.HPOffset[0] = this.offset[0] + this.HPSize[0], this.HPOffset[1] = this.offset[1], this.cvs.text([120, -48], this.pos, [this.a746], ["#ffffff", "#999999"], 56, "middle", "right", G.a816, !0)

        }
    }, G.a814.a866 = function(t, e) {
        this.cvs = t, this.player = e, this.fontSize = 60, this.a430 = 10, this.box = {
            offset: [-410, 300],
            pos: [.5, .5],
            size: [820, 600]
        }, this.box.offset[1] -= this.box.size[1], this.visible = !1, this.a431 = null, this.fromX = 232, this.toX = 1048, this.fromY = 232, this.toY = 1048, this.a432 = 10, this.a433 = 10, this.a434 = (this.toX - this.fromX) / this.a432, this.a435 = (this.toY - this.fromY) / this.a433, this.a436 = [this.box.offset[0], this.box.offset[1]], this.a436Size = [this.a434, this.a435], this.a438 = [this.box.offset[0] + (this.a434 / 2 - 24), this.box.offset[1] + (this.a435 / 2 - 24)], this.a439 = [0, 0], this.a440 = [64, 64], this.a441 = this.a432 * this.a433, this.a442 = [], this.a733Coords = [], this.a733BoxSize = 80
    }, G.a814.a866.prototype = {
        constructor: G.a814.a866,
        init: function() {
            this.visible = !0
        },
        update: function() {
            if (this.a448 = !0, true && !GAME.a510 && !GAME.inChat)
                for (var t = 0; t <= this.player.totalShorta843; t++) !G.a783.a423 && G.a783.a426(48 + t) && this.player.a445Shortcut(t - 1)
        },
        open: function() {
            GAME.ina866 = !0;
            var t = this;
            this.inventoryVisible = !0, $(document).on("mousedown.inventory", (function(e) {
                t.a431 = t.a443(G.a783.a709, G.a783.a710)
            })), $(document).on("mouseup.inventory", (function(e) {
                var i = t.a443(G.a783.a709, G.a783.a710);
                null != t.player.items[t.a431] && (t.a431 == i ? t.player.a445(t.a431) : -1 == i ? t.player.a446(t.a431) : t.player.a447(t.a431, i))
            }))
        },
        close: function() {
            GAME.ina866 = !1, this.inventoryVisible = !1, $(document).off("mousedown.inventory"), $(document).off("mouseup.inventory")
        },
        a443: function(t, e) {
            for (var i = 1; i < this.a442.length; i++)
                if (t >= this.a442[i][0] && t <= this.a442[i][0] + this.a434 && e >= this.a442[i][1] && e <= this.a442[i][1] + this.a435) return i;
            return -1
        },
        draw: function() {
            if (true) {
                if (this.inventoryVisible) {
                    this.cvs.a449(this.box.offset, this.box.pos, this.box.size, !0, 0, "rgba(0, 0, 0, 0.8)");
                    for (var t = 0, e = 0, i = 1; i < this.player.items.length; i++) {
                        if ((l = this.player.items[i]).a474Id) {
                            var o = this.a436[0] + t * this.a434,
                                n = this.a436[1] + e * this.a435;
                            this.a442[i] = [], i <= this.player.totalShorta843 ? this.cvs.a449([o, n], [.5, .5], [this.a434 - 2, this.a435], !0, 0, "rgba(0,0, 0, 0.7)", this.a442[i]) : this.cvs.a449([o, n], [.5, .5], [this.a434, this.a435], !0, 0, "rgba(0, 0, 0, 0)", this.a442[i]);
                            var s = G.a805[l.a474Id].thumbnail(),
                                r = (this.a434 - s.width) / 2,
                                a = (this.a435 - s.height) / 2;
                            this.cvs.drawImage([o, n], [.5, .5], s.img, [this.a434, this.a435], !0), this.cvs.text([o + this.a434 - 3, n + this.a435 - 1], [.5, .5], l.total, "#fff", 24, "bottom", "right", G.a816)
                        }++t == this.a432 && (t = 0, e++)
                    }
                }
                var h = -this.player.totalShorta843 * (this.a733BoxSize + 10) / 2;
                for (i = 0; i < this.player.totalShorta843; i++) {
                    var l;
                    o = h + i * (this.a733BoxSize + 10), n = -(this.a733BoxSize + 10);
                    if (this.a733Coords[i] = [], this.cvs.a449([o, n], [.5, 1], [this.a733BoxSize, this.a733BoxSize], !0, 0, "rgba(0, 0, 0, 0.75)", this.a733Coords[i]), -1 != (l = this.player.geta809Shortcut(i))) {
                        s = G.a805[l.a474Id].thumbnail(), r = (this.a733BoxSize - s.width) / 2, a = (this.a733BoxSize - s.height) / 2;
                        this.player.a105Id == l.a474Id ? this.cvs.drawImage([o + r, n + a], [.5, 1], s.img, [s.width, s.height], !0, 1) : this.cvs.drawImage([o + r, n + a], [.5, 1], s.img, [s.width, s.height], !0, .6), this.cvs.text([o + this.a733BoxSize - 5, n + this.a733BoxSize - 4], [.5, 1], l.total, "#fff", 24, "bottom", "right", G.a816)
                    }
                }
            }
        }
    }, G.a836 = {
        Material: 0,
        Mesh: 1,
        Texture: 2,
        UI: 3,
        Sound: 4
    }, G.TextureTypes = {
        a667: 0,
        NewMaterialBasic: 1,
        NewMaterialLambert: 2
    }, G.CustomFontFile = "Font.ttf", G.Assets = {}, G.Assets[G.a836.Material] = {}, G.Assets[G.a836.Mesh] = {
        pistol: {
            filename: "mesh/pistol.obj"
        },
        awm: {
            filename: "mesh/awm.obj"
        },
        ak47: {
            filename: "mesh/ak47.obj"
        },
        shotgun: {
            filename: "mesh/shotgun.obj"
        },
        uri: {
            filename: "mesh/uzi.obj"
        },
        pickaxe: {
            filename: "mesh/pickaxe2.obj"
        }
    }, G.Assets[G.a836.Texture] = {
        aladdin: {
            filename: "skin/aladdin.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        alice: {
            filename: "skin/alice.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        angel: {
            filename: "skin/angel.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        anonymous: {
            filename: "skin/anonymous.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        arcticFox: {
            filename: "skin/arcticFox.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        army: {
            filename: "skin/army.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        artist: {
            filename: "skin/artist.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        astronaut: {
            filename: "skin/astronaut.png",
            type: G.TextureTypes.NewMaterialLambert
        },
        batman: {
            filename: "skin/batman.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        beaver: {
            filename: "skin/beaver.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        blackWitch: {
            filename: "skin/blackWitch.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        bobRoss: {
            filename: "skin/bobRoss.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        burger: {
            filename: "skin/burger.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        buzzLightyear: {
            filename: "skin/buzzLightyear.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        cactus: {
            filename: "skin/cactus.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        canadianHockey: {
            filename: "skin/canadianHockey.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        captainAmerica: {
            filename: "skin/captainAmerica.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        cheerleader: {
            filename: "skin/cheerleader.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        chicken: {
            filename: "skin/chicken.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        cookieMonster: {
            filename: "skin/cookieMonster.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        coolGuy: {
            filename: "skin/coolGuy.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        countryGirl: {
            filename: "skin/countryGirl.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        cow: {
            filename: "skin/cow.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        cristianoRonaldo: {
            filename: "skin/cristianoRonaldo.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        croco: {
            filename: "skin/croco.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        crosby: {
            filename: "skin/crosby.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        deadpool: {
            filename: "skin/deadpool.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        dog: {
            filename: "skin/dog.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        donaldDuck: {
            filename: "skin/donaldDuck.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        donna: {
            filename: "skin/donna.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        duck: {
            filename: "skin/duck.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        duke: {
            filename: "skin/duke.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        electricPanda: {
            filename: "skin/electricPanda.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        electricRobot: {
            filename: "skin/electricRobot.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        elf: {
            filename: "skin/elf.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        elsa: {
            filename: "skin/elsa.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        emilie: {
            filename: "skin/emilie.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        eminem: {
            filename: "skin/eminem.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        emo: {
            filename: "skin/emo.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        fbi: {
            filename: "skin/fbi.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        fireFighter: {
            filename: "skin/fireFighter.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        fox: {
            filename: "skin/fox.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        frankenstein: {
            filename: "skin/frankenstein.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        frog: {
            filename: "skin/frog.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        geisha: {
            filename: "skin/geisha.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        ghostWidow: {
            filename: "skin/ghostWidow.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        godfather: {
            filename: "skin/godfather.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        gryffindor: {
            filename: "skin/gryffindor.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        hippy: {
            filename: "skin/hippy.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        homer: {
            filename: "skin/homer.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        horse: {
            filename: "skin/horse.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        hulk: {
            filename: "skin/hulk.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        ironman: {
            filename: "skin/ironman.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        jackSparrow: {
            filename: "skin/jackSparrow.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        jenny: {
            filename: "skin/jenny.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        jesus: {
            filename: "skin/jesus.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        joker: {
            filename: "skin/joker.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        karateKid: {
            filename: "skin/karateKid.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        kawaiiGirl: {
            filename: "skin/kawaiiGirl.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        lebronJames: {
            filename: "skin/lebronJames.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        a778endary: {
            filename: "skin/a778endary.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        lion: {
            filename: "skin/lion.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        lover: {
            filename: "skin/lover.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        luigi: {
            filename: "skin/luigi.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        lukeSkywalker: {
            filename: "skin/lukeSkywalker.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        mario: {
            filename: "skin/mario.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        monkey: {
            filename: "skin/monkey.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        monster: {
            filename: "skin/monster.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        monsterInc: {
            filename: "skin/monsterInc.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        navy: {
            filename: "skin/navy.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        ninja: {
            filename: "skin/ninja.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        ohMyGod: {
            filename: "skin/ohMyGod.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        owl: {
            filename: "skin/owl.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        parrot: {
            filename: "skin/parrot.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        peach: {
            filename: "skin/peach.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        penguin: {
            filename: "skin/penguin.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        pikachuGirl: {
            filename: "skin/pikachuGirl.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        policeMan: {
            filename: "skin/policeMan.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        popCorn: {
            filename: "skin/popCorn.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        potatoMan: {
            filename: "skin/potatoMan.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        queen: {
            filename: "skin/queen.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        rainbowHair: {
            filename: "skin/rainbowHair.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        redHead: {
            filename: "skin/redHead.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        robinHood: {
            filename: "skin/robinHood.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        robot: {
            filename: "skin/robot.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        santa: {
            filename: "skin/santa.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        shrek: {
            filename: "skin/shrek.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        skeleton: {
            filename: "skin/skeleton.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        skeletonPirate: {
            filename: "skin/skeletonPirate.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        soulEater: {
            filename: "skin/soulEater.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        superman: {
            filename: "skin/superman.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        trooper: {
            filename: "skin/trooper.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        trump: {
            filename: "skin/trump.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        viking: {
            filename: "skin/viking.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        vikingKing: {
            filename: "skin/vikingKing.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        werewolf: {
            filename: "skin/werewolf.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        whiteDevil: {
            filename: "skin/whiteDevil.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        wonderWoman: {
            filename: "skin/wonderWoman.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        woody: {
            filename: "skin/woody.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        yeti: {
            filename: "skin/yeti.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        yoshi: {
            filename: "skin/yoshi.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        zeus: {
            filename: "skin/zeus.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        pistol: {
            filename: "texture/atlas.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        sniper: {
            filename: "texture/awm.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        ak47: {
            filename: "texture/atlas.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        shotgun: {
            filename: "texture/atlas.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        uri: {
            filename: "texture/atlas.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        stoneball: {
            filename: "texture/stone4.png",
            type: G.TextureTypes.NewMaterialLambert
        },
        stoneballFlat: {
            filename: "texture/stone4.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        woodball: {
            filename: "texture/wood4.png",
            type: G.TextureTypes.NewMaterialLambert
        },
        woodballFlat: {
            filename: "texture/wood4.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        water: {
            filename: "texture/water.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        bedrock: {
            filename: "texture/bedrock.png",
            type: G.TextureTypes.NewMaterialBasic
        },
        pickaxe: {
            filename: "texture/pickaxe2.png",
            type: G.TextureTypes.NewMaterialBasic
        }
    }, G.Assets[G.a836.UI] = {
        hpGreen: {
            filename: "ui/hpGreen.png"
        },
        ammoPurple: {
            filename: "ui/ammoPurple.png"
        },
        hud: {
            filename: "ui/hud.png"
        },
        menuBack: {
            filename: "ui/menuBack.png"
        },
        scope: {
            filename: "ui/scope.png"
        },
        crosshairShadow: {
            filename: "ui/crosshairShadow.png"
        },
        hitmark: {
            filename: "ui/hitmarker.png"
        },
        flag: {
            filename: "ui/flag.png"
        },
        flagLeft: {
            filename: "ui/flagLeft.png"
        },
        flagRight: {
            filename: "ui/flagRight.png"
        },
        flagTop: {
            filename: "ui/flagTop.png"
        },
        flagBottom: {
            filename: "ui/flagBottom.png"
        },
        pickaxe: {
            filename: "ui/item/item-pickaxe-grey.png"
        },
        pistol: {
            filename: "ui/item/item-pistol-grey.png"
        },
        sniperGrey: {
            filename: "ui/item/item-sniper-grey.png"
        },
        sniperGreen: {
            filename: "ui/item/item-sniper-green.png"
        },
        sniperBlue: {
            filename: "ui/item/item-sniper-blue.png"
        },
        sniperPurple: {
            filename: "ui/item/item-sniper-purple.png"
        },
        sniperYellow: {
            filename: "ui/item/item-sniper-yellow.png"
        },
        shotgunGrey: {
            filename: "ui/item/item-shotgun-grey.png"
        },
        shotgunGreen: {
            filename: "ui/item/item-shotgun-green.png"
        },
        shotgunBlue: {
            filename: "ui/item/item-shotgun-blue.png"
        },
        shotgunPurple: {
            filename: "ui/item/item-shotgun-purple.png"
        },
        shotgunYellow: {
            filename: "ui/item/item-shotgun-yellow.png"
        },
        ak47Grey: {
            filename: "ui/item/item-ak47-grey.png"
        },
        ak47Green: {
            filename: "ui/item/item-ak47-green.png"
        },
        ak47Blue: {
            filename: "ui/item/item-ak47-blue.png"
        },
        ak47Purple: {
            filename: "ui/item/item-ak47-purple.png"
        },
        ak47Yellow: {
            filename: "ui/item/item-ak47-yellow.png"
        },
        uriGrey: {
            filename: "ui/item/item-uri-grey.png"
        },
        uriGreen: {
            filename: "ui/item/item-uri-green.png"
        },
        uriBlue: {
            filename: "ui/item/item-uri-blue.png"
        },
        uriPurple: {
            filename: "ui/item/item-uri-purple.png"
        },
        uriYellow: {
            filename: "ui/item/item-uri-yellow.png"
        },
        stoneball: {
            filename: "ui/item/item-stoneball-grey.png"
        },
        woodplank: {
            filename: "ui/item/item-woodplank-grey.png"
        },
        tnt: {
            filename: "ui/item/item-tnt-yellow.png"
        },
        stairs: {
            filename: "ui/item/item-stairs-grey.png"
        }
    }, G.Assets[G.a836.Sound] = {}, G.a863 = {
        a864: {
            size: new THREE.Vector3(1, 4, 1),
            offset: new THREE.Vector3(0, -3, 0),
            a859: function(t, e, i, o, n, s) {
                var r, a = 1 / 64,
                    h = 1 / 64;
                (r = t.faceVertexUvs[0][2 * e])[0].x = i * a, r[0].y = o * h, r[1].x = i * a, r[1].y = s * h, r[2].x = n * a, r[2].y = o * h, (r = t.faceVertexUvs[0][2 * e + 1])[0].x = i * a, r[0].y = s * h, r[1].x = n * a, r[1].y = s * h, r[2].x = n * a, r[2].y = o * h
            },
            a49es: function() {
                var t = {
                    a599: 1 / 3
                };
                t.a760 = 8.4 * t.a599, t.a761 = 8.4 * t.a599, t.a762 = 8.4 * t.a599, t.helmH = 9 * t.a599, t.helmW = 9 * t.a599, t.helmD = 9 * t.a599, t.a763 = 9 * t.a599, t.a764 = 9 * t.a599, t.a765 = 9 * t.a599, t.a766 = 12 * t.a599, t.a767 = 8 * t.a599, t.a768 = 4 * t.a599, t.a769 = 12 * t.a599, t.a770 = 4 * t.a599, t.a778D = 4 * t.a599, t.a771 = 12 * t.a599, t.a772 = 4 * t.a599, t.a773 = 4 * t.a599;
                var e = new THREE.CubeGeometry(t.a761, t.a760, t.a762);
                this.a859(e, 0, 16, 56, 24, 48), this.a859(e, 1, 0, 56, 8, 48), this.a859(e, 2, 8, 64, 16, 56), this.a859(e, 3, 16, 64, 24, 56), this.a859(e, 4, 8, 56, 16, 48), this.a859(e, 5, 24, 56, 32, 48);
                var i = new THREE.Mesh(e);
                e = new THREE.CubeGeometry(t.helmW, t.helmH, t.helmD);
                this.a859(e, 0, 48, 56, 56, 48), this.a859(e, 1, 32, 56, 40, 48), this.a859(e, 2, 40, 64, 48, 56), this.a859(e, 3, 48, 64, 56, 56), this.a859(e, 4, 40, 56, 48, 48), this.a859(e, 5, 56, 56, 64, 48);
                var o = new THREE.Mesh(e);
                e = new THREE.CubeGeometry(t.a767, t.a766, t.a768);
                this.a859(e, 0, 28, 44, 32, 32), this.a859(e, 1, 16, 44, 20, 32), this.a859(e, 2, 20, 48, 28, 44), this.a859(e, 3, 28, 48, 32, 44), this.a859(e, 4, 20, 44, 28, 32), this.a859(e, 5, 32, 44, 40, 32);
                var n = new THREE.Mesh(e);
                e = new THREE.CubeGeometry(t.a772, t.a771, t.a773);
                this.a859(e, 0, 48, 44, 52, 32), this.a859(e, 1, 40, 44, 44, 32), this.a859(e, 2, 44, 48, 48, 44), this.a859(e, 3, 48, 48, 52, 44), this.a859(e, 4, 44, 44, 48, 32), this.a859(e, 5, 52, 44, 56, 32);
                var s = new THREE.Mesh(e);
                e = new THREE.CubeGeometry(t.a772, t.a771, t.a773);
                this.a859(e, 0, 44, 44, 40, 32), this.a859(e, 1, 52, 44, 48, 32), this.a859(e, 2, 44, 48, 48, 44), this.a859(e, 3, 48, 48, 52, 44), this.a859(e, 4, 48, 44, 44, 32), this.a859(e, 5, 56, 44, 52, 32);
                var r = new THREE.Mesh(e);
                e = new THREE.CubeGeometry(t.a770, t.a769, t.a778D);
                this.a859(e, 0, 8, 44, 12, 32), this.a859(e, 1, 0, 44, 4, 32), this.a859(e, 2, 4, 48, 8, 44), this.a859(e, 3, 8, 48, 12, 44), this.a859(e, 4, 4, 44, 8, 32), this.a859(e, 5, 12, 44, 16, 32);
                var a = new THREE.Mesh(e);
                e = new THREE.CubeGeometry(t.a770, t.a769, t.a778D);
                this.a859(e, 0, 4, 44, 0, 32), this.a859(e, 1, 12, 44, 8, 32), this.a859(e, 2, 8, 48, 4, 44), this.a859(e, 3, 12, 48, 8, 44), this.a859(e, 4, 8, 44, 4, 32), this.a859(e, 5, 16, 44, 12, 32);
                var h = new THREE.Mesh(e);
                G.a863.a864.meshes = {
                    head: i,
                    helm: o,
                    body: n,
                    a774: s,
                    a775: r,
                    a777: h,
                    a776: a,
                    a778: h
                }
            },
            getTriangles: function(t) {
                if (this.meshes.head.geometry._bufferGeometry && this.meshes.body.geometry._bufferGeometry) {
                    var e = this.meshes.head.geometry._bufferGeometry.attributes.position.array,
                        i = this.meshes.body.geometry._bufferGeometry.attributes.position.array;
                    this.triangles || (this.triangles = new Float32Array(e.length + i.length)), this.tempVertex || (this.tempVertex = new THREE.Vector3);
                    for (var o = 0, n = 0; n < e.length; n += 3) this.tempVertex.set(e[n], e[n + 1], e[n + 2]), this.meshes.head.localToWorld(this.tempVertex), this.triangles[o++] = this.tempVertex.x, this.triangles[o++] = this.tempVertex.y, this.triangles[o++] = this.tempVertex.z;
                    for (n = 0; n < i.length; n += 3) this.tempVertex.set(i[n], i[n + 1], i[n + 2]), this.meshes.body.localToWorld(this.tempVertex), this.triangles[o++] = this.tempVertex.x, this.triangles[o++] = this.tempVertex.y, this.triangles[o++] = this.tempVertex.z
                } else this.triangles = []
            }
        }
    }, G.a863.a864.shoutout_a759s = {}, G.a863.a864.shoutout_a759s.start = function(t) {}, G.a863.a864.shoutout_a759s.a107 = function(t) {
        var e = {};
        if (GAME.matchStarted) {
            if (t.a759s.matchStartingGo.a844 ? !1 !== GAME.matchRemainingTime && GAME.matchRemainingTime >= 0 && (e.matchRemainingTime = {
                    a842: 1e3
                }) : e.matchStartingGo = {
                    a842: 1e3
                }, GAME.matchEnded)
                if (0 == GAME.matchEndType);
                else if (1 == GAME.matchEndType) {
                GAME.winnerId == GAME.a865.player.ID ? (i = "you won!", o = "0", n = "250", s = "50") : (i = "you lost :(", o = "255", n = "0", s = "0"), GAME.leaderboardEnd ? e.leaderboardEnd = {
                    a842: 500,
                    title: i,
                    red: o,
                    green: n,
                    blue: s,
                    time: GAME.matchEndTime
                } : e.leaderboardStart = {
                    a842: 1e3,
                    title: i,
                    red: o,
                    green: n,
                    blue: s,
                    time: GAME.matchEndTime
                }
            } else if (2 == GAME.matchEndType) {
                var i, o, n, s;
                GAME.winnerId == GAME.a865.player.ID ? (i = "you won!", o = "0", n = "250", s = "50") : (i = "you lost :(", o = "0", n = "250", s = "50"), GAME.winEnd ? e.winEnd = {
                    a842: 500,
                    title: i,
                    red: o,
                    green: n,
                    blue: s,
                    name: G.othera822ers[GAME.winnerId].name,
                    time: GAME.matchEndTime
                } : e.winStart = {
                    a842: 1e3,
                    title: i,
                    red: o,
                    green: n,
                    blue: s,
                    name: G.othera822ers[GAME.winnerId].name,
                    time: GAME.matchEndTime
                }
            }
        } else if (GAME.matchStartingSoon) {
            var r = !1;
            GAME.matchStartingSoonTimer || (GAME.matchStartingSoonTimer = GAME.matchStartingSoonTime), GAME.matchStartingSoonNext && (GAME.matchStartingSoonTime != GAME.matchStartingSoonTimer ? (GAME.matchStartingSoonTimer = GAME.matchStartingSoonTime, GAME.matchStartingSoonNext = !1) : r = !0), r || (e.matchStartingSoon = {
                a842: 1e3,
                background: !1
            })
        } else GAME.matchStartWaiting && !G.CONFIG.creative && (e.middleZzz = {
            a842: 2e3,
            background: !0,
            msg: "Waiting for players"
        });
        for (var a = 0; a < t.gO.eventQueue.length; a++) {
            "topWow" == t.gO.eventQueue[a].type && (e.topWow = {
                a842: 2100,
                offset: 70,
                background: !0,
                msg: t.gO.eventQueue[a].values.msg,
                color: t.gO.eventQueue[a].values.color,
                endFunc: function() {
                    t.gO.removeEventQueue(a)
                }
            });
            break
        }
        GAME.a865.player.dead ? (i = "[Patcher] You died", o = "255", n = "50", s = "50", GAME.deadPopup || !1 === t.a759s.deadStart.a844 ? e.deadStart = {
            a842: 200,
            reset: 0,
            title: i,
            red: o,
            green: n,
            blue: s
        } : e.deadEnd = {
            a842: 2400,
            title: i,
            red: o,
            green: n,
            blue: s
        }) : GAME.a510 || GAME.ina866 || GAME.pointerLockEnabled || GAME.matchStartingSoon || GAME.matchEnded || (e.pointerLock = {
            a842: 1800,
            background: !1
        }, e.middleZzz = !1);
        return GAME.ina866 || (GAME.a865.player.dead || GAME.matchEnded || (e.leaderboard = {
            a842: 3e3
        }), e.killFeed = {
            a842: 1e3
        }), e.chat = {
            a842: 1e3,
            reset: GAME.newChatMessage
        }, GAME.newChatMessage && (GAME.newChatMessage = !1), e
    }, G.a863.a864.shoutout_a759s.a759s = {
        matchRemainingTime: {
            a843: {
                .48: {
                    start: function(t) {},
                    a853: function(t, e) {
                        GAME.bottleneckCanvas.text([0, 26], [.5, 0], "" + G.timeToTimer(GAME.matchRemainingTime), "rgba(255, 255, 255, 1)", 42 + 1 * t.a852, "middle", "center", G.a816)
                    },
                    end: function(t) {}
                },
                .52: {
                    start: function(t) {},
                    a853: function(t, e) {
                        GAME.bottleneckCanvas.text([0, 26], [.5, 0], "" + G.timeToTimer(GAME.matchRemainingTime), "rgba(255, 255, 255, 1)", 43 - 1 * t.a852, "middle", "center", G.a816)
                    },
                    end: function(t) {}
                }
            }
        },
        chat: {
            a843: {
                1: {
                    start: function(t) {
                        GAME.chatCanvas.cvs.clear();
                        for (var e = 0, i = GAME.chat.length - 1; i >= GAME.chat.length - 5; i--)
                            if (GAME.chat[i]) {
                                for (var o = (GAME.chat[i].name + ": " + GAME.chat[i].msg).split(" "), n = "", s = [], r = 0; r < o.length; r++) n.length + o[r].length > 40 ? (s.push(n), n = o[r] + " ") : n += o[r] + " ", r == o.length - 1 && s.push(n);
                                for (var a = 20 * s.length, h = 0; h < s.length; h++) GAME.chatCanvas.text([20, -154 + e - a + 20 * h], [0, 1], s[h], "rgba(255, 255, 255, 1)", 16, "top", "left", "Verdana", void 0, 400);
                                e -= a
                            } GAME.chatCanvas.cvs.flip(), GAME.chatCanvas.cvs.show()
                    },
                    a853: function(t, e) {},
                    end: function(t) {}
                }
            }
        },
        killFeed: {
            a843: {
                1: {
                    start: function(t) {
                        if (GAME.killfeedCanvas.cvs.clear(), GAME.killfeed.length < 5) var e = 0;
                        else e = GAME.killfeed.length - 5;
                        for (var i = 0, o = e; o < GAME.killfeed.length; o++) GAME.killfeed[o] && (GAME.killfeedCanvas.text([10, 4 + 24 * i], [0, 0], (GAME.killfeed[o].killer.length < 10 ? GAME.killfeed[o].killer : GAME.killfeed[o].killer.substring(0, 10) + "..") + " " + GAME.killfeed[o].action + " " + (GAME.killfeed[o].victim.length < 10 ? GAME.killfeed[o].victim : GAME.killfeed[o].victim.substring(0, 10) + ".."), "rgba(255, 255, 255, .9)", 20, "top", "left", G.a816), i++);
                        GAME.killfeedCanvas.cvs.flip(), GAME.killfeedCanvas.cvs.show()
                    },
                    a853: function(t, e) {},
                    end: function(t) {}
                }
            }
        },
        leaderboard: {
            a843: {
                1: {
                    start: function(t) {
                        GAME.leaderboardCanvas.cvs.clear(), GAME.leaderboardCanvas.a449([-230, 10], [1, 0], [220, 280], !0, 1, "rgba(0, 0, 0, 0.6)");
                        for (var e = 0; e < GAME.leaderboard.length; e++) GAME.leaderboard[e] && (GAME.leaderboard[e].me ? (GAME.leaderboardCanvas.text([-204, 18 + 24 * e], [1, 0], GAME.leaderboard[e].rank + ". " + (GAME.leaderboard[e].name.length < 10 ? GAME.leaderboard[e].name : GAME.leaderboard[e].name.substring(0, 10) + ".."), "rgba(255, 255, 255, 1)", 20, "top", "left", G.a816), GAME.leaderboardCanvas.text([-24, 18 + 24 * e], [1, 0], GAME.leaderboard[e].a649, "rgba(255, 255, 255, 1)", 23, "top", "center", G.a816)) : (GAME.leaderboardCanvas.text([-204, 18 + 24 * e], [1, 0], GAME.leaderboard[e].rank + ". " + (GAME.leaderboard[e].name.length < 10 ? GAME.leaderboard[e].name : GAME.leaderboard[e].name.substring(0, 10) + ".."), "rgba(255, 50, 0, 1)", 20, "top", "left", G.a816), GAME.leaderboardCanvas.text([-24, 18 + 24 * e], [1, 0], GAME.leaderboard[e].a649, "rgba(255, 255, 255, 1)", 23, "top", "center", G.a816)));
                        GAME.leaderboardCanvas.cvs.flip(), GAME.leaderboardCanvas.cvs.show()
                    },
                    a853: function(t, e) {},
                    end: function(t) {}
                }
            }
        },
        matchStartingSoon: {
            a843: {
                .3: {
                    start: function(t) {
                        t.gO.yoSize = 80, t.gO.yoOpacity = 1
                    },
                    a853: function(t, e) {
                        GAME.bottleneckCanvas.text([0, 0], [.5, .5], GAME.matchStartingSoonTimer, "rgba(0, 255, 50, " + t.gO.yoOpacity * a97(3, t.a852) + ")", t.gO.yoSize * a97(3, t.a852), "middle", "center", G.a816)
                    },
                    end: function(t) {}
                },
                .5: {
                    start: function(t) {},
                    a853: function(t, e) {
                        GAME.bottleneckCanvas.text([0, 0], [.5, .5], GAME.matchStartingSoonTimer, "rgba(0, 255, 50, " + t.gO.yoOpacity + ")", t.gO.yoSize, "middle", "center", G.a816)
                    },
                    end: function(t) {}
                },
                .2: {
                    start: function(t) {},
                    a853: function(t, e) {
                        GAME.bottleneckCanvas.text([0, 0], [.5, .5], GAME.matchStartingSoonTimer, "rgba(0, 255, 50, " + (t.gO.yoOpacity - t.gO.yoOpacity * a97(3, t.a852)) + ")", t.gO.yoSize + 40 * a97(3, t.a852), "middle", "center", G.a816)
                    },
                    end: function(t, e) {
                        GAME.matchStartingSoonNext = !0
                    }
                }
            }
        },
        matchStartingGo: {
            a843: {
                .3: {
                    start: function(t) {
                        t.gO.yoSize = 100, t.gO.yoOpacity = 1
                    },
                    a853: function(t, e) {
                        GAME.bottleneckCanvas.text([0, 0], [.5, .5], "Go!", "rgba(0, 255, 50, " + t.gO.yoOpacity * a97(3, t.a852) + ")", t.gO.yoSize * a97(3, t.a852), "middle", "center", G.a816)
                    },
                    end: function(t) {}
                },
                .5: {
                    start: function(t) {},
                    a853: function(t, e) {
                        GAME.bottleneckCanvas.text([0, 0], [.5, .5], "Go!", "rgba(0, 255, 50, " + t.gO.yoOpacity + ")", t.gO.yoSize, "middle", "center", G.a816)
                    },
                    end: function(t) {}
                },
                .2: {
                    start: function(t) {},
                    a853: function(t, e) {
                        GAME.bottleneckCanvas.text([0, 0], [.5, .5], "Go!", "rgba(0, 255, 50, " + (t.gO.yoOpacity - t.gO.yoOpacity * a97(3, t.a852)) + ")", t.gO.yoSize + 40 * a97(3, t.a852), "middle", "center", G.a816)
                    },
                    end: function(t, e) {
                        GAME.matchStartingSoonNext = !0
                    }
                }
            }
        },
        middleWow: {
            a843: {
                .3: {
                    start: function(t) {
                        t.gO.yoSize = 80, t.gO.yoOpacity = 1
                    },
                    a853: function(t, e) {
                        GAME.bottleneckCanvas.text([0, 0], [.5, .5], [e.msg, e.msg2], ["rgba(255, 255, 255, " + t.gO.yoOpacity * a97(3, t.a852) + ")", "rgba(0, 255, 50, " + t.gO.yoOpacity * a97(3, t.a852) + ")"], t.gO.yoSize * a97(3, t.a852), "middle", "center", G.a816, !0)
                    },
                    end: function(t) {}
                },
                .5: {
                    start: function(t) {},
                    a853: function(t, e) {
                        GAME.bottleneckCanvas.text([0, 0], [.5, .5], [e.msg, e.msg2], ["rgba(255, 255, 255, " + t.gO.yoOpacity + ")", "rgba(0, 255, 50, " + t.gO.yoOpacity + ")"], t.gO.yoSize, "middle", "center", G.a816, !0)
                    },
                    end: function(t) {}
                },
                .2: {
                    start: function(t) {},
                    a853: function(t, e) {
                        GAME.bottleneckCanvas.text([0, 0], [.5, .5], [e.msg, e.msg2], ["rgba(255, 255, 255, " + (t.gO.yoOpacity - t.gO.yoOpacity * a97(3, t.a852)) + ")", "rgba(0, 255, 50, " + (t.gO.yoOpacity - t.gO.yoOpacity * a97(3, t.a852)) + ")"], t.gO.yoSize + 40 * a97(3, t.a852), "middle", "center", G.a816, !0)
                    },
                    end: function(t, e) {
                        e.endFunc && e.endFunc()
                    }
                }
            }
        },
        topWow: {
            a843: {
                .3: {
                    start: function(t) {
                        t.gO.yoSize = 40
                    },
                    a853: function(t, e) {
                        GAME.bottleneckCanvas.a449([-180, 12], [.5, 0], [360, 70], !0, 4, "rgba(0, 0, 0, " + .5 * a97(3, t.a852) + ")");
                        for (var i = 1 * a97(3, t.a852), o = [], n = 0; n < e.color.length; n++) o.push(e.color[n].replace("{opacity}", i));
                        GAME.bottleneckCanvas.text([0, 44], [.5, 0], e.msg, o, t.gO.yoSize * a97(3, t.a852), "middle", "center", G.a816, !0)
                    },
                    end: function(t) {}
                },
                .5: {
                    start: function(t) {},
                    a853: function(t, e) {
                        GAME.bottleneckCanvas.a449([-180, 12], [.5, 0], [360, 70], !0, 4, "rgba(0, 0, 0, 0.5)");
                        for (var i = [], o = 0; o < e.color.length; o++) i.push(e.color[o].replace("{opacity}", 1));
                        GAME.bottleneckCanvas.text([0, 44], [.5, 0], e.msg, i, t.gO.yoSize, "middle", "center", G.a816, !0)
                    },
                    end: function(t) {}
                },
                .2: {
                    start: function(t) {},
                    a853: function(t, e) {
                        for (var i = 1 - 1 * a97(3, t.a852), o = [], n = 0; n < e.color.length; n++) o.push(e.color[n].replace("{opacity}", i));
                        GAME.bottleneckCanvas.text([0, 44], [.5, 0], e.msg, o, t.gO.yoSize + 40 * a97(3, t.a852), "middle", "center", G.a816, !0)
                    },
                    end: function(t, e) {
                        e.endFunc && e.endFunc()
                    }
                }
            }
        },
        middleZzz: {
            a843: {
                .48: {
                    start: function(t) {
                        t.gO.yoSize = 48, t.gO.yoOpacity = .8
                    },
                    a853: function(t, e) {
                        GAME.bottleneckCanvas.text([0, 0], [.5, .5], e.msg, "rgba(0, 255, 50, " + t.gO.yoOpacity * t.a852 + ")", t.gO.yoSize + 1 * t.a852, "middle", "center", G.a816)
                    },
                    end: function(t) {}
                },
                .52: {
                    start: function(t) {},
                    a853: function(t, e) {
                        GAME.bottleneckCanvas.text([0, 0], [.5, .5], e.msg, "rgba(0, 255, 50, " + (t.gO.yoOpacity - t.gO.yoOpacity * t.a852) + ")", t.gO.yoSize + 1 - 1 * t.a852, "middle", "center", G.a816)
                    },
                    end: function(t) {}
                }
            }
        },
        topZzz: {
            a843: {
                .48: {
                    start: function(t) {
                        t.gO.yoSize = 32, t.gO.yoOpacity = 1
                    },
                    a853: function(t, e) {
                        GAME.bottleneckCanvas.a449([-180, -70], [.5, 0], [360, 140], !0, 0, "rgba(0, 0, 0, 0.5)"), GAME.bottleneckCanvas.text([0, 0], [.5, .035], e.msg, "rgba(0, 255, 50, " + t.gO.yoOpacity + ")", t.gO.yoSize + 1 * t.a852, "middle", "center", G.a816)
                    },
                    end: function(t) {}
                },
                .52: {
                    start: function(t) {},
                    a853: function(t, e) {
                        GAME.bottleneckCanvas.a449([-180, -70], [.5, 0], [360, 140], !0, 0, "rgba(0, 0, 0, 0.5)"), GAME.bottleneckCanvas.text([0, 0], [.5, .035], e.msg, "rgba(0, 255, 50, " + t.gO.yoOpacity + ")", t.gO.yoSize + 1 - 1 * t.a852, "middle", "center", G.a816)
                    },
                    end: function(t) {}
                }
            }
        },
        leaderboardStart: {
            a843: {
                1: {
                    start: function(t) {
                        GAME.leaderboardPopup = !1
                    },
                    a853: function(t, e) {
                        var i = 0;
                        GAME.bottleneckCanvas.cvs.bufferCanvas.width < 1024 && (i = 100), GAME.bottleneckCanvas.a449([-150 + i, -200], [.5, .5], [300, 420], !0, 0, "rgba(0, 0, 0, " + .35 * a97(3, t.a852) + ")"), GAME.bottleneckCanvas.a449([-150 + i, 120], [.5, .5], [300, 100], !0, 0, "rgba(0, 0, 0, " + .5 * a97(3, t.a852) + ")"), GAME.bottleneckCanvas.a449([-2500 + i, -1500], [.5, .5], [5e3, 3e3], !0, 0, "rgba(5, 0, 0, " + .5 * a97(3, t.a852) + ")"), GAME.bottleneckCanvas.text([0 + i, -94], [.5, .5], e.title, "rgba(" + e.red + ", " + e.green + ", " + e.blue + ", " + t.gO.yoOpacity * a97(3, t.a852) + ")", 48 * a97(3, t.a852), "middle", "center", G.a816), GAME.bottleneckCanvas.text([0 + i, -40], [.5, .5], ["1.", " / ", GAME.leaderboard[0].name, " / ", GAME.leaderboard[0].a649], ["#ffffff", "#000000", "#ffffff", "#000000", "#ffffff"], 22 * a97(3, t.a852), "middle", "center", G.a816, !0);
                        for (var o = 1; o < 5; o++) GAME.leaderboard[o] && GAME.bottleneckCanvas.text([0 + i, 24 * o - 16], [.5, .5], [GAME.leaderboard[o].rank + ".", " / ", GAME.leaderboard[o].name, " / ", GAME.leaderboard[o].a649], ["#ffffff", "#000000", "#ffffff", "#000000", "#ffffff"], 20 * a97(3, t.a852), "middle", "center", G.a816, !0);
                        GAME.bottleneckCanvas.text([0 + i, 170], [.5, .5], "Disconnecting in " + GAME.disconnectingSoon + "...", "rgba(255, 255, 255, " + 1 * a97(3, t.a852) + ")", 24 * a97(3, t.a852), "middle", "center", G.a816)
                    },
                    end: function(t, e) {
                        t.a852 = 1, this.a853(t, e), GAME.leaderboardEnd = !0
                    }
                }
            }
        },
        leaderboardEnd: {
            a843: {
                .48: {
                    start: function(t) {},
                    a853: function(t, e) {
                        var i = 0;
                        GAME.bottleneckCanvas.cvs.bufferCanvas.width < 1024 && (i = 100), GAME.bottleneckCanvas.a449([-150 + i, -200], [.5, .5], [300, 420], !0, 0, "rgba(0, 0, 0, 0.35)"), GAME.bottleneckCanvas.a449([-150 + i, 120], [.5, .5], [300, 100], !0, 0, "rgba(0, 0, 0, 0.5)"), GAME.bottleneckCanvas.a449([-2500 + i, -1500], [.5, .5], [5e3, 3e3], !0, 0, "rgba(5, 0, 0, " + (.5 - .1 * a97(3, t.a852)) + ")"), GAME.bottleneckCanvas.text([0 + i, -94], [.5, .5], e.title, "rgba(" + e.red + ", " + e.green + ", " + e.blue + ", 1)", 48 + 0 * a97(3, t.a852), "middle", "center", G.a816), GAME.bottleneckCanvas.text([0 + i, -40], [.5, .5], ["1.", " / ", GAME.leaderboard[0].name, " / ", GAME.leaderboard[0].a649], ["#ffffff", "#000000", "#ffffff", "#000000", "#ffffff"], 22 + 2 * a97(3, t.a852), "middle", "center", G.a816, !0), GAME.bottleneckCanvas.text([0 + i, -16], [.5, .5], "*------------------*", "rgba(" + e.red + ", " + e.green + ", " + e.blue + ", 1)", 20, "middle", "center", G.a816);
                        for (var o = 1; o < 5; o++) GAME.leaderboard[o] && GAME.bottleneckCanvas.text([0 + i, 24 * o - 16], [.5, .5], [GAME.leaderboard[o].rank + ".", " / ", GAME.leaderboard[o].name, " / ", GAME.leaderboard[o].a649], ["#ffffff", "#000000", "#ffffff", "#000000", "#ffffff"], 20, "middle", "center", G.a816, !0);
                        GAME.bottleneckCanvas.text([0 + i, 170], [.5, .5], "Disconnecting in " + GAME.disconnectingSoon + "...", "rgba(255, 255, 255, 1)", 24, "middle", "center", G.a816)
                    },
                    end: function(t) {}
                },
                .52: {
                    start: function(t) {},
                    a853: function(t, e) {
                        var i = 0;
                        GAME.bottleneckCanvas.cvs.bufferCanvas.width < 1024 && (i = 100), GAME.bottleneckCanvas.a449([-150 + i, -200], [.5, .5], [300, 420], !0, 0, "rgba(0, 0, 0, 0.35)"), GAME.bottleneckCanvas.a449([-150 + i, 120], [.5, .5], [300, 100], !0, 0, "rgba(0, 0, 0, 0.5)"), GAME.bottleneckCanvas.a449([-2500 + i, -1500], [.5, .5], [5e3, 3e3], !0, 0, "rgba(5, 0, 0, " + (.4 + .1 * a97(3, t.a852)) + ")"), GAME.bottleneckCanvas.text([0 + i, -94], [.5, .5], e.title, "rgba(" + e.red + ", " + e.green + ", " + e.blue + ", 1)", 48 - 0 * a97(3, t.a852), "middle", "center", G.a816), GAME.bottleneckCanvas.text([0 + i, -40], [.5, .5], ["1.", " / ", GAME.leaderboard[0].name, " / ", GAME.leaderboard[0].a649], ["#ffffff", "#000000", "#ffffff", "#000000", "#ffffff"], 24 - 2 * a97(3, t.a852), "middle", "center", G.a816, !0), GAME.bottleneckCanvas.text([0 + i, -16], [.5, .5], "--------*--------", "rgba(" + e.red + ", " + e.green + ", " + e.blue + ", 1)", 20, "middle", "center", G.a816);
                        for (var o = 1; o < 5; o++) GAME.leaderboard[o] && GAME.bottleneckCanvas.text([0 + i, 24 * o - 16], [.5, .5], [GAME.leaderboard[o].rank + ".", " / ", GAME.leaderboard[o].name, " / ", GAME.leaderboard[o].a649], ["#ffffff", "#000000", "#ffffff", "#000000", "#ffffff"], 20, "middle", "center", G.a816, !0);
                        GAME.bottleneckCanvas.text([0 + i, 170], [.5, .5], "Disconnecting in " + GAME.disconnectingSoon + "...", "rgba(255, 255, 255, 1)", 24, "middle", "center", G.a816)
                    },
                    end: function(t) {}
                }
            }
        },
        winStart: {
            a843: {
                1: {
                    start: function(t) {},
                    a853: function(t, e) {
                        var i = 0;
                        GAME.bottleneckCanvas.cvs.bufferCanvas.width < 1024 && (i = 100), GAME.bottleneckCanvas.a449([-150 + i, -200], [.5, .5], [300, 420], !0, 0, "rgba(0, 0, 0, " + .35 * a97(3, t.a852) + ")"), GAME.bottleneckCanvas.a449([-150 + i, 120], [.5, .5], [300, 100], !0, 0, "rgba(0, 0, 0, " + .5 * a97(3, t.a852) + ")"), GAME.bottleneckCanvas.a449([-2500 + i, -1500], [.5, .5], [5e3, 3e3], !0, 0, "rgba(5, 0, 0, " + .5 * a97(3, t.a852) + ")"), GAME.bottleneckCanvas.text([0 + i, -90], [.5, .5], e.title, "rgba(" + e.red + ", " + e.green + ", " + e.blue + ", " + t.gO.yoOpacity * a97(3, t.a852) + ")", 48 * a97(3, t.a852), "middle", "center", G.a816), GAME.bottleneckCanvas.text([0 + i, 20], [.5, .5], ["#1", " / ", e.name, " / ", milliTimeToTimer(e.time)], ["#ffffff", "#000000", "#ffffff", "#000000", "#ffffff"], 32 * a97(3, t.a852), "middle", "center", G.a816, !0), GAME.bottleneckCanvas.text([0 + i, 170], [.5, .5], "Disconnecting in " + GAME.disconnectingSoon + "...", "rgba(255, 255, 255, " + 1 * a97(3, t.a852) + ")", 24 * a97(3, t.a852), "middle", "center", G.a816)
                    },
                    end: function(t, e) {
                        t.a852 = 1, this.a853(t, e), GAME.winEnd = !0
                    }
                }
            }
        },
        winEnd: {
            a843: {
                .48: {
                    start: function(t) {},
                    a853: function(t, e) {
                        var i = 0;
                        GAME.bottleneckCanvas.cvs.bufferCanvas.width < 1024 && (i = 100), GAME.bottleneckCanvas.a449([-150 + i, -200], [.5, .5], [300, 420], !0, 0, "rgba(0, 0, 0, 0.35)"), GAME.bottleneckCanvas.a449([-150 + i, 120], [.5, .5], [300, 100], !0, 0, "rgba(0, 0, 0, 0.5)"), GAME.bottleneckCanvas.a449([-2500 + i, -1500], [.5, .5], [5e3, 3e3], !0, 0, "rgba(5, 0, 0, " + (.5 - .1 * a97(3, t.a852)) + ")"), GAME.bottleneckCanvas.text([0 + i, -90], [.5, .5], e.title, "rgba(" + e.red + ", " + e.green + ", " + e.blue + ", 1)", 48 + 0 * a97(3, t.a852), "middle", "center", G.a816), GAME.bottleneckCanvas.text([0 + i, 20], [.5, .5], [e.name, " / ", milliTimeToTimer(e.time)], ["#ffffff", "#000000", "#ffffff", "#000000", "#ffffff"], 20 + 2 * a97(3, t.a852), "middle", "center", G.a816, !0), GAME.bottleneckCanvas.text([0 + i, 170], [.5, .5], "Disconnecting in " + GAME.disconnectingSoon + "...", "rgba(255, 255, 255, 1)", 24, "middle", "center", G.a816)
                    },
                    end: function(t) {}
                },
                .52: {
                    start: function(t) {},
                    a853: function(t, e) {
                        var i = 0;
                        GAME.bottleneckCanvas.cvs.bufferCanvas.width < 1024 && (i = 100), GAME.bottleneckCanvas.a449([-150 + i, -200], [.5, .5], [300, 420], !0, 0, "rgba(0, 0, 0, 0.35)"), GAME.bottleneckCanvas.a449([-150 + i, 120], [.5, .5], [300, 100], !0, 0, "rgba(0, 0, 0, 0.5)"), GAME.bottleneckCanvas.a449([-2500 + i, -1500], [.5, .5], [5e3, 3e3], !0, 0, "rgba(5, 0, 0, " + (.4 + .1 * a97(3, t.a852)) + ")"), GAME.bottleneckCanvas.text([0 + i, -90], [.5, .5], e.title, "rgba(" + e.red + ", " + e.green + ", " + e.blue + ", 1)", 48 - 0 * a97(3, t.a852), "middle", "center", G.a816), GAME.bottleneckCanvas.text([0 + i, 20], [.5, .5], [e.name, " / ", milliTimeToTimer(e.time)], ["#ffffff", "#000000", "#ffffff", "#000000", "#ffffff"], 22 - 2 * a97(3, t.a852), "middle", "center", G.a816, !0), GAME.bottleneckCanvas.text([0 + i, 170], [.5, .5], "Disconnecting in " + GAME.disconnectingSoon + "...", "rgba(255, 255, 255, 1)", 24, "middle", "center", G.a816)
                    },
                    end: function(t) {}
                }
            }
        },

        deadStart: {
            a843: {
                1: {
                    start: function(t) {
                        GAME.deadPopup = !1
                    },
                    a853: function(t, e) {
                        var i = 0;
                        GAME.bottleneckCanvas.cvs.bufferCanvas.width < 1024 && (i = 100), GAME.bottleneckCanvas.a449([-150 + i, -200], [.5, .5], [300, 420], !0, 0, "rgba(0, 0, 0, " + .35 * a97(3, t.a852) + ")"), GAME.bottleneckCanvas.a449([-150 + i, 120], [.5, .5], [300, 100], !0, 0, "rgba(0, 0, 0, " + .5 * a97(3, t.a852) + ")"), GAME.bottleneckCanvas.a449([-2500 + i, -1500], [.5, .5], [5e3, 3e3], !0, 0, "rgba(5, 0, 0, " + .5 * a97(3, t.a852) + ")"), GAME.bottleneckCanvas.text([0 + i, -90], [.5, .5], e.title, "rgba(" + e.red + ", " + e.green + ", " + e.blue + ", " + 1 * a97(3, t.a852) + ")", 48 * a97(3, t.a852), "middle", "center", G.a816), GAME.bottleneckCanvas.text([0 + i, 20], [.5, .5], G.othera822ers[GAME.myKillerId].name + " killed you", "#ffffff", 20 * a97(3, t.a852), "middle", "center", G.a816), GAME.bottleneckCanvas.text([0 + i, 170], [.5, .5], "Respawn in " + GAME.respawnIn + "...", "rgba(255, 255, 255, " + 1 * a97(3, t.a852) + ")", 26 * a97(3, t.a852), "middle", "center", G.a816)
                    },
                    end: function(t, e) {
                        t.a852 = 1, this.a853(t, e)
                    }
                }
            }
        },

        deadEnd: {
            a843: {
                .48: {
                    start: function(t) {},
                    a853: function(t, e) {
                        var i = 0;
                        GAME.bottleneckCanvas.cvs.bufferCanvas.width < 1024 && (i = 100), GAME.bottleneckCanvas.a449([-150 + i, -200], [.5, .5], [300, 420], !0, 0, "rgba(0, 0, 0, 0.35)"), GAME.bottleneckCanvas.a449([-150 + i, 120], [.5, .5], [300, 100], !0, 0, "rgba(0, 0, 0, 0.5)"), GAME.bottleneckCanvas.a449([-2500 + i, -1500], [.5, .5], [5e3, 3e3], !0, 0, "rgba(5, 0, 0, " + (.5 - .1 * a97(3, t.a852)) + ")"), GAME.bottleneckCanvas.text([0 + i, -90], [.5, .5], e.title, "rgba(" + e.red + ", " + e.green + ", " + e.blue + ", 1)", 48 - 0 * a97(3, t.a852), "middle", "center", G.a816), GAME.bottleneckCanvas.text([0 + i, 20], [.5, .5], G.othera822ers[GAME.myKillerId].name + " killed you", "#ffffff", 20 - 0 * a97(3, t.a852), "middle", "center", G.a816), GAME.bottleneckCanvas.text([0 + i, 170], [.5, .5], GAME.respawnIn > 0 ? "Respawn in " + GAME.respawnIn + "..." : "Click to respawn", "rgba(255, 255, 255, 1)", 26 + 4 * a97(3, t.a852), "middle", "center", G.a816)
                    },
                    end: function(t) {}
                },
                .52: {
                    start: function(t) {},
                    a853: function(t, e) {
                        var i = 0;
                        GAME.bottleneckCanvas.cvs.bufferCanvas.width < 1024 && (i = 100), GAME.bottleneckCanvas.a449([-150 + i, -200], [.5, .5], [300, 420], !0, 0, "rgba(0, 0, 0, 0.35)"), GAME.bottleneckCanvas.a449([-150 + i, 120], [.5, .5], [300, 100], !0, 0, "rgba(0, 0, 0, 0.5)"), GAME.bottleneckCanvas.a449([-2500 + i, -1500], [.5, .5], [5e3, 3e3], !0, 0, "rgba(5, 0, 0, " + (.4 + .1 * a97(3, t.a852)) + ")"), GAME.bottleneckCanvas.text([0 + i, -90], [.5, .5], e.title, "rgba(" + e.red + ", " + e.green + ", " + e.blue + ", 1)", 48 + 0 * a97(3, t.a852), "middle", "center", G.a816), GAME.bottleneckCanvas.text([0 + i, 20], [.5, .5], G.othera822ers[GAME.myKillerId].name + " killed you", "#ffffff", 20 + 0 * a97(3, t.a852), "middle", "center", G.a816), GAME.bottleneckCanvas.text([0 + i, 170], [.5, .5], GAME.respawnIn > 0 ? "Respawn in " + GAME.respawnIn + "..." : "Click to respawn", "rgba(255, 255, 255, 1)", 30 - 4 * a97(3, t.a852), "middle", "center", G.a816)
                    },
                    end: function(t) {}
                }
            }
        },
        pointerLock: {
            a843: {
                .48: {
                    start: function(t) {},
                    a853: function(t, e) {
                        GAME.bottleneckCanvas.a449([-220, -37], [.5, .5], [440, 74], !0, 3, "rgba(0, 0, 0, 0.7)"), GAME.bottleneckCanvas.text([0, 0], [.5, .5], "click to lock pointer", "rgba(255, 255, 255, 1)", 32 + 1 * t.a852, "middle", "center", G.a816)
                    },
                    end: function(t) {}
                },
                .52: {
                    start: function(t) {},
                    a853: function(t, e) {
                        GAME.bottleneckCanvas.a449([-220, -37], [.5, .5], [440, 74], !0, 3, "rgba(0, 0, 0, 0.7)"), GAME.bottleneckCanvas.text([0, 0], [.5, .5], "click to lock pointer", "rgba(255, 255, 255, 1)", 33 - 1 * t.a852, "middle", "center", G.a816)
                    },
                    end: function(t) {}
                }
            }
        }
    }, G.a863.a864.a237 = {}, G.a863.a864.a237.start = function(t) {
        new THREE.MeshBasicMaterial({
            map: G.assets[G.a836.Texture][t.a826.skin]
        });
        t.meshes = {
            a774: G.a863.a864.meshes.a774.clone(),
            a775: G.a863.a864.meshes.a775.clone()
        }, t.meshes.a774.material = G.assets[G.a836.Material][t.a826.skin].clone(), t.meshes.a775.material = G.assets[G.a836.Material][t.a826.skin].clone(), t.gO.a621 = new THREE.Vector3, t.gO.a621From = new THREE.Vector3, t.gO.a621To = new THREE.Vector3, t.gO.a92 = new THREE.Vector3, t.gO.a92From = new THREE.Vector3, t.gO.a92To = new THREE.Vector3, t.gO.a93 = new THREE.Vector3, t.gO.a93From = new THREE.Vector3, t.gO.a93To = new THREE.Vector3, t.gO.a600LookAt = new THREE.Vector3, t.gO.a600LookAtFrom = new THREE.Vector3, t.gO.a600LookAtTo = new THREE.Vector3, t.gO.a600Pos = new THREE.Vector3, t.gO.a600PosFrom = new THREE.Vector3, t.gO.a600PosTo = new THREE.Vector3, t.gO.a600Rot = new THREE.Vector3, t.gO.a600RotFrom = new THREE.Vector3, t.gO.a600RotTo = new THREE.Vector3, t.gO.a630 = new THREE.Object3D, t.gO.a600 = new THREE.Object3D, t.gO.a600Wrap = new THREE.Object3D, t.gO.a600Wrap.add(t.gO.a600), t.gO.a600.add(t.gO.a630), t.gO.a601.add(t.gO.a600Wrap), t.gO.a630.position.x = 2.5, t.gO.a630.position.y = 0, t.gO.a630.position.z = 0, t.gO.a600Wrap.position.x = -1.6, t.gO.a600Wrap.position.y = 3, t.gO.a600Wrap.position.z = 0, t.gO.a600Pos.copy(t.gO.a600Wrap.position), t.gO.a630.add(t.meshes.a774), t.meshes.a774.scale.copy(new THREE.Vector3(1, 1, 1)), t.meshes.a774.position.copy(new THREE.Vector3(0, 0, 0)), t.meshes.a774.rotation.x = -1.5708, t.meshes.a774.rotation.y = -1.5708, t.gO.a600.add(t.meshes.a775), t.meshes.a775.scale.copy(new THREE.Vector3(1, 1, 1)), t.meshes.a775.position.copy(new THREE.Vector3(0, 0, -1)), t.meshes.a775.rotation.x = -1.5708, t.meshes.a775.rotation.y = 1.5708, t.meshes.a775.add(t.gO.a605), t.gO.a243 = function(t) {
            this.a621.copy(t);
            var e = new THREE.Vector3(this.a600Wrap.position.x + t.x, this.a600Wrap.position.y + t.y, this.a600Wrap.position.z + t.z);
            this.a630.lookAt(this.a603.localToWorld(e))
        }, t.gO.a89 = function(e, i, o) {
            t.gO.a600LookAtFrom.copy(t.gO.a600LookAt), t.gO.a600LookAtTo.set(e, i, o)
        }, t.gO.Ca244Lerp = new THREE.Vector3, t.gO.a244Lerp = function(e, i, o, n) {
            t.gO.Ca244Lerp.lerpVectors(this.a600LookAtFrom, this.a600LookAtTo, e), this.a244(t.gO.Ca244Lerp.x, t.gO.Ca244Lerp.y, t.gO.Ca244Lerp.z, i, o, n)
        }, t.gO.Ca244LookAt2 = new THREE.Vector3, t.gO.a244 = function(e, i, o, n, s, r) {
            this.a600LookAt.set(e, i, o), t.gO.Ca244LookAt2.set(this.a600Wrap.position.x + e + n, this.a600Wrap.position.y + i + s, this.a600Wrap.position.z + o + r), this.a600.lookAt(this.a603.localToWorld(t.gO.Ca244LookAt2))
        }, t.gO.movePosRShoulder = function(t) {
            this.a600Wrap.position.copy(t), this.a600Pos.copy(t)
        }, t.gO.moveRotRShoulder = function(t) {
            this.a600Wrap.rotation.copy(t), this.a600Rot.copy(t)
        }
    }, G.a863.a864.a237.a107 = function(t) {
        var e = {};
        if (G.a783.a423 || !G.a783.a426(82) || t.gO.switchinga809 || "pistol" != t.gO.a651.type && "sniper" != t.gO.a651.type && "ak47" != t.gO.a651.type && "shotgun" != t.gO.a651.type && "uri" != t.gO.a651.type || t.gO.a651.totalClips > 0 && t.gO.a651.totalInClip < t.gO.a651.clipSize && (t.gO.a105 = !0, t.gO.a105TimeOut = t.gO.a651.reloadTimeOut ? t.gO.a651.reloadTimeOut : 500, t.gO.a105TimeIn = t.gO.a651.reloadTimeIn ? t.gO.a651.reloadTimeIn : 500, t.gO.a105CallbackOut = function() {
                t.gO.updatea809Total(t.gO.a651.name, -t.gO.a651.totalInClip)
            }), t.gO.a105 ? (e.a651Out = {
                a842: t.gO.a105TimeOut,
                callback: function() {
                    t.gO.a727(t.gO.a105Id, !0), t.gO.a105 = !1, t.gO.a104 = !0, t.gO.a105CallbackOut && (t.gO.a105CallbackOut(), t.gO.a105CallbackOut = !1)
                }
            }, t.gO.switchinga809 = !0) : t.gO.a104 && (e.a651In = {
                a842: t.gO.a105TimeIn,
                callback: function() {
                    t.gO.a104 = !1, t.gO.switchinga809 = !1
                }
            }), t.gO.a651) {
            if ("arm" == t.gO.a651.type)
                if (t.gO.a630.visible = !1, t.gO.a630.position.x = 2.5, t.gO.a630.position.y = 0, t.gO.a630.position.z = -1.4, t.gO.a630.rotation.x = 0, t.gO.a630.rotation.y = 0, t.gO.a630.rotation.z = 0, t.gO.a751 && t.gO.a110) {
                    var i = 500;
                    (i -= 50 * t.gO.a649) < 200 && (i = 200), e.a87 = {
                        a842: 500
                    }, e.walk = {
                        a842: 500
                    }
                } else e.a88 = {
                    a842: 1500
                };
            else if ("pickaxe" == t.gO.a651.type)
                if (t.gO.a630.visible = !0, t.gO.a630.position.z = -1.2, t.gO.a630.position.y = -.3, t.gO.a630.position.x = 1, t.gO.a630.rotation.x = -.1339727191797021, t.gO.a630.rotation.y = -.4, t.gO.a630.rotation.z = -.030888435887152614, t.gO.switchinga809 && (t.a759s.a608.a844 = !0), t.gO.switchinga809 || !t.gO.a103 && !1 !== t.a759s.a608.a844)
                    if (t.gO.a751 && (t.gO.a110 || GAME.time - t.gO.a111 < 200)) {
                        i = 500;
                        (i -= 50 * t.gO.a649) < 200 && (i = 200), e.a87 = {
                            a842: t.gO.a108 ? 940 : 500
                        }, e.walk = {
                            a842: t.gO.a108 ? 940 : 500
                        }
                    } else e.a88 = {
                        a842: 1e3
                    };
            else {
                var i = 300;
                "pickaxe" == t.gO.a651.type && (i = 280), e.a608 = {
                    a842: i
                }
            } else if ("stone" == t.gO.a651.type || "wood" == t.gO.a651.type || "tnt" == t.gO.a651.type || "stairs" == t.gO.a651.type) {
                if (t.gO.a630.visible = !1, t.gO.switchinga809 && (t.a759s.a101.a844 = !0, t.a759s.a100.a844 = !0), !t.gO.switchinga809 && (t.gO.a103 && t.gO.geta809Total(t.gO.a651.type) > 0 || !1 === t.a759s.a101.a844)) {
                    i = 300;
                    e.a101 = {
                        a842: i
                    }
                } else if (t.gO.a751 && (t.gO.a110 || GAME.time - t.gO.a111 < 200)) {
                    i = 500;
                    (i -= 50 * t.gO.a649) < 200 && (i = 200), e.a87 = {
                        a842: t.gO.a108 ? 940 : 500
                    }, e.walk = {
                        a842: t.gO.a108 ? 940 : 500
                    }
                } else e.a88 = {
                    a842: 1500
                };
                t.gO.switchinga809 || (!e.a101 && !1 === t.a759s.a100.a844 || !e.a101 && t.oldShowAnim && t.oldShowAnim.a101) && (e.a100 = {
                    a842: 700
                }, e.a88 = !1, e.a87 = !1)
            } else if ("pistol" == t.gO.a651.type || "sniper" == t.gO.a651.type || "ak47" == t.gO.a651.type || "shotgun" == t.gO.a651.type || "uri" == t.gO.a651.type) {
                var o, n, s, r;
                "pistol" == t.gO.a651.type ? (t.gO.autoTrigger = !1, t.gO.triggerCooldown = 0, o = "right_pistol_shoot", s = 200, r = n = t.gO.justTriggered) : "sniper" == t.gO.a651.type ? (t.gO.autoTrigger = !1, t.gO.triggerCooldown = 500, o = "a83", s = 700, r = n = t.gO.justTriggered) : "ak47" == t.gO.a651.type ? (t.gO.autoTrigger = !0, t.gO.triggerCooldown = 80, o = "right_ak47_shoot", n = t.gO.a103, s = 200, r = t.gO.justTriggered) : "shotgun" == t.gO.a651.type ? (t.gO.autoTrigger = !1, t.gO.triggerCooldown = 400, o = "right_shotgun_shoot", s = 400, r = n = t.gO.justTriggered) : "uri" == t.gO.a651.type && (t.gO.autoTrigger = !0, t.gO.triggerCooldown = 80, o = "right_uri_shoot", s = 80, r = n = t.gO.justTriggered), t.gO.a630.visible = !0, t.gO.a630.position.z = -.4, t.gO.a630.position.y = 0, t.gO.a630.position.x = 1, t.gO.a630.rotation.x = -.2, t.gO.a630.rotation.y = -.21473507984847573, t.gO.a630.rotation.z = -.030888435887152614, t.gO.switchinga809 && (t.a759s[o].a844 = !0);
                var a = !1;
                if (t.gO.switchinga809 ? t.gO.usingWeapon = !1 : n && t.gO.a651.totalInClip > 0 || !1 === t.a759s[o].a844 ? (t.gO.usingWeapon = !0, e[o] = {
                        reset: r && t.gO.a651.totalInClip > 0,
                        a842: s
                    }) : t.gO.usingWeapon = !1, "shotgun" != t.gO.a651.type) {
                    if (!t.gO.switchinga809 && G.Keybinds.aim.a730) {
                        i = 300;
                        (i -= 50 * t.gO.a649) < 200 && (i = 200), e.a84 = {
                            a842: 100
                        }, t.gO.a112 = !0, a = !0
                    }
                    a || t.gO.a112 && (e.a85 = {
                        a842: 100
                    })
                }
                if (!t.gO.a112)
                    if (t.gO.a751 && (t.gO.a110 || GAME.time - t.gO.a111 < 200)) {
                        i = 500;
                        (i -= 50 * t.gO.a649) < 200 && (i = 200), e.a79 = {
                            a842: t.gO.a108 ? 840 : 500
                        }, e.walk = {
                            a842: t.gO.a108 ? 840 : 500
                        }
                    } else t.gO.a109 && (t.gO.a751 || G.Keybinds.moveUpward.a730) ? e.a80 = {
                        a842: 800
                    } : e.a80 = {
                        a842: 1400
                    }
            }
        } else;
        var h = (e.a87 || e.a79) && G.Keybinds.moveUpward.a730;
        return t.gO.a110 ? t.gO.a737 ? e.vertical_velocity = {
            a842: 1
        } : h || (e.land = {
            a842: t.gO.a109 ? 350 : 250
        }) : (t.gO.a737 = !1, t.gO.velocity.y > 0 ? t.gO.jumped ? e.a87 || (e.fall = {
            a842: 1e4
        }) : e.jump = {
            a842: 250
        } : (t.gO.jumped = !1, e.a87 || (e.fall = {
            a842: 1e4
        }))), e
    }, G.a863.a864.a237.a759s = {
        a651Out: {
            a843: {
                1: {
                    start: function(t) {
                        t.a91 = t.gO.controls.a91
                    },
                    a853: function(t) {
                        t.gO.a92.y = 0 - 5 * t.a852, t.gO.a92.x = 0 + 5 * t.a852, t.gO.a601.position.y = 0 - 1 * t.a852, t.gO.a601.position.z = 0 - 1 * t.a852, t.gO.a98 = -20 * a97(3, t.a852), t.gO.controls.a91 = t.a91 - a97(3, t.a852) * (t.a91 + .01)
                    },
                    end: function(t, e) {
                        e.callback(), t.gO.a605.visible = !0
                    }
                }
            }
        },
        a651In: {
            a843: {
                1: {
                    start: function(t) {
                        t.a91 = t.gO.controls.a91
                    },
                    a853: function(t) {
                        t.gO.a92.y = 5 * t.a852 - 5, t.gO.a92.x = 5 - 5 * t.a852, t.gO.a601.position.y = 1 * t.a852 - 1, t.gO.a601.position.z = 1 * t.a852 - 1, t.gO.a98 = 20 * Math.sin(1.5708 * t.a852) - 20, t.gO.controls.a91 = .01 * a97(3, t.a852) - .01
                    },
                    end: function(t, e) {
                        t.a852 = 1, this.a853(t), e.callback()
                    }
                }
            }
        },
        walk: {
            a843: {
                .26: {
                    start: function(t) {
                        t.done = !1
                    },
                    a853: function(t) {
                        t.gO.a600Wrap.position.x = .1 * t.a852 - 1.6, t.gO.a600Wrap.position.y = 3 + .1 * t.a852
                    }
                },
                .24: {
                    a853: function(t) {
                        t.gO.a600Wrap.position.x = -1.5 - .1 * t.a852, t.gO.a600Wrap.position.y = 3.1 - .1 * t.a852
                    },
                    end: function(t) {
                        t.done = !0
                    }
                },
                .23: {
                    a853: function(t) {
                        t.gO.a600Wrap.position.x = -1.6 - .1 * t.a852, t.gO.a600Wrap.position.y = 3 + .1 * t.a852
                    }
                },
                .27: {
                    a853: function(t) {
                        t.gO.a600Wrap.position.x = .1 * t.a852 - 1.7, t.gO.a600Wrap.position.y = 3.1 - .1 * t.a852
                    },
                    end: function(t) {
                        t.done = !0
                    }
                }
            }
        },
        jump: {
            a843: {
                .48: {
                    start: function(t) {
                        t.gO.a93From.copy(t.gO.a93);
                        var e = -t.gO.velocity.y / 5;
                        e < -.35 && (e = -.35), t.gO.a93To.set(t.gO.velocity.x / 16, e, t.gO.velocity.z / 12)
                    },
                    a853: function(t) {
                        t.gO.a93.lerpVectors(t.gO.a93From, t.gO.a93To, Math.sin(1.5708 * t.a852)), t.gO.a94 = 5 * t.a852
                    }
                },
                .52: {
                    start: function(t) {
                        t.gO.a93From.copy(t.gO.a93), t.gO.a93To.set(t.gO.velocity.x / 16, 0, t.gO.velocity.z / 12)
                    },
                    a853: function(t) {
                        t.gO.a93.lerpVectors(t.gO.a93From, t.gO.a93To, a97(1, t.a852)), t.gO.a94 = 5 + 5 * t.a852
                    },
                    end: function(t) {
                        t.gO.jumped = !0
                    }
                }
            }
        },
        fall: {
            a843: {
                1: {
                    a853: function(t) {
                        t.gO.a93.y += .004, t.gO.a93.y > .16 && (t.gO.a93.y = .16)
                    }
                }
            }
        },
        land: {
            a843: {
                .48: {
                    start: function(t) {
                        t.gO.a93From.copy(t.gO.a93), t.gO.a109 ? t.gO.a93To.set(t.gO.velocity.x / 48, t.gO.a75.y / 24, t.gO.velocity.z / 32) : t.gO.a93To.set(t.gO.velocity.x / 16, t.gO.a75.y / 8, t.gO.velocity.z / 12)
                    },
                    a853: function(t) {
                        t.gO.a93.lerpVectors(t.gO.a93From, t.gO.a93To, Math.sin(1.5708 * t.a852)), t.gO.a93.y < -.35 && (t.gO.a93.y = -.35), t.gO.a94 = 10 - 5 * t.a852
                    },
                    end: function(t) {}
                },
                .52: {
                    start: function(t) {
                        t.gO.a93From.copy(t.gO.a93), t.gO.a93To.set(t.gO.velocity.x / 16, 0, t.gO.velocity.z / 12)
                    },
                    a853: function(t) {
                        t.gO.a93.lerpVectors(t.gO.a93From, t.gO.a93To, a97(1, t.a852)), t.gO.a94 = 5 - 5 * t.a852
                    },
                    end: function(t) {
                        t.gO.a737 = !0
                    }
                }
            }
        },
        a88: {
            a843: {
                .26: {
                    start: function(t) {
                        t.done = !1, t.gO.a89(.02, .02, 1)
                    },
                    a853: function(t) {
                        t.gO.a244Lerp(t.a852, t.gO.a92.x + 2 * t.gO.a93.x, t.gO.a92.y + 2 * t.gO.a93.y, t.gO.a92.z + 2 * t.gO.a93.z)
                    }
                },
                .24: {
                    a853: function(t) {
                        var e = .02 + .02 * t.a852,
                            i = .02 - .02 * t.a852;
                        t.gO.a244(e, i, 1, t.gO.a92.x + 2 * t.gO.a93.x, t.gO.a92.y + 2 * t.gO.a93.y, t.gO.a92.z + 2 * t.gO.a93.z)
                    },
                    end: function(t) {
                        t.done = !0
                    }
                },
                .23: {
                    a853: function(t) {
                        var e = .04 - .02 * t.a852,
                            i = 0 + .02 * t.a852;
                        t.gO.a244(e, i, 1, t.gO.a92.x + 2 * t.gO.a93.x, t.gO.a92.y + 2 * t.gO.a93.y, t.gO.a92.z + 2 * t.gO.a93.z)
                    }
                },
                .27: {
                    a853: function(t) {
                        var e = .02 - .02 * t.a852,
                            i = .02 - .02 * t.a852;
                        t.gO.a244(e, i, 1, t.gO.a92.x + 2 * t.gO.a93.x, t.gO.a92.y + 2 * t.gO.a93.y, t.gO.a92.z + 2 * t.gO.a93.z)
                    },
                    end: function(t) {
                        t.done = !0
                    }
                }
            }
        },
        a87: {
            a843: {
                .26: {
                    start: function(t) {
                        t.done = !1, t.gO.a89(.08, .08, 1)
                    },
                    a853: function(t) {
                        t.gO.a244Lerp(t.a852, t.gO.a92.x + 2 * t.gO.a93.x, t.gO.a92.y + 2 * t.gO.a93.y, t.gO.a92.z + 2 * t.gO.a93.z)
                    }
                },
                .24: {
                    a853: function(t) {
                        var e = .08 + .06 * t.a852,
                            i = .08 - .06 * t.a852;
                        t.gO.a244(e, i, 1, t.gO.a92.x + 2 * t.gO.a93.x, t.gO.a92.y + 2 * t.gO.a93.y, t.gO.a92.z + 2 * t.gO.a93.z)
                    },
                    end: function(t) {
                        t.done = !0
                    }
                },
                .23: {
                    a853: function(t) {
                        var e = .14 - .06 * t.a852,
                            i = .04 + .06 * t.a852;
                        t.gO.a244(e, i, 1, t.gO.a92.x + 2 * t.gO.a93.x, t.gO.a92.y + 2 * t.gO.a93.y, t.gO.a92.z + 2 * t.gO.a93.z)
                    }
                },
                .27: {
                    a853: function(t) {
                        var e = .08 - .06 * t.a852,
                            i = .08 - .06 * t.a852;
                        t.gO.a244(e, i, 1, t.gO.a92.x + 2 * t.gO.a93.x, t.gO.a92.y + 2 * t.gO.a93.y, t.gO.a92.z + 2 * t.gO.a93.z)
                    },
                    end: function(t) {
                        t.done = !0
                    }
                }
            }
        },
        a100: {
            a843: {
                .48: {
                    start: function(t) {
                        t.done = !1
                    },
                    a853: function(t) {
                        t.gO.a92.y = 0 - 5 * t.a852, t.gO.a92.x = 0 + 5 * t.a852, t.gO.a601.position.y = 0 - 1 * t.a852, t.gO.a601.position.z = 0 - 1 * t.a852, t.gO.a98 = 4 * a97(3, t.a852)
                    },
                    end: function(t, e) {
                        t.gO.a605.visible = !0
                    }
                },
                .52: {
                    start: function(t) {
                        t.gO.a89(.02, 0, 1)
                    },
                    a853: function(t) {
                        t.gO.a92.y = 5 * t.a852 - 5, t.gO.a92.x = 5 - 5 * t.a852, t.gO.a601.position.y = 1 * t.a852 - 1, t.gO.a601.position.z = 1 * t.a852 - 1, t.gO.a244Lerp(t.a852, t.gO.a92.x + 2 * t.gO.a93.x, t.gO.a92.y + 2 * t.gO.a93.y, t.gO.a92.z + 2 * t.gO.a93.z), t.gO.a98 = 4 - 4 * Math.sin(1.5708 * t.a852)
                    },
                    end: function(t, e) {
                        t.a852 = 1, this.a853(t), t.done = !0
                    }
                }
            }
        },
        a101: {
            a843: {
                .45: {
                    start: function(t) {
                        t.gO.a89(-.8, 1, 1), t.gO.a605.visible = !0, t.gO.a92.y = 0, t.gO.a92.x = 0, t.gO.a601.position.y = 0, t.gO.a601.position.z = 0
                    },
                    a853: function(t) {
                        new THREE.Vector3;
                        t.gO.a244Lerp(t.a852, 2 * t.gO.a93.x, 2 * t.gO.a93.y, 2 * t.gO.a93.z), t.gO.a99 && (t.gO.a605.position.x = t.gO.a605Pos + .6 * (1 - t.a852)), t.gO.a98 = 10 * a97(3, t.a852)
                    },
                    end: function(t) {
                        t.gO.a99 && (t.gO.a605.position.x = t.gO.a605Pos), t.gO.a99 = !1
                    }
                },
                .15: {
                    start: function(t) {
                        t.gO.a605Pos = t.gO.a605.position.x
                    },
                    a853: function(t) {
                        var e = .8 * t.a852 - .8,
                            i = 1 - .6 * t.a852;
                        t.gO.a244(e, i, 1, 2 * t.gO.a93.x, 2 * t.gO.a93.y, 2 * t.gO.a93.z)
                    },
                    end: function(t) {
                        if (t.gO.a605.visible = !1, "stone" == t.gO.a651.type || "wood" == t.gO.a651.type || "tnt" == t.gO.a651.type || "stairs" == t.gO.a651.type) {
                            t.gO.a651.type;
                            var e = t.gO.geta809Total(t.gO.a651.type);
                            if (e > 0) switch (t.gO.updatea809Total(t.gO.a651.name, -1), t.gO.a651.type) {
                                case "stone":
                                    t.gO.a609(2, 2, {
                                        me: !0
                                    });
                                    break;
                                case "wood":
                                    t.gO.a609(3, 3, {
                                        me: !0
                                    });
                                    break;
                                case "tnt":
                                    t.gO.a609(4, 4, {
                                        me: !0
                                    });
                                    break;
                                case "stairs":
                                    t.gO.a609(6, 6, {
                                        me: !0
                                    })
                            }
                            if (e - 1 == 0) return t.gO.a105 = !0, t.gO.a105TimeOut = 280, t.gO.a105TimeIn = 240, void(t.gO.a105Id = "arm")
                        }
                        t.gO.a99 = !0, t.gO.a605Pos = t.gO.a605.position.x
                    }
                },
                .4: {
                    start: function(t) {},
                    a853: function(t) {
                        var e = 0 + .7 * t.a852,
                            i = .4 - .7 * t.a852;
                        i < -.3 && (i = .3), t.gO.a244(e, i, 1, 2 * t.gO.a93.x, 2 * t.gO.a93.y, 2 * t.gO.a93.z), t.gO.a98 = 10 - 10 * Math.sin(1.5708 * t.a852)
                    },
                    end: function(t) {}
                }
            }
        },
        a608: {
            a843: {
                .45: {
                    start: function(t) {
                        t.gO.a89(-.8, 1, 1)
                    },
                    a853: function(t) {
                        new THREE.Vector3;
                        t.gO.a244Lerp(t.a852, 2 * t.gO.a93.x, 2 * t.gO.a93.y, 2 * t.gO.a93.z), t.gO.a99 && (t.gO.a605.position.x = t.gO.a605Pos + .01 * (1 - t.a852))
                    },
                    end: function(t) {
                        t.gO.a99 && (t.gO.a605.position.x = t.gO.a605Pos), t.gO.a99 = !1
                    }
                },
                .15: {
                    start: function(t) {
                        t.gO.a605Pos = t.gO.a605.position.x
                    },
                    a853: function(t) {
                        var e = .8 * t.a852 - .8,
                            i = 1 - .6 * t.a852;
                        t.gO.a244(e, i, 1, 2 * t.gO.a93.x, 2 * t.gO.a93.y, 2 * t.gO.a93.z)
                    },
                    end: function(t) {
                        t.gO.a99 = !0, t.gO.a605Pos = t.gO.a605.position.x
                    }
                },
                .4: {
                    start: function(t) {},
                    a853: function(t) {
                        var e = 0 + .7 * t.a852,
                            i = .4 - .7 * t.a852;
                        i < -.3 && (i = .3), t.gO.a244(e, i, 1, 2 * t.gO.a93.x, 2 * t.gO.a93.y, 2 * t.gO.a93.z)
                    },
                    end: function(t) {
                        "pickaxe" == t.gO.a651.type && t.gO.a609(18, 19, {
                            doDamage: !0,
                            headshotMsg: ["oof!", " sliced"],
                            headshotColor: ["rgba(255,0,0,{opacity})", "rgba(255,255,255,{opacity})"]
                        })
                    }
                }
            }
        },
        a80: {
            a843: {
                .26: {
                    start: function(t) {
                        t.done = !1, t.gO.a89(.02, .02, 1)
                    },
                    a853: function(t) {
                        t.gO.a244Lerp(t.a852, t.gO.a92.x + t.gO.a93.x, t.gO.a92.y + t.gO.a93.y, t.gO.a92.z + t.gO.a93.z)
                    }
                },
                .24: {
                    a853: function(t) {
                        var e = .02 + .01 * t.a852,
                            i = .02 - .005 * t.a852;
                        t.gO.a244(e, i, 1, t.gO.a92.x + t.gO.a93.x, t.gO.a92.y + t.gO.a93.y, t.gO.a92.z + t.gO.a93.z)
                    },
                    end: function(t) {
                        t.done = !0
                    }
                },
                .23: {
                    a853: function(t) {
                        x = .03 - .01 * t.a852, y = .015 + .005 * t.a852, z = 1, t.gO.a244(x, y, z, t.gO.a92.x + t.gO.a93.x, t.gO.a92.y + t.gO.a93.y, t.gO.a92.z + t.gO.a93.z)
                    }
                },
                .27: {
                    a853: function(t) {
                        var e = .02 - .01 * t.a852,
                            i = .02 - .01 * t.a852;
                        t.gO.a244(e, i, 1, t.gO.a92.x + t.gO.a93.x, t.gO.a92.y + t.gO.a93.y, t.gO.a92.z + t.gO.a93.z)
                    },
                    end: function(t) {
                        t.done = !0
                    }
                }
            }
        },
        a79: {
            a843: {
                .26: {
                    start: function(t) {
                        t.done = !1, t.gO.a89(.08, .08, 1)
                    },
                    a853: function(t) {
                        t.gO.a244Lerp(t.a852, t.gO.a92.x + t.gO.a93.x, t.gO.a92.y + t.gO.a93.y, t.gO.a92.z + t.gO.a93.z)
                    }
                },
                .24: {
                    a853: function(t) {
                        var e = .08 + .05 * t.a852,
                            i = .08 - .05 * t.a852;
                        t.gO.a244(e, i, 1, t.gO.a92.x + t.gO.a93.x, t.gO.a92.y + t.gO.a93.y, t.gO.a92.z + t.gO.a93.z)
                    },
                    end: function(t) {
                        t.done = !0
                    }
                },
                .23: {
                    a853: function(t) {
                        var e = .13 - .05 * t.a852,
                            i = .03 + .05 * t.a852;
                        t.gO.a244(e, i, 1, t.gO.a92.x + t.gO.a93.x, t.gO.a92.y + t.gO.a93.y, t.gO.a92.z + t.gO.a93.z)
                    }
                },
                .27: {
                    a853: function(t) {
                        var e = .08 - .05 * t.a852,
                            i = .08 - .05 * t.a852;
                        t.gO.a244(e, i, 1, t.gO.a92.x + t.gO.a93.x, t.gO.a92.y + t.gO.a93.y, t.gO.a92.z + t.gO.a93.z)
                    },
                    end: function(t) {
                        t.done = !0
                    }
                }
            }
        },
        a82: {
            a843: {
                .26: {
                    start: function(t) {
                        t.done = !1, t.gO.a89(.08, .08, 1)
                    },
                    a853: function(t) {
                        t.gO.a244Lerp(t.a852, t.gO.a92.x + t.gO.a93.x, t.gO.a92.y + t.gO.a93.y, t.gO.a92.z + t.gO.a93.z)
                    }
                },
                .24: {
                    a853: function(t) {
                        var e = .08 + .06 * t.a852,
                            i = .08 - .02 * t.a852;
                        t.gO.a244(e, i, 1, t.gO.a92.x + t.gO.a93.x, t.gO.a92.y + t.gO.a93.y, t.gO.a92.z + t.gO.a93.z)
                    },
                    end: function(t) {
                        t.done = !0
                    }
                },
                .23: {
                    a853: function(t) {
                        x = .14 - .06 * t.a852, y = .06 + .02 * t.a852, z = 1, t.gO.a244(x, y, z, t.gO.a92.x + t.gO.a93.x, t.gO.a92.y + t.gO.a93.y, t.gO.a92.z + t.gO.a93.z)
                    }
                },
                .27: {
                    a853: function(t) {
                        var e = .08 - .06 * t.a852,
                            i = .08 - .02 * t.a852;
                        t.gO.a244(e, i, 1, t.gO.a92.x + t.gO.a93.x, t.gO.a92.y + t.gO.a93.y, t.gO.a92.z + t.gO.a93.z)
                    },
                    end: function(t) {
                        t.done = !0
                    }
                }
            }
        },
        right_ak47_shoot: {
            a843: {
                .1: {
                    start: function(t) {
                        t.gO.a92From.copy(t.gO.a92), t.gO.a92To.set(0 + G.randFloat(-t.gO.a92.y / 2, t.gO.a92.y / 2, 2), t.gO.a92.y + G.randFloat(t.gO.a651.kickMin, t.gO.a651.kickMin, 2), 0 + G.randFloat(-t.gO.a92.y / 2, t.gO.a92.y / 2, 2));
                        var e = new THREE.Vector3;
                        e.copy(t.gO.a92), e.x *= 1.4, e.y = G.randFloat(-t.gO.a92.y / 2, t.gO.a92.y / 2, 2), e.z *= 1.4, t.gO.a609(14, 15, {
                            headshotMsg: ["boom ", "headshot"],
                            headshotColor: ["rgba(255,0,0,{opacity})", "rgba(255,255,255,{opacity})"]
                        }, !1, !1, e), 1 == t.gO.a651.totalInClip && t.gO.a651.totalClips > 0 && (t.gO.a105 = !0, t.gO.a105TimeOut = 500, t.gO.a105TimeIn = 500), t.gO.updatea809Total(t.gO.a651.name, -1)
                    },
                    a853: function(t) {
                        t.gO.a92.lerpVectors(t.gO.a92From, t.gO.a92To, Math.sin(t.a852)), t.gO.controls.a91 = .02 * Math.sin(1.5708 * t.a852)
                    },
                    end: function(t) {}
                },
                .9: {
                    start: function(t) {
                        t.gO.a92From.copy(t.gO.a92), t.gO.a92To.set(0, 0, 0)
                    },
                    a853: function(t) {
                        t.gO.a92.lerpVectors(t.gO.a92From, t.gO.a92To, Math.sin(1.5708 * t.a852)), t.gO.controls.a91 = .02 - .02 * a97(3, t.a852)
                    },
                    end: function(t) {
                        t.gO.a734 = !1
                    }
                }
            }
        },
        right_pistol_shoot: {
            a843: {
                .1: {
                    start: function(t) {
                        t.gO.a92From.copy(t.gO.a92), t.gO.a92To.set(0 + G.randFloat(0, .04, 2), .24 + G.randFloat(0, .04, 2), 0 + G.randFloat(0, .04, 2)), t.gO.a609(8, 9, {
                            headshotMsg: ["boom ", "headshot"],
                            headshotColor: ["rgba(255,0,0,{opacity})", "rgba(255,255,255,{opacity})"]
                        })
                    },
                    a853: function(t) {
                        t.gO.a92.lerpVectors(t.gO.a92From, t.gO.a92To, Math.sin(t.a852)), t.gO.controls.a91 = .02 * Math.sin(1.5708 * t.a852)
                    },
                    end: function(t) {
                        1 == t.gO.a651.totalInClip && t.gO.a651.totalClips > 0 && (t.gO.a105 = !0, t.gO.a105TimeOut = 500, t.gO.a105TimeIn = 500), t.gO.updatea809Total(t.gO.a651.name, -1)
                    }
                },
                .9: {
                    start: function(t) {
                        t.gO.a92From.copy(t.gO.a92), t.gO.a92To.set(0, 0, 0)
                    },
                    a853: function(t) {
                        t.gO.a92.lerpVectors(t.gO.a92From, t.gO.a92To, Math.sin(1.5708 * t.a852)), t.gO.controls.a91 = .02 - .02 * a97(3, t.a852)
                    },
                    end: function(t) {
                        t.a852 = 1, this.a853(t), t.gO.a734 = !1
                    }
                }
            }
        },
        a83: {
            a843: {
                .1: {
                    start: function(t) {
                        t.gO.a92From.copy(t.gO.a92), t.gO.a92To.set(0, .2, 0), t.gO.a609(10, 11, {
                            headshotMsg: ["boom ", "headshot"],
                            headshotColor: ["rgba(255,0,0,{opacity})", "rgba(255,255,255,{opacity})"]
                        })
                    },
                    a853: function(t) {
                        t.gO.a92.lerpVectors(t.gO.a92From, t.gO.a92To, t.a852), t.gO.controls.a91 = .1 * Math.sin(1.5708 * t.a852)
                    },
                    end: function(t) {
                        1 == t.gO.a651.totalInClip && t.gO.a651.totalClips > 0 && (t.gO.a105 = !0, t.gO.a105TimeOut = 500, t.gO.a105TimeIn = 500), t.gO.updatea809Total(t.gO.a651.name, -1)
                    }
                },
                .9: {
                    start: function(t) {
                        t.gO.a92From.copy(t.gO.a92), t.gO.a92To.set(0, 0, 0)
                    },
                    a853: function(t) {
                        t.gO.a92.lerpVectors(t.gO.a92From, t.gO.a92To, a97(3, t.a852)), t.gO.controls.a91 = .1 - .1 * a97(3, t.a852)
                    },
                    end: function(t) {
                        t.gO.a734 = !1
                    }
                }
            }
        },
        right_shotgun_shoot: {
            a843: {
                .1: {
                    start: function(t) {
                        t.gO.a92From.copy(t.gO.a92), t.gO.a92To.set(0, .2, 0);
                        for (var e = 0; e < 8; e++) {
                            var i = new THREE.Vector3;
                            i.x = G.randFloat(-t.gO.a651.a681, t.gO.a651.a681, 2), i.y = G.randFloat(-t.gO.a651.a681, t.gO.a651.a681, 2), i.z = G.randFloat(-t.gO.a651.a681, t.gO.a651.a681, 2), t.gO.a609(12, 13, {
                                headshotMsg: ["boom ", "headshot"],
                                headshotColor: ["rgba(255,0,0,{opacity})", "rgba(255,255,255,{opacity})"]
                            }, !1, !1, i)
                        }
                    },
                    a853: function(t) {
                        t.gO.a92.lerpVectors(t.gO.a92From, t.gO.a92To, t.a852), t.gO.controls.a91 = .07 * Math.sin(1.5708 * t.a852)
                    },
                    end: function(t) {
                        1 == t.gO.a651.totalInClip && t.gO.a651.totalClips > 0 && (t.gO.a105 = !0, t.gO.a105TimeOut = 500, t.gO.a105TimeIn = 500), t.gO.updatea809Total(t.gO.a651.name, -1)
                    }
                },
                .9: {
                    start: function(t) {
                        t.gO.a92From.copy(t.gO.a92), t.gO.a92To.set(0, 0, 0)
                    },
                    a853: function(t) {
                        t.gO.a92.lerpVectors(t.gO.a92From, t.gO.a92To, a97(3, t.a852)), t.gO.controls.a91 = .07 - .07 * a97(3, t.a852)
                    },
                    end: function(t) {
                        t.gO.a734 = !1
                    }
                }
            }
        },
        right_uri_shoot: {
            a843: {
                .1: {
                    start: function(t) {
                        t.gO.a92From.copy(t.gO.a92), t.gO.a92To.set(0 + G.randFloat(-.02, .02, 2), t.gO.a92.y + G.randFloat(.02, .04, 2), 0 + G.randFloat(-.02, .02, 2));
                        var e = new THREE.Vector3;
                        e.copy(t.gO.a92), e.x *= 30, e.y = G.randFloat(20 * -t.gO.a92.y, 20 * t.gO.a92.y, 2), e.z *= 30, t.gO.a609(16, 17, {
                            headshotMsg: ["boom ", "headshot"],
                            headshotColor: ["rgba(255,0,0,{opacity})", "rgba(255,255,255,{opacity})"]
                        }, !1, !1, e), 1 == t.gO.a651.totalInClip && t.gO.a651.totalClips > 0 && (t.gO.a105 = !0, t.gO.a105TimeOut = t.gO.a651.reloadTimeOut, t.gO.a105TimeIn = t.gO.a651.reloadTimeIn), t.gO.updatea809Total(t.gO.a651.name, -1)
                    },
                    a853: function(t) {
                        t.gO.a92.lerpVectors(t.gO.a92From, t.gO.a92To, Math.sin(t.a852)), t.gO.controls.a91 = .01 * Math.sin(1.5708 * t.a852)
                    },
                    end: function(t, e) {
                        t.a852 = 1, this.a853(t, e)
                    }
                },
                .9: {
                    start: function(t) {
                        t.gO.a92From.copy(t.gO.a92), t.gO.a92To.set(0, 0, 0)
                    },
                    a853: function(t) {
                        t.gO.a92.lerpVectors(t.gO.a92From, t.gO.a92To, Math.sin(1.5708 * t.a852)), t.gO.controls.a91 = .01 - .01 * a97(3, t.a852)
                    },
                    end: function(t, e) {
                        t.a852 = 1, this.a853(t, e), t.gO.a734 = !1
                    }
                }
            }
        },
        a84: {
            a843: {
                1: {
                    start: function(t) {
                        t.done = !1, t.gO.a89(0, 0, 1), t.gO.a600PosFrom.copy(t.gO.a600Pos), t.gO.a600PosTo.set(-.5921, 3.54, -1)
                    },
                    a853: function(t) {
                        var e = new THREE.Vector3;
                        e.lerpVectors(t.gO.a600PosFrom, t.gO.a600PosTo, t.a852), t.gO.movePosRShoulder(e), t.gO.a244Lerp(t.a852, t.gO.a92.x, t.gO.a92.y + t.gO.a93.y / 8, t.gO.a92.z), t.gO.a98 = -7 * Math.sin(1.5708 * t.a852)
                    },
                    end: function(t) {
                        t.gO.a651.scopeZoom && GAME.updateZoom(t.gO.a651.scopeZoom), t.gO.scoped = !0, t.gO.inScope = !0
                    }
                }
            }
        },
        a85: {
            a843: {
                1: {
                    start: function(t) {
                        t.gO.a89(.03, .015, 1), t.gO.a600PosFrom.copy(t.gO.a600Pos), t.gO.a600PosTo.set(-1.6, 3, 0), GAME.updateZoom(1), t.gO.inScope = !1
                    },
                    a853: function(t) {
                        var e = new THREE.Vector3;
                        e.lerpVectors(t.gO.a600PosFrom, t.gO.a600PosTo, t.a852), t.gO.movePosRShoulder(e), t.gO.a244Lerp(t.a852, t.gO.a92.x + t.gO.a93.x, t.gO.a92.y + t.gO.a93.y, t.gO.a92.z + t.gO.a93.z), t.gO.a98 = 7 * Math.sin(1.5708 * t.a852) - 7
                    },
                    end: function(t) {
                        t.a852 = 1, this.a853(t), t.gO.scoped = !1, t.gO.a112 = !1
                    }
                }
            }
        }
    }, G.a863.a864.a238 = {}, G.a863.a864.a238.start = function(t) {
        t.gO.meshes = {
            head: G.a863.a864.meshes.head.clone(),
            body: G.a863.a864.meshes.body.clone(),
            a774: G.a863.a864.meshes.a774.clone(),
            a775: G.a863.a864.meshes.a775.clone(),
            a777: G.a863.a864.meshes.a777.clone(),
            a776: G.a863.a864.meshes.a776.clone(),
            a778: G.a863.a864.meshes.a777.clone()
        }, t.gO.hasHelm && (t.gO.meshes.helm = G.a863.a864.meshes.helm.clone()), t.gO.meshes.head.material = G.assets[G.a836.Material][t.a826.skin].clone(), t.gO.hasHelm && (t.gO.meshes.helm.material = G.assets[G.a836.Material][t.a826.skin].clone(), t.gO.meshes.helm.material.transparent = !0), t.gO.meshes.body.material = G.assets[G.a836.Material][t.a826.skin].clone(), t.gO.meshes.a774.material = G.assets[G.a836.Material][t.a826.skin].clone(), t.gO.meshes.a775.material = G.assets[G.a836.Material][t.a826.skin].clone(), t.gO.meshes.a777.material = G.assets[G.a836.Material][t.a826.skin].clone(), t.gO.meshes.a776.material = G.assets[G.a836.Material][t.a826.skin].clone(), t.gO.a600LookAt = new THREE.Vector3, t.gO.a600LookAtFrom = new THREE.Vector3, t.gO.a600LookAtTo = new THREE.Vector3, t.gO.a600Pos = new THREE.Vector3, t.gO.a600PosFrom = new THREE.Vector3, t.gO.a600PosTo = new THREE.Vector3, t.gO.a600Rot = new THREE.Vector3, t.gO.a600RotFrom = new THREE.Vector3, t.gO.a600RotTo = new THREE.Vector3, t.gO.a621 = new THREE.Vector3, t.gO.a621From = new THREE.Vector3, t.gO.a621To = new THREE.Vector3, t.gO.a624 = new THREE.Vector3, t.gO.a624From = new THREE.Vector3, t.gO.a624To = new THREE.Vector3, t.gO.a627 = new THREE.Vector3, t.gO.a627From = new THREE.Vector3, t.gO.a627To = new THREE.Vector3, t.gO.a92 = new THREE.Vector3, t.gO.a92From = new THREE.Vector3, t.gO.a92To = new THREE.Vector3, t.gO.a93 = new THREE.Vector3, t.gO.a93From = new THREE.Vector3, t.gO.a93To = new THREE.Vector3, t.gO.front = new THREE.Object3D, t.gO.front.position.set(0, -5, 2), t.gO.a600 = new THREE.Object3D, t.gO.a600.position.set(-2, -2, 0), t.gO.a630 = new THREE.Object3D, t.gO.a630.position.set(2, -2, 0), t.gO.a631 = new THREE.Object3D, t.gO.a631.position.set(-.78, -4, 0), t.gO.a632 = new THREE.Object3D, t.gO.a632.position.set(.78, -4, 0), t.gO.a239.add(t.gO.meshes.head), t.gO.hasHelm && t.gO.a239.add(t.gO.meshes.helm), t.gO.a239.add(t.gO.meshes.body), t.gO.meshes.body.position.set(0, -2.5, 0), t.gO.a239.add(t.gO.a600), t.gO.a239.add(t.gO.a630), t.gO.a601.add(t.gO.a631), t.gO.a601.add(t.gO.a632), t.gO.a601.add(t.gO.front), t.gO.a240.position.y = -4, t.gO.a239.position.y = 4, t.gO.a631.add(t.gO.meshes.a776), t.gO.meshes.a776.position.set(0, -2, 0), t.gO.meshes.a776.rotation.set(0, 0, 0), t.gO.a632.add(t.gO.meshes.a777), t.gO.meshes.a777.position.copy(new THREE.Vector3(0, -2, 0)), t.gO.meshes.a777.rotation.copy(new THREE.Vector3(0, 0, 0)), t.gO.a630.add(t.gO.meshes.a774), t.gO.meshes.a774.position.copy(new THREE.Vector3(0, 0, 1.5)), t.gO.meshes.a774.rotation.x = -1.5708, t.gO.meshes.a774.rotation.y = 3.1416, t.gO.a600.add(t.gO.meshes.a775), t.gO.meshes.a775.position.copy(new THREE.Vector3(0, 0, 1.5)), t.gO.meshes.a775.rotation.x = -1.5708, t.gO.meshes.a775.rotation.y = 3.1416, t.gO.meshes.a775.add(t.gO.a605), t.gO.a241 = function(e, i, o) {
            this.a627.set(e, i, o), t.gO.a632.rotation.x = e, t.gO.a632.rotation.y = i, t.gO.a632.rotation.z = o
        }, t.gO.a242 = function(e, i, o) {
            this.a624.set(e, i, o), t.gO.a631.rotation.x = e, t.gO.a631.rotation.y = i, t.gO.a631.rotation.z = o
        }, t.gO.setLShoulderLookAtTo = function(e, i, o) {
            t.gO.a621From.copy(t.gO.a621), t.gO.a621To.set(e, i, o)
        }, t.gO.zeroLookAtAdd = new THREE.Vector3, t.gO.Ca243Lerp = new THREE.Vector3, t.gO.a243Lerp = function(e, i) {
            i || (i = t.gO.zeroLookAtAdd), t.gO.Ca243Lerp.lerpVectors(this.a621From, this.a621To, e), this.a243(t.gO.Ca243Lerp.x, t.gO.Ca243Lerp.y, t.gO.Ca243Lerp.z, i)
        }, t.gO.a243 = function(e, i, o, n) {
            this.a621.set(e, i, o), t.gO.a630.rotation.x = e + n.x, t.gO.a630.rotation.y = i + n.y, t.gO.a630.rotation.z = o + n.z
        }, t.gO.a89 = function(e, i, o) {
            t.gO.a600LookAtFrom.copy(t.gO.a600LookAt), t.gO.a600LookAtTo.set(e, i, o)
        }, t.gO.Ca244Lerp = new THREE.Vector3, t.gO.a244Lerp = function(e, i) {
            i || (i = t.gO.zeroLookAtAdd), t.gO.Ca244Lerp.lerpVectors(this.a600LookAtFrom, this.a600LookAtTo, e), this.a244(t.gO.Ca244Lerp.x, t.gO.Ca244Lerp.y, t.gO.Ca244Lerp.z, i)
        }, t.gO.a244 = function(e, i, o, n) {
            this.a600LookAt.set(e, i, o), t.gO.a600.rotation.x = e + n.x, t.gO.a600.rotation.y = i + n.y, t.gO.a600.rotation.z = o + n.z
        }
    }, G.a863.a864.a238.a107 = function(t) {
        return t.show = {}, t.gO.a651 && "arm" != t.gO.a651.type ? "pickaxe" == t.gO.a651.type || "stone" == t.gO.a651.type || "wood" == t.gO.a651.type || "tnt" == t.gO.a651.type || "stairs" == t.gO.a651.type ? t.gO.a90 || !1 === t.a759s.a101.a844 ? (t.show.a101 = {
            a842: 300
        }, t.show.a606_run = {
            a842: 300
        }) : t.gO.a751 ? (t.show.a87 = {
            a842: 600
        }, t.show.a606_walk = {
            a842: 600
        }) : (t.show.a88 = {
            a842: 1400
        }, t.show.a252 = {
            a842: 1400
        }) : "pistol" != t.gO.a651.type && "sniper" != t.gO.a651.type && "shotgun" != t.gO.a651.type && "ak47" != t.gO.a651.type && "uri" != t.gO.a651.type || ((t.gO.a90 || !1 === t.a759s.a83.a844) && ("pistol" == t.gO.a651.type ? t.show.a83 = {
            a842: 200
        } : "sniper" == t.gO.a651.type ? t.show.a83 = {
            a842: 700
        } : "shotgun" == t.gO.a651.type && (t.show.a83 = {
            a842: 400
        })), t.show.a80 = {
            a842: 1400
        }) : t.gO.a751 ? (t.show.a86 = {
            a842: 600
        }, t.show.a606_run = {
            a842: 600
        }) : (t.show.a88 = {
            a842: 1400
        }, t.show.a252 = {
            a842: 1400
        }), t.gO.a751 ? (t.show.left_a778_walk = {
            a842: 600
        }, t.show.right_a778_walk = {
            a842: 600
        }) : (t.show.left_a778_a741 = {
            a842: 400
        }, t.show.right_a778_a741 = {
            a842: 400
        }), t.show
    }, G.a863.a864.a238.a759s = {
        body: {
            a843: {
                1: {
                    start: function(t) {},
                    a853: function(t) {}
                }
            }
        },
        z: {
            a843: {
                1: {
                    start: function(t) {},
                    a853: function(t) {}
                }
            }
        },
        a83: {
            a843: {
                .1: {
                    start: function(t) {
                        t.gO.a92From.copy(t.gO.a92), t.gO.a92To.set(-.2, 0, 0)
                    },
                    a853: function(t) {
                        t.gO.a92.lerpVectors(t.gO.a92From, t.gO.a92To, t.a852)
                    },
                    end: function(t) {}
                },
                .9: {
                    start: function(t) {
                        t.gO.a92From.copy(t.gO.a92), t.gO.a92To.set(0, 0, 0)
                    },
                    a853: function(t) {
                        t.gO.a92.lerpVectors(t.gO.a92From, t.gO.a92To, a97(3, t.a852))
                    },
                    end: function(t) {}
                }
            }
        },
        a80: {
            a843: {
                .26: {
                    start: function(t) {
                        t.gO.setLShoulderLookAtTo(0, -.5, 0), t.gO.a89(0, .5, 0)
                    },
                    a853: function(t) {
                        t.gO.a243Lerp(t.a852, t.gO.a92), t.gO.a244Lerp(t.a852, t.gO.a92)
                    }
                },
                .24: {
                    a853: function(t) {
                        var e = 0 - .025 * t.a852,
                            i = .0125 * t.a852 - .5;
                        t.gO.a243(e, i, 0, t.gO.a92), t.gO.a244(e, -i, 0, t.gO.a92)
                    },
                    end: function(t) {}
                },
                .23: {
                    a853: function(t) {
                        var e = .025 * t.a852 - .025,
                            i = .0125 * t.a852 - .4875;
                        t.gO.a243(e, i, 0, t.gO.a92), t.gO.a244(e, -i, 0, t.gO.a92)
                    }
                },
                .27: {
                    a853: function(t) {
                        var e = 0 - .025 * t.a852,
                            i = -.475 - .0125 * t.a852;
                        t.gO.a243(e, i, 0, t.gO.a92), t.gO.a244(e, -i, 0, t.gO.a92)
                    },
                    end: function(t) {}
                }
            }
        },
        a101: {
            a843: {
                .45: {
                    start: function(t) {
                        t.gO.a89(-.9, -.4, 0)
                    },
                    a853: function(t) {
                        t.gO.a244Lerp(t.a852, t.gO.a92)
                    }
                },
                .15: {
                    start: function(t) {
                        t.gO.a89(.7, 1, 0)
                    },
                    a853: function(t) {
                        t.gO.a244Lerp(t.a852, t.gO.a92)
                    },
                    end: function(t) {
                        "pickaxe" != t.gO.a651.type && "stone" != t.gO.a651.type && "wood" != t.gO.a651.type && "tnt" != t.gO.a651.type && "stairs" != t.gO.a651.type || (t.gO.a605.visible = !1)
                    }
                },
                .4: {
                    start: function(t) {
                        t.gO.a89(1.6, 0, 0)
                    },
                    a853: function(t) {
                        t.gO.a244Lerp(t.a852, t.gO.a92)
                    },
                    end: function(t) {
                        t.gO.a605.visible = !0
                    }
                }
            }
        },
        a606_run: {
            a843: {
                .26: {
                    start: function(t) {
                        t.gO.setLShoulderLookAtTo(-.2, -.4, 0)
                    },
                    a853: function(t) {
                        t.gO.a243Lerp(t.a852, t.gO.a92)
                    }
                },
                .24: {
                    start: function(t) {
                        t.gO.setLShoulderLookAtTo(1.4, 0, 0)
                    },
                    a853: function(t) {
                        t.gO.a243Lerp(t.a852, t.gO.a92)
                    },
                    end: function(t) {}
                },
                .23: {
                    start: function(t) {
                        t.gO.setLShoulderLookAtTo(2.4, .2, 0)
                    },
                    a853: function(t) {
                        t.gO.a243Lerp(t.a852, t.gO.a92)
                    }
                },
                .27: {
                    start: function(t) {
                        t.gO.setLShoulderLookAtTo(1.4, 0, 0)
                    },
                    a853: function(t) {
                        t.gO.a243Lerp(t.a852, t.gO.a92)
                    },
                    end: function(t) {}
                }
            }
        },
        a86: {
            a843: {
                .26: {
                    start: function(t) {
                        t.gO.a89(2.8, -.2, 0)
                    },
                    a853: function(t) {
                        t.gO.a244Lerp(t.a852, t.gO.a92)
                    }
                },
                .24: {
                    start: function(t) {
                        t.gO.a89(.9, 0, 0)
                    },
                    a853: function(t) {
                        t.gO.a244Lerp(t.a852, t.gO.a92)
                    },
                    end: function(t) {}
                },
                .23: {
                    start: function(t) {
                        t.gO.a89(-.5, .4, 0)
                    },
                    a853: function(t) {
                        t.gO.a244Lerp(t.a852, t.gO.a92)
                    }
                },
                .27: {
                    start: function(t) {
                        t.gO.a89(.9, 0, 0)
                    },
                    a853: function(t) {
                        t.gO.a244Lerp(t.a852, t.gO.a92)
                    },
                    end: function(t) {}
                }
            }
        },
        a252_bottom: {
            a843: {
                .26: {
                    start: function(t) {
                        t.gO.setLShoulderLookAtTo(1.4, 0, 0)
                    },
                    a853: function(t) {
                        t.gO.a243Lerp(t.a852, t.gO.a92)
                    }
                },
                .24: {
                    a853: function(t) {
                        var e = 1.4 - .025 * t.a852,
                            i = 0 + .0125 * t.a852;
                        t.gO.a243(e, i, 0, t.gO.a92)
                    },
                    end: function(t) {}
                },
                .23: {
                    a853: function(t) {
                        var e = 1.375 + .025 * t.a852,
                            i = .0125 + .0125 * t.a852;
                        t.gO.a243(e, i, 0, t.gO.a92)
                    }
                },
                .27: {
                    a853: function(t) {
                        var e = 1.4 - .025 * t.a852,
                            i = .025 - .0125 * t.a852;
                        t.gO.a243(e, i, 0, t.gO.a92)
                    },
                    end: function(t) {}
                }
            }
        },
        a606_walk: {
            a843: {
                .26: {
                    start: function(t) {
                        t.gO.setLShoulderLookAtTo(0, -.5, 0)
                    },
                    a853: function(t) {
                        t.gO.a243Lerp(t.a852, t.gO.a92)
                    }
                },
                .24: {
                    start: function(t) {
                        t.gO.setLShoulderLookAtTo(-.025, -.4875, 0)
                    },
                    a853: function(t) {
                        t.gO.a243Lerp(t.a852, t.gO.a92)
                    },
                    end: function(t) {}
                },
                .23: {
                    start: function(t) {
                        t.gO.setLShoulderLookAtTo(0, -.475, 0)
                    },
                    a853: function(t) {
                        t.gO.a243Lerp(t.a852, t.gO.a92)
                    }
                },
                .27: {
                    start: function(t) {
                        t.gO.setLShoulderLookAtTo(-.025, -.4875, 0)
                    },
                    a853: function(t) {
                        t.gO.a243Lerp(t.a852, t.gO.a92)
                    },
                    end: function(t) {}
                }
            }
        },
        a87: {
            a843: {
                .26: {
                    start: function(t) {
                        t.gO.a89(0, .5, 0)
                    },
                    a853: function(t) {
                        t.gO.a244Lerp(t.a852, t.gO.a92)
                    }
                },
                .24: {
                    start: function(t) {
                        t.gO.a89(-.025, .4875, 0)
                    },
                    a853: function(t) {
                        t.gO.a244Lerp(t.a852, t.gO.a92)
                    },
                    end: function(t) {}
                },
                .23: {
                    start: function(t) {
                        t.gO.a89(0, .475, 0)
                    },
                    a853: function(t) {
                        t.gO.a244Lerp(t.a852, t.gO.a92)
                    }
                },
                .27: {
                    start: function(t) {
                        t.gO.a89(-.025, .4875, 0)
                    },
                    a853: function(t) {
                        t.gO.a244Lerp(t.a852, t.gO.a92)
                    },
                    end: function(t) {}
                }
            }
        },
        a252: {
            a843: {
                .26: {
                    start: function(t) {
                        t.gO.setLShoulderLookAtTo(0, -.5, 0)
                    },
                    a853: function(t) {
                        t.gO.a243Lerp(t.a852, t.gO.a92)
                    }
                },
                .24: {
                    start: function(t) {
                        t.gO.setLShoulderLookAtTo(-.025, -.4875, 0)
                    },
                    a853: function(t) {
                        t.gO.a243Lerp(t.a852, t.gO.a92)
                    },
                    end: function(t) {}
                },
                .23: {
                    start: function(t) {
                        t.gO.setLShoulderLookAtTo(0, -.475, 0)
                    },
                    a853: function(t) {
                        t.gO.a243Lerp(t.a852, t.gO.a92)
                    }
                },
                .27: {
                    start: function(t) {
                        t.gO.setLShoulderLookAtTo(-.025, -.4875, 0)
                    },
                    a853: function(t) {
                        t.gO.a243Lerp(t.a852, t.gO.a92)
                    },
                    end: function(t) {}
                }
            }
        },
        a88: {
            a843: {
                .26: {
                    start: function(t) {
                        t.gO.a89(0, .5, 0)
                    },
                    a853: function(t) {
                        t.gO.a244Lerp(t.a852, t.gO.a92)
                    }
                },
                .24: {
                    start: function(t) {
                        t.gO.a89(-.025, .4875, 0)
                    },
                    a853: function(t) {
                        t.gO.a244Lerp(t.a852, t.gO.a92)
                    },
                    end: function(t) {}
                },
                .23: {
                    start: function(t) {
                        t.gO.a89(0, .475, 0)
                    },
                    a853: function(t) {
                        t.gO.a244Lerp(t.a852, t.gO.a92)
                    }
                },
                .27: {
                    start: function(t) {
                        t.gO.a89(-.025, .4875, 0)
                    },
                    a853: function(t) {
                        t.gO.a244Lerp(t.a852, t.gO.a92)
                    },
                    end: function(t) {}
                }
            }
        },
        left_a778_a741: {
            a843: {
                1: {
                    start: function(t) {
                        t.gO.a627From.copy(t.gO.a627), t.gO.a627To.set(0, 0, 0)
                    },
                    a853: function(t) {
                        var e = new THREE.Vector3;
                        e.copy(t.gO.a627From), e.lerp(t.gO.a627To, t.a852), t.gO.a241(e.x, e.y, e.z)
                    }
                }
            }
        },
        right_a778_a741: {
            a843: {
                1: {
                    start: function(t) {
                        t.gO.a624From.copy(t.gO.a624), t.gO.a624To.set(0, 0, 0)
                    },
                    a853: function(t) {
                        var e = new THREE.Vector3;
                        e.copy(t.gO.a624From), e.lerp(t.gO.a624To, t.a852), t.gO.a242(e.x, e.y, e.z)
                    }
                }
            }
        },
        left_a778_walk: {
            a843: {
                .29: {
                    start: function(t) {},
                    a853: function(t) {
                        t.gO.a241(.6 * t.a852, 0, 0)
                    }
                },
                .21: {
                    start: function(t) {},
                    a853: function(t) {
                        t.gO.a241(.6 - .6 * t.a852, 0, 0)
                    }
                },
                .22: {
                    start: function(t) {},
                    a853: function(t) {
                        t.gO.a241(-.6 * t.a852, 0, 0)
                    }
                },
                .28: {
                    start: function(t) {},
                    a853: function(t) {
                        t.gO.a241(.6 * t.a852 - .6, 0, 0)
                    }
                }
            }
        },
        right_a778_walk: {
            a843: {
                .29: {
                    start: function(t) {},
                    a853: function(t) {
                        t.gO.a242(-.6 * t.a852, 0, 0)
                    }
                },
                .21: {
                    start: function(t) {},
                    a853: function(t) {
                        t.gO.a242(.6 * t.a852 - .6, 0, 0)
                    }
                },
                .22: {
                    start: function(t) {},
                    a853: function(t) {
                        t.gO.a242(.6 * t.a852, 0, 0)
                    }
                },
                .28: {
                    start: function(t) {},
                    a853: function(t) {
                        t.gO.a242(.6 - .6 * t.a852, 0, 0)
                    }
                }
            }
        }
    }, G.a863.a864.a49es(), G.a870 = {
        aladdin: {
            skin: "aladdin",
            hasHelm: !0
        },
        alice: {
            skin: "alice",
            hasHelm: !0
        },
        angel: {
            skin: "angel",
            hasHelm: !0
        },
        anonymous: {
            skin: "anonymous",
            hasHelm: !0
        },
        arcticFox: {
            skin: "arcticFox",
            hasHelm: !0
        },
        army: {
            skin: "army",
            hasHelm: !0
        },
        artist: {
            skin: "artist",
            hasHelm: !0
        },
        astronaut: {
            skin: "astronaut",
            hasHelm: !0
        },
        batman: {
            skin: "batman",
            hasHelm: !0
        },
        beaver: {
            skin: "beaver",
            hasHelm: !0
        },
        blackWitch: {
            skin: "blackWitch",
            hasHelm: !0
        },
        bobRoss: {
            skin: "bobRoss",
            hasHelm: !0
        },
        burger: {
            skin: "burger",
            hasHelm: !1
        },
        buzzLightyear: {
            skin: "buzzLightyear",
            hasHelm: !0
        },
        cactus: {
            skin: "cactus",
            hasHelm: !0
        },
        canadianHockey: {
            skin: "canadianHockey",
            hasHelm: !0
        },
        captainAmerica: {
            skin: "captainAmerica",
            hasHelm: !0
        },
        cheerleader: {
            skin: "cheerleader",
            hasHelm: !0
        },
        chicken: {
            skin: "chicken",
            hasHelm: !0
        },
        cookieMonster: {
            skin: "cookieMonster",
            hasHelm: !1
        },
        coolGuy: {
            skin: "coolGuy",
            hasHelm: !0
        },
        countryGirl: {
            skin: "countryGirl",
            hasHelm: !0
        },
        cow: {
            skin: "cow",
            hasHelm: !0
        },
        cristianoRonaldo: {
            skin: "cristianoRonaldo",
            hasHelm: !0
        },
        croco: {
            skin: "croco",
            hasHelm: !0
        },
        crosby: {
            skin: "crosby",
            hasHelm: !0
        },
        deadpool: {
            skin: "deadpool",
            hasHelm: !0
        },
        dog: {
            skin: "dog",
            hasHelm: !0
        },
        donaldDuck: {
            skin: "donaldDuck",
            hasHelm: !0
        },
        donna: {
            skin: "donna",
            hasHelm: !0
        },
        duck: {
            skin: "duck",
            hasHelm: !1
        },
        duke: {
            skin: "duke",
            hasHelm: !0
        },
        electricPanda: {
            skin: "electricPanda",
            hasHelm: !0
        },
        electricRobot: {
            skin: "electricRobot",
            hasHelm: !0
        },
        elf: {
            skin: "elf",
            hasHelm: !0
        },
        elsa: {
            skin: "elsa",
            hasHelm: !0
        },
        emilie: {
            skin: "emilie",
            hasHelm: !0
        },
        eminem: {
            skin: "eminem",
            hasHelm: !0
        },
        emo: {
            skin: "emo",
            hasHelm: !0
        },
        fbi: {
            skin: "fbi",
            hasHelm: !0
        },
        fireFighter: {
            skin: "fireFighter",
            hasHelm: !0
        },
        fox: {
            skin: "fox",
            hasHelm: !0
        },
        frankenstein: {
            skin: "frankenstein",
            hasHelm: !0
        },
        frog: {
            skin: "frog",
            hasHelm: !0
        },
        geisha: {
            skin: "geisha",
            hasHelm: !0
        },
        ghostWidow: {
            skin: "ghostWidow",
            hasHelm: !0
        },
        godfather: {
            skin: "godfather",
            hasHelm: !0
        },
        gryffindor: {
            skin: "gryffindor",
            hasHelm: !0
        },
        hippy: {
            skin: "hippy",
            hasHelm: !0
        },
        homer: {
            skin: "homer",
            hasHelm: !0
        },
        horse: {
            skin: "horse",
            hasHelm: !0
        },
        hulk: {
            skin: "hulk",
            hasHelm: !1
        },
        ironman: {
            skin: "ironman",
            hasHelm: !0
        },
        jackSparrow: {
            skin: "jackSparrow",
            hasHelm: !1
        },
        jenny: {
            skin: "jenny",
            hasHelm: !0
        },
        jesus: {
            skin: "jesus",
            hasHelm: !0
        },
        joker: {
            skin: "joker",
            hasHelm: !1
        },
        karateKid: {
            skin: "karateKid",
            hasHelm: !0
        },
        kawaiiGirl: {
            skin: "kawaiiGirl",
            hasHelm: !0
        },
        lebronJames: {
            skin: "lebronJames",
            hasHelm: !0
        },
        a778endary: {
            skin: "a778endary",
            hasHelm: !0
        },
        lion: {
            skin: "lion",
            hasHelm: !0
        },
        lover: {
            skin: "lover",
            hasHelm: !0
        },
        luigi: {
            skin: "luigi",
            hasHelm: !0
        },
        lukeSkywalker: {
            skin: "lukeSkywalker",
            hasHelm: !0
        },
        mario: {
            skin: "mario",
            hasHelm: !0
        },
        monkey: {
            skin: "monkey",
            hasHelm: !1
        },
        monster: {
            skin: "monster",
            hasHelm: !0
        },
        monsterInc: {
            skin: "monsterInc",
            hasHelm: !0
        },
        navy: {
            skin: "navy",
            hasHelm: !0
        },
        ninja: {
            skin: "ninja",
            hasHelm: !0
        },
        ohMyGod: {
            skin: "ohMyGod",
            hasHelm: !1
        },
        owl: {
            skin: "owl",
            hasHelm: !0
        },
        parrot: {
            skin: "parrot",
            hasHelm: !0
        },
        peach: {
            skin: "peach",
            hasHelm: !0
        },
        penguin: {
            skin: "penguin",
            hasHelm: !0
        },
        pikachuGirl: {
            skin: "pikachuGirl",
            hasHelm: !0
        },
        policeMan: {
            skin: "policeMan",
            hasHelm: !0
        },
        popCorn: {
            skin: "popCorn",
            hasHelm: !0
        },
        potatoMan: {
            skin: "potatoMan",
            hasHelm: !0
        },
        queen: {
            skin: "queen",
            hasHelm: !0
        },
        rainbowHair: {
            skin: "rainbowHair",
            hasHelm: !1
        },
        redHead: {
            skin: "redHead",
            hasHelm: !0
        },
        robinHood: {
            skin: "robinHood",
            hasHelm: !0
        },
        robot: {
            skin: "robot",
            hasHelm: !1
        },
        santa: {
            skin: "santa",
            hasHelm: !0
        },
        shrek: {
            skin: "shrek",
            hasHelm: !0
        },
        skeleton: {
            skin: "skeleton",
            hasHelm: !0
        },
        skeletonPirate: {
            skin: "skeletonPirate",
            hasHelm: !0
        },
        soulEater: {
            skin: "soulEater",
            hasHelm: !0
        },
        superman: {
            skin: "superman",
            hasHelm: !1
        },
        trooper: {
            skin: "trooper",
            hasHelm: !0
        },
        trump: {
            skin: "trump",
            hasHelm: !0
        },
        viking: {
            skin: "viking",
            hasHelm: !0
        },
        vikingKing: {
            skin: "vikingKing",
            hasHelm: !0
        },
        werewolf: {
            skin: "werewolf",
            hasHelm: !0
        },
        whiteDevil: {
            skin: "whiteDevil",
            hasHelm: !0
        },
        wonderWoman: {
            skin: "wonderWoman",
            hasHelm: !0
        },
        woody: {
            skin: "woody",
            hasHelm: !0
        },
        yeti: {
            skin: "yeti",
            hasHelm: !0
        },
        yoshi: {
            skin: "yoshi",
            hasHelm: !0
        },
        zeus: {
            skin: "zeus",
            hasHelm: !0
        }
    }, $.extend(!0, G.a870.aladdin, G.a863.a864), $.extend(!0, G.a870.alice, G.a863.a864), $.extend(!0, G.a870.angel, G.a863.a864), $.extend(!0, G.a870.anonymous, G.a863.a864), $.extend(!0, G.a870.arcticFox, G.a863.a864), $.extend(!0, G.a870.army, G.a863.a864), $.extend(!0, G.a870.artist, G.a863.a864), $.extend(!0, G.a870.astronaut, G.a863.a864), $.extend(!0, G.a870.batman, G.a863.a864), $.extend(!0, G.a870.beaver, G.a863.a864), $.extend(!0, G.a870.blackWitch, G.a863.a864), $.extend(!0, G.a870.bobRoss, G.a863.a864), $.extend(!0, G.a870.burger, G.a863.a864), $.extend(!0, G.a870.buzzLightyear, G.a863.a864), $.extend(!0, G.a870.cactus, G.a863.a864), $.extend(!0, G.a870.canadianHockey, G.a863.a864), $.extend(!0, G.a870.captainAmerica, G.a863.a864), $.extend(!0, G.a870.cheerleader, G.a863.a864), $.extend(!0, G.a870.chicken, G.a863.a864), $.extend(!0, G.a870.cookieMonster, G.a863.a864), $.extend(!0, G.a870.coolGuy, G.a863.a864), $.extend(!0, G.a870.countryGirl, G.a863.a864), $.extend(!0, G.a870.cow, G.a863.a864), $.extend(!0, G.a870.cristianoRonaldo, G.a863.a864), $.extend(!0, G.a870.croco, G.a863.a864), $.extend(!0, G.a870.crosby, G.a863.a864), $.extend(!0, G.a870.deadpool, G.a863.a864), $.extend(!0, G.a870.dog, G.a863.a864), $.extend(!0, G.a870.donaldDuck, G.a863.a864), $.extend(!0, G.a870.donna, G.a863.a864), $.extend(!0, G.a870.duck, G.a863.a864), $.extend(!0, G.a870.duke, G.a863.a864), $.extend(!0, G.a870.electricPanda, G.a863.a864), $.extend(!0, G.a870.electricRobot, G.a863.a864), $.extend(!0, G.a870.elf, G.a863.a864), $.extend(!0, G.a870.elsa, G.a863.a864), $.extend(!0, G.a870.emilie, G.a863.a864), $.extend(!0, G.a870.eminem, G.a863.a864), $.extend(!0, G.a870.emo, G.a863.a864), $.extend(!0, G.a870.fbi, G.a863.a864), $.extend(!0, G.a870.fireFighter, G.a863.a864), $.extend(!0, G.a870.fox, G.a863.a864), $.extend(!0, G.a870.frankenstein, G.a863.a864), $.extend(!0, G.a870.frog, G.a863.a864), $.extend(!0, G.a870.geisha, G.a863.a864), $.extend(!0, G.a870.ghostWidow, G.a863.a864), $.extend(!0, G.a870.godfather, G.a863.a864), $.extend(!0, G.a870.gryffindor, G.a863.a864), $.extend(!0, G.a870.hippy, G.a863.a864), $.extend(!0, G.a870.homer, G.a863.a864), $.extend(!0, G.a870.horse, G.a863.a864), $.extend(!0, G.a870.hulk, G.a863.a864), $.extend(!0, G.a870.ironman, G.a863.a864), $.extend(!0, G.a870.jackSparrow, G.a863.a864), $.extend(!0, G.a870.jenny, G.a863.a864), $.extend(!0, G.a870.jesus, G.a863.a864), $.extend(!0, G.a870.joker, G.a863.a864), $.extend(!0, G.a870.karateKid, G.a863.a864), $.extend(!0, G.a870.kawaiiGirl, G.a863.a864), $.extend(!0, G.a870.lebronJames, G.a863.a864), $.extend(!0, G.a870.a778endary, G.a863.a864), $.extend(!0, G.a870.lion, G.a863.a864), $.extend(!0, G.a870.lover, G.a863.a864), $.extend(!0, G.a870.luigi, G.a863.a864), $.extend(!0, G.a870.lukeSkywalker, G.a863.a864), $.extend(!0, G.a870.mario, G.a863.a864), $.extend(!0, G.a870.monkey, G.a863.a864), $.extend(!0, G.a870.monster, G.a863.a864), $.extend(!0, G.a870.monsterInc, G.a863.a864), $.extend(!0, G.a870.navy, G.a863.a864), $.extend(!0, G.a870.ninja, G.a863.a864), $.extend(!0, G.a870.ohMyGod, G.a863.a864), $.extend(!0, G.a870.owl, G.a863.a864), $.extend(!0, G.a870.parrot, G.a863.a864), $.extend(!0, G.a870.peach, G.a863.a864), $.extend(!0, G.a870.penguin, G.a863.a864), $.extend(!0, G.a870.pikachuGirl, G.a863.a864), $.extend(!0, G.a870.policeMan, G.a863.a864), $.extend(!0, G.a870.popCorn, G.a863.a864), $.extend(!0, G.a870.potatoMan, G.a863.a864), $.extend(!0, G.a870.queen, G.a863.a864), $.extend(!0, G.a870.rainbowHair, G.a863.a864), $.extend(!0, G.a870.redHead, G.a863.a864), $.extend(!0, G.a870.robinHood, G.a863.a864), $.extend(!0, G.a870.robot, G.a863.a864), $.extend(!0, G.a870.santa, G.a863.a864), $.extend(!0, G.a870.shrek, G.a863.a864), $.extend(!0, G.a870.skeleton, G.a863.a864), $.extend(!0, G.a870.skeletonPirate, G.a863.a864), $.extend(!0, G.a870.soulEater, G.a863.a864), $.extend(!0, G.a870.superman, G.a863.a864), $.extend(!0, G.a870.trooper, G.a863.a864), $.extend(!0, G.a870.trump, G.a863.a864), $.extend(!0, G.a870.viking, G.a863.a864), $.extend(!0, G.a870.vikingKing, G.a863.a864), $.extend(!0, G.a870.werewolf, G.a863.a864), $.extend(!0, G.a870.whiteDevil, G.a863.a864), $.extend(!0, G.a870.wonderWoman, G.a863.a864), $.extend(!0, G.a870.woody, G.a863.a864), $.extend(!0, G.a870.yeti, G.a863.a864), $.extend(!0, G.a870.yoshi, G.a863.a864), $.extend(!0, G.a870.zeus, G.a863.a864), G.a867_a863.invisible = {
        a49es: function() {
            var t = new THREE.CubeGeometry(1, 1, 1),
                e = new THREE.Mesh(t);
            G.a867_a863.invisible.meshes = {
                body: e
            }
        },
        a759s: {
            a107: function(t) {
                var e = {};
                return e.a868 = {
                    a842: t.gO.duration
                }, e
            },
            start: function(t) {
                t.meshes = {
                    body: G.a867_a863.invisible.meshes.body.clone()
                }, t.meshes.body.material = new THREE.MeshBasicMaterial({
                    color: 16777215
                })
            },
            a759s: {
                a868: {
                    a843: {
                        1: {
                            start: function(t) {
                                t.gO.offset && (t.gO.position.set(t.gO.position.x + t.gO.direction.x * t.gO.offset, t.gO.position.y + t.gO.direction.y * t.gO.offset, t.gO.position.z + t.gO.direction.z * t.gO.offset), t.gO.a868.position.copy(t.gO.position)), t.gO.a679 = new THREE.Vector3
                            },
                            a853: function(t) {
                                t.gO.a679.set(t.gO.position.x + t.gO.direction.x * (t.gO.range * t.a852), t.gO.position.y + t.gO.direction.y * (t.gO.range * t.a852), t.gO.position.z + t.gO.direction.z * (t.gO.range * t.a852));
                                var e = t.gO.a865.a377.a71a668(t.gO.size, t.gO.position, t.gO.a679, !1, !0, !1);
                                if (t.gO.position.copy(e.pos), t.gO.a868.position.copy(e.pos), e.a289 && e.a825 != t.gO.a343) {
                                    if (t.gO.a645 > 0)
                                        if (e.a825.buildP) {
                                            t.gO.a865.a115(e.pos, e.normal, 16777215, 3, .8);
                                            G.Keybinds.build.a730 ? t.gO.a865.player.a637(e.a825, e.pos) : t.gO.a865.a610([t.gO.a865.player.posToInsidePos(e.pos)], [100])
                                        } else {
                                            var i = e.a825.meshes.head;
                                            i.geometry.computeBoundingBox();
                                            var o = i.geometry.boundingBox.getCenter();
                                            e.a825.meshes.head.localToWorld(o);
                                            t.gO.a865.a115(e.pos, e.normal, 16711680, 3, .8);
                                            var n, s = e.pos.distanceTo(o);
                                            n = t.gO.a645 / s, t.gO.a865.player.a77 = !0, clearTimeout(t.gO.a865.player.a77Timeout), t.gO.a865.player.a77Timeout = setTimeout((function() {
                                                t.gO.a865.player.a77 = !1
                                            }), 240), n >= 100 && t.gO.a865.player.addEventQueue("topWow", {
                                                msg: t.gO.parameters.headshotMsg,
                                                color: t.gO.parameters.headshotColor
                                            }), t.gO.a865.player.a612(e.a825, e.pos, n)
                                        }
                                    else if (e.a825.buildP) t.gO.a865.a115(e.pos, e.normal, 16777215, 3, .8);
                                    else t.gO.a865.a115(e.pos, e.normal, 16711680, 3, .8);
                                    t.gO.remove()
                                }
                            },
                            end: function(t) {
                                t.a852 = 1, this.a853(t), t.gO.remove()
                            }
                        }
                    }
                },
                movement: {
                    a843: {
                        .49: {
                            start: function(t) {},
                            a853: function(t) {}
                        },
                        .51: {
                            start: function(t) {},
                            a853: function(t) {}
                        }
                    }
                }
            }
        }
    }, G.a867_a863.bullet = {
        a49es: function() {
            var t = new THREE.CubeGeometry(1, 1, 1),
                e = new THREE.MeshBasicMaterial({
                    color: 5592405
                }),
                i = new THREE.Mesh(t, e);
            G.a867_a863.bullet.meshes = {
                body: i
            }
        },
        a759s: {
            a107: function(t) {
                var e = {};
                return (e = {}).a868 = {
                    a842: t.gO.duration
                }, e.movement = {
                    a842: 50
                }, e
            },
            start: function(t) {
                t.meshes = {
                    body: G.a867_a863.bullet.meshes.body.clone()
                }, t.meshes.body.scale.copy(t.gO.a574), t.gO.a868.add(t.meshes.body)
            },
            a759s: {
                a868: {
                    a843: {
                        1: {
                            start: function(t) {
                                t.done = !1, t.a677 = 0, t.gO.offset && (t.gO.position.set(t.gO.position.x + t.gO.direction.x * t.gO.offset, t.gO.position.y + t.gO.direction.y * t.gO.offset, t.gO.position.z + t.gO.direction.z * t.gO.offset), t.gO.a868.position.copy(t.gO.position)), t.gO.a679 = new THREE.Vector3
                            },
                            a853: function(t) {
                                t.a677 += .02, t.gO.a679.set(t.gO.position.x + t.gO.direction.x * t.gO.a676, t.gO.position.y + t.gO.direction.y * t.gO.a676, t.gO.position.z + t.gO.direction.z * t.gO.a676);
                                var e = t.gO.a865.a377.a71a668(t.gO.size, t.gO.position, t.gO.a679, t.gO.ignoreTypes, !0, !1);
                                if (t.gO.position.copy(e.pos), t.gO.a868.position.copy(e.pos), e.a289 && e.a825 != t.gO.a343)
                                    if (t.gO.remove(), t.gO.a645 > 0) {
                                        if (e.a825 instanceof G.a650) {
                                            t.gO.a865.a610([t.gO.a865.player.posToInsidePos(e.pos)], [20]);
                                            t.gO.a865.a115(e.pos, e.normal, 16777215, 3, .8)
                                        }
                                        if (e.a825 instanceof G.a611) {
                                            var i = e.a825.meshes.head;
                                            i.geometry.computeBoundingBox();
                                            var o = i.geometry.boundingBox.getCenter();
                                            e.a825.meshes.head.localToWorld(o), t.gO.a865.a115(e.pos, e.normal, 16711680, 3, .8);
                                            var n, s = e.pos.distanceTo(o);
                                            n = t.gO.a645 / s, t.gO.a865.player.a77 = !0, clearTimeout(t.gO.a865.player.a77Timeout), t.gO.a865.player.a77Timeout = setTimeout((function() {
                                                t.gO.a865.player.a77 = !1
                                            }), 240), n >= 100 && t.gO.a865.player.addEventQueue("topWow", {
                                                msg: t.gO.parameters.headshotMsg,
                                                color: t.gO.parameters.headshotColor
                                            }), t.gO.a865.player.a612(e.a825, e.pos, n)
                                        }
                                    } else e.a825 instanceof G.a650 ? t.gO.a865.a115(e.pos, e.normal, 16777215, 3, .8) : e.a825 instanceof G.a611 && t.gO.a865.a115(e.pos, e.normal, 16711680, 3, .8)
                            },
                            end: function(t) {
                                t.gO.remove()
                            }
                        }
                    }
                },
                movement: {
                    a839: function(t) {
                        return !0
                    },
                    done: !0,
                    a833: ["body"],
                    a840: [999],
                    a842: function(t) {
                        return 50
                    },
                    a843: {
                        .49: {
                            start: function(t) {},
                            a853: function(t) {}
                        },
                        .51: {
                            start: function(t) {},
                            a853: function(t) {}
                        }
                    }
                }
            }
        }
    }, G.a867_a863.stone = {
        a49es: function() {
            var t = new THREE.SphereGeometry(.8, 4, 4),
                e = new THREE.Mesh(t);
            G.a867_a863.stone.meshes = {
                body: e
            }
        },
        a759s: {
            a107: function(t) {
                var e = {
                    a868: {
                        a842: 3e3
                    },
                    movement: {
                        a842: 50
                    }
                };
                return e
            },
            start: function(t) {
                t.meshes = {
                    body: G.a867_a863.stone.meshes.body.clone()
                }, t.meshes.body.material = G.assets[G.a836.Material].stoneballFlat, t.gO.a868.add(t.meshes.body)
            },
            a759s: {
                a868: {
                    a843: {
                        1: {
                            start: function(t) {
                                t.gO.parameters.me || (t.gO.position.set(t.gO.position.x + 5 * t.gO.direction.x, t.gO.position.y + 5 * t.gO.direction.y, t.gO.position.z + 5 * t.gO.direction.z), t.gO.a868.position.copy(t.gO.position)), t.a677 = 0, t.gO.a679 = new THREE.Vector3
                            },
                            a853: function(t) {
                                t.a677 += .02, t.gO.a679.set(t.gO.position.x + t.gO.direction.x * t.gO.a676, t.gO.position.y - t.a677 + t.gO.direction.y * t.gO.a676, t.gO.position.z + t.gO.direction.z * t.gO.a676);
                                var e = t.gO.a865.a377.a71a668(t.gO.size, t.gO.position, t.gO.a679, !1, !0, !1);
                                if (t.gO.position.copy(e.pos), t.gO.a868.position.copy(e.pos), e.a289 && e.a825 != t.gO.a343)
                                    if (t.gO.remove(), t.gO.parameters.me)
                                        if (e.a825.buildP) {
                                            t.gO.a865.a115(e.pos, e.normal, 10856889, 3, .8);
                                            t.gO.a865.a637([t.gO.a865.player.posToOutsidePos(e.pos)], [256])
                                        } else {
                                            var i = e.a825.meshes.head;
                                            i.geometry.computeBoundingBox();
                                            var o = i.geometry.boundingBox.getCenter();
                                            e.a825.meshes.head.localToWorld(o);
                                            var n;
                                            t.gO.a865.a115(e.pos, e.normal, 10856889, 3, .8);
                                            n = 220 / e.pos.distanceTo(o), t.gO.a865.player.a77 = !0, clearTimeout(t.gO.a865.player.a77Timeout), t.gO.a865.player.a77Timeout = setTimeout((function() {
                                                t.gO.a865.player.a77 = !1
                                            }), 100), n >= 100 && t.gO.a865.player.addEventQueue("topWow", {
                                                msg: ["DANG!", " headrock"],
                                                color: ["rgba(255,0,0,{opacity})", "rgba(255,255,255,{opacity})"]
                                            }), t.gO.a865.player.a612(e.a825, e.pos, n)
                                        }
                                else if (e.a825.buildP) t.gO.a865.a115(e.pos, e.normal, 10856889, 3, .8);
                                else t.gO.a865.a115(e.pos, e.normal, 16711680, 3, .8)
                            },
                            end: function(t) {
                                t.gO.remove()
                            }
                        }
                    }
                },
                movement: {
                    a843: {
                        .49: {
                            start: function(t) {},
                            a853: function(t) {
                                t.anim.meshes.body.rotation.y += .05
                            }
                        },
                        .51: {
                            start: function(t) {},
                            a853: function(t) {}
                        }
                    }
                }
            }
        }
    }, G.a867_a863.wood = {
        a49es: function() {
            var t = new THREE.CubeGeometry(1, 5, 1),
                e = new THREE.Mesh(t);
            G.a867_a863.wood.meshes = {
                body: e
            }
        },
        a759s: {
            a107: function(t) {
                var e = {
                    a868: {
                        a842: 3e4
                    },
                    movement: {
                        a842: 50
                    }
                };
                return e
            },
            start: function(t) {
                t.meshes = {
                    body: G.a867_a863.wood.meshes.body.clone()
                }, t.meshes.body.material = G.assets[G.a836.Material].woodballFlat, t.gO.a868.add(t.meshes.body), t.gO.a679 = new THREE.Vector3
            },
            a759s: {
                a868: {
                    a843: {
                        1: {
                            start: function(t) {
                                t.gO.parameters.me || (t.gO.position.set(t.gO.position.x + 5 * t.gO.direction.x, t.gO.position.y + 5 * t.gO.direction.y, t.gO.position.z + 5 * t.gO.direction.z), t.gO.a868.position.copy(t.gO.position)), t.a677 = 0
                            },
                            a853: function(t) {
                                t.a677 += .02, t.gO.a679.set(t.gO.position.x + t.gO.direction.x * t.gO.a676, t.gO.position.y - t.a677 + t.gO.direction.y * t.gO.a676, t.gO.position.z + t.gO.direction.z * t.gO.a676);
                                var e = t.gO.a865.a377.a71a668(t.gO.size, t.gO.position, t.gO.a679, !1, !0, !1);
                                if (t.gO.position.copy(e.pos), t.gO.a868.position.copy(e.pos), e.a289 && e.a825 != t.gO.a343)
                                    if (t.gO.remove(), t.gO.parameters.me)
                                        if (e.a825.buildP) {
                                            t.gO.a865.a115(e.pos, e.normal, 3944220, 6, .8);
                                            t.gO.a865.player.a637(e.a825, e.pos, 1280)
                                        } else {
                                            var i = e.a825.meshes.head;
                                            i.geometry.computeBoundingBox();
                                            var o = i.geometry.boundingBox.getCenter();
                                            e.a825.meshes.head.localToWorld(o);
                                            t.gO.a865.a115(e.pos, e.normal, 16711680, 3, .8);
                                            t.gO.a865.player.addEventQueue("headshot", {});
                                            var n, s = e.pos.distanceTo(o);
                                            n = 140 / s, t.gO.a865.player.a77 = !0, clearTimeout(t.gO.a865.player.a77Timeout), t.gO.a865.player.a77Timeout = setTimeout((function() {
                                                t.gO.a865.player.a77 = !1
                                            }), 100), console.log(s + "|" + n), t.gO.a865.player.a612(e.a825, e.pos, n)
                                        }
                                else if (e.a825.buildP) t.gO.a865.a115(e.pos, e.normal, 16777215, 3, .8);
                                else t.gO.a865.a115(e.pos, e.normal, 16711680, 3, .8)
                            },
                            end: function(t) {
                                t.gO.remove()
                            }
                        }
                    }
                },
                movement: {
                    a843: {
                        .49: {
                            start: function(t) {},
                            a853: function(t) {
                                t.anim.meshes.body.rotation.z += .1, t.anim.meshes.body.rotation.y += .1, t.anim.meshes.body.rotation.x += .1
                            }
                        },
                        .51: {
                            start: function(t) {},
                            a853: function(t) {
                                t.anim.meshes.body.rotation.z += .1, t.anim.meshes.body.rotation.y += .1, t.anim.meshes.body.rotation.x += .1
                            }
                        }
                    }
                }
            }
        }
    }, G.a867_a863.tnt = {
        a49es: function() {
            var t = new THREE.CubeGeometry(1, 1, 1),
                e = new THREE.Mesh(t);
            G.a867_a863.tnt.meshes = {
                body: e
            }
        },
        a759s: {
            a107: function(t) {
                var e = {
                    movement: {
                        a842: 1e4
                    },
                    a868: {
                        a842: 1e4
                    },
                    flame0: {
                        a842: 160
                    }
                };
                return Date.now() - t.gO.a830 > 57 && (e.flame1 = {
                    a842: 120
                }), Date.now() - t.gO.a830 > 17 && (e.flame2 = {
                    a842: 100
                }), e
            },
            start: function(t) {
                var e = new THREE.TorusGeometry(.4, .1, 4, 6),
                    i = new THREE.MeshBasicMaterial({
                        color: 15990784
                    }),
                    o = new THREE.Mesh(e, i);
                o.scale.z = 10, o.rotation.x = Math.PI / 2, o.position.y = -.93;
                var n = new THREE.CylinderGeometry(.3, .3, .1, 8),
                    s = new THREE.MeshBasicMaterial({
                        color: 0
                    }),
                    r = new THREE.Mesh(n, s);
                r.add(o);
                var a = new THREE.CylinderGeometry(.02, .02, .8, 4),
                    h = new THREE.MeshBasicMaterial({
                        color: 10066329
                    }),
                    l = new THREE.Mesh(a, h);
                l.rotation.x = .1, r.add(l), t.meshes = {
                    tnt: r,
                    wick: l
                };
                var c = new THREE.SpriteMaterial({
                        color: 16776960
                    }),
                    u = new THREE.SpriteMaterial({
                        color: 16753920
                    }),
                    d = new THREE.SpriteMaterial({
                        color: 16776960
                    });
                t.meshes.flame0 = new THREE.Sprite(c), t.meshes.flame1 = new THREE.Sprite(u), t.meshes.flame2 = new THREE.Sprite(d), t.meshes.flame0.scale.set(.24, .24, .24), t.meshes.flame1.scale.set(.24, .24, .24), t.meshes.flame2.scale.set(.24, .24, .24), l.add(t.meshes.flame0), l.add(t.meshes.flame1), l.add(t.meshes.flame2), t.gO.a868.add(t.meshes.tnt), t.gO.a830 = Date.now(), t.gO.flame0FinalPos = new THREE.Vector3, t.gO.flame1FinalPos = new THREE.Vector3, t.gO.flame2FinalPos = new THREE.Vector3
            },
            a759s: {
                a868: {
                    a843: {
                        1: {
                            start: function(t) {
                                t.gO.parameters.me || (t.gO.position.set(t.gO.position.x + 5 * t.gO.direction.x, t.gO.position.y + 5 * t.gO.direction.y, t.gO.position.z + 5 * t.gO.direction.z), t.gO.a868.position.copy(t.gO.position)), t.a677 = 0, t.gO.a679 = new THREE.Vector3
                            },
                            a853: function(t) {
                                t.a677 += .02, t.gO.a679.set(t.gO.position.x + t.gO.direction.x * t.gO.a676, t.gO.position.y - t.a677 + t.gO.direction.y * t.gO.a676, t.gO.position.z + t.gO.direction.z * t.gO.a676);
                                var e = t.gO.a865.a377.a71a668(t.gO.size, t.gO.position, t.gO.a679, !1, !0, !1);
                                if (t.gO.position.copy(e.pos), t.gO.a868.position.copy(e.pos), e.a289 && e.a825 != t.gO.a343)
                                    if (t.gO.remove(), t.gO.parameters.me) {
                                        if (GAME.a865.player.a609(5, 5, {}, e.pos, e.normal), e.a825.buildP) var i = e.a825.posToVMiddlePos(t.gO.a865.player.posToInsidePos(e.pos));
                                        else i = e.pos;
                                        for (var o = [], n = [], s = -1; s <= 1; s += 1)
                                            for (var r = -1; r <= 1; r += 1)
                                                for (var a = -1; a <= 1; a += 1) {
                                                    var h = new THREE.Vector3(i.x + 5 * s, i.y + 5 * r, i.z + 5 * a),
                                                        l = new THREE.Vector3;
                                                    l.subVectors(h, e.pos).normalize(), GAME.a865.a701(this, 9, h, l, {}), o.push(new THREE.Vector3(i.x + 5 * s, i.y + 5 * r, i.z + 5 * a)), n.push(200)
                                                }
                                        if (t.gO.a865.a610(o, n), e.a825.buildP);
                                        else {
                                            var c = e.a825.meshes.head;
                                            c.geometry.computeBoundingBox();
                                            var u = c.geometry.boundingBox.getCenter();
                                            e.a825.meshes.head.localToWorld(u);
                                            t.gO.a865.a115(e.pos, e.normal, 10856889, 3, .8);
                                            t.gO.a865.player.addEventQueue("topWow", {
                                                msg: ["OMG ", "Blowed up!"],
                                                color: ["rgba(255,0,0,{opacity})", "rgba(255,0,0,{opacity})"]
                                            });
                                            GAME.a865.player.a77 = !0, clearTimeout(t.gO.a865.player.a77Timeout), GAME.a865.player.a77Timeout = setTimeout((function() {
                                                GAME.a865.player.a77 = !1
                                            }), 100), t.gO.a865.player.a612(e.a825, e.pos, 100)
                                        }
                                    } else if (e.a825.buildP);
                                else t.gO.a865.a115(e.pos, e.normal, 16711680, 3, .8)
                            },
                            end: function(t) {
                                t.gO.remove()
                            }
                        }
                    }
                },
                flame0: {
                    a843: {
                        .6: {
                            start: function(t) {
                                t.gO.flame0FinalPos.set(G.randFloat(-.4, .4, 2), G.randFloat(1, 1.1, 2), G.randFloat(-1, 2, 2)), t.gO.a830 = Date.now()
                            },
                            a853: function(t) {
                                t.anim.meshes.flame0.position.copy(t.gO.flame0FinalPos).multiplyScalar(.6 * Math.sin(1.5708 * t.a852)), t.anim.meshes.flame0.position.y += .48, t.anim.meshes.flame0.material.opacity = 1
                            }
                        },
                        .4: {
                            start: function(t) {},
                            a853: function(t) {
                                t.anim.meshes.flame0.position.copy(t.gO.flame0FinalPos).multiplyScalar(.6 + .2 * Math.sin(1.5708 * t.a852)), t.anim.meshes.flame0.position.y += .48, t.anim.meshes.flame0.material.opacity = 1 - t.a852
                            }
                        }
                    }
                },
                flame1: {
                    a843: {
                        .6: {
                            start: function(t) {
                                t.gO.flame1FinalPos.set(G.randFloat(-.4, .4, 2), G.randFloat(1, 1.1, 2), G.randFloat(-1, 2, 2))
                            },
                            a853: function(t) {
                                t.anim.meshes.flame1.position.copy(t.gO.flame1FinalPos).multiplyScalar(.6 * Math.sin(1.5708 * t.a852)), t.anim.meshes.flame1.position.y += .45, t.anim.meshes.flame1.material.opacity = 1
                            }
                        },
                        .4: {
                            start: function(t) {},
                            a853: function(t) {
                                t.anim.meshes.flame1.position.copy(t.gO.flame1FinalPos).multiplyScalar(.6 + .2 * Math.sin(1.5708 * t.a852)), t.anim.meshes.flame1.position.y += .45, t.anim.meshes.flame1.material.opacity = 1 - t.a852
                            }
                        }
                    }
                },
                flame2: {
                    a843: {
                        .6: {
                            start: function(t) {
                                t.gO.flame2FinalPos.set(G.randFloat(-.4, .4, 2), G.randFloat(1, 1.1, 2), G.randFloat(-1, 1, 2))
                            },
                            a853: function(t) {
                                t.anim.meshes.flame2.position.copy(t.gO.flame2FinalPos).multiplyScalar(.6 * Math.sin(1.5708 * t.a852)), t.anim.meshes.flame2.position.y += .45, t.anim.meshes.flame2.material.opacity = 1
                            }
                        },
                        .4: {
                            start: function(t) {},
                            a853: function(t) {
                                t.anim.meshes.flame2.position.copy(t.gO.flame2FinalPos).multiplyScalar(.6 + .2 * Math.sin(1.5708 * t.a852)), t.anim.meshes.flame2.position.y += .45, t.anim.meshes.flame2.material.opacity = 1 - t.a852
                            }
                        }
                    }
                },
                movement: {
                    a843: {
                        .49: {
                            start: function(t) {},
                            a853: function(t) {
                                t.anim.meshes.tnt.rotation.y += .1, t.anim.meshes.tnt.rotation.x += .1, t.anim.meshes.tnt.rotation.z += .14
                            }
                        },
                        .51: {
                            start: function(t) {},
                            a853: function(t) {}
                        }
                    }
                }
            }
        }
    }, G.a867_a863.a869 = {
        a49es: function() {},
        a759s: {
            a107: function(t) {
                var e = {
                    a868: {
                        a842: 3e3
                    },
                    movement: {
                        a842: 400
                    }
                };
                return e
            },
            start: function(t) {
                for (var e = new THREE.SpriteMaterial({
                        color: 14265856
                    }), i = new THREE.SpriteMaterial({
                        color: 15422208
                    }), o = new THREE.SpriteMaterial({
                        color: 15439872
                    }), n = 0; n < 10; n++) {
                    var s = G.randInt(0, 2);
                    t.meshes[n] = 0 == s ? new THREE.Sprite(e) : 1 == s ? new THREE.Sprite(i) : new THREE.Sprite(o), t.meshes[n].a294 = new THREE.Vector3(G.randInt(-14, 14), G.randInt(-14, 14), G.randInt(-14, 14)), t.meshes[n].scale.set(1, 1, 1), t.gO.a868.add(t.meshes[n])
                }
            },
            a759s: {
                a868: {
                    a843: {
                        1: {
                            start: function(t) {},
                            a853: function(t) {},
                            end: function(t) {}
                        }
                    }
                },
                movement: {
                    a843: {
                        .1: {
                            start: function(t) {},
                            a853: function(t) {
                                for (var e = 0; e < 10; e++) t.anim.meshes[e].scale.set(1 + 7 * t.a852, 1 + 7 * t.a852, 1), t.anim.meshes[e].position.set(t.anim.meshes[e].a294.x * (.4 * Math.sin(1.5708 * t.a852)), t.anim.meshes[e].a294.y * (.4 * Math.sin(1.5708 * t.a852)), t.anim.meshes[e].a294.z * (.4 * Math.sin(1.5708 * t.a852)))
                            }
                        },
                        .9: {
                            start: function(t) {},
                            a853: function(t) {
                                for (var e = 0; e < 10; e++) t.anim.meshes[e].scale.set(8 - 8 * t.a852, 8 - 8 * t.a852, 1), t.anim.meshes[e].position.set(t.anim.meshes[e].a294.x * (.4 + .6 * t.a852), t.anim.meshes[e].a294.y * (.4 + .6 * t.a852), t.anim.meshes[e].a294.z * (.4 + .6 * t.a852))
                            },
                            end: function(t) {
                                t.gO.remove()
                            }
                        }
                    }
                }
            }
        }
    }, G.a867_a863.stairs = {
        a49es: function() {
            var t = new THREE.CubeGeometry(1, 5, 1),
                e = new THREE.Mesh(t);
            G.a867_a863.stairs.meshes = {
                body: e
            }
        },
        a759s: {
            a107: function(t) {
                var e = {
                    a868: {
                        a842: 3e4
                    },
                    movement: {
                        a842: 50
                    }
                };
                return e
            },
            start: function(t) {
                t.meshes = {
                    body: G.a867_a863.stairs.meshes.body.clone()
                }, t.meshes.body.material = G.assets[G.a836.Material].woodballFlat, t.gO.a868.add(t.meshes.body), t.gO.a679 = new THREE.Vector3
            },
            a759s: {
                a868: {
                    a843: {
                        1: {
                            start: function(t) {
                                t.gO.parameters.me || (t.gO.position.set(t.gO.position.x + 5 * t.gO.direction.x, t.gO.position.y + 5 * t.gO.direction.y, t.gO.position.z + 5 * t.gO.direction.z), t.gO.a868.position.copy(t.gO.position)), t.a677 = 0
                            },
                            a853: function(t) {
                                t.a677 += .02, t.gO.a679.set(t.gO.position.x + t.gO.direction.x * t.gO.a676, t.gO.position.y - t.a677 + t.gO.direction.y * t.gO.a676, t.gO.position.z + t.gO.direction.z * t.gO.a676);
                                var e = t.gO.a865.a377.a71a668(t.gO.size, t.gO.position, t.gO.a679, !1, !0, !1);
                                if (t.gO.position.copy(e.pos), t.gO.a868.position.copy(e.pos), e.a289 && e.a825 != t.gO.a343)
                                    if (t.gO.remove(), t.gO.parameters.me)
                                        if (e.a825.buildP) {
                                            t.gO.a865.a115(e.pos, e.normal, 3944220, 6, .8);
                                            var i, o = e.a825.posToVMiddlePos(t.gO.a865.player.posToInsidePos(e.pos));
                                            i = 1 == e.normal.x ? 0 : -1 == e.normal.x ? 1 : 1 == e.normal.z ? 2 : -1 == e.normal.z ? 3 : t.gO.a865.player.camera.rotation.y > .7854 && t.gO.a865.player.camera.rotation.y < 2.3562 ? 0 : t.gO.a865.player.camera.rotation.y < -.7854 && t.gO.a865.player.camera.rotation.y > -2.3562 ? 1 : t.gO.a865.player.camera.rotation.y > -.7854 && t.gO.a865.player.camera.rotation.y < .7854 ? 2 : 3;
                                            var n = o.clone(),
                                                s = o.clone(),
                                                r = o.clone(),
                                                a = o.clone(),
                                                h = o.clone(),
                                                l = o.clone(),
                                                c = o.clone(),
                                                u = o.clone(),
                                                d = o.clone();
                                            n.y += 5, s.y += 10, r.y += 15, a.y += 5, h.y += 10, l.y += 15, c.y += 5, u.y += 10, d.y += 15, 0 == i ? (n.x -= 5, n.z -= 5, s.x -= 10, s.z -= 5, r.x -= 15, r.z -= 5, a.x -= 5, h.x -= 10, l.x -= 15, c.x -= 5, c.z += 5, u.x -= 10, u.z += 5, d.x -= 15, d.z += 5) : 1 == i ? (n.x += 5, n.z -= 5, s.x += 10, s.z -= 5, r.x += 15, r.z -= 5, a.x += 5, h.x += 10, l.x += 15, c.x += 5, c.z += 5, u.x += 10, u.z += 5, d.x += 15, d.z += 5) : 2 == i ? (n.z -= 5, n.x -= 5, s.z -= 10, s.x -= 5, r.z -= 15, r.x -= 5, a.z -= 5, h.z -= 10, l.z -= 15, c.z -= 5, c.x += 5, u.z -= 10, u.x += 5, d.z -= 15, d.x += 5) : 3 == i && (n.z += 5, n.x -= 5, s.z += 10, s.x -= 5, r.z += 15, r.x -= 5, a.z += 5, h.z += 10, l.z += 15, c.z += 5, c.x += 5, u.z += 10, u.x += 5, d.z += 15, d.x += 5), t.gO.a865.a637([n, s, r, a, h, l, c, u, d], [1280, 1280, 1280, 1280, 1280, 1280, 1280, 1280, 1280])
                                        } else {
                                            var p = e.a825.meshes.head;
                                            p.geometry.computeBoundingBox();
                                            var f = p.geometry.boundingBox.getCenter();
                                            e.a825.meshes.head.localToWorld(f);
                                            var g;
                                            t.gO.a865.a115(e.pos, e.normal, 16711680, 3, .8);
                                            g = 140 / e.pos.distanceTo(f), t.gO.a865.player.a77 = !0, clearTimeout(t.gO.a865.player.a77Timeout), t.gO.a865.player.a77Timeout = setTimeout((function() {
                                                t.gO.a865.player.a77 = !1
                                            }), 100), t.gO.a865.player.a612(e.a825, e.pos, g)
                                        }
                                else if (e.a825.buildP) t.gO.a865.a115(e.pos, e.normal, 16777215, 3, .8);
                                else t.gO.a865.a115(e.pos, e.normal, 16711680, 3, .8)
                            },
                            end: function(t) {
                                t.gO.remove()
                            }
                        }
                    }
                },
                movement: {
                    a843: {
                        .49: {
                            start: function(t) {},
                            a853: function(t) {
                                t.anim.meshes.body.rotation.z += .1, t.anim.meshes.body.rotation.y += .1, t.anim.meshes.body.rotation.x += .1
                            }
                        },
                        .51: {
                            start: function(t) {},
                            a853: function(t) {
                                t.anim.meshes.body.rotation.z += .1, t.anim.meshes.body.rotation.y += .1, t.anim.meshes.body.rotation.x += .1
                            }
                        }
                    }
                }
            }
        }
    }, G.a867 = {
        0: {
            size: new THREE.Vector3(.2, .2, .2),
            offset: 0,
            range: 5.4,
            duration: 20,
            a645: 540
        },
        1: {},
        2: {
            a575: "stone_hit",
            size: new THREE.Vector3(.2, .2, .2),
            a574: new THREE.Vector3(1, 1, 3),
            a676: 5,
            color: (new THREE.Color).setRGB(1, 1, 1).getHex()
        },
        3: {
            a575: "wood_hit",
            size: new THREE.Vector3(.2, .2, .2),
            a574: new THREE.Vector3(1, 1, 3),
            a676: 4,
            color: (new THREE.Color).setRGB(1, 1, 1).getHex()
        },
        4: {
            a575: "tnt_hit",
            size: new THREE.Vector3(.2, .2, .2),
            a574: new THREE.Vector3(1, 1, 3),
            a676: 5,
            color: (new THREE.Color).setRGB(1, 1, 1).getHex()
        },
        5: {
            a575: "a869",
            size: new THREE.Vector3(.2, .2, .2),
            a574: new THREE.Vector3(1, 1, 3),
            a676: 5,
            color: (new THREE.Color).setRGB(1, 1, 1).getHex()
        },
        6: {
            a575: "stairs_hit",
            size: new THREE.Vector3(.2, .2, .2),
            a574: new THREE.Vector3(1, 1, 3),
            a676: 5,
            color: (new THREE.Color).setRGB(1, 1, 1).getHex()
        },
        7: {
            offset: 0,
            size: new THREE.Vector3(8, 8, 8),
            a574: new THREE.Vector3(8, 8, 8),
            color: 2290649241,
            a676: 1,
            duration: 30,
            a645: 180,
            ignoreTypes: [G.a650]
        },
        8: {
            offset: 0,
            size: new THREE.Vector3(.2, .2, .2),
            a574: new THREE.Vector3(1, 1, 1),
            color: 16777215,
            a676: 40,
            duration: 3e3,
            a645: 75,
            ignoreTypes: !1
        },
        9: {
            offset: 5,
            size: new THREE.Vector3(.2, .2, .2),
            a574: new THREE.Vector3(1, 1, 1),
            color: 16777215,
            a676: 40,
            duration: 3e3,
            a645: 0,
            ignoreTypes: !1
        },
        10: {
            offset: 0,
            size: new THREE.Vector3(.2, .2, .2),
            a574: new THREE.Vector3(1, 1, 1),
            color: 16777215,
            a676: 40,
            duration: 3e3,
            a645: 250,
            ignoreTypes: !1
        },
        11: {
            offset: 5,
            size: new THREE.Vector3(.2, .2, .2),
            a574: new THREE.Vector3(1, 1, 1),
            color: 16777215,
            a676: 40,
            duration: 3e3,
            a645: 0,
            ignoreTypes: !1
        },
        12: {
            offset: 0,
            size: new THREE.Vector3(.2, .2, .2),
            a574: new THREE.Vector3(1, 1, 1),
            color: 16777215,
            a676: 40,
            duration: 3e3,
            a645: 100,
            ignoreTypes: !1
        },
        13: {
            offset: 0,
            size: new THREE.Vector3(.2, .2, .2),
            a574: new THREE.Vector3(1, 1, 1),
            color: 16777215,
            a676: 40,
            duration: 3e3,
            a645: 0,
            ignoreTypes: !1
        },
        14: {
            offset: 0,
            size: new THREE.Vector3(.2, .2, .2),
            a574: new THREE.Vector3(1, 1, 1),
            color: 16777215,
            a676: 40,
            duration: 3e3,
            a645: 100,
            ignoreTypes: !1
        },
        15: {
            offset: 0,
            size: new THREE.Vector3(.2, .2, .2),
            a574: new THREE.Vector3(1, 1, 1),
            color: 16777215,
            a676: 40,
            duration: 3e3,
            a645: 0,
            ignoreTypes: !1
        },
        16: {
            offset: 0,
            size: new THREE.Vector3(.2, .2, .2),
            a574: new THREE.Vector3(1, 1, 1),
            color: 16777215,
            a676: 40,
            duration: 3e3,
            a645: 50,
            ignoreTypes: !1
        },
        17: {
            offset: 0,
            size: new THREE.Vector3(.2, .2, .2),
            a574: new THREE.Vector3(1, 1, 1),
            color: 16777215,
            a676: 40,
            duration: 3e3,
            a645: 0,
            ignoreTypes: !1
        },
        18: {
            size: new THREE.Vector3(.2, .2, .2),
            offset: 0,
            range: 5.4,
            duration: 20,
            a645: 540
        },
        19: {
            size: new THREE.Vector3(.2, .2, .2),
            offset: 0,
            range: 5.4,
            duration: 20,
            a645: 0
        }
    }, $.extend(!0, G.a867[0], G.a867_a863.invisible), $.extend(!0, G.a867[1], G.a867_a863.bullet), $.extend(!0, G.a867[2], G.a867_a863.stone), $.extend(!0, G.a867[3], G.a867_a863.wood), $.extend(!0, G.a867[4], G.a867_a863.tnt), $.extend(!0, G.a867[5], G.a867_a863.a869), $.extend(!0, G.a867[6], G.a867_a863.stairs), $.extend(!0, G.a867[7], G.a867_a863.bullet), $.extend(!0, G.a867[8], G.a867_a863.bullet), $.extend(!0, G.a867[9], G.a867_a863.bullet), $.extend(!0, G.a867[10], G.a867_a863.bullet), $.extend(!0, G.a867[11], G.a867_a863.bullet), $.extend(!0, G.a867[12], G.a867_a863.bullet), $.extend(!0, G.a867[13], G.a867_a863.bullet), $.extend(!0, G.a867[14], G.a867_a863.bullet), $.extend(!0, G.a867[15], G.a867_a863.bullet), $.extend(!0, G.a867[16], G.a867_a863.bullet), $.extend(!0, G.a867[17], G.a867_a863.bullet), $.extend(!0, G.a867[18], G.a867_a863.invisible), $.extend(!0, G.a867[19], G.a867_a863.invisible), G.a867_a863.invisible.a49es(), G.a867_a863.bullet.a49es(), G.a867_a863.stone.a49es(), G.a867_a863.wood.a49es(), G.a867_a863.tnt.a49es(), G.a867_a863.a869.a49es(), G.a867_a863.stairs.a49es(), G.a705 = function(t, e, i, o, n, s, r) {
        G.a691.call(this, t), G.a867[i] && (this.a865.a642[this.id] = this, $.extend(!0, this, G.a867[i]), this.parameters = s, this.a343 = e, this.type = i, this.position = o, this.direction = n, this.othera822ersTriangles = r, this.othera822ersTriangles && (GAME.updatea611sTriangles = !0), this.a868 = new THREE.Object3D, this.a868.position.copy(this.position), this.a868.rotation.copy(this.direction), this.a759s = new G.Animation(this.a759s, this.a868, this, {
            skin: "a"
        }), this.a759s.delay = 0, this.a865.scene.add(this.a868))
    }, G.a705.prototype = G.inherit(G.a691, {
        constructor: G.a705,
        update: function() {
            this.othera822ersTriangles && (GAME.updatea611sTriangles = !0), this.a759s.update()
        },
        remove: function() {
            for (var t = 0; t < this.a759s.meshes.length; t++)
                if (this.a759s.meshes[t])
                    if (Array.isArray(this.a759s.meshes[t]))
                        for (var e = 0; e < this.a759s.meshes[t].length; e++) this.a759s.meshes[t][e].geometry.dispose(), this.a759s.meshes[t][e].material.dispose(), this.a759s.meshes[t][e] = void 0;
                    else this.a759s.meshes[t].geometry.dispose(), this.a759s.meshes[t].material.dispose(), this.a759s.meshes[t] = void 0;
            this.a759s.destroy(), this.a865.scene.remove(this.a868), this.a868 = void 0, G.a691.prototype.remove.call(this), GAME.updatea611sTriangles = !1
        }
    }), G.a805.arm = {
        type: "arm",
        scope_a759s: {
            a107: function(t) {
                var e = {},
                    i = !1;
                return (t.gO.redrawWeaponCanvas || t.gO.a77 && !t.a759s.a77.show || !t.gO.a77 && t.a759s.a77.show || t.gO.inScope && !t.a759s.a78.show || !t.gO.inScope && !t.a759s.drawa792.show) && (i = !0, t.gO.redrawWeaponCanvas = !1, t.gO.a651Canvas.cvs.clear()), t.gO.a77 && (e.a77 = {
                    a842: 1e4,
                    reset: i
                }), e.drawa792 = {
                    a842: 99999,
                    reset: i
                }, e
            },
            start: function(t) {},
            a759s: {
                a77: {
                    a843: {
                        1: {
                            start: function(t) {
                                this.size = 3, this.lineWidth = 2, this.pos = [.5, .5], this.hOffset = [3 * -this.size, 3 * -this.size], this.hLineOffset = [2 * this.size, 2 * this.size], this.vOffset = [1 * this.size, 1 * -this.size], this.vLineOffset = [2 * this.size, 2 * -this.size], this.h2Offset = [1 * this.size, 1 * this.size], this.h2LineOffset = [2 * this.size, 2 * this.size], this.v2Offset = [3 * -this.size, 3 * this.size], this.v2LineOffset = [2 * this.size, 2 * -this.size]
                            },
                            a853: function(t) {
                                GAME.bottleneckCanvas.line(this.hOffset, this.pos, this.hLineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth), GAME.bottleneckCanvas.line(this.vOffset, this.pos, this.vLineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth), GAME.bottleneckCanvas.line(this.h2Offset, this.pos, this.h2LineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth), GAME.bottleneckCanvas.line(this.v2Offset, this.pos, this.v2LineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth)
                            },
                            end: function(t) {}
                        }
                    }
                },
                drawa792: {
                    a843: {
                        1: {
                            start: function(t) {},
                            a853: function(t) {},
                            end: function(t) {}
                        }
                    }
                }
            }
        },
        ammo_a759s: {
            a107: function(t) {
                var e = {
                    a741: {
                        a842: 3e3
                    }
                };
                return e
            },
            start: function(t) {},
            a759s: {
                a741: {
                    a843: {
                        1: {
                            start: function(t) {
                                t.gO.ammoCanvas.cvs.clear(), t.gO.ammoCanvas.cvs.flip(), t.gO.ammoCanvas.cvs.show()
                            },
                            a853: function(t) {}
                        }
                    }
                }
            }
        },
        a560: {
            a107: function(t) {
                var e = {
                    a741: {
                        a842: 3e3
                    }
                };
                return e
            },
            start: function(t) {},
            a759s: {
                a741: {
                    done: !0,
                    a843: {
                        1: {
                            start: function(t) {},
                            a853: function(t) {}
                        }
                    }
                }
            }
        },
        a238: {
            a107: function(t) {
                var e = {
                    a741: {
                        a842: 3e3
                    }
                };
                return e
            },
            start: function(t) {},
            a759s: {
                a741: {
                    done: !0,
                    a843: {
                        1: {
                            start: function(t) {
                                t.gO.a605.remove(t.gO.a605.children[0])
                            },
                            a853: function(t) {}
                        }
                    }
                }
            }
        }
    }, G.a805.pistol = {
        type: "pistol",
        clipSize: 6,
        thumbnail: function(t) {
            return {
                width: 80,
                height: 80,
                img: G.assets[G.a836.UI].pistol
            }
        },
        scope_a759s: {
            a107: function(t) {
                var e = {};
                return t.gO.a77 && (e.a77 = {
                    a842: 1e4,
                    reset: false
                }), t.gO.inScope || (e.drawa792 = {
                    a842: 99999,
                    reset: false
                }), e
            },
            start: function(t) {},
            a759s: {
                a77: {
                    a843: {
                        1: {
                            start: function(t) {
                                this.size = 3, this.lineWidth = 2, this.pos = [.5, .5], this.hOffset = [3 * -this.size, 3 * -this.size], this.hLineOffset = [2 * this.size, 2 * this.size], this.vOffset = [1 * this.size, 1 * -this.size], this.vLineOffset = [2 * this.size, 2 * -this.size], this.h2Offset = [1 * this.size, 1 * this.size], this.h2LineOffset = [2 * this.size, 2 * this.size], this.v2Offset = [3 * -this.size, 3 * this.size], this.v2LineOffset = [2 * this.size, 2 * -this.size]
                            },
                            a853: function(t) {
                                GAME.bottleneckCanvas.line(this.hOffset, this.pos, this.hLineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth), GAME.bottleneckCanvas.line(this.vOffset, this.pos, this.vLineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth), GAME.bottleneckCanvas.line(this.h2Offset, this.pos, this.h2LineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth), GAME.bottleneckCanvas.line(this.v2Offset, this.pos, this.v2LineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth)
                            },
                            end: function(t) {}
                        }
                    }
                },
                drawa792: {
                    a843: {
                        1: {
                            start: function(t) {},
                            a853: function(t) {
                                var e = 48 * t.gO.a93.y,
                                    i = 12 * Math.abs(t.gO.a74) + t.gO.a98 + e;
                                GAME.bottleneckCanvas.line([-12 - i, 0], [.5, .5], [5, 0], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([7 + i, 0], [.5, .5], [5, 0], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([0, -11 - i], [.5, .5], [0, 5], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([0, 6 + i], [.5, .5], [0, 5], !0, "rgba(0, 255, 50, 1)", 1)
                            },
                            end: function(t) {}
                        }
                    }
                }
            }
        },
        ammo_a759s: {
            a107: function(t) {
                var e = {
                    a741: {
                        a842: 3e3
                    }
                };
                return e
            },
            start: function(t) {},
            a759s: {
                a741: {
                    a843: {
                        1: {
                            start: function(t) {},
                            a853: function(t) {
                                GAME.bottleneckCanvas.text([-20, -50], [1, 1], t.gO.a651.totalClips + "/" + t.gO.a651.totalInClip, G.a815.foreground, 56, "middle", "right", G.a816)
                            }
                        }
                    }
                }
            }
        },
        a560: {
            a107: function(t) {
                var e = {
                    a741: {
                        a842: 3e3
                    }
                };
                return e
            },
            start: function(t) {
                t.meshes = {
                    pistol: G.assets[G.a836.Mesh].pistol.clone()
                }, t.meshes.pistol.material = G.assets[G.a836.Material].pistol, t.gO.a605.add(t.meshes.pistol)
            },
            a759s: {
                a741: {
                    a843: {
                        1: {
                            start: function(t) {
                                t.anim.meshes.pistol.rotation.x = -1.5708, t.anim.meshes.pistol.rotation.y = 0, t.anim.meshes.pistol.rotation.z = 1.5708, t.anim.meshes.pistol.position.x = -1.16, t.anim.meshes.pistol.position.y = -2.7, t.anim.meshes.pistol.position.z = .595, t.anim.meshes.pistol.scale.set(1, 1, 1)
                            },
                            a853: function(t) {}
                        }
                    }
                }
            }
        },
        a238: {
            a107: function(t) {
                var e = {
                    a741: {
                        a842: 3e3
                    }
                };
                return e
            },
            start: function(t) {
                t.meshes = {
                    sniper: G.assets[G.a836.Mesh].pistol.clone()
                }, t.meshes.sniper.material = G.assets[G.a836.Material].pistol, t.meshes.sniper.scale.set(1, 1, 1), t.gO.a605.add(t.meshes.sniper)
            },
            a759s: {
                a741: {
                    a843: {
                        1: {
                            start: function(t) {
                                t.anim.meshes.sniper.rotation.x = -1.5707, t.anim.meshes.sniper.rotation.y = -.48, t.anim.meshes.sniper.rotation.z = 0, t.anim.meshes.sniper.position.x = -.2, t.anim.meshes.sniper.position.y = -2.2, t.anim.meshes.sniper.position.z = -.5, t.anim.meshes.sniper.scale.set(1, 1, 1)
                            },
                            a853: function(t) {}
                        }
                    }
                }
            }
        }
    }, G.a805.sniperGrey = {
        type: "sniper",
        clipSize: 3,
        scopeZoom: 2,
        thumbnail: function(t) {
            return {
                width: 80,
                height: 80,
                img: G.assets[G.a836.UI].sniperGrey
            }
        },
        scope_a759s: {
            a107: function(t) {
                var e = {},
                    i = !1;
                return (t.gO.redrawWeaponCanvas || t.gO.a77 && !t.a759s.a77.show || !t.gO.a77 && t.a759s.a77.show || t.gO.inScope && !t.a759s.a78.show || !t.gO.inScope && !t.a759s.drawa792.show) && (i = !0), t.gO.a77 && (e.a77 = {
                    a842: 1e4,
                    reset: i
                }), t.gO.inScope ? (e.a78 = {
                    a842: 1e4,
                    reset: i
                }, GAME.gunSensitivity = .5) : (e.drawa792 = {
                    a842: 99999,
                    reset: i
                }, GAME.gunSensitivity = 1), e
            },
            start: function(t) {},
            a759s: {
                a77: {
                    a843: {
                        1: {
                            start: function(t) {
                                this.size = 3, this.lineWidth = 2, this.pos = [.5, .5], this.hOffset = [3 * -this.size, 3 * -this.size], this.hLineOffset = [2 * this.size, 2 * this.size], this.vOffset = [1 * this.size, 1 * -this.size], this.vLineOffset = [2 * this.size, 2 * -this.size], this.h2Offset = [1 * this.size, 1 * this.size], this.h2LineOffset = [2 * this.size, 2 * this.size], this.v2Offset = [3 * -this.size, 3 * this.size], this.v2LineOffset = [2 * this.size, 2 * -this.size]
                            },
                            a853: function(t) {
                                GAME.bottleneckCanvas.line(this.hOffset, this.pos, this.hLineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth), GAME.bottleneckCanvas.line(this.vOffset, this.pos, this.vLineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth), GAME.bottleneckCanvas.line(this.h2Offset, this.pos, this.h2LineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth), GAME.bottleneckCanvas.line(this.v2Offset, this.pos, this.v2LineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth)
                            },
                            end: function(t) {}
                        }
                    }
                },
                drawa792: {
                    a843: {
                        1: {
                            start: function(t) {
                                t.gO.a601.visible = !0
                            },
                            a853: function(t) {
                                var e = 48 * t.gO.a93.y,
                                    i = 12 * Math.abs(t.gO.a74) + t.gO.a98 + e;
                                GAME.bottleneckCanvas.line([-12 - i, 0], [.5, .5], [5, 0], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([7 + i, 0], [.5, .5], [5, 0], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([0, -11 - i], [.5, .5], [0, 5], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([0, 6 + i], [.5, .5], [0, 5], !0, "rgba(0, 255, 50, 1)", 1)
                            },
                            end: function(t) {}
                        }
                    }
                },
                a78: {
                    a843: {
                        1: {
                            start: function(t) {
                                t.gO.a601.visible = !1
                            },
                            a853: function(t) {
                                GAME.bottleneckCanvas.drawImage([-1e3, -1e3], [.5, .5], G.assets[G.a836.UI].scope, [2e3, 2e3], !0)
                            },
                            end: function(t) {}
                        }
                    }
                }
            }
        },
        ammo_a759s: {
            a107: function(t) {
                var e = {
                    a741: {
                        a842: 3e3
                    }
                };
                return e
            },
            start: function(t) {},
            a759s: {
                a741: {
                    a843: {
                        1: {
                            start: function(t) {},
                            a853: function(t) {
                                GAME.bottleneckCanvas.text([-20, -50], [1, 1], t.gO.a651.totalClips + "/" + t.gO.a651.totalInClip, G.a815.foreground, 56, "middle", "right", G.a816)
                            }
                        }
                    }
                }
            }
        },
        a560: {
            a107: function(t) {
                var e = {
                    a741: {
                        a842: 3e3
                    }
                };
                return e
            },
            start: function(t) {
                t.meshes = {
                    sniper: G.assets[G.a836.Mesh].awm.clone()
                }, t.meshes.sniper.material = G.assets[G.a836.Material].sniper, t.gO.a605.add(t.meshes.sniper)
            },
            a759s: {
                a741: {
                    a843: {
                        1: {
                            start: function(t) {
                                t.anim.meshes.sniper.rotation.x = -1.5708, t.anim.meshes.sniper.rotation.y = 0, t.anim.meshes.sniper.rotation.z = 1.5708, t.anim.meshes.sniper.position.x = -1, t.anim.meshes.sniper.position.y = -2.6, t.anim.meshes.sniper.position.z = .4, t.anim.meshes.sniper.scale.set(1, 1, 1)
                            },
                            a853: function(t) {}
                        }
                    }
                }
            }
        },
        a238: {
            a107: function(t) {
                var e = {
                    a741: {
                        a842: 3e3
                    }
                };
                return e
            },
            start: function(t) {
                t.meshes = {
                    sniper: G.assets[G.a836.Mesh].awm.clone()
                }, t.meshes.sniper.material = G.assets[G.a836.Material].sniper, t.meshes.sniper.scale.set(1, 1, 1), t.gO.a605.add(t.meshes.sniper)
            },
            a759s: {
                a741: {
                    a843: {
                        1: {
                            start: function(t) {
                                t.anim.meshes.sniper.rotation.x = -1.5707, t.anim.meshes.sniper.rotation.y = -.48, t.anim.meshes.sniper.rotation.z = 0, t.anim.meshes.sniper.position.x = .3, t.anim.meshes.sniper.position.y = -3.2, t.anim.meshes.sniper.position.z = -1, t.anim.meshes.sniper.scale.set(.9, .9, .9)
                            },
                            a853: function(t) {}
                        }
                    }
                }
            }
        }
    }, G.a805.sniperGreen = {}, $.extend(!0, G.a805.sniperGreen, G.a805.sniperGrey), G.a805.sniperGreen.thumbnail = function(t) {
        return {
            width: 80,
            height: 80,
            img: G.assets[G.a836.UI].sniperGreen
        }
    }, G.a805.sniperGreen.scopeZoom = 3, G.a805.sniperBlue = {}, $.extend(!0, G.a805.sniperBlue, G.a805.sniperGrey), G.a805.sniperBlue.thumbnail = function(t) {
        return {
            width: 80,
            height: 80,
            img: G.assets[G.a836.UI].sniperBlue
        }
    }, G.a805.sniperBlue.scopeZoom = 4, G.a805.sniperPurple = {}, $.extend(!0, G.a805.sniperPurple, G.a805.sniperGrey), G.a805.sniperPurple.thumbnail = function(t) {
        return {
            width: 80,
            height: 80,
            img: G.assets[G.a836.UI].sniperPurple
        }
    }, G.a805.sniperPurple.scopeZoom = 6, G.a805.sniperYellow = {}, $.extend(!0, G.a805.sniperYellow, G.a805.sniperGrey), G.a805.sniperYellow.thumbnail = function(t) {
        return {
            width: 80,
            height: 80,
            img: G.assets[G.a836.UI].sniperYellow
        }
    }, G.a805.sniperYellow.scopeZoom = 8, G.a805.ak47Grey = {
        type: "ak47",
        kickMin: .06,
        kickMax: .1,
        thumbnail: function(t) {
            return {
                width: 80,
                height: 80,
                img: G.assets[G.a836.UI].ak47Grey
            }
        },
        clipSize: 16,
        scope_a759s: {
            a107: function(t) {
                var e = {};
                return t.gO.a77 && (e.a77 = {
                    a842: 1e4,
                    reset: false
                }), t.gO.inScope || (e.drawa792 = {
                    a842: 99999,
                    reset: false
                }), e
            },
            start: function(t) {},
            a759s: {
                a77: {
                    a843: {
                        1: {
                            start: function(t) {
                                this.size = 3, this.lineWidth = 2, this.pos = [.5, .5], this.hOffset = [3 * -this.size, 3 * -this.size], this.hLineOffset = [2 * this.size, 2 * this.size], this.vOffset = [1 * this.size, 1 * -this.size], this.vLineOffset = [2 * this.size, 2 * -this.size], this.h2Offset = [1 * this.size, 1 * this.size], this.h2LineOffset = [2 * this.size, 2 * this.size], this.v2Offset = [3 * -this.size, 3 * this.size], this.v2LineOffset = [2 * this.size, 2 * -this.size]
                            },
                            a853: function(t) {
                                GAME.bottleneckCanvas.line(this.hOffset, this.pos, this.hLineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth), GAME.bottleneckCanvas.line(this.vOffset, this.pos, this.vLineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth), GAME.bottleneckCanvas.line(this.h2Offset, this.pos, this.h2LineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth), GAME.bottleneckCanvas.line(this.v2Offset, this.pos, this.v2LineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth)
                            },
                            end: function(t) {}
                        }
                    }
                },
                drawa792: {
                    a843: {
                        1: {
                            start: function(t) {},
                            a853: function(t) {
                                GAME.bottleneckCanvas.drawImage([-2, -2], [.5, .5], G.assets[G.a836.UI].crosshairShadow, [4, 4], !0), GAME.bottleneckCanvas.line([-1, 0], [.5, .5], [2, 0], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([0, -1], [.5, .5], [0, 2], !0, "rgba(0, 255, 50, 1)", 1);
                                var e = 48 * t.gO.a93.y,
                                    i = 12 * Math.abs(t.gO.a74) + t.gO.a98 + e;
                                GAME.bottleneckCanvas.line([-12 - i, 0], [.5, .5], [5, 0], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([7 + i, 0], [.5, .5], [5, 0], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([0, -11 - i], [.5, .5], [0, 5], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([0, 6 + i], [.5, .5], [0, 5], !0, "rgba(0, 255, 50, 1)", 1)
                            },
                            end: function(t) {}
                        }
                    }
                }
            }
        },
        ammo_a759s: {
            a107: function(t) {
                var e = {
                    a741: {
                        a842: 3e3
                    }
                };
                return e
            },
            start: function(t) {},
            a759s: {
                a741: {
                    done: !0,
                    a843: {
                        1: {
                            start: function(t) {
                                t.done = !1
                            },
                            a853: function(t) {
                                GAME.bottleneckCanvas.text([-20, -50], [1, 1], t.gO.a651.totalClips + "/" + t.gO.a651.totalInClip, G.a815.foreground, 56, "middle", "right", G.a816)
                            }
                        }
                    }
                }
            }
        },
        a560: {
            a107: function(t) {
                var e = {
                    a741: {
                        a842: 3e3
                    }
                };
                return (t.gO.usingWeapon || !1 === t.a759s.muzzleFlash.a844) && (e.muzzleFlash = {
                    reset: t.gO.justTriggered,
                    a842: 20
                }), e
            },
            start: function(t) {
                var e = new THREE.SpriteMaterial({
                    color: 14265856
                });
                t.meshes = {
                    ak47: G.assets[G.a836.Mesh].ak47.clone(),
                    muzzleFlash: new THREE.Sprite(e)
                }, t.meshes.ak47.material = G.assets[G.a836.Material].ak47, t.meshes.ak47.add(t.meshes.muzzleFlash), t.meshes.muzzleFlash.material.opacity = 0, t.gO.a605.add(t.meshes.ak47)
            },
            a759s: {
                muzzleFlash: {
                    a843: {
                        1: {
                            start: function(t) {
                                if (t.a566 = !1, t.anim.meshes.muzzleFlash.material.opacity = 0, 1 == G.randInt(0, 1)) {
                                    t.a566 = !0;
                                    var e = G.randFloat(.8, 1.8, 2);
                                    t.anim.meshes.muzzleFlash.scale.set(e, e, e)
                                }
                            },
                            a853: function(t) {
                                t.a566 && (t.anim.meshes.muzzleFlash.material.opacity = 1 - 1 * Math.sin(1.5708 * t.a852), t.anim.meshes.muzzleFlash.position.z = -12)
                            },
                            end: function(t, e) {
                                t.a852 = 1, this.a853(t, e)
                            }
                        }
                    }
                },
                a741: {
                    a843: {
                        1: {
                            start: function(t) {
                                t.anim.meshes.ak47.rotation.x = -1.5708, t.anim.meshes.ak47.rotation.y = 0, t.anim.meshes.ak47.rotation.z = 1.5708, t.anim.meshes.ak47.position.x = -1.1, t.anim.meshes.ak47.position.y = 0, t.anim.meshes.ak47.position.z = .595, t.anim.meshes.ak47.scale.set(1, 1, 1)
                            },
                            a853: function(t) {}
                        }
                    }
                }
            }
        },
        a238: {
            a107: function(t) {
                var e = {
                    a741: {
                        a842: 3e3
                    }
                };
                return (t.gO.a90 || !1 === t.a759s.muzzleFlash.a844) && (e.muzzleFlash = {
                    reset: !1,
                    a842: 50
                }), e
            },
            start: function(t) {
                var e = new THREE.SpriteMaterial({
                    color: 14265856
                });
                t.meshes = {
                    ak47: G.assets[G.a836.Mesh].ak47.clone(),
                    muzzleFlash: new THREE.Sprite(e)
                }, t.meshes.ak47.material = G.assets[G.a836.Material].ak47, t.meshes.ak47.add(t.meshes.muzzleFlash), t.gO.a605.add(t.meshes.ak47)
            },
            a759s: {
                muzzleFlash: {
                    a843: {
                        1: {
                            start: function(t) {
                                t.a566 = !1, 1 == G.randInt(1, 1) && (t.a566 = !0, t.y = G.randFloat(-.7, .7, 2), t.scale = G.randFloat(.7, 1.2, 2), t.anim.meshes.muzzleFlash.scale.set(t.scale, t.scale, t.scale))
                            },
                            a853: function(t) {
                                t.a566 && (t.anim.meshes.muzzleFlash.material.opacity = 1 - 1 * Math.sin(1.5708 * t.a852), t.anim.meshes.muzzleFlash.position.z = -7 - 4 * t.scale * Math.sin(1.5708 * t.a852), t.anim.meshes.muzzleFlash.position.y = 0 + t.y * Math.sin(1.5708 * t.a852))
                            },
                            end: function(t, e) {
                                t.a852 = 1, this.a853(t, e)
                            }
                        }
                    }
                },
                a741: {
                    a843: {
                        1: {
                            start: function(t) {
                                t.anim.meshes.ak47.rotation.x = -1.5707, t.anim.meshes.ak47.rotation.y = -.48, t.anim.meshes.ak47.rotation.z = 0, t.anim.meshes.ak47.position.x = -.6, t.anim.meshes.ak47.position.y = -1.8, t.anim.meshes.ak47.position.z = -.5, t.anim.meshes.ak47.scale.set(1, .8, .76)
                            },
                            a853: function(t) {}
                        }
                    }
                }
            }
        }
    }, G.a805.ak47Green = {}, $.extend(!0, G.a805.ak47Green, G.a805.ak47Grey), G.a805.ak47Green.thumbnail = function(t) {
        return {
            width: 80,
            height: 80,
            img: G.assets[G.a836.UI].ak47Green
        }
    }, G.a805.ak47Green.kickMin = .04, G.a805.ak47Green.kickMax = .08, G.a805.ak47Blue = {}, $.extend(!0, G.a805.ak47Blue, G.a805.ak47Grey), G.a805.ak47Blue.thumbnail = function(t) {
        return {
            width: 80,
            height: 80,
            img: G.assets[G.a836.UI].ak47Blue
        }
    }, G.a805.ak47Blue.kickMin = .03, G.a805.ak47Blue.kickMax = .05, G.a805.ak47Purple = {}, $.extend(!0, G.a805.ak47Purple, G.a805.ak47Grey), G.a805.ak47Purple.thumbnail = function(t) {
        return {
            width: 80,
            height: 80,
            img: G.assets[G.a836.UI].ak47Purple
        }
    }, G.a805.ak47Purple.kickMin = .02, G.a805.ak47Purple.kickMax = .03, G.a805.ak47Yellow = {}, $.extend(!0, G.a805.ak47Yellow, G.a805.ak47Grey), G.a805.ak47Yellow.thumbnail = function(t) {
        return {
            width: 80,
            height: 80,
            img: G.assets[G.a836.UI].ak47Yellow
        }
    }, G.a805.ak47Yellow.kickMin = 0, G.a805.ak47Yellow.kickMax = 0, G.a805.shotgunGrey = {
        type: "shotgun",
        clipSize: 4,
        a681: .07,
        thumbnail: function(t) {
            return {
                width: 80,
                height: 80,
                img: G.assets[G.a836.UI].shotgunGrey
            }
        },
        scope_a759s: {
            a107: function(t) {
                var e = {};
                return t.gO.a77 && (e.a77 = {
                    a842: 1e4,
                    reset: false
                }), e.drawa792 = {
                    a842: 99999,
                    reset: false
                }, e
            },
            start: function(t) {},
            a759s: {
                a77: {
                    a843: {
                        1: {
                            start: function(t) {
                                this.size = 3, this.lineWidth = 2, this.pos = [.5, .5], this.hOffset = [3 * -this.size, 3 * -this.size], this.hLineOffset = [2 * this.size, 2 * this.size], this.vOffset = [1 * this.size, 1 * -this.size], this.vLineOffset = [2 * this.size, 2 * -this.size], this.h2Offset = [1 * this.size, 1 * this.size], this.h2LineOffset = [2 * this.size, 2 * this.size], this.v2Offset = [3 * -this.size, 3 * this.size], this.v2LineOffset = [2 * this.size, 2 * -this.size]
                            },
                            a853: function(t) {
                                GAME.bottleneckCanvas.line(this.hOffset, this.pos, this.hLineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth), GAME.bottleneckCanvas.line(this.vOffset, this.pos, this.vLineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth), GAME.bottleneckCanvas.line(this.h2Offset, this.pos, this.h2LineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth), GAME.bottleneckCanvas.line(this.v2Offset, this.pos, this.v2LineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth)
                            },
                            end: function(t) {}
                        }
                    }
                },
                drawa792: {
                    a843: {
                        1: {
                            start: function(t) {},
                            a853: function(t) {
                                var e = 48 * t.gO.a93.y,
                                    i = 12 * Math.abs(t.gO.a74) + t.gO.a98 + e;
                                GAME.bottleneckCanvas.line([-20 - i, 0], [.5, .5], [5, 0], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([15 + i, 0], [.5, .5], [5, 0], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([0, -19 - i], [.5, .5], [0, 5], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([0, 15 + i], [.5, .5], [0, 5], !0, "rgba(0, 255, 50, 1)", 1)
                            },
                            end: function(t) {}
                        }
                    }
                }
            }
        },
        ammo_a759s: {
            a107: function(t) {
                var e = {
                    a741: {
                        a842: 3e3
                    }
                };
                return e
            },
            start: function(t) {},
            a759s: {
                a741: {
                    a843: {
                        1: {
                            start: function(t) {},
                            a853: function(t) {
                                GAME.bottleneckCanvas.text([-20, -50], [1, 1], t.gO.a651.totalClips + "/" + t.gO.a651.totalInClip, G.a815.foreground, 56, "middle", "right", G.a816)
                            }
                        }
                    }
                }
            }
        },
        a560: {
            a107: function(t) {
                var e = {
                    a741: {
                        a842: 3e3
                    }
                };
                return e
            },
            start: function(t) {
                t.meshes = {
                    shotgun: G.assets[G.a836.Mesh].shotgun.clone()
                }, t.meshes.shotgun.material = G.assets[G.a836.Material].shotgun, t.gO.a605.add(t.meshes.shotgun)
            },
            a759s: {
                a741: {
                    a843: {
                        1: {
                            start: function(t) {
                                t.anim.meshes.shotgun.rotation.x = -1.5708, t.anim.meshes.shotgun.rotation.y = 0, t.anim.meshes.shotgun.rotation.z = 1.5708, t.anim.meshes.shotgun.position.x = -.9, t.anim.meshes.shotgun.position.y = 1.2, t.anim.meshes.shotgun.position.z = .595, t.anim.meshes.shotgun.scale.set(1, 1, 1)
                            },
                            a853: function(t) {}
                        }
                    }
                }
            }
        },
        a238: {
            a107: function(t) {
                var e = {
                    a741: {
                        a842: 3e3
                    }
                };
                return e
            },
            start: function(t) {
                t.meshes = {
                    shotgun: G.assets[G.a836.Mesh].shotgun.clone()
                }, t.meshes.shotgun.material = G.assets[G.a836.Material].shotgun, t.meshes.shotgun.scale.set(1, 1, 1), t.gO.a605.add(t.meshes.shotgun)
            },
            a759s: {
                a741: {
                    a843: {
                        1: {
                            start: function(t) {
                                t.anim.meshes.shotgun.rotation.x = -1.5707, t.anim.meshes.shotgun.rotation.y = -.48, t.anim.meshes.shotgun.rotation.z = 0, t.anim.meshes.shotgun.position.x = -.2, t.anim.meshes.shotgun.position.y = -2.2, t.anim.meshes.shotgun.position.z = -.5, t.anim.meshes.shotgun.scale.set(1, 1, 1)
                            },
                            a853: function(t) {}
                        }
                    }
                }
            }
        }
    }, G.a805.shotgunGreen = {}, $.extend(!0, G.a805.shotgunGreen, G.a805.shotgunGrey), G.a805.shotgunGreen.thumbnail = function(t) {
        return {
            width: 80,
            height: 80,
            img: G.assets[G.a836.UI].shotgunGreen
        }
    }, G.a805.shotgunGreen.a681 = .06, G.a805.shotgunBlue = {}, $.extend(!0, G.a805.shotgunBlue, G.a805.shotgunGrey), G.a805.shotgunBlue.thumbnail = function(t) {
        return {
            width: 80,
            height: 80,
            img: G.assets[G.a836.UI].shotgunBlue
        }
    }, G.a805.shotgunBlue.a681 = .05, G.a805.shotgunPurple = {}, $.extend(!0, G.a805.shotgunPurple, G.a805.shotgunGrey), G.a805.shotgunPurple.thumbnail = function(t) {
        return {
            width: 80,
            height: 80,
            img: G.assets[G.a836.UI].shotgunPurple
        }
    }, G.a805.shotgunPurple.a681 = .04, G.a805.shotgunYellow = {}, $.extend(!0, G.a805.shotgunYellow, G.a805.shotgunGrey), G.a805.shotgunYellow.thumbnail = function(t) {
        return {
            width: 80,
            height: 80,
            img: G.assets[G.a836.UI].shotgunYellow
        }
    }, G.a805.shotgunYellow.a681 = .03, G.a805.uriGrey = {
        type: "uri",
        clipSize: 8,
        reloadTimeOut: 540,
        reloadTimeIn: 540,
        thumbnail: function(t) {
            return {
                width: 80,
                height: 80,
                img: G.assets[G.a836.UI].uriGrey
            }
        },
        scope_a759s: {
            a107: function(t) {
                var e = {};
                return t.gO.a77 && (e.a77 = {
                    a842: 1e4,
                    reset: false
                }), t.gO.inScope || (e.drawa792 = {
                    a842: 99999,
                    reset: false
                }), e
            },
            start: function(t) {},
            a759s: {
                a77: {
                    a843: {
                        1: {
                            start: function(t) {
                                this.size = 3, this.lineWidth = 2, this.pos = [.5, .5], this.hOffset = [3 * -this.size, 3 * -this.size], this.hLineOffset = [2 * this.size, 2 * this.size], this.vOffset = [1 * this.size, 1 * -this.size], this.vLineOffset = [2 * this.size, 2 * -this.size], this.h2Offset = [1 * this.size, 1 * this.size], this.h2LineOffset = [2 * this.size, 2 * this.size], this.v2Offset = [3 * -this.size, 3 * this.size], this.v2LineOffset = [2 * this.size, 2 * -this.size]
                            },
                            a853: function(t) {
                                GAME.bottleneckCanvas.line(this.hOffset, this.pos, this.hLineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth), GAME.bottleneckCanvas.line(this.vOffset, this.pos, this.vLineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth), GAME.bottleneckCanvas.line(this.h2Offset, this.pos, this.h2LineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth), GAME.bottleneckCanvas.line(this.v2Offset, this.pos, this.v2LineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth)
                            },
                            end: function(t) {}
                        }
                    }
                },
                drawa792: {
                    a843: {
                        1: {
                            start: function(t) {},
                            a853: function(t) {
                                GAME.bottleneckCanvas.drawImage([-2, -2], [.5, .5], G.assets[G.a836.UI].crosshairShadow, [4, 4], !0), GAME.bottleneckCanvas.line([-1, 0], [.5, .5], [2, 0], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([0, -1], [.5, .5], [0, 2], !0, "rgba(0, 255, 50, 1)", 1);
                                var e = 48 * t.gO.a93.y,
                                    i = 12 * Math.abs(t.gO.a74) + t.gO.a98 + e;
                                GAME.bottleneckCanvas.line([-12 - i, 0], [.5, .5], [5, 0], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([7 + i, 0], [.5, .5], [5, 0], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([0, -11 - i], [.5, .5], [0, 5], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([0, 6 + i], [.5, .5], [0, 5], !0, "rgba(0, 255, 50, 1)", 1)
                            },
                            end: function(t) {}
                        }
                    }
                }
            }
        },
        ammo_a759s: {
            a107: function(t) {
                var e = {
                    a741: {
                        a842: 3e3
                    }
                };
                return e
            },
            start: function(t) {},
            a759s: {
                a741: {
                    a843: {
                        1: {
                            start: function(t) {},
                            a853: function(t) {
                                GAME.bottleneckCanvas.text([-20, -50], [1, 1], t.gO.a651.totalClips + "/" + t.gO.a651.totalInClip, G.a815.foreground, 56, "middle", "right", G.a816)
                            }
                        }
                    }
                }
            }
        },
        a560: {
            a107: function(t) {
                var e = {
                    a741: {
                        a842: 3e3
                    }
                };
                return (t.gO.usingWeapon || !1 === t.a759s.muzzleFlash.a844) && (e.muzzleFlash = {
                    reset: t.gO.justTriggered,
                    a842: 20
                }), e
            },
            start: function(t) {
                var e = new THREE.SpriteMaterial({
                    color: 14265856
                });
                t.meshes = {
                    uri: G.assets[G.a836.Mesh].uri.clone(),
                    muzzleFlash: new THREE.Sprite(e)
                }, t.meshes.uri.add(t.meshes.muzzleFlash), t.meshes.muzzleFlash.material.opacity = 0, t.gO.a605.add(t.meshes.uri)
            },
            a759s: {
                muzzleFlash: {
                    a843: {
                        1: {
                            start: function(t) {
                                if (t.a566 = !1, t.anim.meshes.muzzleFlash.material.opacity = 0, 1 == G.randInt(0, 1)) {
                                    t.a566 = !0;
                                    var e = G.randFloat(.8, 1.8, 2);
                                    t.anim.meshes.muzzleFlash.scale.set(e, e, e)
                                }
                            },
                            a853: function(t) {
                                t.a566 && (t.anim.meshes.muzzleFlash.material.opacity = 1 - 1 * Math.sin(1.5708 * t.a852), t.anim.meshes.muzzleFlash.position.z = -12)
                            },
                            end: function(t, e) {
                                t.a852 = 1, this.a853(t, e)
                            }
                        }
                    }
                },
                a741: {
                    a843: {
                        1: {
                            start: function(t) {
                                t.anim.meshes.uri.rotation.x = -1.5708, t.anim.meshes.uri.rotation.y = 0, t.anim.meshes.uri.rotation.z = 1.5708, t.anim.meshes.uri.position.x = -.84, t.anim.meshes.uri.position.y = -4, t.anim.meshes.uri.position.z = .595, t.anim.meshes.uri.scale.set(1, 1, 1)
                            },
                            a853: function(t) {}
                        }
                    }
                }
            }
        },
        a238: {
            a107: function(t) {
                var e = {
                    a741: {
                        a842: 3e3
                    }
                };
                return (t.gO.a90 || !1 === t.a759s.muzzleFlash.a844) && (e.muzzleFlash = {
                    reset: !1,
                    a842: 50
                }), e
            },
            start: function(t) {
                var e = new THREE.SpriteMaterial({
                    color: 14265856
                });
                t.meshes = {
                    uri: G.assets[G.a836.Mesh].uri.clone(),
                    muzzleFlash: new THREE.Sprite(e)
                }, t.meshes.uri.add(t.meshes.muzzleFlash), t.gO.a605.add(t.meshes.uri)
            },
            a759s: {
                muzzleFlash: {
                    a843: {
                        1: {
                            start: function(t) {
                                t.a566 = !1, 1 == G.randInt(1, 1) && (t.a566 = !0, t.y = G.randFloat(-.7, .7, 2), t.scale = G.randFloat(.7, 1.2, 2), t.anim.meshes.muzzleFlash.scale.set(t.scale, t.scale, t.scale))
                            },
                            a853: function(t) {
                                t.a566 && (t.anim.meshes.muzzleFlash.material.opacity = 1 - 1 * Math.sin(1.5708 * t.a852), t.anim.meshes.muzzleFlash.position.z = -7 - 4 * t.scale * Math.sin(1.5708 * t.a852), t.anim.meshes.muzzleFlash.position.y = 0 + t.y * Math.sin(1.5708 * t.a852))
                            },
                            end: function(t, e) {
                                t.a852 = 1, this.a853(t, e)
                            }
                        }
                    }
                },
                a741: {
                    a843: {
                        1: {
                            start: function(t) {
                                t.anim.meshes.uri.rotation.x = -1.5707, t.anim.meshes.uri.rotation.y = -.48, t.anim.meshes.uri.rotation.z = 0, t.anim.meshes.uri.position.x = -.6, t.anim.meshes.uri.position.y = -1.8, t.anim.meshes.uri.position.z = -.5, t.anim.meshes.uri.scale.set(1, .8, .76)
                            },
                            a853: function(t) {}
                        }
                    }
                }
            }
        }
    }, G.a805.uriGreen = {}, $.extend(!0, G.a805.uriGreen, G.a805.uriGrey), G.a805.uriGreen.thumbnail = function(t) {
        return {
            width: 80,
            height: 80,
            img: G.assets[G.a836.UI].uriGreen
        }
    }, G.a805.uriGreen.reloadTimeOut = 440, G.a805.uriGreen.reloadTimeIn = 440, G.a805.uriBlue = {}, $.extend(!0, G.a805.uriBlue, G.a805.uriGrey), G.a805.uriBlue.thumbnail = function(t) {
        return {
            width: 80,
            height: 80,
            img: G.assets[G.a836.UI].uriBlue
        }
    }, G.a805.uriBlue.reloadTimeOut = 340, G.a805.uriBlue.reloadTimeIn = 340, G.a805.uriPurple = {}, $.extend(!0, G.a805.uriPurple, G.a805.uriGrey), G.a805.uriPurple.thumbnail = function(t) {
        return {
            width: 80,
            height: 80,
            img: G.assets[G.a836.UI].uriPurple
        }
    }, G.a805.uriPurple.reloadTimeOut = 240, G.a805.uriPurple.reloadTimeIn = 240, G.a805.uriYellow = {}, $.extend(!0, G.a805.uriYellow, G.a805.uriGrey), G.a805.uriYellow.thumbnail = function(t) {
        return {
            width: 80,
            height: 80,
            img: G.assets[G.a836.UI].uriYellow
        }
    }, G.a805.uriYellow.reloadTimeOut = 140, G.a805.uriYellow.reloadTimeIn = 140, G.a805.pickaxe = {
        type: "pickaxe",
        thumbnail: function(t) {
            return {
                width: 80,
                height: 80,
                img: G.assets[G.a836.UI].pickaxe
            }
        },
        scope_a759s: {
            a107: function(t) {
                var e = {},
                    i = !1;
                return (t.gO.redrawWeaponCanvas || t.gO.a77 && !t.a759s.a77.show || !t.gO.a77 && t.a759s.a77.show || t.gO.inScope && !t.a759s.a78.show || !t.gO.inScope && !t.a759s.drawa792.show) && (i = !0, t.gO.redrawWeaponCanvas = !1), t.gO.a77 && (e.a77 = {
                    a842: 1e4,
                    reset: i
                }), e.drawa792 = {
                    a842: 99999,
                    reset: i
                }, e
            },
            start: function(t) {},
            a759s: {
                a77: {
                    a843: {
                        1: {
                            start: function(t) {
                                this.size = 3, this.lineWidth = 2, this.pos = [.5, .5], this.hOffset = [3 * -this.size, 3 * -this.size], this.hLineOffset = [2 * this.size, 2 * this.size], this.vOffset = [1 * this.size, 1 * -this.size], this.vLineOffset = [2 * this.size, 2 * -this.size], this.h2Offset = [1 * this.size, 1 * this.size], this.h2LineOffset = [2 * this.size, 2 * this.size], this.v2Offset = [3 * -this.size, 3 * this.size], this.v2LineOffset = [2 * this.size, 2 * -this.size]
                            },
                            a853: function(t) {
                                GAME.bottleneckCanvas.line(this.hOffset, this.pos, this.hLineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth), GAME.bottleneckCanvas.line(this.vOffset, this.pos, this.vLineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth), GAME.bottleneckCanvas.line(this.h2Offset, this.pos, this.h2LineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth), GAME.bottleneckCanvas.line(this.v2Offset, this.pos, this.v2LineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth)
                            },
                            end: function(t) {}
                        }
                    }
                },
                drawa792: {
                    a843: {
                        1: {
                            start: function(t) {},
                            a853: function(t) {
                                GAME.bottleneckCanvas.drawImage([-2, -2], [.5, .5], G.assets[G.a836.UI].crosshairShadow, [4, 4], !0), GAME.bottleneckCanvas.line([-1, 0], [.5, .5], [2, 0], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([0, -1], [.5, .5], [0, 2], !0, "rgba(0, 255, 50, 1)", 1);
                                var e = 5 * Math.abs(t.gO.a74) + 50 * t.gO.a93.y;
                                GAME.bottleneckCanvas.line([-12 - e, 0], [.5, .5], [5, 0], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([7 + e, 0], [.5, .5], [5, 0], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([0, -11 - e], [.5, .5], [0, 5], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([0, 6 + e], [.5, .5], [0, 5], !0, "rgba(0, 255, 50, 1)", 1)
                            },
                            end: function(t) {}
                        }
                    }
                },
                a78: {
                    done: !0,
                    a843: {
                        1: {
                            start: function(t) {},
                            a853: function(t) {},
                            end: function(t) {}
                        }
                    }
                }
            }
        },
        ammo_a759s: {
            a107: function(t) {
                var e = {
                    a741: {
                        a842: 3e3
                    }
                };
                return e
            },
            start: function(t) {},
            a759s: {
                a741: {
                    done: !0,
                    a843: {
                        1: {
                            start: function(t) {
                                t.done = !1
                            },
                            a853: function(t) {}
                        }
                    }
                }
            }
        },
        a560: {
            a107: function(t) {
                var e = {
                    a741: {
                        a842: 3e3
                    }
                };
                return e
            },
            start: function(t) {
                t.meshes = {
                    pickaxe: G.assets[G.a836.Mesh].pickaxe.clone()
                }, t.meshes.pickaxe.material = G.assets[G.a836.Material].pickaxe, t.gO.a605.add(t.meshes.pickaxe)
            },
            a759s: {
                a741: {
                    a843: {
                        1: {
                            start: function(t) {
                                t.anim.meshes.pickaxe.rotation.x = 3.0416, t.anim.meshes.pickaxe.rotation.y = 0, t.anim.meshes.pickaxe.rotation.z = 1.5708, t.anim.meshes.pickaxe.position.x = 1.9, t.anim.meshes.pickaxe.position.y = -1.6, t.anim.meshes.pickaxe.position.z = .1, t.anim.meshes.pickaxe.scale.set(.26, .56, .8)
                            },
                            a853: function(t) {}
                        }
                    }
                }
            }
        },
        a238: {
            a107: function(t) {
                var e = {
                    a741: {
                        a842: 3e3
                    }
                };
                return e
            },
            start: function(t) {
                t.meshes = {
                    pickaxe: G.assets[G.a836.Mesh].pickaxe.clone()
                }, t.meshes.pickaxe.material = G.assets[G.a836.Material].pickaxe, t.gO.a605.add(t.meshes.pickaxe)
            },
            a759s: {
                a741: {
                    a843: {
                        1: {
                            start: function(t) {
                                t.anim.meshes.pickaxe.rotation.x = -1.5707, t.anim.meshes.pickaxe.rotation.y = -1.8707, t.anim.meshes.pickaxe.rotation.z = 0, t.anim.meshes.pickaxe.position.x = .1, t.anim.meshes.pickaxe.position.y = -1.8, t.anim.meshes.pickaxe.position.z = .5, t.anim.meshes.pickaxe.scale.set(.6, .5, .8)
                            },
                            a853: function(t) {}
                        }
                    }
                }
            }
        }
    }, G.a805.stone = {
        type: "stone",
        thumbnail: function(t) {
            return {
                width: 80,
                height: 80,
                img: G.assets[G.a836.UI].stoneball
            }
        },
        scope_a759s: {
            a107: function(t) {
                var e = {},
                    i = !1;
                return (t.gO.redrawWeaponCanvas || t.gO.a77 && !t.a759s.a77.show || !t.gO.a77 && t.a759s.a77.show || t.gO.inScope && !t.a759s.a78.show || !t.gO.inScope && !t.a759s.drawa792.show) && (i = !0, t.gO.redrawWeaponCanvas = !1), t.gO.a77 && (e.a77 = {
                    a842: 1e4,
                    reset: i
                }), e.drawa792 = {
                    a842: 99999,
                    reset: i
                }, e
            },
            start: function(t) {},
            a759s: {
                a77: {
                    a843: {
                        1: {
                            start: function(t) {
                                this.size = 3, this.lineWidth = 2, this.pos = [.5, .5], this.hOffset = [3 * -this.size, 3 * -this.size], this.hLineOffset = [2 * this.size, 2 * this.size], this.vOffset = [1 * this.size, 1 * -this.size], this.vLineOffset = [2 * this.size, 2 * -this.size], this.h2Offset = [1 * this.size, 1 * this.size], this.h2LineOffset = [2 * this.size, 2 * this.size], this.v2Offset = [3 * -this.size, 3 * this.size], this.v2LineOffset = [2 * this.size, 2 * -this.size]
                            },
                            a853: function(t) {
                                GAME.bottleneckCanvas.line(this.hOffset, this.pos, this.hLineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth), GAME.bottleneckCanvas.line(this.vOffset, this.pos, this.vLineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth), GAME.bottleneckCanvas.line(this.h2Offset, this.pos, this.h2LineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth), GAME.bottleneckCanvas.line(this.v2Offset, this.pos, this.v2LineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth)
                            },
                            end: function(t) {}
                        }
                    }
                },
                drawa792: {
                    a843: {
                        1: {
                            start: function(t) {},
                            a853: function(t) {
                                GAME.bottleneckCanvas.drawImage([-2, -2], [.5, .5], G.assets[G.a836.UI].crosshairShadow, [4, 4], !0), GAME.bottleneckCanvas.line([-1, 0], [.5, .5], [2, 0], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([0, -1], [.5, .5], [0, 2], !0, "rgba(0, 255, 50, 1)", 1);
                                var e = 5 * Math.abs(t.gO.a74) + 50 * t.gO.a93.y;
                                GAME.bottleneckCanvas.line([-12 - e, 0], [.5, .5], [5, 0], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([7 + e, 0], [.5, .5], [5, 0], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([0, -11 - e], [.5, .5], [0, 5], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([0, 6 + e], [.5, .5], [0, 5], !0, "rgba(0, 255, 50, 1)", 1)
                            },
                            end: function(t) {}
                        }
                    }
                }
            }
        },
        ammo_a759s: {
            a107: function(t) {
                var e = {
                    a741: {
                        a842: 3e3
                    }
                };
                return e
            },
            start: function(t) {},
            a759s: {
                a741: {
                    a843: {
                        1: {
                            start: function(t) {},
                            a853: function(t) {
                                GAME.bottleneckCanvas.text([-50, -50], [1, 1], t.gO.geta809Total("stone"), G.a815.foreground, 56, "middle", "right", G.a816)
                            }
                        }
                    }
                }
            }
        },
        a560: {
            a107: function(t) {
                var e = {
                    a741: {
                        a842: 3e3
                    }
                };
                return e
            },
            start: function(t) {
                var e = new THREE.SphereGeometry(.8, 4, 4),
                    i = new THREE.MeshBasicMaterial({
                        color: 13750737
                    }),
                    o = new THREE.Mesh(e, i);
                t.meshes = {
                    stone: o
                }, t.meshes.stone.material = G.assets[G.a836.Material].stoneballFlat.clone(), t.gO.a605.add(t.meshes.stone)
            },
            a759s: {
                a741: {
                    a843: {
                        1: {
                            start: function(t) {
                                t.anim.meshes.stone.rotation.x = -1.5708, t.anim.meshes.stone.rotation.y = 0, t.anim.meshes.stone.rotation.z = 1.5708, t.anim.meshes.stone.position.x = -.5, t.anim.meshes.stone.position.y = -2.2, t.anim.meshes.stone.position.z = 0, t.anim.meshes.stone.scale.set(.9, .7, .7)
                            },
                            a853: function(t) {}
                        }
                    }
                }
            }
        },
        a238: {
            a107: function(t) {
                var e = {
                    a741: {
                        a842: 3e3
                    }
                };
                return e
            },
            start: function(t) {
                var e = new THREE.SphereGeometry(.8, 4, 4),
                    i = new THREE.MeshBasicMaterial({
                        color: 16777215
                    }),
                    o = new THREE.Mesh(e, i);
                t.meshes = {
                    stone: o
                }, t.meshes.stone.material = G.assets[G.a836.Material].stoneballFlat.clone(), t.gO.a605.add(t.meshes.stone)
            },
            a759s: {
                a741: {
                    a843: {
                        1: {
                            start: function(t) {
                                t.anim.meshes.stone.rotation.x = -1.5707, t.anim.meshes.stone.rotation.y = -.48, t.anim.meshes.stone.rotation.z = 0, t.anim.meshes.stone.position.x = -.4, t.anim.meshes.stone.position.y = -1.8, t.anim.meshes.stone.position.z = -.5, t.anim.meshes.stone.scale.set(1, 1, 1)
                            },
                            a853: function(t) {}
                        }
                    }
                }
            }
        }
    }, G.a805.wood = {
        type: "wood",
        thumbnail: function(t) {
            return {
                width: 80,
                height: 80,
                img: G.assets[G.a836.UI].woodplank
            }
        },
        scope_a759s: {
            a107: function(t) {
                var e = {},
                    i = !1;
                return (t.gO.redrawWeaponCanvas || t.gO.a77 && !t.a759s.a77.show || !t.gO.a77 && t.a759s.a77.show || t.gO.inScope && !t.a759s.a78.show || !t.gO.inScope && !t.a759s.drawa792.show) && (i = !0), t.gO.a77 && (e.a77 = {
                    a842: 1e4,
                    reset: i
                }), e.drawa792 = {
                    a842: 99999,
                    reset: i
                }, e
            },
            start: function(t) {},
            a759s: {
                a77: {
                    a843: {
                        1: {
                            start: function(t) {
                                this.size = 3, this.lineWidth = 2, this.pos = [.5, .5], this.hOffset = [3 * -this.size, 3 * -this.size], this.hLineOffset = [2 * this.size, 2 * this.size], this.vOffset = [1 * this.size, 1 * -this.size], this.vLineOffset = [2 * this.size, 2 * -this.size], this.h2Offset = [1 * this.size, 1 * this.size], this.h2LineOffset = [2 * this.size, 2 * this.size], this.v2Offset = [3 * -this.size, 3 * this.size], this.v2LineOffset = [2 * this.size, 2 * -this.size]
                            },
                            a853: function(t) {
                                GAME.bottleneckCanvas.line(this.hOffset, this.pos, this.hLineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth), GAME.bottleneckCanvas.line(this.vOffset, this.pos, this.vLineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth), GAME.bottleneckCanvas.line(this.h2Offset, this.pos, this.h2LineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth), GAME.bottleneckCanvas.line(this.v2Offset, this.pos, this.v2LineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth)
                            },
                            end: function(t) {}
                        }
                    }
                },
                drawa792: {
                    a843: {
                        1: {
                            start: function(t) {},
                            a853: function(t) {
                                GAME.bottleneckCanvas.drawImage([-2, -2], [.5, .5], G.assets[G.a836.UI].crosshairShadow, [4, 4], !0), GAME.bottleneckCanvas.line([-1, 0], [.5, .5], [2, 0], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([0, -1], [.5, .5], [0, 2], !0, "rgba(0, 255, 50, 1)", 1);
                                var e = 48 * t.gO.a93.y,
                                    i = 12 * Math.abs(t.gO.a74) + t.gO.a98 + e;
                                GAME.bottleneckCanvas.line([-12 - i, 0], [.5, .5], [5, 0], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([7 + i, 0], [.5, .5], [5, 0], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([0, -11 - i], [.5, .5], [0, 5], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([0, 6 + i], [.5, .5], [0, 5], !0, "rgba(0, 255, 50, 1)", 1)
                            },
                            end: function(t) {}
                        }
                    }
                },
                a78: {
                    done: !0,
                    a843: {
                        1: {
                            start: function(t) {},
                            a853: function(t) {},
                            end: function(t) {}
                        }
                    }
                }
            }
        },
        ammo_a759s: {
            a107: function(t) {
                var e = {
                    a741: {
                        a842: 3e3
                    }
                };
                return e
            },
            start: function(t) {},
            a759s: {
                a741: {
                    a843: {
                        1: {
                            start: function(t) {},
                            a853: function(t) {
                                GAME.bottleneckCanvas.text([-50, -50], [1, 1], t.gO.geta809Total("wood"), G.a815.foreground, 56, "middle", "right", G.a816)
                            }
                        }
                    }
                }
            }
        },
        a560: {
            a107: function(t) {
                var e = {
                    a741: {
                        a842: 3e3
                    }
                };
                return e
            },
            start: function(t) {
                var e = new THREE.BoxGeometry(1, 7, 1),
                    i = new THREE.MeshBasicMaterial({
                        color: 16777215
                    }),
                    o = new THREE.Mesh(e, i);
                t.meshes = {
                    wood: o
                }, t.meshes.wood.material = G.assets[G.a836.Material].woodballFlat.clone(), t.meshes.wood.material.map.wrapS = t.meshes.wood.material.map.wrapT = THREE.RepeatWrapping, t.meshes.wood.material.map.offset.set(0, 0), t.meshes.wood.material.map.repeat.set(1, 7), t.gO.a605.add(t.meshes.wood)
            },
            a759s: {
                a741: {
                    a843: {
                        1: {
                            start: function(t) {
                                t.anim.meshes.wood.rotation.x = -1.5708, t.anim.meshes.wood.rotation.y = 0, t.anim.meshes.wood.rotation.z = 1.5708, t.anim.meshes.wood.position.x = -.5, t.anim.meshes.wood.position.y = -2.2, t.anim.meshes.wood.position.z = 0, t.anim.meshes.wood.scale.set(.9, .7, .7)
                            },
                            a853: function(t) {}
                        }
                    }
                }
            }
        },
        a238: {
            a107: function(t) {
                var e = {
                    a741: {
                        a842: 3e3
                    }
                };
                return e
            },
            start: function(t) {
                var e = new THREE.BoxGeometry(1, 7, 1),
                    i = new THREE.MeshBasicMaterial({
                        color: 16777215
                    }),
                    o = new THREE.Mesh(e, i);
                t.meshes = {
                    wood: o
                }, t.meshes.wood.material = G.assets[G.a836.Material].woodballFlat.clone(), t.gO.a605.add(t.meshes.wood)
            },
            a759s: {
                a741: {
                    a843: {
                        1: {
                            start: function(t) {
                                t.anim.meshes.wood.rotation.x = -1.5707, t.anim.meshes.wood.rotation.y = -.48, t.anim.meshes.wood.rotation.z = 0, t.anim.meshes.wood.position.x = -.4, t.anim.meshes.wood.position.y = -1.8, t.anim.meshes.wood.position.z = -.5, t.anim.meshes.wood.scale.set(1, 1, 1)
                            },
                            a853: function(t) {}
                        }
                    }
                }
            }
        }
    }, G.a805.tnt = {
        type: "tnt",
        thumbnail: function(t) {
            return {
                width: 80,
                height: 80,
                img: G.assets[G.a836.UI].tnt
            }
        },
        scope_a759s: {
            a107: function(t) {
                var e = {},
                    i = !1;
                return (t.gO.redrawWeaponCanvas || t.gO.a77 && !t.a759s.a77.show || !t.gO.a77 && t.a759s.a77.show || t.gO.inScope && !t.a759s.a78.show || !t.gO.inScope && !t.a759s.drawa792.show) && (i = !0, t.gO.redrawWeaponCanvas = !1), t.gO.a77 && (e.a77 = {
                    a842: 1e4,
                    reset: i
                }), e.drawa792 = {
                    a842: 99999,
                    reset: i
                }, e
            },
            start: function(t) {},
            a759s: {
                a77: {
                    a843: {
                        1: {
                            start: function(t) {
                                this.size = 3, this.lineWidth = 2, this.pos = [.5, .5], this.hOffset = [3 * -this.size, 3 * -this.size], this.hLineOffset = [2 * this.size, 2 * this.size], this.vOffset = [1 * this.size, 1 * -this.size], this.vLineOffset = [2 * this.size, 2 * -this.size], this.h2Offset = [1 * this.size, 1 * this.size], this.h2LineOffset = [2 * this.size, 2 * this.size], this.v2Offset = [3 * -this.size, 3 * this.size], this.v2LineOffset = [2 * this.size, 2 * -this.size]
                            },
                            a853: function(t) {
                                GAME.bottleneckCanvas.line(this.hOffset, this.pos, this.hLineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth), GAME.bottleneckCanvas.line(this.vOffset, this.pos, this.vLineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth), GAME.bottleneckCanvas.line(this.h2Offset, this.pos, this.h2LineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth), GAME.bottleneckCanvas.line(this.v2Offset, this.pos, this.v2LineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth)
                            },
                            end: function(t) {}
                        }
                    }
                },
                drawa792: {
                    a843: {
                        1: {
                            start: function(t) {},
                            a853: function(t) {
                                GAME.bottleneckCanvas.drawImage([-2, -2], [.5, .5], G.assets[G.a836.UI].crosshairShadow, [4, 4], !0), GAME.bottleneckCanvas.line([-1, 0], [.5, .5], [2, 0], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([0, -1], [.5, .5], [0, 2], !0, "rgba(0, 255, 50, 1)", 1);
                                var e = 48 * t.gO.a93.y,
                                    i = 12 * Math.abs(t.gO.a74) + t.gO.a98 + e;
                                GAME.bottleneckCanvas.line([-12 - i, 0], [.5, .5], [5, 0], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([7 + i, 0], [.5, .5], [5, 0], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([0, -11 - i], [.5, .5], [0, 5], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([0, 6 + i], [.5, .5], [0, 5], !0, "rgba(0, 255, 50, 1)", 1)
                            },
                            end: function(t) {}
                        }
                    }
                }
            }
        },
        ammo_a759s: {
            a107: function(t) {
                var e = {
                    a741: {
                        a842: 3e3
                    }
                };
                return e
            },
            start: function(t) {},
            a759s: {
                a741: {
                    a843: {
                        1: {
                            start: function(t) {},
                            a853: function(t) {
                                GAME.bottleneckCanvas.text([-50, -50], [1, 1], t.gO.geta809Total("tnt"), G.a815.foreground, 56, "middle", "right", G.a816)
                            }
                        }
                    }
                }
            }
        },
        a560: {
            a107: function(t) {
                var e = {
                    a741: {
                        a842: 3e3
                    },
                    flame0: {
                        a842: 160
                    }
                };
                return GAME.time - t.gO.a830 > 57 && (e.flame1 = {
                    a842: 120
                }), GAME.time - t.gO.a830 > 17 && (e.flame2 = {
                    a842: 100
                }), e
            },
            start: function(t) {
                var e = new THREE.CylinderGeometry(.4, .4, 3, 6),
                    i = (e = new THREE.TorusGeometry(.4, .1, 4, 6), new THREE.MeshBasicMaterial({
                        color: 15990784
                    })),
                    o = new THREE.Mesh(e, i);
                o.scale.z = 10, o.rotation.x = Math.PI / 2, o.position.y = -.93;
                var n = new THREE.CylinderGeometry(.3, .3, .1, 8),
                    s = new THREE.MeshBasicMaterial({
                        color: 0
                    }),
                    r = new THREE.Mesh(n, s);
                r.add(o);
                var a = new THREE.CylinderGeometry(.02, .02, .8, 4),
                    h = new THREE.MeshBasicMaterial({
                        color: 10066329
                    }),
                    l = new THREE.Mesh(a, h);
                l.rotation.x = .1, r.add(l), t.meshes = {
                    tnt: r,
                    wick: l
                };
                var c = new THREE.SpriteMaterial({
                        color: 16776960
                    }),
                    u = new THREE.SpriteMaterial({
                        color: 16753920
                    }),
                    d = new THREE.SpriteMaterial({
                        color: 16776960
                    });
                t.meshes.flame0 = new THREE.Sprite(c), t.meshes.flame1 = new THREE.Sprite(u), t.meshes.flame2 = new THREE.Sprite(d), t.meshes.flame0.scale.set(.24, .24, .24), t.meshes.flame1.scale.set(.24, .24, .24), t.meshes.flame2.scale.set(.24, .24, .24), l.add(t.meshes.flame0), l.add(t.meshes.flame1), l.add(t.meshes.flame2), t.gO.a605.add(t.meshes.tnt), t.gO.a830 = GAME.time, t.gO.flame0FinalPos = new THREE.Vector3, t.gO.flame1FinalPos = new THREE.Vector3, t.gO.flame2FinalPos = new THREE.Vector3
            },
            a759s: {
                a741: {
                    a843: {
                        1: {
                            start: function(t) {},
                            a853: function(t) {
                                t.anim.meshes.tnt.rotation.x = -1.5708, t.anim.meshes.tnt.rotation.y = 0, t.anim.meshes.tnt.rotation.z = 1.5708, t.anim.meshes.tnt.position.x = -2, t.anim.meshes.tnt.position.y = -2.2, t.anim.meshes.tnt.position.z = 0
                            }
                        }
                    }
                },
                flame0: {
                    a843: {
                        .6: {
                            start: function(t) {
                                t.gO.flame0FinalPos.set(G.randFloat(-.4, .4, 2), G.randFloat(1, 1.1, 2), G.randFloat(-1, 2, 2)), t.gO.a830 = Date.now()
                            },
                            a853: function(t) {
                                t.anim.meshes.flame0.position.copy(t.gO.flame0FinalPos).multiplyScalar(.6 * Math.sin(1.5708 * t.a852)), t.anim.meshes.flame0.position.y += .48, t.anim.meshes.flame0.material.opacity = 1
                            }
                        },
                        .4: {
                            start: function(t) {},
                            a853: function(t) {
                                t.anim.meshes.flame0.position.copy(t.gO.flame0FinalPos).multiplyScalar(.6 + .2 * Math.sin(1.5708 * t.a852)), t.anim.meshes.flame0.position.y += .48, t.anim.meshes.flame0.material.opacity = 1 - t.a852
                            }
                        }
                    }
                },
                flame1: {
                    a843: {
                        .6: {
                            start: function(t) {
                                t.gO.flame1FinalPos.set(G.randFloat(-.4, .4, 2), G.randFloat(1, 1.1, 2), G.randFloat(-1, 2, 2))
                            },
                            a853: function(t) {
                                t.anim.meshes.flame1.position.copy(t.gO.flame1FinalPos).multiplyScalar(.6 * Math.sin(1.5708 * t.a852)), t.anim.meshes.flame1.position.y += .45, t.anim.meshes.flame1.material.opacity = 1
                            }
                        },
                        .4: {
                            start: function(t) {},
                            a853: function(t) {
                                t.anim.meshes.flame1.position.copy(t.gO.flame1FinalPos).multiplyScalar(.6 + .2 * Math.sin(1.5708 * t.a852)), t.anim.meshes.flame1.position.y += .45, t.anim.meshes.flame1.material.opacity = 1 - t.a852
                            }
                        }
                    }
                },
                flame2: {
                    a843: {
                        .6: {
                            start: function(t) {
                                t.gO.flame2FinalPos.set(G.randFloat(-.4, .4, 2), G.randFloat(1, 1.1, 2), G.randFloat(-1, 1, 2))
                            },
                            a853: function(t) {
                                t.anim.meshes.flame2.position.copy(t.gO.flame2FinalPos).multiplyScalar(.6 * Math.sin(1.5708 * t.a852)), t.anim.meshes.flame2.position.y += .45, t.anim.meshes.flame2.material.opacity = 1
                            }
                        },
                        .4: {
                            start: function(t) {},
                            a853: function(t) {
                                t.anim.meshes.flame2.position.copy(t.gO.flame2FinalPos).multiplyScalar(.6 + .2 * Math.sin(1.5708 * t.a852)), t.anim.meshes.flame2.position.y += .45, t.anim.meshes.flame2.material.opacity = 1 - t.a852
                            }
                        }
                    }
                }
            }
        }
    }, G.a805.tnt.a238 = {}, $.extend(!0, G.a805.tnt.a238, G.a805.tnt.a560), G.a805.tnt.a238.a759s.a741 = {
        a843: {
            1: {
                start: function(t) {
                    t.anim.meshes.tnt.rotation.x = 0, t.anim.meshes.tnt.rotation.y = -1.5708, t.anim.meshes.tnt.rotation.z = 1.5708, t.anim.meshes.tnt.position.x = -.4, t.anim.meshes.tnt.position.y = -2.4, t.anim.meshes.tnt.position.z = -1
                },
                a853: function(t) {}
            }
        }
    }, G.a805.stairs = {
        type: "stairs",
        thumbnail: function(t) {
            return {
                width: 80,
                height: 80,
                img: G.assets[G.a836.UI].stairs
            }
        },
        scope_a759s: {
            a107: function(t) {
                var e = {},
                    i = !1;
                return (t.gO.redrawWeaponCanvas || t.gO.a77 && !t.a759s.a77.show || !t.gO.a77 && t.a759s.a77.show || t.gO.inScope && !t.a759s.a78.show || !t.gO.inScope && !t.a759s.drawa792.show) && (i = !0, t.gO.redrawWeaponCanvas = !1), t.gO.a77 && (e.a77 = {
                    a842: 1e4,
                    reset: i
                }), e.drawa792 = {
                    a842: 99999,
                    reset: i
                }, e
            },
            start: function(t) {},
            a759s: {
                a77: {
                    a843: {
                        1: {
                            start: function(t) {
                                this.size = 3, this.lineWidth = 2, this.pos = [.5, .5], this.hOffset = [3 * -this.size, 3 * -this.size], this.hLineOffset = [2 * this.size, 2 * this.size], this.vOffset = [1 * this.size, 1 * -this.size], this.vLineOffset = [2 * this.size, 2 * -this.size], this.h2Offset = [1 * this.size, 1 * this.size], this.h2LineOffset = [2 * this.size, 2 * this.size], this.v2Offset = [3 * -this.size, 3 * this.size], this.v2LineOffset = [2 * this.size, 2 * -this.size]
                            },
                            a853: function(t) {
                                GAME.bottleneckCanvas.line(this.hOffset, this.pos, this.hLineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth), GAME.bottleneckCanvas.line(this.vOffset, this.pos, this.vLineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth), GAME.bottleneckCanvas.line(this.h2Offset, this.pos, this.h2LineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth), GAME.bottleneckCanvas.line(this.v2Offset, this.pos, this.v2LineOffset, !0, "rgba(0, 0, 0, 1)", this.lineWidth)
                            },
                            end: function(t) {}
                        }
                    }
                },
                drawa792: {
                    a843: {
                        1: {
                            start: function(t) {},
                            a853: function(t) {
                                GAME.bottleneckCanvas.drawImage([-2, -2], [.5, .5], G.assets[G.a836.UI].crosshairShadow, [4, 4], !0), GAME.bottleneckCanvas.line([-1, 0], [.5, .5], [2, 0], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([0, -1], [.5, .5], [0, 2], !0, "rgba(0, 255, 50, 1)", 1);
                                var e = 48 * t.gO.a93.y,
                                    i = 12 * Math.abs(t.gO.a74) + t.gO.a98 + e;
                                GAME.bottleneckCanvas.line([-12 - i, 0], [.5, .5], [5, 0], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([7 + i, 0], [.5, .5], [5, 0], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([0, -11 - i], [.5, .5], [0, 5], !0, "rgba(0, 255, 50, 1)", 1), GAME.bottleneckCanvas.line([0, 6 + i], [.5, .5], [0, 5], !0, "rgba(0, 255, 50, 1)", 1)
                            },
                            end: function(t) {}
                        }
                    }
                }
            }
        },
        ammo_a759s: {
            a107: function(t) {
                var e = {
                    a741: {
                        a842: 3e3
                    }
                };
                return e
            },
            start: function(t) {},
            a759s: {
                a741: {
                    a843: {
                        1: {
                            start: function(t) {},
                            a853: function(t) {
                                GAME.bottleneckCanvas.text([-50, -50], [1, 1], t.gO.geta809Total("stairs"), G.a815.foreground, 56, "middle", "right", G.a816)
                            }
                        }
                    }
                }
            }
        },
        a560: {
            a107: function(t) {
                var e = {
                    a741: {
                        a842: 3e3
                    }
                };
                return e
            },
            start: function(t) {
                var e = new THREE.BoxGeometry(1, 7, 1),
                    i = new THREE.MeshBasicMaterial({
                        color: 16777215
                    }),
                    o = new THREE.Mesh(e, i);
                t.meshes = {
                    woodball: o
                }, t.meshes.woodball.material = G.assets[G.a836.Material].woodballFlat.clone(), t.meshes.woodball.material.map.wrapS = t.meshes.woodball.material.map.wrapT = THREE.RepeatWrapping, t.meshes.woodball.material.map.offset.set(0, 0), t.meshes.woodball.material.map.repeat.set(1, 7), t.gO.a605.add(t.meshes.woodball)
            },
            a759s: {
                a741: {
                    a843: {
                        1: {
                            start: function(t) {
                                t.anim.meshes.woodball.rotation.x = -1.5708, t.anim.meshes.woodball.rotation.y = 0, t.anim.meshes.woodball.rotation.z = 1.5708, t.anim.meshes.woodball.position.x = -.5, t.anim.meshes.woodball.position.y = -2.2, t.anim.meshes.woodball.position.z = 0, t.anim.meshes.woodball.scale.set(.9, .7, .7)
                            },
                            a853: function(t) {}
                        }
                    }
                }
            }
        },
        a238: {
            a107: function(t) {
                var e = {
                    a741: {
                        a842: 3e3
                    }
                };
                return e
            },
            start: function(t) {
                var e = new THREE.BoxGeometry(1, 7, 1),
                    i = new THREE.MeshBasicMaterial({
                        color: 16777215
                    }),
                    o = new THREE.Mesh(e, i);
                t.meshes = {
                    woodball: o
                }, t.meshes.woodball.material = G.assets[G.a836.Material].woodballFlat.clone(), t.gO.a605.add(t.meshes.woodball)
            },
            a759s: {
                a741: {
                    a843: {
                        1: {
                            start: function(t) {
                                t.anim.meshes.woodball.rotation.x = -1.5707, t.anim.meshes.woodball.rotation.y = -.48, t.anim.meshes.woodball.rotation.z = 0, t.anim.meshes.woodball.position.x = -.4, t.anim.meshes.woodball.position.y = -1.8, t.anim.meshes.woodball.position.z = -.5, t.anim.meshes.woodball.scale.set(1, 1, 1)
                            },
                            a853: function(t) {}
                        }
                    }
                }
            }
        }
    }, Object.keys(G.a805).forEach((function(t) {
        G.a805[t].name = t
    }));
var a579, dist1, dist2, dist3, a8, a9, a10, a11, U, V, a719, material = new THREE.MeshBasicMaterial,
    a576 = [],
    a578 = new THREE.BufferGeometry;

function get3dDistance(t, e) {
    var i = t[0] - e[0],
        o = t[1] - e[1],
        n = t[2] - e[2];
    return Math.sqrt(i * i + o * o + n * n)
}

function f(t, e, i, o, n) {
    return o[t + n[0] * (e + n[1] * i)]
}
var a65, a66, avg = 0,
    avgTotal = 0,
    undefinedBlocks = [];
G.a650 = function(t, e, i, o, n, s, r) {
    G.a691.call(this, t), this.i = e, this.e = i, this.o = o, this.buildP = new THREE.Vector3(e * a18, i * a18, o * a18), this.points = [], this.view = {
        a333: {
            boundingBox: null,
            triangles: []
        }
    }
}, G.a650.prototype = G.inherit(G.a691, {
    constructor: G.a650,
    init: function() {},
    update: function() {},
    a713: function(t) {
        return 0 != this.v[this.posToV(t)]
    },
    a714: function(t, e, i) {
        return $.inArray(t, this.a715) > -1
    },
    fill: function() {
        for (var t = 0; t < this.v.length; t++) this.v[t] = this.color;
        this.updatea650s()
    },
    addV: function(t, e) {
        var i = new a234;
        i.i = this.i, i.e = this.e, i.o = this.o, i.v = t, i.u = e, G.socket.send(i.a614())
    },
    delV: function(t) {
        var e = new a234;
        e.i = this.i, e.e = this.e, e.o = this.o, e.v = t, e.u = 0, G.socket.send(e.a614())
    },
    updatea650sFromVertices: function(t, e, i, o, n, s, r, a, h, l, c, u, d, p, f, g) {
        this.a865.a382ed(this.i, this.e, this.o, 1), this.solidMesh ? (this.solidMesh.geometry = new THREE.BufferGeometry, null == this.solidMesh.parent && this.a865.scene.add(this.solidMesh)) : (this.solidMesh = new THREE.Mesh(new THREE.BufferGeometry, G.assets[G.a836.Material].a643SolidMaterial), this.a865.scene.add(this.solidMesh)), this.solidMesh.geometry.setIndex(new THREE.BufferAttribute(o, 1)), this.solidMesh.geometry.setAttribute("position", new THREE.BufferAttribute(n, 3)), this.solidMesh.geometry.setAttribute("shading", new THREE.BufferAttribute(s, 1)), this.solidMesh.geometry.setAttribute("uvBase", new THREE.BufferAttribute(r, 2)), this.solidMesh.geometry.setAttribute("uvProgress", new THREE.BufferAttribute(a, 2)), this.a409(), this.triangles = t, this.volume = i, this.points.push(new THREE.Vector2(d, p)), this.points.push(new THREE.Vector2(f, g)), this.a401(this.points), this.a408(), this.subTriangles = e, this.updateSubBoundingBoxesFromTriangles(), this.solidMesh.matrixAutoUpdate = !1, this.solidMesh.doubleSided = !1, this.solidMesh.receiveShadow = !1, this.solidMesh.castShadow = !1, this.solidMesh.position.set(this.buildP.x, this.buildP.y, this.buildP.z), this.solidMesh.scale.copy(new THREE.Vector3(a12, a12, a12)), this.solidMesh.updateMatrix(), h.length > 0 && (this.transparentMesh ? (this.transparentMesh.geometry = new THREE.BufferGeometry, null == this.transparentMesh.parent && this.a865.scene.add(this.transparentMesh)) : (this.transparentMesh = new THREE.Mesh(new THREE.BufferGeometry, G.assets[G.a836.Material].a643TransparentMaterial), this.a865.scene.add(this.transparentMesh)), this.transparentMesh.geometry.setIndex(new THREE.BufferAttribute(h, 1)), this.transparentMesh.geometry.setAttribute("position", new THREE.BufferAttribute(l, 3)), this.transparentMesh.geometry.setAttribute("uvBase", new THREE.BufferAttribute(c, 2)), this.transparentMesh.geometry.setAttribute("uvProgress", new THREE.BufferAttribute(u, 2)), this.transparentMesh.matrixAutoUpdate = !1, this.transparentMesh.userData = {
            i: this.i,
            e: this.e,
            o: this.o
        }, this.transparentMesh.receiveShadow = !1, this.transparentMesh.castShadow = !1, this.transparentMesh.position.set(this.buildP.x, this.buildP.y, this.buildP.z), this.transparentMesh.scale.copy(new THREE.Vector3(a12, a12, a12)), this.transparentMesh.updateMatrix())
    },
    a720: function(t, e, i) {
        return i * SQUARE_a14 + e * a14 + t
    },
    posToCoords: function(t) {
        for (var e = -1, i = 0; i < this.a865.a364; i++) {
            var o = this.buildP.x + a12 * i,
                n = this.buildP.x + a12 * (i + 1);
            if (t.x >= o && t.x <= n) {
                e = i;
                break
            }
        }
        var s = -1;
        for (i = 0; i < this.a865.a364; i++) {
            o = this.buildP.y + a12 * i, n = this.buildP.y + a12 * (i + 1);
            if (t.y >= o && t.y <= n) {
                s = i;
                break
            }
        }
        var r = -1;
        for (i = 0; i < this.a865.a364; i++) {
            o = this.buildP.z + a12 * i, n = this.buildP.z + a12 * (i + 1);
            if (t.z >= o && t.z <= n) {
                r = i;
                break
            }
        }
        return -1 != e && -1 != s && -1 != r && [e, s, r]
    },
    posToV: function(t) {
        for (var e = -1, i = 0; i < a14; i++)
            if (t.x >= this.buildP.x + a12 * i && t.x <= this.buildP.x + a12 * (i + 1)) {
                e = i;
                break
            } var o = -1;
        for (i = 0; i < a14; i++)
            if (t.y >= this.buildP.y + a12 * i && t.y <= this.buildP.y + a12 * (i + 1)) {
                o = i;
                break
            } var n = -1;
        for (i = 0; i < a14; i++)
            if (t.z >= this.buildP.z + a12 * i && t.z <= this.buildP.z + a12 * (i + 1)) {
                n = i;
                break
            } return -1 != e && -1 != o && -1 != n && this.a720(e, o, n)
    },
    posToVMiddlePos: function(t) {
        var e = this.posToCoords(t);
        return new THREE.Vector3(this.buildP.x + e[0] * a12 + a13, this.buildP.y + e[1] * a12 + a13, this.buildP.z + e[2] * a12 + a13)
    },
    removeFromScene: function() {
        this.a865.scene.remove(this.solidMesh), this.a865.scene.remove(this.transparentMesh), this.solidMesh && (this.solidMesh.geometry.dispose(), this.solidMesh.geometry = void 0, this.solidMesh.material.dispose(), this.solidMesh.material = void 0, this.solidMesh = void 0), this.transparentMesh && (this.a865.scene.remove(this.transparentMesh), this.transparentMesh.geometry.dispose(), this.transparentMesh.geometry = void 0, this.transparentMesh.material.dispose(), this.transparentMesh.material = void 0, this.transparentMesh = void 0), this.remove()
    },
    reset: function() {
        this.a865.scene.remove(this.solidMesh), this.a865.scene.remove(this.transparentMesh), this.solidMesh && (this.solidMesh.geometry.dispose(), this.solidMesh.geometry = void 0, this.solidMesh.material.dispose(), this.solidMesh.material = void 0, this.solidMesh = void 0), this.transparentMesh && (this.a865.scene.remove(this.transparentMesh), this.transparentMesh.geometry.dispose(), this.transparentMesh.geometry = void 0, this.transparentMesh.material.dispose(), this.transparentMesh.material = void 0, this.transparentMesh = void 0)
    }
}), G.a611 = function(t, e, i, o) {
    G.a691.call(this, e), this.a865.a642[this.id] = this, this.ID = i, this.name = o, this.index = t, $.extend(!0, this, G.a870[this.index]), this.a651s = {}, $.extend(!0, this.a651s, G.a805), this.a472 = new THREE.Object3D, this.a601 = new THREE.Object3D, this.a239 = new THREE.Object3D, this.a605 = new THREE.Object3D, this.a240 = new THREE.Object3D, this.a472.add(this.a601), this.a601.add(this.a240), this.a601.rotation.y = THREE.Math.degToRad(180), this.a865.scene.add(this.a472), this.a472.visible = !1, this.a240.add(this.a239), this.a473 = new G.Animation(this.a238, this.a601, this, {
        skin: this.skin
    }), this.a745 = !1, this.a651 = null, this.a746 = 100, this.a747 = !0, this.a678 = new THREE.Vector3, this.position = new THREE.Vector3, this.rotation = new THREE.Quaternion, this.a748 = null, this.a749 = null, this.a356 = 16777215, this.a750 = !1, this.a751 = !1, this.a752 = Date.now(), this.frameTime = 0, this.i = 0, this.a753 = 0, this.iEnd = 0, this.snapa685 = Array(9999), this.a755 = 1, this.a676 = 0, this.a756 = !1, this.a757 = !1, this.reset = !0, this.a758 = !1, this.a474("arm"), this.a679 = new THREE.Vector3
}, G.a611.prototype = G.inherit(G.a691, {
    constructor: G.a611,
    update: function() {
        this.a758 && (this.frameTime = (Date.now() - this.a752) / 1e3, this.a752 = Date.now(), this.a477(), this.a472.position.copy(this.position), this.a472.rotation.copy(this.rotation), this.a473.update(!1), null != this.a544 && this.a544.update(!0))
    },
    a478: function(t) {
        this.a649 = t
    },
    a479: function() {
        this.a90 = !0
    },
    a480: function() {
        this.a90 = !1
    },
    a481: function(t) {
        t ? this.a751 || (this.a751 = !0) : this.a751 && (this.a751 = !1)
    },
    a482: function(t, e, i, o, n, s) {
        s < 0 && (s *= -1), this.reset && (this.a753 = s, this.i = 0, this.iEnd = 0, this.a757 || this.a483(t, e, i), this.a472.visible = !0, this.a758 = !0, this.reset = !1), this.snapa685[this.iEnd] = {
            posX: t,
            posY: e,
            posZ: i,
            a748: o,
            a749: n,
            time: s
        }, this.iEnd++
    },
    a477: function() {
        var t = this.iEnd - this.i;
        if (t >= 2) {
            this.a755 = 1, t >= 4 && this.a753 < this.snapa685[this.iEnd - 4].time ? t >= 6 && this.a753 < this.snapa685[this.iEnd - 6].time ? (this.a755 = 2, this.a753 += this.frameTime * this.a755) : (this.a755 = 1.05, this.a753 += this.frameTime * this.a755) : t >= 2 && this.a753 > this.snapa685[this.iEnd - 2].time + (this.snapa685[this.iEnd - 1].time - this.snapa685[this.iEnd - 2].time) / 2 ? (this.a755 = .2, this.a753 += this.frameTime * this.a755) : this.a753 += this.frameTime;
            for (var e = !1, i = this.i; i < this.iEnd; i++)
                if (this.a753 < this.snapa685[i].time) {
                    this.i = i - 1, e = !0;
                    break
                } e || (this.i = this.iEnd - 2, this.a753 = this.snapa685[this.i].time);
            var o = this.snapa685[this.i + 1].time - this.snapa685[this.i].time;
            if (0 == o) return;
            var n = (this.a753 - this.snapa685[this.i].time) / o;
            this.a757 || this.move(G.lerp(this.snapa685[this.i].posX, this.snapa685[this.i + 1].posX, n), G.lerp(this.snapa685[this.i].posY, this.snapa685[this.i + 1].posY, n), G.lerp(this.snapa685[this.i].posZ, this.snapa685[this.i + 1].posZ, n), G.a488(this.snapa685[this.i].a748, this.snapa685[this.i + 1].a748, n), G.a488(this.snapa685[this.i].a749, this.snapa685[this.i + 1].a749, n))
        }
    },
    a489: function() {
        this.a490(), this.a472.visible = !1, this.a758 = !1, this.a409()
    },
    a490: function() {
        this.reset = !0
    },
    a483: function(t, e, i) {
        this.move(t, e, i, 0, 0)
    },
    a474: function(t) {
        this.a558 = !0, this.a605.children = [], this.a651 = this.a651s[t], null != this.a544 && this.a544.destroy(), this.a544 = new G.Animation(G.a805[t].a238, this.a605, this)
    },
    a609: function(t, e) {
        var i = this.a601.getWorldPosition(new THREE.Vector3(0, 0, 10)),
            o = this.a239.getWorldDirection(new THREE.Vector3),
            n = new THREE.Vector3;
        n.addVectors(i, o.multiplyScalar(1)), this.a865.a701(this, t, n, o, e)
    },
    move: function(t, e, i, o, n) {
        this.a679.set(t, e, i), this.a666(this.a679), GAME.updatea611sTriangles && (this.getTriangles(this), this.a408()), this.a472.rotation.set(0, o, 0, "YXZ"), this.a240.rotation.x = -n, this.a748 = o, this.a749 = n, this.a678 = this.position.x
    },
    a646: function(t) {
        console.log("We hit otherplayer")
    },
    remove: function() {
        G.a691.prototype.remove.call(this), this.a865.scene.remove(G.othera822ers[this.ID].a472)
    }
}), G.a822er = function(t, e, i) {
    G.a691.call(this, e), this.a865.a642[this.id] = this, this.ID = null, this.name = t, this.camera = i, this.a725 = {}, $.extend(!0, this.a725, G.a870[this.name]), this.scene = new THREE.Scene, this.a651s = {}, $.extend(!0, this.a651s, G.a805), this.a746 = 100, this.dead = !1, this.size = new THREE.Vector3(2.4, 4, 2.4), this.a662 = this.size.x + 15, this.a356 = (new THREE.Color).setRGB(1, 0, 0).getHex(), this.direction = new THREE.Vector3, this.a654 = !1, this.a515 = null, this.a515Point = null, this.a515Face = null, this.a518 = 36, this.totalShorta843 = 4, this.w = window.innerWidth, this.h = window.innerHeight, this.a521 = 0, this.a676 = 1, this.a649 = 0, this.name = "", this.aX = 0, this.aY = 0, this.aZ = 0, this.vX = 0, this.vY = 0, this.vZ = 0, this.fly = 0, this.a677 = 0, this.jump = !1, this.addAX = .0085, this.addAY = 10, this.addAZ = .025, this.a731 = 3, this.maxAY = 10, this.a732 = 3, this.maxVX = 1, this.maxVY = .55, this.maxVZ = 1, this.autoTrigger = !1, this.a103 = !1, this.justTriggered = !1, this.triggerCooldown = 80, this.triggerTime = 0, this.a751 = !1, this.a110 = !1, this.a110OceanFloor = !1, this.isJumping = !1, this.isFlying = !1, this.inWater = !1, this.onIce = !1, this.waterCancelGravity = !1, this.waterCancelGravityAddAY = 0, this.jumpStartTime = 0, this.controls = new G.a522(this.camera, this), this.controls.eye.copy(this.position), this.velocity = new THREE.Vector3, this.a75 = new THREE.Vector3, this.a74 = null, this.velocityPos = new THREE.Vector3, this.a678 = new THREE.Vector3, this.gunA = 0, this.gunV = 0, this.ready = !1, this.checkSpawnChunks = [], this.eventQueue = [], this.head1 = new THREE.Vector3, this.eye1 = new THREE.Vector3, this.foot1 = new THREE.Vector3, this.underFoot1 = new THREE.Vector3, this.underFoot2 = new THREE.Vector3, this.underFoot3 = new THREE.Vector3, this.stuckCheck1 = new THREE.Vector3, this.stuckCheck2 = new THREE.Vector3, this.stuckCheck3 = new THREE.Vector3, this.stuckCheck4 = new THREE.Vector3, this.stuckCheck5 = new THREE.Vector3, this.stuckCheck6 = new THREE.Vector3, this.stuckCheck7 = new THREE.Vector3, this.stuckCheck8 = new THREE.Vector3, this.stuckCheck9 = new THREE.Vector3, this.stuckCheck10 = new THREE.Vector3, this.stuckCheck11 = new THREE.Vector3, this.stuckCheck12 = new THREE.Vector3, this.tryPos = new THREE.Vector3, this.collisionResult = {}, this.collisiona691s = Array(400), this.a175 = new a175, this.a603 = new THREE.Object3D, this.a555 = new THREE.Object3D, this.a601 = new THREE.Object3D, this.a605 = new THREE.Object3D, this.a555.add(this.a601), this.a603.add(this.a555), this.a603.rotation.y = THREE.Math.degToRad(180), this.a603.position.set(0, -5.4, -2), this.a603.visible = !1, this.a544 = null, this.a558 = !1
}, G.a822er.prototype = G.inherit(G.a691, {
    constructor: G.a822er,
    start: function() {
        if (this.reseta806(), this.armCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 100), this.scene.add(this.armCamera), this.scene.add(this.a603), this.a542 = new G.Animation(this.a725.a237, this.a601, this, {
                skin: this.a725.skin
            }), this.shoutoutCvs = new G.Canvas2d(!0), this.shoutoutCvs.canvasId = "shoutout-canvas", this.shoutoutCvs.alpha = 0, this.shoutoutCvs.init(), this.shoutoutCvs.screenCanvas.style.zIndex = 20, this.shoutoutCanvas = new G.a791(this.shoutoutCvs), this.shoutoutCanvas.init(), this.crosshairCvs = new G.Canvas2d(!0), this.crosshairCvs.canvasId = "crosshair-canvas", this.crosshairCvs.alpha = 0, this.crosshairCvs.init(), this.crosshairCvs.screenCanvas.style.zIndex = 10, this.a651Canvas = new G.a791(this.crosshairCvs), this.a651Canvas.init(), this.ammoCvs = new G.Canvas2d(!0), this.ammoCvs.canvasId = "ammo-canvas", this.ammoCvs.alpha = 0, this.ammoCvs.init(), this.ammoCanvas = new G.a791(this.ammoCvs), this.ammoCanvas.init(), this.shoutOutAnimations = new G.Animation(this.a725.shoutout_a759s, this.a605, this), this.a727("arm", !0), G.CONFIG.creative) {
            var t = new THREE.AxisHelper(500);
            t.position.copy(new THREE.Vector3(0, 0, 0)), this.a865.scene.add(t), new THREE.GridHelper(1e4, 5).position.copy(this.position)
        }
        this.environmentFog = new THREE.Fog(G.CONFIG.a135Color, G.CONFIG.a135Near, G.CONFIG.a135Far), this.oceanFog = new THREE.Fog(G.CONFIG.a139, G.CONFIG.a140, G.CONFIG.a141)
    },
    update: function() {
        this.a865.sendChunkBuffered();
        var t = this;
        if (null != this.shoutOutAnimations && this.shoutOutAnimations.update(!0), this.dead) return GAME.camera.position.set(0, 8, 24), void GAME.camera.rotation.set(0, 0, 0);
        this.onIce && !this.wasOnIce && (this.aZ += .1), this.a751 = !1, G.Keybinds.moveForward.a730 ? (this.aZ += this.onIce ? .0075 : .025, this.aZ > this.a732 && (this.aZ = this.a732), this.a751 = !0) : G.Keybinds.moveBackward.a730 ? (this.aZ -= this.onIce ? .0075 : .025, this.aZ < -this.a732 && (this.aZ = -this.a732), this.a751 = !0) : this.aZ > 0 ? (this.aZ -= this.a110 && !this.onIce ? .015 : this.onIce ? 15e-5 : .015, this.aZ < 0 && (this.aZ = 0)) : this.aZ < 0 && (this.aZ += this.onIce ? 15e-5 : .04, this.aZ > 0 && (this.aZ = 0));
        var e = !1;
        G.Keybinds.strafeRight.a730 && (e = !0, this.aX < 0 && (this.aX += this.a110 && !this.onIce ? .04 : .004), this.aX += this.addAX, this.aX > this.a731 && (this.aX = this.a731), this.a751 = !0), G.Keybinds.strafeLeft.a730 && (e = !0, this.aX > 0 && (this.aX -= this.a110 && !this.onIce ? .04 : .004), this.aX -= this.addAX, this.aX < -this.a731 && (this.aX = -this.a731), this.a751 = !0), e || (this.aX > 0 ? (this.aX -= this.onIce ? .004 : .04, this.aX < 0 && (this.aX = 0)) : this.aX < 0 && (this.aX += this.onIce ? .004 : .04, this.aX > 0 && (this.aX = 0))), this.footInLadder && G.Keybinds.moveUpward.a730 ? this.vY = this.maxVY : this.jump && (this.aY += this.addAY, this.aY > this.maxAY && (this.aY = this.maxAY), this.vY += this.aY, this.vY > this.maxVY && (this.vY = this.maxVY)), this.vY -= this.a677, this.a110 ? (this.a110OceanFloor ? this.vY < 0 && (this.vY = 0) : this.vY < -.01 && (this.vY = -.01), this.exitWater = !1) : (this.vY < -8 && (this.vY = -8), this.collisionResult.a673 && (this.vY = 0)), this.vZ *= .5, this.vZ += this.aZ, this.vX *= .5, this.vX += this.aX, this.tryPos.x = this.controls.eye.x + this.controls.rightMoveVector.x * this.vX + this.controls.upMoveVector.x * this.vY + this.controls.forwardMoveVector.x * this.vZ, this.tryPos.y = this.controls.eye.y + this.controls.rightMoveVector.y * this.vX + this.controls.upMoveVector.y * this.vY + this.controls.forwardMoveVector.y * this.vZ, this.tryPos.z = this.controls.eye.z + this.controls.rightMoveVector.z * this.vX + this.controls.upMoveVector.z * this.vY + this.controls.forwardMoveVector.z * this.vZ, this.collisionResult = this.a865.a377.a71a668(this.size, this.controls.eye, this.tryPos, [G.a611], !1, !0, 0), this.a678.copy(this.position), this.controls.moveCameraTo(this.collisionResult.pos), this.position.copy(this.collisionResult.pos), this.direction.x = this.controls.a554.x - this.controls.eye.x, this.direction.y = this.controls.a554.y - this.controls.eye.y, this.direction.z = this.controls.a554.z - this.controls.eye.z, this.a75.copy(this.velocity), this.velocity.x = this.position.x - this.a678.x, this.velocity.y = this.position.y - this.a678.y, this.velocity.z = this.position.z - this.a678.z, this.a74 = this.velocity.x + this.velocity.z, this.wasGrounded = this.a110, this.wasOnIce = this.onIce, this.wasFootInWater = this.a108, this.wasHeadInWater = this.a109, this.a110 = !1, this.a110OceanFloor = !1, this.a108 = !1, this.a109 = !1, this.footInLava = !1, this.headInLava = !1, this.footInLadder = !1, this.headInLadder = !1, this.onIce = !1, this.blockUnderFoot1 = !1, this.blockUnderFoot2 = !1, this.blockUnderFoot3 = !1, this.head1.set(this.collisionResult.pos.x, this.collisionResult.pos.y + 4.8, this.collisionResult.pos.z), this.eye1.set(this.collisionResult.pos.x, this.collisionResult.pos.y + 3.4, this.collisionResult.pos.z), this.foot1.set(this.collisionResult.pos.x, this.collisionResult.pos.y - this.size.y / 2, this.collisionResult.pos.z), this.underFoot1.set(this.collisionResult.pos.x - this.size.x / 2, this.collisionResult.pos.y - this.size.y / 2 - 2.1, this.collisionResult.pos.z + 1.5), this.underFoot2.set(this.collisionResult.pos.x + this.size.x / 2, this.collisionResult.pos.y - this.size.y / 2 - 2.1, this.collisionResult.pos.z - 1.5), this.underFoot3.set(this.collisionResult.pos.x, this.collisionResult.pos.y - this.size.y / 2 - 2.1, this.collisionResult.pos.z), this.underFoot1.y <= GAME.oceanPlane.position.y && (this.a108 = !0), this.eye1.y <= GAME.oceanPlane.position.y && (this.a109 = !0), this.foot1.y <= G.CONFIG.environmentOceanFloorHeight && (this.a110 = !0, this.a110OceanFloor = !0), this.vHead1 = !1, this.vFoot1 = !1, this.vUnderFoot1 = !1, this.vUnderFoot2 = !1, this.vUnderFoot3 = !1;
        for (var i = 0; i < this.collisionResult.a693.length; i++) this.collisionResult.a693[i].solidMesh && (this.vHead1 || (this.vHead1 = BLOCK_CONFIG[this.collisionResult.a693[i].volume[this.collisionResult.a693[i].posToV(this.head1)]], this.vHead1 && (this.vHead1 = this.vHead1.name)), this.vFoot1 || (this.vFoot1 = BLOCK_CONFIG[this.collisionResult.a693[i].volume[this.collisionResult.a693[i].posToV(this.foot1)]], this.vFoot1 && (this.vFoot1 = this.vFoot1.name)), this.vUnderFoot1 || (this.vUnderFoot1 = BLOCK_CONFIG[this.collisionResult.a693[i].volume[this.collisionResult.a693[i].posToV(this.underFoot1)]], this.vUnderFoot1 && (this.vUnderFoot1 = this.vUnderFoot1.name)), this.vUnderFoot2 || (this.vUnderFoot2 = BLOCK_CONFIG[this.collisionResult.a693[i].volume[this.collisionResult.a693[i].posToV(this.underFoot2)]], this.vUnderFoot2 && (this.vUnderFoot2 = this.vUnderFoot2.name)), this.vUnderFoot3 || (this.vUnderFoot3 = BLOCK_CONFIG[this.collisionResult.a693[i].volume[this.collisionResult.a693[i].posToV(this.underFoot3)]], this.vUnderFoot3 && (this.vUnderFoot3 = this.vUnderFoot3.name)), "ladder" == this.vFoot1 && (this.footInLadder = !0), this.onIce || "ice" != this.vUnderFoot1 && "ice" != this.vUnderFoot2 && "ice" != this.vUnderFoot3 || "ice" != this.vUnderFoot1 && "air" != this.vUnderFoot1 || "ice" != this.vUnderFoot2 && "air" != this.vUnderFoot2 || "ice" != this.vUnderFoot3 && "air" != this.vUnderFoot3 || (this.onIce = !0), this.a110OceanFloor || (this.vUnderFoot1 && (this.blockUnderFoot1 = this.a76(this.vUnderFoot1)), this.blockUnderFoot1 || this.vUnderFoot2 && (this.blockUnderFoot2 = this.a76(this.vUnderFoot2)), this.blockUnderFoot1 || this.blockUnderFoot2 || this.vUnderFoot3 && (this.blockUnderFoot3 = this.a76(this.vUnderFoot3)), this.a110 = this.blockUnderFoot1 || this.blockUnderFoot2 || this.blockUnderFoot3));
        if (this.a110 && (this.jumpStartTime = 0, this.a111 = GAME.time), this.a108 ? this.a109 ? (this.jumpStartTime = 0, this.inWater || (this.inWater = !0, this.waterCancelGravity = !0, this.waterCancelGravityAddAY = -this.vY / 7), GAME.a865.scene.fog = this.oceanFog, this.scene.fog = this.oceanFog, GAME.a865.waterSkybox.visible = !0, 1 == G.CONFIG.a131 && (GAME.a865.skybox.visible = !1), GAME.oceanPlane.material.side = THREE.FrontSide, this.a677 = G.CONFIG.a151, this.addAY = G.CONFIG.a152, this.a731 = G.CONFIG.a153, this.maxAY = G.CONFIG.a154, this.a732 = G.CONFIG.a155, this.maxVY = G.CONFIG.a156, G.Keybinds.moveUpward.a730 ? this.jump = !0 : this.jump = !1, this.waterCancelGravity && (this.vY < -.2 ? this.vY += this.waterCancelGravityAddAY : this.waterCancelGravity = !1)) : (this.inWater = !1, GAME.a865.scene.fog = this.environmentFog, this.scene.fog = this.environmentFog, GAME.a865.waterSkybox.visible = !1, 1 == G.CONFIG.a131 && (GAME.a865.skybox.visible = !0), GAME.oceanPlane.material.side = THREE.BackSide, this.a110 ? (this.waterCancelGravity = !1, this.a677 = G.CONFIG.a145, this.addAY = G.CONFIG.a146, this.a731 = G.CONFIG.a147, this.maxAY = G.CONFIG.a148, this.a732 = G.CONFIG.a149, this.maxVY = G.CONFIG.a150, G.Keybinds.moveUpward.a730 && (0 == this.jumpStartTime || GAME.time - this.jumpStartTime < 250) ? (0 == this.jumpStartTime && (this.aY = 0, this.vY = 0, this.jumpStartTime = GAME.time), this.jump = !0) : this.jump = !1) : (this.a677 = G.CONFIG.a144, G.Keybinds.moveUpward.a730 && (0 == this.jumpStartTime || GAME.time - this.jumpStartTime < 250) || (this.jump = !1))) : (this.wasFootInWater && GAME.time - this.a111 > 200 && (this.exitWater = !0, clearTimeout(this.exitWaterTimeout), this.exitWaterTimeout = setTimeout((function() {
                t.exitWater = !1
            }), 1e3)), GAME.a865.scene.fog = this.environmentFog, this.scene.fog = this.environmentFog, GAME.a865.waterSkybox.visible = !1, 1 == G.CONFIG.a131 && (GAME.a865.skybox.visible = !0), GAME.oceanPlane.material.side = THREE.BackSide, this.waterCancelGravity = !1, G.CONFIG.a143 ? (this.a677 = G.CONFIG.a157, this.a731 = 3, this.maxAY = 10, this.a732 = 3, this.maxVY = 2, this.fly = !0) : (this.exitWater ? (this.a677 = G.CONFIG.playerExitWaterGravity, this.addAY = G.CONFIG.playerExitWaterAddAY, this.a731 = G.CONFIG.playerExitWaterMaxAX, this.maxAY = G.CONFIG.playerExitWaterMaxAY, this.a732 = G.CONFIG.playerExitWaterMaxAZ, this.maxVY = G.CONFIG.playerExitWaterMaxVY) : (this.a677 = G.CONFIG.a157, this.addAY = G.CONFIG.a158, this.a731 = G.CONFIG.a159, this.maxAY = G.CONFIG.a160, this.a732 = G.CONFIG.a161, this.maxVY = G.CONFIG.a162), this.fly = !1), G.Keybinds.moveUpward.a730 ? this.footInLadder ? (this.inLadder = !0, this.jumpStartTime = 0) : this.fly || 0 == this.jumpStartTime || GAME.time - this.jumpStartTime < 250 ? 0 == this.jumpStartTime ? (this.aY = 0, this.vY = 0, this.jumpStartTime = GAME.time, this.jump = !0) : this.position.y < this.a678.y || G.isBlockSolid(this.vHead1) ? (this.aY = 0, this.vY = 0, this.jumpStartTime -= 999999, this.jump = !1) : this.jump = !0 : this.jump = !1 : this.jump = !1), this.a527(), this.a542.update(!0), null != this.a544 && this.a544.update(!0), null != this.scopeAnimations && !GAME.matchEnded && GAME.pointerLockEnabled && this.scopeAnimations.update(!0), null != this.ammoAnimations && this.ammoAnimations.update(!0), G.a528 && !this.dead) {
            var o = Date.now();
            o - this.a521 > 50 && (this.a175.time = parseFloat(("" + o / 1e3).slice(4)), this.a175.x = this.camera.position.x, this.a175.y = this.camera.position.y, this.a175.z = this.camera.position.z, this.a175.a751 = this.a751, null != this.camera && (this.camera.rotation.order = "YXZ", this.a175.a748 = this.camera.rotation.y, this.a175.a749 = this.camera.rotation.x), G.socket.send(this.a175.a614()), this.a521 = o)
        }
        this.controls.a751 ? this.a751 || (this.a751 = !0) : this.a751 && (this.a751 = !1)
    },
    reseta806: function() {
        this.items = [];
        for (var t = 0; t < this.a518; t++) this.items[t] = -1;
        this.items[0] = {
            a474Id: "arm",
            total: 1,
            a733: -1
        }
    },
    a76: function(t) {
        return "air" != t && "water" != t && "flowing_water" != t && "tallgrass" != t && "yellow_flower" != t && "red_flower" != t && "deadbush" != t && "red_mushroom" != t && "brown_mushroom" != t && "wheat" != t && "ladder" != t && "pumpkin_stem" != t && "melon_stem" != t && "vinea" != t && "double_plant" != t && "lava" != t && "flowing_lava" != t
    },
    a478: function(t) {
        this.a649 = t
    },
    a536: function(t) {
        this.a746 = t
    },
    a537: function(t) {
        this.a746 = t
    },
    a539: function() {
        this.dead = !0, this.reseta806(), this.a542.disable(), this.a603.visible = !1, void 0 !== this.a651 && this.a544.disable(), this.controls.unlock(), GAME.updateZoom(1)
    },
    move: function(t, e, i) {
        this.position = new THREE.Vector3(t, e, i)
    },
    respawn: function() {
        var t = new a192;
        G.socket.send(t.a614())
    },
    respawned: function(t, e, i) {
        this.dead = !1, this.a746 = 100, GAME.scene.add(GAME.camera), GAME.camera.position.set(0, 0, 0), this.controls.moveCameraTo(new THREE.Vector3(t, e, i)), this.position.set(t, e, i), this.a542.enable(), this.a603.visible = !0, void 0 !== this.a651 && this.a544.enable();
        for (var o = 0; o < this.checkSpawnChunks.length; o++) this.preventStuck(this.checkSpawnChunks[o]);
        this.checkSpawnChunks = []
    },
    a445Id: function(t) {
        for (var e = 0; e < this.items.length; e++)
            if (-1 != this.items[e] && this.items[e].a474Id == t) {
                this.a445(e);
                break
            }
    },
    useda809: function(t) {
        var e = new CMDUseda809;
        e.a726d = t, G.socket.send(e.a614())
    },
    a445: function(t) {
        if (-1 != this.items[t]) {
            var e = new a117;
            e.name = this.items[t].a474Id, G.socket.send(e.a614()), this.a105 = !0, this.a105TimeOut = 280, this.a105TimeIn = 240, this.a105Id = this.items[t].a474Id
        }
    },
    geta809IShortcut: function(t) {
        return t + 1
    },
    geta809Shortcut: function(t) {
        return this.items[this.geta809IShortcut(t)]
    },
    a445Shortcut: function(t) {
        this.a445(this.geta809IShortcut(t))
    },
    a446: function(t) {
        this.items[t] = -1
    },
    a447: function(t, e) {
        var i = this.items[t];
        this.items[t] = this.items[e], this.items[e] = i
    },
    geta809Total: function(t) {
        for (var e = 0; e < this.items.length; e++)
            if (-1 != this.items[e] && G.a805[this.items[e].a474Id].name == t) return this.items[e].total
    },
    updatea809Total: function(t, e) {
        for (var i = 0; i < this.items.length; i++) {
            if (-1 != this.items[i])
                if (this.a651s[this.items[i].a474Id].name == t) return this.items[i].total += e, void this.updateWeaponClip(this.items[i].a474Id, this.items[i].total)
        }
    },
    a458s: function(t, e) {
        for (var i = 0; i < t.length; i++) this.a458(t[i], e[i])
    },
    a458: function(t, e) {
        if (G.a805[t]) {
            for (var i = 0; i < this.items.length; i++)
                if (this.items[i].a474Id == t) return this.items[i].total += e, void this.updateWeaponClip(this.items[i].a474Id, this.items[i].total);
            for (i = 0; i < this.items.length; i++)
                if (-1 == this.items[i]) {
                    this.items[i] = {
                        a474Id: t,
                        total: e
                    }, this.updateWeaponClip(t, e), 1 == i && this.a445(1);
                    break
                }
        }
    },
    updateWeaponClip: function(t, e) {
        var i = this.a651s[t];
        if (i.clipSize) {
            var o = G.gunClip(e, i.clipSize);
            i.totalClips = o.totalClips, i.totalInClip = o.totalInClip
        }
    },
    a727: function(t, e) {
        if (e) {
            var i = new a117;
            i.name = t, G.socket.send(i.a614())
        }
        this.a605.children = [], this.a651 = this.a651s[t], null != this.a544 && this.a544.destroy(), null != this.scopeAnimations && this.scopeAnimations.destroy(), null != this.ammoAnimations && this.ammoAnimations.destroy(), this.a544 = new G.Animation(G.a805[t].a560, this.a605, this), this.scopeAnimations = new G.Animation(G.a805[t].scope_a759s, this.a605, this), this.ammoAnimations = new G.Animation(G.a805[t].ammo_a759s, this.a605, this)
    },
    a526: function() {
        this.a654 && G.Keybinds.use.a730 && this.a660.a457(this)
    },
    a527: function() {
        var t = this.a103;
        if (this.justTriggered = !1, GAME.pointerLockEnabled && !this.switchinga809 && !this.controls.ina866 && G.Keybinds.shoot.a730)
            if (this.a103 = !0, (!t || this.autoTrigger) && Date.now() - this.triggerTime > this.triggerCooldown) {
                this.triggerTime = Date.now(), this.justTriggered = !0;
                var e = new a225;
                G.socket.send(e.a614())
            } else this.justTriggered = !1;
        else if (this.a103 = !1, t) {
            e = new a227;
            G.socket.send(e.a614()), this.justTriggered = !1
        }
    },
    a612: function(t, e, i) {
        var o = new a188;
        o.id = t.ID, o.a645 = i, G.socket.send(o.a614())
    },
    a637: function(t, e, i) {
        this.a865.a637([this.posToOutsidePos(e)], [i])
    },
    a610: function(t, e) {
        this.a865.delChunka650(t.i, t.e, t.o, this.posToInsidePos(e))
    },
    posToInsidePos: function(t) {
        var e = new THREE.Vector3;
        return e.addVectors(t, this.direction.multiplyScalar(1)), e
    },
    posToOutsidePos: function(t) {
        var e = new THREE.Vector3;
        return e.addVectors(t, this.direction.multiplyScalar(-.03)), e
    },
    a609: function(t, e, i, o, n, s, r, a) {
        if (o || (o = this.a548()), n || (n = new THREE.Vector3), this.camera.getWorldDirection(n), s && n.add(s), this.a865.a701(this, t, o, n, i, !0), !1 !== e) {
            r || (r = o), a || (a = n);
            var h = new a199;
            h.a652Id = e, h.originX = r.x, h.originY = r.y, h.originZ = r.z, h.dirX = a.x, h.dirY = a.y, h.dirZ = a.z, G.socket.send(h.a614())
        }
    },
    a550: function() {
        this.a865.a540.a541(this.a651.a551)
    },
    a552: function() {},
    a553: function() {},
    a548: function() {
        var t = this.position.clone();
        return t.y += this.controls.a661, t
    },
    preventStuck: function(t, e) {
        var i = this.size.x - 0;
        this.stuckCheck1.set(this.position.x - i, this.position.y + 4, this.position.z - i), this.stuckCheck2.set(this.position.x + i, this.position.y + 4, this.position.z + i), this.stuckCheck3.set(this.position.x - i, this.position.y + 4, this.position.z + i), this.stuckCheck4.set(this.position.x + i, this.position.y + 4, this.position.z - i), this.stuckCheck5.set(this.position.x - i, this.position.y - 4, this.position.z - i), this.stuckCheck6.set(this.position.x + i, this.position.y - 4, this.position.z + i), this.stuckCheck7.set(this.position.x - i, this.position.y - 4, this.position.z + i), this.stuckCheck8.set(this.position.x + i, this.position.y - 4, this.position.z - i), this.stuckCheck9.set(this.position.x - i, this.position.y, this.position.z - i), this.stuckCheck10.set(this.position.x + i, this.position.y, this.position.z + i), this.stuckCheck11.set(this.position.x - i, this.position.y, this.position.z + i), this.stuckCheck12.set(this.position.x + i, this.position.y, this.position.z - i);
        var o = t.posToV(this.stuckCheck1),
            n = BLOCK_CONFIG[t.volume[o]];
        n && this.a76(n.name) && t.delV(o), o = t.posToV(this.stuckCheck2), (n = BLOCK_CONFIG[t.volume[o]]) && this.a76(n.name) && t.delV(o), o = t.posToV(this.stuckCheck3), (n = BLOCK_CONFIG[t.volume[o]]) && this.a76(n.name) && t.delV(o), o = t.posToV(this.stuckCheck4), (n = BLOCK_CONFIG[t.volume[o]]) && this.a76(n.name) && t.delV(o), o = t.posToV(this.stuckCheck5), (n = BLOCK_CONFIG[t.volume[o]]) && this.a76(n.name) && t.delV(o), o = t.posToV(this.stuckCheck6), (n = BLOCK_CONFIG[t.volume[o]]) && this.a76(n.name) && t.delV(o), o = t.posToV(this.stuckCheck7), (n = BLOCK_CONFIG[t.volume[o]]) && this.a76(n.name) && t.delV(o), o = t.posToV(this.stuckCheck8), (n = BLOCK_CONFIG[t.volume[o]]) && this.a76(n.name) && t.delV(o), o = t.posToV(this.stuckCheck9), (n = BLOCK_CONFIG[t.volume[o]]) && this.a76(n.name) && t.delV(o), o = t.posToV(this.stuckCheck10), (n = BLOCK_CONFIG[t.volume[o]]) && this.a76(n.name) && t.delV(o), o = t.posToV(this.stuckCheck11), (n = BLOCK_CONFIG[t.volume[o]]) && this.a76(n.name) && t.delV(o), o = t.posToV(this.stuckCheck12), (n = BLOCK_CONFIG[t.volume[o]]) && this.a76(n.name) && t.delV(o)
    },
    addEventQueue: function(t, e) {
        this.eventQueue.push({
            type: t,
            values: e
        })
    },
    removeEventQueue: function(t) {
        this.eventQueue.splice(t, 1)
    },
    onResize: function() {
        this.armCamera.aspect = window.innerWidth / window.innerHeight, this.armCamera.updateProjectionMatrix(), this.shootout_a759s && (this.redrawShootoutCanvas = !0), this.a651.scope_a759s && (this.redrawWeaponCanvas = !0), this.a651.ammo_a759s && (this.redrawAmmoCanvas = !0)
    }
}), G.a584 = function() {
    this.fontPath = ""
}, G.a584.prototype = {
    constructor: G.a584,
    load: function(t, e, i) {
        var o = this.fontPath + e;
        $("head").prepend(["<style type='text/css'>\n@font-face {", "font-family: '" + t + "';", "src: url('" + o + "') format('woff');", "font-weight: normal;\nfont-style: normal;\n}\n</style>"].join("\n"));
        var n = document.createElement("span");
        n.innerHTML = "giItT1WQy@!-/#", n.style.position = "absolute", n.style.left = "-10000px", n.style.top = "-10000px", n.style.fontSize = "300px", n.style.fontFamily = "sans-serif", n.style.fontVariant = "normal", n.style.fontStyle = "normal", n.style.fontWeight = "normal", n.style.letterSpacing = "0", document.body.appendChild(n);
        var s = n.offsetWidth;
        n.style.fontFamily = t;
        var r = setInterval((function() {
            n.offsetWidth != s && (n.parentNode.removeChild(n), clearInterval(r), i())
        }), 50)
    }
}, G.a585 = function(t) {
    this.audioContext = t, this.mtlLoader = new THREE.MTLLoader, this.objLoader = new THREE.OBJLoader, this.fontLoader = new G.a584, this.fontLoader.fontPath = "", this.zipPath = "a.zip", this.reset()
}, G.a585.prototype = {
    reset: function() {
        this.loaded = !1, this.assetsToLoad = 0, this.queue = [], G.assets = {}, G.assets[G.a836.Texture] = {}, G.assets[G.a836.Material] = {}, G.assets[G.a836.UI] = {}, G.assets[G.a836.Mesh] = {}, G.assets[G.a836.Sound] = {}
    },
    init: function() {
        for (var t in G.a836) {
            var e = G.Assets[G.a836[t]];
            for (var i in e) this.add(i, e[i].filename, G.a836[t])
        }
    },
    add: function(t, e, i) {
        this.queue.push({
            name: t,
            filename: e,
            type: i
        }), this.assetsToLoad++
    },
    loadZip: function() {
        var t = this,
            e = new XMLHttpRequest;
        e.open("GET", this.zipPath, !0), e.responseType = "arraybuffer", e.onreadystatechange = function(e) {
            4 == this.readyState && 200 == this.status && (t.zip = new JSZip(this.response), setTimeout((function() {
                t._load()
            }), 0))
        }, e.onprogress = function(e) {
            t.zipOnProgress(e)
        }, e.send()
    },
    _load: function() {
        var t, e = this;
        for (this.totalAssets = this.queue.length + 1, this.assetsToLoad++, this.fontLoader.load("hudFont", G.CustomFontFile, (function() {
                e.checkIfFullyLoaded()
            })); this.queue.length > 0;)
            if ((t = this.queue.pop()).name in G.assets[t.type]) this.assetsToLoad--;
            else switch (t.type) {
                case G.a836.Material:
                    this.loadMaterial(t.name, t.filename);
                    break;
                case G.a836.Texture:
                    this.loadTexture(t.name, t.filename);
                    break;
                case G.a836.UI:
                    this.loadUI(t.name, t.filename);
                    break;
                case G.a836.Mesh:
                    this.loadMesh(t.name, t.filename);
                    break;
                case G.a836.Sound:
                    this.loadSound(t.name, t.filename, G.a836.Sound)
            }
    },
    loadMaterial: function(t, e) {
        var i = e,
            o = this.zip.file(i).asText(),
            n = this.mtlLoader.parse(o);
        n.preload(), G.assets[G.a836.Material][t] = [];
        Object.keys(n.materials).forEach((function(e) {
            G.assets[G.a836.Material][t].push(n.materials[e])
        })), this.checkIfFullyLoaded()
    },
    loadTexture: function(t, e) {
        var i = e,
            o = this.getTextureFromZip(i);
        if (G.assets[G.a836.Texture][t] = o, o.magFilter = THREE.NearestFilter, o.minFilter = THREE.NearestMipmapLinearFilter, o.anisotropy = 1, G.Assets[G.a836.Texture][t].type === G.TextureTypes.NewMaterialBasic)(G.assets[G.a836.Material][t] = new THREE.MeshBasicMaterial({
            map: o
        })).needsUpdate = !0;
        else if (G.Assets[G.a836.Texture][t].type === G.TextureTypes.NewMaterialLambert) {
            (G.assets[G.a836.Material][t] = new THREE.MeshLambertMaterial({
                map: o
            })).needsUpdate = !0
        }
        this.checkIfFullyLoaded()
    },
    loadUI: function(t, e) {
        var i = e;
        G.assets[G.a836.UI][t] = this.getImageFromZip(i), this.checkIfFullyLoaded()
    },
    loadMesh: function(t, e) {
        var i = e,
            o = this.zip.file(i).asText();
        G.assets[G.a836.Mesh][t] = this.objLoader.parse(o).children[0], this.checkIfFullyLoaded()
    },
    loadSound: function(t, e, i) {
        var o = e;
        this.zip.file(o).asArrayBuffer();
        this.checkIfFullyLoaded()
    },
    getImageFromZip: function(t) {
        try {
            var e = this.zip.file(t).asArrayBuffer()
        } catch (e) {
            console.log("cannot load image from zip:" + t)
        }
        var i = new Blob([e], {
                type: "image/png"
            }),
            o = (window.URL || window.webkitURL).createObjectURL(i),
            n = new Image;
        return n.src = o, n
    },
    getTextureFromZip: function(t) {
        var e = this.getImageFromZip(t),
            i = new THREE.Texture(e);
        return i.needsUpdate = !0, i
    },
    zipOnProgress: function(t) {
        var e = t.loaded / t.total * 50;
        this.dispatchEvent({
            type: "progress",
            percentLoaded: e.toFixed(0)
        })
    },
    checkIfFullyLoaded: function() {
        this.assetsToLoad--;
        var t = 100 * (.5 + (this.totalAssets - this.assetsToLoad) / this.totalAssets * .5);
        this.dispatchEvent({
            type: "progress",
            percentLoaded: t.toFixed(0)
        }), 0 === this.assetsToLoad && (this.loaded = !0, this.dispatchEvent({
            type: "load",
            percentLoaded: 100,
            assets: G.assets
        }))
    }
}, Object.assign(G.a585.prototype, THREE.EventDispatcher.prototype), G.a586 = function(t, e, i) {
    this.renderer = t, this.scene = e, this.camera = i, this.a465 = 160, this.a699 = new THREE.Vector2(0, 0), this.a700 = new THREE.Vector2(25600, 25600), this.scene.add(i)
}, G.a586.prototype = {
    constructor: G.a586,
    getGrid: function() {
        for (var t = Math.ceil((this.a700.x - this.a699.x) / this.a465), e = Math.ceil((this.a700.y - this.a699.y) / this.a465), i = Array(e), o = 0; o < e; o++) {
            i[o] = Array(t);
            for (var n = 0; n < t; n++) {
                var s = new THREE.Vector2(n * this.a465, o * this.a465).add(this.a699),
                    r = new THREE.Vector2((n + 1) * this.a465, (o + 1) * this.a465).add(this.a699),
                    a = new THREE.Box2(s, r);
                i[o][n] = {
                    box2: a,
                    children: [],
                    x: n,
                    y: o
                }
            }
        }
        var h = new G.Grid(this.renderer, this.scene);
        return h.a698 = this.a465, h.cells = i, h.width = t, h.height = e, h.a699 = this.a699, h.a700 = this.a700, this.a114(h), h.init(), h
    },
    a114: function(t) {
        t.player = new G.a822er(SKINS[playerSkin], t, this.camera)
    }
}, G.a325 = function(t) {
    this.a865 = t, this.a277 = 100, this.a304 = this.a277 / 100, this.a305 = .005 * this.a304, this.a693 = [], this.pointMinX = 0, this.pointMaxX = 0, this.pointMinY = 0, this.pointMaxY = 0, this.pointMinZ = 0, this.pointMaxZ = 0, this.a699X = 0, this.a700X = 0, this.a699Z = 0, this.a700Z = 0, this.p = {
        a283: new THREE.Vector3,
        a284: new THREE.Vector3,
        a285: new THREE.Vector3,
        a286: new THREE.Vector3,
        a287: new THREE.Vector3,
        a288: new THREE.Vector3,
        normal: new THREE.Vector3,
        a289: !1,
        a290: 0,
        a291: new THREE.Vector3,
        a292: 0,
        a281: !1
    }, this.result = {
        a294: null,
        a108: !1,
        a109: !1
    }, this.v0 = new THREE.Vector3, this.v1 = new THREE.Vector3, this.v2 = new THREE.Vector3, this.aux = new THREE.Vector3, this.normal = new THREE.Vector3, this.a294 = new THREE.Vector3, this.a298 = new THREE.Vector3, this.a299 = new THREE.Vector3, this.a300 = new THREE.Vector3, this.a301 = new THREE.Vector3, this.a308 = null, this.a302 = new THREE.Vector3, this.a303 = new THREE.Vector3, this.a672 = null, this.velocity = new THREE.Vector3, this.position = new THREE.Vector3, this.aux2 = new THREE.Vector3, this.a310 = new THREE.Vector3, this.a311 = new THREE.Vector3, this.edge = new THREE.Vector3, this.a312 = new THREE.Vector3, this.t0 = null, this.t1 = null, this.a313 = !1, this.a3082 = null, this.a314 = null, this.a315 = null, this.a316 = null, this.t = null, this.temp = null, this.a = null, this.b = null, this.c = null, this.a317 = null, this.result2 = {}, this.a319 = null, this.a320 = null, this.a321 = null, this.a312LengthSquared = null, this.a323 = null, this.cp1 = new THREE.Vector3, this.cp2 = new THREE.Vector3, this.aux3 = new THREE.Vector3, this.aux4 = new THREE.Vector3
}, G.a325.prototype = {
    init: function() {},
    a71a668: function(t, e, i, o, n, s, r) {
        this.debug = r, e.x < i.x ? (this.pointMinX = e.x - t.x, this.pointMaxX = i.x + t.x) : (this.pointMinX = i.x - t.x, this.pointMaxX = e.x + t.x), e.y < i.y ? (this.pointMinY = e.y - t.y, this.pointMaxY = i.y + t.y) : (this.pointMinY = i.y - t.y, this.pointMaxY = e.y + t.y), e.z < i.z ? (this.pointMinZ = e.z - t.z, this.pointMaxZ = i.z + t.z) : (this.pointMinZ = i.z - t.z, this.pointMaxZ = e.z + t.z), this.a699X = G.a785.clamp(Math.floor(this.pointMinX / this.a865.a698), 0, this.a865.width - 1), this.a700X = G.a785.clamp(Math.floor(this.pointMaxX / this.a865.a698), 0, this.a865.height - 1), this.a699Z = G.a785.clamp(Math.floor(this.pointMinZ / this.a865.a698), 0, this.a865.width - 1), this.a700Z = G.a785.clamp(Math.floor(this.pointMaxZ / this.a865.a698), 0, this.a865.height - 1), this.a693 = [];
        for (var a = this.a699Z; a <= this.a700Z; a++)
            for (var h = this.a699X; h <= this.a700X; h++)
                for (var l = 0; l < this.a865.cells[a][h].children.length; l++)
                    if (this.a865.cells[a][h].children[l].intersectBox(this.pointMinX, this.pointMaxX, this.pointMinY, this.pointMaxY, this.pointMinZ, this.pointMaxZ))
                        if (o) {
                            for (var c = !1, u = 0; u < o.length; u++)
                                if (this.a865.cells[a][h].children[l] instanceof o[u]) {
                                    c = !0;
                                    break
                                } c || this.a693.push(this.a865.cells[a][h].children[l])
                        } else this.a693.push(this.a865.cells[a][h].children[l]);
        return this.debug && console.log("total a693|" + this.a693.length), this.a293(e, i, t, this.a693, n, s)
    },
    a293: function(t, e, i, o, n) {
        this.p.a283.copy(i), this.p.a284.copy(t), this.p.a285.subVectors(e, t), this.p.a289 = !1, this.p.a290 = 0, this.p.a292 = 0, this.p.a281 = n, this.p.a825 = !1, this.p.a287.copy(this.p.a285).divide(this.p.a283), this.p.a286.copy(this.p.a284).divide(this.p.a283), this.p.a292 = 0;
        var s = this.collidea691s(this.p, o).a294;
        return s.multiply(this.p.a283), this.p.a296 && (s.y = this.p.a297), {
            pos: s,
            a289: this.p.a289,
            a693: o,
            a825: this.p.a825,
            normal: this.p.normal
        }
    },
    collidea691s: function(t, e) {
        if (t.a292 > 20) return this.result.a294 = t.a286, this.result;
        t.a288.copy(t.a287).normalize(), t.a289 = !1, t.a290 = 0;
        for (var i = 0; i < e.length; i++)
            if (e[i].triangles)
                for (var o = 0; o < e[i].triangles.length; o += 9) null != e[i].triangles[o] && null != e[i].triangles[o + 1] && null != e[i].triangles[o + 2] && (GAME.a865.a306++, this.v0.x = e[i].triangles[o], this.v0.y = e[i].triangles[o + 1], this.v0.z = e[i].triangles[o + 2], this.v0.divide(t.a283), this.v1.x = e[i].triangles[o + 3], this.v1.y = e[i].triangles[o + 4], this.v1.z = e[i].triangles[o + 5], this.v1.divide(t.a283), this.v2.x = e[i].triangles[o + 6], this.v2.y = e[i].triangles[o + 7], this.v2.z = e[i].triangles[o + 8], this.v2.divide(t.a283), this.aux.subVectors(this.v2, this.v0), this.normal.copy(this.v1).sub(this.v0).cross(this.aux).normalize(), this.a307(e[i], t, this.v0, this.v1, this.v2, this.normal));
            else {
                for (var n = 0, s = 0, r = 0; r < e[i].subBoundingBox.length; r++)
                    if (e[i].intersectSubBox(r, this.pointMinX, this.pointMaxX, this.pointMinY, this.pointMaxY, this.pointMinZ, this.pointMaxZ)) {
                        n++, s += e[i].subTriangles[r].length;
                        for (o = 0; o < e[i].subTriangles[r].length; o += 9) null != e[i].subTriangles[r][o] && null != e[i].subTriangles[r][o + 1] && null != e[i].subTriangles[r][o + 2] && (this.v0.x = e[i].subTriangles[r][o], this.v0.y = e[i].subTriangles[r][o + 1], this.v0.z = e[i].subTriangles[r][o + 2], this.v0.divide(t.a283), this.v1.x = e[i].subTriangles[r][o + 3], this.v1.y = e[i].subTriangles[r][o + 4], this.v1.z = e[i].subTriangles[r][o + 5], this.v1.divide(t.a283), this.v2.x = e[i].subTriangles[r][o + 6], this.v2.y = e[i].subTriangles[r][o + 7], this.v2.z = e[i].subTriangles[r][o + 8], this.v2.divide(t.a283), this.aux.subVectors(this.v2, this.v0), this.normal.copy(this.v1).sub(this.v0).cross(this.aux).normalize(), this.a307(e[i], t, this.v0, this.v1, this.v2, this.normal))
                    } this.debug && console.log("a693|" + e.length + "|box|" + n + "|total triangles:" + s)
            } return t.a289 ? (this.a298.copy(t.a286).add(t.a287), this.a299.copy(t.a286), t.a290 >= this.a305 && (this.aux.copy(t.a287).normalize(), this.aux.multiplyScalar(t.a290 - this.a305), this.a299.copy(t.a286).add(this.aux), this.aux.normalize().multiplyScalar(this.a305), t.a291.sub(this.aux)), t.a281 ? (t.a286.copy(this.a299), this.result.a294 = t.a286, this.result) : (this.a300.copy(t.a291), this.a301.copy(this.a299).sub(t.a291).normalize(), this.a308 = -(this.a301.x * this.a300.x + this.a301.y * this.a300.y + this.a301.z * this.a300.z), this.a309 = this.a301.dot(this.a298) + this.a308, this.aux.copy(this.a301).multiplyScalar(this.a309), this.a302.copy(this.a298).sub(this.aux), this.a303.copy(this.a302).sub(t.a291), this.a303.length() < this.a305 ? (this.result.a294 = this.a299, this.result) : (t.a292++, t.a286.copy(this.a299), t.a287.copy(this.a303), this.collidea691s(t, e)))) : (this.a294.copy(t.a286).add(t.a287), this.result.a294 = this.a294, this.result)
    },
    a307: function(t, e, i, o, n, s) {
        if (this.a672 = s.dot(e.a288), this.a672 <= 0) {
            if (this.velocity.copy(e.a287), this.position.copy(e.a286), this.a313 = !1, this.a3082 = -(s.x * i.x + s.y * i.y + s.z * i.z), this.a314 = this.position.dot(s) + this.a3082, this.a315 = s.dot(this.velocity), 0 === this.a315) {
                if (Math.abs(this.a314) >= 1) return !1;
                this.a313 = !0
            } else {
                if (this.t0 = (1 - this.a314) / this.a315, this.t1 = (-1 - this.a314) / this.a315, this.t0 > this.t1 && (this.temp = this.t0, this.t0 = this.t1, this.t1 = this.temp), this.t0 > 1 || this.t1 < 0) return !1;
                this.t0 < 0 && (this.t0 = 0), this.t1 > 1 && (this.t1 = 1)
            }
            if (this.a316 = !1, this.t = 1, this.a313 || (this.aux2.copy(this.velocity).multiplyScalar(this.t0), this.a310.copy(this.position).add(this.aux2).sub(s), this.a70(this.a310, i, o, n) && (this.a316 = !0, this.t = this.t0, this.a311.copy(this.a310))), this.a316 || (this.a317 = this.velocity.lengthSq(), this.a = this.a317, this.aux2.copy(this.position).sub(i), this.b = 2 * this.velocity.dot(this.aux2), this.aux2.copy(i).sub(this.position), this.c = this.aux2.length(), this.c = this.c * this.c - 1, this.a318(this.a, this.b, this.c, this.t, this.result2) && (this.t = this.result2.root, this.a316 = !0, this.a311.copy(i)), this.aux2.copy(this.position).sub(o), this.b = 2 * this.velocity.dot(this.aux2), this.aux2.copy(o).sub(this.position), this.c = this.aux2.length(), this.c = this.c * this.c - 1, this.a318(this.a, this.b, this.c, this.t, this.result2) && (this.t = this.result2.root, this.a316 = !0, this.a311.copy(o)), this.aux2.copy(this.position).sub(n), this.b = 2 * this.velocity.dot(this.aux2), this.aux2.copy(n).sub(this.position), this.c = this.aux2.length(), this.c = this.c * this.c - 1, this.a318(this.a, this.b, this.c, this.t, this.result2) && (this.t = this.result2.root, this.a316 = !0, this.a311.copy(n)), this.edge.copy(o).sub(i), this.a312.copy(i).sub(this.position), this.a319 = this.edge.lengthSq(), this.a320 = this.edge.dot(this.velocity), this.a321 = this.edge.dot(this.a312), this.a312LengthSquared = this.a312.lengthSq(), this.a = this.a319 * -this.a317 + this.a320 * this.a320, this.b = 2 * this.a319 * this.velocity.dot(this.a312) - 2 * this.a320 * this.a321, this.c = this.a319 * (1 - this.a312LengthSquared) + this.a321 * this.a321, this.a318(this.a, this.b, this.c, this.t, this.result2) && (this.f = (this.a320 * this.result2.root - this.a321) / this.a319, this.f >= 0 && this.f <= 1 && (this.t = this.result2.root, this.a316 = !0, this.edge.multiplyScalar(this.f), this.a311.copy(i).add(this.edge))), this.edge.copy(n).sub(o), this.a312.copy(o).sub(this.position), this.a319 = this.edge.lengthSq(), this.a320 = this.edge.dot(this.velocity), this.a321 = this.edge.dot(this.a312), this.a312LengthSquared = this.a312.lengthSq(), this.a = this.a319 * -this.a317 + this.a320 * this.a320, this.b = 2 * this.a319 * this.velocity.dot(this.a312) - 2 * this.a320 * this.a321, this.c = this.a319 * (1 - this.a312LengthSquared) + this.a321 * this.a321, this.a318(this.a, this.b, this.c, this.t, this.result2) && (this.f = (this.a320 * this.result2.root - this.a321) / this.a319, this.f >= 0 && this.f <= 1 && (this.t = this.result2.root, this.a316 = !0, this.edge.multiplyScalar(this.f), this.a311.copy(o).add(this.edge))), this.edge.copy(i).sub(n), this.a312.copy(n).sub(this.position), this.a319 = this.edge.lengthSq(), this.a320 = this.edge.dot(this.velocity), this.a321 = this.edge.dot(this.a312), this.a312LengthSquared = this.a312.lengthSq(), this.a = this.a319 * -this.a317 + this.a320 * this.a320, this.b = 2 * this.a319 * this.velocity.dot(this.a312) - 2 * this.a320 * this.a321, this.c = this.a319 * (1 - this.a312LengthSquared) + this.a321 * this.a321, this.a318(this.a, this.b, this.c, this.t, this.result2) && (this.f = (this.a320 * this.result2.root - this.a321) / this.a319, this.f >= 0 && this.f <= 1 && (this.t = this.result2.root, this.a316 = !0, this.edge.multiplyScalar(this.f), this.a311.copy(n).add(this.edge)))), this.a316 && (this.a323 = this.t * this.velocity.length(), !e.a289 || this.a323 < e.a290)) return e.a290 = this.a323, e.a291.copy(this.a311), e.a289 = !0, e.normal.copy(s), e.a825 = t, !0
        }
        return !1
    },
    a70: function(t, e, i, o) {
        if (this.aux3.copy(o).sub(i), this.aux4.copy(t).sub(i), this.cp1.crossVectors(this.aux3, this.aux4), this.aux3.copy(o).sub(i), this.aux4.copy(e).sub(i), this.cp2.crossVectors(this.aux3, this.aux4), this.cp1.dot(this.cp2) >= 0 && (this.aux3.copy(o).sub(e), this.aux4.copy(t).sub(e), this.cp1.crossVectors(this.aux3, this.aux4), this.aux3.copy(o).sub(e), this.aux4.copy(i).sub(e), this.cp2.crossVectors(this.aux3, this.aux4), this.cp1.dot(this.cp2) >= 0 && (this.aux3.copy(i).sub(e), this.aux4.copy(t).sub(e), this.cp1.crossVectors(this.aux3, this.aux4), this.aux3.copy(i).sub(e), this.aux4.copy(o).sub(e), this.cp2.crossVectors(this.aux3, this.aux4), this.cp1.dot(this.cp2) >= 0))) return !0
    },
    a318: function(t, e, i, o, n) {
        return this.determinant = e * e - 4 * t * i, !(this.determinant < 0) && (this.a671 = Math.sqrt(this.determinant), this.r1 = (-e - this.a671) / (2 * t), this.r2 = (-e + this.a671) / (2 * t), this.r1 > this.r2 && (this.temp2 = this.r2, this.r2 = this.r1, this.r1 = this.temp2), this.r1 > 0 && this.r1 < o ? (n.root = this.r1, !0) : this.r2 > 0 && this.r2 < o && (n.root = this.r2, !0))
    }
}, G.a522 = function(t, e) {
    this.camera = t, this.player = e, this.eye = new THREE.Vector3, this.look = new THREE.Vector3(0, 0, -10).add(this.eye), this.a554 = this.look.clone(), this.mouseInvertY = G.a813.mouseInvertY, this.forwardLookVector = new THREE.Vector3(0, 0, -1), this.forwardMoveVector = new THREE.Vector3(0, 0, -1), this.rightLookVector = new THREE.Vector3(1, 0, 0), this.rightMoveVector = new THREE.Vector3(1, 0, 0), this.upLookVector = new THREE.Vector3(0, 1, 0), this.upMoveVector = new THREE.Vector3(0, 1, 0), this.xAngle = 270, this.yAngle = 90, this.viewOffsetY = 0, this.a661 = 3.5, this.locked = !0, this.ina866 = !1, this.a91 = 0
}, G.a522.prototype = {
    constructor: G.a522,
    init: function() {
        var t = this;
        if (!("pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document)) throw "Pointer Lock API not supported";
        $(document).on("pointerlockchange.fpsControls", (function(e) {
            t.onPointerLockChange(e)
        })), $(document).on("mozpointerlockchange.fpsControls", (function(e) {
            t.onPointerLockChange(e)
        })), $(document).on("webkitpointerlockchange.fpsControls", (function(e) {
            t.onPointerLockChange(e)
        })), $(document).on("pointerlockerror.fpsControls", (function(e) {
            t.onPointerLockError(e)
        })), $(document).on("mozpointerlockerror.fpsControls", (function(e) {
            t.onPointerLockError(e)
        })), $(document).on("webkitpointerlockerror.fpsControls", (function(e) {
            t.onPointerLockError(e)
        })), this.canvas = $("#game-canvas")[0], this.debugCanvas = $("#debug-ui-canvas")[0], this.setLookMoveAngles(this.xAngle, this.yAngle)
    },
    update: function() {},
    lock: function() {
        GAME.pointerLockEnabled || (this.canvas.requestPointerLock = this.canvas.requestPointerLock || this.canvas.mozRequestPointerLock || this.canvas.webkitRequestPointerLock, this.canvas.requestPointerLock()), wwHideDedAd(), wwHideVideoAd()
    },
    unlock: function() {
        GAME.pointerLockEnabled && (document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock, document.exitPointerLock(), this.calledUnlock = !0)
    },
    onPointerLockChange: function(t) {
        var e = this;
        document.pointerLockElement === this.canvas || document.mozPointerLockElement === this.canvas || document.webkitPointerLockElement === this.canvas ? (GAME.pointerLockEnabled = !0, $(document).off("mousedown.pointerLock"), $(document).on("mousemove.fpsControls", (function(t) {
            e.onMouseMove(t.originalEvent)
        })), e.ina866 = !1) : (GAME.pointerLockEnabled = !1, $(document).off("mousemove.fpsControls"), e.calledUnlock ? e.calledUnlock = !1 : ($(document).off("mousedown.pointerLock"), GAME.opena793()))
    },
    onPointerLockError: function(t) {
        console.log(t)
    },
    onMouseMove: function(t) {
        if (this.locked) {
            var e = t.movementX || t.mozMovementX || t.webkitMovementX || 0,
                i = t.movementY || t.mozMovementY || t.webkitMovementY || 0,
                o = this.mouseInvertY ? -1 : 1;
            GAME.gunSensitivity || (GAME.gunSensitivity = 1), this.setLookMoveAngles(this.xAngle + e * G.a813.mouseValue * GAME.gunSensitivity, this.yAngle + o * i * G.a813.mouseValue * GAME.gunSensitivity)
        }
    },
    setViewOffsetY: function(t) {
        this.viewOffsetY = t
    },
    moveCameraTo: function(t) {
        this.eye.copy(t), this.updateCameraPosRot()
    },
    updateCameraPosRot: function() {
        this.camera.position.copy(this.eye), this.camera.position.y += this.viewOffsetY + this.a661, this.a554.addVectors(this.eye, this.forwardLookVector), this.look.addVectors(this.camera.position, this.forwardLookVector), this.camera.lookAt(this.look), this.camera.rotation.x += this.a91
    },
    setLookMoveAngles: function() {
        var t = new THREE.Vector3,
            e = new THREE.Vector3;
        return function(i, o) {
            this.xAngle = i, this.yAngle = G.a785.clamp(o, .01, 179.99);
            i = Math.sin(Math.PI / 180 * this.yAngle) * Math.cos(Math.PI / 180 * this.xAngle), o = Math.cos(Math.PI / 180 * this.yAngle);
            var n = Math.sin(Math.PI / 180 * this.yAngle) * Math.sin(Math.PI / 180 * this.xAngle);
            e.set(i, o, n), i = Math.sin(Math.PI / 180 * this.yAngle) * Math.cos(Math.PI / 180 * (this.xAngle + 90)), n = Math.sin(Math.PI / 180 * this.yAngle) * Math.sin(Math.PI / 180 * (this.xAngle + 90)), t.set(i, 0, n), this.forwardLookVector.copy(e), this.fly ? this.forwardMoveVector.copy(e).normalize() : this.forwardMoveVector.set(e.x, 0, e.z).normalize(), this.rightLookVector.copy(t).normalize(), this.rightMoveVector.copy(t).normalize(), this.updateCameraPosRot()
        }
    }()
}, Object.assign(G.a522.prototype, THREE.EventDispatcher.prototype), G.a590 = function(t, e, i) {
    this.scene = t, this.renderer = e, this.camera = i
}, G.a590.prototype = {
    init: function() {},
    setGrid: function(t) {
        this.a865 = t, this.scene = t.scene
    },
    draw: function() {
        this.renderer.autoClear = !1, this.renderer.clear(!1, !0, !1), this.renderer.render(this.scene, this.camera), this.renderer.clear(!1, !0, !1), this.renderer.render(this.a865.player.scene, this.a865.player.armCamera)
    },
    onResize: function() {
        this.renderer.setSize(window.innerWidth, window.innerHeight)
    },
    reset: function() {
        this.a865 = void 0, this.scene = void 0
    }
}, G.Grid = function(t, e) {
    this.renderer = t, this.scene = e, this.skybox = null, this.waterSkybox = null, this.a358 = null, this.a363 = 160, this.a364 = 32, this.a365 = 5, this.a366 = this.a364 * this.a365, this.a367 = this.a366 / 2, this.a368 = Array(9999), this.a369 = Array(9999), this.hideChunkBuffer = Array(9999), this.a703ChunkBufferI = [], this.a703ChunkBufferE = [], this.a703ChunkBufferO = [], this.a703ChunkBufferType = [], this.a368I = 0, this.a368IEnd = 0, this.a369I = 0, this.a369IEnd = 0, this.hideChunkBufferI = 0, this.hideChunkBufferIEnd = 0, this.a643s = Array(this.a363);
    for (var i = 0; i < this.a363; i++) {
        this.a643s[i] = Array(this.a363);
        for (var o = 0; o < this.a363; o++) this.a643s[i][o] = Array(this.a363)
    }
    this.a369E = 0, this.needa818Chunks = [], this.a642 = {}, this.creativeAdda650 = [], this.creativeDela650 = [], this.box2 = new THREE.Box2, this.a699 = new THREE.Vector2, this.a700 = new THREE.Vector2
}, G.Grid.prototype = {
    constructor: G.Grid,
    init: function() {
        this.a375 = new G.a376(this), this.a375.init(), this.a377 = new G.a325(this), this.a377.init()
    },
    addChunkFirstBuffer: function(t, e, i, o, n, s, r, a, h, l, c, u, d, p, f, g, m, y, v, w, O, E) {
        for (var G = this.a368I; G < this.a368IEnd; G++)
            if (this.a368[G] && this.a368[G].i && this.a368[G].i == t && this.a368[G].e == e && this.a368[G].o == i) {
                this.a368[G] = !1;
                break
            } this.a368[this.a368IEnd] = {
            i: t,
            e: e,
            o: i,
            pos: n,
            buildP: s,
            shapeVertices: r,
            collisionVertices: a,
            volume: h,
            solidIndices: l,
            solidVertices: c,
            solidShading: u,
            solidUvBases: d,
            solidUvProgresses: p,
            transparentIndices: f,
            transparentVertices: g,
            transparentUvBases: m,
            transparentUvProgresses: y,
            pointMinX: v,
            pointMinZ: w,
            pointMaxX: O,
            pointMaxZ: E
        }, this.a368IEnd++
    },
    a382: function(t, e, i, o, n, s, r, a, h, l, c, u, d, p, f, g, m, y, v, w, O, E) {
        this.a369[this.a369IEnd] = {
            i: t,
            e: e,
            o: i,
            pos: n,
            buildP: s,
            shapeVertices: r,
            collisionVertices: a,
            volume: h,
            solidIndices: l,
            solidVertices: c,
            solidShading: u,
            solidUvBases: d,
            solidUvProgresses: p,
            transparentIndices: f,
            transparentVertices: g,
            transparentUvBases: m,
            transparentUvProgresses: y,
            pointMinX: v,
            pointMinZ: w,
            pointMaxX: O,
            pointMaxZ: E
        }, this.a369IEnd++
    },
    addHideChunkBuffer: function(t, e, i) {
        this.hideChunkBuffer[this.hideChunkBufferIEnd] = {
            i: t,
            e: e,
            o: i
        }, this.hideChunkBufferIEnd++
    },
    rea636FirstBuffer: function() {
        this.a368I = this.a368IEnd = 0
    },
    rea636Buffer: function() {
        this.a369I = this.a369IEnd = 0
    },
    resetHideChunkBuffer: function() {
        this.hideChunkBufferI = this.hideChunkBufferIEnd = 0
    },
    getChunkFromPos: function(t) {
        return [Math.floor(t.x / this.a366), Math.floor(t.y / this.a366), Math.floor(t.z / this.a366)]
    },
    a637: function(t, e) {
        for (var i = [], o = [], n = [], s = [], r = 0; r < t.length; r++) {
            var a = this.getChunkFromPos(t[r]),
                h = this.a643s[a[0]][a[1]][a[2]];
            h || (h = this.a643s[a[0]][a[1]][a[2]] = new G.a650(this, a[0], a[1], a[2])), i.push(a[0]), o.push(a[1]), n.push(a[2]), s.push(h.posToV(t[r]))
        }
        var l = new a234;
        if (l.i = i, l.e = o, l.o = n, l.v = s, l.u = e, G.socket.send(l.a614()), G.CONFIG.creative) {
            for (var c = 0; c < i.length; c++) {
                var u = !1;
                for (r = 0; r < this.creativeDela650.length; r++)
                    if (this.creativeDela650[r] == "0," + i[c] + "," + o[c] + "," + n[c] + "," + s[c]) {
                        this.creativeDela650.splice(r, 1), u = !0;
                        break
                    } u || this.creativeAdda650.push(e[c] + "," + i[c] + "," + o[c] + "," + n[c] + "," + s[c])
            }
            console.log(this.creativeAdda650.join("|"))
        }
    },
    a610: function(t, e) {
        for (var i = [], o = [], n = [], s = [], r = 0; r < t.length; r++) {
            var a = this.getChunkFromPos(t[r]),
                h = this.a643s[a[0]][a[1]][a[2]];
            i.push(h.i), o.push(h.e), n.push(h.o), s.push(h.posToV(t[r]))
        }
        var l = new a171;
        if (l.i = i, l.e = o, l.o = n, l.v = s, l.a645 = e, G.socket.send(l.a614()), G.CONFIG.creative)
            for (var c = 0; c < i.length; c++) {
                var u = !1;
                for (r = 0; r < this.creativeAdda650.length; r++)
                    if (this.creativeAdda650[r].includes(i[c] + "," + o[c] + "," + n[c] + "," + s[c])) {
                        this.creativeAdda650.splice(r, 1), u = !0;
                        break
                    } u || (this.creativeDela650.push(i[c] + "," + o[c] + "," + n[c] + "," + s[c]), console.log("0," + this.creativeDela650.join("|0,")))
            }
    },
    update: function() {
        this.a375.update(), this.a306 = 0;
        var t = !1;
        for (var e in this.a642) {
            this.a642[e].update()
        }
        var i = !1;
        if (this.a369E % 1 == 0)
            for (var o = this.a368I; o < this.a368IEnd; o++)
                if (this.a368[o]) {
                    var n = this.a368[o];
                    if (n) {
                        t = n, i = !0, this.a368[o] = !1, this.a368I = o + 1, this.a368I == this.a368IEnd && (this.a368I = this.a368IEnd = 0);
                        break
                    }
                } if (!t && this.a369E % 1 == 0)
            for (o = this.a369I; o < this.a369IEnd; o++)
                if (this.a369[o]) {
                    var s = this.a369[o];
                    if (s) {
                        t = s, this.a369[o] = !1, this.a369I = o + 1, this.a369I == this.a369IEnd && this.rea636Buffer();
                        break
                    }
                } if (t) {
            var r, a = this.a643s[t.i][t.e][t.o];
            if (i) r = a && a.volume ? a.volume : new Uint8Array(32768);
            if (a) a.updatea650sFromVertices(t.shapeVertices, t.collisionVertices, t.volume, t.solidIndices, t.solidVertices, t.solidShading, t.solidUvBases, t.solidUvProgresses, t.transparentIndices, t.transparentVertices, t.transparentUvBases, t.transparentUvProgresses, t.pointMinX, t.pointMinZ, t.pointMaxX, t.pointMaxZ);
            else {
                var h = new G.a650(this, t.i, t.e, t.o, t.pos, t.buildP, 0);
                a = this.a643s[t.i][t.e][t.o] = h, h.updatea650sFromVertices(t.shapeVertices, t.collisionVertices, t.volume, t.solidIndices, t.solidVertices, t.solidShading, t.solidUvBases, t.solidUvProgresses, t.transparentIndices, t.transparentVertices, t.transparentUvBases, t.transparentUvProgresses, t.pointMinX, t.pointMinZ, t.pointMaxX, t.pointMaxZ)
            }

            if (i) {
                var l, c, u, d, p = this.player.position.x - (this.player.size.x - .2),
                    f = this.player.position.x + (this.player.size.x - .2),
                    g = this.player.position.y - (this.player.size.y - .9),
                    m = this.player.position.y + (this.player.size.y - .9),
                    y = this.player.position.z - (this.player.size.z - .2),
                    v = this.player.position.z + (this.player.size.z - .2);
                for (o = 0; o < r.length; o++)
                    if (0 == r[o] && a.volume[o] > 0) {
                        var w = a33(o);
                        l = a.buildP.x + 5 * w[0], c = a.buildP.x + 5 * w[0] + 5, bMinY = a.buildP.y + 5 * w[1], u = a.buildP.y + 5 * w[1] + 5, bMinZ = a.buildP.z + 5 * w[2], d = a.buildP.z + 5 * w[2] + 5, G.intersectAABB(p, f, g, m, y, v, l, c, bMinY, u, bMinZ, d) && a.delV(o)
                    }
            }
        } else if (this.a369E % 1 == 0)
            for (o = this.hideChunkBufferI; o < this.hideChunkBufferIEnd; o++)
                if (this.hideChunkBuffer[o]) {
                    this.a643s[this.hideChunkBuffer[o].i][this.hideChunkBuffer[o].e][this.hideChunkBuffer[o].o] && (this.a643s[this.hideChunkBuffer[o].i][this.hideChunkBuffer[o].e][this.hideChunkBuffer[o].o].removeFromScene(), this.a382ed(this.hideChunkBuffer[o].i, this.hideChunkBuffer[o].e, this.hideChunkBuffer[o].o, 0)), this.hideChunkBufferI[o] = !1, this.hideChunkBufferI = o + 1, this.hideChunkBufferI == this.hideChunkBufferIEnd && (this.hideChunkBufferI = this.hideChunkBufferIEnd = 0);
                    break
                } this.a369E++
    },
    a382ed: function(t, e, i, o) {
        this.a703ChunkBufferI.push(t), this.a703ChunkBufferE.push(e), this.a703ChunkBufferO.push(i), this.a703ChunkBufferType.push(o)
    },
    sendChunkBuffered: function() {
        GAME.a369ed.i = this.a703ChunkBufferI, GAME.a369ed.e = this.a703ChunkBufferE, GAME.a369ed.o = this.a703ChunkBufferO, GAME.a369ed.type = this.a703ChunkBufferType, G.socket.send(GAME.a369ed.a614()), this.a703ChunkBufferI = [], this.a703ChunkBufferE = [], this.a703ChunkBufferO = [], this.a703ChunkBufferType = []
    },
    a701: function(t, e, i, o, n, s) {
        new G.a705(this, t, e, i, o, n, s)
    },
    a115: function(t, e, i, o, n) {
        for (var s = 0; s < o; s++) {
            var r = this.a375.a708(n, n, n, i, G.a387.a695, t);
            this.a375.a388(r, e), r.mesh.position.copy(t)
        }
    },
    a355: function(t, e, i, o) {
        for (var n = 0; n < i; n++) {
            this.a375.a708(o, o, o, e, G.a387.a694, t).mesh.position.copy(t)
        }
    },
    a336: function(t, e, i) {
        var o = {};
        if (void 0 !== e && e.length > 0)
            for (var n = 0; n < t.length; n++)
                for (var s = t[n], r = 0; r < s.children.length; r++)
                    for (var a = s.children[r], h = 0; h < e.length; h++) a instanceof e[h] && (o[a.id] = a);
        else
            for (n = 0; n < t.length; n++)
                for (s = t[n], r = 0; r < s.children.length; r++) {
                    a = s.children[r];
                    o[a.id] = a
                }
        Object.keys(o).forEach((function(t) {
            i(o[t])
        }))
    },
    a380: function(t, e) {
        var i = {};
        if (void 0 !== t && t.length > 0)
            for (var o = 0; o < this.height; o++)
                for (var n = 0; n < this.width; n++)
                    for (var s = this.cells[o][n], r = 0; r < s.children.length; r++)
                        for (var a = s.children[r], h = 0; h < t.length; h++) a instanceof t[h] && (i[a.id] = a);
        else
            for (o = 0; o < this.height; o++)
                for (n = 0; n < this.width; n++)
                    for (s = this.cells[o][n], r = 0; r < s.children.length; r++) {
                        a = s.children[r];
                        i[a.id] = a
                    }
        Object.keys(i).forEach((function(t) {
            e(i[t])
        }))
    },
    a331: function(t) {
        var e = (new THREE.Box2).setFromPoints(t),
            i = e.min.clone();
        i.x = Math.floor(i.x / this.a698), i.y = Math.floor(i.y / this.a698);
        var o = e.max.clone();
        return o.x = Math.floor(o.x / this.a698), o.y = Math.floor(o.y / this.a698), i.x = G.a785.clamp(i.x, 0, this.width - 1), i.y = G.a785.clamp(i.y, 0, this.height - 1), o.x = G.a785.clamp(o.x, 0, this.width - 1), o.y = G.a785.clamp(o.y, 0, this.height - 1), {
            box2: e,
            a699: i,
            a700: o
        }
    },
    a392: function(t) {
        var e = t.clone().sub(this.a699);
        return e.x = Math.floor(e.x / this.a698), e.y = Math.floor(e.y / this.a698), e
    },
    a335: function(t) {
        for (var e = [], i = t.a699, o = t.a700, n = i.y; n <= o.y; n++)
            for (var s = i.x; s <= o.x; s++) e.push(this.cells[n][s]);
        return e
    },
    geta691sFromGridLocation: function(t) {
        for (var e = t.a699, i = t.a700, o = e.y; o <= i.y; o++)
            for (var n = e.x; n <= i.x; n++) cells.push(this.cells[o][n])
    },
    geta691sIntersectsBox: function(t) {
        var e = getBoxGridLocation(t);
        return geta691sFromGridLocation(e)
    },
    a332: function(t, e, i) {
        var o = this,
            n = o.a335(t);
        return void 0 === i ? function(t) {
            o.a336(n, e, (function(e) {
                for (var i = e.triangles, o = 0; o < i.length; o += 9) t(e, i[o], i[o + 1], i[o + 2], i[o + 3], i[o + 4], i[o + 5], i[o + 6], i[o + 7], i[o + 8], o)
            }))
        } : function(t) {
            o.a336(n, e, (function(e) {
                if (i(e))
                    for (var o = e.triangles, n = 0; n < o.length; n += 9) t(e, o[n], o[n + 1], o[n + 2], o[n + 3], o[n + 4], o[n + 5], o[n + 6], o[n + 7], o[n + 8], n)
            }))
        }
    },
    clearScene: function() {
        for (var t = this.scene.children.length - 1; t >= 0; t--) {
            var e = this.scene.children[t];
            this.scene.remove(e)
        }
    },
    onResize: function() {},
    a394: function(t) {
        var e = new THREE.SphereGeometry(.2, 5, 5),
            i = new THREE.MeshPhongMaterial({
                color: 16777215
            }),
            o = new THREE.Mesh(e, i);
        o.position.copy(t), this.scene.add(o)
    },
    a395: function(t) {
        var e = new THREE.CubeGeometry(12, 12, 12),
            i = new THREE.MeshPhongMaterial({
                color: 16777215
            }),
            o = new THREE.Mesh(e, i);
        o.position.copy(t), this.scene.add(o)
    }
}, G.Animation = function(t, e, i, o) {
    $.extend(!0, this, t), this.enabled = !0, this.show = !0, this.a824 = e, this.gO = i, this.a826 = o, this.meshes = [], this.materials = [], this.destroyed = !1, this.delay = 0;
    var n = this;
    n.start(n), Object.keys(n.a759s).forEach((function(t) {
        var e = n.a759s[t];
        e.a830 = 0, e.show = !1, e.a831 = !1, e.a832 = -1
    })), this.a837 = [], this.oldShowAnim = null, this.showAnim = null
}, G.Animation.prototype = {
    init: function() {},
    update: function(t) {
        var e = this;
        if (this.enabled) {
            if (t) e = this;
            e.oldShowAnim = e.showAnim, e.showAnim = e.a107(e), Object.keys(e.a759s).forEach((function(t) {
                if (e.destroyed) return !1;
                var i = e.a759s[t];
                i.gO = e.gO, i.anim = e;
                var o = e.showAnim[t];
                if (!o || i.show && !o.reset ? !o && i.show && (i.show = !1) : (i.show = !0, i.a832 = -1, i.a830 = 0, i.a831 = !1), o) {
                    var n = o.a842,
                        s = i.a843,
                        r = !1,
                        a = GAME.time,
                        h = a - i.a830;
                    h > n && (i.a830 = a - e.delay, h = 0 + e.delay, r = !0);
                    var l, c = h / n,
                        u = !1,
                        d = 0,
                        p = 0,
                        f = !1,
                        g = !0;
                    Object.keys(s).forEach((function(n) {
                        if (f) return !1;
                        c <= (d += parseFloat(n)) && (u = s[n], l = parseFloat(n), i.a852 = (c - (d - l)) / l, (p != i.a832 || r) && (i.a831 && (i.a831.end && i.a831.end(i, o), 0 == p && (i.a844 = !0)), (g = e.a107(e)[t] && !e.destroyed) ? (0 == p && (i.a844 = !1), i.a831 = u, i.a831.start && i.a831.start(i, o), i.a832 = p) : f = !0), g && (i.a831.a853(i, o), f = !0)), p++
                    }))
                }
            }))
        }
    },
    a758Anim: function(t) {
        var e = this,
            i = !1;
        return Object.keys(e.a759s).forEach((function(o) {
            if (t == o) return i = e.a759s[o].show, !1
        })), i
    },
    enable: function() {
        this.enabled = !0
    },
    disable: function() {
        var t = this;
        t.enabled = !1, Object.keys(t.a759s).forEach((function(e) {
            t.a759s[e].show = !1
        }))
    },
    destroy: function() {
        this.destroyed = !0
    }
}, G.a387 = {
    Static: 0,
    a695: 1,
    a694: 2
}, G.a376 = function(t) {
    this.a865 = t, this.scene = t.scene, this.a493 = [], this.geometries = {}, this.materials = {}, this.a494 = 75e-5, this.a495 = new THREE.Vector3(0, -.003, 0)
}, G.a376.prototype = {
    constructor: G.a376,
    init: function() {
        this.root = new THREE.Object3D, this.root.userData = "a707 root", this.scene.add(this.root)
    },
    update: function() {
        for (var t = 0; t < this.a493.length; t++) {
            var e = this.a493[t];
            e.a736 != G.a387.Static && (!0 !== e.a737 && (e.a738.add(e.a677), e.velocity.add(e.a738), e.mesh.position.add(e.velocity), e.mesh.rotation.y += e.a739, e.a740++), e.a497 -= .01, e.mesh.scale.set(e.a497, e.a497, e.a497), e.a497 <= 0 && (e.a498 = !0))
        }
        for (t = this.a493.length - 1; t >= 0; t--) this.a493[t].a498 && this.a499(this.a493[t], t)
    },
    a708: function(t, e, i, o, n, s) {
        var r = this.getGeometry(t, e, i),
            a = this.getMaterial(o),
            h = new THREE.Mesh(r, a);
        n = void 0 !== n ? n : G.a387.Static;
        var l = {
            mesh: h,
            position: s,
            a739: .25 * Math.random(),
            a736: n,
            color: o,
            a497: 1
        };
        return n != G.a387.Static && (l.a677 = this.a495.clone(), n == G.a387.a695 ? (l.a500 = 15, l.a501 = 10 * Math.random()) : n == G.a387.a694 && (l.a500 = 20, l.a501 = 10 * Math.random() + 60), this.a502(l), l.velocity = new THREE.Vector3, this.a503(l)), this.root.add(h), this.a493.push(l), l
    },
    a499: function(t, e) {
        var i = void 0 !== e ? e : this.a493.indexOf(t);
        i > -1 && (this.root.remove(t.mesh), t.mesh.geometry.dispose(), t.mesh.material.dispose(), t.mesh = void 0, this.a493.splice(i, 1))
    },
    a503: function() {
        var t = {
                a865: null,
                position: new THREE.Vector3,
                a386: null
            },
            e = new THREE.Vector2;
        return function(i) {
            i.position.a663(e);
            var o = this.a865.a331([e]);
            void 0 !== o && (t.a865 = this.a865, t.position.copy(i.position), t.a386 = this.a865.a335(o), t.a865 = null, t.a386 = null)
        }
    }(),
    a502: function(t) {
        t.a738 = new THREE.Vector3(2 * Math.random() - 1, 0, 2 * Math.random() - 1), t.a738.normalize(), t.a738.multiplyScalar(t.a500), t.a738.y = t.a501, t.a738.multiplyScalar(this.a494)
    },
    a388: function() {
        var t = new THREE.Vector2,
            e = new THREE.Vector2(1, 0);
        return function(i, o) {
            if (0 === o.x && 0 === o.z) {
                if (-1 == o.y) return;
                return i.a500 = 20, i.a501 = 10 * Math.random() + 30, void this.a502(i)
            }
            o.a663(t);
            var n = G.a785.a505(e, t) + Math.PI,
                s = n - Math.random() * Math.PI;
            t.set(Math.sin(s), Math.cos(s)), i.a738.x = t.x, i.a738.z = t.y, i.a738.multiplyScalar(i.a500 * this.a494), i.a738.y = i.a501 * this.a494, i.mesh.rotation.y += n
        }
    }(),
    getGeometry: function(t, e, i) {
        var o = t.toFixed(2) + e.toFixed(2) + i.toFixed(2);
        return o in this.geometries || (this.geometries[o] = new THREE.BoxGeometry(t, e, i)), this.geometries[o]
    },
    getMaterial: function(t) {
        var e = t.toString();
        return e in this.materials || (this.materials[e] = new THREE.MeshBasicMaterial({
            color: t
        })), this.materials[e]
    }
}, G.a823 = {
    a172: 0,
    a173: 1,
    a174: 2,
    a175: 3,
    a176: 4,
    a117: 5,
    a118: 6,
    a179: 7,
    a180: 8,
    a119: 14,
    a186: 15,
    a188: 16,
    a189: 17,
    a190: 18,
    a191: 19,
    a192: 20,
    a193: 21,
    a194: 22,
    a195: 23,
    a199: 25,
    a200: 26,
    a201: 27,
    a202: 28,
    a203: 29,
    a616: 36,
    a617: 37,
    a210: 38,
    a221: 49,
    a222: 50,
    a225: 53,
    a226: 54,
    a227: 55,
    a228: 56,
    a231s: 64,
    a120: 65,
    a121: 66,
    a232: 67,
    a233: 68,
    a122: 69,
    a234: 70,
    a236: 72,
    RPCEndMatch: 73,
    a124: 74,
    a125: 75,
    a126: 76,
    a222ingSoon: 77,
    a128: 78,
    a129: 79,
    a130: 80,
    a169: 81,
    a171: 82,
    CMDChunkBuffered: 84,
    RPCa822erScore: 85,
    RPCMatchRemainingTime: 86
};
class RPCMatchRemainingTime {
    constructor() {
        this.time = null
    }
    a615(t) {
        this.time = t.getUint32(1, !0)
    }
}
class RPCa822erScore {
    constructor() {
        this.id = null, this.a649 = null
    }
    a615(t) {
        this.id = t.getUint8(1), this.a649 = t.getUint32(2, !0)
    }
}
class CMDChunkBuffered {
    constructor() {
        this.i = null, this.e = null, this.o = null, this.type = null
    }
    a614() {
        Array.isArray(this.i) || (this.i = [this.i], this.e = [this.e], this.o = [this.o], this.type = [this.type]);
        var t = new DataView(new ArrayBuffer(1 + 4 * this.i.length));
        t.setUint8(0, G.a823.CMDChunkBuffered);
        for (var e = 1, i = 0; i < this.i.length; i++) t.setUint8(e, this.i[i]), e++, t.setUint8(e, this.e[i]), e++, t.setUint8(e, this.o[i]), e++, t.setUint8(e, this.type[i]), e++;
        return t.buffer
    }
}
class a201 {
    constructor() {
        this.msg = ""
    }
    a614() {
        var t = new DataView(new ArrayBuffer(1 + 2 * this.msg.length));
        t.setUint8(0, G.a823.a201);
        for (var e = 0, i = this.msg.length; e < i; e++) t.setUint16(1 + 2 * e, this.msg.charCodeAt(e), !0);
        return t.buffer
    }
}
class a202 {
    constructor() {
        this.id = null, this.msg = null
    }
    a615(t) {
        this.id = t.getUint8(1);
        for (var e = new Uint16Array((t.byteLength - 2) / 2), i = 0, o = 2; o < t.byteLength; o += 2) e[i] = t.getUint16(o, !0), i++;
        this.msg = String.fromCharCode.apply(null, e)
    }
}
class a199 {
    constructor() {
        this.a652Id = null, this.originX = null, this.originY = null, this.originZ = null, this.dirX = null, this.dirY = null, this.dirZ = null
    }
    a614() {
        var t = new DataView(new ArrayBuffer(26));
        return t.setUint8(0, G.a823.a199), t.setUint8(1, this.a652Id), t.setFloat32(2, this.originX, !0), t.setFloat32(6, this.originY, !0), t.setFloat32(10, this.originZ, !0), t.setFloat32(14, this.dirX, !0), t.setFloat32(18, this.dirY, !0), t.setFloat32(22, this.dirZ, !0), t.buffer
    }
}
class a200 {
    constructor() {
        this.playerId = null, this.a652Id = null, this.originX = null, this.originY = null, this.originZ = null, this.dirX = null, this.dirY = null, this.dirZ = null
    }
    a615(t) {
        this.playerId = t.getUint8(1), this.a652Id = t.getUint8(2), this.originX = t.getFloat32(3, !0), this.originY = t.getFloat32(7, !0), this.originZ = t.getFloat32(11, !0), this.dirX = t.getFloat32(15, !0), this.dirY = t.getFloat32(19, !0), this.dirZ = t.getFloat32(23, !0)
    }
}
class a169 {
    a615(t) {
        this.creative = t.getUint8(1)
    }
}
class a130 {
    a615(t) {
        this.a131 = t.getUint8(1), this.a132 = t.getUint8(2), this.a133 = new THREE.Color("rgb(" + t.getUint8(3, !0) + "," + t.getUint8(4, !0) + "," + t.getUint8(5, !0) + ")"), this.a134 = new THREE.Color("rgb(" + t.getUint8(6, !0) + "," + t.getUint8(7, !0) + "," + t.getUint8(8, !0) + ")"), this.a135 = t.getUint8(9), this.a135Color = new THREE.Color("rgb(" + t.getUint8(10, !0) + "," + t.getUint8(11, !0) + "," + t.getUint8(12, !0) + ")"), this.a135Near = t.getFloat32(13, !0), this.a135Far = t.getFloat32(17, !0), this.a139 = new THREE.Color("rgb(" + t.getUint8(21, !0) + "," + t.getUint8(22, !0) + "," + t.getUint8(23, !0) + ")"), this.a140 = t.getFloat32(24, !0), this.a141 = t.getFloat32(28, !0), this.environmentOceanFloorHeight = t.getFloat32(32, !0);
        for (var e = new Uint16Array((t.byteLength - 36) / 2), i = 0, o = 36; o < t.byteLength; o += 2) e[i] = t.getUint16(o, !0), i++;
        this.a142 = String.fromCharCode.apply(null, e)
    }
}
class a119 {
    a615(t) {
        this.a143 = t.getUint8(1), this.a144 = t.getFloat32(2, !0), this.a145 = t.getFloat32(6, !0), this.a146 = t.getFloat32(10, !0), this.a147 = t.getFloat32(14, !0), this.a148 = t.getFloat32(18, !0), this.a149 = t.getFloat32(22, !0), this.a150 = t.getFloat32(26, !0), this.a151 = t.getFloat32(30, !0), this.a152 = t.getFloat32(34, !0), this.a153 = t.getFloat32(38, !0), this.a154 = t.getFloat32(42, !0), this.a155 = t.getFloat32(46, !0), this.a156 = t.getFloat32(50, !0), this.a157 = t.getFloat32(54, !0), this.a158 = t.getFloat32(58, !0), this.a159 = t.getFloat32(62, !0), this.a160 = t.getFloat32(66, !0), this.a161 = t.getFloat32(70, !0), this.a162 = t.getFloat32(74, !0), this.playerExitWaterGravity = t.getFloat32(78, !0), this.playerExitWaterAddAY = t.getFloat32(82, !0), this.playerExitWaterMaxAX = t.getFloat32(86, !0), this.playerExitWaterMaxAY = t.getFloat32(90, !0), this.playerExitWaterMaxAZ = t.getFloat32(94, !0), this.playerExitWaterMaxVY = t.getFloat32(98, !0)
    }
}
class a129 {
    constructor() {
        this.height = null, this.moveDuration = null
    }
    a615(t) {
        this.height = t.getFloat32(1, !0), this.moveDuration = t.getFloat32(5, !0)
    }
}
class a128 {
    constructor() {
        this.posX = null, this.posY = null, this.posZ = null
    }
    a615(t) {
        this.posX = t.getFloat32(1, !0), this.posY = t.getFloat32(5, !0), this.posZ = t.getFloat32(9, !0)
    }
}
class a186 {
    constructor() {
        this.name = [], this.total = []
    }
    a615(t) {
        for (var e, i, o = 1; o < t.byteLength - 1;) {
            e = t.getUint8(o), o++, i = new Uint16Array(e);
            for (var n = 0; n < e; n++) i[n] = t.getUint16(o, !0), o += 2;
            this.name.push(String.fromCharCode.apply(null, i)), this.total.push(t.getUint8(o)), o++
        }
    }
}
class a222ingSoon {
    constructor() {
        this.time = null
    }
    a615(t) {
        this.time = t.getUint8(1)
    }
}
class a124 {
    constructor() {
        this.time = null
    }
    a615(t) {
        this.time = t.getUint8(1)
    }
}
class a125 {
    constructor() {}
    a615(t) {}
}
class a126 {
    constructor() {}
    a615(t) {}
}
class RPCEndMatch {
    constructor() {
        this.type = null, this.time = null, this.winnerId = null
    }
    a615(t) {
        this.type = t.getUint8(1), this.time = t.getUint32(2, !0), this.winnerId = t.getUint8(6)
    }
}
class a188 {
    constructor() {
        this.id = null, this.a645 = null
    }
    a614() {
        this.a645 > 255 && (this.a645 = 255);
        var t = new DataView(new ArrayBuffer(3));
        return t.setUint8(0, G.a823.a188), t.setUint8(1, this.id), t.setUint8(2, this.a645), t.buffer
    }
}
class a236 {
    constructor() {
        this.HP = null
    }
    a615(t) {
        this.HP = t.getUint8(1)
    }
}
class a189 {
    constructor() {
        this.id = null, this.HP = null
    }
    a615(t) {
        this.id = t.getUint8(1), this.HP = t.getUint8(2)
    }
}
class a190 {
    constructor() {
        this.id = null, this.a163 = null
    }
    a615(t) {
        this.id = t.getUint8(1), this.a163 = t.getUint8(2)
    }
}
class a191 {
    constructor() {
        this.a163 = null
    }
    a615(t) {
        this.a163 = t.getUint8(1)
    }
}
class a192 {
    a614() {
        var t = new DataView(new ArrayBuffer(1));
        return t.setUint8(0, G.a823.a192), t.buffer
    }
}
class a193 {
    constructor() {
        this.x = null, this.y = null, this.z = null
    }
    a615(t) {
        this.x = t.getFloat32(1, !0), this.y = t.getFloat32(5, !0), this.z = t.getFloat32(9, !0)
    }
}
class a175 {
    constructor() {
        this.x = 0, this.y = 0, this.z = 0, this.time = 0, this.a748 = 0, this.a749 = 0, this.a751 = 0
    }
    a614() {
        var t = new DataView(new ArrayBuffer(26));
        return t.setUint8(0, G.a823.a175), t.setFloat32(1, this.x, !0), t.setFloat32(5, this.y, !0), t.setFloat32(9, this.z, !0), t.setFloat32(13, this.time, !0), t.setFloat32(17, this.a748, !0), t.setFloat32(21, this.a749, !0), t.setUint8(25, this.a751), t.buffer
    }
}
class a194 {
    constructor() {
        this.id = null
    }
    a615(t) {
        this.id = t.getUint8(1)
    }
}
class a234 {
    constructor() {
        this.i = null, this.e = null, this.o = null, this.v = null, this.u = null
    }
    a614() {
        Array.isArray(this.i) || (this.i = [this.i], this.e = [this.e], this.o = [this.o], this.v = [this.v], this.u = [this.u]);
        var t = new DataView(new ArrayBuffer(1 + 9 * this.i.length));
        t.setUint8(0, G.a823.a234);
        for (var e = 1, i = 0; i < this.i.length; i++) t.setUint8(e, this.i[i]), e++, t.setUint8(e, this.e[i]), e++, t.setUint8(e, this.o[i]), e++, t.setUint32(e, this.v[i], !0), e += 4, t.setUint16(e, this.u[i], !0), e += 2;
        return t.buffer
    }
}
class a171 {
    constructor() {
        this.i = null, this.e = null, this.o = null, this.v = null, this.a645 = null
    }
    a614() {
        Array.isArray(this.i) || (this.i = [i], this.e = [e], this.o = [o], this.v = [v], this.a645 = [a645]);
        var t = new DataView(new ArrayBuffer(1 + 12 * this.i.length));
        t.setUint8(0, G.a823.a171);
        for (var n = 1, s = 0; s < this.i.length; s++) t.setUint8(n, this.i[s]), n++, t.setUint8(n, this.e[s]), n++, t.setUint8(n, this.o[s]), n++, t.setUint32(n, this.v[s], !0), n += 4, t.setUint8(n, this.a645[s]), n++;
        return t.buffer
    }
}
class a121 {
    constructor() {
        this.i = [], this.e = [], this.o = [], this.a635 = [], this.vArr = []
    }
    a615(t, e) {
        for (var i = 1; i < t.byteLength;) {
            this.i.push(t.getUint32(i, !0)), i += 4, this.e.push(t.getUint32(i, !0)), i += 4, this.o.push(t.getUint32(i, !0)), i += 4;
            var o = t.getUint32(i, !0);
            i += 4, a65 = new Uint16Array(o), a66 = new Uint16Array(o);
            for (var n = 0, s = 0; s < o; s++) a65[n] = t.getUint16(i, !0), i += 2, a66[n] = t.getUint16(i, !0), i += 2, n++;
            this.a635.push(a65), this.vArr.push(a66)
        }
    }
}
class a172 {
    constructor() {
        this.id = null
    }
    a615(t) {
        this.id = t.getUint8(1)
    }
}
class a173 {
    constructor() {
        this.a725Index = 0, this.name = "unnamed"
    }
    a614() {
        var t = new DataView(new ArrayBuffer(2 + 2 * this.name.length));
        t.setUint8(0, G.a823.a173), t.setUint8(1, this.a725Index);
        for (var e = 0, i = this.name.length; e < i; e++) t.setUint16(2 + 2 * e, this.name.charCodeAt(e), !0);
        return t.buffer
    }
}
class a174 {
    constructor() {
        this.id = null, this.a725Index = null, this.a649 = null, this.name = null
    }
    a615(t) {
        this.id = t.getUint8(1), this.a725Index = t.getUint8(2), this.a649 = t.getUint32(3, !0);
        for (var e = new Uint16Array((t.byteLength - 7) / 2), i = 0, o = 7; o < t.byteLength; o += 2) e[i] = t.getUint16(o, !0), i++;
        this.name = String.fromCharCode.apply(null, e)
    }
}
class a195 {
    constructor() {
        this.id = null
    }
    a615(t) {
        this.id = t.getUint8(1)
    }
}
class a180 {
    constructor() {
        this.id = null
    }
    a615(t) {
        this.id = t.getUint8(1)
    }
}
class a225 {
    a614() {
        var t = new DataView(new ArrayBuffer(1));
        return t.setUint8(0, G.a823.a225), t.buffer
    }
}
class a226 {
    constructor() {
        this.id = 0
    }
    a615(t) {
        this.id = t.getUint8(1)
    }
}
class a227 {
    a614() {
        var t = new DataView(new ArrayBuffer(1));
        return t.setUint8(0, G.a823.a227), t.buffer
    }
}
class a228 {
    constructor() {
        this.id = 0
    }
    a615(t) {
        this.id = t.getUint8(1)
    }
}
class a117 {
    constructor() {
        this.name = 0
    }
    a614() {
        var t = 0,
            e = new DataView(new ArrayBuffer(1 + 2 * this.name.length));
        e.setUint8(0, G.a823.a117), t++;
        for (var i = 0; i < this.name.length; i++) e.setUint16(t, this.name.charCodeAt(i), !0), t += 2;
        return e.buffer
    }
}
class a118 {
    constructor() {
        this.playerId = null, this.name = 0
    }
    a615(t) {
        this.playerId = t.getUint8(1);
        for (var e = new Uint16Array((t.byteLength - 2) / 2), i = 0, o = 2; o < t.byteLength; o += 2) e[i] = t.getUint16(o, !0), i++;
        this.name = String.fromCharCode.apply(null, e)
    }
}
class a222 {
    constructor() {}
    a615(t) {}
}
G.Game = function() {
    G.Base.call(this), this.a528 = !1, this.currentOceanHeight = -1, this.bottleneckCvs = new G.Canvas2d(!0), this.bottleneckCvs.canvasId = "bottleneck-canvas", this.bottleneckCvs.alpha = 0, this.bottleneckCvs.init(), this.bottleneckCvs.screenCanvas.style.zIndex = 20, this.bottleneckCanvas = new G.a791(this.bottleneckCvs), this.bottleneckCanvas.init(), this.leaderboardCvs = new G.Canvas2d(!0), this.leaderboardCvs.canvasId = "leaderboard-canvas", this.leaderboardCvs.alpha = 0, this.leaderboardCvs.init(), this.leaderboardCvs.screenCanvas.style.zIndex = 10, this.leaderboardCanvas = new G.a791(this.leaderboardCvs), this.leaderboardCanvas.init(), this.killfeedCvs = new G.Canvas2d(!0), this.killfeedCvs.canvasId = "killfeed-canvas", this.killfeedCvs.alpha = 0, this.killfeedCvs.init(), this.killfeedCvs.screenCanvas.style.zIndex = 10, this.killfeedCanvas = new G.a791(this.killfeedCvs), this.killfeedCanvas.init(), this.chatCvs = new G.Canvas2d(!0), this.killfeedCvs.canvasId = "chat-canvas", this.chatCvs.alpha = 0, this.chatCvs.init(), this.chatCvs.screenCanvas.style.zIndex = 10, this.chatCanvas = new G.a791(this.chatCvs), this.chatCanvas.init(), this.chatInput = document.getElementById("chat"), this.winPos = [], this.a510 = !1, this.ina866 = !1, this.a643Worker = new Worker("m8.js"), this.firstChunkWorker = new Worker("lol.js"), this.leaderboard = [, , , , , , , , , , , ], this.killfeed = [], this.chat = [], this.newChatMessage = !1, this.a369ed = new CMDChunkBuffered, this.matchRemainingTime = !1
}, G.Game.prototype = G.inherit(G.Base, {
    constructor: G.Game,
    init: function() {
        var t = this;
        G.a813.loada813(), this.state = G.a817.a819, this.nextState = null, this.updated = !1, this.antialias = !1, this.cameraFov = G.a813.fov, this.cameraNear = .1, this.cameraFar = 128e4, this.firstTimeIna793 = !0, this.loadingUI = new G.a788, this.loadingUI.init(), this.uiManager = new G.a790(this), this.uiManager.init(), this.shoutOut = new G.a613, this.assetLoader = new G.a585, this.assetLoader.init(), this.assetLoader.addEventListener("progress", (function(e) {
            t.loadingUI.updateProgress(e)
        })), this.assetLoader.addEventListener("load", (function(e) {
            t.loadingUI.updateProgress(e), t.nextState = G.a817.a821
        })), G.Base.prototype.init.call(this), this.graphicsManager = new G.a590(this.scene, this.renderer, this.camera), this.graphicsManager.init(), $(document).on("keydown.inventory", (function(t) {
            if (27 == t.keyCode) GAME.a510 ? (GAME.closea793(), $(document).on("mousedown.pointerLock", (function(t) {
                GAME.a865.player.controls.lock()
            }))) : ($(document).off("mousedown.pointerLock"), GAME.opena793());
            else if (9 == t.keyCode) GAME.a510 || GAME.a865.player.dead || (GAME.ina866 ? (GAME.uiManager.inventory.close(), GAME.a865.player.controls.lock()) : ($(document).off("mousedown.pointerLock"), GAME.uiManager.inventory.open(), GAME.a865.player.controls.unlock()));
            else if (13 == t.keyCode)
                if (GAME.inChat) {
                    G.CONFIG.creative && "/f" == GAME.chatInput.value && (G.CONFIG.a143 = !G.CONFIG.a143);
                    var e = new a201;
                    e.msg = GAME.chatInput.value, G.socket.send(e.a614()), GAME.inChat = !1, GAME.chatInput.blur(), GAME.chatInput.value = "[Enter] to chat", G.a597.rebound.enabled = !0
                } else GAME.inChat = !0, GAME.chatInput.value = "", GAME.chatInput.focus(), G.a597.rebound.enabled = !1
        })), $(document).on("mousedown.pointerLock", (function(t) {
            GAME.a865.player.controls.lock()
        }))
    },
    preLoad: function() {
        this.loadingUI.percentLoaded = 0, this.loadingUI.show(), this.assetLoader.loaded ? this.nextState = G.a817.a821 : (this.assetLoader.loadZip(), this.nextState = G.a817.a820)
    },
    postLoad: function() {
        var t = this;
        this.scene = new THREE.Scene;
        var e = new G.a586(this.renderer, this.scene, this.camera);
        this.a865 = e.getGrid(), this.a865.a358 = e, void 0 !== this.playerPersistencePackage && (this.a865.player.applyPersistencePackage(this.playerPersistencePackage), this.playerPersistencePackage = void 0), this.graphicsManager.setGrid(this.a865), this.graphicsManager.addedFilters = !1, this.a865.player.controls.init(), this.a865.player.controls.addEventListener("pointerLockDisabled", (function() {
            t.opena793()
        })), this.uiManager.initComponents(this.a865), this.uiManager.useIngamea793(), G.a597.rebound.enabled = !0, G.socket = new WebSocket("wss://" + G.gameServerAddress + "/s"), G.socket.binaryType = "arraybuffer", G.socket.onmessage = function(e) {
            var i = new DataView(e.data);
            switch (i.getUint8(0)) {
                case G.a823.a172:
                    wwHideHome(), wwShowGame(), (c = new a172).a615(i), t.a865.player.ID = c.id, t.a865.player.name = playerName, G.othera822ers[c.id] = t.a865.player, t.a528 = !0, G.a528 = !0;
                case G.a823.a174:
                    (c = new a174).a615(i), t.a865.player.ID != c.id ? (G.othera822ers[c.id] = new G.a611(SKINS[c.a725Index], t.a865, c.id, c.name), G.othera822ers[c.id].a478(c.a649), G.othera822ers[c.id].init()) : t.a865.player.start(), t.drawLeaderboard(), t.firstChunkWorker.onmessage = function(e) {
                        shapeVertices = e.data.shapeVertices, collisionVertices = e.data.collisionVertices, volume = e.data.volume, solidIndices = e.data.solidIndices, solidVertices = e.data.solidVertices, solidShading = e.data.solidShading, solidUvBases = e.data.solidUvBases, solidUvProgresses = e.data.solidUvProgresses, transparentIndices = e.data.transparentIndices, transparentVertices = e.data.transparentVertices, transparentUvBases = e.data.transparentUvBases, transparentUvProgresses = e.data.transparentUvProgresses, t.a865.addChunkFirstBuffer(e.data.i, e.data.e, e.data.o, e.data.first, e.data.pos, e.data.buildP, shapeVertices, collisionVertices, volume, solidIndices, solidVertices, solidShading, solidUvBases, solidUvProgresses, transparentIndices, transparentVertices, transparentUvBases, transparentUvProgresses, e.data.pointMinX, e.data.pointMinZ, e.data.pointMaxX, e.data.pointMaxZ)
                    }, t.a643Worker.onmessage = function(e) {
                        e.data.pos ? (shapeVertices = e.data.shapeVertices, collisionVertices = e.data.collisionVertices, volume = e.data.volume, solidIndices = e.data.solidIndices, solidVertices = e.data.solidVertices, solidShading = e.data.solidShading, solidUvBases = e.data.solidUvBases, solidUvProgresses = e.data.solidUvProgresses, transparentIndices = e.data.transparentIndices, transparentVertices = e.data.transparentVertices, transparentUvBases = e.data.transparentUvBases, transparentUvProgresses = e.data.transparentUvProgresses, t.a865.a382(e.data.i, e.data.e, e.data.o, e.data.first, e.data.pos, e.data.buildP, shapeVertices, collisionVertices, volume, solidIndices, solidVertices, solidShading, solidUvBases, solidUvProgresses, transparentIndices, transparentVertices, transparentUvBases, transparentUvProgresses, e.data.pointMinX, e.data.pointMinZ, e.data.pointMaxX, e.data.pointMaxZ)) : t.a865.addHideChunkBuffer(e.data.i, e.data.e, e.data.o)
                    };
                    break;
                case G.a823.a121:
                    (c = new a121).a615(i);
                    for (var o = 0; o < c.i.length; o++) {
                        var n = {
                                i: c.i[o],
                                e: c.e[o],
                                o: c.o[o],
                                vArrType: c.a635[o],
                                vArr: c.vArr[o],
                                ao: G.a813.ao
                            },
                            s = greedy(n),
                            r = t.a865.a643s[c.i][c.e][c.o];
                        if (r) r.updatea650sFromVertices(s.shapeVertices, s.collisionVertices, s.volume, s.solidIndices, s.solidVertices, s.solidShading, s.solidUvBases, s.solidUvProgresses, s.transparentIndices, s.transparentVertices, s.transparentUvBases, s.transparentUvProgresses, s.pointMinX, s.pointMinZ, s.pointMaxX, s.pointMaxZ);
                        else {
                            var a = new G.a650(t.a865, n.i, n.e, n.o, s.pos, s.buildP, 0);
                            r = t.a865.a643s[c.i][c.e][c.o] = a, a.updatea650sFromVertices(s.shapeVertices, s.collisionVertices, s.volume, s.solidIndices, s.solidVertices, s.solidShading, s.solidUvBases, s.solidUvProgresses, s.transparentIndices, s.transparentVertices, s.transparentUvBases, s.transparentUvProgresses, s.pointMinX, s.pointMinZ, s.pointMaxX, s.pointMaxZ)
                        }
                        t.a865.player.checkSpawnChunks.push(r)
                    }
                    break;
                case G.a823.a120:
                    t.firstChunkWorker.postMessage({
                        ao: G.a813.ao,
                        buffer: i,
                        first: !0
                    });
                    break;
                case G.a823.a231s:
                    t.a643Worker.postMessage({
                        ao: G.a813.ao,
                        buffer: i,
                        first: !1
                    });
                    break;
                case G.a823.a233:
                    t.a643Worker.postMessage({
                        buffer: i,
                        hide: !0
                    });
                    break;
                case G.a823.a122:
                    t.a865.rea636FirstBuffer(), t.a865.rea636Buffer(), t.a865.resetHideChunkBuffer();
                    break;
                case G.a823.a195:
                    (c = new a195).a615(i), t.a865.player.ID != c.id && (G.othera822ers[c.id].remove(), G.othera822ers[c.id] = null), t.drawLeaderboard();
                    break;
                case G.a823.a190:
                    var h, l;
                    (c = new a190).a615(i), c.a163 == t.a865.player.ID ? (h = "You", h = t.a865.player.name) : h = G.othera822ers[c.a163].name, c.id == t.a865.player.ID ? (l = "You", l = t.a865.player.name) : l = G.othera822ers[c.id].name, G.othera822ers[c.id].a747 = !1, G.othera822ers[c.id].a489(), t.addKillfeed(h, "killed", l), t.drawLeaderboard();
                    break;
                case G.a823.a194:
                    (c = new a194).a615(i), G.othera822ers[c.id].a747 = !0;
                    break;
                case G.a823.a236:
                    (c = new a236).a615(i), c.HP <= t.a865.player.a746 ? t.a865.player.a536(c.HP) : t.a865.player.a537(c.HP);
                    break;
                case G.a823.a191:
                    wwShowDedAd(), (c = new a191).a615(i), t.a865.player.a539(), t.addKillfeed(G.othera822ers[c.a163].name, "killed", t.a865.player.name), GAME.myKillerId = c.a163, G.othera822ers[c.a163] && G.othera822ers[c.a163].a472.add(GAME.camera), t.drawLeaderboard(), $(document).off("mousedown.pointerLock"), GAME.respawnIn = 7, setTimeout((function() {
                        GAME.respawnIn = 6
                    }), 1e3), setTimeout((function() {
                        GAME.respawnIn = 5
                    }), 2e3), setTimeout((function() {
                        GAME.respawnIn = 4
                    }), 3e3), setTimeout((function() {
                        GAME.respawnIn = 3
                    }), 4e3), setTimeout((function() {
                        GAME.respawnIn = 2
                    }), 5e3), setTimeout((function() {
                        GAME.respawnIn = 1
                    }), 6e3), setTimeout((function() {
                        GAME.respawnIn = 0, $(document).on("mousedown.respawn", (function(t) {
                            wwInVideoAd || (GAME.a865.player.respawn(), GAME.a865.player.controls.lock(), $(document).off("mousedown.respawn"))
                        }))
                    }), 7e3), GAME.uiManager.inventory.close(), GAME.deadPopup = !0;
                    break;
                case G.a823.a193:
                    wwHideDedAd(), t.showChatInput(), (c = new a193).a615(i), t.a865.player.respawned(c.x, c.y, c.z), t.isa668Ready = !0, t.nextState = G.a817.a822;
                    break;
                case G.a823.a176:
                    for (this.y = 1; this.y < i.byteLength;) this.id = i.getUint8(this.y, !0), this.y += 1, this.posX = i.getFloat32(this.y, !0), this.y += 4, this.posY = i.getFloat32(this.y, !0), this.y += 4, this.posZ = i.getFloat32(this.y, !0), this.y += 4, this.a748 = i.getFloat32(this.y, !0), this.y += 4, this.rotX = i.getFloat32(this.y, !0), this.y += 4, this.time = i.getFloat32(this.y, !0), this.y += 4, this.a751 = i.getUint8(this.y, !0), this.y += 1, G.othera822ers[this.id].a482(this.posX, this.posY, this.posZ, this.a748, this.rotX, this.time, this.a751), G.othera822ers[this.id].a481(this.a751);
                    break;
                case G.a823.a180:
                    (c = new a180).a615(i), G.othera822ers[c.id].a489();
                    break;
                case G.a823.a226:
                    (c = new a226).a615(i), G.othera822ers[c.id].a479();
                    break;
                case G.a823.a228:
                    (c = new a228).a615(i), G.othera822ers[c.id].a480();
                    break;
                case G.a823.a118:
                    (c = new a118).a615(i), c.playerId == GAME.a865.player.ID ? GAME.a865.player.a445Id(c.name) : G.othera822ers[c.playerId].a474(c.name);
                    break;
                case G.a823.a125:
                    (c = new a125).a615(i), t.matchStarted = !1, t.matchStartingSoon = !1, t.matchStartingSoonTimer = !1, t.matchStartingSoonNext = !1, t.matchStartWaiting = !0;
                    break;
                case G.a823.a124:
                    (c = new a124).a615(i), t.matchStarted = !1, t.matchStartingSoon = !0, t.matchStartingSoonTime = c.time;
                    break;
                case G.a823.a126:
                    t.matchStartingSoon = !1, t.matchStartingSoonTimer = !1, t.matchStartingSoonNext = !1, t.matchStarted = !0;
                    break;
                case G.a823.RPCEndMatch:
                    (c = new RPCEndMatch).a615(i), t.matchEnded = !0, t.matchEndType = c.type, t.matchEndTime = c.time, t.winnerId = c.winnerId, t.a865.player.controls.unlock(), setTimeout((function() {
                        GAME.respawnIn = 0, $(document).on("mousedown.wonLock", (function(t) {
                            wwInVideoAd || (GAME.a865.player.controls.lock(), $(document).off("mousedown.wonLock"))
                        }))
                    }), 3e3);
                    break;
                case G.a823.RPCMatchRemainingTime:
                    (c = new RPCMatchRemainingTime).a615(i), GAME.matchRemainingTime = c.time;
                    break;
                case G.a823.a222:
                    t.disconnect();
                    break;
                case G.a823.a222ingSoon:
                    (c = new a222ingSoon).a615(i), t.disconnectingSoon = c.time, console.log(t.disconnectingSoon);
                    break;
                case G.a823.a186:
                    (c = new a186).a615(i), t.a865.player.a458s(c.name, c.total);
                    break;
                case G.a823.a128:
                    (c = new a128).a615(i), t.winPos.push(new THREE.Vector3(c.posX, c.posY, c.posZ));
                    break;
                case G.a823.a129:
                    (c = new a129).a615(i), t.oceanHeightFrom = t.currentOceanHeight, t.oceanHeightTo = c.height, t.oceanHeightDuration = c.moveDuration;
                    break;
                case G.a823.a119:
                    (c = new a119).a615(i), G.CONFIG.a143 = c.a143, G.CONFIG.a144 = c.a144, G.CONFIG.a145 = c.a145, G.CONFIG.a146 = c.a146, G.CONFIG.a147 = c.a147, G.CONFIG.a148 = c.a148, G.CONFIG.a149 = c.a149, G.CONFIG.a150 = c.a150, G.CONFIG.a151 = c.a151, G.CONFIG.a152 = c.a152, G.CONFIG.a153 = c.a153, G.CONFIG.a154 = c.a154, G.CONFIG.a155 = c.a155, G.CONFIG.a156 = c.a156, G.CONFIG.a157 = c.a157, G.CONFIG.a158 = c.a158, G.CONFIG.a159 = c.a159, G.CONFIG.a160 = c.a160, G.CONFIG.a161 = c.a161, G.CONFIG.a162 = c.a162, G.CONFIG.playerExitWaterGravity = c.playerExitWaterGravity, G.CONFIG.playerExitWaterAddAY = c.playerExitWaterAddAY, G.CONFIG.playerExitWaterMaxAX = c.playerExitWaterMaxAX, G.CONFIG.playerExitWaterMaxAY = c.playerExitWaterMaxAY, G.CONFIG.playerExitWaterMaxAZ = c.playerExitWaterMaxAZ, G.CONFIG.playerExitWaterMaxVY = c.playerExitWaterMaxVY;
                    break;
                case G.a823.a130:
                    (c = new a130).a615(i), G.CONFIG.a131 = c.a131, G.CONFIG.a132 = c.a132, G.CONFIG.a133 = c.a133, G.CONFIG.a134 = c.a134, G.CONFIG.a135 = c.a135, G.CONFIG.a135Color = c.a135Color, G.CONFIG.a135Near = c.a135Near, G.CONFIG.a135Far = c.a135Far, G.CONFIG.a139 = c.a139, G.CONFIG.a140 = c.a140, G.CONFIG.a141 = c.a141, G.CONFIG.environmentOceanFloorHeight = c.environmentOceanFloorHeight, G.CONFIG.a142 = c.a142, t.updatea668(!0);
                    break;
                case G.a823.a169:
                    (c = new a169).a615(i), G.CONFIG.creative = c.creative, G.CONFIG.creative && setInterval((function() {
                        console.log(t.a865.player.camera.position.x + "," + t.a865.player.camera.position.y + "," + t.a865.player.camera.position.z)
                    }), 1e3);
                    break;
                case G.a823.a200:
                    (c = new a200).a615(i), t.a865.a701(G.othera822ers[c.playerId], c.a652Id, new THREE.Vector3(c.originX, c.originY, c.originZ), new THREE.Vector3(c.dirX, c.dirY, c.dirZ), {
                        me: c.playerId == t.a865.player.ID
                    });
                    break;
                case G.a823.a202:
                    (c = new a202).a615(i), t.addChat(c.id, c.msg);
                    break;
                case G.a823.RPCa822erScore:
                    var c;
                    (c = new RPCa822erScore).a615(i), G.othera822ers[c.id].a478(c.a649)
            }
        }, G.socket.onopen = function() {
            var t = new ArrayBuffer(2),
                e = new DataView(t);
            e.setUint8(0, 13), e.setUint8(1, 26), G.socket.send(e.buffer)
        }, G.socket.onclose = function(e) {
            console.log("WebSocket closed"), t.disconnect()
        }, G.socket.onerror = function(e) {
            console.log("WebSocket Error " + e), t.disconnect()
        }
    },
    updatea668: function(t) {
        if (0 == G.CONFIG.a131) this.scene.background = G.CONFIG.a133;
        else if (1 == G.CONFIG.a131) {
            const t = document.getElementById("vertexShader").textContent,
                e = document.getElementById("fragmentShader").textContent,
                i = {
                    topColor: {
                        value: G.CONFIG.a133
                    },
                    bottomColor: {
                        value: G.CONFIG.a134
                    },
                    offset: {
                        value: 33
                    },
                    exponent: {
                        value: .6
                    },
                    fogColor: {
                        type: "c",
                        value: 0
                    },
                    fogNear: {
                        type: "f",
                        value: 100
                    },
                    fogFar: {
                        type: "f",
                        value: 200
                    }
                },
                o = new THREE.SphereBufferGeometry(16e3, 32, 15),
                n = new THREE.ShaderMaterial({
                    uniforms: i,
                    vertexShader: t,
                    fragmentShader: e,
                    side: THREE.BackSide,
                    fog: !0
                });
            this.a865.skybox = new THREE.Mesh(o, n), this.scene.add(this.a865.skybox)
        }
        var e = new THREE.CircleGeometry(16e3, 32);
        (i = G.assets[G.a836.Material].water.clone()).side = THREE.BackSide, i.fog = !0, i.transparent = !0, i.map.wrapS = i.map.wrapT = THREE.RepeatWrapping, i.map.offset.set(0, 0), i.map.repeat.set(2e3, 2e3), i.map.needsUpdate = !0, this.currentOceanHeight = 0, this.oceanPlane = new THREE.Mesh(e, i), this.oceanPlane.rotation.x = Math.PI / 2, this.oceanPlane.position.y = this.currentOceanHeight, this.scene.add(this.oceanPlane);
        var i;
        e = new THREE.CircleGeometry(16e3, 32);
        (i = G.assets[G.a836.Material].bedrock.clone()).side = THREE.BackSide, i.fog = !0, i.map.wrapS = i.map.wrapT = THREE.RepeatWrapping, i.map.offset.set(0, 0), i.map.repeat.set(1e3, 1e3), i.map.needsUpdate = !0;
        var o = new THREE.Mesh(e, i);
        o.rotation.x = Math.PI / 2, o.position.y = G.CONFIG.environmentOceanFloorHeight, this.scene.add(o);
        const n = new THREE.SphereBufferGeometry(16e3, 32, 15),
            s = new THREE.MeshBasicMaterial({
                side: THREE.BackSide,
                fog: !0
            });
        this.a865.waterSkybox = new THREE.Mesh(n, s), this.scene.add(this.a865.waterSkybox), this.a865.waterSkybox.visible = !1;
        var r = this;
        this.worldTexture = (new THREE.TextureLoader).load("world-texture/" + G.CONFIG.a142 + ".png", (function() {
            if (r.worldTexture.magFilter = THREE.NearestFilter, r.worldTexture.minFilter = THREE.NearestMipmapLinearFilter, r.uniforms = {
                    texture1: {
                        value: r.worldTexture
                    },
                    fogColor: {
                        type: "c",
                        value: new THREE.Color(0)
                    },
                    fogDensity: {
                        type: "f",
                        value: 0
                    },
                    fogNear: {
                        type: "f",
                        value: 0
                    },
                    fogFar: {
                        type: "f",
                        value: 0
                    }
                }, G.assets[G.a836.Material].a643SolidMaterial = new THREE.ShaderMaterial({
                    uniforms: r.uniforms,
                    fog: !0,
                    vertexShader: "\n\t\t#include <common>\n\t\t#include <fog_pars_vertex>\n\t\tattribute vec2 uvBase;  // Base of UV position on the block\n\t\tattribute vec2 uvProgress;  // Extent in blocks of the side \n\t\tattribute float shading;  // 0-1 shading value\n\t\t\t\t\n\t\tvarying vec2 vUvBase;\n\t\tvarying vec2 vUvProgress;\n\t\tvarying float vShading;\n\t\tvoid main() {\n\t\t\t// Update varying\n\t\t\tvUvBase = uvBase;\n\t\t\tvUvProgress = uvProgress;\n\t\t\tvShading = shading;\n\t\t\t// Set position\n\t\t\tvec4 mvPosition = modelViewMatrix * vec4(position, 1.0);  // Separate for fog_vertex a643 \n\t\t\tgl_Position = projectionMatrix * mvPosition;\n\t\t\t#include <fog_vertex>\n\t\t}\n\t\t",
                    fragmentShader: "\n\t\t#include <common>\n\t\t#include <fog_pars_fragment>\n\t\tconst float a40 = 16.;\n\t\tconst vec2 SPRITESHEET_SIZE = vec2(1024., 1024.);\n\t\tconst vec2 a40_UV = a40 / SPRITESHEET_SIZE;\n\t\tuniform sampler2D texture1;\n\t\tvarying vec3 vPosition;\n\t\tvarying vec2 vUvBase;\n\t\tvarying vec2 vUvProgress;\n\t\tvarying float vShading;\n\t\tfloat easeInOut(float t) {\n\t\t\t// See https://gist.github.com/gre/1650294\n\t\t\treturn t<0.5 ? 2.0*t*t : -1.0+(4.0-2.0*t)*t;\n\t\t}\n\t\tvoid main() {\n\t\t\t// Ease shading\n\t\t\t//float shading = easeInOut(vShading);\n\t\t\t//float shading = vShading;\n\t\t\t// Convert UV progress to be repeating and convert to tile size\n\t\t\tvec2 uvProgress = vec2(mod(vUvProgress.x, 1.), mod(vUvProgress.y, 1.)) * a40_UV;\n\t\t\t// Calculate UV position from texture progress\n\t\t\tvec2 uv = vUvBase + uvProgress;\n\t\t\t// Sample texture\n\t\t\tvec4 textureSample = texture2D(texture1, uv);\n\t\t\t// Alphatest (see https://github.com/mrdoob/three.js/blob/dev/src/renderers/shaders/ShaderChunk/alphatest_fragment.glsl.js)\n\t\t\tif (textureSample.a < 0.5) discard;\n\t\t\t// Set color\n\t\t\tgl_FragColor = textureSample * vShading;\n\t\t\t// gl_FragColor = vec4(uvProgress.xy, 0., 1.);\n\t\t\t// gl_FragColor = vec4(vShading);\n\t\t\t// gl_FragColor = textureSample;\n\t\t\t#include <fog_fragment>\n\t\t}\n\t\t"
                }), G.assets[G.a836.Material].a643TransparentMaterial = new THREE.ShaderMaterial({
                    uniforms: r.uniforms,
                    fog: !0,
                    premultipliedAlpha: !0,
                    blendSrc: THREE.OneFactor,
                    blendDst: THREE.OneMinusSrcAlphaFactor,
                    transparent: !0,
                    vertexShader: "\n\t\t#include <common>\n\t\t#include <fog_pars_vertex>\n\t\tattribute vec2 uvBase;  // Base of UV position on the block\n\t\tattribute vec2 uvProgress;  // Extent in blocks of the side \n\t\t\t\t\n\t\tvarying vec2 vUvBase;\n\t\tvarying vec2 vUvProgress;\n\t\tvoid main() {\n\t\t\t// Update varying\n\t\t\tvUvBase = uvBase;\n\t\t\tvUvProgress = uvProgress;\n\t\t\t// Set position\n\t\t\tvec4 mvPosition = modelViewMatrix * vec4(position, 1.0);  // Separate for fog_vertex a643 \n\t\t\tgl_Position = projectionMatrix * mvPosition;\n\t\t\t#include <fog_vertex>\n\t\t}\n\t\t",
                    fragmentShader: "\n\t\t#include <common>\n\t\t#include <fog_pars_fragment>\n\t\tconst float a40 = 16.;\n\t\tconst vec2 SPRITESHEET_SIZE = vec2(1024., 1024.);\n\t\tconst vec2 a40_UV = a40 / SPRITESHEET_SIZE;\n\t\tuniform sampler2D texture1;\n\t\tvarying vec3 vPosition;\n\t\tvarying vec2 vUvBase;\n\t\tvarying vec2 vUvProgress;\n\t\tvoid main() {\n\t\t\t// Convert UV progress to be repeating and convert to tile size\n\t\t\tvec2 uvProgress = vec2(mod(vUvProgress.x, 1.), mod(vUvProgress.y, 1.)) * a40_UV;\n\t\t\t// Calculate UV position from texture progress\n\t\t\tvec2 uv = vUvBase + uvProgress;\n\t\t\t// Sample texture\n\t\t\tgl_FragColor = texture2D(texture1, uv);\n\t\t\t#include <fog_fragment>\n\t\t\t#include <premultiplied_alpha_fragment>\n\t\t}\n\t\t"
                }), G.assets[G.a836.Material].a643SolidMaterial.vertexColors = THREE.VertexColors, G.assets[G.a836.Material].a643TransparentMaterial.vertexColors = THREE.VertexColors, G.assets[G.a836.Material].a643SolidMaterial.needsUpdate = !0, G.assets[G.a836.Material].a643TransparentMaterial.needsUpdate = !0, r.worldTexture.needsUpdate = !0, t) {
                var e = new a173;
                e.a725Index = playerSkin, e.name = playerName + "§" + wwClientIp, G.socket.send(e.a614())
            }
        }))
    },
    drawLeaderboard: function() {
        this.leaderboard = [];
        for (var t = [], e = 0; e < 120; e++)
            if (G.othera822ers[e]) {
                var i = G.othera822ers[e];
                t.push([i.a649, i.id, i.name])
            } t.sort((function(t, e) {
            return t[0] - e[0]
        }));
        for (var o = -1, n = 0, s = !1, r = !1, a = !1, h = (e = 0, 0), l = t.length - 1; l >= 0; l--) a = t[l][1] == this.a865.player.id, t[l][0] != o && (o = t[l][0], n++), r = !1, e < 10 ? (a && (s = !0), r = !0) : s ? 10 == e && (r = !0) : a && (r = !0), r && (this.leaderboard[h] = {
            me: a,
            rank: n,
            name: t[l][2],
            a649: t[l][0]
        }, h++), e++
    },
    opena793: function() {
        wwHideDedAd(), this.hideChatInput(), GAME.a510 = !0, this.uiManager.menuActive = !0
    },
    closea793: function() {
        GAME.a510 = !1, this.showChatInput(), this.firstTimeIna793 && (this.firstTimeIna793 = !1), this.uiManager.menuActive = !1
    },
    update: function() {
        this.state == G.a817.a819 ? this.updated || (this.updated = !0, this.preLoad()) : this.state == G.a817.a820 ? this.updated = !0 : this.state == G.a817.a821 ? this.updated || (this.updated = !0, this.postLoad()) : this.state == G.a817.a822 && (this.bottleneckCanvas.cvs.clear(), this.updated = !0, G.a783.a428(), this.time = Date.now(), this.a865.update(), this.uiManager.update(), this.shoutOut.update(), this.bottleneckCanvas.cvs.flip(), this.bottleneckCanvas.cvs.show()), null !== this.nextState && this.updated && (this.nextState == G.a817.a822 && (this.loadingUI.hide(), this.uiManager.show()), this.state = this.nextState, this.nextState = null, this.updated = !1)
    },
    draw: function() {
        this.state == G.a817.a819 || this.state == G.a817.a820 || this.state == G.a817.a821 ? this.loadingUI.draw() : this.state == G.a817.a822 && (this.graphicsManager.draw(), this.uiManager.draw())
    },
    onResize: function() {
        G.Base.prototype.onResize.call(this), this.uiManager.onResize(), this.loadingUI.onResize(), void 0 !== this.graphicsManager && this.graphicsManager.onResize(), void 0 !== this.a865 && (this.a865.onResize(), this.a865.player.onResize())
    },
    a393: function() {
        this.cameraFov = G.a813.fov, this.camera.fov = G.a813.fov, this.camera.updateProjectionMatrix()
    },
    updateZoom: function(t) {
        this.camera.zoom = t, this.camera.updateProjectionMatrix()
    },
    resetAllChunks: function() {
        for (var t = 0; t < this.a865.a363; t++)
            for (var e = 0; e < this.a865.a363; e++)
                for (var i = 0; i < this.a865.a363; i++) this.a865.a643s[t][e][i] && this.a865.a643s[t][e][i].solidMesh && this.a865.a643s[t][e][i].reset()
    },
    addKillfeed: function(t, e, i) {
        this.killfeed.push({
            killer: t,
            action: e,
            victim: i
        })
    },
    addChat: function(t, e) {
        if ("" != (e = e.trim())) {
            var i = "server";
            255 != t && (i = G.othera822ers[t].name), GAME.chat.push({
                name: i,
                msg: e
            }), clearInterval(this.chatInterval), this.chatInterval = setInterval((function() {
                GAME.chat.length < 5 || GAME.chat.slice(GAME.chat.length - 5, GAME.chat.length), GAME.chat.shift()
            }), 8e3), GAME.newChatMessage = !0
        }
    },
    hideChatInput: function() {
        this.chatInput.style.display = "none", this.chatInput.blur()
    },
    showChatInput: function() {
        this.chatInput.style.display = "block"
    },
    disconnect: function() {
        location.reload()
    }
}), G.a597 = {
    keybinds: [{
        actionName: "moveForward",
        controlName: "W",
        code: 87
    }, {
        actionName: "moveBackward",
        controlName: "S",
        code: 83
    }, {
        actionName: "strafeLeft",
        controlName: "A",
        code: 65
    }, {
        actionName: "strafeRight",
        controlName: "D",
        code: 68
    }, {
        actionName: "moveUpward",
        controlName: "SPACE",
        code: 32
    }, {
        actionName: "build",
        controlName: "SHIFT",
        code: 16
    }, {
        actionName: "use",
        controlName: "E",
        code: 69
    }, {
        actionName: "shoot",
        controlName: "LMOUSE",
        mouse: !0,
        button: 1
    }, {
        actionName: "aim",
        controlName: "RMOUSE",
        mouse: !0,
        button: 3
    }],
    init: function() {
        this.rebound = new G.a786(G.a597.keybinds), this.rebound.init(), G.Keybinds = {};
        for (var t = 0; t < this.keybinds.length; t++) {
            var e = this.keybinds[t];
            G.Keybinds[e.actionName] = e
        }
    }
}, G.a813 = function() {
    var t = {
        fovMin: 60,
        fovMax: 120,
        fov: 75,
        ao: !0,
        mouseMin: 1,
        mouseMax: 10,
        mouse: 0,
        mouseValue: 0,
        mouseInvertY: !1,
        keybinds: null
    };
    return {
        loada813: function() {
            var e = localStorage["gs-settings"];
            if (void 0 !== e) {
                var i = JSON.parse(e);
                for (var o in i) o in t && (t[o] = i[o]);
                i.keybinds && (G.a597.keybinds = i.keybinds)
            } else this.mouse = 7;
            G.a597.init(), t.keybinds = G.a597.keybinds
        },
        savea813: function() {
            var e = JSON.stringify(t);
            localStorage["gs-settings"] = e
        },
        get fovMin() {
            return t.fovMin
        },
        get fovMax() {
            return t.fovMax
        },
        set fov(e) {
            var i = parseInt(e);
            isNaN(i) || (i = Math.floor(G.a785.clamp(i, t.fovMin, t.fovMax)), t.fov = i, GAME.a393(), this.savea813())
        },
        get fov() {
            return t.fov
        },
        set ao(e) {
            window.alert("This setting will be applied after you reload the page"), t.ao = e, this.savea813()
        },
        get ao() {
            return t.ao
        },
        get mouseMin() {
            return t.mouseMin
        },
        get mouseMax() {
            return t.mouseMax
        },
        set mouse(e) {
            var i = parseInt(e);
            isNaN(i) || (i = Math.floor(G.a785.clamp(i, t.mouseMin, t.mouseMax)), t.mouse = i, t.mouseValue = t.mouse / 5 * .066, this.savea813())
        },
        get mouse() {
            return t.mouse
        },
        get mouseValue() {
            return t.mouseValue
        },
        set mouseInvertY(e) {
            t.mouseInvertY = !0 === e, this.savea813(), void 0 !== GAME.a865 && (GAME.a865.player.controls.mouseInvertY = t.mouseInvertY)
        },
        get mouseInvertY() {
            return t.mouseInvertY
        }
    }
}();

// https://craftnite.io/yo.js?v=8