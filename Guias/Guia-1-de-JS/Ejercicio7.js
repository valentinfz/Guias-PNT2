//Punto A:
const sumarTodos = (...args) => {
    // Usar reduce() para sumar todos los argumentos
    return args.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
};

console.log(sumarTodos(1, 2, 3, 4, 5)); // Imprime: 15
console.log(sumarTodos(10, 20, 30));    // Imprime: 60
console.log(sumarTodos(7, 14));         // Imprime: 21

//------------------------------------------------------------------------------------------------------------------------------------------

//Punto B:
const numeros = [10, 5, 8, 20, 15];

// Usar el spread operator para pasar los elementos del array a Math.max()
const maximo = Math.max(...numeros);

console.log(maximo); // Imprime: 20

//------------------------------------------------------------------------------------------------------------------------------------------

//Punto C:
const persona = {
    nombre: 'Ana',
    edad: 30
};

const direccion = {
    calle: 'San Martin 2198',
    ciudad: 'Buenos Aires'
};

// Combinar dos objetos usando el spread operator
const personaCompleta = {
    ...persona,
    ...direccion
};

console.log(personaCompleta);