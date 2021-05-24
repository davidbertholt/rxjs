import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log("value next [obs]: ", value),
    error: error => console.warn("error [obs]: ", error),
    complete: () => console.info("Completado")
}

const intervalo$ = new Observable<number> (subscripcion => {
    let contador = 0
    const interval = setInterval(() => {
        contador++;
        subscripcion.next(contador);
        console.log(contador);
    }, 1000);

    setTimeout(() => {
        subscripcion.complete();
        console.log("Timeout");
    }, 4000);

    return () => {
        clearInterval(interval);
        console.log("Destruido el interval");
    };
});

const subscripcion1 = intervalo$.subscribe( observer );
const subscripcion2 = intervalo$.subscribe( observer );
const subscripcion3 = intervalo$.subscribe( observer );

subscripcion1
    .add(subscripcion2)
    .add(subscripcion3);

setTimeout(() => {
    subscripcion1.unsubscribe();
}, 5000);