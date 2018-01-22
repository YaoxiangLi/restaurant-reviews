self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('restaurant-reviews').then(cache => {
      return cache.addAll([
        '/restaurant-reviews/',
        '/restaurant-reviews/css/styles.css',
        '/restaurant-reviews/js/dbhelper.js',
        '/restaurant-reviews/js/main.js',
        '/restaurant-reviews/js/restaurant_info.js',
        '/restaurant-reviews/data/restaurants.json',
      ]);
    })
  )
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});