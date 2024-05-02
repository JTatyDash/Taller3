/*Crea una función que valide si una contraseña cumple con ciertos criterios
(longitud, caracteres especiales, etc.). Puedes utilizar métodos de
funciones.*/

function validarContrasena(contrasena) {
    
    const longitudMinima = 8; // Longitud mínima de la contraseña
    const tieneMayuscula = /[A-Z]/; // Al menos una letra mayúscula
    const tieneMinuscula = /[a-z]/; // Al menos una letra minúscula
    const tieneNumero = /[0-9]/; // Al menos un número
    const tieneCaracterEspecial = /[!@#$%^&*(),.?":{}|<>]/; // Al menos un carácter especial

    // Verificar longitud mínima
    if (contrasena.length < longitudMinima) {
        return false;
    }

    // Verificar presencia de al menos una letra mayúscula
    if (!tieneMayuscula.test(contrasena)) {
        return false;
    }

    // Verificar presencia de al menos una letra minúscula
    if (!tieneMinuscula.test(contrasena)) {
        return false;
    }

    // Verificar presencia de al menos un número
    if (!tieneNumero.test(contrasena)) {
        return false;
    }

    // Verificar presencia de al menos un carácter especial
    if (!tieneCaracterEspecial.test(contrasena)) {
        return false;
    }

    // Si la contraseña cumple con todos los criterios, retorna true
    return true;
}


const contrasena = 'Contraseña$123';
const esValida = validarContrasena(contrasena);

if (esValida) {
    console.log('La contraseña es válida.');
} else {
    console.log('La contraseña no cumple con los criterios.');
}
