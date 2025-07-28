console.log('Acordou o service worker')

// Exibe a notificação quando o push chega
self.addEventListener('push', function (event) {
  console.log('recebeu o push')
  const data = event.data.text();
  self.registration.showNotification('MENSAGEM VINDA DO SERVICE WORKER DO FRONT', {
    body: data,
    icon: 'icon.png'
  });
});