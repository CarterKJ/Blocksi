! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(r, i, function(t) {
                return e[t]
            }.bind(null, i));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 539)
}([, function(e, t, n) {
    "use strict";
    var r = function() {
            return function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return function(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !r && c.return && c.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function a(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }
    var c = n(4),
        s = c.typeErrors,
        u = c.trackPriority,
        l = n(2);

    function f(e, t, n, r) {
        if (!(r in t || r.match(/^on[a-z]+$/))) {
            var o = void 0;
            try {
                o = i(e[r])
            } catch (e) {}
            "function" === o && (t[r] = function() {
                var e;
                return (e = this[n])[r].apply(e, arguments)
            })
        }
    }

    function p(e) {
        return "object" === (void 0 === e ? "undefined" : i(e)) && !Array.isArray(e)
    }

    function d(e) {
        Object.getOwnPropertyNames(e).forEach(function(t) {
            t.startsWith("_") && h(e, t)
        })
    }

    function h(e, t) {
        var n = Object.getOwnPropertyDescriptor(e, t);
        n.enumerable = !1, Object.defineProperty(e, t, n)
    }

    function v(e) {
        return e.map(y)
    }

    function y(e) {
        return Array.isArray(e) ? v(e) : e instanceof Set ? v([].concat(a(e))) : e instanceof Map ? [].concat(a(e.entries())).reduce(function(e, t) {
            var n = r(t, 2),
                i = n[0],
                a = n[1];
            return Object.assign(o({}, i, y(a)), e)
        }, {}) : e && "object" === (void 0 === e ? "undefined" : i(e)) ? (t = e, Object.entries(t).reduce(function(e, t) {
            var n = r(t, 2),
                i = n[0],
                a = n[1];
            return Object.assign(o({}, i, y(a)), e)
        }, {})) : e;
        var t
    }

    function b(e) {
        return g(e, [{
            prop: "dominantSpeakerPriority",
            type: "string",
            payloadProp: "active_speaker_priority"
        }, {
            prop: "maxSubscriptionBitrate",
            type: "number",
            payloadProp: "max_subscription_bandwidth"
        }, {
            prop: "maxTracks",
            type: "number",
            payloadProp: "max_tracks"
        }, {
            prop: "mode",
            type: "string"
        }, {
            prop: "renderDimensions",
            type: "object",
            payloadProp: "render_dimensions",
            transform: _
        }, {
            prop: "trackSwitchOffMode",
            type: "string",
            payloadProp: "track_switch_off"
        }])
    }

    function m(e) {
        return g(e, [{
            prop: "height",
            type: "number"
        }, {
            prop: "width",
            type: "number"
        }])
    }

    function _(e) {
        return g(e, [{
            prop: u.PRIORITY_HIGH,
            type: "object",
            transform: m
        }, {
            prop: u.PRIORITY_LOW,
            type: "object",
            transform: m
        }, {
            prop: u.PRIORITY_STANDARD,
            type: "object",
            transform: m
        }])
    }

    function g(e, t) {
        return t.reduce(function(t, n) {
            var r = n.prop,
                a = n.type,
                c = n.payloadProp,
                s = void 0 === c ? r : c,
                u = n.transform,
                l = void 0 === u ? function(e) {
                    return e
                } : u;
            return i(e[r]) === a ? Object.assign(o({}, s, l(e[r])), t) : t
        }, {})
    }
    t.constants = c, t.createBandwidthProfilePayload = function(e) {
        return g(e, [{
            prop: "video",
            type: "object",
            transform: b
        }])
    }, t.createMediaSignalingPayload = function(e, t, n, r) {
        var i = {
            transports: [{
                type: "data-channel"
            }]
        };
        return Object.assign(e ? {
            active_speaker: i
        } : {}, t ? {
            network_quality: i
        } : {}, n ? {
            track_priority: i
        } : {}, r ? {
            track_switch_off: i
        } : {})
    }, t.createRoomConnectEventPayload = function(e) {
        var t = {
            iceServers: (e.iceServers || []).length,
            audioTracks: (e.tracks || []).filter(function(e) {
                return "audio" === e.kind
            }).length,
            videoTracks: (e.tracks || []).filter(function(e) {
                return "video" === e.kind
            }).length,
            dataTracks: (e.tracks || []).filter(function(e) {
                return "data" === e.kind
            }).length
        };
        if ([
                ["audio"],
                ["automaticSubscription"],
                ["enableDscp"],
                ["eventListener"],
                ["preflight"],
                ["video"],
                ["dominantSpeaker", "enableDominantSpeaker"]
            ].forEach(function(n) {
                var i = r(n, 2),
                    o = i[0],
                    a = i[1];
                t[a = a || o] = e[o] ? "true" : "false"
            }), [
                ["maxVideoBitrate"],
                ["maxAudioBitrate"],
                ["iceTransportPolicy"],
                ["region"],
                ["name", "roomName"]
            ].forEach(function(n) {
                var i = r(n, 2),
                    o = i[0],
                    a = i[1];
                a = a || o, "number" != typeof e[o] && "string" != typeof e[o] || (t[a] = e[o])
            }), ["preferredAudioCodecs", "preferredVideoCodecs"].forEach(function(n) {
                n in e && (t[n] = JSON.stringify(e[n]))
            }), "networkQuality" in e && (t.networkQualityConfiguration = {}, p(e.networkQuality) ? ["local", "remote"].forEach(function(n) {
                "number" == typeof e.networkQuality[n] && (t.networkQualityConfiguration[n] = e.networkQuality[n])
            }) : (t.networkQualityConfiguration.remote = 0, t.networkQualityConfiguration.local = e.networkQuality ? 1 : 0)), e.bandwidthProfile && e.bandwidthProfile.video) {
            var n = e.bandwidthProfile.video || {};
            t.bandwidthProfileOptions = {}, ["mode", "maxTracks", "trackSwitchOffMode", "dominantSpeakerPriority", "maxSubscriptionBitrate"].forEach(function(e) {
                "number" != typeof n[e] && "string" != typeof n[e] || e in n && (t.bandwidthProfileOptions[e] = n[e])
            }), "renderDimensions" in n && (t.bandwidthProfileOptions.renderDimensions = JSON.stringify(n.renderDimensions))
        }
        return {
            group: "room",
            name: "connect",
            level: "info",
            payload: t
        }
    }, t.createSubscribePayload = function(e) {
        return {
            rules: [{
                type: e ? "include" : "exclude",
                all: !0
            }],
            revision: 1
        }
    }, t.asLocalTrack = function(e, t) {
        if (e instanceof t.LocalAudioTrack || e instanceof t.LocalVideoTrack || e instanceof t.LocalDataTrack) return e;
        if (e instanceof t.MediaStreamTrack) return "audio" === e.kind ? new t.LocalAudioTrack(e, t) : new t.LocalVideoTrack(e, t);
        throw s.INVALID_TYPE("track", "LocalAudioTrack, LocalVideoTrack, LocalDataTrack, or MediaStreamTrack")
    }, t.asLocalTrackPublication = function(e, t, n, r) {
        return new(0, {
            audio: r.LocalAudioTrackPublication,
            video: r.LocalVideoTrackPublication,
            data: r.LocalDataTrackPublication
        } [e.kind])(t, e, n, r)
    }, t.capitalize = function(e) {
        return e[0].toUpperCase() + e.slice(1)
    }, t.deprecateEvents = function(e, t, n, r) {
        var i = new Set;
        t.on("newListener", function o(a) {
            n.has(a) && !i.has(a) && (r.deprecated(e + "#" + a + " has been deprecated and scheduled for removal in twilio-video.js@2.0.0." + (n.get(a) ? " Use " + e + "#" + n.get(a) + " instead." : "")), i.add(a)), i.size >= n.size && t.removeListener("newListener", o)
        })
    }, t.difference = function(e, t) {
        e = Array.isArray(e) ? new Set(e) : new Set(e.values()), t = Array.isArray(t) ? new Set(t) : new Set(t.values());
        var n = new Set;
        return e.forEach(function(e) {
            t.has(e) || n.add(e)
        }), n
    }, t.filterObject = function(e, t) {
        return Object.keys(e).reduce(function(n, r) {
            return e[r] !== t && (n[r] = e[r]), n
        }, {})
    }, t.flatMap = function(e, t) {
        var n = e instanceof Map || e instanceof Set ? Array.from(e.values()) : e;
        return t = t || function(e) {
            return e
        }, n.reduce(function(e, n) {
            var r = t(n);
            return e.concat(r)
        }, [])
    }, t.getUserAgent = function() {
        return "undefined" != typeof navigator && navigator.userAgent ? navigator.userAgent : "Unknown"
    }, t.hidePrivateProperties = d, t.hidePrivateAndCertainPublicPropertiesInClass = function(e, t) {
        return function(n) {
            function r() {
                var e;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, r);
                for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                var a = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [this].concat(i)));
                return d(a),
                    function(e) {
                        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).forEach(function(t) {
                            e.hasOwnProperty(t) && h(e, t)
                        })
                    }(a, t), a
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(r, e), r
        }()
    }, t.isDeepEqual = function e(t, n) {
        if (t === n) return !0;
        if ((void 0 === t ? "undefined" : i(t)) !== (void 0 === n ? "undefined" : i(n))) return !1;
        if (null === t) return null === n;
        if (null === n) return !1;
        if (Array.isArray(t)) return Array.isArray(n) && t.length === n.length && t.every(function(t, r) {
            return e(t, n[r])
        });
        if ("object" === (void 0 === t ? "undefined" : i(t))) {
            var r = Object.keys(t).sort(),
                o = Object.keys(n).sort();
            return !Array.isArray(n) && e(r, o) && r.every(function(r) {
                return e(t[r], n[r])
            })
        }
        return !1
    }, t.isNonArrayObject = p, t.inRange = function(e, t, n) {
        return t <= e && e <= n
    }, t.makeUUID = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var t = 16 * Math.random() | 0;
            return ("x" === e ? t : 3 & t | 8).toString(16)
        })
    }, t.oncePerTick = function(e) {
        var t = null;

        function n() {
            t = null, e()
        }
        return function() {
            t && clearTimeout(t), t = setTimeout(n)
        }
    }, t.promiseFromEvents = function(e, t, n, r) {
        return new Promise(function(i, o) {
            function c() {
                var e = [].slice.call(arguments);
                r && t.removeListener(r, s), i.apply(void 0, a(e))
            }

            function s() {
                var e = [].slice.call(arguments);
                t.removeListener(n, c), o.apply(void 0, a(e))
            }
            t.once(n, c), r && t.once(r, s), e()
        })
    }, t.getOrNull = function(e, t) {
        return t.split(".").reduce(function(e, t) {
            return e ? e[t] : null
        }, e)
    }, t.defer = function() {
        var e = {};
        return e.promise = new Promise(function(t, n) {
            e.resolve = t, e.reject = n
        }), e
    }, t.delegateMethods = function(e, t, n) {
        for (var r in e) f(e, t, n, r)
    }, t.proxyProperties = function(e, t, n) {
        Object.getOwnPropertyNames(e).forEach(function(e) {
            ! function(e, t, n, r) {
                if (!(r in t)) r.match(/^on[a-z]+$/) ? (Object.defineProperty(t, r, {
                    value: null,
                    writable: !0
                }), n.addEventListener(r.slice(2), function() {
                    t.dispatchEvent.apply(t, arguments)
                })) : Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: function() {
                        return n[r]
                    }
                })
            }(0, t, n, e)
        })
    }, t.legacyPromise = function(e, t, n) {
        return t ? e.then(function(e) {
            t(e)
        }, function(e) {
            n(e)
        }) : e
    }, t.buildLogLevels = function(e) {
        return "string" == typeof e ? {
            default: e,
            media: e,
            signaling: e,
            webrtc: e
        } : e
    }, t.trackClass = function(e, t) {
        return (t = t ? "Local" : "") + (e.kind || "").replace(/\w{1}/, function(e) {
            return e.toUpperCase()
        }) + "Track"
    }, t.trackPublicationClass = function(e, t) {
        return (t = t ? "Local" : "") + (e.kind || "").replace(/\w{1}/, function(e) {
            return e.toUpperCase()
        }) + "TrackPublication"
    }, t.valueToJSON = y, t.withJitter = function(e, t) {
        var n = Math.random();
        return e - t + Math.floor(2 * t * n + .5)
    }, t.isChromeScreenShareTrack = function(e) {
        return "chrome" === l.guessBrowser() && "video" === e.kind && e.label && (/^screen:[0-9]+/.test(e.label) || /^web-contents-media-stream:[0-9\/]+/.test(e.label) || /^window:[0-9]+/.test(e.label))
    }, t.waitForSometime = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
        return new Promise(function(t) {
            return setTimeout(t, e)
        })
    }, t.waitForEvent = function(e, t) {
        return new Promise(function(n) {
            e.addEventListener(t, function r(i) {
                e.removeEventListener(t, r), n(i)
            })
        })
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t, n, r) {
        if (!(r in t || r.match(/^on[a-z]+$/))) {
            var i;
            try {
                i = typeof e[r]
            } catch (e) {}
            "function" === i && (t[r] = function() {
                return this[n][r].apply(this[n], arguments)
            })
        }
    }

    function i() {
        return "undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : null
    }

    function o(e) {
        return void 0 === e && (e = i()), /Chrome|CriOS/.test(e) ? "chrome" : /Firefox|FxiOS/.test(e) ? "firefox" : /Safari/.test(e) ? "safari" : null
    }
    t.defer = function() {
        var e = {};
        return e.promise = new Promise(function(t, n) {
            e.resolve = t, e.reject = n
        }), e
    }, t.delegateMethods = function(e, t, n) {
        for (var i in e) r(e, t, n, i)
    }, t.difference = function(e, t) {
        e = Array.isArray(e) ? new Set(e) : new Set(e.values()), t = Array.isArray(t) ? new Set(t) : new Set(t.values());
        var n = new Set;
        return e.forEach(function(e) {
            t.has(e) || n.add(e)
        }), n
    }, t.flatMap = function(e, t) {
        return (e instanceof Map || e instanceof Set ? Array.from(e.values()) : e).reduce(function(e, n) {
            var r = t(n);
            return e.concat(r)
        }, [])
    }, t.guessBrowser = o, t.guessBrowserVersion = function(e) {
        void 0 === e && (e = i());
        var t = {
            chrome: "Chrome|CriOS",
            firefox: "Firefox|FxiOS",
            safari: "Version"
        } [o(e)];
        if (!t) return null;
        var n = new RegExp("(" + t + ")/([^\\s]+)"),
            r = (e.match(n) || [])[2];
        if (!r) return null;
        var a = r.split(".").map(Number);
        return {
            major: isNaN(a[0]) ? null : a[0],
            minor: isNaN(a[1]) ? null : a[1]
        }
    }, t.interceptEvent = function(e, t) {
        var n = null;
        Object.defineProperty(e, "on" + t, {
            get: function() {
                return n
            },
            set: function(e) {
                n && this.removeEventListener(t, n), "function" == typeof e ? (n = e, this.addEventListener(t, n)) : n = null
            }
        })
    }, t.legacyPromise = function(e, t, n) {
        return t ? e.then(function(e) {
            t(e)
        }, function(e) {
            n(e)
        }) : e
    }, t.makeUUID = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var t = 16 * Math.random() | 0;
            return ("x" === e ? t : 3 & t | 8).toString(16)
        })
    }, t.proxyProperties = function(e, t, n) {
        Object.getOwnPropertyNames(e).forEach(function(e) {
            ! function(e, t, n, r) {
                if (!(r in t)) r.match(/^on[a-z]+$/) ? (Object.defineProperty(t, r, {
                    value: null,
                    writable: !0
                }), n.addEventListener(r.slice(2), function() {
                    t.dispatchEvent.apply(t, arguments)
                })) : Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: function() {
                        return n[r]
                    }
                })
            }(0, t, n, e)
        })
    }, t.support = function() {
        return "object" == typeof navigator && "object" == typeof navigator.mediaDevices && "function" == typeof navigator.mediaDevices.getUserMedia && "function" == typeof RTCPeerConnection
    }
}, function(e, t, n) {
    "use strict";
    var r, i = "object" == typeof Reflect ? Reflect : null,
        o = i && "function" == typeof i.apply ? i.apply : function(e, t, n) {
            return Function.prototype.apply.call(e, t, n)
        };
    r = i && "function" == typeof i.ownKeys ? i.ownKeys : Object.getOwnPropertySymbols ? function(e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
    } : function(e) {
        return Object.getOwnPropertyNames(e)
    };
    var a = Number.isNaN || function(e) {
        return e != e
    };

    function c() {
        c.init.call(this)
    }
    e.exports = c, c.EventEmitter = c, c.prototype._events = void 0, c.prototype._eventsCount = 0, c.prototype._maxListeners = void 0;
    var s = 10;

    function u(e) {
        return void 0 === e._maxListeners ? c.defaultMaxListeners : e._maxListeners
    }

    function l(e, t, n, r) {
        var i, o, a, c;
        if ("function" != typeof n) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n);
        if (void 0 === (o = e._events) ? (o = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== o.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), o = e._events), a = o[t]), void 0 === a) a = o[t] = n, ++e._eventsCount;
        else if ("function" == typeof a ? a = o[t] = r ? [n, a] : [a, n] : r ? a.unshift(n) : a.push(n), (i = u(e)) > 0 && a.length > i && !a.warned) {
            a.warned = !0;
            var s = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            s.name = "MaxListenersExceededWarning", s.emitter = e, s.type = t, s.count = a.length, c = s, console && console.warn && console.warn(c)
        }
        return e
    }

    function f(e, t, n) {
        var r = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: n
            },
            i = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e.push(arguments[t]);
                this.fired || (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, o(this.listener, this.target, e))
            }.bind(r);
        return i.listener = n, r.wrapFn = i, i
    }

    function p(e, t, n) {
        var r = e._events;
        if (void 0 === r) return [];
        var i = r[t];
        return void 0 === i ? [] : "function" == typeof i ? n ? [i.listener || i] : [i] : n ? function(e) {
            for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
            return t
        }(i) : h(i, i.length)
    }

    function d(e) {
        var t = this._events;
        if (void 0 !== t) {
            var n = t[e];
            if ("function" == typeof n) return 1;
            if (void 0 !== n) return n.length
        }
        return 0
    }

    function h(e, t) {
        for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
        return n
    }
    Object.defineProperty(c, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return s
        },
        set: function(e) {
            if ("number" != typeof e || e < 0 || a(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            s = e
        }
    }), c.init = function() {
        void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    }, c.prototype.setMaxListeners = function(e) {
        if ("number" != typeof e || e < 0 || a(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
        return this._maxListeners = e, this
    }, c.prototype.getMaxListeners = function() {
        return u(this)
    }, c.prototype.emit = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
        var r = "error" === e,
            i = this._events;
        if (void 0 !== i) r = r && void 0 === i.error;
        else if (!r) return !1;
        if (r) {
            var a;
            if (t.length > 0 && (a = t[0]), a instanceof Error) throw a;
            var c = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
            throw c.context = a, c
        }
        var s = i[e];
        if (void 0 === s) return !1;
        if ("function" == typeof s) o(s, this, t);
        else {
            var u = s.length,
                l = h(s, u);
            for (n = 0; n < u; ++n) o(l[n], this, t)
        }
        return !0
    }, c.prototype.addListener = function(e, t) {
        return l(this, e, t, !1)
    }, c.prototype.on = c.prototype.addListener, c.prototype.prependListener = function(e, t) {
        return l(this, e, t, !0)
    }, c.prototype.once = function(e, t) {
        if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
        return this.on(e, f(this, e, t)), this
    }, c.prototype.prependOnceListener = function(e, t) {
        if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
        return this.prependListener(e, f(this, e, t)), this
    }, c.prototype.removeListener = function(e, t) {
        var n, r, i, o, a;
        if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
        if (void 0 === (r = this._events)) return this;
        if (void 0 === (n = r[e])) return this;
        if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
        else if ("function" != typeof n) {
            for (i = -1, o = n.length - 1; o >= 0; o--)
                if (n[o] === t || n[o].listener === t) {
                    a = n[o].listener, i = o;
                    break
                } if (i < 0) return this;
            0 === i ? n.shift() : function(e, t) {
                for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                e.pop()
            }(n, i), 1 === n.length && (r[e] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", e, a || t)
        }
        return this
    }, c.prototype.off = c.prototype.removeListener, c.prototype.removeAllListeners = function(e) {
        var t, n, r;
        if (void 0 === (n = this._events)) return this;
        if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;
        if (0 === arguments.length) {
            var i, o = Object.keys(n);
            for (r = 0; r < o.length; ++r) "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
        }
        if ("function" == typeof(t = n[e])) this.removeListener(e, t);
        else if (void 0 !== t)
            for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
        return this
    }, c.prototype.listeners = function(e) {
        return p(this, e, !0)
    }, c.prototype.rawListeners = function(e) {
        return p(this, e, !1)
    }, c.listenerCount = function(e, t) {
        return "function" == typeof e.listenerCount ? e.listenerCount(t) : d.call(e, t)
    }, c.prototype.listenerCount = d, c.prototype.eventNames = function() {
        return this._eventsCount > 0 ? r(this._events) : []
    }
}, function(e, t, n) {
    "use strict";
    e.exports.DEFAULT_ENVIRONMENT = "prod", e.exports.DEFAULT_REALM = "us1", e.exports.DEFAULT_REGION = "gll", e.exports.DEFAULT_LOG_LEVEL = "warn", e.exports.DEFAULT_LOGGER_NAME = "twilio-video", e.exports.WS_SERVER = function(e, t) {
        return t = "gll" === t ? "global" : encodeURIComponent(t), "prod" === e ? "wss://" + t + ".vss.twilio.com/signaling" : "wss://" + t + ".vss." + e + ".twilio.com/signaling"
    }, e.exports.PUBLISH_MAX_ATTEMPTS = 5, e.exports.PUBLISH_BACKOFF_JITTER = 10, e.exports.PUBLISH_BACKOFF_MS = 20, e.exports.typeErrors = {
        ILLEGAL_INVOKE: function(e, t) {
            return new TypeError("Illegal call to " + e + ": " + t)
        },
        INVALID_TYPE: function(e, t) {
            return new TypeError(e + " must be " + (["a", "e", "i", "o", "u"].includes(t.toLowerCase()[0]) ? "an" : "a") + " " + t)
        },
        INVALID_VALUE: function(e, t) {
            return new RangeError(e + " must be one of " + t.join(", "))
        },
        REQUIRED_ARGUMENT: function(e) {
            return new TypeError(e + " must be specified")
        }
    }, e.exports.DEFAULT_ICE_GATHERING_TIMEOUT_MS = 15e3, e.exports.DEFAULT_SESSION_TIMEOUT_SEC = 30, e.exports.DEFAULT_NQ_LEVEL_LOCAL = 1, e.exports.DEFAULT_NQ_LEVEL_REMOTE = 0, e.exports.MAX_NQ_LEVEL = 3, e.exports.ICE_ACTIVITY_CHECK_PERIOD_MS = 1e3, e.exports.ICE_INACTIVITY_THRESHOLD_MS = 3e3, e.exports.iceRestartBackoffConfig = {
        factor: 1.1,
        initialDelay: 1,
        maxDelay: 1e3 * e.exports.DEFAULT_SESSION_TIMEOUT_SEC,
        randomisationFactor: .5
    }, e.exports.reconnectBackoffConfig = {
        factor: 1.5,
        initialDelay: 80,
        randomisationFactor: .5
    }, e.exports.subscriptionMode = {
        MODE_COLLABORATION: "collaboration",
        MODE_GRID: "grid",
        MODE_PRESENTATION: "presentation"
    }, e.exports.trackSwitchOffMode = {
        MODE_DISABLED: "disabled",
        MODE_DETECTED: "detected",
        MODE_PREDICTED: "predicted"
    }, e.exports.trackPriority = {
        PRIORITY_HIGH: "high",
        PRIORITY_LOW: "low",
        PRIORITY_STANDARD: "standard"
    }
}, function(e, t, n) {
    (function(e) {
        var r = Object.getOwnPropertyDescriptors || function(e) {
                for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) n[t[r]] = Object.getOwnPropertyDescriptor(e, t[r]);
                return n
            },
            i = /%[sdj%]/g;
        t.format = function(e) {
            if (!b(e)) {
                for (var t = [], n = 0; n < arguments.length; n++) t.push(c(arguments[n]));
                return t.join(" ")
            }
            n = 1;
            for (var r = arguments, o = r.length, a = String(e).replace(i, function(e) {
                    if ("%%" === e) return "%";
                    if (n >= o) return e;
                    switch (e) {
                        case "%s":
                            return String(r[n++]);
                        case "%d":
                            return Number(r[n++]);
                        case "%j":
                            try {
                                return JSON.stringify(r[n++])
                            } catch (e) {
                                return "[Circular]"
                            }
                        default:
                            return e
                    }
                }), s = r[n]; n < o; s = r[++n]) v(s) || !g(s) ? a += " " + s : a += " " + c(s);
            return a
        }, t.deprecate = function(n, r) {
            if (void 0 !== e && !0 === e.noDeprecation) return n;
            if (void 0 === e) return function() {
                return t.deprecate(n, r).apply(this, arguments)
            };
            var i = !1;
            return function() {
                if (!i) {
                    if (e.throwDeprecation) throw new Error(r);
                    e.traceDeprecation ? console.trace(r) : console.error(r), i = !0
                }
                return n.apply(this, arguments)
            }
        };
        var o, a = {};

        function c(e, n) {
            var r = {
                seen: [],
                stylize: u
            };
            return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), h(n) ? r.showHidden = n : n && t._extend(r, n), m(r.showHidden) && (r.showHidden = !1), m(r.depth) && (r.depth = 2), m(r.colors) && (r.colors = !1), m(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = s), l(r, e, r.depth)
        }

        function s(e, t) {
            var n = c.styles[t];
            return n ? "[" + c.colors[n][0] + "m" + e + "[" + c.colors[n][1] + "m" : e
        }

        function u(e, t) {
            return e
        }

        function l(e, n, r) {
            if (e.customInspect && n && S(n.inspect) && n.inspect !== t.inspect && (!n.constructor || n.constructor.prototype !== n)) {
                var i = n.inspect(r, e);
                return b(i) || (i = l(e, i, r)), i
            }
            var o = function(e, t) {
                if (m(t)) return e.stylize("undefined", "undefined");
                if (b(t)) {
                    var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                    return e.stylize(n, "string")
                }
                if (y(t)) return e.stylize("" + t, "number");
                if (h(t)) return e.stylize("" + t, "boolean");
                if (v(t)) return e.stylize("null", "null")
            }(e, n);
            if (o) return o;
            var a = Object.keys(n),
                c = function(e) {
                    var t = {};
                    return e.forEach(function(e, n) {
                        t[e] = !0
                    }), t
                }(a);
            if (e.showHidden && (a = Object.getOwnPropertyNames(n)), w(n) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0)) return f(n);
            if (0 === a.length) {
                if (S(n)) {
                    var s = n.name ? ": " + n.name : "";
                    return e.stylize("[Function" + s + "]", "special")
                }
                if (_(n)) return e.stylize(RegExp.prototype.toString.call(n), "regexp");
                if (k(n)) return e.stylize(Date.prototype.toString.call(n), "date");
                if (w(n)) return f(n)
            }
            var u, g = "",
                O = !1,
                T = ["{", "}"];
            (d(n) && (O = !0, T = ["[", "]"]), S(n)) && (g = " [Function" + (n.name ? ": " + n.name : "") + "]");
            return _(n) && (g = " " + RegExp.prototype.toString.call(n)), k(n) && (g = " " + Date.prototype.toUTCString.call(n)), w(n) && (g = " " + f(n)), 0 !== a.length || O && 0 != n.length ? r < 0 ? _(n) ? e.stylize(RegExp.prototype.toString.call(n), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(n), u = O ? function(e, t, n, r, i) {
                for (var o = [], a = 0, c = t.length; a < c; ++a) E(t, String(a)) ? o.push(p(e, t, n, r, String(a), !0)) : o.push("");
                return i.forEach(function(i) {
                    i.match(/^\d+$/) || o.push(p(e, t, n, r, i, !0))
                }), o
            }(e, n, r, c, a) : a.map(function(t) {
                return p(e, n, r, c, t, O)
            }), e.seen.pop(), function(e, t, n) {
                if (e.reduce(function(e, t) {
                        return 0, t.indexOf("\n") >= 0 && 0, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                    }, 0) > 60) return n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1];
                return n[0] + t + " " + e.join(", ") + " " + n[1]
            }(u, g, T)) : T[0] + g + T[1]
        }

        function f(e) {
            return "[" + Error.prototype.toString.call(e) + "]"
        }

        function p(e, t, n, r, i, o) {
            var a, c, s;
            if ((s = Object.getOwnPropertyDescriptor(t, i) || {
                    value: t[i]
                }).get ? c = s.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : s.set && (c = e.stylize("[Setter]", "special")), E(r, i) || (a = "[" + i + "]"), c || (e.seen.indexOf(s.value) < 0 ? (c = v(n) ? l(e, s.value, null) : l(e, s.value, n - 1)).indexOf("\n") > -1 && (c = o ? c.split("\n").map(function(e) {
                    return "  " + e
                }).join("\n").substr(2) : "\n" + c.split("\n").map(function(e) {
                    return "   " + e
                }).join("\n")) : c = e.stylize("[Circular]", "special")), m(a)) {
                if (o && i.match(/^\d+$/)) return c;
                (a = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.substr(1, a.length - 2), a = e.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), a = e.stylize(a, "string"))
            }
            return a + ": " + c
        }

        function d(e) {
            return Array.isArray(e)
        }

        function h(e) {
            return "boolean" == typeof e
        }

        function v(e) {
            return null === e
        }

        function y(e) {
            return "number" == typeof e
        }

        function b(e) {
            return "string" == typeof e
        }

        function m(e) {
            return void 0 === e
        }

        function _(e) {
            return g(e) && "[object RegExp]" === O(e)
        }

        function g(e) {
            return "object" == typeof e && null !== e
        }

        function k(e) {
            return g(e) && "[object Date]" === O(e)
        }

        function w(e) {
            return g(e) && ("[object Error]" === O(e) || e instanceof Error)
        }

        function S(e) {
            return "function" == typeof e
        }

        function O(e) {
            return Object.prototype.toString.call(e)
        }

        function T(e) {
            return e < 10 ? "0" + e.toString(10) : e.toString(10)
        }
        t.debuglog = function(n) {
            if (m(o) && (o = e.env.NODE_DEBUG || ""), n = n.toUpperCase(), !a[n])
                if (new RegExp("\\b" + n + "\\b", "i").test(o)) {
                    var r = e.pid;
                    a[n] = function() {
                        var e = t.format.apply(t, arguments);
                        console.error("%s %d: %s", n, r, e)
                    }
                } else a[n] = function() {};
            return a[n]
        }, t.inspect = c, c.colors = {
            bold: [1, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            white: [37, 39],
            grey: [90, 39],
            black: [30, 39],
            blue: [34, 39],
            cyan: [36, 39],
            green: [32, 39],
            magenta: [35, 39],
            red: [31, 39],
            yellow: [33, 39]
        }, c.styles = {
            special: "cyan",
            number: "yellow",
            boolean: "yellow",
            undefined: "grey",
            null: "bold",
            string: "green",
            date: "magenta",
            regexp: "red"
        }, t.isArray = d, t.isBoolean = h, t.isNull = v, t.isNullOrUndefined = function(e) {
            return null == e
        }, t.isNumber = y, t.isString = b, t.isSymbol = function(e) {
            return "symbol" == typeof e
        }, t.isUndefined = m, t.isRegExp = _, t.isObject = g, t.isDate = k, t.isError = w, t.isFunction = S, t.isPrimitive = function(e) {
            return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
        }, t.isBuffer = n(117);
        var P = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        function E(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        t.log = function() {
            var e, n;
            console.log("%s - %s", (e = new Date, n = [T(e.getHours()), T(e.getMinutes()), T(e.getSeconds())].join(":"), [e.getDate(), P[e.getMonth()], n].join(" ")), t.format.apply(t, arguments))
        }, t.inherits = n(31), t._extend = function(e, t) {
            if (!t || !g(t)) return e;
            for (var n = Object.keys(t), r = n.length; r--;) e[n[r]] = t[n[r]];
            return e
        };
        var C = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;

        function j(e, t) {
            if (!e) {
                var n = new Error("Promise was rejected with a falsy value");
                n.reason = e, e = n
            }
            return t(e)
        }
        t.promisify = function(e) {
            if ("function" != typeof e) throw new TypeError('The "original" argument must be of type Function');
            if (C && e[C]) {
                var t;
                if ("function" != typeof(t = e[C])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
                return Object.defineProperty(t, C, {
                    value: t,
                    enumerable: !1,
                    writable: !1,
                    configurable: !0
                }), t
            }

            function t() {
                for (var t, n, r = new Promise(function(e, r) {
                        t = e, n = r
                    }), i = [], o = 0; o < arguments.length; o++) i.push(arguments[o]);
                i.push(function(e, r) {
                    e ? n(e) : t(r)
                });
                try {
                    e.apply(this, i)
                } catch (e) {
                    n(e)
                }
                return r
            }
            return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), C && Object.defineProperty(t, C, {
                value: t,
                enumerable: !1,
                writable: !1,
                configurable: !0
            }), Object.defineProperties(t, r(e))
        }, t.promisify.custom = C, t.callbackify = function(t) {
            if ("function" != typeof t) throw new TypeError('The "original" argument must be of type Function');

            function n() {
                for (var n = [], r = 0; r < arguments.length; r++) n.push(arguments[r]);
                var i = n.pop();
                if ("function" != typeof i) throw new TypeError("The last argument must be of type Function");
                var o = this,
                    a = function() {
                        return i.apply(o, arguments)
                    };
                t.apply(this, n).then(function(t) {
                    e.nextTick(a, null, t)
                }, function(t) {
                    e.nextTick(j, t, a)
                })
            }
            return Object.setPrototypeOf(n, Object.getPrototypeOf(t)), Object.defineProperties(n, r(t)), n
        }
    }).call(this, n(21))
}, , , function(e, t, n) {
    "use strict";
    var r = {};
    Object.defineProperties(r, {
        getStats: {
            enumerable: !0,
            value: n(119)
        },
        getUserMedia: {
            enumerable: !0,
            value: n(120)
        },
        MediaStream: {
            enumerable: !0,
            value: n(53)
        },
        MediaStreamTrack: {
            enumerable: !0,
            value: n(121)
        },
        RTCIceCandidate: {
            enumerable: !0,
            value: n(122)
        },
        RTCPeerConnection: {
            enumerable: !0,
            value: n(123)
        },
        RTCSessionDescription: {
            enumerable: !0,
            value: n(128)
        },
        version: {
            enumerable: !0,
            value: n(129).version
        }
    }), e.exports = r
}, , , , function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var a = n(165),
        c = {};
    t.createTwilioError = function(e, t) {
        return t = "string" == typeof t && t ? t : "Unknown error", c[e = "number" == typeof e ? e : 0] ? new c[e] : new a(e, t)
    };
    var s = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 20101, "Invalid Access Token"))
        }
        return o(t, a), t
    }();
    t.AccessTokenInvalidError = s, Object.defineProperty(c, 20101, {
        value: s
    });
    var u = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 20102, "Invalid Access Token header"))
        }
        return o(t, a), t
    }();
    t.AccessTokenHeaderInvalidError = u, Object.defineProperty(c, 20102, {
        value: u
    });
    var l = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 20103, "Invalid Access Token issuer/subject"))
        }
        return o(t, a), t
    }();
    t.AccessTokenIssuerInvalidError = l, Object.defineProperty(c, 20103, {
        value: l
    });
    var f = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 20104, "Access Token expired or expiration date invalid"))
        }
        return o(t, a), t
    }();
    t.AccessTokenExpiredError = f, Object.defineProperty(c, 20104, {
        value: f
    });
    var p = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 20105, "Access Token not yet valid"))
        }
        return o(t, a), t
    }();
    t.AccessTokenNotYetValidError = p, Object.defineProperty(c, 20105, {
        value: p
    });
    var d = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 20106, "Invalid Access Token grants"))
        }
        return o(t, a), t
    }();
    t.AccessTokenGrantsInvalidError = d, Object.defineProperty(c, 20106, {
        value: d
    });
    var h = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 20107, "Invalid Access Token signature"))
        }
        return o(t, a), t
    }();
    t.AccessTokenSignatureInvalidError = h, Object.defineProperty(c, 20107, {
        value: h
    });
    var v = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53e3, "Signaling connection error"))
        }
        return o(t, a), t
    }();
    t.SignalingConnectionError = v, Object.defineProperty(c, 53e3, {
        value: v
    });
    var y = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53001, "Signaling connection disconnected"))
        }
        return o(t, a), t
    }();
    t.SignalingConnectionDisconnectedError = y, Object.defineProperty(c, 53001, {
        value: y
    });
    var b = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53002, "Signaling connection timed out"))
        }
        return o(t, a), t
    }();
    t.SignalingConnectionTimeoutError = b, Object.defineProperty(c, 53002, {
        value: b
    });
    var m = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53003, "Client received an invalid signaling message"))
        }
        return o(t, a), t
    }();
    t.SignalingIncomingMessageInvalidError = m, Object.defineProperty(c, 53003, {
        value: m
    });
    var _ = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53004, "Client sent an invalid signaling message"))
        }
        return o(t, a), t
    }();
    t.SignalingOutgoingMessageInvalidError = _, Object.defineProperty(c, 53004, {
        value: _
    });
    var g = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53006, "Video server is busy"))
        }
        return o(t, a), t
    }();
    t.SignalingServerBusyError = g, Object.defineProperty(c, 53006, {
        value: g
    });
    var k = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53100, "Room name is invalid"))
        }
        return o(t, a), t
    }();
    t.RoomNameInvalidError = k, Object.defineProperty(c, 53100, {
        value: k
    });
    var w = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53101, "Room name is too long"))
        }
        return o(t, a), t
    }();
    t.RoomNameTooLongError = w, Object.defineProperty(c, 53101, {
        value: w
    });
    var S = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53102, "Room name contains invalid characters"))
        }
        return o(t, a), t
    }();
    t.RoomNameCharsInvalidError = S, Object.defineProperty(c, 53102, {
        value: S
    });
    var O = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53103, "Unable to create Room"))
        }
        return o(t, a), t
    }();
    t.RoomCreateFailedError = O, Object.defineProperty(c, 53103, {
        value: O
    });
    var T = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53104, "Unable to connect to Room"))
        }
        return o(t, a), t
    }();
    t.RoomConnectFailedError = T, Object.defineProperty(c, 53104, {
        value: T
    });
    var P = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53105, "Room contains too many Participants"))
        }
        return o(t, a), t
    }();
    t.RoomMaxParticipantsExceededError = P, Object.defineProperty(c, 53105, {
        value: P
    });
    var E = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53106, "Room not found"))
        }
        return o(t, a), t
    }();
    t.RoomNotFoundError = E, Object.defineProperty(c, 53106, {
        value: E
    });
    var C = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53107, "MaxParticipants is out of range"))
        }
        return o(t, a), t
    }();
    t.RoomMaxParticipantsOutOfRangeError = C, Object.defineProperty(c, 53107, {
        value: C
    });
    var j = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53108, "RoomType is not valid"))
        }
        return o(t, a), t
    }();
    t.RoomTypeInvalidError = j, Object.defineProperty(c, 53108, {
        value: j
    });
    var R = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53109, "Timeout is out of range"))
        }
        return o(t, a), t
    }();
    t.RoomTimeoutOutOfRangeError = R, Object.defineProperty(c, 53109, {
        value: R
    });
    var L = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53110, "StatusCallbackMethod is invalid"))
        }
        return o(t, a), t
    }();
    t.RoomStatusCallbackMethodInvalidError = L, Object.defineProperty(c, 53110, {
        value: L
    });
    var x = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53111, "StatusCallback is invalid"))
        }
        return o(t, a), t
    }();
    t.RoomStatusCallbackInvalidError = x, Object.defineProperty(c, 53111, {
        value: x
    });
    var A = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53112, "Status is invalid"))
        }
        return o(t, a), t
    }();
    t.RoomStatusInvalidError = A, Object.defineProperty(c, 53112, {
        value: A
    });
    var I = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53113, "Room exists"))
        }
        return o(t, a), t
    }();
    t.RoomRoomExistsError = I, Object.defineProperty(c, 53113, {
        value: I
    });
    var D = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53114, "Room creation parameter(s) incompatible with the Room type"))
        }
        return o(t, a), t
    }();
    t.RoomInvalidParametersError = D, Object.defineProperty(c, 53114, {
        value: D
    });
    var M = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53115, "MediaRegion is invalid"))
        }
        return o(t, a), t
    }();
    t.RoomMediaRegionInvalidError = M, Object.defineProperty(c, 53115, {
        value: M
    });
    var N = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53116, "There are no media servers available in the MediaRegion"))
        }
        return o(t, a), t
    }();
    t.RoomMediaRegionUnavailableError = N, Object.defineProperty(c, 53116, {
        value: N
    });
    var B = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53117, "The subscription operation requested is not supported for the Room type"))
        }
        return o(t, a), t
    }();
    t.RoomSubscriptionOperationNotSupportedError = B, Object.defineProperty(c, 53117, {
        value: B
    });
    var F = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53118, "Room completed"))
        }
        return o(t, a), t
    }();
    t.RoomCompletedError = F, Object.defineProperty(c, 53118, {
        value: F
    });
    var V = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53200, "Participant identity is invalid"))
        }
        return o(t, a), t
    }();
    t.ParticipantIdentityInvalidError = V, Object.defineProperty(c, 53200, {
        value: V
    });
    var U = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53201, "Participant identity is too long"))
        }
        return o(t, a), t
    }();
    t.ParticipantIdentityTooLongError = U, Object.defineProperty(c, 53201, {
        value: U
    });
    var Q = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53202, "Participant identity contains invalid characters"))
        }
        return o(t, a), t
    }();
    t.ParticipantIdentityCharsInvalidError = Q, Object.defineProperty(c, 53202, {
        value: Q
    });
    var W = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53203, "Participant has too many Tracks"))
        }
        return o(t, a), t
    }();
    t.ParticipantMaxTracksExceededError = W, Object.defineProperty(c, 53203, {
        value: W
    });
    var q = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53204, "Participant not found"))
        }
        return o(t, a), t
    }();
    t.ParticipantNotFoundError = q, Object.defineProperty(c, 53204, {
        value: q
    });
    var G = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53205, "Participant disconnected because of duplicate identity"))
        }
        return o(t, a), t
    }();
    t.ParticipantDuplicateIdentityError = G, Object.defineProperty(c, 53205, {
        value: G
    });
    var H = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53300, "Track is invalid"))
        }
        return o(t, a), t
    }();
    t.TrackInvalidError = H, Object.defineProperty(c, 53300, {
        value: H
    });
    var z = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53301, "Track name is invalid"))
        }
        return o(t, a), t
    }();
    t.TrackNameInvalidError = z, Object.defineProperty(c, 53301, {
        value: z
    });
    var K = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53302, "Track name is too long"))
        }
        return o(t, a), t
    }();
    t.TrackNameTooLongError = K, Object.defineProperty(c, 53302, {
        value: K
    });
    var $ = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53303, "Track name contains invalid characters"))
        }
        return o(t, a), t
    }();
    t.TrackNameCharsInvalidError = $, Object.defineProperty(c, 53303, {
        value: $
    });
    var Y = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53304, "Track name is duplicated"))
        }
        return o(t, a), t
    }();
    t.TrackNameIsDuplicatedError = Y, Object.defineProperty(c, 53304, {
        value: Y
    });
    var J = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53305, "The server has reached capacity and cannot fulfill this request"))
        }
        return o(t, a), t
    }();
    t.TrackServerTrackCapacityReachedError = J, Object.defineProperty(c, 53305, {
        value: J
    });
    var X = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53400, "Client is unable to create or apply a local media description"))
        }
        return o(t, a), t
    }();
    t.MediaClientLocalDescFailedError = X, Object.defineProperty(c, 53400, {
        value: X
    });
    var Z = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53401, "Server is unable to create or apply a local media description"))
        }
        return o(t, a), t
    }();
    t.MediaServerLocalDescFailedError = Z, Object.defineProperty(c, 53401, {
        value: Z
    });
    var ee = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53402, "Client is unable to apply a remote media description"))
        }
        return o(t, a), t
    }();
    t.MediaClientRemoteDescFailedError = ee, Object.defineProperty(c, 53402, {
        value: ee
    });
    var te = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53403, "Server is unable to apply a remote media description"))
        }
        return o(t, a), t
    }();
    t.MediaServerRemoteDescFailedError = te, Object.defineProperty(c, 53403, {
        value: te
    });
    var ne = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53404, "No supported codec"))
        }
        return o(t, a), t
    }();
    t.MediaNoSupportedCodecError = ne, Object.defineProperty(c, 53404, {
        value: ne
    });
    var re = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53405, "Media connection failed or Media activity ceased"))
        }
        return o(t, a), t
    }();
    t.MediaConnectionError = re, Object.defineProperty(c, 53405, {
        value: re
    });
    var ie = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53407, "Media connection failed due to DTLS handshake failure"))
        }
        return o(t, a), t
    }();
    t.MediaDTLSTransportFailedError = ie, Object.defineProperty(c, 53407, {
        value: ie
    });
    var oe = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53500, "Unable to acquire configuration"))
        }
        return o(t, a), t
    }();
    t.ConfigurationAcquireFailedError = oe, Object.defineProperty(c, 53500, {
        value: oe
    });
    var ae = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 53501, "Unable to acquire TURN credentials"))
        }
        return o(t, a), t
    }();
    t.ConfigurationAcquireTurnFailedError = ae, Object.defineProperty(c, 53501, {
        value: ae
    })
}, , , , function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    var r = n(2).flatMap,
        i = n(2).guessBrowser,
        o = null;
    var a = null;

    function c(e) {
        return e && function() {
            if ("boolean" == typeof o) return o;
            if ("undefined" == typeof RTCPeerConnection) return o = !1;
            try {
                new RTCPeerConnection({
                    sdpSemantics: "foo"
                }), o = !1
            } catch (e) {
                o = !0
            }
            return o
        }() ? {
            "plan-b": "planb",
            "unified-plan": "unified"
        } [e] : function() {
            if (!a)
                if ("undefined" != typeof RTCPeerConnection && "addTransceiver" in RTCPeerConnection.prototype) try {
                    (new RTCPeerConnection).addTransceiver("audio"), a = "unified"
                } catch (e) {
                    a = "planb"
                } else a = "planb";
            return a
        }()
    }

    function s(e, t) {
        return (t.match(new RegExp(e, "gm")) || []).reduce(function(t, n) {
            var r = n.match(new RegExp(e));
            return r ? t.add(r[1]) : t
        }, new Set)
    }

    function u(e, t) {
        return s(e, t)
    }

    function l(e) {
        return u("^a=ssrc:[0-9]+ +msid:.+ +(.+) *$", e)
    }

    function f(e) {
        return u("^a=msid:.+ +(.+) *$", e)
    }

    function p(e, t) {
        return s("^a=ssrc:([0-9]+) +msid:[^ ]+ +" + t + " *$", e)
    }

    function d(e, t, n) {
        return t = t || ".*", n = n || ".*", e.split("\r\nm=").slice(1).map(function(e) {
            return "m=" + e
        }).filter(function(e) {
            var r = new RegExp("m=" + t, "gm"),
                i = new RegExp("a=" + n, "gm");
            return r.test(e) && i.test(e)
        })
    }

    function h(e) {
        return Array.from(s("^a=ssrc:([0-9]+) +.*$", e))
    }

    function v(e, t) {
        var n = d(e),
            i = new RegExp("^a=msid:[^ ]+ +" + t + " *$", "gm"),
            o = n.filter(function(e) {
                return e.match(i)
            });
        return new Set(r(o, h))
    }

    function y(e, t, n) {
        return new Map(Array.from(e(n)).map(function(e) {
            return [e, t(n, e)]
        }))
    }

    function b(e) {
        return y(l, p, e)
    }

    function m(e) {
        return y(f, v, e)
    }

    function _(e, t, n) {
        var r = e(n),
            i = new Map;
        r.forEach(function(e, r) {
            if (t.has(r)) {
                var o = Array.from(t.get(r)),
                    a = Array.from(e);
                o.forEach(function(e, t) {
                    var r = a[t];
                    i.set(r, e);
                    var o = "^a=ssrc:" + r + " (.*)$",
                        c = "a=ssrc:" + e + " $1";
                    n = n.replace(new RegExp(o, "gm"), c)
                })
            } else t.set(r, e)
        });
        var o = "^(a=ssrc-group:[^ ]+ +)(.*)$";
        return (n.match(new RegExp(o, "gm")) || []).forEach(function(e) {
            var t = e.match(new RegExp(o));
            if (t) {
                var r = t[1],
                    a = t[2].split(" ").map(function(e) {
                        var t = i.get(e);
                        return t || e
                    }).join(" ");
                n = n.replace(t[0], r + a)
            }
        }), n
    }
    t.getSdpFormat = function(e) {
        return {
            chrome: c(e),
            firefox: "unified",
            safari: "undefined" != typeof RTCRtpTransceiver && "currentDirection" in RTCRtpTransceiver.prototype ? "unified" : "planb"
        } [i()] || null
    }, t.getMediaSections = d, t.getPlanBTrackIds = l, t.getUnifiedPlanTrackIds = f, t.getPlanBSSRCs = p, t.getUnifiedPlanSSRCs = v, t.updatePlanBTrackIdsToSSRCs = function(e, t) {
        return _(b, e, t)
    }, t.updateUnifiedPlanTrackIdsToSSRCs = function(e, t) {
        return _(m, e, t)
    }
}, function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
    var o = n(58).getLogger,
        a = n(4),
        c = a.DEFAULT_LOG_LEVEL,
        s = a.DEFAULT_LOGGER_NAME,
        u = n(4).typeErrors,
        l = void 0;
    var f = function() {
        function e(t, n, i, a, l) {
            if (function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), "string" != typeof t) throw u.INVALID_TYPE("moduleName", "string");
            if (!n) throw u.REQUIRED_ARGUMENT("component");
            "object" !== (void 0 === i ? "undefined" : r(i)) && (i = {}), l = l || o, y(i), Object.defineProperties(this, {
                _component: {
                    value: n
                },
                _logLevels: {
                    value: i
                },
                _warnings: {
                    value: new Set
                },
                _loggerName: {
                    get: function() {
                        var e = a && "string" == typeof a ? a : s;
                        return this._logLevelsEqual || (e = e + "-" + t), e
                    }
                },
                _logger: {
                    get: function() {
                        var e = l(this._loggerName),
                            n = this._logLevels[t] || c;
                        return n = "off" === n ? "silent" : n, e.setDefaultLevel(n), e
                    }
                },
                _logLevelsEqual: {
                    get: function() {
                        return 1 === new Set(Object.values(this._logLevels)).size
                    }
                },
                logLevel: {
                    get: function() {
                        return e.getLevelByName(i[t] || c)
                    }
                },
                name: {
                    get: n.toString.bind(n)
                }
            })
        }
        return i(e, [{
            key: "createLog",
            value: function(t, n) {
                var r = this._loggerName;
                return this._logLevelsEqual || (r = r.substring(0, r.lastIndexOf("-"))), new e(t, n, this._logLevels, r)
            }
        }, {
            key: "setLevels",
            value: function(e) {
                return y(e), Object.assign(this._logLevels, e), this
            }
        }, {
            key: "log",
            value: function(t, n) {
                var r = e._levels[t];
                if (!r) throw u.INVALID_VALUE("logLevel", d);
                r = r.toLowerCase();
                var i = [(new Date).toISOString(), r, this.name];
                return (this._logger[r] || function() {}).apply(void 0, function(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                    return Array.from(e)
                }(i.concat(n))), this
            }
        }, {
            key: "debug",
            value: function() {
                return this.log(e.DEBUG, [].slice.call(arguments))
            }
        }, {
            key: "deprecated",
            value: function(e) {
                var t = function(e) {
                    if ((l = l || new Map).has(e)) return l.get(e);
                    var t = new Set;
                    return l.set(e, t), t
                }(this._component.constructor);
                return t.has(e) ? this : (t.add(e), this.warn(e))
            }
        }, {
            key: "info",
            value: function() {
                return this.log(e.INFO, [].slice.call(arguments))
            }
        }, {
            key: "warn",
            value: function() {
                return this.log(e.WARN, [].slice.call(arguments))
            }
        }, {
            key: "warnOnce",
            value: function(e) {
                return this._warnings.has(e) ? this : (this._warnings.add(e), this.warn(e))
            }
        }, {
            key: "error",
            value: function() {
                return this.log(e.ERROR, [].slice.call(arguments))
            }
        }, {
            key: "throw",
            value: function(t, n) {
                throw t.clone && (t = t.clone(n)), this.log(e.ERROR, t), t
            }
        }], [{
            key: "getLevelByName",
            value: function(t) {
                return isNaN(t) ? (v(t = t.toUpperCase()), e[t]) : parseInt(t, 10)
            }
        }]), e
    }();
    Object.defineProperties(f, {
        DEBUG: {
            value: 0
        },
        INFO: {
            value: 1
        },
        WARN: {
            value: 2
        },
        ERROR: {
            value: 3
        },
        OFF: {
            value: 4
        },
        _levels: {
            value: ["DEBUG", "INFO", "WARN", "ERROR", "OFF"]
        }
    });
    var p = {},
        d = [],
        h = f._levels.map(function(e, t) {
            return p[e] = !0, d.push(t), e
        });

    function v(e) {
        if (!(e in p)) throw u.INVALID_VALUE("level", h)
    }

    function y(e) {
        Object.keys(e).forEach(function(t) {
            v(e[t].toUpperCase())
        })
    }
    e.exports = f
}, function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
    var o = n(3).EventEmitter,
        a = n(1),
        c = function(e) {
            function t(e, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var r, i = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)),
                    o = null,
                    a = e;
                return n = function(e) {
                    var t = new Map;
                    for (var n in e) t.set(n, new Set(e[n]));
                    return t
                }(n), Object.defineProperties(i, {
                    _lock: {
                        get: function() {
                            return o
                        },
                        set: function(e) {
                            o = e
                        }
                    },
                    _reachableStates: {
                        value: (r = n, Array.from(r.keys()).reduce(function(e, t) {
                            return e.set(t, function e(t, n, r) {
                                r = r || new Set;
                                t.get(n).forEach(function(n) {
                                    r.has(n) || (r.add(n), e(t, n, r).forEach(r.add, r))
                                });
                                return r
                            }(r, t))
                        }, new Map))
                    },
                    _state: {
                        get: function() {
                            return a
                        },
                        set: function(e) {
                            a = e
                        }
                    },
                    _states: {
                        value: n
                    },
                    _whenDeferreds: {
                        value: new Set
                    },
                    isLocked: {
                        enumerable: !0,
                        get: function() {
                            return null !== o
                        }
                    },
                    state: {
                        enumerable: !0,
                        get: function() {
                            return a
                        }
                    }
                }), i.on("stateChanged", function(e) {
                    i._whenDeferreds.forEach(function(t) {
                        t.when(e, t.resolve, t.reject)
                    })
                }), i
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o), i(t, [{
                key: "_whenPromise",
                value: function(e) {
                    var t = this;
                    if ("function" != typeof e) return Promise.reject(new Error("when() executor must be a function"));
                    var n = a.defer();
                    return n.when = e, this._whenDeferreds.add(n), n.promise.then(function(e) {
                        return t._whenDeferreds.delete(n), e
                    }, function(e) {
                        throw t._whenDeferreds.delete(n), e
                    })
                }
            }, {
                key: "bracket",
                value: function(e, t) {
                    var n = void 0,
                        r = this;

                    function i(e) {
                        if (r.hasLock(n) && r.releaseLockCompletely(n), e) throw e
                    }
                    return this.takeLock(e).then(function(e) {
                        return t(n = e)
                    }).then(function(e) {
                        return i(), e
                    }, i)
                }
            }, {
                key: "hasLock",
                value: function(e) {
                    return this._lock === e
                }
            }, {
                key: "preempt",
                value: function(e, t, n) {
                    if (!s(this._states, this.state, e)) throw new Error('Cannot transition from "' + this.state + '" to "' + e + '"');
                    var r = void 0;
                    this.isLocked && (r = this._lock, this._lock = null);
                    var i = null;
                    t && (i = this.takeLockSync(t));
                    var o = i ? null : this.takeLockSync("preemption");
                    return this.transition(e, i || o, n), r && r.resolve(), o && this.releaseLock(o), i
                }
            }, {
                key: "releaseLock",
                value: function(e) {
                    if (!this.isLocked) throw new Error("Could not release the lock for " + e.name + " because the StateMachine is not locked");
                    if (!this.hasLock(e)) throw new Error("Could not release the lock for " + e.name + " because " + this._lock.name + " has the lock");
                    0 === e.depth ? (this._lock = null, e.resolve()) : e.depth--
                }
            }, {
                key: "releaseLockCompletely",
                value: function(e) {
                    if (!this.isLocked) throw new Error("Could not release the lock for " + e.name + " because the StateMachine is not locked");
                    if (!this.hasLock(e)) throw new Error("Could not release the lock for " + e.name + " because " + this._lock.name + " has the lock");
                    e.depth = 0, this._lock = null, e.resolve()
                }
            }, {
                key: "takeLock",
                value: function(e) {
                    var t = this;
                    if ("object" === (void 0 === e ? "undefined" : r(e))) {
                        var n = e;
                        return new Promise(function(e) {
                            e(t.takeLockSync(n))
                        })
                    }
                    var i = e;
                    if (this.isLocked) {
                        var o = this.takeLock.bind(this, i);
                        return this._lock.promise.then(o)
                    }
                    return Promise.resolve(this.takeLockSync(i))
                }
            }, {
                key: "takeLockSync",
                value: function(e) {
                    var t = "string" == typeof e ? null : e,
                        n = t ? t.name : e;
                    if (t && !this.hasLock(t) || !t && this.isLocked) throw new Error("Could not take the lock for " + n + " because the lock for " + this._lock.name + " was not released");
                    if (t) return t.depth++, t;
                    var r = function(e) {
                        var t = a.defer();
                        return t.name = e, t.depth = 0, t
                    }(n);
                    return this._lock = r, r
                }
            }, {
                key: "transition",
                value: function(e, t, n) {
                    if (n = n || [], this.isLocked) {
                        if (!t) throw new Error("You must provide the key in order to transition");
                        if (!this.hasLock(t)) throw new Error("Could not transition using the key for " + t.name + " because " + this._lock.name + " has the lock")
                    } else if (t) throw new Error("Key provided for " + t.name + ", but the StateMachine was not locked (possibly due to preemption)");
                    if (!s(this._states, this.state, e)) throw new Error('Cannot transition from "' + this.state + '" to "' + e + '"');
                    this._state = e, this.emit.apply(this, function(e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                            return n
                        }
                        return Array.from(e)
                    }(["stateChanged", e].concat(n)))
                }
            }, {
                key: "tryTransition",
                value: function(e, t, n) {
                    try {
                        this.transition(e, t, n)
                    } catch (e) {
                        return !1
                    }
                    return !0
                }
            }, {
                key: "when",
                value: function(e) {
                    var t = this;
                    return this.state === e ? Promise.resolve(this) : s(this._reachableStates, this.state, e) ? this._whenPromise(function(n, r, i) {
                        n === e ? r(t) : s(t._reachableStates, n, e) || i(u(n, e))
                    }) : Promise.reject(u(this.state, e))
                }
            }]), t
        }();

    function s(e, t, n) {
        return e.get(t).has(n)
    }

    function u(e, t) {
        return new Error('"' + t + '" cannot be reached from "' + e + '"')
    }
    e.exports = c
}, , function(e, t) {
    var n, r, i = e.exports = {};

    function o() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function c(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
            n = o
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            r = a
        }
    }();
    var s, u = [],
        l = !1,
        f = -1;

    function p() {
        l && s && (l = !1, s.length ? u = s.concat(u) : f = -1, u.length && d())
    }

    function d() {
        if (!l) {
            var e = c(p);
            l = !0;
            for (var t = u.length; t;) {
                for (s = u, u = []; ++f < t;) s && s[f].run();
                f = -1, t = u.length
            }
            s = null, l = !1,
                function(e) {
                    if (r === clearTimeout) return clearTimeout(e);
                    if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                    try {
                        r(e)
                    } catch (t) {
                        try {
                            return r.call(null, e)
                        } catch (t) {
                            return r.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function h(e, t) {
        this.fun = e, this.array = t
    }

    function v() {}
    i.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        u.push(new h(e, t)), 1 !== u.length || l || c(d)
    }, h.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = v, i.addListener = v, i.once = v, i.off = v, i.removeListener = v, i.removeAllListeners = v, i.emit = v, i.prependListener = v, i.prependOnceListener = v, i.listeners = function(e) {
        return []
    }, i.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, i.cwd = function() {
        return "/"
    }, i.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, i.umask = function() {
        return 0
    }
}, function(e, t, n) {
    "use strict";
    var r = function() {
            return function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return function(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !r && c.return && c.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        i = n(1).difference,
        o = n(1).flatMap,
        a = n(164),
        c = {
            0: "PCMU",
            8: "PCMA"
        },
        s = 16e3;

    function u(e, t) {
        return t ? "\r\nb=" + e + ":" + ("AS" === e ? Math.round((t + s) / 950) : t) : null
    }

    function l(e) {
        return Array.from(p(e)).reduce(function(e, t) {
            var n = t[0],
                r = t[1],
                i = e.get(r) || [];
            return e.set(r, i.concat(n))
        }, new Map)
    }

    function f(e) {
        return v(e).reduce(function(e, t) {
            var n = h(t);
            return n ? e.set(n, t) : e
        }, new Map)
    }

    function p(e) {
        return y(e).reduce(function(t, n) {
            var r = new RegExp("a=rtpmap:" + n + " ([^/]+)"),
                i = e.match(r),
                o = i ? i[1].toLowerCase() : c[n] ? c[n].toLowerCase() : "";
            return t.set(n, o)
        }, new Map)
    }

    function d(e, t) {
        var n = new RegExp("^a=fmtp:" + e + " (.+)$", "m"),
            i = t.match(n);
        return i && i[1].split(";").reduce(function(e, t) {
            var n = t.split("="),
                i = r(n, 2),
                o = i[0],
                a = i[1];
            return e[o] = isNaN(a) ? a : parseInt(a, 10), e
        }, {})
    }

    function h(e) {
        var t = e.match(/^a=mid:(.+)$/m);
        return t && t[1]
    }

    function v(e, t, n) {
        return e.replace(/\r\n\r\n$/, "\r\n").split("\r\nm=").slice(1).map(function(e) {
            return "m=" + e
        }).filter(function(e) {
            var r = new RegExp("m=" + (t || ".*"), "gm"),
                i = new RegExp("a=" + (n || ".*"), "gm");
            return r.test(e) && i.test(e)
        })
    }

    function y(e) {
        var t = e.split("\r\n")[0].match(/([0-9]+)/g);
        return t ? t.slice(1).map(function(e) {
            return parseInt(e, 10)
        }) : []
    }

    function b(e, t) {
        var n = t.split("\r\n"),
            r = n[0],
            i = n.slice(1);
        return [r = r.replace(/([0-9]+\s?)+$/, e.join(" "))].concat(i).join("\r\n")
    }

    function m(e, t) {
        if (!/^m=(audio|video)/.test(e)) return e;
        var n = h(e),
            i = n && t.get(n);
        if (!i) return e;
        var a = p(i),
            c = l(e),
            s = o(Array.from(a), function(t) {
                var n = r(t, 2),
                    o = n[0],
                    a = n[1];
                return "rtx" !== a ? function(e, t, n, r, i) {
                    var o = n.get(e) || [];
                    if (o.length <= 1) return o;
                    var a = d(t, i);
                    if (!a) return o;
                    var c = o.find(function(e) {
                        var t = d(e, r);
                        return t && Object.keys(a).every(function(e) {
                            return a[e] === t[e]
                        })
                    });
                    return "number" == typeof c ? [c] : o
                }(a, o, c, e, i) : []
            }),
            u = c.get("rtx") || [];
        s = s.concat(u.filter(function(t) {
            var n = d(t, e);
            return n && s.includes(n.apt)
        }));
        var f = e.split("\r\n").filter(function(e) {
            var t = e.match(/^a=(rtpmap|fmtp|rtcp-fb):(.+) .+$/),
                n = t && t[2];
            return !t || n && s.includes(parseInt(n, 10))
        });
        return b(y(e).filter(function(e) {
            return s.includes(e)
        }), f.join("\r\n"))
    }

    function _(e, t) {
        var n = v(e);
        return [e.split("\r\nm=")[0]].concat(n.map(function(e) {
            if (!/^m=(audio|video)/.test(e)) return e;
            var n = h(e);
            if (!n) return e;
            var i = t.get(n);
            if (!i) return e;
            var o = (e.match(/^a=msid:(.+)$/m) || [])[1];
            if (!o) return e;
            var a = o.split(" "),
                c = r(a, 2),
                s = c[0],
                u = c[1],
                l = new RegExp("msid:" + s + (u ? " " + u : "") + "$", "gm");
            return e.replace(l, "msid:" + s + " " + i)
        })).join("\r\n")
    }

    function g(e, t) {
        return "a=fmtp:" + e + " " + Object.entries(t).map(function(e) {
            var t = r(e, 2);
            return t[0] + "=" + t[1]
        }).join(";")
    }
    t.createCodecMapForMediaSection = l, t.createPtToCodecName = p, t.disableRtx = function(e) {
        var t = v(e);
        return [e.split("\r\nm=")[0]].concat(t.map(function(e) {
            if (!/^m=video/.test(e)) return e;
            var t = l(e).get("rtx");
            if (!t) return e;
            var n = new Set(y(e));
            t.forEach(function(e) {
                return n.delete(e)
            });
            var r = e.match(/a=ssrc-group:FID [0-9]+ ([0-9]+)/),
                i = r && r[1],
                o = [/^a=fmtp:.+ apt=.+$/, /^a=rtpmap:.+ rtx\/.+$/, /^a=ssrc-group:.+$/].concat(i ? [new RegExp("^a=ssrc:" + i + " .+$")] : []);
            return e = e.split("\r\n").filter(function(e) {
                return o.every(function(t) {
                    return !t.test(e)
                })
            }).join("\r\n"), b(Array.from(n), e)
        })).join("\r\n")
    }, t.enableDtxForOpus = function(e, t) {
        var n = v(e),
            r = e.split("\r\nm=")[0];
        return t = t || n.filter(function(e) {
            return /^m=audio/.test(e)
        }).map(h), [r].concat(n.map(function(e) {
            if (!/^m=audio/.test(e)) return e;
            var n = l(e).get("opus");
            if (!n) return e;
            var r = d(n, e);
            if (!r) return e;
            var i = g(n, r),
                o = new RegExp(i),
                a = h(e);
            t.includes(a) ? r.usedtx = 1 : delete r.usedtx;
            var c = g(n, r);
            return e.replace(o, c)
        })).join("\r\n")
    }, t.getMediaSections = v, t.removeSSRCAttributes = function(e, t) {
        return e.split("\r\n").filter(function(e) {
            return !t.find(function(t) {
                return new RegExp("a=ssrc:.*" + t + ":", "g").test(e)
            })
        }).join("\r\n")
    }, t.revertSimulcastForNonVP8MediaSections = function(e, t, n) {
        var r = f(n),
            i = f(t),
            o = v(e);
        return [e.split("\r\nm=")[0]].concat(o.map(function(e) {
            if (e = e.replace(/\r\n$/, ""), !/^m=video/.test(e)) return e;
            var t = e.match(/^a=mid:(.+)$/m),
                n = t && t[1];
            if (!n) return e;
            var o = r.get(n),
                a = p(o),
                c = y(o);
            return c.length && "vp8" === a.get(c[0]) ? e : i.get(n).replace(/\r\n$/, "")
        })).concat("").join("\r\n")
    }, t.setBitrateParameters = function(e, t, n, r) {
        var i = v(e);
        return [e.split("\r\nm=")[0]].concat(i.map(function(e) {
            if (!/^m=(audio|video)/.test(e) || !/a=(recvonly|sendrecv)/.test(e)) return e;
            var i = e.match(/^m=(audio|video)/)[1];
            return function(e, t, n) {
                var r = u(e, t) || "",
                    i = /\r\nb=(AS|TIAS):([0-9]+)/,
                    o = n.match(i);
                if (!o) return n.replace(/(\r\n)?$/, r + "$1");
                var a = parseInt(o[2], 10);
                return t = t || 1 / 0, r = u(e, Math.min(a, t)), n.replace(i, r)
            }(t, "audio" === i ? n : r, e)
        })).join("\r\n")
    }, t.setCodecPreferences = function(e, t, n) {
        var r = v(e);
        return [e.split("\r\nm=")[0]].concat(r.map(function(e) {
            if (!/^m=(audio|video)/.test(e)) return e;
            var r = e.match(/^m=(audio|video)/)[1],
                a = l(e),
                c = function(e, t) {
                    t = t.map(function(e) {
                        return e.codec.toLowerCase()
                    });
                    var n = o(t, function(t) {
                            return e.get(t) || []
                        }),
                        r = i(Array.from(e.keys()), t),
                        a = o(r, function(t) {
                            return e.get(t)
                        });
                    return n.concat(a)
                }(a, "audio" === r ? t : n),
                s = b(c, e),
                u = a.get("pcma") || [],
                f = a.get("pcmu") || [];
            return ("audio" === r ? new Set(u.concat(f)) : new Set).has(c[0]) ? s.replace(/\r\nb=(AS|TIAS):([0-9]+)/g, "") : s
        })).join("\r\n")
    }, t.setSimulcast = function(e, t, n) {
        var r = v(e);
        return [e.split("\r\nm=")[0]].concat(r.map(function(e) {
            if (e = e.replace(/\r\n$/, ""), !/^m=video/.test(e)) return e;
            var r = l(e),
                i = y(e),
                o = new Set(r.get("vp8") || []);
            return i.some(function(e) {
                return o.has(e)
            }) ? a(e, t, n) : e
        })).concat("").join("\r\n")
    }, t.unifiedPlanFilterLocalCodecs = function(e, t) {
        var n = v(e),
            r = e.split("\r\nm=")[0],
            i = f(t);
        return [r].concat(n.map(function(e) {
            return m(e, i)
        })).join("\r\n")
    }, t.unifiedPlanAddOrRewriteNewTrackIds = function(e, t, n) {
        var i = Array.from(n).reduce(function(n, i) {
            var o = r(i, 2),
                a = o[0],
                c = o[1];
            return v(e, a, "send(only|recv)").map(h).filter(function(e) {
                return !t.has(e)
            }).forEach(function(e, t) {
                return n.set(e, c[t])
            }), n
        }, new Map);
        return _(e, i)
    }, t.unifiedPlanAddOrRewriteTrackIds = _
}, , , function(e, t, n) {
    "use strict";
    e.exports = {
        LocalAudioTrack: n(116),
        LocalVideoTrack: n(131),
        LocalDataTrack: n(133)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(3).EventEmitter,
        i = n(1).hidePrivateAndCertainPublicPropertiesInClass;
    e.exports = i(r, ["domain"])
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = function() {
        function e(t, n) {
            var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), Object.defineProperties(this, {
                _delay: {
                    value: n,
                    writable: !0
                },
                _fn: {
                    value: t
                },
                _timeout: {
                    value: null,
                    writable: !0
                }
            }), r && this.start()
        }
        return r(e, [{
            key: "setDelay",
            value: function(e) {
                this._delay = e
            }
        }, {
            key: "start",
            value: function() {
                var e = this;
                this.isSet || (this._timeout = setTimeout(function() {
                    var t = e._fn;
                    e.clear(), t()
                }, this._delay))
            }
        }, {
            key: "clear",
            value: function() {
                clearTimeout(this._timeout), this._timeout = null
            }
        }, {
            key: "reset",
            value: function() {
                this.clear(), this.start()
            }
        }, {
            key: "delay",
            get: function() {
                return this._delay
            }
        }, {
            key: "isSet",
            get: function() {
                return !!this._timeout
            }
        }]), e
    }();
    e.exports = i
}, , , , function(e, t) {
    "function" == typeof Object.create ? e.exports = function(e, t) {
        e.super_ = t, e.prototype = Object.create(t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        })
    } : e.exports = function(e, t) {
        e.super_ = t;
        var n = function() {};
        n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(3).EventEmitter;

    function i() {
        Object.defineProperties(this, {
            _eventEmitter: {
                value: new r
            }
        })
    }
    i.prototype.dispatchEvent = function(e) {
        return this._eventEmitter.emit(e.type, e)
    }, i.prototype.addEventListener = function() {
        return this._eventEmitter.addListener.apply(this._eventEmitter, arguments)
    }, i.prototype.removeEventListener = function() {
        return this._eventEmitter.removeListener.apply(this._eventEmitter, arguments)
    }, e.exports = i
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(26),
        o = n(1),
        a = o.buildLogLevels,
        c = o.valueToJSON,
        s = n(4).DEFAULT_LOG_LEVEL,
        u = n(18),
        l = 0,
        f = function(e) {
            function t(e, n, r) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), r = Object.assign({
                    name: e,
                    log: null,
                    logLevel: s
                }, r);
                var i = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)),
                    o = String(r.name),
                    c = a(r.logLevel),
                    f = r.log ? r.log.createLog("media", i) : new u("media", i, c, r.loggerName);
                return Object.defineProperties(i, {
                    _instanceId: {
                        value: ++l
                    },
                    _log: {
                        value: f
                    },
                    kind: {
                        enumerable: !0,
                        value: n
                    },
                    name: {
                        enumerable: !0,
                        value: o
                    }
                }), i
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i), r(t, [{
                key: "toJSON",
                value: function() {
                    return c(this)
                }
            }]), t
        }();
    e.exports = f
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = "undefined" != typeof AudioContext ? AudioContext : "undefined" != typeof webkitAudioContext ? webkitAudioContext : null,
        o = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), t = Object.assign({
                    AudioContext: i
                }, t), Object.defineProperties(this, {
                    _AudioContext: {
                        value: t.AudioContext
                    },
                    _audioContext: {
                        value: null,
                        writable: !0
                    },
                    _holders: {
                        value: new Set
                    },
                    AudioContextFactory: {
                        enumerable: !0,
                        value: e
                    }
                })
            }
            return r(e, [{
                key: "getOrCreate",
                value: function(e) {
                    if (!this._holders.has(e) && (this._holders.add(e), this._AudioContext && !this._audioContext)) try {
                        this._audioContext = new this._AudioContext
                    } catch (e) {}
                    return this._audioContext
                }
            }, {
                key: "release",
                value: function(e) {
                    this._holders.has(e) && (this._holders.delete(e), !this._holders.size && this._audioContext && (this._audioContext.close(), this._audioContext = null))
                }
            }]), e
        }();
    e.exports = new o
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();

    function i(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }
    var o = function() {
        function e(t, n) {
            var r = this;
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), Object.defineProperties(this, {
                _isCancelable: {
                    writable: !0,
                    value: !0
                },
                _isCanceled: {
                    writable: !0,
                    value: !1
                },
                _onCancel: {
                    value: n
                }
            }), Object.defineProperty(this, "_promise", {
                value: new Promise(function(e, n) {
                    t(function(t) {
                        r._isCancelable = !1, e(t)
                    }, function(e) {
                        r._isCancelable = !1, n(e)
                    }, function() {
                        return r._isCanceled
                    })
                })
            })
        }
        return r(e, [{
            key: "cancel",
            value: function() {
                return this._isCancelable && (this._isCanceled = !0, this._onCancel()), this
            }
        }, {
            key: "catch",
            value: function() {
                var t = [].slice.call(arguments),
                    n = this._promise;
                return new e(function(e, r) {
                    n.catch.apply(n, i(t)).then(e, r)
                }, this._onCancel)
            }
        }, {
            key: "then",
            value: function() {
                var t = [].slice.call(arguments),
                    n = this._promise;
                return new e(function(e, r) {
                    n.then.apply(n, i(t)).then(e, r)
                }, this._onCancel)
            }
        }], [{
            key: "reject",
            value: function(t) {
                return new e(function(e, n) {
                    n(t)
                }, function() {})
            }
        }, {
            key: "resolve",
            value: function(t) {
                return new e(function(e) {
                    e(t)
                }, function() {})
            }
        }]), e
    }();
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = n(1).asLocalTrack,
        i = n(1).buildLogLevels,
        o = n(8).getUserMedia,
        a = n(25),
        c = a.LocalAudioTrack,
        s = a.LocalDataTrack,
        u = a.LocalVideoTrack,
        l = n(8).MediaStreamTrack,
        f = n(18),
        p = n(4),
        d = p.DEFAULT_LOG_LEVEL,
        h = p.DEFAULT_LOGGER_NAME,
        v = n(63),
        y = 0;
    e.exports = function(e) {
        var t = !(e && ("audio" in e || "video" in e));
        e = Object.assign({
            audio: t,
            getUserMedia: o,
            loggerName: h,
            logLevel: d,
            LocalAudioTrack: c,
            LocalDataTrack: s,
            LocalVideoTrack: u,
            MediaStreamTrack: l,
            Log: f,
            video: t
        }, e);
        var n = "[createLocalTracks #" + ++y + "]",
            a = i(e.logLevel),
            p = new e.Log("default", n, a, e.loggerName),
            b = Object.assign({
                log: p
            }, e);
        if (delete b.name, !1 === e.audio && !1 === e.video) return p.info("Neither audio nor video requested, so returning empty LocalTracks"), Promise.resolve([]);
        if (e.tracks) return p.info("Adding user-provided LocalTracks"), p.debug("LocalTracks:", e.tracks), Promise.resolve(e.tracks);
        var m = {
            audio: e.audio && e.audio.name ? {
                name: e.audio.name
            } : {},
            video: e.video && e.video.name ? {
                name: e.video.name
            } : {}
        };
        m.audio.isCreatedByCreateLocalTracks = !0, m.video.isCreatedByCreateLocalTracks = !0, e.audio && "boolean" == typeof e.audio.workaroundWebKitBug1208516 && (m.audio.workaroundWebKitBug1208516 = e.audio.workaroundWebKitBug1208516), e.video && "boolean" == typeof e.video.workaroundWebKitBug1208516 && (m.video.workaroundWebKitBug1208516 = e.video.workaroundWebKitBug1208516), e.audio && delete e.audio.name, e.video && delete e.video.name;
        var _ = {
            audio: e.audio,
            video: e.video
        };
        return (e.audio && e.audio.workaroundWebKitBug180748 ? v(p, e.getUserMedia, _) : e.getUserMedia(_)).then(function(e) {
            var t = e.getAudioTracks().concat(e.getVideoTracks());
            return p.info("Call to getUserMedia successful; got MediaStreamTracks:", t), t.map(function(e) {
                return r(e, Object.assign(m[e.kind], b))
            })
        }, function(e) {
            throw p.warn("Call to getUserMedia failed:", e), e
        })
    }
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(71),
        o = n(4),
        a = o.typeErrors,
        c = o.trackPriority,
        s = function(e) {
            function t(e, n, r, i) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var o = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n.name, e.sid, i));
                return Object.defineProperties(o, {
                    _reemitTrackEvent: {
                        value: function() {
                            return o.emit(o.isTrackEnabled ? "trackEnabled" : "trackDisabled")
                        }
                    },
                    _signaling: {
                        value: e
                    },
                    _unpublish: {
                        value: r
                    },
                    isTrackEnabled: {
                        enumerable: !0,
                        get: function() {
                            return "data" === this.track.kind || this.track.isEnabled
                        }
                    },
                    kind: {
                        enumerable: !0,
                        value: n.kind
                    },
                    priority: {
                        enumerable: !0,
                        get: function() {
                            return e.updatedPriority
                        }
                    },
                    track: {
                        enumerable: !0,
                        value: n
                    }
                }), n.on("disabled", o._reemitTrackEvent), n.on("enabled", o._reemitTrackEvent), o
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i), r(t, [{
                key: "toString",
                value: function() {
                    return "[LocalTrackPublication #" + this._instanceId + ": " + this.trackSid + "]"
                }
            }, {
                key: "setPriority",
                value: function(e) {
                    var t = Object.values(c);
                    if (!t.includes(e)) throw a.INVALID_VALUE("priority", t);
                    return this._signaling.setPriority(e), this
                }
            }, {
                key: "unpublish",
                value: function() {
                    return this.track.removeListener("disabled", this._reemitTrackEvent), this.track.removeListener("enabled", this._reemitTrackEvent), this._unpublish(this), this
                }
            }]), t
        }();
    e.exports = s
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(71),
        o = function(e) {
            function t(e, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var r = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e.name, e.sid, n));
                Object.defineProperties(r, {
                    _signaling: {
                        value: e
                    },
                    _track: {
                        value: null,
                        writable: !0
                    },
                    isSubscribed: {
                        enumerable: !0,
                        get: function() {
                            return !!this._track
                        }
                    },
                    isTrackEnabled: {
                        enumerable: !0,
                        get: function() {
                            return e.isEnabled
                        }
                    },
                    kind: {
                        enumerable: !0,
                        value: e.kind
                    },
                    publishPriority: {
                        enumerable: !0,
                        get: function() {
                            return e.priority
                        }
                    },
                    track: {
                        enumerable: !0,
                        get: function() {
                            return this._track
                        }
                    }
                });
                var i = e.error,
                    o = e.isEnabled,
                    a = e.isSwitchedOff,
                    c = e.priority;
                return e.on("updated", function() {
                    if (i !== e.error) return i = e.error, void r.emit("subscriptionFailed", e.error);
                    o !== e.isEnabled && (o = e.isEnabled, r.track && r.track._setEnabled(e.isEnabled), r.emit(e.isEnabled ? "trackEnabled" : "trackDisabled")), a !== e.isSwitchedOff && (a = e.isSwitchedOff, r.track && (r.track._setSwitchedOff(e.isSwitchedOff), r.emit(e.isSwitchedOff ? "trackSwitchedOff" : "trackSwitchedOn", r.track))), c !== e.priority && (c = e.priority, r.emit("publishPriorityChanged", c))
                }), r
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i), r(t, [{
                key: "toString",
                value: function() {
                    return "[RemoteTrackPublication #" + this._instanceId + ": " + this.trackSid + "]"
                }
            }, {
                key: "_subscribed",
                value: function(e) {
                    !this._track && e && (this._track = e, this.emit("subscribed", e))
                }
            }, {
                key: "_unsubscribe",
                value: function() {
                    if (this._track) {
                        var e = this._track;
                        this._track = null, this.emit("unsubscribed", e)
                    }
                }
            }]), t
        }();
    e.exports = o
}, function(e, t, n) {
    e.exports = n(160)
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(19),
        o = n(191),
        a = {
            connecting: ["connected"],
            connected: ["disconnected", "reconnecting"],
            reconnecting: ["connected", "disconnected"],
            disconnected: []
        },
        c = function(e) {
            function t() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var e = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "connecting", a));
                return Object.defineProperties(e, {
                    _enqueuedPriorityUpdates: {
                        value: new Map
                    },
                    _identity: {
                        writable: !0,
                        value: null
                    },
                    _networkQualityLevel: {
                        value: null,
                        writable: !0
                    },
                    _networkQualityStats: {
                        value: null,
                        writable: !0
                    },
                    _sid: {
                        writable: !0,
                        value: null
                    },
                    _trackPrioritySignaling: {
                        value: null,
                        writable: !0
                    },
                    identity: {
                        enumerable: !0,
                        get: function() {
                            return this._identity
                        }
                    },
                    sid: {
                        enumerable: !0,
                        get: function() {
                            return this._sid
                        }
                    },
                    tracks: {
                        enumerable: !0,
                        value: new Map
                    }
                }), e
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i), r(t, [{
                key: "addTrack",
                value: function(e) {
                    return this.tracks.set(e.id || e.sid, e), this.emit("trackAdded", e), this
                }
            }, {
                key: "disconnect",
                value: function() {
                    return "disconnected" !== this.state && (this.preempt("disconnected"), !0)
                }
            }, {
                key: "removeTrack",
                value: function(e) {
                    var t = this.tracks.get(e.id || e.sid);
                    return this.tracks.delete(e.id || e.sid), t && this.emit("trackRemoved", e), t || null
                }
            }, {
                key: "setNetworkQualityLevel",
                value: function(e, t) {
                    this._networkQualityLevel !== e && (this._networkQualityLevel = e, this._networkQualityStats = t && (t.audio || t.video) ? new o(t) : null, this.emit("networkQualityLevelChanged"))
                }
            }, {
                key: "updateSubscriberTrackPriority",
                value: function(e, t) {
                    this._enqueuedPriorityUpdates.set(e, t), this._trackPrioritySignaling && this._trackPrioritySignaling.sendTrackPriorityUpdate(e, "subscribe", t)
                }
            }, {
                key: "setTrackPrioritySignaling",
                value: function(e) {
                    var t = this;
                    return this._trackPrioritySignaling = e, e && this._enqueuedPriorityUpdates.forEach(function(e, n) {
                        t._trackPrioritySignaling.sendTrackPriorityUpdate(n, "subscribe", e)
                    }), this
                }
            }, {
                key: "connect",
                value: function(e, t) {
                    return ("connecting" === this.state || "reconnecting" === this.state) && (this._sid || (this._sid = e), this._identity || (this._identity = t), this.preempt("connected"), !0)
                }
            }, {
                key: "reconnecting",
                value: function() {
                    return ("connecting" === this.state || "connected" === this.state) && (this.preempt("reconnecting"), !0)
                }
            }, {
                key: "networkQualityLevel",
                get: function() {
                    return this._networkQualityLevel
                }
            }, {
                key: "networkQualityStats",
                get: function() {
                    return this._networkQualityStats
                }
            }]), t
        }();
    e.exports = c
}, , , , , , , , , , , function(e, t, n) {
    "use strict";
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = function e(t, n, r) {
            null === t && (t = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === i) {
                var o = Object.getPrototypeOf(t);
                return null === o ? void 0 : e(o, n, r)
            }
            if ("value" in i) return i.value;
            var a = i.get;
            return void 0 !== a ? a.call(r) : void 0
        };
    var o = n(52),
        a = function(e) {
            function t(e, n) {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o), r(t, [{
                key: "_start",
                value: function() {
                    i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_start", this).call(this), this._dummyEl && this._detachElement(this._dummyEl)
                }
            }, {
                key: "attach",
                value: function() {
                    return i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "attach", this).apply(this, arguments)
                }
            }, {
                key: "detach",
                value: function() {
                    return i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "detach", this).apply(this, arguments)
                }
            }]), t
        }();
    e.exports = a
}, function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
    var o = n(2).guessBrowser,
        a = n(8).MediaStream,
        c = n(1),
        s = c.waitForEvent,
        u = c.waitForSometime,
        l = n(57),
        f = n(33),
        p = function(e) {
            function t(e, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), n = Object.assign({
                    playPausedElementsIfNotBackgrounded: "safari" === o() && "object" === ("undefined" == typeof document ? "undefined" : r(document)) && "function" == typeof document.addEventListener && "string" == typeof document.visibilityState
                }, n);
                var i = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e.id, e.kind, n)),
                    c = !1;
                return n = Object.assign({
                    MediaStream: a
                }, n), Object.defineProperties(i, {
                    _attachments: {
                        value: new Set
                    },
                    _dummyEl: {
                        value: null,
                        writable: !0
                    },
                    _elShims: {
                        value: new WeakMap
                    },
                    _isStarted: {
                        get: function() {
                            return c
                        },
                        set: function(e) {
                            c = e
                        }
                    },
                    _playPausedElementsIfNotBackgrounded: {
                        value: n.playPausedElementsIfNotBackgrounded
                    },
                    _shouldShimAttachedElements: {
                        value: n.workaroundWebKitBug212780 || n.playPausedElementsIfNotBackgrounded
                    },
                    _MediaStream: {
                        value: n.MediaStream
                    },
                    isStarted: {
                        enumerable: !0,
                        get: function() {
                            return c
                        }
                    },
                    mediaStreamTrack: {
                        enumerable: !0,
                        get: function() {
                            return e.track
                        }
                    }
                }), i._initialize(), i
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, f), i(t, [{
                key: "_start",
                value: function() {
                    this._log.debug("Started"), this._isStarted = !0, this._dummyEl && (this._dummyEl.oncanplay = null), this.emit("started", this)
                }
            }, {
                key: "_initialize",
                value: function() {
                    var e = this;
                    this._log.debug("Initializing"), this._dummyEl = this._createElement(), this.mediaStreamTrack.addEventListener("ended", function t() {
                        e._end(), e.mediaStreamTrack.removeEventListener("ended", t)
                    }), this._dummyEl && (this._dummyEl.muted = !0, this._dummyEl.oncanplay = this._start.bind(this, this._dummyEl), this._attach(this._dummyEl), this._attachments.delete(this._dummyEl))
                }
            }, {
                key: "_end",
                value: function() {
                    this._log.debug("Ended"), this._dummyEl && (this._detachElement(this._dummyEl), this._dummyEl.oncanplay = null)
                }
            }, {
                key: "attach",
                value: function(e) {
                    var t = this;
                    if ("string" == typeof e ? e = this._selectElement(e) : e || (e = this._createElement()), this._log.debug("Attempting to attach to element:", e), e = this._attach(e), this._shouldShimAttachedElements && !this._elShims.has(e)) {
                        var n = this._playPausedElementsIfNotBackgrounded ? function() {
                            return function(e, t) {
                                var n = e.tagName.toLowerCase();
                                t.warn("Unintentionally paused:", e), Promise.race([s(document, "visibilitychange"), u(1e3)]).then(function() {
                                    "visible" === document.visibilityState && l.whenResolved("audio").then(function() {
                                        return t.info("Playing unintentionally paused <" + n + "> element"), t.debug("Element:", e), e.play()
                                    }).then(function() {
                                        t.info("Successfully played unintentionally paused <" + n + "> element"), t.debug("Element:", e)
                                    }).catch(function(r) {
                                        t.warn("Error while playing unintentionally paused <" + n + "> element:", {
                                            error: r,
                                            el: e
                                        })
                                    })
                                })
                            }(e, t._log)
                        } : null;
                        this._elShims.set(e, function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                n = e.pause,
                                r = e.play,
                                i = !1;
                            e.pause = function() {
                                return i = !0, n.call(e)
                            }, e.play = function() {
                                return i = !1, r.call(e)
                            };
                            var o = t ? function() {
                                i || t()
                            } : null;
                            o && e.addEventListener("pause", o);
                            return {
                                pausedIntentionally: function() {
                                    return i
                                },
                                unShim: function() {
                                    e.pause = n, e.play = r, o && e.removeEventListener("pause", o)
                                }
                            }
                        }(e, n))
                    }
                    return e
                }
            }, {
                key: "_attach",
                value: function(e) {
                    var t = e.srcObject;
                    t instanceof this._MediaStream || (t = new this._MediaStream);
                    var n = "audio" === this.mediaStreamTrack.kind ? "getAudioTracks" : "getVideoTracks";
                    return t[n]().forEach(function(e) {
                        t.removeTrack(e)
                    }), t.addTrack(this.mediaStreamTrack), e.srcObject = t, e.autoplay = !0, e.playsInline = !0, this._attachments.has(e) || this._attachments.add(e), e
                }
            }, {
                key: "_selectElement",
                value: function(e) {
                    var t = document.querySelector(e);
                    if (!t) throw new Error("Selector matched no element: " + e);
                    return t
                }
            }, {
                key: "_createElement",
                value: function() {
                    return "undefined" != typeof document ? document.createElement(this.kind) : null
                }
            }, {
                key: "detach",
                value: function(e) {
                    var t = void 0;
                    return t = "string" == typeof e ? [this._selectElement(e)] : e ? [e] : this._getAllAttachedElements(), this._log.debug("Attempting to detach from elements:", t), this._detachElements(t), e ? t[0] : t
                }
            }, {
                key: "_detachElements",
                value: function(e) {
                    return e.map(this._detachElement.bind(this))
                }
            }, {
                key: "_detachElement",
                value: function(e) {
                    if (!this._attachments.has(e)) return e;
                    var t = e.srcObject;
                    (t instanceof this._MediaStream && t.removeTrack(this.mediaStreamTrack), this._attachments.delete(e), this._shouldShimAttachedElements && this._elShims.has(e)) && (this._elShims.get(e).unShim(), this._elShims.delete(e));
                    return e
                }
            }, {
                key: "_getAllAttachedElements",
                value: function() {
                    var e = [];
                    return this._attachments.forEach(function(t) {
                        e.push(t)
                    }), e
                }
            }]), t
        }();
    e.exports = p
}, function(e, t, n) {
    "use strict";
    "function" == typeof MediaStream ? e.exports = MediaStream : e.exports = function() {
        throw new Error("MediaStream is not supported")
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function e(t) {
        if (!(this instanceof e)) return new e(t);
        var n = t && "rollback" === t.type ? null : new RTCSessionDescription(t);
        Object.defineProperties(this, {
            _description: {
                get: function() {
                    return n
                }
            },
            sdp: {
                enumerable: !0,
                value: n ? n.sdp : t.sdp
            },
            type: {
                enumerable: !0,
                value: n ? n.type : t.type
            }
        })
    }
}, function(e, t, n) {
    "use strict";
    var r = n(2).defer,
        i = {
            high: new Set(["low"]),
            low: new Set(["high"])
        };

    function o(e) {
        if (!(this instanceof o)) return new o(e);
        var t = e || "low";
        Object.defineProperties(this, {
            _state: {
                set: function(e) {
                    if (t !== e) {
                        t = e;
                        var n = this._whenDeferreds.get(t);
                        n.forEach(function(e) {
                            e.resolve(this)
                        }, this), n.clear()
                    }
                },
                get: function() {
                    return t
                }
            },
            _whenDeferreds: {
                value: new Map([
                    ["high", new Set],
                    ["low", new Set]
                ])
            },
            state: {
                enumerable: !0,
                get: function() {
                    return this._state
                }
            }
        })
    }

    function a(e, t) {
        return new Error('Cannot transition from "' + e + '" to "' + t + '"')
    }
    o.prototype.lower = function() {
        return this.transition("low")
    }, o.prototype.raise = function() {
        return this.transition("high")
    }, o.prototype.transition = function(e) {
        if (!i[this.state].has(e)) throw a(this.state, e);
        return this._state = e, this
    }, o.prototype.when = function(e) {
        if (this.state === e) return Promise.resolve(this);
        if (!i[this.state].has(e)) return Promise.reject(a(this.state, e));
        var t = r();
        return this._whenDeferreds.get(e).add(t), t.promise
    }, e.exports = o
}, function(e, t, n) {
    "use strict";
    e.exports = RTCSessionDescription
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(1).defer,
        o = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), Object.defineProperties(this, {
                    _audio: {
                        value: i(),
                        writable: !0
                    },
                    _video: {
                        value: i(),
                        writable: !0
                    }
                }), this._audio.resolve(), this._video.resolve()
            }
            return r(e, [{
                key: "resolveDeferred",
                value: function(e) {
                    "audio" === e ? this._audio.resolve() : this._video.resolve()
                }
            }, {
                key: "startDeferred",
                value: function(e) {
                    "audio" === e ? this._audio = i() : this._video = i()
                }
            }, {
                key: "whenResolved",
                value: function(e) {
                    return "audio" === e ? this._audio.promise : this._video.promise
                }
            }]), e
        }();
    e.exports = new o
}, function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = function() {},
        o = "undefined",
        a = ("undefined" == typeof window ? "undefined" : r(window)) !== o && r(window.navigator) !== o && /Trident\/|MSIE /.test(window.navigator.userAgent),
        c = ["trace", "debug", "info", "warn", "error"];

    function s(e, t) {
        var n = e[t];
        if ("function" == typeof n.bind) return n.bind(e);
        try {
            return Function.prototype.bind.call(n, e)
        } catch (t) {
            return function() {
                return Function.prototype.apply.apply(n, [e, arguments])
            }
        }
    }

    function u() {
        console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace()
    }

    function l(e, t) {
        for (var n = 0; n < c.length; n++) {
            var r = c[n];
            this[r] = n < e ? i : this.methodFactory(r, e, t)
        }
        this.log = this.debug
    }

    function f(e, t, n) {
        return function(e) {
            return "debug" === e && (e = "log"), ("undefined" == typeof console ? "undefined" : r(console)) !== o && ("trace" === e && a ? u : void 0 !== console[e] ? s(console, e) : void 0 !== console.log ? s(console, "log") : i)
        }(e) || function(e, t, n) {
            return function() {
                ("undefined" == typeof console ? "undefined" : r(console)) !== o && (l.call(this, t, n), this[e].apply(this, arguments))
            }
        }.apply(this, arguments)
    }

    function p(e, t, n) {
        var i, a = this,
            s = "loglevel";

        function u() {
            var e;
            if (("undefined" == typeof window ? "undefined" : r(window)) !== o && s) {
                try {
                    e = window.localStorage[s]
                } catch (e) {}
                if ((void 0 === e ? "undefined" : r(e)) === o) try {
                    var t = window.document.cookie,
                        n = t.indexOf(encodeURIComponent(s) + "="); - 1 !== n && (e = /^([^;]+)/.exec(t.slice(n))[1])
                } catch (e) {}
                return void 0 === a.levels[e] && (e = void 0), e
            }
        }
        "string" == typeof e ? s += ":" + e : "symbol" === (void 0 === e ? "undefined" : r(e)) && (s = void 0), a.name = e, a.levels = {
            TRACE: 0,
            DEBUG: 1,
            INFO: 2,
            WARN: 3,
            ERROR: 4,
            SILENT: 5
        }, a.methodFactory = n || f, a.getLevel = function() {
            return i
        }, a.setLevel = function(t, n) {
            if ("string" == typeof t && void 0 !== a.levels[t.toUpperCase()] && (t = a.levels[t.toUpperCase()]), !("number" == typeof t && t >= 0 && t <= a.levels.SILENT)) throw "log.setLevel() called with invalid level: " + t;
            if (i = t, !1 !== n && function(e) {
                    var t = (c[e] || "silent").toUpperCase();
                    if (("undefined" == typeof window ? "undefined" : r(window)) !== o && s) {
                        try {
                            return void(window.localStorage[s] = t)
                        } catch (e) {}
                        try {
                            window.document.cookie = encodeURIComponent(s) + "=" + t + ";"
                        } catch (e) {}
                    }
                }(t), l.call(a, t, e), ("undefined" == typeof console ? "undefined" : r(console)) === o && t < a.levels.SILENT) return "No console available for logging"
        }, a.setDefaultLevel = function(e) {
            u() || a.setLevel(e, !1)
        }, a.enableAll = function(e) {
            a.setLevel(a.levels.TRACE, e)
        }, a.disableAll = function(e) {
            a.setLevel(a.levels.SILENT, e)
        };
        var p = u();
        null == p && (p = null == t ? "WARN" : t), a.setLevel(p, !1)
    }
    var d = new p,
        h = {};
    d.getLogger = function(e) {
        if ("symbol" !== (void 0 === e ? "undefined" : r(e)) && "string" != typeof e || "" === e) throw new TypeError("You must supply a name when creating a logger.");
        var t = h[e];
        return t || (t = h[e] = new p(e, d.getLevel(), d.methodFactory)), t
    };
    var v = ("undefined" == typeof window ? "undefined" : r(window)) !== o ? window.log : void 0;
    d.noConflict = function() {
        return ("undefined" == typeof window ? "undefined" : r(window)) !== o && window.log === d && (window.log = v), d
    }, d.getLoggers = function() {
        return h
    }, d.default = d, e.exports = d
}, function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        o = function e(t, n, r) {
            null === t && (t = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === i) {
                var o = Object.getPrototypeOf(t);
                return null === o ? void 0 : e(o, n, r)
            }
            if ("value" in i) return i.value;
            var a = i.get;
            return void 0 !== a ? a.call(r) : void 0
        };
    var a = n(8).getUserMedia,
        c = n(2).guessBrowser,
        s = n(1),
        u = s.capitalize,
        l = s.defer,
        f = s.waitForSometime,
        p = s.waitForEvent,
        d = n(4).typeErrors.ILLEGAL_INVOKE,
        h = n(130),
        v = n(61),
        y = n(62),
        b = n(57),
        m = n(63),
        _ = n(64);

    function g(e) {
        var t = e._log,
            n = e.kind,
            r = {
                audio: h,
                video: v
            } [n],
            i = e._dummyEl,
            o = e.mediaStreamTrack,
            a = null;

        function c() {
            var n = e._workaroundWebKitBug1208516Cleanup,
                o = e.isStopped,
                c = e.mediaStreamTrack.muted,
                s = o && !!n;
            return Promise.resolve().then(function() {
                return "visible" === document.visibilityState && !a && (c || s || i.play().then(function() {
                    return r(i)
                }).then(function(e) {
                    return e ? t.warn("Silence detected") : t.info("Non-silence detected"), e
                }).catch(function(e) {
                    t.warn("Failed to detect silence:", e)
                }).finally(function() {
                    i.pause()
                }))
            })
        }

        function s() {
            return Promise.race([p(o, "unmute"), f(50)]).then(function() {
                return c()
            }).then(function(t) {
                return t && !a && (a = l(), e._restart().finally(function() {
                    i = e._dummyEl, m(), o = e.mediaStreamTrack, d(), a.resolve(), a = null
                })), (a && a.promise || Promise.resolve()).finally(function() {
                    return b.resolveDeferred(n)
                })
            })
        }

        function u() {
            var t = e._log,
                n = e.kind;
            t.info("Muted"), t.debug("LocalMediaTrack:", e), b.startDeferred(n)
        }

        function d() {
            o.addEventListener("ended", s), o.addEventListener("mute", u), o.addEventListener("unmute", s)
        }

        function m() {
            o.removeEventListener("ended", s), o.removeEventListener("mute", u), o.removeEventListener("unmute", s)
        }
        return y.onVisible(1, s), d(),
            function() {
                y.offVisible(1, s), m()
            }
    }
    e.exports = function(e) {
        return function(t) {
            function n(e, t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n);
                var i = "safari" === c() && "object" === ("undefined" == typeof document ? "undefined" : r(document)) && "function" == typeof document.addEventListener && "string" == typeof document.visibilityState;
                t = Object.assign({
                    getUserMedia: a,
                    isCreatedByCreateLocalTracks: !1,
                    workaroundWebKitBug1208516: i,
                    gUMSilentTrackWorkaround: m
                }, t);
                var o = new _(e),
                    s = o.kind,
                    u = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, o, t));
                return Object.defineProperties(u, {
                    _constraints: {
                        value: "object" === r(t[s]) ? t[s] : {},
                        writable: !0
                    },
                    _getUserMedia: {
                        value: t.getUserMedia
                    },
                    _gUMSilentTrackWorkaround: {
                        value: t.gUMSilentTrackWorkaround
                    },
                    _workaroundWebKitBug1208516: {
                        value: t.workaroundWebKitBug1208516
                    },
                    _workaroundWebKitBug1208516Cleanup: {
                        value: null,
                        writable: !0
                    },
                    _didCallEnd: {
                        value: !1,
                        writable: !0
                    },
                    _isCreatedByCreateLocalTracks: {
                        value: t.isCreatedByCreateLocalTracks
                    },
                    _trackSender: {
                        value: o
                    },
                    id: {
                        enumerable: !0,
                        value: o.id
                    },
                    isEnabled: {
                        enumerable: !0,
                        get: function() {
                            return o.enabled
                        }
                    },
                    isStopped: {
                        enumerable: !0,
                        get: function() {
                            return "ended" === o.readyState
                        }
                    }
                }), u._workaroundWebKitBug1208516 && (u._workaroundWebKitBug1208516Cleanup = g(u)), u
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(n, e), i(n, [{
                key: "_end",
                value: function() {
                    this._didCallEnd || (o(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "_end", this).call(this), this._didCallEnd = !0, this.emit("stopped", this))
                }
            }, {
                key: "_initialize",
                value: function() {
                    this._didCallEnd && (this._didCallEnd = !1), o(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "_initialize", this).call(this)
                }
            }, {
                key: "_reacquireTrack",
                value: function(e) {
                    var t = this._getUserMedia,
                        n = this._gUMSilentTrackWorkaround,
                        r = this._log,
                        i = this.mediaStreamTrack.kind;
                    r.info("Re-acquiring the MediaStreamTrack"), r.debug("Constraints:", e);
                    var o, a, c, s = Object.assign({
                        audio: !1,
                        video: !1
                    }, (c = e, (a = i) in (o = {}) ? Object.defineProperty(o, a, {
                        value: c,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : o[a] = c, o));
                    return (this._workaroundWebKitBug1208516Cleanup ? n(r, t, s) : t(s)).then(function(e) {
                        return e.getTracks()[0]
                    })
                }
            }, {
                key: "_restart",
                value: function(e) {
                    var t = this,
                        n = this._log;
                    return e = e || this._constraints, this._stop(), this._reacquireTrack(e).catch(function(t) {
                        throw n.error("Failed to re-acquire the MediaStreamTrack:", {
                            error: t,
                            constraints: e
                        }), t
                    }).then(function(r) {
                        return n.info("Re-acquired the MediaStreamTrack"), n.debug("MediaStreamTrack:", r), t._constraints = Object.assign({}, e), t._setMediaStreamTrack(r)
                    })
                }
            }, {
                key: "_setMediaStreamTrack",
                value: function(e) {
                    var t = this;
                    return e.enabled = this.mediaStreamTrack.enabled, this._stop(), this._trackSender.setMediaStreamTrack(e).catch(function(n) {
                        t._log.warn("setMediaStreamTrack failed:", {
                            error: n,
                            mediaStreamTrack: e
                        })
                    }).then(function() {
                        t._initialize(), t._getAllAttachedElements().forEach(function(e) {
                            return t._attach(e)
                        })
                    })
                }
            }, {
                key: "_stop",
                value: function() {
                    return this.mediaStreamTrack.stop(), this._end(), this
                }
            }, {
                key: "enable",
                value: function(e) {
                    return (e = "boolean" != typeof e || e) !== this.mediaStreamTrack.enabled && (this._log.info((e ? "En" : "Dis") + "abling"), this.mediaStreamTrack.enabled = e, this.emit(e ? "enabled" : "disabled", this)), this
                }
            }, {
                key: "disable",
                value: function() {
                    return this.enable(!1)
                }
            }, {
                key: "restart",
                value: function(e) {
                    var t = this,
                        n = this.kind;
                    if (!this._isCreatedByCreateLocalTracks) return Promise.reject(d("restart", "can only be called on a Local" + u(n) + "Track that is created using createLocalTracks or createLocal" + u(n) + "Track."));
                    this._workaroundWebKitBug1208516Cleanup && (this._workaroundWebKitBug1208516Cleanup(), this._workaroundWebKitBug1208516Cleanup = null);
                    var r = this._restart(e);
                    return this._workaroundWebKitBug1208516 && (r = r.finally(function() {
                        t._workaroundWebKitBug1208516Cleanup = g(t)
                    })), r
                }
            }, {
                key: "stop",
                value: function() {
                    return this._log.info("Stopping"), this._workaroundWebKitBug1208516Cleanup && (this._workaroundWebKitBug1208516Cleanup(), this._workaroundWebKitBug1208516Cleanup = null), this._stop()
                }
            }]), n
        }()
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        n = "number" == typeof n ? n : 250;
        var r = e.createMediaStreamSource(t),
            i = e.createAnalyser();
        i.fftSize = 2048, r.connect(i);
        var o = new Uint8Array(i.fftSize),
            a = !1;
        return setTimeout(function() {
                a = !0
            }, n),
            function e() {
                return a ? Promise.resolve(!0) : (i.getByteTimeDomainData(o), o.some(function(e) {
                    return 128 !== e && 0 !== e
                }) ? Promise.resolve(!1) : (t = "number" == typeof t ? t : 0, new Promise(function(e) {
                    return setTimeout(e, t)
                })).then(e));
                var t
            }().then(function(e) {
                return r.disconnect(), e
            }, function(e) {
                throw r.disconnect(), e
            })
    }
}, function(e, t, n) {
    "use strict";
    var r = null,
        i = 3,
        o = 50,
        a = 250,
        c = 50;
    e.exports = function(e) {
        return r = r || document.createElement("canvas"), new Promise(function(t) {
            var n = i;
            setTimeout(function i() {
                return n--,
                    function(e) {
                        var t = r.getContext("2d");
                        t.drawImage(e, 0, 0, c, o);
                        var n = t.getImageData(0, 0, c, o).data.filter(function(e, t) {
                            return (t + 1) % 4
                        });
                        return 0 === Math.max.apply(Math, n)
                    }(e) ? n > 0 ? setTimeout(i, a) : t(!0) : t(!1)
            }, a)
        })
    }
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = function() {
        function e() {
            var t = this,
                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), Object.defineProperties(this, {
                _listeners: {
                    value: []
                },
                _onVisibilityChange: {
                    value: function() {
                        "visible" === document.visibilityState && t._emitVisible()
                    }
                }
            });
            for (var r = 0; r < n; r++) this._listeners.push([])
        }
        return r(e, [{
            key: "_listenerCount",
            value: function() {
                return this._listeners.reduce(function(e, t) {
                    return e + t.length
                }, 0)
            }
        }, {
            key: "_emitVisible",
            value: function() {
                for (var e = this, t = Promise.resolve(), n = function(n) {
                        t = t.then(function() {
                            return e._emitVisiblePhase(n)
                        })
                    }, r = 1; r <= this._listeners.length; r++) n(r);
                return t
            }
        }, {
            key: "_emitVisiblePhase",
            value: function(e) {
                var t = this._listeners[e - 1];
                return Promise.all(t.map(function(e) {
                    var t = e();
                    return t instanceof Promise ? t : Promise.resolve(t)
                }))
            }
        }, {
            key: "_start",
            value: function() {
                document.addEventListener("visibilitychange", this._onVisibilityChange)
            }
        }, {
            key: "_stop",
            value: function() {
                document.removeEventListener("visibilitychange", this._onVisibilityChange)
            }
        }, {
            key: "onVisible",
            value: function(e, t) {
                if ("number" != typeof e || e <= 0 || e > this._listeners.length) throw new Error("invalid phase: ", e);
                return this._listeners[e - 1].push(t), 1 === this._listenerCount() && this._start(), this
            }
        }, {
            key: "offVisible",
            value: function(e, t) {
                if ("number" != typeof e || e <= 0 || e > this._listeners.length) throw new Error("invalid phase: ", e);
                var n = this._listeners[e - 1],
                    r = n.indexOf(t);
                return -1 !== r && (n.splice(r, 1), 0 === this._listenerCount() && this._stop()), this
            }
        }]), e
    }();
    e.exports = new i(2)
}, function(e, t, n) {
    "use strict";
    var r = n(60);
    e.exports = function(e, t, i, o, a) {
        o = "number" == typeof o ? o : 3;
        var c = 0,
            s = n(34),
            u = {},
            l = s.getOrCreate(u);
        return function n() {
            return t(i).then(function(t) {
                return (i.audio ? r(l, t, a).catch(function(t) {
                    return e.warn("Encountered an error while detecting silence", t), !0
                }) : Promise.resolve(!1)).then(function(r) {
                    return r ? o <= 0 ? (e.warn("Got a silent audio MediaStreamTrack. Normally we would try to get a new one, but we've run out of retries; returning it anyway."), t) : (e.warn("Got a silent audio MediaStreamTrack. Stopping all MediaStreamTracks and calling getUserMedia again. This is retry #" + ++c + "."), t.getTracks().forEach(function(e) {
                        return e.stop()
                    }), o--, n()) : (e.info("Got a non-silent audio MediaStreamTrack; returning it."), t)
                })
            })
        }().then(function(e) {
            return s.release(u), e
        }, function(e) {
            throw s.release(u), e
        })
    }
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(65),
        o = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e.id, e));
                return Object.defineProperties(n, {
                    _clones: {
                        value: new Set
                    },
                    _senders: {
                        value: new Set
                    }
                }), n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i), r(t, [{
                key: "clone",
                value: function() {
                    var e = new t(this.track.clone());
                    return this._clones.add(e), e
                }
            }, {
                key: "removeClone",
                value: function(e) {
                    this._clones.delete(e)
                }
            }, {
                key: "setMediaStreamTrack",
                value: function(e) {
                    var t = this,
                        n = Array.from(this._clones),
                        r = Array.from(this._senders);
                    return Promise.all(n.map(function(t) {
                        return t.setMediaStreamTrack(e.clone())
                    }).concat(r.map(function(t) {
                        return t.replaceTrack(e)
                    }))).finally(function() {
                        t._track = e
                    })
                }
            }, {
                key: "addSender",
                value: function(e) {
                    return this._senders.add(e), this
                }
            }, {
                key: "removeSender",
                value: function(e) {
                    return this._senders.delete(e), this
                }
            }]), t
        }();
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(66),
        o = function(e) {
            function t(e, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var r = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n.kind));
                return Object.defineProperties(r, {
                    _track: {
                        value: n,
                        writable: !0
                    },
                    enabled: {
                        enumerable: !0,
                        get: function() {
                            return this._track.enabled
                        }
                    },
                    readyState: {
                        enumerable: !0,
                        get: function() {
                            return this._track.readyState
                        }
                    },
                    track: {
                        enumerable: !0,
                        get: function() {
                            return this._track
                        }
                    }
                }), r
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i), r(t, [{
                key: "stop",
                value: function() {
                    this.track.stop(),
                        function e(t, n, r) {
                            null === t && (t = Function.prototype);
                            var i = Object.getOwnPropertyDescriptor(t, n);
                            if (void 0 === i) {
                                var o = Object.getPrototypeOf(t);
                                return null === o ? void 0 : e(o, n, r)
                            }
                            if ("value" in i) return i.value;
                            var a = i.get;
                            return void 0 !== a ? a.call(r) : void 0
                        }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "stop", this).call(this)
                }
            }]), t
        }();
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(3).EventEmitter,
        o = function(e) {
            function t(e, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var r = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return Object.defineProperties(r, {
                    id: {
                        enumerable: !0,
                        value: e
                    },
                    kind: {
                        enumerable: !0,
                        value: n
                    }
                }), r
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i), r(t, [{
                key: "stop",
                value: function() {
                    this.emit("stopped")
                }
            }]), t
        }();
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = function e(t, n, r) {
            null === t && (t = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === i) {
                var o = Object.getPrototypeOf(t);
                return null === o ? void 0 : e(o, n, r)
            }
            if ("value" in i) return i.value;
            var a = i.get;
            return void 0 !== a ? a.call(r) : void 0
        };

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    var a = n(52),
        c = function(e) {
            function t(e, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                return Object.defineProperties(r, {
                    dimensions: {
                        enumerable: !0,
                        value: {
                            width: null,
                            height: null
                        }
                    }
                }), o(r, r)
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, a), r(t, [{
                key: "_initialize",
                value: function() {
                    var e = this;
                    i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_initialize", this).call(this), this._dummyEl && (this._dummyEl.onloadedmetadata = function() {
                        s(e, e._dummyEl) && (e.dimensions.width = e._dummyEl.videoWidth, e.dimensions.height = e._dummyEl.videoHeight)
                    }, this._dummyEl.onresize = function() {
                        s(e, e._dummyEl) && (e.dimensions.width = e._dummyEl.videoWidth, e.dimensions.height = e._dummyEl.videoHeight, e.isStarted && (e._log.debug("Dimensions changed:", e.dimensions), e.emit(t.DIMENSIONS_CHANGED, e)))
                    })
                }
            }, {
                key: "_start",
                value: function(e) {
                    return this.dimensions.width = e.videoWidth, this.dimensions.height = e.videoHeight, this._log.debug("Dimensions:", this.dimensions), i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_start", this).call(this, e)
                }
            }, {
                key: "attach",
                value: function() {
                    return i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "attach", this).apply(this, arguments)
                }
            }, {
                key: "detach",
                value: function() {
                    return i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "detach", this).apply(this, arguments)
                }
            }]), t
        }();

    function s(e, t) {
        return e.dimensions.width !== t.videoWidth || e.dimensions.height !== t.videoHeight
    }
    c.DIMENSIONS_CHANGED = "dimensionsChanged", e.exports = c
}, function(e, t, n) {
    "use strict";
    var r = n(66),
        i = function(e) {
            function t(e, n, r, i) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var o = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, "data"));
                return Object.defineProperties(o, {
                    maxPacketLifeTime: {
                        enumerable: !0,
                        value: n
                    },
                    maxRetransmits: {
                        enumerable: !0,
                        value: r
                    },
                    ordered: {
                        enumerable: !0,
                        value: i
                    }
                }), o
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, r), t
        }();
    e.exports = i
}, function(e) {
    e.exports = {
        _args: [
            ["twilio-video@2.11.0", "/Users/sjagecic/Documents/Blocksi/live/bmee-extension"]
        ],
        _from: "twilio-video@2.11.0",
        _id: "twilio-video@2.11.0",
        _inBundle: !1,
        _integrity: "sha512-6nvMzkvcXP3616ocX3hZU0SclpExCpBUbYwW1y79h993xmiY25C0WOIkcgycKIIdQwLcysXBWl01OGYDYw8R3w==",
        _location: "/twilio-video",
        _phantomChildren: {
            "async-limiter": "1.0.0",
            "safe-buffer": "5.1.2",
            ultron: "1.1.1"
        },
        _requested: {
            type: "version",
            registry: !0,
            raw: "twilio-video@2.11.0",
            name: "twilio-video",
            escapedName: "twilio-video",
            rawSpec: "2.11.0",
            saveSpec: null,
            fetchSpec: "2.11.0"
        },
        _requiredBy: ["/"],
        _resolved: "https://registry.npmjs.org/twilio-video/-/twilio-video-2.11.0.tgz",
        _spec: "2.11.0",
        _where: "/Users/sjagecic/Documents/Blocksi/live/bmee-extension",
        author: {
            name: "Mark Andrus Roberts",
            email: "mroberts@twilio.com"
        },
        browser: {
            ws: "./src/ws.js",
            xmlhttprequest: "./src/xmlhttprequest.js"
        },
        bugs: {
            url: "https://github.com/twilio/twilio-video.js/issues"
        },
        contributors: [{
            name: "Ryan Rowland",
            email: "rrowland@twilio.com"
        }, {
            name: "Manjesh Malavalli",
            email: "mmalavalli@twilio.com"
        }, {
            name: "Makarand Patwardhan",
            email: "mpatwardhan@twilio.com"
        }],
        dependencies: {
            "@twilio/webrtc": "4.3.2",
            backoff: "^2.5.0",
            ws: "^3.3.1",
            xmlhttprequest: "^1.8.0"
        },
        description: "Twilio Video JavaScript Library",
        devDependencies: {
            "@types/express": "^4.11.0",
            "@types/node": "^8.5.1",
            "@types/selenium-webdriver": "^3.0.8",
            "@types/ws": "^3.2.1",
            "@typescript-eslint/eslint-plugin": "^4.13.0",
            "@typescript-eslint/parser": "^3.10.1",
            "babel-cli": "^6.26.0",
            "babel-preset-es2015": "^6.24.1",
            browserify: "^17.0.0",
            cheerio: "^0.22.0",
            cors: "^2.8.5",
            electron: "^9.1.0",
            envify: "^4.0.0",
            eslint: "^6.2.1",
            "eslint-config-standard": "^14.0.0",
            "eslint-plugin-import": "^2.18.2",
            "eslint-plugin-node": "^9.1.0",
            "eslint-plugin-promise": "^4.2.1",
            "eslint-plugin-standard": "^4.0.1",
            express: "^4.16.2",
            "ink-docstrap": "^1.3.2",
            inquirer: "^7.0.0",
            "is-docker": "^2.0.0",
            istanbul: "^0.4.5",
            jsdoc: "^3.5.5",
            "json-loader": "^0.5.7",
            karma: "^5.0.2",
            "karma-browserify": "^7.0.0",
            "karma-chrome-launcher": "^2.0.0",
            "karma-edgium-launcher": "^4.0.0-0",
            "karma-electron": "^6.1.0",
            "karma-firefox-launcher": "^1.3.0",
            "karma-htmlfile-reporter": "^0.3.8",
            "karma-junit-reporter": "^1.2.0",
            "karma-mocha": "^1.3.0",
            "karma-safari-launcher": "^1.0.0",
            "karma-spec-reporter": "0.0.32",
            mocha: "^3.2.0",
            "node-http-server": "^8.1.2",
            "npm-run-all": "^4.0.2",
            requirejs: "^2.3.3",
            rimraf: "^2.6.1",
            "simple-git": "^1.126.0",
            sinon: "^4.0.1",
            "ts-node": "4.0.1",
            tslint: "5.8.0",
            twilio: "^3.49.0",
            "twilio-release-tool": "^1.0.0",
            typescript: "^4.0.5",
            "uglify-js": "^2.8.22",
            "vinyl-fs": "^2.4.4",
            "vinyl-source-stream": "^1.1.0",
            watchify: "^3.11.1",
            "webrtc-adapter": "^4.1.1"
        },
        engines: {
            node: ">=0.12"
        },
        homepage: "https://twilio.com",
        keywords: ["twilio", "webrtc", "library", "javascript", "video", "rooms"],
        license: "BSD-3-Clause",
        main: "./es5/index.js",
        name: "twilio-video",
        repository: {
            type: "git",
            url: "git+https://github.com/twilio/twilio-video.js.git"
        },
        scripts: {
            build: "npm-run-all clean lint docs cover test:integration build:es5 build:js build:min.js test:umd",
            "build:es5": "rimraf ./es5 && babel lib -d es5",
            "build:js": "node ./scripts/build.js ./src/twilio-video.js ./LICENSE.md ./dist/twilio-video.js",
            "build:min.js": 'uglifyjs ./dist/twilio-video.js -o ./dist/twilio-video.min.js --comments "/^! twilio-video.js/" -b beautify=false,ascii_only=true',
            "build:quick": "npm-run-all clean lint docs build:es5 build:js build:min.js build:ts",
            "build:ts": "tsc -p tsconfig.json --noEmit",
            clean: "rimraf ./coverage ./es5 ./dist",
            cover: "istanbul cover node_modules/mocha/bin/_mocha -- ./test/unit/index.js",
            docs: "node ./scripts/docs.js ./dist/docs",
            lint: "npm-run-all lint:js lint:ts",
            "lint:js": "eslint ./lib ./test/*.js ./docker/**/*.js ./test/framework/*.js ./test/lib/*.js ./test/integration/** ./test/unit/** ",
            "lint:ts": "eslint ./tsdef/*.ts",
            test: "npm-run-all test:unit test:integration",
            "test:crossbrowser": "npm-run-all test:crossbrowser:*",
            "test:crossbrowser:build": "npm-run-all test:crossbrowser:build:*",
            "test:crossbrowser:build:browser": "cd ./test/crossbrowser && browserify lib/crossbrowser/src/browser/index.js > src/browser/index.js",
            "test:crossbrowser:build:clean": "rimraf ./test/crossbrowser/lib ./test/crossbrowser/src/browser/index.js",
            "test:crossbrowser:build:lint": "cd ./test/crossbrowser && tslint --project tsconfig.json",
            "test:crossbrowser:build:tsc": "cd ./test/crossbrowser && tsc",
            "test:crossbrowser:test": "cd ./test/crossbrowser && mocha --compilers ts:ts-node/register test/integration/spec/**/*.ts",
            "test:framework": "npm-run-all test:framework:install test:framework:angular test:framework:no-framework test:framework:react",
            "test:framework:angular": "npm-run-all test:framework:angular:*",
            "test:framework:angular:install": "cd ./test/framework/twilio-video-angular && rimraf ./node_modules package-lock.json && npm install",
            "test:framework:angular:run": "mocha ./test/framework/twilio-video-angular.js",
            "test:framework:install": "npm install chromedriver && npm install selenium-webdriver && npm install geckodriver && npm install puppeteer",
            "test:framework:no-framework": "npm-run-all test:framework:no-framework:*",
            "test:framework:no-framework:run": "mocha ./test/framework/twilio-video-no-framework.js",
            "test:framework:react": "npm-run-all test:framework:react:*",
            "test:framework:react:build": "cd ./test/framework/twilio-video-react && npm run build",
            "test:framework:react:install": "cd ./test/framework/twilio-video-react && rimraf ./node_modules package-lock.json && npm install",
            "test:framework:react:run": "mocha ./test/framework/twilio-video-react.js",
            "test:framework:react:test": "node ./scripts/framework.js twilio-video-react",
            "test:integration": "node ./scripts/karma.js karma/integration.conf.js",
            "test:integration:adapter": "node ./scripts/karma.js karma/integration.adapter.conf.js",
            "test:sdkdriver": "npm-run-all test:sdkdriver:*",
            "test:sdkdriver:build": "npm-run-all test:sdkdriver:build:*",
            "test:sdkdriver:build:clean": "rimraf ./test/lib/sdkdriver/lib ./test/lib/sdkdriver/test/integration/browser/index.js",
            "test:sdkdriver:build:lint": "cd ./test/lib/sdkdriver && tslint --project tsconfig.json",
            "test:sdkdriver:build:tsc": "cd ./test/lib/sdkdriver && tsc --rootDir src",
            "test:sdkdriver:test": "npm-run-all test:sdkdriver:test:*",
            "test:sdkdriver:test:integration": "npm-run-all test:sdkdriver:test:integration:*",
            "test:sdkdriver:test:integration:browser": "cd ./test/lib/sdkdriver/test/integration && browserify browser/browser.js > browser/index.js",
            "test:sdkdriver:test:integration:run": "cd ./test/lib/sdkdriver && mocha --compilers ts:ts-node/register test/integration/spec/**/*.ts",
            "test:sdkdriver:test:unit": "cd ./test/lib/sdkdriver && mocha --compilers ts:ts-node/register test/unit/spec/**/*.ts",
            "test:umd": "mocha ./test/umd/index.js",
            "test:umd:install": "npm install puppeteer",
            "test:unit": "mocha ./test/unit/index.js"
        },
        title: "Twilio Video",
        types: "./tsdef/index.d.ts",
        version: "2.11.0"
    }
}, function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = n(1).isNonArrayObject,
        o = n(4),
        a = o.typeErrors,
        c = o.subscriptionMode,
        s = o.trackPriority,
        u = o.trackSwitchOffMode;

    function l(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        return void 0 === e ? null : null !== e && i(e) ? n.reduce(function(n, i) {
            var o = i.prop,
                c = i.type,
                s = i.values;
            if (n || !(o in e)) return n;
            var u = e[o];
            return c && (void 0 === u ? "undefined" : r(u)) !== c ? a.INVALID_TYPE(t + "." + o, c) : "number" === c && isNaN(u) ? a.INVALID_TYPE(t + "." + o, c) : Array.isArray(s) && !s.includes(u) ? a.INVALID_VALUE(t + "." + o, s) : n
        }, null) : a.INVALID_TYPE(t, "object")
    }
    t.validateBandwidthProfile = function(e) {
        var t = l(e, "options.bandwidthProfile");
        return !e || t ? t : (t = l(e.video, "options.bandwidthProfile.video", [{
            prop: "dominantSpeakerPriority",
            values: Object.values(s)
        }, {
            prop: "maxSubscriptionBitrate",
            type: "number"
        }, {
            prop: "maxTracks",
            type: "number"
        }, {
            prop: "mode",
            values: Object.values(c)
        }, {
            prop: "trackSwitchOffMode",
            values: Object.values(u)
        }])) || (e.video ? function(e) {
            var t = "options.bandwidthProfile.video.renderDimensions",
                n = l(e, t);
            return e ? n || Object.values(s).reduce(function(n, r) {
                return n || l(e[r], t + "." + r, [{
                    prop: "height",
                    type: "number"
                }, {
                    prop: "width",
                    type: "number"
                }])
            }, null) : n
        }(e.video.renderDimensions) : null)
    }, t.validateLocalTrack = function(e, t) {
        if (!(e instanceof t.LocalAudioTrack || e instanceof t.LocalDataTrack || e instanceof t.LocalVideoTrack || e instanceof t.MediaStreamTrack)) throw a.INVALID_TYPE("track", "LocalAudioTrack, LocalVideoTrack, LocalDataTrack, or MediaStreamTrack")
    }, t.validateObject = l
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(26),
        o = n(1),
        a = o.buildLogLevels,
        c = o.valueToJSON,
        s = n(4).DEFAULT_LOG_LEVEL,
        u = n(18),
        l = 0,
        f = function(e) {
            function t(e, n, r) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var i = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                r = Object.assign({
                    logLevel: s
                }, r);
                var o = a(r.logLevel);
                return Object.defineProperties(i, {
                    _instanceId: {
                        value: l++
                    },
                    _log: {
                        value: r.log || new u("default", i, o, r.loggerName)
                    },
                    trackName: {
                        enumerable: !0,
                        value: e
                    },
                    trackSid: {
                        enumerable: !0,
                        value: n
                    }
                }), i
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i), r(t, [{
                key: "toJSON",
                value: function() {
                    return c(this)
                }
            }, {
                key: "toString",
                value: function() {
                    return "[TrackPublication #" + this._instanceId + ": " + this.trackSid + "]"
                }
            }]), t
        }();
    e.exports = f
}, function(e, t, n) {
    "use strict";
    var r = function() {
            return function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return function(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !r && c.return && c.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
    var o = n(26),
        a = n(143),
        c = n(144),
        s = n(145),
        u = n(146),
        l = n(147),
        f = n(148),
        p = n(1),
        d = 0,
        h = function(e) {
            function t(e, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var r = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)),
                    i = function(e) {
                        var t = e.map(function(e) {
                                return [e.id, e]
                            }),
                            n = t.filter(function(e) {
                                return "audio" === e[1].kind
                            }),
                            r = t.filter(function(e) {
                                return "video" === e[1].kind
                            }),
                            i = t.filter(function(e) {
                                return "data" === e[1].kind
                            });
                        return {
                            audioTracks: n,
                            dataTracks: i,
                            tracks: t,
                            videoTracks: r
                        }
                    }((n = Object.assign({
                        RemoteAudioTrack: a,
                        RemoteAudioTrackPublication: c,
                        RemoteDataTrack: s,
                        RemoteDataTrackPublication: u,
                        RemoteVideoTrack: l,
                        RemoteVideoTrackPublication: f,
                        tracks: []
                    }, n)).tracks),
                    o = n.log.createLog("default", r),
                    p = new Map(i.audioTracks),
                    h = new Map(i.dataTracks),
                    y = new Map(i.tracks),
                    b = new Map(i.videoTracks);
                return Object.defineProperties(r, {
                        _RemoteAudioTrack: {
                            value: n.RemoteAudioTrack
                        },
                        _RemoteAudioTrackPublication: {
                            value: n.RemoteAudioTrackPublication
                        },
                        _RemoteDataTrack: {
                            value: n.RemoteDataTrack
                        },
                        _RemoteDataTrackPublication: {
                            value: n.RemoteDataTrackPublication
                        },
                        _RemoteVideoTrack: {
                            value: n.RemoteVideoTrack
                        },
                        _RemoteVideoTrackPublication: {
                            value: n.RemoteVideoTrackPublication
                        },
                        _audioTracks: {
                            value: p
                        },
                        _dataTracks: {
                            value: h
                        },
                        _instanceId: {
                            value: ++d
                        },
                        _log: {
                            value: o
                        },
                        _signaling: {
                            value: e
                        },
                        _tracks: {
                            value: y
                        },
                        _trackEventReemitters: {
                            value: new Map
                        },
                        _trackPublicationEventReemitters: {
                            value: new Map
                        },
                        _trackSignalingUpdatedEventCallbacks: {
                            value: new Map
                        },
                        _videoTracks: {
                            value: b
                        },
                        audioTracks: {
                            enumerable: !0,
                            value: new Map
                        },
                        dataTracks: {
                            enumerable: !0,
                            value: new Map
                        },
                        identity: {
                            enumerable: !0,
                            get: function() {
                                return e.identity
                            }
                        },
                        networkQualityLevel: {
                            enumerable: !0,
                            get: function() {
                                return e.networkQualityLevel
                            }
                        },
                        networkQualityStats: {
                            enumerable: !0,
                            get: function() {
                                return e.networkQualityStats
                            }
                        },
                        sid: {
                            enumerable: !0,
                            get: function() {
                                return e.sid
                            }
                        },
                        state: {
                            enumerable: !0,
                            get: function() {
                                return e.state
                            }
                        },
                        tracks: {
                            enumerable: !0,
                            value: new Map
                        },
                        videoTracks: {
                            enumerable: !0,
                            value: new Map
                        }
                    }), r._tracks.forEach(v.bind(null, r)), e.on("networkQualityLevelChanged", function() {
                        return r.emit("networkQualityLevelChanged", r.networkQualityLevel, r.networkQualityStats && (r.networkQualityStats.audio || r.networkQualityStats.video) ? r.networkQualityStats : null)
                    }),
                    function(e, t) {
                        var n = e._log;
                        if ("disconnected" === e.state) return;
                        t.on("stateChanged", function r(i) {
                            n.debug("Transitioned to state:", i), e.emit(i, e), "disconnected" === i && (n.debug("Removing Track event reemitters"), t.removeListener("stateChanged", r), e._tracks.forEach(function(t) {
                                var n = e._trackEventReemitters.get(t.id);
                                t && n && n.forEach(function(e, n) {
                                    t.removeListener(n, e)
                                })
                            }), t.tracks.forEach(function(t) {
                                var n = e._tracks.get(t.id),
                                    r = e._trackEventReemitters.get(t.id);
                                n && r && r.forEach(function(e, t) {
                                    n.removeListener(t, e)
                                })
                            }), e._trackEventReemitters.clear(), e.tracks.forEach(function(t) {
                                e._trackPublicationEventReemitters.get(t.trackSid).forEach(function(e, n) {
                                    t.removeListener(n, e)
                                })
                            }), e._trackPublicationEventReemitters.clear())
                        })
                    }(r, e), o.info("Created a new Participant" + (r.identity ? ": " + r.identity : "")), r
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o), i(t, [{
                key: "_getTrackEvents",
                value: function() {
                    return [
                        ["dimensionsChanged", "trackDimensionsChanged"],
                        ["message", "trackMessage"],
                        ["started", "trackStarted"]
                    ]
                }
            }, {
                key: "_getTrackPublicationEvents",
                value: function() {
                    return []
                }
            }, {
                key: "toString",
                value: function() {
                    return "[Participant #" + this._instanceId + ": " + this.sid + "]"
                }
            }, {
                key: "_addTrack",
                value: function(e, t) {
                    var n = this._log;
                    return this._tracks.has(t) ? null : (this._tracks.set(t, e), {
                        audio: this._audioTracks,
                        video: this._videoTracks,
                        data: this._dataTracks
                    } [e.kind].set(t, e), v(this, e, t), n.info("Added a new " + p.trackClass(e) + ":", t), n.debug(p.trackClass(e) + ":", e), e)
                }
            }, {
                key: "_addTrackPublication",
                value: function(e) {
                    var t = this._log;
                    return this.tracks.has(e.trackSid) ? null : (this.tracks.set(e.trackSid, e), {
                        audio: this.audioTracks,
                        data: this.dataTracks,
                        video: this.videoTracks
                    } [e.kind].set(e.trackSid, e), function(e, t) {
                        var n = new Map;
                        if ("disconnected" === e.state) return;
                        e._getTrackPublicationEvents().forEach(function(i) {
                            var o = r(i, 2),
                                a = o[0],
                                c = o[1];
                            n.set(a, function() {
                                for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                e.emit.apply(e, [c].concat(r, [t]))
                            }), t.on(a, n.get(a))
                        }), e._trackPublicationEventReemitters.set(t.trackSid, n)
                    }(this, e), t.info("Added a new " + p.trackPublicationClass(e) + ":", e.trackSid), t.debug(p.trackPublicationClass(e) + ":", e), e)
                }
            }, {
                key: "_handleTrackSignalingEvents",
                value: function() {
                    var e = this._log,
                        t = this;
                    if ("disconnected" !== this.state) {
                        var n = this._RemoteAudioTrack,
                            i = this._RemoteAudioTrackPublication,
                            o = this._RemoteVideoTrack,
                            a = this._RemoteVideoTrackPublication,
                            c = this._RemoteDataTrack,
                            s = this._RemoteDataTrackPublication,
                            u = this._signaling;
                        u.on("trackAdded", l), u.on("trackRemoved", f), u.tracks.forEach(l), u.on("stateChanged", function n(r) {
                            "disconnected" === r ? (e.debug("Removing event listeners"), u.removeListener("stateChanged", n), u.removeListener("trackAdded", l), u.removeListener("trackRemoved", f)) : "connected" === r && (e.info("reconnected"), setTimeout(function() {
                                return t.emit("reconnected")
                            }, 0))
                        })
                    }

                    function l(n) {
                        var o = new(0, {
                            audio: i,
                            data: s,
                            video: a
                        } [n.kind])(n, {
                            log: e
                        });
                        t._addTrackPublication(o);
                        var c = n.isSubscribed;
                        c && p(n), t._trackSignalingUpdatedEventCallbacks.set(n.sid, function() {
                            if (c !== n.isSubscribed) {
                                if (c = n.isSubscribed) return void p(n);
                                ! function(e) {
                                    var n = Array.from(t._tracks.entries()).find(function(t) {
                                            var n = r(t, 2),
                                                i = n[1];
                                            return i.sid === e.sid
                                        }),
                                        i = r(n, 2),
                                        o = i[0],
                                        a = i[1],
                                        c = t.tracks.get(e.sid);
                                    a && t._removeTrack(a, c, o)
                                }(n)
                            }
                        }), n.on("updated", t._trackSignalingUpdatedEventCallbacks.get(n.sid))
                    }

                    function f(e) {
                        e.isSubscribed && e.setTrackTransceiver(null);
                        var n = t._trackSignalingUpdatedEventCallbacks.get(e.sid);
                        n && (e.removeListener("updated", n), t._trackSignalingUpdatedEventCallbacks.delete(e.sid));
                        var r = t.tracks.get(e.sid);
                        r && t._removeTrackPublication(r)
                    }

                    function p(r) {
                        var i = r.isEnabled,
                            a = r.name,
                            s = r.kind,
                            l = r.sid,
                            f = r.trackTransceiver,
                            p = {
                                audio: n,
                                video: o,
                                data: c
                            } [s],
                            d = t.tracks.get(l);
                        if (p && s === f.kind) {
                            var h = {
                                    log: e,
                                    name: a
                                },
                                v = "data" === s ? new p(l, f, h) : new p(l, f, i, function(e) {
                                    return u.updateSubscriberTrackPriority(l, e)
                                }, h);
                            t._addTrack(v, d, f.id)
                        }
                    }
                }
            }, {
                key: "_removeTrack",
                value: function(e, t) {
                    if (!this._tracks.has(t)) return null;
                    this._tracks.delete(t), {
                        audio: this._audioTracks,
                        video: this._videoTracks,
                        data: this._dataTracks
                    } [e.kind].delete(t), (this._trackEventReemitters.get(t) || new Map).forEach(function(t, n) {
                        e.removeListener(n, t)
                    });
                    var n = this._log;
                    return n.info("Removed a " + p.trackClass(e) + ":", t), n.debug(p.trackClass(e) + ":", e), e
                }
            }, {
                key: "_removeTrackPublication",
                value: function(e) {
                    if (!(e = this.tracks.get(e.trackSid))) return null;
                    this.tracks.delete(e.trackSid), {
                        audio: this.audioTracks,
                        data: this.dataTracks,
                        video: this.videoTracks
                    } [e.kind].delete(e.trackSid), (this._trackPublicationEventReemitters.get(e.trackSid) || new Map).forEach(function(t, n) {
                        e.removeListener(n, t)
                    });
                    var t = this._log;
                    return t.info("Removed a " + p.trackPublicationClass(e) + ":", e.trackSid), t.debug(p.trackPublicationClass(e) + ":", e), e
                }
            }, {
                key: "toJSON",
                value: function() {
                    return p.valueToJSON(this)
                }
            }]), t
        }();

    function v(e, t, n) {
        var r = new Map;
        "disconnected" !== e.state && (e._getTrackEvents().forEach(function(n) {
            var i = n[0],
                o = n[1];
            r.set(i, function() {
                var t = [o].concat([].slice.call(arguments));
                return e.emit.apply(e, function(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                    return Array.from(e)
                }(t))
            }), t.on(i, r.get(i))
        }), e._trackEventReemitters.set(n, r))
    }
    e.exports = h
}, function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        o = function e(t, n, r) {
            null === t && (t = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === i) {
                var o = Object.getPrototypeOf(t);
                return null === o ? void 0 : e(o, n, r)
            }
            if ("value" in i) return i.value;
            var a = i.get;
            return void 0 !== a ? a.call(r) : void 0
        };
    var a = n(4),
        c = a.typeErrors,
        s = a.trackPriority,
        u = n(2).guessBrowser,
        l = n(62);
    e.exports = function(e) {
        return function(t) {
            function n(e, t, i, o, a) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n), a = Object.assign({
                    workaroundWebKitBug212780: "safari" === u() && "object" === ("undefined" == typeof document ? "undefined" : r(document)) && "function" == typeof document.addEventListener && "string" == typeof document.visibilityState
                }, a);
                var c = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t, a));
                return Object.defineProperties(c, {
                    _isEnabled: {
                        value: i,
                        writable: !0
                    },
                    _isSwitchedOff: {
                        value: !1,
                        writable: !0
                    },
                    _priority: {
                        value: null,
                        writable: !0
                    },
                    _setPriority: {
                        value: o
                    },
                    isEnabled: {
                        enumerable: !0,
                        get: function() {
                            return this._isEnabled
                        }
                    },
                    isSwitchedOff: {
                        enumerable: !0,
                        get: function() {
                            return this._isSwitchedOff
                        }
                    },
                    priority: {
                        enumerable: !0,
                        get: function() {
                            return this._priority
                        }
                    },
                    sid: {
                        enumerable: !0,
                        value: e
                    },
                    _workaroundWebKitBug212780: {
                        value: a.workaroundWebKitBug212780
                    },
                    _workaroundWebKitBug212780Cleanup: {
                        value: null,
                        writable: !0
                    }
                }), c
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(n, e), i(n, [{
                key: "setPriority",
                value: function(e) {
                    var t = [null].concat(function(e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                            return n
                        }
                        return Array.from(e)
                    }(Object.values(s)));
                    if (!t.includes(e)) throw c.INVALID_VALUE("priority", t);
                    return this._priority !== e && (this._priority = e, this._setPriority(e)), this
                }
            }, {
                key: "_setEnabled",
                value: function(e) {
                    this._isEnabled !== e && (this._isEnabled = e, this.emit(this._isEnabled ? "enabled" : "disabled", this))
                }
            }, {
                key: "_setSwitchedOff",
                value: function(e) {
                    this._isSwitchedOff !== e && (this._isSwitchedOff = e, this.emit(e ? "switchedOff" : "switchedOn", this))
                }
            }, {
                key: "attach",
                value: function(e) {
                    var t = o(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "attach", this).call(this, e);
                    return !0 !== this.mediaStreamTrack.enabled && (this.mediaStreamTrack.enabled = !0), this._workaroundWebKitBug212780 && (this._workaroundWebKitBug212780Cleanup = this._workaroundWebKitBug212780Cleanup || function(e) {
                        var t = e._log,
                            n = e.kind;

                        function r() {
                            e._attachments.forEach(function(r) {
                                var i = e._elShims.get(r),
                                    o = r.paused && i && !i.pausedIntentionally();
                                o && (t.info("Playing inadvertently paused <" + n + "> element"), t.debug("Element:", r), t.debug("RemoteMediaTrack:", e), r.play().then(function() {
                                    t.info("Successfully played inadvertently paused <" + n + "> element"), t.debug("Element:", r), t.debug("RemoteMediaTrack:", e)
                                }).catch(function(i) {
                                    t.warn("Error while playing inadvertently paused <" + n + "> element:", {
                                        err: i,
                                        el: r,
                                        remoteMediaTrack: e
                                    })
                                }))
                            })
                        }
                        return l.onVisible(2, r),
                            function() {
                                l.offVisible(2, r)
                            }
                    }(this)), t
                }
            }, {
                key: "detach",
                value: function(e) {
                    var t = o(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "detach", this).call(this, e);
                    return 0 === this._attachments.size && (this.mediaStreamTrack.enabled = !1, this._workaroundWebKitBug212780Cleanup && (this._workaroundWebKitBug212780Cleanup(), this._workaroundWebKitBug212780Cleanup = null)), t
                }
            }]), n
        }()
    }
}, function(e, t, n) {
    "use strict";
    var r = n(152),
        i = n(153),
        o = n(154),
        a = n(155);
    e.exports = function e(t, n, c) {
        if (function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), "string" != typeof t) throw new Error("RTCPeerConnection id must be a string");
        Object.defineProperties(this, {
            peerConnectionId: {
                value: t,
                enumerable: !0
            },
            localAudioTrackStats: {
                value: n.localAudioTrackStats.map(function(e) {
                    return new r(e.trackId, e, c)
                }),
                enumerable: !0
            },
            localVideoTrackStats: {
                value: n.localVideoTrackStats.map(function(e) {
                    return new i(e.trackId, e, c)
                }),
                enumerable: !0
            },
            remoteAudioTrackStats: {
                value: n.remoteAudioTrackStats.map(function(e) {
                    return new o(e.trackId, e)
                }),
                enumerable: !0
            },
            remoteVideoTrackStats: {
                value: n.remoteVideoTrackStats.map(function(e) {
                    return new a(e.trackId, e)
                }),
                enumerable: !0
            }
        })
    }
}, function(e, t, n) {
    "use strict";
    var r = n(76),
        i = function(e) {
            function t(e, n, r) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var i = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                return Object.defineProperties(i, {
                    bytesSent: {
                        value: "number" == typeof n.bytesSent ? n.bytesSent : r ? 0 : null,
                        enumerable: !0
                    },
                    packetsSent: {
                        value: "number" == typeof n.packetsSent ? n.packetsSent : r ? 0 : null,
                        enumerable: !0
                    },
                    roundTripTime: {
                        value: "number" == typeof n.roundTripTime ? n.roundTripTime : r ? 0 : null,
                        enumerable: !0
                    }
                }), i
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, r), t
        }();
    e.exports = i
}, function(e, t, n) {
    "use strict";
    e.exports = function e(t, n) {
        if (function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), "string" != typeof t) throw new Error("Track id must be a string");
        Object.defineProperties(this, {
            trackId: {
                value: t,
                enumerable: !0
            },
            trackSid: {
                value: n.trackSid,
                enumerable: !0
            },
            timestamp: {
                value: n.timestamp,
                enumerable: !0
            },
            ssrc: {
                value: n.ssrc,
                enumerable: !0
            },
            packetsLost: {
                value: "number" == typeof n.packetsLost ? n.packetsLost : null,
                enumerable: !0
            },
            codec: {
                value: "string" == typeof n.codecName ? n.codecName : null,
                enumerable: !0
            }
        })
    }
}, function(e, t, n) {
    "use strict";
    var r = n(76),
        i = function(e) {
            function t(e, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var r = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                return Object.defineProperties(r, {
                    bytesReceived: {
                        value: "number" == typeof n.bytesReceived ? n.bytesReceived : null,
                        enumerable: !0
                    },
                    packetsReceived: {
                        value: "number" == typeof n.packetsReceived ? n.packetsReceived : null,
                        enumerable: !0
                    }
                }), r
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, r), t
        }();
    e.exports = i
}, function(e, t, n) {
    var r = n(79),
        i = n(162),
        o = n(81),
        a = n(163);
    e.exports.Backoff = r, e.exports.FunctionCall = a, e.exports.FibonacciStrategy = o, e.exports.ExponentialStrategy = i, e.exports.fibonacci = function(e) {
        return new r(new o(e))
    }, e.exports.exponential = function(e) {
        return new r(new i(e))
    }, e.exports.call = function(e, t, n) {
        var r = Array.prototype.slice.call(arguments);
        return e = r[0], t = r.slice(1, r.length - 1), n = r[r.length - 1], new a(e, t, n)
    }
}, function(e, t, n) {
    var r = n(3),
        i = n(39);

    function o(e) {
        r.EventEmitter.call(this), this.backoffStrategy_ = e, this.maxNumberOfRetry_ = -1, this.backoffNumber_ = 0, this.backoffDelay_ = 0, this.timeoutID_ = -1, this.handlers = {
            backoff: this.onBackoff_.bind(this)
        }
    }
    n(5).inherits(o, r.EventEmitter), o.prototype.failAfter = function(e) {
        i.checkArgument(e > 0, "Expected a maximum number of retry greater than 0 but got %s.", e), this.maxNumberOfRetry_ = e
    }, o.prototype.backoff = function(e) {
        i.checkState(-1 === this.timeoutID_, "Backoff in progress."), this.backoffNumber_ === this.maxNumberOfRetry_ ? (this.emit("fail", e), this.reset()) : (this.backoffDelay_ = this.backoffStrategy_.next(), this.timeoutID_ = setTimeout(this.handlers.backoff, this.backoffDelay_), this.emit("backoff", this.backoffNumber_, this.backoffDelay_, e))
    }, o.prototype.onBackoff_ = function() {
        this.timeoutID_ = -1, this.emit("ready", this.backoffNumber_, this.backoffDelay_), this.backoffNumber_++
    }, o.prototype.reset = function() {
        this.backoffNumber_ = 0, this.backoffStrategy_.reset(), clearTimeout(this.timeoutID_), this.timeoutID_ = -1
    }, e.exports = o
}, function(e, t, n) {
    n(3), n(5);

    function r(e) {
        return null != e
    }

    function i(e) {
        if (r((e = e || {}).initialDelay) && e.initialDelay < 1) throw new Error("The initial timeout must be greater than 0.");
        if (r(e.maxDelay) && e.maxDelay < 1) throw new Error("The maximal timeout must be greater than 0.");
        if (this.initialDelay_ = e.initialDelay || 100, this.maxDelay_ = e.maxDelay || 1e4, this.maxDelay_ <= this.initialDelay_) throw new Error("The maximal backoff delay must be greater than the initial backoff delay.");
        if (r(e.randomisationFactor) && (e.randomisationFactor < 0 || e.randomisationFactor > 1)) throw new Error("The randomisation factor must be between 0 and 1.");
        this.randomisationFactor_ = e.randomisationFactor || 0
    }
    i.prototype.getMaxDelay = function() {
        return this.maxDelay_
    }, i.prototype.getInitialDelay = function() {
        return this.initialDelay_
    }, i.prototype.next = function() {
        var e = this.next_(),
            t = 1 + Math.random() * this.randomisationFactor_;
        return Math.round(e * t)
    }, i.prototype.next_ = function() {
        throw new Error("BackoffStrategy.next_() unimplemented.")
    }, i.prototype.reset = function() {
        this.reset_()
    }, i.prototype.reset_ = function() {
        throw new Error("BackoffStrategy.reset_() unimplemented.")
    }, e.exports = i
}, function(e, t, n) {
    var r = n(5),
        i = n(80);

    function o(e) {
        i.call(this, e), this.backoffDelay_ = 0, this.nextBackoffDelay_ = this.getInitialDelay()
    }
    r.inherits(o, i), o.prototype.next_ = function() {
        var e = Math.min(this.nextBackoffDelay_, this.getMaxDelay());
        return this.nextBackoffDelay_ += this.backoffDelay_, this.backoffDelay_ = e, e
    }, o.prototype.reset_ = function() {
        this.nextBackoffDelay_ = this.getInitialDelay(), this.backoffDelay_ = 0
    }, e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(83),
        o = n(84),
        a = n(85),
        c = function(e) {
            function t(e, n, r, i, o, a, c) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var s = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r)),
                    u = o > 0 ? i / o : 0;
                return Object.defineProperties(s, {
                    deltaPacketsLost: {
                        enumerable: !0,
                        value: i
                    },
                    deltaPacketsReceived: {
                        enumerable: !0,
                        value: o
                    },
                    fractionLost: {
                        enumerable: !0,
                        value: a
                    },
                    jitter: {
                        enumerable: !0,
                        value: c
                    },
                    phonyFractionLost: {
                        enumerable: !0,
                        value: u
                    }
                }), s
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o), r(t, [{
                key: "summarize",
                value: function() {
                    return {
                        bitrate: this.bitrate,
                        fractionLost: "number" == typeof this.fractionLost ? this.fractionLost : this.phonyFractionLost,
                        jitter: this.jitter
                    }
                }
            }], [{
                key: "of",
                value: function(e, n, r) {
                    if (n.id !== r.id) throw new Error("RTCStats IDs must match");
                    var i = (r.timestamp - n.timestamp) / 1e3,
                        o = r.bytesReceived - n.bytesReceived,
                        a = i > 0 ? o / i * 8 : 0,
                        c = Math.max(r.packetsLost - n.packetsLost, 0),
                        s = r.packetsReceived - n.packetsReceived,
                        u = r.fractionLost,
                        l = r.jitter;
                    return new t(n.id, e, a, c, s, u, l)
                }
            }, {
                key: "summarize",
                value: function(e) {
                    var t = e.map(function(e) {
                        return e.summarize()
                    });
                    return {
                        bitrate: a(t.map(function(e) {
                            return e.bitrate
                        })),
                        fractionLost: i(t.map(function(e) {
                            return e.fractionLost
                        })),
                        jitter: i(t.map(function(e) {
                            return e.jitter
                        }))
                    }
                }
            }]), t
        }();
    e.exports = c
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return (e = e.filter(function(e) {
            return "number" == typeof e
        })).length < 1 ? void 0 : e.reduce(function(e, t) {
            return t + e
        }) / e.length
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function e(t, n, r) {
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), Object.defineProperties(this, {
            id: {
                enumerable: !0,
                value: t
            },
            trackId: {
                enumerable: !0,
                value: n
            },
            bitrate: {
                enumerable: !0,
                value: r
            }
        })
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return e.reduce(function(e, t) {
            return "number" == typeof t ? t + e : e
        }, 0)
    }
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(83),
        o = n(84),
        a = n(85),
        c = function(e) {
            function t(e, n, r, i) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var o = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r));
                return Object.defineProperties(o, {
                    rtt: {
                        enumerable: !0,
                        value: i
                    }
                }), o
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o), r(t, null, [{
                key: "of",
                value: function(e, n, r, i) {
                    if (n.id !== r.id) throw new Error("RTCStats IDs must match");
                    var o = (r.timestamp - n.timestamp) / 1e3,
                        a = r.bytesSent - n.bytesSent,
                        c = o > 0 ? a / o * 8 : 0,
                        s = i && "number" == typeof i.roundTripTime ? i.roundTripTime / 1e3 : void 0;
                    return new t(n.id, e, c, s)
                }
            }, {
                key: "summarize",
                value: function(e) {
                    return {
                        bitrate: a(e.map(function(e) {
                            return e.bitrate
                        })),
                        rtt: i(e.map(function(e) {
                            return e.rtt
                        }))
                    }
                }
            }]), t
        }();
    e.exports = c
}, function(e, t, n) {
    "use strict";
    e.exports = function e(t, n, r) {
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), Object.defineProperties(this, {
            id: {
                enumerable: !0,
                value: t,
                writable: !0
            },
            trackId: {
                enumerable: !0,
                value: n,
                writable: !0
            },
            lastStats: {
                enumerable: !0,
                value: r,
                writable: !0
            }
        })
    }
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(3).EventEmitter,
        o = function(e) {
            function t() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var e = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return Object.defineProperties(e, {
                    _isEnabled: {
                        value: null,
                        writable: !0
                    },
                    isEnabled: {
                        enumerable: !0,
                        get: function() {
                            return this._isEnabled
                        }
                    }
                }), e
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i), r(t, [{
                key: "disable",
                value: function() {
                    return this.enable(!1)
                }
            }, {
                key: "enable",
                value: function(e) {
                    return e = "boolean" != typeof e || e, this.isEnabled !== e && (this._isEnabled = e, this.emit("updated")), this
                }
            }]), t
        }();
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(88),
        o = n(19),
        a = n(27),
        c = n(12),
        s = c.MediaConnectionError,
        u = c.MediaDTLSTransportFailedError,
        l = c.SignalingConnectionDisconnectedError,
        f = {
            connected: ["reconnecting", "disconnected"],
            reconnecting: ["connected", "disconnected"],
            disconnected: []
        },
        p = function(e) {
            function t(e, n, r, o) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), o = Object.assign({
                    RecordingSignaling: i,
                    Timeout: a
                }, o);
                var c = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "connected", f)),
                    s = o.RecordingSignaling,
                    l = new o.Timeout(function() {
                        c._disconnect(c._reconnectingError)
                    }, o.sessionTimeout, !1);
                return Object.defineProperties(c, {
                    _mediaConnectionIsReconnecting: {
                        writable: !0,
                        value: !1
                    },
                    _options: {
                        value: o
                    },
                    _reconnectingError: {
                        value: null,
                        writable: !0
                    },
                    _sessionTimeout: {
                        value: l
                    },
                    dominantSpeakerSid: {
                        enumerable: !0,
                        value: null,
                        writable: !0
                    },
                    localParticipant: {
                        enumerable: !0,
                        value: e
                    },
                    name: {
                        enumerable: !0,
                        value: r
                    },
                    participants: {
                        enumerable: !0,
                        value: new Map
                    },
                    recording: {
                        enumerable: !0,
                        value: new s
                    },
                    sid: {
                        enumerable: !0,
                        value: n
                    }
                }), c.on("connectionStateChanged", function() {
                    "failed" !== c.connectionState || ["disconnected", "failed"].includes(c.iceConnectionState) || c._disconnect(new u)
                }), c.on("iceConnectionStateChanged", function() {
                    return d(c)
                }), c.on("signalingConnectionStateChanged", function() {
                    return d(c)
                }), setTimeout(function() {
                    return d(c)
                }), c
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o), r(t, [{
                key: "_disconnect",
                value: function(e) {
                    return "disconnected" !== this.state && (this.preempt("disconnected", null, [e]), !0)
                }
            }, {
                key: "connectParticipant",
                value: function(e) {
                    var t = this;
                    return "disconnected" !== e.state && (!this.participants.has(e.sid) && (this.participants.set(e.sid, e), e.on("stateChanged", function n(r) {
                        "disconnected" === r && (e.removeListener("stateChanged", n), t.participants.delete(e.sid), t.emit("participantDisconnected", e))
                    }), this.emit("participantConnected", e), !0))
                }
            }, {
                key: "disconnect",
                value: function() {
                    return this._disconnect()
                }
            }, {
                key: "setDominantSpeaker",
                value: function(e) {
                    this.dominantSpeakerSid = e, this.emit("dominantSpeakerChanged")
                }
            }]), t
        }();

    function d(e) {
        if ("disconnected" !== e.state && "disconnected" !== e.signalingConnectionState) {
            var t = void 0;
            "reconnecting" === e.signalingConnectionState ? t = e.signalingConnectionState : "failed" === e.iceConnectionState ? (e._mediaConnectionIsReconnecting = !0, t = "reconnecting") : "new" === e.iceConnectionState || "checking" === e.iceConnectionState ? t = e._mediaConnectionIsReconnecting ? "reconnecting" : "connected" : (e._mediaConnectionIsReconnecting = !1, e._reconnectingError = null, e._sessionTimeout.clear(), t = "connected"), t !== e.state && ("reconnecting" === t ? (e._reconnectingError = "reconnecting" === e.signalingConnectionState ? new l : new s, e._sessionTimeout.start(), e.preempt(t, null, [e._reconnectingError])) : e.preempt(t))
        } else e._sessionTimeout.clear()
    }
    e.exports = p
}, function(e, t, n) {
    "use strict";
    var r = n(193),
        i = n(197);
    e.exports = function e(t) {
        var n = t.send,
            o = t.recv,
            a = t.sendStats,
            c = void 0 === a ? null : a,
            s = t.recvStats,
            u = void 0 === s ? null : s;
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), Object.defineProperties(this, {
            send: {
                value: n,
                enumerable: !0
            },
            recv: {
                value: o,
                enumerable: !0
            },
            sendStats: {
                value: c ? new r(c) : null,
                enumerable: !0
            },
            recvStats: {
                value: u ? new i(u) : null,
                enumerable: !0
            }
        })
    }
}, function(e, t, n) {
    "use strict";
    var r = n(194),
        i = n(195),
        o = n(196);
    e.exports = function e(t) {
        var n = t.bandwidth,
            a = void 0 === n ? null : n,
            c = t.fractionLost,
            s = void 0 === c ? null : c,
            u = t.latency,
            l = void 0 === u ? null : u;
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), Object.defineProperties(this, {
            bandwidth: {
                value: a ? new r(a) : null,
                enumerable: !0
            },
            fractionLost: {
                value: s ? new i(s) : null,
                enumerable: !0
            },
            latency: {
                value: l ? new o(l) : null,
                enumerable: !0
            }
        })
    }
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(3).EventEmitter,
        o = function(e) {
            function t(e, n, r, i) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var o = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)),
                    a = null;
                return Object.defineProperties(o, {
                    _error: {
                        value: null,
                        writable: !0
                    },
                    _isEnabled: {
                        value: r,
                        writable: !0
                    },
                    _priority: {
                        value: i,
                        writable: !0
                    },
                    _trackTransceiver: {
                        value: null,
                        writable: !0
                    },
                    _sid: {
                        get: function() {
                            return a
                        },
                        set: function(e) {
                            null === a && (a = e)
                        }
                    },
                    kind: {
                        enumerable: !0,
                        value: n
                    },
                    name: {
                        enumerable: !0,
                        value: e
                    }
                }), o
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i), r(t, [{
                key: "disable",
                value: function() {
                    return this.enable(!1)
                }
            }, {
                key: "enable",
                value: function(e) {
                    return e = "boolean" != typeof e || e, this.isEnabled !== e && (this._isEnabled = e, this.emit("updated")), this
                }
            }, {
                key: "setTrackTransceiver",
                value: function(e) {
                    return e = e || null, this.trackTransceiver !== e && (this._trackTransceiver = e, this.emit("updated")), this
                }
            }, {
                key: "setSid",
                value: function(e) {
                    return null === this.sid && (this._sid = e, this.emit("updated")), this
                }
            }, {
                key: "error",
                get: function() {
                    return this._error
                }
            }, {
                key: "isEnabled",
                get: function() {
                    return this._isEnabled
                }
            }, {
                key: "priority",
                get: function() {
                    return this._priority
                }
            }, {
                key: "sid",
                get: function() {
                    return this._sid
                }
            }, {
                key: "trackTransceiver",
                get: function() {
                    return this._trackTransceiver
                }
            }]), t
        }();
    e.exports = o
}, function(e, t) {
    e.exports = WebSocket
}, function(e, t, n) {
    "use strict";
    var r = n(36),
        i = n(4),
        o = i.DEFAULT_LOG_LEVEL,
        a = i.DEFAULT_LOGGER_NAME;

    function c(e, t) {
        t = Object.assign({
            createLocalTracks: r,
            loggerName: a,
            logLevel: o
        }, t);
        var n = {};
        n.loggerName = t.loggerName, n.logLevel = t.logLevel, delete t.loggerName, delete t.logLevel;
        var i = t.createLocalTracks;
        return delete t.createLocalTracks, n[e] = !(Object.keys(t).length > 0) || t, i(n).then(function(e) {
            return e[0]
        })
    }
    e.exports = {
        audio: function(e) {
            return c("audio", e)
        },
        video: function(e) {
            return c("video", e)
        }
    }
}, , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var r = n(25),
        i = r.LocalAudioTrack,
        o = r.LocalDataTrack,
        a = r.LocalVideoTrack,
        c = n(69).version,
        s = {};
    Object.defineProperties(s, {
        connect: {
            enumerable: !0,
            value: n(136)
        },
        createLocalAudioTrack: {
            enumerable: !0,
            value: n(94).audio
        },
        createLocalTracks: {
            enumerable: !0,
            value: n(36)
        },
        createLocalVideoTrack: {
            enumerable: !0,
            value: n(94).video
        },
        isSupported: {
            enumerable: !0,
            value: n(214)()
        },
        LocalAudioTrack: {
            enumerable: !0,
            value: i
        },
        LocalDataTrack: {
            enumerable: !0,
            value: o
        },
        LocalVideoTrack: {
            enumerable: !0,
            value: a
        },
        Logger: {
            enumerable: !0,
            value: n(58)
        },
        version: {
            enumerable: !0,
            value: c
        }
    }), e.exports = s
}, function(e, t, n) {
    "use strict";
    var r = n(5).inherits,
        i = n(118);

    function o(e, t) {
        var n = new i(e, t);
        return Object.setPrototypeOf(n, o.prototype), n
    }
    r(o, i), e.exports = o
}, function(e, t) {
    e.exports = function(e) {
        return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
    }
}, function(e, t, n) {
    "use strict";
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = function e(t, n, r) {
            null === t && (t = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === i) {
                var o = Object.getPrototypeOf(t);
                return null === o ? void 0 : e(o, n, r)
            }
            if ("value" in i) return i.value;
            var a = i.get;
            return void 0 !== a ? a.call(r) : void 0
        };
    var o = n(51),
        a = n(59)(o),
        c = function(e) {
            function t(e, n) {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, a), r(t, [{
                key: "toString",
                value: function() {
                    return "[LocalAudioTrack #" + this._instanceId + ": " + this.id + "]"
                }
            }, {
                key: "attach",
                value: function(e) {
                    return (e = i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "attach", this).call(this, e)).muted = !0, e
                }
            }, {
                key: "_end",
                value: function() {
                    return i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_end", this).apply(this, arguments)
                }
            }, {
                key: "disable",
                value: function() {
                    return i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "disable", this).apply(this, arguments)
                }
            }, {
                key: "enable",
                value: function() {
                    return i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "enable", this).apply(this, arguments)
                }
            }, {
                key: "restart",
                value: function() {
                    return i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "restart", this).apply(this, arguments)
                }
            }, {
                key: "stop",
                value: function() {
                    return i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "stop", this).apply(this, arguments)
                }
            }]), t
        }();
    e.exports = c
}, function(e, t, n) {
    "use strict";
    var r = n(2).flatMap,
        i = n(2).guessBrowser,
        o = n(2).guessBrowserVersion,
        a = n(17).getSdpFormat,
        c = i(),
        s = o(),
        u = "chrome" === c,
        l = "firefox" === c,
        f = "safari" === c,
        p = u ? s.major : null,
        d = 32767;

    function h(e) {
        var t = Array.from(e.values()).find(function(e) {
            return "candidate-pair" === e.type && e.nominated
        });
        if (!t) return null;
        var n = e.get(t.localCandidateId),
            r = e.get(t.remoteCandidateId),
            i = [{
                key: "candidateType",
                type: "string"
            }, {
                key: "ip",
                type: "string"
            }, {
                key: "port",
                type: "number"
            }, {
                key: "priority",
                type: "number"
            }, {
                key: "protocol",
                type: "string"
            }, {
                key: "url",
                type: "string"
            }],
            o = i.concat([{
                key: "deleted",
                type: "boolean"
            }, {
                key: "relayProtocol",
                type: "string"
            }]),
            a = n ? o.reduce(function(e, t) {
                return e[t.key] = typeof n[t.key] === t.type ? n[t.key] : "deleted" !== t.key && null, e
            }, {}) : null,
            c = r ? i.reduce(function(e, t) {
                return e[t.key] = typeof r[t.key] === t.type ? r[t.key] : null, e
            }, {}) : null;
        return [{
            key: "availableIncomingBitrate",
            type: "number"
        }, {
            key: "availableOutgoingBitrate",
            type: "number"
        }, {
            key: "bytesReceived",
            type: "number"
        }, {
            key: "bytesSent",
            type: "number"
        }, {
            key: "consentRequestsSent",
            type: "number"
        }, {
            key: "currentRoundTripTime",
            type: "number"
        }, {
            key: "lastPacketReceivedTimestamp",
            type: "number"
        }, {
            key: "lastPacketSentTimestamp",
            type: "number"
        }, {
            key: "nominated",
            type: "boolean"
        }, {
            key: "priority",
            type: "number"
        }, {
            key: "readable",
            type: "boolean"
        }, {
            key: "requestsReceived",
            type: "number"
        }, {
            key: "requestsSent",
            type: "number"
        }, {
            key: "responsesReceived",
            type: "number"
        }, {
            key: "responsesSent",
            type: "number"
        }, {
            key: "retransmissionsReceived",
            type: "number"
        }, {
            key: "retransmissionsSent",
            type: "number"
        }, {
            key: "state",
            type: "string",
            fixup: function(e) {
                return "inprogress" === e ? "in-progress" : e
            }
        }, {
            key: "totalRoundTripTime",
            type: "number"
        }, {
            key: "transportId",
            type: "string"
        }, {
            key: "writable",
            type: "boolean"
        }].reduce(function(e, n) {
            return e[n.key] = typeof t[n.key] === n.type ? n.fixup ? n.fixup(t[n.key]) : t[n.key] : null, e
        }, {
            localCandidate: a,
            remoteCandidate: c
        })
    }

    function v(e) {
        var t = Array.from(e.values()).find(function(e) {
            return "candidate-pair" === e.type && e.nominated
        });
        if (!t) return null;
        var n = e.get(t.localCandidateId),
            r = e.get(t.remoteCandidateId),
            i = [{
                key: "candidateType",
                type: "string"
            }, {
                key: "ip",
                ffKeys: ["address", "ipAddress"],
                type: "string"
            }, {
                key: "port",
                ffKeys: ["portNumber"],
                type: "number"
            }, {
                key: "priority",
                type: "number"
            }, {
                key: "protocol",
                ffKeys: ["transport"],
                type: "string"
            }, {
                key: "url",
                type: "string"
            }],
            o = i.concat([{
                key: "deleted",
                type: "boolean"
            }, {
                key: "relayProtocol",
                type: "string"
            }]),
            a = {
                host: "host",
                peerreflexive: "prflx",
                relayed: "relay",
                serverreflexive: "srflx"
            },
            c = n ? o.reduce(function(e, t) {
                var r = t.ffKeys && t.ffKeys.find(function(e) {
                    return e in n
                }) || t.key;
                return e[t.key] = typeof n[r] === t.type ? "candidateType" === r && a[n[r]] || n[r] : "deleted" !== r && null, e
            }, {}) : null,
            s = r ? i.reduce(function(e, t) {
                var n = t.ffKeys && t.ffKeys.find(function(e) {
                    return e in r
                }) || t.key;
                return e[t.key] = typeof r[n] === t.type ? "candidateType" === n && a[r[n]] || r[n] : null, e
            }, {}) : null;
        return [{
            key: "availableIncomingBitrate",
            type: "number"
        }, {
            key: "availableOutgoingBitrate",
            type: "number"
        }, {
            key: "bytesReceived",
            type: "number"
        }, {
            key: "bytesSent",
            type: "number"
        }, {
            key: "consentRequestsSent",
            type: "number"
        }, {
            key: "currentRoundTripTime",
            type: "number"
        }, {
            key: "lastPacketReceivedTimestamp",
            type: "number"
        }, {
            key: "lastPacketSentTimestamp",
            type: "number"
        }, {
            key: "nominated",
            type: "boolean"
        }, {
            key: "priority",
            type: "number"
        }, {
            key: "readable",
            type: "boolean"
        }, {
            key: "requestsReceived",
            type: "number"
        }, {
            key: "requestsSent",
            type: "number"
        }, {
            key: "responsesReceived",
            type: "number"
        }, {
            key: "responsesSent",
            type: "number"
        }, {
            key: "retransmissionsReceived",
            type: "number"
        }, {
            key: "retransmissionsSent",
            type: "number"
        }, {
            key: "state",
            type: "string"
        }, {
            key: "totalRoundTripTime",
            type: "number"
        }, {
            key: "transportId",
            type: "string"
        }, {
            key: "writable",
            type: "boolean"
        }].reduce(function(e, n) {
            return e[n.key] = typeof t[n.key] === n.type ? t[n.key] : null, e
        }, {
            localCandidate: c,
            remoteCandidate: s
        })
    }

    function y(e, t, n) {
        var i = "local" === n ? "getSenders" : "getReceivers";
        return e[i] ? e[i]().map(function(e) {
            return e.track
        }).filter(function(e) {
            return e && e.kind === t
        }) : r(e["local" === n ? "getLocalStreams" : "getRemoteStreams"](), function(e) {
            return e["audio" === t ? "getAudioTracks" : "getVideoTracks"]()
        })
    }

    function b(e, t) {
        return new Promise(function(n, r) {
            p && p < 67 ? e.getStats(function(e) {
                n([m(e, t)])
            }, null, r) : e.getStats(t).then(function(e) {
                n(function(e) {
                    var t = null,
                        n = [],
                        r = null,
                        i = null,
                        o = null,
                        a = null;
                    e.forEach(function(e) {
                        switch (e.type) {
                            case "inbound-rtp":
                                t = e;
                                break;
                            case "outbound-rtp":
                                n.push(e);
                                break;
                            case "track":
                                o = e;
                                break;
                            case "codec":
                                a = e;
                                break;
                            case "remote-inbound-rtp":
                                r = e;
                                break;
                            case "remote-outbound-rtp":
                                i = e
                        }
                    });
                    var c = o && o.remoteSource,
                        s = [],
                        u = c ? i : r;
                    return (c ? [t] : n).forEach(function(e) {
                        var t = {},
                            n = [e, o, a, u && u.ssrc === e.ssrc ? u : null];

                        function r(e) {
                            var t = n.find(function(t) {
                                return t && void 0 !== t[e]
                            }) || null;
                            return t ? t[e] : null
                        }
                        var i = r("ssrc");
                        "number" == typeof i && (t.ssrc = String(i));
                        var l = r("timestamp");
                        t.timestamp = Math.round(l);
                        var f = r("mimeType");
                        "string" == typeof f && (f = f.split("/"), t.codecName = f[f.length - 1]);
                        var p = r("roundTripTime");
                        "number" == typeof p && (t.roundTripTime = Math.round(1e3 * p));
                        var h = r("jitter");
                        "number" == typeof h && (t.jitter = Math.round(1e3 * h));
                        var v = r("frameWidth");
                        "number" == typeof v && (c ? t.frameWidthReceived = v : t.frameWidthSent = v);
                        var y = r("frameHeight");
                        "number" == typeof y && (c ? t.frameHeightReceived = y : t.frameHeightSent = y);
                        var b = r("framesPerSecond");
                        "number" == typeof b && (t.frameRateSent = b);
                        var m = r("bytesReceived");
                        "number" == typeof m && (t.bytesReceived = m);
                        var _ = r("bytesSent");
                        "number" == typeof _ && (t.bytesSent = _);
                        var g = r("packetsLost");
                        "number" == typeof g && (t.packetsLost = g);
                        var k = r("packetsReceived");
                        "number" == typeof k && (t.packetsReceived = k);
                        var w = r("packetsSent");
                        "number" == typeof w && (t.packetsSent = w);
                        var S = r("audioLevel");
                        "number" == typeof S && (S = Math.round(S * d), c ? t.audioOutputLevel = S : t.audioInputLevel = S), s.push(t)
                    }), s
                }(e))
            }, r)
        })
    }

    function m(e, t) {
        var n = e.result().find(function(e) {
                return "ssrc" === e.type && e.stat("googTrackId") === t.id
            }),
            r = {};
        return n && (r.timestamp = Math.round(Number(n.timestamp)), r = n.names().reduce(function(e, t) {
            switch (t) {
                case "googCodecName":
                    e.codecName = n.stat(t);
                    break;
                case "googRtt":
                    e.roundTripTime = Number(n.stat(t));
                    break;
                case "googJitterReceived":
                    e.jitter = Number(n.stat(t));
                    break;
                case "googFrameWidthInput":
                    e.frameWidthInput = Number(n.stat(t));
                    break;
                case "googFrameHeightInput":
                    e.frameHeightInput = Number(n.stat(t));
                    break;
                case "googFrameWidthSent":
                    e.frameWidthSent = Number(n.stat(t));
                    break;
                case "googFrameHeightSent":
                    e.frameHeightSent = Number(n.stat(t));
                    break;
                case "googFrameWidthReceived":
                    e.frameWidthReceived = Number(n.stat(t));
                    break;
                case "googFrameHeightReceived":
                    e.frameHeightReceived = Number(n.stat(t));
                    break;
                case "googFrameRateInput":
                    e.frameRateInput = Number(n.stat(t));
                    break;
                case "googFrameRateSent":
                    e.frameRateSent = Number(n.stat(t));
                    break;
                case "googFrameRateReceived":
                    e.frameRateReceived = Number(n.stat(t));
                    break;
                case "ssrc":
                    e[t] = n.stat(t);
                    break;
                case "bytesReceived":
                case "bytesSent":
                case "packetsLost":
                case "packetsReceived":
                case "packetsSent":
                case "audioInputLevel":
                case "audioOutputLevel":
                    e[t] = Number(n.stat(t))
            }
            return e
        }, r)), r
    }

    function _(e, t) {
        e = e || new Map;
        var n = null,
            r = null;
        e.forEach(function(t) {
            if (!t.isRemote) switch (t.type) {
                case "inbound-rtp":
                    n = t, r = e.get(t.remoteId);
                    break;
                case "outbound-rtp":
                    r = t, n = e.get(t.remoteId)
            }
        });
        var i = t ? n : r,
            o = t ? r : n;

        function a(e) {
            return i && void 0 !== i[e] ? i[e] : o && void 0 !== o[e] ? o[e] : null
        }
        var c = {},
            s = a("timestamp");
        c.timestamp = Math.round(s);
        var u = a("ssrc");
        "number" == typeof u && (c.ssrc = String(u));
        var l = a("bytesSent");
        "number" == typeof l && (c.bytesSent = l);
        var f = a("packetsLost");
        "number" == typeof f && (c.packetsLost = f);
        var p = a("packetsSent");
        "number" == typeof p && (c.packetsSent = p);
        var d = a("roundTripTime");
        "number" == typeof d && (c.roundTripTime = Math.round(1e3 * d));
        var h = a("jitter");
        "number" == typeof h && (c.jitter = Math.round(1e3 * h));
        var v = a("framerateMean");
        "number" == typeof v && (c.frameRateSent = Math.round(v));
        var y = a("bytesReceived");
        "number" == typeof y && (c.bytesReceived = y);
        var b = a("packetsReceived");
        "number" == typeof b && (c.packetsReceived = b);
        var m = a("framerateMean");
        return "number" == typeof m && (c.frameRateReceived = Math.round(m)), c
    }
    e.exports = function(e, t) {
        return e && "function" == typeof e.getStats ? function(e, t) {
            var n = y(e, "audio", "local"),
                i = y(e, "video", "local"),
                o = y(e, "audio"),
                c = y(e, "video"),
                s = {
                    activeIceCandidatePair: null,
                    localAudioTrackStats: [],
                    localVideoTrackStats: [],
                    remoteAudioTrackStats: [],
                    remoteVideoTrackStats: []
                },
                p = r([
                    [n, "localAudioTrackStats", !1],
                    [i, "localVideoTrackStats", !1],
                    [o, "remoteAudioTrackStats", !0],
                    [c, "remoteVideoTrackStats", !0]
                ], function(n) {
                    var r = n[0],
                        i = n[1],
                        o = n[2];
                    return r.map(function(n) {
                        return function(e, t, n) {
                            return void 0 !== (n = n || {}).testForChrome || u ? b(e, t) : void 0 !== n.testForFirefox || l ? function(e, t, n) {
                                return new Promise(function(r, i) {
                                    e.getStats(t).then(function(e) {
                                        r([_(e, n)])
                                    }, i)
                                })
                            }(e, t, n.isRemote) : void 0 !== n.testForSafari || f ? void 0 !== n.testForSafari || "unified" === a() ? b(e, t) : Promise.reject(new Error(["getStats() is not supported on this version of Safari", "due to this bug: https://bugs.webkit.org/show_bug.cgi?id=192601"].join(" "))) : Promise.reject(new Error("RTCPeerConnection#getStats() not supported"))
                        }(e, n, Object.assign({
                            isRemote: o
                        }, t)).then(function(e) {
                            e.forEach(function(e) {
                                e.trackId = n.id, s[i].push(e)
                            })
                        })
                    })
                });
            return Promise.all(p).then(function() {
                return function(e, t) {
                    return void 0 !== (t = t || {}).testForChrome || u || void 0 !== t.testForSafari || f ? e.getStats().then(h) : void 0 !== t.testForFirefox || l ? e.getStats().then(v) : Promise.reject(new Error("RTCPeerConnection#getStats() not supported"))
                }(e, t)
            }).then(function(e) {
                return s.activeIceCandidatePair = e, s
            })
        }(e, t) : Promise.reject(new Error("Given PeerConnection does not support getStats"))
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return "object" == typeof navigator && "object" == typeof navigator.mediaDevices && "function" == typeof navigator.mediaDevices.getUserMedia ? (e = e || {
            audio: !0,
            video: !0
        }, navigator.mediaDevices.getUserMedia(e)) : Promise.reject(new Error("getUserMedia is not supported"))
    }
}, function(e, t, n) {
    "use strict";
    "function" == typeof MediaStreamTrack ? e.exports = MediaStreamTrack : e.exports = function() {
        throw new Error("MediaStreamTrack is not supported")
    }
}, function(e, t, n) {
    "use strict";
    "function" == typeof RTCIceCandidate ? e.exports = RTCIceCandidate : e.exports = function() {
        throw new Error("RTCIceCandidate is not supported")
    }
}, function(e, t, n) {
    "use strict";
    if ("function" == typeof RTCPeerConnection) switch ((0, n(2).guessBrowser)()) {
        case "chrome":
            e.exports = n(124);
            break;
        case "firefox":
            e.exports = n(126);
            break;
        case "safari":
            e.exports = n(127);
            break;
        default:
            e.exports = RTCPeerConnection
    } else e.exports = function() {
        throw new Error("RTCPeerConnection is not supported")
    }
}, function(e, t, n) {
    "use strict";
    var r = n(54),
        i = n(32),
        o = n(5).inherits,
        a = n(55),
        c = n(53),
        s = n(125),
        u = n(17),
        l = n(2);

    function f(e, t) {
        if (!(this instanceof f)) return new f(e, t);
        i.call(this), e = e || {};
        var n = Object.assign(e.iceTransportPolicy ? {
            iceTransports: e.iceTransportPolicy
        } : {}, e);
        l.interceptEvent(this, "datachannel"), l.interceptEvent(this, "signalingstatechange");
        var r = u.getSdpFormat(n.sdpSemantics),
            o = new RTCPeerConnection(n, t);
        Object.defineProperties(this, {
            _appliedTracksToSSRCs: {
                value: new Map,
                writable: !0
            },
            _localStream: {
                value: new c
            },
            _peerConnection: {
                value: o
            },
            _pendingLocalOffer: {
                value: null,
                writable: !0
            },
            _pendingRemoteOffer: {
                value: null,
                writable: !0
            },
            _rolledBackTracksToSSRCs: {
                value: new Map,
                writable: !0
            },
            _sdpFormat: {
                value: r
            },
            _senders: {
                value: new Map
            },
            _signalingStateLatch: {
                value: new a
            },
            _tracksToSSRCs: {
                value: new Map,
                writable: !0
            },
            localDescription: {
                enumerable: !0,
                get: function() {
                    return this._pendingLocalOffer ? this._pendingLocalOffer : o.localDescription
                }
            },
            remoteDescription: {
                enumerable: !0,
                get: function() {
                    return this._pendingRemoteOffer ? this._pendingRemoteOffer : o.remoteDescription
                }
            },
            signalingState: {
                enumerable: !0,
                get: function() {
                    return this._pendingLocalOffer ? "have-local-offer" : this._pendingRemoteOffer ? "have-remote-offer" : o.signalingState
                }
            }
        });
        var s = this;
        o.addEventListener("datachannel", function(e) {
            v(e.channel), s.dispatchEvent(e)
        }), o.addEventListener("signalingstatechange", function() {
            "stable" === o.signalingState && (s._appliedTracksToSSRCs = new Map(s._tracksToSSRCs)), s._pendingLocalOffer || s._pendingRemoteOffer || s.dispatchEvent.apply(s, arguments)
        }), o.ontrack = function() {}, "function" != typeof RTCPeerConnection.prototype.addTrack && o.addStream(this._localStream), l.proxyProperties(RTCPeerConnection.prototype, this, o)
    }

    function p(e, t, n) {
        var r, i, o = t ? e._pendingLocalOffer : e._pendingRemoteOffer,
            a = t ? e._pendingRemoteOffer : e._pendingLocalOffer,
            c = t ? "have-local-offer" : "have-remote-offer",
            s = t ? "setLocalDescription" : "setRemoteDescription";
        if (!t && a && "answer" === n.type) r = function(e, t) {
            var n = e._pendingLocalOffer;
            return e._peerConnection.setLocalDescription(n).then(function() {
                return e._pendingLocalOffer = null, e.setRemoteDescription(t)
            }).then(function() {
                e._signalingStateLatch.lower()
            })
        }(e, n);
        else if ("offer" === n.type) {
            if (e.signalingState !== c && "stable" !== e.signalingState) return Promise.reject(new Error("Cannot set " + (t ? "local" : "remote") + " offer in state " + e.signalingState));
            o || "low" !== e._signalingStateLatch.state || e._signalingStateLatch.raise();
            var u = e.signalingState;
            i = d(n), t ? e._pendingLocalOffer = i : e._pendingRemoteOffer = i, r = Promise.resolve(), e.signalingState !== u && r.then(function() {
                e.dispatchEvent(new Event("signalingstatechange"))
            })
        } else "rollback" === n.type && (e.signalingState !== c ? r = Promise.reject(new Error("Cannot rollback " + (t ? "local" : "remote") + " description in " + e.signalingState)) : (t ? e._pendingLocalOffer = null : e._pendingRemoteOffer = null, e._rolledBackTracksToSSRCs = new Map(e._tracksToSSRCs), e._tracksToSSRCs = new Map(e._appliedTracksToSSRCs), (r = Promise.resolve()).then(function() {
            e.dispatchEvent(new Event("signalingstatechange"))
        })));
        return r || e._peerConnection[s](d(n))
    }

    function d(e) {
        return e instanceof r && e._description ? e._description : new RTCSessionDescription(e)
    }

    function h() {
        return "maxRetransmitTime" in RTCDataChannel.prototype && !("maxPacketLifeTime" in RTCDataChannel.prototype)
    }

    function v(e) {
        return Object.defineProperty(e, "maxRetransmits", {
            value: 65535 === e.maxRetransmits ? null : e.maxRetransmits
        }), h() && Object.defineProperty(e, "maxPacketLifeTime", {
            value: 65535 === e.maxRetransmitTime ? null : e.maxRetransmitTime
        }), e
    }

    function y(e, t, n) {
        return "unified" === e ? u.updateUnifiedPlanTrackIdsToSSRCs(t, n) : u.updatePlanBTrackIdsToSSRCs(t, n)
    }
    o(f, i), "function" != typeof RTCPeerConnection.prototype.addTrack ? (f.prototype.addTrack = function() {
        var e = [].slice.call(arguments)[0];
        if ("closed" === this._peerConnection.signalingState) throw new Error("Cannot add MediaStreamTrack [" + e.id + ", " + e.kind + "]: RTCPeerConnection is closed");
        var t = this._senders.get(e);
        if (t && t.track) throw new Error("Cannot add MediaStreamTrack [" + e.id + ", " + e.kind + "]: RTCPeerConnection already has it");
        return this._peerConnection.removeStream(this._localStream), this._localStream.addTrack(e), this._peerConnection.addStream(this._localStream), t = new s(e), this._senders.set(e, t), t
    }, f.prototype.removeTrack = function(e) {
        if ("closed" === this._peerConnection.signalingState) throw new Error("Cannot remove MediaStreamTrack: RTCPeerConnection is closed");
        var t = e.track;
        t && (e = this._senders.get(t)) && e.track && (e.track = null, this._peerConnection.removeStream(this._localStream), this._localStream.removeTrack(t), this._peerConnection.addStream(this._localStream))
    }, f.prototype.getSenders = function() {
        return Array.from(this._senders.values())
    }) : f.prototype.removeTrack = function(e) {
        if ("closed" === this._peerConnection.signalingState) throw new Error("Cannot remove MediaStreamTrack: RTCPeerConnection is closed");
        try {
            this._peerConnection.removeTrack(e)
        } catch (e) {}
    }, f.prototype.addIceCandidate = function(e) {
        var t, n = [].slice.call(arguments),
            r = this;
        return t = "have-remote-offer" === this.signalingState ? this._signalingStateLatch.when("low").then(function() {
            return r._peerConnection.addIceCandidate(e)
        }) : this._peerConnection.addIceCandidate(e), n.length > 1 ? l.legacyPromise(t, n[1], n[2]) : t
    }, f.prototype.close = function() {
        "closed" !== this.signalingState && (this._pendingLocalOffer = null, this._pendingRemoteOffer = null, this._peerConnection.close())
    }, f.prototype.createAnswer = function() {
        var e, t = [].slice.call(arguments),
            n = this;
        return e = this._pendingRemoteOffer ? this._peerConnection.setRemoteDescription(this._pendingRemoteOffer).then(function() {
            return n._signalingStateLatch.lower(), n._peerConnection.createAnswer()
        }).then(function(e) {
            return n._pendingRemoteOffer = null, n._rolledBackTracksToSSRCs.clear(), new r({
                type: "answer",
                sdp: y(n._sdpFormat, n._tracksToSSRCs, e.sdp)
            })
        }, function(e) {
            throw n._pendingRemoteOffer = null, e
        }) : this._peerConnection.createAnswer().then(function(e) {
            return n._rolledBackTracksToSSRCs.clear(), new r({
                type: "answer",
                sdp: y(n._sdpFormat, n._tracksToSSRCs, e.sdp)
            })
        }), t.length > 1 ? l.legacyPromise(e, t[0], t[1]) : e
    }, f.prototype.createOffer = function() {
        var e = [].slice.call(arguments),
            t = (e.length > 1 ? e[2] : e[0]) || {},
            n = this,
            i = this._peerConnection.createOffer(t).then(function(e) {
                return n._rolledBackTracksToSSRCs.clear(), new r({
                    type: e.type,
                    sdp: y(n._sdpFormat, n._tracksToSSRCs, e.sdp)
                })
            });
        return e.length > 1 ? l.legacyPromise(i, e[0], e[1]) : i
    }, f.prototype.createDataChannel = function(e, t) {
        t = function(e) {
            e = Object.assign({}, e), h() && "maxPacketLifeTime" in e && (e.maxRetransmitTime = e.maxPacketLifeTime);
            return e
        }(t);
        var n = this._peerConnection.createDataChannel(e, t);
        return v(n), n
    }, f.prototype.setLocalDescription = function() {
        var e = [].slice.call(arguments),
            t = e[0];
        this._rolledBackTracksToSSRCs.size > 0 && (this._tracksToSSRCs = new Map(this._rolledBackTracksToSSRCs), this._rolledBackTracksToSSRCs.clear());
        var n = p(this, !0, t);
        return e.length > 1 ? l.legacyPromise(n, e[1], e[2]) : n
    }, f.prototype.setRemoteDescription = function() {
        var e = [].slice.call(arguments),
            t = e[0];
        this._rolledBackTracksToSSRCs.clear();
        var n = p(this, !1, t);
        return e.length > 1 ? l.legacyPromise(n, e[1], e[2]) : n
    }, l.delegateMethods(RTCPeerConnection.prototype, f.prototype, "_peerConnection"), e.exports = f
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        Object.defineProperties(this, {
            track: {
                enumerable: !0,
                value: e,
                writable: !0
            }
        })
    }
}, function(e, t, n) {
    "use strict";
    var r = n(32),
        i = n(56),
        o = n(5).inherits,
        a = n(17).updateUnifiedPlanTrackIdsToSSRCs,
        c = n(2),
        s = "object" == typeof navigator && navigator.userAgent && (navigator.userAgent.match(/Firefox\/61/) || navigator.userAgent.match(/Firefox\/62/));

    function u(e) {
        if (!(this instanceof u)) return new u(e);
        r.call(this), c.interceptEvent(this, "signalingstatechange");
        var t = new RTCPeerConnection(e);
        Object.defineProperties(this, {
            _initiallyNegotiatedDtlsRole: {
                value: null,
                writable: !0
            },
            _isClosed: {
                value: !1,
                writable: !0
            },
            _peerConnection: {
                value: t
            },
            _rollingBack: {
                value: !1,
                writable: !0
            },
            _tracksToSSRCs: {
                value: new Map
            },
            iceGatheringState: {
                enumerable: !0,
                get: function() {
                    return this._isClosed ? "complete" : this._peerConnection.iceGatheringState
                }
            },
            localDescription: {
                enumerable: !0,
                get: function() {
                    return p(this._peerConnection.localDescription, this._initiallyNegotiatedDtlsRole)
                }
            },
            signalingState: {
                enumerable: !0,
                get: function() {
                    return this._isClosed ? "closed" : this._peerConnection.signalingState
                }
            }
        });
        var n, i = this;
        t.addEventListener("signalingstatechange", function() {
            if (!i._rollingBack && i.signalingState !== n) {
                n = i.signalingState;
                var e = i.dispatchEvent.apply.bind(i.dispatchEvent, i, arguments);
                i._isClosed ? setTimeout(e) : e()
            }
        }), c.proxyProperties(RTCPeerConnection.prototype, this, t)
    }

    function l(e, t, n) {
        var r = t ? "setLocalDescription" : "setRemoteDescription";
        return e._rollingBack = !0, e._peerConnection[r](new i({
            type: "rollback"
        })).then(n).then(function(t) {
            return e._rollingBack = !1, t
        }, function(t) {
            throw e._rollingBack = !1, t
        })
    }

    function f(e, t, n) {
        if (!e._initiallyNegotiatedDtlsRole && "offer" !== t.type) {
            var r = t.sdp.match(/a=setup:([a-z]+)/);
            if (r) {
                var i = r[1];
                e._initiallyNegotiatedDtlsRole = n ? {
                    active: "passive",
                    passive: "active"
                } [i] : i
            }
        }
    }

    function p(e, t) {
        return e && "answer" === e.type && t ? new i({
            type: e.type,
            sdp: e.sdp.replace(/a=setup:[a-z]+/g, "a=setup:" + t)
        }) : e
    }
    o(u, r), Object.defineProperty(u.prototype, "peerIdentity", {
        enumerable: !0,
        value: Promise.resolve({
            idp: "",
            name: ""
        })
    }), s && (u.prototype.addTrack = function() {
        var e = arguments[0],
            t = this._peerConnection.addTrack.apply(this._peerConnection, arguments);
        return t.replaceTrack(e), t
    }), u.prototype.createAnswer = function() {
        var e, t = [].slice.call(arguments),
            n = this;
        return e = this._peerConnection.createAnswer().then(function(e) {
            return f(n, e), p(e, n._initiallyNegotiatedDtlsRole)
        }), "function" == typeof t[0] ? c.legacyPromise(e, t[0], t[1]) : e
    }, u.prototype.createOffer = function() {
        var e, t = [].slice.call(arguments),
            n = (t.length > 1 ? t[2] : t[0]) || {},
            r = this;
        "have-local-offer" === this.signalingState || "have-remote-offer" === this.signalingState ? e = l(this, "have-local-offer" === this.signalingState, function() {
            return r.createOffer(n)
        }) : e = r._peerConnection.createOffer(n);
        return e = e.then(function(e) {
            return new i({
                type: e.type,
                sdp: a(r._tracksToSSRCs, e.sdp)
            })
        }), t.length > 1 ? c.legacyPromise(e, t[0], t[1]) : e
    }, u.prototype.setLocalDescription = function() {
        var e, t = [].slice.call(arguments),
            n = t[0];
        return n && "answer" === n.type && "have-local-offer" === this.signalingState && (e = Promise.reject(new Error("Cannot set local answer in state have-local-offer"))), e ? t.length > 1 ? c.legacyPromise(e, t[1], t[2]) : e : this._peerConnection.setLocalDescription.apply(this._peerConnection, t)
    }, u.prototype.setRemoteDescription = function() {
        var e, t = [].slice.call(arguments),
            n = t[0],
            r = this;
        return n && "have-remote-offer" === this.signalingState && ("answer" === n.type ? e = Promise.reject(new Error("Cannot set remote answer in state have-remote-offer")) : "offer" === n.type && (e = l(this, !1, function() {
            return r._peerConnection.setRemoteDescription(n)
        }))), e || (e = this._peerConnection.setRemoteDescription(n)), e = e.then(function() {
            f(r, n, !0)
        }), t.length > 1 ? c.legacyPromise(e, t[1], t[2]) : e
    }, u.prototype.close = function() {
        "closed" !== this.signalingState && (this._isClosed = !0, this._peerConnection.close())
    }, c.delegateMethods(RTCPeerConnection.prototype, u.prototype, "_peerConnection"), e.exports = u
}, function(e, t, n) {
    "use strict";
    var r = n(32),
        i = n(5).inherits,
        o = n(55),
        a = n(17),
        c = n(2),
        s = "unified" === a.getSdpFormat(),
        u = s ? a.updateUnifiedPlanTrackIdsToSSRCs : a.updatePlanBTrackIdsToSSRCs;

    function l(e) {
        if (!(this instanceof l)) return new l(e);
        r.call(this), c.interceptEvent(this, "datachannel"), c.interceptEvent(this, "iceconnectionstatechange"), c.interceptEvent(this, "signalingstatechange"), c.interceptEvent(this, "track");
        var t = new RTCPeerConnection(e);
        Object.defineProperties(this, {
            _appliedTracksToSSRCs: {
                value: new Map,
                writable: !0
            },
            _audioTransceiver: {
                value: null,
                writable: !0
            },
            _isClosed: {
                value: !1,
                writable: !0
            },
            _peerConnection: {
                value: t
            },
            _pendingLocalOffer: {
                value: null,
                writable: !0
            },
            _pendingRemoteOffer: {
                value: null,
                writable: !0
            },
            _rolledBackTracksToSSRCs: {
                value: new Map,
                writable: !0
            },
            _signalingStateLatch: {
                value: new o
            },
            _tracksToSSRCs: {
                value: new Map,
                writable: !0
            },
            _videoTransceiver: {
                value: null,
                writable: !0
            },
            localDescription: {
                enumerable: !0,
                get: function() {
                    return this._pendingLocalOffer || this._peerConnection.localDescription
                }
            },
            iceConnectionState: {
                enumerable: !0,
                get: function() {
                    return this._isClosed ? "closed" : this._peerConnection.iceConnectionState
                }
            },
            iceGatheringState: {
                enumerable: !0,
                get: function() {
                    return this._isClosed ? "complete" : this._peerConnection.iceGatheringState
                }
            },
            remoteDescription: {
                enumerable: !0,
                get: function() {
                    return this._pendingRemoteOffer || this._peerConnection.remoteDescription
                }
            },
            signalingState: {
                enumerable: !0,
                get: function() {
                    return this._isClosed ? "closed" : this._pendingLocalOffer ? "have-local-offer" : this._pendingRemoteOffer ? "have-remote-offer" : this._peerConnection.signalingState
                }
            }
        });
        var n = this;
        t.addEventListener("datachannel", function(e) {
            d(e.channel), n.dispatchEvent(e)
        }), t.addEventListener("iceconnectionstatechange", function() {
            n._isClosed || n.dispatchEvent.apply(n, arguments)
        }), t.addEventListener("signalingstatechange", function() {
            n._isClosed || ("stable" === t.signalingState && (n._appliedTracksToSSRCs = new Map(n._tracksToSSRCs)), n._pendingLocalOffer || n._pendingRemoteOffer || n.dispatchEvent.apply(n, arguments))
        }), t.addEventListener("track", function(e) {
            n._pendingRemoteOffer = null, n.dispatchEvent(e)
        }), c.proxyProperties(RTCPeerConnection.prototype, this, t)
    }

    function f(e, t, n) {
        var r, i = t ? e._pendingLocalOffer : e._pendingRemoteOffer,
            o = t ? e._pendingRemoteOffer : e._pendingLocalOffer,
            a = t ? "have-local-offer" : "have-remote-offer",
            c = t ? "setLocalDescription" : "setRemoteDescription";
        if (!t && o && "answer" === n.type) return function(e, t) {
            var n = e._pendingLocalOffer;
            return e._peerConnection.setLocalDescription(n).then(function() {
                return e._pendingLocalOffer = null, e.setRemoteDescription(t)
            }).then(function() {
                e._signalingStateLatch.lower()
            })
        }(e, n);
        if ("offer" === n.type) {
            if (e.signalingState !== a && "stable" !== e.signalingState) return Promise.reject(new Error("Cannot set " + (t ? "local" : "remote") + " offer in state " + e.signalingState));
            i || "low" !== e._signalingStateLatch.state || e._signalingStateLatch.raise();
            var s = e.signalingState;
            return r = n, t ? e._pendingLocalOffer = r : e._pendingRemoteOffer = r, e.signalingState !== s ? Promise.resolve().then(function() {
                e.dispatchEvent(new Event("signalingstatechange"))
            }) : Promise.resolve()
        }
        return "rollback" === n.type ? e.signalingState !== a ? Promise.reject(new Error("Cannot rollback " + (t ? "local" : "remote") + " description in " + e.signalingState)) : (t ? e._pendingLocalOffer = null : e._pendingRemoteOffer = null, e._rolledBackTracksToSSRCs = new Map(e._tracksToSSRCs), e._tracksToSSRCs = new Map(e._appliedTracksToSSRCs), Promise.resolve().then(function() {
            e.dispatchEvent(new Event("signalingstatechange"))
        })) : e._peerConnection[c](n)
    }

    function p(e, t) {
        return !!e.getTransceivers().find(function(e) {
            return e.receiver && e.receiver.track && e.receiver.track.kind === t
        })
    }

    function d(e) {
        return Object.defineProperties(e, {
            maxPacketLifeTime: {
                value: 65535 === e.maxPacketLifeTime ? null : e.maxPacketLifeTime
            },
            maxRetransmits: {
                value: 65535 === e.maxRetransmits ? null : e.maxRetransmits
            }
        })
    }
    i(l, r), l.prototype.addIceCandidate = function(e) {
        var t = this;
        return "have-remote-offer" === this.signalingState ? this._signalingStateLatch.when("low").then(function() {
            return t._peerConnection.addIceCandidate(e)
        }) : this._peerConnection.addIceCandidate(e)
    }, l.prototype.createOffer = function(e) {
        e = Object.assign({}, e);
        var t = this;
        if (e.offerToReceiveAudio && !this._audioTransceiver && (!s || !p(this, "audio"))) {
            delete e.offerToReceiveAudio;
            try {
                this._audioTransceiver = s ? this.addTransceiver("audio", {
                    direction: "recvonly"
                }) : this.addTransceiver("audio")
            } catch (e) {
                return Promise.reject(e)
            }
        }
        if (e.offerToReceiveVideo && !this._videoTransceiver && (!s || !p(this, "video"))) {
            delete e.offerToReceiveVideo;
            try {
                this._videoTransceiver = s ? this.addTransceiver("video", {
                    direction: "recvonly"
                }) : this.addTransceiver("video")
            } catch (e) {
                return Promise.reject(e)
            }
        }
        return this._peerConnection.createOffer(e).then(function(e) {
            return t._rolledBackTracksToSSRCs.clear(), new RTCSessionDescription({
                type: e.type,
                sdp: u(t._tracksToSSRCs, e.sdp)
            })
        })
    }, l.prototype.createAnswer = function(e) {
        var t = this;
        return this._pendingRemoteOffer ? this._peerConnection.setRemoteDescription(this._pendingRemoteOffer).then(function() {
            return t._signalingStateLatch.lower(), t._peerConnection.createAnswer()
        }).then(function(e) {
            return t._pendingRemoteOffer = null, t._rolledBackTracksToSSRCs.clear(), s ? new RTCSessionDescription({
                type: e.type,
                sdp: u(t._tracksToSSRCs, e.sdp)
            }) : e
        }, function(e) {
            throw t._pendingRemoteOffer = null, e
        }) : this._peerConnection.createAnswer(e).then(function(e) {
            return t._rolledBackTracksToSSRCs.clear(), s ? new RTCSessionDescription({
                type: e.type,
                sdp: u(t._tracksToSSRCs, e.sdp)
            }) : e
        })
    }, l.prototype.createDataChannel = function(e, t) {
        var n = this._peerConnection.createDataChannel(e, t);
        return d(n), n
    }, l.prototype.removeTrack = function(e) {
        e.replaceTrack(null), this._peerConnection.removeTrack(e)
    }, l.prototype.setLocalDescription = function(e) {
        return this._rolledBackTracksToSSRCs.size > 0 && (this._tracksToSSRCs = new Map(this._rolledBackTracksToSSRCs), this._rolledBackTracksToSSRCs.clear()), f(this, !0, e)
    }, l.prototype.setRemoteDescription = function(e) {
        return this._rolledBackTracksToSSRCs.clear(), f(this, !1, e)
    }, l.prototype.close = function() {
        if (!this._isClosed) {
            this._isClosed = !0, this._peerConnection.close();
            var e = this;
            setTimeout(function() {
                e.dispatchEvent(new Event("iceconnectionstatechange")), e.dispatchEvent(new Event("signalingstatechange"))
            })
        }
    }, c.delegateMethods(RTCPeerConnection.prototype, l.prototype, "_peerConnection"), e.exports = l
}, function(e, t, n) {
    "use strict";
    if ("function" == typeof RTCSessionDescription) switch ((0, n(2).guessBrowser)()) {
        case "chrome":
            e.exports = n(54);
            break;
        case "firefox":
            e.exports = n(56);
            break;
        default:
            e.exports = RTCSessionDescription
    } else e.exports = function() {
        throw new Error("RTCSessionDescription is not supported")
    }
}, function(e) {
    e.exports = {
        _args: [
            ["@twilio/webrtc@4.3.2", "/Users/sjagecic/Documents/Blocksi/live/bmee-extension"]
        ],
        _from: "@twilio/webrtc@4.3.2",
        _id: "@twilio/webrtc@4.3.2",
        _inBundle: !1,
        _integrity: "sha512-3gIq7XDI3vBoikRBchCnocFmlRQt45KC7v0DKkat+TV6WBXYJx+Hub22PR18PAROkwl5dAmIziByjYWWVhCHgA==",
        _location: "/@twilio/webrtc",
        _phantomChildren: {},
        _requested: {
            type: "version",
            registry: !0,
            raw: "@twilio/webrtc@4.3.2",
            name: "@twilio/webrtc",
            escapedName: "@twilio%2fwebrtc",
            scope: "@twilio",
            rawSpec: "4.3.2",
            saveSpec: null,
            fetchSpec: "4.3.2"
        },
        _requiredBy: ["/twilio-video"],
        _resolved: "https://registry.npmjs.org/@twilio/webrtc/-/webrtc-4.3.2.tgz",
        _spec: "4.3.2",
        _where: "/Users/sjagecic/Documents/Blocksi/live/bmee-extension",
        author: {
            name: "Manjesh Malavalli",
            email: "mmalavalli@twilio.com"
        },
        bugs: {
            url: "https://github.com/twilio/twilio-webrtc.js/issues"
        },
        contributors: [{
            name: "Mark Roberts",
            email: "mroberts@twilio.com"
        }, {
            name: "Ryan Rowland",
            email: "rrowland@twilio.com"
        }, {
            name: "Makarand Patwardhan",
            email: "mpatwardhan@twilio.com"
        }],
        description: "WebRTC-related APIs and shims used by twilio-video.js",
        devDependencies: {
            browserify: "^14.4.0",
            electron: "^5.0.0",
            envify: "^4.1.0",
            eslint: "^4.4.1",
            "is-docker": "^2.0.0",
            istanbul: "^0.4.5",
            karma: "^1.7.0",
            "karma-browserify": "^5.1.1",
            "karma-chrome-launcher": "^2.2.0",
            "karma-edgium-launcher": "^4.0.0-0",
            "karma-electron": "^6.1.0",
            "karma-firefox-launcher": "^1.0.1",
            "karma-htmlfile-reporter": "^0.3.8",
            "karma-junit-reporter": "^1.2.0",
            "karma-mocha": "^1.3.0",
            "karma-safari-launcher": "~0.1",
            "karma-spec-reporter": "0.0.31",
            mocha: "^3.5.0",
            "npm-run-all": "^4.0.2",
            rimraf: "^2.6.1",
            "simple-git": "^2.4.0",
            "twilio-release-tool": "^1.0.0",
            watchify: "^3.9.0",
            "webrtc-adapter": "^6.4.8"
        },
        homepage: "https://github.com/twilio/twilio-webrtc.js#readme",
        keywords: ["shim", "twilio", "video", "webrtc"],
        license: "BSD-3-Clause",
        main: "./lib/index.js",
        name: "@twilio/webrtc",
        repository: {
            type: "git",
            url: "git+https://github.com/twilio/twilio-webrtc.js.git"
        },
        scripts: {
            build: "npm-run-all clean lint test",
            clean: "rimraf coverage",
            lint: "eslint ./lib",
            test: "npm-run-all test:*",
            "test:integration": "npm-run-all test:integration:*",
            "test:integration:adapter": "karma start karma/integration.adapter.conf.js",
            "test:integration:native": "karma start karma/integration.conf.js",
            "test:unit": "istanbul cover node_modules/mocha/bin/_mocha -- ./test/unit/index.js"
        },
        version: "4.3.2"
    }
}, function(e, t, n) {
    "use strict";
    var r = n(60),
        i = 3,
        o = 250;
    e.exports = function(e) {
        var t = n(34),
            a = {},
            c = t.getOrCreate(a),
            s = i;
        return function t() {
            return s--, r(c, e.srcObject, o).then(function(e) {
                return !!e && (!(s > 0) || t())
            }).catch(function() {
                return !0
            })
        }().finally(function() {
            t.release(a)
        })
    }
}, function(e, t, n) {
    "use strict";
    var r = n(5).inherits,
        i = n(132);

    function o(e, t) {
        var n = new i(e, t);
        return Object.setPrototypeOf(n, o.prototype), n
    }
    r(o, i), e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = function e(t, n, r) {
            null === t && (t = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === i) {
                var o = Object.getPrototypeOf(t);
                return null === o ? void 0 : e(o, n, r)
            }
            if ("value" in i) return i.value;
            var a = i.get;
            return void 0 !== a ? a.call(r) : void 0
        };
    var o = n(2).guessBrowser,
        a = n(61),
        c = n(59)(n(67)),
        s = function(e) {
            function t(e, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), n = Object.assign({
                    workaroundSilentLocalVideo: "safari" === o() && "undefined" != typeof document && "function" == typeof document.createElement
                }, n);
                var r = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                return Object.defineProperties(r, {
                    _workaroundSilentLocalVideo: {
                        value: n.workaroundSilentLocalVideo ? u : null
                    },
                    _workaroundSilentLocalVideoCleanup: {
                        value: null,
                        writable: !0
                    }
                }), r._workaroundSilentLocalVideo && (r._workaroundSilentLocalVideoCleanup = r._workaroundSilentLocalVideo(r, document)), r
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, c), r(t, [{
                key: "toString",
                value: function() {
                    return "[LocalVideoTrack #" + this._instanceId + ": " + this.id + "]"
                }
            }, {
                key: "_end",
                value: function() {
                    return i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_end", this).apply(this, arguments)
                }
            }, {
                key: "disable",
                value: function() {
                    return i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "disable", this).apply(this, arguments)
                }
            }, {
                key: "enable",
                value: function() {
                    return i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "enable", this).apply(this, arguments)
                }
            }, {
                key: "restart",
                value: function() {
                    var e = this;
                    this._workaroundSilentLocalVideoCleanup && (this._workaroundSilentLocalVideoCleanup(), this._workaroundSilentLocalVideoCleanup = null);
                    var n = i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "restart", this).apply(this, arguments);
                    return this._workaroundSilentLocalVideo && n.finally(function() {
                        e._workaroundSilentLocalVideoCleanup = e._workaroundSilentLocalVideo(e, document)
                    }), n
                }
            }, {
                key: "stop",
                value: function() {
                    return this._workaroundSilentLocalVideoCleanup && (this._workaroundSilentLocalVideoCleanup(), this._workaroundSilentLocalVideoCleanup = null), i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "stop", this).apply(this, arguments)
                }
            }]), t
        }();

    function u(e, t) {
        var n = e._log,
            r = e._dummyEl,
            i = e.mediaStreamTrack;

        function o() {
            e.isEnabled && (n.info("Unmuted, checking silence"), r.play().then(function() {
                return a(r, t)
            }).then(function(t) {
                if (t) return n.warn("Silence detected, restarting"), e._stop(), e._restart();
                n.info("Non-silent frames detected, so no need to restart")
            }).catch(function(e) {
                n.warn("Failed to detect silence and restart:", e)
            }).finally(function() {
                (r = e._dummyEl).paused || r.pause(), i.removeEventListener("unmute", o), (i = e.mediaStreamTrack).addEventListener("unmute", o)
            }))
        }
        return i.addEventListener("unmute", o),
            function() {
                i.removeEventListener("unmute", o)
            }
    }
    e.exports = s
}, function(e, t, n) {
    "use strict";
    var r = n(5).inherits,
        i = n(134);

    function o(e) {
        var t = new i(e);
        return Object.setPrototypeOf(t, o.prototype), t
    }
    r(o, i), e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(33),
        o = n(135),
        a = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = new(0, (e = Object.assign({
                        DataTrackSender: o,
                        maxPacketLifeTime: null,
                        maxRetransmits: null,
                        ordered: !0
                    }, e)).DataTrackSender)(e.maxPacketLifeTime, e.maxRetransmits, e.ordered),
                    r = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n.id, "data", e));
                return Object.defineProperties(r, {
                    _trackSender: {
                        value: n
                    },
                    id: {
                        enumerable: !0,
                        value: n.id
                    },
                    maxPacketLifeTime: {
                        enumerable: !0,
                        value: e.maxPacketLifeTime
                    },
                    maxRetransmits: {
                        enumerable: !0,
                        value: e.maxRetransmits
                    },
                    ordered: {
                        enumerable: !0,
                        value: e.ordered
                    },
                    reliable: {
                        enumerable: !0,
                        value: null === e.maxPacketLifeTime && null === e.maxRetransmits
                    }
                }), r
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i), r(t, [{
                key: "send",
                value: function(e) {
                    this._trackSender.send(e)
                }
            }]), t
        }();
    e.exports = a
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(68),
        o = n(1).makeUUID,
        a = function(e) {
            function t(e, n, r) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var i = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, o(), e, n, r));
                return Object.defineProperties(i, {
                    _clones: {
                        value: new Set
                    },
                    _dataChannels: {
                        value: new Set
                    }
                }), i
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i), r(t, [{
                key: "_addClone",
                value: function(e) {
                    this._clones.add(e)
                }
            }, {
                key: "removeClone",
                value: function(e) {
                    this._clones.delete(e)
                }
            }, {
                key: "addDataChannel",
                value: function(e) {
                    return this._dataChannels.add(e), this
                }
            }, {
                key: "clone",
                value: function() {
                    var e = this,
                        n = new t(this.maxPacketLifeTime, this.maxRetransmits, this.ordered);
                    return this._addClone(n), n.once("stopped", function() {
                        return e.removeClone(n)
                    }), n
                }
            }, {
                key: "removeDataChannel",
                value: function(e) {
                    return this._dataChannels.delete(e), this
                }
            }, {
                key: "send",
                value: function(e) {
                    return this._dataChannels.forEach(function(t) {
                        try {
                            t.send(e)
                        } catch (e) {}
                    }), this._clones.forEach(function(t) {
                        try {
                            t.send(e)
                        } catch (e) {}
                    }), this
                }
            }, {
                key: "stop",
                value: function() {
                    this._dataChannels.forEach(function(e) {
                            return e.close()
                        }), this._clones.forEach(function(e) {
                            return e.stop()
                        }),
                        function e(t, n, r) {
                            null === t && (t = Function.prototype);
                            var i = Object.getOwnPropertyDescriptor(t, n);
                            if (void 0 === i) {
                                var o = Object.getPrototypeOf(t);
                                return null === o ? void 0 : e(o, n, r)
                            }
                            if ("value" in i) return i.value;
                            var a = i.get;
                            return void 0 !== a ? a.call(r) : void 0
                        }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "stop", this).call(this)
                }
            }]), t
        }();
    e.exports = a
}, function(e, t, n) {
    "use strict";
    var r = n(8).MediaStreamTrack,
        i = n(2),
        o = i.guessBrowser,
        a = i.guessBrowserVersion,
        c = n(137),
        s = n(36),
        u = n(138),
        l = n(139),
        f = n(25),
        p = f.LocalAudioTrack,
        d = f.LocalDataTrack,
        h = f.LocalVideoTrack,
        v = n(149),
        y = n(150),
        b = n(156),
        m = n(1),
        _ = m.asLocalTrack,
        g = m.buildLogLevels,
        k = m.filterObject,
        w = m.isNonArrayObject,
        S = n(4),
        O = S.DEFAULT_ENVIRONMENT,
        T = S.DEFAULT_LOG_LEVEL,
        P = S.DEFAULT_LOGGER_NAME,
        E = S.DEFAULT_REALM,
        C = S.DEFAULT_REGION,
        j = S.WS_SERVER,
        R = S.typeErrors,
        L = n(35),
        x = n(213),
        A = n(18),
        I = n(70).validateBandwidthProfile,
        D = "safari" === o() && a(),
        M = 0,
        N = !1,
        B = !1;
    if (D) {
        var F = D.major,
            V = D.minor;
        B = F < 12 || 12 === F && V < 1
    }
    var U = new Set([{
        didWarn: !1,
        shouldDelete: !0,
        name: "abortOnIceServersTimeout"
    }, {
        didWarn: !1,
        shouldDelete: !0,
        name: "dscpTagging",
        newName: "enableDscp"
    }, {
        didWarn: !1,
        shouldDelete: !0,
        name: "iceServersTimeout"
    }, {
        didWarn: !1,
        shouldDelete: !1,
        name: "eventListener",
        newName: "Video.Logger"
    }, {
        didWarn: !1,
        shouldDelete: !1,
        name: "logLevel",
        newName: "Video.Logger"
    }]);

    function Q(e) {
        var t = "string" == typeof e ? {
            codec: e
        } : e;
        switch (t.codec.toLowerCase()) {
            case "opus":
                return Object.assign({
                    dtx: !0
                }, t);
            case "vp8":
                return Object.assign({
                    simulcast: !1
                }, t);
            default:
                return t
        }
    }
    e.exports = function(e, t) {
        if (void 0 === t && (t = {}), !w(t)) return L.reject(R.INVALID_TYPE("options", "object"));
        var n = t.Log || A,
            i = t.loggerName || P,
            o = t.logLevel || T,
            a = g(o),
            f = "[connect #" + ++M + "]",
            m = void 0;
        try {
            m = new n("default", f, a, i)
        } catch (V) {
            return L.reject(V)
        }! function(e, t) {
            U.forEach(function(n) {
                var r = n.didWarn,
                    i = n.name,
                    o = n.newName,
                    a = n.shouldDelete;
                i in e && void 0 !== e[i] && (o && a && (e[o] = e[i]), a && delete e[i], r || ["error", "off"].includes(t.level) || (t.warn('The ConnectOptions "' + i + '" is ' + (o ? 'deprecated and scheduled for removal. Please use "' + o + '" instead.' : "no longer applicable and will be ignored.")), n.didWarn = !0))
            })
        }(t, m), t = Object.assign({
            automaticSubscription: !0,
            createLocalTracks: s,
            dominantSpeaker: !1,
            enableDscp: !1,
            environment: O,
            eventListener: null,
            insights: !0,
            LocalAudioTrack: p,
            LocalDataTrack: d,
            LocalParticipant: l,
            LocalVideoTrack: h,
            Log: n,
            MediaStreamTrack: r,
            loggerName: i,
            logLevel: o,
            maxAudioBitrate: null,
            maxVideoBitrate: null,
            name: null,
            networkMonitor: !0,
            networkQuality: !1,
            preferredAudioCodecs: [],
            preferredVideoCodecs: [],
            realm: E,
            region: C,
            signaling: b
        }, k(t));
        var S = j(t.environment, t.region),
            D = new x(Date.now(), m, t.eventListener);
        if ((t = Object.assign({
                eventObserver: D,
                wsServer: S
            }, t)).log = m, B && !N && "error" !== m.logLevel && "off" !== m.logLevel && (N = !0, m.warn(["Support for Safari 12.0 and below is limited because it does not support VP8.", "This means you may experience codec issues in Group Rooms. You may also", "experience codec issues in Peer-to-Peer (P2P) Rooms containing Android- or", "iOS-based Participants who do not support H.264. However, P2P Rooms", "with browser-based Participants should work. For more information, please", "refer to this guide: https://www.twilio.com/docs/video/javascript-v2-developing-safari-11"].join(" "))), "string" != typeof e) return L.reject(R.INVALID_TYPE("token", "string"));
        var F = Object.assign({}, t);
        if (delete F.name, "tracks" in t) {
            if (!Array.isArray(t.tracks)) return L.reject(R.INVALID_TYPE("options.tracks", "Array of LocalAudioTrack, LocalVideoTrack or MediaStreamTrack"));
            try {
                t.tracks = t.tracks.map(function(e) {
                    return _(e, F)
                })
            } catch (V) {
                return L.reject(V)
            }
        }
        var V = I(t.bandwidthProfile);
        if (V) return L.reject(V);
        var W = new(0, t.signaling)(t.wsServer, t);
        m.info("Connecting to a Room"), m.debug("Options:", t);
        var q = new u({
                maxAudioBitrate: t.maxAudioBitrate,
                maxVideoBitrate: t.maxVideoBitrate
            }),
            G = {
                audio: t.preferredAudioCodecs.map(Q),
                video: t.preferredVideoCodecs.map(Q)
            },
            H = new v(w(t.networkQuality) ? t.networkQuality : {}),
            z = c(function(e, t) {
                var n = e.log;
                return e.shouldStopLocalTracks = !e.tracks, e.shouldStopLocalTracks ? n.info("LocalTracks were not provided, so they will be acquired automatically before connecting to the Room. LocalTracks will be released if connecting to the Room fails or if the Room is disconnected") : (n.info("Getting LocalTracks"), n.debug("Options:", e)), e.createLocalTracks(e).then(function(r) {
                    var i = t(r);
                    return i.catch(function() {
                        e.shouldStopLocalTracks && (n.info("The automatically acquired LocalTracks will now be stopped"), r.forEach(function(e) {
                            e.stop()
                        }))
                    }), i
                })
            }.bind(null, t), function(e, t, n, r, i, o) {
                var a = e.createLocalParticipantSignaling(n, r);
                return t.debug("Creating a new LocalParticipant:", a), new i.LocalParticipant(a, o, i)
            }.bind(null, W, m, q, H, t), function(e, t, n, r, i, o) {
                return t.log.debug("Creating a new RoomSignaling"), n.connect(o._signaling, e, r, i, t)
            }.bind(null, e, t, W, q, G), function(e, t, n) {
                var r = new y(t, n, e),
                    i = e.log;
                return i.debug("Creating a new Room:", r), n.on("stateChanged", function e(t) {
                    "disconnected" === t && (i.info("Disconnected from Room:", r.toString()), n.removeListener("stateChanged", e))
                }), r
            }.bind(null, t));
        return z.then(function(e) {
            return m.info("Connected to Room:", e.toString()), m.info("Room name:", e.name), m.debug("Room:", e), e
        }, function(e) {
            z._isCanceled ? m.info("Attempt to connect to a Room was canceled") : m.info("Error while connecting to a Room:", e)
        }), z
    }
}, function(e, t, n) {
    "use strict";
    var r = n(35);
    e.exports = function(e, t, n, i) {
        var o = void 0,
            a = new Error("Canceled");
        return new r(function(c, s, u) {
            var l = void 0;
            e(function(e) {
                return u() ? r.reject(a) : (l = t(e), n(l).then(function(e) {
                    if (u()) throw a;
                    return o = e()
                }))
            }).then(function(e) {
                if (u()) throw e.disconnect(), a;
                c(i(l, e))
            }).catch(function(e) {
                s(e)
            })
        }, function() {
            o && o.cancel()
        })
    }
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(3).EventEmitter,
        o = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e = Object.assign({
                    maxAudioBitrate: null,
                    maxVideoBitrate: null
                }, e), Object.defineProperties(n, {
                    maxAudioBitrate: {
                        value: e.maxAudioBitrate,
                        writable: !0
                    },
                    maxVideoBitrate: {
                        value: e.maxVideoBitrate,
                        writable: !0
                    }
                }), n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i), r(t, [{
                key: "toJSON",
                value: function() {
                    return {
                        maxAudioBitrate: this.maxAudioBitrate,
                        maxVideoBitrate: this.maxVideoBitrate
                    }
                }
            }, {
                key: "update",
                value: function(e) {
                    var t = this;
                    e = Object.assign({
                        maxAudioBitrate: this.maxAudioBitrate,
                        maxVideoBitrate: this.maxVideoBitrate
                    }, e), ["maxAudioBitrate", "maxVideoBitrate"].reduce(function(n, r) {
                        return t[r] !== e[r] && (t[r] = e[r], n = !0), n
                    }, !1) && this.emit("changed")
                }
            }]), t
        }();
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        o = function e(t, n, r) {
            null === t && (t = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === i) {
                var o = Object.getPrototypeOf(t);
                return null === o ? void 0 : e(o, n, r)
            }
            if ("value" in i) return i.value;
            var a = i.get;
            return void 0 !== a ? a.call(r) : void 0
        };
    var a = n(8).MediaStreamTrack,
        c = n(1),
        s = c.asLocalTrack,
        u = c.asLocalTrackPublication,
        l = c.trackClass,
        f = n(4),
        p = f.typeErrors,
        d = f.trackPriority,
        h = n(70).validateLocalTrack,
        v = n(25),
        y = v.LocalAudioTrack,
        b = v.LocalDataTrack,
        m = v.LocalVideoTrack,
        _ = n(140),
        g = n(141),
        k = n(142),
        w = n(72),
        S = function(e) {
            function t(e, n, r) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var i = (r = Object.assign({
                        LocalAudioTrack: y,
                        LocalVideoTrack: m,
                        LocalDataTrack: b,
                        MediaStreamTrack: a,
                        LocalAudioTrackPublication: _,
                        LocalVideoTrackPublication: k,
                        LocalDataTrackPublication: g,
                        shouldStopLocalTracks: !1,
                        tracks: n
                    }, r)).shouldStopLocalTracks ? new Set(n.filter(function(e) {
                        return "data" !== e.kind
                    })) : new Set,
                    o = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r));
                return Object.defineProperties(o, {
                    _LocalAudioTrack: {
                        value: r.LocalAudioTrack
                    },
                    _LocalDataTrack: {
                        value: r.LocalDataTrack
                    },
                    _LocalVideoTrack: {
                        value: r.LocalVideoTrack
                    },
                    _MediaStreamTrack: {
                        value: r.MediaStreamTrack
                    },
                    _LocalAudioTrackPublication: {
                        value: r.LocalAudioTrackPublication
                    },
                    _LocalDataTrackPublication: {
                        value: r.LocalDataTrackPublication
                    },
                    _LocalVideoTrackPublication: {
                        value: r.LocalVideoTrackPublication
                    },
                    _tracksToStop: {
                        value: i
                    },
                    signalingRegion: {
                        enumerable: !0,
                        get: function() {
                            return e.signalingRegion
                        }
                    }
                }), o._handleTrackSignalingEvents(), o
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, w), i(t, [{
                key: "_addTrack",
                value: function(e, n, r) {
                    var i = o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_addTrack", this).call(this, e, n);
                    return i && "disconnected" !== this.state && this._addLocalTrack(e, r), i
                }
            }, {
                key: "_addLocalTrack",
                value: function(e, t) {
                    this._signaling.addTrack(e._trackSender, e.name, t), this._log.info("Added a new " + l(e, !0) + ":", e.id), this._log.debug(l(e, !0) + ":", e)
                }
            }, {
                key: "_removeTrack",
                value: function(e, n) {
                    var r = o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_removeTrack", this).call(this, e, n);
                    return r && "disconnected" !== this.state && (this._signaling.removeTrack(e._trackSender), this._log.info("Removed a " + l(e, !0) + ":", e.id), this._log.debug(l(e, !0) + ":", e)), r
                }
            }, {
                key: "_getTrackEvents",
                value: function() {
                    return o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_getTrackEvents", this).call(this).concat([
                        ["disabled", "trackDisabled"],
                        ["enabled", "trackEnabled"],
                        ["stopped", "trackStopped"]
                    ])
                }
            }, {
                key: "toString",
                value: function() {
                    return "[LocalParticipant #" + this._instanceId + (this.sid ? ": " + this.sid : "") + "]"
                }
            }, {
                key: "_handleTrackSignalingEvents",
                value: function() {
                    var e = this,
                        t = this._log;
                    if ("disconnected" !== this.state) {
                        var n = this._signaling;
                        this.on("trackDisabled", i), this.on("trackEnabled", o), this.on("trackStopped", a), this._tracks.forEach(function(n) {
                            e._addLocalTrack(n, d.PRIORITY_STANDARD), e._getOrCreateLocalTrackPublication(n).catch(function(e) {
                                t.warn("Failed to get or create LocalTrackPublication for " + n + ":", e)
                            })
                        });
                        var r = this;
                        n.on("stateChanged", function e(c) {
                            t.debug("Transitioned to state:", c), "disconnected" === c ? (t.debug("Removing LocalTrack event listeners"), n.removeListener("stateChanged", e), r.removeListener("trackDisabled", i), r.removeListener("trackEnabled", o), r.removeListener("trackStopped", a), r._tracks.forEach(function(e) {
                                var t = a(e);
                                t && e._trackSender.removeClone(t._trackTransceiver)
                            }), t.info("LocalParticipant disconnected. Stopping " + r._tracksToStop.size + " automatically-acquired LocalTracks"), r._tracksToStop.forEach(function(e) {
                                e.stop()
                            })) : "connected" === c && (t.info("reconnected"), setTimeout(function() {
                                return r.emit("reconnected")
                            }, 0))
                        })
                    }

                    function i(e) {
                        var r = n.getPublication(e._trackSender);
                        r && (r.disable(), t.debug("Disabled the " + l(e, !0) + ":", e.id))
                    }

                    function o(e) {
                        var r = n.getPublication(e._trackSender);
                        r && (r.enable(), t.debug("Enabled the " + l(e, !0) + ":", e.id))
                    }

                    function a(e) {
                        var t = n.getPublication(e._trackSender);
                        return t && t.stop(), t
                    }
                }
            }, {
                key: "_getOrCreateLocalTrackPublication",
                value: function(e) {
                    var t = O(this.tracks, e);
                    if (t) return Promise.resolve(t);
                    var n = this._log,
                        r = this,
                        i = this._signaling.getPublication(e._trackSender);
                    if (!i) return Promise.reject(new Error("Unexpected error: The " + e + " cannot be published"));

                    function o(e) {
                        r.unpublishTrack(e.track)
                    }
                    return new Promise(function(a, c) {
                        i.on("updated", function s() {
                            var f = i.error;
                            if (f) return i.removeListener("updated", s), n.warn("Failed to publish the " + l(e, !0) + ": " + f.message), r._removeTrack(e, e.id), setTimeout(function() {
                                r.emit("trackPublicationFailed", f, e)
                            }), void c(f);
                            if (!r._tracks.has(e.id)) return i.removeListener("updated", s), void c(new Error("The " + e + " was unpublished"));
                            if (i.sid) {
                                i.removeListener("updated", s);
                                var p = {
                                    log: n,
                                    LocalAudioTrackPublication: r._LocalAudioTrackPublication,
                                    LocalDataTrackPublication: r._LocalDataTrackPublication,
                                    LocalVideoTrackPublication: r._LocalVideoTrackPublication
                                };
                                (t = O(r.tracks, e)) || (t = u(e, i, o, p), r._addTrackPublication(t)), "connected" === r._signaling.state && setTimeout(function() {
                                    r.emit("trackPublished", t)
                                }), a(t)
                            }
                        })
                    })
                }
            }, {
                key: "publishTrack",
                value: function(e, t) {
                    var n = O(this.tracks, e);
                    if (n) return Promise.resolve(n);
                    t = Object.assign({
                        log: this._log,
                        priority: d.PRIORITY_STANDARD,
                        LocalAudioTrack: this._LocalAudioTrack,
                        LocalDataTrack: this._LocalDataTrack,
                        LocalVideoTrack: this._LocalVideoTrack,
                        MediaStreamTrack: this._MediaStreamTrack
                    }, t);
                    var r = void 0;
                    try {
                        r = s(e, t)
                    } catch (e) {
                        return Promise.reject(e)
                    }
                    var i = Object.values(d);
                    if (!i.includes(t.priority)) return Promise.reject(p.INVALID_VALUE("LocalTrackPublishOptions.priority", i));
                    var o = this._addTrack(r, r.id, t.priority) || this._tracks.get(r.id);
                    return this._getOrCreateLocalTrackPublication(o)
                }
            }, {
                key: "publishTracks",
                value: function(e) {
                    if (!Array.isArray(e)) throw p.INVALID_TYPE("tracks", "Array of LocalAudioTrack, LocalVideoTrack, LocalDataTrack, or MediaStreamTrack");
                    return Promise.all(e.map(this.publishTrack, this))
                }
            }, {
                key: "setBandwidthProfile",
                value: function() {
                    this._log.warn("setBandwidthProfile is not implemented yet and may be available in future versions of twilio-video.js")
                }
            }, {
                key: "setNetworkQualityConfiguration",
                value: function(e) {
                    if ("object" !== (void 0 === e ? "undefined" : r(e)) || null === e) throw p.INVALID_TYPE("networkQualityConfiguration", "NetworkQualityConfiguration");
                    return ["local", "remote"].forEach(function(t) {
                        if (t in e && ("number" != typeof e[t] || isNaN(e[t]))) throw p.INVALID_TYPE("networkQualityConfiguration." + t, "number")
                    }), this._signaling.setNetworkQualityConfiguration(e), this
                }
            }, {
                key: "setParameters",
                value: function(e) {
                    if (void 0 !== e && "object" !== (void 0 === e ? "undefined" : r(e))) throw p.INVALID_TYPE("encodingParameters", "EncodingParameters, null or undefined");
                    return e ? ["maxAudioBitrate", "maxVideoBitrate"].forEach(function(t) {
                        if (void 0 !== e[t] && "number" != typeof e[t] && null !== e[t]) throw p.INVALID_TYPE("encodingParameters." + t, "number, null or undefined")
                    }) : null === e && (e = {
                        maxAudioBitrate: null,
                        maxVideoBitrate: null
                    }), this._signaling.setParameters(e), this
                }
            }, {
                key: "unpublishTrack",
                value: function(e) {
                    h(e, {
                        LocalAudioTrack: this._LocalAudioTrack,
                        LocalDataTrack: this._LocalDataTrack,
                        LocalVideoTrack: this._LocalVideoTrack,
                        MediaStreamTrack: this._MediaStreamTrack
                    });
                    var t = this._tracks.get(e.id);
                    if (!t) return null;
                    if (this._signaling.getPublication(t._trackSender).publishFailed(new Error("The " + t + " was unpublished")), !(t = this._removeTrack(t, t.id))) return null;
                    var n = O(this.tracks, t);
                    return n && this._removeTrackPublication(n), n
                }
            }, {
                key: "unpublishTracks",
                value: function(e) {
                    var t = this;
                    if (!Array.isArray(e)) throw p.INVALID_TYPE("tracks", "Array of LocalAudioTrack, LocalVideoTrack, LocalDataTrack, or MediaStreamTrack");
                    return e.reduce(function(e, n) {
                        var r = t.unpublishTrack(n);
                        return r ? e.concat(r) : e
                    }, [])
                }
            }]), t
        }();

    function O(e, t) {
        return Array.from(e.values()).find(function(e) {
            return e.track === t || e.track.mediaStreamTrack === t
        }) || null
    }
    e.exports = S
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(37),
        o = function(e) {
            function t(e, n, r, i) {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r, i))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i), r(t, [{
                key: "toString",
                value: function() {
                    return "[LocalAudioTrackPublication #" + this._instanceId + ": " + this.trackSid + "]"
                }
            }]), t
        }();
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(37),
        o = function(e) {
            function t(e, n, r, i) {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r, i))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i), r(t, [{
                key: "toString",
                value: function() {
                    return "[LocalDataTrackPublication #" + this._instanceId + ": " + this.trackSid + "]"
                }
            }]), t
        }();
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(37),
        o = function(e) {
            function t(e, n, r, i) {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r, i))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i), r(t, [{
                key: "toString",
                value: function() {
                    return "[LocalVideoTrackPublication #" + this._instanceId + ": " + this.trackSid + "]"
                }
            }]), t
        }();
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(51),
        o = n(73)(i),
        a = function(e) {
            function t(e, n, r, i, o) {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r, i, o))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o), r(t, [{
                key: "toString",
                value: function() {
                    return "[RemoteAudioTrack #" + this._instanceId + ": " + this.sid + "]"
                }
            }, {
                key: "setPriority",
                value: function(e) {
                    return function e(t, n, r) {
                        null === t && (t = Function.prototype);
                        var i = Object.getOwnPropertyDescriptor(t, n);
                        if (void 0 === i) {
                            var o = Object.getPrototypeOf(t);
                            return null === o ? void 0 : e(o, n, r)
                        }
                        if ("value" in i) return i.value;
                        var a = i.get;
                        return void 0 !== a ? a.call(r) : void 0
                    }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setPriority", this).call(this, e)
                }
            }]), t
        }();
    e.exports = a
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(38),
        o = function(e) {
            function t(e, n) {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i), r(t, [{
                key: "toString",
                value: function() {
                    return "[RemoteAudioTrackPublication #" + this._instanceId + ": " + this.trackSid + "]"
                }
            }]), t
        }();
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(33),
        o = n(4),
        a = o.typeErrors,
        c = o.trackPriority,
        s = function(e) {
            function t(e, n, r) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var i = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n.id, "data", r));
                return Object.defineProperties(i, {
                    _isSwitchedOff: {
                        value: !1,
                        writable: !0
                    },
                    _priority: {
                        value: null,
                        writable: !0
                    },
                    isEnabled: {
                        enumerable: !0,
                        value: !0
                    },
                    isSwitchedOff: {
                        enumerable: !0,
                        get: function() {
                            return this._isSwitchedOff
                        }
                    },
                    maxPacketLifeTime: {
                        enumerable: !0,
                        value: n.maxPacketLifeTime
                    },
                    maxRetransmits: {
                        enumerable: !0,
                        value: n.maxRetransmits
                    },
                    ordered: {
                        enumerable: !0,
                        value: n.ordered
                    },
                    priority: {
                        enumerable: !0,
                        get: function() {
                            return this._priority
                        }
                    },
                    reliable: {
                        enumerable: !0,
                        value: null === n.maxPacketLifeTime && null === n.maxRetransmits
                    },
                    sid: {
                        enumerable: !0,
                        value: e
                    }
                }), n.on("message", function(e) {
                    i.emit("message", e, i)
                }), i
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i), r(t, [{
                key: "setPriority",
                value: function(e) {
                    var t = [null].concat(function(e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                            return n
                        }
                        return Array.from(e)
                    }(Object.values(c)));
                    if (!t.includes(e)) throw a.INVALID_VALUE("priority", t);
                    return this._priority = e, this
                }
            }, {
                key: "_setEnabled",
                value: function() {}
            }, {
                key: "_setSwitchedOff",
                value: function(e) {
                    this._isSwitchedOff !== e && (this._isSwitchedOff = e, this.emit(e ? "switchedOff" : "switchedOn", this))
                }
            }]), t
        }();
    e.exports = s
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(38),
        o = function(e) {
            function t(e, n) {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i), r(t, [{
                key: "toString",
                value: function() {
                    return "[RemoteDataTrackPublication #" + this._instanceId + ": " + this.trackSid + "]"
                }
            }]), t
        }();
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(73)(n(67)),
        o = function(e) {
            function t(e, n, r, i, o) {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r, i, o))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i), r(t, [{
                key: "toString",
                value: function() {
                    return "[RemoteVideoTrack #" + this._instanceId + ": " + this.sid + "]"
                }
            }, {
                key: "setPriority",
                value: function(e) {
                    return function e(t, n, r) {
                        null === t && (t = Function.prototype);
                        var i = Object.getOwnPropertyDescriptor(t, n);
                        if (void 0 === i) {
                            var o = Object.getPrototypeOf(t);
                            return null === o ? void 0 : e(o, n, r)
                        }
                        if ("value" in i) return i.value;
                        var a = i.get;
                        return void 0 !== a ? a.call(r) : void 0
                    }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setPriority", this).call(this, e)
                }
            }]), t
        }();
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(38),
        o = function(e) {
            function t(e, n) {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i), r(t, [{
                key: "toString",
                value: function() {
                    return "[RemoteVideoTrackPublication #" + this._instanceId + ": " + this.trackSid + "]"
                }
            }]), t
        }();
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = function() {
            return function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return function(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !r && c.return && c.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
    var o = n(3).EventEmitter,
        a = n(4),
        c = a.DEFAULT_NQ_LEVEL_LOCAL,
        s = a.DEFAULT_NQ_LEVEL_REMOTE,
        u = a.MAX_NQ_LEVEL,
        l = n(1).inRange,
        f = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e = Object.assign({
                    local: c,
                    remote: s
                }, e), Object.defineProperties(n, {
                    local: {
                        value: l(e.local, c, u) ? e.local : c,
                        writable: !0
                    },
                    remote: {
                        value: l(e.remote, s, u) ? e.remote : s,
                        writable: !0
                    }
                }), n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o), i(t, [{
                key: "update",
                value: function(e) {
                    var t = this;
                    e = Object.assign({
                        local: this.local,
                        remote: this.remote
                    }, e), [
                        ["local", c, 3],
                        ["remote", s, 3]
                    ].forEach(function(n) {
                        var i = r(n, 3),
                            o = i[0],
                            a = i[1],
                            c = i[2];
                        t[o] = "number" == typeof e[o] && l(e[o], a, c) ? e[o] : a
                    })
                }
            }]), t
        }();
    e.exports = f
}, function(e, t, n) {
    "use strict";
    var r = function() {
            return function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return function(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !r && c.return && c.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
    var o = n(26),
        a = n(151),
        c = n(74),
        s = n(1).valueToJSON,
        u = 0,
        l = function(e) {
            function t(e, n, r) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var i, o, a = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)),
                    c = r.log.createLog("default", a),
                    s = new Map;
                return Object.defineProperties(a, {
                        _log: {
                            value: c
                        },
                        _instanceId: {
                            value: ++u
                        },
                        _options: {
                            value: r
                        },
                        _participants: {
                            value: s
                        },
                        _signaling: {
                            value: n
                        },
                        dominantSpeaker: {
                            enumerable: !0,
                            get: function() {
                                return this.participants.get(n.dominantSpeakerSid) || null
                            }
                        },
                        isRecording: {
                            enumerable: !0,
                            get: function() {
                                return n.recording.isEnabled || !1
                            }
                        },
                        localParticipant: {
                            enumerable: !0,
                            value: e
                        },
                        name: {
                            enumerable: !0,
                            value: n.name
                        },
                        participants: {
                            enumerable: !0,
                            value: s
                        },
                        sid: {
                            enumerable: !0,
                            value: n.sid
                        },
                        state: {
                            enumerable: !0,
                            get: function() {
                                return n.state
                            }
                        },
                        mediaRegion: {
                            enumerable: !0,
                            value: n.mediaRegion
                        }
                    }), i = a, (o = n.recording).on("updated", function() {
                        var e = o.isEnabled;
                        i._log.info("Recording " + (e ? "started" : "stopped")), i.emit("recording" + (e ? "Started" : "Stopped"))
                    }),
                    function(e, t) {
                        var n = e._log;
                        n.debug("Creating a new RemoteParticipant for each ParticipantSignaling in the RoomSignaling"), t.participants.forEach(p.bind(null, e)), n.debug("Setting up RemoteParticipant creation for all subsequent ParticipantSignalings that connect to the RoomSignaling"), t.on("participantConnected", p.bind(null, e)), t.on("dominantSpeakerChanged", function() {
                            return e.emit("dominantSpeakerChanged", e.dominantSpeaker)
                        }), t.on("stateChanged", function r(i, o) {
                            switch (n.info("Transitioned to state:", i), i) {
                                case "disconnected":
                                    e.participants.forEach(function(e) {
                                        e._unsubscribeTracks()
                                    }), e.emit(i, e, o), e.localParticipant.tracks.forEach(function(e) {
                                        e.unpublish()
                                    }), t.removeListener("stateChanged", r);
                                    break;
                                case "reconnecting":
                                    setTimeout(function() {
                                        return e.emit("reconnecting", o)
                                    }, 0);
                                    break;
                                default:
                                    setTimeout(function() {
                                        return e.emit("reconnected")
                                    }, 0)
                            }
                        })
                    }(a, n), c.info("Created a new Room:", a.name), c.debug("Initial RemoteParticipants:", Array.from(a._participants.values())), a
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o), i(t, [{
                key: "toString",
                value: function() {
                    return "[Room #" + this._instanceId + ": " + this.sid + "]"
                }
            }, {
                key: "disconnect",
                value: function() {
                    return this._log.info("Disconnecting"), this._signaling.disconnect(), this
                }
            }, {
                key: "getStats",
                value: function() {
                    var e = this;
                    return this._signaling.getStats().then(function(t) {
                        return Array.from(t).map(function(t) {
                            var n = r(t, 2),
                                i = n[0],
                                o = n[1];
                            return new c(i, Object.assign({}, o, {
                                localAudioTrackStats: f(e, o.localAudioTrackStats),
                                localVideoTrackStats: f(e, o.localVideoTrackStats)
                            }))
                        })
                    })
                }
            }, {
                key: "toJSON",
                value: function() {
                    return s(this)
                }
            }]), t
        }();

    function f(e, t) {
        var n = e.localParticipant._signaling;
        return t.reduce(function(e, t) {
            var r = n.tracks.get(t.trackId),
                i = n.getSender(r);
            return i ? [Object.assign({}, t, {
                trackId: i.id
            })].concat(e) : e
        }, [])
    }

    function p(e, t) {
        var n = e._log,
            i = new a(t, {
                log: n
            });
        n.info("A new RemoteParticipant connected:", i), e._participants.set(i.sid, i), e.emit("participantConnected", i);
        var o = [
            ["reconnected", "participantReconnected"],
            ["reconnecting", "participantReconnecting"], "trackDimensionsChanged", "trackDisabled", "trackEnabled", "trackMessage", "trackPublished", "trackPublishPriorityChanged", "trackStarted", "trackSubscribed", "trackSubscriptionFailed", "trackSwitchedOff", "trackSwitchedOn", "trackUnpublished", "trackUnsubscribed"
        ].map(function(t) {
            var n = Array.isArray(t) ? t : [t, t],
                o = r(n, 2),
                a = o[0],
                c = o[1];

            function s() {
                var t = [].slice.call(arguments);
                t.unshift(c), t.push(i), e.emit.apply(e, function(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                    return Array.from(e)
                }(t))
            }
            return i.on(a, s), [a, s]
        });
        i.once("disconnected", function() {
            var t = e.dominantSpeaker;
            n.info("RemoteParticipant disconnected:", i), e._participants.delete(i.sid), o.forEach(function(e) {
                i.removeListener(e[0], e[1])
            }), e.emit("participantDisconnected", i), i === t && e.emit("dominantSpeakerChanged", e.dominantSpeaker)
        })
    }
    e.exports = l
}, function(e, t, n) {
    "use strict";
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = function e(t, n, r) {
            null === t && (t = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === i) {
                var o = Object.getPrototypeOf(t);
                return null === o ? void 0 : e(o, n, r)
            }
            if ("value" in i) return i.value;
            var a = i.get;
            return void 0 !== a ? a.call(r) : void 0
        };
    var o = n(72),
        a = function(e) {
            function t(e, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var r = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                return r._handleTrackSignalingEvents(), r.once("disconnected", r._unsubscribeTracks.bind(r)), r
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o), r(t, [{
                key: "toString",
                value: function() {
                    return "[RemoteParticipant #" + this._instanceId + (this.sid ? ": " + this.sid : "") + "]"
                }
            }, {
                key: "_addTrack",
                value: function(e, n, r) {
                    return i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_addTrack", this).call(this, e, r) ? (n._subscribed(e), this.emit("trackSubscribed", e, n), e) : null
                }
            }, {
                key: "_addTrackPublication",
                value: function(e) {
                    var n = i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_addTrackPublication", this).call(this, e);
                    return n ? (this.emit("trackPublished", n), n) : null
                }
            }, {
                key: "_getTrackPublicationEvents",
                value: function() {
                    return [].concat(function(e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                            return n
                        }
                        return Array.from(e)
                    }(i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_getTrackPublicationEvents", this).call(this)), [
                        ["subscriptionFailed", "trackSubscriptionFailed"],
                        ["trackDisabled", "trackDisabled"],
                        ["trackEnabled", "trackEnabled"],
                        ["publishPriorityChanged", "trackPublishPriorityChanged"],
                        ["trackSwitchedOff", "trackSwitchedOff"],
                        ["trackSwitchedOn", "trackSwitchedOn"]
                    ])
                }
            }, {
                key: "_unsubscribeTracks",
                value: function() {
                    var e = this;
                    this.tracks.forEach(function(t) {
                        if (t.isSubscribed) {
                            var n = t.track;
                            t._unsubscribe(), e.emit("trackUnsubscribed", n, t)
                        }
                    })
                }
            }, {
                key: "_removeTrack",
                value: function(e, n, r) {
                    var o = this._tracks.get(r);
                    return o ? (i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_removeTrack", this).call(this, o, r), n._unsubscribe(), this.emit("trackUnsubscribed", o, n), o) : null
                }
            }, {
                key: "_removeTrackPublication",
                value: function(e) {
                    var n = i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_removeTrackPublication", this).call(this, e);
                    return n ? (this.emit("trackUnpublished", n), n) : null
                }
            }]), t
        }();
    e.exports = a
}, function(e, t, n) {
    "use strict";
    var r = n(75),
        i = function(e) {
            function t(e, n, r) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var i = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r));
                return Object.defineProperties(i, {
                    audioLevel: {
                        value: "number" == typeof n.audioInputLevel ? n.audioInputLevel : null,
                        enumerable: !0
                    },
                    jitter: {
                        value: "number" == typeof n.jitter ? n.jitter : null,
                        enumerable: !0
                    }
                }), i
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, r), t
        }();
    e.exports = i
}, function(e, t, n) {
    "use strict";
    var r = n(75),
        i = function(e) {
            function t(e, n, r) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var i = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r)),
                    o = null;
                "number" == typeof n.frameWidthInput && "number" == typeof n.frameHeightInput && (o = {}, Object.defineProperties(o, {
                    width: {
                        value: n.frameWidthInput,
                        enumerable: !0
                    },
                    height: {
                        value: n.frameHeightInput,
                        enumerable: !0
                    }
                }));
                var a = null;
                return "number" == typeof n.frameWidthSent && "number" == typeof n.frameHeightSent && (a = {}, Object.defineProperties(a, {
                    width: {
                        value: n.frameWidthSent,
                        enumerable: !0
                    },
                    height: {
                        value: n.frameHeightSent,
                        enumerable: !0
                    }
                })), Object.defineProperties(i, {
                    captureDimensions: {
                        value: o,
                        enumerable: !0
                    },
                    dimensions: {
                        value: a,
                        enumerable: !0
                    },
                    captureFrameRate: {
                        value: "number" == typeof n.frameRateInput ? n.frameRateInput : null,
                        enumerable: !0
                    },
                    frameRate: {
                        value: "number" == typeof n.frameRateSent ? n.frameRateSent : null,
                        enumerable: !0
                    }
                }), i
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, r), t
        }();
    e.exports = i
}, function(e, t, n) {
    "use strict";
    var r = n(77),
        i = function(e) {
            function t(e, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var r = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                return Object.defineProperties(r, {
                    audioLevel: {
                        value: "number" == typeof n.audioOutputLevel ? n.audioOutputLevel : null,
                        enumerable: !0
                    },
                    jitter: {
                        value: "number" == typeof n.jitter ? n.jitter : null,
                        enumerable: !0
                    }
                }), r
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, r), t
        }();
    e.exports = i
}, function(e, t, n) {
    "use strict";
    var r = n(77),
        i = function(e) {
            function t(e, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var r = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)),
                    i = null;
                return "number" == typeof n.frameWidthReceived && "number" == typeof n.frameHeightReceived && (i = {}, Object.defineProperties(i, {
                    width: {
                        value: n.frameWidthReceived,
                        enumerable: !0
                    },
                    height: {
                        value: n.frameHeightReceived,
                        enumerable: !0
                    }
                })), Object.defineProperties(r, {
                    dimensions: {
                        value: i,
                        enumerable: !0
                    },
                    frameRate: {
                        value: "number" == typeof n.frameRateReceived ? n.frameRateReceived : null,
                        enumerable: !0
                    }
                }), r
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, r), t
        }();
    e.exports = i
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(157),
        o = n(208),
        a = n(212),
        c = function(e) {
            function t(e, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), n = Object.assign({
                    createCancelableRoomSignalingPromise: i
                }, n);
                var r = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return Object.defineProperties(r, {
                    _createCancelableRoomSignalingPromise: {
                        value: n.createCancelableRoomSignalingPromise
                    },
                    _options: {
                        value: n
                    },
                    _wsServer: {
                        value: e
                    }
                }), r
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, a), r(t, [{
                key: "_connect",
                value: function(e, t, n, r, i) {
                    return i = Object.assign({}, this._options, i), this._createCancelableRoomSignalingPromise.bind(null, t, this._wsServer, e, n, r, i)
                }
            }, {
                key: "createLocalParticipantSignaling",
                value: function(e, t) {
                    return new o(e, t)
                }
            }]), t
        }();
    e.exports = c
}, function(e, t, n) {
    "use strict";
    var r = n(35),
        i = n(158),
        o = n(177),
        a = n(203),
        c = n(12),
        s = c.SignalingConnectionDisconnectedError,
        u = c.SignalingIncomingMessageInvalidError,
        l = n(1),
        f = l.flatMap,
        p = l.createRoomConnectEventPayload;
    e.exports = function(e, t, n, c, l, d) {
        var h = d = Object.assign({
                PeerConnectionManager: i,
                RoomV2: o,
                Transport: a
            }, d),
            v = h.PeerConnectionManager,
            y = h.RoomV2,
            b = h.Transport,
            m = h.iceServers,
            _ = h.log,
            g = new v(c, l, d),
            k = f(n.tracks, function(e) {
                return [e.trackTransceiver]
            });
        g.setTrackSenders(k);
        var w = new Error("Canceled"),
            S = void 0,
            O = new r(function(r, i, o) {
                var a = d,
                    c = a.InsightsPublisher,
                    l = a.NullInsightsPublisher,
                    f = a.automaticSubscription,
                    h = a.bandwidthProfile,
                    v = a.dominantSpeaker,
                    k = a.environment,
                    O = a.eventObserver,
                    T = a.loggerName,
                    P = a.logLevel,
                    E = a.name,
                    C = a.networkMonitor,
                    j = a.networkQuality,
                    R = a.insights,
                    L = a.realm,
                    x = a.sdpSemantics,
                    A = a.wsServerInsights,
                    I = Object.assign({
                        automaticSubscription: f,
                        dominantSpeaker: v,
                        environment: k,
                        eventObserver: O,
                        loggerName: T,
                        logLevel: P,
                        networkMonitor: C,
                        networkQuality: j,
                        iceServers: m,
                        insights: R,
                        onIced: function(e) {
                            return o() ? (i(w), Promise.reject(w)) : (_.debug("Got ICE servers:", e), d.iceServers = e, g.setConfiguration(d), g.createAndOffer().then(function() {
                                if (o()) throw i(w), w;
                                _.debug("createAndOffer() succeeded."), g.dequeue("description")
                            }).catch(function(e) {
                                throw _.error("createAndOffer() failed:", e), i(e), e
                            }))
                        },
                        realm: L,
                        sdpSemantics: x
                    }, "string" == typeof A ? {
                        wsServerInsights: A
                    } : {}, c ? {
                        InsightsPublisher: c
                    } : {}, l ? {
                        NullInsightsPublisher: l
                    } : {}, h ? {
                        bandwidthProfile: h
                    } : {});
                S = new b(E, e, n, g, t, I);
                var D = p(d);
                O.emit("event", D), S.once("connected", function(e) {
                    if (_.debug("Transport connected:", e), o()) i(w);
                    else if (e.participant) {
                        var t = e.options.signaling_region;
                        n.setSignalingRegion(t), r(new y(n, e, S, g, d))
                    } else i(new u)
                }), S.once("stateChanged", function(e, t) {
                    "disconnected" === e ? (S = null, i(t || new s)) : _.debug("Transport state changed:", e)
                })
            }, function() {
                S && (S.disconnect(), S = null)
            });
        return O.catch(function() {
            S && (S.disconnect(), S = null), g.close()
        }), O
    }
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();

    function i(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }
    var o = n(2).guessBrowser,
        a = n(159),
        c = n(64),
        s = n(176),
        u = n(1),
        l = n(12).MediaConnectionError,
        f = "firefox" === o(),
        p = function(e) {
            function t(e, r, i) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var o = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)),
                    s = (i = Object.assign({
                        audioContextFactory: f ? n(34) : null,
                        PeerConnectionV2: a
                    }, i)).audioContextFactory ? i.audioContextFactory.getOrCreate(o) : null,
                    l = s ? {
                        offerToReceiveVideo: !0
                    } : {
                        offerToReceiveAudio: !0,
                        offerToReceiveVideo: !0
                    };
                return Object.defineProperties(o, {
                    _audioContextFactory: {
                        value: i.audioContextFactory
                    },
                    _closedPeerConnectionIds: {
                        value: new Set
                    },
                    _configuration: {
                        writable: !0,
                        value: null
                    },
                    _configurationDeferred: {
                        writable: !0,
                        value: u.defer()
                    },
                    _connectionState: {
                        value: "new",
                        writable: !0
                    },
                    _dummyAudioTrackSender: {
                        value: s ? new c(d(s)) : null
                    },
                    _encodingParameters: {
                        value: e
                    },
                    _iceConnectionState: {
                        writable: !0,
                        value: "new"
                    },
                    _dataTrackSenders: {
                        writable: !0,
                        value: new Set
                    },
                    _lastConnectionState: {
                        value: "new",
                        writable: !0
                    },
                    _lastIceConnectionState: {
                        writable: !0,
                        value: "new"
                    },
                    _mediaTrackSenders: {
                        writable: !0,
                        value: new Set
                    },
                    _offerOptions: {
                        value: l
                    },
                    _peerConnections: {
                        value: new Map
                    },
                    _preferredCodecs: {
                        value: r
                    },
                    _sessionTimeout: {
                        value: null,
                        writable: !0
                    },
                    _PeerConnectionV2: {
                        value: i.PeerConnectionV2
                    }
                }), o
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, s), r(t, [{
                key: "_closeAbsentPeerConnections",
                value: function(e) {
                    var t = new Set(e.map(function(e) {
                        return e.id
                    }));
                    return this._peerConnections.forEach(function(e) {
                        t.has(e.id) || e._close()
                    }), this
                }
            }, {
                key: "_getConfiguration",
                value: function() {
                    return this._configurationDeferred.promise
                }
            }, {
                key: "_getOrCreate",
                value: function(e, t) {
                    var n = this,
                        r = this,
                        i = this._peerConnections.get(e);
                    if (!i) {
                        var o = this._PeerConnectionV2,
                            a = Object.assign({
                                dummyAudioMediaStreamTrack: this._dummyAudioTrackSender ? this._dummyAudioTrackSender.track : null,
                                offerOptions: this._offerOptions
                            }, this._sessionTimeout ? {
                                sessionTimeout: this._sessionTimeout
                            } : {}, t);
                        try {
                            i = new o(e, this._encodingParameters, this._preferredCodecs, a)
                        } catch (e) {
                            throw new l
                        }
                        this._peerConnections.set(i.id, i), i.on("candidates", this.queue.bind(this, "candidates")), i.on("description", this.queue.bind(this, "description")), i.on("trackAdded", this.queue.bind(this, "trackAdded")), i.on("stateChanged", function e(t) {
                            "closed" === t && (i.removeListener("stateChanged", e), r._peerConnections.delete(i.id), r._closedPeerConnectionIds.add(i.id), k(r), g(r))
                        }), i.on("connectionStateChanged", function() {
                            return k(n)
                        }), i.on("iceConnectionStateChanged", function() {
                            return g(n)
                        }), this._dataTrackSenders.forEach(i.addDataTrackSender, i), this._mediaTrackSenders.forEach(i.addMediaTrackSender, i), g(this)
                    }
                    return i
                }
            }, {
                key: "close",
                value: function() {
                    return this._peerConnections.forEach(function(e) {
                        e.close()
                    }), this._dummyAudioTrackSender && this._dummyAudioTrackSender.stop(), this._audioContextFactory && this._audioContextFactory.release(this), g(this), this
                }
            }, {
                key: "createAndOffer",
                value: function() {
                    var e = this;
                    return this._getConfiguration().then(function(t) {
                        var n = void 0;
                        do {
                            n = u.makeUUID()
                        } while (e._peerConnections.has(n));
                        return e._getOrCreate(n, t)
                    }).then(function(e) {
                        return e.offer()
                    }).then(function() {
                        return e
                    })
                }
            }, {
                key: "getTrackReceivers",
                value: function() {
                    return u.flatMap(this._peerConnections, function(e) {
                        return e.getTrackReceivers()
                    })
                }
            }, {
                key: "getStates",
                value: function() {
                    var e = [];
                    return this._peerConnections.forEach(function(t) {
                        var n = t.getState();
                        n && e.push(n)
                    }), e
                }
            }, {
                key: "setConfiguration",
                value: function(e) {
                    return this._configuration && (this._configurationDeferred = u.defer(), this._peerConnections.forEach(function(t) {
                        t.setConfiguration(e)
                    })), this._configuration = e, this._configurationDeferred.resolve(e), this
                }
            }, {
                key: "setIceReconnectTimeout",
                value: function(e) {
                    return null === this._sessionTimeout && (this._peerConnections.forEach(function(t) {
                        t.setIceReconnectTimeout(e)
                    }), this._sessionTimeout = e), this
                }
            }, {
                key: "setTrackSenders",
                value: function(e) {
                    var t = new Set(e.filter(function(e) {
                            return "data" === e.kind
                        })),
                        n = new Set(e.filter(function(e) {
                            return e && ("audio" === e.kind || "video" === e.kind)
                        })),
                        r = function(e, t, n) {
                            return {
                                data: h(e, t),
                                media: v(e, n)
                            }
                        }(this, t, n);
                    return this._dataTrackSenders = t, this._mediaTrackSenders = n,
                        function(e, t) {
                            (t.data.add.size || t.data.remove.size || t.media.add.size || t.media.remove.size) && e._peerConnections.forEach(function(e) {
                                t.data.remove.forEach(e.removeDataTrackSender, e), t.media.remove.forEach(e.removeMediaTrackSender, e), t.data.add.forEach(e.addDataTrackSender, e), t.media.add.forEach(e.addMediaTrackSender, e), (t.media.add.size || t.media.remove.size || t.data.add.size && !e.isApplicationSectionNegotiated) && e.offer()
                            })
                        }(this, r), this
                }
            }, {
                key: "update",
                value: function(e) {
                    var t = this;
                    return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this._closeAbsentPeerConnections(e), this._getConfiguration().then(function(n) {
                        return Promise.all(e.map(function(e) {
                            return t._closedPeerConnectionIds.has(e.id) ? null : t._getOrCreate(e.id, n).update(e)
                        }))
                    }).then(function() {
                        return t
                    })
                }
            }, {
                key: "getStats",
                value: function() {
                    var e = Array.from(this._peerConnections.values());
                    return Promise.all(e.map(function(e) {
                        return e.getStats().then(function(t) {
                            return [e.id, t]
                        })
                    })).then(function(e) {
                        return new Map(e)
                    })
                }
            }, {
                key: "connectionState",
                get: function() {
                    return this._connectionState
                }
            }, {
                key: "iceConnectionState",
                get: function() {
                    return this._iceConnectionState
                }
            }]), t
        }();

    function d(e) {
        return e.createMediaStreamDestination().stream.getAudioTracks()[0]
    }

    function h(e, t) {
        return {
            add: u.difference(t, e._dataTrackSenders),
            remove: u.difference(e._dataTrackSenders, t)
        }
    }

    function v(e, t) {
        return {
            add: u.difference(t, e._mediaTrackSenders),
            remove: u.difference(e._mediaTrackSenders, t)
        }
    }
    var y = {
            new: 0,
            checking: 1,
            connecting: 2,
            connected: 3,
            completed: 4,
            disconnected: -1,
            failed: -2,
            closed: -3
        },
        b = void 0;

    function m() {
        return Object.keys(y).reduce(function(e, t) {
            return Object.assign(e, (n = {}, r = y[t], i = t, r in n ? Object.defineProperty(n, r, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[r] = i, n));
            var n, r, i
        }, {})
    }

    function _(e) {
        return e.length ? (b = b || m(), e.reduce(function(e, t) {
            return b[Math.max(y[e], y[t])]
        })) : "new"
    }

    function g(e) {
        e._lastIceConnectionState = e.iceConnectionState, e._iceConnectionState = _([].concat(i(e._peerConnections.values())).map(function(e) {
            return e.iceConnectionState
        })), e.iceConnectionState !== e._lastIceConnectionState && e.emit("iceConnectionStateChanged")
    }

    function k(e) {
        e._lastConnectionState = e.connectionState, e._connectionState = _([].concat(i(e._peerConnections.values())).map(function(e) {
            return e.connectionState
        })), e.connectionState !== e._lastConnectionState && e.emit("connectionStateChanged")
    }
    e.exports = p
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(78),
        o = n(8),
        a = o.MediaStream,
        c = o.RTCIceCandidate,
        s = o.RTCPeerConnection,
        u = o.RTCSessionDescription,
        l = o.getStats,
        f = n(2).guessBrowser,
        p = n(17).getSdpFormat,
        d = n(4),
        h = d.DEFAULT_ICE_GATHERING_TIMEOUT_MS,
        v = d.DEFAULT_LOG_LEVEL,
        y = d.DEFAULT_SESSION_TIMEOUT_SEC,
        b = d.iceRestartBackoffConfig,
        m = n(22),
        _ = m.createCodecMapForMediaSection,
        g = m.disableRtx,
        k = m.enableDtxForOpus,
        w = m.getMediaSections,
        S = m.removeSSRCAttributes,
        O = m.revertSimulcastForNonVP8MediaSections,
        T = m.setBitrateParameters,
        P = m.setCodecPreferences,
        E = m.setSimulcast,
        C = m.unifiedPlanAddOrRewriteNewTrackIds,
        j = m.unifiedPlanAddOrRewriteTrackIds,
        R = m.unifiedPlanFilterLocalCodecs,
        L = n(27),
        x = n(12),
        A = x.MediaClientLocalDescFailedError,
        I = x.MediaClientRemoteDescFailedError,
        D = n(1),
        M = D.buildLogLevels,
        N = D.isChromeScreenShareTrack,
        B = D.oncePerTick,
        F = n(166),
        V = n(168),
        U = n(169),
        Q = n(171),
        W = n(19),
        q = n(18),
        G = n(172),
        H = n(173),
        z = n(174),
        K = n(175),
        $ = f(),
        Y = "chrome" === $,
        J = "firefox" === $,
        X = "safari" === $,
        Z = "undefined" != typeof RTCRtpSender && "function" == typeof RTCRtpSender.prototype.getParameters && "function" == typeof RTCRtpSender.prototype.setParameters,
        ee = 0,
        te = {
            open: ["closed", "updating"],
            updating: ["closed", "open"],
            closed: []
        },
        ne = function(e) {
            function t(e, n, r, o) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var l = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "open", te)),
                    f = ae(o = Object.assign({
                        enableDscp: !1,
                        dummyAudioMediaStreamTrack: null,
                        isChromeScreenShareTrack: N,
                        iceServers: [],
                        isRTCRtpSenderParamsSupported: Z,
                        logLevel: v,
                        offerOptions: {},
                        revertSimulcastForNonVP8MediaSections: O,
                        sessionTimeout: 1e3 * y,
                        setBitrateParameters: T,
                        setCodecPreferences: P,
                        setSimulcast: E,
                        Backoff: i,
                        IceConnectionMonitor: V,
                        MediaStream: a,
                        RTCIceCandidate: c,
                        RTCPeerConnection: s,
                        RTCSessionDescription: u,
                        Timeout: L
                    }, o)),
                    d = p(f.sdpSemantics),
                    m = "unified" === d,
                    _ = m ? null : new o.MediaStream,
                    g = M(o.logLevel),
                    k = o.RTCPeerConnection;
                !0 === o.enableDscp && (o.chromeSpecificConstraints = o.chromeSpecificConstraints || {}, o.chromeSpecificConstraints.optional = o.chromeSpecificConstraints.optional || [], o.chromeSpecificConstraints.optional.push({
                    googDscp: !0
                }));
                var w = o.log ? o.log.createLog("webrtc", l) : new q("webrtc", l, g, o.loggerName),
                    S = new k(f, o.chromeSpecificConstraints);
                o.dummyAudioMediaStreamTrack && S.addTrack(o.dummyAudioMediaStreamTrack, _ || new o.MediaStream), Object.defineProperties(l, {
                    _appliedTrackIdsToAttributes: {
                        value: new Map,
                        writable: !0
                    },
                    _dataChannels: {
                        value: new Map
                    },
                    _dataTrackReceivers: {
                        value: new Set
                    },
                    _descriptionRevision: {
                        writable: !0,
                        value: 0
                    },
                    _didGenerateLocalCandidates: {
                        writable: !0,
                        value: !1
                    },
                    _enableDscp: {
                        value: o.enableDscp
                    },
                    _encodingParameters: {
                        value: n
                    },
                    _isChromeScreenShareTrack: {
                        value: o.isChromeScreenShareTrack
                    },
                    _iceGatheringFailed: {
                        value: !1,
                        writable: !0
                    },
                    _iceGatheringTimeout: {
                        value: new o.Timeout(function() {
                            return l._handleIceGatheringTimeout()
                        }, h, !1)
                    },
                    _iceRestartBackoff: {
                        value: o.Backoff.exponential(b)
                    },
                    _instanceId: {
                        value: ++ee
                    },
                    _isIceConnectionInactive: {
                        writable: !0,
                        value: !1
                    },
                    _isIceLite: {
                        writable: !0,
                        value: !1
                    },
                    _isIceRestartBackoffInProgress: {
                        writable: !0,
                        value: !1
                    },
                    _isRestartingIce: {
                        writable: !0,
                        value: !1
                    },
                    _isUnifiedPlan: {
                        value: m
                    },
                    _isRTCRtpSenderParamsSupported: {
                        value: o.isRTCRtpSenderParamsSupported
                    },
                    _lastIceConnectionState: {
                        writable: !0,
                        value: null
                    },
                    _lastStableDescriptionRevision: {
                        writable: !0,
                        value: 0
                    },
                    _localCandidates: {
                        writable: !0,
                        value: []
                    },
                    _localCodecs: {
                        value: new Set
                    },
                    _localCandidatesRevision: {
                        writable: !0,
                        value: 1
                    },
                    _localDescriptionWithoutSimulcast: {
                        writable: !0,
                        value: null
                    },
                    _localDescription: {
                        writable: !0,
                        value: null
                    },
                    _localMediaStream: {
                        value: _
                    },
                    _localUfrag: {
                        writable: !0,
                        value: null
                    },
                    _log: {
                        value: w
                    },
                    _remoteCodecMaps: {
                        value: new Map
                    },
                    _rtpSenders: {
                        value: new Map
                    },
                    _iceConnectionMonitor: {
                        value: new o.IceConnectionMonitor(S)
                    },
                    _mediaTrackReceivers: {
                        value: new Set
                    },
                    _needsAnswer: {
                        writable: !0,
                        value: !1
                    },
                    _negotiationRole: {
                        writable: !0,
                        value: null
                    },
                    _offerOptions: {
                        writable: !0,
                        value: o.offerOptions
                    },
                    _onEncodingParametersChanged: {
                        value: B(function() {
                            l._isRTCRtpSenderParamsSupported ? l._needsAnswer || se(l) : l.offer()
                        })
                    },
                    _peerConnection: {
                        value: S
                    },
                    _preferredAudioCodecs: {
                        value: r.audio
                    },
                    _preferredVideoCodecs: {
                        value: r.video
                    },
                    _shouldApplyDtx: {
                        value: r.audio.every(function(e) {
                            return "opus" !== e.codec
                        }) || r.audio.some(function(e) {
                            var t = e.codec,
                                n = e.dtx;
                            return "opus" === t && n
                        })
                    },
                    _shouldApplySimulcast: {
                        value: (Y || X) && r.video.some(function(e) {
                            return "vp8" === e.codec.toLowerCase() && e.simulcast
                        })
                    },
                    _queuedDescription: {
                        writable: !0,
                        value: null
                    },
                    _iceReconnectTimeout: {
                        value: new o.Timeout(function() {
                            w.debug("ICE reconnect timed out"), l.close()
                        }, o.sessionTimeout, !1)
                    },
                    _recycledTransceivers: {
                        value: {
                            audio: [],
                            video: []
                        }
                    },
                    _replaceTrackPromises: {
                        value: new Map
                    },
                    _remoteCandidates: {
                        writable: !0,
                        value: new F
                    },
                    _sdpFormat: {
                        value: d
                    },
                    _setBitrateParameters: {
                        value: o.setBitrateParameters
                    },
                    _setCodecPreferences: {
                        value: o.setCodecPreferences
                    },
                    _setSimulcast: {
                        value: o.setSimulcast
                    },
                    _revertSimulcastForNonVP8MediaSections: {
                        value: o.revertSimulcastForNonVP8MediaSections
                    },
                    _RTCIceCandidate: {
                        value: o.RTCIceCandidate
                    },
                    _RTCPeerConnection: {
                        value: o.RTCPeerConnection
                    },
                    _RTCSessionDescription: {
                        value: o.RTCSessionDescription
                    },
                    _shouldOffer: {
                        writable: !0,
                        value: !1
                    },
                    _shouldRestartIce: {
                        writable: !0,
                        value: !1
                    },
                    _trackIdsToAttributes: {
                        value: new Map,
                        writable: !0
                    },
                    _trackMatcher: {
                        writable: !0,
                        value: null
                    },
                    id: {
                        enumerable: !0,
                        value: e
                    }
                }), n.on("changed", l._onEncodingParametersChanged), S.addEventListener("connectionstatechange", l._handleConnectionStateChange.bind(l)), S.addEventListener("datachannel", l._handleDataChannelEvent.bind(l)), S.addEventListener("icecandidate", l._handleIceCandidateEvent.bind(l)), S.addEventListener("iceconnectionstatechange", l._handleIceConnectionStateChange.bind(l)), S.addEventListener("icegatheringstatechange", l._handleIceGatheringStateChange.bind(l)), S.addEventListener("signalingstatechange", l._handleSignalingStateChange.bind(l)), S.addEventListener("track", l._handleTrackEvent.bind(l)), l._iceRestartBackoff.on("ready", function() {
                    return l._initiateIceRestart()
                });
                var C = l;
                return l.on("stateChanged", function e(t) {
                    "closed" === t && (C.removeListener("stateChanged", e), C._dataChannels.forEach(function(e, t) {
                        C.removeDataTrackSender(t)
                    }))
                }), l
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, W), r(t, [{
                key: "toString",
                value: function() {
                    return "[PeerConnectionV2 #" + this._instanceId + ": " + this.id + "]"
                }
            }, {
                key: "_addIceCandidate",
                value: function(e) {
                    var t = this;
                    return Promise.resolve().then(function() {
                        return e = new t._RTCIceCandidate(e), t._peerConnection.addIceCandidate(e)
                    }).catch(function(n) {
                        t._log.warn("Failed to add RTCIceCandidate " + (e ? '"' + e.candidate + '"' : "null") + ": " + n.message)
                    })
                }
            }, {
                key: "_addIceCandidates",
                value: function(e) {
                    return Promise.all(e.map(this._addIceCandidate, this)).then(function() {})
                }
            }, {
                key: "_addOrUpdateTransceiver",
                value: function(e) {
                    var t = this,
                        n = function(e, t) {
                            var n = {
                                    audio: e._preferredAudioCodecs.map(function(e) {
                                        var t = e.codec;
                                        return t.toLowerCase()
                                    }),
                                    video: e._preferredVideoCodecs.map(function(e) {
                                        var t = e.codec;
                                        return t.toLowerCase()
                                    })
                                } [t],
                                r = e._recycledTransceivers[t],
                                i = n.find(function(t) {
                                    return e._localCodecs.has(t)
                                });
                            if (!i) return r.shift();
                            var o = r.find(function(t) {
                                var n = e._remoteCodecMaps.get(t.mid);
                                return n && n.has(i)
                            });
                            o && r.splice(r.indexOf(o), 1);
                            return o
                        }(this, e.kind);
                    if (n && n.sender) {
                        var r = n.sender.track ? n.sender.track.id : null;
                        return r && this._log.warn("Reusing transceiver: " + n.mid + "] " + r + " => " + e.id), this._replaceTrackPromises.set(n, n.sender.replaceTrack(e).then(function() {
                            n.direction = "sendrecv"
                        }, function() {}).finally(function() {
                            t._replaceTrackPromises.delete(n)
                        })), n
                    }
                    return this._peerConnection.addTransceiver(e)
                }
            }, {
                key: "_checkIceBox",
                value: function(e) {
                    var t = oe(e);
                    if (!t) return Promise.resolve();
                    var n = this._remoteCandidates.setUfrag(t);
                    return this._addIceCandidates(n)
                }
            }, {
                key: "_answer",
                value: function(e) {
                    var t = this;
                    return Promise.resolve().then(function() {
                        return t._negotiationRole || (t._negotiationRole = "answerer"), t._setRemoteDescription(e)
                    }).catch(function() {
                        throw new I
                    }).then(function() {
                        return t._peerConnection.createAnswer()
                    }).then(function(n) {
                        n = J ? new t._RTCSessionDescription({
                            sdp: g(n.sdp),
                            type: n.type
                        }) : K(n);
                        var r = S(n.sdp, ["mslabel", "label"]);
                        if (t._shouldApplySimulcast) {
                            var i = r;
                            r = t._setSimulcast(i, t._sdpFormat, t._trackIdsToAttributes), r = t._revertSimulcastForNonVP8MediaSections(r, i, e.sdp)
                        }
                        return r = r.replace(/42e015/g, "42e01f"), t._setLocalDescription({
                            type: n.type,
                            sdp: r
                        })
                    }).then(function() {
                        return t._checkIceBox(e)
                    }).then(function() {
                        return t._queuedDescription && t._updateDescription(t._queuedDescription)
                    }).then(function() {
                        return t._queuedDescription = null, t._maybeReoffer(t._peerConnection.localDescription)
                    }).catch(function(e) {
                        throw e instanceof I ? e : new A
                    })
                }
            }, {
                key: "_close",
                value: function() {
                    return this._iceConnectionMonitor.stop(), "closed" !== this._peerConnection.signalingState && (this._peerConnection.close(), this.preempt("closed"), this._encodingParameters.removeListener("changed", this._onEncodingParametersChanged), !0)
                }
            }, {
                key: "_handleConnectionStateChange",
                value: function() {
                    this.emit("connectionStateChanged")
                }
            }, {
                key: "_handleDataChannelEvent",
                value: function(e) {
                    var t = this,
                        n = e.channel,
                        r = new U(n);
                    this._dataTrackReceivers.add(r), n.addEventListener("close", function() {
                        t._dataTrackReceivers.delete(r)
                    }), this.emit("trackAdded", r)
                }
            }, {
                key: "_handleGlare",
                value: function(e) {
                    var t = this;
                    return this._log.debug("Glare detected; rolling back"), this._isRestartingIce && (this._log.debug("An ICE restart was in progress; we'll need to restart ICE again after rolling back"), this._isRestartingIce = !1, this._shouldRestartIce = !0), Promise.resolve().then(function() {
                        return t._trackIdsToAttributes = new Map(t._appliedTrackIdsToAttributes), t._setLocalDescription({
                            type: "rollback"
                        })
                    }).then(function() {
                        return t._needsAnswer = !1, t._answer(e)
                    }).then(function(e) {
                        return e ? Promise.resolve() : t._offer()
                    })
                }
            }, {
                key: "_handleIceCandidateEvent",
                value: function(e) {
                    e.candidate && (this._log.debug("Clearing ICE gathering timeout"), this._didGenerateLocalCandidates = !0, this._iceGatheringTimeout.clear(), this._localCandidates.push(e.candidate));
                    var t = {
                        ice: {
                            candidates: this._isIceLite ? [] : this._localCandidates.slice(),
                            ufrag: this._localUfrag
                        },
                        id: this.id
                    };
                    e.candidate || (t.ice.complete = !0), this._isIceLite && e.candidate || (t.ice.revision = this._localCandidatesRevision++, this.emit("candidates", t))
                }
            }, {
                key: "_handleIceConnectionStateChange",
                value: function() {
                    var e = this,
                        t = this._peerConnection.iceConnectionState,
                        n = ["connected", "completed"].includes(t),
                        r = this._log;
                    r.debug('ICE connection state is "' + t + '"'), n && (this._iceReconnectTimeout.clear(), this._iceRestartBackoff.reset()), "failed" === this._lastIceConnectionState || "failed" !== t || this._shouldRestartIce || this._isRestartingIce ? ["disconnected", "failed"].includes(this._lastIceConnectionState) && n && r.debug("ICE reconnected") : (r.warn("ICE failed"), this._initiateIceRestartBackoff()), "connected" === t ? (this._isIceConnectionInactive = !1, this._iceConnectionMonitor.start(function() {
                        e._iceConnectionMonitor.stop(), e._shouldRestartIce || e._isRestartingIce || (r.warn("ICE Connection Monitor detected inactivity"), e._isIceConnectionInactive = !0, e._initiateIceRestartBackoff(), e.emit("iceConnectionStateChanged"), e.emit("connectionStateChanged"))
                    })) : ["disconnected", "completed"].includes(t) || (this._iceConnectionMonitor.stop(), this._isIceConnectionInactive = !1), this._lastIceConnectionState = t, this.emit("iceConnectionStateChanged")
                }
            }, {
                key: "_handleIceGatheringTimeout",
                value: function() {
                    this._log.warn("ICE failed to gather any local candidates"), this._iceGatheringFailed = !0, this._initiateIceRestartBackoff(), this.emit("iceConnectionStateChanged"), this.emit("connectionStateChanged")
                }
            }, {
                key: "_handleIceGatheringStateChange",
                value: function() {
                    var e = this._peerConnection.iceGatheringState,
                        t = this._log;
                    t.debug('ICE gathering state is "' + e + '"');
                    var n = this._iceGatheringTimeout,
                        r = n.delay,
                        i = n.isSet;
                    "gathering" !== e || this._didGenerateLocalCandidates || i || (t.debug("Starting ICE gathering timeout: " + r), this._iceGatheringFailed = !1, this._iceGatheringTimeout.start())
                }
            }, {
                key: "_handleSignalingStateChange",
                value: function() {
                    "stable" === this._peerConnection.signalingState && (this._appliedTrackIdsToAttributes = new Map(this._trackIdsToAttributes))
                }
            }, {
                key: "_handleTrackEvent",
                value: function(e) {
                    var t = this,
                        n = this._peerConnection.remoteDescription ? this._peerConnection.remoteDescription.sdp : null;
                    this._trackMatcher || (this._trackMatcher = e.transceiver && e.transceiver.mid ? new z : X || this._isUnifiedPlan ? new H : new G), this._trackMatcher.update(n);
                    var r = e.track,
                        i = this._trackMatcher.match(e) || r.id,
                        o = new Q(i, r);
                    this._mediaTrackReceivers.forEach(function(e) {
                        e.track.id === o.track.id && t._mediaTrackReceivers.delete(e)
                    }), this._mediaTrackReceivers.add(o), r.addEventListener("ended", function() {
                        return t._mediaTrackReceivers.delete(o)
                    }), this.emit("trackAdded", o)
                }
            }, {
                key: "_initiateIceRestart",
                value: function() {
                    if ("closed" !== this._peerConnection.signalingState) {
                        var e = this._log;
                        e.warn("Attempting to restart ICE"), this._didGenerateLocalCandidates = !1, this._isIceRestartBackoffInProgress = !1, this._shouldRestartIce = !0;
                        var t = this._iceReconnectTimeout,
                            n = t.delay;
                        t.isSet || (e.debug("Starting ICE reconnect timeout: " + n), this._iceReconnectTimeout.start()), this.offer()
                    }
                }
            }, {
                key: "_initiateIceRestartBackoff",
                value: function() {
                    "closed" === this._peerConnection.signalingState || this._isIceRestartBackoffInProgress || (this._log.warn("An ICE restart has been scheduled"), this._isIceRestartBackoffInProgress = !0, this._iceRestartBackoff.backoff())
                }
            }, {
                key: "_maybeReoffer",
                value: function(e) {
                    var t = this._shouldOffer;
                    if (e && e.sdp) {
                        if (this._isUnifiedPlan) {
                            var n = this._peerConnection.getSenders().filter(function(e) {
                                return e.track
                            });
                            t = ["audio", "video"].reduce(function(t, r) {
                                var i = w(e.sdp, r, "(sendrecv|sendonly)"),
                                    o = n.filter(function(e, t) {
                                        var n = t.track;
                                        return n && n.kind === e && "ended" !== n.readyState
                                    }.bind(null, r));
                                return t || i.length < o.length
                            }, t)
                        }
                        var r = this._dataChannels.size > 0,
                            i = w(e.sdp, "application").length > 0;
                        t = t || r && !i
                    }
                    return (t ? this._offer() : Promise.resolve()).then(function() {
                        return t
                    })
                }
            }, {
                key: "_offer",
                value: function() {
                    var e = this,
                        t = Object.assign({}, this._offerOptions);
                    return this._needsAnswer = !0, this._shouldRestartIce && (this._shouldRestartIce = !1, this._isRestartingIce = !0, t.iceRestart = !0), Promise.all(this._replaceTrackPromises.values()).then(function() {
                        return e._peerConnection.createOffer(t)
                    }).catch(function() {
                        throw new A
                    }).then(function(t) {
                        t = J ? new e._RTCSessionDescription({
                            sdp: g(t.sdp),
                            type: t.type
                        }) : K(t);
                        var n = S(t.sdp, ["mslabel", "label"]);
                        n = e._isUnifiedPlan && e._peerConnection.remoteDescription ? R(n, e._peerConnection.remoteDescription.sdp) : n;
                        var r = e._setCodecPreferences(n, e._preferredAudioCodecs, e._preferredVideoCodecs);
                        return e._shouldOffer = !1, e._negotiationRole || (e._negotiationRole = "offerer"), e._shouldApplySimulcast && (e._localDescriptionWithoutSimulcast = {
                            type: "offer",
                            sdp: r
                        }, r = e._setSimulcast(r, e._sdpFormat, e._trackIdsToAttributes)), e._setLocalDescription({
                            type: "offer",
                            sdp: r
                        })
                    })
                }
            }, {
                key: "_getMediaTrackSenderId",
                value: function(e) {
                    var t = Array.from(this._rtpSenders.keys()).find(function(t) {
                        return t.track.id === e
                    });
                    return t ? t.id : e
                }
            }, {
                key: "_addOrRewriteLocalTrackIds",
                value: function(e) {
                    var t = this,
                        n = this._peerConnection.getTransceivers().filter(function(e) {
                            var t = e.sender;
                            return !e.stopped && t && t.track
                        }),
                        r = n.filter(function(e) {
                            return e.mid
                        }),
                        i = new Map(r.map(function(e) {
                            var n = e.mid,
                                r = e.sender;
                            return [n, t._getMediaTrackSenderId(r.track.id)]
                        })),
                        o = j(e.sdp, i),
                        a = n.filter(function(e) {
                            return !e.mid
                        }),
                        c = new Map(["audio", "video"].map(function(e) {
                            return [e, a.filter(function(t) {
                                return t.sender.track.kind === e
                            }).map(function(e) {
                                var n = e.sender;
                                return t._getMediaTrackSenderId(n.track.id)
                            })]
                        })),
                        s = C(o, i, c);
                    return new this._RTCSessionDescription({
                        sdp: s,
                        type: e.type
                    })
                }
            }, {
                key: "_rollbackAndApplyOffer",
                value: function(e) {
                    var t = this;
                    return this._setLocalDescription({
                        type: "rollback"
                    }).then(function() {
                        return t._setLocalDescription(e)
                    })
                }
            }, {
                key: "_setLocalDescription",
                value: function(e) {
                    var t = this;
                    return "rollback" !== e.type && this._shouldApplyDtx && (e = new this._RTCSessionDescription({
                        sdp: k(e.sdp),
                        type: e.type
                    })), this._peerConnection.setLocalDescription(e).catch(function(n) {
                        throw t._log.warn('Calling setLocalDescription with an RTCSessionDescription of type "' + e.type + '" failed with the error "' + n.message + '".'), e.sdp && t._log.warn("The SDP was " + e.sdp), new A
                    }).then(function() {
                        "rollback" !== e.type && (t._localDescription = t._isUnifiedPlan ? t._addOrRewriteLocalTrackIds(e) : e, t._shouldApplyDtx && (t._localDescription = new t._RTCSessionDescription({
                            sdp: k(t._localDescription.sdp, []),
                            type: t._localDescription.type
                        })), t._localCandidates = [], "offer" === e.type ? t._descriptionRevision++ : "answer" === e.type && (t._lastStableDescriptionRevision = t._descriptionRevision, ce(t)), t._localUfrag = oe(e), t.emit("description", t.getState()))
                    })
                }
            }, {
                key: "_setRemoteDescription",
                value: function(e) {
                    var t = this;
                    return e.sdp && (this._isRTCRtpSenderParamsSupported || (e.sdp = this._setBitrateParameters(e.sdp, J ? "TIAS" : "AS", this._encodingParameters.maxAudioBitrate, this._encodingParameters.maxVideoBitrate)), e.sdp = this._setCodecPreferences(e.sdp, this._preferredAudioCodecs, this._preferredVideoCodecs), this._shouldApplyDtx ? e.sdp = k(e.sdp) : e.sdp = k(e.sdp, []), J && (e.sdp = e.sdp.replace(/a=msid:[^ ]+ /g, "a=msid:- ")), this._peerConnection.remoteDescription || (this._isIceLite = /a=ice-lite/.test(e.sdp))), e = new this._RTCSessionDescription(e), Promise.resolve().then(function() {
                        if ("answer" === e.type && t._shouldApplySimulcast) {
                            var n = t._revertSimulcastForNonVP8MediaSections(t._localDescription.sdp, t._localDescriptionWithoutSimulcast.sdp, e.sdp);
                            if (n !== t._localDescription.sdp) return t._rollbackAndApplyOffer({
                                type: t._localDescription.type,
                                sdp: n
                            })
                        }
                    }).then(function() {
                        return t._peerConnection.setRemoteDescription(e)
                    }).then(function() {
                        "answer" === e.type && (t._isRestartingIce && (t._log.debug("An ICE restart was in-progress and is now completed"), t._isRestartingIce = !1), ce(t))
                    }, function(n) {
                        throw t._log.warn('Calling setRemoteDescription with an RTCSessionDescription of type "' + e.type + '" failed with the error "' + n.message + '".'), e.sdp && t._log.warn("The SDP was " + e.sdp), n
                    })
                }
            }, {
                key: "_updateDescription",
                value: function(e) {
                    var t = this;
                    switch (e.type) {
                        case "answer":
                        case "pranswer":
                            if (e.revision !== this._descriptionRevision || "have-local-offer" !== this._peerConnection.signalingState) return Promise.resolve();
                            this._descriptionRevision = e.revision;
                            break;
                        case "close":
                            return this._close();
                        case "create-offer":
                            return e.revision <= this._lastStableDescriptionRevision ? Promise.resolve() : this._needsAnswer ? (this._queuedDescription = e, Promise.resolve()) : (this._descriptionRevision = e.revision, this._offer());
                        case "offer":
                            return e.revision <= this._lastStableDescriptionRevision || "closed" === this._peerConnection.signalingState ? Promise.resolve() : "have-local-offer" === this._peerConnection.signalingState ? this._needsAnswer && 0 === this._lastStableDescriptionRevision ? (this._queuedDescription = e, Promise.resolve()) : (this._descriptionRevision = e.revision, this._handleGlare(e)) : (this._descriptionRevision = e.revision, this._answer(e).then(function() {}))
                    }
                    var n = e.revision;
                    return Promise.resolve().then(function() {
                        return t._setRemoteDescription(e)
                    }).catch(function() {
                        throw new I
                    }).then(function() {
                        return t._lastStableDescriptionRevision = n, t._needsAnswer = !1, t._checkIceBox(e)
                    }).then(function() {
                        return t._queuedDescription && t._updateDescription(t._queuedDescription)
                    }).then(function() {
                        return t._queuedDescription = null, t._maybeReoffer(t._peerConnection.localDescription).then(function() {})
                    })
                }
            }, {
                key: "_updateIce",
                value: function(e) {
                    var t = this._remoteCandidates.update(e);
                    return this._addIceCandidates(t)
                }
            }, {
                key: "addDataTrackSender",
                value: function(e) {
                    if (!this._dataChannels.has(e)) try {
                        var t = {
                            ordered: e.ordered
                        };
                        null !== e.maxPacketLifeTime && (t.maxPacketLifeTime = e.maxPacketLifeTime), null !== e.maxRetransmits && (t.maxRetransmits = e.maxRetransmits);
                        var n = this._peerConnection.createDataChannel(e.id, t);
                        e.addDataChannel(n), this._dataChannels.set(e, n)
                    } catch (t) {
                        this._log.warn('Error creating an RTCDataChannel for DataTrack "' + e.id + '": ' + t.message)
                    }
                }
            }, {
                key: "addMediaTrackSender",
                value: function(e) {
                    if ("closed" !== this._peerConnection.signalingState && !this._rtpSenders.has(e)) {
                        var t = void 0;
                        if (this._localMediaStream) this._localMediaStream.addTrack(e.track), t = this._peerConnection.addTrack(e.track, this._localMediaStream);
                        else t = this._addOrUpdateTransceiver(e.track).sender;
                        e.addSender(t), this._rtpSenders.set(e, t)
                    }
                }
            }, {
                key: "close",
                value: function() {
                    this._close() && (this._descriptionRevision++, this._localDescription = {
                        type: "close"
                    }, this.emit("description", this.getState()))
                }
            }, {
                key: "getTrackReceivers",
                value: function() {
                    return Array.from(this._dataTrackReceivers).concat(Array.from(this._mediaTrackReceivers))
                }
            }, {
                key: "getState",
                value: function() {
                    if (!this._localDescription) return null;
                    var e = "answer" === this._localDescription.type ? this._lastStableDescriptionRevision : this._descriptionRevision,
                        t = {
                            type: this._localDescription.type,
                            revision: e
                        };
                    return this._localDescription.sdp && (t.sdp = this._localDescription.sdp), {
                        description: t,
                        id: this.id
                    }
                }
            }, {
                key: "offer",
                value: function() {
                    var e = this;
                    return this._needsAnswer || this._isRestartingIce ? (this._shouldOffer = !0, Promise.resolve()) : this.bracket("offering", function(t) {
                        return e.transition("updating", t), (e._needsAnswer || e._isRestartingIce ? Promise.resolve() : e._offer()).then(function() {
                            e.tryTransition("open", t)
                        }, function(n) {
                            throw e.tryTransition("open", t), n
                        })
                    })
                }
            }, {
                key: "removeDataTrackSender",
                value: function(e) {
                    var t = this._dataChannels.get(e);
                    t && (e.removeDataChannel(t), this._dataChannels.delete(e), t.close())
                }
            }, {
                key: "removeMediaTrackSender",
                value: function(e) {
                    if ("closed" !== this._peerConnection.signalingState && this._rtpSenders.has(e)) {
                        var t = this._rtpSenders.get(e);
                        this._peerConnection.removeTrack(t), this._localMediaStream && this._localMediaStream.removeTrack(e.track), e.removeSender(t), this._rtpSenders.delete(e)
                    }
                }
            }, {
                key: "setConfiguration",
                value: function(e) {
                    "function" == typeof this._peerConnection.setConfiguration && this._peerConnection.setConfiguration(ae(e))
                }
            }, {
                key: "setIceReconnectTimeout",
                value: function(e) {
                    return this._iceReconnectTimeout.setDelay(e), this._log.debug("Updated ICE reconnection timeout period:", this._iceReconnectTimeout.delay), this
                }
            }, {
                key: "update",
                value: function(e) {
                    var t = this;
                    return this.bracket("updating", function(n) {
                        if ("closed" === t.state) return Promise.resolve();
                        t.transition("updating", n);
                        var r = [];
                        return e.ice && r.push(t._updateIce(e.ice)), e.description && r.push(t._updateDescription(e.description)), Promise.all(r).then(function() {
                            t.tryTransition("open", n)
                        }, function(e) {
                            throw t.tryTransition("open", n), e
                        })
                    })
                }
            }, {
                key: "getStats",
                value: function() {
                    var e = this;
                    return l(this._peerConnection).then(function(t) {
                        return function(e, t) {
                            return Object.assign(t, {
                                remoteAudioTrackStats: t.remoteAudioTrackStats.map(function(t) {
                                    return ie(e, t)
                                }),
                                remoteVideoTrackStats: t.remoteVideoTrackStats.map(function(t) {
                                    return ie(e, t)
                                }),
                                localAudioTrackStats: t.localAudioTrackStats.map(function(t) {
                                    return re(e, t)
                                }),
                                localVideoTrackStats: t.localVideoTrackStats.map(function(t) {
                                    return re(e, t)
                                })
                            })
                        }(e, t)
                    })
                }
            }, {
                key: "connectionState",
                get: function() {
                    return "failed" === this.iceConnectionState ? "failed" : this._peerConnection.connectionState || this.iceConnectionState
                }
            }, {
                key: "iceConnectionState",
                get: function() {
                    return this._isIceConnectionInactive && "disconnected" === this._peerConnection.iceConnectionState || this._iceGatheringFailed ? "failed" : this._peerConnection.iceConnectionState
                }
            }, {
                key: "isApplicationSectionNegotiated",
                get: function() {
                    return "closed" === this._peerConnection.signalingState || !!this._peerConnection.localDescription && w(this._peerConnection.localDescription.sdp, "application").length > 0
                }
            }]), t
        }();

    function re(e, t) {
        var n = e._getMediaTrackSenderId(t.trackId);
        return Object.assign(t, {
            trackId: n
        })
    }

    function ie(e, t) {
        var n = [].concat(function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
                return Array.from(e)
            }(e._mediaTrackReceivers)).find(function(e) {
                return e.track.id === t.trackId
            }),
            r = n ? n.id : null;
        return Object.assign(t, {
            trackId: r
        })
    }

    function oe(e) {
        if (e.sdp) {
            var t = e.sdp.match(/^a=ice-ufrag:([a-zA-Z0-9+\/]+)/m);
            if (t) return t[1]
        }
        return null
    }

    function ae(e) {
        return Object.assign({
            bundlePolicy: "max-bundle",
            rtcpMuxPolicy: "require"
        }, e)
    }

    function ce(e) {
        e._isUnifiedPlan && (function(e) {
            e._recycledTransceivers.audio = [], e._recycledTransceivers.video = [], e._peerConnection.getTransceivers().forEach(function(t) {
                if (function(e, t) {
                        return !e.stopped && !t._replaceTrackPromises.has(e) && ["inactive", "recvonly"].includes(e.direction)
                    }(t, e)) {
                    var n = t.receiver.track;
                    e._recycledTransceivers[n.kind].push(t)
                }
            })
        }(e), function(e) {
            var t = e._peerConnection.localDescription;
            t && w(t.sdp).forEach(function(t) {
                _(t).forEach(function(t, n) {
                    return e._localCodecs.add(n)
                })
            })
        }(e), function(e) {
            var t = e._peerConnection.remoteDescription;
            t && w(t.sdp).forEach(function(t) {
                var n = t.match(/^a=mid:(.+)$/m)[1],
                    r = _(t);
                e._remoteCodecMaps.set(n, r)
            })
        }(e)), e._isRTCRtpSenderParamsSupported && se(e)
    }

    function se(e) {
        var t = e._encodingParameters,
            n = t.maxAudioBitrate,
            r = t.maxVideoBitrate,
            i = new Map([
                ["audio", n],
                ["video", r]
            ]);
        e._peerConnection.getSenders().filter(function(e) {
            return e.track
        }).forEach(function(t) {
            var n = i.get(t.track.kind),
                r = t.getParameters();
            null === n || 0 === n ? function(e) {
                Array.isArray(e.encodings) && e.encodings.forEach(function(e) {
                    return delete e.maxBitrate
                })
            }(r) : e._isChromeScreenShareTrack(t.track) ? e._log.warn("Not setting maxBitrate for " + t.track.kind + " Track " + t.track.id + " because it appears to be screen share track: " + t.track.label) : function(e, t) {
                J ? e.encodings = [{
                    maxBitrate: t
                }] : e.encodings.forEach(function(e) {
                    e.maxBitrate = t
                })
            }(r, n), !J && e._enableDscp && r.encodings.length > 0 && (r.encodings[0].networkPriority = "high"), t.setParameters(r).catch(function(n) {
                e._log.warn("Error while setting encodings parameters for " + t.track.kind + " Track " + t.track.id + ": " + (n.message || n.name))
            })
        })
    }
    e.exports = ne
}, function(e, t, n) {
    var r = n(5),
        i = e.exports = n(161);

    function o(e, t, n, i) {
        n = n || "";
        var o = new e(r.format.apply(this, [n].concat(i)));
        throw Error.captureStackTrace(o, t), o
    }

    function a(e, t, n) {
        o(i.IllegalArgumentError, e, t, n)
    }

    function c(e) {
        var t = typeof e;
        if ("object" == t) {
            if (!e) return "null";
            if (e instanceof Array) return "array"
        }
        return t
    }

    function s(e) {
        return function(t, n) {
            var r = c(t);
            if (r == e) return t;
            a(arguments.callee, n || 'Expected "' + e + '" but got "' + r + '".', Array.prototype.slice.call(arguments, 2))
        }
    }
    e.exports.checkArgument = function(e, t) {
        e || a(arguments.callee, t, Array.prototype.slice.call(arguments, 2))
    }, e.exports.checkState = function(e, t) {
        e || function(e, t, n) {
            o(i.IllegalStateError, e, t, n)
        }(arguments.callee, t, Array.prototype.slice.call(arguments, 2))
    }, e.exports.checkIsDef = function(e, t) {
        if (void 0 !== e) return e;
        a(arguments.callee, t || "Expected value to be defined but was undefined.", Array.prototype.slice.call(arguments, 2))
    }, e.exports.checkIsDefAndNotNull = function(e, t) {
        if (null != e) return e;
        a(arguments.callee, t || 'Expected value to be defined and not null but got "' + c(e) + '".', Array.prototype.slice.call(arguments, 2))
    }, e.exports.checkIsString = s("string"), e.exports.checkIsArray = s("array"), e.exports.checkIsNumber = s("number"), e.exports.checkIsBoolean = s("boolean"), e.exports.checkIsFunction = s("function"), e.exports.checkIsObject = s("object")
}, function(e, t, n) {
    var r = n(5);

    function i(e) {
        Error.call(this, e), this.message = e
    }

    function o(e) {
        Error.call(this, e), this.message = e
    }
    r.inherits(i, Error), i.prototype.name = "IllegalArgumentError", r.inherits(o, Error), o.prototype.name = "IllegalStateError", e.exports.IllegalStateError = o, e.exports.IllegalArgumentError = i
}, function(e, t, n) {
    var r = n(5),
        i = n(39),
        o = n(80);

    function a(e) {
        o.call(this, e), this.backoffDelay_ = 0, this.nextBackoffDelay_ = this.getInitialDelay(), this.factor_ = a.DEFAULT_FACTOR, e && void 0 !== e.factor && (i.checkArgument(e.factor > 1, "Exponential factor should be greater than 1 but got %s.", e.factor), this.factor_ = e.factor)
    }
    r.inherits(a, o), a.DEFAULT_FACTOR = 2, a.prototype.next_ = function() {
        return this.backoffDelay_ = Math.min(this.nextBackoffDelay_, this.getMaxDelay()), this.nextBackoffDelay_ = this.backoffDelay_ * this.factor_, this.backoffDelay_
    }, a.prototype.reset_ = function() {
        this.backoffDelay_ = 0, this.nextBackoffDelay_ = this.getInitialDelay()
    }, e.exports = a
}, function(e, t, n) {
    var r = n(3),
        i = n(39),
        o = n(5),
        a = n(79),
        c = n(81);

    function s(e, t, n) {
        r.EventEmitter.call(this), i.checkIsFunction(e, "Expected fn to be a function."), i.checkIsArray(t, "Expected args to be an array."), i.checkIsFunction(n, "Expected callback to be a function."), this.function_ = e, this.arguments_ = t, this.callback_ = n, this.lastResult_ = [], this.numRetries_ = 0, this.backoff_ = null, this.strategy_ = null, this.failAfter_ = -1, this.retryPredicate_ = s.DEFAULT_RETRY_PREDICATE_, this.state_ = s.State_.PENDING
    }
    o.inherits(s, r.EventEmitter), s.State_ = {
        PENDING: 0,
        RUNNING: 1,
        COMPLETED: 2,
        ABORTED: 3
    }, s.DEFAULT_RETRY_PREDICATE_ = function(e) {
        return !0
    }, s.prototype.isPending = function() {
        return this.state_ == s.State_.PENDING
    }, s.prototype.isRunning = function() {
        return this.state_ == s.State_.RUNNING
    }, s.prototype.isCompleted = function() {
        return this.state_ == s.State_.COMPLETED
    }, s.prototype.isAborted = function() {
        return this.state_ == s.State_.ABORTED
    }, s.prototype.setStrategy = function(e) {
        return i.checkState(this.isPending(), "FunctionCall in progress."), this.strategy_ = e, this
    }, s.prototype.retryIf = function(e) {
        return i.checkState(this.isPending(), "FunctionCall in progress."), this.retryPredicate_ = e, this
    }, s.prototype.getLastResult = function() {
        return this.lastResult_.concat()
    }, s.prototype.getNumRetries = function() {
        return this.numRetries_
    }, s.prototype.failAfter = function(e) {
        return i.checkState(this.isPending(), "FunctionCall in progress."), this.failAfter_ = e, this
    }, s.prototype.abort = function() {
        this.isCompleted() || this.isAborted() || (this.isRunning() && this.backoff_.reset(), this.state_ = s.State_.ABORTED, this.lastResult_ = [new Error("Backoff aborted.")], this.emit("abort"), this.doCallback_())
    }, s.prototype.start = function(e) {
        i.checkState(!this.isAborted(), "FunctionCall is aborted."), i.checkState(this.isPending(), "FunctionCall already started.");
        var t = this.strategy_ || new c;
        this.backoff_ = e ? e(t) : new a(t), this.backoff_.on("ready", this.doCall_.bind(this, !0)), this.backoff_.on("fail", this.doCallback_.bind(this)), this.backoff_.on("backoff", this.handleBackoff_.bind(this)), this.failAfter_ > 0 && this.backoff_.failAfter(this.failAfter_), this.state_ = s.State_.RUNNING, this.doCall_(!1)
    }, s.prototype.doCall_ = function(e) {
        e && this.numRetries_++;
        var t = ["call"].concat(this.arguments_);
        r.EventEmitter.prototype.emit.apply(this, t);
        var n = this.handleFunctionCallback_.bind(this);
        this.function_.apply(null, this.arguments_.concat(n))
    }, s.prototype.doCallback_ = function() {
        this.callback_.apply(null, this.lastResult_)
    }, s.prototype.handleFunctionCallback_ = function() {
        if (!this.isAborted()) {
            var e = Array.prototype.slice.call(arguments);
            this.lastResult_ = e, r.EventEmitter.prototype.emit.apply(this, ["callback"].concat(e));
            var t = e[0];
            t && this.retryPredicate_(t) ? this.backoff_.backoff(t) : (this.state_ = s.State_.COMPLETED, this.doCallback_())
        }
    }, s.prototype.handleBackoff_ = function(e, t, n) {
        this.emit("backoff", e, t, n)
    }, e.exports = s
}, function(e, t, n) {
    "use strict";
    var r = function() {
            return function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return function(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !r && c.return && c.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
    var o = n(1).difference,
        a = n(1).flatMap;

    function c() {
        return String(Math.floor(4294967295 * Math.random()))
    }
    var s = function() {
        function e(t, n, r) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), Object.defineProperties(this, {
                cName: {
                    enumerable: !0,
                    value: r
                },
                isSimulcastEnabled: {
                    enumerable: !0,
                    value: !1,
                    writable: !0
                },
                primarySSRCs: {
                    enumerable: !0,
                    value: new Set
                },
                rtxPairs: {
                    enumerable: !0,
                    value: new Map
                },
                streamId: {
                    enumerable: !0,
                    value: n
                },
                trackId: {
                    enumerable: !0,
                    value: t
                }
            })
        }
        return i(e, [{
            key: "addSimulcastSSRCs",
            value: function() {
                if (!this.isSimulcastEnabled) {
                    var e = [c(), c()];
                    e.forEach(function(e) {
                        this.primarySSRCs.add(e)
                    }, this), this.rtxPairs.size && e.forEach(function(e) {
                        this.rtxPairs.set(c(), e)
                    }, this)
                }
            }
        }, {
            key: "addSSRC",
            value: function(e, t, n) {
                t ? this.rtxPairs.set(e, t) : this.primarySSRCs.add(e), this.isSimulcastEnabled = this.isSimulcastEnabled || n
            }
        }, {
            key: "toSdpLines",
            value: function(e) {
                var t = this,
                    n = e ? [] : Array.from(this.rtxPairs.entries()).map(function(e) {
                        return e.reverse()
                    }),
                    r = Array.from(this.primarySSRCs.values()),
                    i = n.length ? a(n) : r,
                    o = a(i, function(e) {
                        return ["a=ssrc:" + e + " cname:" + t.cName, "a=ssrc:" + e + " msid:" + t.streamId + " " + t.trackId]
                    }),
                    c = n.map(function(e) {
                        return "a=ssrc-group:FID " + e.join(" ")
                    }),
                    s = ["a=ssrc-group:SIM " + r.join(" ")];
                return c.concat(o).concat(s)
            }
        }]), e
    }();

    function u(e, t) {
        return (e.match(new RegExp(t, "gm")) || []).map(function(e) {
            return (e.match(new RegExp(t)) || []).slice(1)
        })
    }

    function l(e) {
        return u(e, "^a=ssrc:([0-9]+) msid:([^\\s]+) ([^\\s]+)$")
    }

    function f(e) {
        var t = a(u(e, "^a=msid:(.+) (.+)$")),
            n = r(t, 2),
            i = n[0],
            o = n[1];
        return a(u(e, "^a=ssrc:(.+) cname:.+$")).map(function(e) {
            return [e, i, o]
        })
    }

    function p(e, t) {
        var n = function(e) {
                return new Set(a(u(e, "^a=ssrc-group:SIM ([0-9]+) ([0-9]+) ([0-9]+)$")))
            }(e),
            r = function(e) {
                return new Map(u(e, "^a=ssrc-group:FID ([0-9]+) ([0-9]+)$").map(function(e) {
                    return e.reverse()
                }))
            }(e);
        return function(e, t) {
            return {
                planb: l,
                unified: f
            } [t](e)
        }(e, t).reduce(function(t, i) {
            var o = i[0],
                a = i[1],
                c = i[2],
                u = t.get(c) || new s(c, a, function(e, t, n) {
                    var r = "a=ssrc:" + t + " " + n + ":(.+)";
                    return e.match(new RegExp(r))[1]
                }(e, o, "cname")),
                l = r.get(o) || null;
            return u.addSSRC(o, l, n.has(o)), t.set(c, u)
        }, new Map)
    }
    e.exports = function(e, t, n) {
        var r = p(e, t),
            i = Array.from(r.keys()),
            c = Array.from(n.keys()),
            s = o(i, c),
            u = o(c, i);
        a(s, function(e) {
            return r.get(e)
        }).forEach(function(e) {
            e.addSimulcastSSRCs(), n.set(e.trackId, e)
        }), c = Array.from(n.keys());
        var l = o(c, u),
            f = a(l, function(e) {
                return n.get(e)
            }),
            d = !e.match(/a=rtpmap:[0-9]+ rtx/),
            h = a(f, function(e) {
                return e.toSdpLines(d)
            }),
            v = a(new Set(e.split("\r\n").concat(h)));
        return e.match("a=x-google-flag:conference") || v.push("a=x-google-flag:conference"), v.join("\r\n")
    }
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = function(e) {
        function t(e) {
            var n;
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var r = [].slice.call(arguments, 1),
                i = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(n, [this].concat(function(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                    return Array.from(e)
                }(r)))),
                o = Error.apply(i, r);
            return o.name = "TwilioError", Object.defineProperty(i, "code", {
                value: e,
                enumerable: !0
            }), Object.getOwnPropertyNames(o).forEach(function(e) {
                Object.defineProperty(this, e, {
                    value: o[e],
                    enumerable: !0
                })
            }, i), i
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, Error), r(t, [{
            key: "toString",
            value: function() {
                var e = this.message ? ": " + this.message : "";
                return this.name + " " + this.code + e
            }
        }]), t
    }();
    e.exports = i
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(167),
        o = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), Object.defineProperties(this, {
                    _filter: {
                        value: new i({
                            getKey: function(e) {
                                return e.ufrag
                            },
                            isLessThanOrEqualTo: function(e, t) {
                                return e.revision <= t.revision
                            }
                        })
                    },
                    _ufrag: {
                        writable: !0,
                        value: null
                    },
                    ufrag: {
                        enumerable: !0,
                        get: function() {
                            return this._ufrag
                        }
                    }
                })
            }
            return r(e, [{
                key: "setUfrag",
                value: function(e) {
                    this._ufrag = e;
                    var t = this._filter.toMap().get(e);
                    return t ? t.candidates : []
                }
            }, {
                key: "update",
                value: function(e) {
                    e.candidates = e.candidates || [];
                    var t = this._filter.toMap().get(e.ufrag),
                        n = t ? t.candidates : [];
                    return this._filter.update(e) && this._ufrag === e.ufrag ? e.candidates.slice(n.length) : []
                }
            }]), e
        }();
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = function() {
        function e(t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), t = Object.assign({
                getKey: function(e) {
                    return e
                },
                getValue: function(e) {
                    return e
                },
                isLessThanOrEqualTo: function(e, t) {
                    return e <= t
                }
            }, t), Object.defineProperties(this, {
                _getKey: {
                    value: t.getKey
                },
                _getValue: {
                    value: t.getValue
                },
                _isLessThanOrEqualTo: {
                    value: t.isLessThanOrEqualTo
                },
                _map: {
                    value: new Map
                }
            })
        }
        return r(e, [{
            key: "toMap",
            value: function() {
                return new Map(this._map)
            }
        }, {
            key: "updateAndFilter",
            value: function(e) {
                return e.filter(this.update, this)
            }
        }, {
            key: "update",
            value: function(e) {
                var t = this._getKey(e),
                    n = this._getValue(e);
                return (!this._map.has(t) || !this._isLessThanOrEqualTo(n, this._map.get(t))) && (this._map.set(t, n), !0)
            }
        }]), e
    }();
    e.exports = i
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(4),
        o = i.ICE_ACTIVITY_CHECK_PERIOD_MS,
        a = i.ICE_INACTIVITY_THRESHOLD_MS,
        c = function() {
            function e(t, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), n = Object.assign({
                    activityCheckPeriodMs: o,
                    inactivityThresholdMs: a
                }, n), Object.defineProperties(this, {
                    _activityCheckPeriodMs: {
                        value: n.activityCheckPeriodMs
                    },
                    _inactivityThresholdMs: {
                        value: n.inactivityThresholdMs
                    },
                    _lastActivity: {
                        value: null,
                        writable: !0
                    },
                    _peerConnection: {
                        value: t
                    },
                    _timer: {
                        value: null,
                        writable: !0
                    },
                    _onIceConnectionStateChanged: {
                        value: null,
                        writable: !0
                    }
                })
            }
            return r(e, [{
                key: "_getActivePairStat",
                value: function(e) {
                    var t = Array.from(e.values());
                    return t.find(function(e) {
                        return "inbound-rtp" === e.type
                    }) ? t.find(function(e) {
                        return "candidate-pair" === e.type && e.nominated
                    }) || {
                        bytesReceived: 0,
                        timestamp: Math.round((new Date).getTime())
                    } : null
                }
            }, {
                key: "_getIceConnectionStats",
                value: function() {
                    var e = this;
                    return this._peerConnection.getStats().then(function(t) {
                        return e._getActivePairStat(t)
                    }).catch(function() {
                        return null
                    })
                }
            }, {
                key: "_scheduleInactivityCallback",
                value: function(e) {
                    var t = this;
                    e && null === this._onIceConnectionStateChanged ? (this._onIceConnectionStateChanged = function() {
                        "disconnected" === t._peerConnection.iceConnectionState && e()
                    }, this._peerConnection.addEventListener("iceconnectionstatechange", this._onIceConnectionStateChanged)) : !e && this._onIceConnectionStateChanged && (this._peerConnection.removeEventListener("iceconnectionstatechange", this._onIceConnectionStateChanged), this._onIceConnectionStateChanged = null)
                }
            }, {
                key: "start",
                value: function(e) {
                    var t = this;
                    this.stop(), this._timer = setInterval(function() {
                        t._getIceConnectionStats().then(function(n) {
                            n && (t._lastActivity && t._lastActivity.bytesReceived === n.bytesReceived || (t._lastActivity = n, t._scheduleInactivityCallback(null)), n.timestamp - t._lastActivity.timestamp >= t._inactivityThresholdMs && ("disconnected" === t._peerConnection.iceConnectionState ? e() : null === t._onIceConnectionStateChanged && t._scheduleInactivityCallback(e)))
                        })
                    }, this._activityCheckPeriodMs)
                }
            }, {
                key: "stop",
                value: function() {
                    this._scheduleInactivityCallback(null), null !== this._timer && (clearInterval(this._timer), this._timer = null, this._lastActivity = null)
                }
            }]), e
        }();
    e.exports = c
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(68),
        o = n(170),
        a = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e.label, e.maxPacketLifeTime, e.maxRetransmits, e.ordered));
                return Object.defineProperties(n, {
                    _dataChannel: {
                        value: e
                    }
                }), e.binaryType = "arraybuffer", e.addEventListener("message", function(e) {
                    n.emit("message", e.data)
                }), e.addEventListener("close", function() {
                    n.emit("close")
                }), n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i), r(t, [{
                key: "stop",
                value: function() {
                    this._dataChannel.close(),
                        function e(t, n, r) {
                            null === t && (t = Function.prototype);
                            var i = Object.getOwnPropertyDescriptor(t, n);
                            if (void 0 === i) {
                                var o = Object.getPrototypeOf(t);
                                return null === o ? void 0 : e(o, n, r)
                            }
                            if ("value" in i) return i.value;
                            var a = i.get;
                            return void 0 !== a ? a.call(r) : void 0
                        }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "stop", this).call(this)
                }
            }, {
                key: "toDataTransport",
                value: function() {
                    return new o(this._dataChannel)
                }
            }]), t
        }();
    e.exports = a
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(3).EventEmitter,
        o = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return Object.defineProperties(n, {
                    _dataChannel: {
                        value: e
                    },
                    _messageQueue: {
                        value: []
                    }
                }), e.addEventListener("open", function() {
                    n._messageQueue.splice(0).forEach(function(e) {
                        return n._publish(e)
                    })
                }), e.addEventListener("message", function(e) {
                    var t = e.data;
                    try {
                        var r = JSON.parse(t);
                        n.emit("message", r)
                    } catch (e) {}
                }), n.publish({
                    type: "ready"
                }), n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i), r(t, [{
                key: "_publish",
                value: function(e) {
                    var t = JSON.stringify(e);
                    try {
                        this._dataChannel.send(t)
                    } catch (e) {}
                }
            }, {
                key: "publish",
                value: function(e) {
                    var t = this._dataChannel;
                    return "closing" !== t.readyState && "closed" !== t.readyState && ("connecting" === t.readyState ? (this._messageQueue.push(e), !0) : (this._publish(e), !0))
                }
            }]), t
        }();
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = n(65),
        i = function(e) {
            function t(e, n) {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, r), t
        }();
    e.exports = i
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = function() {
        function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        return r(e, [{
            key: "match",
            value: function(e) {
                return e.track.id
            }
        }, {
            key: "update",
            value: function() {}
        }]), e
    }();
    e.exports = i
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(1),
        o = n(22).getMediaSections;

    function a() {
        return {
            matched: new Set,
            unmatched: new Set
        }
    }
    var c = function() {
        function e() {
            if (function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), !(this instanceof e)) return new e;
            Object.defineProperties(this, {
                audio: {
                    enumerable: !0,
                    value: a()
                },
                video: {
                    enumerable: !0,
                    value: a()
                }
            })
        }
        return r(e, [{
            key: "match",
            value: function(e) {
                return function(e) {
                    var t = Array.from(e.unmatched);
                    if (!t.length) return null;
                    var n = t[0];
                    return e.matched.add(n), e.unmatched.delete(n), n
                }(this[e.track.kind])
            }
        }, {
            key: "update",
            value: function(e) {
                ["audio", "video"].forEach(function(t) {
                    var n, r;
                    n = this[t], r = function(e, t) {
                        var n = o(t, e);
                        return new Set(i.flatMap(n, function(e) {
                            return e.match(new RegExp("msid: ?(.+) +(.+) ?$", "mg")) || []
                        }).map(function(e) {
                            return e.match(new RegExp("msid: ?(.+) +(.+) ?$"))[2]
                        }))
                    }(t, e), r = new Set(r), i.difference(n.matched, r).forEach(n.matched.delete, n.matched), n.unmatched = i.difference(r, n.matched)
                }, this)
            }
        }]), e
    }();
    e.exports = c
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(22).getMediaSections,
        o = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), Object.defineProperties(this, {
                    _midsToTrackIds: {
                        value: new Map,
                        writable: !0
                    }
                })
            }
            return r(e, [{
                key: "match",
                value: function(e) {
                    return this._midsToTrackIds.get(e.transceiver.mid) || null
                }
            }, {
                key: "update",
                value: function(e) {
                    var t = i(e, "(audio|video)");
                    this._midsToTrackIds = t.reduce(function(e, t) {
                        var n = t.match(/^a=mid:(.+)$/m) || [],
                            r = t.match(/^a=msid:.+ (.+)$/m) || [],
                            i = n[1],
                            o = r[1];
                        return i && o ? e.set(i, o) : e
                    }, this._midsToTrackIds)
                }
            }]), e
        }();
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = n(8).RTCSessionDescription,
        i = n(22).createPtToCodecName,
        o = n(22).getMediaSections;

    function a(e) {
        var t = i(e);
        e = function(e, t) {
            return Array.from(t.keys()).reduce(function(e, n) {
                var r = new RegExp("^a=rtpmap:" + n + " rtx.+$", "gm");
                return (e.match(r) || []).slice("rtx" === t.get(n) ? 1 : 0).reduce(function(e, t) {
                    var r = new RegExp("\r\n" + t),
                        i = new RegExp("\r\na=fmtp:" + n + " apt=[0-9]+");
                    return e.replace(r, "").replace(i, "")
                }, e)
            }, e)
        }(e, t);
        var n = function(e) {
                var t = new Map;
                return e.forEach(function(e, n) {
                    var r = t.get(e) || new Set;
                    return t.set(e, r.add(n))
                }), t
            }(t),
            r = n.get("rtx") || new Set,
            o = new Set,
            a = function(e, t) {
                var n = Array.from(e).reduce(function(e, t) {
                    var n = t[0],
                        r = t[1],
                        i = e.get(r) || new Set;
                    return e.set(r, i.add(n))
                }, new Map);
                return Array.from(n).reduce(function(e, n) {
                    var r = n[0],
                        i = Array.from(n[1]);
                    return i.length > 1 ? (i.forEach(function(e) {
                        t.add(e)
                    }), e) : e.set(r, i[0])
                }, new Map)
            }(function(e, t, n, r) {
                return Array.from(n).reduce(function(n, i) {
                    var o = new RegExp("a=fmtp:" + i + " apt=(\\d+)"),
                        a = e.match(o);
                    if (!a) return r.add(i), n;
                    var c = Number.parseInt(a[1]);
                    if (!t.has(c)) return r.add(i), n;
                    var s = t.get(c);
                    return "rtx" === s ? (r.add(i), n) : n.set(i, c)
                }, new Map)
            }(e, t, r, o), o),
            s = Array.from(o);
        return ["h264", "vp8", "vp9"].reduce(function(e, t) {
            var r = n.get(t) || new Set;
            return Array.from(r).reduce(function(e, t) {
                return a.has(t) ? e : e.add(t)
            }, e)
        }, new Set).forEach(function(t) {
            if (s.length) {
                var n = s.shift();
                e = function(e, t, n) {
                    return e.endsWith("\r\n") ? e + "a=fmtp:" + t + " apt=" + n + "\r\n" : e + "\r\na=fmtp:" + t + " apt=" + n
                }(e = c(e, n), n, t)
            }
        }), s.forEach(function(t) {
            e = function(e, t) {
                var n = new RegExp("a=rtpmap:" + t + ".*\r\n", "gm");
                return e.replace(n, "")
            }(e = c(e, t), t)
        }), e
    }

    function c(e, t) {
        var n = new RegExp("a=fmtp:" + t + ".*\r\n", "gm");
        return e.replace(n, "")
    }
    e.exports = function(e) {
        var t, n, i = {
            type: e.type
        };
        return "rollback" !== e.type && (i.sdp = (t = e.sdp, n = o(t), [t.split("\r\nm=")[0]].concat(n.map(a)).join("\r\n"))), new r(i)
    }
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();

    function i(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }
    var o = n(3).EventEmitter,
        a = function(e) {
            function t() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var e = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return Object.defineProperties(e, {
                    _queuedEvents: {
                        value: new Map
                    }
                }), e
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o), r(t, [{
                key: "dequeue",
                value: function(e) {
                    var t = this,
                        n = !0;
                    if (!e) return this._queuedEvents.forEach(function(e, t) {
                        n = this.dequeue(t) && n
                    }, this), n;
                    var r = this._queuedEvents.get(e) || [];
                    return this._queuedEvents.delete(e), r.reduce(function(n, r) {
                        return t.emit.apply(t, i([e].concat(r))) && n
                    }, n)
                }
            }, {
                key: "queue",
                value: function() {
                    var e = [].slice.call(arguments);
                    if (this.emit.apply(this, i(e))) return !0;
                    var t = e[0];
                    return this._queuedEvents.has(t) || this._queuedEvents.set(t, []), this._queuedEvents.get(t).push(e.slice(1)), !1
                }
            }]), t
        }();
    e.exports = a
}, function(e, t, n) {
    "use strict";
    var r = function() {
            return function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return function(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !r && c.return && c.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
    var o = n(178),
        a = n(179),
        c = n(186),
        s = n(188),
        u = n(89),
        l = n(189),
        f = n(74),
        p = n(201),
        d = n(202),
        h = n(1),
        v = h.constants.DEFAULT_SESSION_TIMEOUT_SEC,
        y = h.createBandwidthProfilePayload,
        b = h.defer,
        m = h.filterObject,
        _ = h.flatMap,
        g = h.oncePerTick,
        k = n(12).createTwilioError,
        w = 1e4,
        S = function(e) {
            function t(e, n, r, i, u) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), n.options = Object.assign({
                    session_timeout: v
                }, n.options), u = Object.assign({
                    DominantSpeakerSignaling: o,
                    NetworkQualityMonitor: a,
                    NetworkQualitySignaling: c,
                    RecordingSignaling: s,
                    RemoteParticipantV2: l,
                    TrackPrioritySignaling: p,
                    TrackSwitchOffSignaling: d,
                    bandwidthProfile: null,
                    sessionTimeout: 1e3 * n.options.session_timeout,
                    statsPublishIntervalMs: w
                }, u), e.setBandwidthProfile(u.bandwidthProfile), i.setIceReconnectTimeout(u.sessionTimeout);
                var h = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n.sid, n.name, u));
                return Object.defineProperties(h, {
                        _dominantSpeakerSignaling: {
                            value: null,
                            writable: !0
                        },
                        _DominantSpeakerSignaling: {
                            value: u.DominantSpeakerSignaling
                        },
                        _dominantSpeakerSignalingPromise: {
                            value: null,
                            writable: !0
                        },
                        _disconnectedParticipantSids: {
                            value: new Set
                        },
                        _NetworkQualityMonitor: {
                            value: u.NetworkQualityMonitor
                        },
                        _NetworkQualitySignaling: {
                            value: u.NetworkQualitySignaling
                        },
                        _lastBandwidthProfileRevision: {
                            value: e.bandwidthProfileRevision,
                            writable: !0
                        },
                        _networkQualityMonitor: {
                            value: null,
                            writable: !0
                        },
                        _networkQualityMonitorPromise: {
                            value: null,
                            writable: !0
                        },
                        _networkQualityConfiguration: {
                            value: e.networkQualityConfiguration
                        },
                        _peerConnectionManager: {
                            value: i
                        },
                        _published: {
                            value: new Map
                        },
                        _publishedRevision: {
                            value: 0,
                            writable: !0
                        },
                        _RemoteParticipantV2: {
                            value: u.RemoteParticipantV2
                        },
                        _subscribed: {
                            value: new Map
                        },
                        _subscribedRevision: {
                            value: 0,
                            writable: !0
                        },
                        _subscriptionFailures: {
                            value: new Map
                        },
                        _trackPriorityPromise: {
                            value: null,
                            writable: !0
                        },
                        _trackPrioritySignaling: {
                            value: null,
                            writable: !0
                        },
                        _trackSwitchOffPromise: {
                            value: null,
                            writable: !0
                        },
                        _trackSwitchOffSignaling: {
                            value: null,
                            writable: !0
                        },
                        _TrackPrioritySignaling: {
                            value: u.TrackPrioritySignaling
                        },
                        _TrackSwitchOffSignaling: {
                            value: u.TrackSwitchOffSignaling
                        },
                        _transport: {
                            value: r
                        },
                        _trackReceiverDeferreds: {
                            value: new Map
                        },
                        mediaRegion: {
                            enumerable: !0,
                            value: n.options.media_region || null
                        }
                    }),
                    function(e, t) {
                        var n = g(function() {
                                e._publishNewLocalParticipantState()
                            }),
                            r = g(function() {
                                var n = _(t.tracks, function(e) {
                                    return e.trackTransceiver
                                });
                                e._peerConnectionManager.setTrackSenders(n)
                            });
                        t.on("trackAdded", r), t.on("trackRemoved", r), t.on("updated", n), e.on("stateChanged", function i(o) {
                            "disconnected" === o && (t.removeListener("trackAdded", r), t.removeListener("trackRemoved", r), t.removeListener("updated", n), e.removeListener("stateChanged", i), t.disconnect())
                        }), e.on("signalingConnectionStateChanged", function() {
                            var t = e.localParticipant,
                                n = e.signalingConnectionState,
                                r = t.identity,
                                i = t.sid;
                            switch (n) {
                                case "connected":
                                    t.connect(i, r);
                                    break;
                                case "reconnecting":
                                    t.reconnecting()
                            }
                        })
                    }(h, e),
                    function(e, t) {
                        t.on("description", function(t) {
                            e._publishPeerConnectionState(t)
                        }), t.dequeue("description"), t.on("candidates", function(t) {
                            e._publishPeerConnectionState(t)
                        }), t.dequeue("candidates"), t.on("trackAdded", e._addTrackReceiver.bind(e)), t.dequeue("trackAdded"), t.getTrackReceivers().forEach(e._addTrackReceiver, e), t.on("connectionStateChanged", function() {
                            e.emit("connectionStateChanged")
                        }), t.on("iceConnectionStateChanged", function() {
                            e.emit("iceConnectionStateChanged"), "failed" === e.iceConnectionState && (null !== e.localParticipant.networkQualityLevel && e.localParticipant.setNetworkQualityLevel(0), e.participants.forEach(function(e) {
                                null !== e.networkQualityLevel && e.setNetworkQualityLevel(0)
                            }))
                        })
                    }(h, i),
                    function(e, t) {
                        t.on("message", e._update.bind(e)), t.on("stateChanged", function n(r, i) {
                            "disconnected" === r && ("disconnected" !== e.state && e._disconnect(i), t.removeListener("stateChanged", n)), e.emit("signalingConnectionStateChanged")
                        })
                    }(h, r),
                    function(e, t, n) {
                        var r = !1,
                            i = setInterval(function() {
                                e.getStats().then(function(e) {
                                    r = !r, e.forEach(function(e, n) {
                                        var i = new f(n, e, !0);
                                        if (t.publishEvent("quality", "stats-report", {
                                                audioTrackStats: i.remoteAudioTrackStats,
                                                localAudioTrackStats: i.localAudioTrackStats,
                                                localVideoTrackStats: i.localVideoTrackStats,
                                                peerConnectionId: i.peerConnectionId,
                                                videoTrackStats: i.remoteVideoTrackStats
                                            }), r) {
                                            var o = function(e, t) {
                                                return (e = Object.assign({
                                                    availableIncomingBitrate: 0,
                                                    availableOutgoingBitrate: 0,
                                                    bytesReceived: 0,
                                                    bytesSent: 0,
                                                    consentRequestsSent: 0,
                                                    currentRoundTripTime: 0,
                                                    lastPacketReceivedTimestamp: 0,
                                                    lastPacketSentTimestamp: 0,
                                                    nominated: !1,
                                                    peerConnectionId: t,
                                                    priority: 0,
                                                    readable: !1,
                                                    requestsReceived: 0,
                                                    requestsSent: 0,
                                                    responsesReceived: 0,
                                                    responsesSent: 0,
                                                    retransmissionsReceived: 0,
                                                    retransmissionsSent: 0,
                                                    state: "failed",
                                                    totalRoundTripTime: 0,
                                                    transportId: "",
                                                    writable: !1
                                                }, m(e || {}, null))).localCandidate = Object.assign({
                                                    candidateType: "host",
                                                    deleted: !1,
                                                    ip: "",
                                                    port: 0,
                                                    priority: 0,
                                                    protocol: "udp",
                                                    relayProtocol: "udp",
                                                    url: ""
                                                }, m(e.localCandidate || {}, null)), e.remoteCandidate = Object.assign({
                                                    candidateType: "host",
                                                    ip: "",
                                                    port: 0,
                                                    priority: 0,
                                                    protocol: "udp",
                                                    url: ""
                                                }, m(e.remoteCandidate || {}, null)), e
                                            }(e.activeIceCandidatePair, i.peerConnectionId);
                                            t.publishEvent("quality", "active-ice-candidate-pair", o)
                                        }
                                    })
                                }, function() {})
                            }, n);
                        e.on("stateChanged", function t(n) {
                            "disconnected" === n && (clearInterval(i), e.removeListener("stateChanged", t))
                        })
                    }(h, r, u.statsPublishIntervalMs), h._update(n), h
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, u), i(t, [{
                key: "_deleteTrackReceiverDeferred",
                value: function(e) {
                    return this._trackReceiverDeferreds.delete(e)
                }
            }, {
                key: "_getOrCreateTrackReceiverDeferred",
                value: function(e) {
                    var t = this._trackReceiverDeferreds.get(e) || b(),
                        n = this._peerConnectionManager.getTrackReceivers().find(function(t) {
                            return t.id === e && "ended" !== t.readyState
                        });
                    return n ? t.resolve(n) : this._trackReceiverDeferreds.set(e, t), t
                }
            }, {
                key: "_addTrackReceiver",
                value: function(e) {
                    return this._getOrCreateTrackReceiverDeferred(e.id).resolve(e), this
                }
            }, {
                key: "_disconnect",
                value: function(e) {
                    var n = function e(t, n, r) {
                        null === t && (t = Function.prototype);
                        var i = Object.getOwnPropertyDescriptor(t, n);
                        if (void 0 === i) {
                            var o = Object.getPrototypeOf(t);
                            return null === o ? void 0 : e(o, n, r)
                        }
                        if ("value" in i) return i.value;
                        var a = i.get;
                        return void 0 !== a ? a.call(r) : void 0
                    }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_disconnect", this).call(this, e);
                    return n && (this._teardownDominantSpeakerSignaling(), this._teardownNetworkQualityMonitor(), this._transport.disconnect(), this._peerConnectionManager.close()), this.localParticipant.tracks.forEach(function(t) {
                        t.publishFailed(e || new Error("LocalParticipant disconnected"))
                    }), n
                }
            }, {
                key: "_getTrackReceiver",
                value: function(e) {
                    var t = this;
                    return this._getOrCreateTrackReceiverDeferred(e).promise.then(function(n) {
                        return t._deleteTrackReceiverDeferred(e), n
                    })
                }
            }, {
                key: "_getTrackSidsToTrackSignalings",
                value: function() {
                    var e = _(this.participants, function(e) {
                        return Array.from(e.tracks)
                    });
                    return new Map(e)
                }
            }, {
                key: "_getOrCreateRemoteParticipant",
                value: function(e) {
                    var t = this._RemoteParticipantV2,
                        n = this.participants.get(e.sid),
                        r = this;
                    return n || ((n = new t(e, this._getTrackReceiver.bind(this))).on("stateChanged", function e(t) {
                        "disconnected" === t && (n.removeListener("stateChanged", e), r.participants.delete(n.sid), r._disconnectedParticipantSids.add(n.sid))
                    }), this.connectParticipant(n), n.setTrackPrioritySignaling(this._trackPrioritySignaling)), n
                }
            }, {
                key: "_getState",
                value: function() {
                    return {
                        participant: this.localParticipant.getState()
                    }
                }
            }, {
                key: "_maybeAddBandwidthProfile",
                value: function(e) {
                    var t = this.localParticipant,
                        n = t.bandwidthProfile,
                        r = t.bandwidthProfileRevision;
                    return n && this._lastBandwidthProfileRevision < r ? (this._lastBandwidthProfileRevision = r, Object.assign({
                        bandwidth_profile: y(n)
                    }, e)) : e
                }
            }, {
                key: "_publishNewLocalParticipantState",
                value: function() {
                    this._transport.publish(this._maybeAddBandwidthProfile(this._getState()))
                }
            }, {
                key: "_publishPeerConnectionState",
                value: function(e) {
                    this._transport.publish(Object.assign({
                        peer_connections: [e]
                    }, this._getState()))
                }
            }, {
                key: "_update",
                value: function(e) {
                    var t = this;
                    if (e.subscribed && e.subscribed.revision > this._subscribedRevision) {
                        this._subscribedRevision = e.subscribed.revision, e.subscribed.tracks.forEach(function(e) {
                            e.id ? (t._subscriptionFailures.delete(e.sid), t._subscribed.set(e.sid, e.id)) : e.error && !t._subscriptionFailures.has(e.sid) && t._subscriptionFailures.set(e.sid, e.error)
                        });
                        var n = new Set(e.subscribed.tracks.filter(function(e) {
                            return !!e.id
                        }).map(function(e) {
                            return e.sid
                        }));
                        this._subscribed.forEach(function(e, r) {
                            n.has(r) || t._subscribed.delete(r)
                        })
                    }
                    var r, i, o = new Set;
                    return (e.participants || []).forEach(function(e) {
                        if (e.sid !== t.localParticipant.sid && !t._disconnectedParticipantSids.has(e.sid)) {
                            var n = t._getOrCreateRemoteParticipant(e);
                            n.update(e), o.add(n)
                        }
                    }), "synced" === e.type && this.participants.forEach(function(e) {
                        o.has(e) || e.disconnect()
                    }), i = (r = this)._getTrackSidsToTrackSignalings(), r._subscriptionFailures.forEach(function(e, t) {
                        var n = i.get(t);
                        n && (r._subscriptionFailures.delete(t), n.subscribeFailed(k(e.code, e.message)))
                    }), i.forEach(function(e) {
                        var t = r._subscribed.get(e.sid);
                        (!t || e.isSubscribed && e.trackTransceiver.id !== t) && e.setTrackTransceiver(null), t && r._getTrackReceiver(t).then(function(t) {
                            return e.setTrackTransceiver(t)
                        })
                    }), e.peer_connections && this._peerConnectionManager.update(e.peer_connections, "synced" === e.type), e.recording && this.recording.update(e.recording), e.published && e.published.revision > this._publishedRevision && (this._publishedRevision = e.published.revision, e.published.tracks.forEach(function(e) {
                        e.sid && t._published.set(e.id, e.sid)
                    }), this.localParticipant.update(e.published)), e.participant && this.localParticipant.connect(e.participant.sid, e.participant.identity), !this._dominantSpeakerSignalingPromise && e.media_signaling && e.media_signaling.active_speaker && e.media_signaling.active_speaker.transport && "data-channel" === e.media_signaling.active_speaker.transport.type && this._setupDataTransportBackedDominantSpeakerSignaling(e.media_signaling.active_speaker.transport.label), !this._networkQualityMonitorPromise && e.media_signaling && e.media_signaling.network_quality && e.media_signaling.network_quality.transport && "data-channel" === e.media_signaling.network_quality.transport.type && this._setupDataTransportBackedNetworkQualityMonitor(e.media_signaling.network_quality.transport.label), !this._trackPriorityPromise && e.media_signaling && e.media_signaling.track_priority && e.media_signaling.track_priority.transport && "data-channel" === e.media_signaling.track_priority.transport.type && this._setupTrackPrioritySignaling(e.media_signaling.track_priority.transport.label), !this._trackSwitchOffPromise && e.media_signaling && e.media_signaling.track_switch_off && e.media_signaling.track_switch_off.transport && "data-channel" === e.media_signaling.track_switch_off.transport.type && this._setupTrackSwitchOffMonitor(e.media_signaling.track_switch_off.transport.label), this
                }
            }, {
                key: "_setupTrackPrioritySignaling",
                value: function(e) {
                    var t = this;
                    this._teardownTrackPrioritySignaling();
                    var n = this._getTrackReceiver(e).then(function(e) {
                        if ("data" !== e.kind) throw new Error("Expected a DataTrackReceiver");
                        t._trackPriorityPromise === n && (e.once("close", function() {
                            return t._teardownTrackPrioritySignaling()
                        }), t._trackPrioritySignaling = new t._TrackPrioritySignaling(e.toDataTransport()), [].concat(function(e) {
                            if (Array.isArray(e)) {
                                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                                return n
                            }
                            return Array.from(e)
                        }(t.participants.values())).forEach(function(e) {
                            e.setTrackPrioritySignaling(t._trackPrioritySignaling)
                        }))
                    });
                    this._trackPriorityPromise = n
                }
            }, {
                key: "_setupTrackSwitchOff",
                value: function(e) {
                    var t = this;
                    this._trackSwitchOffSignaling = e, e.on("updated", function(e, n) {
                        t.participants.forEach(function(t) {
                            t.tracks.forEach(function(t) {
                                e.includes(t.sid) && t.setSwitchedOff(!0), n.includes(t.sid) && t.setSwitchedOff(!1)
                            })
                        })
                    })
                }
            }, {
                key: "_setupTrackSwitchOffMonitor",
                value: function(e) {
                    var t = this;
                    this._teardownTrackSwitchOff();
                    var n = this._getTrackReceiver(e).then(function(e) {
                        if ("data" !== e.kind) throw new Error("Expected a DataTrackReceiver");
                        if (t._trackSwitchOffPromise === n) {
                            e.once("close", function() {
                                return t._teardownTrackSwitchOff()
                            });
                            var r = new t._TrackSwitchOffSignaling(e.toDataTransport());
                            t._setupTrackSwitchOff(r)
                        }
                    });
                    this._trackSwitchOffPromise = n
                }
            }, {
                key: "_setupDataTransportBackedDominantSpeakerSignaling",
                value: function(e) {
                    var t = this;
                    this._teardownDominantSpeakerSignaling();
                    var n = this._getTrackReceiver(e).then(function(e) {
                        if ("data" !== e.kind) throw new Error("Expected a DataTrackReceiver");
                        if (t._dominantSpeakerSignalingPromise === n) {
                            e.once("close", function() {
                                return t._teardownDominantSpeakerSignaling()
                            });
                            var r = new t._DominantSpeakerSignaling(e.toDataTransport());
                            t._setDominantSpeakerSignaling(r)
                        }
                    });
                    this._dominantSpeakerSignalingPromise = n
                }
            }, {
                key: "_setupDataTransportBackedNetworkQualityMonitor",
                value: function(e) {
                    var t = this,
                        n = this;
                    this._teardownNetworkQualityMonitor();
                    var r = this._getTrackReceiver(e).then(function(e) {
                        if ("data" !== e.kind) throw new Error("Expected a DataTrackReceiver");
                        if (t._networkQualityMonitorPromise === r) {
                            e.once("close", function() {
                                return t._teardownNetworkQualityMonitor()
                            });
                            var i = new t._NetworkQualitySignaling(e.toDataTransport(), n._networkQualityConfiguration),
                                o = new t._NetworkQualityMonitor(t._peerConnectionManager, i);
                            t._setNetworkQualityMonitor(o)
                        }
                    });
                    this._networkQualityMonitorPromise = r
                }
            }, {
                key: "_setDominantSpeakerSignaling",
                value: function(e) {
                    var t = this;
                    this._dominantSpeakerSignaling = e, e.on("updated", function() {
                        return t.setDominantSpeaker(e.loudestParticipantSid)
                    })
                }
            }, {
                key: "_setNetworkQualityMonitor",
                value: function(e) {
                    var t = this;
                    this._networkQualityMonitor = e, e.on("updated", function() {
                        "failed" !== t.iceConnectionState && (t.localParticipant.setNetworkQualityLevel(e.level, e.levels), t.participants.forEach(function(t) {
                            var n = e.remoteLevels.get(t.sid);
                            n && t.setNetworkQualityLevel(n.level, n)
                        }))
                    }), e.start()
                }
            }, {
                key: "_teardownDominantSpeakerSignaling",
                value: function() {
                    this._dominantSpeakerSignalingPromise = null, this._dominantSpeakerSignaling = null
                }
            }, {
                key: "_teardownNetworkQualityMonitor",
                value: function() {
                    this._networkQualityMonitorPromise = null, this._networkQualityMonitor && (this._networkQualityMonitor.stop(), this._networkQualityMonitor = null)
                }
            }, {
                key: "_teardownTrackPrioritySignaling",
                value: function() {
                    this._trackPrioritySignaling = null, this._trackPriorityPromise = null, this.localParticipant.setTrackPrioritySignaling(null), this.participants.forEach(function(e) {
                        e.setTrackPrioritySignaling(null)
                    })
                }
            }, {
                key: "_teardownTrackSwitchOff",
                value: function() {
                    this._trackSwitchOffSignaling = null, this._trackSwitchOffPromise = null
                }
            }, {
                key: "getStats",
                value: function() {
                    var e = this;
                    return this._peerConnectionManager.getStats().then(function(t) {
                        return new Map(Array.from(t).map(function(t) {
                            var n = r(t, 2),
                                i = n[0],
                                o = n[1];
                            return [i, Object.assign({}, o, {
                                localAudioTrackStats: T(e, o.localAudioTrackStats),
                                localVideoTrackStats: T(e, o.localVideoTrackStats),
                                remoteAudioTrackStats: P(e, o.remoteAudioTrackStats),
                                remoteVideoTrackStats: P(e, o.remoteVideoTrackStats)
                            })]
                        }))
                    })
                }
            }, {
                key: "connectionState",
                get: function() {
                    return this._peerConnectionManager.connectionState
                }
            }, {
                key: "signalingConnectionState",
                get: function() {
                    return "syncing" === this._transport.state ? "reconnecting" : this._transport.state
                }
            }, {
                key: "iceConnectionState",
                get: function() {
                    return this._peerConnectionManager.iceConnectionState
                }
            }]), t
        }();

    function O(e, t) {
        return t.reduce(function(t, n) {
            var r = e.get(n.trackId);
            return r ? [Object.assign({}, n, {
                trackSid: r
            })].concat(t) : t
        }, [])
    }

    function T(e, t) {
        return O(e._published, t)
    }

    function P(e, t) {
        return O(new Map(Array.from(e._subscribed.entries()).map(function(e) {
            var t = r(e, 2),
                n = t[0];
            return [t[1], n]
        })), t)
    }
    e.exports = S
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(3).EventEmitter,
        o = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return Object.defineProperties(n, {
                    _loudestParticipantSid: {
                        value: null,
                        writable: !0
                    }
                }), e.on("message", function(e) {
                    switch (e.type) {
                        case "active_speaker":
                            n._setLoudestParticipantSid(e.participant)
                    }
                }), n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i), r(t, [{
                key: "_setLoudestParticipantSid",
                value: function(e) {
                    this.loudestParticipantSid !== e && (this._loudestParticipantSid = e, this.emit("updated"))
                }
            }, {
                key: "loudestParticipantSid",
                get: function() {
                    return this._loudestParticipantSid
                }
            }]), t
        }();
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = function() {
            return function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return function(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !r && c.return && c.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
    var o = n(3),
        a = n(180),
        c = function(e) {
            function t(e, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var r = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return Object.defineProperties(r, {
                    _factories: {
                        value: new WeakMap
                    },
                    _manager: {
                        value: e
                    },
                    _signaling: {
                        value: n
                    }
                }), n.on("updated", function() {
                    return r.emit("updated")
                }), r
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o), i(t, [{
                key: "start",
                value: function() {
                    var e = this;
                    this.stop();
                    var t = setTimeout(function() {
                        var n, i;
                        e._timeout === t && (n = e, i = (n._manager._peerConnections ? Array.from(n._manager._peerConnections.values()) : []).map(function(e) {
                            return e._peerConnection
                        }).filter(function(e) {
                            return "closed" !== e.signalingState
                        }).map(function(e) {
                            if (n._factories.has(e)) return n._factories.get(e);
                            var t = new a(e);
                            return n._factories.set(e, t), t
                        }).map(function(e) {
                            return e.next().catch(function() {
                                return null
                            })
                        }), Promise.all(i).then(function(e) {
                            return e.filter(function(e) {
                                return e
                            }).map(function(e) {
                                return e.summarize()
                            })
                        })).then(function(n) {
                            if (e._timeout === t) {
                                if (n.length) {
                                    var i = r(n, 1)[0];
                                    e._signaling.put(i)
                                }
                                e.start()
                            }
                        })
                    }, 200);
                    this._timeout = t
                }
            }, {
                key: "stop",
                value: function() {
                    clearTimeout(this._timeout), this._timeout = null
                }
            }, {
                key: "level",
                get: function() {
                    return this._signaling.level
                }
            }, {
                key: "levels",
                get: function() {
                    return this._signaling.levels
                }
            }, {
                key: "remoteLevels",
                get: function() {
                    return this._signaling.remoteLevels
                }
            }]), t
        }();
    e.exports = c
}, function(e, t, n) {
    "use strict";
    var r = function() {
            return function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return function(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !r && c.return && c.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();

    function o(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }
    var a = n(2).guessBrowser,
        c = n(181),
        s = n(183),
        u = n(184),
        l = n(185),
        f = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), Object.defineProperties(this, {
                    pc: {
                        enumerable: !0,
                        value: t
                    },
                    ice: {
                        enumerable: !0,
                        value: new c
                    },
                    audio: {
                        enumerable: !0,
                        value: {
                            send: new Map,
                            recv: new Map
                        }
                    },
                    video: {
                        enumerable: !0,
                        value: {
                            send: new Map,
                            recv: new Map
                        }
                    },
                    lastReport: {
                        enumerable: !0,
                        value: null,
                        writable: !0
                    }
                })
            }
            return i(e, [{
                key: "next",
                value: function() {
                    var e, t, n, i = this;
                    return ("firefox" === a() ? (t = (e = this).pc.getTransceivers().filter(function(e) {
                        return e.currentDirection && e.currentDirection.match(/send/) && e.sender.track
                    }).map(function(e) {
                        return e.sender
                    }), n = e.pc.getTransceivers().filter(function(e) {
                        return e.currentDirection && e.currentDirection.match(/recv/)
                    }).map(function(e) {
                        return e.receiver
                    }), Promise.all([p(t), p(n), e.pc.getStats()]).then(function(t) {
                        var n = r(t, 3),
                            i = n[0],
                            o = n[1],
                            a = n[2],
                            c = h(e),
                            s = m(e);
                        i.forEach(function(t, n) {
                            return g(e, t, s, n)
                        }), w(c, s);
                        var u = v(e),
                            l = _(e);
                        o.forEach(function(t, n) {
                            return k(e, t, l, n)
                        }), w(u, l), S(e.ice, a)
                    })) : function(e) {
                        return e.pc.getStats().then(function(t) {
                            var n = h(e),
                                r = m(e);
                            g(e, t, r), w(n, r);
                            var i = v(e),
                                o = _(e);
                            k(e, t, o), w(i, o), S(e.ice, t)
                        })
                    }(this)).then(function() {
                        var e = [].concat(o(i.audio.send.values())),
                            t = [].concat(o(i.video.send.values())),
                            n = [].concat(o(i.audio.recv.values())),
                            r = [].concat(o(i.video.recv.values())),
                            a = new s(i.ice.lastReport, {
                                send: e.map(function(e) {
                                    return e.lastReport
                                }).filter(function(e) {
                                    return e
                                }),
                                recv: n.map(function(e) {
                                    return e.lastReport
                                }).filter(function(e) {
                                    return e
                                })
                            }, {
                                send: t.map(function(e) {
                                    return e.lastReport
                                }).filter(function(e) {
                                    return e
                                }),
                                recv: r.map(function(e) {
                                    return e.lastReport
                                }).filter(function(e) {
                                    return e
                                })
                            });
                        return i.lastReport = a, a
                    })
                }
            }]), e
        }();

    function p(e) {
        return Promise.all(e.map(function(e) {
            var t = e.track.id;
            return e.getStats().then(function(e) {
                var n = !0,
                    r = !1,
                    i = void 0;
                try {
                    for (var o, a = e.values()[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                        var c = o.value;
                        "inbound-rtp" === c.type && (c.id = t + "-" + c.id)
                    }
                } catch (e) {
                    r = !0, i = e
                } finally {
                    try {
                        !n && a.return && a.return()
                    } finally {
                        if (r) throw i
                    }
                }
                return [t, e]
            })
        })).then(function(e) {
            return new Map(e)
        })
    }

    function d(e, t, n, r, i) {
        var o = t[r.mediaType];
        if (!i) {
            var a = n.get(r.trackId);
            a && (i = a.trackIdentifier)
        }
        if (o && i) {
            if (o.has(r.id)) return o.get(r.id);
            var c = new e(i, r);
            o.set(r.id, c)
        }
        return null
    }

    function h(e) {
        return {
            audio: e.audio.send,
            video: e.video.send
        }
    }

    function v(e) {
        return {
            audio: e.audio.recv,
            video: e.video.recv
        }
    }

    function y(e, t, n, r) {
        return d(l, h(e), t, n, r)
    }

    function b(e, t, n, r) {
        return d(u, v(e), t, n, r)
    }

    function m(e) {
        return {
            audio: new Set(e.audio.send.keys()),
            video: new Set(e.video.send.keys())
        }
    }

    function _(e) {
        return {
            audio: new Set(e.audio.recv.keys()),
            video: new Set(e.video.recv.keys())
        }
    }

    function g(e, t, n, r) {
        var i = !0,
            o = !1,
            c = void 0;
        try {
            for (var s, u = t.values()[Symbol.iterator](); !(i = (s = u.next()).done); i = !0) {
                var l = s.value;
                if ("outbound-rtp" === l.type && !l.isRemote) {
                    if ("firefox" !== a() && !l.trackId) continue;
                    var f = n[l.mediaType];
                    f && f.delete(l.id);
                    var p = y(e, t, l, r);
                    if (p) {
                        var d = t.get(l.remoteId);
                        p.next(r || p.trackId, l, d)
                    }
                }
            }
        } catch (e) {
            o = !0, c = e
        } finally {
            try {
                !i && u.return && u.return()
            } finally {
                if (o) throw c
            }
        }
    }

    function k(e, t, n, r) {
        var i = !0,
            o = !1,
            a = void 0;
        try {
            for (var c, s = t.values()[Symbol.iterator](); !(i = (c = s.next()).done); i = !0) {
                var u = c.value;
                if ("inbound-rtp" === u.type && !u.isRemote) {
                    var l = n[u.mediaType];
                    l && l.delete(u.id);
                    var f = b(e, t, u, r);
                    f && f.next(r || f.trackId, u)
                }
            }
        } catch (e) {
            o = !0, a = e
        } finally {
            try {
                !i && s.return && s.return()
            } finally {
                if (o) throw a
            }
        }
    }

    function w(e, t) {
        var n = function(n) {
            var r = e[n];
            t[n].forEach(function(e) {
                return r.delete(e)
            })
        };
        for (var r in t) n(r)
    }

    function S(e, t) {
        var n = void 0,
            r = !0,
            i = !1,
            o = void 0;
        try {
            for (var a, c = t.values()[Symbol.iterator](); !(r = (a = c.next()).done); r = !0) {
                var s = a.value;
                "transport" === s.type && (n = t.get(s.selectedCandidatePairId))
            }
        } catch (e) {
            i = !0, o = e
        } finally {
            try {
                !r && c.return && c.return()
            } finally {
                if (i) throw o
            }
        }
        if (n) e.next(n);
        else {
            var u = !0,
                l = !1,
                f = void 0;
            try {
                for (var p, d = t.values()[Symbol.iterator](); !(u = (p = d.next()).done); u = !0) {
                    var h = p.value;
                    "candidate-pair" !== h.type || !h.nominated || "selected" in h && !h.selected || e.next(h)
                }
            } catch (e) {
                l = !0, f = e
            } finally {
                try {
                    !u && d.return && d.return()
                } finally {
                    if (l) throw f
                }
            }
        }
    }
    e.exports = f
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(182),
        o = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), Object.defineProperties(this, {
                    lastReport: {
                        enumerable: !0,
                        value: new i(0, 0),
                        writable: !0
                    },
                    lastStats: {
                        enumerable: !0,
                        value: null,
                        writable: !0
                    }
                })
            }
            return r(e, [{
                key: "next",
                value: function(e) {
                    var t = this.lastStats;
                    if (this.lastStats = e, t) {
                        var n = t.id === e.id ? i.of(t, e) : new i(0, 0);
                        this.lastReport = n
                    }
                    return this.lastReport
                }
            }]), e
        }();
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = function() {
        function e(t, n, r, i) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), Object.defineProperties(this, {
                availableSend: {
                    enumerable: !0,
                    value: r
                },
                recv: {
                    enumerable: !0,
                    value: n
                },
                rtt: {
                    enumerable: !0,
                    value: i
                },
                send: {
                    enumerable: !0,
                    value: t
                }
            })
        }
        return r(e, null, [{
            key: "of",
            value: function(t, n) {
                var r = (n.timestamp - t.timestamp) / 1e3,
                    i = n.bytesSent - t.bytesSent,
                    o = n.bytesReceived - t.bytesReceived;
                return new e(r > 0 ? i / r * 8 : 0, r > 0 ? o / r * 8 : 0, n.availableOutgoingBitrate, n.currentRoundTripTime)
            }
        }]), e
    }();
    e.exports = i
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(82),
        o = n(86),
        a = function() {
            function e(t, n, r) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), Object.defineProperties(this, {
                    ice: {
                        enumerable: !0,
                        value: t
                    },
                    audio: {
                        enumerable: !0,
                        value: n
                    },
                    video: {
                        enumerable: !0,
                        value: r
                    }
                })
            }
            return r(e, [{
                key: "summarize",
                value: function() {
                    var e = this.audio.send.concat(this.video.send),
                        t = o.summarize(e),
                        n = this.audio.recv.concat(this.video.recv),
                        r = i.summarize(n);
                    return {
                        ice: this.ice,
                        send: t,
                        recv: r,
                        audio: {
                            send: o.summarize(this.audio.send),
                            recv: i.summarize(this.audio.recv)
                        },
                        video: {
                            send: o.summarize(this.video.send),
                            recv: i.summarize(this.video.recv)
                        }
                    }
                }
            }]), e
        }();
    e.exports = a
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(82),
        o = n(87),
        a = function(e) {
            function t(e, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var r = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n.id, e, n));
                return Object.defineProperties(r, {
                    lastReport: {
                        enumerable: !0,
                        value: null,
                        writable: !0
                    }
                }), r
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o), r(t, [{
                key: "next",
                value: function(e, t) {
                    var n = this.lastStats;
                    this.lastStats = t, this.trackId = e;
                    var r = i.of(e, n, t);
                    return this.lastReport = r, r
                }
            }]), t
        }();
    e.exports = a
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(87),
        o = n(86),
        a = function(e) {
            function t(e, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var r = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n.id, e, n));
                return Object.defineProperties(r, {
                    lastReport: {
                        enumerable: !0,
                        value: null,
                        writable: !0
                    }
                }), r
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i), r(t, [{
                key: "next",
                value: function(e, t, n) {
                    var r = this.lastStats;
                    this.lastStats = t, this.trackId = e;
                    var i = o.of(e, r, t, n);
                    return this.lastReport = i, i
                }
            }]), t
        }();
    e.exports = a
}, function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
    var o = n(3).EventEmitter,
        a = n(187),
        c = function(e) {
            function t(e, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var r = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return Object.defineProperties(r, {
                    _level: {
                        value: null,
                        writable: !0
                    },
                    _levels: {
                        value: null,
                        writable: !0
                    },
                    _remoteLevels: {
                        value: new Map,
                        writable: !0
                    },
                    _mediaSignalingTransport: {
                        value: e
                    },
                    _networkQualityInputs: {
                        value: new a
                    },
                    _networkQualityReportLevels: {
                        get: function() {
                            return {
                                reportLevel: n.local,
                                remoteReportLevel: n.remote
                            }
                        }
                    }
                }), e.on("message", function(e) {
                    switch (e.type) {
                        case "network_quality":
                            r._handleNetworkQualityMessage(e)
                    }
                }), r._sendNetworkQualityInputs(), r
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o), i(t, [{
                key: "_handleNetworkQualityMessage",
                value: function(e) {
                    var t = this,
                        n = !1,
                        i = null,
                        o = e ? e.local : null;
                    "number" == typeof o ? (i = o, this._levels = null) : "object" === (void 0 === o ? "undefined" : r(o)) && o && (this._levels = o, i = "number" == typeof o.level ? o.level : Math.min(o.audio.send, o.audio.recv, o.video.send, o.video.recv)), null !== i && this.level !== i && (this._level = i, n = !0), this._remoteLevels = e && e.remotes ? e.remotes.reduce(function(e, r) {
                        return (t._remoteLevels.get(r.sid) || {}).level !== r.level && (n = !0), e.set(r.sid, r)
                    }, new Map) : this._remoteLevels, n && this.emit("updated"), setTimeout(function() {
                        return t._sendNetworkQualityInputs()
                    }, 1e3)
                }
            }, {
                key: "_sendNetworkQualityInputs",
                value: function() {
                    var e = this;
                    return this._networkQualityInputs.take().then(function(t) {
                        e._mediaSignalingTransport.publish(function(e, t) {
                            return Object.assign({
                                type: "network_quality"
                            }, e, t)
                        }(t, e._networkQualityReportLevels))
                    })
                }
            }, {
                key: "put",
                value: function(e) {
                    this._networkQualityInputs.put(e)
                }
            }, {
                key: "level",
                get: function() {
                    return this._level
                }
            }, {
                key: "levels",
                get: function() {
                    return this._levels
                }
            }, {
                key: "remoteLevels",
                get: function() {
                    return this._remoteLevels
                }
            }]), t
        }();
    e.exports = c
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(1).defer,
        o = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), Object.defineProperties(this, {
                    _deferreds: {
                        value: []
                    },
                    _hasValue: {
                        value: !1,
                        writable: !0
                    },
                    _value: {
                        value: null,
                        writable: !0
                    }
                })
            }
            return r(e, [{
                key: "put",
                value: function(e) {
                    this._hasValue = !0, this._value = e;
                    var t = this._deferreds.shift();
                    return t && t.resolve(e), this
                }
            }, {
                key: "take",
                value: function() {
                    var e = this;
                    if (this._hasValue && !this._deferreds.length) return this._hasValue = !1, Promise.resolve(this._value);
                    var t = i();
                    return this._deferreds.push(t), t.promise.then(function(t) {
                        return e._hasValue = !1, t
                    })
                }
            }]), e
        }();
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(88),
        o = function(e) {
            function t() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var e = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return Object.defineProperties(e, {
                    _revision: {
                        value: 1,
                        writable: !0
                    }
                }), e
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i), r(t, [{
                key: "update",
                value: function(e) {
                    return e.revision < this._revision ? this : (this._revision = e.revision, this.enable(e.is_recording))
                }
            }]), t
        }();
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();

    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    var o = n(190),
        a = n(199),
        c = function(e) {
            function t(e, n, r) {
                var o;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var c = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e.sid, e.identity));
                return r = Object.assign({
                    RemoteTrackPublicationV2: a
                }, r), Object.defineProperties(c, {
                    _revision: {
                        writable: !0,
                        value: null
                    },
                    _RemoteTrackPublicationV2: {
                        value: r.RemoteTrackPublicationV2
                    },
                    _getTrackReceiver: {
                        value: n
                    },
                    revision: {
                        enumerable: !0,
                        get: function() {
                            return this._revision
                        }
                    }
                }), o = c.update(e), i(c, o)
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o), r(t, [{
                key: "_getOrCreateTrack",
                value: function(e) {
                    var t = this._RemoteTrackPublicationV2,
                        n = this.tracks.get(e.sid);
                    return n || (n = new t(e), this.addTrack(n)), n
                }
            }, {
                key: "update",
                value: function(e) {
                    var t = this;
                    if (null !== this.revision && e.revision <= this.revision) return this;
                    this._revision = e.revision;
                    var n = new Set;
                    switch (e.tracks.forEach(function(e) {
                            var r = t._getOrCreateTrack(e);
                            r.update(e), n.add(r)
                        }), this.tracks.forEach(function(e) {
                            n.has(e) || t.removeTrack(e)
                        }), e.state) {
                        case "disconnected":
                            this.disconnect();
                            break;
                        case "reconnecting":
                            this.reconnecting();
                            break;
                        case "connected":
                            this.connect(this.sid, this.identity)
                    }
                    return this
                }
            }]), t
        }();
    e.exports = c
}, function(e, t, n) {
    "use strict";
    var r = n(40),
        i = function(e) {
            function t(e, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var r = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return r.connect(e, n), r
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, r), t
        }();
    e.exports = i
}, function(e, t, n) {
    "use strict";
    var r = n(192),
        i = n(198);
    e.exports = function e(t) {
        var n = t.level,
            o = t.audio,
            a = t.video;
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), Object.defineProperties(this, {
            level: {
                value: n,
                enumerable: !0
            },
            audio: {
                value: o ? new r(o) : null,
                enumerable: !0
            },
            video: {
                value: a ? new i(a) : null,
                enumerable: !0
            }
        })
    }
}, function(e, t, n) {
    "use strict";
    var r = n(90),
        i = function(e) {
            function t(e) {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, r), t
        }();
    e.exports = i
}, function(e, t, n) {
    "use strict";
    var r = n(91),
        i = function(e) {
            function t(e) {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, r), t
        }();
    e.exports = i
}, function(e, t, n) {
    "use strict";
    e.exports = function e(t) {
        var n = t.actual,
            r = void 0 === n ? null : n,
            i = t.available,
            o = void 0 === i ? null : i,
            a = t.level,
            c = void 0 === a ? null : a;
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), Object.defineProperties(this, {
            actual: {
                value: r,
                enumerable: !0
            },
            available: {
                value: o,
                enumerable: !0
            },
            level: {
                value: c,
                enumerable: !0
            }
        })
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function e(t) {
        var n = t.fractionLost,
            r = void 0 === n ? null : n,
            i = t.level,
            o = void 0 === i ? null : i;
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), Object.defineProperties(this, {
            fractionLost: {
                value: r,
                enumerable: !0
            },
            level: {
                value: o,
                enumerable: !0
            }
        })
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function e(t) {
        var n = t.jitter,
            r = void 0 === n ? null : n,
            i = t.rtt,
            o = void 0 === i ? null : i,
            a = t.level,
            c = void 0 === a ? null : a;
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), Object.defineProperties(this, {
            jitter: {
                value: r,
                enumerable: !0
            },
            rtt: {
                value: o,
                enumerable: !0
            },
            level: {
                value: c,
                enumerable: !0
            }
        })
    }
}, function(e, t, n) {
    "use strict";
    var r = n(91),
        i = function(e) {
            function t(e) {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, r), t
        }();
    e.exports = i
}, function(e, t, n) {
    "use strict";
    var r = n(90),
        i = function(e) {
            function t(e) {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, r), t
        }();
    e.exports = i
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(200),
        o = function(e) {
            function t(e) {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e.sid, e.name, e.kind, e.enabled, e.priority))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i), r(t, [{
                key: "update",
                value: function(e) {
                    return this.enable(e.enabled), this.setPriority(e.priority), this
                }
            }]), t
        }();
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(92),
        o = function(e) {
            function t(e, n, r, i, o) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var a = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n, r, i, o));
                return Object.defineProperties(a, {
                    _isSwitchedOff: {
                        value: !1,
                        writable: !0
                    }
                }), a.setSid(e), a
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i), r(t, [{
                key: "subscribeFailed",
                value: function(e) {
                    return this.error || (this._error = e, this.emit("updated")), this
                }
            }, {
                key: "setPriority",
                value: function(e) {
                    return this._priority !== e && (this._priority = e, this.emit("updated")), this
                }
            }, {
                key: "setSwitchedOff",
                value: function(e) {
                    return this._isSwitchedOff !== e && (this._isSwitchedOff = e, this.emit("updated")), this
                }
            }, {
                key: "isSubscribed",
                get: function() {
                    return !!this.trackTransceiver
                }
            }, {
                key: "isSwitchedOff",
                get: function() {
                    return this._isSwitchedOff
                }
            }]), t
        }();
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = function() {
        function e(t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), Object.defineProperties(this, {
                _mediaSignalingTransport: {
                    value: t
                }
            })
        }
        return r(e, [{
            key: "sendTrackPriorityUpdate",
            value: function(e, t, n) {
                var r, i, o;
                this._mediaSignalingTransport.publish((o = n, (i = t) in (r = {
                    type: "track_priority",
                    track: e
                }) ? Object.defineProperty(r, i, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[i] = o, r))
            }
        }]), e
    }();
    e.exports = i
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(3).EventEmitter,
        o = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.on("message", function(e) {
                    switch (e.type) {
                        case "track_switch_off":
                            n._setTrackSwitchOffUpdates(e.off || [], e.on || [])
                    }
                }), n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i), r(t, [{
                key: "_setTrackSwitchOffUpdates",
                value: function(e, t) {
                    this.emit("updated", e, t)
                }
            }]), t
        }();
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(17).getSdpFormat,
        o = n(69),
        a = n(204),
        c = n(205),
        s = n(19),
        u = n(206),
        l = n(78),
        f = n(4).reconnectBackoffConfig,
        p = n(27),
        d = n(1),
        h = d.createBandwidthProfilePayload,
        v = d.createMediaSignalingPayload,
        y = d.createSubscribePayload,
        b = d.getUserAgent,
        m = d.isNonArrayObject,
        _ = n(12),
        g = _.createTwilioError,
        k = _.RoomCompletedError,
        w = _.SignalingConnectionError,
        S = _.SignalingServerBusyError,
        O = o.name + ".js",
        T = o.version,
        P = {
            connecting: ["connected", "disconnected"],
            connected: ["disconnected", "syncing"],
            syncing: ["connected", "disconnected"],
            disconnected: []
        },
        E = function(e) {
            function t(e, n, r, o, s, p) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), p = Object.assign({
                    Backoff: l,
                    InsightsPublisher: a,
                    NullInsightsPublisher: c,
                    TwilioConnection: u,
                    iceServers: null,
                    sdpFormat: i(p.sdpSemantics),
                    trackPriority: !0,
                    trackSwitchOff: !0,
                    userAgent: b()
                }, p);
                var d = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "connecting", P)),
                    h = {};
                p.wsServerInsights && (h.gateway = p.wsServerInsights);
                var v = p.insights ? p.InsightsPublisher : p.NullInsightsPublisher;
                return Object.defineProperties(d, {
                        _accessToken: {
                            value: n
                        },
                        _automaticSubscription: {
                            value: p.automaticSubscription
                        },
                        _bandwidthProfile: {
                            value: p.bandwidthProfile
                        },
                        _dominantSpeaker: {
                            value: p.dominantSpeaker
                        },
                        _eventPublisher: {
                            value: new v(n, O, T, p.environment, p.realm, h)
                        },
                        _iceServersStatus: {
                            value: Array.isArray(p.iceServers) ? "overrode" : "acquire"
                        },
                        _localParticipant: {
                            value: r
                        },
                        _name: {
                            value: e
                        },
                        _networkQuality: {
                            value: m(p.networkQuality) || p.networkQuality
                        },
                        _options: {
                            value: p
                        },
                        _peerConnectionManager: {
                            value: o
                        },
                        _sessionTimer: {
                            value: null,
                            writable: !0
                        },
                        _sessionTimeoutMS: {
                            value: 0,
                            writable: !0
                        },
                        _reconnectBackoff: {
                            value: p.Backoff.exponential(f)
                        },
                        _session: {
                            value: null,
                            writable: !0
                        },
                        _trackPriority: {
                            value: p.trackPriority
                        },
                        _trackSwitchOff: {
                            value: p.trackSwitchOff
                        },
                        _twilioConnection: {
                            value: null,
                            writable: !0
                        },
                        _updatesReceived: {
                            value: []
                        },
                        _updatesToSend: {
                            value: []
                        },
                        _userAgent: {
                            value: p.userAgent
                        },
                        _wsServer: {
                            value: s
                        }
                    }), p.eventObserver && p.eventObserver.setPublisher(d._eventPublisher),
                    function(e) {
                        function t() {
                            if ("disconnected" !== e.state) {
                                e._twilioConnection && e._twilioConnection.removeListener("message", r);
                                var t = e._iceServersStatus,
                                    i = e._options,
                                    o = e._wsServer,
                                    a = e.state,
                                    c = i.TwilioConnection,
                                    s = new c(o, Object.assign({
                                        helloBody: "connecting" === a && "acquire" === t ? e._createIceMessage() : e._createConnectOrSyncOrDisconnectMessage()
                                    }, i));
                                s.once("close", function(e) {
                                    e === c.CloseReason.LOCAL ? n() : n(new Error(e))
                                }), s.on("message", r), e._twilioConnection = s
                            }
                        }

                        function n(n) {
                            if ("disconnected" !== e.state)
                                if (n) {
                                    var r = e._getReconnectTimer();
                                    if (r) "connected" === e.state && e.preempt("syncing"), r.then(t);
                                    else {
                                        var i = n.message === u.CloseReason.BUSY ? new S : new w;
                                        e.disconnect(i)
                                    }
                                } else e.disconnect()
                        }

                        function r(t) {
                            if ("disconnected" !== e.state)
                                if ("error" !== t.type) switch (e.state) {
                                    case "connected":
                                        switch (t.type) {
                                            case "connected":
                                            case "synced":
                                            case "update":
                                                return void e.emit("message", t);
                                            case "disconnected":
                                                return void e.disconnect("completed" === t.status ? new k : null);
                                            default:
                                                return
                                        }
                                    case "connecting":
                                        switch (t.type) {
                                            case "iced":
                                                return void e._options.onIced(t.ice_servers).then(function() {
                                                    e._sendConnectOrSyncOrDisconnectMessage()
                                                });
                                            case "connected":
                                                return e._setSession(t.session, t.options.session_timeout), e.emit("connected", t), void e.preempt("connected");
                                            case "synced":
                                            case "update":
                                                return void e._updatesReceived.push(t);
                                            case "disconnected":
                                                return void e.disconnect("completed" === t.status ? new k : null);
                                            default:
                                                return
                                        }
                                    case "syncing":
                                        switch (t.type) {
                                            case "connected":
                                            case "update":
                                                return void e._updatesReceived.push(t);
                                            case "synced":
                                                return e._clearReconnectTimer(), e.emit("message", t), void e.preempt("connected");
                                            case "disconnected":
                                                return void e.disconnect("completed" === t.status ? new k : null);
                                            default:
                                                return
                                        }
                                    default:
                                        return
                                } else e.disconnect(g(t.code, t.message))
                        }
                        e.on("stateChanged", function t(n) {
                            switch (n) {
                                case "connected":
                                    var i = e._updatesToSend.splice(0);
                                    return i.length && e.publish(function(e) {
                                        return e.reduce(function(e, t) {
                                            return !e.participant && t.participant ? e.participant = t.participant : e.participant && t.participant && t.participant.revision > e.participant.revision && (e.participant = t.participant), !e.peer_connections && t.peer_connections ? e.peer_connections = C(t.peer_connections) : e.peer_connections && t.peer_connections && (e.peer_connections = C(e.peer_connections.concat(t.peer_connections))), e
                                        }, {})
                                    }(i)), void e._updatesReceived.splice(0).forEach(function(t) {
                                        return e.emit("message", t)
                                    });
                                case "disconnected":
                                    return e._twilioConnection.removeListener("message", r), void e.removeListener("stateChanged", t);
                                case "syncing":
                                default:
                                    return
                            }
                        });
                        var i = e._options,
                            o = e._iceServersStatus,
                            a = i.iceServers,
                            c = i.onIced;
                        "overrode" === o ? c(a).then(t) : t()
                    }(d), d.once("connected", function(e) {
                        var t = e.sid,
                            n = e.participant;
                        d._eventPublisher.connect(t, n.sid)
                    }), d
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, s), r(t, [{
                key: "_createConnectOrSyncOrDisconnectMessage",
                value: function() {
                    if ("connected" === this.state) return null;
                    if ("disconnected" === this.state) return {
                        session: this._session,
                        type: "disconnect",
                        version: 2
                    };
                    var e = {
                            connecting: "connect",
                            syncing: "sync"
                        } [this.state],
                        t = {
                            name: this._name,
                            participant: this._localParticipant.getState(),
                            peer_connections: this._peerConnectionManager.getStates(),
                            type: e,
                            version: 2
                        };
                    if ("connect" === t.type) {
                        t.ice_servers = this._iceServersStatus, t.publisher = {
                            name: O,
                            sdk_version: T,
                            user_agent: this._userAgent
                        }, this._bandwidthProfile && (t.bandwidth_profile = h(this._bandwidthProfile)), t.media_signaling = v(this._dominantSpeaker, this._networkQuality, this._trackPriority, this._trackSwitchOff), t.subscribe = y(this._automaticSubscription);
                        var n = this._options.sdpFormat;
                        n && (t.format = n), t.token = this._accessToken
                    } else "sync" === t.type ? (t.session = this._session, t.token = this._accessToken) : "update" === t.type && (t.session = this._session);
                    return t
                }
            }, {
                key: "_createIceMessage",
                value: function() {
                    return {
                        edge: "roaming",
                        token: this._accessToken,
                        type: "ice",
                        version: 1
                    }
                }
            }, {
                key: "_sendConnectOrSyncOrDisconnectMessage",
                value: function() {
                    var e = this._createConnectOrSyncOrDisconnectMessage();
                    e && this._twilioConnection.sendMessage(e)
                }
            }, {
                key: "disconnect",
                value: function(e) {
                    return "disconnected" !== this.state && (this.preempt("disconnected", null, [e]), this._sendConnectOrSyncOrDisconnectMessage(), this._twilioConnection.close(), this._eventPublisher.disconnect(), !0)
                }
            }, {
                key: "publish",
                value: function(e) {
                    switch (this.state) {
                        case "connected":
                            return this._twilioConnection.sendMessage(Object.assign({
                                session: this._session,
                                type: "update",
                                version: 2
                            }, e)), !0;
                        case "connecting":
                        case "syncing":
                            return this._updatesToSend.push(e), !0;
                        case "disconnected":
                        default:
                            return !1
                    }
                }
            }, {
                key: "publishEvent",
                value: function(e, t, n) {
                    return this._eventPublisher.publish(e, t, n)
                }
            }, {
                key: "sync",
                value: function() {
                    return "connected" === this.state && (this.preempt("syncing"), this._sendConnectOrSyncOrDisconnectMessage(), !0)
                }
            }, {
                key: "_setSession",
                value: function(e, t) {
                    this._session = e, this._sessionTimeoutMS = 1e3 * t
                }
            }, {
                key: "_getReconnectTimer",
                value: function() {
                    var e = this;
                    return 0 === this._sessionTimeoutMS ? null : (this._sessionTimer || (this._sessionTimer = new p(function() {
                        e._sessionTimer && (e._sessionTimeoutMS = 0)
                    }, this._sessionTimeoutMS)), new Promise(function(t) {
                        e._reconnectBackoff.once("ready", t), e._reconnectBackoff.backoff()
                    }))
                }
            }, {
                key: "_clearReconnectTimer",
                value: function() {
                    this._reconnectBackoff.reset(), this._sessionTimer && (this._sessionTimer.clear(), this._sessionTimer = null)
                }
            }]), t
        }();

    function C(e) {
        return Array.from(e.reduce(function(e, t) {
            var n = e.get(t.id) || t;
            return !n.description && t.description ? n.description = t.description : n.description && t.description && t.description.revision > n.description.revision && (n.description = t.description), !n.ice && t.ice ? n.ice = t.ice : n.ice && t.ice && t.ice.revision > n.ice.revision && (n.ice = t.ice), e.set(n.id, n), e
        }, new Map).values())
    }
    e.exports = E
}, function(e, t, n) {
    "use strict";
    (function(t) {
        var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
        var i = n(3).EventEmitter,
            o = n(1).getUserAgent,
            a = 5,
            c = 50,
            s = 1e3,
            u = t.window || t,
            l = u.WebSocket ? u.WebSocket : n(93),
            f = n(1),
            p = function(e) {
                function t(e, n, r, i, s, u) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var p = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return u = Object.assign({
                        gateway: h(i, s) + "/v1/VideoEvents",
                        maxReconnectAttempts: a,
                        reconnectIntervalMs: c,
                        userAgent: o(),
                        WebSocket: l
                    }, u), Object.defineProperties(p, {
                        _connectTimestamp: {
                            value: 0,
                            writable: !0
                        },
                        _eventQueue: {
                            value: []
                        },
                        _readyToConnect: {
                            value: f.defer()
                        },
                        _reconnectAttemptsLeft: {
                            value: u.maxReconnectAttempts,
                            writable: !0
                        },
                        _ws: {
                            value: null,
                            writable: !0
                        },
                        _WebSocket: {
                            value: u.WebSocket
                        }
                    }), p._readyToConnect.promise.then(function(t) {
                        var i = t.roomSid,
                            o = t.participantSid,
                            a = p;
                        p.on("disconnected", function t(c) {
                            if (a._session = null, c && a._reconnectAttemptsLeft > 0) return a.emit("reconnecting"), void
                            function(e, t, n, r, i, o, a) {
                                var c = Date.now() - e._connectTimestamp,
                                    s = a.reconnectIntervalMs - c;
                                if (s > 0) return void setTimeout(function() {
                                    d(e, t, n, r, i, o, a)
                                }, s);
                                d(e, t, n, r, i, o, a)
                            }(a, e, n, r, i, o, u);
                            a.removeListener("disconnected", t)
                        }), d(p, e, n, r, i, o, u)
                    }).catch(function() {}), p
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, i), r(t, [{
                    key: "connect",
                    value: function(e, t) {
                        this._readyToConnect.resolve({
                            roomSid: e,
                            participantSid: t
                        })
                    }
                }, {
                    key: "_publish",
                    value: function(e) {
                        e.session = this._session, this._ws.send(JSON.stringify(e))
                    }
                }, {
                    key: "disconnect",
                    value: function() {
                        if (null === this._ws || this._ws.readyState === this._WebSocket.CLOSING || this._ws.readyState === this._WebSocket.CLOSED) return !1;
                        try {
                            this._ws.close()
                        } catch (e) {}
                        return this.emit("disconnected"), !0
                    }
                }, {
                    key: "publish",
                    value: function(e, t, n) {
                        return (null === this._ws || this._ws.readyState !== this._WebSocket.CLOSING && this._ws.readyState !== this._WebSocket.CLOSED) && (("string" == typeof this._session ? this._publish.bind(this) : this._eventQueue.push.bind(this._eventQueue))({
                            group: e,
                            name: t,
                            payload: n,
                            timestamp: Date.now(),
                            type: "event",
                            version: 1
                        }), !0)
                    }
                }]), t
            }();

        function d(e, t, n, r, i, o, a) {
            e._connectTimestamp = Date.now(), e._reconnectAttemptsLeft--, e._ws = new a.WebSocket(a.gateway);
            var c = e._ws;
            c.addEventListener("close", function(t) {
                t.code !== s ? e.emit("disconnected", new Error("WebSocket Error " + t.code + ": " + t.reason)) : e.emit("disconnected")
            }), c.addEventListener("message", function(t) {
                ! function(e, t, n) {
                    switch (t.type) {
                        case "connected":
                            e._session = t.session, e._reconnectAttemptsLeft = n.maxReconnectAttempts, e._eventQueue.splice(0).forEach(e._publish, e), e.emit("connected");
                            break;
                        case "error":
                            e._ws.close(), e.emit("disconnected", new Error(t.message))
                    }
                }(e, JSON.parse(t.data), a)
            }), c.addEventListener("open", function() {
                var e = {
                    type: "connect",
                    token: t,
                    version: 1
                };
                e.publisher = {
                    name: n,
                    sdkVersion: r,
                    userAgent: a.userAgent,
                    participantSid: o,
                    roomSid: i
                }, c.send(JSON.stringify(e))
            })
        }

        function h(e, t) {
            return "prod" === e ? "wss://sdkgw." + t + ".twilio.com" : "wss://sdkgw." + e + "-" + t + ".twilio.com"
        }
        e.exports = p
    }).call(this, n(16))
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = function() {
        function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), Object.defineProperties(this, {
                _connected: {
                    writable: !0,
                    value: !0
                }
            })
        }
        return r(e, [{
            key: "connect",
            value: function() {}
        }, {
            key: "disconnect",
            value: function() {
                return !!this._connected && (this._connected = !1, !0)
            }
        }, {
            key: "publish",
            value: function() {
                return this._connected
            }
        }]), e
    }();
    e.exports = i
}, function(e, t, n) {
    "use strict";
    (function(t) {
        var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
        var i = n(19),
            o = n(1),
            a = o.buildLogLevels,
            c = o.makeUUID,
            s = n(18),
            u = n(207),
            l = n(27),
            f = 0,
            p = {
                closed: [],
                connecting: ["closed", "open", "waiting"],
                early: ["closed", "connecting"],
                open: ["closed"],
                waiting: ["closed", "connecting", "early", "open"]
            },
            d = {
                closed: "close",
                open: "open",
                waiting: "waiting"
            },
            h = 3,
            v = 3,
            y = 5e3,
            b = 15e3,
            m = 5e3,
            _ = 3004,
            g = t.window || t,
            k = g.WebSocket ? g.WebSocket : n(93),
            w = {
                BUSY: "busy",
                FAILED: "failed",
                LOCAL: "local",
                REMOTE: "remote",
                TIMEOUT: "timeout"
            },
            S = new Map([
                [3e3, w.TIMEOUT],
                [3001, w.TIMEOUT],
                [3002, w.FAILED],
                [3003, w.FAILED],
                [_, w.TIMEOUT],
                [3006, w.BUSY],
                [3007, w.TIMEOUT]
            ]),
            O = function(e) {
                function t(e, n) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var r = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "early", p));
                    n = Object.assign({
                        helloBody: null,
                        maxConsecutiveFailedHellos: v,
                        maxConsecutiveMissedHeartbeats: h,
                        requestedHeartbeatTimeout: y,
                        openTimeout: b,
                        welcomeTimeout: m,
                        Log: s,
                        WebSocket: k
                    }, n);
                    var i = a(n.logLevel),
                        o = new n.Log("default", r, i, n.loggerName),
                        c = n.networkMonitor ? new u(function() {
                            var e = c.type,
                                t = "Network changed" + (e ? " to " + e : "");
                            o.debug(t), r._close({
                                code: _,
                                reason: t
                            })
                        }) : null;
                    Object.defineProperties(r, {
                        _busyWaitTimeout: {
                            value: null,
                            writable: !0
                        },
                        _consecutiveHeartbeatsMissed: {
                            value: 0,
                            writable: !0
                        },
                        _cookie: {
                            value: null,
                            writable: !0
                        },
                        _eventObserver: {
                            value: n.eventObserver
                        },
                        _heartbeatTimeout: {
                            value: null,
                            writable: !0
                        },
                        _hellosLeft: {
                            value: n.maxConsecutiveFailedHellos,
                            writable: !0
                        },
                        _instanceId: {
                            value: ++f
                        },
                        _log: {
                            value: o
                        },
                        _messageQueue: {
                            value: []
                        },
                        _networkMonitor: {
                            value: c
                        },
                        _options: {
                            value: n
                        },
                        _openTimeout: {
                            value: null,
                            writable: !0
                        },
                        _sendHeartbeatTimeout: {
                            value: null,
                            writable: !0
                        },
                        _serverUrl: {
                            value: e
                        },
                        _welcomeTimeout: {
                            value: null,
                            writable: !0
                        },
                        _ws: {
                            value: null,
                            writable: !0
                        }
                    });
                    var l = {
                        connecting: "info",
                        early: "info",
                        open: "info",
                        waiting: "warning",
                        closed: "info"
                    };
                    return r.on("stateChanged", function(e) {
                        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                        e in d && r.emit.apply(r, [d[e]].concat(n));
                        var o = {
                            name: e,
                            group: "signaling",
                            level: l[r.state]
                        };
                        if ("closed" === e) {
                            var a = n[0];
                            o.payload = {
                                reason: a
                            }, o.level = a === w.LOCAL ? "info" : "error"
                        }
                        r._eventObserver.emit("event", o)
                    }), r._eventObserver.emit("event", {
                        name: r.state,
                        group: "signaling",
                        level: l[r.state]
                    }), r._connect(), r
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, i), r(t, [{
                    key: "toString",
                    value: function() {
                        return "[TwilioConnection #" + this._instanceId + ": " + this._ws.url + "]"
                    }
                }, {
                    key: "_close",
                    value: function(e) {
                        var t = e.code,
                            n = e.reason;
                        if ("closed" !== this.state) {
                            this._openTimeout && this._openTimeout.clear(), this._welcomeTimeout && this._welcomeTimeout.clear(), this._heartbeatTimeout && this._heartbeatTimeout.clear(), this._sendHeartbeatTimeout && this._sendHeartbeatTimeout.clear(), this._networkMonitor && this._networkMonitor.stop(), this._busyWaitTimeout && 3005 !== t && this._busyWaitTimeout.clear(), this._messageQueue.splice(0);
                            var r = this._log;
                            1e3 === t ? (r.debug("Closed"), this.transition("closed", null, [w.LOCAL])) : (r.warn("Closed: " + t + " - " + n), 3005 !== t && this.transition("closed", null, [S.get(t) || w.REMOTE]));
                            var i = this._ws.readyState,
                                o = this._options.WebSocket;
                            i !== o.CLOSING && i !== o.CLOSED && this._ws.close(t, n)
                        }
                    }
                }, {
                    key: "_connect",
                    value: function() {
                        var e = this,
                            t = this._log;
                        if ("waiting" === this.state) this.transition("early");
                        else if ("early" !== this.state) return void t.warn('Unexpected state "' + this.state + '" for connecting to the TCMP server.');
                        this._ws = new this._options.WebSocket(this._serverUrl);
                        var n = this._ws;
                        t.debug("Created a new WebSocket:", n), n.addEventListener("close", function(t) {
                            return e._close(t)
                        });
                        var r = this._options.openTimeout;
                        this._openTimeout = new l(function() {
                            var t = "Failed to open in " + r + " ms";
                            e._close({
                                code: 3007,
                                reason: t
                            })
                        }, r), n.addEventListener("open", function() {
                            t.debug("WebSocket opened:", n), e._openTimeout.clear(), e._startHandshake(), e._networkMonitor && e._networkMonitor.start()
                        }), n.addEventListener("message", function(n) {
                            t.debug("Incoming: " + n.data);
                            try {
                                n = JSON.parse(n.data)
                            } catch (t) {
                                return void e.emit("error", t)
                            }
                            switch (n.type) {
                                case "bad":
                                    e._handleBad(n);
                                    break;
                                case "busy":
                                    e._handleBusy(n);
                                    break;
                                case "bye":
                                    break;
                                case "msg":
                                    e._handleMessage(n);
                                case "heartbeat":
                                    e._handleHeartbeat();
                                    break;
                                case "welcome":
                                    e._handleWelcome(n);
                                    break;
                                default:
                                    e._log.debug("Unknown message type: " + n.type), e.emit("error", new Error("Unknown message type: " + n.type))
                            }
                        })
                    }
                }, {
                    key: "_handleBad",
                    value: function(e) {
                        var t = e.reason,
                            n = this._log;
                        if (["connecting", "open"].includes(this.state)) {
                            if ("connecting" === this.state) return n.warn("Closing: 3002 - " + t), void this._close({
                                code: 3002,
                                reason: t
                            });
                            n.debug("Error: " + t), this.emit("error", new Error(t))
                        } else n.warn('Unexpected state "' + this.state + '" for handling a "bad" message from the TCMP server.')
                    }
                }, {
                    key: "_handleBusy",
                    value: function(e) {
                        var t = this,
                            n = e.cookie,
                            r = e.keepAlive,
                            i = e.retryAfter,
                            o = this._log;
                        if (["connecting", "waiting"].includes(this.state)) {
                            this._busyWaitTimeout && this._busyWaitTimeout.clear(), this._welcomeTimeout && this._welcomeTimeout.clear();
                            var a = i < 0 ? 'Received terminal "busy" message' : 'Received "busy" message, retrying after ' + i + " ms";
                            if (i < 0) return o.warn("Closing: 3006 - " + a), void this._close({
                                code: 3006,
                                reason: a
                            });
                            var c = this._options.maxConsecutiveFailedHellos;
                            this._hellosLeft = c, this._cookie = n || null, r ? (o.warn(a), this._busyWaitTimeout = new l(function() {
                                return t._startHandshake()
                            }, i)) : (o.warn("Closing: 3005 - " + a), this._close({
                                code: 3005,
                                reason: a
                            }), this._busyWaitTimeout = new l(function() {
                                return t._connect()
                            }, i)), this.transition("waiting", null, [r, i])
                        } else o.warn('Unexpected state "' + this.state + '" for handling a "busy" message from the TCMP server.')
                    }
                }, {
                    key: "_handleHeartbeat",
                    value: function() {
                        "open" === this.state ? this._heartbeatTimeout.reset() : this._log.warn('Unexpected state "' + this.state + '" for handling a "heartbeat" message from the TCMP server.')
                    }
                }, {
                    key: "_handleHeartbeatTimeout",
                    value: function() {
                        if ("open" === this.state) {
                            var e = this._log,
                                t = this._options.maxConsecutiveMissedHeartbeats;
                            e.debug("Consecutive heartbeats missed: " + t);
                            var n = "Missed " + t + ' "heartbeat" messages';
                            e.warn("Closing: 3001 - " + n), this._close({
                                code: 3001,
                                reason: n
                            })
                        }
                    }
                }, {
                    key: "_handleMessage",
                    value: function(e) {
                        var t = e.body;
                        "open" === this.state ? this.emit("message", t) : this._log.warn('Unexpected state "' + this.state + '" for handling a "msg" message from the TCMP server.')
                    }
                }, {
                    key: "_handleWelcome",
                    value: function(e) {
                        var t = this,
                            n = e.negotiatedTimeout,
                            r = this._log;
                        if (["connecting", "waiting"].includes(this.state)) {
                            "waiting" === this.state && (r.debug('Received "welcome" message, no need to retry connection.'), this._busyWaitTimeout.clear());
                            var i = n * this._options.maxConsecutiveMissedHeartbeats,
                                o = n - 200;
                            this._welcomeTimeout.clear(), this._heartbeatTimeout = new l(function() {
                                return t._handleHeartbeatTimeout()
                            }, i), this._messageQueue.splice(0).forEach(function(e) {
                                return t._send(e)
                            }), this._sendHeartbeatTimeout = new l(function() {
                                return t._sendHeartbeat()
                            }, o), this.transition("open")
                        } else r.warn('Unexpected state "' + this.state + '" for handling a "welcome" message from the TCMP server.')
                    }
                }, {
                    key: "_handleWelcomeTimeout",
                    value: function() {
                        if ("connecting" === this.state) {
                            var e = this._log;
                            if (this._hellosLeft <= 0) {
                                var t = "All handshake attempts failed";
                                return e.warn("Closing: 3000 - " + t), void this._close({
                                    code: 3e3,
                                    reason: t
                                })
                            }
                            var n = this._options.maxConsecutiveFailedHellos;
                            e.warn("Handshake attempt " + (n - this._hellosLeft) + " failed"), this._startHandshake()
                        }
                    }
                }, {
                    key: "_send",
                    value: function(e) {
                        if (this._ws.readyState === this._options.WebSocket.OPEN) {
                            var t = JSON.stringify(e);
                            this._log.debug("Outgoing: " + t);
                            try {
                                this._ws.send(t), this._sendHeartbeatTimeout && this._sendHeartbeatTimeout.reset()
                            } catch (e) {
                                var n = "Failed to send message";
                                this._log.warn("Closing: 3003 - " + n), this._close({
                                    code: 3003,
                                    reason: n
                                })
                            }
                        }
                    }
                }, {
                    key: "_sendHeartbeat",
                    value: function() {
                        "closed" !== this.state && this._send({
                            type: "heartbeat"
                        })
                    }
                }, {
                    key: "_sendHello",
                    value: function() {
                        var e = this._options,
                            t = e.helloBody,
                            n = e.requestedHeartbeatTimeout,
                            r = {
                                id: c(),
                                timeout: n,
                                type: "hello",
                                version: 2
                            };
                        this._cookie && (r.cookie = this._cookie), t && (r.body = t), this._send(r)
                    }
                }, {
                    key: "_sendOrEnqueue",
                    value: function(e) {
                        var t = this;
                        "closed" !== this.state && ("open" === this.state ? function(e) {
                            return t._send(e)
                        } : function(e) {
                            return t._messageQueue.push(e)
                        })(e)
                    }
                }, {
                    key: "_startHandshake",
                    value: function() {
                        var e = this;
                        if (["early", "waiting"].includes(this.state) && this.transition("connecting"), "connecting" === this.state) {
                            this._hellosLeft--, this._sendHello();
                            var t = this._options.welcomeTimeout;
                            this._welcomeTimeout = new l(function() {
                                return e._handleWelcomeTimeout()
                            }, t)
                        }
                    }
                }, {
                    key: "close",
                    value: function() {
                        "closed" !== this.state && (this._sendOrEnqueue({
                            type: "bye"
                        }), this._close({
                            code: 1e3,
                            reason: "Normal"
                        }))
                    }
                }, {
                    key: "sendMessage",
                    value: function(e) {
                        this._sendOrEnqueue({
                            body: e,
                            type: "msg"
                        })
                    }
                }]), t
            }();
        O.CloseReason = w, e.exports = O
    }).call(this, n(16))
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = function() {
        function e(t, n) {
            var r = this;
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var i = (n = Object.assign({
                    navigator: navigator,
                    window: window
                }, n)).navigator,
                o = i.connection || {
                    type: null
                },
                a = o.type,
                c = o.type ? {
                    _events: {
                        value: ["change", "typechange"]
                    },
                    _listener: {
                        value: function() {
                            var e = a !== r.type && r.isOnline;
                            a = r.type, e && t()
                        }
                    },
                    _target: {
                        value: o
                    }
                } : {
                    _events: {
                        value: ["online"]
                    },
                    _listener: {
                        value: t
                    },
                    _target: {
                        value: n.window
                    }
                },
                s = c._events,
                u = c._listener,
                l = c._target;
            Object.defineProperties(this, {
                isOnline: {
                    enumerable: !0,
                    get: function() {
                        return "boolean" != typeof i.onLine || i.onLine
                    }
                },
                type: {
                    enumerable: !0,
                    get: function() {
                        return o.type || null
                    }
                },
                _listener: u,
                _events: s,
                _target: l
            })
        }
        return r(e, [{
            key: "start",
            value: function() {
                var e = this;
                this._events.forEach(function(t) {
                    e._target.addEventListener(t, e._listener)
                })
            }
        }, {
            key: "stop",
            value: function() {
                var e = this;
                this._events.forEach(function(t) {
                    e._target.removeEventListener(t, e._listener)
                })
            }
        }]), e
    }();
    e.exports = i
}, function(e, t, n) {
    "use strict";
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = function e(t, n, r) {
            null === t && (t = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === i) {
                var o = Object.getPrototypeOf(t);
                return null === o ? void 0 : e(o, n, r)
            }
            if ("value" in i) return i.value;
            var a = i.get;
            return void 0 !== a ? a.call(r) : void 0
        };
    var o = n(209),
        a = n(210),
        c = n(1).isDeepEqual,
        s = function(e) {
            function t(e, n, r) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), r = Object.assign({
                    LocalTrackPublicationV2: a
                }, r);
                var i = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return Object.defineProperties(i, {
                    _bandwidthProfile: {
                        value: null,
                        writable: !0
                    },
                    _bandwidthProfileRevision: {
                        value: 0,
                        writable: !0
                    },
                    _encodingParameters: {
                        value: e
                    },
                    _removeListeners: {
                        value: new Map
                    },
                    _LocalTrackPublicationV2: {
                        value: r.LocalTrackPublicationV2
                    },
                    _publishedRevision: {
                        writable: !0,
                        value: 0
                    },
                    _revision: {
                        writable: !0,
                        value: 1
                    },
                    _signalingRegion: {
                        value: null,
                        writable: !0
                    },
                    bandwidthProfile: {
                        enumerable: !0,
                        get: function() {
                            return this._bandwidthProfile
                        }
                    },
                    bandwidthProfileRevision: {
                        enumerable: !0,
                        get: function() {
                            return this._bandwidthProfileRevision
                        }
                    },
                    networkQualityConfiguration: {
                        enumerable: !0,
                        value: n
                    },
                    revision: {
                        enumerable: !0,
                        get: function() {
                            return this._revision
                        }
                    },
                    signalingRegion: {
                        enumerable: !0,
                        get: function() {
                            return this._signalingRegion
                        }
                    }
                }), i
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o), r(t, [{
                key: "setSignalingRegion",
                value: function(e) {
                    this._signalingRegion || (this._signalingRegion = e)
                }
            }, {
                key: "setBandwidthProfile",
                value: function(e) {
                    c(this._bandwidthProfile, e) || (this._bandwidthProfile = JSON.parse(JSON.stringify(e)), this._bandwidthProfileRevision++, this.didUpdate())
                }
            }, {
                key: "setParameters",
                value: function(e) {
                    return this._encodingParameters.update(e), this
                }
            }, {
                key: "update",
                value: function(e) {
                    return this._publishedRevision >= e.revision ? this : (this._publishedRevision = e.revision, e.tracks.forEach(function(e) {
                        var t = this.tracks.get(e.id);
                        t && t.update(e)
                    }, this), this)
                }
            }, {
                key: "_createLocalTrackPublicationSignaling",
                value: function(e, t, n) {
                    return new this._LocalTrackPublicationV2(e, t, n)
                }
            }, {
                key: "addTrack",
                value: function(e, n, r) {
                    var o = this;
                    i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "addTrack", this).call(this, e, n, r);
                    var a = this.getPublication(e),
                        c = a.isEnabled,
                        s = a.updatedPriority,
                        u = function() {
                            c === a.isEnabled && s === a.updatedPriority || (o.didUpdate(), c = a.isEnabled, s = a.updatedPriority)
                        };
                    return a.on("updated", u), this._removeListener(a), this._removeListeners.set(a, function() {
                        return a.removeListener("updated", u)
                    }), this.didUpdate(), this
                }
            }, {
                key: "_removeListener",
                value: function(e) {
                    var t = this._removeListeners.get(e);
                    t && t()
                }
            }, {
                key: "getState",
                value: function() {
                    return {
                        revision: this.revision,
                        tracks: Array.from(this.tracks.values()).map(function(e) {
                            return e.getState()
                        })
                    }
                }
            }, {
                key: "didUpdate",
                value: function() {
                    this._revision++, this.emit("updated")
                }
            }, {
                key: "removeTrack",
                value: function(e) {
                    var n = i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "removeTrack", this).call(this, e);
                    return n && (e.removeClone(n.trackTransceiver), this._removeListener(n), this.didUpdate()), n
                }
            }, {
                key: "setNetworkQualityConfiguration",
                value: function(e) {
                    this.networkQualityConfiguration.update(e)
                }
            }]), t
        }();
    e.exports = s
}, function(e, t, n) {
    "use strict";
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = function e(t, n, r) {
            null === t && (t = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === i) {
                var o = Object.getPrototypeOf(t);
                return null === o ? void 0 : e(o, n, r)
            }
            if ("value" in i) return i.value;
            var a = i.get;
            return void 0 !== a ? a.call(r) : void 0
        };
    var o = n(40),
        a = function(e) {
            function t() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var e = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return Object.defineProperties(e, {
                    _publicationsToTrackSenders: {
                        value: new Map
                    },
                    _trackSendersToPublications: {
                        value: new Map
                    }
                }), e
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o), r(t, [{
                key: "addTrack",
                value: function(e, n, r) {
                    var o = this._createLocalTrackPublicationSignaling(e, n, r);
                    return this._trackSendersToPublications.set(e, o), this._publicationsToTrackSenders.set(o, e), i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "addTrack", this).call(this, o), this
                }
            }, {
                key: "getPublication",
                value: function(e) {
                    return this._trackSendersToPublications.get(e) || null
                }
            }, {
                key: "getSender",
                value: function(e) {
                    return this._publicationsToTrackSenders.get(e) || null
                }
            }, {
                key: "removeTrack",
                value: function(e) {
                    var n = this._trackSendersToPublications.get(e);
                    return n ? (this._trackSendersToPublications.delete(e), this._publicationsToTrackSenders.delete(n), i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "removeTrack", this).call(this, n) && n.stop(), n) : null
                }
            }]), t
        }();
    e.exports = a
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(211),
        o = n(12).createTwilioError,
        a = function(e) {
            function t(e, n, r) {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i), r(t, [{
                key: "getState",
                value: function() {
                    return {
                        enabled: this.isEnabled,
                        id: this.id,
                        kind: this.kind,
                        name: this.name,
                        priority: this.updatedPriority
                    }
                }
            }, {
                key: "update",
                value: function(e) {
                    switch (e.state) {
                        case "ready":
                            this.setSid(e.sid);
                            break;
                        case "failed":
                            var t = e.error;
                            this.publishFailed(o(t.code, t.message))
                    }
                    return this
                }
            }]), t
        }();
    e.exports = a
}, function(e, t, n) {
    "use strict";
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = function e(t, n, r) {
            null === t && (t = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === i) {
                var o = Object.getPrototypeOf(t);
                return null === o ? void 0 : e(o, n, r)
            }
            if ("value" in i) return i.value;
            var a = i.get;
            return void 0 !== a ? a.call(r) : void 0
        };
    var o = n(92),
        a = function(e) {
            function t(e, n, r) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var i = "data" === (e = e.clone()).kind || e.track.enabled,
                    o = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n, e.kind, i, r));
                return o.setTrackTransceiver(e), Object.defineProperties(o, {
                    _updatedPriority: {
                        value: r,
                        writable: !0
                    },
                    id: {
                        enumerable: !0,
                        value: e.id
                    }
                }), o
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o), r(t, [{
                key: "enable",
                value: function(e) {
                    return e = "boolean" != typeof e || e, this.trackTransceiver.track.enabled = e, i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "enable", this).call(this, e)
                }
            }, {
                key: "publishFailed",
                value: function(e) {
                    return function(e, t) {
                        if (null !== e._sid || e._error) return !1;
                        return e._error = t, !0
                    }(this, e) && this.emit("updated"), this
                }
            }, {
                key: "setPriority",
                value: function(e) {
                    return this._updatedPriority !== e && (this._updatedPriority = e, this.emit("updated")), this
                }
            }, {
                key: "setSid",
                value: function(e) {
                    return this._error ? this : i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setSid", this).call(this, e)
                }
            }, {
                key: "stop",
                value: function() {
                    this.trackTransceiver.stop()
                }
            }, {
                key: "updatedPriority",
                get: function() {
                    return this._updatedPriority
                }
            }]), t
        }();
    e.exports = a
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(40),
        o = n(89),
        a = n(19),
        c = {
            closed: ["opening"],
            opening: ["closed", "open"],
            open: ["closed", "closing"],
            closing: ["closed", "open"]
        },
        s = function(e) {
            function t() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "closed", c))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, a), r(t, [{
                key: "_close",
                value: function(e) {
                    return this.transition("closing", e), this.transition("closed", e), Promise.resolve(this)
                }
            }, {
                key: "_connect",
                value: function(e, t, n, r, i) {
                    e.connect("PA00000000000000000000000000000000", "test");
                    var a = Promise.resolve(new o(e, "RM00000000000000000000000000000000", i));
                    return a.cancel = function() {}, a
                }
            }, {
                key: "_open",
                value: function(e) {
                    return this.transition("opening", e), this.transition("open", e), Promise.resolve(this)
                }
            }, {
                key: "close",
                value: function() {
                    var e = this;
                    return this.bracket("close", function(t) {
                        switch (e.state) {
                            case "closed":
                                return e;
                            case "open":
                                return e._close(t);
                            default:
                                throw new Error('Unexpected Signaling state "' + e.state + '"')
                        }
                    })
                }
            }, {
                key: "connect",
                value: function(e, t, n, r, i) {
                    var o = this;
                    return this.bracket("connect", function a(c) {
                        switch (o.state) {
                            case "closed":
                                return o._open(c).then(a.bind(null, c));
                            case "open":
                                return o.releaseLockCompletely(c), o._connect(e, t, n, r, i);
                            default:
                                throw new Error('Unexpected Signaling state "' + o.state + '"')
                        }
                    })
                }
            }, {
                key: "createLocalParticipantSignaling",
                value: function() {
                    return new i
                }
            }, {
                key: "open",
                value: function() {
                    var e = this;
                    return this.bracket("open", function(t) {
                        switch (e.state) {
                            case "closed":
                                return e._open(t);
                            case "open":
                                return e;
                            default:
                                throw new Error('Unexpected Signaling state "' + e.state + '"')
                        }
                    })
                }
            }]), t
        }();
    e.exports = s
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(3).EventEmitter,
        o = ["signaling", "room"],
        a = ["debug", "error", "info", "warning"],
        c = function(e) {
            function t(e, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var i = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return Object.defineProperties(i, {
                    _publisher: {
                        value: null,
                        writable: !0
                    }
                }), i.on("event", function(t) {
                    var c = t.name,
                        s = t.group,
                        u = t.level,
                        l = t.payload;
                    if ("string" != typeof c) throw new Error("Unexpected name: ", c);
                    if (!o.includes(s)) throw new Error("Unexpected group: ", s);
                    if (!a.includes(u)) throw new Error("Unexpected level: ", u);
                    var f = Date.now(),
                        p = f - e;
                    if (i._publisher) {
                        var d = Object.assign(l || {}, {
                            elapsedTime: p,
                            level: u
                        });
                        i._publisher.publish(s, c, d)
                    }
                    var h = Object.assign(l ? {
                        payload: l
                    } : {}, {
                        elapsedTime: p,
                        group: s,
                        level: u,
                        name: c,
                        timestamp: f
                    });
                    if (n[{
                            debug: "debug",
                            error: "error",
                            info: "info",
                            warning: "warn"
                        } [u]]("event", h), r && "signaling" === s) {
                        var v = Object.assign(l ? {
                            payload: l
                        } : {}, {
                            elapsedTime: p,
                            group: s,
                            level: u,
                            name: c,
                            timestamp: f
                        });
                        r.emit("event", v)
                    }
                }), i
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i), r(t, [{
                key: "setPublisher",
                value: function(e) {
                    this._publisher = e
                }
            }]), t
        }();
    e.exports = c
}, function(e, t, n) {
    "use strict";
    var r = n(2),
        i = r.guessBrowser,
        o = r.support,
        a = ["edg", "edge", "electron", "headlesschrome"];

    function c(e) {
        if ("chrome" !== e) return null;
        if ("brave" in navigator) return "brave";
        var t, n = (function(e) {
            for (var t = [], n = [], r = 0; r < e.length; r++)
                if ("(" === e[r]) t.push(r);
                else if (")" === e[r] && t.length > 0) {
                var i = t.pop();
                0 === t.length && n.push(e.substring(i, r + 1))
            }
            return n
        }(navigator.userAgent).reduce(function(e, t) {
            return e.replace(t, "")
        }, navigator.userAgent).match(/[^\s]+/g) || []).map(function(e) {
            return e.split("/")[0].toLowerCase()
        });
        return (t = n, Array.isArray(t) ? t : Array.from(t)).slice(2).find(function(e) {
            return !["chrome", "mobile", "safari"].includes(e)
        }) || null
    }
    e.exports = function() {
        var e = i(),
            t = c(e);
        return !!e && o() && (!t || a.includes(t)) && ! function(e) {
            return "chrome" === e && /Edge/.test(navigator.userAgent) && ("undefined" == typeof chrome || void 0 === chrome.runtime)
        }(e)
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    e.exports = n(540)
}, function(e, t, n) {
    "use strict";
    const r = n(115);
    let i = null,
        o = "";

    function a(e, t) {
        console.log({
            1: "▃",
            2: "▃▄",
            3: "▃▄▅",
            4: "▃▄▅▆",
            5: "▃▄▅▆▇"
        } [e] || ""), t && console.log("Network Quality statistics:", t)
    }

    function c(e, t) {
        e.forEach(e => {
            t.appendChild(e.attach())
        })
    }

    function s() {
        window.close()
    }

    function u(e) {
        console.log('Participant "%s" connected', e.identity);
        const t = document.createElement("div");
        t.id = e.sid, e.on("trackSubscribed", e => (function(e, t) {
            ["teacherScreen", "teacherScreenAudio", "studentScreen", "teacherMic"].includes(t.name) && (console.log("track: ", t), document.getElementById("loading").style.display = "none", document.body.style.background = "#191919", e.appendChild(t.attach()))
        })(t, e)), e.on("trackUnsubscribed", s), e.tracks.forEach(n => {
            n.isSubscribed && e.identity === o && c(n.track, t)
        }), document.body.appendChild(t)
    }!async function() {
        const e = await new Promise((e, t) => {
            chrome.runtime.sendMessage({
                type: "getToken"
            }, n => {
                n && n.error && t(n.error), chrome.runtime.onMessage.addListener(n => n.type && "cast" === n.type ? e(n) : t(new Error("cast error")))
            })
        });
        if (e.error) {
            document.getElementById("loading").style.display = "none", document.body.style.background = "#f44336";
            const e = document.createElement("div");
            return e.id = "error", e.innerHTML += "Oops! Something went wrong.", document.body.appendChild(e)
        }
        const {
            token: t
        } = e;
        o = e.teacher;
        const n = new URL(window.location).searchParams.get("room");
        console.log(`Joining room ${n} ...`), i = await r.connect(t, {
            name: n,
            audio: !1,
            video: !1,
            logLevel: "error",
            networkQuality: {
                local: 1,
                remote: 2
            }
        }), console.log(`token: ${t}`), i.participants.forEach(e => {
            console.log(`Already in Room: ${e.identity}`), u(e), e.on("networkQualityLevelChanged", a), a(e.networkQualityLevel, e.networkQualityStats)
        }), i.on("participantConnected", e => {
            console.log(`A remote Participant connected: ${e}`), a(e.networkQualityLevel, e.networkQualityStats), o === e.identity && u(e)
        }), i.on("trackAdded", (e, t) => {
            console.log(`${t.identity} added track: ${e.kind}`), c(e, t)
        }), window.addEventListener("beforeunload", () => {
            chrome.runtime.sendMessage({
                type: "stopCast"
            }), i.disconnect()
        }), setTimeout(() => {
            document.getElementsByTagName("video").length
        }, 15e3), setInterval(() => {
            const e = document.getElementsByTagName("video");
            if (e && e[0]) {
                const t = e[0].srcObject.getTracks();
                t[0] && "live" !== t[0].readyState && window.location.reload()
            }
        }, 2e4)
    }()
}]);
