# 📝 Apuntes: Refactorización, Funciones Lineales y Lógica de Programación

## PARTE 1: Clean Code (Refactorización del Cajero)

### 1. Separación de Responsabilidades (Funciones Puras)
En lugar de tener una función gigante que hace cálculos y modifica el HTML al mismo tiempo, dividimos el trabajo:
*   **Función Pura (Matemática):** Solo recibe parámetros, hace el cálculo y devuelve un resultado con `return`. No toca la pantalla.
*   **Función de Interfaz:** Recibe el resultado de la función pura y se encarga de actualizar el HTML.

**Ejemplo en código:**
```javascript
// Función pura (solo calcula)
function calcularNuevoSaldo(saldoActual, montoARetirar) {
    return saldoActual - montoARetirar;
}

// Uso en la función principal
saldo = calcularNuevoSaldo(saldo, retiro); 

================================================================
Es la ecuación que modela situaciones de la vida real (costos, ingresos, distancias).

x: Variable independiente (lo que tú controlas, ej. cantidad de invitados, kilómetros).

y: Variable dependiente (el resultado, ej. costo total).

m: Pendiente o Costo Variable (lo que cambia por cada unidad de x).

b: Ordenada al Origen o Costo Fijo (lo que se paga aunque x sea 0).

A. Cálculo Directo (Encontrar la 'y')
Problema: Un taxi cobra S/ 6 de base y S/ 2.50 por km. ¿Cuánto cuesta un viaje de 12 km?

Ecuación: y = 2.50x + 6

Desarrollo: y = 2.50(12) + 6 -> y = 30 + 6 -> y = 36

B. Cálculo Inverso o Despeje (Encontrar la 'x')
Problema: Si el taxista cobró S/ 26, ¿cuántos km recorriste?

Desarrollo: 26 = 2.50x + 6 -> 26 - 6 = 2.50x -> 20 = 2.50x -> x = 20 / 2.50 -> x = 8 km

Fórmula del despeje: x = (y - b) / m

C. Conexión Matemática - Programación
Si deseas que la computadora haga el despeje automáticamente (ej. cuántos regalos vendí si el ingreso total fue X):

javascript
function calcularRegalosVendidos(ingresoTotal) {
    let costoFijoDelDia = 100; // (b)
    let precioPorRegalo = 15;  // (m)
    
    // Fórmula de despeje: (y - b) / m
    let cantidadRegalos = (ingresoTotal - costoFijoDelDia) / precioPorRegalo;
    return cantidadRegalos;
}
PARTE 3: Filosofía del Código (Tu gran revelación de hoy)
CamelCase: Es la convención para nombrar variables y funciones en JavaScript. Se escribe todo junto, pero cada palabra nueva empieza con mayúscula (ej. calcularCostoTotal). Sirve para que el código sea legible.

Programar es traducir la lógica: La computadora es un "robot sin verbos", solo entiende palabras clave (if, return, let, function). Programar es tomar un problema del mundo real (hacer cuentas, organizar eventos) y traducirlo a la lógica estricta que el robot entiende.

La lógica es el rey: No importa si sabes la sintaxis; si tu lógica está mal, el código falla. Piensa siempre en el "paso a paso" antes de escribir.

text
🚨 El Debugging de este error (Nivel Élite)
Si algún día tu código no hace nada y no hay errores en rojo, lo primero que debes hacer es abrir la consola (F12) y buscar un error como este:
Uncaught ReferenceError: CalcularCostoTotal is not defined
Eso te dirá exactamente en qué línea intentaste usar una variable con el nombre equivocado.
Regla de oro: JavaScript es case-sensitive. nombre no es lo mismo que Nombre.

Regla de Clean Code: Usa camelCase (primera palabra minúscula, siguientes con mayúscula) para nombrar variables y funciones.

Debugging: Si no hay error en rojo pero el código falla, revisa las mayúsculas y la ortografía de las variables en la consola (F12).
---