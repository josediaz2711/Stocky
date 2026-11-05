// El correo de contacto de Stocky. Para cambiarlo, cambia SOLO la línea
// de abajo (lo de entre comillas) y vuelve a subir este archivo.
var CORREO_STOCKY = 'soporte.stocky@gmail.com';

// Pone el correo en cada enlace marcado con data-correo.
document.querySelectorAll('[data-correo]').forEach(function (a) {
  var asunto = a.getAttribute('data-asunto');
  a.textContent = CORREO_STOCKY;
  a.href = 'mailto:' + CORREO_STOCKY +
    (asunto ? '?subject=' + encodeURIComponent(asunto) : '');
});
