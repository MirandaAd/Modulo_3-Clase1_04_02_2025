// Ejemplo 1: Crear un arreglo simple

let frutas = ["Uva", "Manzana", "Pera", "Mango", "Fresa", "Aguacate", "Melón"]
 console.log("lista de frutas :", frutas)

//Ejemplo 2: Acceder a los elementos de un arreglo
    console.log("Primera fruta:", frutas[0]);
    console.log("Segunda fruta:", frutas[2]);
    console.log("fruta posicion 19:", frutas[19]); //Indefinido porque no hay elemento dentro del indice indicado
    console.log("fruta posicion -1:", frutas[-1]);
    console.log("última fruta usando la propiedad length:", frutas[frutas.length-1]); //frutas.length se refiere a la cantidad de elementos dentro del arreglo; su longitud.

//Ejemplo 3: Modificar un elemento del areglo
frutas[4] = "Guayaba"
console.log("Frutas actualizadas", frutas);



//ejercicio while
let i = 0; while (i < 3) {
    console.log(i); i++;
}

let suma = 0; let numero = 1; while (suma < 5) {
    suma += numero; numero++; }
console.log(suma);