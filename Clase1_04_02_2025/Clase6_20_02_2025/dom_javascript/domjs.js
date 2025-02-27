class Comentario {
    constructor(texto) {
        this.comentario = texto;
    }

    mostrarComentario() {
        return this.comentario
    }
}

const form = document.querySelector('form');
const comentarioInput = document.getElementById('comentario');
const listaComentarios = document.getElementById('lista-coment');


