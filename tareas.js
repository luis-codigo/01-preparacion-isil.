//1. Creamos la lista  y cargamos lo que hay  en la momoria (si no hay nada, sera un arreglo vacio)
let misTareas = JSON.parse(localStorage.getItem("tareas_guardadas")) || [];
//2. Funcion para guardar en la memoria 
function guardarEnMemoria() {
    localStorage.setItem("tareas_guardadas", JSON.stringify(misTareas));
}
function agregarTarea() {
    let input = document.getElementById("input-tarea");
    let texto = input.value;

    if (texto === "") {
        alert("Por favor, escribe una tarea.");
        return;
    }
    //.Agregamos la tarea al Array
    misTareas.push({texto: texto, completada: false});

    //.Guardamos en la memoria del navegador
    guardarEnMemoria();

    //.Limpiamos la caja
    input.value = "";

    //.Volvemos a dibujar la lista en pantalla
    mostrarTareas();
     }
    
function mostrarTareas() {
    let lista = document.getElementById("lista-tareas");
    lista.innerHTML = ""; // Limpiamos la pantalla

    for (let i = 0; i < misTareas.length; i++) {
        let nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = misTareas[i].texto;

        // --- BOTÓN ELIMINAR ---
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "X";
        botonEliminar.style.marginLeft = "10px";
        botonEliminar.style.backgroundColor = "red";
        botonEliminar.onclick = function() {
            misTareas.splice(i, 1);
            guardarEnMemoria();
            mostrarTareas();
        };

        // --- BOTÓN COMPLETAR ---
        let botonCompletar = document.createElement("button");
        botonCompletar.textContent = "✓";
        botonCompletar.style.backgroundColor = "green";
        botonCompletar.style.marginRight = "10px";
        botonCompletar.onclick = function() {
            misTareas[i].completada = !misTareas[i].completada;
            guardarEnMemoria();
            mostrarTareas();
        };

        // --- ESTILO SI ESTÁ COMPLETADA ---
        if (misTareas[i].completada === true) {
            nuevaTarea.style.textDecoration = "line-through";
            nuevaTarea.style.color = "gray";
        }

        // --- UNIMOS TODO ---
        nuevaTarea.appendChild(botonCompletar);
        nuevaTarea.appendChild(botonEliminar);
        lista.appendChild(nuevaTarea);
    }
} // 🚨 Esta llave cierra el for, la de abajo cierra la función.

