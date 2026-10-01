# Rueda del coche

Panel para llevar la cuenta de la rueda de coche del trabajo: quién conduce cada día
de la semana y cuántos viajes acumula cada persona.

Es una sola página HTML sin dependencias que instalar. Ábrela en el navegador
(`index.html`) o publícala con GitHub Pages.

## La rueda

| Día       | Coche 1                      | Coche 2      |
|-----------|------------------------------|--------------|
| Lunes     | Juan Manuel · Sonia · José   | —            |
| Martes    | Juan Manuel · Sonia          | Tere · José  |
| Miércoles | Juan Manuel · Rosa · José    | —            |
| Jueves    | Juan Manuel · Sonia · José   | —            |
| Viernes   | Juan Manuel · Sonia          | Tere · José  |

Para cambiar los grupos, edita las constantes `PEOPLE` y `DAYS` al principio del
`<script>` de `index.html`.

## Cómo se usa

- Una tarjeta por día, con su fecha real. Se navega entre semanas con
  **‹ Semana** / **Semana ›**, y **Hoy** vuelve a la semana en curso.
- Cada uno elige su nombre en **Soy**. Queda guardado en su dispositivo, su nombre
  aparece marcado con una etiqueta *tú* y le sale el botón **Hoy conduzco yo**, que
  es un atajo de un toque para el coche que le toca hoy.
- Para marcar cualquier otro día basta con pulsar el nombre de quien conduce.
  Pulsarlo otra vez, o **Quitar**, lo deshace.
- Mientras un coche no tiene conductor, la tarjeta sugiere **«Le toca a…»**: la
  persona de ese grupo que menos veces ha conducido ese día de la semana.
- La tabla de abajo cuenta los viajes por persona y por día de la semana, en
  acumulado o solo de la semana que estés viendo. Los puntos grises son días en los
  que esa persona no va en el coche.

## Base de datos compartida

Para que un cambio de cualquiera aparezca al momento en el móvil de los demás, la
página usa **Firebase Realtime Database** (plan gratuito de Google). Nadie necesita
registrarse ni iniciar sesión: basta con abrir el enlace.

La conexión se configura en `config.js`. Mientras ese archivo valga `null`, la
página sigue funcionando, pero guarda los datos solo en el navegador de cada uno y
no se comparten.

### Darla de alta (una sola vez)

1. En [console.firebase.google.com](https://console.firebase.google.com), crear un
   proyecto (Google Analytics no hace falta).
2. **Compilación → Realtime Database → Crear base de datos**. Elegir la región de
   Europa y empezar en **modo de prueba**.
3. En **Reglas**, dejar la rama `semanas` abierta a lectura y escritura:

   ```json
   {
     "rules": {
       "semanas": { ".read": true, ".write": true }
     }
   }
   ```

4. **Configuración del proyecto → Tus apps → Web** para registrar una app y copiar
   su objeto de configuración.
5. Pegarlo en `config.js` y hacer push. El sitio queda sincronizado en un minuto.

Esos valores no son secretos: viajan en cualquier web que use Firebase. Sí conviene
saber que, con las reglas abiertas, cualquiera que llegue a la dirección del
proyecto podría modificar la rueda. Para cinco personas y un cuadro de turnos es un
riesgo asumible; si molestara, se cierra con autenticación anónima.

## Publicado

El panel está en línea en **https://josejmaruce.github.io/rueda-del-coche/**

GitHub Pages lo sirve desde la rama `main`, carpeta `/ (root)`, así que cada push a
`main` actualiza el sitio en un minuto.
