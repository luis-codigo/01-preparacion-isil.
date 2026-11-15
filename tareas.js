function agregarTarea() {
    let input = document.getElementById("input-tarea");
    let texto = input.value;

    if (texto === "") {
        alert("Por favor, escribe una tarea.");
        return;
    }

    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = texto;

    // 🚀 NUEVO: Creamos un botón de eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "X";
    botonEliminar.style.marginLeft = "10px";
    botonEliminar.style.backgroundColor = "red"; // Para que se vea como peligro

    // 🚀 NUEVO: Le decimos al botón qué hacer cuando lo presionen
    botonEliminar.onclick = function() {
        nuevaTarea.remove(); // ¡Borra la tarea de la pantalla!
    };

    // Agregamos el botón dentro de la tarea
    nuevaTarea.appendChild(botonEliminar);

    let lista = document.getElementById("lista-tareas");
    lista.appendChild(nuevaTarea);

    input.value = "";
}