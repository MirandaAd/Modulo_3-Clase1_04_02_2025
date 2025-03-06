const form = document.getElementById("coment-form");
const itemComentario = document.getElementById("itemComentario");
const listaComentarios = document.getElementById("dynamicList");
const btnborra = document.getElementById("borrarcoment");

function agregarComentario(event) {
    event.preventDefault();

    let itemComentario = document.getElementById("itemComentario").value.trim();
    if (itemComentario === "") return;
    
    const item = document.createElement("li");

    item.innerHTML = `${itemComentario}<br>${mostrarFecha()}`;             
    listaComentarios.appendChild(item);
    document.getElementById("itemComentario").value = "";
}

function mostrarFecha() {
    let date = new Date();
    let datos = { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" };
    return date.toLocaleDateString("es-ES", datos);
}

document.getElementById("coment-form").addEventListener("submit", agregarComentario);

btnborra.addEventListener("click", eliminarComentario);
function eliminarComentario() {
    let ultimoComentario = listaComentarios.lastElementChild;
    if (ultimoComentario) {
        listaComentarios.removeChild(ultimoComentario)
    } else {
        alert("No hay comentarios que eliminar")
    };
    
}

/*function mostrarFecha(){
    let date = new Date ();
    let datos = {day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" };
    return date.toLocaleDateString("es-ES", datos);
}
console.log(mostrarFecha);*/ 

/*
localStorage.setItem("nombre", "carlos")

const usuario = { nombre: "carlos", edad: 30};
localStorage.setItem ("usuario", "usuario")

console.log(localStorage.getItem("usuario"));
*/