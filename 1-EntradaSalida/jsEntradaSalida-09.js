/*
Carlo Morici
E/S 09
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

//declarando las variables
	let sueldoEntrada;
	let sueldoSalida;
	


	//se ingresa el sueldo
	sueldoEntrada=document.getElementById('txtIdSueldo').value;

	//se convierte a entero
	sueldoEntrada=parseInt(sueldoEntrada)

	//se le aumenta el 10% y se asigna la informacion a la segunda variable
	sueldoSalida=sueldoEntrada*1.1

	//se guarda la informacion en el cuadro de texto
	document.getElementById('txtIdResultado').value=sueldoSalida


	
}
