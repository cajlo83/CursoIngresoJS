/*
Carlo Morici
SWITCH 4
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/

function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;

	//formulo el switch-case
	switch (mesDelAño){

		case "Febrero":
			alert(mesDelAño+": Este mes no tiene más de 29 días.");
			break;
			
		case "Abril":
			alert(mesDelAño+": Este mes tiene 30 días.");
			break;
			
		case "Junio":
			alert(mesDelAño+": Este mes tiene 30 días.");
			break;
			
		case "Septiembre":
			alert(mesDelAño+": Este mes tiene 30 días.");
			break;
			
		case "Noviembre":
			alert(mesDelAño+": Este mes tiene 30 días.");
			break;
			
		default:
			alert(mesDelAño+": Este mes tiene 31 Días.");

	}


}//FIN DE LA FUNCIÓN