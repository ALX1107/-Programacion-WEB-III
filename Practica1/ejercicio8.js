//Realizar un código para ejecutar una función callback después 2 segundos.
function fun(cb) {
  setTimeout(cb, 2000);
}

fun(function() {
  console.log("Ejecutado después de 2 segundos");
});