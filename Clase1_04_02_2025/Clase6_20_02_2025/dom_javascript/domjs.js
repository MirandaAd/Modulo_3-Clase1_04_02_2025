
class Comentarios {
    constructor(texto){
        this.texto = texto;
    }
    mostrarComentario(){
        return this.texto
    }
}

const formulario = document.getElementById("coment-form")
const listaComentarios = document.getElementById("dynamicList")

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    const texto = document.getElementById("itemComentario").value;

    const item = document.createElement("li");

    item.textContent = nuevoProducto.mostrarInfo();
    listaProductos.appendChild(item);
}
)



/*
let input = document.querySelector("#itemComentario")
let addButton = document.querySelector("#addButton")
let list = document.querySelector("#dinamycList")

addButton.addEventListener("click", function () {
    if (input.value.trim() !== ""){
        let newItem = document.createElement("li");
        newItem.innerText =input.value;
        list.appendChild(newItem);
        input.value = "";
        }
});
*/


