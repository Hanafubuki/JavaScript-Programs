!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n(1),n(2)},function(e,t,n){"use strict";"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").then(function(){console.log("Service Worker Registered")})},function(e,t,n){"use strict";if(matchMedia){var r=window.matchMedia("(min-width: 1100px)");r.addListener(a),a(r)}function a(e){e.matches&&(document.getElementById("toggleNav").className="top",document.getElementById("close").className="fa fa-bars")}window.menuFunction=function(){var e=window.matchMedia("(min-width: 1100px)");e.addListener(a);var t=document.getElementById("toggleNav"),n=document.getElementById("close");"top"!==t.className||e.matches?(t.className="top",n.className="fa fa-bars"):(t.className="responsive",n.className="fa fa-times")}}]);