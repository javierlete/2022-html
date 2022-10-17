// Esperar a que se cargue todo el documento en memoria del DOM
window.addEventListener("DOMContentLoaded", function () {
    // Recogemos todos los objetos con los que queremos interactuar
    const op1 = document.getElementById('op1');
    const op = document.getElementById('op');
    const op2 = document.getElementById('op2');
    const resultado = document.getElementById('resultado');
    const calculadora = document.getElementById('calculadora');

    // Comprobación de si se han encontrado todos los objetos
    console.log(op1, op, op2, resultado, calculadora);

    // Esperar a la pulsación del botón igual (al envío del formulario)
});
