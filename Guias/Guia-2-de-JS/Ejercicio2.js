// Funciones para simular la preparación de cada ítem
function prepararEnsalada() {
    return new Promise((resolve) => {
        console.log("Preparando la ensalada...");
        setTimeout(() => {
            console.log("Ensalada lista!");
            resolve("Ensalada");
        }, 4000); // 4 segundos
    });
}

function prepararHamburguesa() {
    return new Promise((resolve) => {
        console.log("Preparando la hamburguesa...");
        setTimeout(() => {
            console.log("Hamburguesa lista!");
            resolve("Hamburguesa");
        }, 8000); // 8 segundos
    });
}

function prepararBebida() {
    return new Promise((resolve) => {
        console.log("Preparando la bebida...");
        setTimeout(() => {
            console.log("Bebida lista!");
            resolve("Bebida");
        }, 2000); // 2 segundos
    });
}

// Función principal para coordinar la entrega del pedido
async function prepararPedido() {
    try {
        console.log("Iniciando preparación del pedido...");

        // Esperar a que todos los ítems se preparen
        const ensalada = await prepararEnsalada();
        const hamburguesa = await prepararHamburguesa();
        const bebida = await prepararBebida();

        console.log(`¡Pedido completo! Incluye: ${ensalada}, ${hamburguesa}, y ${bebida}.`);
    } catch (error) {
        console.error("Hubo un problema con el pedido:", error);
    }
}

// Ejecutar la preparación del pedido
prepararPedido();