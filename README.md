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
- Pulsa el nombre de quien conduce ese día; se marca con un volante. Pulsarlo otra
  vez, o **Quitar**, lo deshace.
- Mientras un coche no tiene conductor, la tarjeta sugiere **«Le toca a…»**: la
  persona de ese grupo que menos veces ha conducido ese día de la semana.
- La tabla de abajo cuenta los viajes por persona y por día de la semana, en
  acumulado o solo de la semana que estés viendo. Los puntos grises son días en los
  que esa persona no va en el coche.

## Dónde se guardan los datos

Esta copia guarda la rueda en el **almacenamiento local del navegador**: los datos
se quedan en el dispositivo de quien la abre y no se comparten entre personas.

La misma página, publicada como artefacto en claude.ai, usa en su lugar la base de
datos compartida del artefacto, de modo que todo el grupo ve y actualiza la misma
rueda. El código detecta cuál de las dos tiene disponible al cargar.

## Publicar con GitHub Pages

En **Settings → Pages**, origen *Deploy from a branch*, rama `main` y carpeta `/ (root)`.
La página queda en `https://<usuario>.github.io/<repositorio>/`.
