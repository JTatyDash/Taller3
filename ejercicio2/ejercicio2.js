/*Implementa una función que calcule el factorial de un número
dado. Puedes usar cualquier tipo de función.*/

//Ejemplo 5: = 1x2x3x4x5 = 120

//Se le pide al usuario el numero

const dataFromConsole = process.argv;

const number = +dataFromConsole[2];

// Primero debera validar si es igual a 0 sino pues lo muiltiplica y resta hasta llegar a 0

function factorRecursivo(number){
    if (number == 0){
        return 1;
    }else{
        return number * factorRecursivo(number - 1); 
    }
}
console.log(factorRecursivo(number));

