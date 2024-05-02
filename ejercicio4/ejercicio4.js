/*Desarrolla una función que cuente la cantidad de palabras en
una cadena dada. Puedes usar funciones anónimas.*/

const contarPalabras = function(cadena) {
    const palabras = cadena.trim().split(/\s+/);
    return palabras.length;
};

// Ejemplo de uso:
const texto = "Hola mundoo :p";
const cantidadPalabras = contarPalabras(texto);
console.log(`La cantidad de palabras en el texto es: ${cantidadPalabras}`);



