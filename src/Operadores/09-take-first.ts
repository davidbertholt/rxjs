// TAKE (X)
// CORTA LA SUBSCRIPCIOND ESDE EL ELEMENTO X

import { of } from "rxjs";
import { first, take, tap } from "rxjs/operators";

const numero$ = of(1,2,3,4,5);

const observer = {
    next: valor => console.log('Valor [next]: ', valor),
    complete: () => console.log('Completado')
};

console.info('TAKE')
numero$.pipe(
    take(3),
    tap(console.log)
).subscribe(observer);

console.info('FIRST')
numero$.pipe(
    tap(console.log),
    first(elemento => elemento > 3)
).subscribe(observer);