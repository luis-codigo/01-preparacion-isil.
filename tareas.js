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
    misTareas.push(texto);

    //.Guardamos en la memoria del navegador
    guardarEnMemoria();

    //.Limpiamos la caja
    input.value = "";

    //.Volvemos a dibujar la lista en pantalla
    mostrarTareas();
     }
    
function mostrarTareas() {
    let lista = document.getElementById("lista-tareas");
    lista.innerHTML = ""; // Limpiamos la pntalla
    
    //Recorremos el array (como en el historial del cajero)
    for (let i = 0; i <misTareas.length; i++){
        let nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = misTareas[i];

        //Boton de eliminar
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "x";
        botonEliminar.style.marginLeft = "10px";
        botonEliminar.style.backgroundColor = "red";
        //Magia: cuando le den clic, eliminamos del array por su posicion(i)
        botonEliminar.onclick = function() {
            misTareas.splice(i, 1); // elimina 1 elemento en la posicion i
            guardarEnMemoria(); //Actualizamos la memoria
            mostrarTareas(); //Volvemos a dibujar
        }
        nuevaTarea.appendChild(botonEliminar);
        lista.appendChild(nuevaTarea);
    }

}

//Al cargar la pagina, mostramos las tareas guardadas 
mostrarTareas();