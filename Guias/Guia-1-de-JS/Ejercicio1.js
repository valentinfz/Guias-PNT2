let edad = 19;
const nombre = "Valen";

edad = 20;
nombre = "Juan";

/*
Se produce el error: TypeError: Assignment to constant variable.

Esto se debe a que se intenta reasignar un nuevo valor a la constante nombre con nombre = "Juan";. 
En JavaScript, las constantes (const) no pueden ser reasignadas después de su inicialización.
*/