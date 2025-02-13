/*
    operadores de JavaScript
    - Operadores aritméticos
    - Operadores de comparación
    - Operadores de asignación
    - Operadores lógicos
    - Operadores de incremento y decremento
    - Operadores de concatenación

    Tipos de operadores
    - Matemáticos para realizar calculos
*/

// Operadores matematicos 

let suma = 1 + 2
let resta = 1 - 2
let division = 1 / 2
let multiplicacion = 1 * 2
let modulo = 1 % 2
let exponente = 2 ** 3

console.log(suma, resta, division, multiplicacion, modulo, exponente);

/* jerarquia de operadores
    1. () parentesis
    2. ** exponentes
    3. * / %  multiplicacion, division, modulo
    4. + - suma y resta
*/

//Ejemplos de jerarquia de operadores
let operacion = 2 + 3 * 4
let operacion2 = (2 + 3) * 4
let operacion3 = 2 + 3 * 4 / 2

console.log(operacion, operacion2, operacion3);