/* Lớp ghi chú bằng Apple Pencil phủ lên trang.
   - Bật bằng nút "Ghi chú" ở dưới màn hình. Khi bật: Pencil viết, ngón tay vẫn cuộn và bấm nút.
   - Mỗi nét được gắn vào phần nội dung có thuộc tính data-ink nằm dưới nét bút (hoặc #view),
     nên khi mở/đóng các phần khác, nét vẫn nằm đúng chỗ.
   - Ghi chú lưu trên trình duyệt (localStorage), riêng cho từng trang (#bai-6, #ngu-phap, ...). */
(function () {
  const NOTES_KEY = 'hsk4:ink:notes', PREF_KEY = 'hsk4:ink:prefs';
  const load = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } };
  const store = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };

  const css = `
#inkCanvas{position:fixed;left:0;top:0;z-index:9;pointer-events:none}
body.ink-board #inkCanvas{z-index:61}
#inkBoard{position:fixed;inset:0;z-index:60;background-color:var(--bg);background-image:radial-gradient(var(--line) 1.2px,transparent 1.3px);background-size:28px 28px}
#inkBoard .tag{position:absolute;top:calc(16px + env(safe-area-inset-top,0px));left:max(20px,env(safe-area-inset-left,0px));font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-2)}
.ink-bar{position:fixed;z-index:70;left:50%;transform:translateX(-50%);bottom:calc(14px + env(safe-area-inset-bottom,0px));max-width:calc(100% - 24px);
  display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:2px;padding:6px;background:var(--surface);border-radius:18px;box-shadow:var(--shadow),0 0 0 1px var(--line)}
.ink-bar .grp{display:flex;align-items:center;gap:2px}
.ink-bar .sep{width:1px;height:26px;background:var(--line);margin:0 4px}
.ink-bar button{border:0;background:none;color:var(--ink-2);border-radius:12px;min-width:44px;height:44px;display:grid;place-items:center;padding:0}
.ink-bar button svg{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.ink-bar button[aria-pressed="true"]{background:var(--accent-soft);color:var(--accent)}
.ink-bar button:disabled{opacity:.3;cursor:default}
.ink-bar .sw{min-width:34px}.ink-bar .sw i{width:22px;height:22px;border-radius:50%;background:var(--c);box-shadow:0 0 0 1px var(--line)}
.ink-bar .sw[aria-pressed="true"]{background:none}.ink-bar .sw[aria-pressed="true"] i{box-shadow:0 0 0 2px var(--surface),0 0 0 4px var(--accent)}
.ink-bar .sz{min-width:34px}.ink-bar .sz i{border-radius:50%;background:var(--ink-2)}.ink-bar .sz[aria-pressed="true"]{background:none}.ink-bar .sz[aria-pressed="true"] i{background:var(--accent)}
.ink-bar .warn{background:var(--bad);color:#fff;padding:0 12px;font-weight:650;font-size:13px}
.ink-bar .main{gap:6px;display:flex;padding:0 14px;font-weight:650;font-size:14px;color:var(--ink)}
.ink-bar .main[aria-pressed="true"]{background:var(--accent);color:var(--accent-ink)}
.ink-bar.off .tool{display:none}
.ink-bar.dim .paint{opacity:.3;pointer-events:none}
body.ink-on{-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}
body.ink-on.ink-finger{touch-action:none}
body.ink-on main{padding-bottom:140px}
@media(max-width:620px){.ink-bar .sep{display:none}}
`;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  const ICONS = {
    pen: '<path d="M4 20l4.5-1L19 8.5 15.5 5 5 15.5 4 20z"/><path d="M13.5 7l3.5 3.5"/>',
    hl: '<path d="M8 15l-3.5 3.5H10l1.5-1.5"/><path d="M8 15l8-10 4 4-10 8z"/><path d="M4 21h16"/>',
    eraser: '<path d="M4 15l9-9 6 6-7 7H8z"/><path d="M9 10l6 6"/><path d="M12 19h8"/>',
    laser: '<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2 2M16.4 16.4l2 2M5.6 18.4l2-2M16.4 7.6l2-2"/>',
    undo: '<path d="M9 6l-5 5 5 5"/><path d="M4 11h10a5 5 0 010 10h-3"/>',
    redo: '<path d="M15 6l5 5-5 5"/><path d="M20 11H10a5 5 0 000 10h3"/>',
    clear: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
    board: '<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M8 21l4-5 4 5"/>',
    eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    hand: '<path d="M8 13V5.5a1.5 1.5 0 013 0V11M11 10.5V4a1.5 1.5 0 013 0v7M14 11V6a1.5 1.5 0 013 0v8a6 6 0 01-6 6h-1a6 6 0 01-5-2.8l-2.2-4a1.5 1.5 0 012.6-1.5L8 13"/>'
  };
  const svg = k => `<svg viewBox="0 0 24 24">${ICONS[k]}</svg>`;
  const COLORS = { ink: 'var(--ink)', red: '#E0452F', blue: '#2F6BE0', green: '#1F9A5C', yellow: '#FFD43B', mint: '#5EE0B5', pink: '#FF8FC4' };
  const PEN_COLORS = ['ink', 'red', 'blue', 'green'], HL_COLORS = ['yellow', 'mint', 'pink'];
  const PEN = [2, 3.5, 6], HL = [14, 22, 32], ERASE_R = 14;

  const bar = document.createElement('div');
  bar.className = 'ink-bar off';
  bar.dataset.ui = '';
  bar.innerHTML = `
    <div class="grp">
      <button class="main" data-k="toggle" aria-pressed="false" title="Bật/tắt viết bằng Apple Pencil">${svg('pen')}<span>Ghi chú</span></button>
    </div>
    <div class="sep tool"></div>
    <div class="grp tool">
      <button data-tool="pen" title="Bút" aria-label="Bút">${svg('pen')}</button>
      <button data-tool="hl" title="Bút dạ quang" aria-label="Bút dạ quang">${svg('hl')}</button>
      <button data-tool="eraser" title="Tẩy (xóa cả nét)" aria-label="Tẩy">${svg('eraser')}</button>
      <button data-tool="laser" title="Bút laser (nét tự mờ)" aria-label="Bút laser">${svg('laser')}</button>
    </div>
    <div class="sep tool"></div>
    <div class="grp tool paint" data-k="swatches"></div>
    <div class="grp tool paint" data-k="sizes"></div>
    <div class="sep tool"></div>
    <div class="grp tool">
      <button data-k="undo" title="Hoàn tác" aria-label="Hoàn tác">${svg('undo')}</button>
      <button data-k="redo" title="Làm lại" aria-label="Làm lại">${svg('redo')}</button>
      <button data-k="clear" title="Xóa hết nét của trang này" aria-label="Xóa hết">${svg('clear')}</button>
    </div>
    <div class="sep tool"></div>
    <div class="grp tool">
      <button data-k="board" aria-pressed="false" title="Bảng trắng" aria-label="Bảng trắng">${svg('board')}</button>
      <button data-k="hide" aria-pressed="false" title="Ẩn ghi chú" aria-label="Ẩn ghi chú">${svg('eye')}</button>
      <button data-k="finger" aria-pressed="false" title="Ngón tay / chuột cũng vẽ" aria-label="Ngón tay hoặc chuột cũng vẽ">${svg('hand')}</button>
    </div>`;
  const cv = document.createElement('canvas');
  cv.id = 'inkCanvas'; cv.setAttribute('aria-hidden', 'true');
  const board = document.createElement('div');
  board.id = 'inkBoard'; board.hidden = true; board.innerHTML = '<span class="tag">Bảng trắng</span>';
  document.body.append(board, cv, bar);
  const ctx = cv.getContext('2d');
  const q = k => bar.querySelector(`[data-k="${k}"]`);
  const view = document.getElementById('view');

  const coarse = matchMedia('(any-pointer: coarse)').matches;
  const prefs = load(PREF_KEY, {});
  const notes = load(NOTES_KEY, {});
  const state = {
    on: !!prefs.on, tool: 'pen', color: { pen: 'ink', hl: 'yellow' }, size: 1,
    board: false, hidden: false, finger: typeof prefs.finger === 'boolean' ? prefs.finger : !coarse
  };
  let saveT;
  const saveNotes = () => { clearTimeout(saveT); saveT = setTimeout(() => store(NOTES_KEY, notes), 400); };
  const savePrefs = () => store(PREF_KEY, { on: state.on, finger: state.finger });

  /* ---------- model ---------- */
  const page = () => (location.hash || '#lo-trinh').slice(1);
  const key = () => (state.board ? 'board:' : '') + page();
  const list = () => notes[key()] || (notes[key()] = []);
  const hist = {};
  const H = () => hist[key()] || (hist[key()] = { u: [], r: [] });
  function pushHistory(snap) { const h = H(); h.u.push(snap); if (h.u.length > 80) h.u.shift(); h.r = []; updateUndo(); }
  function undo() { const h = H(); if (!h.u.length) return; h.r.push(list().slice()); notes[key()] = h.u.pop(); saveNotes(); updateUndo(); requestRender(); }
  function redo() { const h = H(); if (!h.r.length) return; h.u.push(list().slice()); notes[key()] = h.r.pop(); saveNotes(); updateUndo(); requestRender(); }
  function updateUndo() { const h = H(); q('undo').disabled = !h.u.length; q('redo').disabled = !h.r.length; }

  /* Each stroke stores the anchor it was drawn on and coordinates relative to that
     anchor, divided by the anchor's width. */
  let anchors = null;
  function anchorEl(name) {
    if (name === '@board') return board;
    if (name === '@view') return view;
    if (!anchors) { anchors = new Map(); view.querySelectorAll('[data-ink]').forEach(el => anchors.set(el.dataset.ink, el)); }
    return anchors.get(name) || null;
  }
  function frameOf(name) {
    if (name === '@board') return { ox: 0, oy: 0, W: vw };
    const el = anchorEl(name);
    if (!el || !el.getClientRects().length) return null;
    const r = el.getBoundingClientRect();
    if (!r.width) return null;
    return { ox: r.left, oy: r.top, W: r.width };
  }
  function anchorAt(target) {
    if (state.board) return '@board';
    const el = target && target.closest && target.closest('[data-ink]');
    return el && view.contains(el) ? el.dataset.ink : '@view';
  }

  /* ---------- drawing ---------- */
  let dpr = 1, vw = 0, vh = 0, raf = 0, palette = {};
  function sizeCanvas() {
    dpr = Math.min(window.devicePixelRatio || 1, 2); vw = innerWidth; vh = innerHeight;
    cv.width = Math.round(vw * dpr); cv.height = Math.round(vh * dpr);
    cv.style.width = vw + 'px'; cv.style.height = vh + 'px'; requestRender();
  }
  function readColors() {
    const ink = getComputedStyle(document.body).color;
    for (const k in COLORS) palette[k] = k === 'ink' ? ink : COLORS[k];
    requestRender();
  }
  function requestRender() { if (!raf) raf = requestAnimationFrame(render); }
  const wf = p => 0.4 + p * 1.2;

  function drawStroke(s, f) {
    const P = s.p, n = P.length / 3; if (!n) return;
    if (s.b) { const top = s.b[1] * f.W + f.oy, bot = s.b[3] * f.W + f.oy; if (bot < -60 || top > vh + 60) return; }
    const X = i => P[i * 3] * f.W + f.ox, Y = i => P[i * 3 + 1] * f.W + f.oy, Pr = i => P[i * 3 + 2];
    const base = s.w * f.W, col = palette[s.c] || palette.ink;
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    if (s.t === 'hl') {
      ctx.save(); ctx.globalAlpha = 0.38; ctx.strokeStyle = col; ctx.lineWidth = base;
      ctx.beginPath(); ctx.moveTo(X(0), Y(0));
      if (n === 1) ctx.lineTo(X(0) + 0.1, Y(0));
      for (let i = 1; i < n; i++) ctx.quadraticCurveTo(X(i - 1), Y(i - 1), (X(i - 1) + X(i)) / 2, (Y(i - 1) + Y(i)) / 2);
      if (n > 1) ctx.lineTo(X(n - 1), Y(n - 1));
      ctx.stroke(); ctx.restore(); return;
    }
    ctx.strokeStyle = col; ctx.fillStyle = col;
    if (n === 1) { ctx.beginPath(); ctx.arc(X(0), Y(0), base * wf(Pr(0)) / 2, 0, 7); ctx.fill(); return; }
    for (let i = 1; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = base * wf((Pr(i - 1) + Pr(i)) / 2);
      const sx = i === 1 ? X(0) : (X(i - 2) + X(i - 1)) / 2, sy = i === 1 ? Y(0) : (Y(i - 2) + Y(i - 1)) / 2;
      const ex = i === n - 1 ? X(i) : (X(i - 1) + X(i)) / 2, ey = i === n - 1 ? Y(i) : (Y(i - 1) + Y(i)) / 2;
      ctx.moveTo(sx, sy);
      if (i === 1) ctx.lineTo(ex, ey); else ctx.quadraticCurveTo(X(i - 1), Y(i - 1), ex, ey);
      ctx.stroke();
    }
  }

  let laser = [];
  function drawLaser() {
    const now = performance.now();
    laser = laser.filter(p => now - p.t < 650);
    if (!laser.length) return;
    ctx.save(); ctx.lineCap = 'round'; ctx.strokeStyle = palette.red; ctx.shadowColor = palette.red; ctx.shadowBlur = 12; ctx.lineWidth = 5;
    for (let i = 1; i < laser.length; i++) {
      if (laser[i].gap) continue;
      ctx.globalAlpha = 1 - (now - laser[i].t) / 650;
      ctx.beginPath(); ctx.moveTo(laser[i - 1].x, laser[i - 1].y); ctx.lineTo(laser[i].x, laser[i].y); ctx.stroke();
    }
    ctx.restore(); requestRender();
  }

  function render() {
    raf = 0; anchors = null;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, vw, vh);
    if (state.board || !state.hidden) {
      const frames = new Map();
      for (const s of list()) {
        if (!frames.has(s.a)) frames.set(s.a, frameOf(s.a));
        const f = frames.get(s.a); if (f) drawStroke(s, f);
      }
    }
    if (active && active.stroke) { const f = frameOf(active.stroke.a); if (f) drawStroke(active.stroke, f); }
    if (active && active.tool === 'eraser' && active.cx != null) {
      ctx.save(); ctx.strokeStyle = palette.ink; ctx.globalAlpha = .5; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(active.cx, active.cy, ERASE_R, 0, 7); ctx.stroke(); ctx.restore();
    }
    drawLaser();
  }

  /* ---------- input ---------- */
  let active = null;
  const isUI = t => t && t.closest && t.closest('button,a,input,select,textarea,label,summary,[data-ui],.auth-modal,.top');
  const authOpen = () => { const m = document.getElementById('authModal'); return m && !m.hidden; };
  const wantsDraw = e => state.on && !authOpen() &&
    (e.pointerType === 'pen' || (state.finger && (e.pointerType === 'mouse' || e.pointerType === 'touch')));

  function addPoint(s, ev, f) {
    const x = (ev.clientX - f.ox) / f.W, y = (ev.clientY - f.oy) / f.W;
    let p = ev.pointerType === 'pen' ? (ev.pressure || 0.5) : 0.5;
    const P = s.p, n = P.length;
    if (n) {
      const dx = (x - P[n - 3]) * f.W, dy = (y - P[n - 2]) * f.W;
      if (dx * dx + dy * dy < 0.6) return;
      p = P[n - 1] * 0.6 + p * 0.4;
    }
    P.push(+x.toFixed(5), +y.toFixed(5), +p.toFixed(2));
  }
  function bbox(s) {
    let a = Infinity, b = Infinity, c = -Infinity, d = -Infinity;
    for (let i = 0; i < s.p.length; i += 3) { a = Math.min(a, s.p[i]); c = Math.max(c, s.p[i]); b = Math.min(b, s.p[i + 1]); d = Math.max(d, s.p[i + 1]); }
    return [a - s.w, b - s.w, c + s.w, d + s.w];
  }
  function eraseAt(ev) {
    active.cx = ev.clientX; active.cy = ev.clientY;
    anchors = null;
    const arr = list(), frames = new Map();
    const keep = arr.filter(s => {
      if (!frames.has(s.a)) frames.set(s.a, frameOf(s.a));
      const f = frames.get(s.a); if (!f) return true;
      const x = (ev.clientX - f.ox) / f.W, y = (ev.clientY - f.oy) / f.W, rr = ERASE_R / f.W + s.w / 2;
      if (s.b && (x < s.b[0] - rr || x > s.b[2] + rr || y < s.b[1] - rr || y > s.b[3] + rr)) return true;
      for (let i = 0; i < s.p.length; i += 3) { const dx = s.p[i] - x, dy = s.p[i + 1] - y; if (dx * dx + dy * dy < rr * rr) return false; }
      return true;
    });
    if (keep.length !== arr.length) {
      if (!active.erased) { pushHistory(arr.slice()); active.erased = true; }
      notes[key()] = keep; saveNotes();
    }
  }
  const addLaser = (ev, gap) => laser.push({ x: ev.clientX, y: ev.clientY, t: performance.now(), gap });

  addEventListener('pointerdown', e => {
    if (active || !wantsDraw(e) || isUI(e.target)) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    e.preventDefault();
    try { e.target.setPointerCapture(e.pointerId); } catch (_) {}
    const tool = state.tool;
    if (tool === 'laser') { active = { id: e.pointerId, tool }; addLaser(e, true); requestRender(); return; }
    if (state.hidden && !state.board) setHidden(false);
    if (tool === 'eraser') { active = { id: e.pointerId, tool }; eraseAt(e); requestRender(); return; }
    anchors = null;
    let a = anchorAt(e.target), f = frameOf(a);
    if (!f) { a = '@view'; f = frameOf(a); }
    if (!f) { active = null; return; }
    const t = tool === 'hl' ? 'hl' : 'pen';
    const s = { a, t, c: state.color[t], w: +((t === 'hl' ? HL : PEN)[state.size] / f.W).toFixed(5), p: [] };
    active = { id: e.pointerId, tool, stroke: s, f };
    addPoint(s, e, f); requestRender();
  }, { passive: false });

  addEventListener('pointermove', e => {
    if (!active || e.pointerId !== active.id) return;
    e.preventDefault();
    let evs = e.getCoalescedEvents ? e.getCoalescedEvents() : [];
    if (!evs.length) evs = [e];
    const f = active.stroke ? (frameOf(active.stroke.a) || active.f) : null;
    for (const ev of evs) {
      if (active.tool === 'laser') addLaser(ev);
      else if (active.tool === 'eraser') eraseAt(ev);
      else addPoint(active.stroke, ev, f);
    }
    requestRender();
  }, { passive: false });

  function endStroke(e) {
    if (!active || e.pointerId !== active.id) return;
    const s = active.stroke;
    if (s && s.p.length) { s.b = bbox(s); pushHistory(list().slice()); list().push(s); saveNotes(); }
    active = null; requestRender();
  }
  addEventListener('pointerup', endStroke);
  addEventListener('pointercancel', endStroke);

  /* Keep the Pencil (or a drawing finger) from scrolling the page while it writes,
     but let it press buttons. */
  function blockTouch(e) {
    if (!state.on || authOpen() || isUI(e.target)) return;
    const stylus = [...e.changedTouches].some(t => t.touchType === 'stylus');
    if (stylus || state.finger) e.preventDefault();
  }
  document.addEventListener('touchstart', blockTouch, { passive: false });
  document.addEventListener('touchmove', blockTouch, { passive: false });

  /* ---------- toolbar ---------- */
  function renderPaint() {
    const t = state.tool === 'hl' ? 'hl' : 'pen';
    const cols = t === 'hl' ? HL_COLORS : PEN_COLORS;
    q('swatches').innerHTML = cols.map(c => `<button class="sw" data-color="${c}" aria-pressed="${state.color[t] === c}" aria-label="Màu ${c}"><i style="--c:${COLORS[c]}"></i></button>`).join('');
    const dots = t === 'hl' ? [10, 14, 18] : [5, 8, 12];
    q('sizes').innerHTML = dots.map((d, i) => `<button class="sz" data-size="${i}" aria-pressed="${state.size === i}" aria-label="Cỡ ${i + 1}"><i style="width:${d}px;height:${d}px"></i></button>`).join('');
    bar.classList.toggle('dim', state.tool === 'eraser' || state.tool === 'laser');
    bar.querySelectorAll('[data-tool]').forEach(b => b.setAttribute('aria-pressed', b.dataset.tool === state.tool));
  }
  function setOn(v) {
    state.on = v; savePrefs();
    bar.classList.toggle('off', !v); q('toggle').setAttribute('aria-pressed', v);
    document.body.classList.toggle('ink-on', v);
    if (!v && state.board) setBoard(false);
  }
  function setHidden(v) { state.hidden = v; q('hide').setAttribute('aria-pressed', v); q('hide').title = v ? 'Hiện ghi chú' : 'Ẩn ghi chú'; requestRender(); }
  function setFinger(v) { state.finger = v; savePrefs(); q('finger').setAttribute('aria-pressed', v); document.body.classList.toggle('ink-finger', v); }
  function setBoard(v) {
    state.board = v; board.hidden = !v; document.body.classList.toggle('ink-board', v);
    q('board').setAttribute('aria-pressed', v); updateUndo(); requestRender();
  }
  const say = msg => { if (typeof window.toast === 'function') window.toast(msg); };

  let clearArmed = 0;
  const clearIcon = q('clear').innerHTML;
  const resetClear = () => { const b = q('clear'); b.classList.remove('warn'); b.innerHTML = clearIcon; };
  bar.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.tool) { state.tool = b.dataset.tool; renderPaint(); return; }
    if (b.dataset.color) { state.color[state.tool === 'hl' ? 'hl' : 'pen'] = b.dataset.color; renderPaint(); return; }
    if (b.dataset.size) { state.size = +b.dataset.size; renderPaint(); return; }
    switch (b.dataset.k) {
      case 'toggle': setOn(!state.on); say(state.on ? 'Đã bật ghi chú: Apple Pencil viết, ngón tay cuộn trang.' : 'Đã tắt ghi chú.'); break;
      case 'undo': undo(); break;
      case 'redo': redo(); break;
      case 'clear':
        if (!list().length) { say('Trang này chưa có nét nào.'); break; }
        if (!clearArmed) {
          b.classList.add('warn'); b.textContent = 'Xóa hết?';
          clearArmed = setTimeout(() => { clearArmed = 0; resetClear(); }, 3000);
        } else {
          clearTimeout(clearArmed); clearArmed = 0; resetClear();
          pushHistory(list().slice()); notes[key()] = []; saveNotes(); requestRender();
          say('Đã xóa. Bấm hoàn tác nếu cần lấy lại.');
        }
        break;
      case 'board': setBoard(!state.board); break;
      case 'hide': setHidden(!state.hidden); break;
      case 'finger': setFinger(!state.finger); say(state.finger ? 'Ngón tay và chuột giờ cũng vẽ được.' : 'Chỉ Apple Pencil vẽ. Ngón tay dùng để cuộn và bấm.'); break;
    }
  });

  addEventListener('hashchange', () => { if (state.board) setBoard(false); updateUndo(); requestRender(); });
  addEventListener('scroll', requestRender, { passive: true });
  addEventListener('resize', sizeCanvas);
  if (window.ResizeObserver) new ResizeObserver(requestRender).observe(view);
  new MutationObserver(requestRender).observe(view, { childList: true, subtree: true });
  view.addEventListener('toggle', requestRender, true);
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', readColors);
  if (document.fonts) document.fonts.ready.then(requestRender);

  renderPaint(); setOn(state.on); setFinger(state.finger); updateUndo(); readColors(); sizeCanvas();
})();
