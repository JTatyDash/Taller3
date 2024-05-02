/*Implementa una función que verifique si una palabra es un palíndromo (se
lee igual de izquierda a derecha que de derecha a izquierda).*/

function esPalindromo(word) {
    // Convertir la palabra a minúsculas y eliminar espacios en blanco
    word = word.toLowerCase().replace(/ /g, "");

    // Obtener la longitud de la palabra
    const longitud = word.length;

    // Comparar caracteres desde ambos extremos de la palabra
    for (let i = 0; i < longitud / 2; i++) {
        if (word[i] !== word[longitud - 1 - i]) {
        return false; // No es palíndromo
    }
    }

    // Si el bucle no encuentra diferencias, la palabra es palíndromo
    return true;
}
    const words = ["radar", "amor", "orejera", "revolver", "ana"];
    for (const word of words) {
    const resultado = esPalindromo(word) ? "sí" : "no";
    console.log(`${word} es palíndromo: ${resultado}`);
}