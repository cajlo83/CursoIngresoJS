/*
Carlo Morici
IF 02
Al ingresar una edad debemos informar solo si la persona es mayor de edad
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
	if (edad>=18) {

		alert("te informo que eres mayor de edad");
	}
	
}//FIN DE LA FUNCIÓN