// Importar node-fetch
const fetch = require('node-fetch');

// Paso 1
const preparativos = [
    { requisito: "documentos al dia", valor: true },
    { requisito: "reservas del hotel", valor: false },
    { requisito: "transporte confirmado", valor: true },
    { requisito: "seguro de viaje", valor: true },
    { requisito: "dinero", valor: false }
];

// Paso 2
preparativos.push({ requisito: "vacunas necesarias", valor: true });

// Paso 3
const index = preparativos.findIndex(requisito => requisito.requisito === "seguro de viaje");
if (index !== -1) {
    preparativos.splice(index, 1);
}

// Paso 4
const transporte = preparativos.find(requisito => requisito.requisito === "transporte confirmado");
if (transporte) {
    transporte.valor = false;
}

// Paso 5
function listoParaViajar(preparativos) {
    const faltantes = preparativos
        .filter(requisito => !requisito.valor)
        .map(requisito => requisito.requisito)
        .join(", ");

    if (faltantes.length === 0) {
        return "¡Estamos listos para viajar!";
    } else {
        return `Faltan los siguientes requisitos: ${faltantes}.`;
    }
}
console.log(listoParaViajar(preparativos));

// Paso 6
async function listoParaViajarDesdeAPI() {
    try {
        const response = await fetch('https://www.mockachino.com/33754ea7-2586-48/preparativos');
        const data = await response.json(); // Aquí obtenemos el objeto completo
        const preparativos = data.preparativos; // Accedemos al array dentro del objeto

        console.log(preparativos); // Verifica la estructura de la respuesta

        const faltantes = preparativos
            .filter(requisito => !requisito.valor)
            .map(requisito => requisito.requisito)
            .join(", ");

        if (faltantes.length === 0) {
            console.log("¡Estamos listos para viajar!");
        } else {
            console.log(`Faltan los siguientes requisitos: ${faltantes}.`);
        }
    } catch (error) {
        console.error("Hubo un problema al obtener los preparativos", error);
    }
}

listoParaViajarDesdeAPI();