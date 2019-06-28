
//Definir el evento onclick del botón id="inicio"

var puntos = 100;
	var premio;
	document.getElementById("inicio").onclick = function(){
		
		document.getElementById("puntos").value = puntos;
	}

/**
 * Esta función de JavaScript devuelve una imagen al azar de una Array de imágenes
 * @param Le pasamos como parámetro el nombre de la Array de imágenes que tendremos definida previamente
 * @returns Nos devuelve una imagen de la Array al azar
 */

	function randomArrayImagenes(nombreArray){
		var longitud = nombreArray.length;
		var posicionAzar = Math.floor(Math.random()*longitud);
		//var imagenAzar = nombreArray[posicionAzar];
		//return imagenAzar;
	}
/**
 * Esta función de Javascript permite adjudicar un premio cuando los 3 bombos son iguales
 * @param numero Este parámetro es el número adjudicado a una de las figuras del bombo
 * @param premio Cada combinacion tendrá un valor de premio u otro
 * @returns Nos devuelve los puntos totales. var puntos;
 */	
function darPremio3(numero,premio){
	if(bomboA == numero && bomboB == numero && bomboC == numero){
		puntos = puntos + (premio*10) - 10;
		document.getElementById("puntos").value = puntos;
	}else	//else va o no????
}	

/**
 * Esta función de Javascript permite adjudicar un premio cuando los 2 bombos son iguales
 * @param numero Este parámetro es el número adjudicado a una de las figuras del bombo
 * @param premio Cada combinacion tendrá un valor de premio u otro
 * @returns Nos devuelve los puntos totales. var puntos;
 */	
function darPremio2(numero,premio){
	if(bomboA == numero && bomboB == numero && bomboC != numero){
		puntos = puntos + (premio*10) - 10;
		document.getElementById("puntos").value = puntos;
	}	
}	

/**
 * Esta función de Javascript permite adjudicar un premio cuando toca una sóla cereza
 * @param numero En este caso será 0
 * @param premio Cada combinacion tendrá un valor de premio u otro
 * @returns Nos devuelve los puntos totales. var puntos;
 */	
function darPremio1(numero,premio){
	if(bomboA == numero && bomboB != numero){
		puntos = puntos + (premio*10) - 10;
		document.getElementById("puntos").value = puntos;
	}	
}	




	