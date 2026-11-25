# 🎓 Clean Code: Separación de Conceptos y Event Listeners

## 1. Separation of Concerns (Separación de Conceptos)
En las universidades de élite, el código se divide en "capas". Es la regla de oro de la arquitectura de software.
*   **HTML:** Solo estructura (el esqueleto). No debe tener lógica.
*   **CSS:** Solo diseño (la ropa).
*   **JavaScript:** Solo comportamiento y lógica (el cerebro).

**¿Por qué está mal usar `onclick="miFuncion()"` en el HTML?**
Porque estás mezclando el esqueleto con el cerebro. En proyectos grandes, esto vuelve el código un caos imposible de mantener. El HTML debe estar "limpio" de JavaScript.

## 2. Event Listener (addEventListener)
Es la forma profesional de manejar eventos (clics, teclas, movimientos del mouse).
*   **Sintaxis:** `elemento.addEventListener("evento", funcionAAEjecutar);`
*   **¿Por qué es mejor que onclick?** 
    1.  Mantiene el HTML limpio.
    2.  Permite asignar múltiples funciones al mismo botón sin sobrescribirlas.
    3.  Es el estándar de la industria (W3C).

## 3. Ejemplo de Refactorización (Paso de código "casero" a "profesional")
**Antes (HTML sucio):**
```html
<button onclick="agregarTarea()">Agregar</button>
