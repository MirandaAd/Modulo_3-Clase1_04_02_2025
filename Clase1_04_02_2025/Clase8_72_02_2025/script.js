const formulario = document.getElementById("coment-form")
const listaComentarios = document.getElementById("dynamicList")
const btnborra = document.getElementById("borrarcoment") 


class Comentarios {
    constructor(texto){
        this.texto = texto
    }
    mostrarComentario(){
        return this.texto
    }
}

formulario.addEventListener("submit", function(event){
    event.preventDefault()
  console.log(event);

  const text = document.getElementById("itemComentario").value.trim();
  if (text === "") return;
  const item = document.createElement("li")

  let nuevoComentario = new Comentarios(text)

  item.textContent = nuevoComentario.mostrarComentario()
  listaComentarios.appendChild(item)

  formulario.reset()

})

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