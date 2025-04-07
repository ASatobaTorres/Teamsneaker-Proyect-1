// Crear un arreglo de 5 números y mostrarlo en consola.

let numerosCinco= [2,44,55,9,3,104,5];

// console.log(numerosCinco);

// Recorrer un arreglo con un bucle for y mostrar cada elemento.

for (let i = 0; i < numerosCinco.length; i++) {
    const element = numerosCinco[i];
    // console.log(element);    
}

// Sumar todos los elementos de un arreglo numérico.

function holaSuma (numerosCinco) {
    let suma = 0;
    for (let i = 0; i < numerosCinco.length - 1; i++) {
    suma += numerosCinco[i];
    }
    return suma;
}
// console.log(holaSuma(numerosCinco));

function calcularPromedio(numerosCinco) {
    let suma = numerosCinco.reduce((acc, val) => acc + val, 0);
    return  suma / numerosCinco.length;
}
// console.log(calcularPromedio(numerosCinco));

    function hola (numerosCinco) {
        let suma = 0;
    for (let i = 0; i < numerosCinco.length - 1; i++) {
        suma += numerosCinco[i];
    }
    return suma;
}
// console.log(hola(numerosCinco))


// Encontrar el número más grande de un arreglo.

function numeroMayor (numerosCinco) {
    let mayorNumero = numerosCinco[0]; 
    
    for (let i = 0; i < numerosCinco.length; i++) {
        if(numerosCinco[i] > mayorNumero ){
            mayorNumero = numerosCinco[i];
        }     
    } 
    return "numero mayor: " + mayorNumero;
}
// console.log(numeroMayor(numerosCinco));

// Contar cuántos números pares hay en un arreglo.

let contarPares = numerosCinco.filter( num => num % 2 === 0).length;

// console.log(contarPares);

// Agregar un elemento al final y al inicio del arreglo.

let agregarPrincipio = numerosCinco.unshift(44)
let agregarFinal = numerosCinco.push(23)

// console.log(numerosCinco);

// Eliminar el primer y último elemento de un arreglo.


let eliminarUltimo = numerosCinco.pop()
let eliminarPrimero = numerosCinco.splice(0,1)

// console.log(eliminarUltimo);
// console.log(eliminarPrimero);
// console.log(numerosCinco);

// Buscar si un elemento existe en un arreglo (usando .includes()).

function numerosIncluidos(num,numerosCinco) {
    return numerosCinco.includes(num) ?  "Numero Incluido: " + num : "numero no incluido: " + num 
}
// console.log(numerosIncluidos(66,numerosCinco));


// let arreglo1= [20,30,35,40,47,50,32];

// function amorNumero(num1,arreglo1) {
//     return arreglo1.includes(num1) ? "no se: " + num1 : "si se: " + num1
// }
// console.log(amorNumero(32,arreglo1));

// Invertir un arreglo sin usar .reverse().
function revertirArreglo(numerosCinco) {
    let arreglo1 = []

    for (let i = numerosCinco.length - 1; i >= 0 ; i--) {
        arreglo1.push(numerosCinco[i]) 
    }
    return arreglo1;
}
// console.log(revertirArreglo(numerosCinco)); 
// console.log(numerosCinco); 

// Ordenar un arreglo de números de menor a mayor (usa .sort()).

function ordenarArreglo (numerosCinco) {
    return numerosCinco.sort((a,b) => a-b)  
    // return numerosCinco.sort((a,b) => b - a)  
}
console.log(ordenarArreglo(numerosCinco));







