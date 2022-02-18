/*
Carlo Morici
SWITCH 9
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/
function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var precio;
	var descuento;
	var destinoGuardado=txtIdDestino.value;
	

	//inicializo el precio
	precio=15000;

	//hago un switch de un switch

	switch (estacionIngresada){
		
		case "Invierno": 							//invierno
			switch (destinoGuardado){
				case "Bariloche":
				case "Mar del plata":
					descuento =0.8;
					break;
				case "Cordoba":
					descuento=0.9;
					break;
				default:
					descuento=1;

			}
			break;

		case "Verano": 								//Verano
			switch (destinoGuardado){
				case "Bariloche":
					descuento =0.8;
					break;
				case "Cordoba":
					descuento=1.1;
					break;
				case "Mar del plata":
					descuento=1.2;
					break;
				default:
					descuento=1;

			}
			break;

		case "Otoño": 								//Otoño
		case "Primavera": 							//Primavera
			switch (destinoGuardado){
				case "Bariloche":
				case "Mar del plata":
				case "Cataratas":
					descuento=1.1;
					break;
				default:
					descuento=1;

			}
			break;

		

		
		

	}

	precio=precio*descuento;
	alert("su viaje le cuesta: $"+precio);

}//FIN DE LA FUNCIÓN