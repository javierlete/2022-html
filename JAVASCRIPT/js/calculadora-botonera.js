'use strict';

let operacionGlobal, op1, op2, total;

window.addEventListener('DOMContentLoaded', function() {
    const resultado = document.getElementById('resultado');
    const numeros = document.getElementsByClassName('numeros');

    // Por cada numero que haya en numeros
    for(let numero of numeros) {
        // Asociamos el gestor de eventos de click
        numero.addEventListener('click', (e) => {
            // Añadimos al valor del cuadro de texto resultado el número del botón pulsado
            resultado.value += e.target.innerText; // e.target es el botón pulsado
        });
    }

    const operaciones = document.getElementsByClassName('operaciones');

    // Por cada operación que haya en operaciones
    for(let operacion of operaciones) {
        // Asociamos el gestor de eventos de click
        operacion.addEventListener('click', (e) => {
            const op = e.target.innerText; // Texto de la operación (+, -, *, /, =)

            if(op !== '=') {
                op1 = parseInt(resultado.value);
                resultado.value = '';
                operacionGlobal = op;
            } else {
                op2 = parseInt(resultado.value);
                switch(operacionGlobal) {
                    case '+':
                        total = op1 + op2;
                        break;
                    case '-':
                        total = op1 - op2;
                        break;
                    case '*':
                        total = op1 * op2;
                        break;
                    case '/':
                        total = op1 / op2;
                        break;
                }

                resultado.value = total;
            }
        });
    }
});