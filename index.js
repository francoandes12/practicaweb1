'use strict'
/* var ingreso= prompt("Ingrese su nombre");
var usuario = document.getElementById("micaja");
usuario.innerHTML="Bienvenido "+ ingreso + " a la mejor pagina de musica electronica!"; */
$(document).ready(function(){
    $(window).scroll(function () {
        var scroll = $(window).scrollTop(),
            dh = $(document).height(),
            wh = $(window).height(),
            scrollPercent = (scroll / (dh - wh)) * 100;
        $('#progreso').css('height', scrollPercent + '%');
    });
    $('#botonmusica').click(function(){
        $("div#contenedor").toggle();
    });
    $('#botonmusica1').click(function(){
        $("div#contenedor1").toggle();
    });
    $('#botonmusica2').click(function(){
        $("div#contenedor2").toggle();
    });
});