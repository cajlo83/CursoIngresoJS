/*Carlo Morici
E/S 03
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{

	//se puede declarar con let o con var
	var nombreIngresado;

	//forma 1: se asegina valor a la variable con el nombre del elemento en cuestion y la extension *.value
	nombreIngresado=txtIdNombre.value;
	

	//forma 2: este comando cumple la misma funcion, pero no entra en conflicto en caso de que la variable y el cuadro tengan el mismo nombre
	//nombreIngresado=document.getElementById('txtIdNombre').value;



	alert("su nombre es: "+nombreIngresado);

}


