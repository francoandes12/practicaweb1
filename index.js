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
    $("div#contenedor").hide();
    $("div#contenedor1").hide();
    $("div#contenedor2").hide();
    $("div#contenedor3").hide();
    $("div#contenedor4").hide();
    $('#botonmusica').click(function(){
        $("div#contenedor").toggle();
    });
    $('#botonmusica1').click(function(){
        $("div#contenedor1").toggle();
    });
    $('#botonmusica2').click(function(){
        $("div#contenedor2").toggle();
    });
    $('#botonmusica3').click(function(){
        $("div#contenedor3").toggle();
    });
    $('#botonmusica4').click(function(){
        $("div#contenedor4").toggle();
    });
    $("body").css("cursor","pointer");
});