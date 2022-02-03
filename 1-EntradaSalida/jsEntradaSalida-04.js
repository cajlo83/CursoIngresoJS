/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//se puede declarar con let o con var
	let nombreIngresado;

	//pdio el nobmre por prompt
	nombreIngresado=prompt("ingrese su algun valor");

	//asigno el valor del promt y lo asigno por ID

	
	

	document.getElementById('txtIdNombre').value = nombreIngresado;

alert("su nombre es: "+nombreIngresado);
}

