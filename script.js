function mover() {
  var elem = document.getElementById("navesita");
  var pos = 0;
  clearInterval(setInterval(frame, 10));
  var id = setInterval(frame, 10);

  function frame() {
    var contenedor = document.getElementById("animacion");
    var ancho = contenedor.offsetWidth;
    if (pos == ancho) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.left = pos + 'px';
      elem.style.rotate = pos + 'deg';
    }
  }
}

mover();