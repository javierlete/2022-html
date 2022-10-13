'use strict';

bucles();

//condicionales();
//objetos();
// arrays();
// tiposBasicos();

function bucles() {
    let x = 1;
    while (x <= 5) {
        console.log(x);
        x++; // x += 1; x = x + 1;
    }

    x = 1;
    do {
        console.log(x);
        x++;
    } while (x <= 5);

    for(let i = 1; i <= 5; i++) {
        console.log(i);
    }

    const arr = [ 10, 2, 30, 4, 5, 6, 6 ];

    for(let dato of arr) {
        console.log(dato);
    }
}

function condicionales() {
    const aceptado = confirm('¿Aceptas algo?');

    if (aceptado) {
        alert('ACEPTADO');
    } else {
        alert('NO ACEPTADO');
    }

    const opcion = parseInt(prompt('Dime una opción'));

    // Se entra por el case, se sale por el break
    switch (opcion) {
        case 1:
            console.log('UNO');
            break;
        case 2:
            console.log('DOS');
            break;
        default:
            console.log('No se reconoce dicha opción');
            break;
    }
}

function objetos() {
    const objeto = new Object();

    objeto.id = 1;
    objeto.nombre = 'Algo';
    objeto.apellido = 'Alguez';
    objeto.color = 'Rojo';

    objeto.nombree = 'Otro';

    objeto.nombreCompleto = function () {
        return this.nombre + ' ' + this.apellido;
    };

    objeto.basicos = tiposBasicos;

    console.log(objeto.basicos());

    console.log(objeto);

    console.log(typeof objeto);

    console.log(objeto.nombreCompleto);
    console.log(objeto.nombreCompleto());

    // const objeto2 = { id: objeto.id, nombre: objeto.nombre, color: objeto.color, nombree: objeto.nombree};
    const objeto2 = { ...objeto };

    objeto2.color = 'Amarillo';

    console.log(objeto);
    console.log(objeto2);
}

function arrays() {
    const arr = new Array(3);

    arr[0] = 1;
    arr[1] = 2;
    arr[2] = 'Pepe';
    arr[3] = 123;
    arr[8] = 'Otra cosa';

    arr['casa'] = 'Home';
    arr.perro = 'Dog';

    arr[5] = 1234;

    arr.push('Último');

    console.log(arr);
    console.log(arr.length);

    console.log(arr[3]);

    console.log(arr.casa);
    console.log(arr['perro']);

    const pregunta = prompt('Dime una palabra');

    console.log(arr[pregunta]);

    const arrJson = [1, 2, 3, 4];
    console.log(arrJson);
}

// TIPOS BÁSICOS
function tiposBasicos() {
    // Mostrar mensaje por consola
    console.log('Hola mundo');

    // Asignamos el valor 'Javier' a la variable nombre
    let nombre;

    nombre = 'Javier';

    // Visualizamos el valor de la variable nombre
    console.log(nombre);

    console.log('Hola ' + nombre);

    console.log(typeof nombre);

    nombre = 123.5;

    console.log(nombre);

    console.log('Hola ' + nombre);

    console.log(typeof nombre);

    nombre = '123.5';

    console.log(nombre + 3);

    let numero = prompt('Dime un número');

    numero = parseInt(numero, 10);

    console.log(numero == NaN);
    console.log(isNaN(numero));

    console.log(typeof numero);

    const suma = numero + 3;

    console.log(suma);

    alert(suma);

    const resultado = confirm('¿Estás seguro?');

    console.log(resultado);

    console.log(typeof resultado);
}