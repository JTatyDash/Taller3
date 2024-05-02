/*Desarrolla una función que calcule el monto de impuestos a pagar según un
porcentaje dado. Puedes usar funciones autoejecutables.*/

(function() {
   //Otra funcion pero de la calduladora
    function calcularImpuestos(monto, porcentajeImpuesto) {
        
        const impuesto = monto * (porcentajeImpuesto / 100);
        return impuesto;
    }

    //creamos las variables
    const monto = 1000; 
    const porcentajeImpuesto = 15; 

    
    const impuestosAPagar = calcularImpuestos(monto, porcentajeImpuesto);

    // Muestra el resultado
    console.log(`Monto base: $${monto}`);
    console.log(`Porcentaje de impuesto: ${porcentajeImpuesto}%`);
    console.log(`Impuestos a pagar: $${impuestosAPagar.toFixed(2)}`);
})();
