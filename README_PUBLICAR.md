# Cómo publicar la página web de Stocky (gratis)

Esta carpeta (`web_publica`) es la página web pública de Stocky: la portada,
los Términos, la Política de privacidad, la de Reembolsos y la página
"Eliminar tu cuenta" (Google Play la pide), en español, inglés, portugués y
francés. Se publica **gratis** con **GitHub Pages**.

> **Importante:** el repositorio de la página es **otro**, distinto del código
> de la app. Solo se sube **esta carpeta**. El código de la app
> (`tracker_inicio`) se queda **privado en tu PC** y **no** se sube.

## Antes de empezar: el correo

El correo de contacto está en **un solo archivo**: `correo.js`. Ábrelo con el
Bloc de notas y cambia lo que está entre comillas:

```js
var CORREO_STOCKY = 'soporte.stocky@gmail.com';
```

(En la app el correo está en `lib/comun/constantes.dart`, en
`correoSoporte`. Si cambias uno, cambia el otro.)

## Paso 1. Crear una cuenta gratis en GitHub

1. Entra a <https://github.com> y toca **Sign up**.
2. Escribe tu correo, una contraseña y un **nombre de usuario**. Ese nombre
   va a ser parte de la dirección de la página (por ejemplo, si eliges
   `stockyapp`, la página será `https://stockyapp.github.io/stocky/`).
3. Confirma el correo con el código que te llega. Elige el plan **Free**
   (gratis).

## Paso 2. Crear el repositorio "stocky" (público)

1. Arriba a la derecha toca **+** › **New repository**.
2. En **Repository name** escribe: `stocky`
3. Marca **Public** (público). GitHub Pages gratis solo funciona con
   repositorios públicos. No pasa nada: aquí solo va la página, que de todas
   formas es pública.
4. No marques nada más. Toca **Create repository**.

## Paso 3. Subir los archivos

1. En el repositorio nuevo, toca el enlace **uploading an existing file**
   (o **Add file** › **Upload files**).
2. Abre esta carpeta `web_publica` en el Explorador de Windows, selecciona
   **todo lo de adentro** (los archivos `.html`, `estilo.css`, `correo.js`,
   `logo.png` y las carpetas `en`, `pt` y `fr`) y **arrástralo** a la página
   de GitHub. Las carpetas se suben con lo que tienen adentro.
   - Este archivo (`README_PUBLICAR.md`) **no hace falta** subirlo.
   - No arrastres la carpeta `web_publica` misma, sino lo que tiene adentro:
     `index.html` tiene que quedar en la primera página del repositorio.
3. Abajo, toca **Commit changes** (es como "Guardar").

## Paso 4. Encender GitHub Pages

1. En el repositorio, toca **Settings** (arriba).
2. En el menú de la izquierda, toca **Pages**.
3. En **Build and deployment** › **Source**, elige **Deploy from a branch**.
4. En **Branch**, elige **main** y la carpeta **/ (root)**. Toca **Save**.
5. Espera uno o dos minutos y recarga la página: arriba sale
   **"Your site is live at …"**.

## Paso 5. La dirección

La página queda en:

```
https://USUARIO.github.io/stocky/
```

(cambiando `USUARIO` por tu nombre de usuario de GitHub). Las otras páginas:

- `https://USUARIO.github.io/stocky/privacidad.html`
- `https://USUARIO.github.io/stocky/terminos.html`
- `https://USUARIO.github.io/stocky/eliminar-cuenta.html`
- En inglés, portugués y francés: agrega `en/`, `pt/` o `fr/` antes del
  nombre (por ejemplo `https://USUARIO.github.io/stocky/en/privacidad.html`).

Estas son las direcciones que pide Google Play (Política de privacidad y
"Eliminar cuenta").

## Paso 6. Avisarle a la app

Cuando la página ya funcione, pásale la dirección a Claude para que la ponga
en la app: es una sola línea, `urlBaseWeb` en `lib/comun/constantes.dart`.
Mientras diga `USUARIO`, la app **no** muestra el enlace "Ver en la web" (así
nunca hay un enlace roto).

## Para cambiar algo después

- **Solo el correo:** cambia `correo.js` y súbelo otra vez (Add file › Upload
  files; GitHub reemplaza el archivo viejo).
- **Los textos:** se cambian en la app y Claude vuelve a armar la página con
  `scripts/generar_web_publica.dart`. Después subes otra vez los archivos.

## Qué tiene la página

- Nada de afuera: sin cookies, sin rastreadores, sin estadísticas y sin letras
  ni scripts de otros sitios. Solo HTML, `estilo.css` y `correo.js` (que pone
  el correo).
- Modo claro y oscuro según el teléfono, y se ve bien en el celular.
