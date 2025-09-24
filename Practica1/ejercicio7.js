//Almacenar el resto de los elementos de un arreglo sin tomar en cuenta los dos primeros
//elementos de un arreglo, mediante desestructuración

let a = [10, 20, 30, 40, 50];
let [x, y, ...z] = a;

console.log(x); 
console.log(y); 
console.log(z); 