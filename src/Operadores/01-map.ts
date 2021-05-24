// El operador map trabaja con cualquier tipo de dato y regresa cualquier tipo tambien
// DEBE TENER UN RETURN
// PROCESA UNO A UNO TODOS LOS ESLEMENTOS
// map<input,salida>(valor => {
//     return valor * 10;
// })

import { map } from "rxjs/operators";
import { fromEvent, range } from "rxjs";

// const observable$ = range(1,10);
const observable$ = fromEvent<KeyboardEvent>(document,'keyup');

const keyUpCode$ = observable$.pipe(
    map<KeyboardEvent,string>(valor => {
        return valor.code;
}));

const subscription = keyUpCode$.subscribe(console.log);
