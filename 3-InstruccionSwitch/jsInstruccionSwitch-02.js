/*
Carlo Morici
SWITCH 2
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARACIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/

function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;

	//formulo el switch-case
	switch (mesDelAño){

		case "Julio":
			alert(mesDelAño+": Abrigate que hace frio.");
			break;

		case "Agosto":
			alert(mesDelAño+": Abrigate que hace frio.");
			break;

		case "Septiembre":
			alert(mesDelAño+": Ya pasamos el frio, ahora calor!!!.");
			break;

		case "Octubre":
			alert(mesDelAño+": Ya pasamos el frio, ahora calor!!!.");
			break;

		case "Noviembre":
			alert(mesDelAño+": Ya pasamos el frio, ahora calor!!!.");
			break;

		case "Diciembre":
			alert(mesDelAño+": Ya pasamos el frio, ahora calor!!!.");
			break;

		default:
			alert(mesDelAño+": Falta para el invierno.");

	}


}//FIN DE LA FUNCIÓN