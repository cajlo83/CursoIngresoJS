/*
Carlo Morici
E/S 10
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

//declarando las variables
	let entrada;
	let salida;
	


	//se ingresa el importe
	entrada=document.getElementById('txtIdImporte').value;

	//se convierte a entero
	entrada=parseInt(entrada)

	//se le disminuye el 25% y se asigna la informacion a la segunda variable
	salida=entrada*0.75

	//se guarda la informacion en el cuadro de texto
	document.getElementById('txtIdResultado').value=salida


	
}
