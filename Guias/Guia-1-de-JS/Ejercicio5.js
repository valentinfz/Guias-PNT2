//Punto A:
//Antes

/*
function saludar(nombre) {
    return "Hola, " + nombre + "!";
}
*/

//Despues
const saludar = nombre => `Hola, ${nombre}!`;

console.log(saludar("Valen"));

//------------------------------------------------------------------------------------------------------------------------------------------

//Punto B:
const cuadrado = num => num * num;

console.log(cuadrado(5));

//------------------------------------------------------------------------------------------------------------------------------------------

//Punto C:
const mayor = (a, b) => a > b ? a : b;

console.log(mayor(10, 7)); // Imprime: 10
console.log(mayor(4, 9));  // Imprime: 9