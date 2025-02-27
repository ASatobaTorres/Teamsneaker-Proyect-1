
const zapatilla1 = ["Nike", "Adidas", "Asics", "Puma", "Reebock", 
    "Spezial", "Caterpillar"];

const zapatillas = { 
    marca   : "Adidas",
    modelo  : "Running",
    stock   : 100, 
    women   : {size1:35, size2:36, size3:37, size4: 38, size5:39},
    price   : 165e3,
    send    : 16500,
    size    : {min: 35, max: 40},
        shoes : function (size) { 
            if (size >= this.size.min && size <= this.size.max ) {
                return "CALZADO PARA DAMA";
            } else {
                return "No esta disponible esta talla para dama" ; 
            }  
    },
    mostrarInfo : function () {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Stock: ${this.stock},
            Precio:${this.price}, Envío:${this.send}, Tallas: ${this.size.min} - ${this.size.max}`)
    }
};

// const textShoes = Object.values(zapatillas);

document.getElementById("demo").innerHTML= zapatillas.marca, "," , zapatillas.modelo, "," ,
zapatillas.stock, "," , zapatillas.women, "," , zapatillas.price;
// let textShoes = " ";
// for (let x in textShoes) {
//     textShoes += zapatillas[x]+"";
// };

// document.getElementById("demo").innerHTML = textShoes;

zapatillas.mostrarInfo();
console.log(zapatillas.shoes(37));
console.log(zapatillas.women, zapatillas.shoes(42));

let shoes = zapatillas;

shoes.send = 17e3;

alert(shoes.send);

const Catalogo = [
    {marca: "Puma",     modelo: "Running", price: 175e3 ,  
        send:16500, stock: 13, size: [35,36,37,38,39] },

    {marca: "Adidas",    modelo: "Running", price: 19e4,    
        send:16500, stock: 20, size: [35,36,37,38,39] },

    {marca: "Asics",    modelo: "Running", price: 195e3,   
        send:16500, stock: 11, size: [35,36,37,38,39] },

    {marca: "Reebock",  modelo: "Running", price: 2e5,     
        send:16500, stock: 12, size: [35,36,37,38,39] },

    {marca: "Nike",     modelo: "Running", price: 22e4,    
        send:16500, stock: 11, size: [35,36,37,38,39] },
        
];

let revista = {
    Catalogo: function ( ) {
        return this.zapatilla1 + Catalogo + " " + this.zapatillas;
    }
};

let revistaCatlogo = revista.Catalogo();

console.log(revistaCatlogo);


