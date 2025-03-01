
class Comentarios {
    constructor(texto){
        this.texto = texto
    }
    mostrarComentario(){
        return this.texto
    }
}

const formulario = document.getElementById("coment-form")
const listaComentarios = document.getElementById("dynamicList")

formulario.addEventListener("submit", function(event){
    event.preventDefault()
  console.log(event);

  const text = document.getElementById("itemComentario").value
  const item = document.createElement("li")

  let nuevoComentario = new Comentarios(text)

  item.textContent = nuevoComentario.mostrarComentario()
  listaComentarios.appendChild(item)
  
  formulario.reset()

})



