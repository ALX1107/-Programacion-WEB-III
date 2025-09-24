//. Proporcione un ejemplo concreto de encadenamiento de promesas.
function tarea1() {
  return new Promise(function(r) {
    setTimeout(() => {
      console.log("Tarea 1 completada");
      r("Resultado 1");
    }, 1000);
  });
}

function tarea2(valor) {
  return new Promise(function(r) {
    setTimeout(() => {
      console.log("Tarea 2 completada con:", valor);
      r("Resultado 2");
    }, 1000);
  });
}

function tarea3(valor) {
  return new Promise(function(r) {
    setTimeout(() => {
      console.log("Tarea 3 completada con:", valor);
      r("Proceso finalizado");
    }, 1000);
  });
}


tarea1()
  .then(tarea2)
  .then(tarea3)
  .then(function(mensajeFinal) {
    console.log(mensajeFinal); 
    });