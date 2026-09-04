importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

// As mesmas credenciais do seu projeto gchat-2093a
firebase.initializeApp({
  projectId: "gchat-2093a",
  authDomain: "gchat-2093a.firebaseapp.com",
  storageBucket: "gchat-2093a.appspot.com",
  apiKey: "AIzaSyBuZLQHMgCDRYuIjXyQ50yxtY86CKO9qic", 
  messagingSenderId: "128934138526", 
  appId: "1:128934138526:web:8f74ba5f94961114cca18f"
});

const messaging = firebase.messaging();

// Handler para receber e exibir a notificação no Android quando a página estiver fechada
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Recebeu mensagem em segundo plano: ', payload);
  
  const notificationTitle = payload.notification.title || "💬 Google Chat";
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://ssl.gstatic.com/chat/resources/q/images/chat_app_icon.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});