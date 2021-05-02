/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./sw.js",['./workbox-6a8a5cb8'], function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  workbox.setCacheNameDetails({
    prefix: "weather-app"
  });
  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "assets/Body.36688521.css",
    "revision": "2215e06848c0b5f06f7c5c206d945428"
  }, {
    "url": "assets/Body.ad20345c.js",
    "revision": "97a76b601270c4624e50a3121f1e4ccc"
  }, {
    "url": "assets/Button.49ac54c6.css",
    "revision": "ea7d0f52fe634e56a206cfbe7f217b7d"
  }, {
    "url": "assets/Button.b020f51c.js",
    "revision": "0280e65e2e3e0fc9a32020277285218d"
  }, {
    "url": "assets/Container.9f8bd109.js",
    "revision": "2d459a7ab74447dc0c5e8a25f866a053"
  }, {
    "url": "assets/Container.c39733d0.css",
    "revision": "d207bd44f27f59b5a2403713f1db9a61"
  }, {
    "url": "assets/formats.535d8c54.js",
    "revision": "dfee42bfbecf5017cf34cb3df6868388"
  }, {
    "url": "assets/index.c7525f93.js",
    "revision": "0d706c881f027c1921204aaa22761b3f"
  }, {
    "url": "assets/index.d117a3f1.css",
    "revision": "ffab84c6c301c29b130e56252c82177c"
  }, {
    "url": "assets/Sidebar.12c3fa03.js",
    "revision": "28154f8babdcab9dfd2222992726ea37"
  }, {
    "url": "assets/Sidebar.abced1a5.css",
    "revision": "857cb1117af5eb6acc4a28d8719e0743"
  }, {
    "url": "assets/SidebarSearch.919f1cda.js",
    "revision": "8bba1c0bb860ac19f21c9aef4053c9df"
  }, {
    "url": "assets/SidebarSearch.db639aa7.css",
    "revision": "4e2a475983ae9fe7fcc6740105b21be6"
  }, {
    "url": "assets/vendor.97080caa.js",
    "revision": "bb8edd5be5ffde6cc70b53d7b253c8da"
  }, {
    "url": "index.html",
    "revision": "369560bfe01064973d48efeb28f860f9"
  }, {
    "url": "registerSW.js",
    "revision": "d0362221bf0561194ae32141fb353436"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

});
//# sourceMappingURL=sw.js.map
