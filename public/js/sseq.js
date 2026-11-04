/* Interactive spectral sequence charts.
 *
 * Markup: <div class="sseq"><script type="application/json">{...}</script></div>
 * Spec:
 *   x: [min, max], y: [min, max]       grid range (p across, q up)
 *   cw, ch                              cell width / height in px (optional)
 *   classes: [{id, p, q, label, zero, note}]
 *   diffs:   [{from, to, page, label, src, tgt}]
 *            to may be a class id or [p, q] (may lie off the chart);
 *            src/tgt: "dies" (default) or "keep"; tgtLabel / srcLabel replace
 *            the label on later pages.
 *   exts:    [{from, to, label}]         extensions, drawn on E_infinity
 *   highlight: n                         total degree to mark by default
 *   result:  TeX string shown under the chart
 *   variants: [{name, classes?, diffs?, exts?, result?, highlight?}]
 */
(function () {
  var NS = "http://www.w3.org/2000/svg";

  function svgEl(tag, attrs, parent) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function htmlEl(tag, cls, parent, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    if (parent) parent.appendChild(e);
    return e;
  }
  function typeset(nodes) {
    if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise(nodes).then(function () { if (window.mjxFit) window.mjxFit(); }).catch(function () {});
  }

  function build(root, n) {
    var spec = JSON.parse(root.querySelector('script[type="application/json"]').textContent);
    var cw = spec.cw || 76, ch = spec.ch || 52;
    var padL = 34, padB = 30, padT = 12, padR = 12;
    var nx = spec.x[1] - spec.x[0] + 1, ny = spec.y[1] - spec.y[0] + 1;
    var W = padL + nx * cw + padR, H = padT + ny * ch + padB;
    var X = function (p) { return padL + (p - spec.x[0] + 0.5) * cw; };
    var Y = function (q) { return padT + (spec.y[1] - q + 0.5) * ch; };
    var inRange = function (p, q) { return p >= spec.x[0] && p <= spec.x[1] && q >= spec.y[0] && q <= spec.y[1]; };

    var state = { v: 0, page: null };

    var bar = htmlEl("div", "sseq-bar", root);
    var vWrap = spec.variants ? htmlEl("div", "sseq-variants", bar) : null;
    var pWrap = htmlEl("div", "sseq-pages", bar);

    var scroller = htmlEl("div", "sseq-scroll", root);
    var stage = htmlEl("div", "sseq-stage", scroller);
    stage.style.width = W + "px";
    stage.style.height = H + "px";
    var svg = svgEl("svg", { width: W, height: H, viewBox: "0 0 " + W + " " + H, "aria-hidden": "true" }, stage);
    var defs = svgEl("defs", {}, svg);
    var mid = "ssq-ah-" + n, eid = "ssq-eh-" + n;
    svgEl("path", { d: "M0 0L10 5L0 10z", class: "ssq-head" }, svgEl("marker", { id: mid, viewBox: "0 0 10 10", refX: 9, refY: 5, markerWidth: 7, markerHeight: 7, orient: "auto-start-reverse" }, defs));
    svgEl("path", { d: "M0 0L10 5L0 10z", class: "ssq-ehead" }, svgEl("marker", { id: eid, viewBox: "0 0 10 10", refX: 9, refY: 5, markerWidth: 7, markerHeight: 7, orient: "auto-start-reverse" }, defs));

    // Grid and axes.
    var grid = svgEl("g", { class: "ssq-grid" }, svg);
    for (var i = 0; i <= nx; i++) svgEl("line", { x1: padL + i * cw, y1: padT, x2: padL + i * cw, y2: padT + ny * ch }, grid);
    for (var j = 0; j <= ny; j++) svgEl("line", { x1: padL, y1: padT + j * ch, x2: padL + nx * cw, y2: padT + j * ch }, grid);
    var axes = svgEl("g", { class: "ssq-axes" }, svg);
    svgEl("line", { x1: padL, y1: padT, x2: padL, y2: padT + ny * ch }, axes);
    svgEl("line", { x1: padL, y1: padT + ny * ch, x2: padL + nx * cw, y2: padT + ny * ch }, axes);
    var ticks = svgEl("g", { class: "ssq-ticks" }, svg);
    for (var p = spec.x[0]; p <= spec.x[1]; p++) svgEl("text", { x: X(p), y: padT + ny * ch + 19, "text-anchor": "middle" }, ticks).textContent = p;
    for (var q = spec.y[0]; q <= spec.y[1]; q++) svgEl("text", { x: padL - 12, y: Y(q) + 4, "text-anchor": "middle" }, ticks).textContent = q;
    svgEl("text", { x: padL + nx * cw - 4, y: padT + ny * ch + 19, "text-anchor": "end", class: "ssq-axis-name" }, ticks).textContent = "";

    var diag = svgEl("g", { class: "ssq-diag" }, svg);
    var arrows = svgEl("g", { class: "ssq-arrows" }, svg);
    var overlay = htmlEl("div", "sseq-overlay", stage);
    var tip = htmlEl("div", "sseq-tip", stage);
    var result = htmlEl("div", "sseq-result", root);

    function current() {
      var v = spec.variants ? spec.variants[state.v] : {};
      return {
        classes: v.classes || spec.classes || [],
        diffs: v.diffs || spec.diffs || [],
        exts: v.exts || spec.exts || [],
        result: v.result != null ? v.result : spec.result,
        highlight: v.highlight != null ? v.highlight : spec.highlight
      };
    }

    function pagesOf(cur) {
      var ps = [];
      cur.diffs.forEach(function (d) { if (ps.indexOf(d.page) < 0) ps.push(d.page); });
      ps.sort(function (a, b) { return a - b; });
      return ps;
    }

    function drawDiagonal(nn, cls) {
      var pmin = Math.max(spec.x[0], nn - spec.y[1]), pmax = Math.min(spec.x[1], nn - spec.y[0]);
      if (pmin > pmax) return;
      var x1 = padL + (pmin - spec.x[0]) * cw, y1 = padT + (spec.y[1] - (nn - pmin)) * ch;
      var x2 = padL + (pmax - spec.x[0] + 1) * cw, y2 = padT + (spec.y[1] - (nn - pmax) + 1) * ch;
      svgEl("line", { x1: x1, y1: y1, x2: x2, y2: y2, class: cls }, diag);
      var lab = svgEl("text", { x: x2 - 4, y: Math.min(y2, padT + ny * ch) - 6, "text-anchor": "end", class: cls + "-label" }, diag);
      lab.textContent = "n = " + nn;
    }

    function arrow(sx, sy, tx, ty, opts) {
      var dx = tx - sx, dy = ty - sy, len = Math.sqrt(dx * dx + dy * dy) || 1;
      var ux = dx / len, uy = dy / len, r0 = opts.r0, r1 = opts.r1;
      var x1 = sx + ux * r0, y1 = sy + uy * r0, x2 = tx - ux * r1, y2 = ty - uy * r1;
      var d, mx, my;
      if (opts.curve) {
        var off = opts.curve * Math.min(len, 140);
        var cx = (x1 + x2) / 2 - uy * off, cy = (y1 + y2) / 2 + ux * off;
        d = "M" + x1 + " " + y1 + " Q" + cx + " " + cy + " " + x2 + " " + y2;
        mx = (x1 + 2 * cx + x2) / 4; my = (y1 + 2 * cy + y2) / 4;
      } else {
        d = "M" + x1 + " " + y1 + " L" + x2 + " " + y2;
        mx = (x1 + x2) / 2; my = (y1 + y2) / 2;
      }
      var path = svgEl("path", { d: d, class: opts.cls, "marker-end": "url(#" + opts.marker + ")" }, arrows);
      var L = path.getTotalLength ? path.getTotalLength() : len;
      path.style.strokeDasharray = opts.dashed ? "" : L;
      path.style.strokeDashoffset = opts.dashed ? "" : L;
      requestAnimationFrame(function () { requestAnimationFrame(function () { path.style.strokeDashoffset = opts.dashed ? "" : 0; path.classList.add("in"); }); });
      if (opts.label) {
        var lx = mx - uy * 14, ly = my + ux * 14;
        if (uy * -1 < 0) { lx = mx + uy * 14; ly = my - ux * 14; }
        var lab = htmlEl("div", "sseq-dlabel " + (opts.labelCls || ""), overlay, "\\(" + opts.label + "\\)");
        lab.style.left = lx + "px";
        lab.style.top = ly + "px";
      }
    }

    function render() {
      var cur = current();
      var ps = pagesOf(cur);
      var pages = ps.length ? ps.concat([Infinity]) : [Infinity];
      if (state.page == null || pages.indexOf(state.page) < 0) state.page = pages[0];
      var P = state.page;

      // Page buttons.
      pWrap.innerHTML = "";
      pages.forEach(function (pg) {
        var b = htmlEl("button", "sseq-btn", pWrap, pg === Infinity ? (ps.length ? "\\(E_\\infty\\)" : "\\(E_2 = E_\\infty\\)") : "\\(E_{" + pg + "}\\)");
        b.type = "button";
        b.setAttribute("aria-pressed", pg === P);
        b.addEventListener("click", function () { state.page = pg; render(); });
      });
      if (pages.length === 1) pWrap.classList.add("single"); else pWrap.classList.remove("single");

      // Class status on page P.
      var byId = {};
      cur.classes.forEach(function (c) { byId[c.id] = { c: c, dead: false, label: c.label, hit: false }; });
      cur.diffs.forEach(function (d) {
        if (d.page >= P) return;
        var s = byId[d.from];
        if (s) { if ((d.src || "dies") === "dies") s.dead = true; if (d.srcLabel) s.label = d.srcLabel; }
        var t = typeof d.to === "string" ? byId[d.to] : null;
        if (t) { if ((d.tgt || "dies") === "dies") t.dead = true; if (d.tgtLabel) t.label = d.tgtLabel; }
      });

      overlay.innerHTML = "";
      arrows.innerHTML = "";
      diag.innerHTML = "";
      tip.classList.remove("show");
      if (cur.highlight != null) drawDiagonal(cur.highlight, "ssq-band fixed");

      var nodes = {};
      cur.classes.forEach(function (c) {
        var s = byId[c.id];
        var node = htmlEl("button", "sseq-class" + (c.zero ? " zero" : "") + (s.dead ? " dead" : ""), overlay, "\\(" + s.label + "\\)");
        node.type = "button";
        node.style.left = X(c.p) + "px";
        node.style.top = Y(c.q) + "px";
        var nn = c.p + c.q;
        node.setAttribute("aria-label", "(" + c.p + ", " + c.q + "), total degree " + nn);
        var show = function () {
          diag.querySelectorAll(".hover").forEach(function (e) { e.remove(); });
          drawDiagonal(nn, "ssq-band hover");
          tip.innerHTML = "<b>(p, q) = (" + c.p + ", " + c.q + ")</b> · total degree " + nn +
            (s.dead ? " · <i>gone by this page</i>" : "") + (c.note ? "<br>" + c.note : "");
          tip.style.left = X(c.p) + "px";
          tip.style.top = (Y(c.q) - ch / 2 - 6) + "px";
          tip.classList.add("show");
          typeset([tip]);
        };
        var hide = function () {
          diag.querySelectorAll(".hover").forEach(function (e) { e.remove(); });
          tip.classList.remove("show");
        };
        node.addEventListener("mouseenter", show);
        node.addEventListener("focus", show);
        node.addEventListener("mouseleave", hide);
        node.addEventListener("blur", hide);
        nodes[c.id] = node;
      });

      // Differentials of this page.
      if (P !== Infinity) {
        cur.diffs.forEach(function (d) {
          if (d.page !== P) return;
          var s = byId[d.from].c, tp, tq;
          if (typeof d.to === "string") { tp = byId[d.to].c.p; tq = byId[d.to].c.q; } else { tp = d.to[0]; tq = d.to[1]; }
          var off = !inRange(tp, tq);
          var tx = X(tp), ty = Y(tq);
          if (off) { // clip at the right/bottom edge of the chart
            var ex = padL + nx * cw - 4, t = (ex - X(s.p)) / (tx - X(s.p));
            if (t < 1) { tx = ex; ty = Y(s.q) + (ty - Y(s.q)) * t; }
          }
          arrow(X(s.p), Y(s.q), tx, ty, { r0: 16, r1: off ? 2 : 16, cls: "ssq-d" + (off ? " off" : ""), marker: mid, label: d.label });
          nodes[d.from].classList.add("active");
          if (typeof d.to === "string") nodes[d.to].classList.add("active");
        });
      } else {
        cur.exts.forEach(function (e) {
          var s = byId[e.from].c, t = byId[e.to].c;
          arrow(X(s.p), Y(s.q), X(t.p), Y(t.q), { r0: 16, r1: 16, curve: 0.35, cls: "ssq-ext", marker: eid, label: e.label, labelCls: "ext", dashed: true });
          nodes[e.from].classList.add("ext");
          nodes[e.to].classList.add("ext");
        });
      }

      result.innerHTML = cur.result ? cur.result : "";
      result.style.display = cur.result ? "" : "none";
      typeset([overlay, pWrap, result]);
    }

    if (vWrap) {
      spec.variants.forEach(function (v, k) {
        var b = htmlEl("button", "sseq-btn variant", vWrap, v.name);
        b.type = "button";
        b.addEventListener("click", function () {
          state.v = k;
          vWrap.querySelectorAll("button").forEach(function (x, m) { x.setAttribute("aria-pressed", m === k); });
          render();
        });
        b.setAttribute("aria-pressed", k === 0);
      });
    }
    render();
  }

  function init() {
    document.querySelectorAll(".sseq").forEach(function (el, i) {
      if (!el.dataset.built) { el.dataset.built = "1"; build(el, i); }
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
