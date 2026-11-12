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
   
    else if (retiro <= 0) {
        cajaResultado.textContent = "Error: No puedes retirar montos negativos o cero.";
        cajaResultado.style.color = "red";
    }
    else if (retiro % 10 !== 0) {
        cajaResultado.textContent = "Error: Solo se permiten multiplos de 10 (10, 20, 50, 100...).";
        cajaResultado.style.color = "red";
    

    }
    else if (retiro <= saldo) {
        saldo = saldo - retiro; // Actualizamos el saldo
        //agregamos el movimiento a la lista
        historialMovimientos.push("Retiro de s/" + retiro);
        //nueva linea: Buscamos el ID del HTML Y LE CAMBIAMOS EL TEXTO
        document.getElementById("saldo-pantalla").textContent = "s/" + saldo.toFixed(2);
        cajaResultado.textContent = "Retiro exitoso. Te queda: s/" + saldo.toFixed(2);
        cajaResultado.style.color = "green";
        document.getElementById("monto").value =""
        console.log("¡Llegue al final del retiro! Los movimientos son:", historialMovimientos);
        actualizarHistorial();
    }
    else {
        cajaResultado.textContent = "Error: Saldo insuficiente. Tu saldo es s/" + saldo;
        cajaResultado.style.color = "red";
        
    }
        
       
}
function realizarDeposito() {
    let inputMonto = document.getElementById("monto").value;
    let deposito = parseFloat(inputMonto)
    let cajaResultado = document.getElementById("resultado")

    if (isNaN(deposito) || deposito <= 0){
        cajaResultado.textContent= " Error: Ingresa un monto valido mayor a 0.";
        cajaResultado.style.color = "red";
    }
    else if (deposito %10 !== 0) {
        cajaResultado.textContent = "Error: solo se aceptan multiplos de 10.";
        cajaResultado.style.color = "red";
    }
    
    
    else {  
        saldo = saldo + deposito;
        historialMovimientos.push("Deposito de s/" + deposito);
        document.getElementById("saldo-pantalla").textContent = "s/" + saldo.toFixed(2);
        cajaResultado.textContent = "Deposito exitoso.  nuevo saldo: s/" + saldo.toFixed(2);
        cajaResultado.style.color = "green";
        actualizarHistorial();
        document.getElementById("monto").value ="";
        }

    }
    function actualizarHistorial() {
        let listaHTML = document.getElementById("lista-movimientos");
        listaHTML.innerHTML = ""; // Limpiamos la lista antes de dibujar
        //Recorremos el array y creamos un <li> por cada movimiento
        for (let i = 0; i < historialMovimientos.length; i++) {
            listaHTML.innerHTML += "<li>" + historialMovimientos[i] + "</li>";
            
        }
    }
let claveCorrecta = "1234";
let intentos = 0;
let tarjetaBloqueada = false;

function pedirClave() {
    if(tarjetaBloqueada===true) {
        alert("tarjeta bloqueada. Acuda a asu banco.");
        return; //Esto detiene la funcion aqui mismo

    }
    let claveIngresada = prompt("Por favor, ingrese su clave de 4 digitos:");
    if (claveIngresada === claveCorrecta){
        alert("Clave correcta. Bienvenido a su cajero.");
        intentos = 0; // Reiniciamos los intentos si acierta

    } else {
        intentos =  intentos + 1; // sumamos un intento fallido
        alert("Clave incorrecta. Intento" + intentos + "de 3.");
        if (intentos >= 3) {
            tarjetaBloqueada = true;
            alert("Tarjeta bloqueada por seguridad!");
        }
    }
}
function cambiarColorFondo() {
    //1. Definimos los caracteres validos para un color hexadecimal
    let caracteres = "0123456789ABCDEF";
    let colorNuevo = "#";

    //2. hacemos un bucle de 6 vueltas (porque los colores tienen 6 digitos)
    for (let i = 0; i < 6; i++) {
        //elegimos un numero al azar del 0 al 15
        let numeroAlAzar = Math.floor(Math.random() * 16);
        //agregamos la letra o numero elegido a nuestro color
        colorNuevo += caracteres[numeroAlAzar];
    }

    //Buscamos la tarjeta por su clase de CSS
    let tarjeta = document.querySelector(".tarjeta-cajero");
    tarjeta.style.backgroundColor = colorNuevo;
    //y tambien cambiamos el texto para que veamos el codigo del color
    console.log("Nuevo color aplicado:" + colorNuevo);
}