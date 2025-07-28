// console.log('Service worker waking up! ')

// // self.addEventListener('install', event => {
// //     console.log('NEW Service worker installed!')
// // })

// self.addEventListener('fetch', event => {
//     event.respondWith(
//         caches.match(event.request)
//         .then(response => {
//             return response || fetch(event.request)
//         })
//     )
// })

// self.addEventListener('notificationclick', function(event) {
//   event.notification.close();
//   event.waitUntil(
//     clients.openWindow(event.notification.data.url)
//   );
// });

// self.addEventListener('activate', event => {
//     console.log('NEWWWWW Service worker activated!!')
// }) 



