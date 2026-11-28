//1. FUNCION PURA (Matematica: y= mx +b)
function calcularCostoEvento(invitados) {
    let costoFijo = 300;
    let costoPorInvitado = 15;
    //Retornamos el resultado de la ecuacion lineal
    return(costoPorInvitado * invitados) + costoFijo;
}

// 2. FUNCION DE INTERFAZ (Maneja el DOMINIO)
function mostrarCotizacion() {
    let input = document.getElementById("input-invitados");
    let invitados = parseInt(input.value);
    let resultadoHTML = document.getElementById("resultado");

    //Validacion rapida
    if (isNaN(invitados)|| invitados <= 0) {
        resultadoHTML.textContent = "por favor, ingresa un numero valido.";
        resultadoHTML.style.color = "red";
        return; // Detenemos la funcion aqui
    }
    //llamamos a ala funcion pura y guardamos el resultado
    let total = calcularCostoEvento(invitados);
    
    // Mostramos en pantalla
    resultadoHTML.textContent = "El costo total es: s/ " + total.toFixed (2);
    resultadoHTML.style.color = "green";
}

//3. CONEXION CON EL BOTON (Event listener)
let btnCalcular = document.getElementById("btn-calcular");
btnCalcular.addEventListener("click", mostrarCotizacion);