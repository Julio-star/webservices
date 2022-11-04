this.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v1').then(function(cache) {
        return cache.addAll([
          '/webservices/',
          '/webservices/index.html',
          '/webservices/style.css',
          '/webservices/app.js',
        ]);
      })
    );
    console.log("cache open : success");
});

this.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
    );
    console.log("respond With : success");
  });