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

# 📝 Apuntes - Sesión de Programación y Matemáticas Avanzadas

## 1. Programación: Manipulación del DOM y Colores
*   **`document.querySelector(".clase")`**: Busca un elemento específico en el HTML usando su clase de CSS (con el punto incluido). Es ideal para modificar solo una parte de la página (como la tarjeta del cajero) y no todo el fondo.
*   **`Math.random()`**: Genera un número decimal al azar entre 0 y 1.
*   **`Math.floor()`**: Redondea un número decimal hacia abajo para obtener un número entero (ej. 3.9 -> 3).
*   **Colores Hexadecimales**: Se forman con un `#` y 6 caracteres (números del 0-9 y letras de la A-F). Ejemplo: `#4CAF50` (verde).

============================================================================

# 📝 Apuntes: Creación de Elementos en el DOM (Lista de Tareas)

## Conceptos Clave de JavaScript

*   **DOM (Document Object Model):** Es la estructura de tu página HTML vista como un árbol. JavaScript puede leerlo y modificarlo.
*   **`document.getElementById("id")`**: Busca un elemento HTML por su ID.
*   **`.value`**: Obtiene el texto que el usuario escribió en una caja de texto (`<input>`).
*   **`document.createElement("etiqueta")`**: Crea un nuevo elemento HTML en la memoria (ej. un `<li>`, un `<button>`, un `<div>`). Aún no se ve en pantalla.
*   **`.textContent`**: Asigna o lee el texto plano dentro de un elemento HTML.
*   **`.style.propiedad`**: Modifica el CSS de un elemento directamente desde JavaScript (ej. `.style.backgroundColor = "red"`).
*   **`appendChild(elemento)`**: Agrega un elemento hijo al final de un elemento padre. (Ej: Meter un `<li>` dentro de un `<ul>`).
*   **`elemento.remove()`**: Elimina un elemento del HTML y de la pantalla.
*   **Evento `onclick`**: Es una acción que espera a que el usuario haga clic en un botón o elemento para ejecutar una función.

## Flujo de la función `agregarTarea()`
1. Capturar texto de la caja (`input.value`).
2. Validar que no esté vacío (`if`).
3. Crear el elemento visual en memoria (`createElement`).
4. Darle contenido al elemento (`textContent`).
5. (Opcional) Crear un botón de eliminar y asignarle un evento `onclick` con `remove()`.
6. Insertar el elemento en la pantalla (`appendChild`).
7. Limpiar la caja de texto para el siguiente uso.

=========================================

# 🚀 Resumen del Bootcamp: Persistencia, Matemáticas y UI

## 1. Programación: Persistencia de Datos (`localStorage`)
Hasta ahora, al recargar la página (F5), las tareas desaparecían porque estaban solo en la memoria RAM. Para guardarlas para siempre, usamos el `localStorage` (la memoria interna del navegador).

*   **El problema:** `localStorage` solo guarda texto. No entiende Arrays (`[]`).
*   **La solución (JSON):**
    *   `JSON.stringify(misTareas)`: Convierte tu Array en un texto plano para poder guardarlo.
    *   `JSON.parse(localStorage.getItem("clave"))`: Lee el texto guardado y lo convierte de vuelta a un Array real.
*   **Tip de Pro (El operador OR `||`):** 
    `JSON.parse(localStorage.getItem("clave")) || []`
    Esto significa: *"Intenta cargar los datos guardados. Si no hay nada (es null), entonces crea un Array vacío `[]` para que el código no explote"*.
=========================================

## 2. Programación: Manipulación de Arrays (`.splice`)
Para eliminar una tarea de la pantalla, no basta con borrarla del HTML. Primero hay que borrarla del Array (los datos reales) y luego volver a dibujar la pantalla.
*   **`array.splice(indice, cantidad)`**: Corta y elimina elementos. 
*   **Ejemplo:** `misTareas.splice(i, 1)` -> *"Ve a la posición `i` y elimina 1 elemento"*.

## 3. Programación: Limpiar y Redibujar el DOM
*   **`lista.innerHTML = ""`**: Vacía todo el contenido HTML de la lista. Es crucial usarlo **antes** de recorrer el Array para dibujar, de lo contrario, las tareas se duplicarían en la pantalla cada vez que agregas una nueva.

=========================================

## 5. CSS: Mejorando la Interfaz de Usuario (UI)
Le dimos un toque profesional a la Lista de Tareas:
*   **`border-left: 4px solid #3498db;`**: Pone una línea azul a la izquierda de cada tarea (estilo moderno).
*   **`align-items: center;`**: (Dentro de un flexbox). Alinea el texto y el botón de la "X" perfectamente en el centro vertical.
*   **`transition: background 0.3s;`**: Hace que el cambio de color del botón al pasar el mouse sea suave y no un cambio brusco