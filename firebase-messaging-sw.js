// firebase-messaging-sw.js
// Give the service worker access to Firebase Messaging.
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker with YOUR config
firebase.initializeApp({
  apiKey: "AIzaSyC7kppUyHUaPzeLBV62NEZWuHiuz1Kz0mA",
  authDomain: "mugera-e51cc.firebaseapp.com",
  databaseURL: "https://mugera-e51cc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mugera-e51cc",
  storageBucket: "mugera-e51cc.firebasestorage.app",
  messagingSenderId: "1024868637509",
  appId: "1:1024868637509:web:321faecddce8f11d9cfc2c"
});

// Retrieve an instance of Firebase Messaging
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  // Customize notification here
  const notificationTitle = payload.notification?.title || 'I AM MUGERA';
  const notificationOptions = {
    body: payload.notification?.body || 'New update available',
    icon: 'https://i.postimg.cc/Kzsb3tX6/I-AM-MUGERA.png',
    badge: 'https://i.postimg.cc/Kzsb3tX6/I-AM-MUGERA.png',
    image: payload.notification?.image,
    data: payload.data || {},
    actions: [
      {
        action: 'open',
        title: 'Open'
      },
      {
        action: 'close',
        title: 'Close'
      }
    ],
    tag: 'mugera-notification',
    renotify: true,
    requireInteraction: false,
    silent: false,
    vibrate: [200, 100, 200]
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification click events
self.addEventListener('notificationclick', (event) => {
  console.log('Notification clicked:', event.notification);
  event.notification.close();
  
  const urlToOpen = event.notification.data?.url || '/';
  
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then((clientList) => {
        // Check if there's already a window/tab open with the target URL
        for (const client of clientList) {
          if (client.url === urlToOpen && 'focus' in client) {
            return client.focus();
          }
        }
        // If not, open a new window/tab
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      })
  );
});

// Optional: Handle notification close event
self.addEventListener('notificationclose', (event) => {
  console.log('Notification closed:', event.notification);
  // You can track notification dismissals here
});
