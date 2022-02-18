/*
Carlo Morici
SWITCH 10
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche
*/
function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	//alert(estacionIngresada);

	//hago un switch de un switch

	switch (estacionIngresada){
		
		case "Invierno": 							//invierno
			switch (txtIdDestino.value){
				case "Bariloche":
					alert("Si viaja.");
					break;
				default:
					alert("No viaja.");

			}
			break;

		case "Verano": 								//Verano
			switch (txtIdDestino.value){
				case "Mar del plata":
				case "Cataratas":
					alert("Si viaja.");
					break;
				default:
					alert("No viaja.");

			}
			break;

		case "Otoño": 								//Otoño
			
					alert("Si viaja.");
			break;
				
		case "Primavera": 							//Primavera
			switch (txtIdDestino.value){
				case "Bariloche":
					alert("No viaja.");
					break;
				default:
					alert("Si viaja.");

			}
			break;

		
			





	}

}//FIN DE LA FUNCIÓN