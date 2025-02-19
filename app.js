let boton = document.getElementById("add");
let lista = document.getElementById("list"); 
let inputTexto = document.getElementById("texto");

function addTask() {
    if (inputTexto.value !== ""){
    let nuevoItem = document.createElement("li");
    nuevoItem.setAttribute("class", "my-3");
    nuevoItem.textContent = inputTexto.value;
    lista.appendChild(nuevoItem);
    addButtonBorrar(nuevoItem);
    }
};

function addButtonBorrar(nuevoItem) {
    let buttonBorrar = document.createElement("button");
    buttonBorrar.textContent = "Borrar";
    buttonBorrar.setAttribute("class", "btn btn-secondary float-start mx-3");
    buttonBorrar.addEventListener("click", function () {
        alert("Borrando el elemento ")
        nuevoItem.remove();
    })
    nuevoItem.appendChild(buttonBorrar);
};

boton.addEventListener("click", function () {
    addTask()
});

inputTexto.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});


nuevoItem.addEventListener("click", function (){
    removeTask()
})