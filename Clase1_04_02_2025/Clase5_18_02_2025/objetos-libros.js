// Ejercicio objeto a partir de un Libro

class Libro {
    constructor(titulo, autor, anio, capitulos, estado) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.capitulos = capitulos;
        this.estado = estado;
    }

    describirLibro() {
        console.log("El libro titulado", this.titulo, "de", this.autor, "publicado en", this.anio, "tiene", this.capitulos, "capitulos. Actualmente se encuentra", this.estado);
    }
}

let libro1 = new Libro("Las Cronicas de Narnia", "C.S. Lewis", 1950, 17, "prestado");
libro1.describirLibro();

let libro2 = new Libro("La divina comedia", "Dante", 1321, 3, "disponible");
libro2.describirLibro();

let libro3 = new Libro("The hunger games", "Suzanne Collins", 2008, 9, "prestado");
libro3.describirLibro();

let libro4 = new Libro("Frankenstein", "Mary Shelley", 1818, 23, "disponible");
libro4.describirLibro();


