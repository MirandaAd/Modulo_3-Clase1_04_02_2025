// Ejemplo 1: contador simple con For

for (let contador = 1; contador <=  5; contador++){
    console.log("(for) El contador esta en el ciclo:", contador);
}

//Ejemplo 2: Contador reversa con For

for (let cuentaRegresiva = 10; cuentaRegresiva > 0; cuentaRegresiva--){
    console.log("(for) Cuentra regresiva", cuentaRegresiva);

}

for (let i = 1; i <= 10; i++){
    if(i % 2 === 0){
        continue; // salta una iteración 
    }
    console.log(i);
}
