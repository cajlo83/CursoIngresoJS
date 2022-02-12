/*
Carlo Morici
IF 09
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/
function mostrar()
{

	//declaro la variable
	let numero;



	//genero el numero y lo asigno a la variable
	numero=Math.floor((Math.random() * (10-1+1)) + 1);


	//imprimo el resultado
	alert("su numero es "+numero);



	
}//FIN DE LA FUNCIÓN