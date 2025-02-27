//Herencia

// Paso 1. Creacion de la clase principal (clase padre o superclase)
class Persona {
    constructor(nombre, edad) {
        //En el constructor inicializamos atributos de la clase
        this.nombre = nombre
        this.edad = edad
    }
    // Metodos de la clase
    saludar(nombrePersona) {
        console.log("Hola,", nombrePersona);
    }
}

let Persona1 = new Persona("Luis", 20)
console.log(Persona1);

// Paso 2. Creacion de la clase derivada (clase hija o subclase)
class Estudiante extends Persona {
    constructor(nombre, edad, materias) {
        //Para heredar atributos de la clase padre debemos llamar al constructor de la clase padre (super constructor)
        super(nombre, edad);
        // El metodo super es equivalente a copiar y pegar atributos y metodos de la clase padre (superclase) a la clase hija (subclase)
        this.materias = materias
    }
}
let estudiante1 = new Estudiante("maria", 23, ["Matematicas", "Fisica"])
console.log(estudiante1);

let estudiante2 = new Estudiante("Luis", 28, ["Inglés", "Español"])
console.log(estudiante2);

class EstudianteMusica extends Estudiante {
    constructor(nombre, edad, materias, instrumento) {
        //llamamos al constructor de la clase padre
        super(nombre, edad, materias);
        this.instrumento = instrumento
    }
    //Metodos de la clase
    tocarInstrumento() {
        console.log("Estoy tocando el instrumento", this.instrumento);
    }
}
 let estudianteMusica = new EstudianteMusica("Juan", 20, ["Inglés", "Español"], "Guitarra")
 console.log(estudianteMusica);
 estudianteMusica.saludar("Felipe")
 