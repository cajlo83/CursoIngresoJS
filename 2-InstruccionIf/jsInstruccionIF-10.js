/*
Carlo Morici
IF 10
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/
function mostrar()
{

	//declaro la variable
	let numero;



	//genero el numero y lo asigno a la variable
	numero=Math.floor((Math.random() * (10-1+1)) + 1);


	//tomo una decision segun el numero e imprimo el resultado
	if (numero>=9){
		alert("su nota es "+numero+". EXCELENTE");
	}
	else if (numero>4){
		alert("su nota es "+numero+". APROBÓ");
	}
	else {
		alert("su nota es "+numero+". Vamos, la proxima se puede");
	}

	



	
}//FIN DE LA FUNCIÓN