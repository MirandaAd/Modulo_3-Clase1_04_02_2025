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


