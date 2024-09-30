//Punto A:
const persona = {
    nombre: 'Ana',
    edad: 30,
    ciudad: 'Madrid'
};

// Usar destructuring para extraer nombre y edad en variables separadas
const { nombre, edad } = persona;

console.log(nombre); // Imprime: Ana
console.log(edad);  // Imprime: 30

//------------------------------------------------------------------------------------------------------------------------------------------

//Punto B:
const coche = {
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2021,
    color: 'Rojo',
    kilometraje: 15000
};

//Los separo
function mostrar({marca, modelo, anio, color, kilometraje}) {
    console.log(`Marca: ${marca}`);
    console.log(`Modelo: ${modelo}`);
    console.log(`Anio: ${anio}`);
    console.log(`Color: ${color}`);
    console.log(`Kilometraje: ${kilometraje}`);
}

mostrar(coche);

//------------------------------------------------------------------------------------------------------------------------------------------

//Punto C:
// Array con información de una ciudad
const ciudad = ['Barcelona', 'España', 162034];

// Usar destructuring para asignar cada elemento del array a una variable
const [localidad, pais, poblacion] = ciudad;

console.log(`Localidad: ${localidad}`);    // Imprime: Localidad: Barcelona
console.log(`País: ${pais}`);        // Imprime: País: España
console.log(`Población: ${poblacion}`); // Imprime: Población: 162034