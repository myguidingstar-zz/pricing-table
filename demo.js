 function not (x) { return !x; }; var contains$QUEST$ = function (m, k) { return (k in m); }; var boolean$STAR$ = function (x) { return ((null != x) && (false !== x)); }; var get$QUOT$ = function (m, k, not_found) { return ((((("string" === typeof(m)) || (m instanceof String)) && m[k]) || not_found) || (((k in m) && m[k]) || not_found)); }; var get = get$QUOT$; var true$QUEST$ = function (expr) { return (true === expr); }; var false$QUEST$ = function (expr) { return (false === expr); }; var nil$QUEST$ = function (expr) { return (void(0) === expr); }; var first = function (x) { if ((void(0) === x)) { return void(0); } else { return x[0]; }; }; var second = function (x) { if ((void(0) === x)) { return void(0); } else { return x[1]; }; }; var last = function (x) { if ((void(0) === x)) { return void(0); } else { return x[(count(x) - 1)]; }; }; var next = function (x) { if (empty$QUEST$(x)) { return void(0); } else { if ((1 < count(x))) { return x.slice(1); }; }; }; var rest = function (x) { if ((void(0) === x)) { return []; } else { return x.slice(1); }; }; var nnext = function (x) { if ((1 < count(((1 < count(x)) ? x.slice(1) : void(0))))) { return ((1 < count(x)) ? x.slice(1) : void(0)).slice(1); }; }; var vector$QUEST$ = function (x) { return (x instanceof Array); }; var string$QUEST$ = function (x) { return (("string" === typeof(x)) || (x instanceof String)); }; var number$QUEST$ = function (n) { return ("number" === typeof(n)); }; var zero$QUEST$ = function (x) { return (0 === x); }; var fn$QUEST$ = function (f) { return ("function" === typeof(f)); }; var inc = function (arg) { return (1 + arg); }; var dec = function (arg) { return (arg - 1); }; var count = function (x) { if (((x instanceof Array) || (("string" === typeof(x)) || (x instanceof String)))) { return x.length; } else { return keys(x).length; }; }; var empty$QUEST$ = function (coll) { return ((coll === "") || (void(0) === coll) || $EQ$$STAR$({}, coll) || $EQ$$STAR$([], coll)); }; var reduce$STAR$ = function (f, val, coll) { var c = count(coll); return (function () { for (var i = 0, r = val; true;) { if ((i < c)) { var _temp_1000 = [(i + 1),f(r, coll[i])];
 i = _temp_1000[0]; r = _temp_1000[1]; continue; } else { return r; }; break; } }).call(this); }; var reduce = function () { var args = arguments; switch (count(args)) { case 3: return (function () { var f = function (f, val, coll) { return reduce$STAR$(f, val, coll); }; return f.apply(0, args);  })();  case 2: return (function () { var f = function (f, coll) { return reduce$STAR$(f, coll[0], coll); }; return f.apply(0, args);  })();  }; }; var reductions$STAR$ = function (f, init, coll) { var c = count(coll), ret = []; (function () { for (var i = 0, r = init; true;) { if ((i < c)) { var _temp_1001 = [(i + 1),f((function(){  ret.push(r); return r;})(), coll[i])];
 i = _temp_1001[0]; r = _temp_1001[1]; continue; } else { return ret.push(r); }; break; } }).call(this); return ret; }; var reductions = function () { var args = arguments; switch (count(args)) { case 3: return (function () { var f = function (f, init, coll) { return reductions$STAR$(f, init, coll); }; return f.apply(0, args);  })();  case 2: return (function () { var f = function (f, coll) { return reductions$STAR$(f, coll[0], coll); }; return f.apply(0, args);  })();  }; }; var $STAR$gensym$STAR$ = 999; var gensym = function (prefix_string) { inc$EXCL$($STAR$gensym$STAR$); return str((prefix_string || "G__"), $STAR$gensym$STAR$); }; var subvec = function (v, start, end) { return v.slice(start, end); }; var map$QUEST$ = function (m) { return (m && !((typeof(m) in {'boolean' : true,'string' : true,'function' : true,'number' : true}) || (m instanceof Array) || (void(0) === m) || (null === m) || ("function" === typeof(m)) || (m instanceof RegExp))); }; var type = function (x) { if ((x instanceof Array)) { return 'vector'; } else { if ((("string" === typeof(x)) || (x instanceof String))) { return 'string'; } else { if (("number" === typeof(x))) { return 'number'; } else { if ((void(0) === x)) { return "nil"; } else { if ((null === x)) { return 'null'; } else { if (("boolean" === typeof(x))) { return 'boolean'; } else { if (("function" === typeof(x))) { return 'function'; } else { if ((x instanceof RegExp)) { return 'regexp'; } else { if ('else') { return 'map'; }; }; }; }; }; }; }; }; }; }; var map$STAR$ = function (f, arr) { var c = count(arr); return (function () { for (var r = [], i = 0; true;) { if ((i < c)) {  r.push(f(arr[i])); var _temp_1002 = [r,(i + 1)];
 r = _temp_1002[0]; i = _temp_1002[1]; continue; } else { return r; }; break; } }).call(this); }; var map = void(0); if (("function" === typeof(Array.prototype.map))) { map = function (f, coll) { return coll.map(f); }; } else { map = function (f, coll) { return map$STAR$(f, coll); }; }; var remove = function (pred, seq) { var c = count(seq); return (function () { for (var r = [], i = 0; true;) { if ((i < c)) {  if (pred(seq[i])) { void(0); } else {  r.push(seq[i]); }; var _temp_1003 = [r,(1 + i)];
 r = _temp_1003[0]; i = _temp_1003[1]; continue; } else { return r; }; break; } }).call(this); }; var filter$STAR$ = function (pred, arr) { var c = count(arr); return (function () { for (var r = [], i = 0; true;) { if ((i < c)) {  if (pred(arr[i])) { r.push(arr[i]); }; var _temp_1004 = [r,(i + 1)];
 r = _temp_1004[0]; i = _temp_1004[1]; continue; } else { return r; }; break; } }).call(this); }; var filter = void(0); if (("function" === typeof(Array.prototype.filter))) { filter = function (pred, coll) { return coll.filter(pred); }; } else { filter = function (pred, coll) { return filter$STAR$(pred, coll); }; }; var merge = function () { var _temp_1005 = Array.prototype.slice.call(arguments), ms = _temp_1005.slice(0); return ((function () { var ret = {}; (function () { var coll482 = ms; for (var k483 in coll482) { var m = coll482[k483]; (function () { var coll484 = m; for (var k in coll484) { var v = coll484[k]; ret[k] = v; }; })(); }; })(); return ret;  })() || {}); }; var select_keys = function (m, ks) { var m1 = {}; (function () { var coll485 = ks; for (var k486 in coll485) { var k = coll485[k486]; if (m.hasOwnProperty(k)) { m1[k] = m[k]; }; }; })(); return m1; }; var keys = function (m) { var ret487 = []; var coll488 = m; for (var k in coll488) { var v = coll488[k]; ret487.push(k); }; return ret487;; }; var vals = function (m) { var ret489 = []; var coll490 = m; for (var k in coll490) { var v = coll490[k]; ret489.push(v); }; return ret489;; }; var v$EQ$$STAR$ = function (x, y) { if ((count(x) === count(y))) { for (var a = x, b = y, c = count(x); true;) { if ((0 === c)) { return true; } else { if ($EQ$$STAR$(a[0], b[0])) { var _temp_1006 = [a.slice(1),b.slice(1),(c - 1)];
 a = _temp_1006[0]; b = _temp_1006[1]; c = _temp_1006[2]; continue; } else { return false; }; }; break; }; } else { return false; }; }; var m$EQ$$STAR$ = function (x, y) { var xkeys = keys(x).sort(); if ($EQ$$STAR$(xkeys, keys(y).sort())) { return (function () { for (var ks = xkeys, c = count(xkeys); true;) { if ($EQ$$STAR$(x[ks[0]], y[ks[0]])) { if ((0 === c)) { return true; } else { var _temp_1007 = [ks.slice(1),(c - 1)];
 ks = _temp_1007[0]; c = _temp_1007[1]; continue; }; } else { return false; }; break; } }).call(this); } else { return false; }; }; var $EQ$$STAR$ = function (x, y) { if ((x === y)) { return true; } else { if ((type(x) === type(y))) { if ((x instanceof Array)) { return v$EQ$$STAR$(x, y); } else { if (map$QUEST$(x)) { return m$EQ$$STAR$(x, y); } else { if ('else') { return false; }; }; }; } else { return false; }; }; }; var $EQ$$STAR$$STAR$ = function () { var _temp_1008 = Array.prototype.slice.call(arguments), x = _temp_1008[0], xs = _temp_1008.slice(1); for (var a = x, more = xs; true;) { if ((x === a)) { if (((1 < count(more)) ? more.slice(1) : void(0))) { var _temp_1009 = [more[0],((1 < count(more)) ? more.slice(1) : void(0))];
 a = _temp_1009[0]; more = _temp_1009[1]; continue; } else { return (x === more[0]); }; } else { return false; }; break; }; }; var $EQ$$QUOT$ = function () { var args = arguments; switch (count(args)) { case 0: return (function () { var f = function () { return true; }; return f.apply(0, args);  })();  case 1: return (function () { var f = function (x) { return true; }; return f.apply(0, args);  })();  case 2: return (function () { var f = function (x, y) { return $EQ$$STAR$(x, y); }; return f.apply(0, args);  })();  default: return (function () { var f = function () { var _temp_1010 = Array.prototype.slice.call(arguments), a = _temp_1010[0], b = _temp_1010[1], c = _temp_1010.slice(2); for (var x = a, y = b, more = c; true;) { if ($EQ$$STAR$(x, y)) { if (((1 < count(more)) ? more.slice(1) : void(0))) { var _temp_1011 = [y,more[0],((1 < count(more)) ? more.slice(1) : void(0))];
 x = _temp_1011[0]; y = _temp_1011[1]; more = _temp_1011[2]; continue; } else { return $EQ$$STAR$(y, more[0]); }; } else { return false; }; break; }; }; return f.apply(0, args);  })(); }; }; var $EQ$ = $EQ$$QUOT$; var not$EQ$ = function () { var args = arguments; switch (count(args)) { case 1: return (function () { var f = function (x) { return false; }; return f.apply(0, args);  })();  case 2: return (function () { var f = function (x, y) { return !$EQ$$STAR$(x, y); }; return f.apply(0, args);  })();  default: return (function () { var f = function () { var _temp_1012 = Array.prototype.slice.call(arguments), args = _temp_1012.slice(0); return !$EQ$.apply(0, args); }; return f.apply(0, args);  })(); }; }; var $PLUS$ = function () { var _temp_1013 = Array.prototype.slice.call(arguments), args = _temp_1013.slice(0); return reduce$STAR$(function (p1__491$HASH$, p2__492$HASH$) { return (p1__491$HASH$ + p2__492$HASH$); }, 0, args); }; var _ = function () { var _temp_1014 = Array.prototype.slice.call(arguments), args = _temp_1014.slice(0); return reduce$STAR$(function (p1__493$HASH$, p2__494$HASH$) { return (p1__493$HASH$ - p2__494$HASH$); }, 0, args); }; var $STAR$ = function () { var _temp_1015 = Array.prototype.slice.call(arguments), args = _temp_1015.slice(0); return reduce$STAR$(function (p1__495$HASH$, p2__496$HASH$) { return (p1__495$HASH$ * p2__496$HASH$); }, 1, args); }; var identity = function (x) { return x; }; var reverse = function (x) { return x.slice(0).reverse(); }; var compare = function (x, y) { if ((x === y)) { return 0; } else { if ((x > y)) { return 1; } else { if ((x < y)) { return -1; }; }; }; }; var int$STAR$ = function (x) { if (("number" === typeof(x))) { return (x | 0); }; }; var max = Math.max; var min = Math.min; var pos$QUEST$ = function (x) { return (("number" === typeof(x)) && (x > 0)); }; var neg$QUEST$ = function (x) { return (("number" === typeof(x)) && (x < 0)); }; var integer$QUEST$ = function (n) { return (n === int$STAR$(n)); }; var even$QUEST$ = function (n) { return (0 === (n % 2)); }; var odd$QUEST$ = function (n) { return (1 === (n % 2)); }; var rand = function () { var args = arguments; switch (count(args)) { case 0: return (function () { var f = function () { return Math.random(); }; return f.apply(0, args);  })();  case 1: return (function () { var f = function (n) { return (n * Math.random()); }; return f.apply(0, args);  })();  }; }; var quot = function (x, y) { return int$STAR$((x / y)); }; var complement = function (f) { return function () { var _temp_1016 = Array.prototype.slice.call(arguments), args = _temp_1016.slice(0); return !f.apply(0, args); }; }; var constantly = function (x) { return function () { return x; }; }; var conj = function () { var _temp_1017 = Array.prototype.slice.call(arguments), coll = _temp_1017[0], xs = _temp_1017.slice(1); if (empty$QUEST$(coll)) { return xs; } else { return coll.concat(xs); }; }; var cons = function (x, coll) { return [x].concat(coll); }; var assoc = function () { var _temp_1018 = Array.prototype.slice.call(arguments), m = _temp_1018[0], kvs = _temp_1018.slice(1); var ret = ((m instanceof Array) ? m.slice(0) : merge(m, {})); return (function () { for (var kv_tail = kvs; true;) { if (kv_tail) {  var _temp_1019 = kv_tail, k = _temp_1019[0], v = _temp_1019[1]; ret[k] = v; var _temp_1020 = [((1 < count(((1 < count(kv_tail)) ? kv_tail.slice(1) : void(0)))) ? ((1 < count(kv_tail)) ? kv_tail.slice(1) : void(0)).slice(1) : void(0))];
 kv_tail = _temp_1020[0]; continue; } else { return ret; }; break; } }).call(this); }; var dissoc = function () { var _temp_1021 = Array.prototype.slice.call(arguments), m = _temp_1021[0], ks = _temp_1021.slice(1); var ret = merge(m, {}); (function () { var coll497 = ks; for (var k498 in coll497) { var k = coll497[k498]; delete ret[k]; }; })(); return ret; }; var find = function (m, k) { if ((k in m)) { return [k,m[k]]; }; }; var every$QUEST$ = function (pred, coll) { if (empty$QUEST$(coll)) { return true; } else { if (pred(coll[0])) { return every$QUEST$(pred, ((1 < count(coll)) ? coll.slice(1) : void(0))); } else { if ('else') { return false; }; }; }; }; var some = function (pred, coll) { if (coll) {  return (pred(coll[0]) || some(pred, ((1 < count(coll)) ? coll.slice(1) : void(0)))); }; }; var concat = function () { var _temp_1022 = Array.prototype.slice.call(arguments), xs = _temp_1022.slice(0); for (var ret = [], xs_tail = xs; true;) { if (xs_tail) { var _temp_1023 = [ret.concat(xs_tail[0]),((1 < count(xs_tail)) ? xs_tail.slice(1) : void(0))];
 ret = _temp_1023[0]; xs_tail = _temp_1023[1]; continue; } else { return ret; }; break; }; }; var mapcat = function (f, coll) { return concat.apply(0, map(f, coll)); }; var drop = function (n, coll) { if (pos$QUEST$(n)) {  var temp__4092__auto__ = coll; if (temp__4092__auto__) {  return (function () { var s = temp__4092__auto__; return s.slice(n);  })(); };; }; }; var take = function (n, coll) { if (pos$QUEST$(n)) {  var temp__4092__auto__ = coll; if (temp__4092__auto__) {  return (function () { var s = temp__4092__auto__; return s.slice(0, n);  })(); };; }; }; var Cl2Set = function (coll) { var that = this; return (function () { var coll499 = coll; for (var k500 in coll499) { var k = coll499[k500]; that[k] = true; }; })(); }; var hash_set = function () { var _temp_1024 = Array.prototype.slice.call(arguments), ks = _temp_1024.slice(0); return new Cl2Set(ks); }; var set = function (coll) { return new Cl2Set(coll); }; var sort = function () { var args = arguments; switch (count(args)) { case 1: return (function () { var f = function (coll) { return Array.prototype.slice.call(coll, 0).sort(); }; return f.apply(0, args);  })();  case 2: return (function () { var f = function (comp, x) { return Array.prototype.slice.call(x, 0).sort(comp); }; return f.apply(0, args);  })();  }; }; var take_while = function (pred, coll) { var temp__4092__auto__ = coll; if (temp__4092__auto__) {  return (function () { var s = temp__4092__auto__; if (pred(s[0])) {  return conj(take_while(pred, s.slice(1)), s[0]); };  })(); };; }; var drop_last = function (n, coll) { return coll.slice(0, (coll.length - n)); }; var take_last = function (n, coll) { return coll.slice((coll.length - n)); }; var drop_while = function (pred, coll) { var step = function (pred, coll) { var s = coll; if ((s && pred(s[0]))) { return step(pred, s.slice(1)); } else { return s; }; }; return step(pred, coll); }; var cycle = function (coll, n) { for (var ret = [], n = n; true;) { if (zero$QUEST$(n)) { return ret; } else { var _temp_1025 = [ret.concat(coll),(n - 1)];
 ret = _temp_1025[0]; n = _temp_1025[1]; continue; }; break; }; }; var split_at = function (n, coll) { return [take(n, coll),drop(n, coll)]; }; var repeat = function (n, x) { for (var ret = [], n = n; true;) { if (zero$QUEST$(n)) { return ret; } else { var _temp_1026 = [conj(ret, x),(n - 1)];
 ret = _temp_1026[0]; n = _temp_1026[1]; continue; }; break; }; }; var iterate = function (f, x, n) { var ret = []; return cons(x, (function () { for (var v = x, i = (n - 1); true;) { if (zero$QUEST$(i)) { return ret; } else { var _temp_1027 = [(function () { var val = f(v); ret.push(val); return val;  })(),(i - 1)];
 v = _temp_1027[0]; i = _temp_1027[1]; continue; }; break; } }).call(this)); }; var split_with = function (pred, coll) { return [take_while(pred, coll),drop_while(pred, coll)]; }; var zipmap = function (keys, vals) { var map = {}; return (function () { for (var ks = keys, vs = vals; true;) { if ((ks && vs)) {  map[ks[0]] = vs[0]; var _temp_1028 = [((1 < count(ks)) ? ks.slice(1) : void(0)),((1 < count(vs)) ? vs.slice(1) : void(0))];
 ks = _temp_1028[0]; vs = _temp_1028[1]; continue; } else { return map; }; break; } }).call(this); }; var nthnext = function (coll, n) { for (var n = n, xs = coll; true;) { if ((xs && pos$QUEST$(n))) { var _temp_1029 = [(n - 1),((1 < count(xs)) ? xs.slice(1) : void(0))];
 n = _temp_1029[0]; xs = _temp_1029[1]; continue; } else { return xs; }; break; }; }; var nthrest = function (coll, n) { for (var n = n, xs = coll; true;) { if ((xs && pos$QUEST$(n))) { var _temp_1030 = [(n - 1),xs.slice(1)];
 n = _temp_1030[0]; xs = _temp_1030[1]; continue; } else { return xs; }; break; }; }; var rand_int = function (n) { return int$STAR$(rand(n)); }; var rand_nth = function (coll) { return coll[rand_int(count(coll))]; }; var range$STAR$ = function (start, end, step) { var ret = [], comp = (pos$QUEST$(step) ? function (p1__501$HASH$, p2__502$HASH$) { return (p1__501$HASH$ < p2__502$HASH$); } : function (p1__503$HASH$, p2__504$HASH$) { return (p1__503$HASH$ > p2__504$HASH$); }); return (function () { for (var i = start; true;) { if (comp(i, end)) {  ret.push(i); var _temp_1031 = [(i + step)];
 i = _temp_1031[0]; continue; } else { if (comp(i, end)) { return cons(ret, range$STAR$(i, end, step)); } else { return ret; }; }; break; } }).call(this); }; var range = function () { var args = arguments; switch (count(args)) { case 1: return (function () { var f = function (end) { return range$STAR$(0, end, 1); }; return f.apply(0, args);  })();  case 2: return (function () { var f = function (start, end) { return range$STAR$(start, end, 1); }; return f.apply(0, args);  })();  case 3: return (function () { var f = function (start, end, step) { return range$STAR$(start, end, step); }; return f.apply(0, args);  })();  }; }; var partition = function () { var args = arguments; switch (count(args)) { case 2: return (function () { var f = function (n, coll) { return partion(n, n, coll); }; return f.apply(0, args);  })();  case 3: return (function () { var f = function (n, step, coll) { var temp__4092__auto__ = coll; if (temp__4092__auto__) {  return (function () { var s = temp__4092__auto__; return (function () { var temp__4092__auto__ = take(n, s); if (temp__4092__auto__) {  return (function () { var p = temp__4092__auto__; if ($EQ$$STAR$(n, count(p))) { return cons(p, partition(n, step, nthrest(s, step))); } else { return []; };  })(); };  })();  })(); };; }; return f.apply(0, args);  })();  case 4: return (function () { var f = function (n, step, pad, coll) { var temp__4092__auto__ = coll; if (temp__4092__auto__) {  return (function () { var s = temp__4092__auto__; return (function () { var temp__4092__auto__ = take(n, s); if (temp__4092__auto__) {  return (function () { var p = temp__4092__auto__; if ($EQ$$STAR$(n, count(p))) { return cons(p, partition(n, step, pad, nthrest(s, step))); } else { return [take(n, concat(p, pad))]; };  })(); };  })();  })(); };; }; return f.apply(0, args);  })();  }; }; var subs = function (s, start, end) { return s.slice(start, end); }; var println = (("object" === typeof(console)) ? console.log : function () { }); var trampoline = function () { var args = arguments; switch (count(args)) { case 1: return (function () { var f = function (f) { for (var ret = f(); true;) { if (("function" === typeof(ret))) { var _temp_1032 = [ret()];
 ret = _temp_1032[0]; continue; } else { return ret; }; break; }; }; return f.apply(0, args);  })();  default: return (function () { var f = function () { var _temp_1033 = Array.prototype.slice.call(arguments), f = _temp_1033[0], args = _temp_1033.slice(1); return trampoline(function () { return f.apply(0, args); }); }; return f.apply(0, args);  })(); }; }; var assoc$EXCL$ = function () { var _temp_1034 = Array.prototype.slice.call(arguments), m = _temp_1034[0], kvs = _temp_1034.slice(1); for (var kv_tail = kvs; true;) { if (kv_tail) {  var _temp_1035 = kv_tail, k = _temp_1035[0], v = _temp_1035[1]; m[k] = v; var _temp_1036 = [((1 < count(((1 < count(kv_tail)) ? kv_tail.slice(1) : void(0)))) ? ((1 < count(kv_tail)) ? kv_tail.slice(1) : void(0)).slice(1) : void(0))];
 kv_tail = _temp_1036[0]; continue; } else { return m; }; break; }; }; var dissoc$EXCL$ = function () { var _temp_1037 = Array.prototype.slice.call(arguments), m = _temp_1037[0], ks = _temp_1037.slice(1); (function () { var coll513 = ks; for (var k514 in coll513) { var k = coll513[k514]; delete m[k]; }; })(); return m; }; var reverse$EXCL$ = function (x) { return x.reverse(); }; var conj$EXCL$ = function () { var _temp_1038 = Array.prototype.slice.call(arguments), coll = _temp_1038[0], xs = _temp_1038.slice(1); coll.push.apply(coll, xs); return coll; }; var cons$EXCL$ = function () { var _temp_1039 = Array.prototype.slice.call(arguments), coll = _temp_1039[0], xs = _temp_1039.slice(1); coll.unshift.apply(coll, xs); return coll; }; var merge$EXCL$ = function () { var _temp_1040 = Array.prototype.slice.call(arguments), m0 = _temp_1040[0], ms = _temp_1040.slice(1); (function () { var coll515 = ms; for (var k516 in coll515) { var m = coll515[k516]; (function () { var coll517 = m; for (var k in coll517) { var v = coll517[k]; m0[k] = v; }; })(); }; })(); return m0; };// <-- Starts included file:  ../lib/angular.cl2

var equal = function (actual, expected, message) {
    /* An other implement of qunit's equal that use Chlorine's = to compare values */
    return QUnit.push($EQ$$STAR$(expected, actual), actual, expected, message);
};// defining macro defmodule
// defining macro defroutetable
// defining macro fn-di
// defining macro defn-di
// defining macro ng-test
// defining macro def!
// defining macro defn!
// defining macro def$
// defining macro def!$
// defining macro defn$
// defining macro set-last-app
// defining macro defapp
// defining macro defsinglemodule
// defining macro defdirective
// defining macro defcontroller
// defining macro defservice
// defining macro deffactory
// defining macro deffilter
// defining macro defroute
// Ends included file:  ../lib/angular.cl2  -->


void(0);
var myApp = angular.module("myApp", ["ui.bootstrap","$strap.directives"]);;
myApp.config(["$routeProvider",function ($routeProvider) {
        $routeProvider.when("/default", {'controller' : 'emptyCtrl','template' : ("<div class=\"input-append\"><input bs-datepicker=\"\" class=\"input-small\" data-date-format=\"dd/mm/yyyy\" type=\"text\" /><button class=\"btn\" data-toggle=\"datepicker\"><i class=\"icon-calendar\"></i></button></div>")}).when("/profile", {'controller' : 'profileCtrl','template' : ("<h2>Please fill your information</h2><form class=\"form-horizontal well\" name=\"profileForm\"><div class=\"control-group\"><label class=\"control-label\">Name</label><div class=\"controls\"><input class=\"span5\" name=\"name\" ng-model=\"buffer.name\" required=\"\" type=\"text\" /></div></div><div class=\"control-group\"><label class=\"control-label\">Email</label><div class=\"controls\"><input class=\"span4\" ng-model=\"buffer.email\" required=\"\" type=\"email\" /></div></div><div class=\"control-group\"><label class=\"control-label\">Phone</label><div class=\"controls\"><input class=\"span4\" ng-model=\"buffer.phone\" required=\"\" type=\"text\" /></div></div><div class=\"control-group\"><label class=\"control-label\">Password</label><div class=\"controls\"><input class=\"span4\" ng-model=\"buffer.password\" required=\"\" type=\"password\" /></div></div><div class=\"control-group\"><label class=\"control-label\">DOB</label><div class=\"controls\"><div class=\"input-append\"><input bs-datepicker=\"\" class=\"span2\" data-date-format=\"dd/mm/yyyy\" ng-model=\"buffer.dob\" required=\"\" type=\"text\" /><button class=\"btn\" data-toggle=\"datepicker\"><i class=\"icon-calendar\"></i></button></div></div></div><div class=\"control-group\"><div class=\"controls\"><button class=\"btn btn-success\" ng-click=\"save_profile()\">Save</button></div></div></form>")}).when("/faculty", {'controller' : 'facultyCtrl','template' : ("<div close=\"close()\" modal=\"show_edit_box\"><div class=\"modal-header\"><h3>Please fill course information</h3></div><div class=\"modal-body\"><form class=\"form-horizontal well\" name=\"profileForm\"><div class=\"control-group\"><label class=\"control-label\">Title</label><div class=\"controls\"><input class=\"span3\" name=\"title\" ng-model=\"buffer.title\" required=\"\" type=\"text\" /></div></div><div class=\"control-group\"><label class=\"control-label\">Description</label><div class=\"controls\"><textarea class=\"span3\" name=\"desc\" ng-model=\"buffer.desc\" row=\"3\"></textarea></div></div><div class=\"control-group\"><div class=\"controls\"><button class=\"btn btn-success\" ng-click=\"save_course()\">Save</button></div></div></form></div><div class=\"modal-footer\"><button class=\"btn btn-warning cancel\" ng-click=\"close()\">Cancel</button></div></div><h2>Course list</h2><button class=\"btn btn-success\" ng-click=\"add_course_box()\"><i class=\"icon-plus\"> </i>Add course</button><form class=\"well well-small\" style=\"margin: 30px 0px\"><input class=\"search-query\" ng-model=\"query\" placeholder=\"filter list\" type=\"text\" /></form><table class=\"table table-bordered\"><thead><tr><th>Title</th><th>Time</th><th>Paid/Total registered</th><th>Actions</th></tr></thead><tbody ng-repeat=\"course in courses | filter:query | filter:session.username\"><tr><td><i class=\"icon-info-sign pull-right muted\" tooltip-placement=\"right\" tooltip=\"{{course.desc}}\"></i>{{course.title}}</td><td>-</td><td>{{course.registered|count_paid_students}} / {{course.registered.length}}</td><td><i class=\"icon-pencil\" ng-click=\"edit_course_box(course.id)\"></i><i class=\"icon-remove icon-danger pull-right\" ng-click=\"remove_course(course.id)\" style=\"color: #BD4247\"></i></td></tr></tbody></table>")}).when("/student", {'controller' : 'studentCtrl','template' : ("<h2>Current courses</h2><div ng-show=\"courses|show_payment_status:session.id\"><h3>Your've paid for {{courses|total_paid:session.id}}/{{courses|total_registered:session.id}} registered courses.</h3><div class=\"progress progress-info progress-striped active\"><div class=\"bar\" style=\"width: {{courses|payment_percent:session.id}}%\"></div></div></div><form class=\"well well-small\" style=\"margin: 30px 0px\"><input class=\"search-query\" ng-model=\"query\" placeholder=\"filter list\" type=\"text\" /></form><table class=\"table table-bordered\"><thead><tr><th>Title</th><th>Time</th><th>Actions</th></tr></thead><tbody ng-repeat=\"course in courses | filter:query\"><tr ng-class=\"course|registration_to_row_class:session.id\"><td><i class=\"icon-info-sign pull-right muted\" tooltip-placement=\"right\" tooltip=\"{{course.desc}}\"></i>{{course.title}}</td><td>-</td><td><i class=\"icon-ok\" ng-click=\"register_course(course.id)\" ng-show=\"course|can_register:session.id\" style=\"color: #369629\" tooltip-placement=\"right\" tooltip=\"Register course\"></i><i class=\"icon-remove\" ng-click=\"unregister_course(course.id)\" ng-show=\"course|can_remove:session.id\" style=\"color: #BD4247\" tooltip-placement=\"right\" tooltip=\"Unregister course\"></i></td></tr></tbody></table>")}).when("/accountant", {'controller' : 'accountantCtrl','template' : ("<h2>Current registration</h2><form class=\"well well-small\" style=\"margin: 30px 0px\"><input class=\"search-query\" ng-model=\"query\" placeholder=\"filter list\" type=\"text\" /></form><table class=\"table table-bordered\"><thead><tr><th>Course</th><th>Student</th><th>DOB</th><th>Actions</th></tr></thead><tbody><tr ng-repeat=\"record in registrations | filter:query\"><td>{{record.course_title}}</td><td>{{record.name}}</td><td>{{record.dob}}</td><td><i class=\"icon-ok\" ng-click=\"confirm_payment($index, record.id, record.course_id)\" ng-hide=\"record.paid\" style=\"color: #369629\" tooltip-placement=\"right\" tooltip=\"Confirm payment\"></i><i class=\"icon-remove\" ng-click=\"unconfirm_payment($index, record.id, record.course_id)\" ng-show=\"record.paid\" style=\"color: #BD4247\" tooltip-placement=\"right\" tooltip=\"Unconfirm payment\"></i></td></tr></tbody></table>")}).when("/alias", {'redirectTo' : "/default"}).otherwise({'redirectTo' : "/default"});
    }]);
myApp.directive("mouseoverRemoveClass", function () {
        return function (scope, elm, attrs) {
            return elm.bind("mouseenter", function () {
                    return elm.removeClass(attrs.mouseoverRemoveClass);
                }).bind("mouseleave", function () {
                    return elm.addClass(attrs.mouseoverRemoveClass);
                });
        };
    });
myApp.controller("sessionCtrl", ["$scope","session","users","$location",function ($scope, session, users, $location) {
        $scope.session = session;
        $scope.users = users.users;
        $scope.show_login_box = false;
        $scope.close = function () {
            $scope.show_login_box = false;
        };
        $scope.login_box = function () {
            $scope.show_login_box = true;
        };
        $scope.login_as = function (user_id) {
            /* Updates current session to passed user. */
            var user = filter(function (p1__270424$HASH$) {
                    return $EQ$$STAR$(user_id, p1__270424$HASH$['id']);
                }, users.users)[0];
            merge$EXCL$(session, {'name' : "",'email' : "",'phone' : "",'dob' : ""}, select_keys(user, ['id','group','username','name','email','phone','dob']), {'url' : users.groups[user['group']]['url'],'logged_in' : true});
            $location.path(session['url']);
            $scope.show_login_box = false;
        };
    }]);
myApp.controller("emptyCtrl", function () {
    });
myApp.controller("profileCtrl", ["$scope","session","users",function ($scope, session, users) {
        $scope.buffer = select_keys(session, ['name','email','phone','dob']);
        $scope.save_profile = function () {
            merge$EXCL$(session, select_keys($scope.buffer, ['name','email','phone','dob']));
            return (function () {
                var coll270425 = users.users;
                for (var k270426 in coll270425) {
                    var user = coll270425[k270426];
                    if ($EQ$$STAR$(session.id, user['id'])) {
                        
                        merge$EXCL$(user, select_keys($scope.buffer, ['name','email','phone','dob']));
                    };
                };
            })();
        };
    }]);
myApp.controller("facultyCtrl", ["$scope","session","courses",function ($scope, session, courses) {
        $scope.session = session;
        $scope.courses = courses.courses;
        $scope.show_edit_box = void(0);
        $scope.buffer = {};
        $scope.add_mode = true;
        $scope.close = function () {
            $scope.show_edit_box = false;
        };
        $scope.add_course_box = function () {
            $scope.add_mode = true;
            $scope.show_edit_box = true;
        };
        $scope.edit_course_box = function (id) {
            $scope.add_mode = false;
            $scope.buffer = select_keys(filter(function (p1__270427$HASH$) {
                        return $EQ$$STAR$(id, p1__270427$HASH$['id']);
                    }, courses.courses)[0], ['id','title','desc','registered']);
            $scope.show_edit_box = true;
        };
        $scope.remove_course = function (id) {
            return courses.remove_course(id);
        };
        $scope.save_course = function () {
            if ($scope.add_mode) {
                courses.add_courses(merge($scope.buffer, {'faculty' : session.username,'registered' : []}));
            } else {
                courses.update_course($scope.buffer);
            };
            $scope.buffer = {};
            $scope.show_edit_box = false;
        };
    }]);
myApp.controller("studentCtrl", ["$scope","session","courses",function ($scope, session, courses) {
        $scope.session = session;
        $scope.courses = courses.courses;
        $scope.register_course = function (course_id) {
            return (function () {
                var coll270428 = courses.courses;
                for (var k270429 in coll270428) {
                    var course = coll270428[k270429];
                    if ($EQ$$STAR$(course_id, course['id'])) {
                        
                        conj$EXCL$(course['registered'], {'id' : session.id});
                    };
                };
            })();
        };
        $scope.unregister_course = function (course_id) {
            return (function () {
                var coll270430 = courses.courses;
                for (var k270431 in coll270430) {
                    var course = coll270430[k270431];
                    if ($EQ$$STAR$(course_id, course['id'])) {
                        
                        (function () {
                            var coll270432 = course['registered'];
                            for (var n in coll270432) {
                                var student = coll270432[n];
                                dissoc$EXCL$(course['registered'], n);
                            };
                        })();
                    };
                };
            })();
        };
    }]);
myApp.controller("accountantCtrl", ["$scope","session","courses","users",function ($scope, session, courses, users) {
        $scope.session = session;
        $scope.courses = courses.courses;
        $scope.registrations = (function () {
            var ret270434 = [];
            var coll270437 = courses.courses;
            for (var k270438 in coll270437) {
                var course = coll270437[k270438];
                var coll270435 = course.registered;
                for (var k270436 in coll270435) {
                    var student = coll270435[k270436];
                    ret270434.push(merge({'course_id' : course.id,'course_title' : course.title,'course_desc' : course.desc,'paid' : student.paid}, select_keys(filter(function (p1__270433$HASH$) {
                                        return (student['id'] == p1__270433$HASH$['id']);
                                    }, users.users)[0], ['id','name','username','dob','email'])));
                };
            };
            return ret270434;
         })();
        $scope.confirm_payment = function (index, student_id, course_id) {
            (function () {
                var coll270441 = courses.courses;
                for (var k270442 in coll270441) {
                    var course = coll270441[k270442];
                    if ($EQ$$STAR$(course_id, course['id'])) {
                        
                        var coll270439 = course.registered;
                        for (var k270440 in coll270439) {
                            var student = coll270439[k270440];
                            if ($EQ$$STAR$(student_id, student['id'])) {
                                
                                assoc$EXCL$(student, 'paid', true);
                            };
                        };
                    };
                };
            })();
            return assoc$EXCL$($scope.registrations[index], 'paid', true);
        };
        $scope.unconfirm_payment = function (index, student_id, course_id) {
            (function () {
                var coll270445 = courses.courses;
                for (var k270446 in coll270445) {
                    var course = coll270445[k270446];
                    if ($EQ$$STAR$(course_id, course['id'])) {
                        
                        var coll270443 = course.registered;
                        for (var k270444 in coll270443) {
                            var student = coll270443[k270444];
                            if ($EQ$$STAR$(student_id, student['id'])) {
                                
                                assoc$EXCL$(student, 'paid', false);
                            };
                        };
                    };
                };
            })();
            return assoc$EXCL$($scope.registrations[index], 'paid', false);
        };
    }]);
myApp.service("session", function () {
        /* Stores current logged-in user's information. */
        this.id = -1;
        this.group = "guest";
        this.username = "guest";
        this.name = "Guest";
    });
myApp.service("users", function () {
        /* Stores system users. */
        this.users = [{'id' : 0,'username' : "faculty-a",'group' : "faculties",'name' : "Faculty A",'picture' : ""},{'id' : 1,'username' : "faculty-b",'group' : "faculties",'name' : "Faculty B",'picture' : ""},{'id' : 2,'username' : "accountant",'group' : "accountants",'name' : "Accountant C",'picture' : ""},{'id' : 3,'username' : "student-d",'group' : "students",'name' : "Student D",'picture' : ""},{'id' : 4,'username' : "student-g",'group' : "students",'name' : "Student G",'picture' : ""},{'id' : 5,'username' : "student-h",'group' : "students",'name' : "Student H",'picture' : ""},{'id' : 6,'username' : "student-k",'group' : "students",'name' : "Student K",'picture' : ""},{'id' : 7,'username' : "student-l",'group' : "students",'name' : "Student L",'picture' : ""}];
        this.groups = {'faculties' : {'id' : 0,'url' : "/faculty"},'accountants' : {'id' : 1,'url' : "/accountant"},'students' : {'id' : 2,'url' : "/student"}};
    });
myApp.service("courses", function () {
        /* Stores global courses (including registration and payment status) */
        var counter = 0;
        this.courses = [];
        var that = this;
        this.add_courses = function () {
            var _temp_1000 = Array.prototype.slice.call(arguments), courses = _temp_1000.slice(0);
            return (function () {
                var coll270447 = courses;
                for (var k270448 in coll270447) {
                    var course = coll270447[k270448];
                    var n = counter = (counter + 1);
                    conj$EXCL$(that.courses, merge(course, {'id' : n}));
                };
            })();
        };
        this.update_course = function (new_course) {
            return (function () {
                var coll270449 = that.courses;
                for (var k270450 in coll270449) {
                    var course = coll270449[k270450];
                    if ($EQ$$STAR$(course['id'], new_course['id'])) {
                        
                        merge$EXCL$(course, new_course);
                    };
                };
            })();
        };
        this.remove_course = function (id) {
            return (function () {
                var coll270451 = that.courses;
                for (var n in coll270451) {
                    var course = coll270451[n];
                    if ($EQ$$STAR$(course['id'], id)) {
                        
                        dissoc$EXCL$(that.courses, n);
                    };
                };
            })();
        };
        return this.add_courses({'title' : "Basic programming",'desc' : "Learn how to write hello world",'faculty' : "faculty-a",'registered' : [{'id' : 3,'paid' : true},{'id' : 4,'paid' : false},{'id' : 5,'paid' : true}]}, {'title' : "Medium programming",'desc' : "Learn how to calculate 1+1",'faculty' : "faculty-a",'registered' : [{'id' : 3,'paid' : false},{'id' : 4,'paid' : false},{'id' : 5,'paid' : true},{'id' : 6,'paid' : true}]}, {'title' : "Basic drawing",'desc' : "Learn how to draw a line",'faculty' : "faculty-b",'registered' : [{'id' : 3,'paid' : true},{'id' : 4,'paid' : false},{'id' : 5,'paid' : true},{'id' : 6,'paid' : true},{'id' : 7,'paid' : true}]}, {'title' : "Medium drawing",'desc' : "Learn how to draw a worm",'faculty' : "faculty-b",'registered' : []}, {'title' : "Advanced drawing",'desc' : "Learn how to draw a chicken",'faculty' : "faculty-b",'registered' : [{'id' : 3,'paid' : true},{'id' : 4,'paid' : false},{'id' : 5,'paid' : true},{'id' : 6,'paid' : true},{'id' : 7,'paid' : true}]});
    });
myApp.filter("count_paid_students", function () {
        return function (coll) {
            return count(filter(function (p1__270452$HASH$) {
                        return (true === p1__270452$HASH$['paid']);
                    }, coll));
        };
    });
var registered$QUEST$ = function (course, user_id) {
    /* Helper function.
         Checks if a course was registered by an user. */
    return (1 === count(filter(function (p1__270453$HASH$) {
                return $EQ$$STAR$(user_id, p1__270453$HASH$['id']);
            }, course['registered'])));
};
var paid$QUEST$ = function (course, user_id) {
    /* Helper function.
         Checks if a course is paid by current user. */
    return (1 === count(filter(function (p1__270454$HASH$) {
                return ($EQ$$STAR$(user_id, p1__270454$HASH$['id']) && (true === p1__270454$HASH$['paid']));
            }, course['registered'])));
};
myApp.filter("can_register", function () {
        return function (course, user_id) {
            return !registered$QUEST$(course, user_id);
        };
    });
myApp.filter("can_remove", function () {
        return function (course, user_id) {
            return (registered$QUEST$(course, user_id) && !paid$QUEST$(course, user_id));
        };
    });
myApp.filter("registration_to_row_class", function () {
        return function (course, user_id) {
            if (paid$QUEST$(course, user_id)) {
                return "success";
            } else {
                if (registered$QUEST$(course, user_id)) {
                    return "warning";
                } else {
                    return "";
                };
            };
        };
    });
myApp.filter("total_paid", function () {
        return function (courses, user_id) {
            return count(filter(function (p1__270455$HASH$) {
                        return paid$QUEST$(p1__270455$HASH$, user_id);
                    }, courses));
        };
    });
myApp.filter("total_registered", function () {
        return function (courses, user_id) {
            return count(filter(function (p1__270456$HASH$) {
                        return registered$QUEST$(p1__270456$HASH$, user_id);
                    }, courses));
        };
    });
var payment_percent = function (courses, user_id) {
    /* Helper function */
    return ((100 * (count(filter(function (p1__270457$HASH$) {
                return paid$QUEST$(p1__270457$HASH$, user_id);
            }, courses)) / count(filter(function (p1__270458$HASH$) {
                return registered$QUEST$(p1__270458$HASH$, user_id);
            }, courses)))) || 0);
};
myApp.filter("payment_percent", function () {
        return function (courses, user_id) {
            return payment_percent(courses, user_id);
        };
    });
myApp.filter("show_payment_status", function () {
        return function (courses, user_id) {
            /* Only show payment status if current student has some unpaid courses. */
            var x = payment_percent(courses, user_id);
            return ((0 < x) && (x < 100));
        };
    });