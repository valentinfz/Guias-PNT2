//Punto A:

const frutas = ['Manzana', 'Pera', 'Melon', 'Naranja', 'Banana'];

//Poner 'Sandia' al final
frutas.push('Sandia');

// Poner 'Uva' al principio
frutas.unshift('Uva');

console.log(frutas);

//------------------------------------------------------------------------------------------------------------------------------------------

//Punto B: 

const numeros = [1,2,3,4,5];
const dobles = [];

for (let i = 0; i < numeros.length; i++) {
    dobles.push(numeros[i] * 2);
}

console.log(numeros);
console.log(dobles);

//------------------------------------------------------------------------------------------------------------------------------------------

//Punto C:

const colores = ['Rojo', 'Verde', 'Azul'];
const masColores = ['Rosa', 'Amarillo'];

const concatenados = colores.concat(masColores);

console.log(concatenados);