'use strict';

// Base de datos de pruebas en memoria

// const bdd = [
//     { id: 1, nombre: 'Javier', apellido: 'Lete' },
//     { id: 2, nombre: 'Pepe', apellido: 'Pérez' },
//     { id: 3, nombre: 'Juan', apellido: 'González' },
// ];

// URL para conectarnos a un servicio REST que accede al repositorio 2022-html del usuario
// javierlete de GitHub. Dentro de ello conecta con la colección llamada "personas" dentro de
// un fichero db.json del raíz de ese repositorio
//const URL = 'https://my-json-server.typicode.com/javierlete/2022-html/personas';
const URL = 'http://localhost:3000/personas';

// La función que llamamos esta vez es async porque va a tener dentro await
window.addEventListener('DOMContentLoaded', async function () {
    refrescarPantalla();

    const form = document.querySelector('form');

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const apellido = document.querySelector('#apellido').value;

        const persona = { nombre, apellido };
        const personaJSON = JSON.stringify(persona);

        console.log(personaJSON);

        const respuesta = await fetch(URL, {
            method: 'POST',
            body: personaJSON,
            headers: [
                ["Content-Type", "application/json"],
            ],
        });

        if(respuesta.status === 201) {
            refrescarPantalla();
        } else {
            alert('Ha habido un error al insertar');
        }
    });
});

async function refrescarPantalla() {
    // Llamamos al servidor para pedir la colección completa de personas

    // Con el await esperamos a la respuesta, permitiendo que mientras se recibe
    // se sigan procesando todos los eventos que ocurran (ratón, botones, barra de desplazamiento...)

    // Cuando llega la respuesta, la almacenamos en esa variable
    const respuesta = await fetch(URL);

    // Al igual que antes, esperamos la respuesta en este caso de la conversión del texto
    // JSON a objetos de JavaScript y los almacenamos en bdd (que quedará con un contenido
    // idéntico al de la prueba anterior)
    const bdd = await respuesta.json();

    // Buscamos la etiqueta tbody
    const tbody = document.querySelector('tbody');

    tbody.innerHTML = '';
    
    let tr;

    // Por cada objeto que hay en el array bdd...
    for (let fila of bdd) {
        // Creamos un nuevo tr
        tr = document.createElement('tr');

        // A ese tr le modificamos la parte interior por un HTML que contiene los datos
        // de el objeto en cuestión
        tr.innerHTML = `
        <th>${fila.id}</th>
        <td>${fila.nombre}</td>
        <td>${fila.apellido}</td>
    `;

        // Agregamos el tr ya rellenado al tbody que ya habíamos encontrado
        tbody.appendChild(tr);
    }
}