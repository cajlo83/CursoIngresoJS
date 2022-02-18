/*
Carlo Morici
SWITCH 3
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
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
			
		default:
			alert(mesDelAño+": Este mes tiene 30 o más días");

	}


}//FIN DE LA FUNCIÓN