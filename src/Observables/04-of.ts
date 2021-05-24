// OF
// permite crear observables a partir de elementos
// si tengo una lista, los va a mostrar uno a uno de forma sincrona hasta finalizar

import { of } from 'rxjs';

const obs$ = of<number>(1,2,3,4,5);

obs$.subscribe(
    next => console.log('next', next),
    error => console.log('error', error),
    () => console.log('finalizo la secuencia')
);