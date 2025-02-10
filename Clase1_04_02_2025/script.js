/* 
 TIPOS DE DATOS EN JAVASCRIPT
*/
// Tipo: Number (Números)
var edad = 25
var precio = 10.99
var puntos = 100
var temperatura = -25.5

// Tipo: String (Cadenas de texto)
var nombre = "Javier" //con comillas dobles
var saludo = 'Hola, ¿cómo estás?'//con comillas simples
var character = "a"
var edadCadena = "25"

// Tipo: Boolean (Booleano)
var esMayorDeEdad = true //true (verdadero)
var tienePermiso = false //false (falso)

// Tipo: Symbol (Identificador único)
var Identificador = Symbol("id")
var Identificador2 = Symbol("id")

// Tipo: Bigint (Números muy grandes)
var numeroGrande = 123456789012345678901234567890n //La "n" es para indicar que es un número grande

/*
NULL, UNDEFINED, NAN en Javascript
*/

// Tipos: Null (Valor vacio intencionalmnete)
var vacio = null
var variableNull = null

//Tipo: Undefined (Valor indefinido o No asignado)
var sinDefinir
var variableUndefined = undefined

//Tipo: NaN (Not a Number - No es un número)
var resultadoInvalido = 10 / "hola"
var resultadoInvalido2 = "hola" * 10

/*
¿Qué es consola.log?
Consola.log es una función que nos permite mostrar información en la consola del navegador.
console.log se usa para mostrar valores en la consola del navergador.
Es Util para depurar y entender como funcionan las variables en el código.
*/

console.log(edad)
console.log(nombre)

/*
¿Qué es typeof?
typeof es una función que nos permite conocer el tipo de dato de una variable.
Es util para depuración y validación de codigo.
*/
console.log(typeof edad)
console.log(typeof edadCadena)
console.log(typeof 42)
console.log(typeof 'veinticinco')
console.log(typeof -666)
console.log(typeof true)
console.log(typeof 0)
console.log(typeof "")
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof false)
