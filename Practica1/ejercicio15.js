//. Proporcione un ejemplo para convertir un callback en una promesa.

// Versión original con callback

//Supongamos que tenemos una función que usa un callback para leer datos:


function obtenerDato(cb) {
  setTimeout(() => {
    cb(null, "Dato recibido");
  }, 1000);
}

//Versión convertida a promesa

function obtenerDatoPromesa() {
  return new Promise(function(r, e) {
    obtenerDato(function(err, res) {
      if (err) {
        e(err);
      } else {
        r(res);
      }
    });
  });
}

// Ejemplo de uso con .then()
obtenerDatoPromesa().then(function(res) {
  console.log("Resultado:", res); // Resultado: Dato recibido
});
