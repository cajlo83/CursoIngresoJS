/*
Carlo Morici
SWITCH 5
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
*/

function mostrar()
{
	//tomo el valor
	var horaEvaluada =txtIdHora.value;



	//formulo el switch-case
	switch (horaEvaluada){
		case "7":
			alert("de alguna forma, necesitas que te informe que es de mañana :).");
			break;
			
		case "8":
			alert("de alguna forma, necesitas que te informe que es de mañana :).");
			break;
			
		case "9":
			alert("de alguna forma, necesitas que te informe que es de mañana :).");
			break;
			
		case "10":
			alert("de alguna forma, necesitas que te informe que es de mañana :).");
			break;
			
		case "11":
			alert("de alguna forma, necesitas que te informe que es de mañana :).");
			break;
			
		default:
			alert("No es de mañana.");

	}


}//FIN DE LA FUNCIÓN