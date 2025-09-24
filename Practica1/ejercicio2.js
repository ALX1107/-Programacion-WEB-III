//Crear una función que invierta el orden de las palabras en una frase.
//let cad = miFuncion(“abcd”)
//console.log(obj) // dcba

function invertir(t) {
  return t.split("").reverse().join("");
}

let cad = invertir("paralelepipedo");
console.log(cad); 