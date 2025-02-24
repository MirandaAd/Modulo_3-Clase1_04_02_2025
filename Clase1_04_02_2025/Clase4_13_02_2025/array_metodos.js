let frutas  = ["Manzana"] //creamos un arreglo
let otrasFrutas = ["Kiwi", "Durazno", "Aguacate", "Mango"]	

//Metodos de los arreglos

//.push(<nuevoElemento) -> agrega un elemento al final del arreglo
frutas.push("Pera")
frutas.push("Fresa")
frutas.push(otrasFrutas) // -> length = ? 4 porque agrega todo el arreglo completo en la ultima posicion
console.log("Despues de .push", frutas);

//.pop() -> elimina el ultimo elemento del arreglo
console.log(frutas.pop()); //obtengo el ultimo elemento y lo saco de la estructura
console.log("Despues de .pop", frutas);

//.unshift(<nuevoElemento) -> agrega un elemento al inicio del arreglo
frutas.unshift("Melón")
console.log("Despues de .unshift", frutas);

//.shift() -> elimina el primer elemento del arreglo
console.log(frutas.shift()); //obtengo el primer elemento y lo saco de la estructura
console.log("Despues de .shift", frutas);


// .map() -> crea un nuevo arreglo con los elementos modificados
/*
        .map() Recorre cada elemento del arreglo original y devuelve un nuevo erreglo scon los elementos transformados.
        El arreglor original no se mofifica.    

*/

//Ejemplo 1: Multiplica cada valor (item) del arreglo por 2
let numeros = [1,2,3,4,5,6,7,8,9,10]
let numerosPor2 = numeros.map((numero) => numero * 2);
console.log("Despues de .map", numerosPor2);


//Sort() -> ordena los elementos del arreglo en orden alfabetico o numerico
/*
    .sort() Cmbia el orden de los elementos del arreglo original de manera alfabetica o numerica si
    se proporciona una funcion de comparacion de comparacion

 */

let verduras = ["Espinaca", "Zanahoria", "Calabaza"]

console.log(verduras.sort()); // ordena el arreglo alfabeticamente si no no indicamos ningun argumento

// sort() con numeros -> Si usamos sort con numeros los ordenara como texto
let numerosOrdenadosincorrectamente = [11, 2, 9, 98, 21, 55]
console.log("numeros ordenados incorrectamente",numerosOrdenadosincorrectamente.sort());

//para ordenar correctamente numeros debemos proporcionar una funcion de comparacion
let numerosOrdenadosCorrectamente = [11, 2, 9, 98, 21, 55]
console.log("numeros ordenados correctamente", numerosOrdenadosCorrectamente.sort((a, b) => a - b));
/*
- la funcion de comparacion toma dos numeros, su a es menor que b, la resta da un numero negativo, entonces a ba antes que b
- si a es mayor que b, la resta da un numero positivo, entonces b va antes que a
- si a y b son iguales la resta es 0, su orden no cambia
Esto se repite en cada iteracion hasta que todos los elementos esten ordenados
*/

// Ejercicio libros leidos


let librosLeidos = []
let agregarlibro = libro => librosLeidos.push(libro);

agregarlibro("La divina comedia")
agregarlibro("Las cronicas de Narnia")

console.log("Libros leidos", librosLeidos);



