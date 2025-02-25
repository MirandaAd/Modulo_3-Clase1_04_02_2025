/*
Crea un sistema muy sencillo para hacer seguimiento de los libros que has leído.
*/

// Ejercicio 1.1 libros leidos 

let librosLeidos = []
let agregarlibro = libro => librosLeidos.push(libro);

agregarlibro("La divina comedia")
agregarlibro("Las cronicas de Narnia")
agregarlibro("The hunger games")
agregarlibro("Harry Potter")

console.log("Libros leidos", librosLeidos);


// Ejercicio 1.2 libros leidos 

function agregaLibro (leidos, book) {
    leidos.push(book);
    return leidos;
}

let leidos = [];
agregaLibro(leidos, "Las batallas en el desierto");
agregaLibro(leidos, "La encrucijada");
agregaLibro(leidos, "Cadaver exquisito");
agregaLibro(leidos, "El señor de los anillos");

console.log("Libros leidos:", leidos);

function imprimirlibrosLeidos(leidos) {
    for (let i = 0; i < leidos.length; i++) {
        console.log("Libro leido:", leidos[i]);
    }
}

imprimirlibrosLeidos(leidos);
