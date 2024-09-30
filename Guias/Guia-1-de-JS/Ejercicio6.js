//Punto A:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Usar filter() para crear un nuevo array con los números pares
const numerosPares = numeros.filter(num => num % 2 === 0);

console.log(numerosPares); // Imprime: [2, 4, 6, 8, 10]

//------------------------------------------------------------------------------------------------------------------------------------------

//Punto B:
const estudiantes = [
    { nombre: 'Ana', calificacion: 90 },
    { nombre: 'Juan', calificacion: 85 },
    { nombre: 'Pedro', calificacion: 78 },
    { nombre: 'Luis', calificacion: 92 }
];

const arraySoloNombres = [estudiantes.map(estudiante => estudiante.nombre)];

console.log(arraySoloNombres);

//------------------------------------------------------------------------------------------------------------------------------------------

//Punto C:
const ejNumeros = [1, 2, 3, 4, 5];

// Usar reduce() para calcular la suma de todos los números
const suma = ejNumeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

console.log(suma); // Imprime: 15