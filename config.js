// Configuración de la base de datos compartida (Firebase Realtime Database).
//
// Mientras esto valga null, la página funciona igual pero guarda los datos solo en
// el navegador de cada uno. En cuanto pegues aquí la configuración de tu proyecto,
// la rueda pasa a ser compartida y en tiempo real para todos.
//
// La configuración se copia de la consola de Firebase, en
// Configuración del proyecto → Tus apps → App web, y tiene esta forma:
//
// window.RUEDA_FIREBASE = {
//   apiKey: "AIza...",
//   authDomain: "rueda-del-coche.firebaseapp.com",
//   databaseURL: "https://rueda-del-coche-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "rueda-del-coche",
//   appId: "1:123456789:web:abc123"
// };
//
// El campo imprescindible es databaseURL. Estos valores no son secretos: van en
// cualquier web que use Firebase y están pensados para ser públicos.

window.RUEDA_FIREBASE = null;
