// Util cuando se quiere sacar un elemento de un objeto que estamos trabajando y queremos uqe esa sea la asalida del observable

import { filter } from "rxjs/operators";
import { from, range } from "rxjs";

const observable$ = range(1,10);

// Si quiero acceder a una subpropiedad
const subscription = observable$.pipe(
    filter( (value, index)=> {
        console.log(`value: ${value} index: ${index}`);
        return value % 2 === 0
}));

const subscriptionS = subscription.subscribe(console.log);

interface Personaje {
    tipo: string;
    nombre: string;
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'batman'
    },
    {
        tipo: 'heroe',
        nombre: 'superman'
    },
    {
        tipo: 'heroe',
        nombre: 'aquaman'
    },
    {
        tipo: 'villano',
        nombre: 'joker'
    },
];

const observablePersonaje$ = from(personajes);

const tipoSeleccionado = 'villano';

const subscriptionPersonajes = observablePersonaje$.pipe(
    filter(personaje => personaje.tipo === tipoSeleccionado)
).subscribe( personaje => {
    console.log(`tipo: ${personaje.tipo} nombre: ${personaje.nombre}`);
});