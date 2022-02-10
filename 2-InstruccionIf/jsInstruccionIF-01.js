/*
Carlo Morici
IF 01
se ingresara un numero por la pagina web, y en caso de que sea 15 imprimir "niña bonita"
*/
function mostrar()
{

	//declaro la variable
	let edad;

	//tomo la edad y la asigno a la variable
	edad=document.getElementById('txtIdEdad').value;


	//convierto el valor a entero
	edad=parseInt(edad)

	//tomo la decision
	if (edad==15) {

		alert("niña bonita");
	}
	else {
		alert("no es una niña bonita");
	}

}//FIN DE LA FUNCIÓN