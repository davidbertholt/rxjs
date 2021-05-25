// exhaustMap
// Ignora las nuevas suscripciones hasta terminar la que tiene coriendo

import { interval, of } from "rxjs"
import { exhaustMap, take, tap } from "rxjs/operators"

const number$ = of(1,2,3,4,5);
const interval$ = interval(500).pipe(take(3));

const observer = {
    next: value => console.log(`valor: ${value}`),
    complete: () => console.log('Complete')
};

number$.pipe(
        tap(elemento => console.log(elemento)),
        exhaustMap(() => interval$))
.subscribe(observer)