/*
Carlo Morici
SWITCH 08
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;



	//hago un switch 

	switch (destinoIngresado){	
		
		case "Bariloche":
		case "Ushuaia":							
			alert(destinoIngresado+": frio.");
			break;

		case "Cataratas": 							
		case "Mar del plata": 							
			alert(destinoIngresado+": calor.");
					

	}

}//FIN DE LA FUNCIÓN