import { fromEvent, interval, of } from "rxjs";
import { map, mergeMap, take, takeUntil, tap } from "rxjs/operators";

const letra$ = of('a', 'b', 'c')

const observer = {
    next: valor => console.log('Valor [next]: ', valor),
    complete: () => console.log('Completado')
};

letra$.pipe(
    tap(console.log),
    mergeMap((letra) => interval(1000).pipe(
        map(i => letra + i),
        take(3)))
)
// .subscribe(observer);

const mouseDown$ = fromEvent<MouseEvent>(document, 'mousedown');
const mouseup$ = fromEvent<MouseEvent>(document, 'mouseup');
const interval$ = interval();

mouseDown$.pipe(
    mergeMap(()=> interval$.pipe(
        takeUntil(mouseup$)
))).subscribe(console.log);