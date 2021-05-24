// throttleTime(x)
// emite apenas le llega y e ignora todo durante un X tiempo
import { pluck, tap, throttleTime } from "rxjs/operators";

import { fromEvent } from "rxjs";

// const click$ = fromEvent(document, 'click');

// click$.pipe(
//     throttleTime(1000)
// ).subscribe(console.log);

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

input$.pipe(
    pluck('target','value'),
    tap(value => console.log(`Valor emitido: ${value}`)),
    throttleTime(3000),
    tap(value => console.log(`Valor procesado:${value}`)),
).subscribe();