// Alberta Deco - Scripts home completos

(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "w24yvqihsb");

setTimeout(function(){ try { nt.setSt(); } catch(e){} }, 8000);
if(window.location.pathname.indexOf('/success') != -1){
  var intervalNtB = setInterval(function(){
    try { nt.notifyPermit('action'); clearInterval(intervalNtB); }catch(err){}
  }, 1000);
}

var _bannerTimer = setInterval(function() {
  if (!document.body) return;
  clearInterval(_bannerTimer);
  var header = document.createElement('div');
  header.style.cssText = 'background-color:rgba(0,128,0,0.9);color:white;font-family:Montserrat,sans-serif;overflow:hidden;position:relative;height:40px;display:flex;align-items:center;justify-content:center;width:100%;';
  var txt = document.createElement('div');
  txt.style.cssText = 'position:absolute;width:100%;text-align:center;opacity:0;transform:translateY(100%);transition:transform 0.5s ease-in-out,opacity 0.5s ease-in-out;';
  header.appendChild(txt);
  document.body.insertBefore(header, document.body.firstChild);
  var msgs = [
    "Transformando Hogares y Vidas, un cuadro a la vez",
    "Envio gratis en compras superiores a $10.000",
    "25% OFF pagando con transferencia bancaria",
    "3 cuotas sin interes disponibles",
    "Produccion propia en Tandil - Calidad premium"
  ];
  var idx = 0;
  function show(i) {
    txt.style.transform='translateY(100%)';
    txt.style.opacity='0';
    setTimeout(function(){ txt.textContent=msgs[i]; txt.style.transform='translateY(0)'; txt.style.opacity='1'; }, 500);
  }
  show(0);
  setInterval(function(){
    txt.style.transform='translateY(-100%)';
    txt.style.opacity='0';
    setTimeout(function(){ idx=(idx+1)%msgs.length; show(idx); }, 500);
  }, 3500);
}, 100);

var _adTimer = setInterval(function() {
  if (!document.querySelector('.template-home')) { clearInterval(_adTimer); return; }
  var container = document.querySelector('.js-home-sections-container');
  if (!container) return;
  clearInterval(_adTimer);

  var b1 = document.createElement('div');
  b1.className = 'ad-bloque-propuesta';
  b1.innerHTML = '<p class="ad-bloque-propuesta__headline">Cuadros de <em>ecocuero premium</em><br>hechos en Argentina</p><p class="ad-bloque-propuesta__sub">Impresion eco-solvente profesional - Marco de pino anejo - Calidad europea al precio local - Enviamos a todo el pais</p><span class="ad-bloque-propuesta__badge">+800 hogares ya transformaron sus paredes</span>';
  container.insertBefore(b1, container.firstChild);

  var b2 = document.createElement('div');
  b2.className = 'ad-bloque-porque';
  b2.innerHTML = '<div class="ad-bloque-porque__item"><div class="ad-bloque-porque__icon">&#127807;</div><div class="ad-bloque-porque__titulo">Ecocuero premium</div><div class="ad-bloque-porque__desc">Material resistente, facil de limpiar, acabado de lujo</div></div><div class="ad-bloque-porque__item"><div class="ad-bloque-porque__icon">&#129717;</div><div class="ad-bloque-porque__titulo">Marco pino anejo</div><div class="ad-bloque-porque__desc">Estructura solida, lista para colgar sin herramientas</div></div><div class="ad-bloque-porque__item"><div class="ad-bloque-porque__icon">&#128666;</div><div class="ad-bloque-porque__titulo">Envio gratis</div><div class="ad-bloque-porque__desc">A todo el pais, protegido y asegurado sin cargo extra</div></div><div class="ad-bloque-porque__item"><div class="ad-bloque-porque__icon">&#128179;</div><div class="ad-bloque-porque__titulo">3 cuotas sin interes</div><div class="ad-bloque-porque__desc">O 25% off pagando con transferencia bancaria</div></div>';
  var s1 = container.querySelector('.section-featured-home, .section-banners-home');
  if (s1) { container.insertBefore(b2, s1.nextSibling); } else { container.appendChild(b2); }

  var b3 = document.createElement('div');
  b3.className = 'ad-bloque-pasos';
  b3.innerHTML = '<div class="ad-bloque-pasos__titulo">Como llega tu cuadro? <span>Simple y seguro</span></div><div class="ad-bloque-pasos__grid"><div class="ad-bloque-pasos__paso"><div class="ad-bloque-pasos__numero">1</div><div class="ad-bloque-pasos__texto"><h4>Elegis tu diseno</h4><p>Seleccionas el modelo y tamano. Si tenes dudas, te asesoramos por WhatsApp.</p></div></div><div class="ad-bloque-pasos__paso"><div class="ad-bloque-pasos__numero">2</div><div class="ad-bloque-pasos__texto"><h4>Lo producimos para vos</h4><p>Impresion Roland profesional, enmarcado con pino anejo en nuestro taller en Tandil.</p></div></div><div class="ad-bloque-pasos__paso"><div class="ad-bloque-pasos__numero">3</div><div class="ad-bloque-pasos__texto"><h4>Llega protegido a tu puerta</h4><p>Embalaje reforzado, listo para colgar. Envio sin costo a todo Argentina.</p></div></div></div>';
  var ss = container.querySelectorAll('.section-featured-home');
  if (ss.length >= 2) { container.insertBefore(b3, ss[1].nextSibling); } else { container.appendChild(b3); }

  var b4 = document.createElement('div');
  b4.className = 'ad-bloque-resenas';
  b4.innerHTML = '<div class="ad-bloque-resenas__titulo">Lo que dicen nuestros clientes &#11088;</div><div class="ad-bloque-resenas__subtitulo">+800 hogares - Calificacion promedio 5/5</div><div class="ad-bloque-resenas__grid"><div class="ad-resena"><div class="ad-resena__estrellas">&#9733;&#9733;&#9733;&#9733;&#9733;</div><div class="ad-resena__texto">Llego perfectamente embalado, en tiempo record y es exactamente como en las fotos. La calidad es increible, parece mucho mas caro de lo que es.</div><div class="ad-resena__autor"><div class="ad-resena__avatar">M</div><div><div class="ad-resena__nombre">Mariana G.</div><div class="ad-resena__ciudad">Buenos Aires</div></div></div></div><div class="ad-resena"><div class="ad-resena__estrellas">&#9733;&#9733;&#9733;&#9733;&#9733;</div><div class="ad-resena__texto">Compre el pack de 3 y quedo espectacular en el living. Mis amigas me preguntaron donde lo consegui. Lo recomiendo a todo el mundo.</div><div class="ad-resena__autor"><div class="ad-resena__avatar">C</div><div><div class="ad-resena__nombre">Carolina S.</div><div class="ad-resena__ciudad">Cordoba</div></div></div></div><div class="ad-resena"><div class="ad-resena__estrellas">&#9733;&#9733;&#9733;&#9733;&#9733;</div><div class="ad-resena__texto">Regale uno y fue un exito total. El packaging es bonito, llega en condiciones perfectas. Ya hice mi segundo pedido.</div><div class="ad-resena__autor"><div class="ad-resena__avatar">F</div><div><div class="ad-resena__nombre">Florencia M.</div><div class="ad-resena__ciudad">Rosario</div></div></div></div></div>';
  var lf = container.querySelector('[data-store="home-products-featured"]');
  if (lf) { container.insertBefore(b4, lf.nextSibling); } else { container.appendChild(b4); }

  var b5 = document.createElement('div');
  b5.className = 'ad-bloque-garantias';
  b5.innerHTML = '<div class="ad-bloque-garantias__titulo">Compras con total tranquilidad</div><div class="ad-bloque-garantias__grid"><div class="ad-garantia"><div class="ad-garantia__icon">&#128274;</div><div class="ad-garantia__texto">Pago 100% seguro<span>Mercado Pago - Transferencia</span></div></div><div class="ad-garantia"><div class="ad-garantia__icon">&#128260;</div><div class="ad-garantia__texto">Cambio sin costo<span>Si hay algun problema, te lo solucionamos</span></div></div><div class="ad-garantia"><div class="ad-garantia__icon">&#127981;</div><div class="ad-garantia__texto">Produccion propia<span>Taller en Tandil - Control de calidad</span></div></div><div class="ad-garantia"><div class="ad-garantia__icon">&#9889;</div><div class="ad-garantia__texto">Respuesta inmediata<span>WhatsApp - Lun a Sab 9 a 20hs</span></div></div></div>';
  var footer = document.querySelector('.js-footer');
  if (footer) { footer.parentNode.insertBefore(b5, footer); } else { document.body.appendChild(b5); }

}, 300);
