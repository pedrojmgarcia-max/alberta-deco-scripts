// Alberta Deco - Scripts home completos

// ── Clarity ──────────────────────────────────────────
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "w24yvqihsb");

// ── Notificaciones ────────────────────────────────────
setTimeout( ()=>{ try { nt.setSt(); } catch(e){} }, 8000);
if( window.location.pathname.indexOf('/success') != -1 ){
  var intervalNtB = setInterval( ()=>{
    try { 
      nt.notifyPermit('action'); 
      clearInterval(intervalNtB);
    }catch(err){}
  }, 1000);
}

// ── Banner deslizante verde ───────────────────────────
document.addEventListener('DOMContentLoaded', function() {
    var header = document.createElement('div');
    header.className = 'sliding-header';
    header.style.cssText = 'background-color: rgba(0, 128, 0, 0.9); color: white; font-family: Montserrat, sans-serif; overflow: hidden; position: relative; height: 40px; display: flex; align-items: center; justify-content: center; width: 100%;';
    var textElement = document.createElement('div');
    textElement.className = 'sliding-text';
    textElement.style.cssText = 'position: absolute; width: 100%; text-align: center; opacity: 0; transform: translateY(100%); transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;';
    header.appendChild(textElement);
    document.body.insertBefore(header, document.body.firstChild);
    var messages = [
        "Transformando Hogares y Vidas, un cuadro a la vez \u2728",
        "Envio gratis en compras superiores a $10.000 \uD83D\uDE9A",
        "25% OFF pagando con transferencia bancaria \uD83D\uDCB3",
        "3 cuotas sin interes disponibles \u2705",
        "Produccion propia en Tandil - Calidad premium \uD83C\uDFA8"
    ];
    var currentIndex = 0;
    function showMessage(index) {
        textElement.style.transform = 'translateY(100%)';
        textElement.style.opacity = '0';
        setTimeout(function() {
            textElement.textContent = messages[index];
            textElement.style.transform = 'translateY(0)';
            textElement.style.opacity = '1';
        }, 500);
    }
    showMessage(0);
    setInterval(function() {
        textElement.style.transform = 'translateY(-100%)';
        textElement.style.opacity = '0';
        setTimeout(function() {
            currentIndex = (currentIndex + 1) % messages.length;
            showMessage(currentIndex);
        }, 500);
    }, 3500);
});

// ── Bloques persuasivos home ──────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  if (!document.querySelector('.template-home')) return;
  var container = document.querySelector('.js-home-sections-container');
  if (!container) return;

  // BLOQUE 1: Propuesta de valor
  var propuesta = document.createElement('div');
  propuesta.className = 'ad-bloque-propuesta';
  propuesta.innerHTML = '<p class="ad-bloque-propuesta__headline">Cuadros de <em>ecocuero premium</em><br>hechos en Argentina</p><p class="ad-bloque-propuesta__sub">Impresion eco-solvente profesional - Marco de pino anejo - Calidad europea al precio local - Enviamos a todo el pais</p><span class="ad-bloque-propuesta__badge">+800 hogares ya transformaron sus paredes</span>';
  container.insertBefore(propuesta, container.firstChild);

  // BLOQUE 2: Por que Alberta Deco
  var porque = document.createElement('div');
  porque.className = 'ad-bloque-porque';
  porque.innerHTML = '<div class="ad-bloque-porque__item"><div class="ad-bloque-porque__icon">\uD83C\uDF3F</div><div class="ad-bloque-porque__titulo">Ecocuero premium</div><div class="ad-bloque-porque__desc">Material resistente, facil de limpiar, acabado de lujo</div></div><div class="ad-bloque-porque__item"><div class="ad-bloque-porque__icon">\uD83E\uDEB5</div><div class="ad-bloque-porque__titulo">Marco pino anejo</div><div class="ad-bloque-porque__desc">Estructura solida, lista para colgar sin herramientas</div></div><div class="ad-bloque-porque__item"><div class="ad-bloque-porque__icon">\uD83D\uDE9A</div><div class="ad-bloque-porque__titulo">Envio gratis</div><div class="ad-bloque-porque__desc">A todo el pais, protegido y asegurado sin cargo extra</div></div><div class="ad-bloque-porque__item"><div class="ad-bloque-porque__icon">\uD83D\uDCB3</div><div class="ad-bloque-porque__titulo">3 cuotas sin interes</div><div class="ad-bloque-porque__desc">O 25% off pagando con transferencia bancaria</div></div>';
  var primeraSeccion = container.querySelector('.section-featured-home, .section-banners-home');
  if (primeraSeccion) {
    container.insertBefore(porque, primeraSeccion.nextSibling);
  } else {
    container.appendChild(porque);
  }

  // BLOQUE 3: Como llega a tu casa
  var pasos = document.createElement('div');
  pasos.className = 'ad-bloque-pasos';
  pasos.innerHTML = '<div class="ad-bloque-pasos__titulo">Como llega tu cuadro? <span>Simple y seguro</span></div><div class="ad-bloque-pasos__grid"><div class="ad-bloque-pasos__paso"><div class="ad-bloque-pasos__numero">1</div><div class="ad-bloque-pasos__texto"><h4>Elegis tu diseno</h4><p>Seleccionas el modelo y tamano que mas te guste. Si tenes dudas, te asesoramos por WhatsApp.</p></div></div><div class="ad-bloque-pasos__paso"><div class="ad-bloque-pasos__numero">2</div><div class="ad-bloque-pasos__texto"><h4>Lo producimos para vos</h4><p>Imprimimos con equipos Roland profesionales y lo enmarcamos con pino anejo en nuestro taller en Tandil.</p></div></div><div class="ad-bloque-pasos__paso"><div class="ad-bloque-pasos__numero">3</div><div class="ad-bloque-pasos__texto"><h4>Llega protegido a tu puerta</h4><p>Embalaje reforzado, listo para colgar. Sin costo adicional de envio a todo Argentina.</p></div></div></div>';
  var secciones = container.querySelectorAll('.section-featured-home');
  if (secciones.length >= 2) {
    container.insertBefore(pasos, secciones[1].nextSibling);
  } else {
    container.appendChild(pasos);
  }

  // BLOQUE 4: Resenas
  var resenas = document.createElement('div');
  resenas.className = 'ad-bloque-resenas';
  resenas.innerHTML = '<div class="ad-bloque-resenas__titulo">Lo que dicen nuestros clientes \u2B50</div><div class="ad-bloque-resenas__subtitulo">+800 hogares - Calificacion promedio 5/5</div><div class="ad-bloque-resenas__grid"><div class="ad-resena"><div class="ad-resena__estrellas">\u2605\u2605\u2605\u2605\u2605</div><div class="ad-resena__texto">Llego perfectamente embalado, en tiempo record y es exactamente como en las fotos. La calidad del material es increible, parece mucho mas caro de lo que es.</div><div class="ad-resena__autor"><div class="ad-resena__avatar">M</div><div><div class="ad-resena__nombre">Mariana G.</div><div class="ad-resena__ciudad">Buenos Aires</div></div></div></div><div class="ad-resena"><div class="ad-resena__estrellas">\u2605\u2605\u2605\u2605\u2605</div><div class="ad-resena__texto">Compre el pack de 3 y quedo espectacular en el living. Mis amigas me preguntaron donde lo consegui. Lo recomiendo a todo el mundo.</div><div class="ad-resena__autor"><div class="ad-resena__avatar">C</div><div><div class="ad-resena__nombre">Carolina S.</div><div class="ad-resena__ciudad">Cordoba</div></div></div></div><div class="ad-resena"><div class="ad-resena__estrellas">\u2605\u2605\u2605\u2605\u2605</div><div class="ad-resena__texto">Regale uno y fue un exito total. El packaging tambien es bonito, llega en condiciones perfectas. Ya hice mi segundo pedido.</div><div class="ad-resena__autor"><div class="ad-resena__avatar">F</div><div><div class="ad-resena__nombre">Florencia M.</div><div class="ad-resena__ciudad">Rosario</div></div></div></div></div>';
  var lastFeatured = container.querySelector('[data-store="home-products-featured"]');
  if (lastFeatured) {
    container.insertBefore(resenas, lastFeatured.nextSibling);
  } else {
    container.appendChild(resenas);
  }

  // BLOQUE 5: Garantias
  var garantias = document.createElement('div');
  garantias.className = 'ad-bloque-garantias';
  garantias.innerHTML = '<div class="ad-bloque-garantias__titulo">Compras con total tranquilidad</div><div class="ad-bloque-garantias__grid"><div class="ad-garantia"><div class="ad-garantia__icon">\uD83D\uDD12</div><div class="ad-garantia__texto">Pago 100% seguro<span>Mercado Pago - Transferencia</span></div></div><div class="ad-garantia"><div class="ad-garantia__icon">\uD83D\uDD04</div><div class="ad-garantia__texto">Cambio sin costo<span>Si hay algun problema, te lo solucionamos</span></div></div><div class="ad-garantia"><div class="ad-garantia__icon">\uD83C\uDFED</div><div class="ad-garantia__texto">Produccion propia<span>Taller en Tandil - Control de calidad</span></div></div><div class="ad-garantia"><div class="ad-garantia__icon">\u26A1</div><div class="ad-garantia__texto">Respuesta inmediata<span>WhatsApp - Lun a Sab 9 a 20hs</span></div></div></div>';
  var footer = document.querySelector('.js-footer');
  if (footer) {
    footer.parentNode.insertBefore(garantias, footer);
  } else {
    document.body.appendChild(garantias);
  }

});
