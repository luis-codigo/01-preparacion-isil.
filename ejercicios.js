//funcion pura: Recibe precio y porcentaje, devuelve el total
function calcularPrecioFinal(precio, porcentajeDescuento) {
    let descuento = precio * (porcentajeDescuento / 100);
    let total = precio - descuento;
     //aqui devolvimos el valor, No la imprimimos
     return total; 
}
 //Le pasamos los argumentos: 200 soles y 15% de descuento
 let precioZapatos =  calcularPrecioFinal(500, 20);
 //Ahora "precioZapatos" vale 170
 //Pondemos usarlo como queramos. Por ejemplo, mostrarlo en consola:
 console.log("El precio final es:." + precioZapatos);