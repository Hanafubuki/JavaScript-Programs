importScripts('/cache-polyfill.js');
self.addEventListener('install', function(e) {
	e.waitUntil(
		caches.open('askrick').then(function(cache) {
			return cache.addAll([
				'/',
				'/index.html',
				'/index.html?homescreen=1',
				'/?homescreen=1',
				'/css/main.css',
				'/css/mobile.css',
				'/css/jquery-3.2.1.min.css',
				'/img/ask.jpg',
				'/img/ask2.jpg',
				'/../src/App.js',
				'/../src/components/AddPost.js',
				'/../src/components/EachPost.js',
				'/../src/components/Posts.js',
				'/../src/components/public/posts.css'
			]).then(() => self.skipWaiting());
		})
	);
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});
