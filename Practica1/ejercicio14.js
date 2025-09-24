//Proporcione un ejemplo para convertir una promesa en un callback.

//Supongamos que tienes esta función basada en promesas:


function obtenerDato() {
  return new Promise(function(r, e) {
    setTimeout(() => r("Dato recibido"), 1000);
  });
}


//Ahora la convertimos para que acepte un **callback** en lugar de usar `.then()`:

function obtenerDatoConCallback(cb) {
  obtenerDato()
    .then(resultado => cb(null, resultado))
    .catch(error => cb(error));
}

// Ejemplo de uso
obtenerDatoConCallback(function(err, res) {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("Resultado:", res); // Resultado: Dato recibido
  }
});
