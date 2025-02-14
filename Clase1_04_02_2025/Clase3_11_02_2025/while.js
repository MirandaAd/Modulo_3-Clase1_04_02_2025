//Ejemplo 1: Contador simple con while

let contador = 1;

while(contador <= 5){
    console.log("El contador esta en el ciclo:", contador);
    contador++ // <- es equivalente a contador = contador +1 o contador +=1
}

//Ejemplo 2: contador en reversa
let cuentaRegresiva = 10 

while (cuentaRegresiva >=0) {
    console.log("cuenta regresiva", cuentaRegresiva);
    cuentaRegresiva--
} 

//Ejemplo 3: Solicitar confirmacion hasta que el usuaria acepte

let confirmacion = true // confirmacion true o false conocidas como banderas o flags

while(confirmacion){
    //Otras tareas dentro del ciclo
    confirmacion = confirm("quieres realizar otra operación?")// confirm devuelve true o false
    console.log("confirmacion recibida", confirmacion);

}
