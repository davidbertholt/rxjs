import { fromEvent } from "rxjs";
import { auditTime, pluck, tap } from "rxjs/operators";

// auditRime(X)
// Nos emite el ultimo valor que se emitio dentro del tiempo X

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

input$.pipe(
    pluck('target','value'),
    auditTime(3000),
    tap(value => console.log(`Valor procesado:${value}`)),
).subscribe();