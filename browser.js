// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Math.fround?Math.fround:null,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,r=Object.prototype.hasOwnProperty,e="function"==typeof Symbol?Symbol:void 0,f="function"==typeof e?e.toStringTag:"",u=n&&"symbol"==typeof Symbol.toStringTag?function(t){var n,e,u,l,i;if(null==t)return o.call(t);e=t[f],i=f,n=null!=(l=t)&&r.call(l,i);try{t[f]=void 0}catch(n){return o.call(t)}return u=o.call(t),n?t[f]=e:delete t[f],u}:function(t){return o.call(t)},l="function"==typeof Float32Array,i=Number.POSITIVE_INFINITY,a="function"==typeof Float32Array?Float32Array:null,c="function"==typeof Float32Array?Float32Array:void 0,y=new(function(){var t,n,o;if("function"!=typeof a)return!1;try{n=new a([1,3.14,-3.14,5e40]),o=n,t=(l&&o instanceof Float32Array||"[object Float32Array]"===u(o))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===i}catch(n){t=!1}return t}()?c:function(){throw new Error("not implemented")})(1),p="function"==typeof t?t:function(t){return y[0]=t,y[0]},d=p(57.29577951308232),b=p(1.5707963267948966),m=p(.7853981633974483);function s(t){var n,o,r;return function(t){return t!=t}(t)||0===t?t:((t=p(t))<0?(n=-1,t=-t):n=1,t>2.414213562373095?(o=b,t=-p(1/t)):t>.414213562373095?(o=m,t=p(p(t-1)/p(t+1))):o=0,r=p(t*t),o=p(o+p(p(function(t){return 0===t?-.3333294987678528:p(-.3333294987678528+p(t*p(.19977711141109467+p(t*p(-.13877685368061066+p(.08053744584321976*t))))))}(r))*p(r*t)+t)),n<0&&(o=-o),o)}return function(t){return function(t){return p(p(t)*d)}(s(p(t)))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).atandf=n();
//# sourceMappingURL=browser.js.map
