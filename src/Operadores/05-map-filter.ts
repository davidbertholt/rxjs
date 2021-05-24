// Util cuando se quiere sacar un elemento de un objeto que estamos trabajando y queremos uqe esa sea la asalida del observable
import { personajes } from '../Data/data'
import { filter, map } from "rxjs/operators";
import { from, fromEvent } from "rxjs";

const observablePersonaje$ = from(personajes);

const tipoSeleccionado = 'villano';

const subscriptionPersonajes = observablePersonaje$.pipe(
    filter(personaje => personaje.tipo === tipoSeleccionado)
).subscribe( personaje => {
    console.log(`tipo: ${personaje.tipo} nombre: ${personaje.nombre}`);
});

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map( event => event.code), // Sale un string
    filter( keyCode => keyCode === 'Enter' ) // Toma el string y lo compara
);

const subscriptionKeyUp = keyUp$.subscribe(console.log);