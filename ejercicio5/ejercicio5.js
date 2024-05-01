/*Escribe una función para calcular el área de un círculo. Puedes
utilizar funciones declarativas.*/

function areaCircle(radio) {
    const area = Math.PI * radio * radio;
    return area;
}
const radio = 5;
const area = areaCircle(radio);
console.log(`El área del círculo con radio ${radio} es: ${area}`);