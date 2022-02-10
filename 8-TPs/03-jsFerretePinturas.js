/*3.
Carlo Morici
TP3
	para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

function CentigradosFahrenheit () //intercambie los lugares de las funciones
{

	//declaro las variables
	let temperatura;
	let resultado;

	
	//extraigo los valores y los asigno a las variables
	temperatura=parseInt(document.getElementById('txtIdTemperatura').value);
	


	//se calcula y se guarda el resultado
	resultado= (temperatura *1.8) +32;


	//se muestra el resultado en pantalla
	alert(temperatura+"°C es equivalente a "+resultado+"°F")




//F = (C * 1,8) + 32;
}

function FahrenheitCentigrados() 
{
	
//declaro las variables
	let temperatura;
	let resultado;

	
	//extraigo los valores y los asigno a las variables
	temperatura=parseInt(document.getElementById('txtIdTemperatura').value);
	


	//se calcula y se guarda el resultado
	resultado= (temperatura -32) / 1.8;


	//se muestra el resultado en pantalla
	alert(temperatura+"°F es equivalente a "+resultado+"°C")








//C = (F -32) / 1,8
}
