import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log("value next [obs]: ", value),
    error: error => console.error("error [obs]: ", error),
    complete: () => console.info("Completado")
}

const obs$ = new Observable<string>( subs => {
    subs.next("Hola");
    subs.next("Mundo");

    subs.next("Hola");
    subs.next("Mundo");

    // Forzar error
    // const a = undefined;
    // a.name = "David";

    subs.complete();

    subs.next("Hola");
    subs.next("Mundo");

});

obs$.subscribe(observer);
