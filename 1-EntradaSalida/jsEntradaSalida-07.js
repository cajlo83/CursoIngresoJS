/*
Carlo Morici
E/S 07
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
{

//declarando las variables
	let a;
	let b;
	let c;


	//tomar los numeros
	a=document.getElementById('txtIdNumeroUno').value;
	b=document.getElementById('txtIdNumeroDos').value;

	//se hace la operacion
	c=parseInt(a)- parseInt(b)

	alert("la resta resulta en: "+c);
	
}

function multiplicar()
{ 
	
	//declarando las variables
	let a;
	let b;
	let c;


	//tomar los numeros
	a=document.getElementById('txtIdNumeroUno').value;
	b=document.getElementById('txtIdNumeroDos').value;

	//se hace la operacion
	c=parseInt(a) * parseInt(b)

	alert("la multiplicacion resulta en: "+c);

}

function dividir()
{
	//declarando las variables
	let a;
	let b;
	let c;


	//tomar los numeros
	a=document.getElementById('txtIdNumeroUno').value;
	b=document.getElementById('txtIdNumeroDos').value;

	//se hace la operacion
	c=parseInt(a) / parseInt(b)

	alert("la division resulta en: "+c);
}

