//Punto A:
const nombre = "Valen";
const edad = 19;
const profesion = "Programadador";

// Crear una cadena usando template literals
const mensaje = `Hola, mi nombre es ${nombre}. Tengo ${edad} años y trabajo como ${profesion}.`;

console.log(mensaje);

//Template Literals: La cadena se define entre backticks `` y se incluyen las variables dentro de ${} para la interpolación.

//------------------------------------------------------------------------------------------------------------------------------------------

//Punto B:
const producto = {
    nombre: "Teclado mecanico",
    marca: "HyperX"
};

function productoConPrecio(producto, precio) {
    let mensaje = `El producto es: ${producto.nombre} de la marca ${producto.marca} con un precio de ${precio} USD`;
    return mensaje;
}

console.log(productoConPrecio(producto, 110));

//------------------------------------------------------------------------------------------------------------------------------------------

//Punto C:
const error = {
nombre: "TypeError",
descripcion: "Se intentó acceder a una propiedad de un valor undefined."
};

const mensajeError = `Error: ${error.nombre} - Descripción: ${error.descripcion}`;

console.log(mensajeError);