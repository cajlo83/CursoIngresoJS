/*
Carlo Morici
IF 03
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
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
	else{
		alert("te informo que eres menor de edad");
	}

	
}//FIN DE LA FUNCIÓN