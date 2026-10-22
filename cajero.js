let saldo = 450;
let retiro = 100;
console.log("--- INICIANDO CAJERO ---");

if (retiro <= 0) {
    console.log("Error: No puedes retirar montos negativos o cero.");
} else if (retiro <= saldo) {
    console.log("Retiro exitoso. Te queda: " + (saldo - retiro));
} else {
    console.log("Error: Saldo insuficiente");
}

console.log("--- FIN DEL CAJERO ---");