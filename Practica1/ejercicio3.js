//Crear una función que reciba un arreglo de números y devuelva en un objeto a los pares
//e impares:
//let obj = miFuncion([1,2,3,4,5])
//console.log(obj) // { pares: [2,4], impares: [1,3,5]}

function buscar(a) {
  let r = { pares: [], impares: [] };
  for (let x of a) {
    if (x % 2 === 0) {
      r.pares.push(x);
    } else {
      r.impares.push(x);
    }
  }
  return r;
}
let obj = buscar([1, 2, 3, 4, 5]);
console.log(obj);