'use strict';

window.addEventListener('DOMContentLoaded', function () {

    const h1s = document.getElementsByTagName('h1');

    console.log(h1s);

    const h1 = h1s[0];

    console.log(h1);

    h1.innerHTML = 'Modificado por JavaScript';

    const formSaludo = document.getElementById('form-saludo');
    const inputNombre = document.getElementById('nombre');
    const spanSaludo = document.getElementById('saludo');

    console.log(formSaludo, inputNombre, spanSaludo);

    formSaludo.addEventListener('submit', function (e) {
        e.preventDefault();

        const nombre = inputNombre.value;

        spanSaludo.innerText = 'Hola ' + nombre;
    });
});
