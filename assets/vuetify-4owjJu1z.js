import {
 a as ct,
 f as y,
 q as pe,
 d as Aa,
 v as An,
 F as ie,
 x as kc,
 C as xc,
 s as K,
 y as Ba,
 u as et,
 z as wc,
 r as j,
 i as ge,
 p as Ie,
 k as Cc,
 A as rr,
 l as Rt,
 B as nt,
 w as X,
 n as he,
 D as Vc,
 E as Pc,
 o as Ze,
 e as ei,
 t as tt,
 G as u,
 S as ur,
 T as ti,
 H as Ft,
 I as z,
 b as wn,
 J as M,
 K as sr,
 L as Ae,
 M as ot,
 N as bt,
 O as at,
 P as Ic,
 Q as _c,
 R as Tc,
 m as Ac,
 U as Bc,
 V as Dc,
 W as Lt,
 X as pc,
 Y as Ec,
 Z as Qi,
 _ as Mc,
 $ as $c,
 a0 as Fc,
 a1 as cr,
} from './@vue-DWLaYJ5H.js';
function D(e, n) {
 return (t) =>
  Object.keys(e).reduce((a, l) => {
   const o = typeof e[l] == 'object' && e[l] != null && !Array.isArray(e[l]) ? e[l] : { type: e[l] };
   return (
    t && l in t ? (a[l] = { ...o, default: t[l] }) : (a[l] = o),
    n && !a[l].source && (a[l].source = n),
    a
   );
  }, {});
}
const J = D(
  { class: [String, Array, Object], style: { type: [String, Array, Object], default: null } },
  'component'
 ),
 ke = typeof window < 'u',
 ni = ke && 'IntersectionObserver' in window,
 Lc = ke && ('ontouchstart' in window || window.navigator.maxTouchPoints > 0),
 eo = ke && 'EyeDropper' in window;
function to(e, n, t) {
 Oc(e, n), n.set(e, t);
}
function Oc(e, n) {
 if (n.has(e)) throw new TypeError('Cannot initialize the same private elements twice on an object');
}
function Rc(e, n, t) {
 return e.set(dr(e, n), t), t;
}
function Yt(e, n) {
 return e.get(dr(e, n));
}
function dr(e, n, t) {
 if (typeof e == 'function' ? e === n : e.has(n)) return arguments.length < 3 ? n : t;
 throw new TypeError('Private element is not present on this object');
}
function vr(e, n, t) {
 const a = n.length - 1;
 if (a < 0) return e === void 0 ? t : e;
 for (let l = 0; l < a; l++) {
  if (e == null) return t;
  e = e[n[l]];
 }
 return e == null || e[n[a]] === void 0 ? t : e[n[a]];
}
function Ct(e, n) {
 if (e === n) return !0;
 if (
  (e instanceof Date && n instanceof Date && e.getTime() !== n.getTime()) ||
  e !== Object(e) ||
  n !== Object(n)
 )
  return !1;
 const t = Object.keys(e);
 return t.length !== Object.keys(n).length ? !1 : t.every((a) => Ct(e[a], n[a]));
}
function On(e, n, t) {
 return e == null || !n || typeof n != 'string'
  ? t
  : e[n] !== void 0
    ? e[n]
    : ((n = n.replace(/\[(\w+)\]/g, '.$1')), (n = n.replace(/^\./, '')), vr(e, n.split('.'), t));
}
function Le(e, n, t) {
 if (n === !0) return e === void 0 ? t : e;
 if (n == null || typeof n == 'boolean') return t;
 if (e !== Object(e)) {
  if (typeof n != 'function') return t;
  const l = n(e, t);
  return typeof l > 'u' ? t : l;
 }
 if (typeof n == 'string') return On(e, n, t);
 if (Array.isArray(n)) return vr(e, n, t);
 if (typeof n != 'function') return t;
 const a = n(e, t);
 return typeof a > 'u' ? t : a;
}
function xt(e) {
 let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
 return Array.from({ length: e }, (t, a) => n + a);
}
function Z(e) {
 let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'px';
 if (!(e == null || e === '')) return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${n}` : void 0;
}
function Rn(e) {
 return e !== null && typeof e == 'object' && !Array.isArray(e);
}
function ai(e) {
 if (e && '$el' in e) {
  const n = e.$el;
  return (n == null ? void 0 : n.nodeType) === Node.TEXT_NODE ? n.nextElementSibling : n;
 }
 return e;
}
const no = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
  shift: 16,
 }),
 Sl = Object.freeze({
  enter: 'Enter',
  tab: 'Tab',
  delete: 'Delete',
  esc: 'Escape',
  space: 'Space',
  up: 'ArrowUp',
  down: 'ArrowDown',
  left: 'ArrowLeft',
  right: 'ArrowRight',
  end: 'End',
  home: 'Home',
  del: 'Delete',
  backspace: 'Backspace',
  insert: 'Insert',
  pageup: 'PageUp',
  pagedown: 'PageDown',
  shift: 'Shift',
 });
function fr(e) {
 return Object.keys(e);
}
function Ut(e, n) {
 return n.every((t) => e.hasOwnProperty(t));
}
function li(e, n) {
 const t = {},
  a = new Set(Object.keys(e));
 for (const l of n) a.has(l) && (t[l] = e[l]);
 return t;
}
function kl(e, n, t) {
 const a = Object.create(null),
  l = Object.create(null);
 for (const i in e)
  n.some((o) => (o instanceof RegExp ? o.test(i) : o === i)) && !(t != null && t.some((o) => o === i))
   ? (a[i] = e[i])
   : (l[i] = e[i]);
 return [a, l];
}
function Ee(e, n) {
 const t = { ...e };
 return n.forEach((a) => delete t[a]), t;
}
function Da(e, n) {
 const t = {};
 return n.forEach((a) => (t[a] = e[a])), t;
}
const mr = /^on[^a-z]/,
 pa = (e) => mr.test(e),
 Nc = [
  'onAfterscriptexecute',
  'onAnimationcancel',
  'onAnimationend',
  'onAnimationiteration',
  'onAnimationstart',
  'onAuxclick',
  'onBeforeinput',
  'onBeforescriptexecute',
  'onChange',
  'onClick',
  'onCompositionend',
  'onCompositionstart',
  'onCompositionupdate',
  'onContextmenu',
  'onCopy',
  'onCut',
  'onDblclick',
  'onFocusin',
  'onFocusout',
  'onFullscreenchange',
  'onFullscreenerror',
  'onGesturechange',
  'onGestureend',
  'onGesturestart',
  'onGotpointercapture',
  'onInput',
  'onKeydown',
  'onKeypress',
  'onKeyup',
  'onLostpointercapture',
  'onMousedown',
  'onMousemove',
  'onMouseout',
  'onMouseover',
  'onMouseup',
  'onMousewheel',
  'onPaste',
  'onPointercancel',
  'onPointerdown',
  'onPointerenter',
  'onPointerleave',
  'onPointermove',
  'onPointerout',
  'onPointerover',
  'onPointerup',
  'onReset',
  'onSelect',
  'onSubmit',
  'onTouchcancel',
  'onTouchend',
  'onTouchmove',
  'onTouchstart',
  'onTransitioncancel',
  'onTransitionend',
  'onTransitionrun',
  'onTransitionstart',
  'onWheel',
 ],
 zc = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft', 'Enter', 'Escape', 'Tab', ' '];
function Hc(e) {
 return e.isComposing && zc.includes(e.key);
}
function Nt(e) {
 const [n, t] = kl(e, [mr]),
  a = Ee(n, Nc),
  [l, i] = kl(t, ['class', 'style', 'id', /^data-/]);
 return Object.assign(l, n), Object.assign(i, a), [l, i];
}
function Te(e) {
 return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Wc(e, n) {
 let t = 0;
 const a = function () {
  for (var l = arguments.length, i = new Array(l), o = 0; o < l; o++) i[o] = arguments[o];
  clearTimeout(t), (t = setTimeout(() => e(...i), et(n)));
 };
 return (
  (a.clear = () => {
   clearTimeout(t);
  }),
  (a.immediate = e),
  a
 );
}
function Fe(e) {
 let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
  t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
 return Math.max(n, Math.min(t, e));
}
function ao(e) {
 const n = e.toString().trim();
 return n.includes('.') ? n.length - n.indexOf('.') - 1 : 0;
}
function lo(e, n) {
 let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '0';
 return e + t.repeat(Math.max(0, n - e.length));
}
function io(e, n) {
 return (
  (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '0').repeat(
   Math.max(0, n - e.length)
  ) + e
 );
}
function jc(e) {
 let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
 const t = [];
 let a = 0;
 for (; a < e.length; ) t.push(e.substr(a, n)), (a += n);
 return t;
}
function oo(e) {
 let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
 if (e < n) return `${e} B`;
 const t = n === 1024 ? ['Ki', 'Mi', 'Gi'] : ['k', 'M', 'G'];
 let a = -1;
 for (; Math.abs(e) >= n && a < t.length - 1; ) (e /= n), ++a;
 return `${e.toFixed(1)} ${t[a]}B`;
}
function qe() {
 let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
  n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
  t = arguments.length > 2 ? arguments[2] : void 0;
 const a = {};
 for (const l in e) a[l] = e[l];
 for (const l in n) {
  const i = e[l],
   o = n[l];
  if (Rn(i) && Rn(o)) {
   a[l] = qe(i, o, t);
   continue;
  }
  if (Array.isArray(i) && Array.isArray(o) && t) {
   a[l] = t(i, o);
   continue;
  }
  a[l] = o;
 }
 return a;
}
function gr(e) {
 return e.map((n) => (n.type === ie ? gr(n.children) : n)).flat();
}
function qt() {
 let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
 if (qt.cache.has(e)) return qt.cache.get(e);
 const n = e
  .replace(/[^a-z]/gi, '-')
  .replace(/\B([A-Z])/g, '-$1')
  .toLowerCase();
 return qt.cache.set(e, n), n;
}
qt.cache = new Map();
function kn(e, n) {
 if (!n || typeof n != 'object') return [];
 if (Array.isArray(n)) return n.map((t) => kn(e, t)).flat(1);
 if (n.suspense) return kn(e, n.ssContent);
 if (Array.isArray(n.children)) return n.children.map((t) => kn(e, t)).flat(1);
 if (n.component) {
  if (Object.getOwnPropertySymbols(n.component.provides).includes(e)) return [n.component];
  if (n.component.subTree) return kn(e, n.component.subTree).flat(1);
 }
 return [];
}
var va = new WeakMap(),
 hn = new WeakMap();
class Yc {
 constructor(n) {
  to(this, va, []), to(this, hn, 0), (this.size = n);
 }
 push(n) {
  (Yt(va, this)[Yt(hn, this)] = n), Rc(hn, this, (Yt(hn, this) + 1) % this.size);
 }
 values() {
  return Yt(va, this)
   .slice(Yt(hn, this))
   .concat(Yt(va, this).slice(0, Yt(hn, this)));
 }
}
function Gc(e) {
 return 'touches' in e
  ? { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY }
  : { clientX: e.clientX, clientY: e.clientY };
}
function ii(e) {
 const n = ct({}),
  t = y(e);
 return (
  pe(
   () => {
    for (const a in t.value) n[a] = t.value[a];
   },
   { flush: 'sync' }
  ),
  Aa(n)
 );
}
function xa(e, n) {
 return e.includes(n);
}
function hr(e) {
 return e[2].toLowerCase() + e.slice(3);
}
const We = () => [Function, Array];
function ro(e, n) {
 return (
  (n = 'on' + An(n)),
  !!(e[n] || e[`${n}Once`] || e[`${n}Capture`] || e[`${n}OnceCapture`] || e[`${n}CaptureOnce`])
 );
}
function oi(e) {
 for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
  t[a - 1] = arguments[a];
 if (Array.isArray(e)) for (const l of e) l(...t);
 else typeof e == 'function' && e(...t);
}
function Nn(e) {
 let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
 const t = ['button', '[href]', 'input:not([type="hidden"])', 'select', 'textarea', '[tabindex]']
  .map((a) => `${a}${n ? ':not([tabindex="-1"])' : ''}:not([disabled])`)
  .join(', ');
 return [...e.querySelectorAll(t)];
}
function yr(e, n, t) {
 let a,
  l = e.indexOf(document.activeElement);
 const i = n === 'next' ? 1 : -1;
 do (l += i), (a = e[l]);
 while (
  (!a || a.offsetParent == null || !((t == null ? void 0 : t(a)) ?? !0)) &&
  l < e.length &&
  l >= 0
 );
 return a;
}
function Cn(e, n) {
 var a, l, i, o;
 const t = Nn(e);
 if (!n)
  (e === document.activeElement || !e.contains(document.activeElement)) &&
   ((a = t[0]) == null || a.focus());
 else if (n === 'first') (l = t[0]) == null || l.focus();
 else if (n === 'last') (i = t.at(-1)) == null || i.focus();
 else if (typeof n == 'number') (o = t[n]) == null || o.focus();
 else {
  const r = yr(t, n);
  r ? r.focus() : Cn(e, n === 'next' ? 'first' : 'last');
 }
}
function fa(e) {
 return e == null || (typeof e == 'string' && e.trim() === '');
}
function br() {}
function Vn(e, n) {
 if (!(ke && typeof CSS < 'u' && typeof CSS.supports < 'u' && CSS.supports(`selector(${n})`)))
  return null;
 try {
  return !!e && e.matches(n);
 } catch {
  return null;
 }
}
function Ea(e) {
 return e.some((n) => (kc(n) ? (n.type === xc ? !1 : n.type !== ie || Ea(n.children)) : !0)) ? e : null;
}
function Uc(e, n) {
 if (!ke || e === 0) return n(), () => {};
 const t = window.setTimeout(n, e);
 return () => window.clearTimeout(t);
}
function uo(e, n) {
 const t = K();
 return (
  pe(
   () => {
    t.value = e();
   },
   { flush: 'sync', ...n }
  ),
  Ba(t)
 );
}
function Kc(e, n) {
 const t = e.clientX,
  a = e.clientY,
  l = n.getBoundingClientRect(),
  i = l.left,
  o = l.top,
  r = l.right,
  s = l.bottom;
 return t >= i && t <= r && a >= o && a <= s;
}
function wa() {
 const e = K(),
  n = (t) => {
   e.value = t;
  };
 return (
  Object.defineProperty(n, 'value', { enumerable: !0, get: () => e.value, set: (t) => (e.value = t) }),
  Object.defineProperty(n, 'el', { enumerable: !0, get: () => ai(e.value) }),
  n
 );
}
const Sr = ['top', 'bottom'],
 qc = ['start', 'end', 'left', 'right'];
function xl(e, n) {
 let [t, a] = e.split(' ');
 return (
  a || (a = xa(Sr, t) ? 'start' : xa(qc, t) ? 'top' : 'center'), { side: wl(t, n), align: wl(a, n) }
 );
}
function wl(e, n) {
 return e === 'start' ? (n ? 'right' : 'left') : e === 'end' ? (n ? 'left' : 'right') : e;
}
function sl(e) {
 return {
  side: { center: 'center', top: 'bottom', bottom: 'top', left: 'right', right: 'left' }[e.side],
  align: e.align,
 };
}
function cl(e) {
 return {
  side: e.side,
  align: { center: 'center', top: 'bottom', bottom: 'top', left: 'right', right: 'left' }[e.align],
 };
}
function so(e) {
 return { side: e.align, align: e.side };
}
function co(e) {
 return xa(Sr, e.side) ? 'y' : 'x';
}
class Xt {
 constructor(n) {
  let { x: t, y: a, width: l, height: i } = n;
  (this.x = t), (this.y = a), (this.width = l), (this.height = i);
 }
 get top() {
  return this.y;
 }
 get bottom() {
  return this.y + this.height;
 }
 get left() {
  return this.x;
 }
 get right() {
  return this.x + this.width;
 }
}
function vo(e, n) {
 return {
  x: { before: Math.max(0, n.left - e.left), after: Math.max(0, e.right - n.right) },
  y: { before: Math.max(0, n.top - e.top), after: Math.max(0, e.bottom - n.bottom) },
 };
}
function kr(e) {
 return Array.isArray(e) ? new Xt({ x: e[0], y: e[1], width: 0, height: 0 }) : e.getBoundingClientRect();
}
function ri(e) {
 const n = e.getBoundingClientRect(),
  t = getComputedStyle(e),
  a = t.transform;
 if (a) {
  let l, i, o, r, s;
  if (a.startsWith('matrix3d('))
   (l = a.slice(9, -1).split(/, /)), (i = +l[0]), (o = +l[5]), (r = +l[12]), (s = +l[13]);
  else if (a.startsWith('matrix('))
   (l = a.slice(7, -1).split(/, /)), (i = +l[0]), (o = +l[3]), (r = +l[4]), (s = +l[5]);
  else return new Xt(n);
  const c = t.transformOrigin,
   d = n.x - r - (1 - i) * parseFloat(c),
   f = n.y - s - (1 - o) * parseFloat(c.slice(c.indexOf(' ') + 1)),
   m = i ? n.width / i : e.offsetWidth + 1,
   v = o ? n.height / o : e.offsetHeight + 1;
  return new Xt({ x: d, y: f, width: m, height: v });
 } else return new Xt(n);
}
function Kt(e, n, t) {
 if (typeof e.animate > 'u') return { finished: Promise.resolve() };
 let a;
 try {
  a = e.animate(n, t);
 } catch {
  return { finished: Promise.resolve() };
 }
 return (
  typeof a.finished > 'u' &&
   (a.finished = new Promise((l) => {
    a.onfinish = () => {
     l(a);
    };
   })),
  a
 );
}
const ba = new WeakMap();
function Xc(e, n) {
 Object.keys(n).forEach((t) => {
  if (pa(t)) {
   const a = hr(t),
    l = ba.get(e);
   if (n[t] == null)
    l == null ||
     l.forEach((i) => {
      const [o, r] = i;
      o === a && (e.removeEventListener(a, r), l.delete(i));
     });
   else if (!l || ![...l].some((i) => i[0] === a && i[1] === n[t])) {
    e.addEventListener(a, n[t]);
    const i = l || new Set();
    i.add([a, n[t]]), ba.has(e) || ba.set(e, i);
   }
  } else n[t] == null ? e.removeAttribute(t) : e.setAttribute(t, n[t]);
 });
}
function Zc(e, n) {
 Object.keys(n).forEach((t) => {
  if (pa(t)) {
   const a = hr(t),
    l = ba.get(e);
   l == null ||
    l.forEach((i) => {
     const [o, r] = i;
     o === a && (e.removeEventListener(a, r), l.delete(i));
    });
  } else e.removeAttribute(t);
 });
}
const yn = 2.4,
 fo = 0.2126729,
 mo = 0.7151522,
 go = 0.072175,
 Jc = 0.55,
 Qc = 0.58,
 ed = 0.57,
 td = 0.62,
 ma = 0.03,
 ho = 1.45,
 nd = 5e-4,
 ad = 1.25,
 ld = 1.25,
 yo = 0.078,
 bo = 12.82051282051282,
 ga = 0.06,
 So = 0.001;
function ko(e, n) {
 const t = (e.r / 255) ** yn,
  a = (e.g / 255) ** yn,
  l = (e.b / 255) ** yn,
  i = (n.r / 255) ** yn,
  o = (n.g / 255) ** yn,
  r = (n.b / 255) ** yn;
 let s = t * fo + a * mo + l * go,
  c = i * fo + o * mo + r * go;
 if ((s <= ma && (s += (ma - s) ** ho), c <= ma && (c += (ma - c) ** ho), Math.abs(c - s) < nd))
  return 0;
 let d;
 if (c > s) {
  const f = (c ** Jc - s ** Qc) * ad;
  d = f < So ? 0 : f < yo ? f - f * bo * ga : f - ga;
 } else {
  const f = (c ** td - s ** ed) * ld;
  d = f > -So ? 0 : f > -yo ? f - f * bo * ga : f + ga;
 }
 return d * 100;
}
function id(e, n) {
 n = Array.isArray(n)
  ? n
     .slice(0, -1)
     .map((t) => `'${t}'`)
     .join(', ') + ` or '${n.at(-1)}'`
  : `'${n}'`;
}
const Ca = 0.20689655172413793,
 od = (e) => (e > Ca ** 3 ? Math.cbrt(e) : e / (3 * Ca ** 2) + 4 / 29),
 rd = (e) => (e > Ca ? e ** 3 : 3 * Ca ** 2 * (e - 4 / 29));
function xr(e) {
 const n = od,
  t = n(e[1]);
 return [116 * t - 16, 500 * (n(e[0] / 0.95047) - t), 200 * (t - n(e[2] / 1.08883))];
}
function wr(e) {
 const n = rd,
  t = (e[0] + 16) / 116;
 return [n(t + e[1] / 500) * 0.95047, n(t), n(t - e[2] / 200) * 1.08883];
}
const ud = [
  [3.2406, -1.5372, -0.4986],
  [-0.9689, 1.8758, 0.0415],
  [0.0557, -0.204, 1.057],
 ],
 sd = (e) => (e <= 0.0031308 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055),
 cd = [
  [0.4124, 0.3576, 0.1805],
  [0.2126, 0.7152, 0.0722],
  [0.0193, 0.1192, 0.9505],
 ],
 dd = (e) => (e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4);
function Cr(e) {
 const n = Array(3),
  t = sd,
  a = ud;
 for (let l = 0; l < 3; ++l)
  n[l] = Math.round(Fe(t(a[l][0] * e[0] + a[l][1] * e[1] + a[l][2] * e[2])) * 255);
 return { r: n[0], g: n[1], b: n[2] };
}
function ui(e) {
 let { r: n, g: t, b: a } = e;
 const l = [0, 0, 0],
  i = dd,
  o = cd;
 (n = i(n / 255)), (t = i(t / 255)), (a = i(a / 255));
 for (let r = 0; r < 3; ++r) l[r] = o[r][0] * n + o[r][1] * t + o[r][2] * a;
 return l;
}
function Cl(e) {
 return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function vd(e) {
 return Cl(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const xo = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,
 fd = {
  rgb: (e, n, t, a) => ({ r: e, g: n, b: t, a }),
  rgba: (e, n, t, a) => ({ r: e, g: n, b: t, a }),
  hsl: (e, n, t, a) => wo({ h: e, s: n, l: t, a }),
  hsla: (e, n, t, a) => wo({ h: e, s: n, l: t, a }),
  hsv: (e, n, t, a) => _t({ h: e, s: n, v: t, a }),
  hsva: (e, n, t, a) => _t({ h: e, s: n, v: t, a }),
 };
function dt(e) {
 if (typeof e == 'number') return { r: (e & 16711680) >> 16, g: (e & 65280) >> 8, b: e & 255 };
 if (typeof e == 'string' && xo.test(e)) {
  const { groups: n } = e.match(xo),
   { fn: t, values: a } = n,
   l = a
    .split(/,\s*/)
    .map((i) =>
     i.endsWith('%') && ['hsl', 'hsla', 'hsv', 'hsva'].includes(t) ? parseFloat(i) / 100 : parseFloat(i)
    );
  return fd[t](...l);
 } else if (typeof e == 'string') {
  let n = e.startsWith('#') ? e.slice(1) : e;
  return (
   [3, 4].includes(n.length)
    ? (n = n
       .split('')
       .map((t) => t + t)
       .join(''))
    : [6, 8].includes(n.length),
   Tr(n)
  );
 } else if (typeof e == 'object') {
  if (Ut(e, ['r', 'g', 'b'])) return e;
  if (Ut(e, ['h', 's', 'l'])) return _t(si(e));
  if (Ut(e, ['h', 's', 'v'])) return _t(e);
 }
 throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function _t(e) {
 const { h: n, s: t, v: a, a: l } = e,
  i = (r) => {
   const s = (r + n / 60) % 6;
   return a - a * t * Math.max(Math.min(s, 4 - s, 1), 0);
  },
  o = [i(5), i(3), i(1)].map((r) => Math.round(r * 255));
 return { r: o[0], g: o[1], b: o[2], a: l };
}
function wo(e) {
 return _t(si(e));
}
function Ma(e) {
 if (!e) return { h: 0, s: 1, v: 1, a: 1 };
 const n = e.r / 255,
  t = e.g / 255,
  a = e.b / 255,
  l = Math.max(n, t, a),
  i = Math.min(n, t, a);
 let o = 0;
 l !== i &&
  (l === n
   ? (o = 60 * (0 + (t - a) / (l - i)))
   : l === t
     ? (o = 60 * (2 + (a - n) / (l - i)))
     : l === a && (o = 60 * (4 + (n - t) / (l - i)))),
  o < 0 && (o = o + 360);
 const r = l === 0 ? 0 : (l - i) / l,
  s = [o, r, l];
 return { h: s[0], s: s[1], v: s[2], a: e.a };
}
function Vr(e) {
 const { h: n, s: t, v: a, a: l } = e,
  i = a - (a * t) / 2,
  o = i === 1 || i === 0 ? 0 : (a - i) / Math.min(i, 1 - i);
 return { h: n, s: o, l: i, a: l };
}
function si(e) {
 const { h: n, s: t, l: a, a: l } = e,
  i = a + t * Math.min(a, 1 - a),
  o = i === 0 ? 0 : 2 - (2 * a) / i;
 return { h: n, s: o, v: i, a: l };
}
function Pr(e) {
 let { r: n, g: t, b: a, a: l } = e;
 return l === void 0 ? `rgb(${n}, ${t}, ${a})` : `rgba(${n}, ${t}, ${a}, ${l})`;
}
function Ir(e) {
 return Pr(_t(e));
}
function ha(e) {
 const n = Math.round(e).toString(16);
 return ('00'.substr(0, 2 - n.length) + n).toUpperCase();
}
function _r(e) {
 let { r: n, g: t, b: a, a: l } = e;
 return `#${[ha(n), ha(t), ha(a), l !== void 0 ? ha(Math.round(l * 255)) : ''].join('')}`;
}
function Tr(e) {
 e = md(e);
 let [n, t, a, l] = jc(e, 2).map((i) => parseInt(i, 16));
 return (l = l === void 0 ? l : l / 255), { r: n, g: t, b: a, a: l };
}
function Ar(e) {
 const n = Tr(e);
 return Ma(n);
}
function Br(e) {
 return _r(_t(e));
}
function md(e) {
 return (
  e.startsWith('#') && (e = e.slice(1)),
  (e = e.replace(/([^0-9a-f])/gi, 'F')),
  (e.length === 3 || e.length === 4) &&
   (e = e
    .split('')
    .map((n) => n + n)
    .join('')),
  e.length !== 6 && (e = lo(lo(e, 6), 8, 'F')),
  e
 );
}
function gd(e, n) {
 const t = xr(ui(e));
 return (t[0] = t[0] + n * 10), Cr(wr(t));
}
function hd(e, n) {
 const t = xr(ui(e));
 return (t[0] = t[0] - n * 10), Cr(wr(t));
}
function Vl(e) {
 const n = dt(e);
 return ui(n)[1];
}
function yd(e, n) {
 const t = Vl(e),
  a = Vl(n),
  l = Math.max(t, a),
  i = Math.min(t, a);
 return (l + 0.05) / (i + 0.05);
}
function Dr(e) {
 const n = Math.abs(ko(dt(0), dt(e)));
 return Math.abs(ko(dt(16777215), dt(e))) > Math.min(n, 50) ? '#fff' : '#000';
}
function Me(e, n) {
 const t = wc();
 if (!t) throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
 return t;
}
function Vt() {
 let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'composables';
 const n = Me(e).type;
 return qt((n == null ? void 0 : n.aliasName) || (n == null ? void 0 : n.name));
}
let pr = 0,
 Sa = new WeakMap();
function je() {
 const e = Me('getUid');
 if (Sa.has(e)) return Sa.get(e);
 {
  const n = pr++;
  return Sa.set(e, n), n;
 }
}
je.reset = () => {
 (pr = 0), (Sa = new WeakMap());
};
function bd(e) {
 let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Me('injectSelf');
 const { provides: t } = n;
 if (t && e in t) return t[e];
}
const Pn = Symbol.for('vuetify:defaults');
function Sd(e) {
 return j(e);
}
function ci() {
 const e = ge(Pn);
 if (!e) throw new Error('[Vuetify] Could not find defaults instance');
 return e;
}
function Be(e, n) {
 const t = ci(),
  a = j(e),
  l = y(() => {
   if (et(n == null ? void 0 : n.disabled)) return t.value;
   const o = et(n == null ? void 0 : n.scoped),
    r = et(n == null ? void 0 : n.reset),
    s = et(n == null ? void 0 : n.root);
   if (a.value == null && !(o || r || s)) return t.value;
   let c = qe(a.value, { prev: t.value });
   if (o) return c;
   if (r || s) {
    const d = Number(r || 1 / 0);
    for (let f = 0; f <= d && !(!c || !('prev' in c)); f++) c = c.prev;
    return c && typeof s == 'string' && s in c && (c = qe(qe(c, { prev: c }), c[s])), c;
   }
   return c.prev ? qe(c.prev, c) : c;
  });
 return Ie(Pn, l), l;
}
function kd(e, n) {
 var t, a;
 return (
  typeof ((t = e.props) == null ? void 0 : t[n]) < 'u' ||
  typeof ((a = e.props) == null ? void 0 : a[qt(n)]) < 'u'
 );
}
function xd() {
 let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
  n = arguments.length > 1 ? arguments[1] : void 0,
  t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ci();
 const a = Me('useDefaults');
 if (((n = n ?? a.type.name ?? a.type.__name), !n))
  throw new Error('[Vuetify] Could not determine component name');
 const l = y(() => {
   var s;
   return (s = t.value) == null ? void 0 : s[e._as ?? n];
  }),
  i = new Proxy(e, {
   get(s, c) {
    var f, m, v, b, g, h, S;
    const d = Reflect.get(s, c);
    return c === 'class' || c === 'style'
     ? [(f = l.value) == null ? void 0 : f[c], d].filter((k) => k != null)
     : typeof c == 'string' && !kd(a.vnode, c)
       ? ((m = l.value) == null ? void 0 : m[c]) !== void 0
         ? (v = l.value) == null
           ? void 0
           : v[c]
         : ((g = (b = t.value) == null ? void 0 : b.global) == null ? void 0 : g[c]) !== void 0
           ? (S = (h = t.value) == null ? void 0 : h.global) == null
             ? void 0
             : S[c]
           : d
       : d;
   },
  }),
  o = K();
 pe(() => {
  if (l.value) {
   const s = Object.entries(l.value).filter((c) => {
    let [d] = c;
    return d.startsWith(d[0].toUpperCase());
   });
   o.value = s.length ? Object.fromEntries(s) : void 0;
  } else o.value = void 0;
 });
 function r() {
  const s = bd(Pn, a);
  Ie(
   Pn,
   y(() => (o.value ? qe((s == null ? void 0 : s.value) ?? {}, o.value) : s == null ? void 0 : s.value))
  );
 }
 return { props: i, provideSubDefaults: r };
}
function rt(e) {
 if (((e._setup = e._setup ?? e.setup), !e.name)) return e;
 if (e._setup) {
  e.props = D(e.props ?? {}, e.name)();
  const n = Object.keys(e.props).filter((t) => t !== 'class' && t !== 'style');
  (e.filterProps = function (a) {
   return li(a, n);
  }),
   (e.props._as = String),
   (e.setup = function (a, l) {
    const i = ci();
    if (!i.value) return e._setup(a, l);
    const { props: o, provideSubDefaults: r } = xd(a, a._as ?? e.name, i),
     s = e._setup(o, l);
    return r(), s;
   });
 }
 return e;
}
function $() {
 let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
 return (n) => (e ? rt : Cc)(n);
}
function wd(e, n) {
 return (n.props = e), n;
}
function Pt(e) {
 let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'div',
  t = arguments.length > 2 ? arguments[2] : void 0;
 return $()({
  name: t ?? An(rr(e.replace(/__/g, '-'))),
  props: { tag: { type: String, default: n }, ...J() },
  setup(a, l) {
   let { slots: i } = l;
   return () => {
    var o;
    return Rt(
     a.tag,
     { class: [e, a.class], style: a.style },
     (o = i.default) == null ? void 0 : o.call(i)
    );
   };
  },
 });
}
function Er(e) {
 if (typeof e.getRootNode != 'function') {
  for (; e.parentNode; ) e = e.parentNode;
  return e !== document ? null : document;
 }
 const n = e.getRootNode();
 return n !== document && n.getRootNode({ composed: !0 }) !== document ? null : n;
}
const zn = 'cubic-bezier(0.4, 0, 0.2, 1)',
 Cd = 'cubic-bezier(0.0, 0, 0.2, 1)',
 Vd = 'cubic-bezier(0.4, 0, 1, 1)';
function Co(e, n, t) {
 return Object.keys(e)
  .filter((a) => pa(a) && a.endsWith(n))
  .reduce((a, l) => ((a[l.slice(0, -n.length)] = (i) => e[l](i, t(i))), a), {});
}
function di(e) {
 let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
 for (; e; ) {
  if (n ? Pd(e) : vi(e)) return e;
  e = e.parentElement;
 }
 return document.scrollingElement;
}
function Va(e, n) {
 const t = [];
 if (n && e && !n.contains(e)) return t;
 for (; e && (vi(e) && t.push(e), e !== n); ) e = e.parentElement;
 return t;
}
function vi(e) {
 if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
 const n = window.getComputedStyle(e);
 return n.overflowY === 'scroll' || (n.overflowY === 'auto' && e.scrollHeight > e.clientHeight);
}
function Pd(e) {
 if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
 const n = window.getComputedStyle(e);
 return ['scroll', 'auto'].includes(n.overflowY);
}
function Id(e) {
 for (; e; ) {
  if (window.getComputedStyle(e).position === 'fixed') return !0;
  e = e.offsetParent;
 }
 return !1;
}
function R(e) {
 const n = Me('useRender');
 n.render = e;
}
function yt(e) {
 let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'content';
 const t = wa(),
  a = j();
 if (ke) {
  const l = new ResizeObserver((i) => {
   e == null || e(i, l),
    i.length &&
     (n === 'content' ? (a.value = i[0].contentRect) : (a.value = i[0].target.getBoundingClientRect()));
  });
  nt(() => {
   l.disconnect();
  }),
   X(
    () => t.el,
    (i, o) => {
     o && (l.unobserve(o), (a.value = void 0)), i && l.observe(i);
    },
    { flush: 'post' }
   );
 }
 return { resizeRef: t, contentRect: Ba(a) };
}
const Hn = Symbol.for('vuetify:layout'),
 Mr = Symbol.for('vuetify:layout-item'),
 Vo = 1e3,
 $r = D({ overlaps: { type: Array, default: () => [] }, fullHeight: Boolean }, 'layout'),
 on = D(
  { name: { type: String }, order: { type: [Number, String], default: 0 }, absolute: Boolean },
  'layout-item'
 );
function Fr() {
 const e = ge(Hn);
 if (!e) throw new Error('[Vuetify] Could not find injected layout');
 return {
  layoutIsReady: he(),
  getLayoutItem: e.getLayoutItem,
  mainRect: e.mainRect,
  mainStyles: e.mainStyles,
 };
}
function rn(e) {
 const n = ge(Hn);
 if (!n) throw new Error('[Vuetify] Could not find injected layout');
 const t = e.id ?? `layout-item-${je()}`,
  a = Me('useLayoutItem');
 Ie(Mr, { id: t });
 const l = K(!1);
 Vc(() => (l.value = !0)), Pc(() => (l.value = !1));
 const i = he(),
  { layoutItemStyles: o, layoutItemScrimStyles: r } = n.register(a, {
   ...e,
   active: y(() => (l.value ? !1 : e.active.value)),
   id: t,
  });
 return (
  nt(() => n.unregister(t)),
  { layoutItemStyles: o, layoutRect: n.layoutRect, layoutItemScrimStyles: r, layoutIsReady: i }
 );
}
const _d = (e, n, t, a) => {
 let l = { top: 0, left: 0, right: 0, bottom: 0 };
 const i = [{ id: '', layer: { ...l } }];
 for (const o of e) {
  const r = n.get(o),
   s = t.get(o),
   c = a.get(o);
  if (!r || !s || !c) continue;
  const d = { ...l, [r.value]: parseInt(l[r.value], 10) + (c.value ? parseInt(s.value, 10) : 0) };
  i.push({ id: o, layer: d }), (l = d);
 }
 return i;
};
function Lr(e) {
 const n = ge(Hn, null),
  t = y(() => (n ? n.rootZIndex.value - 100 : Vo)),
  a = j([]),
  l = ct(new Map()),
  i = ct(new Map()),
  o = ct(new Map()),
  r = ct(new Map()),
  s = ct(new Map()),
  { resizeRef: c, contentRect: d } = yt(),
  f = uo(() => {
   const w = [...new Set([...o.values()].map((C) => C.value))].sort((C, P) => C - P),
    V = [];
   for (const C of w) {
    const P = a.value.filter((x) => {
     var _;
     return ((_ = o.get(x)) == null ? void 0 : _.value) === C;
    });
    V.push(...P);
   }
   return _d(V, l, i, r);
  }),
  m = y(() => !Array.from(s.values()).some((w) => w.value)),
  v = y(() => f.value[f.value.length - 1].layer),
  b = y(() => ({
   '--v-layout-left': Z(v.value.left),
   '--v-layout-right': Z(v.value.right),
   '--v-layout-top': Z(v.value.top),
   '--v-layout-bottom': Z(v.value.bottom),
   ...(m.value ? void 0 : { transition: 'none' }),
  })),
  g = uo(() =>
   f.value.slice(1).map((w, V) => {
    let { id: C } = w;
    const { layer: P } = f.value[V],
     x = i.get(C),
     _ = l.get(C);
    return { id: C, ...P, size: Number(x.value), position: _.value };
   })
  ),
  h = (w) => g.value.find((V) => V.id === w),
  S = Me('createLayout'),
  k = he();
 Ie(Hn, {
  register: (w, V) => {
   let {
    id: C,
    order: P,
    position: x,
    layoutSize: _,
    elementSize: T,
    active: A,
    disableTransitions: p,
    absolute: F,
   } = V;
   o.set(C, P), l.set(C, x), i.set(C, _), r.set(C, A), p && s.set(C, p);
   const W = kn(Mr, S == null ? void 0 : S.vnode).indexOf(w);
   W > -1 ? a.value.splice(W, 0, C) : a.value.push(C);
   const te = y(() => g.value.findIndex((L) => L.id === C)),
    N = y(() => t.value + f.value.length * 2 - te.value * 2),
    H = y(() => {
     const L = x.value === 'left' || x.value === 'right',
      G = x.value === 'right',
      ae = x.value === 'bottom',
      oe = T.value ?? _.value,
      q = oe === 0 ? '%' : 'px',
      Y = {
       [x.value]: 0,
       zIndex: N.value,
       transform: `translate${L ? 'X' : 'Y'}(${(A.value ? 0 : -(oe === 0 ? 100 : oe)) * (G || ae ? -1 : 1)}${q})`,
       position: F.value || t.value !== Vo ? 'absolute' : 'fixed',
       ...(m.value ? void 0 : { transition: 'none' }),
      };
     if (te.value < 0) throw new Error(`Layout item "${C}" is missing`);
     const Q = g.value[te.value];
     if (!Q) throw new Error(`[Vuetify] Could not find layout item "${C}"`);
     return {
      ...Y,
      height: L ? `calc(100% - ${Q.top}px - ${Q.bottom}px)` : T.value ? `${T.value}px` : void 0,
      left: G ? void 0 : `${Q.left}px`,
      right: G ? `${Q.right}px` : void 0,
      top: x.value !== 'bottom' ? `${Q.top}px` : void 0,
      bottom: x.value !== 'top' ? `${Q.bottom}px` : void 0,
      width: L ? (T.value ? `${T.value}px` : void 0) : `calc(100% - ${Q.left}px - ${Q.right}px)`,
     };
    }),
    E = y(() => ({ zIndex: N.value - 1 }));
   return { layoutItemStyles: H, layoutItemScrimStyles: E, zIndex: N };
  },
  unregister: (w) => {
   o.delete(w),
    l.delete(w),
    i.delete(w),
    r.delete(w),
    s.delete(w),
    (a.value = a.value.filter((V) => V !== w));
  },
  mainRect: v,
  mainStyles: b,
  getLayoutItem: h,
  items: g,
  layoutRect: d,
  rootZIndex: t,
  layoutIsReady: k,
 });
 const I = y(() => ['v-layout', { 'v-layout--full-height': e.fullHeight }]),
  B = y(() => ({
   zIndex: n ? t.value : void 0,
   position: n ? 'relative' : void 0,
   overflow: n ? 'hidden' : void 0,
  }));
 return {
  layoutClasses: I,
  layoutStyles: B,
  getLayoutItem: h,
  items: g,
  layoutRect: d,
  layoutIsReady: k,
  layoutRef: c,
 };
}
function lt(e, n) {
 let t;
 function a() {
  (t = ei()),
   t.run(() =>
    n.length
     ? n(() => {
        t == null || t.stop(), a();
       })
     : n()
   );
 }
 X(
  e,
  (l) => {
   l && !t ? a() : l || (t == null || t.stop(), (t = void 0));
  },
  { immediate: !0 }
 ),
  Ze(() => {
   t == null || t.stop();
  });
}
function le(e, n, t) {
 let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (f) => f,
  l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (f) => f;
 const i = Me('useProxiedModel'),
  o = j(e[n] !== void 0 ? e[n] : t),
  r = qt(n),
  c =
   r !== n
    ? y(() => {
       var f, m, v, b;
       return (
        e[n],
        !!(
         (((f = i.vnode.props) != null && f.hasOwnProperty(n)) ||
          ((m = i.vnode.props) != null && m.hasOwnProperty(r))) &&
         (((v = i.vnode.props) != null && v.hasOwnProperty(`onUpdate:${n}`)) ||
          ((b = i.vnode.props) != null && b.hasOwnProperty(`onUpdate:${r}`)))
        )
       );
      })
    : y(() => {
       var f, m;
       return (
        e[n],
        !!(
         (f = i.vnode.props) != null &&
         f.hasOwnProperty(n) &&
         (m = i.vnode.props) != null &&
         m.hasOwnProperty(`onUpdate:${n}`)
        )
       );
      });
 lt(
  () => !c.value,
  () => {
   X(
    () => e[n],
    (f) => {
     o.value = f;
    }
   );
  }
 );
 const d = y({
  get() {
   const f = e[n];
   return a(c.value ? f : o.value);
  },
  set(f) {
   const m = l(f),
    v = tt(c.value ? e[n] : o.value);
   v === m || a(v) === f || ((o.value = m), i == null || i.emit(`update:${n}`, m));
  },
 });
 return Object.defineProperty(d, 'externalValue', { get: () => (c.value ? e[n] : o.value) }), d;
}
const Td = {
  badge: 'Badge',
  open: 'Open',
  close: 'Close',
  dismiss: 'Dismiss',
  confirmEdit: { ok: 'OK', cancel: 'Cancel' },
  dataIterator: { noResultsText: 'No matching records found', loadingText: 'Loading items...' },
  dataTable: {
   itemsPerPageText: 'Rows per page:',
   ariaLabel: {
    sortDescending: 'Sorted descending.',
    sortAscending: 'Sorted ascending.',
    sortNone: 'Not sorted.',
    activateNone: 'Activate to remove sorting.',
    activateDescending: 'Activate to sort descending.',
    activateAscending: 'Activate to sort ascending.',
   },
   sortBy: 'Sort by',
  },
  dataFooter: {
   itemsPerPageText: 'Items per page:',
   itemsPerPageAll: 'All',
   nextPage: 'Next page',
   prevPage: 'Previous page',
   firstPage: 'First page',
   lastPage: 'Last page',
   pageText: '{0}-{1} of {2}',
  },
  dateRangeInput: { divider: 'to' },
  datePicker: {
   itemsSelected: '{0} selected',
   range: { title: 'Select dates', header: 'Enter dates' },
   title: 'Select date',
   header: 'Enter date',
   input: { placeholder: 'Enter date' },
  },
  noDataText: 'No data available',
  carousel: {
   prev: 'Previous visual',
   next: 'Next visual',
   ariaLabel: { delimiter: 'Carousel slide {0} of {1}' },
  },
  calendar: { moreEvents: '{0} more', today: 'Today' },
  input: {
   clear: 'Clear {0}',
   prependAction: '{0} prepended action',
   appendAction: '{0} appended action',
   otp: 'Please enter OTP character {0}',
  },
  fileInput: { counter: '{0} files', counterSize: '{0} files ({1} in total)' },
  timePicker: { am: 'AM', pm: 'PM', title: 'Select Time' },
  pagination: {
   ariaLabel: {
    root: 'Pagination Navigation',
    next: 'Next page',
    previous: 'Previous page',
    page: 'Go to page {0}',
    currentPage: 'Page {0}, Current page',
    first: 'First page',
    last: 'Last page',
   },
  },
  stepper: { next: 'Next', prev: 'Previous' },
  rating: { ariaLabel: { item: 'Rating {0} of {1}' } },
  loading: 'Loading...',
  infiniteScroll: { loadMore: 'Load more', empty: 'No more' },
 },
 Po = '$vuetify.',
 Io = (e, n) => e.replace(/\{(\d+)\}/g, (t, a) => String(n[+a])),
 Or = (e, n, t) =>
  function (a) {
   for (var l = arguments.length, i = new Array(l > 1 ? l - 1 : 0), o = 1; o < l; o++)
    i[o - 1] = arguments[o];
   if (!a.startsWith(Po)) return Io(a, i);
   const r = a.replace(Po, ''),
    s = e.value && t.value[e.value],
    c = n.value && t.value[n.value];
   let d = On(s, r, null);
   return (
    d || (`${a}${e.value}`, (d = On(c, r, null))),
    d || (d = a),
    typeof d != 'string' && (d = a),
    Io(d, i)
   );
  };
function Rr(e, n) {
 return (t, a) => new Intl.NumberFormat([e.value, n.value], a).format(t);
}
function dl(e, n, t) {
 const a = le(e, n, e[n] ?? t.value);
 return (
  (a.value = e[n] ?? t.value),
  X(t, (l) => {
   e[n] == null && (a.value = t.value);
  }),
  a
 );
}
function Nr(e) {
 return (n) => {
  const t = dl(n, 'locale', e.current),
   a = dl(n, 'fallback', e.fallback),
   l = dl(n, 'messages', e.messages);
  return {
   name: 'vuetify',
   current: t,
   fallback: a,
   messages: l,
   t: Or(t, a, l),
   n: Rr(t, a),
   provide: Nr({ current: t, fallback: a, messages: l }),
  };
 };
}
function Ad(e) {
 const n = K((e == null ? void 0 : e.locale) ?? 'en'),
  t = K((e == null ? void 0 : e.fallback) ?? 'en'),
  a = j({ en: Td, ...(e == null ? void 0 : e.messages) });
 return {
  name: 'vuetify',
  current: n,
  fallback: t,
  messages: a,
  t: Or(n, t, a),
  n: Rr(n, t),
  provide: Nr({ current: n, fallback: t, messages: a }),
 };
}
const In = Symbol.for('vuetify:locale');
function Bd(e) {
 return e.name != null;
}
function Dd(e) {
 const n =
   e != null && e.adapter && Bd(e == null ? void 0 : e.adapter)
    ? e == null
      ? void 0
      : e.adapter
    : Ad(e),
  t = Md(n, e);
 return { ...n, ...t };
}
function $e() {
 const e = ge(In);
 if (!e) throw new Error('[Vuetify] Could not find injected locale instance');
 return e;
}
function pd(e) {
 const n = ge(In);
 if (!n) throw new Error('[Vuetify] Could not find injected locale instance');
 const t = n.provide(e),
  a = $d(t, n.rtl, e),
  l = { ...t, ...a };
 return Ie(In, l), l;
}
function Ed() {
 return {
  af: !1,
  ar: !0,
  bg: !1,
  ca: !1,
  ckb: !1,
  cs: !1,
  de: !1,
  el: !1,
  en: !1,
  es: !1,
  et: !1,
  fa: !0,
  fi: !1,
  fr: !1,
  hr: !1,
  hu: !1,
  he: !0,
  id: !1,
  it: !1,
  ja: !1,
  km: !1,
  ko: !1,
  lv: !1,
  lt: !1,
  nl: !1,
  no: !1,
  pl: !1,
  pt: !1,
  ro: !1,
  ru: !1,
  sk: !1,
  sl: !1,
  srCyrl: !1,
  srLatn: !1,
  sv: !1,
  th: !1,
  tr: !1,
  az: !1,
  uk: !1,
  vi: !1,
  zhHans: !1,
  zhHant: !1,
 };
}
function Md(e, n) {
 const t = j((n == null ? void 0 : n.rtl) ?? Ed()),
  a = y(() => t.value[e.current.value] ?? !1);
 return { isRtl: a, rtl: t, rtlClasses: y(() => `v-locale--is-${a.value ? 'rtl' : 'ltr'}`) };
}
function $d(e, n, t) {
 const a = y(() => t.rtl ?? n.value[e.current.value] ?? !1);
 return { isRtl: a, rtl: n, rtlClasses: y(() => `v-locale--is-${a.value ? 'rtl' : 'ltr'}`) };
}
function Re() {
 const e = ge(In);
 if (!e) throw new Error('[Vuetify] Could not find injected rtl instance');
 return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
const Wn = Symbol.for('vuetify:theme'),
 me = D({ theme: String }, 'theme');
function _o() {
 return {
  defaultTheme: 'light',
  variations: { colors: [], lighten: 0, darken: 0 },
  themes: {
   light: {
    dark: !1,
    colors: {
     background: '#FFFFFF',
     surface: '#FFFFFF',
     'surface-bright': '#FFFFFF',
     'surface-light': '#EEEEEE',
     'surface-variant': '#424242',
     'on-surface-variant': '#EEEEEE',
     primary: '#1867C0',
     'primary-darken-1': '#1F5592',
     secondary: '#48A9A6',
     'secondary-darken-1': '#018786',
     error: '#B00020',
     info: '#2196F3',
     success: '#4CAF50',
     warning: '#FB8C00',
    },
    variables: {
     'border-color': '#000000',
     'border-opacity': 0.12,
     'high-emphasis-opacity': 0.87,
     'medium-emphasis-opacity': 0.6,
     'disabled-opacity': 0.38,
     'idle-opacity': 0.04,
     'hover-opacity': 0.04,
     'focus-opacity': 0.12,
     'selected-opacity': 0.08,
     'activated-opacity': 0.12,
     'pressed-opacity': 0.12,
     'dragged-opacity': 0.08,
     'theme-kbd': '#212529',
     'theme-on-kbd': '#FFFFFF',
     'theme-code': '#F5F5F5',
     'theme-on-code': '#000000',
    },
   },
   dark: {
    dark: !0,
    colors: {
     background: '#121212',
     surface: '#212121',
     'surface-bright': '#ccbfd6',
     'surface-light': '#424242',
     'surface-variant': '#a3a3a3',
     'on-surface-variant': '#424242',
     primary: '#2196F3',
     'primary-darken-1': '#277CC1',
     secondary: '#54B6B2',
     'secondary-darken-1': '#48A9A6',
     error: '#CF6679',
     info: '#2196F3',
     success: '#4CAF50',
     warning: '#FB8C00',
    },
    variables: {
     'border-color': '#FFFFFF',
     'border-opacity': 0.12,
     'high-emphasis-opacity': 1,
     'medium-emphasis-opacity': 0.7,
     'disabled-opacity': 0.5,
     'idle-opacity': 0.1,
     'hover-opacity': 0.04,
     'focus-opacity': 0.12,
     'selected-opacity': 0.08,
     'activated-opacity': 0.12,
     'pressed-opacity': 0.16,
     'dragged-opacity': 0.08,
     'theme-kbd': '#212529',
     'theme-on-kbd': '#FFFFFF',
     'theme-code': '#343434',
     'theme-on-code': '#CCCCCC',
    },
   },
  },
 };
}
function Fd() {
 var a, l;
 let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _o();
 const n = _o();
 if (!e) return { ...n, isDisabled: !0 };
 const t = {};
 for (const [i, o] of Object.entries(e.themes ?? {})) {
  const r =
   o.dark || i === 'dark'
    ? (a = n.themes) == null
      ? void 0
      : a.dark
    : (l = n.themes) == null
      ? void 0
      : l.light;
  t[i] = qe(r, o);
 }
 return qe(n, { ...e, themes: t });
}
function Ld(e) {
 const n = Fd(e),
  t = j(n.defaultTheme),
  a = j(n.themes),
  l = y(() => {
   const d = {};
   for (const [f, m] of Object.entries(a.value)) {
    const v = (d[f] = { ...m, colors: { ...m.colors } });
    if (n.variations)
     for (const b of n.variations.colors) {
      const g = v.colors[b];
      if (g)
       for (const h of ['lighten', 'darken']) {
        const S = h === 'lighten' ? gd : hd;
        for (const k of xt(n.variations[h], 1)) v.colors[`${b}-${h}-${k}`] = _r(S(dt(g), k));
       }
     }
    for (const b of Object.keys(v.colors)) {
     if (/^on-[a-z]/.test(b) || v.colors[`on-${b}`]) continue;
     const g = `on-${b}`,
      h = dt(v.colors[b]);
     v.colors[g] = Dr(h);
    }
   }
   return d;
  }),
  i = y(() => l.value[t.value]),
  o = y(() => {
   var b;
   const d = [];
   (b = i.value) != null && b.dark && Gt(d, ':root', ['color-scheme: dark']),
    Gt(d, ':root', To(i.value));
   for (const [g, h] of Object.entries(l.value))
    Gt(d, `.v-theme--${g}`, [`color-scheme: ${h.dark ? 'dark' : 'normal'}`, ...To(h)]);
   const f = [],
    m = [],
    v = new Set(Object.values(l.value).flatMap((g) => Object.keys(g.colors)));
   for (const g of v)
    /^on-[a-z]/.test(g)
     ? Gt(m, `.${g}`, [`color: rgb(var(--v-theme-${g})) !important`])
     : (Gt(f, `.bg-${g}`, [
        `--v-theme-overlay-multiplier: var(--v-theme-${g}-overlay-multiplier)`,
        `background-color: rgb(var(--v-theme-${g})) !important`,
        `color: rgb(var(--v-theme-on-${g})) !important`,
       ]),
       Gt(m, `.text-${g}`, [`color: rgb(var(--v-theme-${g})) !important`]),
       Gt(m, `.border-${g}`, [`--v-border-color: var(--v-theme-${g})`]));
   return d.push(...f, ...m), d.map((g, h) => (h === 0 ? g : `    ${g}`)).join('');
  });
 function r() {
  return { style: [{ children: o.value, id: 'vuetify-theme-stylesheet', nonce: n.cspNonce || !1 }] };
 }
 function s(d) {
  if (n.isDisabled) return;
  const f = d._context.provides.usehead;
  if (f)
   if (f.push) {
    const m = f.push(r);
    ke &&
     X(o, () => {
      m.patch(r);
     });
   } else ke ? (f.addHeadObjs(y(r)), pe(() => f.updateDOM())) : f.addHeadObjs(r());
  else {
   let v = function () {
     if (typeof document < 'u' && !m) {
      const b = document.createElement('style');
      (b.type = 'text/css'),
       (b.id = 'vuetify-theme-stylesheet'),
       n.cspNonce && b.setAttribute('nonce', n.cspNonce),
       (m = b),
       document.head.appendChild(m);
     }
     m && (m.innerHTML = o.value);
    },
    m = ke ? document.getElementById('vuetify-theme-stylesheet') : null;
   ke ? X(o, v, { immediate: !0 }) : v();
  }
 }
 const c = y(() => (n.isDisabled ? void 0 : `v-theme--${t.value}`));
 return {
  install: s,
  isDisabled: n.isDisabled,
  name: t,
  themes: a,
  current: i,
  computedThemes: l,
  themeClasses: c,
  styles: o,
  global: { name: t, current: i },
 };
}
function Se(e) {
 Me('provideTheme');
 const n = ge(Wn, null);
 if (!n) throw new Error('Could not find Vuetify theme injection');
 const t = y(() => e.theme ?? n.name.value),
  a = y(() => n.themes.value[t.value]),
  l = y(() => (n.isDisabled ? void 0 : `v-theme--${t.value}`)),
  i = { ...n, name: t, current: a, themeClasses: l };
 return Ie(Wn, i), i;
}
function zr() {
 Me('useTheme');
 const e = ge(Wn, null);
 if (!e) throw new Error('Could not find Vuetify theme injection');
 return e;
}
function Gt(e, n, t) {
 e.push(
  `${n} {
`,
  ...t.map(
   (a) => `  ${a};
`
  ),
  `}
`
 );
}
function To(e) {
 const n = e.dark ? 2 : 1,
  t = e.dark ? 1 : 2,
  a = [];
 for (const [l, i] of Object.entries(e.colors)) {
  const o = dt(i);
  a.push(`--v-theme-${l}: ${o.r},${o.g},${o.b}`),
   l.startsWith('on-') || a.push(`--v-theme-${l}-overlay-multiplier: ${Vl(i) > 0.18 ? n : t}`);
 }
 for (const [l, i] of Object.entries(e.variables)) {
  const o = typeof i == 'string' && i.startsWith('#') ? dt(i) : void 0,
   r = o ? `${o.r}, ${o.g}, ${o.b}` : void 0;
  a.push(`--v-${l}: ${r ?? i}`);
 }
 return a;
}
const Od = D({ ...J(), ...$r({ fullHeight: !0 }), ...me() }, 'VApp'),
 Rd = $()({
  name: 'VApp',
  props: Od(),
  setup(e, n) {
   let { slots: t } = n;
   const a = Se(e),
    { layoutClasses: l, getLayoutItem: i, items: o, layoutRef: r } = Lr(e),
    { rtlClasses: s } = Re();
   return (
    R(() =>
     u(
      'div',
      {
       ref: r,
       class: ['v-application', a.themeClasses.value, l.value, s.value, e.class],
       style: [e.style],
      },
      [
       u('div', { class: 'v-application__wrap' }, [
        u(ur, null, {
         default: () => {
          var c;
          return [u(ie, null, [(c = t.default) == null ? void 0 : c.call(t)])];
         },
        }),
       ]),
      ]
     )
    ),
    { getLayoutItem: i, items: o, theme: a }
   );
  },
 }),
 de = D({ tag: { type: String, default: 'div' } }, 'tag'),
 Hr = D({ text: String, ...J(), ...de() }, 'VToolbarTitle'),
 fi = $()({
  name: 'VToolbarTitle',
  props: Hr(),
  setup(e, n) {
   let { slots: t } = n;
   return (
    R(() => {
     const a = !!(t.default || t.text || e.text);
     return u(
      e.tag,
      { class: ['v-toolbar-title', e.class], style: e.style },
      {
       default: () => {
        var l;
        return [
         a &&
          u('div', { class: 'v-toolbar-title__placeholder' }, [
           t.text ? t.text() : e.text,
           (l = t.default) == null ? void 0 : l.call(t),
          ]),
        ];
       },
      }
     );
    }),
    {}
   );
  },
 }),
 Nd = D(
  {
   disabled: Boolean,
   group: Boolean,
   hideOnLeave: Boolean,
   leaveAbsolute: Boolean,
   mode: String,
   origin: String,
  },
  'transition'
 );
function ut(e, n, t) {
 return $()({
  name: e,
  props: Nd({ mode: t, origin: n }),
  setup(a, l) {
   let { slots: i } = l;
   const o = {
    onBeforeEnter(r) {
     a.origin && (r.style.transformOrigin = a.origin);
    },
    onLeave(r) {
     if (a.leaveAbsolute) {
      const { offsetTop: s, offsetLeft: c, offsetWidth: d, offsetHeight: f } = r;
      (r._transitionInitialStyles = {
       position: r.style.position,
       top: r.style.top,
       left: r.style.left,
       width: r.style.width,
       height: r.style.height,
      }),
       (r.style.position = 'absolute'),
       (r.style.top = `${s}px`),
       (r.style.left = `${c}px`),
       (r.style.width = `${d}px`),
       (r.style.height = `${f}px`);
     }
     a.hideOnLeave && r.style.setProperty('display', 'none', 'important');
    },
    onAfterLeave(r) {
     if (a.leaveAbsolute && r != null && r._transitionInitialStyles) {
      const { position: s, top: c, left: d, width: f, height: m } = r._transitionInitialStyles;
      delete r._transitionInitialStyles,
       (r.style.position = s || ''),
       (r.style.top = c || ''),
       (r.style.left = d || ''),
       (r.style.width = f || ''),
       (r.style.height = m || '');
     }
    },
   };
   return () => {
    const r = a.group ? ti : Ft;
    return Rt(
     r,
     {
      name: a.disabled ? '' : e,
      css: !a.disabled,
      ...(a.group ? void 0 : { mode: a.mode }),
      ...(a.disabled ? {} : o),
     },
     i.default
    );
   };
  },
 });
}
function Wr(e, n) {
 let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 'in-out';
 return $()({
  name: e,
  props: { mode: { type: String, default: t }, disabled: Boolean, group: Boolean },
  setup(a, l) {
   let { slots: i } = l;
   const o = a.group ? ti : Ft;
   return () =>
    Rt(o, { name: a.disabled ? '' : e, css: !a.disabled, ...(a.disabled ? {} : n) }, i.default);
  },
 });
}
function jr() {
 let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
 const t = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? 'width' : 'height',
  a = rr(`offset-${t}`);
 return {
  onBeforeEnter(o) {
   (o._parent = o.parentNode),
    (o._initialStyle = { transition: o.style.transition, overflow: o.style.overflow, [t]: o.style[t] });
  },
  onEnter(o) {
   const r = o._initialStyle;
   o.style.setProperty('transition', 'none', 'important'), (o.style.overflow = 'hidden');
   const s = `${o[a]}px`;
   (o.style[t] = '0'),
    o.offsetHeight,
    (o.style.transition = r.transition),
    e && o._parent && o._parent.classList.add(e),
    requestAnimationFrame(() => {
     o.style[t] = s;
    });
  },
  onAfterEnter: i,
  onEnterCancelled: i,
  onLeave(o) {
   (o._initialStyle = { transition: '', overflow: o.style.overflow, [t]: o.style[t] }),
    (o.style.overflow = 'hidden'),
    (o.style[t] = `${o[a]}px`),
    o.offsetHeight,
    requestAnimationFrame(() => (o.style[t] = '0'));
  },
  onAfterLeave: l,
  onLeaveCancelled: l,
 };
 function l(o) {
  e && o._parent && o._parent.classList.remove(e), i(o);
 }
 function i(o) {
  const r = o._initialStyle[t];
  (o.style.overflow = o._initialStyle.overflow), r != null && (o.style[t] = r), delete o._initialStyle;
 }
}
const zd = D({ target: [Object, Array] }, 'v-dialog-transition'),
 $a = $()({
  name: 'VDialogTransition',
  props: zd(),
  setup(e, n) {
   let { slots: t } = n;
   const a = {
    onBeforeEnter(l) {
     (l.style.pointerEvents = 'none'), (l.style.visibility = 'hidden');
    },
    async onEnter(l, i) {
     var m;
     await new Promise((v) => requestAnimationFrame(v)),
      await new Promise((v) => requestAnimationFrame(v)),
      (l.style.visibility = '');
     const { x: o, y: r, sx: s, sy: c, speed: d } = Bo(e.target, l),
      f = Kt(l, [{ transform: `translate(${o}px, ${r}px) scale(${s}, ${c})`, opacity: 0 }, {}], {
       duration: 225 * d,
       easing: Cd,
      });
     (m = Ao(l)) == null ||
      m.forEach((v) => {
       Kt(v, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 225 * 2 * d, easing: zn });
      }),
      f.finished.then(() => i());
    },
    onAfterEnter(l) {
     l.style.removeProperty('pointer-events');
    },
    onBeforeLeave(l) {
     l.style.pointerEvents = 'none';
    },
    async onLeave(l, i) {
     var m;
     await new Promise((v) => requestAnimationFrame(v));
     const { x: o, y: r, sx: s, sy: c, speed: d } = Bo(e.target, l);
     Kt(l, [{}, { transform: `translate(${o}px, ${r}px) scale(${s}, ${c})`, opacity: 0 }], {
      duration: 125 * d,
      easing: Vd,
     }).finished.then(() => i()),
      (m = Ao(l)) == null ||
       m.forEach((v) => {
        Kt(v, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 125 * 2 * d, easing: zn });
       });
    },
    onAfterLeave(l) {
     l.style.removeProperty('pointer-events');
    },
   };
   return () =>
    e.target
     ? u(Ft, z({ name: 'dialog-transition' }, a, { css: !1 }), t)
     : u(Ft, { name: 'dialog-transition' }, t);
  },
 });
function Ao(e) {
 var t;
 const n =
  (t = e.querySelector(':scope > .v-card, :scope > .v-sheet, :scope > .v-list')) == null
   ? void 0
   : t.children;
 return n && [...n];
}
function Bo(e, n) {
 const t = kr(e),
  a = ri(n),
  [l, i] = getComputedStyle(n)
   .transformOrigin.split(' ')
   .map((S) => parseFloat(S)),
  [o, r] = getComputedStyle(n).getPropertyValue('--v-overlay-anchor-origin').split(' ');
 let s = t.left + t.width / 2;
 o === 'left' || r === 'left'
  ? (s -= t.width / 2)
  : (o === 'right' || r === 'right') && (s += t.width / 2);
 let c = t.top + t.height / 2;
 o === 'top' || r === 'top'
  ? (c -= t.height / 2)
  : (o === 'bottom' || r === 'bottom') && (c += t.height / 2);
 const d = t.width / a.width,
  f = t.height / a.height,
  m = Math.max(1, d, f),
  v = d / m || 0,
  b = f / m || 0,
  g = (a.width * a.height) / (window.innerWidth * window.innerHeight),
  h = g > 0.12 ? Math.min(1.5, (g - 0.12) * 10 + 1) : 1;
 return { x: s - (l + a.left), y: c - (i + a.top), sx: v, sy: b, speed: h };
}
const Hd = ut('fab-transition', 'center center', 'out-in'),
 Wd = ut('dialog-bottom-transition'),
 jd = ut('dialog-top-transition'),
 jn = ut('fade-transition'),
 mi = ut('scale-transition'),
 Yd = ut('scroll-x-transition'),
 Gd = ut('scroll-x-reverse-transition'),
 Ud = ut('scroll-y-transition'),
 Kd = ut('scroll-y-reverse-transition'),
 qd = ut('slide-x-transition'),
 Xd = ut('slide-x-reverse-transition'),
 gi = ut('slide-y-transition'),
 Zd = ut('slide-y-reverse-transition'),
 Fa = Wr('expand-transition', jr()),
 hi = Wr('expand-x-transition', jr('', !0)),
 Jd = D(
  {
   defaults: Object,
   disabled: Boolean,
   reset: [Number, String],
   root: [Boolean, String],
   scoped: Boolean,
  },
  'VDefaultsProvider'
 ),
 fe = $(!1)({
  name: 'VDefaultsProvider',
  props: Jd(),
  setup(e, n) {
   let { slots: t } = n;
   const { defaults: a, disabled: l, reset: i, root: o, scoped: r } = Aa(e);
   return (
    Be(a, { reset: i, root: o, scoped: r, disabled: l }),
    () => {
     var s;
     return (s = t.default) == null ? void 0 : s.call(t);
    }
   );
  },
 }),
 Ne = D(
  {
   height: [Number, String],
   maxHeight: [Number, String],
   maxWidth: [Number, String],
   minHeight: [Number, String],
   minWidth: [Number, String],
   width: [Number, String],
  },
  'dimension'
 );
function ze(e) {
 return {
  dimensionStyles: y(() => {
   const t = {},
    a = Z(e.height),
    l = Z(e.maxHeight),
    i = Z(e.maxWidth),
    o = Z(e.minHeight),
    r = Z(e.minWidth),
    s = Z(e.width);
   return (
    a != null && (t.height = a),
    l != null && (t.maxHeight = l),
    i != null && (t.maxWidth = i),
    o != null && (t.minHeight = o),
    r != null && (t.minWidth = r),
    s != null && (t.width = s),
    t
   );
  }),
 };
}
function Qd(e) {
 return {
  aspectStyles: y(() => {
   const n = Number(e.aspectRatio);
   return n ? { paddingBottom: String((1 / n) * 100) + '%' } : void 0;
  }),
 };
}
const Yr = D(
  { aspectRatio: [String, Number], contentClass: null, inline: Boolean, ...J(), ...Ne() },
  'VResponsive'
 ),
 Pl = $()({
  name: 'VResponsive',
  props: Yr(),
  setup(e, n) {
   let { slots: t } = n;
   const { aspectStyles: a } = Qd(e),
    { dimensionStyles: l } = ze(e);
   return (
    R(() => {
     var i;
     return u(
      'div',
      {
       class: ['v-responsive', { 'v-responsive--inline': e.inline }, e.class],
       style: [l.value, e.style],
      },
      [
       u('div', { class: 'v-responsive__sizer', style: a.value }, null),
       (i = t.additional) == null ? void 0 : i.call(t),
       t.default && u('div', { class: ['v-responsive__content', e.contentClass] }, [t.default()]),
      ]
     );
    }),
    {}
   );
  },
 });
function yi(e) {
 return ii(() => {
  const n = [],
   t = {};
  if (e.value.background)
   if (Cl(e.value.background)) {
    if (((t.backgroundColor = e.value.background), !e.value.text && vd(e.value.background))) {
     const a = dt(e.value.background);
     if (a.a == null || a.a === 1) {
      const l = Dr(a);
      (t.color = l), (t.caretColor = l);
     }
    }
   } else n.push(`bg-${e.value.background}`);
  return (
   e.value.text &&
    (Cl(e.value.text)
     ? ((t.color = e.value.text), (t.caretColor = e.value.text))
     : n.push(`text-${e.value.text}`)),
   { colorClasses: n, colorStyles: t }
  );
 });
}
function Ge(e, n) {
 const t = y(() => ({ text: wn(e) ? e.value : n ? e[n] : null })),
  { colorClasses: a, colorStyles: l } = yi(t);
 return { textColorClasses: a, textColorStyles: l };
}
function we(e, n) {
 const t = y(() => ({ background: wn(e) ? e.value : n ? e[n] : null })),
  { colorClasses: a, colorStyles: l } = yi(t);
 return { backgroundColorClasses: a, backgroundColorStyles: l };
}
const _e = D(
 { rounded: { type: [Boolean, Number, String], default: void 0 }, tile: Boolean },
 'rounded'
);
function De(e) {
 let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Vt();
 return {
  roundedClasses: y(() => {
   const a = wn(e) ? e.value : e.rounded,
    l = wn(e) ? e.value : e.tile,
    i = [];
   if (a === !0 || a === '') i.push(`${n}--rounded`);
   else if (typeof a == 'string' || a === 0)
    for (const o of String(a).split(' ')) i.push(`rounded-${o}`);
   else (l || a === !1) && i.push('rounded-0');
   return i;
  }),
 };
}
const St = D(
  {
   transition: {
    type: [Boolean, String, Object],
    default: 'fade-transition',
    validator: (e) => e !== !0,
   },
  },
  'transition'
 ),
 Xe = (e, n) => {
  let { slots: t } = n;
  const { transition: a, disabled: l, group: i, ...o } = e,
   { component: r = i ? ti : Ft, ...s } = typeof a == 'object' ? a : {};
  return Rt(
   r,
   z(
    typeof a == 'string' ? { name: l ? '' : a } : s,
    typeof a == 'string'
     ? {}
     : Object.fromEntries(
        Object.entries({ disabled: l, group: i }).filter((c) => {
         let [d, f] = c;
         return f !== void 0;
        })
       ),
    o
   ),
   t
  );
 };
function ev(e, n) {
 if (!ni) return;
 const t = n.modifiers || {},
  a = n.value,
  { handler: l, options: i } = typeof a == 'object' ? a : { handler: a, options: {} },
  o = new IntersectionObserver(function () {
   var f;
   let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    s = arguments.length > 1 ? arguments[1] : void 0;
   const c = (f = e._observe) == null ? void 0 : f[n.instance.$.uid];
   if (!c) return;
   const d = r.some((m) => m.isIntersecting);
   l && (!t.quiet || c.init) && (!t.once || d || c.init) && l(d, r, s),
    d && t.once ? Gr(e, n) : (c.init = !0);
  }, i);
 (e._observe = Object(e._observe)),
  (e._observe[n.instance.$.uid] = { init: !1, observer: o }),
  o.observe(e);
}
function Gr(e, n) {
 var a;
 const t = (a = e._observe) == null ? void 0 : a[n.instance.$.uid];
 t && (t.observer.unobserve(e), delete e._observe[n.instance.$.uid]);
}
const Jn = { mounted: ev, unmounted: Gr },
 Ur = D(
  {
   alt: String,
   cover: Boolean,
   color: String,
   draggable: { type: [Boolean, String], default: void 0 },
   eager: Boolean,
   gradient: String,
   lazySrc: String,
   options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) },
   sizes: String,
   src: { type: [String, Object], default: '' },
   crossorigin: String,
   referrerpolicy: String,
   srcset: String,
   position: String,
   ...Yr(),
   ...J(),
   ..._e(),
   ...St(),
  },
  'VImg'
 ),
 Tt = $()({
  name: 'VImg',
  directives: { intersect: Jn },
  props: Ur(),
  emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 },
  setup(e, n) {
   let { emit: t, slots: a } = n;
   const { backgroundColorClasses: l, backgroundColorStyles: i } = we(M(e, 'color')),
    { roundedClasses: o } = De(e),
    r = Me('VImg'),
    s = K(''),
    c = j(),
    d = K(e.eager ? 'loading' : 'idle'),
    f = K(),
    m = K(),
    v = y(() =>
     e.src && typeof e.src == 'object'
      ? {
         src: e.src.src,
         srcset: e.srcset || e.src.srcset,
         lazySrc: e.lazySrc || e.src.lazySrc,
         aspect: Number(e.aspectRatio || e.src.aspect || 0),
        }
      : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }
    ),
    b = y(() => v.value.aspect || f.value / m.value || 0);
   X(
    () => e.src,
    () => {
     g(d.value !== 'idle');
    }
   ),
    X(b, (A, p) => {
     !A && p && c.value && B(c.value);
    }),
    sr(() => g());
   function g(A) {
    if (!(e.eager && A) && !(ni && !A && !e.eager)) {
     if (((d.value = 'loading'), v.value.lazySrc)) {
      const p = new Image();
      (p.src = v.value.lazySrc), B(p, null);
     }
     v.value.src &&
      he(() => {
       var p;
       t('loadstart', ((p = c.value) == null ? void 0 : p.currentSrc) || v.value.src),
        setTimeout(() => {
         var F;
         if (!r.isUnmounted)
          if ((F = c.value) != null && F.complete) {
           if ((c.value.naturalWidth || S(), d.value === 'error')) return;
           b.value || B(c.value, null), d.value === 'loading' && h();
          } else b.value || B(c.value), k();
        });
      });
    }
   }
   function h() {
    var A;
    r.isUnmounted ||
     (k(),
     B(c.value),
     (d.value = 'loaded'),
     t('load', ((A = c.value) == null ? void 0 : A.currentSrc) || v.value.src));
   }
   function S() {
    var A;
    r.isUnmounted ||
     ((d.value = 'error'), t('error', ((A = c.value) == null ? void 0 : A.currentSrc) || v.value.src));
   }
   function k() {
    const A = c.value;
    A && (s.value = A.currentSrc || A.src);
   }
   let I = -1;
   nt(() => {
    clearTimeout(I);
   });
   function B(A) {
    let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const F = () => {
     if ((clearTimeout(I), r.isUnmounted)) return;
     const { naturalHeight: O, naturalWidth: W } = A;
     O || W
      ? ((f.value = W), (m.value = O))
      : !A.complete && d.value === 'loading' && p != null
        ? (I = window.setTimeout(F, p))
        : (A.currentSrc.endsWith('.svg') || A.currentSrc.startsWith('data:image/svg+xml')) &&
          ((f.value = 1), (m.value = 1));
    };
    F();
   }
   const w = y(() => ({ 'v-img__img--cover': e.cover, 'v-img__img--contain': !e.cover })),
    V = () => {
     var F;
     if (!v.value.src || d.value === 'idle') return null;
     const A = u(
       'img',
       {
        class: ['v-img__img', w.value],
        style: { objectPosition: e.position },
        src: v.value.src,
        srcset: v.value.srcset,
        alt: e.alt,
        crossorigin: e.crossorigin,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable,
        sizes: e.sizes,
        ref: c,
        onLoad: h,
        onError: S,
       },
       null
      ),
      p = (F = a.sources) == null ? void 0 : F.call(a);
     return u(
      Xe,
      { transition: e.transition, appear: !0 },
      {
       default: () => [
        Ae(p ? u('picture', { class: 'v-img__picture' }, [p, A]) : A, [[bt, d.value === 'loaded']]),
       ],
      }
     );
    },
    C = () =>
     u(
      Xe,
      { transition: e.transition },
      {
       default: () => [
        v.value.lazySrc &&
         d.value !== 'loaded' &&
         u(
          'img',
          {
           class: ['v-img__img', 'v-img__img--preload', w.value],
           style: { objectPosition: e.position },
           src: v.value.lazySrc,
           alt: e.alt,
           crossorigin: e.crossorigin,
           referrerpolicy: e.referrerpolicy,
           draggable: e.draggable,
          },
          null
         ),
       ],
      }
     ),
    P = () =>
     a.placeholder
      ? u(
         Xe,
         { transition: e.transition, appear: !0 },
         {
          default: () => [
           (d.value === 'loading' || (d.value === 'error' && !a.error)) &&
            u('div', { class: 'v-img__placeholder' }, [a.placeholder()]),
          ],
         }
        )
      : null,
    x = () =>
     a.error
      ? u(
         Xe,
         { transition: e.transition, appear: !0 },
         { default: () => [d.value === 'error' && u('div', { class: 'v-img__error' }, [a.error()])] }
        )
      : null,
    _ = () =>
     e.gradient
      ? u(
         'div',
         { class: 'v-img__gradient', style: { backgroundImage: `linear-gradient(${e.gradient})` } },
         null
        )
      : null,
    T = K(!1);
   {
    const A = X(b, (p) => {
     p &&
      (requestAnimationFrame(() => {
       requestAnimationFrame(() => {
        T.value = !0;
       });
      }),
      A());
    });
   }
   return (
    R(() => {
     const A = Pl.filterProps(e);
     return Ae(
      u(
       Pl,
       z(
        {
         class: ['v-img', { 'v-img--booting': !T.value }, l.value, o.value, e.class],
         style: [{ width: Z(e.width === 'auto' ? f.value : e.width) }, i.value, e.style],
        },
        A,
        { aspectRatio: b.value, 'aria-label': e.alt, role: e.alt ? 'img' : void 0 }
       ),
       {
        additional: () =>
         u(ie, null, [
          u(V, null, null),
          u(C, null, null),
          u(_, null, null),
          u(P, null, null),
          u(x, null, null),
         ]),
        default: a.default,
       }
      ),
      [[ot('intersect'), { handler: g, options: e.options }, null, { once: !0 }]]
     );
    }),
    { currentSrc: s, image: c, state: d, naturalWidth: f, naturalHeight: m }
   );
  },
 }),
 st = D({ border: [Boolean, Number, String] }, 'border');
function ft(e) {
 let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Vt();
 return {
  borderClasses: y(() => {
   const a = wn(e) ? e.value : e.border,
    l = [];
   if (a === !0 || a === '') l.push(`${n}--border`);
   else if (typeof a == 'string' || a === 0) for (const i of String(a).split(' ')) l.push(`border-${i}`);
   return l;
  }),
 };
}
const Oe = D(
 {
  elevation: {
   type: [Number, String],
   validator(e) {
    const n = parseInt(e);
    return !isNaN(n) && n >= 0 && n <= 24;
   },
  },
 },
 'elevation'
);
function Ye(e) {
 return {
  elevationClasses: y(() => {
   const t = wn(e) ? e.value : e.elevation,
    a = [];
   return t == null || a.push(`elevation-${t}`), a;
  }),
 };
}
const tv = [null, 'prominent', 'default', 'comfortable', 'compact'],
 Kr = D(
  {
   absolute: Boolean,
   collapse: Boolean,
   color: String,
   density: { type: String, default: 'default', validator: (e) => tv.includes(e) },
   extended: Boolean,
   extensionHeight: { type: [Number, String], default: 48 },
   flat: Boolean,
   floating: Boolean,
   height: { type: [Number, String], default: 64 },
   image: String,
   title: String,
   ...st(),
   ...J(),
   ...Oe(),
   ..._e(),
   ...de({ tag: 'header' }),
   ...me(),
  },
  'VToolbar'
 ),
 Il = $()({
  name: 'VToolbar',
  props: Kr(),
  setup(e, n) {
   var v;
   let { slots: t } = n;
   const { backgroundColorClasses: a, backgroundColorStyles: l } = we(M(e, 'color')),
    { borderClasses: i } = ft(e),
    { elevationClasses: o } = Ye(e),
    { roundedClasses: r } = De(e),
    { themeClasses: s } = Se(e),
    { rtlClasses: c } = Re(),
    d = K(!!(e.extended || ((v = t.extension) != null && v.call(t)))),
    f = y(() =>
     parseInt(
      Number(e.height) +
       (e.density === 'prominent' ? Number(e.height) : 0) -
       (e.density === 'comfortable' ? 8 : 0) -
       (e.density === 'compact' ? 16 : 0),
      10
     )
    ),
    m = y(() =>
     d.value
      ? parseInt(
         Number(e.extensionHeight) +
          (e.density === 'prominent' ? Number(e.extensionHeight) : 0) -
          (e.density === 'comfortable' ? 4 : 0) -
          (e.density === 'compact' ? 8 : 0),
         10
        )
      : 0
    );
   return (
    Be({ VBtn: { variant: 'text' } }),
    R(() => {
     var S;
     const b = !!(e.title || t.title),
      g = !!(t.image || e.image),
      h = (S = t.extension) == null ? void 0 : S.call(t);
     return (
      (d.value = !!(e.extended || h)),
      u(
       e.tag,
       {
        class: [
         'v-toolbar',
         {
          'v-toolbar--absolute': e.absolute,
          'v-toolbar--collapse': e.collapse,
          'v-toolbar--flat': e.flat,
          'v-toolbar--floating': e.floating,
          [`v-toolbar--density-${e.density}`]: !0,
         },
         a.value,
         i.value,
         o.value,
         r.value,
         s.value,
         c.value,
         e.class,
        ],
        style: [l.value, e.style],
       },
       {
        default: () => [
         g &&
          u('div', { key: 'image', class: 'v-toolbar__image' }, [
           t.image
            ? u(
               fe,
               {
                key: 'image-defaults',
                disabled: !e.image,
                defaults: { VImg: { cover: !0, src: e.image } },
               },
               t.image
              )
            : u(Tt, { key: 'image-img', cover: !0, src: e.image }, null),
          ]),
         u(
          fe,
          { defaults: { VTabs: { height: Z(f.value) } } },
          {
           default: () => {
            var k, I, B;
            return [
             u('div', { class: 'v-toolbar__content', style: { height: Z(f.value) } }, [
              t.prepend &&
               u('div', { class: 'v-toolbar__prepend' }, [(k = t.prepend) == null ? void 0 : k.call(t)]),
              b && u(fi, { key: 'title', text: e.title }, { text: t.title }),
              (I = t.default) == null ? void 0 : I.call(t),
              t.append &&
               u('div', { class: 'v-toolbar__append' }, [(B = t.append) == null ? void 0 : B.call(t)]),
             ]),
            ];
           },
          }
         ),
         u(
          fe,
          { defaults: { VTabs: { height: Z(m.value) } } },
          {
           default: () => [
            u(Fa, null, {
             default: () => [
              d.value && u('div', { class: 'v-toolbar__extension', style: { height: Z(m.value) } }, [h]),
             ],
            }),
           ],
          }
         ),
        ],
       }
      )
     );
    }),
    { contentHeight: f, extensionHeight: m }
   );
  },
 }),
 nv = D(
  { scrollTarget: { type: String }, scrollThreshold: { type: [String, Number], default: 300 } },
  'scroll'
 );
function av(e) {
 let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
 const { canScroll: t } = n;
 let a = 0,
  l = 0;
 const i = j(null),
  o = K(0),
  r = K(0),
  s = K(0),
  c = K(!1),
  d = K(!1),
  f = y(() => Number(e.scrollThreshold)),
  m = y(() => Fe((f.value - o.value) / f.value || 0)),
  v = () => {
   const b = i.value;
   if (!b || (t && !t.value)) return;
   (a = o.value), (o.value = 'window' in b ? b.pageYOffset : b.scrollTop);
   const g = b instanceof Window ? document.documentElement.scrollHeight : b.scrollHeight;
   if (l !== g) {
    l = g;
    return;
   }
   (d.value = o.value < a), (s.value = Math.abs(o.value - f.value));
  };
 return (
  X(d, () => {
   r.value = r.value || o.value;
  }),
  X(c, () => {
   r.value = 0;
  }),
  at(() => {
   X(
    () => e.scrollTarget,
    (b) => {
     var h;
     const g = b ? document.querySelector(b) : window;
     g &&
      g !== i.value &&
      ((h = i.value) == null || h.removeEventListener('scroll', v),
      (i.value = g),
      i.value.addEventListener('scroll', v, { passive: !0 }));
    },
    { immediate: !0 }
   );
  }),
  nt(() => {
   var b;
   (b = i.value) == null || b.removeEventListener('scroll', v);
  }),
  t && X(t, v, { immediate: !0 }),
  {
   scrollThreshold: f,
   currentScroll: o,
   currentThreshold: s,
   isScrollActive: c,
   scrollRatio: m,
   isScrollingUp: d,
   savedScroll: r,
  }
 );
}
function un() {
 const e = K(!1);
 return (
  at(() => {
   window.requestAnimationFrame(() => {
    e.value = !0;
   });
  }),
  { ssrBootStyles: y(() => (e.value ? void 0 : { transition: 'none !important' })), isBooted: Ba(e) }
 );
}
const lv = D(
  {
   scrollBehavior: String,
   modelValue: { type: Boolean, default: !0 },
   location: { type: String, default: 'top', validator: (e) => ['top', 'bottom'].includes(e) },
   ...Kr(),
   ...on(),
   ...nv(),
   height: { type: [Number, String], default: 64 },
  },
  'VAppBar'
 ),
 iv = $()({
  name: 'VAppBar',
  props: lv(),
  emits: { 'update:modelValue': (e) => !0 },
  setup(e, n) {
   let { slots: t } = n;
   const a = j(),
    l = le(e, 'modelValue'),
    i = y(() => {
     var B;
     const I = new Set(((B = e.scrollBehavior) == null ? void 0 : B.split(' ')) ?? []);
     return {
      hide: I.has('hide'),
      fullyHide: I.has('fully-hide'),
      inverted: I.has('inverted'),
      collapse: I.has('collapse'),
      elevate: I.has('elevate'),
      fadeImage: I.has('fade-image'),
     };
    }),
    o = y(() => {
     const I = i.value;
     return I.hide || I.fullyHide || I.inverted || I.collapse || I.elevate || I.fadeImage || !l.value;
    }),
    { currentScroll: r, scrollThreshold: s, isScrollingUp: c, scrollRatio: d } = av(e, { canScroll: o }),
    f = y(() => i.value.hide || i.value.fullyHide),
    m = y(() => e.collapse || (i.value.collapse && (i.value.inverted ? d.value > 0 : d.value === 0))),
    v = y(
     () =>
      e.flat ||
      (i.value.fullyHide && !l.value) ||
      (i.value.elevate && (i.value.inverted ? r.value > 0 : r.value === 0))
    ),
    b = y(() => (i.value.fadeImage ? (i.value.inverted ? 1 - d.value : d.value) : void 0)),
    g = y(() => {
     var w, V;
     const I = Number(((w = a.value) == null ? void 0 : w.contentHeight) ?? e.height),
      B = Number(((V = a.value) == null ? void 0 : V.extensionHeight) ?? 0);
     return f.value ? (r.value < s.value || i.value.fullyHide ? I + B : I) : I + B;
    });
   lt(
    y(() => !!e.scrollBehavior),
    () => {
     pe(() => {
      f.value
       ? i.value.inverted
         ? (l.value = r.value > s.value)
         : (l.value = c.value || r.value < s.value)
       : (l.value = !0);
     });
    }
   );
   const { ssrBootStyles: h } = un(),
    { layoutItemStyles: S, layoutIsReady: k } = rn({
     id: e.name,
     order: y(() => parseInt(e.order, 10)),
     position: M(e, 'location'),
     layoutSize: g,
     elementSize: K(void 0),
     active: l,
     absolute: M(e, 'absolute'),
    });
   return (
    R(() => {
     const I = Il.filterProps(e);
     return u(
      Il,
      z(
       {
        ref: a,
        class: ['v-app-bar', { 'v-app-bar--bottom': e.location === 'bottom' }, e.class],
        style: [
         { ...S.value, '--v-toolbar-image-opacity': b.value, height: void 0, ...h.value },
         e.style,
        ],
       },
       I,
       { collapse: m.value, flat: v.value }
      ),
      t
     );
    }),
    k
   );
  },
 }),
 ov = [null, 'default', 'comfortable', 'compact'],
 He = D({ density: { type: String, default: 'default', validator: (e) => ov.includes(e) } }, 'density');
function Je(e) {
 let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Vt();
 return { densityClasses: y(() => `${n}--density-${e.density}`) };
}
const rv = ['elevated', 'flat', 'tonal', 'outlined', 'text', 'plain'];
function zt(e, n) {
 return u(ie, null, [
  e && u('span', { key: 'overlay', class: `${n}__overlay` }, null),
  u('span', { key: 'underlay', class: `${n}__underlay` }, null),
 ]);
}
const mt = D(
 { color: String, variant: { type: String, default: 'elevated', validator: (e) => rv.includes(e) } },
 'variant'
);
function sn(e) {
 let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Vt();
 const t = y(() => {
   const { variant: i } = et(e);
   return `${n}--variant-${i}`;
  }),
  { colorClasses: a, colorStyles: l } = yi(
   y(() => {
    const { variant: i, color: o } = et(e);
    return { [['elevated', 'flat'].includes(i) ? 'background' : 'text']: o };
   })
  );
 return { colorClasses: a, colorStyles: l, variantClasses: t };
}
const qr = D(
  {
   baseColor: String,
   divided: Boolean,
   ...st(),
   ...J(),
   ...He(),
   ...Oe(),
   ..._e(),
   ...de(),
   ...me(),
   ...mt(),
  },
  'VBtnGroup'
 ),
 _l = $()({
  name: 'VBtnGroup',
  props: qr(),
  setup(e, n) {
   let { slots: t } = n;
   const { themeClasses: a } = Se(e),
    { densityClasses: l } = Je(e),
    { borderClasses: i } = ft(e),
    { elevationClasses: o } = Ye(e),
    { roundedClasses: r } = De(e);
   Be({
    VBtn: {
     height: 'auto',
     baseColor: M(e, 'baseColor'),
     color: M(e, 'color'),
     density: M(e, 'density'),
     flat: !0,
     variant: M(e, 'variant'),
    },
   }),
    R(() =>
     u(
      e.tag,
      {
       class: [
        'v-btn-group',
        { 'v-btn-group--divided': e.divided },
        a.value,
        i.value,
        l.value,
        o.value,
        r.value,
        e.class,
       ],
       style: e.style,
      },
      t
     )
    );
  },
 }),
 cn = D(
  {
   modelValue: { type: null, default: void 0 },
   multiple: Boolean,
   mandatory: [Boolean, String],
   max: Number,
   selectedClass: String,
   disabled: Boolean,
  },
  'group'
 ),
 dn = D({ value: null, disabled: Boolean, selectedClass: String }, 'group-item');
function vn(e, n) {
 let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
 const a = Me('useGroupItem');
 if (!a)
  throw new Error('[Vuetify] useGroupItem composable must be used inside a component setup function');
 const l = je();
 Ie(Symbol.for(`${n.description}:id`), l);
 const i = ge(n, null);
 if (!i) {
  if (!t) return i;
  throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`);
 }
 const o = M(e, 'value'),
  r = y(() => !!(i.disabled.value || e.disabled));
 i.register({ id: l, value: o, disabled: r }, a),
  nt(() => {
   i.unregister(l);
  });
 const s = y(() => i.isSelected(l)),
  c = y(() => i.items.value[0].id === l),
  d = y(() => i.items.value[i.items.value.length - 1].id === l),
  f = y(() => s.value && [i.selectedClass.value, e.selectedClass]);
 return (
  X(
   s,
   (m) => {
    a.emit('group:selected', { value: m });
   },
   { flush: 'sync' }
  ),
  {
   id: l,
   isSelected: s,
   isFirst: c,
   isLast: d,
   toggle: () => i.select(l, !s.value),
   select: (m) => i.select(l, m),
   selectedClass: f,
   value: o,
   disabled: r,
   group: i,
  }
 );
}
function Ht(e, n) {
 let t = !1;
 const a = ct([]),
  l = le(
   e,
   'modelValue',
   [],
   (m) => (m == null ? [] : Xr(a, Te(m))),
   (m) => {
    const v = sv(a, m);
    return e.multiple ? v : v[0];
   }
  ),
  i = Me('useGroup');
 function o(m, v) {
  const b = m,
   g = Symbol.for(`${n.description}:id`),
   S = kn(g, i == null ? void 0 : i.vnode).indexOf(v);
  et(b.value) == null && ((b.value = S), (b.useIndexAsValue = !0)),
   S > -1 ? a.splice(S, 0, b) : a.push(b);
 }
 function r(m) {
  if (t) return;
  s();
  const v = a.findIndex((b) => b.id === m);
  a.splice(v, 1);
 }
 function s() {
  const m = a.find((v) => !v.disabled);
  m && e.mandatory === 'force' && !l.value.length && (l.value = [m.id]);
 }
 at(() => {
  s();
 }),
  nt(() => {
   t = !0;
  }),
  Ic(() => {
   for (let m = 0; m < a.length; m++) a[m].useIndexAsValue && (a[m].value = m);
  });
 function c(m, v) {
  const b = a.find((g) => g.id === m);
  if (!(v && b != null && b.disabled))
   if (e.multiple) {
    const g = l.value.slice(),
     h = g.findIndex((k) => k === m),
     S = ~h;
    if (
     ((v = v ?? !S),
     (S && e.mandatory && g.length <= 1) || (!S && e.max != null && g.length + 1 > e.max))
    )
     return;
    h < 0 && v ? g.push(m) : h >= 0 && !v && g.splice(h, 1), (l.value = g);
   } else {
    const g = l.value.includes(m);
    if (e.mandatory && g) return;
    l.value = v ?? !g ? [m] : [];
   }
 }
 function d(m) {
  if ((e.multiple, l.value.length)) {
   const v = l.value[0],
    b = a.findIndex((S) => S.id === v);
   let g = (b + m) % a.length,
    h = a[g];
   for (; h.disabled && g !== b; ) (g = (g + m) % a.length), (h = a[g]);
   if (h.disabled) return;
   l.value = [a[g].id];
  } else {
   const v = a.find((b) => !b.disabled);
   v && (l.value = [v.id]);
  }
 }
 const f = {
  register: o,
  unregister: r,
  selected: l,
  select: c,
  disabled: M(e, 'disabled'),
  prev: () => d(a.length - 1),
  next: () => d(1),
  isSelected: (m) => l.value.includes(m),
  selectedClass: y(() => e.selectedClass),
  items: y(() => a),
  getItemIndex: (m) => uv(a, m),
 };
 return Ie(n, f), f;
}
function uv(e, n) {
 const t = Xr(e, [n]);
 return t.length ? e.findIndex((a) => a.id === t[0]) : -1;
}
function Xr(e, n) {
 const t = [];
 return (
  n.forEach((a) => {
   const l = e.find((o) => Ct(a, o.value)),
    i = e[a];
   (l == null ? void 0 : l.value) != null ? t.push(l.id) : i != null && t.push(i.id);
  }),
  t
 );
}
function sv(e, n) {
 const t = [];
 return (
  n.forEach((a) => {
   const l = e.findIndex((i) => i.id === a);
   if (~l) {
    const i = e[l];
    t.push(i.value != null ? i.value : l);
   }
  }),
  t
 );
}
const bi = Symbol.for('vuetify:v-btn-toggle'),
 cv = D({ ...qr(), ...cn() }, 'VBtnToggle'),
 dv = $()({
  name: 'VBtnToggle',
  props: cv(),
  emits: { 'update:modelValue': (e) => !0 },
  setup(e, n) {
   let { slots: t } = n;
   const { isSelected: a, next: l, prev: i, select: o, selected: r } = Ht(e, bi);
   return (
    R(() => {
     const s = _l.filterProps(e);
     return u(_l, z({ class: ['v-btn-toggle', e.class] }, s, { style: e.style }), {
      default: () => {
       var c;
       return [
        (c = t.default) == null
         ? void 0
         : c.call(t, { isSelected: a, next: l, prev: i, select: o, selected: r }),
       ];
      },
     });
    }),
    { next: l, prev: i, select: o }
   );
  },
 }),
 vv = {
  collapse: 'mdi-chevron-up',
  complete: 'mdi-check',
  cancel: 'mdi-close-circle',
  close: 'mdi-close',
  delete: 'mdi-close-circle',
  clear: 'mdi-close-circle',
  success: 'mdi-check-circle',
  info: 'mdi-information',
  warning: 'mdi-alert-circle',
  error: 'mdi-close-circle',
  prev: 'mdi-chevron-left',
  next: 'mdi-chevron-right',
  checkboxOn: 'mdi-checkbox-marked',
  checkboxOff: 'mdi-checkbox-blank-outline',
  checkboxIndeterminate: 'mdi-minus-box',
  delimiter: 'mdi-circle',
  sortAsc: 'mdi-arrow-up',
  sortDesc: 'mdi-arrow-down',
  expand: 'mdi-chevron-down',
  menu: 'mdi-menu',
  subgroup: 'mdi-menu-down',
  dropdown: 'mdi-menu-down',
  radioOn: 'mdi-radiobox-marked',
  radioOff: 'mdi-radiobox-blank',
  edit: 'mdi-pencil',
  ratingEmpty: 'mdi-star-outline',
  ratingFull: 'mdi-star',
  ratingHalf: 'mdi-star-half-full',
  loading: 'mdi-cached',
  first: 'mdi-page-first',
  last: 'mdi-page-last',
  unfold: 'mdi-unfold-more-horizontal',
  file: 'mdi-paperclip',
  plus: 'mdi-plus',
  minus: 'mdi-minus',
  calendar: 'mdi-calendar',
  treeviewCollapse: 'mdi-menu-down',
  treeviewExpand: 'mdi-menu-right',
  eyeDropper: 'mdi-eyedropper',
 },
 fv = { component: (e) => Rt(ki, { ...e, class: 'mdi' }) },
 ue = [String, Function, Object, Array],
 Tl = Symbol.for('vuetify:icons'),
 La = D({ icon: { type: ue }, tag: { type: String, required: !0 } }, 'icon'),
 Al = $()({
  name: 'VComponentIcon',
  props: La(),
  setup(e, n) {
   let { slots: t } = n;
   return () => {
    const a = e.icon;
    return u(e.tag, null, {
     default: () => {
      var l;
      return [e.icon ? u(a, null, null) : (l = t.default) == null ? void 0 : l.call(t)];
     },
    });
   };
  },
 }),
 Si = rt({
  name: 'VSvgIcon',
  inheritAttrs: !1,
  props: La(),
  setup(e, n) {
   let { attrs: t } = n;
   return () =>
    u(e.tag, z(t, { style: null }), {
     default: () => [
      u(
       'svg',
       {
        class: 'v-icon__svg',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 24 24',
        role: 'img',
        'aria-hidden': 'true',
       },
       [
        Array.isArray(e.icon)
         ? e.icon.map((a) =>
            Array.isArray(a)
             ? u('path', { d: a[0], 'fill-opacity': a[1] }, null)
             : u('path', { d: a }, null)
           )
         : u('path', { d: e.icon }, null),
       ]
      ),
     ],
    });
  },
 }),
 mv = rt({
  name: 'VLigatureIcon',
  props: La(),
  setup(e) {
   return () => u(e.tag, null, { default: () => [e.icon] });
  },
 }),
 ki = rt({
  name: 'VClassIcon',
  props: La(),
  setup(e) {
   return () => u(e.tag, { class: e.icon }, null);
  },
 });
function gv() {
 return { svg: { component: Si }, class: { component: ki } };
}
function hv(e) {
 const n = gv(),
  t = (e == null ? void 0 : e.defaultSet) ?? 'mdi';
 return (
  t === 'mdi' && !n.mdi && (n.mdi = fv),
  qe(
   {
    defaultSet: t,
    sets: n,
    aliases: {
     ...vv,
     vuetify: [
      'M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z',
      ['M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z', 0.6],
     ],
     'vuetify-outline':
      'svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z',
     'vuetify-play': [
      'm6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z',
      [
       'M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z',
       0.6,
      ],
     ],
    },
   },
   e
  )
 );
}
const yv = (e) => {
  const n = ge(Tl);
  if (!n) throw new Error('Missing Vuetify Icons provide!');
  return {
   iconData: y(() => {
    var s;
    const a = et(e);
    if (!a) return { component: Al };
    let l = a;
    if (
     (typeof l == 'string' &&
      ((l = l.trim()), l.startsWith('$') && (l = (s = n.aliases) == null ? void 0 : s[l.slice(1)])),
     Array.isArray(l))
    )
     return { component: Si, icon: l };
    if (typeof l != 'string') return { component: Al, icon: l };
    const i = Object.keys(n.sets).find((c) => typeof l == 'string' && l.startsWith(`${c}:`)),
     o = i ? l.slice(i.length + 1) : l;
    return { component: n.sets[i ?? n.defaultSet].component, icon: o };
   }),
  };
 },
 bv = ['x-small', 'small', 'default', 'large', 'x-large'],
 It = D({ size: { type: [String, Number], default: 'default' } }, 'size');
function Bn(e) {
 let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Vt();
 return ii(() => {
  let t, a;
  return (
   xa(bv, e.size)
    ? (t = `${n}--size-${e.size}`)
    : e.size && (a = { width: Z(e.size), height: Z(e.size) }),
   { sizeClasses: t, sizeStyles: a }
  );
 });
}
const Sv = D(
  {
   color: String,
   disabled: Boolean,
   start: Boolean,
   end: Boolean,
   icon: ue,
   ...J(),
   ...It(),
   ...de({ tag: 'i' }),
   ...me(),
  },
  'VIcon'
 ),
 be = $()({
  name: 'VIcon',
  props: Sv(),
  setup(e, n) {
   let { attrs: t, slots: a } = n;
   const l = j(),
    { themeClasses: i } = Se(e),
    { iconData: o } = yv(y(() => l.value || e.icon)),
    { sizeClasses: r } = Bn(e),
    { textColorClasses: s, textColorStyles: c } = Ge(M(e, 'color'));
   return (
    R(() => {
     var m, v;
     const d = (m = a.default) == null ? void 0 : m.call(a);
     d &&
      (l.value =
       (v = gr(d).filter((b) => b.type === _c && b.children && typeof b.children == 'string')[0]) == null
        ? void 0
        : v.children);
     const f = !!(t.onClick || t.onClickOnce);
     return u(
      o.value.component,
      {
       tag: e.tag,
       icon: o.value.icon,
       class: [
        'v-icon',
        'notranslate',
        i.value,
        r.value,
        s.value,
        {
         'v-icon--clickable': f,
         'v-icon--disabled': e.disabled,
         'v-icon--start': e.start,
         'v-icon--end': e.end,
        },
        e.class,
       ],
       style: [
        r.value ? void 0 : { fontSize: Z(e.size), height: Z(e.size), width: Z(e.size) },
        c.value,
        e.style,
       ],
       role: f ? 'button' : void 0,
       'aria-hidden': !f,
       tabindex: f ? (e.disabled ? -1 : 0) : void 0,
      },
      { default: () => [d] }
     );
    }),
    {}
   );
  },
 });
function Oa(e, n) {
 const t = j(),
  a = K(!1);
 if (ni) {
  const l = new IntersectionObserver((i) => {
   e == null || e(i, l), (a.value = !!i.find((o) => o.isIntersecting));
  }, n);
  nt(() => {
   l.disconnect();
  }),
   X(
    t,
    (i, o) => {
     o && (l.unobserve(o), (a.value = !1)), i && l.observe(i);
    },
    { flush: 'post' }
   );
 }
 return { intersectionRef: t, isIntersecting: a };
}
const kv = D(
  {
   bgColor: String,
   color: String,
   indeterminate: [Boolean, String],
   modelValue: { type: [Number, String], default: 0 },
   rotate: { type: [Number, String], default: 0 },
   width: { type: [Number, String], default: 4 },
   ...J(),
   ...It(),
   ...de({ tag: 'div' }),
   ...me(),
  },
  'VProgressCircular'
 ),
 _n = $()({
  name: 'VProgressCircular',
  props: kv(),
  setup(e, n) {
   let { slots: t } = n;
   const a = 20,
    l = 2 * Math.PI * a,
    i = j(),
    { themeClasses: o } = Se(e),
    { sizeClasses: r, sizeStyles: s } = Bn(e),
    { textColorClasses: c, textColorStyles: d } = Ge(M(e, 'color')),
    { textColorClasses: f, textColorStyles: m } = Ge(M(e, 'bgColor')),
    { intersectionRef: v, isIntersecting: b } = Oa(),
    { resizeRef: g, contentRect: h } = yt(),
    S = y(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))),
    k = y(() => Number(e.width)),
    I = y(() => (s.value ? Number(e.size) : h.value ? h.value.width : Math.max(k.value, 32))),
    B = y(() => (a / (1 - k.value / I.value)) * 2),
    w = y(() => (k.value / I.value) * B.value),
    V = y(() => Z(((100 - S.value) / 100) * l));
   return (
    pe(() => {
     (v.value = i.value), (g.value = i.value);
    }),
    R(() =>
     u(
      e.tag,
      {
       ref: i,
       class: [
        'v-progress-circular',
        {
         'v-progress-circular--indeterminate': !!e.indeterminate,
         'v-progress-circular--visible': b.value,
         'v-progress-circular--disable-shrink': e.indeterminate === 'disable-shrink',
        },
        o.value,
        r.value,
        c.value,
        e.class,
       ],
       style: [s.value, d.value, e.style],
       role: 'progressbar',
       'aria-valuemin': '0',
       'aria-valuemax': '100',
       'aria-valuenow': e.indeterminate ? void 0 : S.value,
      },
      {
       default: () => [
        u(
         'svg',
         {
          style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` },
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: `0 0 ${B.value} ${B.value}`,
         },
         [
          u(
           'circle',
           {
            class: ['v-progress-circular__underlay', f.value],
            style: m.value,
            fill: 'transparent',
            cx: '50%',
            cy: '50%',
            r: a,
            'stroke-width': w.value,
            'stroke-dasharray': l,
            'stroke-dashoffset': 0,
           },
           null
          ),
          u(
           'circle',
           {
            class: 'v-progress-circular__overlay',
            fill: 'transparent',
            cx: '50%',
            cy: '50%',
            r: a,
            'stroke-width': w.value,
            'stroke-dasharray': l,
            'stroke-dashoffset': V.value,
           },
           null
          ),
         ]
        ),
        t.default &&
         u('div', { class: 'v-progress-circular__content' }, [t.default({ value: S.value })]),
       ],
      }
     )
    ),
    {}
   );
  },
 }),
 Do = { center: 'center', top: 'bottom', bottom: 'top', left: 'right', right: 'left' },
 Dt = D({ location: String }, 'location');
function fn(e) {
 let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
  t = arguments.length > 2 ? arguments[2] : void 0;
 const { isRtl: a } = Re();
 return {
  locationStyles: y(() => {
   if (!e.location) return {};
   const { side: i, align: o } = xl(
    e.location.split(' ').length > 1 ? e.location : `${e.location} center`,
    a.value
   );
   function r(c) {
    return t ? t(c) : 0;
   }
   const s = {};
   return (
    i !== 'center' && (n ? (s[Do[i]] = `calc(100% - ${r(i)}px)`) : (s[i] = 0)),
    o !== 'center'
     ? n
       ? (s[Do[o]] = `calc(100% - ${r(o)}px)`)
       : (s[o] = 0)
     : (i === 'center'
        ? (s.top = s.left = '50%')
        : (s[{ top: 'left', bottom: 'left', left: 'top', right: 'top' }[i]] = '50%'),
       (s.transform = {
        top: 'translateX(-50%)',
        bottom: 'translateX(-50%)',
        left: 'translateY(-50%)',
        right: 'translateY(-50%)',
        center: 'translate(-50%, -50%)',
       }[i])),
    s
   );
  }),
 };
}
const xv = D(
  {
   absolute: Boolean,
   active: { type: Boolean, default: !0 },
   bgColor: String,
   bgOpacity: [Number, String],
   bufferValue: { type: [Number, String], default: 0 },
   bufferColor: String,
   bufferOpacity: [Number, String],
   clickable: Boolean,
   color: String,
   height: { type: [Number, String], default: 4 },
   indeterminate: Boolean,
   max: { type: [Number, String], default: 100 },
   modelValue: { type: [Number, String], default: 0 },
   opacity: [Number, String],
   reverse: Boolean,
   stream: Boolean,
   striped: Boolean,
   roundedBar: Boolean,
   ...J(),
   ...Dt({ location: 'top' }),
   ..._e(),
   ...de(),
   ...me(),
  },
  'VProgressLinear'
 ),
 Ra = $()({
  name: 'VProgressLinear',
  props: xv(),
  emits: { 'update:modelValue': (e) => !0 },
  setup(e, n) {
   var T;
   let { slots: t } = n;
   const a = le(e, 'modelValue'),
    { isRtl: l, rtlClasses: i } = Re(),
    { themeClasses: o } = Se(e),
    { locationStyles: r } = fn(e),
    { textColorClasses: s, textColorStyles: c } = Ge(e, 'color'),
    { backgroundColorClasses: d, backgroundColorStyles: f } = we(y(() => e.bgColor || e.color)),
    { backgroundColorClasses: m, backgroundColorStyles: v } = we(
     y(() => e.bufferColor || e.bgColor || e.color)
    ),
    { backgroundColorClasses: b, backgroundColorStyles: g } = we(e, 'color'),
    { roundedClasses: h } = De(e),
    { intersectionRef: S, isIntersecting: k } = Oa(),
    I = y(() => parseFloat(e.max)),
    B = y(() => parseFloat(e.height)),
    w = y(() => Fe((parseFloat(e.bufferValue) / I.value) * 100, 0, 100)),
    V = y(() => Fe((parseFloat(a.value) / I.value) * 100, 0, 100)),
    C = y(() => l.value !== e.reverse),
    P = y(() => (e.indeterminate ? 'fade-transition' : 'slide-x-transition')),
    x =
     ke &&
     ((T = window.matchMedia) == null ? void 0 : T.call(window, '(forced-colors: active)').matches);
   function _(A) {
    if (!S.value) return;
    const { left: p, right: F, width: O } = S.value.getBoundingClientRect(),
     W = C.value ? O - A.clientX + (F - O) : A.clientX - p;
    a.value = Math.round((W / O) * I.value);
   }
   return (
    R(() =>
     u(
      e.tag,
      {
       ref: S,
       class: [
        'v-progress-linear',
        {
         'v-progress-linear--absolute': e.absolute,
         'v-progress-linear--active': e.active && k.value,
         'v-progress-linear--reverse': C.value,
         'v-progress-linear--rounded': e.rounded,
         'v-progress-linear--rounded-bar': e.roundedBar,
         'v-progress-linear--striped': e.striped,
        },
        h.value,
        o.value,
        i.value,
        e.class,
       ],
       style: [
        {
         bottom: e.location === 'bottom' ? 0 : void 0,
         top: e.location === 'top' ? 0 : void 0,
         height: e.active ? Z(B.value) : 0,
         '--v-progress-linear-height': Z(B.value),
         ...(e.absolute ? r.value : {}),
        },
        e.style,
       ],
       role: 'progressbar',
       'aria-hidden': e.active ? 'false' : 'true',
       'aria-valuemin': '0',
       'aria-valuemax': e.max,
       'aria-valuenow': e.indeterminate ? void 0 : V.value,
       onClick: e.clickable && _,
      },
      {
       default: () => [
        e.stream &&
         u(
          'div',
          {
           key: 'stream',
           class: ['v-progress-linear__stream', s.value],
           style: {
            ...c.value,
            [C.value ? 'left' : 'right']: Z(-B.value),
            borderTop: `${Z(B.value / 2)} dotted`,
            opacity: parseFloat(e.bufferOpacity),
            top: `calc(50% - ${Z(B.value / 4)})`,
            width: Z(100 - w.value, '%'),
            '--v-progress-linear-stream-to': Z(B.value * (C.value ? 1 : -1)),
           },
          },
          null
         ),
        u(
         'div',
         {
          class: ['v-progress-linear__background', x ? void 0 : d.value],
          style: [f.value, { opacity: parseFloat(e.bgOpacity), width: e.stream ? 0 : void 0 }],
         },
         null
        ),
        u(
         'div',
         {
          class: ['v-progress-linear__buffer', x ? void 0 : m.value],
          style: [v.value, { opacity: parseFloat(e.bufferOpacity), width: Z(w.value, '%') }],
         },
         null
        ),
        u(
         Ft,
         { name: P.value },
         {
          default: () => [
           e.indeterminate
            ? u('div', { class: 'v-progress-linear__indeterminate' }, [
               ['long', 'short'].map((A) =>
                u(
                 'div',
                 {
                  key: A,
                  class: ['v-progress-linear__indeterminate', A, x ? void 0 : b.value],
                  style: g.value,
                 },
                 null
                )
               ),
              ])
            : u(
               'div',
               {
                class: ['v-progress-linear__determinate', x ? void 0 : b.value],
                style: [g.value, { width: Z(V.value, '%') }],
               },
               null
              ),
          ],
         }
        ),
        t.default &&
         u('div', { class: 'v-progress-linear__content' }, [
          t.default({ value: V.value, buffer: w.value }),
         ]),
       ],
      }
     )
    ),
    {}
   );
  },
 }),
 Na = D({ loading: [Boolean, String] }, 'loader');
function Qn(e) {
 let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Vt();
 return { loaderClasses: y(() => ({ [`${n}--loading`]: e.loading })) };
}
function ea(e, n) {
 var a;
 let { slots: t } = n;
 return u('div', { class: `${e.name}__loader` }, [
  ((a = t.default) == null ? void 0 : a.call(t, { color: e.color, isActive: e.active })) ||
   u(
    Ra,
    { absolute: e.absolute, active: e.active, color: e.color, height: '2', indeterminate: !0 },
    null
   ),
 ]);
}
const wv = ['static', 'relative', 'fixed', 'absolute', 'sticky'],
 Dn = D({ position: { type: String, validator: (e) => wv.includes(e) } }, 'position');
function pn(e) {
 let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Vt();
 return { positionClasses: y(() => (e.position ? `${n}--${e.position}` : void 0)) };
}
function Cv() {
 const e = Me('useRoute');
 return y(() => {
  var n;
  return (n = e == null ? void 0 : e.proxy) == null ? void 0 : n.$route;
 });
}
function Zr() {
 var e, n;
 return (n = (e = Me('useRouter')) == null ? void 0 : e.proxy) == null ? void 0 : n.$router;
}
function ta(e, n) {
 var c, d;
 const t = Tc('RouterLink'),
  a = y(() => !!(e.href || e.to)),
  l = y(() => (a == null ? void 0 : a.value) || ro(n, 'click') || ro(e, 'click'));
 if (typeof t == 'string' || !('useLink' in t)) return { isLink: a, isClickable: l, href: M(e, 'href') };
 const i = y(() => ({ ...e, to: M(() => e.to || '') })),
  o = t.useLink(i.value),
  r = y(() => (e.to ? o : void 0)),
  s = Cv();
 return {
  isLink: a,
  isClickable: l,
  route: (c = r.value) == null ? void 0 : c.route,
  navigate: (d = r.value) == null ? void 0 : d.navigate,
  isActive: y(() => {
   var f, m, v;
   return r.value
    ? e.exact
      ? s.value
        ? ((v = r.value.isExactActive) == null ? void 0 : v.value) &&
          Ct(r.value.route.value.query, s.value.query)
        : ((m = r.value.isExactActive) == null ? void 0 : m.value) ?? !1
      : ((f = r.value.isActive) == null ? void 0 : f.value) ?? !1
    : !1;
  }),
  href: y(() => {
   var f;
   return e.to ? ((f = r.value) == null ? void 0 : f.route.value.href) : e.href;
  }),
 };
}
const na = D({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, 'router');
let vl = !1;
function Vv(e, n) {
 let t = !1,
  a,
  l;
 ke &&
  (he(() => {
   window.addEventListener('popstate', i),
    (a =
     e == null
      ? void 0
      : e.beforeEach((o, r, s) => {
         vl ? (t ? n(s) : s()) : setTimeout(() => (t ? n(s) : s())), (vl = !0);
        })),
    (l =
     e == null
      ? void 0
      : e.afterEach(() => {
         vl = !1;
        }));
  }),
  Ze(() => {
   window.removeEventListener('popstate', i), a == null || a(), l == null || l();
  }));
 function i(o) {
  var r;
  ((r = o.state) != null && r.replaced) || ((t = !0), setTimeout(() => (t = !1)));
 }
}
function Pv(e, n) {
 X(
  () => {
   var t;
   return (t = e.isActive) == null ? void 0 : t.value;
  },
  (t) => {
   e.isLink.value &&
    t &&
    n &&
    he(() => {
     n(!0);
    });
  },
  { immediate: !0 }
 );
}
const Bl = Symbol('rippleStop'),
 Iv = 80;
function po(e, n) {
 (e.style.transform = n), (e.style.webkitTransform = n);
}
function Dl(e) {
 return e.constructor.name === 'TouchEvent';
}
function Jr(e) {
 return e.constructor.name === 'KeyboardEvent';
}
const _v = function (e, n) {
  var f;
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
   a = 0,
   l = 0;
  if (!Jr(e)) {
   const m = n.getBoundingClientRect(),
    v = Dl(e) ? e.touches[e.touches.length - 1] : e;
   (a = v.clientX - m.left), (l = v.clientY - m.top);
  }
  let i = 0,
   o = 0.3;
  (f = n._ripple) != null && f.circle
   ? ((o = 0.15),
     (i = n.clientWidth / 2),
     (i = t.center ? i : i + Math.sqrt((a - i) ** 2 + (l - i) ** 2) / 4))
   : (i = Math.sqrt(n.clientWidth ** 2 + n.clientHeight ** 2) / 2);
  const r = `${(n.clientWidth - i * 2) / 2}px`,
   s = `${(n.clientHeight - i * 2) / 2}px`,
   c = t.center ? r : `${a - i}px`,
   d = t.center ? s : `${l - i}px`;
  return { radius: i, scale: o, x: c, y: d, centerX: r, centerY: s };
 },
 Pa = {
  show(e, n) {
   var v;
   let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
   if (!((v = n == null ? void 0 : n._ripple) != null && v.enabled)) return;
   const a = document.createElement('span'),
    l = document.createElement('span');
   a.appendChild(l), (a.className = 'v-ripple__container'), t.class && (a.className += ` ${t.class}`);
   const { radius: i, scale: o, x: r, y: s, centerX: c, centerY: d } = _v(e, n, t),
    f = `${i * 2}px`;
   (l.className = 'v-ripple__animation'), (l.style.width = f), (l.style.height = f), n.appendChild(a);
   const m = window.getComputedStyle(n);
   m &&
    m.position === 'static' &&
    ((n.style.position = 'relative'), (n.dataset.previousPosition = 'static')),
    l.classList.add('v-ripple__animation--enter'),
    l.classList.add('v-ripple__animation--visible'),
    po(l, `translate(${r}, ${s}) scale3d(${o},${o},${o})`),
    (l.dataset.activated = String(performance.now())),
    setTimeout(() => {
     l.classList.remove('v-ripple__animation--enter'),
      l.classList.add('v-ripple__animation--in'),
      po(l, `translate(${c}, ${d}) scale3d(1,1,1)`);
    }, 0);
  },
  hide(e) {
   var i;
   if (!((i = e == null ? void 0 : e._ripple) != null && i.enabled)) return;
   const n = e.getElementsByClassName('v-ripple__animation');
   if (n.length === 0) return;
   const t = n[n.length - 1];
   if (t.dataset.isHiding) return;
   t.dataset.isHiding = 'true';
   const a = performance.now() - Number(t.dataset.activated),
    l = Math.max(250 - a, 0);
   setTimeout(() => {
    t.classList.remove('v-ripple__animation--in'),
     t.classList.add('v-ripple__animation--out'),
     setTimeout(() => {
      var r;
      e.getElementsByClassName('v-ripple__animation').length === 1 &&
       e.dataset.previousPosition &&
       ((e.style.position = e.dataset.previousPosition), delete e.dataset.previousPosition),
       ((r = t.parentNode) == null ? void 0 : r.parentNode) === e && e.removeChild(t.parentNode);
     }, 300);
   }, l);
  },
 };
function Qr(e) {
 return typeof e > 'u' || !!e;
}
function Yn(e) {
 const n = {},
  t = e.currentTarget;
 if (!(!(t != null && t._ripple) || t._ripple.touched || e[Bl])) {
  if (((e[Bl] = !0), Dl(e))) (t._ripple.touched = !0), (t._ripple.isTouch = !0);
  else if (t._ripple.isTouch) return;
  if (
   ((n.center = t._ripple.centered || Jr(e)), t._ripple.class && (n.class = t._ripple.class), Dl(e))
  ) {
   if (t._ripple.showTimerCommit) return;
   (t._ripple.showTimerCommit = () => {
    Pa.show(e, t, n);
   }),
    (t._ripple.showTimer = window.setTimeout(() => {
     var a;
     (a = t == null ? void 0 : t._ripple) != null &&
      a.showTimerCommit &&
      (t._ripple.showTimerCommit(), (t._ripple.showTimerCommit = null));
    }, Iv));
  } else Pa.show(e, t, n);
 }
}
function Eo(e) {
 e[Bl] = !0;
}
function it(e) {
 const n = e.currentTarget;
 if (n != null && n._ripple) {
  if ((window.clearTimeout(n._ripple.showTimer), e.type === 'touchend' && n._ripple.showTimerCommit)) {
   n._ripple.showTimerCommit(),
    (n._ripple.showTimerCommit = null),
    (n._ripple.showTimer = window.setTimeout(() => {
     it(e);
    }));
   return;
  }
  window.setTimeout(() => {
   n._ripple && (n._ripple.touched = !1);
  }),
   Pa.hide(n);
 }
}
function eu(e) {
 const n = e.currentTarget;
 n != null &&
  n._ripple &&
  (n._ripple.showTimerCommit && (n._ripple.showTimerCommit = null),
  window.clearTimeout(n._ripple.showTimer));
}
let Gn = !1;
function tu(e) {
 !Gn && (e.keyCode === no.enter || e.keyCode === no.space) && ((Gn = !0), Yn(e));
}
function nu(e) {
 (Gn = !1), it(e);
}
function au(e) {
 Gn && ((Gn = !1), it(e));
}
function lu(e, n, t) {
 const { value: a, modifiers: l } = n,
  i = Qr(a);
 if (
  (i || Pa.hide(e),
  (e._ripple = e._ripple ?? {}),
  (e._ripple.enabled = i),
  (e._ripple.centered = l.center),
  (e._ripple.circle = l.circle),
  Rn(a) && a.class && (e._ripple.class = a.class),
  i && !t)
 ) {
  if (l.stop) {
   e.addEventListener('touchstart', Eo, { passive: !0 }), e.addEventListener('mousedown', Eo);
   return;
  }
  e.addEventListener('touchstart', Yn, { passive: !0 }),
   e.addEventListener('touchend', it, { passive: !0 }),
   e.addEventListener('touchmove', eu, { passive: !0 }),
   e.addEventListener('touchcancel', it),
   e.addEventListener('mousedown', Yn),
   e.addEventListener('mouseup', it),
   e.addEventListener('mouseleave', it),
   e.addEventListener('keydown', tu),
   e.addEventListener('keyup', nu),
   e.addEventListener('blur', au),
   e.addEventListener('dragstart', it, { passive: !0 });
 } else !i && t && iu(e);
}
function iu(e) {
 e.removeEventListener('mousedown', Yn),
  e.removeEventListener('touchstart', Yn),
  e.removeEventListener('touchend', it),
  e.removeEventListener('touchmove', eu),
  e.removeEventListener('touchcancel', it),
  e.removeEventListener('mouseup', it),
  e.removeEventListener('mouseleave', it),
  e.removeEventListener('keydown', tu),
  e.removeEventListener('keyup', nu),
  e.removeEventListener('dragstart', it),
  e.removeEventListener('blur', au);
}
function Tv(e, n) {
 lu(e, n, !1);
}
function Av(e) {
 delete e._ripple, iu(e);
}
function Bv(e, n) {
 if (n.value === n.oldValue) return;
 const t = Qr(n.oldValue);
 lu(e, n, t);
}
const pt = { mounted: Tv, unmounted: Av, updated: Bv },
 za = D(
  {
   active: { type: Boolean, default: void 0 },
   baseColor: String,
   symbol: { type: null, default: bi },
   flat: Boolean,
   icon: [Boolean, String, Function, Object],
   prependIcon: ue,
   appendIcon: ue,
   block: Boolean,
   readonly: Boolean,
   slim: Boolean,
   stacked: Boolean,
   ripple: { type: [Boolean, Object], default: !0 },
   text: String,
   ...st(),
   ...J(),
   ...He(),
   ...Ne(),
   ...Oe(),
   ...dn(),
   ...Na(),
   ...Dt(),
   ...Dn(),
   ..._e(),
   ...na(),
   ...It(),
   ...de({ tag: 'button' }),
   ...me(),
   ...mt({ variant: 'elevated' }),
  },
  'VBtn'
 ),
 ye = $()({
  name: 'VBtn',
  props: za(),
  emits: { 'group:selected': (e) => !0 },
  setup(e, n) {
   let { attrs: t, slots: a } = n;
   const { themeClasses: l } = Se(e),
    { borderClasses: i } = ft(e),
    { densityClasses: o } = Je(e),
    { dimensionStyles: r } = ze(e),
    { elevationClasses: s } = Ye(e),
    { loaderClasses: c } = Qn(e),
    { locationStyles: d } = fn(e),
    { positionClasses: f } = pn(e),
    { roundedClasses: m } = De(e),
    { sizeClasses: v, sizeStyles: b } = Bn(e),
    g = vn(e, e.symbol, !1),
    h = ta(e, t),
    S = y(() => {
     var _;
     return e.active !== void 0
      ? e.active
      : h.isLink.value
        ? (_ = h.isActive) == null
          ? void 0
          : _.value
        : g == null
          ? void 0
          : g.isSelected.value;
    }),
    k = y(() => {
     var T, A;
     return {
      color:
       ((g == null ? void 0 : g.isSelected.value) &&
        (!h.isLink.value || ((T = h.isActive) == null ? void 0 : T.value))) ||
       !g ||
       ((A = h.isActive) == null ? void 0 : A.value)
        ? e.color ?? e.baseColor
        : e.baseColor,
      variant: e.variant,
     };
    }),
    { colorClasses: I, colorStyles: B, variantClasses: w } = sn(k),
    V = y(() => (g == null ? void 0 : g.disabled.value) || e.disabled),
    C = y(() => e.variant === 'elevated' && !(e.disabled || e.flat || e.border)),
    P = y(() => {
     if (!(e.value === void 0 || typeof e.value == 'symbol'))
      return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
    });
   function x(_) {
    var T;
    V.value ||
     (h.isLink.value &&
      (_.metaKey || _.ctrlKey || _.shiftKey || _.button !== 0 || t.target === '_blank')) ||
     ((T = h.navigate) == null || T.call(h, _), g == null || g.toggle());
   }
   return (
    Pv(h, g == null ? void 0 : g.select),
    R(() => {
     const _ = h.isLink.value ? 'a' : e.tag,
      T = !!(e.prependIcon || a.prepend),
      A = !!(e.appendIcon || a.append),
      p = !!(e.icon && e.icon !== !0);
     return Ae(
      u(
       _,
       {
        type: _ === 'a' ? void 0 : 'button',
        class: [
         'v-btn',
         g == null ? void 0 : g.selectedClass.value,
         {
          'v-btn--active': S.value,
          'v-btn--block': e.block,
          'v-btn--disabled': V.value,
          'v-btn--elevated': C.value,
          'v-btn--flat': e.flat,
          'v-btn--icon': !!e.icon,
          'v-btn--loading': e.loading,
          'v-btn--readonly': e.readonly,
          'v-btn--slim': e.slim,
          'v-btn--stacked': e.stacked,
         },
         l.value,
         i.value,
         I.value,
         o.value,
         s.value,
         c.value,
         f.value,
         m.value,
         v.value,
         w.value,
         e.class,
        ],
        style: [B.value, r.value, d.value, b.value, e.style],
        'aria-busy': e.loading ? !0 : void 0,
        disabled: V.value || void 0,
        href: h.href.value,
        tabindex: e.loading || e.readonly ? -1 : void 0,
        onClick: x,
        value: P.value,
       },
       {
        default: () => {
         var F;
         return [
          zt(!0, 'v-btn'),
          !e.icon &&
           T &&
           u('span', { key: 'prepend', class: 'v-btn__prepend' }, [
            a.prepend
             ? u(
                fe,
                {
                 key: 'prepend-defaults',
                 disabled: !e.prependIcon,
                 defaults: { VIcon: { icon: e.prependIcon } },
                },
                a.prepend
               )
             : u(be, { key: 'prepend-icon', icon: e.prependIcon }, null),
           ]),
          u('span', { class: 'v-btn__content', 'data-no-activator': '' }, [
           !a.default && p
            ? u(be, { key: 'content-icon', icon: e.icon }, null)
            : u(
               fe,
               { key: 'content-defaults', disabled: !p, defaults: { VIcon: { icon: e.icon } } },
               {
                default: () => {
                 var O;
                 return [((O = a.default) == null ? void 0 : O.call(a)) ?? e.text];
                },
               }
              ),
          ]),
          !e.icon &&
           A &&
           u('span', { key: 'append', class: 'v-btn__append' }, [
            a.append
             ? u(
                fe,
                {
                 key: 'append-defaults',
                 disabled: !e.appendIcon,
                 defaults: { VIcon: { icon: e.appendIcon } },
                },
                a.append
               )
             : u(be, { key: 'append-icon', icon: e.appendIcon }, null),
           ]),
          !!e.loading &&
           u('span', { key: 'loader', class: 'v-btn__loader' }, [
            ((F = a.loader) == null ? void 0 : F.call(a)) ??
             u(
              _n,
              {
               color: typeof e.loading == 'boolean' ? void 0 : e.loading,
               indeterminate: !0,
               width: '2',
              },
              null
             ),
           ]),
         ];
        },
       }
      ),
      [[pt, !V.value && !!e.ripple, '', { center: !!e.icon }]]
     );
    }),
    { group: g }
   );
  },
 }),
 Dv = D({ ...za({ icon: '$menu', variant: 'text' }) }, 'VAppBarNavIcon'),
 pv = $()({
  name: 'VAppBarNavIcon',
  props: Dv(),
  setup(e, n) {
   let { slots: t } = n;
   return R(() => u(ye, z(e, { class: ['v-app-bar-nav-icon'] }), t)), {};
  },
 }),
 Ev = $()({
  name: 'VAppBarTitle',
  props: Hr(),
  setup(e, n) {
   let { slots: t } = n;
   return R(() => u(fi, z(e, { class: 'v-app-bar-title' }), t)), {};
  },
 }),
 ou = Pt('v-alert-title'),
 Mv = ['success', 'info', 'warning', 'error'],
 $v = D(
  {
   border: {
    type: [Boolean, String],
    validator: (e) => typeof e == 'boolean' || ['top', 'end', 'bottom', 'start'].includes(e),
   },
   borderColor: String,
   closable: Boolean,
   closeIcon: { type: ue, default: '$close' },
   closeLabel: { type: String, default: '$vuetify.close' },
   icon: { type: [Boolean, String, Function, Object], default: null },
   modelValue: { type: Boolean, default: !0 },
   prominent: Boolean,
   title: String,
   text: String,
   type: { type: String, validator: (e) => Mv.includes(e) },
   ...J(),
   ...He(),
   ...Ne(),
   ...Oe(),
   ...Dt(),
   ...Dn(),
   ..._e(),
   ...de(),
   ...me(),
   ...mt({ variant: 'flat' }),
  },
  'VAlert'
 ),
 Fv = $()({
  name: 'VAlert',
  props: $v(),
  emits: { 'click:close': (e) => !0, 'update:modelValue': (e) => !0 },
  setup(e, n) {
   let { emit: t, slots: a } = n;
   const l = le(e, 'modelValue'),
    i = y(() => {
     if (e.icon !== !1) return e.type ? e.icon ?? `$${e.type}` : e.icon;
    }),
    o = y(() => ({ color: e.color ?? e.type, variant: e.variant })),
    { themeClasses: r } = Se(e),
    { colorClasses: s, colorStyles: c, variantClasses: d } = sn(o),
    { densityClasses: f } = Je(e),
    { dimensionStyles: m } = ze(e),
    { elevationClasses: v } = Ye(e),
    { locationStyles: b } = fn(e),
    { positionClasses: g } = pn(e),
    { roundedClasses: h } = De(e),
    { textColorClasses: S, textColorStyles: k } = Ge(M(e, 'borderColor')),
    { t: I } = $e(),
    B = y(() => ({
     'aria-label': I(e.closeLabel),
     onClick(w) {
      (l.value = !1), t('click:close', w);
     },
    }));
   return () => {
    const w = !!(a.prepend || i.value),
     V = !!(a.title || e.title),
     C = !!(a.close || e.closable);
    return (
     l.value &&
     u(
      e.tag,
      {
       class: [
        'v-alert',
        e.border && {
         'v-alert--border': !!e.border,
         [`v-alert--border-${e.border === !0 ? 'start' : e.border}`]: !0,
        },
        { 'v-alert--prominent': e.prominent },
        r.value,
        s.value,
        f.value,
        v.value,
        g.value,
        h.value,
        d.value,
        e.class,
       ],
       style: [c.value, m.value, b.value, e.style],
       role: 'alert',
      },
      {
       default: () => {
        var P, x;
        return [
         zt(!1, 'v-alert'),
         e.border &&
          u('div', { key: 'border', class: ['v-alert__border', S.value], style: k.value }, null),
         w &&
          u('div', { key: 'prepend', class: 'v-alert__prepend' }, [
           a.prepend
            ? u(
               fe,
               {
                key: 'prepend-defaults',
                disabled: !i.value,
                defaults: { VIcon: { density: e.density, icon: i.value, size: e.prominent ? 44 : 28 } },
               },
               a.prepend
              )
            : u(
               be,
               { key: 'prepend-icon', density: e.density, icon: i.value, size: e.prominent ? 44 : 28 },
               null
              ),
          ]),
         u('div', { class: 'v-alert__content' }, [
          V &&
           u(
            ou,
            { key: 'title' },
            {
             default: () => {
              var _;
              return [((_ = a.title) == null ? void 0 : _.call(a)) ?? e.title];
             },
            }
           ),
          ((P = a.text) == null ? void 0 : P.call(a)) ?? e.text,
          (x = a.default) == null ? void 0 : x.call(a),
         ]),
         a.append && u('div', { key: 'append', class: 'v-alert__append' }, [a.append()]),
         C &&
          u('div', { key: 'close', class: 'v-alert__close' }, [
           a.close
            ? u(
               fe,
               {
                key: 'close-defaults',
                defaults: { VBtn: { icon: e.closeIcon, size: 'x-small', variant: 'text' } },
               },
               {
                default: () => {
                 var _;
                 return [(_ = a.close) == null ? void 0 : _.call(a, { props: B.value })];
                },
               }
              )
            : u(
               ye,
               z({ key: 'close-btn', icon: e.closeIcon, size: 'x-small', variant: 'text' }, B.value),
               null
              ),
          ]),
        ];
       },
      }
     )
    );
   };
  },
 }),
 Lv = D(
  {
   start: Boolean,
   end: Boolean,
   icon: ue,
   image: String,
   text: String,
   ...J(),
   ...He(),
   ..._e(),
   ...It(),
   ...de(),
   ...me(),
   ...mt({ variant: 'flat' }),
  },
  'VAvatar'
 ),
 vt = $()({
  name: 'VAvatar',
  props: Lv(),
  setup(e, n) {
   let { slots: t } = n;
   const { themeClasses: a } = Se(e),
    { colorClasses: l, colorStyles: i, variantClasses: o } = sn(e),
    { densityClasses: r } = Je(e),
    { roundedClasses: s } = De(e),
    { sizeClasses: c, sizeStyles: d } = Bn(e);
   return (
    R(() =>
     u(
      e.tag,
      {
       class: [
        'v-avatar',
        { 'v-avatar--start': e.start, 'v-avatar--end': e.end },
        a.value,
        l.value,
        r.value,
        s.value,
        c.value,
        o.value,
        e.class,
       ],
       style: [i.value, d.value, e.style],
      },
      {
       default: () => [
        t.default
         ? u(
            fe,
            {
             key: 'content-defaults',
             defaults: { VImg: { cover: !0, image: e.image }, VIcon: { icon: e.icon } },
            },
            { default: () => [t.default()] }
           )
         : e.image
           ? u(Tt, { key: 'image', src: e.image, alt: '', cover: !0 }, null)
           : e.icon
             ? u(be, { key: 'icon', icon: e.icon }, null)
             : e.text,
        zt(!1, 'v-avatar'),
       ],
      }
     )
    ),
    {}
   );
  },
 }),
 Ov = D({ text: String, onClick: We(), ...J(), ...me() }, 'VLabel'),
 En = $()({
  name: 'VLabel',
  props: Ov(),
  setup(e, n) {
   let { slots: t } = n;
   return (
    R(() => {
     var a;
     return u(
      'label',
      {
       class: ['v-label', { 'v-label--clickable': !!e.onClick }, e.class],
       style: e.style,
       onClick: e.onClick,
      },
      [e.text, (a = t.default) == null ? void 0 : a.call(t)]
     );
    }),
    {}
   );
  },
 }),
 ru = Symbol.for('vuetify:selection-control-group'),
 xi = D(
  {
   color: String,
   disabled: { type: Boolean, default: null },
   defaultsTarget: String,
   error: Boolean,
   id: String,
   inline: Boolean,
   falseIcon: ue,
   trueIcon: ue,
   ripple: { type: [Boolean, Object], default: !0 },
   multiple: { type: Boolean, default: null },
   name: String,
   readonly: { type: Boolean, default: null },
   modelValue: null,
   type: String,
   valueComparator: { type: Function, default: Ct },
   ...J(),
   ...He(),
   ...me(),
  },
  'SelectionControlGroup'
 ),
 Rv = D({ ...xi({ defaultsTarget: 'VSelectionControl' }) }, 'VSelectionControlGroup'),
 uu = $()({
  name: 'VSelectionControlGroup',
  props: Rv(),
  emits: { 'update:modelValue': (e) => !0 },
  setup(e, n) {
   let { slots: t } = n;
   const a = le(e, 'modelValue'),
    l = je(),
    i = y(() => e.id || `v-selection-control-group-${l}`),
    o = y(() => e.name || i.value),
    r = new Set();
   return (
    Ie(ru, {
     modelValue: a,
     forceUpdate: () => {
      r.forEach((s) => s());
     },
     onForceUpdate: (s) => {
      r.add(s),
       Ze(() => {
        r.delete(s);
       });
     },
    }),
    Be({
     [e.defaultsTarget]: {
      color: M(e, 'color'),
      disabled: M(e, 'disabled'),
      density: M(e, 'density'),
      error: M(e, 'error'),
      inline: M(e, 'inline'),
      modelValue: a,
      multiple: y(() => !!e.multiple || (e.multiple == null && Array.isArray(a.value))),
      name: o,
      falseIcon: M(e, 'falseIcon'),
      trueIcon: M(e, 'trueIcon'),
      readonly: M(e, 'readonly'),
      ripple: M(e, 'ripple'),
      type: M(e, 'type'),
      valueComparator: M(e, 'valueComparator'),
     },
    }),
    R(() => {
     var s;
     return u(
      'div',
      {
       class: ['v-selection-control-group', { 'v-selection-control-group--inline': e.inline }, e.class],
       style: e.style,
       role: e.type === 'radio' ? 'radiogroup' : void 0,
      },
      [(s = t.default) == null ? void 0 : s.call(t)]
     );
    }),
    {}
   );
  },
 }),
 Ha = D(
  { label: String, baseColor: String, trueValue: null, falseValue: null, value: null, ...J(), ...xi() },
  'VSelectionControl'
 );
function Nv(e) {
 const n = ge(ru, void 0),
  { densityClasses: t } = Je(e),
  a = le(e, 'modelValue'),
  l = y(() => (e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0)),
  i = y(() => (e.falseValue !== void 0 ? e.falseValue : !1)),
  o = y(() => !!e.multiple || (e.multiple == null && Array.isArray(a.value))),
  r = y({
   get() {
    const v = n ? n.modelValue.value : a.value;
    return o.value ? Te(v).some((b) => e.valueComparator(b, l.value)) : e.valueComparator(v, l.value);
   },
   set(v) {
    if (e.readonly) return;
    const b = v ? l.value : i.value;
    let g = b;
    o.value && (g = v ? [...Te(a.value), b] : Te(a.value).filter((h) => !e.valueComparator(h, l.value))),
     n ? (n.modelValue.value = g) : (a.value = g);
   },
  }),
  { textColorClasses: s, textColorStyles: c } = Ge(
   y(() => {
    if (!(e.error || e.disabled)) return r.value ? e.color : e.baseColor;
   })
  ),
  { backgroundColorClasses: d, backgroundColorStyles: f } = we(
   y(() => (r.value && !e.error && !e.disabled ? e.color : e.baseColor))
  ),
  m = y(() => (r.value ? e.trueIcon : e.falseIcon));
 return {
  group: n,
  densityClasses: t,
  trueValue: l,
  falseValue: i,
  model: r,
  textColorClasses: s,
  textColorStyles: c,
  backgroundColorClasses: d,
  backgroundColorStyles: f,
  icon: m,
 };
}
const Ot = $()({
  name: 'VSelectionControl',
  directives: { Ripple: pt },
  inheritAttrs: !1,
  props: Ha(),
  emits: { 'update:modelValue': (e) => !0 },
  setup(e, n) {
   let { attrs: t, slots: a } = n;
   const {
     group: l,
     densityClasses: i,
     icon: o,
     model: r,
     textColorClasses: s,
     textColorStyles: c,
     backgroundColorClasses: d,
     backgroundColorStyles: f,
     trueValue: m,
    } = Nv(e),
    v = je(),
    b = K(!1),
    g = K(!1),
    h = j(),
    S = y(() => e.id || `input-${v}`),
    k = y(() => !e.disabled && !e.readonly);
   l == null ||
    l.onForceUpdate(() => {
     h.value && (h.value.checked = r.value);
    });
   function I(C) {
    k.value && ((b.value = !0), Vn(C.target, ':focus-visible') !== !1 && (g.value = !0));
   }
   function B() {
    (b.value = !1), (g.value = !1);
   }
   function w(C) {
    C.stopPropagation();
   }
   function V(C) {
    if (!k.value) {
     h.value && (h.value.checked = r.value);
     return;
    }
    e.readonly && l && he(() => l.forceUpdate()), (r.value = C.target.checked);
   }
   return (
    R(() => {
     var T, A;
     const C = a.label ? a.label({ label: e.label, props: { for: S.value } }) : e.label,
      [P, x] = Nt(t),
      _ = u(
       'input',
       z(
        {
         ref: h,
         checked: r.value,
         disabled: !!e.disabled,
         id: S.value,
         onBlur: B,
         onFocus: I,
         onInput: V,
         'aria-disabled': !!e.disabled,
         'aria-label': e.label,
         type: e.type,
         value: m.value,
         name: e.name,
         'aria-checked': e.type === 'checkbox' ? r.value : void 0,
        },
        x
       ),
       null
      );
     return u(
      'div',
      z(
       {
        class: [
         'v-selection-control',
         {
          'v-selection-control--dirty': r.value,
          'v-selection-control--disabled': e.disabled,
          'v-selection-control--error': e.error,
          'v-selection-control--focused': b.value,
          'v-selection-control--focus-visible': g.value,
          'v-selection-control--inline': e.inline,
         },
         i.value,
         e.class,
        ],
       },
       P,
       { style: e.style }
      ),
      [
       u('div', { class: ['v-selection-control__wrapper', s.value], style: c.value }, [
        (T = a.default) == null
         ? void 0
         : T.call(a, { backgroundColorClasses: d, backgroundColorStyles: f }),
        Ae(
         u('div', { class: ['v-selection-control__input'] }, [
          ((A = a.input) == null
           ? void 0
           : A.call(a, {
              model: r,
              textColorClasses: s,
              textColorStyles: c,
              backgroundColorClasses: d,
              backgroundColorStyles: f,
              inputNode: _,
              icon: o.value,
              props: { onFocus: I, onBlur: B, id: S.value },
             })) ?? u(ie, null, [o.value && u(be, { key: 'icon', icon: o.value }, null), _]),
         ]),
         [[ot('ripple'), e.ripple && [!e.disabled && !e.readonly, null, ['center', 'circle']]]]
        ),
       ]),
       C && u(En, { for: S.value, onClick: w }, { default: () => [C] }),
      ]
     );
    }),
    { isFocused: b, input: h }
   );
  },
 }),
 su = D(
  {
   indeterminate: Boolean,
   indeterminateIcon: { type: ue, default: '$checkboxIndeterminate' },
   ...Ha({ falseIcon: '$checkboxOff', trueIcon: '$checkboxOn' }),
  },
  'VCheckboxBtn'
 ),
 At = $()({
  name: 'VCheckboxBtn',
  props: su(),
  emits: { 'update:modelValue': (e) => !0, 'update:indeterminate': (e) => !0 },
  setup(e, n) {
   let { slots: t } = n;
   const a = le(e, 'indeterminate'),
    l = le(e, 'modelValue');
   function i(s) {
    a.value && (a.value = !1);
   }
   const o = y(() => (a.value ? e.indeterminateIcon : e.falseIcon)),
    r = y(() => (a.value ? e.indeterminateIcon : e.trueIcon));
   return (
    R(() => {
     const s = Ee(Ot.filterProps(e), ['modelValue']);
     return u(
      Ot,
      z(s, {
       modelValue: l.value,
       'onUpdate:modelValue': [(c) => (l.value = c), i],
       class: ['v-checkbox-btn', e.class],
       style: e.style,
       type: 'checkbox',
       falseIcon: o.value,
       trueIcon: r.value,
       'aria-checked': a.value ? 'mixed' : void 0,
      }),
      t
     );
    }),
    {}
   );
  },
 });
function cu(e) {
 const { t: n } = $e();
 function t(a) {
  let { name: l } = a;
  const i = {
    prepend: 'prependAction',
    prependInner: 'prependAction',
    append: 'appendAction',
    appendInner: 'appendAction',
    clear: 'clear',
   }[l],
   o = e[`onClick:${l}`],
   r = o && i ? n(`$vuetify.input.${i}`, e.label ?? '') : void 0;
  return u(be, { icon: e[`${l}Icon`], 'aria-label': r, onClick: o }, null);
 }
 return { InputIcon: t };
}
const zv = D(
  {
   active: Boolean,
   color: String,
   messages: { type: [Array, String], default: () => [] },
   ...J(),
   ...St({ transition: { component: gi, leaveAbsolute: !0, group: !0 } }),
  },
  'VMessages'
 ),
 du = $()({
  name: 'VMessages',
  props: zv(),
  setup(e, n) {
   let { slots: t } = n;
   const a = y(() => Te(e.messages)),
    { textColorClasses: l, textColorStyles: i } = Ge(y(() => e.color));
   return (
    R(() =>
     u(
      Xe,
      {
       transition: e.transition,
       tag: 'div',
       class: ['v-messages', l.value, e.class],
       style: [i.value, e.style],
       role: 'alert',
       'aria-live': 'polite',
      },
      {
       default: () => [
        e.active &&
         a.value.map((o, r) =>
          u('div', { class: 'v-messages__message', key: `${r}-${a.value}` }, [
           t.message ? t.message({ message: o }) : o,
          ])
         ),
       ],
      }
     )
    ),
    {}
   );
  },
 }),
 aa = D({ focused: Boolean, 'onUpdate:focused': We() }, 'focus');
function Et(e) {
 let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Vt();
 const t = le(e, 'focused'),
  a = y(() => ({ [`${n}--focused`]: t.value }));
 function l() {
  t.value = !0;
 }
 function i() {
  t.value = !1;
 }
 return { focusClasses: a, isFocused: t, focus: l, blur: i };
}
const vu = Symbol.for('vuetify:form'),
 Hv = D(
  {
   disabled: Boolean,
   fastFail: Boolean,
   readonly: Boolean,
   modelValue: { type: Boolean, default: null },
   validateOn: { type: String, default: 'input' },
  },
  'form'
 );
function Wv(e) {
 const n = le(e, 'modelValue'),
  t = y(() => e.disabled),
  a = y(() => e.readonly),
  l = K(!1),
  i = j([]),
  o = j([]);
 async function r() {
  const d = [];
  let f = !0;
  (o.value = []), (l.value = !0);
  for (const m of i.value) {
   const v = await m.validate();
   if ((v.length > 0 && ((f = !1), d.push({ id: m.id, errorMessages: v })), !f && e.fastFail)) break;
  }
  return (o.value = d), (l.value = !1), { valid: f, errors: o.value };
 }
 function s() {
  i.value.forEach((d) => d.reset());
 }
 function c() {
  i.value.forEach((d) => d.resetValidation());
 }
 return (
  X(
   i,
   () => {
    let d = 0,
     f = 0;
    const m = [];
    for (const v of i.value)
     v.isValid === !1
      ? (f++, m.push({ id: v.id, errorMessages: v.errorMessages }))
      : v.isValid === !0 && d++;
    (o.value = m), (n.value = f > 0 ? !1 : d === i.value.length ? !0 : null);
   },
   { deep: !0, flush: 'post' }
  ),
  Ie(vu, {
   register: (d) => {
    let { id: f, vm: m, validate: v, reset: b, resetValidation: g } = d;
    i.value.some((h) => h.id === f),
     i.value.push({
      id: f,
      validate: v,
      reset: b,
      resetValidation: g,
      vm: Ac(m),
      isValid: null,
      errorMessages: [],
     });
   },
   unregister: (d) => {
    i.value = i.value.filter((f) => f.id !== d);
   },
   update: (d, f, m) => {
    const v = i.value.find((b) => b.id === d);
    v && ((v.isValid = f), (v.errorMessages = m));
   },
   isDisabled: t,
   isReadonly: a,
   isValidating: l,
   isValid: n,
   items: i,
   validateOn: M(e, 'validateOn'),
  }),
  {
   errors: o,
   isDisabled: t,
   isReadonly: a,
   isValidating: l,
   isValid: n,
   items: i,
   validate: r,
   reset: s,
   resetValidation: c,
  }
 );
}
function Wa() {
 return ge(vu, null);
}
const fu = D(
 {
  disabled: { type: Boolean, default: null },
  error: Boolean,
  errorMessages: { type: [Array, String], default: () => [] },
  maxErrors: { type: [Number, String], default: 1 },
  name: String,
  label: String,
  readonly: { type: Boolean, default: null },
  rules: { type: Array, default: () => [] },
  modelValue: null,
  validateOn: String,
  validationValue: null,
  ...aa(),
 },
 'validation'
);
function mu(e) {
 let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Vt(),
  t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : je();
 const a = le(e, 'modelValue'),
  l = y(() => (e.validationValue === void 0 ? a.value : e.validationValue)),
  i = Wa(),
  o = j([]),
  r = K(!0),
  s = y(
   () => !!(Te(a.value === '' ? null : a.value).length || Te(l.value === '' ? null : l.value).length)
  ),
  c = y(() => !!(e.disabled ?? (i == null ? void 0 : i.isDisabled.value))),
  d = y(() => !!(e.readonly ?? (i == null ? void 0 : i.isReadonly.value))),
  f = y(() => {
   var w;
   return (w = e.errorMessages) != null && w.length
    ? Te(e.errorMessages).concat(o.value).slice(0, Math.max(0, +e.maxErrors))
    : o.value;
  }),
  m = y(() => {
   let w = (e.validateOn ?? (i == null ? void 0 : i.validateOn.value)) || 'input';
   w === 'lazy' && (w = 'input lazy');
   const V = new Set((w == null ? void 0 : w.split(' ')) ?? []);
   return {
    blur: V.has('blur') || V.has('input'),
    input: V.has('input'),
    submit: V.has('submit'),
    lazy: V.has('lazy'),
   };
  }),
  v = y(() => {
   var w;
   return e.error || ((w = e.errorMessages) != null && w.length)
    ? !1
    : e.rules.length
      ? r.value
        ? o.value.length || m.value.lazy
          ? null
          : !0
        : !o.value.length
      : !0;
  }),
  b = K(!1),
  g = y(() => ({
   [`${n}--error`]: v.value === !1,
   [`${n}--dirty`]: s.value,
   [`${n}--disabled`]: c.value,
   [`${n}--readonly`]: d.value,
  })),
  h = Me('validation'),
  S = y(() => e.name ?? et(t));
 sr(() => {
  i == null || i.register({ id: S.value, vm: h, validate: B, reset: k, resetValidation: I });
 }),
  nt(() => {
   i == null || i.unregister(S.value);
  }),
  at(async () => {
   m.value.lazy || (await B(!0)), i == null || i.update(S.value, v.value, f.value);
  }),
  lt(
   () => m.value.input,
   () => {
    X(l, () => {
     if (l.value != null) B();
     else if (e.focused) {
      const w = X(
       () => e.focused,
       (V) => {
        V || B(), w();
       }
      );
     }
    });
   }
  ),
  lt(
   () => m.value.blur,
   () => {
    X(
     () => e.focused,
     (w) => {
      w || B();
     }
    );
   }
  ),
  X([v, f], () => {
   i == null || i.update(S.value, v.value, f.value);
  });
 async function k() {
  (a.value = null), await he(), await I();
 }
 async function I() {
  (r.value = !0), m.value.lazy ? (o.value = []) : await B(!0);
 }
 async function B() {
  let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
  const V = [];
  b.value = !0;
  for (const C of e.rules) {
   if (V.length >= +(e.maxErrors ?? 1)) break;
   const x = await (typeof C == 'function' ? C : () => C)(l.value);
   if (x !== !0) {
    if (x !== !1 && typeof x != 'string') {
     console.warn(`${x} is not a valid value. Rule functions must return boolean true or a string.`);
     continue;
    }
    V.push(x || '');
   }
  }
  return (o.value = V), (b.value = !1), (r.value = w), o.value;
 }
 return {
  errorMessages: f,
  isDirty: s,
  isDisabled: c,
  isReadonly: d,
  isPristine: r,
  isValid: v,
  isValidating: b,
  reset: k,
  resetValidation: I,
  validate: B,
  validationClasses: g,
 };
}
const Mt = D(
  {
   id: String,
   appendIcon: ue,
   centerAffix: Boolean,
   prependIcon: ue,
   hideDetails: [Boolean, String],
   hideSpinButtons: Boolean,
   hint: String,
   persistentHint: Boolean,
   messages: { type: [Array, String], default: () => [] },
   direction: {
    type: String,
    default: 'horizontal',
    validator: (e) => ['horizontal', 'vertical'].includes(e),
   },
   'onClick:prepend': We(),
   'onClick:append': We(),
   ...J(),
   ...He(),
   ...Da(Ne(), ['maxWidth', 'minWidth', 'width']),
   ...me(),
   ...fu(),
  },
  'VInput'
 ),
 Ue = $()({
  name: 'VInput',
  props: { ...Mt() },
  emits: { 'update:modelValue': (e) => !0 },
  setup(e, n) {
   let { attrs: t, slots: a, emit: l } = n;
   const { densityClasses: i } = Je(e),
    { dimensionStyles: o } = ze(e),
    { themeClasses: r } = Se(e),
    { rtlClasses: s } = Re(),
    { InputIcon: c } = cu(e),
    d = je(),
    f = y(() => e.id || `input-${d}`),
    m = y(() => `${f.value}-messages`),
    {
     errorMessages: v,
     isDirty: b,
     isDisabled: g,
     isReadonly: h,
     isPristine: S,
     isValid: k,
     isValidating: I,
     reset: B,
     resetValidation: w,
     validate: V,
     validationClasses: C,
    } = mu(e, 'v-input', f),
    P = y(() => ({
     id: f,
     messagesId: m,
     isDirty: b,
     isDisabled: g,
     isReadonly: h,
     isPristine: S,
     isValid: k,
     isValidating: I,
     reset: B,
     resetValidation: w,
     validate: V,
    })),
    x = y(() => {
     var _;
     return ((_ = e.errorMessages) != null && _.length) || (!S.value && v.value.length)
      ? v.value
      : e.hint && (e.persistentHint || e.focused)
        ? e.hint
        : e.messages;
    });
   return (
    R(() => {
     var F, O, W, te;
     const _ = !!(a.prepend || e.prependIcon),
      T = !!(a.append || e.appendIcon),
      A = x.value.length > 0,
      p = !e.hideDetails || (e.hideDetails === 'auto' && (A || !!a.details));
     return u(
      'div',
      {
       class: [
        'v-input',
        `v-input--${e.direction}`,
        { 'v-input--center-affix': e.centerAffix, 'v-input--hide-spin-buttons': e.hideSpinButtons },
        i.value,
        r.value,
        s.value,
        C.value,
        e.class,
       ],
       style: [o.value, e.style],
      },
      [
       _ &&
        u('div', { key: 'prepend', class: 'v-input__prepend' }, [
         (F = a.prepend) == null ? void 0 : F.call(a, P.value),
         e.prependIcon && u(c, { key: 'prepend-icon', name: 'prepend' }, null),
        ]),
       a.default &&
        u('div', { class: 'v-input__control' }, [(O = a.default) == null ? void 0 : O.call(a, P.value)]),
       T &&
        u('div', { key: 'append', class: 'v-input__append' }, [
         e.appendIcon && u(c, { key: 'append-icon', name: 'append' }, null),
         (W = a.append) == null ? void 0 : W.call(a, P.value),
        ]),
       p &&
        u('div', { class: 'v-input__details' }, [
         u(du, { id: m.value, active: A, messages: x.value }, { message: a.message }),
         (te = a.details) == null ? void 0 : te.call(a, P.value),
        ]),
      ]
     );
    }),
    { reset: B, resetValidation: w, validate: V, isValid: k, errorMessages: v }
   );
  },
 }),
 jv = D({ ...Mt(), ...Ee(su(), ['inline']) }, 'VCheckbox'),
 Yv = $()({
  name: 'VCheckbox',
  inheritAttrs: !1,
  props: jv(),
  emits: { 'update:modelValue': (e) => !0, 'update:focused': (e) => !0 },
  setup(e, n) {
   let { attrs: t, slots: a } = n;
   const l = le(e, 'modelValue'),
    { isFocused: i, focus: o, blur: r } = Et(e),
    s = je(),
    c = y(() => e.id || `checkbox-${s}`);
   return (
    R(() => {
     const [d, f] = Nt(t),
      m = Ue.filterProps(e),
      v = At.filterProps(e);
     return u(
      Ue,
      z({ class: ['v-checkbox', e.class] }, d, m, {
       modelValue: l.value,
       'onUpdate:modelValue': (b) => (l.value = b),
       id: c.value,
       focused: i.value,
       style: e.style,
      }),
      {
       ...a,
       default: (b) => {
        let { id: g, messagesId: h, isDisabled: S, isReadonly: k, isValid: I } = b;
        return u(
         At,
         z(v, { id: g.value, 'aria-describedby': h.value, disabled: S.value, readonly: k.value }, f, {
          error: I.value === !1,
          modelValue: l.value,
          'onUpdate:modelValue': (B) => (l.value = B),
          onFocus: o,
          onBlur: r,
         }),
         a
        );
       },
      }
     );
    }),
    {}
   );
  },
 }),
 ja = ['sm', 'md', 'lg', 'xl', 'xxl'],
 pl = Symbol.for('vuetify:display'),
 Mo = { mobileBreakpoint: 'lg', thresholds: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, xxl: 2560 } },
 Gv = function () {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Mo;
  return qe(Mo, e);
 };
function $o(e) {
 return ke && !e ? window.innerWidth : (typeof e == 'object' && e.clientWidth) || 0;
}
function Fo(e) {
 return ke && !e ? window.innerHeight : (typeof e == 'object' && e.clientHeight) || 0;
}
function Lo(e) {
 const n = ke && !e ? window.navigator.userAgent : 'ssr';
 function t(b) {
  return !!n.match(b);
 }
 const a = t(/android/i),
  l = t(/iphone|ipad|ipod/i),
  i = t(/cordova/i),
  o = t(/electron/i),
  r = t(/chrome/i),
  s = t(/edge/i),
  c = t(/firefox/i),
  d = t(/opera/i),
  f = t(/win/i),
  m = t(/mac/i),
  v = t(/linux/i);
 return {
  android: a,
  ios: l,
  cordova: i,
  electron: o,
  chrome: r,
  edge: s,
  firefox: c,
  opera: d,
  win: f,
  mac: m,
  linux: v,
  touch: Lc,
  ssr: n === 'ssr',
 };
}
function Uv(e, n) {
 const { thresholds: t, mobileBreakpoint: a } = Gv(e),
  l = K(Fo(n)),
  i = K(Lo(n)),
  o = ct({}),
  r = K($o(n));
 function s() {
  (l.value = Fo()), (r.value = $o());
 }
 function c() {
  s(), (i.value = Lo());
 }
 return (
  pe(() => {
   const d = r.value < t.sm,
    f = r.value < t.md && !d,
    m = r.value < t.lg && !(f || d),
    v = r.value < t.xl && !(m || f || d),
    b = r.value < t.xxl && !(v || m || f || d),
    g = r.value >= t.xxl,
    h = d ? 'xs' : f ? 'sm' : m ? 'md' : v ? 'lg' : b ? 'xl' : 'xxl',
    S = typeof a == 'number' ? a : t[a],
    k = r.value < S;
   (o.xs = d),
    (o.sm = f),
    (o.md = m),
    (o.lg = v),
    (o.xl = b),
    (o.xxl = g),
    (o.smAndUp = !d),
    (o.mdAndUp = !(d || f)),
    (o.lgAndUp = !(d || f || m)),
    (o.xlAndUp = !(d || f || m || v)),
    (o.smAndDown = !(m || v || b || g)),
    (o.mdAndDown = !(v || b || g)),
    (o.lgAndDown = !(b || g)),
    (o.xlAndDown = !g),
    (o.name = h),
    (o.height = l.value),
    (o.width = r.value),
    (o.mobile = k),
    (o.mobileBreakpoint = a),
    (o.platform = i.value),
    (o.thresholds = t);
  }),
  ke && window.addEventListener('resize', s, { passive: !0 }),
  { ...Aa(o), update: c, ssr: !!n }
 );
}
const mn = D({ mobile: { type: Boolean, default: !1 }, mobileBreakpoint: [Number, String] }, 'display');
function gt() {
 let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
  n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Vt();
 const t = ge(pl);
 if (!t) throw new Error('Could not find Vuetify display injection');
 const a = y(() => {
   if (e.mobile != null) return e.mobile;
   if (!e.mobileBreakpoint) return t.mobile.value;
   const i =
    typeof e.mobileBreakpoint == 'number' ? e.mobileBreakpoint : t.thresholds.value[e.mobileBreakpoint];
   return t.width.value < i;
  }),
  l = y(() => (n ? { [`${n}--mobile`]: a.value } : {}));
 return { ...t, displayClasses: l, mobile: a };
}
const gu = Symbol.for('vuetify:goto');
function hu() {
 return {
  container: void 0,
  duration: 300,
  layout: !1,
  offset: 0,
  easing: 'easeInOutCubic',
  patterns: {
   linear: (e) => e,
   easeInQuad: (e) => e ** 2,
   easeOutQuad: (e) => e * (2 - e),
   easeInOutQuad: (e) => (e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e),
   easeInCubic: (e) => e ** 3,
   easeOutCubic: (e) => (--e) ** 3 + 1,
   easeInOutCubic: (e) => (e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
   easeInQuart: (e) => e ** 4,
   easeOutQuart: (e) => 1 - (--e) ** 4,
   easeInOutQuart: (e) => (e < 0.5 ? 8 * e ** 4 : 1 - 8 * (--e) ** 4),
   easeInQuint: (e) => e ** 5,
   easeOutQuint: (e) => 1 + (--e) ** 5,
   easeInOutQuint: (e) => (e < 0.5 ? 16 * e ** 5 : 1 + 16 * (--e) ** 5),
  },
 };
}
function Kv(e) {
 return wi(e) ?? (document.scrollingElement || document.body);
}
function wi(e) {
 return typeof e == 'string' ? document.querySelector(e) : ai(e);
}
function fl(e, n, t) {
 if (typeof e == 'number') return n && t ? -e : e;
 let a = wi(e),
  l = 0;
 for (; a; ) (l += n ? a.offsetLeft : a.offsetTop), (a = a.offsetParent);
 return l;
}
function qv(e, n) {
 return { rtl: n.isRtl, options: qe(hu(), e) };
}
async function Oo(e, n, t, a) {
 const l = t ? 'scrollLeft' : 'scrollTop',
  i = qe((a == null ? void 0 : a.options) ?? hu(), n),
  o = a == null ? void 0 : a.rtl.value,
  r = (typeof e == 'number' ? e : wi(e)) ?? 0,
  s = i.container === 'parent' && r instanceof HTMLElement ? r.parentElement : Kv(i.container),
  c = typeof i.easing == 'function' ? i.easing : i.patterns[i.easing];
 if (!c) throw new TypeError(`Easing function "${i.easing}" not found.`);
 let d;
 if (typeof r == 'number') d = fl(r, t, o);
 else if (((d = fl(r, t, o) - fl(s, t, o)), i.layout)) {
  const b = window.getComputedStyle(r).getPropertyValue('--v-layout-top');
  b && (d -= parseInt(b, 10));
 }
 (d += i.offset), (d = Zv(s, d, !!o, !!t));
 const f = s[l] ?? 0;
 if (d === f) return Promise.resolve(d);
 const m = performance.now();
 return new Promise((v) =>
  requestAnimationFrame(function b(g) {
   const S = (g - m) / i.duration,
    k = Math.floor(f + (d - f) * c(Fe(S, 0, 1)));
   if (((s[l] = k), S >= 1 && Math.abs(k - s[l]) < 10)) return v(d);
   if (S > 2) return v(s[l]);
   requestAnimationFrame(b);
  })
 );
}
function Xv() {
 let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
 const n = ge(gu),
  { isRtl: t } = Re();
 if (!n) throw new Error('[Vuetify] Could not find injected goto instance');
 const a = { ...n, rtl: y(() => n.rtl.value || t.value) };
 async function l(i, o) {
  return Oo(i, qe(e, o), !1, a);
 }
 return (l.horizontal = async (i, o) => Oo(i, qe(e, o), !0, a)), l;
}
function Zv(e, n, t, a) {
 const { scrollWidth: l, scrollHeight: i } = e,
  [o, r] =
   e === document.scrollingElement
    ? [window.innerWidth, window.innerHeight]
    : [e.offsetWidth, e.offsetHeight];
 let s, c;
 return (
  a ? (t ? ((s = -(l - o)), (c = 0)) : ((s = 0), (c = l - o))) : ((s = 0), (c = i + -r)),
  Math.max(Math.min(n, c), s)
 );
}
function Jv(e) {
 let { selectedElement: n, containerElement: t, isRtl: a, isHorizontal: l } = e;
 const i = Un(l, t),
  o = yu(l, a, t),
  r = Un(l, n),
  s = bu(l, n),
  c = r * 0.4;
 return o > s ? s - c : o + i < s + r ? s - i + r + c : o;
}
function Qv(e) {
 let { selectedElement: n, containerElement: t, isHorizontal: a } = e;
 const l = Un(a, t),
  i = bu(a, n),
  o = Un(a, n);
 return i - l / 2 + o / 2;
}
function Ro(e, n) {
 const t = e ? 'scrollWidth' : 'scrollHeight';
 return (n == null ? void 0 : n[t]) || 0;
}
function ef(e, n) {
 const t = e ? 'clientWidth' : 'clientHeight';
 return (n == null ? void 0 : n[t]) || 0;
}
function yu(e, n, t) {
 if (!t) return 0;
 const { scrollLeft: a, offsetWidth: l, scrollWidth: i } = t;
 return e ? (n ? i - l + a : a) : t.scrollTop;
}
function Un(e, n) {
 const t = e ? 'offsetWidth' : 'offsetHeight';
 return (n == null ? void 0 : n[t]) || 0;
}
function bu(e, n) {
 const t = e ? 'offsetLeft' : 'offsetTop';
 return (n == null ? void 0 : n[t]) || 0;
}
const Su = Symbol.for('vuetify:v-slide-group'),
 Ci = D(
  {
   centerActive: Boolean,
   direction: { type: String, default: 'horizontal' },
   symbol: { type: null, default: Su },
   nextIcon: { type: ue, default: '$next' },
   prevIcon: { type: ue, default: '$prev' },
   showArrows: {
    type: [Boolean, String],
    validator: (e) => typeof e == 'boolean' || ['always', 'desktop', 'mobile'].includes(e),
   },
   ...J(),
   ...mn({ mobile: null }),
   ...de(),
   ...cn({ selectedClass: 'v-slide-group-item--active' }),
  },
  'VSlideGroup'
 ),
 Kn = $()({
  name: 'VSlideGroup',
  props: Ci(),
  emits: { 'update:modelValue': (e) => !0 },
  setup(e, n) {
   let { slots: t } = n;
   const { isRtl: a } = Re(),
    { displayClasses: l, mobile: i } = gt(e),
    o = Ht(e, e.symbol),
    r = K(!1),
    s = K(0),
    c = K(0),
    d = K(0),
    f = y(() => e.direction === 'horizontal'),
    { resizeRef: m, contentRect: v } = yt(),
    { resizeRef: b, contentRect: g } = yt(),
    h = Xv(),
    S = y(() => ({ container: m.el, duration: 200, easing: 'easeOutQuart' })),
    k = y(() =>
     o.selected.value.length ? o.items.value.findIndex((E) => E.id === o.selected.value[0]) : -1
    ),
    I = y(() =>
     o.selected.value.length
      ? o.items.value.findIndex((E) => E.id === o.selected.value[o.selected.value.length - 1])
      : -1
    );
   if (ke) {
    let E = -1;
    X(
     () => [o.selected.value, v.value, g.value, f.value],
     () => {
      cancelAnimationFrame(E),
       (E = requestAnimationFrame(() => {
        if (v.value && g.value) {
         const L = f.value ? 'width' : 'height';
         (c.value = v.value[L]), (d.value = g.value[L]), (r.value = c.value + 1 < d.value);
        }
        if (k.value >= 0 && b.el) {
         const L = b.el.children[I.value];
         w(L, e.centerActive);
        }
       }));
     }
    );
   }
   const B = K(!1);
   function w(E, L) {
    let G = 0;
    L
     ? (G = Qv({ containerElement: m.el, isHorizontal: f.value, selectedElement: E }))
     : (G = Jv({ containerElement: m.el, isHorizontal: f.value, isRtl: a.value, selectedElement: E })),
     V(G);
   }
   function V(E) {
    if (!ke || !m.el) return;
    const L = Un(f.value, m.el),
     G = yu(f.value, a.value, m.el);
    if (!(Ro(f.value, m.el) <= L || Math.abs(E - G) < 16)) {
     if (f.value && a.value && m.el) {
      const { scrollWidth: oe, offsetWidth: q } = m.el;
      E = oe - q - E;
     }
     f.value ? h.horizontal(E, S.value) : h(E, S.value);
    }
   }
   function C(E) {
    const { scrollTop: L, scrollLeft: G } = E.target;
    s.value = f.value ? G : L;
   }
   function P(E) {
    if (((B.value = !0), !(!r.value || !b.el))) {
     for (const L of E.composedPath())
      for (const G of b.el.children)
       if (G === L) {
        w(G);
        return;
       }
    }
   }
   function x(E) {
    B.value = !1;
   }
   let _ = !1;
   function T(E) {
    var L;
    !_ && !B.value && !(E.relatedTarget && (L = b.el) != null && L.contains(E.relatedTarget)) && F(),
     (_ = !1);
   }
   function A() {
    _ = !0;
   }
   function p(E) {
    if (!b.el) return;
    function L(G) {
     E.preventDefault(), F(G);
    }
    f.value
     ? E.key === 'ArrowRight'
       ? L(a.value ? 'prev' : 'next')
       : E.key === 'ArrowLeft' && L(a.value ? 'next' : 'prev')
     : E.key === 'ArrowDown'
       ? L('next')
       : E.key === 'ArrowUp' && L('prev'),
     E.key === 'Home' ? L('first') : E.key === 'End' && L('last');
   }
   function F(E) {
    var G, ae;
    if (!b.el) return;
    let L;
    if (!E) L = Nn(b.el)[0];
    else if (E === 'next') {
     if (((L = (G = b.el.querySelector(':focus')) == null ? void 0 : G.nextElementSibling), !L))
      return F('first');
    } else if (E === 'prev') {
     if (((L = (ae = b.el.querySelector(':focus')) == null ? void 0 : ae.previousElementSibling), !L))
      return F('last');
    } else E === 'first' ? (L = b.el.firstElementChild) : E === 'last' && (L = b.el.lastElementChild);
    L && L.focus({ preventScroll: !0 });
   }
   function O(E) {
    const L = f.value && a.value ? -1 : 1,
     G = (E === 'prev' ? -L : L) * c.value;
    let ae = s.value + G;
    if (f.value && a.value && m.el) {
     const { scrollWidth: oe, offsetWidth: q } = m.el;
     ae += oe - q;
    }
    V(ae);
   }
   const W = y(() => ({ next: o.next, prev: o.prev, select: o.select, isSelected: o.isSelected })),
    te = y(() => {
     switch (e.showArrows) {
      case 'always':
       return !0;
      case 'desktop':
       return !i.value;
      case !0:
       return r.value || Math.abs(s.value) > 0;
      case 'mobile':
       return i.value || r.value || Math.abs(s.value) > 0;
      default:
       return !i.value && (r.value || Math.abs(s.value) > 0);
     }
    }),
    N = y(() => Math.abs(s.value) > 1),
    H = y(() => {
     if (!m.value) return !1;
     const E = Ro(f.value, m.el),
      L = ef(f.value, m.el);
     return E - L - Math.abs(s.value) > 1;
    });
   return (
    R(() =>
     u(
      e.tag,
      {
       class: [
        'v-slide-group',
        {
         'v-slide-group--vertical': !f.value,
         'v-slide-group--has-affixes': te.value,
         'v-slide-group--is-overflowing': r.value,
        },
        l.value,
        e.class,
       ],
       style: e.style,
       tabindex: B.value || o.selected.value.length ? -1 : 0,
       onFocus: T,
      },
      {
       default: () => {
        var E, L, G;
        return [
         te.value &&
          u(
           'div',
           {
            key: 'prev',
            class: ['v-slide-group__prev', { 'v-slide-group__prev--disabled': !N.value }],
            onMousedown: A,
            onClick: () => N.value && O('prev'),
           },
           [
            ((E = t.prev) == null ? void 0 : E.call(t, W.value)) ??
             u(jn, null, { default: () => [u(be, { icon: a.value ? e.nextIcon : e.prevIcon }, null)] }),
           ]
          ),
         u('div', { key: 'container', ref: m, class: 'v-slide-group__container', onScroll: C }, [
          u(
           'div',
           { ref: b, class: 'v-slide-group__content', onFocusin: P, onFocusout: x, onKeydown: p },
           [(L = t.default) == null ? void 0 : L.call(t, W.value)]
          ),
         ]),
         te.value &&
          u(
           'div',
           {
            key: 'next',
            class: ['v-slide-group__next', { 'v-slide-group__next--disabled': !H.value }],
            onMousedown: A,
            onClick: () => H.value && O('next'),
           },
           [
            ((G = t.next) == null ? void 0 : G.call(t, W.value)) ??
             u(jn, null, { default: () => [u(be, { icon: a.value ? e.prevIcon : e.nextIcon }, null)] }),
           ]
          ),
        ];
       },
      }
     )
    ),
    { selected: o.selected, scrollTo: O, scrollOffset: s, focus: F }
   );
  },
 }),
 ku = Symbol.for('vuetify:v-chip-group'),
 tf = D(
  {
   column: Boolean,
   filter: Boolean,
   valueComparator: { type: Function, default: Ct },
   ...Ci(),
   ...J(),
   ...cn({ selectedClass: 'v-chip--selected' }),
   ...de(),
   ...me(),
   ...mt({ variant: 'tonal' }),
  },
  'VChipGroup'
 ),
 nf = $()({
  name: 'VChipGroup',
  props: tf(),
  emits: { 'update:modelValue': (e) => !0 },
  setup(e, n) {
   let { slots: t } = n;
   const { themeClasses: a } = Se(e),
    { isSelected: l, select: i, next: o, prev: r, selected: s } = Ht(e, ku);
   return (
    Be({
     VChip: {
      color: M(e, 'color'),
      disabled: M(e, 'disabled'),
      filter: M(e, 'filter'),
      variant: M(e, 'variant'),
     },
    }),
    R(() => {
     const c = Kn.filterProps(e);
     return u(
      Kn,
      z(c, {
       class: ['v-chip-group', { 'v-chip-group--column': e.column }, a.value, e.class],
       style: e.style,
      }),
      {
       default: () => {
        var d;
        return [
         (d = t.default) == null
          ? void 0
          : d.call(t, { isSelected: l, select: i, next: o, prev: r, selected: s.value }),
        ];
       },
      }
     );
    }),
    {}
   );
  },
 }),
 af = D(
  {
   activeClass: String,
   appendAvatar: String,
   appendIcon: ue,
   closable: Boolean,
   closeIcon: { type: ue, default: '$delete' },
   closeLabel: { type: String, default: '$vuetify.close' },
   draggable: Boolean,
   filter: Boolean,
   filterIcon: { type: String, default: '$complete' },
   label: Boolean,
   link: { type: Boolean, default: void 0 },
   pill: Boolean,
   prependAvatar: String,
   prependIcon: ue,
   ripple: { type: [Boolean, Object], default: !0 },
   text: String,
   modelValue: { type: Boolean, default: !0 },
   onClick: We(),
   onClickOnce: We(),
   ...st(),
   ...J(),
   ...He(),
   ...Oe(),
   ...dn(),
   ..._e(),
   ...na(),
   ...It(),
   ...de({ tag: 'span' }),
   ...me(),
   ...mt({ variant: 'tonal' }),
  },
  'VChip'
 ),
 Mn = $()({
  name: 'VChip',
  directives: { Ripple: pt },
  props: af(),
  emits: {
   'click:close': (e) => !0,
   'update:modelValue': (e) => !0,
   'group:selected': (e) => !0,
   click: (e) => !0,
  },
  setup(e, n) {
   let { attrs: t, emit: a, slots: l } = n;
   const { t: i } = $e(),
    { borderClasses: o } = ft(e),
    { colorClasses: r, colorStyles: s, variantClasses: c } = sn(e),
    { densityClasses: d } = Je(e),
    { elevationClasses: f } = Ye(e),
    { roundedClasses: m } = De(e),
    { sizeClasses: v } = Bn(e),
    { themeClasses: b } = Se(e),
    g = le(e, 'modelValue'),
    h = vn(e, ku, !1),
    S = ta(e, t),
    k = y(() => e.link !== !1 && S.isLink.value),
    I = y(() => !e.disabled && e.link !== !1 && (!!h || e.link || S.isClickable.value)),
    B = y(() => ({
     'aria-label': i(e.closeLabel),
     onClick(C) {
      C.preventDefault(), C.stopPropagation(), (g.value = !1), a('click:close', C);
     },
    }));
   function w(C) {
    var P;
    a('click', C), I.value && ((P = S.navigate) == null || P.call(S, C), h == null || h.toggle());
   }
   function V(C) {
    (C.key === 'Enter' || C.key === ' ') && (C.preventDefault(), w(C));
   }
   return () => {
    const C = S.isLink.value ? 'a' : e.tag,
     P = !!(e.appendIcon || e.appendAvatar),
     x = !!(P || l.append),
     _ = !!(l.close || e.closable),
     T = !!(l.filter || e.filter) && h,
     A = !!(e.prependIcon || e.prependAvatar),
     p = !!(A || l.prepend),
     F = !h || h.isSelected.value;
    return (
     g.value &&
     Ae(
      u(
       C,
       {
        class: [
         'v-chip',
         {
          'v-chip--disabled': e.disabled,
          'v-chip--label': e.label,
          'v-chip--link': I.value,
          'v-chip--filter': T,
          'v-chip--pill': e.pill,
         },
         b.value,
         o.value,
         F ? r.value : void 0,
         d.value,
         f.value,
         m.value,
         v.value,
         c.value,
         h == null ? void 0 : h.selectedClass.value,
         e.class,
        ],
        style: [F ? s.value : void 0, e.style],
        disabled: e.disabled || void 0,
        draggable: e.draggable,
        href: S.href.value,
        tabindex: I.value ? 0 : void 0,
        onClick: w,
        onKeydown: I.value && !k.value && V,
       },
       {
        default: () => {
         var O;
         return [
          zt(I.value, 'v-chip'),
          T &&
           u(
            hi,
            { key: 'filter' },
            {
             default: () => [
              Ae(
               u('div', { class: 'v-chip__filter' }, [
                l.filter
                 ? u(
                    fe,
                    {
                     key: 'filter-defaults',
                     disabled: !e.filterIcon,
                     defaults: { VIcon: { icon: e.filterIcon } },
                    },
                    l.filter
                   )
                 : u(be, { key: 'filter-icon', icon: e.filterIcon }, null),
               ]),
               [[bt, h.isSelected.value]]
              ),
             ],
            }
           ),
          p &&
           u('div', { key: 'prepend', class: 'v-chip__prepend' }, [
            l.prepend
             ? u(
                fe,
                {
                 key: 'prepend-defaults',
                 disabled: !A,
                 defaults: {
                  VAvatar: { image: e.prependAvatar, start: !0 },
                  VIcon: { icon: e.prependIcon, start: !0 },
                 },
                },
                l.prepend
               )
             : u(ie, null, [
                e.prependIcon && u(be, { key: 'prepend-icon', icon: e.prependIcon, start: !0 }, null),
                e.prependAvatar &&
                 u(vt, { key: 'prepend-avatar', image: e.prependAvatar, start: !0 }, null),
               ]),
           ]),
          u('div', { class: 'v-chip__content', 'data-no-activator': '' }, [
           ((O = l.default) == null
            ? void 0
            : O.call(l, {
               isSelected: h == null ? void 0 : h.isSelected.value,
               selectedClass: h == null ? void 0 : h.selectedClass.value,
               select: h == null ? void 0 : h.select,
               toggle: h == null ? void 0 : h.toggle,
               value: h == null ? void 0 : h.value.value,
               disabled: e.disabled,
              })) ?? e.text,
          ]),
          x &&
           u('div', { key: 'append', class: 'v-chip__append' }, [
            l.append
             ? u(
                fe,
                {
                 key: 'append-defaults',
                 disabled: !P,
                 defaults: {
                  VAvatar: { end: !0, image: e.appendAvatar },
                  VIcon: { end: !0, icon: e.appendIcon },
                 },
                },
                l.append
               )
             : u(ie, null, [
                e.appendIcon && u(be, { key: 'append-icon', end: !0, icon: e.appendIcon }, null),
                e.appendAvatar && u(vt, { key: 'append-avatar', end: !0, image: e.appendAvatar }, null),
               ]),
           ]),
          _ &&
           u('button', z({ key: 'close', class: 'v-chip__close', type: 'button' }, B.value), [
            l.close
             ? u(
                fe,
                { key: 'close-defaults', defaults: { VIcon: { icon: e.closeIcon, size: 'x-small' } } },
                l.close
               )
             : u(be, { key: 'close-icon', icon: e.closeIcon, size: 'x-small' }, null),
           ]),
         ];
        },
       }
      ),
      [[ot('ripple'), I.value && e.ripple, null]]
     )
    );
   };
  },
 }),
 El = Symbol.for('vuetify:list');
function xu() {
 const e = ge(El, { hasPrepend: K(!1), updateHasPrepend: () => null }),
  n = {
   hasPrepend: K(!1),
   updateHasPrepend: (t) => {
    t && (n.hasPrepend.value = t);
   },
  };
 return Ie(El, n), e;
}
function wu() {
 return ge(El, null);
}
const Vi = (e) => {
  const n = {
   activate: (t) => {
    let { id: a, value: l, activated: i } = t;
    return (a = tt(a)), (e && !l && i.size === 1 && i.has(a)) || (l ? i.add(a) : i.delete(a)), i;
   },
   in: (t, a, l) => {
    let i = new Set();
    if (t != null)
     for (const o of Te(t))
      i = n.activate({ id: o, value: !0, activated: new Set(i), children: a, parents: l });
    return i;
   },
   out: (t) => Array.from(t),
  };
  return n;
 },
 Cu = (e) => {
  const n = Vi(e);
  return {
   activate: (a) => {
    let { activated: l, id: i, ...o } = a;
    i = tt(i);
    const r = l.has(i) ? new Set([i]) : new Set();
    return n.activate({ ...o, id: i, activated: r });
   },
   in: (a, l, i) => {
    let o = new Set();
    if (a != null) {
     const r = Te(a);
     r.length && (o = n.in(r.slice(0, 1), l, i));
    }
    return o;
   },
   out: (a, l, i) => n.out(a, l, i),
  };
 },
 lf = (e) => {
  const n = Vi(e);
  return {
   activate: (a) => {
    let { id: l, activated: i, children: o, ...r } = a;
    return (l = tt(l)), o.has(l) ? i : n.activate({ id: l, activated: i, children: o, ...r });
   },
   in: n.in,
   out: n.out,
  };
 },
 of = (e) => {
  const n = Cu(e);
  return {
   activate: (a) => {
    let { id: l, activated: i, children: o, ...r } = a;
    return (l = tt(l)), o.has(l) ? i : n.activate({ id: l, activated: i, children: o, ...r });
   },
   in: n.in,
   out: n.out,
  };
 },
 rf = {
  open: (e) => {
   let { id: n, value: t, opened: a, parents: l } = e;
   if (t) {
    const i = new Set();
    i.add(n);
    let o = l.get(n);
    for (; o != null; ) i.add(o), (o = l.get(o));
    return i;
   } else return a.delete(n), a;
  },
  select: () => null,
 },
 Vu = {
  open: (e) => {
   let { id: n, value: t, opened: a, parents: l } = e;
   if (t) {
    let i = l.get(n);
    for (a.add(n); i != null && i !== n; ) a.add(i), (i = l.get(i));
    return a;
   } else a.delete(n);
   return a;
  },
  select: () => null,
 },
 uf = {
  open: Vu.open,
  select: (e) => {
   let { id: n, value: t, opened: a, parents: l } = e;
   if (!t) return a;
   const i = [];
   let o = l.get(n);
   for (; o != null; ) i.push(o), (o = l.get(o));
   return new Set(i);
  },
 },
 Pi = (e) => {
  const n = {
   select: (t) => {
    let { id: a, value: l, selected: i } = t;
    if (((a = tt(a)), e && !l)) {
     const o = Array.from(i.entries()).reduce((r, s) => {
      let [c, d] = s;
      return d === 'on' && r.push(c), r;
     }, []);
     if (o.length === 1 && o[0] === a) return i;
    }
    return i.set(a, l ? 'on' : 'off'), i;
   },
   in: (t, a, l) => {
    let i = new Map();
    for (const o of t || [])
     i = n.select({ id: o, value: !0, selected: new Map(i), children: a, parents: l });
    return i;
   },
   out: (t) => {
    const a = [];
    for (const [l, i] of t.entries()) i === 'on' && a.push(l);
    return a;
   },
  };
  return n;
 },
 Pu = (e) => {
  const n = Pi(e);
  return {
   select: (a) => {
    let { selected: l, id: i, ...o } = a;
    i = tt(i);
    const r = l.has(i) ? new Map([[i, l.get(i)]]) : new Map();
    return n.select({ ...o, id: i, selected: r });
   },
   in: (a, l, i) => {
    let o = new Map();
    return a != null && a.length && (o = n.in(a.slice(0, 1), l, i)), o;
   },
   out: (a, l, i) => n.out(a, l, i),
  };
 },
 sf = (e) => {
  const n = Pi(e);
  return {
   select: (a) => {
    let { id: l, selected: i, children: o, ...r } = a;
    return (l = tt(l)), o.has(l) ? i : n.select({ id: l, selected: i, children: o, ...r });
   },
   in: n.in,
   out: n.out,
  };
 },
 cf = (e) => {
  const n = Pu(e);
  return {
   select: (a) => {
    let { id: l, selected: i, children: o, ...r } = a;
    return (l = tt(l)), o.has(l) ? i : n.select({ id: l, selected: i, children: o, ...r });
   },
   in: n.in,
   out: n.out,
  };
 },
 df = (e) => {
  const n = {
   select: (t) => {
    let { id: a, value: l, selected: i, children: o, parents: r } = t;
    a = tt(a);
    const s = new Map(i),
     c = [a];
    for (; c.length; ) {
     const f = c.shift();
     i.set(f, l ? 'on' : 'off'), o.has(f) && c.push(...o.get(f));
    }
    let d = r.get(a);
    for (; d; ) {
     const f = o.get(d),
      m = f.every((b) => i.get(b) === 'on'),
      v = f.every((b) => !i.has(b) || i.get(b) === 'off');
     i.set(d, m ? 'on' : v ? 'off' : 'indeterminate'), (d = r.get(d));
    }
    return e &&
     !l &&
     Array.from(i.entries()).reduce((m, v) => {
      let [b, g] = v;
      return g === 'on' && m.push(b), m;
     }, []).length === 0
     ? s
     : i;
   },
   in: (t, a, l) => {
    let i = new Map();
    for (const o of t || [])
     i = n.select({ id: o, value: !0, selected: new Map(i), children: a, parents: l });
    return i;
   },
   out: (t, a) => {
    const l = [];
    for (const [i, o] of t.entries()) o === 'on' && !a.has(i) && l.push(i);
    return l;
   },
  };
  return n;
 },
 qn = Symbol.for('vuetify:nested'),
 Iu = {
  id: K(),
  root: {
   register: () => null,
   unregister: () => null,
   parents: j(new Map()),
   children: j(new Map()),
   open: () => null,
   openOnSelect: () => null,
   activate: () => null,
   select: () => null,
   activatable: j(!1),
   selectable: j(!1),
   opened: j(new Set()),
   activated: j(new Set()),
   selected: j(new Map()),
   selectedValues: j([]),
  },
 },
 vf = D(
  {
   activatable: Boolean,
   selectable: Boolean,
   activeStrategy: [String, Function, Object],
   selectStrategy: [String, Function, Object],
   openStrategy: [String, Object],
   opened: null,
   activated: null,
   selected: null,
   mandatory: Boolean,
  },
  'nested'
 ),
 ff = (e) => {
  let n = !1;
  const t = j(new Map()),
   a = j(new Map()),
   l = le(
    e,
    'opened',
    e.opened,
    (v) => new Set(v),
    (v) => [...v.values()]
   ),
   i = y(() => {
    if (typeof e.activeStrategy == 'object') return e.activeStrategy;
    if (typeof e.activeStrategy == 'function') return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
     case 'leaf':
      return lf(e.mandatory);
     case 'single-leaf':
      return of(e.mandatory);
     case 'independent':
      return Vi(e.mandatory);
     case 'single-independent':
     default:
      return Cu(e.mandatory);
    }
   }),
   o = y(() => {
    if (typeof e.selectStrategy == 'object') return e.selectStrategy;
    if (typeof e.selectStrategy == 'function') return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
     case 'single-leaf':
      return cf(e.mandatory);
     case 'leaf':
      return sf(e.mandatory);
     case 'independent':
      return Pi(e.mandatory);
     case 'single-independent':
      return Pu(e.mandatory);
     case 'classic':
     default:
      return df(e.mandatory);
    }
   }),
   r = y(() => {
    if (typeof e.openStrategy == 'object') return e.openStrategy;
    switch (e.openStrategy) {
     case 'list':
      return uf;
     case 'single':
      return rf;
     case 'multiple':
     default:
      return Vu;
    }
   }),
   s = le(
    e,
    'activated',
    e.activated,
    (v) => i.value.in(v, t.value, a.value),
    (v) => i.value.out(v, t.value, a.value)
   ),
   c = le(
    e,
    'selected',
    e.selected,
    (v) => o.value.in(v, t.value, a.value),
    (v) => o.value.out(v, t.value, a.value)
   );
  nt(() => {
   n = !0;
  });
  function d(v) {
   const b = [];
   let g = v;
   for (; g != null; ) b.unshift(g), (g = a.value.get(g));
   return b;
  }
  const f = Me('nested'),
   m = {
    id: K(),
    root: {
     opened: l,
     activatable: M(e, 'activatable'),
     selectable: M(e, 'selectable'),
     activated: s,
     selected: c,
     selectedValues: y(() => {
      const v = [];
      for (const [b, g] of c.value.entries()) g === 'on' && v.push(b);
      return v;
     }),
     register: (v, b, g) => {
      b && v !== b && a.value.set(v, b),
       g && t.value.set(v, []),
       b != null && t.value.set(b, [...(t.value.get(b) || []), v]);
     },
     unregister: (v) => {
      if (n) return;
      t.value.delete(v);
      const b = a.value.get(v);
      if (b) {
       const g = t.value.get(b) ?? [];
       t.value.set(
        b,
        g.filter((h) => h !== v)
       );
      }
      a.value.delete(v), l.value.delete(v);
     },
     open: (v, b, g) => {
      f.emit('click:open', { id: v, value: b, path: d(v), event: g });
      const h = r.value.open({
       id: v,
       value: b,
       opened: new Set(l.value),
       children: t.value,
       parents: a.value,
       event: g,
      });
      h && (l.value = h);
     },
     openOnSelect: (v, b, g) => {
      const h = r.value.select({
       id: v,
       value: b,
       selected: new Map(c.value),
       opened: new Set(l.value),
       children: t.value,
       parents: a.value,
       event: g,
      });
      h && (l.value = h);
     },
     select: (v, b, g) => {
      f.emit('click:select', { id: v, value: b, path: d(v), event: g });
      const h = o.value.select({
       id: v,
       value: b,
       selected: new Map(c.value),
       children: t.value,
       parents: a.value,
       event: g,
      });
      h && (c.value = h), m.root.openOnSelect(v, b, g);
     },
     activate: (v, b, g) => {
      if (!e.activatable) return m.root.select(v, !0, g);
      f.emit('click:activate', { id: v, value: b, path: d(v), event: g });
      const h = i.value.activate({
       id: v,
       value: b,
       activated: new Set(s.value),
       children: t.value,
       parents: a.value,
       event: g,
      });
      h && (s.value = h);
     },
     children: t,
     parents: a,
    },
   };
  return Ie(qn, m), m.root;
 },
 _u = (e, n) => {
  const t = ge(qn, Iu),
   a = Symbol(je()),
   l = y(() => (e.value !== void 0 ? e.value : a)),
   i = {
    ...t,
    id: l,
    open: (o, r) => t.root.open(l.value, o, r),
    openOnSelect: (o, r) => t.root.openOnSelect(l.value, o, r),
    isOpen: y(() => t.root.opened.value.has(l.value)),
    parent: y(() => t.root.parents.value.get(l.value)),
    activate: (o, r) => t.root.activate(l.value, o, r),
    isActivated: y(() => t.root.activated.value.has(tt(l.value))),
    select: (o, r) => t.root.select(l.value, o, r),
    isSelected: y(() => t.root.selected.value.get(tt(l.value)) === 'on'),
    isIndeterminate: y(() => t.root.selected.value.get(l.value) === 'indeterminate'),
    isLeaf: y(() => !t.root.children.value.get(l.value)),
    isGroupActivator: t.isGroupActivator,
   };
  return (
   !t.isGroupActivator && t.root.register(l.value, t.id.value, n),
   nt(() => {
    !t.isGroupActivator && t.root.unregister(l.value);
   }),
   n && Ie(qn, i),
   i
  );
 },
 mf = () => {
  const e = ge(qn, Iu);
  Ie(qn, { ...e, isGroupActivator: !0 });
 },
 gf = rt({
  name: 'VListGroupActivator',
  setup(e, n) {
   let { slots: t } = n;
   return (
    mf(),
    () => {
     var a;
     return (a = t.default) == null ? void 0 : a.call(t);
    }
   );
  },
 }),
 hf = D(
  {
   activeColor: String,
   baseColor: String,
   color: String,
   collapseIcon: { type: ue, default: '$collapse' },
   expandIcon: { type: ue, default: '$expand' },
   prependIcon: ue,
   appendIcon: ue,
   fluid: Boolean,
   subgroup: Boolean,
   title: String,
   value: null,
   ...J(),
   ...de(),
  },
  'VListGroup'
 ),
 Ml = $()({
  name: 'VListGroup',
  props: hf(),
  setup(e, n) {
   let { slots: t } = n;
   const { isOpen: a, open: l, id: i } = _u(M(e, 'value'), !0),
    o = y(() => `v-list-group--id-${String(i.value)}`),
    r = wu(),
    { isBooted: s } = un();
   function c(v) {
    v.stopPropagation(), l(!a.value, v);
   }
   const d = y(() => ({ onClick: c, class: 'v-list-group__header', id: o.value })),
    f = y(() => (a.value ? e.collapseIcon : e.expandIcon)),
    m = y(() => ({
     VListItem: {
      active: a.value,
      activeColor: e.activeColor,
      baseColor: e.baseColor,
      color: e.color,
      prependIcon: e.prependIcon || (e.subgroup && f.value),
      appendIcon: e.appendIcon || (!e.subgroup && f.value),
      title: e.title,
      value: e.value,
     },
    }));
   return (
    R(() =>
     u(
      e.tag,
      {
       class: [
        'v-list-group',
        {
         'v-list-group--prepend': r == null ? void 0 : r.hasPrepend.value,
         'v-list-group--fluid': e.fluid,
         'v-list-group--subgroup': e.subgroup,
         'v-list-group--open': a.value,
        },
        e.class,
       ],
       style: e.style,
      },
      {
       default: () => [
        t.activator &&
         u(
          fe,
          { defaults: m.value },
          {
           default: () => [
            u(gf, null, { default: () => [t.activator({ props: d.value, isOpen: a.value })] }),
           ],
          }
         ),
        u(
         Xe,
         { transition: { component: Fa }, disabled: !s.value },
         {
          default: () => {
           var v;
           return [
            Ae(
             u('div', { class: 'v-list-group__items', role: 'group', 'aria-labelledby': o.value }, [
              (v = t.default) == null ? void 0 : v.call(t),
             ]),
             [[bt, a.value]]
            ),
           ];
          },
         }
        ),
       ],
      }
     )
    ),
    { isOpen: a }
   );
  },
 }),
 yf = D({ opacity: [Number, String], ...J(), ...de() }, 'VListItemSubtitle'),
 Tu = $()({
  name: 'VListItemSubtitle',
  props: yf(),
  setup(e, n) {
   let { slots: t } = n;
   return (
    R(() =>
     u(
      e.tag,
      {
       class: ['v-list-item-subtitle', e.class],
       style: [{ '--v-list-item-subtitle-opacity': e.opacity }, e.style],
      },
      t
     )
    ),
    {}
   );
  },
 }),
 Au = Pt('v-list-item-title'),
 bf = D(
  {
   active: { type: Boolean, default: void 0 },
   activeClass: String,
   activeColor: String,
   appendAvatar: String,
   appendIcon: ue,
   baseColor: String,
   disabled: Boolean,
   lines: [Boolean, String],
   link: { type: Boolean, default: void 0 },
   nav: Boolean,
   prependAvatar: String,
   prependIcon: ue,
   ripple: { type: [Boolean, Object], default: !0 },
   slim: Boolean,
   subtitle: [String, Number],
   title: [String, Number],
   value: null,
   onClick: We(),
   onClickOnce: We(),
   ...st(),
   ...J(),
   ...He(),
   ...Ne(),
   ...Oe(),
   ..._e(),
   ...na(),
   ...de(),
   ...me(),
   ...mt({ variant: 'text' }),
  },
  'VListItem'
 ),
 Bt = $()({
  name: 'VListItem',
  directives: { Ripple: pt },
  props: bf(),
  emits: { click: (e) => !0 },
  setup(e, n) {
   let { attrs: t, slots: a, emit: l } = n;
   const i = ta(e, t),
    o = y(() => (e.value === void 0 ? i.href.value : e.value)),
    {
     activate: r,
     isActivated: s,
     select: c,
     isSelected: d,
     isIndeterminate: f,
     isGroupActivator: m,
     root: v,
     parent: b,
     openOnSelect: g,
    } = _u(o, !1),
    h = wu(),
    S = y(() => {
     var E;
     return (
      e.active !== !1 &&
      (e.active ||
       ((E = i.isActive) == null ? void 0 : E.value) ||
       (v.activatable.value ? s.value : d.value))
     );
    }),
    k = y(() => e.link !== !1 && i.isLink.value),
    I = y(
     () =>
      !e.disabled &&
      e.link !== !1 &&
      (e.link ||
       i.isClickable.value ||
       (!!h && (v.selectable.value || v.activatable.value || e.value != null)))
    ),
    B = y(() => e.rounded || e.nav),
    w = y(() => e.color ?? e.activeColor),
    V = y(() => ({ color: S.value ? w.value ?? e.baseColor : e.baseColor, variant: e.variant }));
   X(
    () => {
     var E;
     return (E = i.isActive) == null ? void 0 : E.value;
    },
    (E) => {
     E && b.value != null && v.open(b.value, !0), E && g(E);
    },
    { immediate: !0 }
   );
   const { themeClasses: C } = Se(e),
    { borderClasses: P } = ft(e),
    { colorClasses: x, colorStyles: _, variantClasses: T } = sn(V),
    { densityClasses: A } = Je(e),
    { dimensionStyles: p } = ze(e),
    { elevationClasses: F } = Ye(e),
    { roundedClasses: O } = De(B),
    W = y(() => (e.lines ? `v-list-item--${e.lines}-line` : void 0)),
    te = y(() => ({ isActive: S.value, select: c, isSelected: d.value, isIndeterminate: f.value }));
   function N(E) {
    var L;
    l('click', E),
     I.value &&
      ((L = i.navigate) == null || L.call(i, E),
      !m &&
       (v.activatable.value
        ? r(!s.value, E)
        : (v.selectable.value || e.value != null) && c(!d.value, E)));
   }
   function H(E) {
    (E.key === 'Enter' || E.key === ' ') && (E.preventDefault(), N(E));
   }
   return (
    R(() => {
     const E = k.value ? 'a' : e.tag,
      L = a.title || e.title != null,
      G = a.subtitle || e.subtitle != null,
      ae = !!(e.appendAvatar || e.appendIcon),
      oe = !!(ae || a.append),
      q = !!(e.prependAvatar || e.prependIcon),
      Y = !!(q || a.prepend);
     return (
      h == null || h.updateHasPrepend(Y),
      e.activeColor && id('active-color', ['color', 'base-color']),
      Ae(
       u(
        E,
        {
         class: [
          'v-list-item',
          {
           'v-list-item--active': S.value,
           'v-list-item--disabled': e.disabled,
           'v-list-item--link': I.value,
           'v-list-item--nav': e.nav,
           'v-list-item--prepend': !Y && (h == null ? void 0 : h.hasPrepend.value),
           'v-list-item--slim': e.slim,
           [`${e.activeClass}`]: e.activeClass && S.value,
          },
          C.value,
          P.value,
          x.value,
          A.value,
          F.value,
          W.value,
          O.value,
          T.value,
          e.class,
         ],
         style: [_.value, p.value, e.style],
         href: i.href.value,
         tabindex: I.value ? (h ? -2 : 0) : void 0,
         onClick: N,
         onKeydown: I.value && !k.value && H,
        },
        {
         default: () => {
          var Q;
          return [
           zt(I.value || S.value, 'v-list-item'),
           Y &&
            u('div', { key: 'prepend', class: 'v-list-item__prepend' }, [
             a.prepend
              ? u(
                 fe,
                 {
                  key: 'prepend-defaults',
                  disabled: !q,
                  defaults: {
                   VAvatar: { density: e.density, image: e.prependAvatar },
                   VIcon: { density: e.density, icon: e.prependIcon },
                   VListItemAction: { start: !0 },
                  },
                 },
                 {
                  default: () => {
                   var xe;
                   return [(xe = a.prepend) == null ? void 0 : xe.call(a, te.value)];
                  },
                 }
                )
              : u(ie, null, [
                 e.prependAvatar &&
                  u(vt, { key: 'prepend-avatar', density: e.density, image: e.prependAvatar }, null),
                 e.prependIcon &&
                  u(be, { key: 'prepend-icon', density: e.density, icon: e.prependIcon }, null),
                ]),
             u('div', { class: 'v-list-item__spacer' }, null),
            ]),
           u('div', { class: 'v-list-item__content', 'data-no-activator': '' }, [
            L &&
             u(
              Au,
              { key: 'title' },
              {
               default: () => {
                var xe;
                return [((xe = a.title) == null ? void 0 : xe.call(a, { title: e.title })) ?? e.title];
               },
              }
             ),
            G &&
             u(
              Tu,
              { key: 'subtitle' },
              {
               default: () => {
                var xe;
                return [
                 ((xe = a.subtitle) == null ? void 0 : xe.call(a, { subtitle: e.subtitle })) ??
                  e.subtitle,
                ];
               },
              }
             ),
            (Q = a.default) == null ? void 0 : Q.call(a, te.value),
           ]),
           oe &&
            u('div', { key: 'append', class: 'v-list-item__append' }, [
             a.append
              ? u(
                 fe,
                 {
                  key: 'append-defaults',
                  disabled: !ae,
                  defaults: {
                   VAvatar: { density: e.density, image: e.appendAvatar },
                   VIcon: { density: e.density, icon: e.appendIcon },
                   VListItemAction: { end: !0 },
                  },
                 },
                 {
                  default: () => {
                   var xe;
                   return [(xe = a.append) == null ? void 0 : xe.call(a, te.value)];
                  },
                 }
                )
              : u(ie, null, [
                 e.appendIcon &&
                  u(be, { key: 'append-icon', density: e.density, icon: e.appendIcon }, null),
                 e.appendAvatar &&
                  u(vt, { key: 'append-avatar', density: e.density, image: e.appendAvatar }, null),
                ]),
             u('div', { class: 'v-list-item__spacer' }, null),
            ]),
          ];
         },
        }
       ),
       [[ot('ripple'), I.value && e.ripple]]
      )
     );
    }),
    { activate: r, isActivated: s, isGroupActivator: m, isSelected: d, list: h, select: c }
   );
  },
 }),
 Sf = D(
  { color: String, inset: Boolean, sticky: Boolean, title: String, ...J(), ...de() },
  'VListSubheader'
 ),
 Bu = $()({
  name: 'VListSubheader',
  props: Sf(),
  setup(e, n) {
   let { slots: t } = n;
   const { textColorClasses: a, textColorStyles: l } = Ge(M(e, 'color'));
   return (
    R(() => {
     const i = !!(t.default || e.title);
     return u(
      e.tag,
      {
       class: [
        'v-list-subheader',
        { 'v-list-subheader--inset': e.inset, 'v-list-subheader--sticky': e.sticky },
        a.value,
        e.class,
       ],
       style: [{ textColorStyles: l }, e.style],
      },
      {
       default: () => {
        var o;
        return [
         i &&
          u('div', { class: 'v-list-subheader__text' }, [
           ((o = t.default) == null ? void 0 : o.call(t)) ?? e.title,
          ]),
        ];
       },
      }
     );
    }),
    {}
   );
  },
 }),
 kf = D(
  {
   color: String,
   inset: Boolean,
   length: [Number, String],
   opacity: [Number, String],
   thickness: [Number, String],
   vertical: Boolean,
   ...J(),
   ...me(),
  },
  'VDivider'
 ),
 la = $()({
  name: 'VDivider',
  props: kf(),
  setup(e, n) {
   let { attrs: t, slots: a } = n;
   const { themeClasses: l } = Se(e),
    { textColorClasses: i, textColorStyles: o } = Ge(M(e, 'color')),
    r = y(() => {
     const s = {};
     return (
      e.length && (s[e.vertical ? 'height' : 'width'] = Z(e.length)),
      e.thickness && (s[e.vertical ? 'borderRightWidth' : 'borderTopWidth'] = Z(e.thickness)),
      s
     );
    });
   return (
    R(() => {
     const s = u(
      'hr',
      {
       class: [
        { 'v-divider': !0, 'v-divider--inset': e.inset, 'v-divider--vertical': e.vertical },
        l.value,
        i.value,
        e.class,
       ],
       style: [r.value, o.value, { '--v-border-opacity': e.opacity }, e.style],
       'aria-orientation':
        !t.role || t.role === 'separator' ? (e.vertical ? 'vertical' : 'horizontal') : void 0,
       role: `${t.role || 'separator'}`,
      },
      null
     );
     return a.default
      ? u(
         'div',
         {
          class: [
           'v-divider__wrapper',
           { 'v-divider__wrapper--vertical': e.vertical, 'v-divider__wrapper--inset': e.inset },
          ],
         },
         [s, u('div', { class: 'v-divider__content' }, [a.default()]), s]
        )
      : s;
    }),
    {}
   );
  },
 }),
 xf = D({ items: Array, returnObject: Boolean }, 'VListChildren'),
 Du = $()({
  name: 'VListChildren',
  props: xf(),
  setup(e, n) {
   let { slots: t } = n;
   return (
    xu(),
    () => {
     var a, l;
     return (
      ((a = t.default) == null ? void 0 : a.call(t)) ??
      ((l = e.items) == null
       ? void 0
       : l.map((i) => {
          var m, v;
          let { children: o, props: r, type: s, raw: c } = i;
          if (s === 'divider')
           return ((m = t.divider) == null ? void 0 : m.call(t, { props: r })) ?? u(la, r, null);
          if (s === 'subheader')
           return ((v = t.subheader) == null ? void 0 : v.call(t, { props: r })) ?? u(Bu, r, null);
          const d = {
            subtitle: t.subtitle
             ? (b) => {
                var g;
                return (g = t.subtitle) == null ? void 0 : g.call(t, { ...b, item: c });
               }
             : void 0,
            prepend: t.prepend
             ? (b) => {
                var g;
                return (g = t.prepend) == null ? void 0 : g.call(t, { ...b, item: c });
               }
             : void 0,
            append: t.append
             ? (b) => {
                var g;
                return (g = t.append) == null ? void 0 : g.call(t, { ...b, item: c });
               }
             : void 0,
            title: t.title
             ? (b) => {
                var g;
                return (g = t.title) == null ? void 0 : g.call(t, { ...b, item: c });
               }
             : void 0,
           },
           f = Ml.filterProps(r);
          return o
           ? u(Ml, z({ value: r == null ? void 0 : r.value }, f), {
              activator: (b) => {
               let { props: g } = b;
               const h = { ...r, ...g, value: e.returnObject ? c : r.value };
               return t.header ? t.header({ props: h }) : u(Bt, h, d);
              },
              default: () => u(Du, { items: o, returnObject: e.returnObject }, t),
             })
           : t.item
             ? t.item({ props: r })
             : u(Bt, z(r, { value: e.returnObject ? c : r.value }), d);
         }))
     );
    }
   );
  },
 }),
 pu = D(
  {
   items: { type: Array, default: () => [] },
   itemTitle: { type: [String, Array, Function], default: 'title' },
   itemValue: { type: [String, Array, Function], default: 'value' },
   itemChildren: { type: [Boolean, String, Array, Function], default: 'children' },
   itemProps: { type: [Boolean, String, Array, Function], default: 'props' },
   returnObject: Boolean,
   valueComparator: { type: Function, default: Ct },
  },
  'list-items'
 );
function $t(e, n) {
 const t = Le(n, e.itemTitle, n),
  a = Le(n, e.itemValue, t),
  l = Le(n, e.itemChildren),
  i =
   e.itemProps === !0
    ? typeof n == 'object' && n != null && !Array.isArray(n)
      ? 'children' in n
        ? Ee(n, ['children'])
        : n
      : void 0
    : Le(n, e.itemProps),
  o = { title: t, value: a, ...i };
 return {
  title: String(o.title ?? ''),
  value: o.value,
  props: o,
  children: Array.isArray(l) ? Eu(e, l) : void 0,
  raw: n,
 };
}
function Eu(e, n) {
 const t = [];
 for (const a of n) t.push($t(e, a));
 return t;
}
function Ii(e) {
 const n = y(() => Eu(e, e.items)),
  t = y(() => n.value.some((i) => i.value === null));
 function a(i) {
  return (
   t.value || (i = i.filter((o) => o !== null)),
   i.map((o) =>
    e.returnObject && typeof o == 'string'
     ? $t(e, o)
     : n.value.find((r) => e.valueComparator(o, r.value)) || $t(e, o)
   )
  );
 }
 function l(i) {
  return e.returnObject
   ? i.map((o) => {
      let { raw: r } = o;
      return r;
     })
   : i.map((o) => {
      let { value: r } = o;
      return r;
     });
 }
 return { items: n, transformIn: a, transformOut: l };
}
function wf(e) {
 return typeof e == 'string' || typeof e == 'number' || typeof e == 'boolean';
}
function Cf(e, n) {
 const t = Le(n, e.itemType, 'item'),
  a = wf(n) ? n : Le(n, e.itemTitle),
  l = Le(n, e.itemValue, void 0),
  i = Le(n, e.itemChildren),
  o = e.itemProps === !0 ? Ee(n, ['children']) : Le(n, e.itemProps),
  r = { title: a, value: l, ...o };
 return {
  type: t,
  title: r.title,
  value: r.value,
  props: r,
  children: t === 'item' && i ? Mu(e, i) : void 0,
  raw: n,
 };
}
function Mu(e, n) {
 const t = [];
 for (const a of n) t.push(Cf(e, a));
 return t;
}
function Vf(e) {
 return { items: y(() => Mu(e, e.items)) };
}
const Pf = D(
  {
   baseColor: String,
   activeColor: String,
   activeClass: String,
   bgColor: String,
   disabled: Boolean,
   expandIcon: String,
   collapseIcon: String,
   lines: { type: [Boolean, String], default: 'one' },
   slim: Boolean,
   nav: Boolean,
   'onClick:open': We(),
   'onClick:select': We(),
   'onUpdate:opened': We(),
   ...vf({ selectStrategy: 'single-leaf', openStrategy: 'list' }),
   ...st(),
   ...J(),
   ...He(),
   ...Ne(),
   ...Oe(),
   itemType: { type: String, default: 'type' },
   ...pu(),
   ..._e(),
   ...de(),
   ...me(),
   ...mt({ variant: 'text' }),
  },
  'VList'
 ),
 Ya = $()({
  name: 'VList',
  props: Pf(),
  emits: {
   'update:selected': (e) => !0,
   'update:activated': (e) => !0,
   'update:opened': (e) => !0,
   'click:open': (e) => !0,
   'click:activate': (e) => !0,
   'click:select': (e) => !0,
  },
  setup(e, n) {
   let { slots: t } = n;
   const { items: a } = Vf(e),
    { themeClasses: l } = Se(e),
    { backgroundColorClasses: i, backgroundColorStyles: o } = we(M(e, 'bgColor')),
    { borderClasses: r } = ft(e),
    { densityClasses: s } = Je(e),
    { dimensionStyles: c } = ze(e),
    { elevationClasses: d } = Ye(e),
    { roundedClasses: f } = De(e),
    { children: m, open: v, parents: b, select: g } = ff(e),
    h = y(() => (e.lines ? `v-list--${e.lines}-line` : void 0)),
    S = M(e, 'activeColor'),
    k = M(e, 'baseColor'),
    I = M(e, 'color');
   xu(),
    Be({
     VListGroup: {
      activeColor: S,
      baseColor: k,
      color: I,
      expandIcon: M(e, 'expandIcon'),
      collapseIcon: M(e, 'collapseIcon'),
     },
     VListItem: {
      activeClass: M(e, 'activeClass'),
      activeColor: S,
      baseColor: k,
      color: I,
      density: M(e, 'density'),
      disabled: M(e, 'disabled'),
      lines: M(e, 'lines'),
      nav: M(e, 'nav'),
      slim: M(e, 'slim'),
      variant: M(e, 'variant'),
     },
    });
   const B = K(!1),
    w = j();
   function V(A) {
    B.value = !0;
   }
   function C(A) {
    B.value = !1;
   }
   function P(A) {
    var p;
    !B.value && !(A.relatedTarget && (p = w.value) != null && p.contains(A.relatedTarget)) && T();
   }
   function x(A) {
    const p = A.target;
    if (!(!w.value || ['INPUT', 'TEXTAREA'].includes(p.tagName))) {
     if (A.key === 'ArrowDown') T('next');
     else if (A.key === 'ArrowUp') T('prev');
     else if (A.key === 'Home') T('first');
     else if (A.key === 'End') T('last');
     else return;
     A.preventDefault();
    }
   }
   function _(A) {
    B.value = !0;
   }
   function T(A) {
    if (w.value) return Cn(w.value, A);
   }
   return (
    R(() =>
     u(
      e.tag,
      {
       ref: w,
       class: [
        'v-list',
        { 'v-list--disabled': e.disabled, 'v-list--nav': e.nav, 'v-list--slim': e.slim },
        l.value,
        i.value,
        r.value,
        s.value,
        d.value,
        h.value,
        f.value,
        e.class,
       ],
       style: [o.value, c.value, e.style],
       tabindex: e.disabled || B.value ? -1 : 0,
       role: 'listbox',
       'aria-activedescendant': void 0,
       onFocusin: V,
       onFocusout: C,
       onFocus: P,
       onKeydown: x,
       onMousedown: _,
      },
      { default: () => [u(Du, { items: a.value, returnObject: e.returnObject }, t)] }
     )
    ),
    { open: v, select: g, focus: T, children: m, parents: b }
   );
  },
 }),
 If = Pt('v-list-img'),
 _f = D({ start: Boolean, end: Boolean, ...J(), ...de() }, 'VListItemAction'),
 Tf = $()({
  name: 'VListItemAction',
  props: _f(),
  setup(e, n) {
   let { slots: t } = n;
   return (
    R(() =>
     u(
      e.tag,
      {
       class: [
        'v-list-item-action',
        { 'v-list-item-action--start': e.start, 'v-list-item-action--end': e.end },
        e.class,
       ],
       style: e.style,
      },
      t
     )
    ),
    {}
   );
  },
 }),
 Af = D({ start: Boolean, end: Boolean, ...J(), ...de() }, 'VListItemMedia'),
 Bf = $()({
  name: 'VListItemMedia',
  props: Af(),
  setup(e, n) {
   let { slots: t } = n;
   return (
    R(() =>
     u(
      e.tag,
      {
       class: [
        'v-list-item-media',
        { 'v-list-item-media--start': e.start, 'v-list-item-media--end': e.end },
        e.class,
       ],
       style: e.style,
      },
      t
     )
    ),
    {}
   );
  },
 });
function ml(e, n) {
 return { x: e.x + n.x, y: e.y + n.y };
}
function Df(e, n) {
 return { x: e.x - n.x, y: e.y - n.y };
}
function No(e, n) {
 if (e.side === 'top' || e.side === 'bottom') {
  const { side: t, align: a } = e,
   l = a === 'left' ? 0 : a === 'center' ? n.width / 2 : a === 'right' ? n.width : a,
   i = t === 'top' ? 0 : t === 'bottom' ? n.height : t;
  return ml({ x: l, y: i }, n);
 } else if (e.side === 'left' || e.side === 'right') {
  const { side: t, align: a } = e,
   l = t === 'left' ? 0 : t === 'right' ? n.width : t,
   i = a === 'top' ? 0 : a === 'center' ? n.height / 2 : a === 'bottom' ? n.height : a;
  return ml({ x: l, y: i }, n);
 }
 return ml({ x: n.width / 2, y: n.height / 2 }, n);
}
const $u = { static: Mf, connected: Ff },
 pf = D(
  {
   locationStrategy: {
    type: [String, Function],
    default: 'static',
    validator: (e) => typeof e == 'function' || e in $u,
   },
   location: { type: String, default: 'bottom' },
   origin: { type: String, default: 'auto' },
   offset: [Number, String, Array],
  },
  'VOverlay-location-strategies'
 );
function Ef(e, n) {
 const t = j({}),
  a = j();
 ke &&
  lt(
   () => !!(n.isActive.value && e.locationStrategy),
   (i) => {
    var o, r;
    X(() => e.locationStrategy, i),
     Ze(() => {
      window.removeEventListener('resize', l), (a.value = void 0);
     }),
     window.addEventListener('resize', l, { passive: !0 }),
     typeof e.locationStrategy == 'function'
      ? (a.value = (o = e.locationStrategy(n, e, t)) == null ? void 0 : o.updateLocation)
      : (a.value = (r = $u[e.locationStrategy](n, e, t)) == null ? void 0 : r.updateLocation);
   }
  );
 function l(i) {
  var o;
  (o = a.value) == null || o.call(a, i);
 }
 return { contentStyles: t, updateLocation: a };
}
function Mf() {}
function $f(e, n) {
 n ? e.style.removeProperty('left') : e.style.removeProperty('right');
 const t = ri(e);
 return (
  n ? (t.x += parseFloat(e.style.right || 0)) : (t.x -= parseFloat(e.style.left || 0)),
  (t.y -= parseFloat(e.style.top || 0)),
  t
 );
}
function Ff(e, n, t) {
 (Array.isArray(e.target.value) || Id(e.target.value)) &&
  Object.assign(t.value, { position: 'fixed', top: 0, [e.isRtl.value ? 'right' : 'left']: 0 });
 const { preferredAnchor: l, preferredOrigin: i } = ii(() => {
   const b = xl(n.location, e.isRtl.value),
    g = n.origin === 'overlap' ? b : n.origin === 'auto' ? sl(b) : xl(n.origin, e.isRtl.value);
   return b.side === g.side && b.align === cl(g).align
    ? { preferredAnchor: so(b), preferredOrigin: so(g) }
    : { preferredAnchor: b, preferredOrigin: g };
  }),
  [o, r, s, c] = ['minWidth', 'minHeight', 'maxWidth', 'maxHeight'].map((b) =>
   y(() => {
    const g = parseFloat(n[b]);
    return isNaN(g) ? 1 / 0 : g;
   })
  ),
  d = y(() => {
   if (Array.isArray(n.offset)) return n.offset;
   if (typeof n.offset == 'string') {
    const b = n.offset.split(' ').map(parseFloat);
    return b.length < 2 && b.push(0), b;
   }
   return typeof n.offset == 'number' ? [n.offset, 0] : [0, 0];
  });
 let f = !1;
 const m = new ResizeObserver(() => {
  f && v();
 });
 X(
  [e.target, e.contentEl],
  (b, g) => {
   let [h, S] = b,
    [k, I] = g;
   k && !Array.isArray(k) && m.unobserve(k),
    h && !Array.isArray(h) && m.observe(h),
    I && m.unobserve(I),
    S && m.observe(S);
  },
  { immediate: !0 }
 ),
  Ze(() => {
   m.disconnect();
  });
 function v() {
  if (((f = !1), requestAnimationFrame(() => (f = !0)), !e.target.value || !e.contentEl.value)) return;
  const b = kr(e.target.value),
   g = $f(e.contentEl.value, e.isRtl.value),
   h = Va(e.contentEl.value),
   S = 12;
  h.length ||
   (h.push(document.documentElement),
   (e.contentEl.value.style.top && e.contentEl.value.style.left) ||
    ((g.x -= parseFloat(document.documentElement.style.getPropertyValue('--v-body-scroll-x') || 0)),
    (g.y -= parseFloat(document.documentElement.style.getPropertyValue('--v-body-scroll-y') || 0))));
  const k = h.reduce(
   (T, A) => {
    const p = A.getBoundingClientRect(),
     F = new Xt({
      x: A === document.documentElement ? 0 : p.x,
      y: A === document.documentElement ? 0 : p.y,
      width: A.clientWidth,
      height: A.clientHeight,
     });
    return T
     ? new Xt({
        x: Math.max(T.left, F.left),
        y: Math.max(T.top, F.top),
        width: Math.min(T.right, F.right) - Math.max(T.left, F.left),
        height: Math.min(T.bottom, F.bottom) - Math.max(T.top, F.top),
       })
     : F;
   },
   void 0
  );
  (k.x += S), (k.y += S), (k.width -= S * 2), (k.height -= S * 2);
  let I = { anchor: l.value, origin: i.value };
  function B(T) {
   const A = new Xt(g),
    p = No(T.anchor, b),
    F = No(T.origin, A);
   let { x: O, y: W } = Df(p, F);
   switch (T.anchor.side) {
    case 'top':
     W -= d.value[0];
     break;
    case 'bottom':
     W += d.value[0];
     break;
    case 'left':
     O -= d.value[0];
     break;
    case 'right':
     O += d.value[0];
     break;
   }
   switch (T.anchor.align) {
    case 'top':
     W -= d.value[1];
     break;
    case 'bottom':
     W += d.value[1];
     break;
    case 'left':
     O -= d.value[1];
     break;
    case 'right':
     O += d.value[1];
     break;
   }
   return (
    (A.x += O),
    (A.y += W),
    (A.width = Math.min(A.width, s.value)),
    (A.height = Math.min(A.height, c.value)),
    { overflows: vo(A, k), x: O, y: W }
   );
  }
  let w = 0,
   V = 0;
  const C = { x: 0, y: 0 },
   P = { x: !1, y: !1 };
  let x = -1;
  for (; !(x++ > 10); ) {
   const { x: T, y: A, overflows: p } = B(I);
   (w += T), (V += A), (g.x += T), (g.y += A);
   {
    const F = co(I.anchor),
     O = p.x.before || p.x.after,
     W = p.y.before || p.y.after;
    let te = !1;
    if (
     (['x', 'y'].forEach((N) => {
      if ((N === 'x' && O && !P.x) || (N === 'y' && W && !P.y)) {
       const H = { anchor: { ...I.anchor }, origin: { ...I.origin } },
        E = N === 'x' ? (F === 'y' ? cl : sl) : F === 'y' ? sl : cl;
       (H.anchor = E(H.anchor)), (H.origin = E(H.origin));
       const { overflows: L } = B(H);
       ((L[N].before <= p[N].before && L[N].after <= p[N].after) ||
        L[N].before + L[N].after < (p[N].before + p[N].after) / 2) &&
        ((I = H), (te = P[N] = !0));
      }
     }),
     te)
    )
     continue;
   }
   p.x.before && ((w += p.x.before), (g.x += p.x.before)),
    p.x.after && ((w -= p.x.after), (g.x -= p.x.after)),
    p.y.before && ((V += p.y.before), (g.y += p.y.before)),
    p.y.after && ((V -= p.y.after), (g.y -= p.y.after));
   {
    const F = vo(g, k);
    (C.x = k.width - F.x.before - F.x.after),
     (C.y = k.height - F.y.before - F.y.after),
     (w += F.x.before),
     (g.x += F.x.before),
     (V += F.y.before),
     (g.y += F.y.before);
   }
   break;
  }
  const _ = co(I.anchor);
  return (
   Object.assign(t.value, {
    '--v-overlay-anchor-origin': `${I.anchor.side} ${I.anchor.align}`,
    transformOrigin: `${I.origin.side} ${I.origin.align}`,
    top: Z(gl(V)),
    left: e.isRtl.value ? void 0 : Z(gl(w)),
    right: e.isRtl.value ? Z(gl(-w)) : void 0,
    minWidth: Z(_ === 'y' ? Math.min(o.value, b.width) : o.value),
    maxWidth: Z(zo(Fe(C.x, o.value === 1 / 0 ? 0 : o.value, s.value))),
    maxHeight: Z(zo(Fe(C.y, r.value === 1 / 0 ? 0 : r.value, c.value))),
   }),
   { available: C, contentBox: g }
  );
 }
 return (
  X(
   () => [l.value, i.value, n.offset, n.minWidth, n.minHeight, n.maxWidth, n.maxHeight],
   () => v()
  ),
  he(() => {
   const b = v();
   if (!b) return;
   const { available: g, contentBox: h } = b;
   h.height > g.y &&
    requestAnimationFrame(() => {
     v(),
      requestAnimationFrame(() => {
       v();
      });
    });
  }),
  { updateLocation: v }
 );
}
function gl(e) {
 return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function zo(e) {
 return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let $l = !0;
const Ia = [];
function Lf(e) {
 !$l || Ia.length ? (Ia.push(e), Fl()) : (($l = !1), e(), Fl());
}
let Ho = -1;
function Fl() {
 cancelAnimationFrame(Ho),
  (Ho = requestAnimationFrame(() => {
   const e = Ia.shift();
   e && e(), Ia.length ? Fl() : ($l = !0);
  }));
}
const ka = { none: null, close: Nf, block: zf, reposition: Hf },
 Of = D(
  {
   scrollStrategy: {
    type: [String, Function],
    default: 'block',
    validator: (e) => typeof e == 'function' || e in ka,
   },
  },
  'VOverlay-scroll-strategies'
 );
function Rf(e, n) {
 if (!ke) return;
 let t;
 pe(async () => {
  t == null || t.stop(),
   n.isActive.value &&
    e.scrollStrategy &&
    ((t = ei()),
    await new Promise((a) => setTimeout(a)),
    t.active &&
     t.run(() => {
      var a;
      typeof e.scrollStrategy == 'function'
       ? e.scrollStrategy(n, e, t)
       : (a = ka[e.scrollStrategy]) == null || a.call(ka, n, e, t);
     }));
 }),
  Ze(() => {
   t == null || t.stop();
  });
}
function Nf(e) {
 function n(t) {
  e.isActive.value = !1;
 }
 Fu(e.targetEl.value ?? e.contentEl.value, n);
}
function zf(e, n) {
 var o;
 const t = (o = e.root.value) == null ? void 0 : o.offsetParent,
  a = [
   ...new Set([
    ...Va(e.targetEl.value, n.contained ? t : void 0),
    ...Va(e.contentEl.value, n.contained ? t : void 0),
   ]),
  ].filter((r) => !r.classList.contains('v-overlay-scroll-blocked')),
  l = window.innerWidth - document.documentElement.offsetWidth,
  i = ((r) => vi(r) && r)(t || document.documentElement);
 i && e.root.value.classList.add('v-overlay--scroll-blocked'),
  a.forEach((r, s) => {
   r.style.setProperty('--v-body-scroll-x', Z(-r.scrollLeft)),
    r.style.setProperty('--v-body-scroll-y', Z(-r.scrollTop)),
    r !== document.documentElement && r.style.setProperty('--v-scrollbar-offset', Z(l)),
    r.classList.add('v-overlay-scroll-blocked');
  }),
  Ze(() => {
   a.forEach((r, s) => {
    const c = parseFloat(r.style.getPropertyValue('--v-body-scroll-x')),
     d = parseFloat(r.style.getPropertyValue('--v-body-scroll-y')),
     f = r.style.scrollBehavior;
    (r.style.scrollBehavior = 'auto'),
     r.style.removeProperty('--v-body-scroll-x'),
     r.style.removeProperty('--v-body-scroll-y'),
     r.style.removeProperty('--v-scrollbar-offset'),
     r.classList.remove('v-overlay-scroll-blocked'),
     (r.scrollLeft = -c),
     (r.scrollTop = -d),
     (r.style.scrollBehavior = f);
   }),
    i && e.root.value.classList.remove('v-overlay--scroll-blocked');
  });
}
function Hf(e, n, t) {
 let a = !1,
  l = -1,
  i = -1;
 function o(r) {
  Lf(() => {
   var d, f;
   const s = performance.now();
   (f = (d = e.updateLocation).value) == null || f.call(d, r),
    (a = (performance.now() - s) / (1e3 / 60) > 2);
  });
 }
 (i = (typeof requestIdleCallback > 'u' ? (r) => r() : requestIdleCallback)(() => {
  t.run(() => {
   Fu(e.targetEl.value ?? e.contentEl.value, (r) => {
    a
     ? (cancelAnimationFrame(l),
       (l = requestAnimationFrame(() => {
        l = requestAnimationFrame(() => {
         o(r);
        });
       })))
     : o(r);
   });
  });
 })),
  Ze(() => {
   typeof cancelIdleCallback < 'u' && cancelIdleCallback(i), cancelAnimationFrame(l);
  });
}
function Fu(e, n) {
 const t = [document, ...Va(e)];
 t.forEach((a) => {
  a.addEventListener('scroll', n, { passive: !0 });
 }),
  Ze(() => {
   t.forEach((a) => {
    a.removeEventListener('scroll', n);
   });
  });
}
const Ll = Symbol.for('vuetify:v-menu'),
 _i = D({ closeDelay: [Number, String], openDelay: [Number, String] }, 'delay');
function Ti(e, n) {
 let t = () => {};
 function a(o) {
  t == null || t();
  const r = Number(o ? e.openDelay : e.closeDelay);
  return new Promise((s) => {
   t = Uc(r, () => {
    n == null || n(o), s(o);
   });
  });
 }
 function l() {
  return a(!0);
 }
 function i() {
  return a(!1);
 }
 return { clearDelay: t, runOpenDelay: l, runCloseDelay: i };
}
const Wf = D(
 {
  target: [String, Object],
  activator: [String, Object],
  activatorProps: { type: Object, default: () => ({}) },
  openOnClick: { type: Boolean, default: void 0 },
  openOnHover: Boolean,
  openOnFocus: { type: Boolean, default: void 0 },
  closeOnContentClick: Boolean,
  ..._i(),
 },
 'VOverlay-activator'
);
function jf(e, n) {
 let { isActive: t, isTop: a } = n;
 const l = Me('useActivator'),
  i = j();
 let o = !1,
  r = !1,
  s = !0;
 const c = y(() => e.openOnFocus || (e.openOnFocus == null && e.openOnHover)),
  d = y(() => e.openOnClick || (e.openOnClick == null && !e.openOnHover && !c.value)),
  { runOpenDelay: f, runCloseDelay: m } = Ti(e, (C) => {
   C === ((e.openOnHover && o) || (c.value && r)) &&
    !(e.openOnHover && t.value && !a.value) &&
    (t.value !== C && (s = !0), (t.value = C));
  }),
  v = j(),
  b = {
   onClick: (C) => {
    C.stopPropagation(),
     (i.value = C.currentTarget || C.target),
     t.value || (v.value = [C.clientX, C.clientY]),
     (t.value = !t.value);
   },
   onMouseenter: (C) => {
    var P;
    ((P = C.sourceCapabilities) != null && P.firesTouchEvents) ||
     ((o = !0), (i.value = C.currentTarget || C.target), f());
   },
   onMouseleave: (C) => {
    (o = !1), m();
   },
   onFocus: (C) => {
    Vn(C.target, ':focus-visible') !== !1 &&
     ((r = !0), C.stopPropagation(), (i.value = C.currentTarget || C.target), f());
   },
   onBlur: (C) => {
    (r = !1), C.stopPropagation(), m();
   },
  },
  g = y(() => {
   const C = {};
   return (
    d.value && (C.onClick = b.onClick),
    e.openOnHover && ((C.onMouseenter = b.onMouseenter), (C.onMouseleave = b.onMouseleave)),
    c.value && ((C.onFocus = b.onFocus), (C.onBlur = b.onBlur)),
    C
   );
  }),
  h = y(() => {
   const C = {};
   if (
    (e.openOnHover &&
     ((C.onMouseenter = () => {
      (o = !0), f();
     }),
     (C.onMouseleave = () => {
      (o = !1), m();
     })),
    c.value &&
     ((C.onFocusin = () => {
      (r = !0), f();
     }),
     (C.onFocusout = () => {
      (r = !1), m();
     })),
    e.closeOnContentClick)
   ) {
    const P = ge(Ll, null);
    C.onClick = () => {
     (t.value = !1), P == null || P.closeParents();
    };
   }
   return C;
  }),
  S = y(() => {
   const C = {};
   return (
    e.openOnHover &&
     ((C.onMouseenter = () => {
      s && ((o = !0), (s = !1), f());
     }),
     (C.onMouseleave = () => {
      (o = !1), m();
     })),
    C
   );
  });
 X(a, (C) => {
  C &&
   ((e.openOnHover && !o && (!c.value || !r)) || (c.value && !r && (!e.openOnHover || !o))) &&
   (t.value = !1);
 }),
  X(
   t,
   (C) => {
    C ||
     setTimeout(() => {
      v.value = void 0;
     });
   },
   { flush: 'post' }
  );
 const k = wa();
 pe(() => {
  k.value &&
   he(() => {
    i.value = k.el;
   });
 });
 const I = wa(),
  B = y(() =>
   e.target === 'cursor' && v.value ? v.value : I.value ? I.el : Lu(e.target, l) || i.value
  ),
  w = y(() => (Array.isArray(B.value) ? void 0 : B.value));
 let V;
 return (
  X(
   () => !!e.activator,
   (C) => {
    C && ke
     ? ((V = ei()),
       V.run(() => {
        Yf(e, l, { activatorEl: i, activatorEvents: g });
       }))
     : V && V.stop();
   },
   { flush: 'post', immediate: !0 }
  ),
  Ze(() => {
   V == null || V.stop();
  }),
  {
   activatorEl: i,
   activatorRef: k,
   target: B,
   targetEl: w,
   targetRef: I,
   activatorEvents: g,
   contentEvents: h,
   scrimEvents: S,
  }
 );
}
function Yf(e, n, t) {
 let { activatorEl: a, activatorEvents: l } = t;
 X(
  () => e.activator,
  (s, c) => {
   if (c && s !== c) {
    const d = r(c);
    d && o(d);
   }
   s && he(() => i());
  },
  { immediate: !0 }
 ),
  X(
   () => e.activatorProps,
   () => {
    i();
   }
  ),
  Ze(() => {
   o();
  });
 function i() {
  let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(),
   c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
  s && Xc(s, z(l.value, c));
 }
 function o() {
  let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(),
   c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
  s && Zc(s, z(l.value, c));
 }
 function r() {
  let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
  const c = Lu(s, n);
  return (a.value = (c == null ? void 0 : c.nodeType) === Node.ELEMENT_NODE ? c : void 0), a.value;
 }
}
function Lu(e, n) {
 var a, l;
 if (!e) return;
 let t;
 if (e === 'parent') {
  let i =
   (l = (a = n == null ? void 0 : n.proxy) == null ? void 0 : a.$el) == null ? void 0 : l.parentNode;
  for (; i != null && i.hasAttribute('data-no-activator'); ) i = i.parentNode;
  t = i;
 } else typeof e == 'string' ? (t = document.querySelector(e)) : '$el' in e ? (t = e.$el) : (t = e);
 return t;
}
function Ou() {
 if (!ke) return K(!1);
 const { ssr: e } = gt();
 if (e) {
  const n = K(!1);
  return (
   at(() => {
    n.value = !0;
   }),
   n
  );
 } else return K(!0);
}
const Ai = D({ eager: Boolean }, 'lazy');
function Bi(e, n) {
 const t = K(!1),
  a = y(() => t.value || e.eager || n.value);
 X(n, () => (t.value = !0));
 function l() {
  e.eager || (t.value = !1);
 }
 return { isBooted: t, hasContent: a, onAfterLeave: l };
}
function gn() {
 const n = Me('useScopeId').vnode.scopeId;
 return { scopeId: n ? { [n]: '' } : void 0 };
}
const Wo = Symbol.for('vuetify:stack'),
 Fn = ct([]);
function Gf(e, n, t) {
 const a = Me('useStack'),
  l = !t,
  i = ge(Wo, void 0),
  o = ct({ activeChildren: new Set() });
 Ie(Wo, o);
 const r = K(+n.value);
 lt(e, () => {
  var f;
  const d = (f = Fn.at(-1)) == null ? void 0 : f[1];
  (r.value = d ? d + 10 : +n.value),
   l && Fn.push([a.uid, r.value]),
   i == null || i.activeChildren.add(a.uid),
   Ze(() => {
    if (l) {
     const m = tt(Fn).findIndex((v) => v[0] === a.uid);
     Fn.splice(m, 1);
    }
    i == null || i.activeChildren.delete(a.uid);
   });
 });
 const s = K(!0);
 l &&
  pe(() => {
   var f;
   const d = ((f = Fn.at(-1)) == null ? void 0 : f[0]) === a.uid;
   setTimeout(() => (s.value = d));
  });
 const c = y(() => !o.activeChildren.size);
 return { globalTop: Ba(s), localTop: c, stackStyles: y(() => ({ zIndex: r.value })) };
}
function Uf(e) {
 return {
  teleportTarget: y(() => {
   const t = e();
   if (t === !0 || !ke) return;
   const a = t === !1 ? document.body : typeof t == 'string' ? document.querySelector(t) : t;
   if (a == null) return;
   let l = a.querySelector(':scope > .v-overlay-container');
   return (
    l || ((l = document.createElement('div')), (l.className = 'v-overlay-container'), a.appendChild(l)),
    l
   );
  }),
 };
}
function Kf() {
 return !0;
}
function Ru(e, n, t) {
 if (!e || Nu(e, t) === !1) return !1;
 const a = Er(n);
 if (typeof ShadowRoot < 'u' && a instanceof ShadowRoot && a.host === e.target) return !1;
 const l = ((typeof t.value == 'object' && t.value.include) || (() => []))();
 return l.push(n), !l.some((i) => (i == null ? void 0 : i.contains(e.target)));
}
function Nu(e, n) {
 return ((typeof n.value == 'object' && n.value.closeConditional) || Kf)(e);
}
function qf(e, n, t) {
 const a = typeof t.value == 'function' ? t.value : t.value.handler;
 n._clickOutside.lastMousedownWasOutside &&
  Ru(e, n, t) &&
  setTimeout(() => {
   Nu(e, t) && a && a(e);
  }, 0);
}
function jo(e, n) {
 const t = Er(e);
 n(document), typeof ShadowRoot < 'u' && t instanceof ShadowRoot && n(t);
}
const zu = {
 mounted(e, n) {
  const t = (l) => qf(l, e, n),
   a = (l) => {
    e._clickOutside.lastMousedownWasOutside = Ru(l, e, n);
   };
  jo(e, (l) => {
   l.addEventListener('click', t, !0), l.addEventListener('mousedown', a, !0);
  }),
   e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: !1 }),
   (e._clickOutside[n.instance.$.uid] = { onClick: t, onMousedown: a });
 },
 unmounted(e, n) {
  e._clickOutside &&
   (jo(e, (t) => {
    var i;
    if (!t || !((i = e._clickOutside) != null && i[n.instance.$.uid])) return;
    const { onClick: a, onMousedown: l } = e._clickOutside[n.instance.$.uid];
    t.removeEventListener('click', a, !0), t.removeEventListener('mousedown', l, !0);
   }),
   delete e._clickOutside[n.instance.$.uid]);
 },
};
function Xf(e) {
 const { modelValue: n, color: t, ...a } = e;
 return u(
  Ft,
  { name: 'fade-transition', appear: !0 },
  {
   default: () => [
    e.modelValue &&
     u(
      'div',
      z(
       {
        class: ['v-overlay__scrim', e.color.backgroundColorClasses.value],
        style: e.color.backgroundColorStyles.value,
       },
       a
      ),
      null
     ),
   ],
  }
 );
}
const ia = D(
  {
   absolute: Boolean,
   attach: [Boolean, String, Object],
   closeOnBack: { type: Boolean, default: !0 },
   contained: Boolean,
   contentClass: null,
   contentProps: null,
   disabled: Boolean,
   opacity: [Number, String],
   noClickAnimation: Boolean,
   modelValue: Boolean,
   persistent: Boolean,
   scrim: { type: [Boolean, String], default: !0 },
   zIndex: { type: [Number, String], default: 2e3 },
   ...Wf(),
   ...J(),
   ...Ne(),
   ...Ai(),
   ...pf(),
   ...Of(),
   ...me(),
   ...St(),
  },
  'VOverlay'
 ),
 wt = $()({
  name: 'VOverlay',
  directives: { ClickOutside: zu },
  inheritAttrs: !1,
  props: { _disableGlobalStack: Boolean, ...ia() },
  emits: {
   'click:outside': (e) => !0,
   'update:modelValue': (e) => !0,
   afterEnter: () => !0,
   afterLeave: () => !0,
  },
  setup(e, n) {
   let { slots: t, attrs: a, emit: l } = n;
   const i = le(e, 'modelValue'),
    o = y({
     get: () => i.value,
     set: (q) => {
      (q && e.disabled) || (i.value = q);
     },
    }),
    { themeClasses: r } = Se(e),
    { rtlClasses: s, isRtl: c } = Re(),
    { hasContent: d, onAfterLeave: f } = Bi(e, o),
    m = we(y(() => (typeof e.scrim == 'string' ? e.scrim : null))),
    { globalTop: v, localTop: b, stackStyles: g } = Gf(o, M(e, 'zIndex'), e._disableGlobalStack),
    {
     activatorEl: h,
     activatorRef: S,
     target: k,
     targetEl: I,
     targetRef: B,
     activatorEvents: w,
     contentEvents: V,
     scrimEvents: C,
    } = jf(e, { isActive: o, isTop: b }),
    { teleportTarget: P } = Uf(() => {
     var Q;
     const q = e.attach || e.contained;
     if (q) return q;
     const Y = (Q = h == null ? void 0 : h.value) == null ? void 0 : Q.getRootNode();
     return Y instanceof ShadowRoot ? Y : !1;
    }),
    { dimensionStyles: x } = ze(e),
    _ = Ou(),
    { scopeId: T } = gn();
   X(
    () => e.disabled,
    (q) => {
     q && (o.value = !1);
    }
   );
   const A = j(),
    p = j(),
    F = j(),
    { contentStyles: O, updateLocation: W } = Ef(e, { isRtl: c, contentEl: F, target: k, isActive: o });
   Rf(e, { root: A, contentEl: F, targetEl: I, isActive: o, updateLocation: W });
   function te(q) {
    l('click:outside', q), e.persistent ? G() : (o.value = !1);
   }
   function N(q) {
    return o.value && v.value && (!e.scrim || q.target === p.value);
   }
   ke &&
    X(
     o,
     (q) => {
      q ? window.addEventListener('keydown', H) : window.removeEventListener('keydown', H);
     },
     { immediate: !0 }
    ),
    nt(() => {
     ke && window.removeEventListener('keydown', H);
    });
   function H(q) {
    var Y, Q;
    q.key === 'Escape' &&
     v.value &&
     (e.persistent
      ? G()
      : ((o.value = !1),
        (Y = F.value) != null &&
         Y.contains(document.activeElement) &&
         ((Q = h.value) == null || Q.focus())));
   }
   const E = Zr();
   lt(
    () => e.closeOnBack,
    () => {
     Vv(E, (q) => {
      v.value && o.value ? (q(!1), e.persistent ? G() : (o.value = !1)) : q();
     });
    }
   );
   const L = j();
   X(
    () => o.value && (e.absolute || e.contained) && P.value == null,
    (q) => {
     if (q) {
      const Y = di(A.value);
      Y && Y !== document.scrollingElement && (L.value = Y.scrollTop);
     }
    }
   );
   function G() {
    e.noClickAnimation ||
     (F.value &&
      Kt(
       F.value,
       [{ transformOrigin: 'center' }, { transform: 'scale(1.03)' }, { transformOrigin: 'center' }],
       { duration: 150, easing: zn }
      ));
   }
   function ae() {
    l('afterEnter');
   }
   function oe() {
    f(), l('afterLeave');
   }
   return (
    R(() => {
     var q;
     return u(ie, null, [
      (q = t.activator) == null
       ? void 0
       : q.call(t, { isActive: o.value, targetRef: B, props: z({ ref: S }, w.value, e.activatorProps) }),
      _.value &&
       d.value &&
       u(
        Bc,
        { disabled: !P.value, to: P.value },
        {
         default: () => [
          u(
           'div',
           z(
            {
             class: [
              'v-overlay',
              {
               'v-overlay--absolute': e.absolute || e.contained,
               'v-overlay--active': o.value,
               'v-overlay--contained': e.contained,
              },
              r.value,
              s.value,
              e.class,
             ],
             style: [g.value, { '--v-overlay-opacity': e.opacity, top: Z(L.value) }, e.style],
             ref: A,
            },
            T,
            a
           ),
           [
            u(Xf, z({ color: m, modelValue: o.value && !!e.scrim, ref: p }, C.value), null),
            u(
             Xe,
             {
              appear: !0,
              persisted: !0,
              transition: e.transition,
              target: k.value,
              onAfterEnter: ae,
              onAfterLeave: oe,
             },
             {
              default: () => {
               var Y;
               return [
                Ae(
                 u(
                  'div',
                  z(
                   { ref: F, class: ['v-overlay__content', e.contentClass], style: [x.value, O.value] },
                   V.value,
                   e.contentProps
                  ),
                  [(Y = t.default) == null ? void 0 : Y.call(t, { isActive: o })]
                 ),
                 [
                  [bt, o.value],
                  [ot('click-outside'), { handler: te, closeConditional: N, include: () => [h.value] }],
                 ]
                ),
               ];
              },
             }
            ),
           ]
          ),
         ],
        }
       ),
     ]);
    }),
    {
     activatorEl: h,
     scrimEl: p,
     target: k,
     animateClick: G,
     contentEl: F,
     globalTop: v,
     localTop: b,
     updateLocation: W,
    }
   );
  },
 }),
 hl = Symbol('Forwarded refs');
function yl(e, n) {
 let t = e;
 for (; t; ) {
  const a = Reflect.getOwnPropertyDescriptor(t, n);
  if (a) return a;
  t = Object.getPrototypeOf(t);
 }
}
function ht(e) {
 for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
  t[a - 1] = arguments[a];
 return (
  (e[hl] = t),
  new Proxy(e, {
   get(l, i) {
    if (Reflect.has(l, i)) return Reflect.get(l, i);
    if (!(typeof i == 'symbol' || i.startsWith('$') || i.startsWith('__'))) {
     for (const o of t)
      if (o.value && Reflect.has(o.value, i)) {
       const r = Reflect.get(o.value, i);
       return typeof r == 'function' ? r.bind(o.value) : r;
      }
    }
   },
   has(l, i) {
    if (Reflect.has(l, i)) return !0;
    if (typeof i == 'symbol' || i.startsWith('$') || i.startsWith('__')) return !1;
    for (const o of t) if (o.value && Reflect.has(o.value, i)) return !0;
    return !1;
   },
   set(l, i, o) {
    if (Reflect.has(l, i)) return Reflect.set(l, i, o);
    if (typeof i == 'symbol' || i.startsWith('$') || i.startsWith('__')) return !1;
    for (const r of t) if (r.value && Reflect.has(r.value, i)) return Reflect.set(r.value, i, o);
    return !1;
   },
   getOwnPropertyDescriptor(l, i) {
    var r;
    const o = Reflect.getOwnPropertyDescriptor(l, i);
    if (o) return o;
    if (!(typeof i == 'symbol' || i.startsWith('$') || i.startsWith('__'))) {
     for (const s of t) {
      if (!s.value) continue;
      const c =
       yl(s.value, i) ??
       ('_' in s.value ? yl((r = s.value._) == null ? void 0 : r.setupState, i) : void 0);
      if (c) return c;
     }
     for (const s of t) {
      const c = s.value && s.value[hl];
      if (!c) continue;
      const d = c.slice();
      for (; d.length; ) {
       const f = d.shift(),
        m = yl(f.value, i);
       if (m) return m;
       const v = f.value && f.value[hl];
       v && d.push(...v);
      }
     }
    }
   },
  })
 );
}
const Hu = D(
  {
   id: String,
   ...Ee(
    ia({
     closeDelay: 250,
     closeOnContentClick: !0,
     locationStrategy: 'connected',
     openDelay: 300,
     scrim: !1,
     scrollStrategy: 'reposition',
     transition: { component: $a },
    }),
    ['absolute']
   ),
  },
  'VMenu'
 ),
 Tn = $()({
  name: 'VMenu',
  props: Hu(),
  emits: { 'update:modelValue': (e) => !0 },
  setup(e, n) {
   let { slots: t } = n;
   const a = le(e, 'modelValue'),
    { scopeId: l } = gn(),
    i = je(),
    o = y(() => e.id || `v-menu-${i}`),
    r = j(),
    s = ge(Ll, null),
    c = K(0);
   Ie(Ll, {
    register() {
     ++c.value;
    },
    unregister() {
     --c.value;
    },
    closeParents(g) {
     setTimeout(() => {
      !c.value &&
       !e.persistent &&
       (g == null || (g && !Kc(g, r.value.contentEl))) &&
       ((a.value = !1), s == null || s.closeParents());
     }, 40);
    },
   });
   async function d(g) {
    var k, I, B;
    const h = g.relatedTarget,
     S = g.target;
    await he(),
     a.value &&
      h !== S &&
      (k = r.value) != null &&
      k.contentEl &&
      (I = r.value) != null &&
      I.globalTop &&
      ![document, r.value.contentEl].includes(S) &&
      !r.value.contentEl.contains(S) &&
      ((B = Nn(r.value.contentEl)[0]) == null || B.focus());
   }
   X(a, (g) => {
    g
     ? (s == null || s.register(), document.addEventListener('focusin', d, { once: !0 }))
     : (s == null || s.unregister(), document.removeEventListener('focusin', d));
   });
   function f(g) {
    s == null || s.closeParents(g);
   }
   function m(g) {
    var h, S, k;
    if (!e.disabled)
     if (g.key === 'Tab' || (g.key === 'Enter' && !e.closeOnContentClick)) {
      if (
       g.key === 'Enter' &&
       (g.target instanceof HTMLTextAreaElement ||
        (g.target instanceof HTMLInputElement && g.target.closest('form')))
      )
       return;
      g.key === 'Enter' && g.preventDefault(),
       yr(
        Nn((h = r.value) == null ? void 0 : h.contentEl, !1),
        g.shiftKey ? 'prev' : 'next',
        (B) => B.tabIndex >= 0
       ) || ((a.value = !1), (k = (S = r.value) == null ? void 0 : S.activatorEl) == null || k.focus());
     } else
      ['Enter', ' '].includes(g.key) &&
       e.closeOnContentClick &&
       ((a.value = !1), s == null || s.closeParents());
   }
   function v(g) {
    var S;
    if (e.disabled) return;
    const h = (S = r.value) == null ? void 0 : S.contentEl;
    h && a.value
     ? g.key === 'ArrowDown'
       ? (g.preventDefault(), Cn(h, 'next'))
       : g.key === 'ArrowUp' && (g.preventDefault(), Cn(h, 'prev'))
     : ['ArrowDown', 'ArrowUp'].includes(g.key) &&
       ((a.value = !0), g.preventDefault(), setTimeout(() => setTimeout(() => v(g))));
   }
   const b = y(() =>
    z(
     { 'aria-haspopup': 'menu', 'aria-expanded': String(a.value), 'aria-owns': o.value, onKeydown: v },
     e.activatorProps
    )
   );
   return (
    R(() => {
     const g = wt.filterProps(e);
     return u(
      wt,
      z(
       { ref: r, id: o.value, class: ['v-menu', e.class], style: e.style },
       g,
       {
        modelValue: a.value,
        'onUpdate:modelValue': (h) => (a.value = h),
        absolute: !0,
        activatorProps: b.value,
        'onClick:outside': f,
        onKeydown: m,
       },
       l
      ),
      {
       activator: t.activator,
       default: function () {
        for (var h = arguments.length, S = new Array(h), k = 0; k < h; k++) S[k] = arguments[k];
        return u(
         fe,
         { root: 'VMenu' },
         {
          default: () => {
           var I;
           return [(I = t.default) == null ? void 0 : I.call(t, ...S)];
          },
         }
        );
       },
      }
     );
    }),
    ht({ id: o, ΨopenChildren: c }, r)
   );
  },
 }),
 Zf = D(
  {
   active: Boolean,
   disabled: Boolean,
   max: [Number, String],
   value: { type: [Number, String], default: 0 },
   ...J(),
   ...St({ transition: { component: gi } }),
  },
  'VCounter'
 ),
 Ga = $()({
  name: 'VCounter',
  functional: !0,
  props: Zf(),
  setup(e, n) {
   let { slots: t } = n;
   const a = y(() => (e.max ? `${e.value} / ${e.max}` : String(e.value)));
   return (
    R(() =>
     u(
      Xe,
      { transition: e.transition },
      {
       default: () => [
        Ae(
         u(
          'div',
          {
           class: [
            'v-counter',
            { 'text-error': e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max) },
            e.class,
           ],
           style: e.style,
          },
          [t.default ? t.default({ counter: a.value, max: e.max, value: e.value }) : a.value]
         ),
         [[bt, e.active]]
        ),
       ],
      }
     )
    ),
    {}
   );
  },
 }),
 Jf = D({ floating: Boolean, ...J() }, 'VFieldLabel'),
 Ln = $()({
  name: 'VFieldLabel',
  props: Jf(),
  setup(e, n) {
   let { slots: t } = n;
   return (
    R(() =>
     u(
      En,
      {
       class: ['v-field-label', { 'v-field-label--floating': e.floating }, e.class],
       style: e.style,
       'aria-hidden': e.floating || void 0,
      },
      t
     )
    ),
    {}
   );
  },
 }),
 Qf = ['underlined', 'outlined', 'filled', 'solo', 'solo-inverted', 'solo-filled', 'plain'],
 oa = D(
  {
   appendInnerIcon: ue,
   bgColor: String,
   clearable: Boolean,
   clearIcon: { type: ue, default: '$clear' },
   active: Boolean,
   centerAffix: Boolean,
   color: String,
   baseColor: String,
   dirty: Boolean,
   disabled: { type: Boolean, default: null },
   error: Boolean,
   flat: Boolean,
   label: String,
   persistentClear: Boolean,
   prependInnerIcon: ue,
   reverse: Boolean,
   singleLine: Boolean,
   variant: { type: String, default: 'filled', validator: (e) => Qf.includes(e) },
   'onClick:clear': We(),
   'onClick:appendInner': We(),
   'onClick:prependInner': We(),
   ...J(),
   ...Na(),
   ..._e(),
   ...me(),
  },
  'VField'
 ),
 $n = $()({
  name: 'VField',
  inheritAttrs: !1,
  props: { id: String, ...aa(), ...oa() },
  emits: { 'update:focused': (e) => !0, 'update:modelValue': (e) => !0 },
  setup(e, n) {
   let { attrs: t, emit: a, slots: l } = n;
   const { themeClasses: i } = Se(e),
    { loaderClasses: o } = Qn(e),
    { focusClasses: r, isFocused: s, focus: c, blur: d } = Et(e),
    { InputIcon: f } = cu(e),
    { roundedClasses: m } = De(e),
    { rtlClasses: v } = Re(),
    b = y(() => e.singleLine || e.centerAffix),
    g = y(() => e.dirty || e.active),
    h = y(() => !b.value && !!(e.label || l.label)),
    S = je(),
    k = y(() => e.id || `input-${S}`),
    I = y(() => `${k.value}-messages`),
    B = j(),
    w = j(),
    V = j(),
    C = y(() => ['plain', 'underlined'].includes(e.variant)),
    { backgroundColorClasses: P, backgroundColorStyles: x } = we(M(e, 'bgColor')),
    { textColorClasses: _, textColorStyles: T } = Ge(
     y(() => (e.error || e.disabled ? void 0 : g.value && s.value ? e.color : e.baseColor))
    );
   X(
    g,
    (O) => {
     if (h.value) {
      const W = B.value.$el,
       te = w.value.$el;
      requestAnimationFrame(() => {
       const N = ri(W),
        H = te.getBoundingClientRect(),
        E = H.x - N.x,
        L = H.y - N.y - (N.height / 2 - H.height / 2),
        G = H.width / 0.75,
        ae = Math.abs(G - N.width) > 1 ? { maxWidth: Z(G) } : void 0,
        oe = getComputedStyle(W),
        q = getComputedStyle(te),
        Y = parseFloat(oe.transitionDuration) * 1e3 || 150,
        Q = parseFloat(q.getPropertyValue('--v-field-label-scale')),
        xe = q.getPropertyValue('color');
       (W.style.visibility = 'visible'),
        (te.style.visibility = 'hidden'),
        Kt(
         W,
         { transform: `translate(${E}px, ${L}px) scale(${Q})`, color: xe, ...ae },
         { duration: Y, easing: zn, direction: O ? 'normal' : 'reverse' }
        ).finished.then(() => {
         W.style.removeProperty('visibility'), te.style.removeProperty('visibility');
        });
      });
     }
    },
    { flush: 'post' }
   );
   const A = y(() => ({ isActive: g, isFocused: s, controlRef: V, blur: d, focus: c }));
   function p(O) {
    O.target !== document.activeElement && O.preventDefault();
   }
   function F(O) {
    var W;
    (O.key !== 'Enter' && O.key !== ' ') ||
     (O.preventDefault(),
     O.stopPropagation(),
     (W = e['onClick:clear']) == null || W.call(e, new MouseEvent('click')));
   }
   return (
    R(() => {
     var E, L, G;
     const O = e.variant === 'outlined',
      W = !!(l['prepend-inner'] || e.prependInnerIcon),
      te = !!(e.clearable || l.clear),
      N = !!(l['append-inner'] || e.appendInnerIcon || te),
      H = () => (l.label ? l.label({ ...A.value, label: e.label, props: { for: k.value } }) : e.label);
     return u(
      'div',
      z(
       {
        class: [
         'v-field',
         {
          'v-field--active': g.value,
          'v-field--appended': N,
          'v-field--center-affix': e.centerAffix,
          'v-field--disabled': e.disabled,
          'v-field--dirty': e.dirty,
          'v-field--error': e.error,
          'v-field--flat': e.flat,
          'v-field--has-background': !!e.bgColor,
          'v-field--persistent-clear': e.persistentClear,
          'v-field--prepended': W,
          'v-field--reverse': e.reverse,
          'v-field--single-line': b.value,
          'v-field--no-label': !H(),
          [`v-field--variant-${e.variant}`]: !0,
         },
         i.value,
         P.value,
         r.value,
         o.value,
         m.value,
         v.value,
         e.class,
        ],
        style: [x.value, e.style],
        onClick: p,
       },
       t
      ),
      [
       u('div', { class: 'v-field__overlay' }, null),
       u(
        ea,
        {
         name: 'v-field',
         active: !!e.loading,
         color: e.error ? 'error' : typeof e.loading == 'string' ? e.loading : e.color,
        },
        { default: l.loader }
       ),
       W &&
        u('div', { key: 'prepend', class: 'v-field__prepend-inner' }, [
         e.prependInnerIcon && u(f, { key: 'prepend-icon', name: 'prependInner' }, null),
         (E = l['prepend-inner']) == null ? void 0 : E.call(l, A.value),
        ]),
       u('div', { class: 'v-field__field', 'data-no-activator': '' }, [
        ['filled', 'solo', 'solo-inverted', 'solo-filled'].includes(e.variant) &&
         h.value &&
         u(
          Ln,
          {
           key: 'floating-label',
           ref: w,
           class: [_.value],
           floating: !0,
           for: k.value,
           style: T.value,
          },
          { default: () => [H()] }
         ),
        u(Ln, { ref: B, for: k.value }, { default: () => [H()] }),
        (L = l.default) == null
         ? void 0
         : L.call(l, {
            ...A.value,
            props: { id: k.value, class: 'v-field__input', 'aria-describedby': I.value },
            focus: c,
            blur: d,
           }),
       ]),
       te &&
        u(
         hi,
         { key: 'clear' },
         {
          default: () => [
           Ae(
            u(
             'div',
             {
              class: 'v-field__clearable',
              onMousedown: (ae) => {
               ae.preventDefault(), ae.stopPropagation();
              },
             },
             [
              u(
               fe,
               { defaults: { VIcon: { icon: e.clearIcon } } },
               {
                default: () => [
                 l.clear
                  ? l.clear({
                     ...A.value,
                     props: { onKeydown: F, onFocus: c, onBlur: d, onClick: e['onClick:clear'] },
                    })
                  : u(f, { name: 'clear', onKeydown: F, onFocus: c, onBlur: d }, null),
                ],
               }
              ),
             ]
            ),
            [[bt, e.dirty]]
           ),
          ],
         }
        ),
       N &&
        u('div', { key: 'append', class: 'v-field__append-inner' }, [
         (G = l['append-inner']) == null ? void 0 : G.call(l, A.value),
         e.appendInnerIcon && u(f, { key: 'append-icon', name: 'appendInner' }, null),
        ]),
       u('div', { class: ['v-field__outline', _.value], style: T.value }, [
        O &&
         u(ie, null, [
          u('div', { class: 'v-field__outline__start' }, null),
          h.value &&
           u('div', { class: 'v-field__outline__notch' }, [
            u(Ln, { ref: w, floating: !0, for: k.value }, { default: () => [H()] }),
           ]),
          u('div', { class: 'v-field__outline__end' }, null),
         ]),
        C.value && h.value && u(Ln, { ref: w, floating: !0, for: k.value }, { default: () => [H()] }),
       ]),
      ]
     );
    }),
    { controlRef: V }
   );
  },
 });
function Di(e) {
 const n = Object.keys($n.props).filter((t) => !pa(t) && t !== 'class' && t !== 'style');
 return li(e, n);
}
const em = ['color', 'file', 'time', 'date', 'datetime-local', 'week', 'month'],
 Ua = D(
  {
   autofocus: Boolean,
   counter: [Boolean, Number, String],
   counterValue: [Number, Function],
   prefix: String,
   placeholder: String,
   persistentPlaceholder: Boolean,
   persistentCounter: Boolean,
   suffix: String,
   role: String,
   type: { type: String, default: 'text' },
   modelModifiers: Object,
   ...Mt(),
   ...oa(),
  },
  'VTextField'
 ),
 Jt = $()({
  name: 'VTextField',
  directives: { Intersect: Jn },
  inheritAttrs: !1,
  props: Ua(),
  emits: {
   'click:control': (e) => !0,
   'mousedown:control': (e) => !0,
   'update:focused': (e) => !0,
   'update:modelValue': (e) => !0,
  },
  setup(e, n) {
   let { attrs: t, emit: a, slots: l } = n;
   const i = le(e, 'modelValue'),
    { isFocused: o, focus: r, blur: s } = Et(e),
    c = y(() =>
     typeof e.counterValue == 'function'
      ? e.counterValue(i.value)
      : typeof e.counterValue == 'number'
        ? e.counterValue
        : (i.value ?? '').toString().length
    ),
    d = y(() => {
     if (t.maxlength) return t.maxlength;
     if (!(!e.counter || (typeof e.counter != 'number' && typeof e.counter != 'string')))
      return e.counter;
    }),
    f = y(() => ['plain', 'underlined'].includes(e.variant));
   function m(V, C) {
    var P, x;
    !e.autofocus || !V || (x = (P = C[0].target) == null ? void 0 : P.focus) == null || x.call(P);
   }
   const v = j(),
    b = j(),
    g = j(),
    h = y(() => em.includes(e.type) || e.persistentPlaceholder || o.value || e.active);
   function S() {
    var V;
    g.value !== document.activeElement && ((V = g.value) == null || V.focus()), o.value || r();
   }
   function k(V) {
    a('mousedown:control', V), V.target !== g.value && (S(), V.preventDefault());
   }
   function I(V) {
    S(), a('click:control', V);
   }
   function B(V) {
    V.stopPropagation(),
     S(),
     he(() => {
      (i.value = null), oi(e['onClick:clear'], V);
     });
   }
   function w(V) {
    var P;
    const C = V.target;
    if (
     ((i.value = C.value),
     (P = e.modelModifiers) != null &&
      P.trim &&
      ['text', 'search', 'password', 'tel', 'url'].includes(e.type))
    ) {
     const x = [C.selectionStart, C.selectionEnd];
     he(() => {
      (C.selectionStart = x[0]), (C.selectionEnd = x[1]);
     });
    }
   }
   return (
    R(() => {
     const V = !!(l.counter || (e.counter !== !1 && e.counter != null)),
      C = !!(V || l.details),
      [P, x] = Nt(t),
      { modelValue: _, ...T } = Ue.filterProps(e),
      A = Di(e);
     return u(
      Ue,
      z(
       {
        ref: v,
        modelValue: i.value,
        'onUpdate:modelValue': (p) => (i.value = p),
        class: [
         'v-text-field',
         {
          'v-text-field--prefixed': e.prefix,
          'v-text-field--suffixed': e.suffix,
          'v-input--plain-underlined': f.value,
         },
         e.class,
        ],
        style: e.style,
       },
       P,
       T,
       { focused: o.value }
      ),
      {
       ...l,
       default: (p) => {
        let { id: F, isDisabled: O, isDirty: W, isReadonly: te, isValid: N } = p;
        return u(
         $n,
         z(
          {
           ref: b,
           onMousedown: k,
           onClick: I,
           'onClick:clear': B,
           'onClick:prependInner': e['onClick:prependInner'],
           'onClick:appendInner': e['onClick:appendInner'],
           role: e.role,
          },
          A,
          {
           id: F.value,
           active: h.value || W.value,
           dirty: W.value || e.dirty,
           disabled: O.value,
           focused: o.value,
           centerAffix: e.centerAffix,
           error: N.value === !1,
          }
         ),
         {
          ...l,
          default: (H) => {
           let {
            props: { class: E, ...L },
           } = H;
           const G = Ae(
            u(
             'input',
             z(
              {
               ref: g,
               value: i.value,
               onInput: w,
               autofocus: e.autofocus,
               readonly: te.value,
               disabled: O.value,
               name: e.name,
               placeholder: e.placeholder,
               size: 1,
               type: e.type,
               onFocus: S,
               onBlur: s,
              },
              L,
              x
             ),
             null
            ),
            [[ot('intersect'), { handler: m }, null, { once: !0 }]]
           );
           return u(ie, null, [
            e.prefix &&
             u('span', { class: 'v-text-field__prefix' }, [
              u('span', { class: 'v-text-field__prefix__text' }, [e.prefix]),
             ]),
            l.default
             ? u('div', { class: E, 'data-no-activator': '' }, [l.default(), G])
             : Dc(G, { class: E }),
            e.suffix &&
             u('span', { class: 'v-text-field__suffix' }, [
              u('span', { class: 'v-text-field__suffix__text' }, [e.suffix]),
             ]),
           ]);
          },
         }
        );
       },
       details: C
        ? (p) => {
           var F;
           return u(ie, null, [
            (F = l.details) == null ? void 0 : F.call(l, p),
            V &&
             u(ie, null, [
              u('span', null, null),
              u(
               Ga,
               {
                active: e.persistentCounter || o.value,
                value: c.value,
                max: d.value,
                disabled: e.disabled,
               },
               l.counter
              ),
             ]),
           ]);
          }
        : void 0,
      }
     );
    }),
    ht({}, v, b, g)
   );
  },
 }),
 tm = D({ renderless: Boolean, ...J() }, 'VVirtualScrollItem'),
 Wu = $()({
  name: 'VVirtualScrollItem',
  inheritAttrs: !1,
  props: tm(),
  emits: { 'update:height': (e) => !0 },
  setup(e, n) {
   let { attrs: t, emit: a, slots: l } = n;
   const { resizeRef: i, contentRect: o } = yt(void 0, 'border');
   X(
    () => {
     var r;
     return (r = o.value) == null ? void 0 : r.height;
    },
    (r) => {
     r != null && a('update:height', r);
    }
   ),
    R(() => {
     var r, s;
     return e.renderless
      ? u(ie, null, [(r = l.default) == null ? void 0 : r.call(l, { itemRef: i })])
      : u('div', z({ ref: i, class: ['v-virtual-scroll__item', e.class], style: e.style }, t), [
         (s = l.default) == null ? void 0 : s.call(l),
        ]);
    });
  },
 }),
 nm = -1,
 am = 1,
 bl = 100,
 ju = D({ itemHeight: { type: [Number, String], default: null }, height: [Number, String] }, 'virtual');
function Yu(e, n) {
 const t = gt(),
  a = K(0);
 pe(() => {
  a.value = parseFloat(e.itemHeight || 0);
 });
 const l = K(0),
  i = K(Math.ceil((parseInt(e.height) || t.height.value) / (a.value || 16)) || 1),
  o = K(0),
  r = K(0),
  s = j(),
  c = j();
 let d = 0;
 const { resizeRef: f, contentRect: m } = yt();
 pe(() => {
  f.value = s.value;
 });
 const v = y(() => {
   var H;
   return s.value === document.documentElement
    ? t.height.value
    : ((H = m.value) == null ? void 0 : H.height) || parseInt(e.height) || 0;
  }),
  b = y(() => !!(s.value && c.value && v.value && a.value));
 let g = Array.from({ length: n.value.length }),
  h = Array.from({ length: n.value.length });
 const S = K(0);
 let k = -1;
 function I(H) {
  return g[H] || a.value;
 }
 const B = Wc(() => {
   const H = performance.now();
   h[0] = 0;
   const E = n.value.length;
   for (let L = 1; L <= E - 1; L++) h[L] = (h[L - 1] || 0) + I(L - 1);
   S.value = Math.max(S.value, performance.now() - H);
  }, S),
  w = X(b, (H) => {
   H &&
    (w(),
    (d = c.value.offsetTop),
    B.immediate(),
    O(),
    ~k &&
     he(() => {
      ke &&
       window.requestAnimationFrame(() => {
        te(k), (k = -1);
       });
     }));
  });
 Ze(() => {
  B.clear();
 });
 function V(H, E) {
  const L = g[H],
   G = a.value;
  (a.value = G ? Math.min(a.value, E) : E), (L !== E || G !== a.value) && ((g[H] = E), B());
 }
 function C(H) {
  return (H = Fe(H, 0, n.value.length - 1)), h[H] || 0;
 }
 function P(H) {
  return lm(h, H);
 }
 let x = 0,
  _ = 0,
  T = 0;
 X(v, (H, E) => {
  E &&
   (O(),
   H < E &&
    requestAnimationFrame(() => {
     (_ = 0), O();
    }));
 });
 function A() {
  if (!s.value || !c.value) return;
  const H = s.value.scrollTop,
   E = performance.now();
  E - T > 500 ? ((_ = Math.sign(H - x)), (d = c.value.offsetTop)) : (_ = H - x), (x = H), (T = E), O();
 }
 function p() {
  !s.value || !c.value || ((_ = 0), (T = 0), O());
 }
 let F = -1;
 function O() {
  cancelAnimationFrame(F), (F = requestAnimationFrame(W));
 }
 function W() {
  if (!s.value || !v.value) return;
  const H = x - d,
   E = Math.sign(_),
   L = Math.max(0, H - bl),
   G = Fe(P(L), 0, n.value.length),
   ae = H + v.value + bl,
   oe = Fe(P(ae) + 1, G + 1, n.value.length);
  if ((E !== nm || G < l.value) && (E !== am || oe > i.value)) {
   const q = C(l.value) - C(G),
    Y = C(oe) - C(i.value);
   Math.max(q, Y) > bl
    ? ((l.value = G), (i.value = oe))
    : (G <= 0 && (l.value = G), oe >= n.value.length && (i.value = oe));
  }
  (o.value = C(l.value)), (r.value = C(n.value.length) - C(i.value));
 }
 function te(H) {
  const E = C(H);
  !s.value || (H && !E) ? (k = H) : (s.value.scrollTop = E);
 }
 const N = y(() => n.value.slice(l.value, i.value).map((H, E) => ({ raw: H, index: E + l.value })));
 return (
  X(
   n,
   () => {
    (g = Array.from({ length: n.value.length })),
     (h = Array.from({ length: n.value.length })),
     B.immediate(),
     O();
   },
   { deep: !0 }
  ),
  {
   containerRef: s,
   markerRef: c,
   computedItems: N,
   paddingTop: o,
   paddingBottom: r,
   scrollToIndex: te,
   handleScroll: A,
   handleScrollend: p,
   handleItemResize: V,
  }
 );
}
function lm(e, n) {
 let t = e.length - 1,
  a = 0,
  l = 0,
  i = null,
  o = -1;
 if (e[t] < n) return t;
 for (; a <= t; )
  if (((l = (a + t) >> 1), (i = e[l]), i > n)) t = l - 1;
  else if (i < n) (o = l), (a = l + 1);
  else return i === n ? l : a;
 return o;
}
const im = D(
  { items: { type: Array, default: () => [] }, renderless: Boolean, ...ju(), ...J(), ...Ne() },
  'VVirtualScroll'
 ),
 Ka = $()({
  name: 'VVirtualScroll',
  props: im(),
  setup(e, n) {
   let { slots: t } = n;
   const a = Me('VVirtualScroll'),
    { dimensionStyles: l } = ze(e),
    {
     containerRef: i,
     markerRef: o,
     handleScroll: r,
     handleScrollend: s,
     handleItemResize: c,
     scrollToIndex: d,
     paddingTop: f,
     paddingBottom: m,
     computedItems: v,
    } = Yu(e, M(e, 'items'));
   return (
    lt(
     () => e.renderless,
     () => {
      function b() {
       var S, k;
       const h = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1)
        ? 'addEventListener'
        : 'removeEventListener';
       i.value === document.documentElement
        ? (document[h]('scroll', r, { passive: !0 }), document[h]('scrollend', s))
        : ((S = i.value) == null || S[h]('scroll', r, { passive: !0 }),
          (k = i.value) == null || k[h]('scrollend', s));
      }
      at(() => {
       (i.value = di(a.vnode.el, !0)), b(!0);
      }),
       Ze(b);
     }
    ),
    R(() => {
     const b = v.value.map((g) =>
      u(
       Wu,
       { key: g.index, renderless: e.renderless, 'onUpdate:height': (h) => c(g.index, h) },
       {
        default: (h) => {
         var S;
         return (S = t.default) == null ? void 0 : S.call(t, { item: g.raw, index: g.index, ...h });
        },
       }
      )
     );
     return e.renderless
      ? u(ie, null, [
         u(
          'div',
          { ref: o, class: 'v-virtual-scroll__spacer', style: { paddingTop: Z(f.value) } },
          null
         ),
         b,
         u('div', { class: 'v-virtual-scroll__spacer', style: { paddingBottom: Z(m.value) } }, null),
        ])
      : u(
         'div',
         {
          ref: i,
          class: ['v-virtual-scroll', e.class],
          onScrollPassive: r,
          onScrollend: s,
          style: [l.value, e.style],
         },
         [
          u(
           'div',
           {
            ref: o,
            class: 'v-virtual-scroll__container',
            style: { paddingTop: Z(f.value), paddingBottom: Z(m.value) },
           },
           [b]
          ),
         ]
        );
    }),
    { scrollToIndex: d }
   );
  },
 });
function pi(e, n) {
 const t = K(!1);
 let a;
 function l(r) {
  cancelAnimationFrame(a),
   (t.value = !0),
   (a = requestAnimationFrame(() => {
    a = requestAnimationFrame(() => {
     t.value = !1;
    });
   }));
 }
 async function i() {
  await new Promise((r) => requestAnimationFrame(r)),
   await new Promise((r) => requestAnimationFrame(r)),
   await new Promise((r) => requestAnimationFrame(r)),
   await new Promise((r) => {
    if (t.value) {
     const s = X(t, () => {
      s(), r();
     });
    } else r();
   });
 }
 async function o(r) {
  var d, f;
  if (
   (r.key === 'Tab' && ((d = n.value) == null || d.focus()),
   !['PageDown', 'PageUp', 'Home', 'End'].includes(r.key))
  )
   return;
  const s = (f = e.value) == null ? void 0 : f.$el;
  if (!s) return;
  (r.key === 'Home' || r.key === 'End') &&
   s.scrollTo({ top: r.key === 'Home' ? 0 : s.scrollHeight, behavior: 'smooth' }),
   await i();
  const c = s.querySelectorAll(':scope > :not(.v-virtual-scroll__spacer)');
  if (r.key === 'PageDown' || r.key === 'Home') {
   const m = s.getBoundingClientRect().top;
   for (const v of c)
    if (v.getBoundingClientRect().top >= m) {
     v.focus();
     break;
    }
  } else {
   const m = s.getBoundingClientRect().bottom;
   for (const v of [...c].reverse())
    if (v.getBoundingClientRect().bottom <= m) {
     v.focus();
     break;
    }
  }
 }
 return { onListScroll: l, onListKeydown: o };
}
const Ei = D(
  {
   chips: Boolean,
   closableChips: Boolean,
   closeText: { type: String, default: '$vuetify.close' },
   openText: { type: String, default: '$vuetify.open' },
   eager: Boolean,
   hideNoData: Boolean,
   hideSelected: Boolean,
   listProps: { type: Object },
   menu: Boolean,
   menuIcon: { type: ue, default: '$dropdown' },
   menuProps: { type: Object },
   multiple: Boolean,
   noDataText: { type: String, default: '$vuetify.noDataText' },
   openOnClear: Boolean,
   itemColor: String,
   ...pu({ itemChildren: !1 }),
  },
  'Select'
 ),
 om = D(
  {
   ...Ei(),
   ...Ee(Ua({ modelValue: null, role: 'combobox' }), ['validationValue', 'dirty', 'appendInnerIcon']),
   ...St({ transition: { component: $a } }),
  },
  'VSelect'
 ),
 Mi = $()({
  name: 'VSelect',
  props: om(),
  emits: { 'update:focused': (e) => !0, 'update:modelValue': (e) => !0, 'update:menu': (e) => !0 },
  setup(e, n) {
   let { slots: t } = n;
   const { t: a } = $e(),
    l = j(),
    i = j(),
    o = j(),
    r = le(e, 'menu'),
    s = y({
     get: () => r.value,
     set: (N) => {
      var H;
      (r.value && !N && (H = i.value) != null && H.ΨopenChildren) || (r.value = N);
     },
    }),
    { items: c, transformIn: d, transformOut: f } = Ii(e),
    m = le(
     e,
     'modelValue',
     [],
     (N) => d(N === null ? [null] : Te(N)),
     (N) => {
      const H = f(N);
      return e.multiple ? H : H[0] ?? null;
     }
    ),
    v = y(() =>
     typeof e.counterValue == 'function'
      ? e.counterValue(m.value)
      : typeof e.counterValue == 'number'
        ? e.counterValue
        : m.value.length
    ),
    b = Wa(),
    g = y(() => m.value.map((N) => N.value)),
    h = K(!1),
    S = y(() => (s.value ? e.closeText : e.openText));
   let k = '',
    I;
   const B = y(() =>
     e.hideSelected ? c.value.filter((N) => !m.value.some((H) => e.valueComparator(H, N))) : c.value
    ),
    w = y(
     () => (e.hideNoData && !B.value.length) || e.readonly || (b == null ? void 0 : b.isReadonly.value)
    ),
    V = y(() => {
     var N;
     return {
      ...e.menuProps,
      activatorProps: {
       ...(((N = e.menuProps) == null ? void 0 : N.activatorProps) || {}),
       'aria-haspopup': 'listbox',
      },
     };
    }),
    C = j(),
    { onListScroll: P, onListKeydown: x } = pi(C, l);
   function _(N) {
    e.openOnClear && (s.value = !0);
   }
   function T() {
    w.value || (s.value = !s.value);
   }
   function A(N) {
    var ae, oe;
    if (!N.key || e.readonly || (b != null && b.isReadonly.value)) return;
    ['Enter', ' ', 'ArrowDown', 'ArrowUp', 'Home', 'End'].includes(N.key) && N.preventDefault(),
     ['Enter', 'ArrowDown', ' '].includes(N.key) && (s.value = !0),
     ['Escape', 'Tab'].includes(N.key) && (s.value = !1),
     N.key === 'Home'
      ? (ae = C.value) == null || ae.focus('first')
      : N.key === 'End' && ((oe = C.value) == null || oe.focus('last'));
    const H = 1e3;
    function E(q) {
     const Y = q.key.length === 1,
      Q = !q.ctrlKey && !q.metaKey && !q.altKey;
     return Y && Q;
    }
    if (e.multiple || !E(N)) return;
    const L = performance.now();
    L - I > H && (k = ''), (k += N.key.toLowerCase()), (I = L);
    const G = c.value.find((q) => q.title.toLowerCase().startsWith(k));
    if (G !== void 0) {
     m.value = [G];
     const q = B.value.indexOf(G);
     ke &&
      window.requestAnimationFrame(() => {
       var Y;
       q >= 0 && ((Y = o.value) == null || Y.scrollToIndex(q));
      });
    }
   }
   function p(N) {
    let H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    if (!N.props.disabled)
     if (e.multiple) {
      const E = m.value.findIndex((G) => e.valueComparator(G.value, N.value)),
       L = H ?? !~E;
      if (~E) {
       const G = L ? [...m.value, N] : [...m.value];
       G.splice(E, 1), (m.value = G);
      } else L && (m.value = [...m.value, N]);
     } else {
      const E = H !== !1;
      (m.value = E ? [N] : []),
       he(() => {
        s.value = !1;
       });
     }
   }
   function F(N) {
    var H;
    ((H = C.value) != null && H.$el.contains(N.relatedTarget)) || (s.value = !1);
   }
   function O() {
    var N;
    h.value && ((N = l.value) == null || N.focus());
   }
   function W(N) {
    h.value = !0;
   }
   function te(N) {
    if (N == null) m.value = [];
    else if (Vn(l.value, ':autofill') || Vn(l.value, ':-webkit-autofill')) {
     const H = c.value.find((E) => E.title === N);
     H && p(H);
    } else l.value && (l.value.value = '');
   }
   return (
    X(s, () => {
     if (!e.hideSelected && s.value && m.value.length) {
      const N = B.value.findIndex((H) => m.value.some((E) => e.valueComparator(E.value, H.value)));
      ke &&
       window.requestAnimationFrame(() => {
        var H;
        N >= 0 && ((H = o.value) == null || H.scrollToIndex(N));
       });
     }
    }),
    X(
     () => e.items,
     (N, H) => {
      s.value || (h.value && !H.length && N.length && (s.value = !0));
     }
    ),
    R(() => {
     const N = !!(e.chips || t.chip),
      H = !!(!e.hideNoData || B.value.length || t['prepend-item'] || t['append-item'] || t['no-data']),
      E = m.value.length > 0,
      L = Jt.filterProps(e),
      G = E || (!h.value && e.label && !e.persistentPlaceholder) ? void 0 : e.placeholder;
     return u(
      Jt,
      z({ ref: l }, L, {
       modelValue: m.value.map((ae) => ae.props.value).join(', '),
       'onUpdate:modelValue': te,
       focused: h.value,
       'onUpdate:focused': (ae) => (h.value = ae),
       validationValue: m.externalValue,
       counterValue: v.value,
       dirty: E,
       class: [
        'v-select',
        {
         'v-select--active-menu': s.value,
         'v-select--chips': !!e.chips,
         [`v-select--${e.multiple ? 'multiple' : 'single'}`]: !0,
         'v-select--selected': m.value.length,
         'v-select--selection-slot': !!t.selection,
        },
        e.class,
       ],
       style: e.style,
       inputmode: 'none',
       placeholder: G,
       'onClick:clear': _,
       'onMousedown:control': T,
       onBlur: F,
       onKeydown: A,
       'aria-label': a(S.value),
       title: a(S.value),
      }),
      {
       ...t,
       default: () =>
        u(ie, null, [
         u(
          Tn,
          z(
           {
            ref: i,
            modelValue: s.value,
            'onUpdate:modelValue': (ae) => (s.value = ae),
            activator: 'parent',
            contentClass: 'v-select__content',
            disabled: w.value,
            eager: e.eager,
            maxHeight: 310,
            openOnClick: !1,
            closeOnContentClick: !1,
            transition: e.transition,
            onAfterLeave: O,
           },
           V.value
          ),
          {
           default: () => [
            H &&
             u(
              Ya,
              z(
               {
                ref: C,
                selected: g.value,
                selectStrategy: e.multiple ? 'independent' : 'single-independent',
                onMousedown: (ae) => ae.preventDefault(),
                onKeydown: x,
                onFocusin: W,
                onScrollPassive: P,
                tabindex: '-1',
                'aria-live': 'polite',
                color: e.itemColor ?? e.color,
               },
               e.listProps
              ),
              {
               default: () => {
                var ae, oe, q;
                return [
                 (ae = t['prepend-item']) == null ? void 0 : ae.call(t),
                 !B.value.length &&
                  !e.hideNoData &&
                  (((oe = t['no-data']) == null ? void 0 : oe.call(t)) ??
                   u(Bt, { title: a(e.noDataText) }, null)),
                 u(
                  Ka,
                  { ref: o, renderless: !0, items: B.value },
                  {
                   default: (Y) => {
                    var ve;
                    let { item: Q, index: xe, itemRef: Ce } = Y;
                    const ee = z(Q.props, { ref: Ce, key: xe, onClick: () => p(Q, null) });
                    return (
                     ((ve = t.item) == null ? void 0 : ve.call(t, { item: Q, index: xe, props: ee })) ??
                     u(Bt, z(ee, { role: 'option' }), {
                      prepend: (U) => {
                       let { isSelected: ne } = U;
                       return u(ie, null, [
                        e.multiple && !e.hideSelected
                         ? u(At, { key: Q.value, modelValue: ne, ripple: !1, tabindex: '-1' }, null)
                         : void 0,
                        Q.props.prependAvatar && u(vt, { image: Q.props.prependAvatar }, null),
                        Q.props.prependIcon && u(be, { icon: Q.props.prependIcon }, null),
                       ]);
                      },
                     })
                    );
                   },
                  }
                 ),
                 (q = t['append-item']) == null ? void 0 : q.call(t),
                ];
               },
              }
             ),
           ],
          }
         ),
         m.value.map((ae, oe) => {
          function q(Ce) {
           Ce.stopPropagation(), Ce.preventDefault(), p(ae, !1);
          }
          const Y = {
            'onClick:close': q,
            onKeydown(Ce) {
             (Ce.key !== 'Enter' && Ce.key !== ' ') ||
              (Ce.preventDefault(), Ce.stopPropagation(), q(Ce));
            },
            onMousedown(Ce) {
             Ce.preventDefault(), Ce.stopPropagation();
            },
            modelValue: !0,
            'onUpdate:modelValue': void 0,
           },
           Q = N ? !!t.chip : !!t.selection,
           xe = Q
            ? Ea(N ? t.chip({ item: ae, index: oe, props: Y }) : t.selection({ item: ae, index: oe }))
            : void 0;
          if (!(Q && !xe))
           return u('div', { key: ae.value, class: 'v-select__selection' }, [
            N
             ? t.chip
               ? u(
                  fe,
                  {
                   key: 'chip-defaults',
                   defaults: { VChip: { closable: e.closableChips, size: 'small', text: ae.title } },
                  },
                  { default: () => [xe] }
                 )
               : u(
                  Mn,
                  z(
                   {
                    key: 'chip',
                    closable: e.closableChips,
                    size: 'small',
                    text: ae.title,
                    disabled: ae.props.disabled,
                   },
                   Y
                  ),
                  null
                 )
             : xe ??
               u('span', { class: 'v-select__selection-text' }, [
                ae.title,
                e.multiple &&
                 oe < m.value.length - 1 &&
                 u('span', { class: 'v-select__selection-comma' }, [Lt(',')]),
               ]),
           ]);
         }),
        ]),
       'append-inner': function () {
        var Y;
        for (var ae = arguments.length, oe = new Array(ae), q = 0; q < ae; q++) oe[q] = arguments[q];
        return u(ie, null, [
         (Y = t['append-inner']) == null ? void 0 : Y.call(t, ...oe),
         e.menuIcon ? u(be, { class: 'v-select__menu-icon', icon: e.menuIcon }, null) : void 0,
        ]);
       },
      }
     );
    }),
    ht({ isFocused: h, menu: s, select: p }, l)
   );
  },
 }),
 rm = (e, n, t) =>
  e == null || n == null
   ? -1
   : e.toString().toLocaleLowerCase().indexOf(n.toString().toLocaleLowerCase()),
 ra = D(
  {
   customFilter: Function,
   customKeyFilter: Object,
   filterKeys: [Array, String],
   filterMode: { type: String, default: 'intersection' },
   noFilter: Boolean,
  },
  'filter'
 );
function um(e, n, t) {
 var r;
 const a = [],
  l = (t == null ? void 0 : t.default) ?? rm,
  i = t != null && t.filterKeys ? Te(t.filterKeys) : !1,
  o = Object.keys((t == null ? void 0 : t.customKeyFilter) ?? {}).length;
 if (!(e != null && e.length)) return a;
 e: for (let s = 0; s < e.length; s++) {
  const [c, d = c] = Te(e[s]),
   f = {},
   m = {};
  let v = -1;
  if ((n || o > 0) && !(t != null && t.noFilter)) {
   if (typeof c == 'object') {
    const h = i || Object.keys(d);
    for (const S of h) {
     const k = Le(d, S),
      I = (r = t == null ? void 0 : t.customKeyFilter) == null ? void 0 : r[S];
     if (((v = I ? I(k, n, c) : l(k, n, c)), v !== -1 && v !== !1)) I ? (f[S] = v) : (m[S] = v);
     else if ((t == null ? void 0 : t.filterMode) === 'every') continue e;
    }
   } else (v = l(c, n, c)), v !== -1 && v !== !1 && (m.title = v);
   const b = Object.keys(m).length,
    g = Object.keys(f).length;
   if (
    (!b && !g) ||
    ((t == null ? void 0 : t.filterMode) === 'union' && g !== o && !b) ||
    ((t == null ? void 0 : t.filterMode) === 'intersection' && (g !== o || !b))
   )
    continue;
  }
  a.push({ index: s, matches: { ...m, ...f } });
 }
 return a;
}
function ua(e, n, t, a) {
 const l = j([]),
  i = j(new Map()),
  o = y(() => (a != null && a.transform ? et(n).map((s) => [s, a.transform(s)]) : et(n)));
 pe(() => {
  const s = typeof t == 'function' ? t() : et(t),
   c = typeof s != 'string' && typeof s != 'number' ? '' : String(s),
   d = um(o.value, c, {
    customKeyFilter: { ...e.customKeyFilter, ...et(a == null ? void 0 : a.customKeyFilter) },
    default: e.customFilter,
    filterKeys: e.filterKeys,
    filterMode: e.filterMode,
    noFilter: e.noFilter,
   }),
   f = et(n),
   m = [],
   v = new Map();
  d.forEach((b) => {
   let { index: g, matches: h } = b;
   const S = f[g];
   m.push(S), v.set(S.value, h);
  }),
   (l.value = m),
   (i.value = v);
 });
 function r(s) {
  return i.value.get(s.value);
 }
 return { filteredItems: l, filteredMatches: i, getMatches: r };
}
function sm(e, n, t) {
 if (n == null) return e;
 if (Array.isArray(n)) throw new Error('Multiple matches is not implemented');
 return typeof n == 'number' && ~n
  ? u(ie, null, [
     u('span', { class: 'v-autocomplete__unmask' }, [e.substr(0, n)]),
     u('span', { class: 'v-autocomplete__mask' }, [e.substr(n, t)]),
     u('span', { class: 'v-autocomplete__unmask' }, [e.substr(n + t)]),
    ])
  : e;
}
const cm = D(
  {
   autoSelectFirst: { type: [Boolean, String] },
   clearOnSelect: Boolean,
   search: String,
   ...ra({ filterKeys: ['title'] }),
   ...Ei(),
   ...Ee(Ua({ modelValue: null, role: 'combobox' }), ['validationValue', 'dirty', 'appendInnerIcon']),
   ...St({ transition: !1 }),
  },
  'VAutocomplete'
 ),
 dm = $()({
  name: 'VAutocomplete',
  props: cm(),
  emits: {
   'update:focused': (e) => !0,
   'update:search': (e) => !0,
   'update:modelValue': (e) => !0,
   'update:menu': (e) => !0,
  },
  setup(e, n) {
   let { slots: t } = n;
   const { t: a } = $e(),
    l = j(),
    i = K(!1),
    o = K(!0),
    r = K(!1),
    s = j(),
    c = j(),
    d = le(e, 'menu'),
    f = y({
     get: () => d.value,
     set: (ee) => {
      var ve;
      (d.value && !ee && (ve = s.value) != null && ve.ΨopenChildren) || (d.value = ee);
     },
    }),
    m = K(-1),
    v = y(() => {
     var ee;
     return (ee = l.value) == null ? void 0 : ee.color;
    }),
    b = y(() => (f.value ? e.closeText : e.openText)),
    { items: g, transformIn: h, transformOut: S } = Ii(e),
    { textColorClasses: k, textColorStyles: I } = Ge(v),
    B = le(e, 'search', ''),
    w = le(
     e,
     'modelValue',
     [],
     (ee) => h(ee === null ? [null] : Te(ee)),
     (ee) => {
      const ve = S(ee);
      return e.multiple ? ve : ve[0] ?? null;
     }
    ),
    V = y(() =>
     typeof e.counterValue == 'function'
      ? e.counterValue(w.value)
      : typeof e.counterValue == 'number'
        ? e.counterValue
        : w.value.length
    ),
    C = Wa(),
    { filteredItems: P, getMatches: x } = ua(e, g, () => (o.value ? '' : B.value)),
    _ = y(() =>
     e.hideSelected ? P.value.filter((ee) => !w.value.some((ve) => ve.value === ee.value)) : P.value
    ),
    T = y(() => !!(e.chips || t.chip)),
    A = y(() => T.value || !!t.selection),
    p = y(() => w.value.map((ee) => ee.props.value)),
    F = y(() => {
     var ve;
     return (
      (e.autoSelectFirst === !0 ||
       (e.autoSelectFirst === 'exact' && B.value === ((ve = _.value[0]) == null ? void 0 : ve.title))) &&
      _.value.length > 0 &&
      !o.value &&
      !r.value
     );
    }),
    O = y(
     () => (e.hideNoData && !_.value.length) || e.readonly || (C == null ? void 0 : C.isReadonly.value)
    ),
    W = j(),
    { onListScroll: te, onListKeydown: N } = pi(W, l);
   function H(ee) {
    e.openOnClear && (f.value = !0), (B.value = '');
   }
   function E() {
    O.value || (f.value = !0);
   }
   function L(ee) {
    O.value || (i.value && (ee.preventDefault(), ee.stopPropagation()), (f.value = !f.value));
   }
   function G(ee) {
    var ne, se, re;
    if (e.readonly || (C != null && C.isReadonly.value)) return;
    const ve = l.value.selectionStart,
     U = w.value.length;
    if (
     ((m.value > -1 || ['Enter', 'ArrowDown', 'ArrowUp'].includes(ee.key)) && ee.preventDefault(),
     ['Enter', 'ArrowDown'].includes(ee.key) && (f.value = !0),
     ['Escape'].includes(ee.key) && (f.value = !1),
     F.value &&
      ['Enter', 'Tab'].includes(ee.key) &&
      !w.value.some((ce) => {
       let { value: Ve } = ce;
       return Ve === _.value[0].value;
      }) &&
      Ce(_.value[0]),
     ee.key === 'ArrowDown' && F.value && ((ne = W.value) == null || ne.focus('next')),
     ['Backspace', 'Delete'].includes(ee.key))
    ) {
     if (!e.multiple && A.value && w.value.length > 0 && !B.value) return Ce(w.value[0], !1);
     if (~m.value) {
      const ce = m.value;
      Ce(w.value[m.value], !1), (m.value = ce >= U - 1 ? U - 2 : ce);
     } else ee.key === 'Backspace' && !B.value && (m.value = U - 1);
    }
    if (e.multiple) {
     if (ee.key === 'ArrowLeft') {
      if (m.value < 0 && ve > 0) return;
      const ce = m.value > -1 ? m.value - 1 : U - 1;
      w.value[ce]
       ? (m.value = ce)
       : ((m.value = -1),
         l.value.setSelectionRange(
          (se = B.value) == null ? void 0 : se.length,
          (re = B.value) == null ? void 0 : re.length
         ));
     }
     if (ee.key === 'ArrowRight') {
      if (m.value < 0) return;
      const ce = m.value + 1;
      w.value[ce] ? (m.value = ce) : ((m.value = -1), l.value.setSelectionRange(0, 0));
     }
    }
   }
   function ae(ee) {
    if (Vn(l.value, ':autofill') || Vn(l.value, ':-webkit-autofill')) {
     const ve = g.value.find((U) => U.title === ee.target.value);
     ve && Ce(ve);
    }
   }
   function oe() {
    var ee;
    i.value && ((o.value = !0), (ee = l.value) == null || ee.focus());
   }
   function q(ee) {
    (i.value = !0),
     setTimeout(() => {
      r.value = !0;
     });
   }
   function Y(ee) {
    r.value = !1;
   }
   function Q(ee) {
    (ee == null || (ee === '' && !e.multiple && !A.value)) && (w.value = []);
   }
   const xe = K(!1);
   function Ce(ee) {
    let ve = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    if (!(!ee || ee.props.disabled))
     if (e.multiple) {
      const U = w.value.findIndex((se) => e.valueComparator(se.value, ee.value)),
       ne = ve ?? !~U;
      if (~U) {
       const se = ne ? [...w.value, ee] : [...w.value];
       se.splice(U, 1), (w.value = se);
      } else ne && (w.value = [...w.value, ee]);
      e.clearOnSelect && (B.value = '');
     } else {
      const U = ve !== !1;
      (w.value = U ? [ee] : []),
       (B.value = U && !A.value ? ee.title : ''),
       he(() => {
        (f.value = !1), (o.value = !0);
       });
     }
   }
   return (
    X(i, (ee, ve) => {
     var U;
     ee !== ve &&
      (ee
       ? ((xe.value = !0),
         (B.value =
          e.multiple || A.value
           ? ''
           : String(((U = w.value.at(-1)) == null ? void 0 : U.props.title) ?? '')),
         (o.value = !0),
         he(() => (xe.value = !1)))
       : (!e.multiple && B.value == null && (w.value = []),
         (f.value = !1),
         w.value.some((ne) => {
          let { title: se } = ne;
          return se === B.value;
         }) || (B.value = ''),
         (m.value = -1)));
    }),
    X(B, (ee) => {
     !i.value || xe.value || (ee && (f.value = !0), (o.value = !ee));
    }),
    X(f, () => {
     if (!e.hideSelected && f.value && w.value.length) {
      const ee = _.value.findIndex((ve) => w.value.some((U) => ve.value === U.value));
      ke &&
       window.requestAnimationFrame(() => {
        var ve;
        ee >= 0 && ((ve = c.value) == null || ve.scrollToIndex(ee));
       });
     }
    }),
    X(
     () => e.items,
     (ee, ve) => {
      f.value || (i.value && !ve.length && ee.length && (f.value = !0));
     }
    ),
    R(() => {
     const ee = !!(
       !e.hideNoData ||
       _.value.length ||
       t['prepend-item'] ||
       t['append-item'] ||
       t['no-data']
      ),
      ve = w.value.length > 0,
      U = Jt.filterProps(e);
     return u(
      Jt,
      z({ ref: l }, U, {
       modelValue: B.value,
       'onUpdate:modelValue': [(ne) => (B.value = ne), Q],
       focused: i.value,
       'onUpdate:focused': (ne) => (i.value = ne),
       validationValue: w.externalValue,
       counterValue: V.value,
       dirty: ve,
       onChange: ae,
       class: [
        'v-autocomplete',
        `v-autocomplete--${e.multiple ? 'multiple' : 'single'}`,
        {
         'v-autocomplete--active-menu': f.value,
         'v-autocomplete--chips': !!e.chips,
         'v-autocomplete--selection-slot': !!A.value,
         'v-autocomplete--selecting-index': m.value > -1,
        },
        e.class,
       ],
       style: e.style,
       readonly: e.readonly,
       placeholder: ve ? void 0 : e.placeholder,
       'onClick:clear': H,
       'onMousedown:control': E,
       onKeydown: G,
      }),
      {
       ...t,
       default: () =>
        u(ie, null, [
         u(
          Tn,
          z(
           {
            ref: s,
            modelValue: f.value,
            'onUpdate:modelValue': (ne) => (f.value = ne),
            activator: 'parent',
            contentClass: 'v-autocomplete__content',
            disabled: O.value,
            eager: e.eager,
            maxHeight: 310,
            openOnClick: !1,
            closeOnContentClick: !1,
            transition: e.transition,
            onAfterLeave: oe,
           },
           e.menuProps
          ),
          {
           default: () => [
            ee &&
             u(
              Ya,
              z(
               {
                ref: W,
                selected: p.value,
                selectStrategy: e.multiple ? 'independent' : 'single-independent',
                onMousedown: (ne) => ne.preventDefault(),
                onKeydown: N,
                onFocusin: q,
                onFocusout: Y,
                onScrollPassive: te,
                tabindex: '-1',
                'aria-live': 'polite',
                color: e.itemColor ?? e.color,
               },
               e.listProps
              ),
              {
               default: () => {
                var ne, se, re;
                return [
                 (ne = t['prepend-item']) == null ? void 0 : ne.call(t),
                 !_.value.length &&
                  !e.hideNoData &&
                  (((se = t['no-data']) == null ? void 0 : se.call(t)) ??
                   u(Bt, { title: a(e.noDataText) }, null)),
                 u(
                  Ka,
                  { ref: c, renderless: !0, items: _.value },
                  {
                   default: (ce) => {
                    var Ke;
                    let { item: Ve, index: Qe, itemRef: Pe } = ce;
                    const kt = z(Ve.props, {
                     ref: Pe,
                     key: Qe,
                     active: F.value && Qe === 0 ? !0 : void 0,
                     onClick: () => Ce(Ve, null),
                    });
                    return (
                     ((Ke = t.item) == null ? void 0 : Ke.call(t, { item: Ve, index: Qe, props: kt })) ??
                     u(Bt, z(kt, { role: 'option' }), {
                      prepend: (Wt) => {
                       let { isSelected: jt } = Wt;
                       return u(ie, null, [
                        e.multiple && !e.hideSelected
                         ? u(At, { key: Ve.value, modelValue: jt, ripple: !1, tabindex: '-1' }, null)
                         : void 0,
                        Ve.props.prependAvatar && u(vt, { image: Ve.props.prependAvatar }, null),
                        Ve.props.prependIcon && u(be, { icon: Ve.props.prependIcon }, null),
                       ]);
                      },
                      title: () => {
                       var Wt, jt;
                       return o.value
                        ? Ve.title
                        : sm(
                           Ve.title,
                           (Wt = x(Ve)) == null ? void 0 : Wt.title,
                           ((jt = B.value) == null ? void 0 : jt.length) ?? 0
                          );
                      },
                     })
                    );
                   },
                  }
                 ),
                 (re = t['append-item']) == null ? void 0 : re.call(t),
                ];
               },
              }
             ),
           ],
          }
         ),
         w.value.map((ne, se) => {
          function re(Pe) {
           Pe.stopPropagation(), Pe.preventDefault(), Ce(ne, !1);
          }
          const ce = {
            'onClick:close': re,
            onKeydown(Pe) {
             (Pe.key !== 'Enter' && Pe.key !== ' ') ||
              (Pe.preventDefault(), Pe.stopPropagation(), re(Pe));
            },
            onMousedown(Pe) {
             Pe.preventDefault(), Pe.stopPropagation();
            },
            modelValue: !0,
            'onUpdate:modelValue': void 0,
           },
           Ve = T.value ? !!t.chip : !!t.selection,
           Qe = Ve
            ? Ea(
               T.value
                ? t.chip({ item: ne, index: se, props: ce })
                : t.selection({ item: ne, index: se })
              )
            : void 0;
          if (!(Ve && !Qe))
           return u(
            'div',
            {
             key: ne.value,
             class: [
              'v-autocomplete__selection',
              se === m.value && ['v-autocomplete__selection--selected', k.value],
             ],
             style: se === m.value ? I.value : {},
            },
            [
             T.value
              ? t.chip
                ? u(
                   fe,
                   {
                    key: 'chip-defaults',
                    defaults: { VChip: { closable: e.closableChips, size: 'small', text: ne.title } },
                   },
                   { default: () => [Qe] }
                  )
                : u(
                   Mn,
                   z(
                    {
                     key: 'chip',
                     closable: e.closableChips,
                     size: 'small',
                     text: ne.title,
                     disabled: ne.props.disabled,
                    },
                    ce
                   ),
                   null
                  )
              : Qe ??
                u('span', { class: 'v-autocomplete__selection-text' }, [
                 ne.title,
                 e.multiple &&
                  se < w.value.length - 1 &&
                  u('span', { class: 'v-autocomplete__selection-comma' }, [Lt(',')]),
                ]),
            ]
           );
         }),
        ]),
       'append-inner': function () {
        var ce;
        for (var ne = arguments.length, se = new Array(ne), re = 0; re < ne; re++)
         se[re] = arguments[re];
        return u(ie, null, [
         (ce = t['append-inner']) == null ? void 0 : ce.call(t, ...se),
         e.menuIcon
          ? u(
             be,
             {
              class: 'v-autocomplete__menu-icon',
              icon: e.menuIcon,
              onMousedown: L,
              onClick: br,
              'aria-label': a(b.value),
              title: a(b.value),
              tabindex: '-1',
             },
             null
            )
          : void 0,
        ]);
       },
      }
     );
    }),
    ht({ isFocused: i, isPristine: o, menu: f, search: B, filteredItems: P, select: Ce }, l)
   );
  },
 }),
 vm = D(
  {
   bordered: Boolean,
   color: String,
   content: [Number, String],
   dot: Boolean,
   floating: Boolean,
   icon: ue,
   inline: Boolean,
   label: { type: String, default: '$vuetify.badge' },
   max: [Number, String],
   modelValue: { type: Boolean, default: !0 },
   offsetX: [Number, String],
   offsetY: [Number, String],
   textColor: String,
   ...J(),
   ...Dt({ location: 'top end' }),
   ..._e(),
   ...de(),
   ...me(),
   ...St({ transition: 'scale-rotate-transition' }),
  },
  'VBadge'
 ),
 fm = $()({
  name: 'VBadge',
  inheritAttrs: !1,
  props: vm(),
  setup(e, n) {
   const { backgroundColorClasses: t, backgroundColorStyles: a } = we(M(e, 'color')),
    { roundedClasses: l } = De(e),
    { t: i } = $e(),
    { textColorClasses: o, textColorStyles: r } = Ge(M(e, 'textColor')),
    { themeClasses: s } = zr(),
    { locationStyles: c } = fn(
     e,
     !0,
     (d) =>
      (e.floating ? (e.dot ? 2 : 4) : e.dot ? 8 : 12) +
      (['top', 'bottom'].includes(d)
       ? +(e.offsetY ?? 0)
       : ['left', 'right'].includes(d)
         ? +(e.offsetX ?? 0)
         : 0)
    );
   return (
    R(() => {
     const d = Number(e.content),
      f = !e.max || isNaN(d) ? e.content : d <= +e.max ? d : `${e.max}+`,
      [m, v] = kl(n.attrs, ['aria-atomic', 'aria-label', 'aria-live', 'role', 'title']);
     return u(
      e.tag,
      z(
       {
        class: [
         'v-badge',
         {
          'v-badge--bordered': e.bordered,
          'v-badge--dot': e.dot,
          'v-badge--floating': e.floating,
          'v-badge--inline': e.inline,
         },
         e.class,
        ],
       },
       v,
       { style: e.style }
      ),
      {
       default: () => {
        var b, g;
        return [
         u('div', { class: 'v-badge__wrapper' }, [
          (g = (b = n.slots).default) == null ? void 0 : g.call(b),
          u(
           Xe,
           { transition: e.transition },
           {
            default: () => {
             var h, S;
             return [
              Ae(
               u(
                'span',
                z(
                 {
                  class: ['v-badge__badge', s.value, t.value, l.value, o.value],
                  style: [a.value, r.value, e.inline ? {} : c.value],
                  'aria-atomic': 'true',
                  'aria-label': i(e.label, d),
                  'aria-live': 'polite',
                  role: 'status',
                 },
                 m
                ),
                [
                 e.dot
                  ? void 0
                  : n.slots.badge
                    ? (S = (h = n.slots).badge) == null
                      ? void 0
                      : S.call(h)
                    : e.icon
                      ? u(be, { icon: e.icon }, null)
                      : f,
                ]
               ),
               [[bt, e.modelValue]]
              ),
             ];
            },
           }
          ),
         ]),
        ];
       },
      }
     );
    }),
    {}
   );
  },
 }),
 mm = D({ color: String, density: String, ...J() }, 'VBannerActions'),
 Gu = $()({
  name: 'VBannerActions',
  props: mm(),
  setup(e, n) {
   let { slots: t } = n;
   return (
    Be({ VBtn: { color: e.color, density: e.density, slim: !0, variant: 'text' } }),
    R(() => {
     var a;
     return u('div', { class: ['v-banner-actions', e.class], style: e.style }, [
      (a = t.default) == null ? void 0 : a.call(t),
     ]);
    }),
    {}
   );
  },
 }),
 Uu = Pt('v-banner-text'),
 gm = D(
  {
   avatar: String,
   bgColor: String,
   color: String,
   icon: ue,
   lines: String,
   stacked: Boolean,
   sticky: Boolean,
   text: String,
   ...st(),
   ...J(),
   ...He(),
   ...Ne(),
   ...mn({ mobile: null }),
   ...Oe(),
   ...Dt(),
   ...Dn(),
   ..._e(),
   ...de(),
   ...me(),
  },
  'VBanner'
 ),
 hm = $()({
  name: 'VBanner',
  props: gm(),
  setup(e, n) {
   let { slots: t } = n;
   const { backgroundColorClasses: a, backgroundColorStyles: l } = we(e, 'bgColor'),
    { borderClasses: i } = ft(e),
    { densityClasses: o } = Je(e),
    { displayClasses: r, mobile: s } = gt(e),
    { dimensionStyles: c } = ze(e),
    { elevationClasses: d } = Ye(e),
    { locationStyles: f } = fn(e),
    { positionClasses: m } = pn(e),
    { roundedClasses: v } = De(e),
    { themeClasses: b } = Se(e),
    g = M(e, 'color'),
    h = M(e, 'density');
   Be({ VBannerActions: { color: g, density: h } }),
    R(() => {
     const S = !!(e.text || t.text),
      k = !!(e.avatar || e.icon),
      I = !!(k || t.prepend);
     return u(
      e.tag,
      {
       class: [
        'v-banner',
        {
         'v-banner--stacked': e.stacked || s.value,
         'v-banner--sticky': e.sticky,
         [`v-banner--${e.lines}-line`]: !!e.lines,
        },
        b.value,
        a.value,
        i.value,
        o.value,
        r.value,
        d.value,
        m.value,
        v.value,
        e.class,
       ],
       style: [l.value, c.value, f.value, e.style],
       role: 'banner',
      },
      {
       default: () => {
        var B;
        return [
         I &&
          u('div', { key: 'prepend', class: 'v-banner__prepend' }, [
           t.prepend
            ? u(
               fe,
               {
                key: 'prepend-defaults',
                disabled: !k,
                defaults: {
                 VAvatar: { color: g.value, density: h.value, icon: e.icon, image: e.avatar },
                },
               },
               t.prepend
              )
            : u(
               vt,
               {
                key: 'prepend-avatar',
                color: g.value,
                density: h.value,
                icon: e.icon,
                image: e.avatar,
               },
               null
              ),
          ]),
         u('div', { class: 'v-banner__content' }, [
          S &&
           u(
            Uu,
            { key: 'text' },
            {
             default: () => {
              var w;
              return [((w = t.text) == null ? void 0 : w.call(t)) ?? e.text];
             },
            }
           ),
          (B = t.default) == null ? void 0 : B.call(t),
         ]),
         t.actions && u(Gu, { key: 'actions' }, t.actions),
        ];
       },
      }
     );
    });
  },
 }),
 ym = D(
  {
   baseColor: String,
   bgColor: String,
   color: String,
   grow: Boolean,
   mode: { type: String, validator: (e) => !e || ['horizontal', 'shift'].includes(e) },
   height: { type: [Number, String], default: 56 },
   active: { type: Boolean, default: !0 },
   ...st(),
   ...J(),
   ...He(),
   ...Oe(),
   ..._e(),
   ...on({ name: 'bottom-navigation' }),
   ...de({ tag: 'header' }),
   ...cn({ selectedClass: 'v-btn--selected' }),
   ...me(),
  },
  'VBottomNavigation'
 ),
 bm = $()({
  name: 'VBottomNavigation',
  props: ym(),
  emits: { 'update:active': (e) => !0, 'update:modelValue': (e) => !0 },
  setup(e, n) {
   let { slots: t } = n;
   const { themeClasses: a } = zr(),
    { borderClasses: l } = ft(e),
    { backgroundColorClasses: i, backgroundColorStyles: o } = we(M(e, 'bgColor')),
    { densityClasses: r } = Je(e),
    { elevationClasses: s } = Ye(e),
    { roundedClasses: c } = De(e),
    { ssrBootStyles: d } = un(),
    f = y(
     () => Number(e.height) - (e.density === 'comfortable' ? 8 : 0) - (e.density === 'compact' ? 16 : 0)
    ),
    m = le(e, 'active', e.active),
    { layoutItemStyles: v, layoutIsReady: b } = rn({
     id: e.name,
     order: y(() => parseInt(e.order, 10)),
     position: y(() => 'bottom'),
     layoutSize: y(() => (m.value ? f.value : 0)),
     elementSize: f,
     active: m,
     absolute: M(e, 'absolute'),
    });
   return (
    Ht(e, bi),
    Be(
     {
      VBtn: {
       baseColor: M(e, 'baseColor'),
       color: M(e, 'color'),
       density: M(e, 'density'),
       stacked: y(() => e.mode !== 'horizontal'),
       variant: 'text',
      },
     },
     { scoped: !0 }
    ),
    R(() =>
     u(
      e.tag,
      {
       class: [
        'v-bottom-navigation',
        {
         'v-bottom-navigation--active': m.value,
         'v-bottom-navigation--grow': e.grow,
         'v-bottom-navigation--shift': e.mode === 'shift',
        },
        a.value,
        i.value,
        l.value,
        r.value,
        s.value,
        c.value,
        e.class,
       ],
       style: [o.value, v.value, { height: Z(f.value) }, d.value, e.style],
      },
      {
       default: () => [t.default && u('div', { class: 'v-bottom-navigation__content' }, [t.default()])],
      }
     )
    ),
    b
   );
  },
 }),
 Ku = D(
  {
   fullscreen: Boolean,
   retainFocus: { type: Boolean, default: !0 },
   scrollable: Boolean,
   ...ia({
    origin: 'center center',
    scrollStrategy: 'block',
    transition: { component: $a },
    zIndex: 2400,
   }),
  },
  'VDialog'
 ),
 Ol = $()({
  name: 'VDialog',
  props: Ku(),
  emits: { 'update:modelValue': (e) => !0, afterLeave: () => !0 },
  setup(e, n) {
   let { emit: t, slots: a } = n;
   const l = le(e, 'modelValue'),
    { scopeId: i } = gn(),
    o = j();
   function r(d) {
    var v, b;
    const f = d.relatedTarget,
     m = d.target;
    if (
     f !== m &&
     (v = o.value) != null &&
     v.contentEl &&
     (b = o.value) != null &&
     b.globalTop &&
     ![document, o.value.contentEl].includes(m) &&
     !o.value.contentEl.contains(m)
    ) {
     const g = Nn(o.value.contentEl);
     if (!g.length) return;
     const h = g[0],
      S = g[g.length - 1];
     f === h ? S.focus() : h.focus();
    }
   }
   ke &&
    X(
     () => l.value && e.retainFocus,
     (d) => {
      d ? document.addEventListener('focusin', r) : document.removeEventListener('focusin', r);
     },
     { immediate: !0 }
    );
   function s() {
    var d;
    (d = o.value) != null &&
     d.contentEl &&
     !o.value.contentEl.contains(document.activeElement) &&
     o.value.contentEl.focus({ preventScroll: !0 });
   }
   function c() {
    t('afterLeave');
   }
   return (
    X(l, async (d) => {
     var f;
     d || (await he(), (f = o.value.activatorEl) == null || f.focus({ preventScroll: !0 }));
    }),
    R(() => {
     const d = wt.filterProps(e),
      f = z({ 'aria-haspopup': 'dialog', 'aria-expanded': String(l.value) }, e.activatorProps),
      m = z({ tabindex: -1 }, e.contentProps);
     return u(
      wt,
      z(
       {
        ref: o,
        class: [
         'v-dialog',
         { 'v-dialog--fullscreen': e.fullscreen, 'v-dialog--scrollable': e.scrollable },
         e.class,
        ],
        style: e.style,
       },
       d,
       {
        modelValue: l.value,
        'onUpdate:modelValue': (v) => (l.value = v),
        'aria-modal': 'true',
        activatorProps: f,
        contentProps: m,
        role: 'dialog',
        onAfterEnter: s,
        onAfterLeave: c,
       },
       i
      ),
      {
       activator: a.activator,
       default: function () {
        for (var v = arguments.length, b = new Array(v), g = 0; g < v; g++) b[g] = arguments[g];
        return u(
         fe,
         { root: 'VDialog' },
         {
          default: () => {
           var h;
           return [(h = a.default) == null ? void 0 : h.call(a, ...b)];
          },
         }
        );
       },
      }
     );
    }),
    ht({}, o)
   );
  },
 }),
 Sm = D({ inset: Boolean, ...Ku({ transition: 'bottom-sheet-transition' }) }, 'VBottomSheet'),
 km = $()({
  name: 'VBottomSheet',
  props: Sm(),
  emits: { 'update:modelValue': (e) => !0 },
  setup(e, n) {
   let { slots: t } = n;
   const a = le(e, 'modelValue');
   return (
    R(() => {
     const l = Ol.filterProps(e);
     return u(
      Ol,
      z(l, {
       contentClass: ['v-bottom-sheet__content', e.contentClass],
       modelValue: a.value,
       'onUpdate:modelValue': (i) => (a.value = i),
       class: ['v-bottom-sheet', { 'v-bottom-sheet--inset': e.inset }, e.class],
       style: e.style,
      }),
      t
     );
    }),
    {}
   );
  },
 }),
 xm = D({ divider: [Number, String], ...J() }, 'VBreadcrumbsDivider'),
 qu = $()({
  name: 'VBreadcrumbsDivider',
  props: xm(),
  setup(e, n) {
   let { slots: t } = n;
   return (
    R(() => {
     var a;
     return u('li', { class: ['v-breadcrumbs-divider', e.class], style: e.style }, [
      ((a = t == null ? void 0 : t.default) == null ? void 0 : a.call(t)) ?? e.divider,
     ]);
    }),
    {}
   );
  },
 }),
 wm = D(
  {
   active: Boolean,
   activeClass: String,
   activeColor: String,
   color: String,
   disabled: Boolean,
   title: String,
   ...J(),
   ...na(),
   ...de({ tag: 'li' }),
  },
  'VBreadcrumbsItem'
 ),
 Xu = $()({
  name: 'VBreadcrumbsItem',
  props: wm(),
  setup(e, n) {
   let { slots: t, attrs: a } = n;
   const l = ta(e, a),
    i = y(() => {
     var c;
     return e.active || ((c = l.isActive) == null ? void 0 : c.value);
    }),
    o = y(() => (i.value ? e.activeColor : e.color)),
    { textColorClasses: r, textColorStyles: s } = Ge(o);
   return (
    R(() =>
     u(
      e.tag,
      {
       class: [
        'v-breadcrumbs-item',
        {
         'v-breadcrumbs-item--active': i.value,
         'v-breadcrumbs-item--disabled': e.disabled,
         [`${e.activeClass}`]: i.value && e.activeClass,
        },
        r.value,
        e.class,
       ],
       style: [s.value, e.style],
       'aria-current': i.value ? 'page' : void 0,
      },
      {
       default: () => {
        var c, d;
        return [
         l.isLink.value
          ? u(
             'a',
             {
              class: 'v-breadcrumbs-item--link',
              href: l.href.value,
              'aria-current': i.value ? 'page' : void 0,
              onClick: l.navigate,
             },
             [((d = t.default) == null ? void 0 : d.call(t)) ?? e.title]
            )
          : ((c = t.default) == null ? void 0 : c.call(t)) ?? e.title,
        ];
       },
      }
     )
    ),
    {}
   );
  },
 }),
 Cm = D(
  {
   activeClass: String,
   activeColor: String,
   bgColor: String,
   color: String,
   disabled: Boolean,
   divider: { type: String, default: '/' },
   icon: ue,
   items: { type: Array, default: () => [] },
   ...J(),
   ...He(),
   ..._e(),
   ...de({ tag: 'ul' }),
  },
  'VBreadcrumbs'
 ),
 Vm = $()({
  name: 'VBreadcrumbs',
  props: Cm(),
  setup(e, n) {
   let { slots: t } = n;
   const { backgroundColorClasses: a, backgroundColorStyles: l } = we(M(e, 'bgColor')),
    { densityClasses: i } = Je(e),
    { roundedClasses: o } = De(e);
   Be({
    VBreadcrumbsDivider: { divider: M(e, 'divider') },
    VBreadcrumbsItem: {
     activeClass: M(e, 'activeClass'),
     activeColor: M(e, 'activeColor'),
     color: M(e, 'color'),
     disabled: M(e, 'disabled'),
    },
   });
   const r = y(() =>
    e.items.map((s) => (typeof s == 'string' ? { item: { title: s }, raw: s } : { item: s, raw: s }))
   );
   return (
    R(() => {
     const s = !!(t.prepend || e.icon);
     return u(
      e.tag,
      { class: ['v-breadcrumbs', a.value, i.value, o.value, e.class], style: [l.value, e.style] },
      {
       default: () => {
        var c;
        return [
         s &&
          u('li', { key: 'prepend', class: 'v-breadcrumbs__prepend' }, [
           t.prepend
            ? u(
               fe,
               {
                key: 'prepend-defaults',
                disabled: !e.icon,
                defaults: { VIcon: { icon: e.icon, start: !0 } },
               },
               t.prepend
              )
            : u(be, { key: 'prepend-icon', start: !0, icon: e.icon }, null),
          ]),
         r.value.map((d, f, m) => {
          var g;
          let { item: v, raw: b } = d;
          return u(ie, null, [
           ((g = t.item) == null ? void 0 : g.call(t, { item: v, index: f })) ??
            u(Xu, z({ key: f, disabled: f >= m.length - 1 }, typeof v == 'string' ? { title: v } : v), {
             default: t.title
              ? () => {
                 var h;
                 return (h = t.title) == null ? void 0 : h.call(t, { item: v, index: f });
                }
              : void 0,
            }),
           f < m.length - 1 &&
            u(qu, null, {
             default: t.divider
              ? () => {
                 var h;
                 return (h = t.divider) == null ? void 0 : h.call(t, { item: b, index: f });
                }
              : void 0,
            }),
          ]);
         }),
         (c = t.default) == null ? void 0 : c.call(t),
        ];
       },
      }
     );
    }),
    {}
   );
  },
 }),
 Zu = $()({
  name: 'VCardActions',
  props: J(),
  setup(e, n) {
   let { slots: t } = n;
   return (
    Be({ VBtn: { slim: !0, variant: 'text' } }),
    R(() => {
     var a;
     return u('div', { class: ['v-card-actions', e.class], style: e.style }, [
      (a = t.default) == null ? void 0 : a.call(t),
     ]);
    }),
    {}
   );
  },
 }),
 Pm = D({ opacity: [Number, String], ...J(), ...de() }, 'VCardSubtitle'),
 Ju = $()({
  name: 'VCardSubtitle',
  props: Pm(),
  setup(e, n) {
   let { slots: t } = n;
   return (
    R(() =>
     u(
      e.tag,
      {
       class: ['v-card-subtitle', e.class],
       style: [{ '--v-card-subtitle-opacity': e.opacity }, e.style],
      },
      t
     )
    ),
    {}
   );
  },
 }),
 Qu = Pt('v-card-title'),
 Im = D(
  {
   appendAvatar: String,
   appendIcon: ue,
   prependAvatar: String,
   prependIcon: ue,
   subtitle: [String, Number],
   title: [String, Number],
   ...J(),
   ...He(),
  },
  'VCardItem'
 ),
 es = $()({
  name: 'VCardItem',
  props: Im(),
  setup(e, n) {
   let { slots: t } = n;
   return (
    R(() => {
     var c;
     const a = !!(e.prependAvatar || e.prependIcon),
      l = !!(a || t.prepend),
      i = !!(e.appendAvatar || e.appendIcon),
      o = !!(i || t.append),
      r = !!(e.title != null || t.title),
      s = !!(e.subtitle != null || t.subtitle);
     return u('div', { class: ['v-card-item', e.class], style: e.style }, [
      l &&
       u('div', { key: 'prepend', class: 'v-card-item__prepend' }, [
        t.prepend
         ? u(
            fe,
            {
             key: 'prepend-defaults',
             disabled: !a,
             defaults: {
              VAvatar: { density: e.density, image: e.prependAvatar },
              VIcon: { density: e.density, icon: e.prependIcon },
             },
            },
            t.prepend
           )
         : u(ie, null, [
            e.prependAvatar &&
             u(vt, { key: 'prepend-avatar', density: e.density, image: e.prependAvatar }, null),
            e.prependIcon &&
             u(be, { key: 'prepend-icon', density: e.density, icon: e.prependIcon }, null),
           ]),
       ]),
      u('div', { class: 'v-card-item__content' }, [
       r &&
        u(
         Qu,
         { key: 'title' },
         {
          default: () => {
           var d;
           return [((d = t.title) == null ? void 0 : d.call(t)) ?? e.title];
          },
         }
        ),
       s &&
        u(
         Ju,
         { key: 'subtitle' },
         {
          default: () => {
           var d;
           return [((d = t.subtitle) == null ? void 0 : d.call(t)) ?? e.subtitle];
          },
         }
        ),
       (c = t.default) == null ? void 0 : c.call(t),
      ]),
      o &&
       u('div', { key: 'append', class: 'v-card-item__append' }, [
        t.append
         ? u(
            fe,
            {
             key: 'append-defaults',
             disabled: !i,
             defaults: {
              VAvatar: { density: e.density, image: e.appendAvatar },
              VIcon: { density: e.density, icon: e.appendIcon },
             },
            },
            t.append
           )
         : u(ie, null, [
            e.appendIcon && u(be, { key: 'append-icon', density: e.density, icon: e.appendIcon }, null),
            e.appendAvatar &&
             u(vt, { key: 'append-avatar', density: e.density, image: e.appendAvatar }, null),
           ]),
       ]),
     ]);
    }),
    {}
   );
  },
 }),
 _m = D({ opacity: [Number, String], ...J(), ...de() }, 'VCardText'),
 ts = $()({
  name: 'VCardText',
  props: _m(),
  setup(e, n) {
   let { slots: t } = n;
   return (
    R(() =>
     u(
      e.tag,
      { class: ['v-card-text', e.class], style: [{ '--v-card-text-opacity': e.opacity }, e.style] },
      t
     )
    ),
    {}
   );
  },
 }),
 Tm = D(
  {
   appendAvatar: String,
   appendIcon: ue,
   disabled: Boolean,
   flat: Boolean,
   hover: Boolean,
   image: String,
   link: { type: Boolean, default: void 0 },
   prependAvatar: String,
   prependIcon: ue,
   ripple: { type: [Boolean, Object], default: !0 },
   subtitle: [String, Number],
   text: [String, Number],
   title: [String, Number],
   ...st(),
   ...J(),
   ...He(),
   ...Ne(),
   ...Oe(),
   ...Na(),
   ...Dt(),
   ...Dn(),
   ..._e(),
   ...na(),
   ...de(),
   ...me(),
   ...mt({ variant: 'elevated' }),
  },
  'VCard'
 ),
 Am = $()({
  name: 'VCard',
  directives: { Ripple: pt },
  props: Tm(),
  setup(e, n) {
   let { attrs: t, slots: a } = n;
   const { themeClasses: l } = Se(e),
    { borderClasses: i } = ft(e),
    { colorClasses: o, colorStyles: r, variantClasses: s } = sn(e),
    { densityClasses: c } = Je(e),
    { dimensionStyles: d } = ze(e),
    { elevationClasses: f } = Ye(e),
    { loaderClasses: m } = Qn(e),
    { locationStyles: v } = fn(e),
    { positionClasses: b } = pn(e),
    { roundedClasses: g } = De(e),
    h = ta(e, t),
    S = y(() => e.link !== !1 && h.isLink.value),
    k = y(() => !e.disabled && e.link !== !1 && (e.link || h.isClickable.value));
   return (
    R(() => {
     const I = S.value ? 'a' : e.tag,
      B = !!(a.title || e.title != null),
      w = !!(a.subtitle || e.subtitle != null),
      V = B || w,
      C = !!(a.append || e.appendAvatar || e.appendIcon),
      P = !!(a.prepend || e.prependAvatar || e.prependIcon),
      x = !!(a.image || e.image),
      _ = V || P || C,
      T = !!(a.text || e.text != null);
     return Ae(
      u(
       I,
       {
        class: [
         'v-card',
         {
          'v-card--disabled': e.disabled,
          'v-card--flat': e.flat,
          'v-card--hover': e.hover && !(e.disabled || e.flat),
          'v-card--link': k.value,
         },
         l.value,
         i.value,
         o.value,
         c.value,
         f.value,
         m.value,
         b.value,
         g.value,
         s.value,
         e.class,
        ],
        style: [r.value, d.value, v.value, e.style],
        href: h.href.value,
        onClick: k.value && h.navigate,
        tabindex: e.disabled ? -1 : void 0,
       },
       {
        default: () => {
         var A;
         return [
          x &&
           u('div', { key: 'image', class: 'v-card__image' }, [
            a.image
             ? u(
                fe,
                {
                 key: 'image-defaults',
                 disabled: !e.image,
                 defaults: { VImg: { cover: !0, src: e.image } },
                },
                a.image
               )
             : u(Tt, { key: 'image-img', cover: !0, src: e.image }, null),
           ]),
          u(
           ea,
           {
            name: 'v-card',
            active: !!e.loading,
            color: typeof e.loading == 'boolean' ? void 0 : e.loading,
           },
           { default: a.loader }
          ),
          _ &&
           u(
            es,
            {
             key: 'item',
             prependAvatar: e.prependAvatar,
             prependIcon: e.prependIcon,
             title: e.title,
             subtitle: e.subtitle,
             appendAvatar: e.appendAvatar,
             appendIcon: e.appendIcon,
            },
            {
             default: a.item,
             prepend: a.prepend,
             title: a.title,
             subtitle: a.subtitle,
             append: a.append,
            }
           ),
          T &&
           u(
            ts,
            { key: 'text' },
            {
             default: () => {
              var p;
              return [((p = a.text) == null ? void 0 : p.call(a)) ?? e.text];
             },
            }
           ),
          (A = a.default) == null ? void 0 : A.call(a),
          a.actions && u(Zu, null, { default: a.actions }),
          zt(k.value, 'v-card'),
         ];
        },
       }
      ),
      [[ot('ripple'), k.value && e.ripple]]
     );
    }),
    {}
   );
  },
 }),
 Bm = (e) => {
  const { touchstartX: n, touchendX: t, touchstartY: a, touchendY: l } = e,
   i = 0.5,
   o = 16;
  (e.offsetX = t - n),
   (e.offsetY = l - a),
   Math.abs(e.offsetY) < i * Math.abs(e.offsetX) &&
    (e.left && t < n - o && e.left(e), e.right && t > n + o && e.right(e)),
   Math.abs(e.offsetX) < i * Math.abs(e.offsetY) &&
    (e.up && l < a - o && e.up(e), e.down && l > a + o && e.down(e));
 };
function Dm(e, n) {
 var a;
 const t = e.changedTouches[0];
 (n.touchstartX = t.clientX),
  (n.touchstartY = t.clientY),
  (a = n.start) == null || a.call(n, { originalEvent: e, ...n });
}
function pm(e, n) {
 var a;
 const t = e.changedTouches[0];
 (n.touchendX = t.clientX),
  (n.touchendY = t.clientY),
  (a = n.end) == null || a.call(n, { originalEvent: e, ...n }),
  Bm(n);
}
function Em(e, n) {
 var a;
 const t = e.changedTouches[0];
 (n.touchmoveX = t.clientX),
  (n.touchmoveY = t.clientY),
  (a = n.move) == null || a.call(n, { originalEvent: e, ...n });
}
function Mm() {
 let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
 const n = {
  touchstartX: 0,
  touchstartY: 0,
  touchendX: 0,
  touchendY: 0,
  touchmoveX: 0,
  touchmoveY: 0,
  offsetX: 0,
  offsetY: 0,
  left: e.left,
  right: e.right,
  up: e.up,
  down: e.down,
  start: e.start,
  move: e.move,
  end: e.end,
 };
 return { touchstart: (t) => Dm(t, n), touchend: (t) => pm(t, n), touchmove: (t) => Em(t, n) };
}
function $m(e, n) {
 var r;
 const t = n.value,
  a = t != null && t.parent ? e.parentElement : e,
  l = (t == null ? void 0 : t.options) ?? { passive: !0 },
  i = (r = n.instance) == null ? void 0 : r.$.uid;
 if (!a || !i) return;
 const o = Mm(n.value);
 (a._touchHandlers = a._touchHandlers ?? Object.create(null)),
  (a._touchHandlers[i] = o),
  fr(o).forEach((s) => {
   a.addEventListener(s, o[s], l);
  });
}
function Fm(e, n) {
 var i, o;
 const t = (i = n.value) != null && i.parent ? e.parentElement : e,
  a = (o = n.instance) == null ? void 0 : o.$.uid;
 if (!(t != null && t._touchHandlers) || !a) return;
 const l = t._touchHandlers[a];
 fr(l).forEach((r) => {
  t.removeEventListener(r, l[r]);
 }),
  delete t._touchHandlers[a];
}
const $i = { mounted: $m, unmounted: Fm },
 ns = Symbol.for('vuetify:v-window'),
 as = Symbol.for('vuetify:v-window-group'),
 qa = D(
  {
   continuous: Boolean,
   nextIcon: { type: [Boolean, String, Function, Object], default: '$next' },
   prevIcon: { type: [Boolean, String, Function, Object], default: '$prev' },
   reverse: Boolean,
   showArrows: { type: [Boolean, String], validator: (e) => typeof e == 'boolean' || e === 'hover' },
   touch: { type: [Object, Boolean], default: void 0 },
   direction: { type: String, default: 'horizontal' },
   modelValue: null,
   disabled: Boolean,
   selectedClass: { type: String, default: 'v-window-item--active' },
   mandatory: { type: [Boolean, String], default: 'force' },
   ...J(),
   ...de(),
   ...me(),
  },
  'VWindow'
 ),
 Qt = $()({
  name: 'VWindow',
  directives: { Touch: $i },
  props: qa(),
  emits: { 'update:modelValue': (e) => !0 },
  setup(e, n) {
   let { slots: t } = n;
   const { themeClasses: a } = Se(e),
    { isRtl: l } = Re(),
    { t: i } = $e(),
    o = Ht(e, as),
    r = j(),
    s = y(() => (l.value ? !e.reverse : e.reverse)),
    c = K(!1),
    d = y(() => {
     const B = e.direction === 'vertical' ? 'y' : 'x',
      V = (s.value ? !c.value : c.value) ? '-reverse' : '';
     return `v-window-${B}${V}-transition`;
    }),
    f = K(0),
    m = j(void 0),
    v = y(() => o.items.value.findIndex((B) => o.selected.value.includes(B.id)));
   X(v, (B, w) => {
    const V = o.items.value.length,
     C = V - 1;
    V <= 2
     ? (c.value = B < w)
     : B === C && w === 0
       ? (c.value = !0)
       : B === 0 && w === C
         ? (c.value = !1)
         : (c.value = B < w);
   }),
    Ie(ns, { transition: d, isReversed: c, transitionCount: f, transitionHeight: m, rootRef: r });
   const b = y(() => e.continuous || v.value !== 0),
    g = y(() => e.continuous || v.value !== o.items.value.length - 1);
   function h() {
    b.value && o.prev();
   }
   function S() {
    g.value && o.next();
   }
   const k = y(() => {
     const B = [],
      w = {
       icon: l.value ? e.nextIcon : e.prevIcon,
       class: `v-window__${s.value ? 'right' : 'left'}`,
       onClick: o.prev,
       'aria-label': i('$vuetify.carousel.prev'),
      };
     B.push(b.value ? (t.prev ? t.prev({ props: w }) : u(ye, w, null)) : u('div', null, null));
     const V = {
      icon: l.value ? e.prevIcon : e.nextIcon,
      class: `v-window__${s.value ? 'left' : 'right'}`,
      onClick: o.next,
      'aria-label': i('$vuetify.carousel.next'),
     };
     return B.push(g.value ? (t.next ? t.next({ props: V }) : u(ye, V, null)) : u('div', null, null)), B;
    }),
    I = y(() =>
     e.touch === !1
      ? e.touch
      : {
         ...{
          left: () => {
           s.value ? h() : S();
          },
          right: () => {
           s.value ? S() : h();
          },
          start: (w) => {
           let { originalEvent: V } = w;
           V.stopPropagation();
          },
         },
         ...(e.touch === !0 ? {} : e.touch),
        }
    );
   return (
    R(() =>
     Ae(
      u(
       e.tag,
       {
        ref: r,
        class: [
         'v-window',
         { 'v-window--show-arrows-on-hover': e.showArrows === 'hover' },
         a.value,
         e.class,
        ],
        style: e.style,
       },
       {
        default: () => {
         var B, w;
         return [
          u('div', { class: 'v-window__container', style: { height: m.value } }, [
           (B = t.default) == null ? void 0 : B.call(t, { group: o }),
           e.showArrows !== !1 && u('div', { class: 'v-window__controls' }, [k.value]),
          ]),
          (w = t.additional) == null ? void 0 : w.call(t, { group: o }),
         ];
        },
       }
      ),
      [[ot('touch'), I.value]]
     )
    ),
    { group: o }
   );
  },
 }),
 Lm = D(
  {
   color: String,
   cycle: Boolean,
   delimiterIcon: { type: ue, default: '$delimiter' },
   height: { type: [Number, String], default: 500 },
   hideDelimiters: Boolean,
   hideDelimiterBackground: Boolean,
   interval: { type: [Number, String], default: 6e3, validator: (e) => Number(e) > 0 },
   progress: [Boolean, String],
   verticalDelimiters: [Boolean, String],
   ...qa({ continuous: !0, mandatory: 'force', showArrows: !0 }),
  },
  'VCarousel'
 ),
 Om = $()({
  name: 'VCarousel',
  props: Lm(),
  emits: { 'update:modelValue': (e) => !0 },
  setup(e, n) {
   let { slots: t } = n;
   const a = le(e, 'modelValue'),
    { t: l } = $e(),
    i = j();
   let o = -1;
   X(a, s),
    X(() => e.interval, s),
    X(
     () => e.cycle,
     (c) => {
      c ? s() : window.clearTimeout(o);
     }
    ),
    at(r);
   function r() {
    !e.cycle ||
     !i.value ||
     (o = window.setTimeout(i.value.group.next, +e.interval > 0 ? +e.interval : 6e3));
   }
   function s() {
    window.clearTimeout(o), window.requestAnimationFrame(r);
   }
   return (
    R(() => {
     const c = Qt.filterProps(e);
     return u(
      Qt,
      z({ ref: i }, c, {
       modelValue: a.value,
       'onUpdate:modelValue': (d) => (a.value = d),
       class: [
        'v-carousel',
        {
         'v-carousel--hide-delimiter-background': e.hideDelimiterBackground,
         'v-carousel--vertical-delimiters': e.verticalDelimiters,
        },
        e.class,
       ],
       style: [{ height: Z(e.height) }, e.style],
      }),
      {
       default: t.default,
       additional: (d) => {
        let { group: f } = d;
        return u(ie, null, [
         !e.hideDelimiters &&
          u(
           'div',
           {
            class: 'v-carousel__controls',
            style: {
             left: e.verticalDelimiters === 'left' && e.verticalDelimiters ? 0 : 'auto',
             right: e.verticalDelimiters === 'right' ? 0 : 'auto',
            },
           },
           [
            f.items.value.length > 0 &&
             u(
              fe,
              {
               defaults: {
                VBtn: { color: e.color, icon: e.delimiterIcon, size: 'x-small', variant: 'text' },
               },
               scoped: !0,
              },
              {
               default: () => [
                f.items.value.map((m, v) => {
                 const b = {
                  id: `carousel-item-${m.id}`,
                  'aria-label': l('$vuetify.carousel.ariaLabel.delimiter', v + 1, f.items.value.length),
                  class: ['v-carousel__controls__item', f.isSelected(m.id) && 'v-btn--active'],
                  onClick: () => f.select(m.id, !0),
                 };
                 return t.item ? t.item({ props: b, item: m }) : u(ye, z(m, b), null);
                }),
               ],
              }
             ),
           ]
          ),
         e.progress &&
          u(
           Ra,
           {
            class: 'v-carousel__progress',
            color: typeof e.progress == 'string' ? e.progress : void 0,
            modelValue: ((f.getItemIndex(a.value) + 1) / f.items.value.length) * 100,
           },
           null
          ),
        ]);
       },
       prev: t.prev,
       next: t.next,
      }
     );
    }),
    {}
   );
  },
 }),
 Xa = D(
  {
   reverseTransition: { type: [Boolean, String], default: void 0 },
   transition: { type: [Boolean, String], default: void 0 },
   ...J(),
   ...dn(),
   ...Ai(),
  },
  'VWindowItem'
 ),
 en = $()({
  name: 'VWindowItem',
  directives: { Touch: $i },
  props: Xa(),
  emits: { 'group:selected': (e) => !0 },
  setup(e, n) {
   let { slots: t } = n;
   const a = ge(ns),
    l = vn(e, as),
    { isBooted: i } = un();
   if (!a || !l) throw new Error('[Vuetify] VWindowItem must be used inside VWindow');
   const o = K(!1),
    r = y(() => i.value && (a.isReversed.value ? e.reverseTransition !== !1 : e.transition !== !1));
   function s() {
    !o.value ||
     !a ||
     ((o.value = !1),
     a.transitionCount.value > 0 &&
      ((a.transitionCount.value -= 1),
      a.transitionCount.value === 0 && (a.transitionHeight.value = void 0)));
   }
   function c() {
    var b;
    o.value ||
     !a ||
     ((o.value = !0),
     a.transitionCount.value === 0 &&
      (a.transitionHeight.value = Z((b = a.rootRef.value) == null ? void 0 : b.clientHeight)),
     (a.transitionCount.value += 1));
   }
   function d() {
    s();
   }
   function f(b) {
    o.value &&
     he(() => {
      !r.value || !o.value || !a || (a.transitionHeight.value = Z(b.clientHeight));
     });
   }
   const m = y(() => {
     const b = a.isReversed.value ? e.reverseTransition : e.transition;
     return r.value
      ? {
         name: typeof b != 'string' ? a.transition.value : b,
         onBeforeEnter: c,
         onAfterEnter: s,
         onEnterCancelled: d,
         onBeforeLeave: c,
         onAfterLeave: s,
         onLeaveCancelled: d,
         onEnter: f,
        }
      : !1;
    }),
    { hasContent: v } = Bi(e, l.isSelected);
   return (
    R(() =>
     u(
      Xe,
      { transition: m.value, disabled: !i.value },
      {
       default: () => {
        var b;
        return [
         Ae(
          u('div', { class: ['v-window-item', l.selectedClass.value, e.class], style: e.style }, [
           v.value && ((b = t.default) == null ? void 0 : b.call(t)),
          ]),
          [[bt, l.isSelected.value]]
         ),
        ];
       },
      }
     )
    ),
    { groupItem: l }
   );
  },
 }),
 Rm = D({ ...Ur(), ...Xa() }, 'VCarouselItem'),
 Nm = $()({
  name: 'VCarouselItem',
  inheritAttrs: !1,
  props: Rm(),
  setup(e, n) {
   let { slots: t, attrs: a } = n;
   R(() => {
    const l = Tt.filterProps(e),
     i = en.filterProps(e);
    return u(en, z({ class: ['v-carousel-item', e.class] }, i), { default: () => [u(Tt, z(a, l), t)] });
   });
  },
 }),
 zm = Pt('v-code'),
 Hm = D(
  {
   color: { type: Object },
   disabled: Boolean,
   dotSize: { type: [Number, String], default: 10 },
   height: { type: [Number, String], default: 150 },
   width: { type: [Number, String], default: 300 },
   ...J(),
  },
  'VColorPickerCanvas'
 ),
 Wm = rt({
  name: 'VColorPickerCanvas',
  props: Hm(),
  emits: { 'update:color': (e) => !0, 'update:position': (e) => !0 },
  setup(e, n) {
   let { emit: t } = n;
   const a = K(!1),
    l = j(),
    i = K(parseFloat(e.width)),
    o = K(parseFloat(e.height)),
    r = j({ x: 0, y: 0 }),
    s = y({
     get: () => r.value,
     set(h) {
      var I, B;
      if (!l.value) return;
      const { x: S, y: k } = h;
      (r.value = h),
       t('update:color', {
        h: ((I = e.color) == null ? void 0 : I.h) ?? 0,
        s: Fe(S, 0, i.value) / i.value,
        v: 1 - Fe(k, 0, o.value) / o.value,
        a: ((B = e.color) == null ? void 0 : B.a) ?? 1,
       });
     },
    }),
    c = y(() => {
     const { x: h, y: S } = s.value,
      k = parseInt(e.dotSize, 10) / 2;
     return {
      width: Z(e.dotSize),
      height: Z(e.dotSize),
      transform: `translate(${Z(h - k)}, ${Z(S - k)})`,
     };
    }),
    { resizeRef: d } = yt((h) => {
     var I;
     if (!((I = d.el) != null && I.offsetParent)) return;
     const { width: S, height: k } = h[0].contentRect;
     (i.value = S), (o.value = k);
    });
   function f(h, S, k) {
    const { left: I, top: B, width: w, height: V } = k;
    s.value = { x: Fe(h - I, 0, w), y: Fe(S - B, 0, V) };
   }
   function m(h) {
    h.type === 'mousedown' && h.preventDefault(),
     !e.disabled &&
      (v(h),
      window.addEventListener('mousemove', v),
      window.addEventListener('mouseup', b),
      window.addEventListener('touchmove', v),
      window.addEventListener('touchend', b));
   }
   function v(h) {
    if (e.disabled || !l.value) return;
    a.value = !0;
    const S = Gc(h);
    f(S.clientX, S.clientY, l.value.getBoundingClientRect());
   }
   function b() {
    window.removeEventListener('mousemove', v),
     window.removeEventListener('mouseup', b),
     window.removeEventListener('touchmove', v),
     window.removeEventListener('touchend', b);
   }
   function g() {
    var B;
    if (!l.value) return;
    const h = l.value,
     S = h.getContext('2d');
    if (!S) return;
    const k = S.createLinearGradient(0, 0, h.width, 0);
    k.addColorStop(0, 'hsla(0, 0%, 100%, 1)'),
     k.addColorStop(1, `hsla(${((B = e.color) == null ? void 0 : B.h) ?? 0}, 100%, 50%, 1)`),
     (S.fillStyle = k),
     S.fillRect(0, 0, h.width, h.height);
    const I = S.createLinearGradient(0, 0, 0, h.height);
    I.addColorStop(0, 'hsla(0, 0%, 0%, 0)'),
     I.addColorStop(1, 'hsla(0, 0%, 0%, 1)'),
     (S.fillStyle = I),
     S.fillRect(0, 0, h.width, h.height);
   }
   return (
    X(
     () => {
      var h;
      return (h = e.color) == null ? void 0 : h.h;
     },
     g,
     { immediate: !0 }
    ),
    X(
     () => [i.value, o.value],
     (h, S) => {
      g(), (r.value = { x: (s.value.x * h[0]) / S[0], y: (s.value.y * h[1]) / S[1] });
     },
     { flush: 'post' }
    ),
    X(
     () => e.color,
     () => {
      if (a.value) {
       a.value = !1;
       return;
      }
      r.value = e.color ? { x: e.color.s * i.value, y: (1 - e.color.v) * o.value } : { x: 0, y: 0 };
     },
     { deep: !0, immediate: !0 }
    ),
    at(() => g()),
    R(() =>
     u(
      'div',
      {
       ref: d,
       class: ['v-color-picker-canvas', e.class],
       style: e.style,
       onMousedown: m,
       onTouchstartPassive: m,
      },
      [
       u('canvas', { ref: l, width: i.value, height: o.value }, null),
       e.color &&
        u(
         'div',
         {
          class: ['v-color-picker-canvas__dot', { 'v-color-picker-canvas__dot--disabled': e.disabled }],
          style: c.value,
         },
         null
        ),
      ]
     )
    ),
    {}
   );
  },
 });
function jm(e, n) {
 if (n) {
  const { a: t, ...a } = e;
  return a;
 }
 return e;
}
function Ym(e, n) {
 if (n == null || typeof n == 'string') {
  const t = Br(e);
  return e.a === 1 ? t.slice(0, 7) : t;
 }
 if (typeof n == 'object') {
  let t;
  return (
   Ut(n, ['r', 'g', 'b'])
    ? (t = _t(e))
    : Ut(n, ['h', 's', 'l'])
      ? (t = Vr(e))
      : Ut(n, ['h', 's', 'v']) && (t = e),
   jm(t, !Ut(n, ['a']) && e.a === 1)
  );
 }
 return e;
}
const xn = { h: 0, s: 0, v: 0, a: 1 },
 Rl = {
  inputProps: { type: 'number', min: 0 },
  inputs: [
   {
    label: 'R',
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.r),
    getColor: (e, n) => ({ ...e, r: Number(n) }),
   },
   {
    label: 'G',
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.g),
    getColor: (e, n) => ({ ...e, g: Number(n) }),
   },
   {
    label: 'B',
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.b),
    getColor: (e, n) => ({ ...e, b: Number(n) }),
   },
   {
    label: 'A',
    max: 1,
    step: 0.01,
    getValue: (e) => {
     let { a: n } = e;
     return n != null ? Math.round(n * 100) / 100 : 1;
    },
    getColor: (e, n) => ({ ...e, a: Number(n) }),
   },
  ],
  to: _t,
  from: Ma,
 };
var or;
const Gm = { ...Rl, inputs: (or = Rl.inputs) == null ? void 0 : or.slice(0, 3) },
 Nl = {
  inputProps: { type: 'number', min: 0 },
  inputs: [
   {
    label: 'H',
    max: 360,
    step: 1,
    getValue: (e) => Math.round(e.h),
    getColor: (e, n) => ({ ...e, h: Number(n) }),
   },
   {
    label: 'S',
    max: 1,
    step: 0.01,
    getValue: (e) => Math.round(e.s * 100) / 100,
    getColor: (e, n) => ({ ...e, s: Number(n) }),
   },
   {
    label: 'L',
    max: 1,
    step: 0.01,
    getValue: (e) => Math.round(e.l * 100) / 100,
    getColor: (e, n) => ({ ...e, l: Number(n) }),
   },
   {
    label: 'A',
    max: 1,
    step: 0.01,
    getValue: (e) => {
     let { a: n } = e;
     return n != null ? Math.round(n * 100) / 100 : 1;
    },
    getColor: (e, n) => ({ ...e, a: Number(n) }),
   },
  ],
  to: Vr,
  from: si,
 },
 Um = { ...Nl, inputs: Nl.inputs.slice(0, 3) },
 ls = {
  inputProps: { type: 'text' },
  inputs: [{ label: 'HEXA', getValue: (e) => e, getColor: (e, n) => n }],
  to: Br,
  from: Ar,
 },
 Km = { ...ls, inputs: [{ label: 'HEX', getValue: (e) => e.slice(0, 7), getColor: (e, n) => n }] },
 Zt = { rgb: Gm, rgba: Rl, hsl: Um, hsla: Nl, hex: Km, hexa: ls },
 qm = (e) => {
  let { label: n, ...t } = e;
  return u('div', { class: 'v-color-picker-edit__input' }, [u('input', t, null), u('span', null, [n])]);
 },
 Xm = D(
  {
   color: Object,
   disabled: Boolean,
   mode: { type: String, default: 'rgba', validator: (e) => Object.keys(Zt).includes(e) },
   modes: {
    type: Array,
    default: () => Object.keys(Zt),
    validator: (e) => Array.isArray(e) && e.every((n) => Object.keys(Zt).includes(n)),
   },
   ...J(),
  },
  'VColorPickerEdit'
 ),
 Zm = rt({
  name: 'VColorPickerEdit',
  props: Xm(),
  emits: { 'update:color': (e) => !0, 'update:mode': (e) => !0 },
  setup(e, n) {
   let { emit: t } = n;
   const a = y(() => e.modes.map((i) => ({ ...Zt[i], name: i }))),
    l = y(() => {
     var r;
     const i = a.value.find((s) => s.name === e.mode);
     if (!i) return [];
     const o = e.color ? i.to(e.color) : null;
     return (r = i.inputs) == null
      ? void 0
      : r.map((s) => {
         let { getValue: c, getColor: d, ...f } = s;
         return {
          ...i.inputProps,
          ...f,
          disabled: e.disabled,
          value: o && c(o),
          onChange: (m) => {
           const v = m.target;
           v && t('update:color', i.from(d(o ?? i.to(xn), v.value)));
          },
         };
        });
    });
   return (
    R(() => {
     var i;
     return u('div', { class: ['v-color-picker-edit', e.class], style: e.style }, [
      (i = l.value) == null ? void 0 : i.map((o) => u(qm, o, null)),
      a.value.length > 1 &&
       u(
        ye,
        {
         icon: '$unfold',
         size: 'x-small',
         variant: 'plain',
         onClick: () => {
          const o = a.value.findIndex((r) => r.name === e.mode);
          t('update:mode', a.value[(o + 1) % a.value.length].name);
         },
        },
        null
       ),
     ]);
    }),
    {}
   );
  },
 }),
 Fi = Symbol.for('vuetify:v-slider');
function zl(e, n, t) {
 const a = t === 'vertical',
  l = n.getBoundingClientRect(),
  i = 'touches' in e ? e.touches[0] : e;
 return a ? i.clientY - (l.top + l.height / 2) : i.clientX - (l.left + l.width / 2);
}
function Jm(e, n) {
 return 'touches' in e && e.touches.length
  ? e.touches[0][n]
  : 'changedTouches' in e && e.changedTouches.length
    ? e.changedTouches[0][n]
    : e[n];
}
const is = D(
  {
   disabled: { type: Boolean, default: null },
   error: Boolean,
   readonly: { type: Boolean, default: null },
   max: { type: [Number, String], default: 100 },
   min: { type: [Number, String], default: 0 },
   step: { type: [Number, String], default: 0 },
   thumbColor: String,
   thumbLabel: {
    type: [Boolean, String],
    default: void 0,
    validator: (e) => typeof e == 'boolean' || e === 'always',
   },
   thumbSize: { type: [Number, String], default: 20 },
   showTicks: {
    type: [Boolean, String],
    default: !1,
    validator: (e) => typeof e == 'boolean' || e === 'always',
   },
   ticks: { type: [Array, Object] },
   tickSize: { type: [Number, String], default: 2 },
   color: String,
   trackColor: String,
   trackFillColor: String,
   trackSize: { type: [Number, String], default: 4 },
   direction: {
    type: String,
    default: 'horizontal',
    validator: (e) => ['vertical', 'horizontal'].includes(e),
   },
   reverse: Boolean,
   ..._e(),
   ...Oe({ elevation: 2 }),
   ripple: { type: Boolean, default: !0 },
  },
  'Slider'
 ),
 os = (e) => {
  const n = y(() => parseFloat(e.min)),
   t = y(() => parseFloat(e.max)),
   a = y(() => (+e.step > 0 ? parseFloat(e.step) : 0)),
   l = y(() => Math.max(ao(a.value), ao(n.value)));
  function i(o) {
   if (((o = parseFloat(o)), a.value <= 0)) return o;
   const r = Fe(o, n.value, t.value),
    s = n.value % a.value,
    c = Math.round((r - s) / a.value) * a.value + s;
   return parseFloat(Math.min(c, t.value).toFixed(l.value));
  }
  return { min: n, max: t, step: a, decimals: l, roundValue: i };
 },
 rs = (e) => {
  let { props: n, steps: t, onSliderStart: a, onSliderMove: l, onSliderEnd: i, getActiveThumb: o } = e;
  const { isRtl: r } = Re(),
   s = M(n, 'reverse'),
   c = y(() => n.direction === 'vertical'),
   d = y(() => c.value !== s.value),
   { min: f, max: m, step: v, decimals: b, roundValue: g } = t,
   h = y(() => parseInt(n.thumbSize, 10)),
   S = y(() => parseInt(n.tickSize, 10)),
   k = y(() => parseInt(n.trackSize, 10)),
   I = y(() => (m.value - f.value) / v.value),
   B = M(n, 'disabled'),
   w = y(() => (n.error || n.disabled ? void 0 : n.thumbColor ?? n.color)),
   V = y(() => (n.error || n.disabled ? void 0 : n.trackColor ?? n.color)),
   C = y(() => (n.error || n.disabled ? void 0 : n.trackFillColor ?? n.color)),
   P = K(!1),
   x = K(0),
   _ = j(),
   T = j();
  function A(Y) {
   var re;
   const Q = n.direction === 'vertical',
    xe = Q ? 'top' : 'left',
    Ce = Q ? 'height' : 'width',
    ee = Q ? 'clientY' : 'clientX',
    { [xe]: ve, [Ce]: U } = (re = _.value) == null ? void 0 : re.$el.getBoundingClientRect(),
    ne = Jm(Y, ee);
   let se = Math.min(Math.max((ne - ve - x.value) / U, 0), 1) || 0;
   return (Q ? d.value : d.value !== r.value) && (se = 1 - se), g(f.value + se * (m.value - f.value));
  }
  const p = (Y) => {
    i({ value: A(Y) }), (P.value = !1), (x.value = 0);
   },
   F = (Y) => {
    (T.value = o(Y)),
     T.value &&
      (T.value.focus(),
      (P.value = !0),
      T.value.contains(Y.target)
       ? (x.value = zl(Y, T.value, n.direction))
       : ((x.value = 0), l({ value: A(Y) })),
      a({ value: A(Y) }));
   },
   O = { passive: !0, capture: !0 };
  function W(Y) {
   l({ value: A(Y) });
  }
  function te(Y) {
   Y.stopPropagation(),
    Y.preventDefault(),
    p(Y),
    window.removeEventListener('mousemove', W, O),
    window.removeEventListener('mouseup', te);
  }
  function N(Y) {
   var Q;
   p(Y),
    window.removeEventListener('touchmove', W, O),
    (Q = Y.target) == null || Q.removeEventListener('touchend', N);
  }
  function H(Y) {
   var Q;
   F(Y),
    window.addEventListener('touchmove', W, O),
    (Q = Y.target) == null || Q.addEventListener('touchend', N, { passive: !1 });
  }
  function E(Y) {
   Y.preventDefault(),
    F(Y),
    window.addEventListener('mousemove', W, O),
    window.addEventListener('mouseup', te, { passive: !1 });
  }
  const L = (Y) => {
    const Q = ((Y - f.value) / (m.value - f.value)) * 100;
    return Fe(isNaN(Q) ? 0 : Q, 0, 100);
   },
   G = M(n, 'showTicks'),
   ae = y(() =>
    G.value
     ? n.ticks
       ? Array.isArray(n.ticks)
         ? n.ticks.map((Y) => ({ value: Y, position: L(Y), label: Y.toString() }))
         : Object.keys(n.ticks).map((Y) => ({
            value: parseFloat(Y),
            position: L(parseFloat(Y)),
            label: n.ticks[Y],
           }))
       : I.value !== 1 / 0
         ? xt(I.value + 1).map((Y) => {
            const Q = f.value + Y * v.value;
            return { value: Q, position: L(Q) };
           })
         : []
     : []
   ),
   oe = y(() =>
    ae.value.some((Y) => {
     let { label: Q } = Y;
     return !!Q;
    })
   ),
   q = {
    activeThumbRef: T,
    color: M(n, 'color'),
    decimals: b,
    disabled: B,
    direction: M(n, 'direction'),
    elevation: M(n, 'elevation'),
    hasLabels: oe,
    isReversed: s,
    indexFromEnd: d,
    min: f,
    max: m,
    mousePressed: P,
    numTicks: I,
    onSliderMousedown: E,
    onSliderTouchstart: H,
    parsedTicks: ae,
    parseMouseMove: A,
    position: L,
    readonly: M(n, 'readonly'),
    rounded: M(n, 'rounded'),
    roundValue: g,
    showTicks: G,
    startOffset: x,
    step: v,
    thumbSize: h,
    thumbColor: w,
    thumbLabel: M(n, 'thumbLabel'),
    ticks: M(n, 'ticks'),
    tickSize: S,
    trackColor: V,
    trackContainerRef: _,
    trackFillColor: C,
    trackSize: k,
    vertical: c,
   };
  return Ie(Fi, q), q;
 },
 Qm = D(
  {
   focused: Boolean,
   max: { type: Number, required: !0 },
   min: { type: Number, required: !0 },
   modelValue: { type: Number, required: !0 },
   position: { type: Number, required: !0 },
   ripple: { type: [Boolean, Object], default: !0 },
   name: String,
   ...J(),
  },
  'VSliderThumb'
 ),
 Hl = $()({
  name: 'VSliderThumb',
  directives: { Ripple: pt },
  props: Qm(),
  emits: { 'update:modelValue': (e) => !0 },
  setup(e, n) {
   let { slots: t, emit: a } = n;
   const l = ge(Fi),
    { isRtl: i, rtlClasses: o } = Re();
   if (!l) throw new Error('[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider');
   const {
     thumbColor: r,
     step: s,
     disabled: c,
     thumbSize: d,
     thumbLabel: f,
     direction: m,
     isReversed: v,
     vertical: b,
     readonly: g,
     elevation: h,
     mousePressed: S,
     decimals: k,
     indexFromEnd: I,
    } = l,
    B = y(() => (c.value ? void 0 : h.value)),
    { elevationClasses: w } = Ye(B),
    { textColorClasses: V, textColorStyles: C } = Ge(r),
    { pageup: P, pagedown: x, end: _, home: T, left: A, right: p, down: F, up: O } = Sl,
    W = [P, x, _, T, A, p, F, O],
    te = y(() => (s.value ? [1, 2, 3] : [1, 5, 10]));
   function N(E, L) {
    if (!W.includes(E.key)) return;
    E.preventDefault();
    const G = s.value || 0.1,
     ae = (e.max - e.min) / G;
    if ([A, p, F, O].includes(E.key)) {
     const q = (b.value
       ? [i.value ? A : p, v.value ? F : O]
       : I.value !== i.value
         ? [A, O]
         : [p, O]
      ).includes(E.key)
       ? 1
       : -1,
      Y = E.shiftKey ? 2 : E.ctrlKey ? 1 : 0;
     L = L + q * G * te.value[Y];
    } else if (E.key === T) L = e.min;
    else if (E.key === _) L = e.max;
    else {
     const oe = E.key === x ? 1 : -1;
     L = L - oe * G * (ae > 100 ? ae / 10 : 10);
    }
    return Math.max(e.min, Math.min(e.max, L));
   }
   function H(E) {
    const L = N(E, e.modelValue);
    L != null && a('update:modelValue', L);
   }
   return (
    R(() => {
     const E = Z(I.value ? 100 - e.position : e.position, '%');
     return u(
      'div',
      {
       class: [
        'v-slider-thumb',
        { 'v-slider-thumb--focused': e.focused, 'v-slider-thumb--pressed': e.focused && S.value },
        e.class,
        o.value,
       ],
       style: [{ '--v-slider-thumb-position': E, '--v-slider-thumb-size': Z(d.value) }, e.style],
       role: 'slider',
       tabindex: c.value ? -1 : 0,
       'aria-label': e.name,
       'aria-valuemin': e.min,
       'aria-valuemax': e.max,
       'aria-valuenow': e.modelValue,
       'aria-readonly': !!g.value,
       'aria-orientation': m.value,
       onKeydown: g.value ? void 0 : H,
      },
      [
       u('div', { class: ['v-slider-thumb__surface', V.value, w.value], style: { ...C.value } }, null),
       Ae(u('div', { class: ['v-slider-thumb__ripple', V.value], style: C.value }, null), [
        [ot('ripple'), e.ripple, null, { circle: !0, center: !0 }],
       ]),
       u(
        mi,
        { origin: 'bottom center' },
        {
         default: () => {
          var L;
          return [
           Ae(
            u('div', { class: 'v-slider-thumb__label-container' }, [
             u('div', { class: ['v-slider-thumb__label'] }, [
              u('div', null, [
               ((L = t['thumb-label']) == null ? void 0 : L.call(t, { modelValue: e.modelValue })) ??
                e.modelValue.toFixed(s.value ? k.value : 1),
              ]),
             ]),
            ]),
            [[bt, (f.value && e.focused) || f.value === 'always']]
           ),
          ];
         },
        }
       ),
      ]
     );
    }),
    {}
   );
  },
 }),
 eg = D(
  { start: { type: Number, required: !0 }, stop: { type: Number, required: !0 }, ...J() },
  'VSliderTrack'
 ),
 us = $()({
  name: 'VSliderTrack',
  props: eg(),
  emits: {},
  setup(e, n) {
   let { slots: t } = n;
   const a = ge(Fi);
   if (!a) throw new Error('[Vuetify] v-slider-track must be inside v-slider or v-range-slider');
   const {
     color: l,
     parsedTicks: i,
     rounded: o,
     showTicks: r,
     tickSize: s,
     trackColor: c,
     trackFillColor: d,
     trackSize: f,
     vertical: m,
     min: v,
     max: b,
     indexFromEnd: g,
    } = a,
    { roundedClasses: h } = De(o),
    { backgroundColorClasses: S, backgroundColorStyles: k } = we(d),
    { backgroundColorClasses: I, backgroundColorStyles: B } = we(c),
    w = y(() => `inset-${m.value ? 'block' : 'inline'}-${g.value ? 'end' : 'start'}`),
    V = y(() => (m.value ? 'height' : 'width')),
    C = y(() => ({ [w.value]: '0%', [V.value]: '100%' })),
    P = y(() => e.stop - e.start),
    x = y(() => ({ [w.value]: Z(e.start, '%'), [V.value]: Z(P.value, '%') })),
    _ = y(() =>
     r.value
      ? (m.value ? i.value.slice().reverse() : i.value).map((A, p) => {
         var O;
         const F = A.value !== v.value && A.value !== b.value ? Z(A.position, '%') : void 0;
         return u(
          'div',
          {
           key: A.value,
           class: [
            'v-slider-track__tick',
            {
             'v-slider-track__tick--filled': A.position >= e.start && A.position <= e.stop,
             'v-slider-track__tick--first': A.value === v.value,
             'v-slider-track__tick--last': A.value === b.value,
            },
           ],
           style: { [w.value]: F },
          },
          [
           (A.label || t['tick-label']) &&
            u('div', { class: 'v-slider-track__tick-label' }, [
             ((O = t['tick-label']) == null ? void 0 : O.call(t, { tick: A, index: p })) ?? A.label,
            ]),
          ]
         );
        })
      : []
    );
   return (
    R(() =>
     u(
      'div',
      {
       class: ['v-slider-track', h.value, e.class],
       style: [{ '--v-slider-track-size': Z(f.value), '--v-slider-tick-size': Z(s.value) }, e.style],
      },
      [
       u(
        'div',
        {
         class: [
          'v-slider-track__background',
          I.value,
          { 'v-slider-track__background--opacity': !!l.value || !d.value },
         ],
         style: { ...C.value, ...B.value },
        },
        null
       ),
       u('div', { class: ['v-slider-track__fill', S.value], style: { ...x.value, ...k.value } }, null),
       r.value &&
        u(
         'div',
         {
          class: [
           'v-slider-track__ticks',
           { 'v-slider-track__ticks--always-show': r.value === 'always' },
          ],
         },
         [_.value]
        ),
      ]
     )
    ),
    {}
   );
  },
 }),
 tg = D({ ...aa(), ...is(), ...Mt(), modelValue: { type: [Number, String], default: 0 } }, 'VSlider'),
 Wl = $()({
  name: 'VSlider',
  props: tg(),
  emits: {
   'update:focused': (e) => !0,
   'update:modelValue': (e) => !0,
   start: (e) => !0,
   end: (e) => !0,
  },
  setup(e, n) {
   let { slots: t, emit: a } = n;
   const l = j(),
    { rtlClasses: i } = Re(),
    o = os(e),
    r = le(e, 'modelValue', void 0, (V) => o.roundValue(V ?? o.min.value)),
    {
     min: s,
     max: c,
     mousePressed: d,
     roundValue: f,
     onSliderMousedown: m,
     onSliderTouchstart: v,
     trackContainerRef: b,
     position: g,
     hasLabels: h,
     readonly: S,
    } = rs({
     props: e,
     steps: o,
     onSliderStart: () => {
      a('start', r.value);
     },
     onSliderEnd: (V) => {
      let { value: C } = V;
      const P = f(C);
      (r.value = P), a('end', P);
     },
     onSliderMove: (V) => {
      let { value: C } = V;
      return (r.value = f(C));
     },
     getActiveThumb: () => {
      var V;
      return (V = l.value) == null ? void 0 : V.$el;
     },
    }),
    { isFocused: k, focus: I, blur: B } = Et(e),
    w = y(() => g(r.value));
   return (
    R(() => {
     const V = Ue.filterProps(e),
      C = !!(e.label || t.label || t.prepend);
     return u(
      Ue,
      z(
       {
        class: [
         'v-slider',
         {
          'v-slider--has-labels': !!t['tick-label'] || h.value,
          'v-slider--focused': k.value,
          'v-slider--pressed': d.value,
          'v-slider--disabled': e.disabled,
         },
         i.value,
         e.class,
        ],
        style: e.style,
       },
       V,
       { focused: k.value }
      ),
      {
       ...t,
       prepend: C
        ? (P) => {
           var x, _;
           return u(ie, null, [
            ((x = t.label) == null ? void 0 : x.call(t, P)) ??
             (e.label
              ? u(En, { id: P.id.value, class: 'v-slider__label', text: e.label }, null)
              : void 0),
            (_ = t.prepend) == null ? void 0 : _.call(t, P),
           ]);
          }
        : void 0,
       default: (P) => {
        let { id: x, messagesId: _ } = P;
        return u(
         'div',
         {
          class: 'v-slider__container',
          onMousedown: S.value ? void 0 : m,
          onTouchstartPassive: S.value ? void 0 : v,
         },
         [
          u(
           'input',
           {
            id: x.value,
            name: e.name || x.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: '-1',
            value: r.value,
           },
           null
          ),
          u(us, { ref: b, start: 0, stop: w.value }, { 'tick-label': t['tick-label'] }),
          u(
           Hl,
           {
            ref: l,
            'aria-describedby': _.value,
            focused: k.value,
            min: s.value,
            max: c.value,
            modelValue: r.value,
            'onUpdate:modelValue': (T) => (r.value = T),
            position: w.value,
            elevation: e.elevation,
            onFocus: I,
            onBlur: B,
            ripple: e.ripple,
            name: e.name,
           },
           { 'thumb-label': t['thumb-label'] }
          ),
         ]
        );
       },
      }
     );
    }),
    {}
   );
  },
 }),
 ng = D(
  { color: { type: Object }, disabled: Boolean, hideAlpha: Boolean, ...J() },
  'VColorPickerPreview'
 ),
 ag = rt({
  name: 'VColorPickerPreview',
  props: ng(),
  emits: { 'update:color': (e) => !0 },
  setup(e, n) {
   let { emit: t } = n;
   const a = new AbortController();
   pc(() => a.abort());
   async function l() {
    if (!eo) return;
    const i = new window.EyeDropper();
    try {
     const o = await i.open({ signal: a.signal }),
      r = Ar(o.sRGBHex);
     t('update:color', { ...(e.color ?? xn), ...r });
    } catch {}
   }
   return (
    R(() => {
     var i, o;
     return u(
      'div',
      {
       class: ['v-color-picker-preview', { 'v-color-picker-preview--hide-alpha': e.hideAlpha }, e.class],
       style: e.style,
      },
      [
       eo &&
        u('div', { class: 'v-color-picker-preview__eye-dropper', key: 'eyeDropper' }, [
         u(ye, { onClick: l, icon: '$eyeDropper', variant: 'plain', density: 'comfortable' }, null),
        ]),
       u('div', { class: 'v-color-picker-preview__dot' }, [
        u('div', { style: { background: Ir(e.color ?? xn) } }, null),
       ]),
       u('div', { class: 'v-color-picker-preview__sliders' }, [
        u(
         Wl,
         {
          class: 'v-color-picker-preview__track v-color-picker-preview__hue',
          modelValue: (i = e.color) == null ? void 0 : i.h,
          'onUpdate:modelValue': (r) => t('update:color', { ...(e.color ?? xn), h: r }),
          step: 0,
          min: 0,
          max: 360,
          disabled: e.disabled,
          thumbSize: 14,
          trackSize: 8,
          trackFillColor: 'white',
          hideDetails: !0,
         },
         null
        ),
        !e.hideAlpha &&
         u(
          Wl,
          {
           class: 'v-color-picker-preview__track v-color-picker-preview__alpha',
           modelValue: ((o = e.color) == null ? void 0 : o.a) ?? 1,
           'onUpdate:modelValue': (r) => t('update:color', { ...(e.color ?? xn), a: r }),
           step: 1 / 256,
           min: 0,
           max: 1,
           disabled: e.disabled,
           thumbSize: 14,
           trackSize: 8,
           trackFillColor: 'white',
           hideDetails: !0,
          },
          null
         ),
       ]),
      ]
     );
    }),
    {}
   );
  },
 }),
 lg = {
  base: '#f44336',
  lighten5: '#ffebee',
  lighten4: '#ffcdd2',
  lighten3: '#ef9a9a',
  lighten2: '#e57373',
  lighten1: '#ef5350',
  darken1: '#e53935',
  darken2: '#d32f2f',
  darken3: '#c62828',
  darken4: '#b71c1c',
  accent1: '#ff8a80',
  accent2: '#ff5252',
  accent3: '#ff1744',
  accent4: '#d50000',
 },
 ig = {
  base: '#e91e63',
  lighten5: '#fce4ec',
  lighten4: '#f8bbd0',
  lighten3: '#f48fb1',
  lighten2: '#f06292',
  lighten1: '#ec407a',
  darken1: '#d81b60',
  darken2: '#c2185b',
  darken3: '#ad1457',
  darken4: '#880e4f',
  accent1: '#ff80ab',
  accent2: '#ff4081',
  accent3: '#f50057',
  accent4: '#c51162',
 },
 og = {
  base: '#9c27b0',
  lighten5: '#f3e5f5',
  lighten4: '#e1bee7',
  lighten3: '#ce93d8',
  lighten2: '#ba68c8',
  lighten1: '#ab47bc',
  darken1: '#8e24aa',
  darken2: '#7b1fa2',
  darken3: '#6a1b9a',
  darken4: '#4a148c',
  accent1: '#ea80fc',
  accent2: '#e040fb',
  accent3: '#d500f9',
  accent4: '#aa00ff',
 },
 rg = {
  base: '#673ab7',
  lighten5: '#ede7f6',
  lighten4: '#d1c4e9',
  lighten3: '#b39ddb',
  lighten2: '#9575cd',
  lighten1: '#7e57c2',
  darken1: '#5e35b1',
  darken2: '#512da8',
  darken3: '#4527a0',
  darken4: '#311b92',
  accent1: '#b388ff',
  accent2: '#7c4dff',
  accent3: '#651fff',
  accent4: '#6200ea',
 },
 ug = {
  base: '#3f51b5',
  lighten5: '#e8eaf6',
  lighten4: '#c5cae9',
  lighten3: '#9fa8da',
  lighten2: '#7986cb',
  lighten1: '#5c6bc0',
  darken1: '#3949ab',
  darken2: '#303f9f',
  darken3: '#283593',
  darken4: '#1a237e',
  accent1: '#8c9eff',
  accent2: '#536dfe',
  accent3: '#3d5afe',
  accent4: '#304ffe',
 },
 sg = {
  base: '#2196f3',
  lighten5: '#e3f2fd',
  lighten4: '#bbdefb',
  lighten3: '#90caf9',
  lighten2: '#64b5f6',
  lighten1: '#42a5f5',
  darken1: '#1e88e5',
  darken2: '#1976d2',
  darken3: '#1565c0',
  darken4: '#0d47a1',
  accent1: '#82b1ff',
  accent2: '#448aff',
  accent3: '#2979ff',
  accent4: '#2962ff',
 },
 cg = {
  base: '#03a9f4',
  lighten5: '#e1f5fe',
  lighten4: '#b3e5fc',
  lighten3: '#81d4fa',
  lighten2: '#4fc3f7',
  lighten1: '#29b6f6',
  darken1: '#039be5',
  darken2: '#0288d1',
  darken3: '#0277bd',
  darken4: '#01579b',
  accent1: '#80d8ff',
  accent2: '#40c4ff',
  accent3: '#00b0ff',
  accent4: '#0091ea',
 },
 dg = {
  base: '#00bcd4',
  lighten5: '#e0f7fa',
  lighten4: '#b2ebf2',
  lighten3: '#80deea',
  lighten2: '#4dd0e1',
  lighten1: '#26c6da',
  darken1: '#00acc1',
  darken2: '#0097a7',
  darken3: '#00838f',
  darken4: '#006064',
  accent1: '#84ffff',
  accent2: '#18ffff',
  accent3: '#00e5ff',
  accent4: '#00b8d4',
 },
 vg = {
  base: '#009688',
  lighten5: '#e0f2f1',
  lighten4: '#b2dfdb',
  lighten3: '#80cbc4',
  lighten2: '#4db6ac',
  lighten1: '#26a69a',
  darken1: '#00897b',
  darken2: '#00796b',
  darken3: '#00695c',
  darken4: '#004d40',
  accent1: '#a7ffeb',
  accent2: '#64ffda',
  accent3: '#1de9b6',
  accent4: '#00bfa5',
 },
 fg = {
  base: '#4caf50',
  lighten5: '#e8f5e9',
  lighten4: '#c8e6c9',
  lighten3: '#a5d6a7',
  lighten2: '#81c784',
  lighten1: '#66bb6a',
  darken1: '#43a047',
  darken2: '#388e3c',
  darken3: '#2e7d32',
  darken4: '#1b5e20',
  accent1: '#b9f6ca',
  accent2: '#69f0ae',
  accent3: '#00e676',
  accent4: '#00c853',
 },
 mg = {
  base: '#8bc34a',
  lighten5: '#f1f8e9',
  lighten4: '#dcedc8',
  lighten3: '#c5e1a5',
  lighten2: '#aed581',
  lighten1: '#9ccc65',
  darken1: '#7cb342',
  darken2: '#689f38',
  darken3: '#558b2f',
  darken4: '#33691e',
  accent1: '#ccff90',
  accent2: '#b2ff59',
  accent3: '#76ff03',
  accent4: '#64dd17',
 },
 gg = {
  base: '#cddc39',
  lighten5: '#f9fbe7',
  lighten4: '#f0f4c3',
  lighten3: '#e6ee9c',
  lighten2: '#dce775',
  lighten1: '#d4e157',
  darken1: '#c0ca33',
  darken2: '#afb42b',
  darken3: '#9e9d24',
  darken4: '#827717',
  accent1: '#f4ff81',
  accent2: '#eeff41',
  accent3: '#c6ff00',
  accent4: '#aeea00',
 },
 hg = {
  base: '#ffeb3b',
  lighten5: '#fffde7',
  lighten4: '#fff9c4',
  lighten3: '#fff59d',
  lighten2: '#fff176',
  lighten1: '#ffee58',
  darken1: '#fdd835',
  darken2: '#fbc02d',
  darken3: '#f9a825',
  darken4: '#f57f17',
  accent1: '#ffff8d',
  accent2: '#ffff00',
  accent3: '#ffea00',
  accent4: '#ffd600',
 },
 yg = {
  base: '#ffc107',
  lighten5: '#fff8e1',
  lighten4: '#ffecb3',
  lighten3: '#ffe082',
  lighten2: '#ffd54f',
  lighten1: '#ffca28',
  darken1: '#ffb300',
  darken2: '#ffa000',
  darken3: '#ff8f00',
  darken4: '#ff6f00',
  accent1: '#ffe57f',
  accent2: '#ffd740',
  accent3: '#ffc400',
  accent4: '#ffab00',
 },
 bg = {
  base: '#ff9800',
  lighten5: '#fff3e0',
  lighten4: '#ffe0b2',
  lighten3: '#ffcc80',
  lighten2: '#ffb74d',
  lighten1: '#ffa726',
  darken1: '#fb8c00',
  darken2: '#f57c00',
  darken3: '#ef6c00',
  darken4: '#e65100',
  accent1: '#ffd180',
  accent2: '#ffab40',
  accent3: '#ff9100',
  accent4: '#ff6d00',
 },
 Sg = {
  base: '#ff5722',
  lighten5: '#fbe9e7',
  lighten4: '#ffccbc',
  lighten3: '#ffab91',
  lighten2: '#ff8a65',
  lighten1: '#ff7043',
  darken1: '#f4511e',
  darken2: '#e64a19',
  darken3: '#d84315',
  darken4: '#bf360c',
  accent1: '#ff9e80',
  accent2: '#ff6e40',
  accent3: '#ff3d00',
  accent4: '#dd2c00',
 },
 kg = {
  base: '#795548',
  lighten5: '#efebe9',
  lighten4: '#d7ccc8',
  lighten3: '#bcaaa4',
  lighten2: '#a1887f',
  lighten1: '#8d6e63',
  darken1: '#6d4c41',
  darken2: '#5d4037',
  darken3: '#4e342e',
  darken4: '#3e2723',
 },
 xg = {
  base: '#607d8b',
  lighten5: '#eceff1',
  lighten4: '#cfd8dc',
  lighten3: '#b0bec5',
  lighten2: '#90a4ae',
  lighten1: '#78909c',
  darken1: '#546e7a',
  darken2: '#455a64',
  darken3: '#37474f',
  darken4: '#263238',
 },
 wg = {
  base: '#9e9e9e',
  lighten5: '#fafafa',
  lighten4: '#f5f5f5',
  lighten3: '#eeeeee',
  lighten2: '#e0e0e0',
  lighten1: '#bdbdbd',
  darken1: '#757575',
  darken2: '#616161',
  darken3: '#424242',
  darken4: '#212121',
 },
 Cg = { black: '#000000', white: '#ffffff', transparent: '#ffffff00' },
 Vg = {
  red: lg,
  pink: ig,
  purple: og,
  deepPurple: rg,
  indigo: ug,
  blue: sg,
  lightBlue: cg,
  cyan: dg,
  teal: vg,
  green: fg,
  lightGreen: mg,
  lime: gg,
  yellow: hg,
  amber: yg,
  orange: bg,
  deepOrange: Sg,
  brown: kg,
  blueGrey: xg,
  grey: wg,
  shades: Cg,
 },
 Pg = D(
  {
   swatches: { type: Array, default: () => Ig(Vg) },
   disabled: Boolean,
   color: Object,
   maxHeight: [Number, String],
   ...J(),
  },
  'VColorPickerSwatches'
 );
function Ig(e) {
 return Object.keys(e).map((n) => {
  const t = e[n];
  return t.base
   ? [
      t.base,
      t.darken4,
      t.darken3,
      t.darken2,
      t.darken1,
      t.lighten1,
      t.lighten2,
      t.lighten3,
      t.lighten4,
      t.lighten5,
     ]
   : [t.black, t.white, t.transparent];
 });
}
const _g = rt({
  name: 'VColorPickerSwatches',
  props: Pg(),
  emits: { 'update:color': (e) => !0 },
  setup(e, n) {
   let { emit: t } = n;
   return (
    R(() =>
     u(
      'div',
      { class: ['v-color-picker-swatches', e.class], style: [{ maxHeight: Z(e.maxHeight) }, e.style] },
      [
       u('div', null, [
        e.swatches.map((a) =>
         u('div', { class: 'v-color-picker-swatches__swatch' }, [
          a.map((l) => {
           const i = dt(l),
            o = Ma(i),
            r = Pr(i);
           return u(
            'div',
            { class: 'v-color-picker-swatches__color', onClick: () => o && t('update:color', o) },
            [
             u('div', { style: { background: r } }, [
              e.color && Ct(e.color, o)
               ? u(
                  be,
                  { size: 'x-small', icon: '$success', color: yd(l, '#FFFFFF') > 2 ? 'white' : 'black' },
                  null
                 )
               : void 0,
             ]),
            ]
           );
          }),
         ])
        ),
       ]),
      ]
     )
    ),
    {}
   );
  },
 }),
 Za = D(
  { color: String, ...st(), ...J(), ...Ne(), ...Oe(), ...Dt(), ...Dn(), ..._e(), ...de(), ...me() },
  'VSheet'
 ),
 tn = $()({
  name: 'VSheet',
  props: Za(),
  setup(e, n) {
   let { slots: t } = n;
   const { themeClasses: a } = Se(e),
    { backgroundColorClasses: l, backgroundColorStyles: i } = we(M(e, 'color')),
    { borderClasses: o } = ft(e),
    { dimensionStyles: r } = ze(e),
    { elevationClasses: s } = Ye(e),
    { locationStyles: c } = fn(e),
    { positionClasses: d } = pn(e),
    { roundedClasses: f } = De(e);
   return (
    R(() =>
     u(
      e.tag,
      {
       class: ['v-sheet', a.value, l.value, o.value, s.value, d.value, f.value, e.class],
       style: [i.value, r.value, c.value, e.style],
      },
      t
     )
    ),
    {}
   );
  },
 }),
 Tg = D(
  {
   canvasHeight: { type: [String, Number], default: 150 },
   disabled: Boolean,
   dotSize: { type: [Number, String], default: 10 },
   hideCanvas: Boolean,
   hideSliders: Boolean,
   hideInputs: Boolean,
   mode: { type: String, default: 'rgba', validator: (e) => Object.keys(Zt).includes(e) },
   modes: {
    type: Array,
    default: () => Object.keys(Zt),
    validator: (e) => Array.isArray(e) && e.every((n) => Object.keys(Zt).includes(n)),
   },
   showSwatches: Boolean,
   swatches: Array,
   swatchesMaxHeight: { type: [Number, String], default: 150 },
   modelValue: { type: [Object, String] },
   ...Ee(Za({ width: 300 }), ['height', 'location', 'minHeight', 'maxHeight', 'minWidth', 'maxWidth']),
  },
  'VColorPicker'
 ),
 Ag = rt({
  name: 'VColorPicker',
  props: Tg(),
  emits: { 'update:modelValue': (e) => !0, 'update:mode': (e) => !0 },
  setup(e) {
   const n = le(e, 'mode'),
    t = j(null),
    a = le(
     e,
     'modelValue',
     void 0,
     (s) => {
      if (s == null || s === '') return null;
      let c;
      try {
       c = Ma(dt(s));
      } catch {
       return null;
      }
      return c;
     },
     (s) => (s ? Ym(s, e.modelValue) : null)
    ),
    l = y(() => (a.value ? { ...a.value, h: t.value ?? a.value.h } : null)),
    { rtlClasses: i } = Re();
   let o = !0;
   X(
    a,
    (s) => {
     if (!o) {
      o = !0;
      return;
     }
     s && (t.value = s.h);
    },
    { immediate: !0 }
   );
   const r = (s) => {
    (o = !1), (t.value = s.h), (a.value = s);
   };
   return (
    at(() => {
     e.modes.includes(n.value) || (n.value = e.modes[0]);
    }),
    Be({ VSlider: { color: void 0, trackColor: void 0, trackFillColor: void 0 } }),
    R(() => {
     const s = tn.filterProps(e);
     return u(
      tn,
      z(
       {
        rounded: e.rounded,
        elevation: e.elevation,
        theme: e.theme,
        class: ['v-color-picker', i.value, e.class],
        style: [{ '--v-color-picker-color-hsv': Ir({ ...(l.value ?? xn), a: 1 }) }, e.style],
       },
       s,
       { maxWidth: e.width }
      ),
      {
       default: () => [
        !e.hideCanvas &&
         u(
          Wm,
          {
           key: 'canvas',
           color: l.value,
           'onUpdate:color': r,
           disabled: e.disabled,
           dotSize: e.dotSize,
           width: e.width,
           height: e.canvasHeight,
          },
          null
         ),
        (!e.hideSliders || !e.hideInputs) &&
         u('div', { key: 'controls', class: 'v-color-picker__controls' }, [
          !e.hideSliders &&
           u(
            ag,
            {
             key: 'preview',
             color: l.value,
             'onUpdate:color': r,
             hideAlpha: !n.value.endsWith('a'),
             disabled: e.disabled,
            },
            null
           ),
          !e.hideInputs &&
           u(
            Zm,
            {
             key: 'edit',
             modes: e.modes,
             mode: n.value,
             'onUpdate:mode': (c) => (n.value = c),
             color: l.value,
             'onUpdate:color': r,
             disabled: e.disabled,
            },
            null
           ),
         ]),
        e.showSwatches &&
         u(
          _g,
          {
           key: 'swatches',
           color: l.value,
           'onUpdate:color': r,
           maxHeight: e.swatchesMaxHeight,
           swatches: e.swatches,
           disabled: e.disabled,
          },
          null
         ),
       ],
      }
     );
    }),
    {}
   );
  },
 });
function Bg(e, n, t) {
 if (n == null) return e;
 if (Array.isArray(n)) throw new Error('Multiple matches is not implemented');
 return typeof n == 'number' && ~n
  ? u(ie, null, [
     u('span', { class: 'v-combobox__unmask' }, [e.substr(0, n)]),
     u('span', { class: 'v-combobox__mask' }, [e.substr(n, t)]),
     u('span', { class: 'v-combobox__unmask' }, [e.substr(n + t)]),
    ])
  : e;
}
const Dg = D(
  {
   autoSelectFirst: { type: [Boolean, String] },
   clearOnSelect: { type: Boolean, default: !0 },
   delimiters: Array,
   ...ra({ filterKeys: ['title'] }),
   ...Ei({ hideNoData: !0, returnObject: !0 }),
   ...Ee(Ua({ modelValue: null, role: 'combobox' }), ['validationValue', 'dirty', 'appendInnerIcon']),
   ...St({ transition: !1 }),
  },
  'VCombobox'
 ),
 pg = $()({
  name: 'VCombobox',
  props: Dg(),
  emits: {
   'update:focused': (e) => !0,
   'update:modelValue': (e) => !0,
   'update:search': (e) => !0,
   'update:menu': (e) => !0,
  },
  setup(e, n) {
   var ve;
   let { emit: t, slots: a } = n;
   const { t: l } = $e(),
    i = j(),
    o = K(!1),
    r = K(!0),
    s = K(!1),
    c = j(),
    d = j(),
    f = le(e, 'menu'),
    m = y({
     get: () => f.value,
     set: (U) => {
      var ne;
      (f.value && !U && (ne = c.value) != null && ne.ΨopenChildren) || (f.value = U);
     },
    }),
    v = K(-1);
   let b = !1;
   const g = y(() => {
     var U;
     return (U = i.value) == null ? void 0 : U.color;
    }),
    h = y(() => (m.value ? e.closeText : e.openText)),
    { items: S, transformIn: k, transformOut: I } = Ii(e),
    { textColorClasses: B, textColorStyles: w } = Ge(g),
    V = le(
     e,
     'modelValue',
     [],
     (U) => k(Te(U)),
     (U) => {
      const ne = I(U);
      return e.multiple ? ne : ne[0] ?? null;
     }
    ),
    C = Wa(),
    P = y(() => !!(e.chips || a.chip)),
    x = y(() => P.value || !!a.selection),
    _ = K(!e.multiple && !x.value ? ((ve = V.value[0]) == null ? void 0 : ve.title) ?? '' : ''),
    T = y({
     get: () => _.value,
     set: (U) => {
      var ne;
      if (
       ((_.value = U ?? ''),
       !e.multiple && !x.value && (V.value = [$t(e, U)]),
       U && e.multiple && (ne = e.delimiters) != null && ne.length)
      ) {
       const se = U.split(new RegExp(`(?:${e.delimiters.join('|')})+`));
       se.length > 1 &&
        (se.forEach((re) => {
         (re = re.trim()), re && Q($t(e, re));
        }),
        (_.value = ''));
      }
      U || (v.value = -1), (r.value = !U);
     },
    }),
    A = y(() =>
     typeof e.counterValue == 'function'
      ? e.counterValue(V.value)
      : typeof e.counterValue == 'number'
        ? e.counterValue
        : e.multiple
          ? V.value.length
          : T.value.length
    );
   X(_, (U) => {
    b ? he(() => (b = !1)) : o.value && !m.value && (m.value = !0), t('update:search', U);
   }),
    X(V, (U) => {
     var ne;
     !e.multiple && !x.value && (_.value = ((ne = U[0]) == null ? void 0 : ne.title) ?? '');
    });
   const { filteredItems: p, getMatches: F } = ua(e, S, () => (r.value ? '' : T.value)),
    O = y(() =>
     e.hideSelected ? p.value.filter((U) => !V.value.some((ne) => ne.value === U.value)) : p.value
    ),
    W = y(() => V.value.map((U) => U.value)),
    te = y(() => {
     var ne;
     return (
      (e.autoSelectFirst === !0 ||
       (e.autoSelectFirst === 'exact' && T.value === ((ne = O.value[0]) == null ? void 0 : ne.title))) &&
      O.value.length > 0 &&
      !r.value &&
      !s.value
     );
    }),
    N = y(
     () => (e.hideNoData && !O.value.length) || e.readonly || (C == null ? void 0 : C.isReadonly.value)
    ),
    H = j(),
    { onListScroll: E, onListKeydown: L } = pi(H, i);
   function G(U) {
    (b = !0), e.openOnClear && (m.value = !0);
   }
   function ae() {
    N.value || (m.value = !0);
   }
   function oe(U) {
    N.value || (o.value && (U.preventDefault(), U.stopPropagation()), (m.value = !m.value));
   }
   function q(U) {
    var re;
    if (Hc(U) || e.readonly || (C != null && C.isReadonly.value)) return;
    const ne = i.value.selectionStart,
     se = V.value.length;
    if (
     ((v.value > -1 || ['Enter', 'ArrowDown', 'ArrowUp'].includes(U.key)) && U.preventDefault(),
     ['Enter', 'ArrowDown'].includes(U.key) && (m.value = !0),
     ['Escape'].includes(U.key) && (m.value = !1),
     ['Enter', 'Escape', 'Tab'].includes(U.key) &&
      (te.value &&
       ['Enter', 'Tab'].includes(U.key) &&
       !V.value.some((ce) => {
        let { value: Ve } = ce;
        return Ve === O.value[0].value;
       }) &&
       Q(p.value[0]),
      (r.value = !0)),
     U.key === 'ArrowDown' && te.value && ((re = H.value) == null || re.focus('next')),
     U.key === 'Enter' && T.value && (Q($t(e, T.value)), x.value && (_.value = '')),
     ['Backspace', 'Delete'].includes(U.key))
    ) {
     if (!e.multiple && x.value && V.value.length > 0 && !T.value) return Q(V.value[0], !1);
     if (~v.value) {
      const ce = v.value;
      Q(V.value[v.value], !1), (v.value = ce >= se - 1 ? se - 2 : ce);
     } else U.key === 'Backspace' && !T.value && (v.value = se - 1);
    }
    if (e.multiple) {
     if (U.key === 'ArrowLeft') {
      if (v.value < 0 && ne > 0) return;
      const ce = v.value > -1 ? v.value - 1 : se - 1;
      V.value[ce]
       ? (v.value = ce)
       : ((v.value = -1), i.value.setSelectionRange(T.value.length, T.value.length));
     }
     if (U.key === 'ArrowRight') {
      if (v.value < 0) return;
      const ce = v.value + 1;
      V.value[ce] ? (v.value = ce) : ((v.value = -1), i.value.setSelectionRange(0, 0));
     }
    }
   }
   function Y() {
    var U;
    o.value && ((r.value = !0), (U = i.value) == null || U.focus());
   }
   function Q(U) {
    let ne = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    if (!(!U || U.props.disabled))
     if (e.multiple) {
      const se = V.value.findIndex((ce) => e.valueComparator(ce.value, U.value)),
       re = ne ?? !~se;
      if (~se) {
       const ce = re ? [...V.value, U] : [...V.value];
       ce.splice(se, 1), (V.value = ce);
      } else re && (V.value = [...V.value, U]);
      e.clearOnSelect && (T.value = '');
     } else {
      const se = ne !== !1;
      (V.value = se ? [U] : []),
       (_.value = se && !x.value ? U.title : ''),
       he(() => {
        (m.value = !1), (r.value = !0);
       });
     }
   }
   function xe(U) {
    (o.value = !0),
     setTimeout(() => {
      s.value = !0;
     });
   }
   function Ce(U) {
    s.value = !1;
   }
   function ee(U) {
    (U == null || (U === '' && !e.multiple && !x.value)) && (V.value = []);
   }
   return (
    X(o, (U, ne) => {
     if (!(U || U === ne) && ((v.value = -1), (m.value = !1), T.value)) {
      if (e.multiple) {
       Q($t(e, T.value));
       return;
      }
      if (!x.value) return;
      V.value.some((se) => {
       let { title: re } = se;
       return re === T.value;
      })
       ? (_.value = '')
       : Q($t(e, T.value));
     }
    }),
    X(m, () => {
     if (!e.hideSelected && m.value && V.value.length) {
      const U = O.value.findIndex((ne) => V.value.some((se) => e.valueComparator(se.value, ne.value)));
      ke &&
       window.requestAnimationFrame(() => {
        var ne;
        U >= 0 && ((ne = d.value) == null || ne.scrollToIndex(U));
       });
     }
    }),
    X(
     () => e.items,
     (U, ne) => {
      m.value || (o.value && !ne.length && U.length && (m.value = !0));
     }
    ),
    R(() => {
     const U = !!(
       !e.hideNoData ||
       O.value.length ||
       a['prepend-item'] ||
       a['append-item'] ||
       a['no-data']
      ),
      ne = V.value.length > 0,
      se = Jt.filterProps(e);
     return u(
      Jt,
      z({ ref: i }, se, {
       modelValue: T.value,
       'onUpdate:modelValue': [(re) => (T.value = re), ee],
       focused: o.value,
       'onUpdate:focused': (re) => (o.value = re),
       validationValue: V.externalValue,
       counterValue: A.value,
       dirty: ne,
       class: [
        'v-combobox',
        {
         'v-combobox--active-menu': m.value,
         'v-combobox--chips': !!e.chips,
         'v-combobox--selection-slot': !!x.value,
         'v-combobox--selecting-index': v.value > -1,
         [`v-combobox--${e.multiple ? 'multiple' : 'single'}`]: !0,
        },
        e.class,
       ],
       style: e.style,
       readonly: e.readonly,
       placeholder: ne ? void 0 : e.placeholder,
       'onClick:clear': G,
       'onMousedown:control': ae,
       onKeydown: q,
      }),
      {
       ...a,
       default: () =>
        u(ie, null, [
         u(
          Tn,
          z(
           {
            ref: c,
            modelValue: m.value,
            'onUpdate:modelValue': (re) => (m.value = re),
            activator: 'parent',
            contentClass: 'v-combobox__content',
            disabled: N.value,
            eager: e.eager,
            maxHeight: 310,
            openOnClick: !1,
            closeOnContentClick: !1,
            transition: e.transition,
            onAfterLeave: Y,
           },
           e.menuProps
          ),
          {
           default: () => [
            U &&
             u(
              Ya,
              z(
               {
                ref: H,
                selected: W.value,
                selectStrategy: e.multiple ? 'independent' : 'single-independent',
                onMousedown: (re) => re.preventDefault(),
                onKeydown: L,
                onFocusin: xe,
                onFocusout: Ce,
                onScrollPassive: E,
                tabindex: '-1',
                'aria-live': 'polite',
                color: e.itemColor ?? e.color,
               },
               e.listProps
              ),
              {
               default: () => {
                var re, ce, Ve;
                return [
                 (re = a['prepend-item']) == null ? void 0 : re.call(a),
                 !O.value.length &&
                  !e.hideNoData &&
                  (((ce = a['no-data']) == null ? void 0 : ce.call(a)) ??
                   u(Bt, { title: l(e.noDataText) }, null)),
                 u(
                  Ka,
                  { ref: d, renderless: !0, items: O.value },
                  {
                   default: (Qe) => {
                    var jt;
                    let { item: Pe, index: kt, itemRef: Ke } = Qe;
                    const Wt = z(Pe.props, {
                     ref: Ke,
                     key: kt,
                     active: te.value && kt === 0 ? !0 : void 0,
                     onClick: () => Q(Pe, null),
                    });
                    return (
                     ((jt = a.item) == null ? void 0 : jt.call(a, { item: Pe, index: kt, props: Wt })) ??
                     u(Bt, z(Wt, { role: 'option' }), {
                      prepend: (ca) => {
                       let { isSelected: da } = ca;
                       return u(ie, null, [
                        e.multiple && !e.hideSelected
                         ? u(At, { key: Pe.value, modelValue: da, ripple: !1, tabindex: '-1' }, null)
                         : void 0,
                        Pe.props.prependAvatar && u(vt, { image: Pe.props.prependAvatar }, null),
                        Pe.props.prependIcon && u(be, { icon: Pe.props.prependIcon }, null),
                       ]);
                      },
                      title: () => {
                       var ca, da;
                       return r.value
                        ? Pe.title
                        : Bg(
                           Pe.title,
                           (ca = F(Pe)) == null ? void 0 : ca.title,
                           ((da = T.value) == null ? void 0 : da.length) ?? 0
                          );
                      },
                     })
                    );
                   },
                  }
                 ),
                 (Ve = a['append-item']) == null ? void 0 : Ve.call(a),
                ];
               },
              }
             ),
           ],
          }
         ),
         V.value.map((re, ce) => {
          function Ve(Ke) {
           Ke.stopPropagation(), Ke.preventDefault(), Q(re, !1);
          }
          const Qe = {
            'onClick:close': Ve,
            onKeydown(Ke) {
             (Ke.key !== 'Enter' && Ke.key !== ' ') ||
              (Ke.preventDefault(), Ke.stopPropagation(), Ve(Ke));
            },
            onMousedown(Ke) {
             Ke.preventDefault(), Ke.stopPropagation();
            },
            modelValue: !0,
            'onUpdate:modelValue': void 0,
           },
           Pe = P.value ? !!a.chip : !!a.selection,
           kt = Pe
            ? Ea(
               P.value
                ? a.chip({ item: re, index: ce, props: Qe })
                : a.selection({ item: re, index: ce })
              )
            : void 0;
          if (!(Pe && !kt))
           return u(
            'div',
            {
             key: re.value,
             class: [
              'v-combobox__selection',
              ce === v.value && ['v-combobox__selection--selected', B.value],
             ],
             style: ce === v.value ? w.value : {},
            },
            [
             P.value
              ? a.chip
                ? u(
                   fe,
                   {
                    key: 'chip-defaults',
                    defaults: { VChip: { closable: e.closableChips, size: 'small', text: re.title } },
                   },
                   { default: () => [kt] }
                  )
                : u(
                   Mn,
                   z(
                    {
                     key: 'chip',
                     closable: e.closableChips,
                     size: 'small',
                     text: re.title,
                     disabled: re.props.disabled,
                    },
                    Qe
                   ),
                   null
                  )
              : kt ??
                u('span', { class: 'v-combobox__selection-text' }, [
                 re.title,
                 e.multiple &&
                  ce < V.value.length - 1 &&
                  u('span', { class: 'v-combobox__selection-comma' }, [Lt(',')]),
                ]),
            ]
           );
         }),
        ]),
       'append-inner': function () {
        var Qe;
        for (var re = arguments.length, ce = new Array(re), Ve = 0; Ve < re; Ve++)
         ce[Ve] = arguments[Ve];
        return u(ie, null, [
         (Qe = a['append-inner']) == null ? void 0 : Qe.call(a, ...ce),
         (!e.hideNoData || e.items.length) && e.menuIcon
          ? u(
             be,
             {
              class: 'v-combobox__menu-icon',
              icon: e.menuIcon,
              onMousedown: oe,
              onClick: br,
              'aria-label': l(h.value),
              title: l(h.value),
              tabindex: '-1',
             },
             null
            )
          : void 0,
        ]);
       },
      }
     );
    }),
    ht(
     { isFocused: o, isPristine: r, menu: m, search: T, selectionIndex: v, filteredItems: p, select: Q },
     i
    )
   );
  },
 }),
 Ja = {
  '001': 1,
  AD: 1,
  AE: 6,
  AF: 6,
  AG: 0,
  AI: 1,
  AL: 1,
  AM: 1,
  AN: 1,
  AR: 1,
  AS: 0,
  AT: 1,
  AU: 1,
  AX: 1,
  AZ: 1,
  BA: 1,
  BD: 0,
  BE: 1,
  BG: 1,
  BH: 6,
  BM: 1,
  BN: 1,
  BR: 0,
  BS: 0,
  BT: 0,
  BW: 0,
  BY: 1,
  BZ: 0,
  CA: 0,
  CH: 1,
  CL: 1,
  CM: 1,
  CN: 1,
  CO: 0,
  CR: 1,
  CY: 1,
  CZ: 1,
  DE: 1,
  DJ: 6,
  DK: 1,
  DM: 0,
  DO: 0,
  DZ: 6,
  EC: 1,
  EE: 1,
  EG: 6,
  ES: 1,
  ET: 0,
  FI: 1,
  FJ: 1,
  FO: 1,
  FR: 1,
  GB: 1,
  'GB-alt-variant': 0,
  GE: 1,
  GF: 1,
  GP: 1,
  GR: 1,
  GT: 0,
  GU: 0,
  HK: 0,
  HN: 0,
  HR: 1,
  HU: 1,
  ID: 0,
  IE: 1,
  IL: 0,
  IN: 0,
  IQ: 6,
  IR: 6,
  IS: 1,
  IT: 1,
  JM: 0,
  JO: 6,
  JP: 0,
  KE: 0,
  KG: 1,
  KH: 0,
  KR: 0,
  KW: 6,
  KZ: 1,
  LA: 0,
  LB: 1,
  LI: 1,
  LK: 1,
  LT: 1,
  LU: 1,
  LV: 1,
  LY: 6,
  MC: 1,
  MD: 1,
  ME: 1,
  MH: 0,
  MK: 1,
  MM: 0,
  MN: 1,
  MO: 0,
  MQ: 1,
  MT: 0,
  MV: 5,
  MX: 0,
  MY: 1,
  MZ: 0,
  NI: 0,
  NL: 1,
  NO: 1,
  NP: 0,
  NZ: 1,
  OM: 6,
  PA: 0,
  PE: 0,
  PH: 0,
  PK: 0,
  PL: 1,
  PR: 0,
  PT: 0,
  PY: 0,
  QA: 6,
  RE: 1,
  RO: 1,
  RS: 1,
  RU: 1,
  SA: 0,
  SD: 6,
  SE: 1,
  SG: 0,
  SI: 1,
  SK: 1,
  SM: 1,
  SV: 0,
  SY: 6,
  TH: 0,
  TJ: 1,
  TM: 1,
  TR: 1,
  TT: 0,
  TW: 0,
  UA: 1,
  UM: 0,
  US: 0,
  UY: 1,
  UZ: 1,
  VA: 1,
  VE: 0,
  VI: 0,
  VN: 1,
  WS: 0,
  XK: 1,
  YE: 0,
  ZA: 0,
  ZW: 0,
 };
function Eg(e, n, t) {
 const a = [];
 let l = [];
 const i = ss(e),
  o = cs(e),
  r = t ?? Ja[n.slice(-2).toUpperCase()] ?? 0,
  s = (i.getDay() - r + 7) % 7,
  c = (o.getDay() - r + 7) % 7;
 for (let d = 0; d < s; d++) {
  const f = new Date(i);
  f.setDate(f.getDate() - (s - d)), l.push(f);
 }
 for (let d = 1; d <= o.getDate(); d++) {
  const f = new Date(e.getFullYear(), e.getMonth(), d);
  l.push(f), l.length === 7 && (a.push(l), (l = []));
 }
 for (let d = 1; d < 7 - c; d++) {
  const f = new Date(o);
  f.setDate(f.getDate() + d), l.push(f);
 }
 return l.length > 0 && a.push(l), a;
}
function Mg(e, n, t) {
 const a = t ?? Ja[n.slice(-2).toUpperCase()] ?? 0,
  l = new Date(e);
 for (; l.getDay() !== a; ) l.setDate(l.getDate() - 1);
 return l;
}
function $g(e, n) {
 const t = new Date(e),
  a = ((Ja[n.slice(-2).toUpperCase()] ?? 0) + 6) % 7;
 for (; t.getDay() !== a; ) t.setDate(t.getDate() + 1);
 return t;
}
function ss(e) {
 return new Date(e.getFullYear(), e.getMonth(), 1);
}
function cs(e) {
 return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function Fg(e) {
 const n = e.split('-').map(Number);
 return new Date(n[0], n[1] - 1, n[2]);
}
const Lg = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function ds(e) {
 if (e == null) return new Date();
 if (e instanceof Date) return e;
 if (typeof e == 'string') {
  let n;
  if (Lg.test(e)) return Fg(e);
  if (((n = Date.parse(e)), !isNaN(n))) return new Date(n);
 }
 return null;
}
const Yo = new Date(2e3, 0, 2);
function Og(e, n) {
 const t = n ?? Ja[e.slice(-2).toUpperCase()] ?? 0;
 return xt(7).map((a) => {
  const l = new Date(Yo);
  return l.setDate(Yo.getDate() + t + a), new Intl.DateTimeFormat(e, { weekday: 'narrow' }).format(l);
 });
}
function Rg(e, n, t, a) {
 const l = ds(e) ?? new Date(),
  i = a == null ? void 0 : a[n];
 if (typeof i == 'function') return i(l, n, t);
 let o = {};
 switch (n) {
  case 'fullDate':
   o = { year: 'numeric', month: 'long', day: 'numeric' };
   break;
  case 'fullDateWithWeekday':
   o = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
   break;
  case 'normalDate':
   const r = l.getDate(),
    s = new Intl.DateTimeFormat(t, { month: 'long' }).format(l);
   return `${r} ${s}`;
  case 'normalDateWithWeekday':
   o = { weekday: 'short', day: 'numeric', month: 'short' };
   break;
  case 'shortDate':
   o = { month: 'short', day: 'numeric' };
   break;
  case 'year':
   o = { year: 'numeric' };
   break;
  case 'month':
   o = { month: 'long' };
   break;
  case 'monthShort':
   o = { month: 'short' };
   break;
  case 'monthAndYear':
   o = { month: 'long', year: 'numeric' };
   break;
  case 'monthAndDate':
   o = { month: 'long', day: 'numeric' };
   break;
  case 'weekday':
   o = { weekday: 'long' };
   break;
  case 'weekdayShort':
   o = { weekday: 'short' };
   break;
  case 'dayOfMonth':
   return new Intl.NumberFormat(t).format(l.getDate());
  case 'hours12h':
   o = { hour: 'numeric', hour12: !0 };
   break;
  case 'hours24h':
   o = { hour: 'numeric', hour12: !1 };
   break;
  case 'minutes':
   o = { minute: 'numeric' };
   break;
  case 'seconds':
   o = { second: 'numeric' };
   break;
  case 'fullTime':
   o = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: !0 };
   break;
  case 'fullTime12h':
   o = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: !0 };
   break;
  case 'fullTime24h':
   o = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: !1 };
   break;
  case 'fullDateTime':
   o = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: !0,
   };
   break;
  case 'fullDateTime12h':
   o = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: !0,
   };
   break;
  case 'fullDateTime24h':
   o = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: !1,
   };
   break;
  case 'keyboardDate':
   o = { year: 'numeric', month: '2-digit', day: '2-digit' };
   break;
  case 'keyboardDateTime':
   o = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: !1,
   };
   break;
  case 'keyboardDateTime12h':
   o = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: !0,
   };
   break;
  case 'keyboardDateTime24h':
   o = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: !1,
   };
   break;
  default:
   o = i ?? { timeZone: 'UTC', timeZoneName: 'short' };
 }
 return new Intl.DateTimeFormat(t, o).format(l);
}
function Ng(e, n) {
 const t = e.toJsDate(n),
  a = t.getFullYear(),
  l = io(String(t.getMonth() + 1), 2, '0'),
  i = io(String(t.getDate()), 2, '0');
 return `${a}-${l}-${i}`;
}
function zg(e) {
 const [n, t, a] = e.split('-').map(Number);
 return new Date(n, t - 1, a);
}
function Hg(e, n) {
 const t = new Date(e);
 return t.setMinutes(t.getMinutes() + n), t;
}
function Wg(e, n) {
 const t = new Date(e);
 return t.setHours(t.getHours() + n), t;
}
function jg(e, n) {
 const t = new Date(e);
 return t.setDate(t.getDate() + n), t;
}
function Yg(e, n) {
 const t = new Date(e);
 return t.setDate(t.getDate() + n * 7), t;
}
function Gg(e, n) {
 const t = new Date(e);
 return t.setDate(1), t.setMonth(t.getMonth() + n), t;
}
function Ug(e) {
 return e.getFullYear();
}
function Kg(e) {
 return e.getMonth();
}
function qg(e) {
 return e.getDate();
}
function Xg(e) {
 return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function Zg(e) {
 return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function Jg(e) {
 return e.getHours();
}
function Qg(e) {
 return e.getMinutes();
}
function eh(e) {
 return new Date(e.getFullYear(), 0, 1);
}
function th(e) {
 return new Date(e.getFullYear(), 11, 31);
}
function nh(e, n) {
 return _a(e, n[0]) && ih(e, n[1]);
}
function ah(e) {
 const n = new Date(e);
 return n instanceof Date && !isNaN(n.getTime());
}
function _a(e, n) {
 return e.getTime() > n.getTime();
}
function lh(e, n) {
 return _a(jl(e), jl(n));
}
function ih(e, n) {
 return e.getTime() < n.getTime();
}
function Go(e, n) {
 return e.getTime() === n.getTime();
}
function oh(e, n) {
 return (
  e.getDate() === n.getDate() && e.getMonth() === n.getMonth() && e.getFullYear() === n.getFullYear()
 );
}
function rh(e, n) {
 return e.getMonth() === n.getMonth() && e.getFullYear() === n.getFullYear();
}
function uh(e, n) {
 return e.getFullYear() === n.getFullYear();
}
function sh(e, n, t) {
 const a = new Date(e),
  l = new Date(n);
 switch (t) {
  case 'years':
   return a.getFullYear() - l.getFullYear();
  case 'quarters':
   return Math.floor((a.getMonth() - l.getMonth() + (a.getFullYear() - l.getFullYear()) * 12) / 4);
  case 'months':
   return a.getMonth() - l.getMonth() + (a.getFullYear() - l.getFullYear()) * 12;
  case 'weeks':
   return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60 * 24 * 7));
  case 'days':
   return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60 * 24));
  case 'hours':
   return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60));
  case 'minutes':
   return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60));
  case 'seconds':
   return Math.floor((a.getTime() - l.getTime()) / 1e3);
  default:
   return a.getTime() - l.getTime();
 }
}
function ch(e, n) {
 const t = new Date(e);
 return t.setHours(n), t;
}
function dh(e, n) {
 const t = new Date(e);
 return t.setMinutes(n), t;
}
function vh(e, n) {
 const t = new Date(e);
 return t.setMonth(n), t;
}
function fh(e, n) {
 const t = new Date(e);
 return t.setDate(n), t;
}
function mh(e, n) {
 const t = new Date(e);
 return t.setFullYear(n), t;
}
function jl(e) {
 return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function gh(e) {
 return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class hh {
 constructor(n) {
  (this.locale = n.locale), (this.formats = n.formats);
 }
 date(n) {
  return ds(n);
 }
 toJsDate(n) {
  return n;
 }
 toISO(n) {
  return Ng(this, n);
 }
 parseISO(n) {
  return zg(n);
 }
 addMinutes(n, t) {
  return Hg(n, t);
 }
 addHours(n, t) {
  return Wg(n, t);
 }
 addDays(n, t) {
  return jg(n, t);
 }
 addWeeks(n, t) {
  return Yg(n, t);
 }
 addMonths(n, t) {
  return Gg(n, t);
 }
 getWeekArray(n, t) {
  return Eg(n, this.locale, t ? Number(t) : void 0);
 }
 startOfWeek(n, t) {
  return Mg(n, this.locale, t ? Number(t) : void 0);
 }
 endOfWeek(n) {
  return $g(n, this.locale);
 }
 startOfMonth(n) {
  return ss(n);
 }
 endOfMonth(n) {
  return cs(n);
 }
 format(n, t) {
  return Rg(n, t, this.locale, this.formats);
 }
 isEqual(n, t) {
  return Go(n, t);
 }
 isValid(n) {
  return ah(n);
 }
 isWithinRange(n, t) {
  return nh(n, t);
 }
 isAfter(n, t) {
  return _a(n, t);
 }
 isAfterDay(n, t) {
  return lh(n, t);
 }
 isBefore(n, t) {
  return !_a(n, t) && !Go(n, t);
 }
 isSameDay(n, t) {
  return oh(n, t);
 }
 isSameMonth(n, t) {
  return rh(n, t);
 }
 isSameYear(n, t) {
  return uh(n, t);
 }
 setMinutes(n, t) {
  return dh(n, t);
 }
 setHours(n, t) {
  return ch(n, t);
 }
 setMonth(n, t) {
  return vh(n, t);
 }
 setDate(n, t) {
  return fh(n, t);
 }
 setYear(n, t) {
  return mh(n, t);
 }
 getDiff(n, t, a) {
  return sh(n, t, a);
 }
 getWeekdays(n) {
  return Og(this.locale, n ? Number(n) : void 0);
 }
 getYear(n) {
  return Ug(n);
 }
 getMonth(n) {
  return Kg(n);
 }
 getDate(n) {
  return qg(n);
 }
 getNextMonth(n) {
  return Xg(n);
 }
 getPreviousMonth(n) {
  return Zg(n);
 }
 getHours(n) {
  return Jg(n);
 }
 getMinutes(n) {
  return Qg(n);
 }
 startOfDay(n) {
  return jl(n);
 }
 endOfDay(n) {
  return gh(n);
 }
 startOfYear(n) {
  return eh(n);
 }
 endOfYear(n) {
  return th(n);
 }
}
const vs = Symbol.for('vuetify:date-options'),
 Uo = Symbol.for('vuetify:date-adapter');
function yh(e, n) {
 const t = qe(
  {
   adapter: hh,
   locale: {
    af: 'af-ZA',
    bg: 'bg-BG',
    ca: 'ca-ES',
    ckb: '',
    cs: 'cs-CZ',
    de: 'de-DE',
    el: 'el-GR',
    en: 'en-US',
    et: 'et-EE',
    fa: 'fa-IR',
    fi: 'fi-FI',
    hr: 'hr-HR',
    hu: 'hu-HU',
    he: 'he-IL',
    id: 'id-ID',
    it: 'it-IT',
    ja: 'ja-JP',
    ko: 'ko-KR',
    lv: 'lv-LV',
    lt: 'lt-LT',
    nl: 'nl-NL',
    no: 'no-NO',
    pl: 'pl-PL',
    pt: 'pt-PT',
    ro: 'ro-RO',
    ru: 'ru-RU',
    sk: 'sk-SK',
    sl: 'sl-SI',
    srCyrl: 'sr-SP',
    srLatn: 'sr-SP',
    sv: 'sv-SE',
    th: 'th-TH',
    tr: 'tr-TR',
    az: 'az-AZ',
    uk: 'uk-UA',
    vi: 'vi-VN',
    zhHans: 'zh-CN',
    zhHant: 'zh-TW',
   },
  },
  e
 );
 return { options: t, instance: fs(t, n) };
}
function fs(e, n) {
 const t = ct(
  typeof e.adapter == 'function'
   ? new e.adapter({ locale: e.locale[n.current.value] ?? n.current.value, formats: e.formats })
   : e.adapter
 );
 return (
  X(n.current, (a) => {
   t.locale = e.locale[a] ?? a ?? t.locale;
  }),
  t
 );
}
function sa() {
 const e = ge(vs);
 if (!e) throw new Error('[Vuetify] Could not find injected date options');
 const n = $e();
 return fs(e, n);
}
function bh(e, n) {
 const t = e.toJsDate(n);
 let a = t.getFullYear(),
  l = new Date(a, 0, 1);
 if (t < l) (a = a - 1), (l = new Date(a, 0, 1));
 else {
  const r = new Date(a + 1, 0, 1);
  t >= r && ((a = a + 1), (l = r));
 }
 const i = Math.abs(t.getTime() - l.getTime()),
  o = Math.ceil(i / (1e3 * 60 * 60 * 24));
 return Math.floor(o / 7) + 1;
}
const Sh = D(
  {
   modelValue: null,
   color: String,
   cancelText: { type: String, default: '$vuetify.confirmEdit.cancel' },
   okText: { type: String, default: '$vuetify.confirmEdit.ok' },
  },
  'VConfirmEdit'
 ),
 kh = $()({
  name: 'VConfirmEdit',
  props: Sh(),
  emits: { cancel: () => !0, save: (e) => !0, 'update:modelValue': (e) => !0 },
  setup(e, n) {
   let { emit: t, slots: a } = n;
   const l = le(e, 'modelValue'),
    i = j();
   pe(() => {
    i.value = structuredClone(tt(l.value));
   });
   const { t: o } = $e(),
    r = y(() => Ct(l.value, i.value));
   function s() {
    (l.value = i.value), t('save', i.value);
   }
   function c() {
    (i.value = structuredClone(tt(l.value))), t('cancel');
   }
   let d = !1;
   return (
    R(() => {
     var m;
     const f = u(ie, null, [
      u(
       ye,
       { disabled: r.value, variant: 'text', color: e.color, onClick: c, text: o(e.cancelText) },
       null
      ),
      u(ye, { disabled: r.value, variant: 'text', color: e.color, onClick: s, text: o(e.okText) }, null),
     ]);
     return u(ie, null, [
      (m = a.default) == null
       ? void 0
       : m.call(a, {
          model: i,
          save: s,
          cancel: c,
          isPristine: r.value,
          get actions() {
           return (d = !0), f;
          },
         }),
      !d && f,
     ]);
    }),
    { save: s, cancel: c, isPristine: r }
   );
  },
 }),
 ms = D(
  { expandOnClick: Boolean, showExpand: Boolean, expanded: { type: Array, default: () => [] } },
  'DataTable-expand'
 ),
 gs = Symbol.for('vuetify:datatable:expanded');
function Qa(e) {
 const n = M(e, 'expandOnClick'),
  t = le(
   e,
   'expanded',
   e.expanded,
   (r) => new Set(r),
   (r) => [...r.values()]
  );
 function a(r, s) {
  const c = new Set(t.value);
  s ? c.add(r.value) : c.delete(r.value), (t.value = c);
 }
 function l(r) {
  return t.value.has(r.value);
 }
 function i(r) {
  a(r, !l(r));
 }
 const o = { expand: a, expanded: t, expandOnClick: n, isExpanded: l, toggleExpand: i };
 return Ie(gs, o), o;
}
function hs() {
 const e = ge(gs);
 if (!e) throw new Error('foo');
 return e;
}
const Li = D({ groupBy: { type: Array, default: () => [] } }, 'DataTable-group'),
 ys = Symbol.for('vuetify:data-table-group');
function Oi(e) {
 return { groupBy: le(e, 'groupBy') };
}
function el(e) {
 const { groupBy: n, sortBy: t } = e,
  a = j(new Set()),
  l = y(() => n.value.map((c) => ({ ...c, order: c.order ?? !1 })).concat(t.value));
 function i(c) {
  return a.value.has(c.id);
 }
 function o(c) {
  const d = new Set(a.value);
  i(c) ? d.delete(c.id) : d.add(c.id), (a.value = d);
 }
 function r(c) {
  function d(f) {
   const m = [];
   for (const v of f.items) 'type' in v && v.type === 'group' ? m.push(...d(v)) : m.push(v);
   return m;
  }
  return d({ type: 'group', items: c, id: 'dummy', key: 'dummy', value: 'dummy', depth: 0 });
 }
 const s = {
  sortByWithGroups: l,
  toggleGroup: o,
  opened: a,
  groupBy: n,
  extractRows: r,
  isGroupOpen: i,
 };
 return Ie(ys, s), s;
}
function bs() {
 const e = ge(ys);
 if (!e) throw new Error('Missing group!');
 return e;
}
function xh(e, n) {
 if (!e.length) return [];
 const t = new Map();
 for (const a of e) {
  const l = On(a.raw, n);
  t.has(l) || t.set(l, []), t.get(l).push(a);
 }
 return t;
}
function Ss(e, n) {
 let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
  a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 'root';
 if (!n.length) return [];
 const l = xh(e, n[0]),
  i = [],
  o = n.slice(1);
 return (
  l.forEach((r, s) => {
   const c = n[0],
    d = `${a}_${c}_${s}`;
   i.push({
    depth: t,
    id: d,
    key: c,
    value: s,
    items: o.length ? Ss(r, o, t + 1, d) : r,
    type: 'group',
   });
  }),
  i
 );
}
function ks(e, n) {
 const t = [];
 for (const a of e)
  'type' in a && a.type === 'group'
   ? (a.value != null && t.push(a), (n.has(a.id) || a.value == null) && t.push(...ks(a.items, n)))
   : t.push(a);
 return t;
}
function tl(e, n, t) {
 return {
  flatItems: y(() => {
   if (!n.value.length) return e.value;
   const l = Ss(
    e.value,
    n.value.map((i) => i.key)
   );
   return ks(l, t.value);
  }),
 };
}
function nl(e) {
 let { page: n, itemsPerPage: t, sortBy: a, groupBy: l, search: i } = e;
 const o = Me('VDataTable'),
  r = y(() => ({
   page: n.value,
   itemsPerPage: t.value,
   sortBy: a.value,
   groupBy: l.value,
   search: i.value,
  }));
 let s = null;
 X(
  r,
  () => {
   Ct(s, r.value) ||
    (s && s.search !== r.value.search && (n.value = 1),
    o.emit('update:options', r.value),
    (s = r.value));
  },
  { deep: !0, immediate: !0 }
 );
}
const Ri = D(
  {
   page: { type: [Number, String], default: 1 },
   itemsPerPage: { type: [Number, String], default: 10 },
  },
  'DataTable-paginate'
 ),
 xs = Symbol.for('vuetify:data-table-pagination');
function Ni(e) {
 const n = le(e, 'page', void 0, (a) => +(a ?? 1)),
  t = le(e, 'itemsPerPage', void 0, (a) => +(a ?? 10));
 return { page: n, itemsPerPage: t };
}
function zi(e) {
 const { page: n, itemsPerPage: t, itemsLength: a } = e,
  l = y(() => (t.value === -1 ? 0 : t.value * (n.value - 1))),
  i = y(() => (t.value === -1 ? a.value : Math.min(a.value, l.value + t.value))),
  o = y(() => (t.value === -1 || a.value === 0 ? 1 : Math.ceil(a.value / t.value)));
 pe(() => {
  n.value > o.value && (n.value = o.value);
 });
 function r(m) {
  (t.value = m), (n.value = 1);
 }
 function s() {
  n.value = Fe(n.value + 1, 1, o.value);
 }
 function c() {
  n.value = Fe(n.value - 1, 1, o.value);
 }
 function d(m) {
  n.value = Fe(m, 1, o.value);
 }
 const f = {
  page: n,
  itemsPerPage: t,
  startIndex: l,
  stopIndex: i,
  pageCount: o,
  itemsLength: a,
  nextPage: s,
  prevPage: c,
  setPage: d,
  setItemsPerPage: r,
 };
 return Ie(xs, f), f;
}
function wh() {
 const e = ge(xs);
 if (!e) throw new Error('Missing pagination!');
 return e;
}
function ws(e) {
 const n = Me('usePaginatedItems'),
  { items: t, startIndex: a, stopIndex: l, itemsPerPage: i } = e,
  o = y(() => (i.value <= 0 ? t.value : t.value.slice(a.value, l.value)));
 return (
  X(o, (r) => {
   n.emit('update:currentItems', r);
  }),
  { paginatedItems: o }
 );
}
const Ch = {
  showSelectAll: !1,
  allSelected: () => [],
  select: (e) => {
   var a;
   let { items: n, value: t } = e;
   return new Set(t ? [(a = n[0]) == null ? void 0 : a.value] : []);
  },
  selectAll: (e) => {
   let { selected: n } = e;
   return n;
  },
 },
 Cs = {
  showSelectAll: !0,
  allSelected: (e) => {
   let { currentPage: n } = e;
   return n;
  },
  select: (e) => {
   let { items: n, value: t, selected: a } = e;
   for (const l of n) t ? a.add(l.value) : a.delete(l.value);
   return a;
  },
  selectAll: (e) => {
   let { value: n, currentPage: t, selected: a } = e;
   return Cs.select({ items: t, value: n, selected: a });
  },
 },
 Vs = {
  showSelectAll: !0,
  allSelected: (e) => {
   let { allItems: n } = e;
   return n;
  },
  select: (e) => {
   let { items: n, value: t, selected: a } = e;
   for (const l of n) t ? a.add(l.value) : a.delete(l.value);
   return a;
  },
  selectAll: (e) => {
   let { value: n, allItems: t, selected: a } = e;
   return Vs.select({ items: t, value: n, selected: a });
  },
 },
 Ps = D(
  {
   showSelect: Boolean,
   selectStrategy: { type: [String, Object], default: 'page' },
   modelValue: { type: Array, default: () => [] },
   valueComparator: { type: Function, default: Ct },
  },
  'DataTable-select'
 ),
 Is = Symbol.for('vuetify:data-table-selection');
function al(e, n) {
 let { allItems: t, currentPage: a } = n;
 const l = le(
   e,
   'modelValue',
   e.modelValue,
   (S) =>
    new Set(
     Te(S).map((k) => {
      var I;
      return ((I = t.value.find((B) => e.valueComparator(k, B.value))) == null ? void 0 : I.value) ?? k;
     })
    ),
   (S) => [...S.values()]
  ),
  i = y(() => t.value.filter((S) => S.selectable)),
  o = y(() => a.value.filter((S) => S.selectable)),
  r = y(() => {
   if (typeof e.selectStrategy == 'object') return e.selectStrategy;
   switch (e.selectStrategy) {
    case 'single':
     return Ch;
    case 'all':
     return Vs;
    case 'page':
    default:
     return Cs;
   }
  });
 function s(S) {
  return Te(S).every((k) => l.value.has(k.value));
 }
 function c(S) {
  return Te(S).some((k) => l.value.has(k.value));
 }
 function d(S, k) {
  const I = r.value.select({ items: S, value: k, selected: new Set(l.value) });
  l.value = I;
 }
 function f(S) {
  d([S], !s([S]));
 }
 function m(S) {
  const k = r.value.selectAll({
   value: S,
   allItems: i.value,
   currentPage: o.value,
   selected: new Set(l.value),
  });
  l.value = k;
 }
 const v = y(() => l.value.size > 0),
  b = y(() => {
   const S = r.value.allSelected({ allItems: i.value, currentPage: o.value });
   return !!S.length && s(S);
  }),
  g = y(() => r.value.showSelectAll),
  h = {
   toggleSelect: f,
   select: d,
   selectAll: m,
   isSelected: s,
   isSomeSelected: c,
   someSelected: v,
   allSelected: b,
   showSelectAll: g,
  };
 return Ie(Is, h), h;
}
function ll() {
 const e = ge(Is);
 if (!e) throw new Error('Missing selection!');
 return e;
}
const _s = D(
  {
   sortBy: { type: Array, default: () => [] },
   customKeySort: Object,
   multiSort: Boolean,
   mustSort: Boolean,
  },
  'DataTable-sort'
 ),
 Ts = Symbol.for('vuetify:data-table-sort');
function il(e) {
 const n = le(e, 'sortBy'),
  t = M(e, 'mustSort'),
  a = M(e, 'multiSort');
 return { sortBy: n, mustSort: t, multiSort: a };
}
function ol(e) {
 const { sortBy: n, mustSort: t, multiSort: a, page: l } = e,
  i = (s) => {
   if (s.key == null) return;
   let c = n.value.map((f) => ({ ...f })) ?? [];
   const d = c.find((f) => f.key === s.key);
   d
    ? d.order === 'desc'
      ? t.value
        ? (d.order = 'asc')
        : (c = c.filter((f) => f.key !== s.key))
      : (d.order = 'desc')
    : a.value
      ? (c = [...c, { key: s.key, order: 'asc' }])
      : (c = [{ key: s.key, order: 'asc' }]),
    (n.value = c),
    l && (l.value = 1);
  };
 function o(s) {
  return !!n.value.find((c) => c.key === s.key);
 }
 const r = { sortBy: n, toggleSort: i, isSorted: o };
 return Ie(Ts, r), r;
}
function As() {
 const e = ge(Ts);
 if (!e) throw new Error('Missing sort!');
 return e;
}
function Hi(e, n, t, a) {
 const l = $e();
 return {
  sortedItems: y(() => {
   var o, r;
   return !t.value.length || e.disableSort
    ? n.value
    : Vh(n.value, t.value, l.current.value, {
       transform: a == null ? void 0 : a.transform,
       sortFunctions: {
        ...e.customKeySort,
        ...((o = a == null ? void 0 : a.sortFunctions) == null ? void 0 : o.value),
       },
       sortRawFunctions: (r = a == null ? void 0 : a.sortRawFunctions) == null ? void 0 : r.value,
      });
  }),
 };
}
function Vh(e, n, t, a) {
 const l = new Intl.Collator(t, { sensitivity: 'accent', usage: 'sort' });
 return e
  .map((o) => [o, a != null && a.transform ? a.transform(o) : o])
  .sort((o, r) => {
   var s, c;
   for (let d = 0; d < n.length; d++) {
    let f = !1;
    const m = n[d].key,
     v = n[d].order ?? 'asc';
    if (v === !1) continue;
    let b = o[1][m],
     g = r[1][m],
     h = o[0].raw,
     S = r[0].raw;
    if (
     (v === 'desc' && (([b, g] = [g, b]), ([h, S] = [S, h])),
     (s = a == null ? void 0 : a.sortRawFunctions) != null && s[m])
    ) {
     const k = a.sortRawFunctions[m](h, S);
     if (k == null) continue;
     if (((f = !0), k)) return k;
    }
    if ((c = a == null ? void 0 : a.sortFunctions) != null && c[m]) {
     const k = a.sortFunctions[m](b, g);
     if (k == null) continue;
     if (((f = !0), k)) return k;
    }
    if (!f) {
     if (b instanceof Date && g instanceof Date) return b.getTime() - g.getTime();
     if ((([b, g] = [b, g].map((k) => (k != null ? k.toString().toLocaleLowerCase() : k))), b !== g))
      return fa(b) && fa(g)
       ? 0
       : fa(b)
         ? -1
         : fa(g)
           ? 1
           : !isNaN(b) && !isNaN(g)
             ? Number(b) - Number(g)
             : l.compare(b, g);
    }
   }
   return 0;
  })
  .map((o) => {
   let [r] = o;
   return r;
  });
}
const Ph = D(
 {
  items: { type: Array, default: () => [] },
  itemValue: { type: [String, Array, Function], default: 'id' },
  itemSelectable: { type: [String, Array, Function], default: null },
  returnObject: Boolean,
 },
 'DataIterator-items'
);
function Ih(e, n) {
 const t = e.returnObject ? n : Le(n, e.itemValue),
  a = Le(n, e.itemSelectable, !0);
 return { type: 'item', value: t, selectable: a, raw: n };
}
function _h(e, n) {
 const t = [];
 for (const a of n) t.push(Ih(e, a));
 return t;
}
function Th(e) {
 return { items: y(() => _h(e, e.items)) };
}
const Ah = D(
  {
   search: String,
   loading: Boolean,
   ...J(),
   ...Ph(),
   ...Ps(),
   ..._s(),
   ...Ri({ itemsPerPage: 5 }),
   ...ms(),
   ...Li(),
   ...ra(),
   ...de(),
   ...St({ transition: { component: jn, hideOnLeave: !0 } }),
  },
  'VDataIterator'
 ),
 Bh = $()({
  name: 'VDataIterator',
  props: Ah(),
  emits: {
   'update:modelValue': (e) => !0,
   'update:groupBy': (e) => !0,
   'update:page': (e) => !0,
   'update:itemsPerPage': (e) => !0,
   'update:sortBy': (e) => !0,
   'update:options': (e) => !0,
   'update:expanded': (e) => !0,
   'update:currentItems': (e) => !0,
  },
  setup(e, n) {
   let { slots: t } = n;
   const a = le(e, 'groupBy'),
    l = M(e, 'search'),
    { items: i } = Th(e),
    { filteredItems: o } = ua(e, i, l, { transform: (L) => L.raw }),
    { sortBy: r, multiSort: s, mustSort: c } = il(e),
    { page: d, itemsPerPage: f } = Ni(e),
    { toggleSort: m } = ol({ sortBy: r, multiSort: s, mustSort: c, page: d }),
    {
     sortByWithGroups: v,
     opened: b,
     extractRows: g,
     isGroupOpen: h,
     toggleGroup: S,
    } = el({ groupBy: a, sortBy: r }),
    { sortedItems: k } = Hi(e, o, v, { transform: (L) => L.raw }),
    { flatItems: I } = tl(k, a, b),
    B = y(() => I.value.length),
    {
     startIndex: w,
     stopIndex: V,
     pageCount: C,
     prevPage: P,
     nextPage: x,
     setItemsPerPage: _,
     setPage: T,
    } = zi({ page: d, itemsPerPage: f, itemsLength: B }),
    { paginatedItems: A } = ws({ items: I, startIndex: w, stopIndex: V, itemsPerPage: f }),
    p = y(() => g(A.value)),
    {
     isSelected: F,
     select: O,
     selectAll: W,
     toggleSelect: te,
    } = al(e, { allItems: i, currentPage: p }),
    { isExpanded: N, toggleExpand: H } = Qa(e);
   nl({ page: d, itemsPerPage: f, sortBy: r, groupBy: a, search: l });
   const E = y(() => ({
    page: d.value,
    itemsPerPage: f.value,
    sortBy: r.value,
    pageCount: C.value,
    toggleSort: m,
    prevPage: P,
    nextPage: x,
    setPage: T,
    setItemsPerPage: _,
    isSelected: F,
    select: O,
    selectAll: W,
    toggleSelect: te,
    isExpanded: N,
    toggleExpand: H,
    isGroupOpen: h,
    toggleGroup: S,
    items: p.value,
    groupedItems: A.value,
   }));
   return (
    R(() =>
     u(
      e.tag,
      { class: ['v-data-iterator', { 'v-data-iterator--loading': e.loading }, e.class], style: e.style },
      {
       default: () => {
        var L, G;
        return [
         (L = t.header) == null ? void 0 : L.call(t, E.value),
         u(
          Xe,
          { transition: e.transition },
          {
           default: () => {
            var ae, oe;
            return [
             e.loading
              ? u(
                 ea,
                 { key: 'loader', name: 'v-data-iterator', active: !0 },
                 {
                  default: (q) => {
                   var Y;
                   return (Y = t.loader) == null ? void 0 : Y.call(t, q);
                  },
                 }
                )
              : u('div', { key: 'items' }, [
                 A.value.length
                  ? (oe = t.default) == null
                    ? void 0
                    : oe.call(t, E.value)
                  : (ae = t['no-data']) == null
                    ? void 0
                    : ae.call(t),
                ]),
            ];
           },
          }
         ),
         (G = t.footer) == null ? void 0 : G.call(t, E.value),
        ];
       },
      }
     )
    ),
    {}
   );
  },
 });
function Dh() {
 const e = j([]);
 Ec(() => (e.value = []));
 function n(t, a) {
  e.value[a] = t;
 }
 return { refs: e, updateRef: n };
}
const ph = D(
  {
   activeColor: String,
   start: { type: [Number, String], default: 1 },
   modelValue: { type: Number, default: (e) => e.start },
   disabled: Boolean,
   length: { type: [Number, String], default: 1, validator: (e) => e % 1 === 0 },
   totalVisible: [Number, String],
   firstIcon: { type: ue, default: '$first' },
   prevIcon: { type: ue, default: '$prev' },
   nextIcon: { type: ue, default: '$next' },
   lastIcon: { type: ue, default: '$last' },
   ariaLabel: { type: String, default: '$vuetify.pagination.ariaLabel.root' },
   pageAriaLabel: { type: String, default: '$vuetify.pagination.ariaLabel.page' },
   currentPageAriaLabel: { type: String, default: '$vuetify.pagination.ariaLabel.currentPage' },
   firstAriaLabel: { type: String, default: '$vuetify.pagination.ariaLabel.first' },
   previousAriaLabel: { type: String, default: '$vuetify.pagination.ariaLabel.previous' },
   nextAriaLabel: { type: String, default: '$vuetify.pagination.ariaLabel.next' },
   lastAriaLabel: { type: String, default: '$vuetify.pagination.ariaLabel.last' },
   ellipsis: { type: String, default: '...' },
   showFirstLastPage: Boolean,
   ...st(),
   ...J(),
   ...He(),
   ...Oe(),
   ..._e(),
   ...It(),
   ...de({ tag: 'nav' }),
   ...me(),
   ...mt({ variant: 'text' }),
  },
  'VPagination'
 ),
 Yl = $()({
  name: 'VPagination',
  props: ph(),
  emits: {
   'update:modelValue': (e) => !0,
   first: (e) => !0,
   prev: (e) => !0,
   next: (e) => !0,
   last: (e) => !0,
  },
  setup(e, n) {
   let { slots: t, emit: a } = n;
   const l = le(e, 'modelValue'),
    { t: i, n: o } = $e(),
    { isRtl: r } = Re(),
    { themeClasses: s } = Se(e),
    { width: c } = gt(),
    d = K(-1);
   Be(void 0, { scoped: !0 });
   const { resizeRef: f } = yt((P) => {
     if (!P.length) return;
     const { target: x, contentRect: _ } = P[0],
      T = x.querySelector('.v-pagination__list > *');
     if (!T) return;
     const A = _.width,
      p = T.offsetWidth + parseFloat(getComputedStyle(T).marginRight) * 2;
     d.value = g(A, p);
    }),
    m = y(() => parseInt(e.length, 10)),
    v = y(() => parseInt(e.start, 10)),
    b = y(() =>
     e.totalVisible != null ? parseInt(e.totalVisible, 10) : d.value >= 0 ? d.value : g(c.value, 58)
    );
   function g(P, x) {
    const _ = e.showFirstLastPage ? 5 : 3;
    return Math.max(0, Math.floor(+((P - x * _) / x).toFixed(2)));
   }
   const h = y(() => {
    if (m.value <= 0 || isNaN(m.value) || m.value > Number.MAX_SAFE_INTEGER) return [];
    if (b.value <= 0) return [];
    if (b.value === 1) return [l.value];
    if (m.value <= b.value) return xt(m.value, v.value);
    const P = b.value % 2 === 0,
     x = P ? b.value / 2 : Math.floor(b.value / 2),
     _ = P ? x : x + 1,
     T = m.value - x;
    if (_ - l.value >= 0) return [...xt(Math.max(1, b.value - 1), v.value), e.ellipsis, m.value];
    if (l.value - T >= (P ? 1 : 0)) {
     const A = b.value - 1,
      p = m.value - A + v.value;
     return [v.value, e.ellipsis, ...xt(A, p)];
    } else {
     const A = Math.max(1, b.value - 3),
      p = A === 1 ? l.value : l.value - Math.ceil(A / 2) + v.value;
     return [v.value, e.ellipsis, ...xt(A, p), e.ellipsis, m.value];
    }
   });
   function S(P, x, _) {
    P.preventDefault(), (l.value = x), _ && a(_, x);
   }
   const { refs: k, updateRef: I } = Dh();
   Be({
    VPaginationBtn: {
     color: M(e, 'color'),
     border: M(e, 'border'),
     density: M(e, 'density'),
     size: M(e, 'size'),
     variant: M(e, 'variant'),
     rounded: M(e, 'rounded'),
     elevation: M(e, 'elevation'),
    },
   });
   const B = y(() =>
     h.value.map((P, x) => {
      const _ = (T) => I(T, x);
      if (typeof P == 'string')
       return {
        isActive: !1,
        key: `ellipsis-${x}`,
        page: P,
        props: { ref: _, ellipsis: !0, icon: !0, disabled: !0 },
       };
      {
       const T = P === l.value;
       return {
        isActive: T,
        key: P,
        page: o(P),
        props: {
         ref: _,
         ellipsis: !1,
         icon: !0,
         disabled: !!e.disabled || +e.length < 2,
         color: T ? e.activeColor : e.color,
         'aria-current': T,
         'aria-label': i(T ? e.currentPageAriaLabel : e.pageAriaLabel, P),
         onClick: (A) => S(A, P),
        },
       };
      }
     })
    ),
    w = y(() => {
     const P = !!e.disabled || l.value <= v.value,
      x = !!e.disabled || l.value >= v.value + m.value - 1;
     return {
      first: e.showFirstLastPage
       ? {
          icon: r.value ? e.lastIcon : e.firstIcon,
          onClick: (_) => S(_, v.value, 'first'),
          disabled: P,
          'aria-label': i(e.firstAriaLabel),
          'aria-disabled': P,
         }
       : void 0,
      prev: {
       icon: r.value ? e.nextIcon : e.prevIcon,
       onClick: (_) => S(_, l.value - 1, 'prev'),
       disabled: P,
       'aria-label': i(e.previousAriaLabel),
       'aria-disabled': P,
      },
      next: {
       icon: r.value ? e.prevIcon : e.nextIcon,
       onClick: (_) => S(_, l.value + 1, 'next'),
       disabled: x,
       'aria-label': i(e.nextAriaLabel),
       'aria-disabled': x,
      },
      last: e.showFirstLastPage
       ? {
          icon: r.value ? e.firstIcon : e.lastIcon,
          onClick: (_) => S(_, v.value + m.value - 1, 'last'),
          disabled: x,
          'aria-label': i(e.lastAriaLabel),
          'aria-disabled': x,
         }
       : void 0,
     };
    });
   function V() {
    var x;
    const P = l.value - v.value;
    (x = k.value[P]) == null || x.$el.focus();
   }
   function C(P) {
    P.key === Sl.left && !e.disabled && l.value > +e.start
     ? ((l.value = l.value - 1), he(V))
     : P.key === Sl.right &&
       !e.disabled &&
       l.value < v.value + m.value - 1 &&
       ((l.value = l.value + 1), he(V));
   }
   return (
    R(() =>
     u(
      e.tag,
      {
       ref: f,
       class: ['v-pagination', s.value, e.class],
       style: e.style,
       role: 'navigation',
       'aria-label': i(e.ariaLabel),
       onKeydown: C,
       'data-test': 'v-pagination-root',
      },
      {
       default: () => [
        u('ul', { class: 'v-pagination__list' }, [
         e.showFirstLastPage &&
          u('li', { key: 'first', class: 'v-pagination__first', 'data-test': 'v-pagination-first' }, [
           t.first ? t.first(w.value.first) : u(ye, z({ _as: 'VPaginationBtn' }, w.value.first), null),
          ]),
         u('li', { key: 'prev', class: 'v-pagination__prev', 'data-test': 'v-pagination-prev' }, [
          t.prev ? t.prev(w.value.prev) : u(ye, z({ _as: 'VPaginationBtn' }, w.value.prev), null),
         ]),
         B.value.map((P, x) =>
          u(
           'li',
           {
            key: P.key,
            class: ['v-pagination__item', { 'v-pagination__item--is-active': P.isActive }],
            'data-test': 'v-pagination-item',
           },
           [
            t.item
             ? t.item(P)
             : u(ye, z({ _as: 'VPaginationBtn' }, P.props), { default: () => [P.page] }),
           ]
          )
         ),
         u('li', { key: 'next', class: 'v-pagination__next', 'data-test': 'v-pagination-next' }, [
          t.next ? t.next(w.value.next) : u(ye, z({ _as: 'VPaginationBtn' }, w.value.next), null),
         ]),
         e.showFirstLastPage &&
          u('li', { key: 'last', class: 'v-pagination__last', 'data-test': 'v-pagination-last' }, [
           t.last ? t.last(w.value.last) : u(ye, z({ _as: 'VPaginationBtn' }, w.value.last), null),
          ]),
        ]),
       ],
      }
     )
    ),
    {}
   );
  },
 }),
 Wi = D(
  {
   prevIcon: { type: ue, default: '$prev' },
   nextIcon: { type: ue, default: '$next' },
   firstIcon: { type: ue, default: '$first' },
   lastIcon: { type: ue, default: '$last' },
   itemsPerPageText: { type: String, default: '$vuetify.dataFooter.itemsPerPageText' },
   pageText: { type: String, default: '$vuetify.dataFooter.pageText' },
   firstPageLabel: { type: String, default: '$vuetify.dataFooter.firstPage' },
   prevPageLabel: { type: String, default: '$vuetify.dataFooter.prevPage' },
   nextPageLabel: { type: String, default: '$vuetify.dataFooter.nextPage' },
   lastPageLabel: { type: String, default: '$vuetify.dataFooter.lastPage' },
   itemsPerPageOptions: {
    type: Array,
    default: () => [
     { value: 10, title: '10' },
     { value: 25, title: '25' },
     { value: 50, title: '50' },
     { value: 100, title: '100' },
     { value: -1, title: '$vuetify.dataFooter.itemsPerPageAll' },
    ],
   },
   showCurrentPage: Boolean,
  },
  'VDataTableFooter'
 ),
 Xn = $()({
  name: 'VDataTableFooter',
  props: Wi(),
  setup(e, n) {
   let { slots: t } = n;
   const { t: a } = $e(),
    {
     page: l,
     pageCount: i,
     startIndex: o,
     stopIndex: r,
     itemsLength: s,
     itemsPerPage: c,
     setItemsPerPage: d,
    } = wh(),
    f = y(() =>
     e.itemsPerPageOptions.map((m) =>
      typeof m == 'number'
       ? { value: m, title: m === -1 ? a('$vuetify.dataFooter.itemsPerPageAll') : String(m) }
       : { ...m, title: isNaN(Number(m.title)) ? a(m.title) : m.title }
     )
    );
   return (
    R(() => {
     var v;
     const m = Yl.filterProps(e);
     return u('div', { class: 'v-data-table-footer' }, [
      (v = t.prepend) == null ? void 0 : v.call(t),
      u('div', { class: 'v-data-table-footer__items-per-page' }, [
       u('span', null, [a(e.itemsPerPageText)]),
       u(
        Mi,
        {
         items: f.value,
         modelValue: c.value,
         'onUpdate:modelValue': (b) => d(Number(b)),
         density: 'compact',
         variant: 'outlined',
         'hide-details': !0,
        },
        null
       ),
      ]),
      u('div', { class: 'v-data-table-footer__info' }, [
       u('div', null, [a(e.pageText, s.value ? o.value + 1 : 0, r.value, s.value)]),
      ]),
      u('div', { class: 'v-data-table-footer__pagination' }, [
       u(
        Yl,
        z(
         {
          modelValue: l.value,
          'onUpdate:modelValue': (b) => (l.value = b),
          density: 'comfortable',
          'first-aria-label': e.firstPageLabel,
          'last-aria-label': e.lastPageLabel,
          length: i.value,
          'next-aria-label': e.nextPageLabel,
          'previous-aria-label': e.prevPageLabel,
          rounded: !0,
          'show-first-last-page': !0,
          'total-visible': e.showCurrentPage ? 1 : 0,
          variant: 'plain',
         },
         m
        ),
        null
       ),
      ]),
     ]);
    }),
    {}
   );
  },
 }),
 Ta = wd(
  {
   align: { type: String, default: 'start' },
   fixed: Boolean,
   fixedOffset: [Number, String],
   height: [Number, String],
   lastFixed: Boolean,
   noPadding: Boolean,
   tag: String,
   width: [Number, String],
   maxWidth: [Number, String],
   nowrap: Boolean,
  },
  (e, n) => {
   let { slots: t } = n;
   const a = e.tag ?? 'td';
   return u(
    a,
    {
     class: [
      'v-data-table__td',
      {
       'v-data-table-column--fixed': e.fixed,
       'v-data-table-column--last-fixed': e.lastFixed,
       'v-data-table-column--no-padding': e.noPadding,
       'v-data-table-column--nowrap': e.nowrap,
      },
      `v-data-table-column--align-${e.align}`,
     ],
     style: {
      height: Z(e.height),
      width: Z(e.width),
      maxWidth: Z(e.maxWidth),
      left: Z(e.fixedOffset || null),
     },
    },
    {
     default: () => {
      var l;
      return [(l = t.default) == null ? void 0 : l.call(t)];
     },
    }
   );
  }
 ),
 Eh = D({ headers: Array }, 'DataTable-header'),
 Bs = Symbol.for('vuetify:data-table-headers'),
 Ds = { title: '', sortable: !1 },
 Mh = { ...Ds, width: 48 };
function $h() {
 const n = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).map((t) => ({
  element: t,
  priority: 0,
 }));
 return {
  enqueue: (t, a) => {
   let l = !1;
   for (let i = 0; i < n.length; i++)
    if (n[i].priority > a) {
     n.splice(i, 0, { element: t, priority: a }), (l = !0);
     break;
    }
   l || n.push({ element: t, priority: a });
  },
  size: () => n.length,
  count: () => {
   let t = 0;
   if (!n.length) return 0;
   const a = Math.floor(n[0].priority);
   for (let l = 0; l < n.length; l++) Math.floor(n[l].priority) === a && (t += 1);
   return t;
  },
  dequeue: () => n.shift(),
 };
}
function Gl(e) {
 let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
 if (!e.children) n.push(e);
 else for (const t of e.children) Gl(t, n);
 return n;
}
function ps(e) {
 let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : new Set();
 for (const t of e) t.key && n.add(t.key), t.children && ps(t.children, n);
 return n;
}
function Fh(e) {
 if (e.key) {
  if (e.key === 'data-table-group') return Ds;
  if (['data-table-expand', 'data-table-select'].includes(e.key)) return Mh;
 }
}
function ji(e) {
 let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
 return e.children ? Math.max(n, ...e.children.map((t) => ji(t, n + 1))) : n;
}
function Lh(e) {
 let n = !1;
 function t(i) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (i)
   if ((o && (i.fixed = !0), i.fixed))
    if (i.children) for (let r = i.children.length - 1; r >= 0; r--) t(i.children[r], !0);
    else n ? isNaN(+i.width) && (`${i.key}`, void 0) : (i.lastFixed = !0), (n = !0);
   else if (i.children) for (let r = i.children.length - 1; r >= 0; r--) t(i.children[r]);
   else n = !1;
 }
 for (let i = e.length - 1; i >= 0; i--) t(e[i]);
 function a(i) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!i) return o;
  if (i.children) {
   i.fixedOffset = o;
   for (const r of i.children) o = a(r, o);
  } else i.fixed && ((i.fixedOffset = o), (o += parseFloat(i.width || '0') || 0));
  return o;
 }
 let l = 0;
 for (const i of e) l = a(i, l);
}
function Oh(e, n) {
 const t = [];
 let a = 0;
 const l = $h(e);
 for (; l.size() > 0; ) {
  let o = l.count();
  const r = [];
  let s = 1;
  for (; o > 0; ) {
   const { element: c, priority: d } = l.dequeue(),
    f = n - a - ji(c);
   if ((r.push({ ...c, rowspan: f ?? 1, colspan: c.children ? Gl(c).length : 1 }), c.children))
    for (const m of c.children) {
     const v = (d % 1) + s / Math.pow(10, a + 2);
     l.enqueue(m, a + f + v);
    }
   (s += 1), (o -= 1);
  }
  (a += 1), t.push(r);
 }
 return { columns: e.map((o) => Gl(o)).flat(), headers: t };
}
function Es(e) {
 const n = [];
 for (const t of e) {
  const a = { ...Fh(t), ...t },
   l = a.key ?? (typeof a.value == 'string' ? a.value : null),
   i = a.value ?? l ?? null,
   o = {
    ...a,
    key: l,
    value: i,
    sortable: a.sortable ?? (a.key != null || !!a.sort),
    children: a.children ? Es(a.children) : void 0,
   };
  n.push(o);
 }
 return n;
}
function Yi(e, n) {
 const t = j([]),
  a = j([]),
  l = j({}),
  i = j({}),
  o = j({});
 pe(() => {
  var g, h, S;
  const c = (e.headers || Object.keys(e.items[0] ?? {}).map((k) => ({ key: k, title: An(k) }))).slice(),
   d = ps(c);
  (g = n == null ? void 0 : n.groupBy) != null &&
   g.value.length &&
   !d.has('data-table-group') &&
   c.unshift({ key: 'data-table-group', title: 'Group' }),
   (h = n == null ? void 0 : n.showSelect) != null &&
    h.value &&
    !d.has('data-table-select') &&
    c.unshift({ key: 'data-table-select' }),
   (S = n == null ? void 0 : n.showExpand) != null &&
    S.value &&
    !d.has('data-table-expand') &&
    c.push({ key: 'data-table-expand' });
  const f = Es(c);
  Lh(f);
  const m = Math.max(...f.map((k) => ji(k))) + 1,
   v = Oh(f, m);
  (t.value = v.headers), (a.value = v.columns);
  const b = v.headers.flat(1);
  for (const k of b)
   k.key &&
    (k.sortable && (k.sort && (l.value[k.key] = k.sort), k.sortRaw && (i.value[k.key] = k.sortRaw)),
    k.filter && (o.value[k.key] = k.filter));
 });
 const r = { headers: t, columns: a, sortFunctions: l, sortRawFunctions: i, filterFunctions: o };
 return Ie(Bs, r), r;
}
function rl() {
 const e = ge(Bs);
 if (!e) throw new Error('Missing headers!');
 return e;
}
const Ms = D(
  {
   color: String,
   sticky: Boolean,
   disableSort: Boolean,
   multiSort: Boolean,
   sortAscIcon: { type: ue, default: '$sortAsc' },
   sortDescIcon: { type: ue, default: '$sortDesc' },
   headerProps: { type: Object },
   ...mn(),
   ...Na(),
  },
  'VDataTableHeaders'
 ),
 nn = $()({
  name: 'VDataTableHeaders',
  props: Ms(),
  setup(e, n) {
   let { slots: t } = n;
   const { t: a } = $e(),
    { toggleSort: l, sortBy: i, isSorted: o } = As(),
    { someSelected: r, allSelected: s, selectAll: c, showSelectAll: d } = ll(),
    { columns: f, headers: m } = rl(),
    { loaderClasses: v } = Qn(e);
   function b(P, x) {
    if (!(!e.sticky && !P.fixed))
     return {
      position: 'sticky',
      left: P.fixed ? Z(P.fixedOffset) : void 0,
      top: e.sticky ? `calc(var(--v-table-header-height) * ${x})` : void 0,
     };
   }
   function g(P) {
    const x = i.value.find((_) => _.key === P.key);
    return x ? (x.order === 'asc' ? e.sortAscIcon : e.sortDescIcon) : e.sortAscIcon;
   }
   const { backgroundColorClasses: h, backgroundColorStyles: S } = we(e, 'color'),
    { displayClasses: k, mobile: I } = gt(e),
    B = y(() => ({
     headers: m.value,
     columns: f.value,
     toggleSort: l,
     isSorted: o,
     sortBy: i.value,
     someSelected: r.value,
     allSelected: s.value,
     selectAll: c,
     getSortIcon: g,
    })),
    w = y(() => ['v-data-table__th', { 'v-data-table__th--sticky': e.sticky }, k.value, v.value]),
    V = (P) => {
     let { column: x, x: _, y: T } = P;
     const A = x.key === 'data-table-select' || x.key === 'data-table-expand',
      p = z(e.headerProps ?? {}, x.headerProps ?? {});
     return u(
      Ta,
      z(
       {
        tag: 'th',
        align: x.align,
        class: [
         {
          'v-data-table__th--sortable': x.sortable && !e.disableSort,
          'v-data-table__th--sorted': o(x),
          'v-data-table__th--fixed': x.fixed,
         },
         ...w.value,
        ],
        style: { width: Z(x.width), minWidth: Z(x.minWidth), maxWidth: Z(x.maxWidth), ...b(x, T) },
        colspan: x.colspan,
        rowspan: x.rowspan,
        onClick: x.sortable ? () => l(x) : void 0,
        fixed: x.fixed,
        nowrap: x.nowrap,
        lastFixed: x.lastFixed,
        noPadding: A,
       },
       p
      ),
      {
       default: () => {
        var W;
        const F = `header.${x.key}`,
         O = {
          column: x,
          selectAll: c,
          isSorted: o,
          toggleSort: l,
          sortBy: i.value,
          someSelected: r.value,
          allSelected: s.value,
          getSortIcon: g,
         };
        return t[F]
         ? t[F](O)
         : x.key === 'data-table-select'
           ? ((W = t['header.data-table-select']) == null ? void 0 : W.call(t, O)) ??
             (d.value &&
              u(
               At,
               { modelValue: s.value, indeterminate: r.value && !s.value, 'onUpdate:modelValue': c },
               null
              ))
           : u('div', { class: 'v-data-table-header__content' }, [
              u('span', null, [x.title]),
              x.sortable &&
               !e.disableSort &&
               u(be, { key: 'icon', class: 'v-data-table-header__sort-icon', icon: g(x) }, null),
              e.multiSort &&
               o(x) &&
               u(
                'div',
                { key: 'badge', class: ['v-data-table-header__sort-badge', ...h.value], style: S.value },
                [i.value.findIndex((te) => te.key === x.key) + 1]
               ),
             ]);
       },
      }
     );
    },
    C = () => {
     const P = z(e.headerProps ?? {} ?? {}),
      x = y(() => f.value.filter((T) => (T == null ? void 0 : T.sortable) && !e.disableSort)),
      _ = y(() => {
       if (f.value.find((A) => A.key === 'data-table-select') != null)
        return s.value ? '$checkboxOn' : r.value ? '$checkboxIndeterminate' : '$checkboxOff';
      });
     return u(Ta, z({ tag: 'th', class: [...w.value], colspan: m.value.length + 1 }, P), {
      default: () => [
       u('div', { class: 'v-data-table-header__content' }, [
        u(
         Mi,
         {
          chips: !0,
          class: 'v-data-table__td-sort-select',
          clearable: !0,
          density: 'default',
          items: x.value,
          label: a('$vuetify.dataTable.sortBy'),
          multiple: e.multiSort,
          variant: 'underlined',
          'onClick:clear': () => (i.value = []),
          appendIcon: _.value,
          'onClick:append': () => c(!s.value),
         },
         {
          ...t,
          chip: (T) => {
           var A;
           return u(
            Mn,
            {
             onClick: (A = T.item.raw) != null && A.sortable ? () => l(T.item.raw) : void 0,
             onMousedown: (p) => {
              p.preventDefault(), p.stopPropagation();
             },
            },
            {
             default: () => [
              T.item.title,
              u(
               be,
               {
                class: [
                 'v-data-table__td-sort-icon',
                 o(T.item.raw) && 'v-data-table__td-sort-icon-active',
                ],
                icon: g(T.item.raw),
                size: 'small',
               },
               null
              ),
             ],
            }
           );
          },
         }
        ),
       ]),
      ],
     });
    };
   R(() =>
    I.value
     ? u('tr', null, [u(C, null, null)])
     : u(ie, null, [
        t.headers
         ? t.headers(B.value)
         : m.value.map((P, x) =>
            u('tr', null, [P.map((_, T) => u(V, { column: _, x: T, y: x }, null))])
           ),
        e.loading &&
         u('tr', { class: 'v-data-table-progress' }, [
          u('th', { colspan: f.value.length }, [
           u(
            ea,
            {
             name: 'v-data-table-progress',
             absolute: !0,
             active: !0,
             color: typeof e.loading == 'boolean' ? void 0 : e.loading,
             indeterminate: !0,
            },
            { default: t.loader }
           ),
          ]),
         ]),
       ])
   );
  },
 }),
 Rh = D({ item: { type: Object, required: !0 } }, 'VDataTableGroupHeaderRow'),
 Nh = $()({
  name: 'VDataTableGroupHeaderRow',
  props: Rh(),
  setup(e, n) {
   let { slots: t } = n;
   const { isGroupOpen: a, toggleGroup: l, extractRows: i } = bs(),
    { isSelected: o, isSomeSelected: r, select: s } = ll(),
    { columns: c } = rl(),
    d = y(() => i([e.item]));
   return () =>
    u(
     'tr',
     {
      class: 'v-data-table-group-header-row',
      style: { '--v-data-table-group-header-row-depth': e.item.depth },
     },
     [
      c.value.map((f) => {
       var m, v;
       if (f.key === 'data-table-group') {
        const b = a(e.item) ? '$expand' : '$next',
         g = () => l(e.item);
        return (
         ((m = t['data-table-group']) == null
          ? void 0
          : m.call(t, { item: e.item, count: d.value.length, props: { icon: b, onClick: g } })) ??
         u(
          Ta,
          { class: 'v-data-table-group-header-row__column' },
          {
           default: () => [
            u(ye, { size: 'small', variant: 'text', icon: b, onClick: g }, null),
            u('span', null, [e.item.value]),
            u('span', null, [Lt('('), d.value.length, Lt(')')]),
           ],
          }
         )
        );
       }
       if (f.key === 'data-table-select') {
        const b = o(d.value),
         g = r(d.value) && !b,
         h = (S) => s(d.value, S);
        return (
         ((v = t['data-table-select']) == null
          ? void 0
          : v.call(t, { props: { modelValue: b, indeterminate: g, 'onUpdate:modelValue': h } })) ??
         u('td', null, [u(At, { modelValue: b, indeterminate: g, 'onUpdate:modelValue': h }, null)])
        );
       }
       return u('td', null, null);
      }),
     ]
    );
  },
 }),
 zh = D(
  {
   index: Number,
   item: Object,
   cellProps: [Object, Function],
   onClick: We(),
   onContextmenu: We(),
   onDblclick: We(),
   ...mn(),
  },
  'VDataTableRow'
 ),
 Gi = $()({
  name: 'VDataTableRow',
  props: zh(),
  setup(e, n) {
   let { slots: t } = n;
   const { displayClasses: a, mobile: l } = gt(e, 'v-data-table__tr'),
    { isSelected: i, toggleSelect: o, someSelected: r, allSelected: s, selectAll: c } = ll(),
    { isExpanded: d, toggleExpand: f } = hs(),
    { toggleSort: m, sortBy: v, isSorted: b } = As(),
    { columns: g } = rl();
   R(() =>
    u(
     'tr',
     {
      class: [
       'v-data-table__tr',
       { 'v-data-table__tr--clickable': !!(e.onClick || e.onContextmenu || e.onDblclick) },
       a.value,
      ],
      onClick: e.onClick,
      onContextmenu: e.onContextmenu,
      onDblclick: e.onDblclick,
     },
     [
      e.item &&
       g.value.map((h, S) => {
        const k = e.item,
         I = `item.${h.key}`,
         B = `header.${h.key}`,
         w = {
          index: e.index,
          item: k.raw,
          internalItem: k,
          value: On(k.columns, h.key),
          column: h,
          isSelected: i,
          toggleSelect: o,
          isExpanded: d,
          toggleExpand: f,
         },
         V = {
          column: h,
          selectAll: c,
          isSorted: b,
          toggleSort: m,
          sortBy: v.value,
          someSelected: r.value,
          allSelected: s.value,
          getSortIcon: () => '',
         },
         C =
          typeof e.cellProps == 'function'
           ? e.cellProps({
              index: w.index,
              item: w.item,
              internalItem: w.internalItem,
              value: w.value,
              column: h,
             })
           : e.cellProps,
         P =
          typeof h.cellProps == 'function'
           ? h.cellProps({ index: w.index, item: w.item, internalItem: w.internalItem, value: w.value })
           : h.cellProps;
        return u(
         Ta,
         z(
          {
           align: h.align,
           class: {
            'v-data-table__td--expanded-row': h.key === 'data-table-expand',
            'v-data-table__td--select-row': h.key === 'data-table-select',
           },
           fixed: h.fixed,
           fixedOffset: h.fixedOffset,
           lastFixed: h.lastFixed,
           maxWidth: l.value ? void 0 : h.maxWidth,
           noPadding: h.key === 'data-table-select' || h.key === 'data-table-expand',
           nowrap: h.nowrap,
           width: l.value ? void 0 : h.width,
          },
          C,
          P
         ),
         {
          default: () => {
           var _, T, A, p, F;
           if (t[I] && !l.value) return (_ = t[I]) == null ? void 0 : _.call(t, w);
           if (h.key === 'data-table-select')
            return (
             ((T = t['item.data-table-select']) == null ? void 0 : T.call(t, w)) ??
             u(
              At,
              { disabled: !k.selectable, modelValue: i([k]), onClick: Qi(() => o(k), ['stop']) },
              null
             )
            );
           if (h.key === 'data-table-expand')
            return (
             ((A = t['item.data-table-expand']) == null ? void 0 : A.call(t, w)) ??
             u(
              ye,
              {
               icon: d(k) ? '$collapse' : '$expand',
               size: 'small',
               variant: 'text',
               onClick: Qi(() => f(k), ['stop']),
              },
              null
             )
            );
           const x = Mc(w.value);
           return l.value
            ? u(ie, null, [
               u('div', { class: 'v-data-table__td-title' }, [
                ((p = t[B]) == null ? void 0 : p.call(t, V)) ?? h.title,
               ]),
               u('div', { class: 'v-data-table__td-value' }, [
                ((F = t[I]) == null ? void 0 : F.call(t, w)) ?? x,
               ]),
              ])
            : x;
          },
         }
        );
       }),
     ]
    )
   );
  },
 }),
 $s = D(
  {
   loading: [Boolean, String],
   loadingText: { type: String, default: '$vuetify.dataIterator.loadingText' },
   hideNoData: Boolean,
   items: { type: Array, default: () => [] },
   noDataText: { type: String, default: '$vuetify.noDataText' },
   rowProps: [Object, Function],
   cellProps: [Object, Function],
   ...mn(),
  },
  'VDataTableRows'
 ),
 an = $()({
  name: 'VDataTableRows',
  inheritAttrs: !1,
  props: $s(),
  setup(e, n) {
   let { attrs: t, slots: a } = n;
   const { columns: l } = rl(),
    { expandOnClick: i, toggleExpand: o, isExpanded: r } = hs(),
    { isSelected: s, toggleSelect: c } = ll(),
    { toggleGroup: d, isGroupOpen: f } = bs(),
    { t: m } = $e(),
    { mobile: v } = gt(e);
   return (
    R(() => {
     var b, g;
     return e.loading && (!e.items.length || a.loading)
      ? u('tr', { class: 'v-data-table-rows-loading', key: 'loading' }, [
         u('td', { colspan: l.value.length }, [
          ((b = a.loading) == null ? void 0 : b.call(a)) ?? m(e.loadingText),
         ]),
        ])
      : !e.loading && !e.items.length && !e.hideNoData
        ? u('tr', { class: 'v-data-table-rows-no-data', key: 'no-data' }, [
           u('td', { colspan: l.value.length }, [
            ((g = a['no-data']) == null ? void 0 : g.call(a)) ?? m(e.noDataText),
           ]),
          ])
        : u(ie, null, [
           e.items.map((h, S) => {
            var B;
            if (h.type === 'group') {
             const w = {
              index: S,
              item: h,
              columns: l.value,
              isExpanded: r,
              toggleExpand: o,
              isSelected: s,
              toggleSelect: c,
              toggleGroup: d,
              isGroupOpen: f,
             };
             return a['group-header']
              ? a['group-header'](w)
              : u(
                 Nh,
                 z(
                  { key: `group-header_${h.id}`, item: h },
                  Co(t, ':group-header', () => w)
                 ),
                 a
                );
            }
            const k = {
              index: S,
              item: h.raw,
              internalItem: h,
              columns: l.value,
              isExpanded: r,
              toggleExpand: o,
              isSelected: s,
              toggleSelect: c,
             },
             I = {
              ...k,
              props: z(
               {
                key: `item_${h.key ?? h.index}`,
                onClick: i.value
                 ? () => {
                    o(h);
                   }
                 : void 0,
                index: S,
                item: h,
                cellProps: e.cellProps,
                mobile: v.value,
               },
               Co(t, ':row', () => k),
               typeof e.rowProps == 'function'
                ? e.rowProps({ item: k.item, index: k.index, internalItem: k.internalItem })
                : e.rowProps
              ),
             };
            return u(ie, { key: I.props.key }, [
             a.item ? a.item(I) : u(Gi, I.props, a),
             r(h) && ((B = a['expanded-row']) == null ? void 0 : B.call(a, k)),
            ]);
           }),
          ]);
    }),
    {}
   );
  },
 }),
 Fs = D(
  {
   fixedHeader: Boolean,
   fixedFooter: Boolean,
   height: [Number, String],
   hover: Boolean,
   ...J(),
   ...He(),
   ...de(),
   ...me(),
  },
  'VTable'
 ),
 ln = $()({
  name: 'VTable',
  props: Fs(),
  setup(e, n) {
   let { slots: t, emit: a } = n;
   const { themeClasses: l } = Se(e),
    { densityClasses: i } = Je(e);
   return (
    R(() =>
     u(
      e.tag,
      {
       class: [
        'v-table',
        {
         'v-table--fixed-height': !!e.height,
         'v-table--fixed-header': e.fixedHeader,
         'v-table--fixed-footer': e.fixedFooter,
         'v-table--has-top': !!t.top,
         'v-table--has-bottom': !!t.bottom,
         'v-table--hover': e.hover,
        },
        l.value,
        i.value,
        e.class,
       ],
       style: e.style,
      },
      {
       default: () => {
        var o, r, s;
        return [
         (o = t.top) == null ? void 0 : o.call(t),
         t.default
          ? u('div', { class: 'v-table__wrapper', style: { height: Z(e.height) } }, [
             u('table', null, [t.default()]),
            ])
          : (r = t.wrapper) == null
            ? void 0
            : r.call(t),
         (s = t.bottom) == null ? void 0 : s.call(t),
        ];
       },
      }
     )
    ),
    {}
   );
  },
 }),
 Hh = D(
  {
   items: { type: Array, default: () => [] },
   itemValue: { type: [String, Array, Function], default: 'id' },
   itemSelectable: { type: [String, Array, Function], default: null },
   rowProps: [Object, Function],
   cellProps: [Object, Function],
   returnObject: Boolean,
  },
  'DataTable-items'
 );
function Wh(e, n, t, a) {
 const l = e.returnObject ? n : Le(n, e.itemValue),
  i = Le(n, e.itemSelectable, !0),
  o = a.reduce((r, s) => (s.key != null && (r[s.key] = Le(n, s.value)), r), {});
 return {
  type: 'item',
  key: e.returnObject ? Le(n, e.itemValue) : l,
  index: t,
  value: l,
  selectable: i,
  columns: o,
  raw: n,
 };
}
function jh(e, n, t) {
 return n.map((a, l) => Wh(e, a, l, t));
}
function Ui(e, n) {
 return { items: y(() => jh(e, e.items, n.value)) };
}
const Ki = D(
  {
   ...$s(),
   hideDefaultBody: Boolean,
   hideDefaultFooter: Boolean,
   hideDefaultHeader: Boolean,
   width: [String, Number],
   search: String,
   ...ms(),
   ...Li(),
   ...Eh(),
   ...Hh(),
   ...Ps(),
   ..._s(),
   ...Ms(),
   ...Fs(),
  },
  'DataTable'
 ),
 Yh = D({ ...Ri(), ...Ki(), ...ra(), ...Wi() }, 'VDataTable'),
 Gh = $()({
  name: 'VDataTable',
  props: Yh(),
  emits: {
   'update:modelValue': (e) => !0,
   'update:page': (e) => !0,
   'update:itemsPerPage': (e) => !0,
   'update:sortBy': (e) => !0,
   'update:options': (e) => !0,
   'update:groupBy': (e) => !0,
   'update:expanded': (e) => !0,
   'update:currentItems': (e) => !0,
  },
  setup(e, n) {
   let { attrs: t, slots: a } = n;
   const { groupBy: l } = Oi(e),
    { sortBy: i, multiSort: o, mustSort: r } = il(e),
    { page: s, itemsPerPage: c } = Ni(e),
    {
     columns: d,
     headers: f,
     sortFunctions: m,
     sortRawFunctions: v,
     filterFunctions: b,
    } = Yi(e, { groupBy: l, showSelect: M(e, 'showSelect'), showExpand: M(e, 'showExpand') }),
    { items: g } = Ui(e, d),
    h = M(e, 'search'),
    { filteredItems: S } = ua(e, g, h, { transform: (Y) => Y.columns, customKeyFilter: b }),
    { toggleSort: k } = ol({ sortBy: i, multiSort: o, mustSort: r, page: s }),
    {
     sortByWithGroups: I,
     opened: B,
     extractRows: w,
     isGroupOpen: V,
     toggleGroup: C,
    } = el({ groupBy: l, sortBy: i }),
    { sortedItems: P } = Hi(e, S, I, {
     transform: (Y) => Y.columns,
     sortFunctions: m,
     sortRawFunctions: v,
    }),
    { flatItems: x } = tl(P, l, B),
    _ = y(() => x.value.length),
    {
     startIndex: T,
     stopIndex: A,
     pageCount: p,
     setItemsPerPage: F,
    } = zi({ page: s, itemsPerPage: c, itemsLength: _ }),
    { paginatedItems: O } = ws({ items: x, startIndex: T, stopIndex: A, itemsPerPage: c }),
    W = y(() => w(O.value)),
    {
     isSelected: te,
     select: N,
     selectAll: H,
     toggleSelect: E,
     someSelected: L,
     allSelected: G,
    } = al(e, { allItems: g, currentPage: W }),
    { isExpanded: ae, toggleExpand: oe } = Qa(e);
   nl({ page: s, itemsPerPage: c, sortBy: i, groupBy: l, search: h }),
    Be({
     VDataTableRows: {
      hideNoData: M(e, 'hideNoData'),
      noDataText: M(e, 'noDataText'),
      loading: M(e, 'loading'),
      loadingText: M(e, 'loadingText'),
     },
    });
   const q = y(() => ({
    page: s.value,
    itemsPerPage: c.value,
    sortBy: i.value,
    pageCount: p.value,
    toggleSort: k,
    setItemsPerPage: F,
    someSelected: L.value,
    allSelected: G.value,
    isSelected: te,
    select: N,
    selectAll: H,
    toggleSelect: E,
    isExpanded: ae,
    toggleExpand: oe,
    isGroupOpen: V,
    toggleGroup: C,
    items: W.value.map((Y) => Y.raw),
    internalItems: W.value,
    groupedItems: O.value,
    columns: d.value,
    headers: f.value,
   }));
   return (
    R(() => {
     const Y = Xn.filterProps(e),
      Q = nn.filterProps(e),
      xe = an.filterProps(e),
      Ce = ln.filterProps(e);
     return u(
      ln,
      z(
       {
        class: [
         'v-data-table',
         { 'v-data-table--show-select': e.showSelect, 'v-data-table--loading': e.loading },
         e.class,
        ],
        style: e.style,
       },
       Ce
      ),
      {
       top: () => {
        var ee;
        return (ee = a.top) == null ? void 0 : ee.call(a, q.value);
       },
       default: () => {
        var ee, ve, U, ne, se, re;
        return a.default
         ? a.default(q.value)
         : u(ie, null, [
            (ee = a.colgroup) == null ? void 0 : ee.call(a, q.value),
            !e.hideDefaultHeader && u('thead', { key: 'thead' }, [u(nn, Q, a)]),
            (ve = a.thead) == null ? void 0 : ve.call(a, q.value),
            !e.hideDefaultBody &&
             u('tbody', null, [
              (U = a['body.prepend']) == null ? void 0 : U.call(a, q.value),
              a.body ? a.body(q.value) : u(an, z(t, xe, { items: O.value }), a),
              (ne = a['body.append']) == null ? void 0 : ne.call(a, q.value),
             ]),
            (se = a.tbody) == null ? void 0 : se.call(a, q.value),
            (re = a.tfoot) == null ? void 0 : re.call(a, q.value),
           ]);
       },
       bottom: () =>
        a.bottom
         ? a.bottom(q.value)
         : !e.hideDefaultFooter &&
           u(ie, null, [u(la, null, null), u(Xn, Y, { prepend: a['footer.prepend'] })]),
      }
     );
    }),
    {}
   );
  },
 }),
 Uh = D({ ...Ki(), ...Li(), ...ju(), ...ra() }, 'VDataTableVirtual'),
 Kh = $()({
  name: 'VDataTableVirtual',
  props: Uh(),
  emits: {
   'update:modelValue': (e) => !0,
   'update:sortBy': (e) => !0,
   'update:options': (e) => !0,
   'update:groupBy': (e) => !0,
   'update:expanded': (e) => !0,
  },
  setup(e, n) {
   let { attrs: t, slots: a } = n;
   const { groupBy: l } = Oi(e),
    { sortBy: i, multiSort: o, mustSort: r } = il(e),
    {
     columns: s,
     headers: c,
     filterFunctions: d,
     sortFunctions: f,
     sortRawFunctions: m,
    } = Yi(e, { groupBy: l, showSelect: M(e, 'showSelect'), showExpand: M(e, 'showExpand') }),
    { items: v } = Ui(e, s),
    b = M(e, 'search'),
    { filteredItems: g } = ua(e, v, b, { transform: (Q) => Q.columns, customKeyFilter: d }),
    { toggleSort: h } = ol({ sortBy: i, multiSort: o, mustSort: r }),
    {
     sortByWithGroups: S,
     opened: k,
     extractRows: I,
     isGroupOpen: B,
     toggleGroup: w,
    } = el({ groupBy: l, sortBy: i }),
    { sortedItems: V } = Hi(e, g, S, {
     transform: (Q) => Q.columns,
     sortFunctions: f,
     sortRawFunctions: m,
    }),
    { flatItems: C } = tl(V, l, k),
    P = y(() => I(C.value)),
    {
     isSelected: x,
     select: _,
     selectAll: T,
     toggleSelect: A,
     someSelected: p,
     allSelected: F,
    } = al(e, { allItems: P, currentPage: P }),
    { isExpanded: O, toggleExpand: W } = Qa(e),
    {
     containerRef: te,
     markerRef: N,
     paddingTop: H,
     paddingBottom: E,
     computedItems: L,
     handleItemResize: G,
     handleScroll: ae,
     handleScrollend: oe,
    } = Yu(e, C),
    q = y(() => L.value.map((Q) => Q.raw));
   nl({ sortBy: i, page: K(1), itemsPerPage: K(-1), groupBy: l, search: b }),
    Be({
     VDataTableRows: {
      hideNoData: M(e, 'hideNoData'),
      noDataText: M(e, 'noDataText'),
      loading: M(e, 'loading'),
      loadingText: M(e, 'loadingText'),
     },
    });
   const Y = y(() => ({
    sortBy: i.value,
    toggleSort: h,
    someSelected: p.value,
    allSelected: F.value,
    isSelected: x,
    select: _,
    selectAll: T,
    toggleSelect: A,
    isExpanded: O,
    toggleExpand: W,
    isGroupOpen: B,
    toggleGroup: w,
    items: P.value.map((Q) => Q.raw),
    internalItems: P.value,
    groupedItems: C.value,
    columns: s.value,
    headers: c.value,
   }));
   R(() => {
    const Q = nn.filterProps(e),
     xe = an.filterProps(e),
     Ce = ln.filterProps(e);
    return u(
     ln,
     z({ class: ['v-data-table', { 'v-data-table--loading': e.loading }, e.class], style: e.style }, Ce),
     {
      top: () => {
       var ee;
       return (ee = a.top) == null ? void 0 : ee.call(a, Y.value);
      },
      wrapper: () => {
       var ee, ve, U;
       return u(
        'div',
        {
         ref: te,
         onScrollPassive: ae,
         onScrollend: oe,
         class: 'v-table__wrapper',
         style: { height: Z(e.height) },
        },
        [
         u('table', null, [
          (ee = a.colgroup) == null ? void 0 : ee.call(a, Y.value),
          !e.hideDefaultHeader &&
           u('thead', { key: 'thead' }, [u(nn, z(Q, { sticky: e.fixedHeader }), a)]),
          !e.hideDefaultBody &&
           u('tbody', null, [
            u('tr', { ref: N, style: { height: Z(H.value), border: 0 } }, [
             u('td', { colspan: s.value.length, style: { height: 0, border: 0 } }, null),
            ]),
            (ve = a['body.prepend']) == null ? void 0 : ve.call(a, Y.value),
            u(an, z(t, xe, { items: q.value }), {
             ...a,
             item: (ne) =>
              u(
               Wu,
               {
                key: ne.internalItem.index,
                renderless: !0,
                'onUpdate:height': (se) => G(ne.internalItem.index, se),
               },
               {
                default: (se) => {
                 var ce;
                 let { itemRef: re } = se;
                 return (
                  ((ce = a.item) == null ? void 0 : ce.call(a, { ...ne, itemRef: re })) ??
                  u(
                   Gi,
                   z(ne.props, { ref: re, key: ne.internalItem.index, index: ne.internalItem.index }),
                   a
                  )
                 );
                },
               }
              ),
            }),
            (U = a['body.append']) == null ? void 0 : U.call(a, Y.value),
            u('tr', { style: { height: Z(E.value), border: 0 } }, [
             u('td', { colspan: s.value.length, style: { height: 0, border: 0 } }, null),
            ]),
           ]),
         ]),
        ]
       );
      },
      bottom: () => {
       var ee;
       return (ee = a.bottom) == null ? void 0 : ee.call(a, Y.value);
      },
     }
    );
   });
  },
 }),
 qh = D(
  { itemsLength: { type: [Number, String], required: !0 }, ...Ri(), ...Ki(), ...Wi() },
  'VDataTableServer'
 ),
 Xh = $()({
  name: 'VDataTableServer',
  props: qh(),
  emits: {
   'update:modelValue': (e) => !0,
   'update:page': (e) => !0,
   'update:itemsPerPage': (e) => !0,
   'update:sortBy': (e) => !0,
   'update:options': (e) => !0,
   'update:expanded': (e) => !0,
   'update:groupBy': (e) => !0,
  },
  setup(e, n) {
   let { attrs: t, slots: a } = n;
   const { groupBy: l } = Oi(e),
    { sortBy: i, multiSort: o, mustSort: r } = il(e),
    { page: s, itemsPerPage: c } = Ni(e),
    d = y(() => parseInt(e.itemsLength, 10)),
    { columns: f, headers: m } = Yi(e, {
     groupBy: l,
     showSelect: M(e, 'showSelect'),
     showExpand: M(e, 'showExpand'),
    }),
    { items: v } = Ui(e, f),
    { toggleSort: b } = ol({ sortBy: i, multiSort: o, mustSort: r, page: s }),
    { opened: g, isGroupOpen: h, toggleGroup: S, extractRows: k } = el({ groupBy: l, sortBy: i }),
    { pageCount: I, setItemsPerPage: B } = zi({ page: s, itemsPerPage: c, itemsLength: d }),
    { flatItems: w } = tl(v, l, g),
    {
     isSelected: V,
     select: C,
     selectAll: P,
     toggleSelect: x,
     someSelected: _,
     allSelected: T,
    } = al(e, { allItems: v, currentPage: v }),
    { isExpanded: A, toggleExpand: p } = Qa(e),
    F = y(() => k(v.value));
   nl({ page: s, itemsPerPage: c, sortBy: i, groupBy: l, search: M(e, 'search') }),
    Ie('v-data-table', { toggleSort: b, sortBy: i }),
    Be({
     VDataTableRows: {
      hideNoData: M(e, 'hideNoData'),
      noDataText: M(e, 'noDataText'),
      loading: M(e, 'loading'),
      loadingText: M(e, 'loadingText'),
     },
    });
   const O = y(() => ({
    page: s.value,
    itemsPerPage: c.value,
    sortBy: i.value,
    pageCount: I.value,
    toggleSort: b,
    setItemsPerPage: B,
    someSelected: _.value,
    allSelected: T.value,
    isSelected: V,
    select: C,
    selectAll: P,
    toggleSelect: x,
    isExpanded: A,
    toggleExpand: p,
    isGroupOpen: h,
    toggleGroup: S,
    items: F.value.map((W) => W.raw),
    internalItems: F.value,
    groupedItems: w.value,
    columns: f.value,
    headers: m.value,
   }));
   R(() => {
    const W = Xn.filterProps(e),
     te = nn.filterProps(e),
     N = an.filterProps(e),
     H = ln.filterProps(e);
    return u(
     ln,
     z({ class: ['v-data-table', { 'v-data-table--loading': e.loading }, e.class], style: e.style }, H),
     {
      top: () => {
       var E;
       return (E = a.top) == null ? void 0 : E.call(a, O.value);
      },
      default: () => {
       var E, L, G, ae, oe, q;
       return a.default
        ? a.default(O.value)
        : u(ie, null, [
           (E = a.colgroup) == null ? void 0 : E.call(a, O.value),
           !e.hideDefaultHeader &&
            u('thead', { key: 'thead', class: 'v-data-table__thead', role: 'rowgroup' }, [
             u(nn, z(te, { sticky: e.fixedHeader }), a),
            ]),
           (L = a.thead) == null ? void 0 : L.call(a, O.value),
           !e.hideDefaultBody &&
            u('tbody', { class: 'v-data-table__tbody', role: 'rowgroup' }, [
             (G = a['body.prepend']) == null ? void 0 : G.call(a, O.value),
             a.body ? a.body(O.value) : u(an, z(t, N, { items: w.value }), a),
             (ae = a['body.append']) == null ? void 0 : ae.call(a, O.value),
            ]),
           (oe = a.tbody) == null ? void 0 : oe.call(a, O.value),
           (q = a.tfoot) == null ? void 0 : q.call(a, O.value),
          ]);
      },
      bottom: () =>
       a.bottom
        ? a.bottom(O.value)
        : !e.hideDefaultFooter &&
          u(ie, null, [u(la, null, null), u(Xn, W, { prepend: a['footer.prepend'] })]),
     }
    );
   });
  },
 }),
 Zh = D({ fluid: { type: Boolean, default: !1 }, ...J(), ...de() }, 'VContainer'),
 Jh = $()({
  name: 'VContainer',
  props: Zh(),
  setup(e, n) {
   let { slots: t } = n;
   const { rtlClasses: a } = Re();
   return (
    R(() =>
     u(
      e.tag,
      { class: ['v-container', { 'v-container--fluid': e.fluid }, a.value, e.class], style: e.style },
      t
     )
    ),
    {}
   );
  },
 }),
 Ls = ja.reduce((e, n) => ((e[n] = { type: [Boolean, String, Number], default: !1 }), e), {}),
 Os = ja.reduce((e, n) => {
  const t = 'offset' + An(n);
  return (e[t] = { type: [String, Number], default: null }), e;
 }, {}),
 Rs = ja.reduce((e, n) => {
  const t = 'order' + An(n);
  return (e[t] = { type: [String, Number], default: null }), e;
 }, {}),
 Ko = { col: Object.keys(Ls), offset: Object.keys(Os), order: Object.keys(Rs) };
function Qh(e, n, t) {
 let a = e;
 if (!(t == null || t === !1)) {
  if (n) {
   const l = n.replace(e, '');
   a += `-${l}`;
  }
  return (
   e === 'col' && (a = 'v-' + a),
   (e === 'col' && (t === '' || t === !0)) || (a += `-${t}`),
   a.toLowerCase()
  );
 }
}
const ey = ['auto', 'start', 'end', 'center', 'baseline', 'stretch'],
 ty = D(
  {
   cols: { type: [Boolean, String, Number], default: !1 },
   ...Ls,
   offset: { type: [String, Number], default: null },
   ...Os,
   order: { type: [String, Number], default: null },
   ...Rs,
   alignSelf: { type: String, default: null, validator: (e) => ey.includes(e) },
   ...J(),
   ...de(),
  },
  'VCol'
 ),
 ny = $()({
  name: 'VCol',
  props: ty(),
  setup(e, n) {
   let { slots: t } = n;
   const a = y(() => {
    const l = [];
    let i;
    for (i in Ko)
     Ko[i].forEach((r) => {
      const s = e[r],
       c = Qh(i, r, s);
      c && l.push(c);
     });
    const o = l.some((r) => r.startsWith('v-col-'));
    return (
     l.push({
      'v-col': !o || !e.cols,
      [`v-col-${e.cols}`]: e.cols,
      [`offset-${e.offset}`]: e.offset,
      [`order-${e.order}`]: e.order,
      [`align-self-${e.alignSelf}`]: e.alignSelf,
     }),
     l
    );
   });
   return () => {
    var l;
    return Rt(
     e.tag,
     { class: [a.value, e.class], style: e.style },
     (l = t.default) == null ? void 0 : l.call(t)
    );
   };
  },
 }),
 qi = ['start', 'end', 'center'],
 Ns = ['space-between', 'space-around', 'space-evenly'];
function Xi(e, n) {
 return ja.reduce((t, a) => {
  const l = e + An(a);
  return (t[l] = n()), t;
 }, {});
}
const ay = [...qi, 'baseline', 'stretch'],
 zs = (e) => ay.includes(e),
 Hs = Xi('align', () => ({ type: String, default: null, validator: zs })),
 ly = [...qi, ...Ns],
 Ws = (e) => ly.includes(e),
 js = Xi('justify', () => ({ type: String, default: null, validator: Ws })),
 iy = [...qi, ...Ns, 'stretch'],
 Ys = (e) => iy.includes(e),
 Gs = Xi('alignContent', () => ({ type: String, default: null, validator: Ys })),
 qo = { align: Object.keys(Hs), justify: Object.keys(js), alignContent: Object.keys(Gs) },
 oy = { align: 'align', justify: 'justify', alignContent: 'align-content' };
function ry(e, n, t) {
 let a = oy[e];
 if (t != null) {
  if (n) {
   const l = n.replace(e, '');
   a += `-${l}`;
  }
  return (a += `-${t}`), a.toLowerCase();
 }
}
const uy = D(
  {
   dense: Boolean,
   noGutters: Boolean,
   align: { type: String, default: null, validator: zs },
   ...Hs,
   justify: { type: String, default: null, validator: Ws },
   ...js,
   alignContent: { type: String, default: null, validator: Ys },
   ...Gs,
   ...J(),
   ...de(),
  },
  'VRow'
 ),
 sy = $()({
  name: 'VRow',
  props: uy(),
  setup(e, n) {
   let { slots: t } = n;
   const a = y(() => {
    const l = [];
    let i;
    for (i in qo)
     qo[i].forEach((o) => {
      const r = e[o],
       s = ry(i, o, r);
      s && l.push(s);
     });
    return (
     l.push({
      'v-row--no-gutters': e.noGutters,
      'v-row--dense': e.dense,
      [`align-${e.align}`]: e.align,
      [`justify-${e.justify}`]: e.justify,
      [`align-content-${e.alignContent}`]: e.alignContent,
     }),
     l
    );
   });
   return () => {
    var l;
    return Rt(
     e.tag,
     { class: ['v-row', a.value, e.class], style: e.style },
     (l = t.default) == null ? void 0 : l.call(t)
    );
   };
  },
 }),
 Us = Pt('v-spacer', 'div', 'VSpacer'),
 Ks = D(
  {
   active: { type: [String, Array], default: void 0 },
   disabled: { type: [Boolean, String, Array], default: !1 },
   nextIcon: { type: ue, default: '$next' },
   prevIcon: { type: ue, default: '$prev' },
   modeIcon: { type: ue, default: '$subgroup' },
   text: String,
   viewMode: { type: String, default: 'month' },
  },
  'VDatePickerControls'
 ),
 Ul = $()({
  name: 'VDatePickerControls',
  props: Ks(),
  emits: {
   'click:year': () => !0,
   'click:month': () => !0,
   'click:prev': () => !0,
   'click:next': () => !0,
   'click:text': () => !0,
  },
  setup(e, n) {
   let { emit: t } = n;
   const a = y(() => (Array.isArray(e.disabled) ? e.disabled.includes('text') : !!e.disabled)),
    l = y(() => (Array.isArray(e.disabled) ? e.disabled.includes('mode') : !!e.disabled)),
    i = y(() => (Array.isArray(e.disabled) ? e.disabled.includes('prev') : !!e.disabled)),
    o = y(() => (Array.isArray(e.disabled) ? e.disabled.includes('next') : !!e.disabled));
   function r() {
    t('click:prev');
   }
   function s() {
    t('click:next');
   }
   function c() {
    t('click:year');
   }
   function d() {
    t('click:month');
   }
   return (
    R(() =>
     u('div', { class: ['v-date-picker-controls'] }, [
      u(
       ye,
       {
        class: 'v-date-picker-controls__month-btn',
        disabled: a.value,
        text: e.text,
        variant: 'text',
        rounded: !0,
        onClick: d,
       },
       null
      ),
      u(
       ye,
       {
        key: 'mode-btn',
        class: 'v-date-picker-controls__mode-btn',
        disabled: l.value,
        density: 'comfortable',
        icon: e.modeIcon,
        variant: 'text',
        onClick: c,
       },
       null
      ),
      u(Us, { key: 'mode-spacer' }, null),
      u('div', { key: 'month-buttons', class: 'v-date-picker-controls__month' }, [
       u(ye, { disabled: i.value, icon: e.prevIcon, variant: 'text', onClick: r }, null),
       u(ye, { disabled: o.value, icon: e.nextIcon, variant: 'text', onClick: s }, null),
      ]),
     ])
    ),
    {}
   );
  },
 }),
 cy = D(
  { appendIcon: String, color: String, header: String, transition: String, onClick: We() },
  'VDatePickerHeader'
 ),
 Kl = $()({
  name: 'VDatePickerHeader',
  props: cy(),
  emits: { click: () => !0, 'click:append': () => !0 },
  setup(e, n) {
   let { emit: t, slots: a } = n;
   const { backgroundColorClasses: l, backgroundColorStyles: i } = we(e, 'color');
   function o() {
    t('click');
   }
   function r() {
    t('click:append');
   }
   return (
    R(() => {
     const s = !!(a.default || e.header),
      c = !!(a.append || e.appendIcon);
     return u(
      'div',
      {
       class: ['v-date-picker-header', { 'v-date-picker-header--clickable': !!e.onClick }, l.value],
       style: i.value,
       onClick: o,
      },
      [
       a.prepend && u('div', { key: 'prepend', class: 'v-date-picker-header__prepend' }, [a.prepend()]),
       s &&
        u(
         Xe,
         { key: 'content', name: e.transition },
         {
          default: () => {
           var d;
           return [
            u('div', { key: e.header, class: 'v-date-picker-header__content' }, [
             ((d = a.default) == null ? void 0 : d.call(a)) ?? e.header,
            ]),
           ];
          },
         }
        ),
       c &&
        u('div', { class: 'v-date-picker-header__append' }, [
         a.append
          ? u(
             fe,
             {
              key: 'append-defaults',
              disabled: !e.appendIcon,
              defaults: { VBtn: { icon: e.appendIcon, variant: 'text' } },
             },
             {
              default: () => {
               var d;
               return [(d = a.append) == null ? void 0 : d.call(a)];
              },
             }
            )
          : u(ye, { key: 'append-btn', icon: e.appendIcon, variant: 'text', onClick: r }, null),
        ]),
      ]
     );
    }),
    {}
   );
  },
 }),
 dy = D(
  {
   allowedDates: [Array, Function],
   disabled: Boolean,
   displayValue: null,
   modelValue: Array,
   month: [Number, String],
   max: null,
   min: null,
   showAdjacentMonths: Boolean,
   year: [Number, String],
   weekdays: { type: Array, default: () => [0, 1, 2, 3, 4, 5, 6] },
   weeksInMonth: { type: String, default: 'dynamic' },
   firstDayOfWeek: [Number, String],
  },
  'calendar'
 );
function vy(e) {
 const n = sa(),
  t = le(e, 'modelValue', [], (v) => Te(v)),
  a = y(() =>
   e.displayValue
    ? n.date(e.displayValue)
    : t.value.length > 0
      ? n.date(t.value[0])
      : e.min
        ? n.date(e.min)
        : Array.isArray(e.allowedDates)
          ? n.date(e.allowedDates[0])
          : n.date()
  ),
  l = le(
   e,
   'year',
   void 0,
   (v) => {
    const b = v != null ? Number(v) : n.getYear(a.value);
    return n.startOfYear(n.setYear(n.date(), b));
   },
   (v) => n.getYear(v)
  ),
  i = le(
   e,
   'month',
   void 0,
   (v) => {
    const b = v != null ? Number(v) : n.getMonth(a.value),
     g = n.setYear(n.startOfMonth(n.date()), n.getYear(l.value));
    return n.setMonth(g, b);
   },
   (v) => n.getMonth(v)
  ),
  o = y(() => {
   const v = Number(e.firstDayOfWeek ?? 0);
   return e.weekdays.map((b) => (b + v) % 7);
  }),
  r = y(() => {
   const v = n.getWeekArray(i.value, e.firstDayOfWeek),
    b = v.flat(),
    g = 6 * 7;
   if (e.weeksInMonth === 'static' && b.length < g) {
    const h = b[b.length - 1];
    let S = [];
    for (let k = 1; k <= g - b.length; k++)
     S.push(n.addDays(h, k)), k % 7 === 0 && (v.push(S), (S = []));
   }
   return v;
  });
 function s(v, b) {
  return v
   .filter((g) => o.value.includes(n.toJsDate(g).getDay()))
   .map((g, h) => {
    const S = n.toISO(g),
     k = !n.isSameMonth(g, i.value),
     I = n.isSameDay(g, n.startOfMonth(i.value)),
     B = n.isSameDay(g, n.endOfMonth(i.value)),
     w = n.isSameDay(g, i.value);
    return {
     date: g,
     isoDate: S,
     formatted: n.format(g, 'keyboardDate'),
     year: n.getYear(g),
     month: n.getMonth(g),
     isDisabled: m(g),
     isWeekStart: h % 7 === 0,
     isWeekEnd: h % 7 === 6,
     isToday: n.isSameDay(g, b),
     isAdjacent: k,
     isHidden: k && !e.showAdjacentMonths,
     isStart: I,
     isSelected: t.value.some((V) => n.isSameDay(g, V)),
     isEnd: B,
     isSame: w,
     localized: n.format(g, 'dayOfMonth'),
    };
   });
 }
 const c = y(() => {
   const v = n.startOfWeek(a.value, e.firstDayOfWeek),
    b = [];
   for (let h = 0; h <= 6; h++) b.push(n.addDays(v, h));
   const g = n.date();
   return s(b, g);
  }),
  d = y(() => {
   const v = r.value.flat(),
    b = n.date();
   return s(v, b);
  }),
  f = y(() => r.value.map((v) => (v.length ? bh(n, v[0]) : null)));
 function m(v) {
  if (e.disabled) return !0;
  const b = n.date(v);
  return (e.min && n.isAfter(n.date(e.min), b)) || (e.max && n.isAfter(b, n.date(e.max)))
   ? !0
   : Array.isArray(e.allowedDates) && e.allowedDates.length > 0
     ? !e.allowedDates.some((g) => n.isSameDay(n.date(g), b))
     : typeof e.allowedDates == 'function'
       ? !e.allowedDates(b)
       : !1;
 }
 return {
  displayValue: a,
  daysInMonth: d,
  daysInWeek: c,
  genDays: s,
  model: t,
  weeksInMonth: r,
  weekDays: o,
  weekNumbers: f,
 };
}
const qs = D(
  {
   color: String,
   hideWeekdays: Boolean,
   multiple: [Boolean, Number, String],
   showWeek: Boolean,
   transition: { type: String, default: 'picker-transition' },
   reverseTransition: { type: String, default: 'picker-reverse-transition' },
   ...dy(),
  },
  'VDatePickerMonth'
 ),
 ql = $()({
  name: 'VDatePickerMonth',
  props: qs(),
  emits: { 'update:modelValue': (e) => !0, 'update:month': (e) => !0, 'update:year': (e) => !0 },
  setup(e, n) {
   let { emit: t, slots: a } = n;
   const l = j(),
    { daysInMonth: i, model: o, weekNumbers: r } = vy(e),
    s = sa(),
    c = K(),
    d = K(),
    f = K(!1),
    m = y(() => (f.value ? e.reverseTransition : e.transition));
   e.multiple === 'range' &&
    o.value.length > 0 &&
    ((c.value = o.value[0]), o.value.length > 1 && (d.value = o.value[o.value.length - 1]));
   const v = y(() => {
    const S = ['number', 'string'].includes(typeof e.multiple) ? Number(e.multiple) : 1 / 0;
    return o.value.length >= S;
   });
   X(i, (S, k) => {
    k && (f.value = s.isBefore(S[0].date, k[0].date));
   });
   function b(S) {
    const k = s.startOfDay(S);
    if ((o.value.length === 0 && (c.value = void 0), !c.value)) (c.value = k), (o.value = [c.value]);
    else if (d.value) (c.value = S), (d.value = void 0), (o.value = [c.value]);
    else {
     if (s.isSameDay(k, c.value)) {
      (c.value = void 0), (o.value = []);
      return;
     } else
      s.isBefore(k, c.value)
       ? ((d.value = s.endOfDay(c.value)), (c.value = k))
       : (d.value = s.endOfDay(k));
     const I = s.getDiff(d.value, c.value, 'days'),
      B = [c.value];
     for (let w = 1; w < I; w++) {
      const V = s.addDays(c.value, w);
      B.push(V);
     }
     B.push(d.value), (o.value = B);
    }
   }
   function g(S) {
    const k = o.value.findIndex((I) => s.isSameDay(I, S));
    if (k === -1) o.value = [...o.value, S];
    else {
     const I = [...o.value];
     I.splice(k, 1), (o.value = I);
    }
   }
   function h(S) {
    e.multiple === 'range' ? b(S) : e.multiple ? g(S) : (o.value = [S]);
   }
   return () =>
    u('div', { class: 'v-date-picker-month' }, [
     e.showWeek &&
      u('div', { key: 'weeks', class: 'v-date-picker-month__weeks' }, [
       !e.hideWeekdays &&
        u('div', { key: 'hide-week-days', class: 'v-date-picker-month__day' }, [Lt(' ')]),
       r.value.map((S) =>
        u('div', { class: ['v-date-picker-month__day', 'v-date-picker-month__day--adjacent'] }, [S])
       ),
      ]),
     u(
      Xe,
      { name: m.value },
      {
       default: () => {
        var S;
        return [
         u(
          'div',
          {
           ref: l,
           key: (S = i.value[0].date) == null ? void 0 : S.toString(),
           class: 'v-date-picker-month__days',
          },
          [
           !e.hideWeekdays &&
            s
             .getWeekdays(e.firstDayOfWeek)
             .map((k) =>
              u('div', { class: ['v-date-picker-month__day', 'v-date-picker-month__weekday'] }, [k])
             ),
           i.value.map((k, I) => {
            const B = { props: { onClick: () => h(k.date) }, item: k, i: I };
            return (
             v.value && !k.isSelected && (k.isDisabled = !0),
             u(
              'div',
              {
               class: [
                'v-date-picker-month__day',
                {
                 'v-date-picker-month__day--adjacent': k.isAdjacent,
                 'v-date-picker-month__day--hide-adjacent': k.isHidden,
                 'v-date-picker-month__day--selected': k.isSelected,
                 'v-date-picker-month__day--week-end': k.isWeekEnd,
                 'v-date-picker-month__day--week-start': k.isWeekStart,
                },
               ],
               'data-v-date': k.isDisabled ? void 0 : k.isoDate,
              },
              [
               (e.showAdjacentMonths || !k.isAdjacent) &&
                u(
                 fe,
                 {
                  defaults: {
                   VBtn: {
                    class: 'v-date-picker-month__day-btn',
                    color: (k.isSelected || k.isToday) && !k.isDisabled ? e.color : void 0,
                    disabled: k.isDisabled,
                    icon: !0,
                    ripple: !1,
                    text: k.localized,
                    variant: k.isDisabled
                     ? k.isToday
                       ? 'outlined'
                       : 'text'
                     : k.isToday && !k.isSelected
                       ? 'outlined'
                       : 'flat',
                    onClick: () => h(k.date),
                   },
                  },
                 },
                 {
                  default: () => {
                   var w;
                   return [((w = a.day) == null ? void 0 : w.call(a, B)) ?? u(ye, B.props, null)];
                  },
                 }
                ),
              ]
             )
            );
           }),
          ]
         ),
        ];
       },
      }
     ),
    ]);
  },
 }),
 Xs = D(
  { color: String, height: [String, Number], min: null, max: null, modelValue: Number, year: Number },
  'VDatePickerMonths'
 ),
 Xl = $()({
  name: 'VDatePickerMonths',
  props: Xs(),
  emits: { 'update:modelValue': (e) => !0 },
  setup(e, n) {
   let { emit: t, slots: a } = n;
   const l = sa(),
    i = le(e, 'modelValue'),
    o = y(() => {
     let r = l.startOfYear(l.date());
     return (
      e.year && (r = l.setYear(r, e.year)),
      xt(12).map((s) => {
       const c = l.format(r, 'monthShort'),
        d = !!(
         (e.min && l.isAfter(l.startOfMonth(l.date(e.min)), r)) ||
         (e.max && l.isAfter(r, l.startOfMonth(l.date(e.max))))
        );
       return (r = l.getNextMonth(r)), { isDisabled: d, text: c, value: s };
      })
     );
    });
   return (
    pe(() => {
     i.value = i.value ?? l.getMonth(l.date());
    }),
    R(() =>
     u('div', { class: 'v-date-picker-months', style: { height: Z(e.height) } }, [
      u('div', { class: 'v-date-picker-months__content' }, [
       o.value.map((r, s) => {
        var f;
        const c = {
         active: i.value === s,
         color: i.value === s ? e.color : void 0,
         disabled: r.isDisabled,
         rounded: !0,
         text: r.text,
         variant: i.value === r.value ? 'flat' : 'text',
         onClick: () => d(s),
        };
        function d(m) {
         if (i.value === m) {
          t('update:modelValue', i.value);
          return;
         }
         i.value = m;
        }
        return (
         ((f = a.month) == null ? void 0 : f.call(a, { month: r, i: s, props: c })) ??
         u(ye, z({ key: 'month' }, c), null)
        );
       }),
      ]),
     ])
    ),
    {}
   );
  },
 }),
 Zs = D(
  { color: String, height: [String, Number], min: null, max: null, modelValue: Number },
  'VDatePickerYears'
 ),
 Zl = $()({
  name: 'VDatePickerYears',
  props: Zs(),
  emits: { 'update:modelValue': (e) => !0 },
  setup(e, n) {
   let { emit: t, slots: a } = n;
   const l = sa(),
    i = le(e, 'modelValue'),
    o = y(() => {
     const s = l.getYear(l.date());
     let c = s - 100,
      d = s + 52;
     e.min && (c = l.getYear(l.date(e.min))), e.max && (d = l.getYear(l.date(e.max)));
     let f = l.startOfYear(l.date());
     return (
      (f = l.setYear(f, c)),
      xt(d - c + 1, c).map((m) => {
       const v = l.format(f, 'year');
       return (f = l.setYear(f, l.getYear(f) + 1)), { text: v, value: m };
      })
     );
    });
   pe(() => {
    i.value = i.value ?? l.getYear(l.date());
   });
   const r = wa();
   return (
    at(async () => {
     var s;
     await he(), (s = r.el) == null || s.scrollIntoView({ block: 'center' });
    }),
    R(() =>
     u('div', { class: 'v-date-picker-years', style: { height: Z(e.height) } }, [
      u('div', { class: 'v-date-picker-years__content' }, [
       o.value.map((s, c) => {
        var f;
        const d = {
         ref: i.value === s.value ? r : void 0,
         active: i.value === s.value,
         color: i.value === s.value ? e.color : void 0,
         rounded: !0,
         text: s.text,
         variant: i.value === s.value ? 'flat' : 'text',
         onClick: () => {
          if (i.value === s.value) {
           t('update:modelValue', i.value);
           return;
          }
          i.value = s.value;
         },
        };
        return (
         ((f = a.year) == null ? void 0 : f.call(a, { year: s, i: c, props: d })) ??
         u(ye, z({ key: 'month' }, d), null)
        );
       }),
      ]),
     ])
    ),
    {}
   );
  },
 }),
 fy = Pt('v-picker-title'),
 Js = D({ bgColor: String, landscape: Boolean, title: String, hideHeader: Boolean, ...Za() }, 'VPicker'),
 Xo = $()({
  name: 'VPicker',
  props: Js(),
  setup(e, n) {
   let { slots: t } = n;
   const { backgroundColorClasses: a, backgroundColorStyles: l } = we(M(e, 'color'));
   return (
    R(() => {
     const i = tn.filterProps(e),
      o = !!(e.title || t.title);
     return u(
      tn,
      z(i, {
       color: e.bgColor,
       class: [
        'v-picker',
        { 'v-picker--landscape': e.landscape, 'v-picker--with-actions': !!t.actions },
        e.class,
       ],
       style: e.style,
      }),
      {
       default: () => {
        var r;
        return [
         !e.hideHeader &&
          u('div', { key: 'header', class: [a.value], style: [l.value] }, [
           o &&
            u(
             fy,
             { key: 'picker-title' },
             {
              default: () => {
               var s;
               return [((s = t.title) == null ? void 0 : s.call(t)) ?? e.title];
              },
             }
            ),
           t.header && u('div', { class: 'v-picker__header' }, [t.header()]),
          ]),
         u('div', { class: 'v-picker__body' }, [(r = t.default) == null ? void 0 : r.call(t)]),
         t.actions &&
          u(
           fe,
           { defaults: { VBtn: { slim: !0, variant: 'text' } } },
           { default: () => [u('div', { class: 'v-picker__actions' }, [t.actions()])] }
          ),
        ];
       },
      }
     );
    }),
    {}
   );
  },
 }),
 my = D(
  {
   header: { type: String, default: '$vuetify.datePicker.header' },
   ...Ks(),
   ...qs({ weeksInMonth: 'static' }),
   ...Ee(Xs(), ['modelValue']),
   ...Ee(Zs(), ['modelValue']),
   ...Js({ title: '$vuetify.datePicker.title' }),
   modelValue: null,
  },
  'VDatePicker'
 ),
 gy = $()({
  name: 'VDatePicker',
  props: my(),
  emits: {
   'update:modelValue': (e) => !0,
   'update:month': (e) => !0,
   'update:year': (e) => !0,
   'update:viewMode': (e) => !0,
  },
  setup(e, n) {
   let { emit: t, slots: a } = n;
   const l = sa(),
    { t: i } = $e(),
    o = le(
     e,
     'modelValue',
     void 0,
     (x) => Te(x),
     (x) => (e.multiple ? x : x[0])
    ),
    r = le(e, 'viewMode'),
    s = y(() => {
     var _;
     const x = l.date((_ = o.value) == null ? void 0 : _[0]);
     return x && l.isValid(x) ? x : l.date();
    }),
    c = j(Number(e.month ?? l.getMonth(l.startOfMonth(s.value)))),
    d = j(Number(e.year ?? l.getYear(l.startOfYear(l.setMonth(s.value, c.value))))),
    f = K(!1),
    m = y(() =>
     e.multiple && o.value.length > 1
      ? i('$vuetify.datePicker.itemsSelected', o.value.length)
      : o.value[0] && l.isValid(o.value[0])
        ? l.format(l.date(o.value[0]), 'normalDateWithWeekday')
        : i(e.header)
    ),
    v = y(() => {
     let x = l.date();
     return (
      (x = l.setDate(x, 1)),
      (x = l.setMonth(x, c.value)),
      (x = l.setYear(x, d.value)),
      l.format(x, 'monthAndYear')
     );
    }),
    b = y(() => `date-picker-header${f.value ? '-reverse' : ''}-transition`),
    g = y(() => {
     const x = l.date(e.min);
     return e.min && l.isValid(x) ? x : null;
    }),
    h = y(() => {
     const x = l.date(e.max);
     return e.max && l.isValid(x) ? x : null;
    }),
    S = y(() => {
     if (e.disabled) return !0;
     const x = [];
     if (r.value !== 'month') x.push('prev', 'next');
     else {
      let _ = l.date();
      if (((_ = l.setYear(_, d.value)), (_ = l.setMonth(_, c.value)), g.value)) {
       const T = l.addDays(l.startOfMonth(_), -1);
       l.isAfter(g.value, T) && x.push('prev');
      }
      if (h.value) {
       const T = l.addDays(l.endOfMonth(_), 1);
       l.isAfter(T, h.value) && x.push('next');
      }
     }
     return x;
    });
   function k() {
    c.value < 11 ? c.value++ : (d.value++, (c.value = 0), P(d.value)), C(c.value);
   }
   function I() {
    c.value > 0 ? c.value-- : (d.value--, (c.value = 11), P(d.value)), C(c.value);
   }
   function B() {
    r.value = 'month';
   }
   function w() {
    r.value = r.value === 'months' ? 'month' : 'months';
   }
   function V() {
    r.value = r.value === 'year' ? 'month' : 'year';
   }
   function C(x) {
    r.value === 'months' && w(), t('update:month', x);
   }
   function P(x) {
    r.value === 'year' && V(), t('update:year', x);
   }
   return (
    X(o, (x, _) => {
     const T = Te(_),
      A = Te(x);
     if (!A.length) return;
     const p = l.date(T[T.length - 1]),
      F = l.date(A[A.length - 1]),
      O = l.getMonth(F),
      W = l.getYear(F);
     O !== c.value && ((c.value = O), C(c.value)),
      W !== d.value && ((d.value = W), P(d.value)),
      (f.value = l.isBefore(p, F));
    }),
    R(() => {
     const x = Xo.filterProps(e),
      _ = Ul.filterProps(e),
      T = Kl.filterProps(e),
      A = ql.filterProps(e),
      p = Ee(Xl.filterProps(e), ['modelValue']),
      F = Ee(Zl.filterProps(e), ['modelValue']),
      O = { header: m.value, transition: b.value };
     return u(
      Xo,
      z(x, {
       class: [
        'v-date-picker',
        `v-date-picker--${r.value}`,
        { 'v-date-picker--show-week': e.showWeek },
        e.class,
       ],
       style: e.style,
      }),
      {
       title: () => {
        var W;
        return (
         ((W = a.title) == null ? void 0 : W.call(a)) ??
         u('div', { class: 'v-date-picker__title' }, [i(e.title)])
        );
       },
       header: () =>
        a.header
         ? u(
            fe,
            { defaults: { VDatePickerHeader: { ...O } } },
            {
             default: () => {
              var W;
              return [(W = a.header) == null ? void 0 : W.call(a, O)];
             },
            }
           )
         : u(Kl, z({ key: 'header' }, T, O, { onClick: r.value !== 'month' ? B : void 0 }), {
            ...a,
            default: void 0,
           }),
       default: () =>
        u(ie, null, [
         u(
          Ul,
          z(_, {
           disabled: S.value,
           text: v.value,
           'onClick:next': k,
           'onClick:prev': I,
           'onClick:month': w,
           'onClick:year': V,
          }),
          null
         ),
         u(
          jn,
          { hideOnLeave: !0 },
          {
           default: () => [
            r.value === 'months'
             ? u(
                Xl,
                z({ key: 'date-picker-months' }, p, {
                 modelValue: c.value,
                 'onUpdate:modelValue': [(W) => (c.value = W), C],
                 min: g.value,
                 max: h.value,
                 year: d.value,
                }),
                null
               )
             : r.value === 'year'
               ? u(
                  Zl,
                  z({ key: 'date-picker-years' }, F, {
                   modelValue: d.value,
                   'onUpdate:modelValue': [(W) => (d.value = W), P],
                   min: g.value,
                   max: h.value,
                  }),
                  null
                 )
               : u(
                  ql,
                  z({ key: 'date-picker-month' }, A, {
                   modelValue: o.value,
                   'onUpdate:modelValue': (W) => (o.value = W),
                   month: c.value,
                   'onUpdate:month': [(W) => (c.value = W), C],
                   year: d.value,
                   'onUpdate:year': [(W) => (d.value = W), P],
                   min: g.value,
                   max: h.value,
                  }),
                  null
                 ),
           ],
          }
         ),
        ]),
       actions: a.actions,
      }
     );
    }),
    {}
   );
  },
 }),
 hy = D(
  {
   actionText: String,
   bgColor: String,
   color: String,
   icon: ue,
   image: String,
   justify: { type: String, default: 'center' },
   headline: String,
   title: String,
   text: String,
   textWidth: { type: [Number, String], default: 500 },
   href: String,
   to: String,
   ...J(),
   ...Ne(),
   ...It({ size: void 0 }),
   ...me(),
  },
  'VEmptyState'
 ),
 yy = $()({
  name: 'VEmptyState',
  props: hy(),
  emits: { 'click:action': (e) => !0 },
  setup(e, n) {
   let { emit: t, slots: a } = n;
   const { themeClasses: l } = Se(e),
    { backgroundColorClasses: i, backgroundColorStyles: o } = we(M(e, 'bgColor')),
    { dimensionStyles: r } = ze(e),
    { displayClasses: s } = gt();
   function c(d) {
    t('click:action', d);
   }
   return (
    R(() => {
     var h, S, k;
     const d = !!(a.actions || e.actionText),
      f = !!(a.headline || e.headline),
      m = !!(a.title || e.title),
      v = !!(a.text || e.text),
      b = !!(a.media || e.image || e.icon),
      g = e.size || (e.image ? 200 : 96);
     return u(
      'div',
      {
       class: [
        'v-empty-state',
        { [`v-empty-state--${e.justify}`]: !0 },
        l.value,
        i.value,
        s.value,
        e.class,
       ],
       style: [o.value, r.value, e.style],
      },
      [
       b &&
        u('div', { key: 'media', class: 'v-empty-state__media' }, [
         a.media
          ? u(
             fe,
             {
              key: 'media-defaults',
              defaults: { VImg: { src: e.image, height: g }, VIcon: { size: g, icon: e.icon } },
             },
             { default: () => [a.media()] }
            )
          : u(ie, null, [
             e.image
              ? u(Tt, { key: 'image', src: e.image, height: g }, null)
              : e.icon
                ? u(be, { key: 'icon', color: e.color, size: g, icon: e.icon }, null)
                : void 0,
            ]),
        ]),
       f &&
        u('div', { key: 'headline', class: 'v-empty-state__headline' }, [
         ((h = a.headline) == null ? void 0 : h.call(a)) ?? e.headline,
        ]),
       m &&
        u('div', { key: 'title', class: 'v-empty-state__title' }, [
         ((S = a.title) == null ? void 0 : S.call(a)) ?? e.title,
        ]),
       v &&
        u('div', { key: 'text', class: 'v-empty-state__text', style: { maxWidth: Z(e.textWidth) } }, [
         ((k = a.text) == null ? void 0 : k.call(a)) ?? e.text,
        ]),
       a.default && u('div', { key: 'content', class: 'v-empty-state__content' }, [a.default()]),
       d &&
        u('div', { key: 'actions', class: 'v-empty-state__actions' }, [
         u(
          fe,
          {
           defaults: {
            VBtn: {
             class: 'v-empty-state__action-btn',
             color: e.color ?? 'surface-variant',
             text: e.actionText,
            },
           },
          },
          {
           default: () => {
            var I;
            return [
             ((I = a.actions) == null ? void 0 : I.call(a, { props: { onClick: c } })) ??
              u(ye, { onClick: c }, null),
            ];
           },
          }
         ),
        ]),
      ]
     );
    }),
    {}
   );
  },
 }),
 Zn = Symbol.for('vuetify:v-expansion-panel'),
 Qs = D({ ...J(), ...Ai() }, 'VExpansionPanelText'),
 Jl = $()({
  name: 'VExpansionPanelText',
  props: Qs(),
  setup(e, n) {
   let { slots: t } = n;
   const a = ge(Zn);
   if (!a)
    throw new Error('[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel');
   const { hasContent: l, onAfterLeave: i } = Bi(e, a.isSelected);
   return (
    R(() =>
     u(
      Fa,
      { onAfterLeave: i },
      {
       default: () => {
        var o;
        return [
         Ae(
          u('div', { class: ['v-expansion-panel-text', e.class], style: e.style }, [
           t.default &&
            l.value &&
            u('div', { class: 'v-expansion-panel-text__wrapper' }, [
             (o = t.default) == null ? void 0 : o.call(t),
            ]),
          ]),
          [[bt, a.isSelected.value]]
         ),
        ];
       },
      }
     )
    ),
    {}
   );
  },
 }),
 ec = D(
  {
   color: String,
   expandIcon: { type: ue, default: '$expand' },
   collapseIcon: { type: ue, default: '$collapse' },
   hideActions: Boolean,
   focusable: Boolean,
   static: Boolean,
   ripple: { type: [Boolean, Object], default: !1 },
   readonly: Boolean,
   ...J(),
  },
  'VExpansionPanelTitle'
 ),
 Ql = $()({
  name: 'VExpansionPanelTitle',
  directives: { Ripple: pt },
  props: ec(),
  setup(e, n) {
   let { slots: t } = n;
   const a = ge(Zn);
   if (!a)
    throw new Error('[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel');
   const { backgroundColorClasses: l, backgroundColorStyles: i } = we(e, 'color'),
    o = y(() => ({
     collapseIcon: e.collapseIcon,
     disabled: a.disabled.value,
     expanded: a.isSelected.value,
     expandIcon: e.expandIcon,
     readonly: e.readonly,
    })),
    r = y(() => (a.isSelected.value ? e.collapseIcon : e.expandIcon));
   return (
    R(() => {
     var s;
     return Ae(
      u(
       'button',
       {
        class: [
         'v-expansion-panel-title',
         {
          'v-expansion-panel-title--active': a.isSelected.value,
          'v-expansion-panel-title--focusable': e.focusable,
          'v-expansion-panel-title--static': e.static,
         },
         l.value,
         e.class,
        ],
        style: [i.value, e.style],
        type: 'button',
        tabindex: a.disabled.value ? -1 : void 0,
        disabled: a.disabled.value,
        'aria-expanded': a.isSelected.value,
        onClick: e.readonly ? void 0 : a.toggle,
       },
       [
        u('span', { class: 'v-expansion-panel-title__overlay' }, null),
        (s = t.default) == null ? void 0 : s.call(t, o.value),
        !e.hideActions &&
         u(
          fe,
          { defaults: { VIcon: { icon: r.value } } },
          {
           default: () => {
            var c;
            return [
             u('span', { class: 'v-expansion-panel-title__icon' }, [
              ((c = t.actions) == null ? void 0 : c.call(t, o.value)) ?? u(be, null, null),
             ]),
            ];
           },
          }
         ),
       ]
      ),
      [[ot('ripple'), e.ripple]]
     );
    }),
    {}
   );
  },
 }),
 tc = D(
  { title: String, text: String, bgColor: String, ...Oe(), ...dn(), ..._e(), ...de(), ...ec(), ...Qs() },
  'VExpansionPanel'
 ),
 by = $()({
  name: 'VExpansionPanel',
  props: tc(),
  emits: { 'group:selected': (e) => !0 },
  setup(e, n) {
   let { slots: t } = n;
   const a = vn(e, Zn),
    { backgroundColorClasses: l, backgroundColorStyles: i } = we(e, 'bgColor'),
    { elevationClasses: o } = Ye(e),
    { roundedClasses: r } = De(e),
    s = y(() => (a == null ? void 0 : a.disabled.value) || e.disabled),
    c = y(() =>
     a.group.items.value.reduce((m, v, b) => (a.group.selected.value.includes(v.id) && m.push(b), m), [])
    ),
    d = y(() => {
     const m = a.group.items.value.findIndex((v) => v.id === a.id);
     return !a.isSelected.value && c.value.some((v) => v - m === 1);
    }),
    f = y(() => {
     const m = a.group.items.value.findIndex((v) => v.id === a.id);
     return !a.isSelected.value && c.value.some((v) => v - m === -1);
    });
   return (
    Ie(Zn, a),
    R(() => {
     const m = !!(t.text || e.text),
      v = !!(t.title || e.title),
      b = Ql.filterProps(e),
      g = Jl.filterProps(e);
     return u(
      e.tag,
      {
       class: [
        'v-expansion-panel',
        {
         'v-expansion-panel--active': a.isSelected.value,
         'v-expansion-panel--before-active': d.value,
         'v-expansion-panel--after-active': f.value,
         'v-expansion-panel--disabled': s.value,
        },
        r.value,
        l.value,
        e.class,
       ],
       style: [i.value, e.style],
      },
      {
       default: () => [
        u('div', { class: ['v-expansion-panel__shadow', ...o.value] }, null),
        u(
         fe,
         { defaults: { VExpansionPanelTitle: { ...b }, VExpansionPanelText: { ...g } } },
         {
          default: () => {
           var h;
           return [
            v && u(Ql, { key: 'title' }, { default: () => [t.title ? t.title() : e.title] }),
            m && u(Jl, { key: 'text' }, { default: () => [t.text ? t.text() : e.text] }),
            (h = t.default) == null ? void 0 : h.call(t),
           ];
          },
         }
        ),
       ],
      }
     );
    }),
    { groupItem: a }
   );
  },
 }),
 Sy = ['default', 'accordion', 'inset', 'popout'],
 ky = D(
  {
   flat: Boolean,
   ...cn(),
   ...li(tc(), [
    'bgColor',
    'collapseIcon',
    'color',
    'eager',
    'elevation',
    'expandIcon',
    'focusable',
    'hideActions',
    'readonly',
    'ripple',
    'rounded',
    'tile',
    'static',
   ]),
   ...me(),
   ...J(),
   ...de(),
   variant: { type: String, default: 'default', validator: (e) => Sy.includes(e) },
  },
  'VExpansionPanels'
 ),
 xy = $()({
  name: 'VExpansionPanels',
  props: ky(),
  emits: { 'update:modelValue': (e) => !0 },
  setup(e, n) {
   let { slots: t } = n;
   const { next: a, prev: l } = Ht(e, Zn),
    { themeClasses: i } = Se(e),
    o = y(() => e.variant && `v-expansion-panels--variant-${e.variant}`);
   return (
    Be({
     VExpansionPanel: {
      bgColor: M(e, 'bgColor'),
      collapseIcon: M(e, 'collapseIcon'),
      color: M(e, 'color'),
      eager: M(e, 'eager'),
      elevation: M(e, 'elevation'),
      expandIcon: M(e, 'expandIcon'),
      focusable: M(e, 'focusable'),
      hideActions: M(e, 'hideActions'),
      readonly: M(e, 'readonly'),
      ripple: M(e, 'ripple'),
      rounded: M(e, 'rounded'),
      static: M(e, 'static'),
     },
    }),
    R(() =>
     u(
      e.tag,
      {
       class: [
        'v-expansion-panels',
        { 'v-expansion-panels--flat': e.flat, 'v-expansion-panels--tile': e.tile },
        i.value,
        o.value,
        e.class,
       ],
       style: e.style,
      },
      {
       default: () => {
        var r;
        return [(r = t.default) == null ? void 0 : r.call(t, { prev: l, next: a })];
       },
      }
     )
    ),
    { next: a, prev: l }
   );
  },
 }),
 wy = D(
  {
   app: Boolean,
   appear: Boolean,
   extended: Boolean,
   layout: Boolean,
   offset: Boolean,
   modelValue: { type: Boolean, default: !0 },
   ...Ee(za({ active: !0 }), ['location']),
   ...on(),
   ...Dt(),
   ...St({ transition: 'fab-transition' }),
  },
  'VFab'
 ),
 Cy = $()({
  name: 'VFab',
  props: wy(),
  emits: { 'update:modelValue': (e) => !0 },
  setup(e, n) {
   let { slots: t } = n;
   const a = le(e, 'modelValue'),
    l = K(56),
    i = j(),
    { resizeRef: o } = yt((f) => {
     f.length && (l.value = f[0].target.clientHeight);
    }),
    r = y(() => e.app || e.absolute),
    s = y(() => {
     var f;
     return r.value ? ((f = e.location) == null ? void 0 : f.split(' ').shift()) ?? 'bottom' : !1;
    }),
    c = y(() => {
     var f;
     return r.value ? ((f = e.location) == null ? void 0 : f.split(' ')[1]) ?? 'end' : !1;
    });
   lt(
    () => e.app,
    () => {
     const f = rn({
      id: e.name,
      order: y(() => parseInt(e.order, 10)),
      position: s,
      layoutSize: y(() => (e.layout ? l.value + 24 : 0)),
      elementSize: y(() => l.value + 24),
      active: y(() => e.app && a.value),
      absolute: M(e, 'absolute'),
     });
     pe(() => {
      i.value = f.layoutItemStyles.value;
     });
    }
   );
   const d = j();
   return (
    R(() => {
     const f = ye.filterProps(e);
     return u(
      'div',
      {
       ref: d,
       class: [
        'v-fab',
        {
         'v-fab--absolute': e.absolute,
         'v-fab--app': !!e.app,
         'v-fab--extended': e.extended,
         'v-fab--offset': e.offset,
         [`v-fab--${s.value}`]: r.value,
         [`v-fab--${c.value}`]: r.value,
        },
        e.class,
       ],
       style: [e.app ? { ...i.value } : { height: 'inherit', width: void 0 }, e.style],
      },
      [
       u('div', { class: 'v-fab__container' }, [
        u(
         Xe,
         { appear: e.appear, transition: e.transition },
         {
          default: () => [
           Ae(u(ye, z({ ref: o }, f, { active: void 0, location: void 0 }), t), [[bt, e.active]]),
          ],
         }
        ),
       ]),
      ]
     );
    }),
    {}
   );
  },
 }),
 Vy = D(
  {
   chips: Boolean,
   counter: Boolean,
   counterSizeString: { type: String, default: '$vuetify.fileInput.counterSize' },
   counterString: { type: String, default: '$vuetify.fileInput.counter' },
   hideInput: Boolean,
   multiple: Boolean,
   showSize: {
    type: [Boolean, Number, String],
    default: !1,
    validator: (e) => typeof e == 'boolean' || [1e3, 1024].includes(Number(e)),
   },
   ...Mt({ prependIcon: '$file' }),
   modelValue: {
    type: [Array, Object],
    default: (e) => (e.multiple ? [] : null),
    validator: (e) => Te(e).every((n) => n != null && typeof n == 'object'),
   },
   ...oa({ clearable: !0 }),
  },
  'VFileInput'
 ),
 Py = $()({
  name: 'VFileInput',
  inheritAttrs: !1,
  props: Vy(),
  emits: {
   'click:control': (e) => !0,
   'mousedown:control': (e) => !0,
   'update:focused': (e) => !0,
   'update:modelValue': (e) => !0,
  },
  setup(e, n) {
   let { attrs: t, emit: a, slots: l } = n;
   const { t: i } = $e(),
    o = le(
     e,
     'modelValue',
     e.modelValue,
     (x) => Te(x),
     (x) => (e.multiple || Array.isArray(e.modelValue) ? x : x[0] ?? null)
    ),
    { isFocused: r, focus: s, blur: c } = Et(e),
    d = y(() => (typeof e.showSize != 'boolean' ? e.showSize : void 0)),
    f = y(() =>
     (o.value ?? []).reduce((x, _) => {
      let { size: T = 0 } = _;
      return x + T;
     }, 0)
    ),
    m = y(() => oo(f.value, d.value)),
    v = y(() =>
     (o.value ?? []).map((x) => {
      const { name: _ = '', size: T = 0 } = x;
      return e.showSize ? `${_} (${oo(T, d.value)})` : _;
     })
    ),
    b = y(() => {
     var _;
     const x = ((_ = o.value) == null ? void 0 : _.length) ?? 0;
     return e.showSize ? i(e.counterSizeString, x, m.value) : i(e.counterString, x);
    }),
    g = j(),
    h = j(),
    S = j(),
    k = y(() => r.value || e.active),
    I = y(() => ['plain', 'underlined'].includes(e.variant));
   function B() {
    var x;
    S.value !== document.activeElement && ((x = S.value) == null || x.focus()), r.value || s();
   }
   function w(x) {
    var _;
    (_ = S.value) == null || _.click();
   }
   function V(x) {
    a('mousedown:control', x);
   }
   function C(x) {
    var _;
    (_ = S.value) == null || _.click(), a('click:control', x);
   }
   function P(x) {
    x.stopPropagation(),
     B(),
     he(() => {
      (o.value = []), oi(e['onClick:clear'], x);
     });
   }
   return (
    X(o, (x) => {
     (!Array.isArray(x) || !x.length) && S.value && (S.value.value = '');
    }),
    R(() => {
     const x = !!(l.counter || e.counter),
      _ = !!(x || l.details),
      [T, A] = Nt(t),
      { modelValue: p, ...F } = Ue.filterProps(e),
      O = Di(e);
     return u(
      Ue,
      z(
       {
        ref: g,
        modelValue: o.value,
        'onUpdate:modelValue': (W) => (o.value = W),
        class: [
         'v-file-input',
         {
          'v-file-input--chips': !!e.chips,
          'v-file-input--hide': e.hideInput,
          'v-input--plain-underlined': I.value,
         },
         e.class,
        ],
        style: e.style,
        'onClick:prepend': w,
       },
       T,
       F,
       { centerAffix: !I.value, focused: r.value }
      ),
      {
       ...l,
       default: (W) => {
        let { id: te, isDisabled: N, isDirty: H, isReadonly: E, isValid: L } = W;
        return u(
         $n,
         z(
          {
           ref: h,
           'prepend-icon': e.prependIcon,
           onMousedown: V,
           onClick: C,
           'onClick:clear': P,
           'onClick:prependInner': e['onClick:prependInner'],
           'onClick:appendInner': e['onClick:appendInner'],
          },
          O,
          {
           id: te.value,
           active: k.value || H.value,
           dirty: H.value || e.dirty,
           disabled: N.value,
           focused: r.value,
           error: L.value === !1,
          }
         ),
         {
          ...l,
          default: (G) => {
           var q;
           let {
            props: { class: ae, ...oe },
           } = G;
           return u(ie, null, [
            u(
             'input',
             z(
              {
               ref: S,
               type: 'file',
               readonly: E.value,
               disabled: N.value,
               multiple: e.multiple,
               name: e.name,
               onClick: (Y) => {
                Y.stopPropagation(), E.value && Y.preventDefault(), B();
               },
               onChange: (Y) => {
                if (!Y.target) return;
                const Q = Y.target;
                o.value = [...(Q.files ?? [])];
               },
               onFocus: B,
               onBlur: c,
              },
              oe,
              A
             ),
             null
            ),
            u('div', { class: ae }, [
             !!((q = o.value) != null && q.length) &&
              !e.hideInput &&
              (l.selection
               ? l.selection({ fileNames: v.value, totalBytes: f.value, totalBytesReadable: m.value })
               : e.chips
                 ? v.value.map((Y) => u(Mn, { key: Y, size: 'small', text: Y }, null))
                 : v.value.join(', ')),
            ]),
           ]);
          },
         }
        );
       },
       details: _
        ? (W) => {
           var te, N;
           return u(ie, null, [
            (te = l.details) == null ? void 0 : te.call(l, W),
            x &&
             u(ie, null, [
              u('span', null, null),
              u(
               Ga,
               { active: !!((N = o.value) != null && N.length), value: b.value, disabled: e.disabled },
               l.counter
              ),
             ]),
           ]);
          }
        : void 0,
      }
     );
    }),
    ht({}, g, h, S)
   );
  },
 }),
 Iy = D(
  {
   app: Boolean,
   color: String,
   height: { type: [Number, String], default: 'auto' },
   ...st(),
   ...J(),
   ...Oe(),
   ...on(),
   ..._e(),
   ...de({ tag: 'footer' }),
   ...me(),
  },
  'VFooter'
 ),
 _y = $()({
  name: 'VFooter',
  props: Iy(),
  setup(e, n) {
   let { slots: t } = n;
   const { themeClasses: a } = Se(e),
    { backgroundColorClasses: l, backgroundColorStyles: i } = we(M(e, 'color')),
    { borderClasses: o } = ft(e),
    { elevationClasses: r } = Ye(e),
    { roundedClasses: s } = De(e),
    c = K(32),
    { resizeRef: d } = yt((b) => {
     b.length && (c.value = b[0].target.clientHeight);
    }),
    f = y(() => (e.height === 'auto' ? c.value : parseInt(e.height, 10))),
    { layoutItemStyles: m, layoutIsReady: v } = rn({
     id: e.name,
     order: y(() => parseInt(e.order, 10)),
     position: y(() => 'bottom'),
     layoutSize: f,
     elementSize: y(() => (e.height === 'auto' ? void 0 : f.value)),
     active: y(() => e.app),
     absolute: M(e, 'absolute'),
    });
   return (
    R(() =>
     u(
      e.tag,
      {
       ref: d,
       class: ['v-footer', a.value, l.value, o.value, r.value, s.value, e.class],
       style: [i.value, e.app ? m.value : { height: Z(e.height) }, e.style],
      },
      t
     )
    ),
    e.app ? v : {}
   );
  },
 }),
 Ty = D({ ...J(), ...Hv() }, 'VForm'),
 Ay = $()({
  name: 'VForm',
  props: Ty(),
  emits: { 'update:modelValue': (e) => !0, submit: (e) => !0 },
  setup(e, n) {
   let { slots: t, emit: a } = n;
   const l = Wv(e),
    i = j();
   function o(s) {
    s.preventDefault(), l.reset();
   }
   function r(s) {
    const c = s,
     d = l.validate();
    (c.then = d.then.bind(d)),
     (c.catch = d.catch.bind(d)),
     (c.finally = d.finally.bind(d)),
     a('submit', c),
     c.defaultPrevented ||
      d.then((f) => {
       var v;
       let { valid: m } = f;
       m && ((v = i.value) == null || v.submit());
      }),
     c.preventDefault();
   }
   return (
    R(() => {
     var s;
     return u(
      'form',
      { ref: i, class: ['v-form', e.class], style: e.style, novalidate: !0, onReset: o, onSubmit: r },
      [(s = t.default) == null ? void 0 : s.call(t, l)]
     );
    }),
    ht(l, i)
   );
  },
 }),
 By = D({ disabled: Boolean, modelValue: { type: Boolean, default: null }, ..._i() }, 'VHover'),
 Dy = $()({
  name: 'VHover',
  props: By(),
  emits: { 'update:modelValue': (e) => !0 },
  setup(e, n) {
   let { slots: t } = n;
   const a = le(e, 'modelValue'),
    { runOpenDelay: l, runCloseDelay: i } = Ti(e, (o) => !e.disabled && (a.value = o));
   return () => {
    var o;
    return (o = t.default) == null
     ? void 0
     : o.call(t, { isHovering: a.value, props: { onMouseenter: l, onMouseleave: i } });
   };
  },
 }),
 py = D(
  {
   color: String,
   direction: {
    type: String,
    default: 'vertical',
    validator: (e) => ['vertical', 'horizontal'].includes(e),
   },
   side: { type: String, default: 'end', validator: (e) => ['start', 'end', 'both'].includes(e) },
   mode: { type: String, default: 'intersect', validator: (e) => ['intersect', 'manual'].includes(e) },
   margin: [Number, String],
   loadMoreText: { type: String, default: '$vuetify.infiniteScroll.loadMore' },
   emptyText: { type: String, default: '$vuetify.infiniteScroll.empty' },
   ...Ne(),
   ...de(),
  },
  'VInfiniteScroll'
 ),
 Zo = rt({
  name: 'VInfiniteScrollIntersect',
  props: { side: { type: String, required: !0 }, rootRef: null, rootMargin: String },
  emits: { intersect: (e, n) => !0 },
  setup(e, n) {
   let { emit: t } = n;
   const { intersectionRef: a, isIntersecting: l } = Oa(
    (i) => {},
    e.rootMargin ? { rootMargin: e.rootMargin } : void 0
   );
   return (
    X(l, async (i) => {
     t('intersect', e.side, i);
    }),
    R(() => u('div', { class: 'v-infinite-scroll-intersect', ref: a }, [Lt(' ')])),
    {}
   );
  },
 }),
 Ey = $()({
  name: 'VInfiniteScroll',
  props: py(),
  emits: { load: (e) => !0 },
  setup(e, n) {
   let { slots: t, emit: a } = n;
   const l = j(),
    i = K('ok'),
    o = K('ok'),
    r = y(() => Z(e.margin)),
    s = K(!1);
   function c(w) {
    if (!l.value) return;
    const V = e.direction === 'vertical' ? 'scrollTop' : 'scrollLeft';
    l.value[V] = w;
   }
   function d() {
    if (!l.value) return 0;
    const w = e.direction === 'vertical' ? 'scrollTop' : 'scrollLeft';
    return l.value[w];
   }
   function f() {
    if (!l.value) return 0;
    const w = e.direction === 'vertical' ? 'scrollHeight' : 'scrollWidth';
    return l.value[w];
   }
   function m() {
    if (!l.value) return 0;
    const w = e.direction === 'vertical' ? 'clientHeight' : 'clientWidth';
    return l.value[w];
   }
   at(() => {
    l.value && (e.side === 'start' ? c(f()) : e.side === 'both' && c(f() / 2 - m() / 2));
   });
   function v(w, V) {
    w === 'start' ? (i.value = V) : w === 'end' && (o.value = V);
   }
   function b(w) {
    return w === 'start' ? i.value : o.value;
   }
   let g = 0;
   function h(w, V) {
    (s.value = V), s.value && S(w);
   }
   function S(w) {
    if (e.mode !== 'manual' && !s.value) return;
    const V = b(w);
    if (!l.value || ['empty', 'loading'].includes(V)) return;
    (g = f()), v(w, 'loading');
    function C(P) {
     v(w, P),
      he(() => {
       P === 'empty' ||
        P === 'error' ||
        (P === 'ok' && w === 'start' && c(f() - g + d()),
        e.mode !== 'manual' &&
         he(() => {
          window.requestAnimationFrame(() => {
           window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
             S(w);
            });
           });
          });
         }));
      });
    }
    a('load', { side: w, done: C });
   }
   const { t: k } = $e();
   function I(w, V) {
    var x, _, T, A, p;
    if (e.side !== w && e.side !== 'both') return;
    const C = () => S(w),
     P = { side: w, props: { onClick: C, color: e.color } };
    return V === 'error'
     ? (x = t.error) == null
       ? void 0
       : x.call(t, P)
     : V === 'empty'
       ? ((_ = t.empty) == null ? void 0 : _.call(t, P)) ?? u('div', null, [k(e.emptyText)])
       : e.mode === 'manual'
         ? V === 'loading'
           ? ((T = t.loading) == null ? void 0 : T.call(t, P)) ??
             u(_n, { indeterminate: !0, color: e.color }, null)
           : ((A = t['load-more']) == null ? void 0 : A.call(t, P)) ??
             u(
              ye,
              { variant: 'outlined', color: e.color, onClick: C },
              { default: () => [k(e.loadMoreText)] }
             )
         : ((p = t.loading) == null ? void 0 : p.call(t, P)) ??
           u(_n, { indeterminate: !0, color: e.color }, null);
   }
   const { dimensionStyles: B } = ze(e);
   R(() => {
    const w = e.tag,
     V = e.side === 'start' || e.side === 'both',
     C = e.side === 'end' || e.side === 'both',
     P = e.mode === 'intersect';
    return u(
     w,
     {
      ref: l,
      class: [
       'v-infinite-scroll',
       `v-infinite-scroll--${e.direction}`,
       { 'v-infinite-scroll--start': V, 'v-infinite-scroll--end': C },
      ],
      style: B.value,
     },
     {
      default: () => {
       var x;
       return [
        u('div', { class: 'v-infinite-scroll__side' }, [I('start', i.value)]),
        l.value &&
         V &&
         P &&
         u(
          Zo,
          { key: 'start', side: 'start', onIntersect: h, rootRef: l.value, rootMargin: r.value },
          null
         ),
        (x = t.default) == null ? void 0 : x.call(t),
        l.value &&
         C &&
         P &&
         u(Zo, { key: 'end', side: 'end', onIntersect: h, rootRef: l.value, rootMargin: r.value }, null),
        u('div', { class: 'v-infinite-scroll__side' }, [I('end', o.value)]),
       ];
      },
     }
    );
   });
  },
 }),
 nc = Symbol.for('vuetify:v-item-group'),
 My = D({ ...J(), ...cn({ selectedClass: 'v-item--selected' }), ...de(), ...me() }, 'VItemGroup'),
 $y = $()({
  name: 'VItemGroup',
  props: My(),
  emits: { 'update:modelValue': (e) => !0 },
  setup(e, n) {
   let { slots: t } = n;
   const { themeClasses: a } = Se(e),
    { isSelected: l, select: i, next: o, prev: r, selected: s } = Ht(e, nc);
   return () =>
    u(
     e.tag,
     { class: ['v-item-group', a.value, e.class], style: e.style },
     {
      default: () => {
       var c;
       return [
        (c = t.default) == null
         ? void 0
         : c.call(t, { isSelected: l, select: i, next: o, prev: r, selected: s.value }),
       ];
      },
     }
    );
  },
 }),
 Fy = $()({
  name: 'VItem',
  props: dn(),
  emits: { 'group:selected': (e) => !0 },
  setup(e, n) {
   let { slots: t } = n;
   const { isSelected: a, select: l, toggle: i, selectedClass: o, value: r, disabled: s } = vn(e, nc);
   return () => {
    var c;
    return (c = t.default) == null
     ? void 0
     : c.call(t, {
        isSelected: a.value,
        selectedClass: o.value,
        select: l,
        toggle: i,
        value: r.value,
        disabled: s.value,
       });
   };
  },
 }),
 Ly = Pt('v-kbd'),
 Oy = D({ ...J(), ...Ne(), ...$r() }, 'VLayout'),
 Ry = $()({
  name: 'VLayout',
  props: Oy(),
  setup(e, n) {
   let { slots: t } = n;
   const { layoutClasses: a, layoutStyles: l, getLayoutItem: i, items: o, layoutRef: r } = Lr(e),
    { dimensionStyles: s } = ze(e);
   return (
    R(() =>
     u('div', { ref: r, class: [a.value, e.class], style: [s.value, l.value, e.style] }, [
      u(ur, null, {
       default: () => {
        var c;
        return [u(ie, null, [(c = t.default) == null ? void 0 : c.call(t)])];
       },
      }),
     ])
    ),
    { getLayoutItem: i, items: o }
   );
  },
 }),
 Ny = D(
  {
   position: { type: String, required: !0 },
   size: { type: [Number, String], default: 300 },
   modelValue: Boolean,
   ...J(),
   ...on(),
  },
  'VLayoutItem'
 ),
 zy = $()({
  name: 'VLayoutItem',
  props: Ny(),
  setup(e, n) {
   let { slots: t } = n;
   const { layoutItemStyles: a, layoutIsReady: l } = rn({
    id: e.name,
    order: y(() => parseInt(e.order, 10)),
    position: M(e, 'position'),
    elementSize: M(e, 'size'),
    layoutSize: M(e, 'size'),
    active: M(e, 'modelValue'),
    absolute: M(e, 'absolute'),
   });
   return (
    R(() => {
     var i;
     return u('div', { class: ['v-layout-item', e.class], style: [a.value, e.style] }, [
      (i = t.default) == null ? void 0 : i.call(t),
     ]);
    }),
    l
   );
  },
 }),
 Hy = D(
  {
   modelValue: Boolean,
   options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) },
   ...J(),
   ...Ne(),
   ...de(),
   ...St({ transition: 'fade-transition' }),
  },
  'VLazy'
 ),
 Wy = $()({
  name: 'VLazy',
  directives: { intersect: Jn },
  props: Hy(),
  emits: { 'update:modelValue': (e) => !0 },
  setup(e, n) {
   let { slots: t } = n;
   const { dimensionStyles: a } = ze(e),
    l = le(e, 'modelValue');
   function i(o) {
    l.value || (l.value = o);
   }
   return (
    R(() =>
     Ae(
      u(
       e.tag,
       { class: ['v-lazy', e.class], style: [a.value, e.style] },
       {
        default: () => [
         l.value &&
          u(
           Xe,
           { transition: e.transition, appear: !0 },
           {
            default: () => {
             var o;
             return [(o = t.default) == null ? void 0 : o.call(t)];
            },
           }
          ),
        ],
       }
      ),
      [[ot('intersect'), { handler: i, options: e.options }, null]]
     )
    ),
    {}
   );
  },
 }),
 jy = D(
  {
   locale: String,
   fallbackLocale: String,
   messages: Object,
   rtl: { type: Boolean, default: void 0 },
   ...J(),
  },
  'VLocaleProvider'
 ),
 Yy = $()({
  name: 'VLocaleProvider',
  props: jy(),
  setup(e, n) {
   let { slots: t } = n;
   const { rtlClasses: a } = pd(e);
   return (
    R(() => {
     var l;
     return u('div', { class: ['v-locale-provider', a.value, e.class], style: e.style }, [
      (l = t.default) == null ? void 0 : l.call(t),
     ]);
    }),
    {}
   );
  },
 }),
 Gy = D({ scrollable: Boolean, ...J(), ...Ne(), ...de({ tag: 'main' }) }, 'VMain'),
 Uy = $()({
  name: 'VMain',
  props: Gy(),
  setup(e, n) {
   let { slots: t } = n;
   const { dimensionStyles: a } = ze(e),
    { mainStyles: l, layoutIsReady: i } = Fr(),
    { ssrBootStyles: o } = un();
   return (
    R(() =>
     u(
      e.tag,
      {
       class: ['v-main', { 'v-main--scrollable': e.scrollable }, e.class],
       style: [l.value, o.value, a.value, e.style],
      },
      {
       default: () => {
        var r, s;
        return [
         e.scrollable
          ? u('div', { class: 'v-main__scroller' }, [(r = t.default) == null ? void 0 : r.call(t)])
          : (s = t.default) == null
            ? void 0
            : s.call(t),
        ];
       },
      }
     )
    ),
    i
   );
  },
 });
function Ky(e) {
 let { rootEl: n, isSticky: t, layoutItemStyles: a } = e;
 const l = K(!1),
  i = K(0),
  o = y(() => {
   const c = typeof l.value == 'boolean' ? 'top' : l.value;
   return [
    t.value ? { top: 'auto', bottom: 'auto', height: void 0 } : void 0,
    l.value ? { [c]: Z(i.value) } : { top: a.value.top },
   ];
  });
 at(() => {
  X(
   t,
   (c) => {
    c ? window.addEventListener('scroll', s, { passive: !0 }) : window.removeEventListener('scroll', s);
   },
   { immediate: !0 }
  );
 }),
  nt(() => {
   window.removeEventListener('scroll', s);
  });
 let r = 0;
 function s() {
  const c = r > window.scrollY ? 'up' : 'down',
   d = n.value.getBoundingClientRect(),
   f = parseFloat(a.value.top ?? 0),
   m = window.scrollY - Math.max(0, i.value - f),
   v = d.height + Math.max(i.value, f) - window.scrollY - window.innerHeight,
   b = parseFloat(getComputedStyle(n.value).getPropertyValue('--v-body-scroll-y')) || 0;
  d.height < window.innerHeight - f
   ? ((l.value = 'top'), (i.value = f))
   : (c === 'up' && l.value === 'bottom') || (c === 'down' && l.value === 'top')
     ? ((i.value = window.scrollY + d.top - b), (l.value = !0))
     : c === 'down' && v <= 0
       ? ((i.value = 0), (l.value = 'bottom'))
       : c === 'up' &&
         m <= 0 &&
         (b
          ? l.value !== 'top' && ((i.value = -m + b + f), (l.value = 'top'))
          : ((i.value = d.top + m), (l.value = 'top'))),
   (r = window.scrollY);
 }
 return { isStuck: l, stickyStyles: o };
}
const qy = 100,
 Xy = 20;
function Jo(e) {
 return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * 1.41421356237;
}
function Qo(e) {
 if (e.length < 2) return 0;
 if (e.length === 2) return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
 let n = 0;
 for (let t = e.length - 1; t > 0; t--) {
  if (e[t].t === e[t - 1].t) continue;
  const a = Jo(n),
   l = (e[t].d - e[t - 1].d) / (e[t].t - e[t - 1].t);
  (n += (l - a) * Math.abs(l)), t === e.length - 1 && (n *= 0.5);
 }
 return Jo(n) * 1e3;
}
function Zy() {
 const e = {};
 function n(l) {
  Array.from(l.changedTouches).forEach((i) => {
   (e[i.identifier] ?? (e[i.identifier] = new Yc(Xy))).push([l.timeStamp, i]);
  });
 }
 function t(l) {
  Array.from(l.changedTouches).forEach((i) => {
   delete e[i.identifier];
  });
 }
 function a(l) {
  var c;
  const i = (c = e[l]) == null ? void 0 : c.values().reverse();
  if (!i) throw new Error(`No samples for touch id ${l}`);
  const o = i[0],
   r = [],
   s = [];
  for (const d of i) {
   if (o[0] - d[0] > qy) break;
   r.push({ t: d[0], d: d[1].clientX }), s.push({ t: d[0], d: d[1].clientY });
  }
  return {
   x: Qo(r),
   y: Qo(s),
   get direction() {
    const { x: d, y: f } = this,
     [m, v] = [Math.abs(d), Math.abs(f)];
    return m > v && d >= 0
     ? 'right'
     : m > v && d <= 0
       ? 'left'
       : v > m && f >= 0
         ? 'down'
         : v > m && f <= 0
           ? 'up'
           : Jy();
   },
  };
 }
 return { addMovement: n, endTouch: t, getVelocity: a };
}
function Jy() {
 throw new Error();
}
function Qy(e) {
 let { el: n, isActive: t, isTemporary: a, width: l, touchless: i, position: o } = e;
 at(() => {
  window.addEventListener('touchstart', k, { passive: !0 }),
   window.addEventListener('touchmove', I, { passive: !1 }),
   window.addEventListener('touchend', B, { passive: !0 });
 }),
  nt(() => {
   window.removeEventListener('touchstart', k),
    window.removeEventListener('touchmove', I),
    window.removeEventListener('touchend', B);
  });
 const r = y(() => ['left', 'right'].includes(o.value)),
  { addMovement: s, endTouch: c, getVelocity: d } = Zy();
 let f = !1;
 const m = K(!1),
  v = K(0),
  b = K(0);
 let g;
 function h(V, C) {
  return (
   (o.value === 'left'
    ? V
    : o.value === 'right'
      ? document.documentElement.clientWidth - V
      : o.value === 'top'
        ? V
        : o.value === 'bottom'
          ? document.documentElement.clientHeight - V
          : bn()) - (C ? l.value : 0)
  );
 }
 function S(V) {
  let C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const P =
   o.value === 'left'
    ? (V - b.value) / l.value
    : o.value === 'right'
      ? (document.documentElement.clientWidth - V - b.value) / l.value
      : o.value === 'top'
        ? (V - b.value) / l.value
        : o.value === 'bottom'
          ? (document.documentElement.clientHeight - V - b.value) / l.value
          : bn();
  return C ? Math.max(0, Math.min(1, P)) : P;
 }
 function k(V) {
  if (i.value) return;
  const C = V.changedTouches[0].clientX,
   P = V.changedTouches[0].clientY,
   x = 25,
   _ =
    o.value === 'left'
     ? C < x
     : o.value === 'right'
       ? C > document.documentElement.clientWidth - x
       : o.value === 'top'
         ? P < x
         : o.value === 'bottom'
           ? P > document.documentElement.clientHeight - x
           : bn(),
   T =
    t.value &&
    (o.value === 'left'
     ? C < l.value
     : o.value === 'right'
       ? C > document.documentElement.clientWidth - l.value
       : o.value === 'top'
         ? P < l.value
         : o.value === 'bottom'
           ? P > document.documentElement.clientHeight - l.value
           : bn());
  (_ || T || (t.value && a.value)) &&
   ((g = [C, P]),
   (b.value = h(r.value ? C : P, t.value)),
   (v.value = S(r.value ? C : P)),
   (f = b.value > -20 && b.value < 80),
   c(V),
   s(V));
 }
 function I(V) {
  const C = V.changedTouches[0].clientX,
   P = V.changedTouches[0].clientY;
  if (f) {
   if (!V.cancelable) {
    f = !1;
    return;
   }
   const _ = Math.abs(C - g[0]),
    T = Math.abs(P - g[1]);
   (r.value ? _ > T && _ > 3 : T > _ && T > 3)
    ? ((m.value = !0), (f = !1))
    : (r.value ? T : _) > 3 && (f = !1);
  }
  if (!m.value) return;
  V.preventDefault(), s(V);
  const x = S(r.value ? C : P, !1);
  (v.value = Math.max(0, Math.min(1, x))),
   x > 1 ? (b.value = h(r.value ? C : P, !0)) : x < 0 && (b.value = h(r.value ? C : P, !1));
 }
 function B(V) {
  if (((f = !1), !m.value)) return;
  s(V), (m.value = !1);
  const C = d(V.changedTouches[0].identifier),
   P = Math.abs(C.x),
   x = Math.abs(C.y);
  (r.value ? P > x && P > 400 : x > P && x > 3)
   ? (t.value =
      C.direction === ({ left: 'right', right: 'left', top: 'down', bottom: 'up' }[o.value] || bn()))
   : (t.value = v.value > 0.5);
 }
 const w = y(() =>
  m.value
   ? {
      transform:
       o.value === 'left'
        ? `translateX(calc(-100% + ${v.value * l.value}px))`
        : o.value === 'right'
          ? `translateX(calc(100% - ${v.value * l.value}px))`
          : o.value === 'top'
            ? `translateY(calc(-100% + ${v.value * l.value}px))`
            : o.value === 'bottom'
              ? `translateY(calc(100% - ${v.value * l.value}px))`
              : bn(),
      transition: 'none',
     }
   : void 0
 );
 return (
  lt(m, () => {
   var P, x;
   const V = ((P = n.value) == null ? void 0 : P.style.transform) ?? null,
    C = ((x = n.value) == null ? void 0 : x.style.transition) ?? null;
   pe(() => {
    var _, T, A, p;
    (T = n.value) == null ||
     T.style.setProperty('transform', ((_ = w.value) == null ? void 0 : _.transform) || 'none'),
     (p = n.value) == null ||
      p.style.setProperty('transition', ((A = w.value) == null ? void 0 : A.transition) || null);
   }),
    Ze(() => {
     var _, T;
     (_ = n.value) == null || _.style.setProperty('transform', V),
      (T = n.value) == null || T.style.setProperty('transition', C);
    });
  }),
  { isDragging: m, dragProgress: v, dragStyles: w }
 );
}
function bn() {
 throw new Error();
}
const eb = ['start', 'end', 'left', 'right', 'top', 'bottom'],
 tb = D(
  {
   color: String,
   disableResizeWatcher: Boolean,
   disableRouteWatcher: Boolean,
   expandOnHover: Boolean,
   floating: Boolean,
   modelValue: { type: Boolean, default: null },
   permanent: Boolean,
   rail: { type: Boolean, default: null },
   railWidth: { type: [Number, String], default: 56 },
   scrim: { type: [Boolean, String], default: !0 },
   image: String,
   temporary: Boolean,
   persistent: Boolean,
   touchless: Boolean,
   width: { type: [Number, String], default: 256 },
   location: { type: String, default: 'start', validator: (e) => eb.includes(e) },
   sticky: Boolean,
   ...st(),
   ...J(),
   ..._i(),
   ...mn({ mobile: null }),
   ...Oe(),
   ...on(),
   ..._e(),
   ...de({ tag: 'nav' }),
   ...me(),
  },
  'VNavigationDrawer'
 ),
 nb = $()({
  name: 'VNavigationDrawer',
  props: tb(),
  emits: { 'update:modelValue': (e) => !0, 'update:rail': (e) => !0 },
  setup(e, n) {
   let { attrs: t, emit: a, slots: l } = n;
   const { isRtl: i } = Re(),
    { themeClasses: o } = Se(e),
    { borderClasses: r } = ft(e),
    { backgroundColorClasses: s, backgroundColorStyles: c } = we(M(e, 'color')),
    { elevationClasses: d } = Ye(e),
    { displayClasses: f, mobile: m } = gt(e),
    { roundedClasses: v } = De(e),
    b = Zr(),
    g = le(e, 'modelValue', null, (G) => !!G),
    { ssrBootStyles: h } = un(),
    { scopeId: S } = gn(),
    k = j(),
    I = K(!1),
    { runOpenDelay: B, runCloseDelay: w } = Ti(e, (G) => {
     I.value = G;
    }),
    V = y(() =>
     e.rail && e.expandOnHover && I.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width)
    ),
    C = y(() => wl(e.location, i.value)),
    P = y(() => e.persistent),
    x = y(() => !e.permanent && (m.value || e.temporary)),
    _ = y(() => e.sticky && !x.value && C.value !== 'bottom');
   lt(
    () => e.expandOnHover && e.rail != null,
    () => {
     X(I, (G) => a('update:rail', !G));
    }
   ),
    lt(
     () => !e.disableResizeWatcher,
     () => {
      X(x, (G) => !e.permanent && he(() => (g.value = !G)));
     }
    ),
    lt(
     () => !e.disableRouteWatcher && !!b,
     () => {
      X(b.currentRoute, () => x.value && (g.value = !1));
     }
    ),
    X(
     () => e.permanent,
     (G) => {
      G && (g.value = !0);
     }
    ),
    e.modelValue == null && !x.value && (g.value = e.permanent || !m.value);
   const { isDragging: T, dragProgress: A } = Qy({
     el: k,
     isActive: g,
     isTemporary: x,
     width: V,
     touchless: M(e, 'touchless'),
     position: C,
    }),
    p = y(() => {
     const G = x.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : V.value;
     return T.value ? G * A.value : G;
    }),
    F = y(() => (['top', 'bottom'].includes(e.location) ? 0 : V.value)),
    {
     layoutItemStyles: O,
     layoutItemScrimStyles: W,
     layoutIsReady: te,
    } = rn({
     id: e.name,
     order: y(() => parseInt(e.order, 10)),
     position: C,
     layoutSize: p,
     elementSize: F,
     active: y(() => g.value || T.value),
     disableTransitions: y(() => T.value),
     absolute: y(() => e.absolute || (_.value && typeof N.value != 'string')),
    }),
    { isStuck: N, stickyStyles: H } = Ky({ rootEl: k, isSticky: _, layoutItemStyles: O }),
    E = we(y(() => (typeof e.scrim == 'string' ? e.scrim : null))),
    L = y(() => ({
     ...(T.value ? { opacity: A.value * 0.2, transition: 'none' } : void 0),
     ...W.value,
    }));
   return (
    Be({ VList: { bgColor: 'transparent' } }),
    R(() => {
     const G = l.image || e.image;
     return u(ie, null, [
      u(
       e.tag,
       z(
        {
         ref: k,
         onMouseenter: B,
         onMouseleave: w,
         class: [
          'v-navigation-drawer',
          `v-navigation-drawer--${C.value}`,
          {
           'v-navigation-drawer--expand-on-hover': e.expandOnHover,
           'v-navigation-drawer--floating': e.floating,
           'v-navigation-drawer--is-hovering': I.value,
           'v-navigation-drawer--rail': e.rail,
           'v-navigation-drawer--temporary': x.value,
           'v-navigation-drawer--persistent': P.value,
           'v-navigation-drawer--active': g.value,
           'v-navigation-drawer--sticky': _.value,
          },
          o.value,
          s.value,
          r.value,
          f.value,
          d.value,
          v.value,
          e.class,
         ],
         style: [
          c.value,
          O.value,
          h.value,
          H.value,
          e.style,
          ['top', 'bottom'].includes(C.value) ? { height: 'auto' } : {},
         ],
        },
        S,
        t
       ),
       {
        default: () => {
         var ae, oe, q;
         return [
          G &&
           u('div', { key: 'image', class: 'v-navigation-drawer__img' }, [
            l.image
             ? u(
                fe,
                {
                 key: 'image-defaults',
                 disabled: !e.image,
                 defaults: { VImg: { alt: '', cover: !0, height: 'inherit', src: e.image } },
                },
                l.image
               )
             : u(Tt, { key: 'image-img', alt: '', cover: !0, height: 'inherit', src: e.image }, null),
           ]),
          l.prepend &&
           u('div', { class: 'v-navigation-drawer__prepend' }, [
            (ae = l.prepend) == null ? void 0 : ae.call(l),
           ]),
          u('div', { class: 'v-navigation-drawer__content' }, [
           (oe = l.default) == null ? void 0 : oe.call(l),
          ]),
          l.append &&
           u('div', { class: 'v-navigation-drawer__append' }, [
            (q = l.append) == null ? void 0 : q.call(l),
           ]),
         ];
        },
       }
      ),
      u(
       Ft,
       { name: 'fade-transition' },
       {
        default: () => [
         x.value &&
          (T.value || g.value) &&
          !!e.scrim &&
          u(
           'div',
           z(
            {
             class: ['v-navigation-drawer__scrim', E.backgroundColorClasses.value],
             style: [L.value, E.backgroundColorStyles.value],
             onClick: () => {
              P.value || (g.value = !1);
             },
            },
            S
           ),
           null
          ),
        ],
       }
      ),
     ]);
    }),
    te.then(() => ({ isStuck: N }))
   );
  },
 }),
 ab = rt({
  name: 'VNoSsr',
  setup(e, n) {
   let { slots: t } = n;
   const a = Ou();
   return () => {
    var l;
    return a.value && ((l = t.default) == null ? void 0 : l.call(t));
   };
  },
 }),
 lb = D(
  {
   autofocus: Boolean,
   divider: String,
   focusAll: Boolean,
   label: { type: String, default: '$vuetify.input.otp' },
   length: { type: [Number, String], default: 6 },
   modelValue: { type: [Number, String], default: void 0 },
   placeholder: String,
   type: { type: String, default: 'number' },
   ...Ne(),
   ...aa(),
   ...Da(oa({ variant: 'outlined' }), [
    'baseColor',
    'bgColor',
    'class',
    'color',
    'disabled',
    'error',
    'loading',
    'rounded',
    'style',
    'theme',
    'variant',
   ]),
  },
  'VOtpInput'
 ),
 ib = $()({
  name: 'VOtpInput',
  props: lb(),
  emits: { finish: (e) => !0, 'update:focused': (e) => !0, 'update:modelValue': (e) => !0 },
  setup(e, n) {
   let { attrs: t, emit: a, slots: l } = n;
   const { dimensionStyles: i } = ze(e),
    { isFocused: o, focus: r, blur: s } = Et(e),
    c = le(
     e,
     'modelValue',
     '',
     (P) => (P == null ? [] : String(P).split('')),
     (P) => P.join('')
    ),
    { t: d } = $e(),
    f = y(() => Number(e.length)),
    m = y(() => Array(f.value).fill(0)),
    v = j(-1),
    b = j(),
    g = j([]),
    h = y(() => g.value[v.value]);
   function S() {
    if (C(h.value.value)) {
     h.value.value = '';
     return;
    }
    const P = c.value.slice(),
     x = h.value.value;
    P[v.value] = x;
    let _ = null;
    v.value > c.value.length ? (_ = c.value.length + 1) : v.value + 1 !== f.value && (_ = 'next'),
     (c.value = P),
     _ && Cn(b.value, _);
   }
   function k(P) {
    const x = c.value.slice(),
     _ = v.value;
    let T = null;
    ['ArrowLeft', 'ArrowRight', 'Backspace', 'Delete'].includes(P.key) &&
     (P.preventDefault(),
     P.key === 'ArrowLeft'
      ? (T = 'prev')
      : P.key === 'ArrowRight'
        ? (T = 'next')
        : ['Backspace', 'Delete'].includes(P.key) &&
          ((x[v.value] = ''),
          (c.value = x),
          v.value > 0 && P.key === 'Backspace'
           ? (T = 'prev')
           : requestAnimationFrame(() => {
              var A;
              (A = g.value[_]) == null || A.select();
             })),
     requestAnimationFrame(() => {
      T != null && Cn(b.value, T);
     }));
   }
   function I(P, x) {
    var T, A;
    x.preventDefault(), x.stopPropagation();
    const _ = ((T = x == null ? void 0 : x.clipboardData) == null ? void 0 : T.getData('Text')) ?? '';
    C(_) || ((c.value = _.split('')), (A = g.value) == null || A[P].blur());
   }
   function B() {
    c.value = [];
   }
   function w(P, x) {
    r(), (v.value = x);
   }
   function V() {
    s(), (v.value = -1);
   }
   function C(P) {
    return e.type === 'number' && /[^0-9]/g.test(P);
   }
   return (
    Be(
     {
      VField: {
       color: y(() => e.color),
       bgColor: y(() => e.color),
       baseColor: y(() => e.baseColor),
       disabled: y(() => e.disabled),
       error: y(() => e.error),
       variant: y(() => e.variant),
      },
     },
     { scoped: !0 }
    ),
    X(
     c,
     (P) => {
      P.length === f.value && a('finish', P.join(''));
     },
     { deep: !0 }
    ),
    X(v, (P) => {
     P < 0 ||
      he(() => {
       var x;
       (x = g.value[P]) == null || x.select();
      });
    }),
    R(() => {
     var _;
     const [P, x] = Nt(t);
     return u(
      'div',
      z(
       { class: ['v-otp-input', { 'v-otp-input--divided': !!e.divider }, e.class], style: [e.style] },
       P
      ),
      [
       u('div', { ref: b, class: 'v-otp-input__content', style: [i.value] }, [
        m.value.map((T, A) =>
         u(ie, null, [
          e.divider && A !== 0 && u('span', { class: 'v-otp-input__divider' }, [e.divider]),
          u(
           $n,
           { focused: (o.value && e.focusAll) || v.value === A, key: A },
           {
            ...l,
            loader: void 0,
            default: () =>
             u(
              'input',
              {
               ref: (p) => (g.value[A] = p),
               'aria-label': d(e.label, A + 1),
               autofocus: A === 0 && e.autofocus,
               autocomplete: 'one-time-code',
               class: ['v-otp-input__field'],
               disabled: e.disabled,
               inputmode: e.type === 'number' ? 'numeric' : 'text',
               min: e.type === 'number' ? 0 : void 0,
               maxlength: '1',
               placeholder: e.placeholder,
               type: e.type === 'number' ? 'text' : e.type,
               value: c.value[A],
               onInput: S,
               onFocus: (p) => w(p, A),
               onBlur: V,
               onKeydown: k,
               onPaste: (p) => I(A, p),
              },
              null
             ),
           }
          ),
         ])
        ),
        u(
         'input',
         z({ class: 'v-otp-input-input', type: 'hidden' }, x, { value: c.value.join('') }),
         null
        ),
        u(
         wt,
         {
          contained: !0,
          'content-class': 'v-otp-input__loader',
          'model-value': !!e.loading,
          persistent: !0,
         },
         {
          default: () => {
           var T;
           return [
            ((T = l.loader) == null ? void 0 : T.call(l)) ??
             u(
              _n,
              {
               color: typeof e.loading == 'boolean' ? void 0 : e.loading,
               indeterminate: !0,
               size: '24',
               width: '2',
              },
              null
             ),
           ];
          },
         }
        ),
        (_ = l.default) == null ? void 0 : _.call(l),
       ]),
      ]
     );
    }),
    {
     blur: () => {
      var P;
      (P = g.value) == null || P.some((x) => x.blur());
     },
     focus: () => {
      var P;
      (P = g.value) == null || P[0].focus();
     },
     reset: B,
     isFocused: o,
    }
   );
  },
 });
function ob(e) {
 return Math.floor(Math.abs(e)) * Math.sign(e);
}
const rb = D({ scale: { type: [Number, String], default: 0.5 }, ...J() }, 'VParallax'),
 ub = $()({
  name: 'VParallax',
  props: rb(),
  setup(e, n) {
   let { slots: t } = n;
   const { intersectionRef: a, isIntersecting: l } = Oa(),
    { resizeRef: i, contentRect: o } = yt(),
    { height: r } = gt(),
    s = j();
   pe(() => {
    var v;
    a.value = i.value = (v = s.value) == null ? void 0 : v.$el;
   });
   let c;
   X(l, (v) => {
    v
     ? ((c = di(a.value)),
       (c = c === document.scrollingElement ? document : c),
       c.addEventListener('scroll', m, { passive: !0 }),
       m())
     : c.removeEventListener('scroll', m);
   }),
    nt(() => {
     c == null || c.removeEventListener('scroll', m);
    }),
    X(r, m),
    X(() => {
     var v;
     return (v = o.value) == null ? void 0 : v.height;
    }, m);
   const d = y(() => 1 - Fe(+e.scale));
   let f = -1;
   function m() {
    l.value &&
     (cancelAnimationFrame(f),
     (f = requestAnimationFrame(() => {
      var w;
      const v = ((w = s.value) == null ? void 0 : w.$el).querySelector('.v-img__img');
      if (!v) return;
      const b = c instanceof Document ? document.documentElement.clientHeight : c.clientHeight,
       g = c instanceof Document ? window.scrollY : c.scrollTop,
       h = a.value.getBoundingClientRect().top + g,
       S = o.value.height,
       k = h + (S - b) / 2,
       I = ob((g - k) * d.value),
       B = Math.max(1, (d.value * (b - S) + S) / S);
      v.style.setProperty('transform', `translateY(${I}px) scale(${B})`);
     })));
   }
   return (
    R(() =>
     u(
      Tt,
      {
       class: ['v-parallax', { 'v-parallax--active': l.value }, e.class],
       style: e.style,
       ref: s,
       cover: !0,
       onLoadstart: m,
       onLoad: m,
      },
      t
     )
    ),
    {}
   );
  },
 }),
 sb = D({ ...Ha({ falseIcon: '$radioOff', trueIcon: '$radioOn' }) }, 'VRadio'),
 cb = $()({
  name: 'VRadio',
  props: sb(),
  setup(e, n) {
   let { slots: t } = n;
   return (
    R(() => {
     const a = Ot.filterProps(e);
     return u(Ot, z(a, { class: ['v-radio', e.class], style: e.style, type: 'radio' }), t);
    }),
    {}
   );
  },
 }),
 db = D(
  {
   height: { type: [Number, String], default: 'auto' },
   ...Mt(),
   ...Ee(xi(), ['multiple']),
   trueIcon: { type: ue, default: '$radioOn' },
   falseIcon: { type: ue, default: '$radioOff' },
   type: { type: String, default: 'radio' },
  },
  'VRadioGroup'
 ),
 vb = $()({
  name: 'VRadioGroup',
  inheritAttrs: !1,
  props: db(),
  emits: { 'update:modelValue': (e) => !0 },
  setup(e, n) {
   let { attrs: t, slots: a } = n;
   const l = je(),
    i = y(() => e.id || `radio-group-${l}`),
    o = le(e, 'modelValue');
   return (
    R(() => {
     const [r, s] = Nt(t),
      c = Ue.filterProps(e),
      d = Ot.filterProps(e),
      f = a.label ? a.label({ label: e.label, props: { for: i.value } }) : e.label;
     return u(
      Ue,
      z({ class: ['v-radio-group', e.class], style: e.style }, r, c, {
       modelValue: o.value,
       'onUpdate:modelValue': (m) => (o.value = m),
       id: i.value,
      }),
      {
       ...a,
       default: (m) => {
        let { id: v, messagesId: b, isDisabled: g, isReadonly: h } = m;
        return u(ie, null, [
         f && u(En, { id: v.value }, { default: () => [f] }),
         u(
          uu,
          z(
           d,
           {
            id: v.value,
            'aria-describedby': b.value,
            defaultsTarget: 'VRadio',
            trueIcon: e.trueIcon,
            falseIcon: e.falseIcon,
            type: e.type,
            disabled: g.value,
            readonly: h.value,
            'aria-labelledby': f ? v.value : void 0,
            multiple: !1,
           },
           s,
           { modelValue: o.value, 'onUpdate:modelValue': (S) => (o.value = S) }
          ),
          a
         ),
        ]);
       },
      }
     );
    }),
    {}
   );
  },
 }),
 fb = D(
  { ...aa(), ...Mt(), ...is(), strict: Boolean, modelValue: { type: Array, default: () => [0, 0] } },
  'VRangeSlider'
 ),
 mb = $()({
  name: 'VRangeSlider',
  props: fb(),
  emits: {
   'update:focused': (e) => !0,
   'update:modelValue': (e) => !0,
   end: (e) => !0,
   start: (e) => !0,
  },
  setup(e, n) {
   let { slots: t, emit: a } = n;
   const l = j(),
    i = j(),
    o = j(),
    { rtlClasses: r } = Re();
   function s(_) {
    if (!l.value || !i.value) return;
    const T = zl(_, l.value.$el, e.direction),
     A = zl(_, i.value.$el, e.direction),
     p = Math.abs(T),
     F = Math.abs(A);
    return p < F || (p === F && T < 0) ? l.value.$el : i.value.$el;
   }
   const c = os(e),
    d = le(e, 'modelValue', void 0, (_) =>
     _ != null && _.length ? _.map((T) => c.roundValue(T)) : [0, 0]
    ),
    {
     activeThumbRef: f,
     hasLabels: m,
     max: v,
     min: b,
     mousePressed: g,
     onSliderMousedown: h,
     onSliderTouchstart: S,
     position: k,
     trackContainerRef: I,
     readonly: B,
    } = rs({
     props: e,
     steps: c,
     onSliderStart: () => {
      a('start', d.value);
     },
     onSliderEnd: (_) => {
      var p;
      let { value: T } = _;
      const A = f.value === ((p = l.value) == null ? void 0 : p.$el) ? [T, d.value[1]] : [d.value[0], T];
      !e.strict && A[0] < A[1] && (d.value = A), a('end', d.value);
     },
     onSliderMove: (_) => {
      var F, O, W, te;
      let { value: T } = _;
      const [A, p] = d.value;
      !e.strict &&
       A === p &&
       A !== b.value &&
       ((f.value =
        T > A ? ((F = i.value) == null ? void 0 : F.$el) : (O = l.value) == null ? void 0 : O.$el),
       (W = f.value) == null || W.focus()),
       f.value === ((te = l.value) == null ? void 0 : te.$el)
        ? (d.value = [Math.min(T, p), p])
        : (d.value = [A, Math.max(A, T)]);
     },
     getActiveThumb: s,
    }),
    { isFocused: w, focus: V, blur: C } = Et(e),
    P = y(() => k(d.value[0])),
    x = y(() => k(d.value[1]));
   return (
    R(() => {
     const _ = Ue.filterProps(e),
      T = !!(e.label || t.label || t.prepend);
     return u(
      Ue,
      z(
       {
        class: [
         'v-slider',
         'v-range-slider',
         {
          'v-slider--has-labels': !!t['tick-label'] || m.value,
          'v-slider--focused': w.value,
          'v-slider--pressed': g.value,
          'v-slider--disabled': e.disabled,
         },
         r.value,
         e.class,
        ],
        style: e.style,
        ref: o,
       },
       _,
       { focused: w.value }
      ),
      {
       ...t,
       prepend: T
        ? (A) => {
           var p, F;
           return u(ie, null, [
            ((p = t.label) == null ? void 0 : p.call(t, A)) ??
             (e.label ? u(En, { class: 'v-slider__label', text: e.label }, null) : void 0),
            (F = t.prepend) == null ? void 0 : F.call(t, A),
           ]);
          }
        : void 0,
       default: (A) => {
        var O, W;
        let { id: p, messagesId: F } = A;
        return u(
         'div',
         {
          class: 'v-slider__container',
          onMousedown: B.value ? void 0 : h,
          onTouchstartPassive: B.value ? void 0 : S,
         },
         [
          u(
           'input',
           {
            id: `${p.value}_start`,
            name: e.name || p.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: '-1',
            value: d.value[0],
           },
           null
          ),
          u(
           'input',
           {
            id: `${p.value}_stop`,
            name: e.name || p.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: '-1',
            value: d.value[1],
           },
           null
          ),
          u(us, { ref: I, start: P.value, stop: x.value }, { 'tick-label': t['tick-label'] }),
          u(
           Hl,
           {
            ref: l,
            'aria-describedby': F.value,
            focused: w && f.value === ((O = l.value) == null ? void 0 : O.$el),
            modelValue: d.value[0],
            'onUpdate:modelValue': (te) => (d.value = [te, d.value[1]]),
            onFocus: (te) => {
             var N, H, E, L;
             V(),
              (f.value = (N = l.value) == null ? void 0 : N.$el),
              d.value[0] === d.value[1] &&
               d.value[1] === b.value &&
               te.relatedTarget !== ((H = i.value) == null ? void 0 : H.$el) &&
               ((E = l.value) == null || E.$el.blur(), (L = i.value) == null || L.$el.focus());
            },
            onBlur: () => {
             C(), (f.value = void 0);
            },
            min: b.value,
            max: d.value[1],
            position: P.value,
            ripple: e.ripple,
           },
           { 'thumb-label': t['thumb-label'] }
          ),
          u(
           Hl,
           {
            ref: i,
            'aria-describedby': F.value,
            focused: w && f.value === ((W = i.value) == null ? void 0 : W.$el),
            modelValue: d.value[1],
            'onUpdate:modelValue': (te) => (d.value = [d.value[0], te]),
            onFocus: (te) => {
             var N, H, E, L;
             V(),
              (f.value = (N = i.value) == null ? void 0 : N.$el),
              d.value[0] === d.value[1] &&
               d.value[0] === v.value &&
               te.relatedTarget !== ((H = l.value) == null ? void 0 : H.$el) &&
               ((E = i.value) == null || E.$el.blur(), (L = l.value) == null || L.$el.focus());
            },
            onBlur: () => {
             C(), (f.value = void 0);
            },
            min: d.value[0],
            max: v.value,
            position: x.value,
            ripple: e.ripple,
           },
           { 'thumb-label': t['thumb-label'] }
          ),
         ]
        );
       },
      }
     );
    }),
    {}
   );
  },
 }),
 gb = D(
  {
   name: String,
   itemAriaLabel: { type: String, default: '$vuetify.rating.ariaLabel.item' },
   activeColor: String,
   color: String,
   clearable: Boolean,
   disabled: Boolean,
   emptyIcon: { type: ue, default: '$ratingEmpty' },
   fullIcon: { type: ue, default: '$ratingFull' },
   halfIncrements: Boolean,
   hover: Boolean,
   length: { type: [Number, String], default: 5 },
   readonly: Boolean,
   modelValue: { type: [Number, String], default: 0 },
   itemLabels: Array,
   itemLabelPosition: { type: String, default: 'top', validator: (e) => ['top', 'bottom'].includes(e) },
   ripple: Boolean,
   ...J(),
   ...He(),
   ...It(),
   ...de(),
   ...me(),
  },
  'VRating'
 ),
 hb = $()({
  name: 'VRating',
  props: gb(),
  emits: { 'update:modelValue': (e) => !0 },
  setup(e, n) {
   let { slots: t } = n;
   const { t: a } = $e(),
    { themeClasses: l } = Se(e),
    i = le(e, 'modelValue'),
    o = y(() => Fe(parseFloat(i.value), 0, +e.length)),
    r = y(() => xt(Number(e.length), 1)),
    s = y(() => r.value.flatMap((g) => (e.halfIncrements ? [g - 0.5, g] : [g]))),
    c = K(-1),
    d = y(() =>
     s.value.map((g) => {
      const h = e.hover && c.value > -1,
       S = o.value >= g,
       k = c.value >= g,
       B = (h ? k : S) ? e.fullIcon : e.emptyIcon,
       w = e.activeColor ?? e.color,
       V = S || k ? w : e.color;
      return { isFilled: S, isHovered: k, icon: B, color: V };
     })
    ),
    f = y(() =>
     [0, ...s.value].map((g) => {
      function h() {
       c.value = g;
      }
      function S() {
       c.value = -1;
      }
      function k() {
       e.disabled || e.readonly || (i.value = o.value === g && e.clearable ? 0 : g);
      }
      return { onMouseenter: e.hover ? h : void 0, onMouseleave: e.hover ? S : void 0, onClick: k };
     })
    ),
    m = y(() => e.name ?? `v-rating-${je()}`);
   function v(g) {
    var P, x;
    let { value: h, index: S, showStar: k = !0 } = g;
    const { onMouseenter: I, onMouseleave: B, onClick: w } = f.value[S + 1],
     V = `${m.value}-${String(h).replace('.', '-')}`,
     C = {
      color: (P = d.value[S]) == null ? void 0 : P.color,
      density: e.density,
      disabled: e.disabled,
      icon: (x = d.value[S]) == null ? void 0 : x.icon,
      ripple: e.ripple,
      size: e.size,
      variant: 'plain',
     };
    return u(ie, null, [
     u(
      'label',
      {
       for: V,
       class: {
        'v-rating__item--half': e.halfIncrements && h % 1 > 0,
        'v-rating__item--full': e.halfIncrements && h % 1 === 0,
       },
       onMouseenter: I,
       onMouseleave: B,
       onClick: w,
      },
      [
       u('span', { class: 'v-rating__hidden' }, [a(e.itemAriaLabel, h, e.length)]),
       k
        ? t.item
          ? t.item({ ...d.value[S], props: C, value: h, index: S, rating: o.value })
          : u(ye, z({ 'aria-label': a(e.itemAriaLabel, h, e.length) }, C), null)
        : void 0,
      ]
     ),
     u(
      'input',
      {
       class: 'v-rating__hidden',
       name: m.value,
       id: V,
       type: 'radio',
       value: h,
       checked: o.value === h,
       tabindex: -1,
       readonly: e.readonly,
       disabled: e.disabled,
      },
      null
     ),
    ]);
   }
   function b(g) {
    return t['item-label']
     ? t['item-label'](g)
     : g.label
       ? u('span', null, [g.label])
       : u('span', null, [Lt(' ')]);
   }
   return (
    R(() => {
     var h;
     const g = !!((h = e.itemLabels) != null && h.length) || t['item-label'];
     return u(
      e.tag,
      {
       class: [
        'v-rating',
        { 'v-rating--hover': e.hover, 'v-rating--readonly': e.readonly },
        l.value,
        e.class,
       ],
       style: e.style,
      },
      {
       default: () => [
        u(v, { value: 0, index: -1, showStar: !1 }, null),
        r.value.map((S, k) => {
         var I, B;
         return u('div', { class: 'v-rating__wrapper' }, [
          g && e.itemLabelPosition === 'top'
           ? b({ value: S, index: k, label: (I = e.itemLabels) == null ? void 0 : I[k] })
           : void 0,
          u('div', { class: 'v-rating__item' }, [
           e.halfIncrements
            ? u(ie, null, [
               u(v, { value: S - 0.5, index: k * 2 }, null),
               u(v, { value: S, index: k * 2 + 1 }, null),
              ])
            : u(v, { value: S, index: k }, null),
          ]),
          g && e.itemLabelPosition === 'bottom'
           ? b({ value: S, index: k, label: (B = e.itemLabels) == null ? void 0 : B[k] })
           : void 0,
         ]);
        }),
       ],
      }
     );
    }),
    {}
   );
  },
 }),
 yb = {
  actions: 'button@2',
  article: 'heading, paragraph',
  avatar: 'avatar',
  button: 'button',
  card: 'image, heading',
  'card-avatar': 'image, list-item-avatar',
  chip: 'chip',
  'date-picker': 'list-item, heading, divider, date-picker-options, date-picker-days, actions',
  'date-picker-options': 'text, avatar@2',
  'date-picker-days': 'avatar@28',
  divider: 'divider',
  heading: 'heading',
  image: 'image',
  'list-item': 'text',
  'list-item-avatar': 'avatar, text',
  'list-item-two-line': 'sentences',
  'list-item-avatar-two-line': 'avatar, sentences',
  'list-item-three-line': 'paragraph',
  'list-item-avatar-three-line': 'avatar, paragraph',
  ossein: 'ossein',
  paragraph: 'text@3',
  sentences: 'text@2',
  subtitle: 'text',
  table: 'table-heading, table-thead, table-tbody, table-tfoot',
  'table-heading': 'chip, text',
  'table-thead': 'heading@6',
  'table-tbody': 'table-row-divider@6',
  'table-row-divider': 'table-row, divider',
  'table-row': 'text@6',
  'table-tfoot': 'text@2, avatar@2',
  text: 'text',
 };
function bb(e) {
 let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
 return u('div', { class: ['v-skeleton-loader__bone', `v-skeleton-loader__${e}`] }, [n]);
}
function er(e) {
 const [n, t] = e.split('@');
 return Array.from({ length: t }).map(() => ul(n));
}
function ul(e) {
 let n = [];
 if (!e) return n;
 const t = yb[e];
 if (e !== t) {
  if (e.includes(',')) return tr(e);
  if (e.includes('@')) return er(e);
  t.includes(',') ? (n = tr(t)) : t.includes('@') ? (n = er(t)) : t && n.push(ul(t));
 }
 return [bb(e, n)];
}
function tr(e) {
 return e.replace(/\s/g, '').split(',').map(ul);
}
const Sb = D(
  {
   boilerplate: Boolean,
   color: String,
   loading: Boolean,
   loadingText: { type: String, default: '$vuetify.loading' },
   type: { type: [String, Array], default: 'ossein' },
   ...Ne(),
   ...Oe(),
   ...me(),
  },
  'VSkeletonLoader'
 ),
 kb = $()({
  name: 'VSkeletonLoader',
  props: Sb(),
  setup(e, n) {
   let { slots: t } = n;
   const { backgroundColorClasses: a, backgroundColorStyles: l } = we(M(e, 'color')),
    { dimensionStyles: i } = ze(e),
    { elevationClasses: o } = Ye(e),
    { themeClasses: r } = Se(e),
    { t: s } = $e(),
    c = y(() => ul(Te(e.type).join(',')));
   return (
    R(() => {
     var f;
     const d = !t.default || e.loading;
     return u(
      'div',
      {
       class: [
        'v-skeleton-loader',
        { 'v-skeleton-loader--boilerplate': e.boilerplate },
        r.value,
        a.value,
        o.value,
       ],
       style: [l.value, d ? i.value : {}],
       'aria-busy': e.boilerplate ? void 0 : d,
       'aria-live': e.boilerplate ? void 0 : 'polite',
       'aria-label': e.boilerplate ? void 0 : s(e.loadingText),
       role: e.boilerplate ? void 0 : 'alert',
      },
      [d ? c.value : (f = t.default) == null ? void 0 : f.call(t)]
     );
    }),
    {}
   );
  },
 }),
 xb = $()({
  name: 'VSlideGroupItem',
  props: dn(),
  emits: { 'group:selected': (e) => !0 },
  setup(e, n) {
   let { slots: t } = n;
   const a = vn(e, Su);
   return () => {
    var l;
    return (l = t.default) == null
     ? void 0
     : l.call(t, {
        isSelected: a.isSelected.value,
        select: a.select,
        toggle: a.toggle,
        selectedClass: a.selectedClass.value,
       });
   };
  },
 });
function wb(e) {
 const n = K(e);
 let t = -1;
 function a() {
  clearInterval(t);
 }
 function l() {
  a(), he(() => (n.value = e));
 }
 function i(o) {
  const r = o ? getComputedStyle(o) : { transitionDuration: 0.2 },
   s = parseFloat(r.transitionDuration) * 1e3 || 200;
  if ((a(), n.value <= 0)) return;
  const c = performance.now();
  t = window.setInterval(() => {
   const d = performance.now() - c + s;
   (n.value = Math.max(e - d, 0)), n.value <= 0 && a();
  }, s);
 }
 return Ze(a), { clear: a, time: n, start: i, reset: l };
}
const Cb = D(
  {
   multiLine: Boolean,
   text: String,
   timer: [Boolean, String],
   timeout: { type: [Number, String], default: 5e3 },
   vertical: Boolean,
   ...Dt({ location: 'bottom' }),
   ...Dn(),
   ..._e(),
   ...mt(),
   ...me(),
   ...Ee(ia({ transition: 'v-snackbar-transition' }), [
    'persistent',
    'noClickAnimation',
    'scrim',
    'scrollStrategy',
   ]),
  },
  'VSnackbar'
 ),
 Vb = $()({
  name: 'VSnackbar',
  props: Cb(),
  emits: { 'update:modelValue': (e) => !0 },
  setup(e, n) {
   let { slots: t } = n;
   const a = le(e, 'modelValue'),
    { positionClasses: l } = pn(e),
    { scopeId: i } = gn(),
    { themeClasses: o } = Se(e),
    { colorClasses: r, colorStyles: s, variantClasses: c } = sn(e),
    { roundedClasses: d } = De(e),
    f = wb(Number(e.timeout)),
    m = j(),
    v = j(),
    b = K(!1),
    g = K(0),
    h = j(),
    S = ge(Hn, void 0);
   lt(
    () => !!S,
    () => {
     const _ = Fr();
     pe(() => {
      h.value = _.mainStyles.value;
     });
    }
   ),
    X(a, I),
    X(() => e.timeout, I),
    at(() => {
     a.value && I();
    });
   let k = -1;
   function I() {
    f.reset(), window.clearTimeout(k);
    const _ = Number(e.timeout);
    if (!a.value || _ === -1) return;
    const T = ai(v.value);
    f.start(T),
     (k = window.setTimeout(() => {
      a.value = !1;
     }, _));
   }
   function B() {
    f.reset(), window.clearTimeout(k);
   }
   function w() {
    (b.value = !0), B();
   }
   function V() {
    (b.value = !1), I();
   }
   function C(_) {
    g.value = _.touches[0].clientY;
   }
   function P(_) {
    Math.abs(g.value - _.changedTouches[0].clientY) > 50 && (a.value = !1);
   }
   const x = y(() => e.location.split(' ').reduce((_, T) => ((_[`v-snackbar--${T}`] = !0), _), {}));
   return (
    R(() => {
     const _ = wt.filterProps(e),
      T = !!(t.default || t.text || e.text);
     return u(
      wt,
      z(
       {
        ref: m,
        class: [
         'v-snackbar',
         {
          'v-snackbar--active': a.value,
          'v-snackbar--multi-line': e.multiLine && !e.vertical,
          'v-snackbar--timer': !!e.timer,
          'v-snackbar--vertical': e.vertical,
         },
         x.value,
         l.value,
         e.class,
        ],
        style: [h.value, e.style],
       },
       _,
       {
        modelValue: a.value,
        'onUpdate:modelValue': (A) => (a.value = A),
        contentProps: z(
         {
          class: ['v-snackbar__wrapper', o.value, r.value, d.value, c.value],
          style: [s.value],
          onPointerenter: w,
          onPointerleave: V,
         },
         _.contentProps
        ),
        persistent: !0,
        noClickAnimation: !0,
        scrim: !1,
        scrollStrategy: 'none',
        _disableGlobalStack: !0,
        onTouchstartPassive: C,
        onTouchend: P,
       },
       i
      ),
      {
       default: () => {
        var A, p;
        return [
         zt(!1, 'v-snackbar'),
         e.timer &&
          !b.value &&
          u('div', { key: 'timer', class: 'v-snackbar__timer' }, [
           u(
            Ra,
            {
             ref: v,
             color: typeof e.timer == 'string' ? e.timer : 'info',
             max: e.timeout,
             'model-value': f.time.value,
            },
            null
           ),
          ]),
         T &&
          u(
           'div',
           { key: 'content', class: 'v-snackbar__content', role: 'status', 'aria-live': 'polite' },
           [
            ((A = t.text) == null ? void 0 : A.call(t)) ?? e.text,
            (p = t.default) == null ? void 0 : p.call(t),
           ]
          ),
         t.actions &&
          u(
           fe,
           { defaults: { VBtn: { variant: 'text', ripple: !1, slim: !0 } } },
           { default: () => [u('div', { class: 'v-snackbar__actions' }, [t.actions({ isActive: a })])] }
          ),
        ];
       },
       activator: t.activator,
      }
     );
    }),
    ht({}, m)
   );
  },
 }),
 ac = D(
  {
   autoDraw: Boolean,
   autoDrawDuration: [Number, String],
   autoDrawEasing: { type: String, default: 'ease' },
   color: String,
   gradient: { type: Array, default: () => [] },
   gradientDirection: {
    type: String,
    validator: (e) => ['top', 'bottom', 'left', 'right'].includes(e),
    default: 'top',
   },
   height: { type: [String, Number], default: 75 },
   labels: { type: Array, default: () => [] },
   labelSize: { type: [Number, String], default: 7 },
   lineWidth: { type: [String, Number], default: 4 },
   id: String,
   itemValue: { type: String, default: 'value' },
   modelValue: { type: Array, default: () => [] },
   min: [String, Number],
   max: [String, Number],
   padding: { type: [String, Number], default: 8 },
   showLabels: Boolean,
   smooth: Boolean,
   width: { type: [Number, String], default: 300 },
  },
  'Line'
 ),
 lc = D({ autoLineWidth: Boolean, ...ac() }, 'VBarline'),
 nr = $()({
  name: 'VBarline',
  props: lc(),
  setup(e, n) {
   let { slots: t } = n;
   const a = je(),
    l = y(() => e.id || `barline-${a}`),
    i = y(() => Number(e.autoDrawDuration) || 500),
    o = y(() => !!(e.showLabels || e.labels.length > 0 || (t != null && t.label))),
    r = y(() => parseFloat(e.lineWidth) || 4),
    s = y(() => Math.max(e.modelValue.length * r.value, Number(e.width))),
    c = y(() => ({ minX: 0, maxX: s.value, minY: 0, maxY: parseInt(e.height, 10) })),
    d = y(() => e.modelValue.map((g) => Le(g, e.itemValue, g)));
   function f(g, h) {
    const { minX: S, maxX: k, minY: I, maxY: B } = h,
     w = g.length;
    let V = e.max != null ? Number(e.max) : Math.max(...g),
     C = e.min != null ? Number(e.min) : Math.min(...g);
    C > 0 && e.min == null && (C = 0), V < 0 && e.max == null && (V = 0);
    const P = k / w,
     x = (B - I) / (V - C || 1),
     _ = B - Math.abs(C * x);
    return g.map((T, A) => {
     const p = Math.abs(x * T);
     return { x: S + A * P, y: _ - p + +(T < 0) * p, height: p, value: T };
    });
   }
   const m = y(() => {
     const g = [],
      h = f(d.value, c.value),
      S = h.length;
     for (let k = 0; g.length < S; k++) {
      const I = h[k];
      let B = e.labels[k];
      B || (B = typeof I == 'object' ? I.value : I), g.push({ x: I.x, value: String(B) });
     }
     return g;
    }),
    v = y(() => f(d.value, c.value)),
    b = y(() => (Math.abs(v.value[0].x - v.value[1].x) - r.value) / 2);
   R(() => {
    const g = e.gradient.slice().length ? e.gradient.slice().reverse() : [''];
    return u('svg', { display: 'block' }, [
     u('defs', null, [
      u(
       'linearGradient',
       {
        id: l.value,
        gradientUnits: 'userSpaceOnUse',
        x1: e.gradientDirection === 'left' ? '100%' : '0',
        y1: e.gradientDirection === 'top' ? '100%' : '0',
        x2: e.gradientDirection === 'right' ? '100%' : '0',
        y2: e.gradientDirection === 'bottom' ? '100%' : '0',
       },
       [
        g.map((h, S) =>
         u('stop', { offset: S / Math.max(g.length - 1, 1), 'stop-color': h || 'currentColor' }, null)
        ),
       ]
      ),
     ]),
     u('clipPath', { id: `${l.value}-clip` }, [
      v.value.map((h) =>
       u(
        'rect',
        {
         x: h.x + b.value,
         y: h.y,
         width: r.value,
         height: h.height,
         rx: typeof e.smooth == 'number' ? e.smooth : e.smooth ? 2 : 0,
         ry: typeof e.smooth == 'number' ? e.smooth : e.smooth ? 2 : 0,
        },
        [
         e.autoDraw &&
          u(ie, null, [
           u(
            'animate',
            { attributeName: 'y', from: h.y + h.height, to: h.y, dur: `${i.value}ms`, fill: 'freeze' },
            null
           ),
           u(
            'animate',
            { attributeName: 'height', from: '0', to: h.height, dur: `${i.value}ms`, fill: 'freeze' },
            null
           ),
          ]),
        ]
       )
      ),
     ]),
     o.value &&
      u(
       'g',
       {
        key: 'labels',
        style: { textAnchor: 'middle', dominantBaseline: 'mathematical', fill: 'currentColor' },
       },
       [
        m.value.map((h, S) => {
         var k;
         return u(
          'text',
          {
           x: h.x + b.value + r.value / 2,
           y: parseInt(e.height, 10) - 2 + (parseInt(e.labelSize, 10) || 7 * 0.75),
           'font-size': Number(e.labelSize) || 7,
          },
          [((k = t.label) == null ? void 0 : k.call(t, { index: S, value: h.value })) ?? h.value]
         );
        }),
       ]
      ),
     u('g', { 'clip-path': `url(#${l.value}-clip)`, fill: `url(#${l.value})` }, [
      u(
       'rect',
       { x: 0, y: 0, width: Math.max(e.modelValue.length * r.value, Number(e.width)), height: e.height },
       null
      ),
     ]),
    ]);
   });
  },
 });
function Pb(e, n) {
 let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
  a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 75;
 if (e.length === 0) return '';
 const l = e.shift(),
  i = e[e.length - 1];
 return (
  (t ? `M${l.x} ${a - l.x + 2} L${l.x} ${l.y}` : `M${l.x} ${l.y}`) +
  e
   .map((o, r) => {
    const s = e[r + 1],
     c = e[r - 1] || l,
     d = s && Ib(s, o, c);
    if (!s || d) return `L${o.x} ${o.y}`;
    const f = Math.min(ar(c, o), ar(s, o)),
     v = f / 2 < n ? f / 2 : n,
     b = lr(c, o, v),
     g = lr(s, o, v);
    return `L${b.x} ${b.y}S${o.x} ${o.y} ${g.x} ${g.y}`;
   })
   .join('') +
  (t ? `L${i.x} ${a - l.x + 2} Z` : '')
 );
}
function ya(e) {
 return parseInt(e, 10);
}
function Ib(e, n, t) {
 return ya(e.x + t.x) === ya(2 * n.x) && ya(e.y + t.y) === ya(2 * n.y);
}
function ar(e, n) {
 return Math.sqrt(Math.pow(n.x - e.x, 2) + Math.pow(n.y - e.y, 2));
}
function lr(e, n, t) {
 const a = { x: e.x - n.x, y: e.y - n.y },
  l = Math.sqrt(a.x * a.x + a.y * a.y),
  i = { x: a.x / l, y: a.y / l };
 return { x: n.x + i.x * t, y: n.y + i.y * t };
}
const ic = D({ fill: Boolean, ...ac() }, 'VTrendline'),
 ir = $()({
  name: 'VTrendline',
  props: ic(),
  setup(e, n) {
   let { slots: t } = n;
   const a = je(),
    l = y(() => e.id || `trendline-${a}`),
    i = y(() => Number(e.autoDrawDuration) || (e.fill ? 500 : 2e3)),
    o = j(0),
    r = j(null);
   function s(h, S) {
    const { minX: k, maxX: I, minY: B, maxY: w } = S,
     V = h.length,
     C = e.max != null ? Number(e.max) : Math.max(...h),
     P = e.min != null ? Number(e.min) : Math.min(...h),
     x = (I - k) / (V - 1),
     _ = (w - B) / (C - P || 1);
    return h.map((T, A) => ({ x: k + A * x, y: w - (T - P) * _, value: T }));
   }
   const c = y(() => !!(e.showLabels || e.labels.length > 0 || (t != null && t.label))),
    d = y(() => parseFloat(e.lineWidth) || 4),
    f = y(() => Number(e.width)),
    m = y(() => {
     const h = Number(e.padding);
     return { minX: h, maxX: f.value - h, minY: h, maxY: parseInt(e.height, 10) - h };
    }),
    v = y(() => e.modelValue.map((h) => Le(h, e.itemValue, h))),
    b = y(() => {
     const h = [],
      S = s(v.value, m.value),
      k = S.length;
     for (let I = 0; h.length < k; I++) {
      const B = S[I];
      let w = e.labels[I];
      w || (w = typeof B == 'object' ? B.value : B), h.push({ x: B.x, value: String(w) });
     }
     return h;
    });
   X(
    () => e.modelValue,
    async () => {
     if ((await he(), !e.autoDraw || !r.value)) return;
     const h = r.value,
      S = h.getTotalLength();
     e.fill
      ? ((h.style.transformOrigin = 'bottom center'),
        (h.style.transition = 'none'),
        (h.style.transform = 'scaleY(0)'),
        h.getBoundingClientRect(),
        (h.style.transition = `transform ${i.value}ms ${e.autoDrawEasing}`),
        (h.style.transform = 'scaleY(1)'))
      : ((h.style.strokeDasharray = `${S}`),
        (h.style.strokeDashoffset = `${S}`),
        h.getBoundingClientRect(),
        (h.style.transition = `stroke-dashoffset ${i.value}ms ${e.autoDrawEasing}`),
        (h.style.strokeDashoffset = '0')),
      (o.value = S);
    },
    { immediate: !0 }
   );
   function g(h) {
    return Pb(s(v.value, m.value), e.smooth ? 8 : Number(e.smooth), h, parseInt(e.height, 10));
   }
   R(() => {
    var S;
    const h = e.gradient.slice().length ? e.gradient.slice().reverse() : [''];
    return u('svg', { display: 'block', 'stroke-width': parseFloat(e.lineWidth) ?? 4 }, [
     u('defs', null, [
      u(
       'linearGradient',
       {
        id: l.value,
        gradientUnits: 'userSpaceOnUse',
        x1: e.gradientDirection === 'left' ? '100%' : '0',
        y1: e.gradientDirection === 'top' ? '100%' : '0',
        x2: e.gradientDirection === 'right' ? '100%' : '0',
        y2: e.gradientDirection === 'bottom' ? '100%' : '0',
       },
       [
        h.map((k, I) =>
         u('stop', { offset: I / Math.max(h.length - 1, 1), 'stop-color': k || 'currentColor' }, null)
        ),
       ]
      ),
     ]),
     c.value &&
      u(
       'g',
       {
        key: 'labels',
        style: { textAnchor: 'middle', dominantBaseline: 'mathematical', fill: 'currentColor' },
       },
       [
        b.value.map((k, I) => {
         var B;
         return u(
          'text',
          {
           x: k.x + d.value / 2 + d.value / 2,
           y: parseInt(e.height, 10) - 4 + (parseInt(e.labelSize, 10) || 7 * 0.75),
           'font-size': Number(e.labelSize) || 7,
          },
          [((B = t.label) == null ? void 0 : B.call(t, { index: I, value: k.value })) ?? k.value]
         );
        }),
       ]
      ),
     u(
      'path',
      {
       ref: r,
       d: g(e.fill),
       fill: e.fill ? `url(#${l.value})` : 'none',
       stroke: e.fill ? 'none' : `url(#${l.value})`,
      },
      null
     ),
     e.fill &&
      u(
       'path',
       { d: g(!1), fill: 'none', stroke: e.color ?? ((S = e.gradient) == null ? void 0 : S[0]) },
       null
      ),
    ]);
   });
  },
 }),
 _b = D({ type: { type: String, default: 'trend' }, ...lc(), ...ic() }, 'VSparkline'),
 Tb = $()({
  name: 'VSparkline',
  props: _b(),
  setup(e, n) {
   let { slots: t } = n;
   const { textColorClasses: a, textColorStyles: l } = Ge(M(e, 'color')),
    i = y(() => !!(e.showLabels || e.labels.length > 0 || (t != null && t.label))),
    o = y(() => {
     let r = parseInt(e.height, 10);
     return i.value && (r += parseInt(e.labelSize, 10) * 1.5), r;
    });
   R(() => {
    const r = e.type === 'trend' ? ir : nr,
     s = e.type === 'trend' ? ir.filterProps(e) : nr.filterProps(e);
    return u(
     r,
     z(
      {
       key: e.type,
       class: a.value,
       style: l.value,
       viewBox: `0 0 ${e.width} ${parseInt(o.value, 10)}`,
      },
      s
     ),
     t
    );
   });
  },
 }),
 Ab = D(
  {
   ...J(),
   ...Hu({
    offset: 8,
    minWidth: 0,
    openDelay: 0,
    closeDelay: 100,
    location: 'top center',
    transition: 'scale-transition',
   }),
  },
  'VSpeedDial'
 ),
 Bb = $()({
  name: 'VSpeedDial',
  props: Ab(),
  emits: { 'update:modelValue': (e) => !0 },
  setup(e, n) {
   let { slots: t } = n;
   const a = le(e, 'modelValue'),
    l = j(),
    i = y(() => {
     const [r, s = 'center'] = e.location.split(' ');
     return `${r} ${s}`;
    }),
    o = y(() => ({ [`v-speed-dial__content--${i.value.replace(' ', '-')}`]: !0 }));
   return (
    R(() => {
     const r = Tn.filterProps(e);
     return u(
      Tn,
      z(r, {
       modelValue: a.value,
       'onUpdate:modelValue': (s) => (a.value = s),
       class: e.class,
       style: e.style,
       contentClass: ['v-speed-dial__content', o.value],
       location: i.value,
       ref: l,
       transition: 'fade-transition',
      }),
      {
       ...t,
       default: (s) =>
        u(
         fe,
         { defaults: { VBtn: { size: 'small' } } },
         {
          default: () => [
           u(
            Xe,
            { appear: !0, group: !0, transition: e.transition },
            {
             default: () => {
              var c;
              return [(c = t.default) == null ? void 0 : c.call(t, s)];
             },
            }
           ),
          ],
         }
        ),
      }
     );
    }),
    {}
   );
  },
 }),
 Zi = Symbol.for('vuetify:v-stepper'),
 oc = D(
  {
   color: String,
   disabled: { type: [Boolean, String], default: !1 },
   prevText: { type: String, default: '$vuetify.stepper.prev' },
   nextText: { type: String, default: '$vuetify.stepper.next' },
  },
  'VStepperActions'
 ),
 rc = $()({
  name: 'VStepperActions',
  props: oc(),
  emits: { 'click:prev': () => !0, 'click:next': () => !0 },
  setup(e, n) {
   let { emit: t, slots: a } = n;
   const { t: l } = $e();
   function i() {
    t('click:prev');
   }
   function o() {
    t('click:next');
   }
   return (
    R(() => {
     const r = { onClick: i },
      s = { onClick: o };
     return u('div', { class: 'v-stepper-actions' }, [
      u(
       fe,
       {
        defaults: {
         VBtn: { disabled: ['prev', !0].includes(e.disabled), text: l(e.prevText), variant: 'text' },
        },
       },
       {
        default: () => {
         var c;
         return [((c = a.prev) == null ? void 0 : c.call(a, { props: r })) ?? u(ye, r, null)];
        },
       }
      ),
      u(
       fe,
       {
        defaults: {
         VBtn: {
          color: e.color,
          disabled: ['next', !0].includes(e.disabled),
          text: l(e.nextText),
          variant: 'tonal',
         },
        },
       },
       {
        default: () => {
         var c;
         return [((c = a.next) == null ? void 0 : c.call(a, { props: s })) ?? u(ye, s, null)];
        },
       }
      ),
     ]);
    }),
    {}
   );
  },
 }),
 uc = Pt('v-stepper-header'),
 Db = D(
  {
   color: String,
   title: String,
   subtitle: String,
   complete: Boolean,
   completeIcon: { type: String, default: '$complete' },
   editable: Boolean,
   editIcon: { type: String, default: '$edit' },
   error: Boolean,
   errorIcon: { type: String, default: '$error' },
   icon: String,
   ripple: { type: [Boolean, Object], default: !0 },
   rules: { type: Array, default: () => [] },
  },
  'StepperItem'
 ),
 pb = D({ ...Db(), ...dn() }, 'VStepperItem'),
 sc = $()({
  name: 'VStepperItem',
  directives: { Ripple: pt },
  props: pb(),
  emits: { 'group:selected': (e) => !0 },
  setup(e, n) {
   let { slots: t } = n;
   const a = vn(e, Zi, !0),
    l = y(() => (a == null ? void 0 : a.value.value) ?? e.value),
    i = y(() => e.rules.every((m) => m() === !0)),
    o = y(() => !e.disabled && e.editable),
    r = y(() => !e.disabled && e.editable),
    s = y(() => e.error || !i.value),
    c = y(() => e.complete || (e.rules.length > 0 && i.value)),
    d = y(() =>
     s.value
      ? e.errorIcon
      : c.value
        ? e.completeIcon
        : a.isSelected.value && e.editable
          ? e.editIcon
          : e.icon
    ),
    f = y(() => ({
     canEdit: r.value,
     hasError: s.value,
     hasCompleted: c.value,
     title: e.title,
     subtitle: e.subtitle,
     step: l.value,
     value: e.value,
    }));
   return (
    R(() => {
     var h, S, k;
     const m = (!a || a.isSelected.value || c.value || r.value) && !s.value && !e.disabled,
      v = !!(e.title != null || t.title),
      b = !!(e.subtitle != null || t.subtitle);
     function g() {
      a == null || a.toggle();
     }
     return Ae(
      u(
       'button',
       {
        class: [
         'v-stepper-item',
         {
          'v-stepper-item--complete': c.value,
          'v-stepper-item--disabled': e.disabled,
          'v-stepper-item--error': s.value,
         },
         a == null ? void 0 : a.selectedClass.value,
        ],
        disabled: !e.editable,
        onClick: g,
       },
       [
        o.value && zt(!0, 'v-stepper-item'),
        u(
         vt,
         {
          key: 'stepper-avatar',
          class: 'v-stepper-item__avatar',
          color: m ? e.color : void 0,
          size: 24,
         },
         {
          default: () => {
           var I;
           return [
            ((I = t.icon) == null ? void 0 : I.call(t, f.value)) ??
             (d.value ? u(be, { icon: d.value }, null) : l.value),
           ];
          },
         }
        ),
        u('div', { class: 'v-stepper-item__content' }, [
         v &&
          u('div', { key: 'title', class: 'v-stepper-item__title' }, [
           ((h = t.title) == null ? void 0 : h.call(t, f.value)) ?? e.title,
          ]),
         b &&
          u('div', { key: 'subtitle', class: 'v-stepper-item__subtitle' }, [
           ((S = t.subtitle) == null ? void 0 : S.call(t, f.value)) ?? e.subtitle,
          ]),
         (k = t.default) == null ? void 0 : k.call(t, f.value),
        ]),
       ]
      ),
      [[ot('ripple'), e.ripple && e.editable, null]]
     );
    }),
    {}
   );
  },
 }),
 Eb = D(
  { ...Ee(qa(), ['continuous', 'nextIcon', 'prevIcon', 'showArrows', 'touch', 'mandatory']) },
  'VStepperWindow'
 ),
 cc = $()({
  name: 'VStepperWindow',
  props: Eb(),
  emits: { 'update:modelValue': (e) => !0 },
  setup(e, n) {
   let { slots: t } = n;
   const a = ge(Zi, null),
    l = le(e, 'modelValue'),
    i = y({
     get() {
      var o;
      return l.value != null || !a
       ? l.value
       : (o = a.items.value.find((r) => a.selected.value.includes(r.id))) == null
         ? void 0
         : o.value;
     },
     set(o) {
      l.value = o;
     },
    });
   return (
    R(() => {
     const o = Qt.filterProps(e);
     return u(
      Qt,
      z({ _as: 'VStepperWindow' }, o, {
       modelValue: i.value,
       'onUpdate:modelValue': (r) => (i.value = r),
       class: ['v-stepper-window', e.class],
       style: e.style,
       mandatory: !1,
       touch: !1,
      }),
      t
     );
    }),
    {}
   );
  },
 }),
 Mb = D({ ...Xa() }, 'VStepperWindowItem'),
 dc = $()({
  name: 'VStepperWindowItem',
  props: Mb(),
  setup(e, n) {
   let { slots: t } = n;
   return (
    R(() => {
     const a = en.filterProps(e);
     return u(
      en,
      z({ _as: 'VStepperWindowItem' }, a, { class: ['v-stepper-window-item', e.class], style: e.style }),
      t
     );
    }),
    {}
   );
  },
 }),
 $b = D(
  {
   altLabels: Boolean,
   bgColor: String,
   completeIcon: String,
   editIcon: String,
   editable: Boolean,
   errorIcon: String,
   hideActions: Boolean,
   items: { type: Array, default: () => [] },
   itemTitle: { type: String, default: 'title' },
   itemValue: { type: String, default: 'value' },
   nonLinear: Boolean,
   flat: Boolean,
   ...mn(),
  },
  'Stepper'
 ),
 Fb = D(
  {
   ...$b(),
   ...cn({ mandatory: 'force', selectedClass: 'v-stepper-item--selected' }),
   ...Za(),
   ...Da(oc(), ['prevText', 'nextText']),
  },
  'VStepper'
 ),
 Lb = $()({
  name: 'VStepper',
  props: Fb(),
  emits: { 'update:modelValue': (e) => !0 },
  setup(e, n) {
   let { slots: t } = n;
   const { items: a, next: l, prev: i, selected: o } = Ht(e, Zi),
    { displayClasses: r, mobile: s } = gt(e),
    {
     completeIcon: c,
     editIcon: d,
     errorIcon: f,
     color: m,
     editable: v,
     prevText: b,
     nextText: g,
    } = Aa(e),
    h = y(() =>
     e.items.map((I, B) => {
      const w = Le(I, e.itemTitle, I),
       V = Le(I, e.itemValue, B + 1);
      return { title: w, value: V, raw: I };
     })
    ),
    S = y(() => a.value.findIndex((I) => o.value.includes(I.id))),
    k = y(() =>
     e.disabled ? e.disabled : S.value === 0 ? 'prev' : S.value === a.value.length - 1 ? 'next' : !1
    );
   return (
    Be({
     VStepperItem: { editable: v, errorIcon: f, completeIcon: c, editIcon: d, prevText: b, nextText: g },
     VStepperActions: { color: m, disabled: k, prevText: b, nextText: g },
    }),
    R(() => {
     const I = tn.filterProps(e),
      B = !!(t.header || e.items.length),
      w = e.items.length > 0,
      V = !e.hideActions && !!(w || t.actions);
     return u(
      tn,
      z(I, {
       color: e.bgColor,
       class: [
        'v-stepper',
        {
         'v-stepper--alt-labels': e.altLabels,
         'v-stepper--flat': e.flat,
         'v-stepper--non-linear': e.nonLinear,
         'v-stepper--mobile': s.value,
        },
        r.value,
        e.class,
       ],
       style: e.style,
      }),
      {
       default: () => {
        var C, P;
        return [
         B &&
          u(
           uc,
           { key: 'stepper-header' },
           {
            default: () => [
             h.value.map((x, _) => {
              let { raw: T, ...A } = x;
              return u(ie, null, [
               !!_ && u(la, null, null),
               u(sc, A, {
                default: t[`header-item.${A.value}`] ?? t.header,
                icon: t.icon,
                title: t.title,
                subtitle: t.subtitle,
               }),
              ]);
             }),
            ],
           }
          ),
         w &&
          u(
           cc,
           { key: 'stepper-window' },
           {
            default: () => [
             h.value.map((x) =>
              u(
               dc,
               { value: x.value },
               {
                default: () => {
                 var _, T;
                 return (
                  ((_ = t[`item.${x.value}`]) == null ? void 0 : _.call(t, x)) ??
                  ((T = t.item) == null ? void 0 : T.call(t, x))
                 );
                },
               }
              )
             ),
            ],
           }
          ),
         (C = t.default) == null ? void 0 : C.call(t, { prev: i, next: l }),
         V &&
          (((P = t.actions) == null ? void 0 : P.call(t, { next: l, prev: i })) ??
           u(rc, { key: 'stepper-actions', 'onClick:prev': i, 'onClick:next': l }, t)),
        ];
       },
      }
     );
    }),
    { prev: i, next: l }
   );
  },
 }),
 Ob = D(
  {
   indeterminate: Boolean,
   inset: Boolean,
   flat: Boolean,
   loading: { type: [Boolean, String], default: !1 },
   ...Mt(),
   ...Ha(),
  },
  'VSwitch'
 ),
 Rb = $()({
  name: 'VSwitch',
  inheritAttrs: !1,
  props: Ob(),
  emits: {
   'update:focused': (e) => !0,
   'update:modelValue': (e) => !0,
   'update:indeterminate': (e) => !0,
  },
  setup(e, n) {
   let { attrs: t, slots: a } = n;
   const l = le(e, 'indeterminate'),
    i = le(e, 'modelValue'),
    { loaderClasses: o } = Qn(e),
    { isFocused: r, focus: s, blur: c } = Et(e),
    d = j(),
    f = ke && window.matchMedia('(forced-colors: active)').matches,
    m = y(() => (typeof e.loading == 'string' && e.loading !== '' ? e.loading : e.color)),
    v = je(),
    b = y(() => e.id || `switch-${v}`);
   function g() {
    l.value && (l.value = !1);
   }
   function h(S) {
    var k, I;
    S.stopPropagation(),
     S.preventDefault(),
     (I = (k = d.value) == null ? void 0 : k.input) == null || I.click();
   }
   return (
    R(() => {
     const [S, k] = Nt(t),
      I = Ue.filterProps(e),
      B = Ot.filterProps(e);
     return u(
      Ue,
      z(
       {
        class: [
         'v-switch',
         { 'v-switch--flat': e.flat },
         { 'v-switch--inset': e.inset },
         { 'v-switch--indeterminate': l.value },
         o.value,
         e.class,
        ],
       },
       S,
       I,
       {
        modelValue: i.value,
        'onUpdate:modelValue': (w) => (i.value = w),
        id: b.value,
        focused: r.value,
        style: e.style,
       }
      ),
      {
       ...a,
       default: (w) => {
        let { id: V, messagesId: C, isDisabled: P, isReadonly: x, isValid: _ } = w;
        const T = { model: i, isValid: _ };
        return u(
         Ot,
         z(
          { ref: d },
          B,
          {
           modelValue: i.value,
           'onUpdate:modelValue': [(A) => (i.value = A), g],
           id: V.value,
           'aria-describedby': C.value,
           type: 'checkbox',
           'aria-checked': l.value ? 'mixed' : void 0,
           disabled: P.value,
           readonly: x.value,
           onFocus: s,
           onBlur: c,
          },
          k
         ),
         {
          ...a,
          default: (A) => {
           let { backgroundColorClasses: p, backgroundColorStyles: F } = A;
           return u(
            'div',
            { class: ['v-switch__track', f ? void 0 : p.value], style: F.value, onClick: h },
            [
             a['track-true'] &&
              u('div', { key: 'prepend', class: 'v-switch__track-true' }, [a['track-true'](T)]),
             a['track-false'] &&
              u('div', { key: 'append', class: 'v-switch__track-false' }, [a['track-false'](T)]),
            ]
           );
          },
          input: (A) => {
           let { inputNode: p, icon: F, backgroundColorClasses: O, backgroundColorStyles: W } = A;
           return u(ie, null, [
            p,
            u(
             'div',
             {
              class: [
               'v-switch__thumb',
               { 'v-switch__thumb--filled': F || e.loading },
               e.inset || f ? void 0 : O.value,
              ],
              style: e.inset ? void 0 : W.value,
             },
             [
              a.thumb
               ? u(
                  fe,
                  { defaults: { VIcon: { icon: F, size: 'x-small' } } },
                  { default: () => [a.thumb({ ...T, icon: F })] }
                 )
               : u(mi, null, {
                  default: () => [
                   e.loading
                    ? u(
                       ea,
                       { name: 'v-switch', active: !0, color: _.value === !1 ? void 0 : m.value },
                       {
                        default: (te) =>
                         a.loader
                          ? a.loader(te)
                          : u(
                             _n,
                             {
                              active: te.isActive,
                              color: te.color,
                              indeterminate: !0,
                              size: '16',
                              width: '2',
                             },
                             null
                            ),
                       }
                      )
                    : F && u(be, { key: String(F), icon: F, size: 'x-small' }, null),
                  ],
                 }),
             ]
            ),
           ]);
          },
         }
        );
       },
      }
     );
    }),
    {}
   );
  },
 }),
 Nb = D(
  {
   color: String,
   height: [Number, String],
   window: Boolean,
   ...J(),
   ...Oe(),
   ...on(),
   ..._e(),
   ...de(),
   ...me(),
  },
  'VSystemBar'
 ),
 zb = $()({
  name: 'VSystemBar',
  props: Nb(),
  setup(e, n) {
   let { slots: t } = n;
   const { themeClasses: a } = Se(e),
    { backgroundColorClasses: l, backgroundColorStyles: i } = we(M(e, 'color')),
    { elevationClasses: o } = Ye(e),
    { roundedClasses: r } = De(e),
    { ssrBootStyles: s } = un(),
    c = y(() => e.height ?? (e.window ? 32 : 24)),
    { layoutItemStyles: d } = rn({
     id: e.name,
     order: y(() => parseInt(e.order, 10)),
     position: K('top'),
     layoutSize: c,
     elementSize: c,
     active: y(() => !0),
     absolute: M(e, 'absolute'),
    });
   return (
    R(() =>
     u(
      e.tag,
      {
       class: [
        'v-system-bar',
        { 'v-system-bar--window': e.window },
        a.value,
        l.value,
        o.value,
        r.value,
        e.class,
       ],
       style: [i.value, d.value, s.value, e.style],
      },
      t
     )
    ),
    {}
   );
  },
 }),
 Ji = Symbol.for('vuetify:v-tabs'),
 Hb = D(
  {
   fixed: Boolean,
   sliderColor: String,
   hideSlider: Boolean,
   direction: { type: String, default: 'horizontal' },
   ...Ee(za({ selectedClass: 'v-tab--selected', variant: 'text' }), [
    'active',
    'block',
    'flat',
    'location',
    'position',
    'symbol',
   ]),
  },
  'VTab'
 ),
 vc = $()({
  name: 'VTab',
  props: Hb(),
  setup(e, n) {
   let { slots: t, attrs: a } = n;
   const { textColorClasses: l, textColorStyles: i } = Ge(e, 'sliderColor'),
    o = j(),
    r = j(),
    s = y(() => e.direction === 'horizontal'),
    c = y(() => {
     var f, m;
     return ((m = (f = o.value) == null ? void 0 : f.group) == null ? void 0 : m.isSelected.value) ?? !1;
    });
   function d(f) {
    var v, b;
    let { value: m } = f;
    if (m) {
     const g =
       (b = (v = o.value) == null ? void 0 : v.$el.parentElement) == null
        ? void 0
        : b.querySelector('.v-tab--selected .v-tab__slider'),
      h = r.value;
     if (!g || !h) return;
     const S = getComputedStyle(g).color,
      k = g.getBoundingClientRect(),
      I = h.getBoundingClientRect(),
      B = s.value ? 'x' : 'y',
      w = s.value ? 'X' : 'Y',
      V = s.value ? 'right' : 'bottom',
      C = s.value ? 'width' : 'height',
      P = k[B],
      x = I[B],
      _ = P > x ? k[V] - I[V] : k[B] - I[B],
      T =
       Math.sign(_) > 0
        ? s.value
          ? 'right'
          : 'bottom'
        : Math.sign(_) < 0
          ? s.value
            ? 'left'
            : 'top'
          : 'center',
      p = (Math.abs(_) + (Math.sign(_) < 0 ? k[C] : I[C])) / Math.max(k[C], I[C]) || 0,
      F = k[C] / I[C] || 0,
      O = 1.5;
     Kt(
      h,
      {
       backgroundColor: [S, 'currentcolor'],
       transform: [
        `translate${w}(${_}px) scale${w}(${F})`,
        `translate${w}(${_ / O}px) scale${w}(${(p - 1) / O + 1})`,
        'none',
       ],
       transformOrigin: Array(3).fill(T),
      },
      { duration: 225, easing: zn }
     );
    }
   }
   return (
    R(() => {
     const f = ye.filterProps(e);
     return u(
      ye,
      z(
       {
        symbol: Ji,
        ref: o,
        class: ['v-tab', e.class],
        style: e.style,
        tabindex: c.value ? 0 : -1,
        role: 'tab',
        'aria-selected': String(c.value),
        active: !1,
       },
       f,
       a,
       { block: e.fixed, maxWidth: e.fixed ? 300 : void 0, 'onGroup:selected': d }
      ),
      {
       ...t,
       default: () => {
        var m;
        return u(ie, null, [
         ((m = t.default) == null ? void 0 : m.call(t)) ?? e.text,
         !e.hideSlider && u('div', { ref: r, class: ['v-tab__slider', l.value], style: i.value }, null),
        ]);
       },
      }
     );
    }),
    ht({}, o)
   );
  },
 }),
 Wb = D(
  { ...Ee(qa(), ['continuous', 'nextIcon', 'prevIcon', 'showArrows', 'touch', 'mandatory']) },
  'VTabsWindow'
 ),
 fc = $()({
  name: 'VTabsWindow',
  props: Wb(),
  emits: { 'update:modelValue': (e) => !0 },
  setup(e, n) {
   let { slots: t } = n;
   const a = ge(Ji, null),
    l = le(e, 'modelValue'),
    i = y({
     get() {
      var o;
      return l.value != null || !a
       ? l.value
       : (o = a.items.value.find((r) => a.selected.value.includes(r.id))) == null
         ? void 0
         : o.value;
     },
     set(o) {
      l.value = o;
     },
    });
   return (
    R(() => {
     const o = Qt.filterProps(e);
     return u(
      Qt,
      z({ _as: 'VTabsWindow' }, o, {
       modelValue: i.value,
       'onUpdate:modelValue': (r) => (i.value = r),
       class: ['v-tabs-window', e.class],
       style: e.style,
       mandatory: !1,
       touch: !1,
      }),
      t
     );
    }),
    {}
   );
  },
 }),
 jb = D({ ...Xa() }, 'VTabsWindowItem'),
 mc = $()({
  name: 'VTabsWindowItem',
  props: jb(),
  setup(e, n) {
   let { slots: t } = n;
   return (
    R(() => {
     const a = en.filterProps(e);
     return u(
      en,
      z({ _as: 'VTabsWindowItem' }, a, { class: ['v-tabs-window-item', e.class], style: e.style }),
      t
     );
    }),
    {}
   );
  },
 });
function Yb(e) {
 return e ? e.map((n) => (Rn(n) ? n : { text: n, value: n })) : [];
}
const Gb = D(
  {
   alignTabs: { type: String, default: 'start' },
   color: String,
   fixedTabs: Boolean,
   items: { type: Array, default: () => [] },
   stacked: Boolean,
   bgColor: String,
   grow: Boolean,
   height: { type: [Number, String], default: void 0 },
   hideSlider: Boolean,
   sliderColor: String,
   ...Ci({ mandatory: 'force', selectedClass: 'v-tab-item--selected' }),
   ...He(),
   ...de(),
  },
  'VTabs'
 ),
 Ub = $()({
  name: 'VTabs',
  props: Gb(),
  emits: { 'update:modelValue': (e) => !0 },
  setup(e, n) {
   let { attrs: t, slots: a } = n;
   const l = le(e, 'modelValue'),
    i = y(() => Yb(e.items)),
    { densityClasses: o } = Je(e),
    { backgroundColorClasses: r, backgroundColorStyles: s } = we(M(e, 'bgColor')),
    { scopeId: c } = gn();
   return (
    Be({
     VTab: {
      color: M(e, 'color'),
      direction: M(e, 'direction'),
      stacked: M(e, 'stacked'),
      fixed: M(e, 'fixedTabs'),
      sliderColor: M(e, 'sliderColor'),
      hideSlider: M(e, 'hideSlider'),
     },
    }),
    R(() => {
     const d = Kn.filterProps(e),
      f = !!(a.window || e.items.length > 0);
     return u(ie, null, [
      u(
       Kn,
       z(
        d,
        {
         modelValue: l.value,
         'onUpdate:modelValue': (m) => (l.value = m),
         class: [
          'v-tabs',
          `v-tabs--${e.direction}`,
          `v-tabs--align-tabs-${e.alignTabs}`,
          { 'v-tabs--fixed-tabs': e.fixedTabs, 'v-tabs--grow': e.grow, 'v-tabs--stacked': e.stacked },
          o.value,
          r.value,
          e.class,
         ],
         style: [{ '--v-tabs-height': Z(e.height) }, s.value, e.style],
         role: 'tablist',
         symbol: Ji,
        },
        c,
        t
       ),
       {
        default: () => {
         var m;
         return [
          ((m = a.default) == null ? void 0 : m.call(a)) ??
           i.value.map((v) => {
            var b;
            return (
             ((b = a.tab) == null ? void 0 : b.call(a, { item: v })) ??
             u(vc, z(v, { key: v.text, value: v.value }), {
              default: a[`tab.${v.value}`]
               ? () => {
                  var g;
                  return (g = a[`tab.${v.value}`]) == null ? void 0 : g.call(a, { item: v });
                 }
               : void 0,
             })
            );
           }),
         ];
        },
       }
      ),
      f &&
       u(
        fc,
        z({ modelValue: l.value, 'onUpdate:modelValue': (m) => (l.value = m), key: 'tabs-window' }, c),
        {
         default: () => {
          var m;
          return [
           i.value.map((v) => {
            var b;
            return (
             ((b = a.item) == null ? void 0 : b.call(a, { item: v })) ??
             u(
              mc,
              { value: v.value },
              {
               default: () => {
                var g;
                return (g = a[`item.${v.value}`]) == null ? void 0 : g.call(a, { item: v });
               },
              }
             )
            );
           }),
           (m = a.window) == null ? void 0 : m.call(a),
          ];
         },
        }
       ),
     ]);
    }),
    {}
   );
  },
 }),
 Kb = D(
  {
   autoGrow: Boolean,
   autofocus: Boolean,
   counter: [Boolean, Number, String],
   counterValue: Function,
   prefix: String,
   placeholder: String,
   persistentPlaceholder: Boolean,
   persistentCounter: Boolean,
   noResize: Boolean,
   rows: { type: [Number, String], default: 5, validator: (e) => !isNaN(parseFloat(e)) },
   maxRows: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) },
   suffix: String,
   modelModifiers: Object,
   ...Ee(Mt(), ['centerAffix']),
   ...Ee(oa(), ['centerAffix']),
  },
  'VTextarea'
 ),
 qb = $()({
  name: 'VTextarea',
  directives: { Intersect: Jn },
  inheritAttrs: !1,
  props: Kb(),
  emits: {
   'click:control': (e) => !0,
   'mousedown:control': (e) => !0,
   'update:focused': (e) => !0,
   'update:modelValue': (e) => !0,
  },
  setup(e, n) {
   let { attrs: t, emit: a, slots: l } = n;
   const i = le(e, 'modelValue'),
    { isFocused: o, focus: r, blur: s } = Et(e),
    c = y(() =>
     typeof e.counterValue == 'function' ? e.counterValue(i.value) : (i.value || '').toString().length
    ),
    d = y(() => {
     if (t.maxlength) return t.maxlength;
     if (!(!e.counter || (typeof e.counter != 'number' && typeof e.counter != 'string')))
      return e.counter;
    });
   function f(T, A) {
    var p, F;
    !e.autofocus || !T || (F = (p = A[0].target) == null ? void 0 : p.focus) == null || F.call(p);
   }
   const m = j(),
    v = j(),
    b = K(''),
    g = j(),
    h = y(() => e.persistentPlaceholder || o.value || e.active);
   function S() {
    var T;
    g.value !== document.activeElement && ((T = g.value) == null || T.focus()), o.value || r();
   }
   function k(T) {
    S(), a('click:control', T);
   }
   function I(T) {
    a('mousedown:control', T);
   }
   function B(T) {
    T.stopPropagation(),
     S(),
     he(() => {
      (i.value = ''), oi(e['onClick:clear'], T);
     });
   }
   function w(T) {
    var p;
    const A = T.target;
    if (((i.value = A.value), (p = e.modelModifiers) != null && p.trim)) {
     const F = [A.selectionStart, A.selectionEnd];
     he(() => {
      (A.selectionStart = F[0]), (A.selectionEnd = F[1]);
     });
    }
   }
   const V = j(),
    C = j(+e.rows),
    P = y(() => ['plain', 'underlined'].includes(e.variant));
   pe(() => {
    e.autoGrow || (C.value = +e.rows);
   });
   function x() {
    e.autoGrow &&
     he(() => {
      if (!V.value || !v.value) return;
      const T = getComputedStyle(V.value),
       A = getComputedStyle(v.value.$el),
       p =
        parseFloat(T.getPropertyValue('--v-field-padding-top')) +
        parseFloat(T.getPropertyValue('--v-input-padding-top')) +
        parseFloat(T.getPropertyValue('--v-field-padding-bottom')),
       F = V.value.scrollHeight,
       O = parseFloat(T.lineHeight),
       W = Math.max(
        parseFloat(e.rows) * O + p,
        parseFloat(A.getPropertyValue('--v-input-control-height'))
       ),
       te = parseFloat(e.maxRows) * O + p || 1 / 0,
       N = Fe(F ?? 0, W, te);
      (C.value = Math.floor((N - p) / O)), (b.value = Z(N));
     });
   }
   at(x), X(i, x), X(() => e.rows, x), X(() => e.maxRows, x), X(() => e.density, x);
   let _;
   return (
    X(V, (T) => {
     T ? ((_ = new ResizeObserver(x)), _.observe(V.value)) : _ == null || _.disconnect();
    }),
    nt(() => {
     _ == null || _.disconnect();
    }),
    R(() => {
     const T = !!(l.counter || e.counter || e.counterValue),
      A = !!(T || l.details),
      [p, F] = Nt(t),
      { modelValue: O, ...W } = Ue.filterProps(e),
      te = Di(e);
     return u(
      Ue,
      z(
       {
        ref: m,
        modelValue: i.value,
        'onUpdate:modelValue': (N) => (i.value = N),
        class: [
         'v-textarea v-text-field',
         {
          'v-textarea--prefixed': e.prefix,
          'v-textarea--suffixed': e.suffix,
          'v-text-field--prefixed': e.prefix,
          'v-text-field--suffixed': e.suffix,
          'v-textarea--auto-grow': e.autoGrow,
          'v-textarea--no-resize': e.noResize || e.autoGrow,
          'v-input--plain-underlined': P.value,
         },
         e.class,
        ],
        style: e.style,
       },
       p,
       W,
       { centerAffix: !1, focused: o.value }
      ),
      {
       ...l,
       default: (N) => {
        let { id: H, isDisabled: E, isDirty: L, isReadonly: G, isValid: ae } = N;
        return u(
         $n,
         z(
          {
           ref: v,
           style: { '--v-textarea-control-height': b.value },
           onClick: k,
           onMousedown: I,
           'onClick:clear': B,
           'onClick:prependInner': e['onClick:prependInner'],
           'onClick:appendInner': e['onClick:appendInner'],
          },
          te,
          {
           id: H.value,
           active: h.value || L.value,
           centerAffix: !1,
           dirty: L.value || e.dirty,
           disabled: E.value,
           focused: o.value,
           error: ae.value === !1,
          }
         ),
         {
          ...l,
          default: (oe) => {
           let {
            props: { class: q, ...Y },
           } = oe;
           return u(ie, null, [
            e.prefix && u('span', { class: 'v-text-field__prefix' }, [e.prefix]),
            Ae(
             u(
              'textarea',
              z(
               {
                ref: g,
                class: q,
                value: i.value,
                onInput: w,
                autofocus: e.autofocus,
                readonly: G.value,
                disabled: E.value,
                placeholder: e.placeholder,
                rows: e.rows,
                name: e.name,
                onFocus: S,
                onBlur: s,
               },
               Y,
               F
              ),
              null
             ),
             [[ot('intersect'), { handler: f }, null, { once: !0 }]]
            ),
            e.autoGrow &&
             Ae(
              u(
               'textarea',
               {
                class: [q, 'v-textarea__sizer'],
                id: `${Y.id}-sizer`,
                'onUpdate:modelValue': (Q) => (i.value = Q),
                ref: V,
                readonly: !0,
                'aria-hidden': 'true',
               },
               null
              ),
              [[$c, i.value]]
             ),
            e.suffix && u('span', { class: 'v-text-field__suffix' }, [e.suffix]),
           ]);
          },
         }
        );
       },
       details: A
        ? (N) => {
           var H;
           return u(ie, null, [
            (H = l.details) == null ? void 0 : H.call(l, N),
            T &&
             u(ie, null, [
              u('span', null, null),
              u(
               Ga,
               {
                active: e.persistentCounter || o.value,
                value: c.value,
                max: d.value,
                disabled: e.disabled,
               },
               l.counter
              ),
             ]),
           ]);
          }
        : void 0,
      }
     );
    }),
    ht({}, m, v, g)
   );
  },
 }),
 Xb = D({ withBackground: Boolean, ...J(), ...me(), ...de() }, 'VThemeProvider'),
 Zb = $()({
  name: 'VThemeProvider',
  props: Xb(),
  setup(e, n) {
   let { slots: t } = n;
   const { themeClasses: a } = Se(e);
   return () => {
    var l;
    return e.withBackground
     ? u(
        e.tag,
        { class: ['v-theme-provider', a.value, e.class], style: e.style },
        {
         default: () => {
          var i;
          return [(i = t.default) == null ? void 0 : i.call(t)];
         },
        }
       )
     : (l = t.default) == null
       ? void 0
       : l.call(t);
   };
  },
 }),
 Jb = D(
  {
   dotColor: String,
   fillDot: Boolean,
   hideDot: Boolean,
   icon: ue,
   iconColor: String,
   lineColor: String,
   ...J(),
   ..._e(),
   ...It(),
   ...Oe(),
  },
  'VTimelineDivider'
 ),
 Qb = $()({
  name: 'VTimelineDivider',
  props: Jb(),
  setup(e, n) {
   let { slots: t } = n;
   const { sizeClasses: a, sizeStyles: l } = Bn(e, 'v-timeline-divider__dot'),
    { backgroundColorStyles: i, backgroundColorClasses: o } = we(M(e, 'dotColor')),
    { roundedClasses: r } = De(e, 'v-timeline-divider__dot'),
    { elevationClasses: s } = Ye(e),
    { backgroundColorClasses: c, backgroundColorStyles: d } = we(M(e, 'lineColor'));
   return (
    R(() =>
     u(
      'div',
      {
       class: ['v-timeline-divider', { 'v-timeline-divider--fill-dot': e.fillDot }, e.class],
       style: e.style,
      },
      [
       u('div', { class: ['v-timeline-divider__before', c.value], style: d.value }, null),
       !e.hideDot &&
        u(
         'div',
         { key: 'dot', class: ['v-timeline-divider__dot', s.value, r.value, a.value], style: l.value },
         [
          u('div', { class: ['v-timeline-divider__inner-dot', o.value, r.value], style: i.value }, [
           t.default
            ? u(
               fe,
               {
                key: 'icon-defaults',
                disabled: !e.icon,
                defaults: { VIcon: { color: e.iconColor, icon: e.icon, size: e.size } },
               },
               t.default
              )
            : u(be, { key: 'icon', color: e.iconColor, icon: e.icon, size: e.size }, null),
          ]),
         ]
        ),
       u('div', { class: ['v-timeline-divider__after', c.value], style: d.value }, null),
      ]
     )
    ),
    {}
   );
  },
 }),
 gc = D(
  {
   density: String,
   dotColor: String,
   fillDot: Boolean,
   hideDot: Boolean,
   hideOpposite: { type: Boolean, default: void 0 },
   icon: ue,
   iconColor: String,
   lineInset: [Number, String],
   ...J(),
   ...Ne(),
   ...Oe(),
   ..._e(),
   ...It(),
   ...de(),
  },
  'VTimelineItem'
 ),
 eS = $()({
  name: 'VTimelineItem',
  props: gc(),
  setup(e, n) {
   let { slots: t } = n;
   const { dimensionStyles: a } = ze(e),
    l = K(0),
    i = j();
   return (
    X(
     i,
     (o) => {
      var r;
      o &&
       (l.value =
        ((r = o.$el.querySelector('.v-timeline-divider__dot')) == null
         ? void 0
         : r.getBoundingClientRect().width) ?? 0);
     },
     { flush: 'post' }
    ),
    R(() => {
     var o, r;
     return u(
      'div',
      {
       class: ['v-timeline-item', { 'v-timeline-item--fill-dot': e.fillDot }, e.class],
       style: [
        {
         '--v-timeline-dot-size': Z(l.value),
         '--v-timeline-line-inset': e.lineInset
          ? `calc(var(--v-timeline-dot-size) / 2 + ${Z(e.lineInset)})`
          : Z(0),
        },
        e.style,
       ],
      },
      [
       u('div', { class: 'v-timeline-item__body', style: a.value }, [
        (o = t.default) == null ? void 0 : o.call(t),
       ]),
       u(
        Qb,
        {
         ref: i,
         hideDot: e.hideDot,
         icon: e.icon,
         iconColor: e.iconColor,
         size: e.size,
         elevation: e.elevation,
         dotColor: e.dotColor,
         fillDot: e.fillDot,
         rounded: e.rounded,
        },
        { default: t.icon }
       ),
       e.density !== 'compact' &&
        u('div', { class: 'v-timeline-item__opposite' }, [
         !e.hideOpposite && ((r = t.opposite) == null ? void 0 : r.call(t)),
        ]),
      ]
     );
    }),
    {}
   );
  },
 }),
 tS = D(
  {
   align: { type: String, default: 'center', validator: (e) => ['center', 'start'].includes(e) },
   direction: {
    type: String,
    default: 'vertical',
    validator: (e) => ['vertical', 'horizontal'].includes(e),
   },
   justify: { type: String, default: 'auto', validator: (e) => ['auto', 'center'].includes(e) },
   side: { type: String, validator: (e) => e == null || ['start', 'end'].includes(e) },
   lineThickness: { type: [String, Number], default: 2 },
   lineColor: String,
   truncateLine: { type: String, validator: (e) => ['start', 'end', 'both'].includes(e) },
   ...Da(gc({ lineInset: 0 }), [
    'dotColor',
    'fillDot',
    'hideOpposite',
    'iconColor',
    'lineInset',
    'size',
   ]),
   ...J(),
   ...He(),
   ...de(),
   ...me(),
  },
  'VTimeline'
 ),
 nS = $()({
  name: 'VTimeline',
  props: tS(),
  setup(e, n) {
   let { slots: t } = n;
   const { themeClasses: a } = Se(e),
    { densityClasses: l } = Je(e),
    { rtlClasses: i } = Re();
   Be({
    VTimelineDivider: { lineColor: M(e, 'lineColor') },
    VTimelineItem: {
     density: M(e, 'density'),
     dotColor: M(e, 'dotColor'),
     fillDot: M(e, 'fillDot'),
     hideOpposite: M(e, 'hideOpposite'),
     iconColor: M(e, 'iconColor'),
     lineColor: M(e, 'lineColor'),
     lineInset: M(e, 'lineInset'),
     size: M(e, 'size'),
    },
   });
   const o = y(() => {
     const s = e.side ? e.side : e.density !== 'default' ? 'end' : null;
     return s && `v-timeline--side-${s}`;
    }),
    r = y(() => {
     const s = ['v-timeline--truncate-line-start', 'v-timeline--truncate-line-end'];
     switch (e.truncateLine) {
      case 'both':
       return s;
      case 'start':
       return s[0];
      case 'end':
       return s[1];
      default:
       return null;
     }
    });
   return (
    R(() =>
     u(
      e.tag,
      {
       class: [
        'v-timeline',
        `v-timeline--${e.direction}`,
        `v-timeline--align-${e.align}`,
        `v-timeline--justify-${e.justify}`,
        r.value,
        { 'v-timeline--inset-line': !!e.lineInset },
        a.value,
        l.value,
        o.value,
        i.value,
        e.class,
       ],
       style: [{ '--v-timeline-line-thickness': Z(e.lineThickness) }, e.style],
      },
      t
     )
    ),
    {}
   );
  },
 }),
 aS = D({ ...J(), ...mt({ variant: 'text' }) }, 'VToolbarItems'),
 lS = $()({
  name: 'VToolbarItems',
  props: aS(),
  setup(e, n) {
   let { slots: t } = n;
   return (
    Be({ VBtn: { color: M(e, 'color'), height: 'inherit', variant: M(e, 'variant') } }),
    R(() => {
     var a;
     return u('div', { class: ['v-toolbar-items', e.class], style: e.style }, [
      (a = t.default) == null ? void 0 : a.call(t),
     ]);
    }),
    {}
   );
  },
 }),
 iS = D(
  {
   id: String,
   text: String,
   ...Ee(
    ia({
     closeOnBack: !1,
     location: 'end',
     locationStrategy: 'connected',
     eager: !0,
     minWidth: 0,
     offset: 10,
     openOnClick: !1,
     openOnHover: !0,
     origin: 'auto',
     scrim: !1,
     scrollStrategy: 'reposition',
     transition: !1,
    }),
    ['absolute', 'persistent']
   ),
  },
  'VTooltip'
 ),
 hc = $()({
  name: 'VTooltip',
  props: iS(),
  emits: { 'update:modelValue': (e) => !0 },
  setup(e, n) {
   let { slots: t } = n;
   const a = le(e, 'modelValue'),
    { scopeId: l } = gn(),
    i = je(),
    o = y(() => e.id || `v-tooltip-${i}`),
    r = j(),
    s = y(() => (e.location.split(' ').length > 1 ? e.location : e.location + ' center')),
    c = y(() =>
     e.origin === 'auto' ||
     e.origin === 'overlap' ||
     e.origin.split(' ').length > 1 ||
     e.location.split(' ').length > 1
      ? e.origin
      : e.origin + ' center'
    ),
    d = y(() => (e.transition ? e.transition : a.value ? 'scale-transition' : 'fade-transition')),
    f = y(() => z({ 'aria-describedby': o.value }, e.activatorProps));
   return (
    R(() => {
     const m = wt.filterProps(e);
     return u(
      wt,
      z(
       { ref: r, class: ['v-tooltip', e.class], style: e.style, id: o.value },
       m,
       {
        modelValue: a.value,
        'onUpdate:modelValue': (v) => (a.value = v),
        transition: d.value,
        absolute: !0,
        location: s.value,
        origin: c.value,
        persistent: !0,
        role: 'tooltip',
        activatorProps: f.value,
        _disableGlobalStack: !0,
       },
       l
      ),
      {
       activator: t.activator,
       default: function () {
        var h;
        for (var v = arguments.length, b = new Array(v), g = 0; g < v; g++) b[g] = arguments[g];
        return ((h = t.default) == null ? void 0 : h.call(t, ...b)) ?? e.text;
       },
      }
     );
    }),
    ht({}, r)
   );
  },
 }),
 oS = $()({
  name: 'VValidation',
  props: fu(),
  emits: { 'update:modelValue': (e) => !0 },
  setup(e, n) {
   let { slots: t } = n;
   const a = mu(e, 'validation');
   return () => {
    var l;
    return (l = t.default) == null ? void 0 : l.call(t, a);
   };
  },
 }),
 xS = Object.freeze({
  __proto__: null,
  VAlert: Fv,
  VAlertTitle: ou,
  VApp: Rd,
  VAppBar: iv,
  VAppBarNavIcon: pv,
  VAppBarTitle: Ev,
  VAutocomplete: dm,
  VAvatar: vt,
  VBadge: fm,
  VBanner: hm,
  VBannerActions: Gu,
  VBannerText: Uu,
  VBottomNavigation: bm,
  VBottomSheet: km,
  VBreadcrumbs: Vm,
  VBreadcrumbsDivider: qu,
  VBreadcrumbsItem: Xu,
  VBtn: ye,
  VBtnGroup: _l,
  VBtnToggle: dv,
  VCard: Am,
  VCardActions: Zu,
  VCardItem: es,
  VCardSubtitle: Ju,
  VCardText: ts,
  VCardTitle: Qu,
  VCarousel: Om,
  VCarouselItem: Nm,
  VCheckbox: Yv,
  VCheckboxBtn: At,
  VChip: Mn,
  VChipGroup: nf,
  VClassIcon: ki,
  VCode: zm,
  VCol: ny,
  VColorPicker: Ag,
  VCombobox: pg,
  VComponentIcon: Al,
  VConfirmEdit: kh,
  VContainer: Jh,
  VCounter: Ga,
  VDataIterator: Bh,
  VDataTable: Gh,
  VDataTableFooter: Xn,
  VDataTableHeaders: nn,
  VDataTableRow: Gi,
  VDataTableRows: an,
  VDataTableServer: Xh,
  VDataTableVirtual: Kh,
  VDatePicker: gy,
  VDatePickerControls: Ul,
  VDatePickerHeader: Kl,
  VDatePickerMonth: ql,
  VDatePickerMonths: Xl,
  VDatePickerYears: Zl,
  VDefaultsProvider: fe,
  VDialog: Ol,
  VDialogBottomTransition: Wd,
  VDialogTopTransition: jd,
  VDialogTransition: $a,
  VDivider: la,
  VEmptyState: yy,
  VExpandTransition: Fa,
  VExpandXTransition: hi,
  VExpansionPanel: by,
  VExpansionPanelText: Jl,
  VExpansionPanelTitle: Ql,
  VExpansionPanels: xy,
  VFab: Cy,
  VFabTransition: Hd,
  VFadeTransition: jn,
  VField: $n,
  VFieldLabel: Ln,
  VFileInput: Py,
  VFooter: _y,
  VForm: Ay,
  VHover: Dy,
  VIcon: be,
  VImg: Tt,
  VInfiniteScroll: Ey,
  VInput: Ue,
  VItem: Fy,
  VItemGroup: $y,
  VKbd: Ly,
  VLabel: En,
  VLayout: Ry,
  VLayoutItem: zy,
  VLazy: Wy,
  VLigatureIcon: mv,
  VList: Ya,
  VListGroup: Ml,
  VListImg: If,
  VListItem: Bt,
  VListItemAction: Tf,
  VListItemMedia: Bf,
  VListItemSubtitle: Tu,
  VListItemTitle: Au,
  VListSubheader: Bu,
  VLocaleProvider: Yy,
  VMain: Uy,
  VMenu: Tn,
  VMessages: du,
  VNavigationDrawer: nb,
  VNoSsr: ab,
  VOtpInput: ib,
  VOverlay: wt,
  VPagination: Yl,
  VParallax: ub,
  VProgressCircular: _n,
  VProgressLinear: Ra,
  VRadio: cb,
  VRadioGroup: vb,
  VRangeSlider: mb,
  VRating: hb,
  VResponsive: Pl,
  VRow: sy,
  VScaleTransition: mi,
  VScrollXReverseTransition: Gd,
  VScrollXTransition: Yd,
  VScrollYReverseTransition: Kd,
  VScrollYTransition: Ud,
  VSelect: Mi,
  VSelectionControl: Ot,
  VSelectionControlGroup: uu,
  VSheet: tn,
  VSkeletonLoader: kb,
  VSlideGroup: Kn,
  VSlideGroupItem: xb,
  VSlideXReverseTransition: Xd,
  VSlideXTransition: qd,
  VSlideYReverseTransition: Zd,
  VSlideYTransition: gi,
  VSlider: Wl,
  VSnackbar: Vb,
  VSpacer: Us,
  VSparkline: Tb,
  VSpeedDial: Bb,
  VStepper: Lb,
  VStepperActions: rc,
  VStepperHeader: uc,
  VStepperItem: sc,
  VStepperWindow: cc,
  VStepperWindowItem: dc,
  VSvgIcon: Si,
  VSwitch: Rb,
  VSystemBar: zb,
  VTab: vc,
  VTable: ln,
  VTabs: Ub,
  VTabsWindow: fc,
  VTabsWindowItem: mc,
  VTextField: Jt,
  VTextarea: qb,
  VThemeProvider: Zb,
  VTimeline: nS,
  VTimelineItem: eS,
  VToolbar: Il,
  VToolbarItems: lS,
  VToolbarTitle: fi,
  VTooltip: hc,
  VValidation: oS,
  VVirtualScroll: Ka,
  VWindow: Qt,
  VWindowItem: en,
 });
function rS() {
 let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
 const { blueprint: n, ...t } = e,
  a = qe(n, t),
  { aliases: l = {}, components: i = {}, directives: o = {} } = a,
  r = Sd(a.defaults),
  s = Uv(a.display, a.ssr),
  c = Ld(a.theme),
  d = hv(a.icons),
  f = Dd(a.locale),
  m = yh(a.date, f),
  v = qv(a.goTo, f);
 return {
  install: (g) => {
   for (const h in o) g.directive(h, o[h]);
   for (const h in i) g.component(h, i[h]);
   for (const h in l) g.component(h, rt({ ...l[h], name: h, aliasName: l[h].name }));
   if (
    (c.install(g),
    g.provide(Pn, r),
    g.provide(pl, s),
    g.provide(Wn, c),
    g.provide(Tl, d),
    g.provide(In, f),
    g.provide(vs, m.options),
    g.provide(Uo, m.instance),
    g.provide(gu, v),
    ke && a.ssr)
   )
    if (g.$nuxt)
     g.$nuxt.hook('app:suspense:resolve', () => {
      s.update();
     });
    else {
     const { mount: h } = g;
     g.mount = function () {
      const S = h(...arguments);
      return he(() => s.update()), (g.mount = h), S;
     };
    }
   je.reset(),
    g.mixin({
     computed: {
      $vuetify() {
       return ct({
        defaults: Sn.call(this, Pn),
        display: Sn.call(this, pl),
        theme: Sn.call(this, Wn),
        icons: Sn.call(this, Tl),
        locale: Sn.call(this, In),
        date: Sn.call(this, Uo),
       });
      },
     },
    });
  },
  defaults: r,
  display: s,
  theme: c,
  icons: d,
  locale: f,
  date: m,
  goTo: v,
 };
}
const uS = '3.6.12';
rS.version = uS;
function Sn(e) {
 var a, l;
 const n = this.$,
  t =
   ((a = n.parent) == null ? void 0 : a.provides) ??
   ((l = n.vnode.appContext) == null ? void 0 : l.provides);
 if (t && e in t) return t[e];
}
function sS(e, n) {
 const t = n.modifiers || {},
  a = n.value,
  { once: l, immediate: i, ...o } = t,
  r = !Object.keys(o).length,
  { handler: s, options: c } =
   typeof a == 'object'
    ? a
    : {
       handler: a,
       options: {
        attributes: (o == null ? void 0 : o.attr) ?? r,
        characterData: (o == null ? void 0 : o.char) ?? r,
        childList: (o == null ? void 0 : o.child) ?? r,
        subtree: (o == null ? void 0 : o.sub) ?? r,
       },
      },
  d = new MutationObserver(function () {
   let f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    m = arguments.length > 1 ? arguments[1] : void 0;
   s == null || s(f, m), l && yc(e, n);
  });
 i && (s == null || s([], d)),
  (e._mutate = Object(e._mutate)),
  (e._mutate[n.instance.$.uid] = { observer: d }),
  d.observe(e, c);
}
function yc(e, n) {
 var t;
 (t = e._mutate) != null &&
  t[n.instance.$.uid] &&
  (e._mutate[n.instance.$.uid].observer.disconnect(), delete e._mutate[n.instance.$.uid]);
}
const cS = { mounted: sS, unmounted: yc };
function dS(e, n) {
 var l, i;
 const t = n.value,
  a = { passive: !((l = n.modifiers) != null && l.active) };
 window.addEventListener('resize', t, a),
  (e._onResize = Object(e._onResize)),
  (e._onResize[n.instance.$.uid] = { handler: t, options: a }),
  ((i = n.modifiers) != null && i.quiet) || t();
}
function vS(e, n) {
 var l;
 if (!((l = e._onResize) != null && l[n.instance.$.uid])) return;
 const { handler: t, options: a } = e._onResize[n.instance.$.uid];
 window.removeEventListener('resize', t, a), delete e._onResize[n.instance.$.uid];
}
const fS = { mounted: dS, unmounted: vS };
function bc(e, n) {
 const { self: t = !1 } = n.modifiers ?? {},
  a = n.value,
  l = (typeof a == 'object' && a.options) || { passive: !0 },
  i = typeof a == 'function' || 'handleEvent' in a ? a : a.handler,
  o = t ? e : n.arg ? document.querySelector(n.arg) : window;
 o &&
  (o.addEventListener('scroll', i, l),
  (e._onScroll = Object(e._onScroll)),
  (e._onScroll[n.instance.$.uid] = { handler: i, options: l, target: t ? void 0 : o }));
}
function Sc(e, n) {
 var i;
 if (!((i = e._onScroll) != null && i[n.instance.$.uid])) return;
 const { handler: t, options: a, target: l = e } = e._onScroll[n.instance.$.uid];
 l.removeEventListener('scroll', t, a), delete e._onScroll[n.instance.$.uid];
}
function mS(e, n) {
 n.value !== n.oldValue && (Sc(e, n), bc(e, n));
}
const gS = { mounted: bc, unmounted: Sc, updated: mS };
function hS(e, n) {
 const t = typeof e == 'string' ? Fc(e) : e,
  a = yS(t, n);
 return {
  mounted: a,
  updated: a,
  unmounted(l) {
   cr(null, l);
  },
 };
}
function yS(e, n) {
 return function (t, a, l) {
  var f, m, v;
  const i = typeof n == 'function' ? n(a) : n,
   o = ((f = a.value) == null ? void 0 : f.text) ?? a.value ?? (i == null ? void 0 : i.text),
   r = Rn(a.value) ? a.value : {},
   s = () => o ?? t.innerHTML,
   c =
    (l.ctx === a.instance.$
     ? (m = bS(l, a.instance.$)) == null
       ? void 0
       : m.provides
     : (v = l.ctx) == null
       ? void 0
       : v.provides) ?? a.instance.$.provides,
   d = Rt(e, z(i, r), s);
  (d.appContext = Object.assign(Object.create(null), a.instance.$.appContext, { provides: c })),
   cr(d, t);
 };
}
function bS(e, n) {
 const t = new Set(),
  a = (i) => {
   var o, r;
   for (const s of i) {
    if (!s) continue;
    if (s === e) return !0;
    t.add(s);
    let c;
    if (
     (s.suspense
      ? (c = a([s.ssContent]))
      : Array.isArray(s.children)
        ? (c = a(s.children))
        : (o = s.component) != null &&
          o.vnode &&
          (c = a([(r = s.component) == null ? void 0 : r.subTree])),
     c)
    )
     return c;
    t.delete(s);
   }
   return !1;
  };
 if (!a([n.subTree])) throw new Error('Could not find original vnode');
 const l = Array.from(t).reverse();
 for (const i of l) if (i.component) return i.component;
 return n;
}
const SS = hS(hc, (e) => {
  var n;
  return {
   activator: 'parent',
   location: ((n = e.arg) == null ? void 0 : n.replace('-', ' ')) ?? 'top',
   text: typeof e.value == 'boolean' ? void 0 : e.value,
  };
 }),
 wS = Object.freeze({
  __proto__: null,
  ClickOutside: zu,
  Intersect: Jn,
  Mutate: cS,
  Resize: fS,
  Ripple: pt,
  Scroll: gS,
  Tooltip: SS,
  Touch: $i,
 });
export { ye as V, Jt as a, Ay as b, rS as c, vv as d, xS as e, wS as f, fv as m };
