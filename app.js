// Definimos la variable botón cogiendo el botón de add
let boton = document.getElementById("add");

// Definimos la variable lista, la cuál hace referencia al id list dentro del html
let lista = document.getElementById("list"); 

// Definimos la variable inputTexto con el contenido de texto en el formulario
let inputTexto = document.getElementById("texto");

// Creamos la función addTask
function addTask() {
    if (inputTexto.value !== ""){ // Si el valor de inputTexto es nulo, se creará lo que hay dentro de la variable
    let nuevoItem = document.createElement("li"); // Creamos la variable nuevo idem, la cuál se creará dentro de la lista
    nuevoItem.setAttribute("class", "my-3"); // A la variable nuevo item le definimos la clase my-3 para el margen, clase de bootstrap
    nuevoItem.textContent = inputTexto.value; // En el valor de inputTexto, definimos el contenido del nuevo item
    lista.appendChild(nuevoItem); // En la lista añadimos un nuevo item, usando append para que no machaque el contenido ya definido en la lista
    addButtonBorrar(nuevoItem); // Cogemos el botón definido posteriormente
    }
};

// Creamos la función addButton Borrar
function addButtonBorrar(nuevoItem) {
    let buttonBorrar = document.createElement("button"); // Primero creamos la variable buttonBorrar la cuál almacena el botón de crear un botón
    buttonBorrar.textContent = "Borrar"; // El contenido del botón será Borrar
    buttonBorrar.setAttribute("class", "btn btn-secondary float-start mx-3"); // Al botón le definimos las clases btn btn-secondary (para el color gris) float-start (para que esté al principio) y mx-3 (para el margen)
    buttonBorrar.addEventListener("click", function () { // cuándo se haga click en el botón, se realizará la siguiente función
        nuevoItem.remove(); // Se eliminará el nuevoItem
        alert("Borrando el elemento") // Saldrá una alerta en la pantalla en la que diga que se está borrando el elemento
    })
    nuevoItem.appendChild(buttonBorrar); // En la lista añadimos también el botón nuevo sin machacar lo anterior usando append
};

// Cuando se haga click en el botón añadir, se realizará la función addTask
boton.addEventListener("click", function () {
    addTask()
});

// Cuando se presione la tecla intro, también se realizará la función addTask
inputTexto.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

// Cuando se pulsa el botón Borrar, se realiza la función removeTask, para aliminar el item de la lista
nuevoItem.addEventListener("click", function (){
    removeTask()
})