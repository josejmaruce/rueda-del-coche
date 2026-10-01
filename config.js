// Base de datos compartida de la rueda (Firebase Realtime Database, plan gratuito).
//
// Estos valores no son secretos: viajan en el código de cualquier web que use
// Firebase y están pensados para ser públicos. Quien protege los datos son las
// reglas de la base de datos, que solo abren la rama "semanas":
//
//   { "rules": { "semanas": { ".read": true, ".write": true } } }
//
// Si algún día se pone a null, la página sigue funcionando pero cada navegador
// guarda su propia copia y deja de compartirse.

window.RUEDA_FIREBASE = {
  apiKey: "AIzaSyB8shzFyKYTA7Iqc7-Z9W6CAFwGRdeHIcA",
  authDomain: "rueda-del-coche.firebaseapp.com",
  databaseURL: "https://rueda-del-coche-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rueda-del-coche",
  storageBucket: "rueda-del-coche.firebasestorage.app",
  messagingSenderId: "1059719963453",
  appId: "1:1059719963453:web:84447c5377944d2d8f9b54"
};
