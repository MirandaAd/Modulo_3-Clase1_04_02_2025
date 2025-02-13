/*
    Direfencias entre Vr, let, const en Javascript
    -var: se puede reasignar y redeclarar en cualquier parte del código.
    -Let: se puede reasignar pero no se puede redeclarar en el mismo proyecto ámbito)
    -Const: No se puede reasignar ni redeclarar; es un valor constante.
    

*/

// Var
var nombre = "Joe" // Declaramos una variable var
nombre = "Gilean" // Reasignamos el valor la variable nombre
var nombre = "Luis" // Redeclaramos la variable nombre sin problema
console.log(nombre);

// Let
let apellido = "villanueva" //Dleclarando una variable con let
apellido = "corona" // Reasignamos el valor de apellido
// let apellido = "Parra" // Esto marca error porque no se puede redeclarar en el mismo ambito

// const
const gravedad = "9.81 m/s2"
// gravedad = "10.1" // Error, no se pueden reasignar constantes
// const gravedad = "10.0" // Error, no se puede redeclarar una constante en el mismo ámbito



