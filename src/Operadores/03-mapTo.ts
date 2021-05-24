// Util cuando se quiere sacar un elemento de un objeto que estamos trabajando y queremos uqe esa sea la asalida del observable

import { mapTo, pluck } from "rxjs/operators";
import { fromEvent } from "rxjs";

// const observable$ = range(1,10);
const observable$ = fromEvent<KeyboardEvent>(document,'keyup');

// Si quiero acceder a una subpropiedad
const keyUpMapTo$ = observable$.pipe(
    mapTo('tecla presionada') 
);

const subscriptionS = keyUpMapTo$.subscribe(console.log);
