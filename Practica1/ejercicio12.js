//Proporcione un ejemplo concreto donde el anidamiento de callbacks se puede
//reescribir mejor con async/await haciendo el código más limpio y mantenible.


function paso1(cb) {
  setTimeout(() => {
    console.log("Paso 1");
    cb();
  }, 1000);
}

function paso2(cb) {
  setTimeout(() => {
    console.log("Paso 2");
    cb();
  }, 1000);
}

function paso3(cb) {
  setTimeout(() => {
    console.log("Paso 3");
    cb();
  }, 1000);
}

// Ejecución con callbacks anidados
paso1(() => {
  paso2(() => {
    paso3(() => {
      console.log("Todos los pasos completados");
    });
  });
});

// Versión limpia con `async/await`


function paso11() {
  return new Promise(r => setTimeout(() => {
    console.log("Paso 1");
    r();
  }, 1000));
}

function paso22() {
  return new Promise(r => setTimeout(() => {
    console.log("Paso 2");
    r();
  }, 1000));
}

function paso33() {
  return new Promise(r => setTimeout(() => {
    console.log("Paso 3");
    r();
  }, 1000));
}

async function ejecutar() {
  await paso11();
  await paso22();
  await paso33();
  console.log("Todos los pasos completados");
}

ejecutar();
