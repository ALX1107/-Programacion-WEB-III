//¿Cuando es conveniente utilizar un callback, y cuando es necesario utilizar una
//promesa?

/* ¿Cuándo usar un callback ?
- Cuando la operación es simple y rápida, como leer un archivo, ejecutar una función después de un tiempo (`setTimeout`), o responder a un evento.
- Cuando no necesitas encadenar múltiples acciones ni manejar errores de forma estructurada.
- Ideal para funciones pequeñas o cuando estás trabajando con APIs que ya están diseñadas para usar callbacks.
*/

//ejemplo:

function f1(cb) {
  setTimeout(cb, 1000);
}
f1(function() {
  console.log("Hecho");
});


/*¿Cuando usar una promesa?
- Cuando la operación es asíncrona y compleja, como llamadas a servidores, peticiones HTTP, o procesos que pueden fallar.
- Cuando necesitas encadenar acciones (`.then()`) o usar `async/await` para escribir código más limpio.
- Cuando quieres **manejar errores con `.catch()` o `try/catch`.
*/

//ejemplo:

function f2() {
  return new Promise(function(r, e) {
    setTimeout(() => r("Exito"), 1000);
  });
}
f2().then(m => console.log(m));
