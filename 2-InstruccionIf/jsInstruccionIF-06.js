/*
Carlo Morici
IF 06
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/
function mostrar()
{

	//declaro la variable
	let edad;

	//tomo la edad y la asigno a la variable
	edad=document.getElementById('txtIdEdad').value;


	//convierto el valor a entero
	edad=parseInt(edad);





	//tomo las decisiones
	if (edad<13) {

		alert("te informo que eres un niño.");
	}
	if (edad<18) {

		alert("te informo que eres un adolescente.");
	}
	else alert ("te informo que eres un adulto, a ver si te vas dando cuenta");





	
}//FIN DE LA FUNCIÓN