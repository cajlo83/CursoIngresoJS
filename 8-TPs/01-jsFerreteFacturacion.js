/*1.	
Carlo Morici
TP1
Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	//declaro variables
	let p1;
	let p2;
	let p3;
	let resultado

	
	//extraigo los valores y los asigno a las variables
	p1=parseInt(document.getElementById('txtIdPrecioUno').value);
	p2=parseInt(document.getElementById('txtIdPrecioDos').value);
	p3=parseInt(document.getElementById('txtIdPrecioTres').value);


	//se calcula y se guarda el resultado
	resultado=p1+p2+p3;

	//se muestra el resultado en pantalla
	alert("la suma resulta en: "+resultado)


}
function Promedio () 
{
	
//declaro variables
	let p1;
	let p2;
	let p3;
	let resultado

	
	//extraigo los valores y los asigno a las variables
	p1=parseInt(document.getElementById('txtIdPrecioUno').value);
	p2=parseInt(document.getElementById('txtIdPrecioDos').value);
	p3=parseInt(document.getElementById('txtIdPrecioTres').value);


	//se calcula y se guarda el resultado
	resultado=(p1+p2+p3)/3;

	//se muestra el resultado en pantalla
	alert("El promedio resulta en: "+resultado)

}
function PrecioFinal () 
{
	
	//declaro variables
	let p1;
	let p2;
	let p3;
	let resultado

	
	//extraigo los valores y los asigno a las variables
	p1=parseInt(document.getElementById('txtIdPrecioUno').value);
	p2=parseInt(document.getElementById('txtIdPrecioDos').value);
	p3=parseInt(document.getElementById('txtIdPrecioTres').value);


	//se calcula y se guarda el resultado
	resultado=(p1+p2+p3)*1.21;

	//se muestra el resultado en pantalla
	alert("El precio final resulta en: "+resultado)

}