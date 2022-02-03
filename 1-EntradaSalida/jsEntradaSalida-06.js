/*Carlo Morici
E/S 06
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{


	//declarando las variables
	let a;
	let b;
	let c;


	//tomar los numeros
	a=document.getElementById('txtIdNumeroUno').value;
	b=document.getElementById('txtIdNumeroDos').value;

	//se hace la operacion
	c=parseInt(a)+ parseInt(b)

	alert("la suma resulta en: "+c);
}


