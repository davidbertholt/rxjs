// RANGE
// emite una secuencia de numeros, normalmente sincrona en un rango de valores

import { asyncScheduler, range } from 'rxjs';

// $ indica que es un observable
const observable1$ = range(1,5);
const observable2$ = range(-5,10);
const observable3$ = range(5); // El valor de inicio es 0 por defecto

console.log('InicioObservable 1:');
observable1$.subscribe(console.log);
console.log('fin observable 1');

console.log('InicioObservable 2:');
observable2$.subscribe(console.log);
console.log('fin observable 2');

console.log('InicioObservable 3:');
observable3$.subscribe(console.log);
console.log('fin observable 3');

// si nosotros le agregamos un asyncScheduler hace que se comporte de forma asincrona, funciona con cualquier funcion
const observable4$ = range(1, 7, asyncScheduler);

console.log('InicioObservable 4:');
observable4$.subscribe(console.log);
console.log('fin observable 4');