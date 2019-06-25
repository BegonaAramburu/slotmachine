/**
 * This JavaScript function always returns a random 
 * number between min and max (both included)
 * 
 * @url https://www.w3schools.com/js/js_random.asp
 * 
 * @param min Number min  random 
 * @param max Number max random
 * @returns int Random Number
 */
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/**
 * This Javascript function search and returns the
 * max number in array of numbers
 * 
 * @url https://stackoverflow.com/questions/35562799/find-the-max-value-in-an-array-using-javascript-function
 * 
 * @param arrNumbers array of numbers
 * @returns max
 */
function getMaxNumberInArray(arrNumbers){
	var max=arrNumbers[0];
	for(var j=1; j<arrNumbers.length; j++){
		if(arrNumbers[j]>max){
			max=arrNumbers[j];
		}
	}
	return max;
}
var dados=[];
// Definir evento click del boton id="tirar"
document.getElementById('tirar').onclick=function(){
	
	for (var i=0; i<3; i++){
		var azar= getRndInteger(1,6);
		dados.push(azar);
		document.getElementById('dado'+i).src="img/dau"+azar+".png";
	}
	console.log(getMaxNumberInArray(dados));
}

