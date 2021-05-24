// SKIP(X)
// OMITE X ELEMENTOS DEL OBSERVABLE
import { fromEvent, interval } from "rxjs";
import { skip, takeUntil, tap } from "rxjs/operators";

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
    tap(value => console.log('valor emitido: ',value)),
    skip(2),
    takeUntil(clickBoton$)
).subscribe(observer);

