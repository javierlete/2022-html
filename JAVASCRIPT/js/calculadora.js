// Obligar a la declaración de las variables
'use strict';

// Esperar a que se cargue todo el documento en memoria del DOM
window.addEventListener('DOMContentLoaded', function () {
    // Recogemos todos los objetos con los que queremos interactuar
    const op1 = document.getElementById('op1');
    const op = document.getElementById('op');
    const op2 = document.getElementById('op2');
    const resultado = document.getElementById('resultado');
    const calculadora = document.getElementById('calculadora');

    // Comprobación de si se han encontrado todos los objetos
    console.log(op1, op, op2, resultado, calculadora);

    // Esperar a la pulsación del botón igual (al envío del formulario)
    calculadora.addEventListener('submit', function (e) {
        // Cuando el evento es submit suele ser deseable
        // cancelar el funcionamiento por defecto del navegador
        // (que es enviar los datos del formulario a la dirección del
        // action)
        e.preventDefault();

        // Trabajamos con los value's del formulario
        let total;

        switch (op.value) {
            case '+':
                total = parseInt(op1.value) + parseInt(op2.value);
                break;
            case '-':
                total = op1.value - op2.value;
                break;
            case '*':
                total = op1.value * op2.value;
                break;
            case '/':
                total = op1.value / op2.value;
                break;
            default:
                total = 'No se ha reconocido esa operación';
                break;
        }

        // Modificar la pantalla para mostrar los resultados
        resultado.innerHTML = total;
    });
});
