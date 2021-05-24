// TAKE WHILE
// TOMA LOS VALORES MIENTRAS CUMPLAN LA CONDICION
// SI QUEREMOS EL QUE NO CUNPLE COLCAMOS EL inclusive = true

import { takeWhile, map } from "rxjs/operators";
import { fromEvent } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');

const observer = {
    next: value => console.log(`next: x ${value.x}, y ${value.y}`),
    complete: () => console.log('Complete')
}

click$.pipe(
    map( ({ x, y }) => ({x, y}) ),
    takeWhile( ({ y }) => y <= 150, true )
).subscribe( observer );

click$.pipe(
    map( ({ x, y }) => ({x, y}) ),
    takeWhile( ({ y }) => y <= 150 )
).subscribe( observer );