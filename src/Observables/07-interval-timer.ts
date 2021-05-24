// Interval y timer son asincronos por naturaleza
// Interval permite dar lapsos de X milisegundos para emitir una secuencia de números
// Timer permite que luego de una secuencia de tiempo exponer un valor

import { interval, timer } from "rxjs";

const observer = {
    next: value => console.log('next: ', value),
    complete: () => console.log('complete')
}

const observableInterval$ = interval(1000);
const observableTimer$ = timer(1000);

observableInterval$.subscribe(observer);
observableTimer$.subscribe(observer);