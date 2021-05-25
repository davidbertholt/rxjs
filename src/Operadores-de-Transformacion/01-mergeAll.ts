import { fromEvent, Observable } from "rxjs";
import { debounceTime, map, mergeAll, pluck } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

// INTERFACES
import { GitHubUsers } from "../Interfaces/github-users.interface";
import { GitHubUser } from "../Interfaces/gihub-user.interface";

// REFERENCIAS
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

// HELPERS
const mostrarUsuarios = (usuarios: GitHubUser[]) => {
    console.log(usuarios);
    orderList.innerHTML = '';

    for (const usuario of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'ver pagina';
        anchor.target = '_blank';

        li.append(img);
        li.append(usuario.login + '');
        li.append(anchor);

        orderList.append(li);
    }
};

// STREAMS
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

// OPERADORES
const subscriptionInput = input$
    .pipe(
        debounceTime(500),
        pluck<KeyboardEvent, string>('target','value'),
        map<string, Observable<GitHubUsers>>( busqueda => ajax.getJSON(
            `https://api.github.com/search/users?q=${busqueda}`
        )),
        mergeAll<GitHubUsers>(),
        pluck<GitHubUsers, GitHubUser[]>('items')
    )
    .subscribe(mostrarUsuarios);


