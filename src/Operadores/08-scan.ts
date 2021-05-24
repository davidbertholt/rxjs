// SCAN EXACTAMENTE IGUAL AL REDUCE SOLO QUE CUANDO SON EMITIDOS VAN SALIENDO
//  SCAN( (ACCUMULADO, ACTUAL) => FUNCION , INICIAL)

import { from } from "rxjs";
import { scan, reduce, tap } from "rxjs/operators";

const numeros = [1,2,3,4,5];

const totalReducer = (acumulador: number, actual: number) => acumulador + actual;

const observer = {
    next: valor => console.log('Valor [next]: ', valor),
    complete: () => console.log('Completado')
};

// from(numeros)
// .pipe(
//     tap(console.log),
//     reduce(totalReducer)
// )
// .subscribe(observer)

from(numeros)
.pipe(
    tap(console.log),
    scan(totalReducer)
)
.subscribe(observer)


