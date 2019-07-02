/**
 * Esta función de JavaScript devuelve una posición al azar de una Array.
 * @param Le pasamos como parámetro el nombre de la Array que tendremos definida previamente
 * @returns Nos devuelve una posición de la Array al azar
 */
function randomArray(nombreArray) {
	var longitud = nombreArray.length;
	var numeroAzar = Math.floor(Math.random() * longitud);
	return numeroAzar;
}

/**
 * Esta función de Javascript permite adjudicar un premio dependiendo de las combinaciones ganadoras
 * Le pasamos los tres numeros obtenidos en los bombos como parámetros
 * @param bomboA
 * @param bomboB
 * @param bomboC
 * @returns Nos devuelve el valor del premio
 */
function darPremio(bomboA, bomboB, bomboC) {
	if (bomboA == 5 && bomboB == 5 && bomboC == 5) {
		premio = 500 * 10;
	} else if (bomboA == 4 && bomboB == 4 && bomboC == 4) {
		premio = 250 * 10;
	} else if (bomboA == 4 && bomboB == 4 && bomboC != 4) {
		premio = 150 * 10;
	} else if (bomboA == 3 && bomboB == 3 && bomboC == 3) {
		premio = 80 * 10;
	} else if (bomboA == 3 && bomboB == 3 && bomboC != 3) {
		premio = 60 * 10;
	} else if (bomboA == 2 && bomboB == 2 && bomboC == 2) {
		premio = 50 * 10;
	} else if (bomboA == 2 && bomboB == 2 && bomboC != 2) {
		premio = 40 * 10;
	} else if (bomboA == 1 && bomboB == 1 && bomboC == 1) {
		premio = 30 * 10;
	} else if (bomboA == 1 && bomboB == 1 && bomboC != 1) {
		premio = 15 * 10;
	} else if (bomboA == 0 && bomboB == 0 && bomboC == 0) {
		premio = 10 * 10;
	} else if (bomboA == 0 && bomboB == 0 && bomboC != 0) {
		premio = 5 * 10;
	} else if (bomboA == 0 && bomboB != 0) {
		premio = 2 * 10;
	} else {
		premio = 0;
	}

	return premio;
}

/**
 * Esta función nos alertará con un mensaje en pantalla cuando ganemos un premio
 * @param premio
 * @returns premio //siempre que sea mayor que 0
 */
function alertaPremio(premio) {
	if (premio != 0) {
		document.getElementById("alertaPremio").innerHTML = premio + " PUNTOS";
	}
}

var puntos = 100;
var premio;
document.getElementById("inicio").onclick = function() {

	document.getElementById("puntos").value = puntos;
}

// 2.Definir el evento onclick del botón id="tirar"

document.getElementById("tirar").onclick = function() {
	document.getElementById("alertaPremio").innerHTML = "";

	puntos = puntos - 10;// en cada tirada restará 10 puntos de la apuesta
	premio = 0;
	// crear una variable array que contiene todas las imágenes
	var imagenes = [ "img/img1.jpg", "img/img2.jpg", "img/img3.jpg",
			"img/img4.jpg", "img/img5.jpg", "img/img6.jpg" ];
	console.log(imagenes);
	// 3.Llamamos a la funcion randomArray que nos dará 3 posiciones del Array
	// al azar y las guardamos en las variables bomboA B y C

	var bomboA = randomArray(imagenes);
	var bomboB = randomArray(imagenes);
	var bomboC = randomArray(imagenes);

	// Las guardamos en su correspondiente elemento HTML con id "bomboA" B y C para poder ver la imagen
	document.getElementById("bomboA").src = imagenes[bomboA];
	document.getElementById("bomboB").src = imagenes[bomboB];
	document.getElementById("bomboC").src = imagenes[bomboC];

	console.log(bomboA);
	console.log(bomboB);
	console.log(bomboC);

	// 4.Llamamos a la función darPremio

	// computar los puntos dependiendo del premio obtenido
	puntos = puntos + darPremio(bomboA, bomboB, bomboC);

	alertaPremio(premio);

	// escribir los puntos obtenidos en el input de id="puntos"
	document.getElementById("puntos").value = puntos;
	// Condición para dejar de jugar
	if (puntos < 10) {
		document.getElementById("puntos").value = "No te quedan puntos";
	}
}