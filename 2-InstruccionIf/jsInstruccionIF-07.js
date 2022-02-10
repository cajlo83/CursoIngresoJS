/*
Carlo Morici
IF 07
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/
function mostrar()
{

	//declaro la variable
	let edad;
	let eCivil


	//tomo los datos ingresados y los asigno a las variables
	edad=document.getElementById('txtIdEdad').value;
	eCivil=document.getElementById('estadoCivil').value

	//convierto el valor numerico a entero
	edad=parseInt(edad);


	//tomo las decisiones
	if (edad<18 && eCivil=="Soltero") {

		alert("Es muy pequeño para NO ser soltero.");
	}
	



	
}//FIN DE LA FUNCIÓN