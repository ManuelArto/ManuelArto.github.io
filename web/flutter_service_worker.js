'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/FontManifest.json": "18eda8e36dfa64f14878d07846d6e17f",
"assets/assets/images/hotel2.jpg": "07a77366730e5997e096c7eac049c787",
"assets/assets/images/santorini.jpg": "d26bfc72030a1f0eac63ef62b9d2182a",
"assets/assets/images/paris.jpg": "6f5ad05e3583bfcdb378690cab52c4c7",
"assets/assets/images/gondola.jpg": "689ae95c953be8371a3c997302cf688d",
"assets/assets/images/newdelhi.jpg": "56450a1054fcf15bab1f51af0fa90281",
"assets/assets/images/murano.jpg": "74851df25b8f4bca02afcfe05a0b7169",
"assets/assets/images/stmarksbasilica.jpg": "d9dfdeebfc0b8d65bf8e519867838247",
"assets/assets/images/hotel1.jpg": "bc9826c3d7c3c5128c62b916baa59aed",
"assets/assets/images/venice.jpg": "10346f88226e7c8892e95033ba5430c0",
"assets/assets/images/newyork.jpg": "0b02b13a33b63100c799a803b51a748f",
"assets/assets/images/hotel0.jpg": "c5737b99f507741f5f36e8db10c0e9d8",
"assets/assets/images/saopaulo.jpg": "ffd521b1a80910a94c21ffe39a664268",
"assets/AssetManifest.json": "34a4c5e6cb6e1f78cfb83b2f2db8075e",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "0000d255865246c9b55862d96ffd3089",
"main.dart.js": "f46e9578480fcdd4eed1c5b6bf0da1f2",
"index.html": "0aeb404b72d6a7c35aaed28727e7019f",
"/": "0aeb404b72d6a7c35aaed28727e7019f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "e398996c61f0b7dff79b75f9814d7520"
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
