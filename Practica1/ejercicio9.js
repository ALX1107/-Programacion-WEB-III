//9. Crear una promesa que devuelva un mensaje de éxito después de 3 segundos
function f() {
  return new Promise(function(r) {
    setTimeout(function() {
      r("Despues de 3 segundos");
    }, 3000);
  });
}


f().then(function(m) {
  console.log(m); 
});