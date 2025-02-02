export
const zapatillas1 = ["Nike", "Adidas", "Asics", "Puma", "Reebock", 
    "Spezial", "Caterpillar"];

const zapatillas = {
    size : {min: 35, max: 40},
    shoes : function (size) { 
        if (size >= this.size.min && size <= this.size.max ) {
            return "CALZADO PARA DAMA";
        } else {
            "No esta disponible esta talla"; 
        }  
    }
};
console.log(zapatillas.shoes(37));

zapatillas.name = "Adidas",
zapatillas.women = {size1:35, size2:36, size3:37, size4: 38, size5:39},
zapatillas.price = 165e3,
zapatillas.send = 16500,

console.log(zapatillas.women, zapatillas.shoes(42));
