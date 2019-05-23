/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
var shimFeatures={"no-bootstrap":!0,"intersection-observer":!1,"resize-observer":!1,"web-animations":!1,"build-fetch":!1};window.DojoHasEnvironment&&window.DojoHasEnvironment.staticFeatures&&Object.keys(window.DojoHasEnvironment.staticFeatures).forEach(function(e){shimFeatures[e]=window.DojoHasEnvironment.staticFeatures[e]}),window.DojoHasEnvironment={staticFeatures:shimFeatures},function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("btr_site",[],t):"object"==typeof exports?exports.btr_site=t():e.btr_site=t()}(window,function(){return function(e){function t(t){for(var n,r,i=t[0],s=t[1],a=0,u=[];a<i.length;a++)r=i[a],o[r]&&u.push(o[r][0]),o[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(l&&l(t);u.length;)u.shift()()}var n={},r={0:0},o={0:0};function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[];r[e]?t.push(r[e]):0!==r[e]&&{1:1,8:1,9:1}[e]&&t.push(r[e]=new Promise(function(t,n){for(var r=({1:"main",2:"platform/IntersectionObserver",3:"platform/ResizeObserver",4:"platform/WebAnimations",5:"platform/client",6:"platform/fetch",7:"platform/pointerEvents",8:"src/pages/Blog",9:"src/pages/Home"}[e]||e)+"."+{1:"9a8c2c28e4267b5ffa42",2:"31d6cfe0d16ae931b73c",3:"31d6cfe0d16ae931b73c",4:"31d6cfe0d16ae931b73c",5:"31d6cfe0d16ae931b73c",6:"31d6cfe0d16ae931b73c",7:"31d6cfe0d16ae931b73c",8:"dab50ea6e2028cc85991",9:"1ad201d860686b80f8e5"}[e]+".bundle.css",o=i.p+r,s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var u=(c=s[a]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===o))return t()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){var c;if((u=(c=l[a]).getAttribute("data-href"))===r||u===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,n(i)},f.href=o,document.getElementsByTagName("head")[0].appendChild(f)}).then(function(){r[e]=0}));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=s);var a,u=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=function(e){return i.p+""+({1:"main",2:"platform/IntersectionObserver",3:"platform/ResizeObserver",4:"platform/WebAnimations",5:"platform/client",6:"platform/fetch",7:"platform/pointerEvents",8:"src/pages/Blog",9:"src/pages/Home"}[e]||e)+"."+{1:"f033b40b0870acafb6a8",2:"b2c83048370ef4f85dcb",3:"10e2402f3ef9206854db",4:"953b79078f900bcf392a",5:"998de4dc81fd8bbaa873",6:"af8efb76e2b684ee1517",7:"257c06395cce50cb8735",8:"fd8d3ac295cfeaaed51e",9:"bf3be6723d79858b7338"}[e]+".bundle.js"}(e),a=function(t){l.onerror=l.onload=null,clearTimeout(c);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+r+": "+i+")");s.type=r,s.request=i,n[1](s)}o[e]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:l})},12e4);l.onerror=l.onload=a,u.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window.dojoWebpackJsonpbtr_site=window.dojoWebpackJsonpbtr_site||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=a;return i(i.s=6)}([function(e,t,n){"use strict";n.r(t),function(e){const n="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:void 0;t.default=n}.call(this,n(5))},function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"testCache",function(){return o}),n.d(t,"testFunctions",function(){return i}),n.d(t,"load",function(){return u}),n.d(t,"normalize",function(){return l}),n.d(t,"exists",function(){return c}),n.d(t,"add",function(){return f}),n.d(t,"default",function(){return d});var r=n(0);const o={},i={},{staticFeatures:s}=r.default.DojoHasEnvironment||{};"DojoHasEnvironment"in r.default&&delete r.default.DojoHasEnvironment;const a=s?"function"==typeof s?s.apply(r.default):s:{};function u(e,t,n,r){e?t([e],n):n()}function l(e,t){const n=e.match(/[\?:]|[^:\?]*/g)||[];let r=0;const o=function e(t){const o=n[r++];return":"===o?null:"?"===n[r++]?!t&&d(o)?e():(e(!0),e(t)):o}();return o&&t(o)}function c(e){const t=e.toLowerCase();return Boolean(t in a||t in o||i[t])}function f(e,t,n=!1){const r=e.toLowerCase();if(c(r)&&!n&&!(r in a))throw new TypeError(`Feature "${e}" exists and overwrite not true.`);"function"==typeof t?i[r]=t:(o[r]=t,delete i[r])}function d(e){let t;const n=e.toLowerCase();if(n in a)t=a[n];else if(i[n])t=o[n]=i[n].call(null),delete i[n];else{if(!(n in o))throw new TypeError(`Attempt to detect unregistered has feature "${e}"`);t=o[n]}return t}f("public-path",void 0),f("dojo-debug",!1),f("host-browser","undefined"!=typeof document&&"undefined"!=typeof location),f("host-node",function(){if("object"==typeof e&&e.versions&&e.versions.node)return e.versions.node}),f("fetch","fetch"in r.default&&"function"==typeof r.default.fetch,!0),f("es6-array",()=>["from","of"].every(e=>e in r.default.Array)&&["findIndex","find","copyWithin"].every(e=>e in r.default.Array.prototype),!0),f("es6-array-fill",()=>"fill"in r.default.Array.prototype&&1===[1].fill(9,Number.POSITIVE_INFINITY)[0],!0),f("es7-array",()=>"includes"in r.default.Array.prototype,!0),f("es6-map",()=>{if("function"==typeof r.default.Map)try{const e=new r.default.Map([[0,1]]);return e.has(0)&&"function"==typeof e.keys&&d("es6-symbol")&&"function"==typeof e.values&&"function"==typeof e.entries}catch(e){return!1}return!1},!0),f("es6-math",()=>["clz32","sign","log10","log2","log1p","expm1","cosh","sinh","tanh","acosh","asinh","atanh","trunc","fround","cbrt","hypot"].every(e=>"function"==typeof r.default.Math[e]),!0),f("es6-math-imul",()=>"imul"in r.default.Math&&-5===Math.imul(4294967295,5),!0),f("es6-object",()=>d("es6-symbol")&&["assign","is","getOwnPropertySymbols","setPrototypeOf"].every(e=>"function"==typeof r.default.Object[e]),!0),f("es2017-object",()=>["values","entries","getOwnPropertyDescriptors"].every(e=>"function"==typeof r.default.Object[e]),!0),f("es-observable",()=>void 0!==r.default.Observable,!0),f("es6-promise",()=>void 0!==r.default.Promise&&d("es6-symbol"),!0),f("es2018-promise-finally",()=>d("es6-promise")&&void 0!==r.default.Promise.prototype.finally,!0),f("es6-set",()=>{if("function"==typeof r.default.Set){const e=new r.default.Set([1]);return e.has(1)&&"keys"in e&&"function"==typeof e.keys&&d("es6-symbol")}return!1},!0),f("es6-string",()=>["fromCodePoint"].every(e=>"function"==typeof r.default.String[e])&&["codePointAt","normalize","repeat","startsWith","endsWith","includes"].every(e=>"function"==typeof r.default.String.prototype[e]),!0),f("es6-string-raw",()=>{if("raw"in r.default.String){let e=function(e,...t){const n=[...e];return n.raw=e.raw,n}`a\n${1}`;return e.raw=["a\\n"],"a\\n"===r.default.String.raw(e,42)}return!1},!0),f("es2017-string",()=>["padStart","padEnd"].every(e=>"function"==typeof r.default.String.prototype[e]),!0),f("es6-symbol",()=>void 0!==r.default.Symbol&&"symbol"==typeof Symbol(),!0),f("es6-weakmap",()=>{if(void 0!==r.default.WeakMap){const e={},t={},n=new r.default.WeakMap([[e,1]]);return Object.freeze(e),1===n.get(e)&&n.set(t,2)===n&&d("es6-symbol")}return!1},!0),f("microtasks",()=>d("es6-promise")||d("host-node")||d("dom-mutationobserver"),!0),f("postmessage",()=>void 0!==r.default.window&&"function"==typeof r.default.postMessage,!0),f("raf",()=>"function"==typeof r.default.requestAnimationFrame,!0),f("setimmediate",()=>void 0!==r.default.setImmediate,!0),f("dom-mutationobserver",()=>{if(d("host-browser")&&Boolean(r.default.MutationObserver||r.default.WebKitMutationObserver)){const e=document.createElement("div"),t=new(r.default.MutationObserver||r.default.WebKitMutationObserver)(function(){});return t.observe(e,{attributes:!0}),e.style.setProperty("display","block"),Boolean(t.takeRecords().length)}return!1},!0),f("dom-webanimation",()=>d("host-browser")&&void 0!==r.default.Animation&&void 0!==r.default.KeyframeEffect,!0),f("abort-controller",()=>void 0!==r.default.AbortController),f("abort-signal",()=>void 0!==r.default.AbortSignal),f("dom-intersection-observer",()=>d("host-browser")&&void 0!==r.default.IntersectionObserver,!0),f("dom-resize-observer",()=>d("host-browser")&&void 0!==r.default.ResizeObserver,!0),f("dom-pointer-events",()=>d("host-browser")&&void 0!==r.default.onpointerdown,!0),f("build-elide",!1)}.call(this,n(11))},function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(0);n(1);function o(e){e&&e.isActive&&e.callback&&e.callback()}function i(e,t){return{destroy:function(){this.destroy=function(){},e.isActive=!1,e.callback=null,t&&t()}}}!function(){let e,t;{const e=[];r.default.addEventListener("message",function(t){t.source===r.default&&"dojo-queue-message"===t.data&&(t.stopPropagation(),e.length&&o(e.shift()))}),t=function(t){e.push(t),r.default.postMessage("dojo-queue-message","*")}}}();let s=function(){let e;return e=function(e){r.default.Promise.resolve(e).then(o)},function(t){const n={isActive:!0,callback:t};return e(n),i(n)}}()},function(e,t,n){"use strict";function r(e,t=!1,n=!0,r=!0){return{value:e,enumerable:t,writable:n,configurable:r}}function o(e){return function(t,...n){return e.apply(t,n)}}n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})},function(e,t,n){"use strict";n(1);var r=n(0),o=n(3);let i=r.default.Symbol;["hasInstance","isConcatSpreadable","iterator","species","replace","search","split","match","toPrimitive","toStringTag","unscopables","observable"].forEach(e=>{i[e]||Object.defineProperty(i,e,Object(o.a)(i.for(e),!1,!1))})},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){n(7),e.exports=n(10)},function(e,t,n){},,,function(e,t,n){var r=n(1);n(12),n(13);var o=[];r.default("build-serve")&&o.push(n.e(5).then(n.t.bind(null,14,7))),r.default("intersection-observer")&&!r.default("dom-intersection-observer")&&o.push(n.e(2).then(n.bind(null,15))),r.default("no-bootstrap"),r.default("web-animations")&&!r.default("dom-webanimation")&&o.push(n.e(4).then(n.bind(null,17))),r.default("resize-observer")&&!r.default("dom-resize-observer")&&o.push(n.e(3).then(n.bind(null,18))),r.default("dom-pointer-events")||o.push(n.e(7).then(n.bind(null,19))),Promise.all(o).then(function(){n.e(1).then(n.bind(null,20))})},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var u,l=[],c=!1,f=-1;function d(){c&&u&&(c=!1,u.length?l=u.concat(l):f=-1,l.length&&p())}function p(){if(!c){var e=a(d);c=!0;for(var t=l.length;t;){for(u=l,l=[];++f<t;)u&&u[f].run();f=-1,t=l.length}u=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function b(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new b(e,t)),1!==l.length||c||a(p)},b.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";n.r(t),n.d(t,"ShimPromise",function(){return s}),n.d(t,"isThenable",function(){return a});var r=n(0),o=n(2),i=(n(4),n(1));let s=r.default.Promise;const a=function(e){return e&&"function"==typeof e.then};var u;Object(i.default)("es6-promise")||(r.default.Promise=((u=class e{constructor(t){this.state=1,this[Symbol.toStringTag]="Promise";let n=!1;const r=()=>1!==this.state||n;let i=[],s=function(e){i&&i.push(e)};const u=(e,t)=>{1===this.state&&(this.state=e,this.resolvedValue=t,s=o.a,i&&i.length>0&&Object(o.a)(function(){if(i){let e=i.length;for(let t=0;t<e;++t)i[t].call(null);i=null}}))},l=(e,t)=>{r()||(a(t)?(t.then(u.bind(null,0),u.bind(null,2)),n=!0):u(e,t))};this.then=((t,n)=>new e((e,r)=>{s(()=>{const o=2===this.state?n:t;if("function"==typeof o)try{e(o(this.resolvedValue))}catch(e){r(e)}else 2===this.state?r(this.resolvedValue):e(this.resolvedValue)})}));try{t(l.bind(null,0),l.bind(null,2))}catch(e){u(2,e)}}static all(t){return new this(function(n,r){const o=[];let i=0,s=0,u=!0;function l(e,t){o[e]=t,++i,c()}function c(){u||i<s||n(o)}let f=0;for(const n of t)d=f,++s,a(p=n)?p.then(l.bind(null,d),r):e.resolve(p).then(l.bind(null,d)),f++;var d,p;u=!1,c()})}static race(t){return new this(function(n,r){for(const o of t)o instanceof e?o.then(n,r):e.resolve(o).then(n)})}static reject(e){return new this(function(t,n){n(e)})}static resolve(e){return new this(function(t){t(e)})}catch(e){return this.then(void 0,e)}})[Symbol.species]=s,s=u)),Object(i.default)("es2018-promise-finally")||(r.default.Promise.prototype.finally=function(e){return this.then(e&&(t=>Promise.resolve(e()).then(()=>t)),e&&(t=>Promise.resolve(e()).then(()=>{throw t})))}),t.default=s},function(e,t,n){var r=n(1),o=n(0);if(r.exists("build-time-render")||r.add("build-time-render",!1,!1),r.exists("build-serve")||r.add("build-serve",!1,!1),o.default.__public_path__||o.default.__public_origin__){var i=o.default.__public_origin__||window.location.origin;o.default.__public_path__&&(i=origin+o.default.__public_path__,r.add("public-path",o.default.__public_path__,!0)),n.p=i}}])});
//# sourceMappingURL=bootstrap.001911386fc505126a98.bundle.js.map