/*
Carlo Morici
TP4

4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	//declaro variables
 	let cantidad;
 	let montoDoferta;
 	let modelo;

 	

 	//leo los documentos por ID y asigno su valores
 	cantidad=parseInt(document.getElementById('txtIdCantidad').value);
 	modelo=document.getElementById('Marca').value;

 	

 	//tomo decisiones
 	if(cantidad>=6){								//parte A-------------------------
 		montoDoferta=35*cantidad*0.5;
	 }


	else if(cantidad ==5){							//parte B-------------------------
	 	if (modelo=="ArgentinaLuz") {
	 		montoDoferta=35*cantidad*0.6;
	 	}
	 	else{
	 		montoDoferta=35*cantidad*0.7;
	 	}


	 }
	 else if(cantidad ==4){						//parte C-------------------------
	 	if (modelo=="ArgentinaLuz" || modelo=="FelipeLamparas") {
	 		montoDoferta=35*cantidad*0.75;
	 	}
	 	else{
	 		montoDoferta=35*cantidad*0.8;
	 	}


	 }
	 else if(cantidad ==3){						//parte D-------------------------
	 	if (modelo=="ArgentinaLuz") {
	 		montoDoferta=35*cantidad*0.85;
	 	}
	 	else if(modelo=="FelipeLamparas"){
	 		montoDoferta=35*cantidad*0.9;
	 	}
	 	else{
	 		montoDoferta=35*cantidad*0.95;
	 	}

	 }

	else{
	 	montoDoferta=35*cantidad;

	 }

	 if (montoDoferta>=120){ 					//parte E--------------------------
	 	alert("se le suma un extra de "+ (montoDoferta*0.1) +" de impuestos");
	 	montoDoferta=montoDoferta*1.1;
	 }

 	//muestro el valor de la oferta
 	document.getElementById('txtIdprecioDescuento').value=montoDoferta;
}
