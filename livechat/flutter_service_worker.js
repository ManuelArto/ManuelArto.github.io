'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/assets/images/profile_icon.jpg": "507430d90c03b60d188c4c855c8a2b3c",
"assets/AssetManifest.json": "00c215f4c6f5efdc932f1f88ece3fa10",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "9e83250cf04d26f622fc815b7dabd8ed",
"main.dart.js": "572aaa8708966a03ddc6850413fd503a",
"index.html": "b4c4f86becd7452925be2b6ae4b18399",
"/": "b4c4f86becd7452925be2b6ae4b18399",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "c4b26f803a4a9c8901a3c417814298e2"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
