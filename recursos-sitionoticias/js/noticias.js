// Tenemos varias funciones armadas que podemos usar:

// obtenerNoticias(): toma todas las noticias de la página
//
// ocultarNoticia(noticia): oculta la noticia pasada como parámetro
// mostrarNoticia(noticia): muestra la noticia pasada como parámetro
//
// contienePalabra(noticia, palabra): devuelve true si la noticia tiene la palabra
// pasada como parámetro
//
// recortarTexto(noticia, cantidadPalabras): recorta el texto de la noticia para
// que su largo sea cantidadPalabras


var noticias = obtenerNoticias();

// Esta función está de muestra para ver como funciona el while
// Sólo se está recorriendo las noticias y cambiándole el color
function marcarNoticiasConWhile(){
  var contador = 0;
  // Recorre la variable noticias, iluminando en la que se encuentra en cada momento
  while(contador < noticias.length){
    noticiaActual = noticias[contador];
    cambiarColor(noticiaActual, 'rgb(188, 164, 213)');
    contador++; //contador = contador + 1
  }
}

// Ahora lo mismo pero con un for para ver cuales son las diferencias con el while
function marcarNoticiasConFor(){
  for(var contador = 0; contador<noticias.length; contador++){
    noticiaActual = noticias[contador];
    cambiarColor(noticiaActual, 'rgb(235, 190, 162)');
  }
}

// Esta la tienen que hacer, puede ser con while o for
function resaltarNoticiasQueContengan(palabra) {
  var i = 0;

  while (i < noticias.length) {
    var noticiaColor = noticias[i];
    var palabra = "ARGENTINA";
    i++;

    if (contienePalabra(noticiaColor,palabra)) {
      cambiarColor(noticiaColor, 'rgb(4, 204, 22)');
    }
  }
}

// Si la noticia incluye la palabra, la ocultamos.

function ocultarNoticiasQueContengan(palabra) {
  for (var contador = 0; contador<noticias.length; contador++) {
    var noticiaActual = noticias[contador];
    var palabra = "Google";
    if (contienePalabra(noticiaActual,palabra)) {
      ocultarNoticia(noticiaActual);
    }
  }
}

function mostrarNoticia(palabra)  {
  var i = 0;
  while (i < noticias.length) {
  var noticia_otro_color = noticias[i];
  var palabra = "robots";
  i++;
    if(contienePalabra(noticia_otro_color,palabra)) {
      cambiarColor(noticia_otro_color, 'rgb(154, 36, 43)');
    }
  }
}


function recortarNoticias(cantPalabras) {
  for ( var i = 0; i< noticias.length; i++ ) {
    var noticiaActual = noticias[i];
    var cantidadPalabras = 20;
    if (obtenerNoticias()) {
      recortarTexto(noticiaActual,cantidadPalabras);
    }
  }
}

// Acá abajo podés poner las funciones que quieras usar
resaltarNoticiasQueContengan();
ocultarNoticiasQueContengan();
mostrarNoticia();
recortarNoticias();
