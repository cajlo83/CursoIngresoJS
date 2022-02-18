/*
Carlo Morici
SWITCH 07
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;



	//hago un switch 

	switch (destinoIngresado){	
		
		case "Bariloche": 							
			alert(destinoIngresado+": oeste.");
			break;

		case "Cataratas": 							
			alert(destinoIngresado+": norte.");
			break;

		case "Mar del plata": 							
			alert(destinoIngresado+": este.");
			break;

		case "Ushuaia": 							
			alert(destinoIngresado+": sur.");
			break;

		


		

	}

}//FIN DE LA FUNCIÓN