//Punto A:
const libro = {
titulo: "Cien Años de Soledad",
autor: "Gabriel García Márquez",
anio: 1967
};

console.log("Título: " + libro.titulo);
console.log("Autor: " + libro.autor);
console.log("Año: " + libro.anio);

//O usando la notación de corchetes:
console.log("Título: " + libro["titulo"]);
console.log("Autor: " + libro["autor"]);
console.log("Año: " + libro["anio"]);

//------------------------------------------------------------------------------------------------------------------------------------------

//Punto B:
const persona = {
    nombre: "Valen",
    edad: 19,
    profesion: "Estudiante"
};

persona.hobby = "Ir al gym";

persona.edad = 20;

console.log(persona);

//------------------------------------------------------------------------------------------------------------------------------------------

//Punto C:
const num1 = 10;
const num2 = 5;

const calculadora = {
    sumar: function(a, b) {
        return a + b;
    },
    restar: function(a, b) {
        return a - b;
    },
    multiplicar: function(a, b) {
        return a * b;
    },
    dividir: function(a, b) {
        let resultado = 0;
        if (b === 0) {
            resultado = "Error: División por cero";
        } else {
        resultado =  a / b;
    }
    return resultado;
    }
};

console.log("Suma: " + calculadora.sumar(num1, num2));
console.log("Resta: " + calculadora.restar(num1, num2));
console.log("Multiplicación: " + calculadora.multiplicar(num1, num2));
console.log("División: " + calculadora.dividir(num1, num2));

// Probar la división por cero
console.log("División por cero: " + calculadora.dividir(num1, 0));