// Ejercicio objeto a partir de un Libro

class Libro {
    constructor(titulo, autor, isbn) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.estado = estado;
        this.capitulos = capitulos;
    }

    describirLibro() {
        console.log(`El libro titulado ${this.titulo} de ${this.autor} publicado en ${this.anio} tiene ${this.capitulos} capitulos`);
    }
}
