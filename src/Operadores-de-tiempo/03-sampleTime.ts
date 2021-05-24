import { fromEvent } from "rxjs";
import { pluck, sampleTime, tap, throttleTime } from "rxjs/operators";

// sampleTime(x)
// nos permite obtener el ultimo valor emitido en X tiempo
//  si no se emitio nada no se emite nada

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

input$.pipe(
    pluck('target','value'),
    sampleTime(3000),
    tap(value => console.log(`Valor procesado:${value}`)),
).subscribe();