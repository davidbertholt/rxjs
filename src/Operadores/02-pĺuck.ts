// Util cuando se quiere sacar un elemento de un objeto que estamos trabajando y queremos uqe esa sea la asalida del observable
// Util cuando se quiere sacar un elemento de un objeto que estamos trabajando y queremos uqe esa sea la asalida del observable

import { pluck } from "rxjs/operators";
import { fromEvent } from "rxjs";

// const observable$ = range(1,10);
const observable$ = fromEvent<KeyboardEvent>(document,'keyup');

// implicitamente esta haciendo pluck<KeyboardEvent,key>
const keyUpCodePropiedad$ = observable$.pipe(pluck('key')); // KeyboardEvent.key

// Si quiero acceder a una subpropiedad
const keyUpCodeSubporpiedad$ = observable$.pipe(pluck('target','baseURI')); // KeyboardEvent.key

const subscriptionP = keyUpCodePropiedad$.subscribe(console.log);
const subscriptionS = keyUpCodeSubporpiedad$.subscribe(console.log);
