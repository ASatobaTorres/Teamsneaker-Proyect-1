import { zapatillas } from "./object";

// let bigNumber = BigInt("Tambien puedes comprar muchos mas estilos en TEAMSNEAKERS27");
// console.log(valor);

const infoZapatillas = zapatillas;
let envio = 16500; 
let valor = 18e4 + envio + " " + "CON ENVIO";

function priceOnSend (envio) {
    let priceTotal = envio + valor + infoZapatillas;
    
    return priceTotal   };

console.log(priceOnSend(16500, 175e3));


