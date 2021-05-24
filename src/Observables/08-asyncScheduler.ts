import { asyncScheduler } from 'rxjs';

// const saludarBasico = () => console.log('Hola Mundo');

// // asyncScheduler.schedule(funciona a ejecutar, delay);
// asyncScheduler.schedule( saludarBasico, 2000 );

// // con un argumento
// const saludarConNombre = name => console.log('Hola', name);
// asyncScheduler.schedule( saludarConNombre, 3000, 'David' );

// // con mas de un argumento, el argumento es uno y debe ser un objeto
// const saludarConObjeto = elemeto => console.log( `Hola ${elemeto.name} ${elemeto.lastname}`);
// const objetoConDatos = {
//     name: 'Julieta',
//     lastname: 'Fossat'
// };
// asyncScheduler.schedule( saludarConObjeto, 4000, objetoConDatos );

// Ahora si mas elaborado
const subscription = asyncScheduler.schedule( function(state) {

    console.log('state', state)

    const newState = state + 1;
    const timerInterno = 1000;
    this.schedule(newState, timerInterno);

}, 1000, 0);

// Unsuscribe
// setTimeout(() => {
//     subscription.unsubscribe();
// }, 6000);

// o lo que es lo mismo
asyncScheduler.schedule(() => {
    subscription.unsubscribe()
}, 6000);