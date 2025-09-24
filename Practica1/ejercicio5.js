//Crear una función que determine si una cadena es palíndromo (se lee igual al derecho y
//al revés).
//let band = miFuncion(“oruro”)
//console.log(band) // true
//let band = miFuncion(“hola”)
//console.log(band) // false

function ver_Palindromo(t) {
  let r = t.split("").reverse().join("");
  return t === r;
}

let band = ver_Palindromo("oruro");
console.log(band); 

band = ver_Palindromo("hola");
console.log(band); 