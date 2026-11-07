// Shared header/footer and the showcase cards (data comes from data.js, built by scripts/build_site.ps1).
// Translated pages live in site/<lang>/ (scripts/build_i18n.py) and set window.LANG and window.UI before this script.
(function () {
  var LANG = window.LANG || "en";
  var UP = LANG === "en" ? "" : "../";                       // translated pages sit one folder down
  var TRANSLATED = window.I18N_PAGES || [];
  function T(s) { return (window.UI && window.UI[s]) || s; }
  function page(p) {                                         // link to a page in this language when it exists
    var file = p.split("#")[0];
    return LANG === "en" || TRANSLATED.indexOf(file) >= 0 ? p : "../" + p;
  }

  var BOTBASE = "https://t.me/BacktestStationBot";
  // Partner links: ?ref=code on any page is remembered, and the Telegram buttons carry it into the bot.
  var ref = new URLSearchParams(location.search).get("ref");
  ref = ref && /^[a-z0-9]{3,20}$/.test(ref) ? ref : null;
  try {
    if (ref) localStorage.setItem("bs_ref", ref); else ref = localStorage.getItem("bs_ref");
  } catch (e) {}
  var BOT = ref ? BOTBASE + "?start=ref_" + ref : BOTBASE;
  var PAGES = [["index.html", "Home"], ["showcase.html", "Showcase"], ["pricing.html", "Pricing"],
               ["guides.html", "Guides"], ["methodology.html", "Methodology"], ["faq.html", "FAQ"], ["verify.html", "Verify"]];
  var here = location.pathname.split("/").pop() || "index.html";
  var logo = '<img class="logo" src="' + UP + 'assets/logo.svg" alt="" width="30" height="30">';

  // Language menu: the same page in another language (English, or a page not translated yet, lives at the root).
  function langMenu() {
    var L = window.LANGS || {};
    var keys = Object.keys(L);
    if (keys.length < 2) return "";
    return '<select class="lang" aria-label="Language">' + keys.map(function (k) {
      return '<option value="' + k + '"' + (k === LANG ? " selected" : "") + ">" + L[k] + "</option>";
    }).join("") + "</select>";
  }
  function goLang(k) {
    var root = UP;                                           // from a translated page, root is one level up
    var target = k === "en" || (window.I18N_PAGES || []).indexOf(here) < 0 ? root + here : root + k + "/" + here;
    try { localStorage.setItem("bs_lang", k); } catch (e) {}
    location.href = target + location.search + location.hash;
  }

  // First visit to an English page: open the visitor's language if we have it (once; their own choice always wins).
  try {
    var saved = localStorage.getItem("bs_lang"), nl = (navigator.language || "en").slice(0, 2).toLowerCase();
    if (LANG === "en" && !saved && nl !== "en" && (window.LANGS || {})[nl] && TRANSLATED.indexOf(here) >= 0 &&
        !/bot|crawl|spider/i.test(navigator.userAgent)) {
      localStorage.setItem("bs_lang", nl); location.replace(nl + "/" + here + location.search + location.hash);
    }
  } catch (e) {}

  var top = document.getElementById("top");
  if (top) {
    top.className = "top";
    top.innerHTML = '<div class="wrap"><a class="brand" href="' + page("index.html") + '">' + logo +
      'Backtest<span class="sub">Station</span></a>' +
      '<button class="menu-btn" aria-label="Menu" aria-expanded="false">' + T("Menu") + '</button><nav class="menu">' +
      PAGES.map(function (p) { return '<a href="' + page(p[0]) + '"' + (p[0] === here ? ' class="on"' : "") + ">" + T(p[1]) + "</a>"; }).join("") +
      '<a class="btn sm" href="' + BOT + '">' + T("Test my bot") + "</a>" + langMenu() + "</nav></div>";
    var btn = top.querySelector(".menu-btn"), nav = top.querySelector("nav");
    btn.addEventListener("click", function () {
      nav.classList.toggle("open"); btn.setAttribute("aria-expanded", nav.classList.contains("open"));
    });
    var sel = top.querySelector("select.lang");
    if (sel) sel.addEventListener("change", function () { goLang(sel.value); });
  }
  var foot = document.getElementById("foot");
  if (foot) {
    foot.innerHTML = '<div class="wrap"><div class="slogan">' + T("We test the past, not the future.") + "</div>" +
      "<div>" + T("Every report is an analysis of past performance. It is not a forecast and not investment advice.") + "</div>" +
      '<div class="row"><a href="' + BOT + '">Telegram: @BacktestStationBot</a><a href="' + page("about.html") + '">' + T("About us") +
      '</a><a href="' + page("terms.html") + '">' + T("Terms") + '</a><a href="' + page("legal.html") + '">' + T("Disclaimer & privacy") +
      '</a><a href="' + page("showcase.html#authors") + '">' + T("For strategy authors") + '</a><a href="' + BOTBASE +
      '?start=feedback">' + T("Give feedback") + "</a></div>" +
      "<div>© " + new Date().getFullYear() + " Backtest Station</div></div>";
  }
  document.querySelectorAll("[data-bot]").forEach(function (a) { a.href = BOT; });

  // Visitor statistics (GoatCounter: no cookies, private dashboard). Set the account code once it exists; empty = off.
  var GOATCOUNTER = "";
  if (GOATCOUNTER && location.protocol === "https:") {
    var gc = document.createElement("script"); gc.async = true; gc.src = "https://gc.zgo.at/count.js";
    gc.setAttribute("data-goatcounter", "https://" + GOATCOUNTER + ".goatcounter.com/count");
    document.head.appendChild(gc);
  }

  // Structured data for search engines: who we are on every page, and the FAQ as questions and answers.
  function ld(obj) {
    var s = document.createElement("script"); s.type = "application/ld+json"; s.textContent = JSON.stringify(obj);
    document.head.appendChild(s);
  }
  ld({ "@context": "https://schema.org", "@type": "Organization", name: "Backtest Station", url: new URL(UP || "./", location.href).href,
       logo: new URL(UP + "assets/logo.svg", location.href).href, slogan: "We test the past, not the future.", sameAs: [BOTBASE] });
  var qa = document.querySelectorAll("main details");
  if (qa.length) {
    ld({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: Array.prototype.map.call(qa, function (d) {
      return { "@type": "Question", name: d.querySelector("summary").textContent,
               acceptedAnswer: { "@type": "Answer", text: d.querySelector("p").textContent.replace(/\s+/g, " ").trim() } };
    }) });
  }

  var DATA = window.SHOWCASE || [];
  function pct(x) { return (x > 0 ? "+" : "") + (100 * x).toFixed(1) + "%"; }
  function cls(x) { return x > 0 ? "pos" : x < 0 ? "neg" : ""; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function tone(c) {
    if (c.lookahead === true) return "bias";
    return c.score >= 70 ? "good" : c.score >= 40 ? "mid" : "bad";
  }
  // Best result first, then the bias catch, then inconclusive and no-edge cards taking turns (no-edge from the
  // weakest up), so the list does not get steadily worse towards the end.
  function ordered() {
    function pick(t, dir) {
      return DATA.filter(function (c) { return tone(c) === t; }).sort(function (a, b) { return dir * (b.score - a.score); });
    }
    var mid = pick("mid", 1), bad = pick("bad", -1), mix = [];
    while (mid.length || bad.length) {
      if (mid.length) mix.push(mid.shift());
      if (bad.length) mix.push(bad.shift());
    }
    return pick("good", 1).concat(pick("bias", 1), mix);
  }
  function months(c) {
    var a = new Date(c.period[0]), b = new Date(c.period[1]);
    var m = Math.round((b - a) / (30.44 * 864e5));
    if (LANG === "ru" && m >= 24) {                          // Russian plural: 2-4 года, 5+ лет
      var y = Math.round(m / 12), u = y % 10, h = y % 100;
      return y + (u === 1 && h !== 11 ? " год" : u >= 2 && u <= 4 && (h < 12 || h > 14) ? " года" : " лет");
    }
    return m >= 24 ? T("{n} years").replace("{n}", Math.round(m / 12)) : T("{n} months").replace("{n}", m);
  }
  function card(c, feature) {
    var t = tone(c), ribbon = t === "good" ? T("Best result") : t === "bias" ? T("Caught: uses future data") : "";
    return '<article class="card' + (feature && ribbon ? " feature" : "") + '">' +
      (ribbon ? '<div class="ribbon">' + ribbon + "</div>" : "") +
      '<div class="head"><div><h3>' + esc(c.name) + '</h3><div class="tag">' + T("Free open-source · default settings") + " · " +
      months(c) + '</div><span class="badge b-' + t + '">' + (c.verdict ? esc(c.verdict) + " · " : "") + esc(T(c.label)) +
      "</span></div>" +
      '<div class="score b-' + t + '" title="Edge Score">' + c.score + "</div></div>" +
      '<div class="metrics">' +
      '<div class="metric"><small>' + T("Strategy return") + '</small><b class="' + cls(c.return) + '">' + pct(c.return) + "</b></div>" +
      '<div class="metric"><small>' + T("Holding the same coins") + '</small><b class="' + cls(c.market) + '">' + pct(c.market) + "</b></div>" +
      '<div class="metric"><small>' + T("Max drawdown") + "</small><b>" + (100 * c.max_dd).toFixed(1) + "%</b></div>" +
      '<div class="metric"><small>' + T("Trades") + "</small><b>" + c.trades.toLocaleString("en-US") + "</b></div></div>" +
      (c.scenarios && c.scenarios.length === 3 ? '<div class="range small muted">' + T("Usual range") + ": " + pct(c.scenarios[2].ret) +
        " … " + pct(c.scenarios[0].ret) + (c.confidence ? " · " + T("Test confidence") + " " + c.confidence.toFixed(1) + "%" : "") +
        "</div>" : "") +
      (LANG === "en" ? '<ul class="flags">' + c.flags.slice(0, 2).map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul>" : "") +
      '<div class="links"><a class="btn sm" href="' + UP + esc(c.report) + '">' + T("Full report (PDF)") + "</a>" +
      '<a class="btn sm ghost" href="' + esc(c.source) + '" rel="noopener">' + T("Source code") + "</a></div></article>";
  }

  var stats = document.getElementById("stats");
  if (stats && DATA.length) {
    var bias = DATA.filter(function (c) { return c.lookahead === true; }).length;
    var edge = DATA.filter(function (c) { return tone(c) === "good"; }).length;
    stats.innerHTML = '<div class="stat"><b>' + DATA.length + "</b><span>" + T("public bots tested") + "</span></div>" +
      '<div class="stat"><b>' + bias + "</b><span>" + T("caught using future data") + "</span></div>" +
      '<div class="stat"><b>' + edge + "</b><span>" + T("with a real edge over holding") + "</span></div>";
  }
  // Verify page: a report's QR opens verify.html?id=S-01&c=1a2b3c4d; we show what we issued under that id.
  var vf = document.getElementById("verify");
  if (vf) {
    var form = vf.querySelector("form"), out = document.getElementById("verify-out");
    var VERIFY = window.VERIFY || {};
    DATA.forEach(function (c) {
      if (c.id) VERIFY[c.id] = { code: c.code, verdict: c.verdict, score: c.score, label: c.label, name: c.name, confidence: c.confidence,
        kind: "Showcase · " + c.kind, period: c.period, ret: c.return, trades: c.trades, report: c.report };
    });
    var check = function (id, code) {
      id = (id || "").trim().toUpperCase(); code = (code || "").trim().toLowerCase();
      var r = VERIFY[id];
      if (!id) { out.innerHTML = ""; return; }
      if (!r || r.code !== code) {
        out.innerHTML = '<div class="vf vf-bad">' + T("<b>Not found.</b> We did not issue a report with this ID and code. Check both, or ask the seller for the original. A report that does not match is not ours.") + "</div>";
        return;
      }
      var rows = [[T("Report"), id], [T("Issued for"), r.name], [T("Type"), r.kind], [T("Verdict"), r.verdict + " · " + T(r.label)],
        ["Edge Score", r.score + " / 100"]];
      if (r.confidence) rows.push([T("Test confidence"), r.confidence.toFixed(1) + "%"]);
      if (r.period) rows.push([T("Period tested"), r.period[0] + " … " + r.period[1]]);
      if (r.ret !== undefined) rows.push([T("Return"), pct(r.ret)]);
      if (r.claimed !== undefined) rows.push([T("Claimed / verified PnL"), r.claimed + " / " + r.verified + " USDT"]);
      if (r.trades) rows.push([T("Trades"), r.trades]);
      if (r.date) rows.push([T("Delivered"), r.date]);
      out.innerHTML = '<div class="vf vf-ok">' + T("<b>✓ Genuine.</b> This report was issued by Backtest Station. Compare these numbers with the PDF you were shown; they must be the same.") + "</div>" +
        '<div class="tbl-wrap"><table class="tbl">' +
        rows.map(function (x) { return "<tr><th>" + esc(x[0]) + "</th><td>" + esc(x[1]) + "</td></tr>"; }).join("") + "</table></div>" +
        (r.report ? '<p><a class="btn sm" href="' + UP + esc(r.report) + '">' + T("Open our copy (PDF)") + "</a></p>" : "");
    };
    var q = new URLSearchParams(location.search);
    form.id_.value = q.get("id") || ""; form.code.value = q.get("c") || "";
    check(form.id_.value, form.code.value);
    form.addEventListener("submit", function (e) { e.preventDefault(); check(form.id_.value, form.code.value); });
  }

  // Reviews: ratings come from the Telegram bot; comments appear only after we approve them.
  var rv = document.getElementById("reviews");
  if (rv) {
    var R = window.REVIEWS || { count: 0, reviews: [] };
    var FACES = ["😞", "😕", "😐", "🙂", "🤩"], ABOUT = { trades: "Track-record check", freqtrade: "Freqtrade backtest",
      pine: "Pine Script backtest", forex: "Forex EA review", other: "Strategy review", general: "General feedback" };
    // Counts stay hidden while they are small; the average appears once there are a few ratings.
    var head = R.count >= 5 && R.average ? '<div class="rv-avg"><b>' + R.average.toFixed(1) + "</b><span>" + T("/ 5 average rating") + "</span></div>" : "";
    var rate = '<div class="rv-rate"><span>' + T("How do we look so far? Tap a face, it opens our Telegram bot:") + '</span><div class="faces">' +
      FACES.map(function (f, i) { return '<a href="' + BOTBASE + "?start=fb" + (i + 1) + '" aria-label="' + (i + 1) + ' / 5">' + f + "</a>"; }).join("") +
      '</div><span class="small muted">' + T("You can add a comment there. We read every comment before it appears here.") + "</span></div>";
    var items = (R.reviews || []).map(function (r) {
      return '<figure class="rv"><div class="rv-top"><span class="rv-face">' + FACES[r.rating - 1] + "</span><b>" + r.rating +
        '/5</b><span class="muted small">' + esc(T(ABOUT[r.about] || r.about)) + " · " + esc(r.date) + "</span></div>" +
        "<blockquote>" + esc(r.comment) + "</blockquote><figcaption>— " + esc(r.name) + "</figcaption></figure>";
    }).join("");
    rv.innerHTML = head + (items ? '<div class="rv-list">' + items + "</div>" : "") + rate;
  }

  var list = document.getElementById("cards");
  if (list) {
    var limit = parseInt(list.getAttribute("data-limit") || "0", 10);
    var cards = ordered();
    if (limit) cards = cards.slice(0, limit);
    list.innerHTML = cards.map(function (c) { return card(c, true); }).join("") ||
      '<p class="muted">' + T("Results are being prepared.") + "</p>";
  }
})();
