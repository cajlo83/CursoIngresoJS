/*
Carlo Morici
IF 08
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
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
	if (!(edad<18 && !(eCivil=="Soltero"))) {

		if(eCivil=="Soltero" && !(edad<18)){

			alert("Es soltero y no es menor.");
		}
	}
	



	
}//FIN DE LA FUNCIÓN