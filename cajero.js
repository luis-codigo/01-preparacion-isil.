// 1. Declaramos el saldo inicial (recuerda  que 'Let' permite modificarlo)
let saldo = 450;
// 2. Creamos la funcion que se activara cuando presiones el boton
function realizarRetiro() {
    // Buscamos en el HTML la caja de texto y obtenemos el numero que escribio el usuario
    let inputMonto = document.getElementById("monto").value;
    // convertimos el texto en un numero real (por si acaso)
    let retiro = parseFloat(inputMonto);
console.log("El usuario escribió: ", inputMonto, " Y se convirtió en: ", retiro);
    // Buscamos el espacio en el HTML donde mostraremos el resultado
    let cajaResultado = document.getElementById("resultado");
    // --- TU LOGICA DEL CAJERO---
    if (isNaN(retiro)) {
        cajaResultado.textContent = "Error: Por favor, ingresa un numero valido.";
        cajaResultado.style.color =  "red";

    }
    else if (retiro <= 0){
        cajaResultado.textContent = " Error: No puedes retirar montos negativos o cero.";
        cajaResultado.style.color = "red";

    }
    else if (retiro <= saldo) {
        saldo = saldo - retiro; // Actualizamos el saldo
        cajaResultado.textContent = "Retiro exitoso. Te queda: s/" + saldo;
        cajaResultado.style.color = "green";

    }
    else {
        cajaResultado.textContent = "Error: Saldo insuficiente. Tu saldo es s/" + saldo;
        cajaResultado.style.color = "red";

    }
}
    