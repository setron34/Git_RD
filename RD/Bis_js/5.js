if (typeof WH === "undefined") {
    var g_staticUrl = (document.location.protocol !== "https:" ? "http:" : document.location.protocol) + "//wow.zamimg.com";
    var WH = {
        data: {},
        entities: {},
        wowheadRemote: true
    }
}
WH.isTouch = function () {
    if (!WH.wowheadRemote && typeof Platform !== "undefined") {
        WH.isTouch = function () {
            return Platform.isTouch()
        }
    } else {
        var b = navigator.userAgent || navigator.vendor || window.opera;
        var a = {
            isMobile: false,
            isTablet: false
        };
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4))) {
            a.isMobile = true
        }
        if (!a.isMobile && /(android|ipad|playbook|silk)/i.test(b)) {
            a.isTablet = true
        }
        WH.isTouch = (function (c) {
            return c.isMobile || c.isTablet
        }).bind(null, a);
        WH.isMobile = (function (c) {
            return c
        }).bind(null, a.isMobile);
        WH.isTablet = (function (c) {
            return c
        }).bind(null, a.isTablet)
    }
    return WH.isTouch()
};
if (typeof $WowheadPower === "undefined") {
    var $WowheadPower = new function () {
        var ak = {
            1: {
                name: "NPC",
                path: "npc",
                data: {}
            },
            2: {
                name: "Object",
                path: "object",
                data: {}
            },
            3: {
                name: "Item",
                path: "item",
                data: {},
                fetchAsJson: true
            },
            4: {
                name: "Item Set",
                path: "item-set",
                data: {}
            },
            5: {
                name: "Quest",
                path: "quest",
                data: {}
            },
            6: {
                name: "Spell",
                path: "spell",
                data: {},
                fetchAsJson: true
            },
            7: {
                name: "Zone",
                path: "zone",
                data: {}
            },
            10: {
                name: "Achievement",
                path: "achievement",
                data: {}
            },
            12: {
                name: "Holiday",
                path: "event",
                data: {}
            },
            17: {
                name: "Currency",
                path: "currency",
                data: {}
            },
            20: {
                name: "Building",
                path: "building",
                data: {}
            },
            21: {
                name: "Follower",
                path: "follower",
                data: {}
            },
            22: {
                name: "Mission Ability",
                path: "mission-ability",
                data: {}
            },
            23: {
                name: "Mission",
                path: "mission",
                data: {}
            },
            25: {
                name: "Ship",
                path: "ship",
                data: {}
            },
            26: {
                name: "Threat",
                path: "threat",
                data: {}
            },
            27: {
                name: "Resource",
                path: "resource",
                data: {}
            },
            28: {
                name: "Champion",
                path: "champion",
                data: {}
            },
            30: {
                name: "Order Advancement",
                path: "order-advancement",
                data: {}
            },
            38: {
                name: "BFA Champion",
                path: "bfa-champion",
                data: {}
            },
            40: {
                name: "Affix",
                path: "affix",
                data: {}
            },
            100: {
                name: "Guide",
                path: "guide",
                data: {}
            },
            101: {
                name: "Transmog Set",
                path: "transmog-set",
                data: {}
            },
            110: {
                name: "Outfit",
                path: "outfit",
                data: {}
            },
            200: {
                name: "Pet Ability",
                path: "pet-ability",
                data: {}
            }
        };
        var T = WH.wowheadRemote;
        var E = false;
        var aB = {
                applyto: 3
            },
            Q = document.getElementsByTagName("head")[0],
            aP, aI = {
                "float": 0,
                attachToIcon: 1,
                screen: 2,
                attach: 3,
                attachWithoutScreenshot: 4
            },
            D = 550,
            aW = {
                colorLinks: "colorlinks",
                iconizeLinks: "iconizelinks",
                renameLinks: "renamelinks"
            },
            an, I, az, v, r, ar, ay, ax, aq = aI["float"],
            L = false,
            ah = null,
            K = 1,
            H = 1,
            aN = -1,
            q = 0,
            d = 1,
            S = 0,
            ai = 1,
            aG = 2,
            g = 3,
            ao = 4,
            B = 5,
            Z = 0,
            ab = 1,
            J = 2,
            ag = 1,
            X = 2,
            A = 3,
            n = 4,
            aK = 5,
            al = 6,
            aa = 7,
            ac = 10,
            o = 12,
            m = 17,
            aJ = 20,
            ae = 21,
            G = 22,
            aM = 23,
            w = 25,
            am = 26,
            s = 27,
            R = 28,
            aV = 30,
            aS = 38,
            c = 40,
            p = 100,
            aO = 101,
            b = 110,
            au = 200,
            f = 15,
            F = 15,
            a = {
                loading: "Loading...",
                noResponse: "No response from server :(",
                achievementComplete: "Achievement earned by $1 on $2/$3/$4"
            },
            y = [p],
            aY = {
                3: {
                    url: "/data=item-scaling"
                },
                6: {
                    url: "/data=spell-scaling"
                }
            },
            aL = {
                0: "enus",
                1: "kokr",
                2: "frfr",
                3: "dede",
                4: "zhcn",
                6: "eses",
                7: "ruru",
                8: "ptbr",
                9: "itit",
                ptr: "ptr",
                beta: "beta",
                bfa: "beta"
            },
            aH = "bfa",
            h = {
                wotlk: "www",
                cata: "www",
                mop: "www",
                wod: "www",
                legion: "www"
            };
        if (T) {
            var ad = {
                getId: function () {
                    return 0
                },
                getName: function () {
                    return "enus"
                }
            }
        }
        if (typeof aQ === "undefined") {
            var aQ = {
                tooltip_genericrating: '<span class="q2">Equip: Increases your $1 by <!--rtg$2-->$3&nbsp;<small>(<!--rtg%$2-->0&nbsp;@&nbsp;L<!--lvl-->0)</small>.</span><br />',
                tooltip_reforged: "Reforged ($1 $2 &rarr; $1 $3)",
                traits: {
                    agi: ["Agility", "Agi", "Agi"],
                    arcres: ["Arcane resistance", "Arcane Resist", "ArcR"],
                    arcsplpwr: ["Arcane spell power", "Arcane Power", "ArcP"],
                    armor: ["Armor", "Armor", "Armor"],
                    armorbonus: ["Additional armor", "Bonus Armor", "AddAr"],
                    armorpenrtng: ["Armor penetration rating", "Armor Pen", "Pen"],
                    atkpwr: ["Attack power", "AP", "AP"],
                    block: ["Block value", "Block Value", "BkVal"],
                    blockrtng: ["Block rating", "Block", "Block"],
                    critstrkrtng: ["Critical strike rating", "Crit", "Crit"],
                    defrtng: ["Defense rating", "Defense", "Def"],
                    dmg: ["Weapon damage", "Damage", "Dmg"],
                    dmgmax1: ["Maximum damage", "Max Damage", "Max"],
                    dmgmin1: ["Minimum damage", "Min Damage", "Min"],
                    dodgertng: ["Dodge rating", "Dodge", "Dodge"],
                    dps: ["Damage per second", "DPS", "DPS"],
                    exprtng: ["Expertise rating", "Expertise", "Exp"],
                    firres: ["Fire resistance", "Fire Resist", "FirR"],
                    firsplpwr: ["Fire spell power", "Fire Power", "FireP"],
                    frores: ["Frost resistance", "Frost Resist", "FroR"],
                    frosplpwr: ["Frost spell power", "Frost Power", "FroP"],
                    hastertng: ["Haste rating", "Haste", "Haste"],
                    health: ["Health", "Health", "Hlth"],
                    healthrgn: ["Health regeneration", "HP5", "HP5"],
                    hitrtng: ["Hit rating", "Hit", "Hit"],
                    holres: ["Holy resistance", "Holy Resist", "HolR"],
                    holsplpwr: ["Holy spell power", "Holy Power", "HolP"],
                    "int": ["Intellect", "Int", "Int"],
                    level: ["Level", "Level", "Lvl"],
                    mana: ["Mana", "Mana", "Mana"],
                    manargn: ["Mana regeneration", "MP5", "MP5"],
                    mastrtng: ["Mastery rating", "Mastery", "Mastery"],
                    mleatkpwr: ["Melee attack power", "Melee AP", "AP"],
                    mlecritstrkrtng: ["Melee critical strike rating", "Melee Crit", "Crit"],
                    mledmgmax: ["Melee maximum damage", "Melee Max Damage", "Max"],
                    mledmgmin: ["Melee minimum damage", "Melee Min Damage", "Min"],
                    mledps: ["Melee DPS", "Melee DPS", "DPS"],
                    mlehastertng: ["Melee haste rating", "Melee Haste", "Haste"],
                    mlehitrtng: ["Melee hit rating", "Melee Hit", "Hit"],
                    mlespeed: ["Melee speed", "Melee Speed", "Speed"],
                    natres: ["Nature resistance", "Nature Resist", "NatR"],
                    natsplpwr: ["Nature spell power", "Nature Power", "NatP"],
                    nsockets: ["Number of sockets", "Sockets", "Sockt"],
                    parryrtng: ["Parry rating", "Parry", "Parry"],
                    reqarenartng: ["Required personal and team arena rating", "Req Rating", "Rating"],
                    reqlevel: ["Required level", "Req Level", "Level"],
                    resirtng: ["PvP Resilience rating", "PvP Resilience", "Resil"],
                    rgdatkpwr: ["Ranged attack power", "Ranged AP", "RAP"],
                    rgdcritstrkrtng: ["Ranged critical strike rating", "Ranged Crit", "Crit"],
                    rgddmgmax: ["Ranged maximum damage", "Ranged Max Damage", "Max"],
                    rgddmgmin: ["Ranged minimum damage", "Ranged Min Damage", "Min"],
                    rgddps: ["Ranged DPS", "Ranged DPS", "DPS"],
                    rgdhastertng: ["Ranged haste rating", "Ranged Haste", "Haste"],
                    rgdhitrtng: ["Ranged hit rating", "Ranged Hit", "Hit"],
                    rgdspeed: ["Ranged speed", "Ranged Speed", "Speed"],
                    sepbasestats: "Base stats",
                    sepdefensivestats: "Defensive stats",
                    sepindividualstats: "Individual stats",
                    sepmisc: "Miscellaneous",
                    sepoffensivestats: "Offensive stats",
                    sepresistances: "Resistances",
                    sepweaponstats: "Weapon stats",
                    shares: ["Shadow resistance", "Shadow Resist", "ShaR"],
                    shasplpwr: ["Shadow spell power", "Shadow Power", "ShaP"],
                    speed: ["Speed", "Speed", "Speed"],
                    spi: ["Spirit", "Spi", "Spi"],
                    splcritstrkrtng: ["Spell critical strike rating", "Spell Crit", "Crit"],
                    spldmg: ["Damage done by spells", "Spell Damage", "Dmg"],
                    splheal: ["Healing done by spells", "Healing", "Heal"],
                    splpwr: ["Spell power", "Spell Power", "SP"],
                    splhastertng: ["Spell haste rating", "Spell Haste", "Haste"],
                    splhitrtng: ["Spell hit rating", "Spell Hit", "Hit"],
                    splpen: ["Spell penetration", "Spell Pen", "Pen"],
                    sta: ["Stamina", "Sta", "Sta"],
                    str: ["Strength", "Str", "Str"],
                    pvppower: ["PvP Power", "PvPPower", "PvPPower"]
                }
            }
        }

        function av() {
            if (WH.Tooltip) {
                WH.wowheadRemotePreload = true
            }
            if (T) {
                if (!WH.wowheadRemotePreload) {
                    var a1 = ["basic.js?13"];
                    if (l("iconSize")) {
                        a1.push("global/WH/Icon.js")
                    }
                    for (var a4 = 0, a3; a3 = a1[a4]; a4++) {
                        var a2 = document.createElement("script");
                        a2.src = g_staticUrl + "/js/" + a3;
                        Q.appendChild(a2)
                    }
                }
            } else {
                V();
                var a0 = typeof g_ptractive !== "undefined" && g_ptractive;
                if (!a0) {
                    h.ptr = "www"
                }
            }
            for (var a5 in aY) {
                for (var a6 in aL) {
                    aY[a5][a6] = Z
                }
            }
        }

        function aA() {
            var a1 = l("hide");
            if (!a1) {
                return
            }
            if (typeof aP !== "undefined") {
                return
            }
            if (!document.styleSheets) {
                return
            }
            var a2 = document.createElement("style");
            a2.type = "text/css";
            Q.appendChild(a2);
            if (!window.createPopup) {
                Q.appendChild(document.createTextNode(""))
            }
            aP = document.styleSheets[document.styleSheets.length - 1];
            for (var a0 in a1) {
                if (!a1.hasOwnProperty(a0) || !a1[a0]) {
                    continue
                }
                if (aP.insertRule) {
                    aP.insertRule(".wowhead-tooltip .whtt-" + a0 + "{display: none}", aP.cssRules.length)
                } else {
                    if (aP.addRule) {
                        aP.addRule(".wowhead-tooltip .whtt-" + a0, "display: none", -1)
                    }
                }
            }
        }

        function aZ(a1, a0) {
            var a2 = aw(a1);
            if (!a2 || !a2[a0]) {
                WH.error("Wowhead tooltips could not find expected data for " + e(a1) + " #" + a0);
                return null
            }
            return a2[a0]
        }

        function aw(a0) {
            if (typeof ak[a0] !== "object") {
                WH.error("Wowhead tooltips could not find config for entity #" + a0);
                return null
            }
            return ak[a0].data
        }

        function e(a0) {
            if (typeof ak[a0] !== "object") {
                WH.error("Wowhead tooltips could not find config for entity #" + a0);
                return "Entity"
            }
            return ak[a0].name
        }

        function aR(a0) {
            if (typeof ak[a0] !== "object") {
                WH.error("Wowhead tooltips could not find config for entity #" + a0);
                return "unknown"
            }
            return ak[a0].path
        }

        function af(a0) {
            if (typeof ak[a0] !== "object") {
                WH.error("Wowhead tooltips could not find config for entity #" + a0);
                return false
            }
            var a1 = WH.getGets();
            if (a1.hasOwnProperty("whTestFetchAsJson")) {
                return true
            }
            return ak[a0].fetchAsJson === true
        }

        function l(a1) {
            var a0 = W();
            if (!a0) {
                return null
            }
            if (!a0.hasOwnProperty(a1)) {
                if (aW[a1] && a0.hasOwnProperty(aW[a1])) {
                    return a0[aW[a1]]
                }
                return null
            }
            return a0[a1]
        }

        function W() {
            if (typeof whTooltips === "object") {
                return whTooltips
            }
            if (typeof wowhead_tooltips === "object") {
                return wowhead_tooltips
            }
            return null
        }

        function V() {
            if (L) {
                return
            }
            L = true;
            WH.aE(document, "keydown", function (a0) {
                a0 = WH.normalizeEvent(a0);
                switch (a0.keyCode) {
                    case 27:
                        $WowheadPower.clearTouchTooltip();
                        WH.Tooltip.hide();
                        break
                }
            });
            if (WH.isTouch()) {
                k()
            } else {
                WH.aE(document, "mouseover", M)
            }
        }
        this.attachTouchTooltips = function (a0) {
            if (!WH.isTouch()) {
                return
            }
            if (a0 && a0.nodeType === 1) {
                k(a0)
            }
        };

        function x(a0) {
            if (typeof jQuery !== "undefined") {
                jQuery(a0);
                return
            }(/in/.test(document.readyState)) ? setTimeout(x.bind(null, a0), 9): a0()
        }

        function k(a0) {
            if (!WH.isTouch()) {
                return
            }
            x(function () {
                a0 = a0 || document.body;
                var a1 = WH.gE(a0, "a");
                for (var a2 in a1) {
                    if (a1[a2].onclick == null) {
                        a1[a2].onclick = t;
                        continue
                    }
                    WH.aE(a1[a2], "click", t)
                }
            })
        }
        this.init = function () {
            if (l("iconSize") && typeof Icon === "undefined") {
                setTimeout($WowheadPower.init, 10);
                return
            }
            if (T) {
                if (!WH.wowheadRemotePreload) {
                    WH.ae(Q, WH.ce("link", {
                        type: "text/css",
                        href: g_staticUrl + "/css/legacy/basic.css?14",
                        rel: "stylesheet"
                    }));
                    if (l("iconSize")) {
                        WH.ae(Q, WH.ce("link", {
                            type: "text/css",
                            href: g_staticUrl + "/css/legacy/wowhead/icon.css",
                            rel: "stylesheet"
                        }))
                    }
                }
            }
            V();
            x(function () {
                if (l("renameLinks") || l("colorLinks") || l("iconizeLinks") || l("iconSize")) {
                    for (var a0 = 0; a0 < document.links.length; a0++) {
                        var a1 = document.links[a0];
                        N(a1)
                    }
                    aA()
                }
            })
        };

        function u(a1, a0, a2, a3) {
            aY[a1][a0] = J;
            WH.xhrJsonRequest(a2 + aY[a1].url + a3, (function (a5, a4, a6) {
                if (!a6.target || !a6.target.response) {
                    WH.error("Wowhead tooltips failed to load scaling data for " + e(a5));
                    return
                }
                if (a5 === al) {
                    ap(a6.target.response, a4)
                } else {
                    if (a5 === A) {
                        i(a6.target.response, a4)
                    } else {
                        WH.error("Loaded an unsupported scale type.", a5)
                    }
                }
            }).bind(null, a1, a0))
        }

        function i(a2, a1) {
            WH.convertRatingToPercent.RB = a2.combatRatingsBase;
            WH.convertRatingToPercent.LH = a2.ratingsToPercentLH;
            WH.convertRatingToPercent.RM = a2.ratingsToPercentRM;
            WH.convertRatingToPercent.LT = a2.ratingsToPercentLT;
            WH.convertScalingFactor.SV = a2.itemScalingValue;
            WH.convertScalingFactor.SD = a2.scalingFactors;
            WH.curvePoints = a2.curvePoints;
            WH.applyStatModifications.ScalingData = a2.scalingData;
            WH.data.artifactKnowledgeMultiplier = a2.artifactKnowledgeMultiplier;
            if (WH.isSet("$WowheadPower")) {
                if (a1 === "ptr" || a1 === "beta") {
                    $WowheadPower.loadScales(A, a1)
                } else {
                    $WowheadPower.loadScales(A)
                }
            }
            if (WH.isSet("g_listviews") && g_listviews && g_listviews.hasOwnProperty("items")) {
                g_listviews.items.refreshRows(true)
            }
            if (WH.isSet("g_summaries") && g_summaries) {
                for (var a0 in g_summaries) {
                    if (g_summaries.hasOwnProperty(a0)) {
                        g_summaries[a0].refreshAll()
                    }
                }
            }
            if (WH.isSet("g_itemScalingCallbacks") && g_itemScalingCallbacks) {
                for (var a0 in g_itemScalingCallbacks) {
                    g_itemScalingCallbacks[a0]()
                }
            }
        }

        function ap(a1, a0) {
            WH.convertScalingSpell.SV = a1.scalingValue;
            WH.convertScalingSpell.SpellInformation = a1.spellInformation;
            WH.convertScalingSpell.RandPropPoints = a1.randPropPoints;
            if (a0 === "ptr" || a0 === "beta") {
                $WowheadPower.loadScales(al, a0)
            } else {
                $WowheadPower.loadScales(al)
            }
        }

        function P(a0) {
            var a1 = WH.getCursorPos(a0);
            ay = a1.x;
            ax = a1.y
        }

        function N(a2, bn) {
            if (a2.nodeName !== "A" && a2.nodeName !== "AREA") {
                return aN
            }
            var a6 = a2.rel;
            try {
                if (a2.dataset && a2.dataset.hasOwnProperty("wowhead")) {
                    a6 = a2.dataset.wowhead
                } else {
                    if (a2.getAttribute && a2.getAttribute("data-wowhead")) {
                        a6 = a2.getAttribute("data-wowhead")
                    }
                }
            } catch (bs) {
                void(0)
            }
            if ((!a2.href.length && !a6) || (a6 && /^np\b/.test(a6)) || (a2.getAttribute("data-disable-wowhead-tooltip") === "true") || (WH.isTouch() && a2.getAttribute("data-disable-wowhead-touch-tooltip") === "true")) {
                return q
            }
            var bk, bj, bi, a0, bp = {};
            r = bp;
            var a5 = function (bu, bv, bw) {
                switch (bv) {
                    case "buff":
                    case "map":
                    case "noimage":
                    case "notip":
                    case "premium":
                    case "pvp":
                    case "sock":
                    case "text":
                    case "twcata":
                    case "twmists":
                    case "twtbc":
                    case "twwotlk":
                        bp[bv] = true;
                        break;
                    case "artk":
                    case "c":
                    case "dd":
                    case "ddsize":
                    case "diff":
                    case "diffnew":
                    case "ench":
                    case "gem1lvl":
                    case "gem2lvl":
                    case "gem3lvl":
                    case "ilvl":
                    case "level":
                    case "lvl":
                    case "nlc":
                    case "pwr":
                    case "q":
                    case "rand":
                    case "rank":
                    case "spec":
                    case "tink":
                    case "upgd":
                        bp[bv] = parseInt(bw);
                        break;
                    case "abil":
                    case "azerite-powers":
                    case "bonus":
                    case "cri":
                    case "forg":
                    case "gem1bonus":
                    case "gem2bonus":
                    case "gem3bonus":
                    case "gems":
                    case "know":
                    case "pcs":
                    case "rewards":
                        bp[bv] = bw.split(":");
                        break;
                    case "domain":
                    case "who":
                        bp[bv] = bw;
                        break;
                    case "image":
                        if (bw === "premium") {
                            bp[bw] = true
                        } else {
                            bp[bv] = bw ? ("_" + bw) : ""
                        }
                        break;
                    case "transmog":
                        if (bw === "hidden") {
                            bp[bv] = bw
                        } else {
                            bp[bv] = parseInt(bw)
                        }
                        break;
                    case "when":
                        bp[bv] = new Date(parseInt(bw));
                        break
                }
            };
            var a7 = false;
            if (aB.applyto & 1) {
                bj = 2;
                bi = 3;
                if (a2.href.indexOf("http://") == 0 || a2.href.indexOf("https://") == 0) {
                    bk = 1;
                    a0 = a2.href.match(/^https?:\/\/(.+?)?\.?(?:wowhead)\.com(?:\:\d+)?\/\??(item|quest|spell|zone|achievement|event|itemset|item-set|transmog-set|outfit|guide|statistic|currency|npc|object|pet-ability|petability|building|follower|champion|bfa-champion|garrisonability|mission-ability|mission|ship|threat|resource|order-advancement|affix)[=/]([0-9\.-]+)/);
                    if (!a0) {
                        a0 = a2.href.match(/^https?:\/\/(.+?)?\.?(?:wowhead)\.com(?:\:\d+)?\/(guide)s\/([^\?&]+)/)
                    }
                    H = 0
                } else {
                    a7 = true;
                    a0 = a2.href.match(/()\/\??(item|quest|spell|zone|achievement|event|itemset|item-set|transmog-set|outfit|statistic|currency|npc|object|pet-ability|petability|building|follower|champion|bfa-champion|garrisonability|mission-ability|mission|ship|threat|resource|order-advancement|affix|guide)[=/]([0-9\.-]+)/);
                    if (!a0) {
                        a0 = a2.href.match(/()\/(guide)s\/([^\?&]+)/)
                    }
                    H = 1
                }
            }
            if (a0 == null && a6 && (aB.applyto & 2)) {
                bk = 0;
                bj = 1;
                bi = 2;
                a0 = a6.match(/(item|quest|spell|zone|achievement|event|itemset|item-set|transmog-set|outfit|statistic|currency|npc|object|pet-ability|petability|building|follower|champion|bfa-champion|garrisonability|mission-ability|mission|ship|threat|resource|order-advancement|affix|guide).?([0-9\.-]+)/);
                H = 1;
                a7 = true
            }
            a2.href.replace(/([a-zA-Z0-9-]+)=?([a-zA-Z0-9:-]*)/g, a5);
            if (a6) {
                a6.replace(/([a-zA-Z0-9-]+)=?([a-zA-Z0-9:-]*)/g, a5)
            }
            if (bp.gems && bp.gems.length > 0) {
                var bo;
                for (bo = Math.min(3, bp.gems.length - 1); bo >= 0; --bo) {
                    if (parseInt(bp.gems[bo])) {
                        break
                    }
                }++bo;
                if (bo == 0) {
                    delete bp.gems
                } else {
                    if (bo < bp.gems.length) {
                        bp.gems = bp.gems.slice(0, bo)
                    }
                }
            }
            var a1 = ["bonus", "gem1bonus", "gem2bonus", "gem3bonus"];
            for (var bg = 0, a8; a8 = a1[bg]; bg++) {
                if (bp[a8] && bp[a8].length > 0) {
                    for (bo = Math.min(16, bp[a8].length - 1); bo >= 0; --bo) {
                        if (parseInt(bp[a8][bo])) {
                            break
                        }
                    }++bo;
                    if (bo == 0) {
                        delete bp[a8]
                    } else {
                        if (bo < bp[a8].length) {
                            bp[a8] = bp[a8].slice(0, bo)
                        }
                    }
                }
            }
            if (bp.abil && bp.abil.length > 0) {
                var bo, br = [],
                    bm;
                for (bo = 0; bo < Math.min(8, bp.abil.length); bo++) {
                    if (bm = parseInt(bp.abil[bo])) {
                        br.push(bm)
                    }
                }
                if (br.length == 0) {
                    delete bp.abil
                } else {
                    bp.abil = br
                }
            }
            if (bp.rewards && bp.rewards.length > 0) {
                var bo;
                for (bo = Math.min(3, bp.rewards.length - 1); bo >= 0; --bo) {
                    if (/^\d+.\d+$/.test(bp.rewards[bo])) {
                        break
                    }
                }++bo;
                if (bo == 0) {
                    delete bp.rewards
                } else {
                    if (bo < bp.rewards.length) {
                        bp.rewards = bp.rewards.slice(0, bo)
                    }
                }
            }
            if (a0) {
                var bl, bt = "www";
                ar = a2;
                if (bp.domain) {
                    bt = bp.domain
                } else {
                    if (bk && a0[bk]) {
                        bt = a0[bk]
                    } else {
                        if (a7) {
                            if (WH.isSet("g_beta") && g_beta) {
                                bt = "beta"
                            } else {
                                if (WH.isSet("g_ptr") && g_ptr) {
                                    bt = "ptr"
                                }
                            }
                        }
                    }
                }
                if (window.location.pathname.indexOf("&ptr") != -1) {
                    bt = "ptr"
                }
                if (h[bt]) {
                    bt = h[bt]
                }
                bl = WH.getLocaleFromDomain(bt);
                if (/\bptr\d*\b/.test(bt)) {
                    bl = "ptr"
                } else {
                    if (/\bbeta\d*\b/.test(bt)) {
                        bl = "beta"
                    }
                }
                v = bt;
                if (a2.href.indexOf("#") != -1 && document.location.href.indexOf(a0[bj] + "=" + a0[bi]) != -1) {
                    return q
                }
                var bb = false;
                if (WH.isTouch()) {
                    if ("innerWidth" in window) {
                        bb = window.innerWidth < D
                    } else {
                        var bq = document.documentElement || document.body;
                        bb = !isNaN(bq.clientWidth) && bq.clientWidth < D
                    }
                }
                aq = aI["float"];
                if (bb) {
                    aq = aI.screen
                } else {
                    if ((a2.parentNode.className.indexOf("icon") == 0 && a2.parentNode.nodeName == "DIV") || a2.getAttribute("data-whattach") == "icon") {
                        aq = aI.attachToIcon
                    } else {
                        if (WH.isTouch() || a2.getAttribute("data-whattach") == "true") {
                            aq = aI.attach
                        } else {
                            var ba = a2.parentNode;
                            var a9 = 0;
                            while (ba) {
                                if (ba.className && ba.className.indexOf("menu-inner") == 0) {
                                    aq = aI.attachWithoutScreenshot;
                                    break
                                }
                                a9++;
                                if (a9 > 9) {
                                    break
                                }
                                ba = ba.parentNode
                            }
                        }
                    }
                }
                if (!WH.isTouch() && !a2.onmouseout) {
                    if (aq == aI["float"]) {
                        a2.onmousemove = aD
                    }
                    a2.onmouseout = aj
                }
                if (bn) {
                    E = true;
                    P(bn)
                }
                var bd = a0[bj];
                var a4 = WH.getIdFromTypeName(bd),
                    a3 = a0[bi];
                WH.Tooltip.showingTooltip = true;
                if (typeof a2.overrideTooltip == "object") {
                    var bf = a2.overrideTooltip.html;
                    var be = a2.overrideTooltip.html2;
                    if (typeof a2.overrideTooltip.htmlGenerator == "function") {
                        bf = a2.overrideTooltip.htmlGenerator(a2.overrideTooltip)
                    }
                    if (typeof a2.overrideTooltip.html2Generator == "function") {
                        be = a2.overrideTooltip.html2Generator(a2.overrideTooltip)
                    }
                    if (a2.overrideTooltip.spanClass) {
                        bf = '<span class="' + a2.overrideTooltip.spanClass + '">' + bf + "</span>";
                        if (be) {
                            be = '<span class="' + a2.overrideTooltip.spanClass + '">' + be + "</span>"
                        }
                    }
                    aU(bf, a2.overrideTooltip.icon, a2.overrideTooltip.map, a2.overrideTooltip.spellData, be, a2.overrideTooltip.image, a2.overrideTooltip.imageClass)
                } else {
                    j(a4, a3, bl, bp)
                }
                if (bn || !W()) {
                    return d
                }
                var bh = aZ(a4, at(a4, a3, bp));
                var bc = function (bv) {
                    if (bh.status[bl] != ao && bh.status[bl] != g) {
                        window.setTimeout(function () {
                            bc(bv)
                        }, 5);
                        return d
                    }
                    if ((l("renameLinks") && bv.getAttribute("data-wh-rename-link") !== "false") || bv.getAttribute("data-wh-rename-link") === "true") {
                        bv.innerHTML = "<span>" + bh["name_" + aL[bl]] + "</span>"
                    }
                    var bu = bv.getAttribute("data-wh-icon-size");
                    if ((bu || l("iconizeLinks")) && (a4 === A || a4 === ac || a4 === al) && bh.icon) {
                        if (!bu) {
                            bu = l("iconSize")
                        }
                        aF(bv, bh, bu)
                    }
                    if (l("colorLinks")) {
                        if (a4 === A) {
                            bv.className += " q" + bh.quality
                        }
                    }
                };
                bc(a2);
                return d
            }
        }

        function aF(a1, a2, a0) {
            if (!a0 || typeof Icon === "undefined" || WH.inArray(Icon.sizes, a0) < 0) {
                a0 = "tiny"
            }
            var a3 = a2.icon.toLocaleLowerCase();
            if (a0 === "tiny") {
                a1.className += " icontinyl";
                if (a1.style.setProperty) {
                    a1.style.setProperty("padding-left", "18px", "important")
                } else {
                    a1.style.paddingLeft = "18px"
                }
                a1.style.verticalAlign = "center";
                a1.style.background = "url(" + g_staticUrl + "/images/wow/icons/tiny/" + a3 + ".gif) left center no-repeat"
            } else {
                if (a1.getAttribute("data-wh-icon-added") === "true") {
                    return
                }
                WH.aef(a1, Icon.create(a3, Icon.sizeIds[a0], undefined, false, undefined, undefined, undefined, undefined, true))
            }
            a1.setAttribute("data-wh-icon-added", "true")
        }

        function M(a2) {
            a2 = WH.normalizeEvent(a2);
            var a1 = a2._target;
            var a0 = 0;
            while (a1 != null && a0 < 5 && N(a1, a2) === aN) {
                a1 = a1.parentNode;
                ++a0
            }
        }

        function t(a3) {
            a3 = WH.normalizeEvent(a3);
            var a2 = this;
            if (a2.hasWHTouchTooltip === true) {
                return
            }
            var a1 = 0;
            var a0;
            while (a2 != null && a1 < 5 && (a0 = N(a2, a3)) === aN) {
                a2 = a2.parentNode;
                ++a1
            }
            if (a0 === d) {
                if (ah !== null) {
                    ah.removeAttribute("data-showing-touch-tooltip");
                    ah.hasWHTouchTooltip = false
                }
                ah = a2;
                ah.hasWHTouchTooltip = true;
                if (a3.stopPropagation) {
                    a3.stopPropagation()
                }
                if (a3.preventDefault) {
                    a3.preventDefault()
                }
                return false
            }
        }

        function aD(a0) {
            a0 = WH.normalizeEvent(a0);
            P(a0);
            WH.Tooltip.move(ay, ax, 0, 0, f, F)
        }

        function aj() {
            an = null;
            ar = null;
            WH.Tooltip.hide()
        }

        function z(a0, a2) {
            var a1 = "tooltip";
            if (r && r.buff) {
                a1 = "buff"
            }
            if (r && r.text) {
                a1 = "text"
            }
            if (r && r.premium) {
                a1 = "tooltip_premium"
            }
            return a1 + (a2 ? a2 : "") + "_" + aL[a0]
        }

        function aT() {
            return (r && r.text) ? "text_icon" : "icon"
        }

        function aX(a0) {
            return (r && r.buff ? "buff" : "") + "spells_" + aL[a0]
        }

        function C(a0, a1) {
            if (typeof a1 === "undefined") {
                return "image_NONE"
            }
            return "image" + a1 + "_" + aL[a0]
        }

        function aE(a1, a3, a0) {
            var a2 = aw(a1);
            if (a2[a3] == null) {
                a2[a3] = {}
            }
            if (a2[a3].status == null) {
                a2[a3].status = {}
            }
            if (a2[a3].response == null) {
                a2[a3].response = {}
            }
            if (a2[a3].status[a0] == null) {
                a2[a3].status[a0] = S
            }
            if (a2[a3].callbacks == null) {
                a2[a3].callbacks = []
            }
        }

        function j(a4, a1, a6, a3) {
            if (!a3) {
                a3 = {}
            }
            var a5 = at(a4, a1, a3);
            an = a4;
            I = a5;
            az = a6;
            r = a3;
            aE(a4, a5, a6);
            var a2 = aw(a4);
            if (a2[a5].status[a6] == ao || a2[a5].status[a6] == g) {
                var a7 = a2[a5][C(a6, a3.image)];
                var a8 = a2[a5]["image" + a3.image + "_class"];
                var a0 = O(a4, a1);
                if (a0) {
                    a7 = a0[0];
                    a8 = a0[1]
                }
                aU(a2[a5][z(a6)], a2[a5][aT()], a2[a5].map, a2[a5][aX(a6)], a2[a5][z(a6, 2)], a7, a8)
            } else {
                if (a2[a5].status[a6] == ai || a2[a5].status[a6] == B) {
                    if (WH.inArray(y, a4) == -1) {
                        aU(a.loading)
                    }
                } else {
                    aC(a4, a1, a6, WH.inArray(y, a4) != -1, a3)
                }
            }
        }

        function aC(bb, a0, be, ba, a7) {
            var bc = at(bb, a0, a7);
            var a1 = aw(bb);
            if (a1[bc].status[be] != S && a1[bc].status[be] != aG) {
                return
            }
            a1[bc].status[be] = ai;
            if (!ba) {
                a1[bc].timer = setTimeout(function () {
                    Y.apply(this, [bb, bc, be])
                }, 333)
            }
            var a6 = "";
            for (var a8 in a7) {
                switch (a8) {
                    case "abil":
                    case "artk":
                    case "azerite-powers":
                    case "bonus":
                    case "dd":
                    case "ddsize":
                    case "diff":
                    case "diffnew":
                    case "ench":
                    case "gem1bonus":
                    case "gem1lvl":
                    case "gem2bonus":
                    case "gem2lvl":
                    case "gem3bonus":
                    case "gem3lvl":
                    case "gems":
                    case "ilvl":
                    case "level":
                    case "lvl":
                    case "nlc":
                    case "pvp":
                    case "q":
                    case "rand":
                    case "rank":
                    case "rewards":
                    case "sock":
                    case "spec":
                    case "tink":
                    case "transmog":
                    case "twcata":
                    case "twmists":
                    case "twtbc":
                    case "twwotlk":
                    case "upgd":
                        if (typeof a7[a8] === "object") {
                            a6 += "&" + a8 + "=" + a7[a8].join(":")
                        } else {
                            if (a7[a8] === true) {
                                a6 += "&" + a8
                            } else {
                                a6 += "&" + a8 + "=" + a7[a8]
                            }
                        }
                        break
                }
            }
            var a3 = WH.getDomainFromLocale(be);
            if (be == "ptr") {
                a3 = "ptr"
            } else {
                if (be == "beta") {
                    a3 = aH
                }
            }
            var a9 = (document.location.protocol != "https:" ? "http:" : document.location.protocol) + "//" + a3 + ".wowhead.com";
            if (WH.isDev()) {
                if (be == "ptr" || be == "beta") {
                    var a5 = document.location.hostname.substr(0, document.location.hostname.indexOf(".") + 1);
                    var a4 = document.location.hostname.substr(document.location.hostname.indexOf("."), document.location.hostname.indexOf("wowhead.com") - document.location.hostname.indexOf(".") - 1);
                    a4 = a4.replace("." + a3, "");
                    a9 = a9.replace(new RegExp("//" + a3), "//" + a5 + a3 + a4)
                }
                if (document.location.port != "") {
                    a9 += ((document.location.port.indexOf(":") < 0) ? ":" : "") + document.location.port
                }
            }
            var bf = typeof g_wow_build !== "undefined" ? "&" + g_wow_build : "";
            var a2 = af(bb);
            if (a2) {
                bf += "&json&power"
            } else {
                bf += "&power"
            }
            var bd = a9 + "/" + aR(bb) + "=" + a0 + a6 + bf;
            if (a2) {
                if (aY[bb] && aY[bb][be] == Z) {
                    u(bb, be, a9, bf)
                }
                if (bb == A && a7 && a7.hasOwnProperty("lvl") && aY[al] && aY[al][be] == Z) {
                    u(al, be, a9, bf)
                }
                WH.xhrJsonRequest(bd, (function (bi, bk, bh, bg, bj) {
                    if (!bj.target || !bj.target.response) {
                        WH.error("Wowhead tooltips failed to load data for " + e(bi) + " #" + bk);
                        return
                    }
                    $WowheadPower.register(bi, bh, bg, bj.target.response)
                }).bind(null, bb, a0, bc, be))
            } else {
                if (aY[bb] && aY[bb][be] == Z) {
                    WH.ajaxIshRequest(a9 + aY[bb].url + bf);
                    aY[bb][be] = J
                }
                if (bb == A && a7 && a7.hasOwnProperty("lvl") && aY[al] && aY[al][be] == Z) {
                    WH.ajaxIshRequest(a9 + aY[al].url + bf);
                    aY[al][be] = J
                }
                WH.ajaxIshRequest(bd)
            }
        }

        function aU(a7, bn, br, a2, a6, bc, a3) {
            aA();
            if (!E) {
                return
            }
            if (ar && ar._fixTooltip) {
                a7 = ar._fixTooltip(a7, an, I, ar)
            }
            var a4 = false;
            if (!a7) {
                a7 = e(an) + " not found :(";
                bn = "inv_misc_questionmark";
                a4 = true
            } else {
                if (r != null) {
                    if (WH.reforgeStats && r.forg && WH.reforgeStats[r.forg]) {
                        var bq = WH.reforgeStats[r.forg];
                        var bs = [bq.i1];
                        for (var bj in WH.individualToGlobalStat) {
                            if (WH.individualToGlobalStat[bj] == bs[0]) {
                                bs.push(bj)
                            }
                        }
                        var bg;
                        if ((bg = a7.match(new RegExp("(<!--(stat|rtg)(" + bs.join("|") + ")-->)[+-]?([0-9]+)"))) && !a7.match(new RegExp("<!--(stat|rtg)" + bq.i2 + "-->[+-]?[0-9]+"))) {
                            var bf = Math.floor(bg[4] * bq.v),
                                bb = aQ.traits[bq.s2][0];
                            if (bq.i2 == 6) {
                                a7 = a7.replace("<!--rs-->", "<br />+" + bf + " " + bb)
                            } else {
                                a7 = a7.replace("<!--rr-->", WH.sprintfGlobal(aQ.tooltip_genericrating, bb.toLowerCase(), bq.i2, bf))
                            }
                            a7 = a7.replace(bg[0], bg[1] + (bg[4] - bf));
                            a7 = a7.replace("<!--rf-->", '<span class="q2">' + WH.sprintfGlobal(aQ.tooltip_reforged, bf, aQ.traits[bq.s1][2], aQ.traits[bq.s2][2]) + "</span><br />")
                        }
                    }
                    if (r.pcs && r.pcs.length) {
                        var ba = I.match(/^(\d+)/);
                        ba = ba[1];
                        var be = 0;
                        for (var bj = 0, bl = r.pcs.length; bj < bl; ++bj) {
                            var bg;
                            if (bg = a7.match(new RegExp("<span><!--si([0-9]+:)*" + r.pcs[bj] + '(:[0-9]+)*--><a href="/??item=(\\d+)">(.+?)</a></span>'))) {
                                a7 = a7.replace(bg[0], '<span class="q13"><!--si' + r.pcs[bj] + '--><a href="/item=' + bg[3] + '">' + ((WH.isSet("g_items") && g_items[r.pcs[bj]]) ? g_items[r.pcs[bj]]["name_" + (!isNaN(parseInt(az)) ? aL[az] : "enus")] : bg[4]) + "</a></span>");
                                ++be
                            }
                        }
                        if (be > 0) {
                            a7 = a7.replace("(0/", "(" + be + "/");
                            a7 = a7.replace(new RegExp("<span>\\(([0-" + be + "])\\)", "g"), '<span class="q2">($1)')
                        }
                    }
                    if (r.know && r.know.length) {
                        a7 = WH.setTooltipSpells(a7, r.know, a2)
                    }
                    if (r.lvl) {
                        a7 = WH.setTooltipLevel(a7, (r.lvl ? r.lvl : 100), r.buff)
                    }
                    if (r.who && r.when) {
                        a7 = a7.replace("<table><tr><td><br />", '<table><tr><td><br /><span class="q2">' + WH.sprintf(a.achievementComplete, r.who, r.when.getMonth() + 1, r.when.getDate(), r.when.getFullYear()) + "</span><br /><br />");
                        a7 = a7.replace(/class="q0"/g, 'class="r3"')
                    }
                    if (r.notip && bc) {
                        a7 = "";
                        bn = null
                    }
                    if ((an == au) && r.pwr) {
                        a7 = a7.replace(/<!--sca-->(\d+)<!--sca-->/g, function (bt, bu) {
                            return Math.floor(parseInt(bu) * (1 + 0.05 * r.pwr))
                        })
                    }
                    if ((an == ac) && r.cri) {
                        for (var bj = 0; bj < r.cri.length; bj++) {
                            a7 = a7.replace(new RegExp("<!--cr" + parseInt(r.cri[bj]) + ":[^<]+", "g"), '<span class="q2">$&</span>')
                        }
                    }
                }
            }
            if (!T && WH.isSet("g_user") && ("lists" in g_user) && WH.isSet("g_completion")) {
                var bi = "";
                var a0 = ((an in g_types) && (g_types[an] in g_completion)) ? g_completion[g_types[an]] : false;
                var a9 = aZ(an, I);
                if (a0 && (an == aK)) {
                    if (a4 || (a7 == a.loading) || (a9.hasOwnProperty("worldquesttype") && a9.worldquesttype != 0) || (a9.hasOwnProperty("daily") && a9.daily != 0) || (a9.hasOwnProperty("weekly") && a9.weekly != 0)) {
                        a0 = false
                    }
                }
                var bd = !(a0 && (an in g_completion_categories) && WH.inArray(g_completion_categories[an], a9.completion_category) === -1);
                if (a0) {
                    for (var bo in g_user.lists) {
                        var bh = g_user.lists[bo];
                        if (!(bh.id in a0)) {
                            continue
                        }
                        var a8 = /^-?\d+(?:\.\d+)?/.exec(I);
                        a8 = (a8 && a8.length) ? a8[0] : I;
                        var bm = (WH.inArray(a0[bh.id], a8) != -1);
                        if (!bm && !bd) {
                            continue
                        }
                        bi += '<br><span class="progress-icon ' + (bm ? "progress-8" : "progress-0") + '"></span> ';
                        bi += bh.character + " - " + bh.realm + " " + bh.region
                    }
                }
                if (bi != "") {
                    a7 += '<br><span class="q">' + window.LANG.completion + ":</span>" + bi
                }
            }
            if (!T && an == A && WH.isSet("g_completion") && ("bagscans" in g_completion)) {
                var ba = /^\d+/.exec(I);
                if (ba) {
                    ba = ba[0]
                } else {
                    ba = -1
                }
                var a5 = [];
                for (var a1 in g_completion.bagscans) {
                    a5.push(a1)
                }
                var bp = "";
                while (a1 = a5.pop()) {
                    if (g_completion.bagscans[a1].items.hasOwnProperty(ba)) {
                        bp += '<tr><td class="q2" style="text-align: right">' + g_completion.bagscans[a1].items[ba] + '&nbsp;</td><td style="white-space: nowrap">' + g_completion.bagscans[a1].name + "</td></tr>"
                    }
                }
                if (bp != "") {
                    a7 += '<br><span class="q">' + window.LANG.tooltip_bagscanner + "</span><br><table>" + bp + "</table>"
                }
            }
            if (!T && an == aO && typeof WH.getPreferredTransmogRace !== "undefined") {
                var bk = WH.getPreferredTransmogRace();
                a7 = a7.replace(/\/modelviewer\/transmog\/\d+\/\d+\//g, "/modelviewer/transmog/" + bk.race + "/" + (bk.gender - 1) + "/")
            }
            if (!T && a7 && (r.diff || r.diffnew || r.noimage)) {
                bc = "";
                a3 = ""
            }
            a7 = a7.replace("http://", "//");
            if (r.map && br && br.getMap) {
                a6 = br.getMap()
            }
            switch (aq) {
                case aI.screen:
                    WH.Tooltip.showInScreen(ar, a7, null, a6, bc, a3, bn);
                    break;
                case aI.attachToIcon:
                case aI.attach:
                    WH.Tooltip.setIcon(aq == aI.attachToIcon ? null : bn);
                    WH.Tooltip.show(ar, a7, null, null, null, a6, bc, a3);
                    break;
                case aI.attachWithoutScreenshot:
                    WH.Tooltip.setIcon(bn);
                    WH.Tooltip.show(ar, a7, null, null, null, a6);
                    break;
                case aI["float"]:
                default:
                    WH.Tooltip.setIcon(bn);
                    WH.Tooltip.showAtXY(a7, ay, ax, f, F, a6, bc, a3)
            }
            if (T && WH.Tooltip.logo) {
                WH.Tooltip.logo.style.display = (H ? "block" : "none")
            }
        }

        function Y(a1, a3, a0) {
            if (an == a1 && I == a3 && az == a0) {
                aU(a.loading);
                var a2 = aw(a1);
                a2[a3].timer = setTimeout(function () {
                    U.apply(this, [a1, a3, a0])
                }, 3850)
            }
        }

        function U(a1, a3, a0) {
            var a2 = aw(a1);
            a2[a3].status[a0] = aG;
            if (an == a1 && I == a3 && az == a0) {
                aU(a.noResponse)
            }
        }

        function at(a0, a2, a1) {
            return a2 + (a1.rand ? "r" + a1.rand : "") + (a1.ench ? "e" + a1.ench : "") + (a1.gems ? "g" + a1.gems.join(",") : "") + (a1.sock ? "s" : "") + (a1.upgd ? "u" + a1.upgd : "") + (a1.twtbc ? "twtbc" : "") + (a1.twwotlk ? "twwotlk" : "") + (a1.twcata ? "twcata" : "") + (a1.twmists ? "twmists" : "") + (a1.ilvl ? "ilvl" + a1.ilvl : "") + (a1.lvl ? "lvl" + a1.lvl : "") + (a1.gem1lvl ? "g1lvl" + a1.gem1lvl : "") + (a1.gem2lvl ? "g2lvl" + a1.gem2lvl : "") + (a1.gem3lvl ? "g3lvl" + a1.gem3lvl : "") + (a1.artk ? "ak" + a1.artk : "") + (a1.nlc ? "nlc" + a1.nlc : "") + (a1.transmog ? "transmog" + a1.transmog : "") + (a1.tink ? "tink" + a1.tink : "") + (a1.pvp ? "pvp" : "") + (a1.bonus ? "b" + a1.bonus.join(",") : "") + (a1.gem1bonus ? "g1b" + a1.gem1bonus.join(",") : "") + (a1.gem2bonus ? "g2b" + a1.gem2bonus.join(",") : "") + (a1.gem3bonus ? "g3b" + a1.gem3bonus.join(",") : "") + (a1.q ? "q" + a1.q : "") + (a1.level ? "level" + a1.level : "") + (a1.abil ? "abil" + a1.abil.join(",") : "") + (a1.dd ? "dd" + a1.dd : "") + (a1.ddsize ? "ddsize" + a1.ddsize : "") + (a0 === al && a1.diff ? "diff" + a1.diff : "") + (a1.rank ? "rank" + a1.rank : "") + (a1.spec ? "spec" + a1.spec : "") + (a1.rewards ? "rewards" + a1.rewards.join(":") : "") + (a1["azerite-powers"] ? "azPowers" + a1["azerite-powers"] : "")
        }
        this.clearTouchTooltip = function (a2) {
            if (ah) {
                if (a2 !== true) {
                    ah.removeAttribute("data-showing-touch-tooltip")
                }
                ah.hasWHTouchTooltip = false
            }
            ah = null;
            if (a2 !== true && document.querySelectorAll) {
                var a0 = document.querySelectorAll("[data-showing-touch-tooltip]");
                if (a0 && a0.length) {
                    for (var a3 = 0, a1; a1 = a0[a3]; a3++) {
                        a1.removeAttribute("data-showing-touch-tooltip")
                    }
                }
            }
            if (WH.Tooltip.screen) {
                WH.Tooltip.screenInnerWrapper.scrollTop = 0;
                WH.Tooltip.screenInnerWrapper.scrollLeft = 0;
                WH.Tooltip.screen.style.display = "none";
                WH.Tooltip.mobileTooltipShown = false
            }
            WH.Tooltip.hide();
            $WowheadPower.setParent()
        };

        function O(a1, a3) {
            if (T) {
                return false
            }
            if (!g_user.premium) {
                return false
            }
            if (WH.Tooltip.hideScreenshots) {
                return false
            }
            var a2 = aR(a1);
            var a0 = "g_" + a2.replace("-", "") + "s";
            if (!window[a0]) {
                a0 = "g_" + a2.replace("-", "_") + "s";
                if (!window[a0]) {
                    return false
                }
            }
            a0 = window[a0];
            if (!a0[a3]) {
                return false
            }
            if (a0[a3]["screenshot"]) {
                return [WH.getScreenshotUrl(a0[a3]["screenshot"], "small"), "screenshot"]
            }
            return false
        }
        this.loadScales = function (a4, a1) {
            var a5 = aw(a4);
            for (var a3 in aL) {
                if (a1 == a3 || (!a1 && !isNaN(a3))) {
                    aY[a4][a3] = ab;
                    for (var a6 in a5) {
                        if (a5[a6].status[a3] == B && a5[a6].response[a3]) {
                            a5[a6].response[a3]()
                        }
                    }
                    if (a4 == al) {
                        var a0 = aw(A);
                        for (var a2 in a0) {
                            if (a0[a2].status[a3] == B && a0[a2].response[a3]) {
                                a0[a2].response[a3]()
                            }
                        }
                    }
                }
            }
        };
        this.register = function (a4, a7, a0, a3) {
            var a6 = aw(a4);
            aE(a4, a7, a0);
            if (aY[a4] && aY[a4][a0] != ab) {
                a6[a7].status[a0] = B;
                a6[a7].response[a0] = this.register.bind(this, a4, a7, a0, a3);
                return
            }
            if ((typeof a7 === "string" && (a7.indexOf("lvl") === 0 || a7.match(/[^i]lvl/))) && aY[al] && aY[al][a0] != ab) {
                a6[a7].status[a0] = B;
                a6[a7].response[a0] = this.register.bind(this, a4, a7, a0, a3);
                return
            }
            if (a6[a7].timer) {
                clearTimeout(a6[a7].timer);
                a6[a7].timer = null
            }
            if (!WH.wowheadRemote && a3.map) {
                if (a6[a7].map == null) {
                    a6[a7].map = new Mapper({
                        parent: WH.ce("div"),
                        zoom: 3,
                        zoomable: false,
                        buttons: false
                    })
                }
                a6[a7].map.update(a3.map);
                delete a3.map
            }
            WH.cO(a6[a7], a3);
            if (a6[a7].status[a0] == ai || a6[a7].status[a0] == B) {
                if (a6[a7][z(a0)]) {
                    a6[a7].status[a0] = ao
                } else {
                    a6[a7].status[a0] = g
                }
            }
            if (WH.Tooltip.showingTooltip && an == a4 && a7 == I && az == a0) {
                var a1 = a6[a7][C(a0, r.image)];
                var a2 = a6[a7]["image" + r.image + "_class"];
                var a5 = O(a4, a7);
                if (a5) {
                    a1 = a5[0];
                    a2 = a5[1]
                }
                aU(a6[a7][z(a0)], a6[a7].icon, a6[a7].map, a6[a7][aX(a0)], a6[a7][z(a0, 2)], a1, a2)
            }
            while (a6[a7].callbacks.length) {
                (a6[a7].callbacks.pop())()
            }
        };
        this.registerNpc = function (a2, a0, a1) {
            this.register(ag, a2, a0, a1)
        };
        this.registerCurrency = function (a2, a0, a1) {
            this.register(m, a2, a0, a1)
        };
        this.registerPetAbility = function (a2, a0, a1) {
            this.register(au, a2, a0, a1)
        };
        this.registerZone = function (a2, a0, a1) {
            this.register(aa, a2, a0, a1)
        };
        this.registerObject = function (a2, a0, a1) {
            this.register(X, a2, a0, a1)
        };
        this.registerItem = function (a2, a0, a1) {
            this.register(A, a2, a0, a1)
        };
        this.registerHoliday = function (a2, a0, a1) {
            this.register(o, a2, a0, a1)
        };
        this.registerItemSet = function (a2, a0, a1) {
            this.register(n, a2, a0, a1)
        };
        this.registerTransmogSet = function (a2, a0, a1) {
            this.register(aO, a2, a0, a1)
        };
        this.registerOutfit = function (a2, a0, a1) {
            this.register(b, a2, a0, a1)
        };
        this.registerQuest = function (a2, a0, a1) {
            this.register(aK, a2, a0, a1)
        };
        this.registerSpell = function (a2, a0, a1) {
            this.register(al, a2, a0, a1)
        };
        this.registerAchievement = function (a2, a0, a1) {
            this.register(ac, a2, a0, a1)
        };
        this.registerBuilding = function (a2, a0, a1) {
            this.register(aJ, a2, a0, a1)
        };
        this.registerFollower = function (a2, a0, a1) {
            this.register(ae, a2, a0, a1)
        };
        this.registerChampion = function (a2, a0, a1) {
            this.register(R, a2, a0, a1)
        };
        this.registerBfaChampion = function (a2, a0, a1) {
            this.register(aS, a2, a0, a1)
        };
        this.registerMissionAbility = function (a2, a0, a1) {
            this.register(G, a2, a0, a1)
        };
        this.registerMission = function (a2, a0, a1) {
            this.register(aM, a2, a0, a1)
        };
        this.registerShip = function (a2, a0, a1) {
            this.register(w, a2, a0, a1)
        };
        this.registerThreat = function (a2, a0, a1) {
            this.register(am, a2, a0, a1)
        };
        this.registerResource = function (a2, a0, a1) {
            this.register(s, a2, a0, a1)
        };
        this.registerOrderAdvancement = function (a2, a0, a1) {
            this.register(aV, a2, a0, a1)
        };
        this.registerAffix = function (a2, a0, a1) {
            this.register(c, a2, a0, a1)
        };
        this.registerGuide = function (a2, a0, a1) {
            this.register(p, a2, a0, a1)
        };
        this.displayTooltip = function (a1, a3, a0, a2) {
            j(a1, a3, a0, a2)
        };
        this.request = function (a2, a4, a0, a3) {
            if (!a3) {
                a3 = {}
            }
            var a1 = at(a2, a4, a3);
            aE(a2, a1, a0);
            aC(a2, a4, a0, 1, a3)
        };
        this.requestItem = function (a1, a0) {
            this.request(A, a1, ad.getId(), a0)
        };
        this.requestSpell = function (a0) {
            this.request(al, a0, ad.getId())
        };
        this.getStatus = function (a1, a3, a0) {
            var a2 = aw(a1);
            if (a2[a3] != null) {
                return a2[a3].status[a0]
            } else {
                return S
            }
        };
        this.getItemStatus = function (a1, a0) {
            this.getStatus(A, a1, a0)
        };
        this.getSpellStatus = function (a1, a0) {
            this.getStatus(al, a1, a0)
        };
        this.triggerTooltip = function (a1, a0) {
            N(a1, a0 || {
                target: a1
            })
        };
        this.refreshLinks = function (a0) {
            if (a0 === true || l("renameLinks") || l("colorLinks") || l("iconizeLinks")) {
                for (var a1 = 0; a1 < document.links.length; a1++) {
                    var a3 = document.links[a1];
                    var a2 = a3.parentNode;
                    var a4 = false;
                    while (a2 != null) {
                        if ((" " + a2.className + " ").replace(/[\n\t]/g, " ").indexOf(" wowhead-tooltip ") > -1) {
                            a4 = true;
                            break
                        }
                        a2 = a2.parentNode
                    }
                    if (!a4) {
                        N(a3)
                    }
                }
            }
            this.hideTooltip()
        };
        this.setParent = function (a0) {
            WH.Tooltip.reset();
            WH.Tooltip.prepare(a0)
        };
        this.replaceWithTooltip = function (a4, a2, a6, a0, a5) {
            if (!a5) {
                a5 = {}
            }
            if (!a0) {
                a0 = (ad || window.Locale).getId()
            }
            if (typeof a4 == "string") {
                a4 = document.getElementById(a4)
            }
            if (!a4 || !a4.id) {
                return false
            }
            var a1 = at(a2, a6, a5);
            aE(a2, a1, a0);
            var a3 = aw(a2);
            switch (this.getStatus(a2, a6, a0)) {
                case ao:
                    if (!a4.parentNode) {
                        return true
                    }
                    while (a4.hasChildNodes()) {
                        a4.removeChild(a4.firstChild)
                    }
                    a4.className += " wowhead-tooltip-inline" + (a3[a1].icon ? " wowhead-tooltip-inline-icon" : "");
                    WH.Tooltip.append(a4.id, a3[a1][z(a0)], true, a3[a1].icon);
                    return true;
                    break;
                case ai:
                case S:
                    a3[a1].callbacks.push(this.replaceWithTooltip.bind(this, a4, a2, a6, a0, a5));
                    this.request(a2, a6, a0, a5);
                    return true
            }
            return false
        };
        if (T) {
            this.set = function (a0) {
                WH.cO(aB, a0)
            };
            this.showTooltip = function (a2, a1, a0) {
                P(a2);
                aU(a1, a0)
            };
            this.hideTooltip = function () {
                if (typeof WH === "undefined" || typeof WH.Tooltip === "undefined" || typeof WH.Tooltip.hide !== "function") {
                    return
                }
                WH.Tooltip.hide()
            };
            this.moveTooltip = function (a0) {
                aD(a0)
            }
        }
        av()
    }
};