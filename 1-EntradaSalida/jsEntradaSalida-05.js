/*Carlo Morici
E/S 05
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{
	//se puede declarar con let o con var
	let nombreIngresado;
	let edadIngresada;



	//asigno el valor de los ID a las variables

	edadIngresada=document.getElementById('txtIdEdad').value;
	nombreIngresado=document.getElementById('txtIdNombre').value;


	//imprimo por pantalla
	alert("usted se llama: "+nombreIngresado+" y tiene"+edadIngresada+" años.");
}

