// Proporcione un ejemplo concreto donde el anidamiento de promesas se puede
//reescribir mejor con async/await haciendo el código más limpio y mantenible


//Versión con anidamiento de promesas


function paso1() {
  return new Promise(r => setTimeout(() => r("Paso 1 completado"), 1000));
}

function paso2() {
  return new Promise(r => setTimeout(() => r("Paso 2 completado"), 1000));
}

function paso3() {
  return new Promise(r => setTimeout(() => r("Paso 3 completado"), 1000));
}

// Encadenamiento anidado
paso1().then(res1 => {
  console.log(res1);
  paso2().then(res2 => {
    console.log(res2);
    paso3().then(res3 => {
      console.log(res3);
      console.log("Proceso finalizado");
    });
  });
});


// Versión limpia con `async/await`


function paso11() {
  return new Promise(r => setTimeout(() => r("Paso 1 completado"), 1000));
}

function paso22() {
  return new Promise(r => setTimeout(() => r("Paso 2 completado"), 1000));
}

function paso33() {
  return new Promise(r => setTimeout(() => r("Paso 3 completado"), 1000));
}

async function ejecutar() {
  let res1 = await paso11();
  console.log(res1);

  let res2 = await paso22();
  console.log(res2);

  let res3 = await paso33();
  console.log(res3);

  console.log("Proceso finalizado");
}

ejecutar();
