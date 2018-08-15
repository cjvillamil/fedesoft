```JS
npm i npm@latest -g
npm install -g @angular/cli
ng new <nombre app> --style=scss
cd <nombre app>	
ng serve --open
```
crear en la carpeta app una carpeta share
y dentro de la carpeta share un archivo
data.ts
abrir nueva terminal
```js
cd <nombre app>
//ng generate component <nombre componente>
ng generate component personas/usuarios
```
Ir a https://jsonplaceholder.typicode.com/todos y copiar todo;
en el archivo data.ts 
``` js
export const usuariosData = 
```
y pegamos lo que se copio de la pagina;
en el archivo app.component.html al final añadimos
```html
<app-usuarios></app-usuarios>
```
en usuarios.component.ts
```js
import { usuariosData } from '../../share/data';
```
dentro de UsuariosComponent añadimos
```js
 persona = usuariosData[0];
  constructor() {
    console.log(this.persona);
  }
```
dentro de usuarios.component.html
añadimos:
```html 
<div>
  <ul>
    <li>completed: {{persona.completed}}</li>
    <li>id: {{persona.id}}</li>
    <li>title: {{persona.title}}</li>
    <li>userId: {{persona.userId}}</li>
  </ul>
</div>
```
luego vamos a usar directivas
dentro de UsuariosComponent modificamos así:
```js
 personas = usuariosData;
  constructor() {
    //console.log(this.persona);
  }
```
y en usuarios.component.html
modificamos:
```html 
<div>
  <ul *ngFor="let persona of personas">
    <li>completed: {{persona.completed}}</li>
    <li>id: {{persona.id}}</li>
    <li>title: {{persona.title}}</li>
    <li>userId: {{persona.userId}}</li>
  </ul>
</div>
```
