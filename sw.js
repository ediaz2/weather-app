if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,a,c)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const i={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return r;case"module":return i;default:return e(s)}}))).then((e=>{const s=c(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-a820df54"],(function(e){"use strict";e.setCacheNameDetails({prefix:"weather-app"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/Body.36688521.css",revision:"2215e06848c0b5f06f7c5c206d945428"},{url:"assets/Body.b8af2bbe.js",revision:"a16715d70c336a120bcf71fe9dd1b15e"},{url:"assets/Button.49ac54c6.css",revision:"ea7d0f52fe634e56a206cfbe7f217b7d"},{url:"assets/Button.8c97d818.js",revision:"e28d06e3382abe206043782085e35822"},{url:"assets/Container.43fa84e8.js",revision:"320b56f29f699ea8b85ce530a5623937"},{url:"assets/Container.c39733d0.css",revision:"d207bd44f27f59b5a2403713f1db9a61"},{url:"assets/formats.535d8c54.js",revision:"dfee42bfbecf5017cf34cb3df6868388"},{url:"assets/index.77a3e118.js",revision:"1daa761efae0d47c8183e7a453b405d2"},{url:"assets/index.d117a3f1.css",revision:"ffab84c6c301c29b130e56252c82177c"},{url:"assets/Sidebar.05891f98.js",revision:"cd491c92f8eadcc26f1d4458afb35d91"},{url:"assets/Sidebar.abced1a5.css",revision:"857cb1117af5eb6acc4a28d8719e0743"},{url:"assets/SidebarSearch.11f2dd80.js",revision:"3bdbb82f32b8f55b3c1482979fa5269f"},{url:"assets/SidebarSearch.db639aa7.css",revision:"4e2a475983ae9fe7fcc6740105b21be6"},{url:"assets/vendor.ce35f5c1.js",revision:"d96cc6b29fd4304605331dba0da25c9c"},{url:"index.html",revision:"b8fe90429de1cc5409296ce2e29ac3ae"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map