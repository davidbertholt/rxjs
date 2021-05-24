// distinct
// OMITE LOS ELEMENTOS DEL OBSERVABLE QUE YA HAN SIDO EMITIDOS
import { from, of } from "rxjs";
import { distinct, distinctUntilChanged, distinctUntilKeyChanged, skip, takeUntil, tap } from "rxjs/operators";
import { personas } from "../Data/personas";

// const source$ = of(1, 2, 1, 4, 5, 4, 6);

const observer = {
    next: value => console.log(`PROCESADO [next]: ${value.apellido}`),
    complete: () => console.log('Complete')
};

// source$.pipe(
//     tap(value => console.log('valor emitido: ',value)),
//     distinct()
// ).subscribe(observer);

const source$ = from(personas);

source$.pipe(
    distinct(persona => persona.apellido)
).subscribe(observer);

// EN EL UNTILCHANGE CAMBIA QUE SE COMPARA CON EL INMEDIATAMENTE ANTERIOR
// USA EL === POR LO QUE COMPARA TIPO Y VALOR.
// AL COMPARAR OBJETOS FALLA PORQUE VE LAS POSICIONES DE MEMORIAS DEL OBJETO
// PARA PODER COMPARAR ESTO DEBO HACER
// distinctUntilChanged( (anterior, actual) => anterior.nombre === actual.nombre );

// EN EL distinctUntilKeyChanged COMPARA CON EL INMEDIATAMENTE AANTERIOR LA KEY
//  LA EVITA CUANDO ES REPETIDA
// distinctUntilKeyChanged('key')
// distinctUntilKeyChanged('nombre')

