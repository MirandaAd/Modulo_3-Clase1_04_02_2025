/* 
    Estructura de control if en Javascript
    - Permite ejecutar un bloque de codigo si una condición es verdadera (se cumple)
    - Puede usarse con operadores de comparación y lógicos

*/

let edad = 16
let tieneIne = true

// Condicional simple
if(edad >= 18 && tieneIne){
 console.log("Tienen los requisitos para votar")
}

// Condicional con Else
if(edad >= 18 && tieneIne){
    console.log("Tienen los requisitos para votar")
}else{
    console.log("No tienen los requisitos para votar")
}

// Condicional con Else if
if(edad < 13){
    console.log("Es un niño")
}else if(edad < 18){
    console.log("Es un adolescente")
}else{
    console.log("Es un adulto")
}


let tieneEntrada = false
if(!tieneEntrada){
    console.log("Debe comprar una entrada")
}

console.log("Fin de la ejecución");


/*
Ejercicio Comparación y decisiones en JavaScript
    Evaluador de notas y mensajes personalizados
*/

let nota = 60


if (nota >= 90) {
    console.log("Excelente");
} else if (nota >= 75) {
    console.log("Bien");
} else if (nota >= 60) {
    console.log("Suficiente");
} else {
    console.log("Inuficiente, no aprueba");
}


