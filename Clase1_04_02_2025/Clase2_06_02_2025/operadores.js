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

// Operadores de comparacion
let mayor = 5 > 3 // Mayor que
let menor = 5 < 10 // Menor que
let igual = 5 == "5" // Comparacion debil De valor (true)
let estrictamenteIgual = 5 === "5" // Comparacion estricta De valor y tipo (false)
let diferente = 5 != "5" // Comparacion debil De valor (false)
let estrictamenteDiferente = 5 !== "5" // Comparacion estricta De valor y tipo (true)

console.log(mayor, menor, igual, estrictamenteIgual, diferente, estrictamenteDiferente);

// Operadores lógicos
let and = (10 > 5) && (3 < 8) // true && true // true si ambos son verdaderos
let or = (10 > 5) || (3 < 8) // true || false // true si alguno de los dos es verdadero
let not = !(10 > 5) // !true // false si es verdadero, true si es falso

console.log(and, or, not);

/*
    Jerarquia de operadores lógicos
    1. () parentesis  ??
    2. ! not
    3. && and
    4. || or

    nota: La jerarquia de los operadores lógicos es la misma que la jerarquia de los operadores matematicos
*/

//Ejemplos de jerarquia de operadores lógicos
let logico1 = true || false && false // Primero se evalua And = true || false = true
let logico2 = (true || false) && false // Primero se evalua (Or) = true && false = false

