this.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v1').then(function(cache) {
        return cache.addAll([
          '/websitewithapi/',
          '/websitewithapi/index.html',
          '/websitewithapi/style.css',
          '/websitewithapi/app.js',
        ]);
      })
    );
});

this.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
    );
  });