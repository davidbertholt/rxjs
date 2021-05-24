import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log("value next [obs]: ", value),
    error: error => console.warn("error [obs]: ", error),
    complete: () => console.info("Completado")
}

const intervalo$ = new Observable<number> (subscriber => {
    const intervalID = setInterval(() => {
        subscriber.next(Math.random());
    }, 1000);

    // setTimeout(() => {
    //     subscriber.complete();
    //     console.log("Timeout");
        
    // }, 4000);

    return () => {
        clearInterval(intervalID);
        console.log("Destruido el interval");
    };
});

/*
* SUBJECT
*
* 1. Casteo multiple
* 2. Tambien es un observer
* 3. next, error y complete
*
* Nos permite transformar un COLD OBSERVABLE en un HOT OBSERVABLE
* El primero es cuando la data se prodeuce dentro del Observable
* El segundo es cuando la data se prodeuce fuera del Observable
*/

const subject$ = new Subject();

const intervaloSubject = intervalo$.subscribe( subject$ );

const subscripcion1 = subject$.subscribe( observer );
const subscripcion2 = subject$.subscribe( observer );

// subscripcion1
//     .add(subscripcion2);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    intervaloSubject.unsubscribe();
}, 3500);