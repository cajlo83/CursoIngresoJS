/*
Carlo Morici
IF 04
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
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
	if (edad>=13 && edad<=17) {

		alert("te informo que eres un adolescente.");
	}

	
}//FIN DE LA FUNCIÓN