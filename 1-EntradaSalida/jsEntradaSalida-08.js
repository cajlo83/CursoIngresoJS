/*
Carlo Morici
E/S 08
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	
	//declarando las variables
	let a;
	let b;



	//tomar los numeros
	a=document.getElementById('txtIdNumeroDividendo').value;
	b=document.getElementById('txtIdNumeroDivisor').value;

	//se hace la operacion
	c=parseInt(a) % parseInt(b)

	alert("la el resto resulta en: "+c);
}
