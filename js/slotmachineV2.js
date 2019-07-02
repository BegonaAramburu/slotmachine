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

	
	var nombre1;
	var nombre2;
	var puntos1 = 100;
	var puntos2 = 100;
	var premio;
	//1.Definir el evento onclick del botón id="inicio"
	document.getElementById("inicio").onclick = function() {
		
		nombre1 = prompt("Jugador 1: Escribe tu nombre");
		document.getElementById("nombre1").value = nombre1;
		
		nombre2 = prompt("Jugador 2: Escribe tu nombre");
		document.getElementById("nombre2").value = nombre2;


		document.getElementById("puntos1").value = puntos1;
		document.getElementById("puntos2").value = puntos2;
		document.getElementById("tocaTirar").innerHTML = nombre1 + " te toca tirar";
	}

	// 2.Definir el evento onclick del botón id="tirar"
	//Primero definimos una variable para saber a quién le toca tirar
		var contadorTiradas = 0;
	document.getElementById("tirar").onclick = function() {
		
		document.getElementById("alertaPremio").innerHTML = "";
		contadorTiradas++;
		console.log(contadorTiradas);
		
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

		// Las guardamos en su correspondiente elemento HTML con id "bomboA" B y C
		document.getElementById("bomboA").src = imagenes[bomboA];
		document.getElementById("bomboB").src = imagenes[bomboB];
		document.getElementById("bomboC").src = imagenes[bomboC];

		console.log(bomboA);
		console.log(bomboB);
		console.log(bomboC);
		
		//Adjudicamos el premio al jugador 1 o 2 según el número de tiradas sean par o impar
		if(contadorTiradas%2 != 0){
			puntos1 = puntos1 + darPremio(bomboA, bomboB, bomboC) - 10;
			if (premio != 0) {
				document.getElementById("alertaPremio").innerHTML = nombre1 + " has ganado " + premio + " PUNTOS";
			}
					
			document.getElementById("puntos1").value = puntos1;
		}else{
			puntos2 = puntos2 + darPremio(bomboA, bomboB, bomboC) - 10;
			if (premio != 0) {
				document.getElementById("alertaPremio").innerHTML = nombre2 + " has ganado " + premio + " PUNTOS";
			}
			document.getElementById("puntos2").value = puntos2;
		}

		
		// Condición para dejar de jugar
		if (puntos1 < 10) {
			document.getElementById("puntos1").value = "No te quedan puntos";
			document.getElementById("alertaPremio").innerHTML = "Ha ganado " + nombre2;
		}
		if (puntos2 < 10) {
			document.getElementById("puntos2").value = "No te quedan puntos";
			document.getElementById("alertaPremio").innerHTML = "Ha ganado " + nombre1;
		}
		//Avisamos al jugador que le toca tirar
		if (puntos1 >=10 && puntos2 >=10 && contadorTiradas%2!=0){
			document.getElementById("tocaTirar").innerHTML = nombre2 + " te toca tirar";
		}else if(puntos1 >=10 && puntos2 >=10 && contadorTiradas%2==0){
			document.getElementById("tocaTirar").innerHTML = nombre1 + " te toca tirar";
		}
		
		
		
	}
	
	
	
	
	