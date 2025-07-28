/////////////////////////////////

// Importa as libs compatíveis do Firebase para o Service Worker
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

// Configuração do Firebase
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAFGU7tSUvotKlQMq8jWhUEhosWGBHwVvc",
  authDomain: "push-notifications-2af82.firebaseapp.com",
  projectId: "push-notifications-2af82",
  storageBucket: "push-notifications-2af82.firebasestorage.app",
  messagingSenderId: "3350963985",
  appId: "1:3350963985:web:20fae0ade19e1573060eb0",
  measurementId: "G-XRLG01JQJD"
})

// Obtém o messaging do Firebase
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customiza a notificação
  const notificationTitle = payload.notification.title || 'Background Message Title';
  const notificationOptions = {
    body: payload.notification.body || 'Background Message body.',
    icon: '/firebase-logo.png'
  };
  console.log(notificationTitle)
  console.log(notificationOptions)
  // self.registration.showNotification();
});

