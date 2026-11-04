// 1. Declaramos el saldo inicial (recuerda  que 'Let' permite modificarlo)
let saldo=450;
let historialMovimientos = []; // aqui creamos nuestro array vacia
// 2. Creamos la funcion que se activara cuando presiones el boton
function realizarRetiro() {
    // Buscamos en el HTML la caja de texto y obtenemos el numero que escribio el usuario
    let inputMonto=document.getElementById("monto").value;
    // convertimos el texto en un numero real (por si acaso)
    let retiro = parseFloat(inputMonto);

    // Buscamos el espacio en el HTML donde mostraremos el resultado
    let cajaResultado = document.getElementById("resultado");
    // --- TU LOGICA DEL CAJERO---
    if (isNaN(retiro)) {
        cajaResultado.textContent = "Error: Por favor, ingresa un numero valido.";
        cajaResultado.style.color =  "red";

    }
    else if (retiro <= 0){
        cajaResultado.textContent = "Error: No puedes retirar montos negativos o cero.";
        cajaResultado.style.color = "red";

    }
    else if (retiro <= saldo) {
        saldo = saldo - retiro; // Actualizamos el saldo
        //agregamos el movimiento a la lista
        historialMovimientos.push("Retiro de s/" + retiro);
        //nueva linea: Buscamos el ID del HTML Y LE CAMBIAMOS EL TEXTO
        document.getElementById("saldo-pantalla").textContent = "s/" + saldo;
        cajaResultado.textContent = "Retiro exitoso. Te queda: s/" + saldo;
        cajaResultado.style.color = "green";
        

    }
    else {
        cajaResultado.textContent = "Error: Saldo insuficiente. Tu saldo es s/" + saldo;
        cajaResultado.style.color = "red";
        

    }
    actualizarHistorial();
}
function realizarDeposito() {
    let inputMonto = document.getElementById("monto").value;
    let deposito = parseFloat(inputMonto)
    let cajaResultado = document.getElementById("resultado")

    if (isNaN(deposito) || deposito <= 0){
        cajaResultado.textContent= " Error: Ingresa un monto valido mayor a 0.";
        cajaResultado.style.color = "red";
    } else {  
        saldo = saldo + deposito;
        historialMovimientos.push("Deposito de s/" + deposito);
        document.getElementById("saldo-pantalla").textContent = "s/" + saldo;
        cajaResultado.textContent = "Deposito exitoso.  nuevo saldo: s/" + saldo;
        cajaResultado.style.color = "green";
        actualizarHistorial();
    }
    function actualizarHistorial() {
        let listaHTML = document.getElementById("lista-movimientos");
        listaHTML.innerHTML = ""; // Limpiamos la lista antes de dibujar
        //Recorremos el array y creamos un <li> por cada movimiento
        for (let i = 0; i < historialMovimientos.length; i++) {
            listaHTML.innerHTML += "<li>" + historialMovimientos[i] + "</li>";
            
        }
    }
}