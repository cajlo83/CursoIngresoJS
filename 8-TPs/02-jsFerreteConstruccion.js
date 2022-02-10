/*2.	
Carlo Morici
TP2
Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	//declaro las variables
	let L;
	let A;
	let resultado;

	
	//extraigo los valores y los asigno a las variables
	L=parseInt(document.getElementById('txtIdLargo').value);
	A=parseInt(document.getElementById('txtIdAncho').value);


	//se calcula y se guarda el resultado
	resultado=3*(L+L+A+A);

	//se muestra el resultado en pantalla
	alert("Para un alambrado rectangular triple se necesitan: "+resultado+" metros de alambre")

}
function Circulo () 
{
	

	//declaro las variables
	let R;
	let resultado;

	
	//extraigo los valores y los asigno a las variables
	R=parseInt(document.getElementById('txtIdRadio').value);
	


	//se calcula y se guarda el resultado
	resultado= 3* Math.PI * 2 * R;


	//se muestra el resultado en pantalla
	alert("Para un alambrado circular triple se se necesitan: "+resultado+" metros de alambre")



}
function Materiales () 
{


		//declaro las variables
	let L;
	let A;
	let S;
	let cal;
	let cemento;

	
	//extraigo los valores y los asigno a las variables
	L=parseInt(document.getElementById('txtIdLargo').value);
	A=parseInt(document.getElementById('txtIdAncho').value);


	//se calcula y se guardan los resultados
	S=L*A;
	cal=3*S;
	cemento=2*S;


	//se muestra el resultado en pantalla
	alert("Para una superficie de "+S+"m^2, se necesitan "+cal+" sacos de cal y "+cemento+" sacos de cemento.")

	
}