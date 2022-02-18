/*
Carlo Morici
SWITCH 1
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/

function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;

	//formulo el switch-case
	switch (mesDelAño){

		case "Enero":
			alert(mesDelAño+": que comiences bien el año!!!.");
			break;

		case "Marzo":
			alert(mesDelAño+": a clases!!!.");
			break;

		case "Julio":
			alert(mesDelAño+": se vienen las vacaciones!!!.");
			break;

		case "Diciembre":
			alert(mesDelAño+": Felices fiesta!!!.");
			break;

		default:
			alert(mesDelAño);

	}


}//FIN DE LA FUNCIÓN