/*
autor: Gabriel Alegre
enunciado ejr10BIS:
Debemos lograr tomar el importe por ID, y
Transformarlo a entero (parseInt), luego
mostrar en el cuadro de texto "RESULTADO" 
el importe con un Descuento del porcentaje
que ingrese el user "*/
function mostrarAumento()
{
  let importe;
  let descuento;
  let importeFinal;
  let porcentaje;

  porcentaje=prompt("Ingrese el porcentaje");

  importe=document.getElementById("txtIdImporte").value;
  importe=parseInt(importe);

  descuento=(porcentaje*importe)/100;

  importeFinal=importe-descuento;

  document.getElementById("txtIdResultado").value=importeFinal;

/*
  //EJERCICIO 10 ANTES DEL BIS
    enunciado ejr10:
    Debemos lograr tomar el importe por ID.
    Transformarlo a entero (parseInt), luego
    mostrar el importe con un Descuento del 25 %
    en el cuadro de texto "RESULTADO"/
    function mostrarAumento()
{
    let importe;
    let descuento
    let importeFinal;

    importe=document.getElementById("txtIdImporte").value;
    importe=parseInt(importe);

    descuento=importe*0.25;

    importeFinal=importe - descuento;

    document.getElementById("txtIdResultado").value=importeFinal;
}
*/

}
