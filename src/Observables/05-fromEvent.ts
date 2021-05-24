// From Event
//  premite capturar eventos del DOM

import { fromEvent } from 'rxjs';

const evento1 = fromEvent<MouseEvent>( document, 'click');
const evento2 = fromEvent<KeyboardEvent>( document, 'keyup');

const observer = {
    next: val => console.log('next', val)
}

evento1.subscribe(observer);
evento2.subscribe( evento =>{
    console.log(evento.key)
});