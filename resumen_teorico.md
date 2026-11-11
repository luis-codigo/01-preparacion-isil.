# 📚 Resumen Teórico - Preparación ISIL (Días 1 y 2)

## 1. Matemáticas Básicas
*   **Simplificación de fracciones:** El resultado final SIEMPRE se simplifica. Dividir el numerador y denominador entre el mismo número hasta que no se pueda más. (Ej: 2/8 -> 1/4).
*   **Suma/Resta de fracciones:** PRIMERO se igualan los denominadores (usando el MCM), NUNCA se suman o restan los denominadores directamente.
*   **Porcentajes:** 
    *   Fórmula del caracol: (Número × Porcentaje) / 100.
    *   Atajo decimal: 25% = 0.25. 
    *   **Regla de oro:** Leer dos veces la pregunta. Si pide "descuento", solo calculas el %. Si pide "cuánto pagas", debes restar al total.

## 2. Lógica de Programación
*   **Algoritmo:** Es una serie de pasos ordenados para resolver un problema.
*   **Estructura SI... ENTONCES (If/Else):** Es la base de la toma de decisiones. "SI pasa esto, haz aquello; SINO, haz esto otro".

## 3. HTML (El Esqueleto)
*   **¿Qué es?** Lenguaje de etiquetas para estructurar el contenido de una página web.
*   **Etiquetas clave:**
    *   `<html>`: El contenedor de todo el documento.
    *   `<head>`: El cerebro (instrucciones invisibles, como el `<title>`).
    *   `<body>`: El cuerpo (lo que se ve en pantalla).
    *   `<h1> a <h6>`: Títulos y subtítulos (jerarquía).
    *   `<p>`: Párrafos de texto.
    *   `<strong>`: Negrita. `<em>`: Cursiva.
*   **Conectar JS:** Se usa la etiqueta `<script src="archivo.js"></script>` justo antes de cerrar el `</body>`.

## 4. JavaScript (El Cerebro)
*   **¿Qué es?** Lenguaje de programación que le da interactividad y lógica a la web.
*   **La Consola (F12):** Es el "cuarto de máquinas" del navegador. Sirve para probar código rápido y ver errores. El historial de comandos se abre con la "Flecha Arriba" ⬆️.
*   **Variables (`let`):** Son "cajas" en la memoria donde guardamos datos que PUEDEN cambiar. 
    *   *Sintaxis:* `let saldo = 450;`
*   **Operadores Matemáticos:** `+` (suma), `-` (resta), `*` (multiplicación), `/` (división).
*   **`console.log()`:** Es el comando para imprimir o mostrar un mensaje en la consola.
*   **Condicionales (`if`, `else if`, `else`):** 
    *   Se usan para que el programa tome decisiones lógicas.
    *   Las llaves `{}` agrupan el bloque de código que se ejecuta si la condición se cumple.
*   **Uso de Comillas `""`:**
    *   **CON comillas:** Para mostrar texto literal. (Ej: `console.log("Hola");`)
    *   **SIN comillas:** Para usar variables o hacer preguntas lógicas. (Ej: `if (retiro <= saldo)`).

## 5. GitHub (La Nube)
*   **¿Qué es?** El "Google Drive" de los programadores. Es tu portafolio profesional.
*   **Repositorio:** Es una carpeta de proyecto en la nube.
*   **Commit:** Es un "punto de guardado" (como en un videojuego). Cada vez que subes cambios, haces un commit.
*   **Subir archivos:** Se hace desde la web con el botón "Add file" -> "Upload files".
## 4. Lógica Proposicional (Booleanos)
Base de la programación. Solo existen dos valores: **Verdadero (True)** o **Falso (False)**.

*   **AND (Y) - `&&`**: Solo es Verdadero si **AMBAS** condiciones son verdaderas.
    *   *Ejemplo en código:* `if (tieneTarjeta && claveCorrecta)`
*   **OR (O) - `||`**: Es Verdadero si **AL MENOS UNA** condición es verdadera.
    *   *Ejemplo en código:* `if (esAdmin || esModerador)`
*   **NOT (NO) - `!`**: Invierte el valor. Si es Verdadero, lo vuelve Falso.
    *   *Ejemplo en código:* `if (!estaLogueado)` (Si NO está logueado, haz algo).

    # 📝 Apuntes de la Sesión: Seguridad y Ecuaciones Avanzadas

## 1. Programación: Sistema de Seguridad (Cajero)
*   **`prompt()`**: Función que abre una ventana en el navegador para pedirle datos al usuario (en este caso, la clave).
*   **`alert()`**: Función que muestra un mensaje de advertencia en pantalla.
*   **Contadores (`intentos = intentos + 1`)**: Variables que aumentan su valor cada vez que ocurre un evento (como un error del usuario).
*   **Variables Booleanas (`tarjetaBloqueada = true`)**: Variables que solo guardan `true` (verdadero) o `false` (falso) para recordar un estado.
*   **`return;`**: Instrucción que detiene la ejecución de una función inmediatamente, evitando que el código siga avanzando.
*   **`Math.random()`**: Genera un número decimal al azar entre 0 y 1.
*   **`Math.floor()`**: Redondea un número decimal hacia abajo para obtener un número entero.
