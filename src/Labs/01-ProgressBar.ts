import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";
import { texto } from "../Data/html-generado";

const body = document.querySelector('body');
body.append(texto);

const progressbar = document.createElement('div');
progressbar.setAttribute('class', 'progress-bar');
body.append(progressbar);

// datos de la pantalla
// const clientHeight = document.get ;
// const pageHeight = ;

// funcion del calculo de porcentaje
const calculoPorcentaje = ( event ) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return 100 * (scrollTop / (scrollHeight - clientHeight));
};

// subscripcion al html scroll
// const scroll$ = fromEvent<MouseEvent>(document, 'scroll');
const scroll$ = fromEvent(document, 'scroll');

const progres$ = scroll$.pipe(
    map(event => calculoPorcentaje(event)),
    tap(console.log)
);

progres$.subscribe(porcentaje => progressbar.style.width = `${porcentaje}%`);