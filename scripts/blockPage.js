! function(e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var c = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(c.exports, c, c.exports, n), c.l = !0, c.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
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
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var c in e) n.d(o, c, function(t) {
                return e[t]
            }.bind(null, c));
        return o
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 535)
}({
    535: function(e, t, n) {
        e.exports = n(536)
    },
    536: function(e, t, n) {
        "use strict";
        const o = document.getElementById("myModal"),
            c = document.getElementById("modalBtn"),
            l = document.getElementsByClassName("close")[0],
            a = document.getElementById("myModal2"),
            r = document.getElementById("modalBtnRating"),
            d = document.getElementsByClassName("close2")[0];
        c.onclick = function() {
            o.style.display = "block"
        }, l.onclick = function() {
            o.style.display = "none"
        }, r.onclick = function() {
            a.style.display = "block"
        }, d.onclick = function() {
            a.style.display = "none"
        }, window.onclick = function(e) {
            e.target === o && (o.style.display = "none")
        };
        const u = function(e, t) {
            const n = {},
                o = (t || window.location.href).replace(/\%22/g, "").replace(/blockurl={/, ",").replace(/.$/, "").split(",");
            for (let e = 0; e < o.length; e++) {
                const t = o[e].split(":");
                n[decodeURIComponent(t[0])] = decodeURIComponent(t[1])
            }
            return n.hostname = n.hostname, n.category = n.category, n.cat_name = n.cat_name, n.userId = n.email, n.location = n.location, n.allow = n.allow, n
        }(0, null);
        if ("false" === u.allow) {
            document.getElementById("hide").style.display = "none"
        }! function(e) {
            const t = document.getElementById("url"),
                n = document.createElement("a");
            n.innerHTML = e.hostname, n.target = "_blank";
            const o = document.getElementById("cat"),
                c = document.createElement("span");
            c.innerHTML = e.cat_name;
            const l = document.getElementById("re-url"),
                a = document.createElement("a");
            a.innerHTML = e.hostname, a.target = "_blank";
            const r = document.getElementById("cat-2"),
                d = document.createElement("a");
            d.innerHTML = e.cat_name, d.target = "_blank", r.appendChild(d), t.appendChild(n), o.appendChild(c), l.appendChild(a);
            const u = document.getElementById("ratingurl"),
                i = document.createElement("a");
            i.innerHTML = e.hostname, i.target = "_blank", u.appendChild(i);
            const s = document.getElementById("re-cat-cur"),
                m = document.createElement("a");
            m.innerHTML = e.cat_name, m.target = "_blank", s.appendChild(m)
        }(u);
        const i = document.getElementById("submitbtn"),
            s = document.getElementById("sendReCatReq");
        i.onclick = function() {
            chrome.runtime.sendMessage({
                type: "allowaccessreq",
                reason: document.querySelector('input[name = "reason"]:checked').value,
                url: u.hostname,
                warning: "Allow",
                userId: u.userId,
                location: u.location
            }), o.style.display = "none"
        }, document.body.addEventListener("keyup", function(e) {
            13 === e.keyCode && i.click()
        }), s.onclick = function() {
            const e = document.getElementById("re-cat-req").value;
            fetch("https://www.block.si/v2/send_reevaluation", {
                method: "POST",
                mode: "cors",
                redirect: "follow",
                body: JSON.stringify({
                    url: u.hostname,
                    cat_cur: u.category,
                    cat_req: e
                })
            }).then(function(e) {
                if (200 === e.status) a.style.display = "none";
                else {
                    const e = document.getElementById("error"),
                        t = document.createElement("a");
                    t.innerHTML = "Re-evaluation Error. Please try again!", t.target = "_blank", e.appendChild(t)
                }
            }).catch(function(e) {})
        }, document.body.addEventListener("keyup", function(e) {
            13 === e.keyCode && s.click()
        })
    }
});
