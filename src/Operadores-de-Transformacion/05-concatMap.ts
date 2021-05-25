// CONCATMAP
// concatMap()
//  EJECUTA TODO ELOBS 1 LUEGO TODO EL 2 Y ASI SUCESIVANMENTE LOS VA EJECUTANDO DE A UNO POR VEZ

import { interval, of } from "rxjs"
import { concatMap, take, tap } from "rxjs/operators"

const number$ = of(1,2,3,4,5);
const interval$ = interval(500).pipe(take(3));

const observer = {
    next: value => console.log(`valor: ${value}`),
    complete: () => console.log('Complete')
};

number$.pipe(
        tap(elemento => console.log(elemento)),
        concatMap(() => interval$))
.subscribe(observer)

