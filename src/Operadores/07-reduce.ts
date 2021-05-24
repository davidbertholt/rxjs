// APLICA UNA FUNCION ACUMULADORA A LAS EMISIONES DEL OBSERVABLE
//  REDUCE( (ACUMULADO, ACTUAL) => FUNCION, INICIAL )

import { interval } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

// const numbers = [1,2,3,4,5];
const totalReducer = (acumulador: number, actual: number) => {
    return acumulador + actual;
}
// const total = numbers.reduce(totalReducer, 0);
// console.log(total)

const observer = {
    next: valor => console.log('Valor [next]: ', valor),
    complete: () => console.log('Completado')
};

interval(1000)
.pipe(
    take(4),
    tap(console.log),
    reduce(totalReducer, 5)
)
.subscribe(observer)
