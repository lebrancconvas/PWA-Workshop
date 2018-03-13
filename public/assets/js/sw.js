self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open('video-store').then(function(cache)){
      return cache.addAll([
        'index.html',
        'assets/css/style.css',
        'assets/images/aitakatta.jpg',
        'assets/images/gallerylogo.png',
        'assets/images/tarwann02.gif'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e){
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response){
      return response || fetch(e.request);
    })
  );
});
