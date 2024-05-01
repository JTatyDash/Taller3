/*Crea una función que ordene un array de números de manera
ascendente. Puedes utilizar funciones flecha.*/

function orderNumbers(numbers) {
    console.log("Lista de numeros desorganizada: ", disorganized);
    const organized = numbers.sort((a, b) => a - b);
    return organized;
}
    disorganized = [5, 2, 4, 1, 3, 6, 8, 10, 7, 9];
    organized = orderNumbers(disorganized);
    console.log("Lista de numeros organizada: ", organized);