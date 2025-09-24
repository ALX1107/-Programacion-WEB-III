//Proporcione un ejemplo para migrar una función con promesas a async/await

//Versión original con promesas

function obtenerDato() {
  return new Promise(function(r) {
    setTimeout(() => r("Dato recibido"), 1000);
  });
}

obtenerDato().then(function(res) {
  console.log(res);
});

//Versión migrada con `async/await`

function obtenerDato() {
  return new Promise(function(r) {
    setTimeout(() => r("Dato recibido"), 1000);
  });
}

async function mostrarDato() {
  let res = await obtenerDato();
  console.log(res);
}

mostrarDato();
