//Crear una función que reciba un arreglo de números y devuelva el número mayor y el
//menor, en un objeto.
//let obj = miFuncion([3,1,5,4,2])
//console.log(obj) // { mayor: 5, menor: 1 }

function buscar_May_Men(a) {
  let r = {
    mayor: Math.max(...a),
    menor: Math.min(...a)
  };
  return r;
}


let obj = buscar_May_Men([3, 1, 5, 4, 2]);
console.log(obj); 