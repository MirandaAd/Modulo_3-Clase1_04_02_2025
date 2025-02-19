// Clasifica frutas y cuantas hay

let frutas = ["Manzana", "Pera", "Fresa","Pera", "Kiwi", "Durazno", "Pera", "Mango", "Manzana", "Uva", "Manzana", "Pera", "Mango", "Fresa", "Melón"]
let grupoFrutas = Array.from(new Set(frutas));

let ContarFrutas = Object.fromEntries(
    grupoFrutas.map(char => {
        let cuenta = frutas.filter(c=>c===char).length
        return [char, cuenta]
    })
)

console.log(ContarFrutas);


let i = 0;
while (i<frutas.length){
    console.log(frutas[i]);
    i++;
}

