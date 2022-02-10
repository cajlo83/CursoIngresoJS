/*
Carlo Morici
IF 05
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/
function mostrar()
{

	//declaro la variable
	let edad;

	//tomo la edad y la asigno a la variable
	edad=document.getElementById('txtIdEdad').value;


	//convierto el valor a entero
	edad=parseInt(edad);

	//tomo la decision
	if (edad<=13 || edad>=17) {

		alert("te informo que no eres un adolescente.");
	}

	
}//FIN DE LA FUNCIÓN