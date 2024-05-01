/*Escribe una función que genere la tabla de multiplicar de un número
específico.*/

function tablaMultiplicar(number){
    console.log(`Tabla de multiplicar del ${number}`);
    const result = [];
    for (let i = 1; i <= 10; i++){
        result.push(`${number} x ${i} = ${number * i}`);
    }
    result.forEach(result => console.log(result));
}

tablaMultiplicar(8);