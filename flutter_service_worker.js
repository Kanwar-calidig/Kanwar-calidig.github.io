'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6e3814beb4db6439955d48149dd6bf4e",
"version.json": "ebdf333ffb80f9cd69087fd7b90c8a07",
"index.html": "8c62862203d5e91aa2fd0672f39a577d",
"/": "8c62862203d5e91aa2fd0672f39a577d",
"main.dart.js": "ee2aa6267002bdec6a3185ea7fd7daad",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1553eea36f9d20d4fab2b5408e6a5164",
"assets/AssetManifest.json": "abb2368484a4f1ff8be44fadb50b2373",
"assets/NOTICES": "241f1813de69fb3836e077095147d8ea",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "6c745475c38aa3a32f8c200ad3b2a9b8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "bba1bea82e6e2e24d18b38bc12b911c3",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/parrot.png": "b60f99d3a09bf65092170b377fcbc30a",
"assets/assets/images/ground%2520level%2520iv.png": "ce4b622d78b5a92f91e64dadb09e48c4",
"assets/assets/images/level%2520iii%2520item%2520vii.png": "d082a8339db0cab11ef6e0efc6a13bf2",
"assets/assets/images/level%2520iv%2520item%2520v.png": "ab76fbe00fac5ab5b9b9fca383f903cf",
"assets/assets/images/level%2520iii%2520item%2520v.png": "49dff915714c1713f9c11f4646326cbf",
"assets/assets/images/item%2520v.png": "8ad72abbf5915ca84c907e2c4a4edce8",
"assets/assets/images/coin_icon.png": "6e1f7d0899615b94f219c08c0db0f254",
"assets/assets/images/level%2520iii%2520item%2520iii.png": "0f556b35323dc4c02a821176f2b37ec0",
"assets/assets/images/level%2520iii%2520item%2520iv.png": "4a2cf568fbf59d0191ab3dbaf87056eb",
"assets/assets/images/fire.jpg": "46763ca5d5a5f2ef6725b250125818ad",
"assets/assets/images/level%2520iv%2520item%2520iv.png": "5ebe61e7578e7b21ad7e1ea358c1009c",
"assets/assets/images/item%2520ii.png": "695a0533491de67352202713076eeb49",
"assets/assets/images/large%2520stone.png": "47fe664221ba1a6e16c9ad60023b37d5",
"assets/assets/images/background%2520level%2520iv.png": "fcbd42c71c1c67d2e8ac95ab7eb0d568",
"assets/assets/images/level%2520iv%2520item%2520iii.png": "849c5e57abc02af07c6cbcb3228ff5a0",
"assets/assets/images/ground%2520level%2520iii.png": "de823f8f9b76b56a01b44b8af33928c9",
"assets/assets/images/level%2520iv%2520item%2520vii.png": "d2f810dcc1c46a0b2eefcd2f330c1e29",
"assets/assets/images/small%2520stone.png": "975ea5d6c7482e4cb9f59d69eddaee67",
"assets/assets/images/youwon.png": "f8e089a486824b025c58677c38afdc88",
"assets/assets/images/background.png": "279624a38f2e81621b7d10ba03df9e92",
"assets/assets/images/item%2520iv.png": "77faaf095e986057c69091058cff6291",
"assets/assets/images/level%2520iv%2520item%2520ii.png": "487ba5af0df5bdbd7cb5dd9e32fb9a22",
"assets/assets/images/menu.png": "3682b21fb99ddb8e22a57bba1a8c920e",
"assets/assets/images/score.png": "3622d5d4a4bde7d5a1efbbde8c8a2c3b",
"assets/assets/images/background%2520level%2520ii.png": "904fe34ed82f5a78a202301fdee0731b",
"assets/assets/images/next%2520level.png": "47e9379e74f5a5b6670c3c51c4264fd1",
"assets/assets/images/gameover.png": "ec38d7ad91b56606d9883b486dfe70aa",
"assets/assets/images/ground.png": "09e8a45f1182c65c58cb9cf9fc5e98b8",
"assets/assets/images/item%2520iii.png": "956de2511069eda437d57c571bc3d835",
"assets/assets/images/level%2520iii%2520item%2520vi.png": "c8c58140c4f24bb9bc65d0938fc88c56",
"assets/assets/images/level%2520iv%2520item%2520i.png": "52fa46e9efd7d7fa8e039f25d7ff8067",
"assets/assets/images/level%2520iv%2520item%2520vi.png": "7df1516edfdbb25d685f7f2331f96d09",
"assets/assets/images/ground%2520level%2520ii.png": "44fe9c454092af67be8c9bdf589e3f5a",
"assets/assets/images/level%2520iii%2520item%2520x.png": "0f556b35323dc4c02a821176f2b37ec0",
"assets/assets/images/pipe.png": "091333756afc93b5b7990b1ee4c43e63",
"assets/assets/images/play%2520again.png": "79f8692d6714ad8804a8852f4fe4c84c",
"assets/assets/images/level%2520iii%2520item%2520ix.png": "3cd51447cb0c9e38cce7b23c17c29a0b",
"assets/assets/images/level%2520iii%2520item%2520viii.png": "cec7b006e5f414ae7cebfe3c295151bf",
"assets/assets/images/item%2520i.png": "6eacc188c66522d7a6d710cebdc7b571",
"assets/assets/images/background%2520level%2520iii.png": "654789b133afecf013ed726904e4603b",
"assets/assets/images/level%2520iii%2520item%2520i.png": "a075d72d85479946c627bf06e9dd0a0f",
"assets/assets/images/message.png": "c9f52bc5784a34ca18d9fe501ad1451f",
"assets/assets/images/play.png": "08d058ae9849fd98741b73e32687c48c",
"assets/assets/images/setting.png": "61b29e4a5a82736976c0b77cab967e09",
"assets/assets/images/middle%2520stone.png": "77da16db9176c65b4217ccece8151853",
"assets/assets/images/level%2520iii%2520item%2520ii.png": "0beed2b4da882399b2499543886145d0",
"assets/assets/images/welcome.png": "165e27251ad2a9b6f137d7fe5891f06e",
"assets/assets/images/pipe_rotated.png": "fe5ae3384732b22c8bb0ce7eabfbecf1",
"assets/assets/audio/pickupCoin.wav": "be7925288f935600210189f31227894f",
"assets/assets/audio/boom.wav": "37272f404bed854d51425f5edb37bd33",
"assets/assets/audio/backgroundMusic.mp3": "1d8befa91c45e251d4ca898969b268ff",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
