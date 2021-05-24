import { fromEvent } from "rxjs";
import { pluck, sample, tap, throttleTime } from "rxjs/operators";

// sample(observableX)
// nos permite obtener el ultimo valor emitido hastaque se acciona el OBSERVABLEX
//  si no se emitio nada no se emite nada

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');
const click$ = fromEvent(document, 'click');

input$.pipe(
    pluck('target','value'),
    sample(click$),
    tap(value => console.log(`Valor procesado:${value}`)),
).subscribe();