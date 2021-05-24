//  TAP
// nos permite disparar efectos secundarios

import { range } from "rxjs";
import { map, tap } from "rxjs/operators";

const numero$ = range(1,5);

const observer = {
    next: value => console.log('After MAP', value),
    complete: () => console.log('Se termino todo')
}

numero$.pipe(
    tap(x => console.log('Primer TAP', x)),
    map(val => val * 10),
    tap(observer),

).subscribe(x => console.log('Salida de todo el pipe', x));