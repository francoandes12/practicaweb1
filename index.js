'use strict'
/* var ingreso= prompt("Ingrese su nombre");
var usuario = document.getElementById("micaja");
usuario.innerHTML="Bienvenido "+ ingreso + " a la mejor pagina de musica electronica!"; */
$(window).scroll(function () {
    var scroll = $(window).scrollTop(),
        dh = $(document).height(),
        wh = $(window).height(),
        scrollPercent = (scroll / (dh - wh)) * 100;
    $('#progreso').css('height', scrollPercent + '%');
})