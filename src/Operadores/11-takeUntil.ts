// TAKE UNTIL
// RECIBE COMO ARGUMENTO UN OBSERVABLE
// SIGUE RECIBIENDO LOS VALORES DEL PRIMER OBSERVABLE, PERO SE COMPLETA BAJO LA OCURRENCIA DE OBSERVABLE POR PARAMETRO

import { fromEvent, interval } from "rxjs";
import { takeUntil, tap } from "rxjs/operators";

const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';
document.querySelector('body').append(boton);

const counter$ = interval(1000);

const clickBoton$ = fromEvent(boton, 'click');

const observer = {
    next: value => console.log(`next: x ${value.x}, y ${value.y}`),
    complete: () => console.log('Complete')
};

counter$.pipe(
    tap(console.log),
    takeUntil(clickBoton$)
).subscribe(observer);

