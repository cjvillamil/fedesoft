Para generar  
 ```
 ionic generate provider userService
```
se van a trabajar consulta de usuarios mediante funciones
en la carpeta providers se crea una subcarpeta llamada user-service y dentro de ella el archivo user-service.ts editamos:
```ts
getOneUser(){
    return this.http.get('https://randomuser.me/api');
  }
```
INSTALAR EN VISUAL STUDIO
https://code.visualstudio.com/

# Plugins y snippets de visual

- Ionic 3 ionView Snippets
- Angular	2	TypeScript	Emmet
- Angular	6	Snippets	– TypeScript,	Html,	Angular	Material…
- Angular	Language	Service
- Angular	v6	Snippets
- Angular2-inline
- Bootstrap	4	&	Font	Awesome	snippets --Mirar cual
- HTML	CSS	Support
- JavaScript	(ES6)	code	snippets
- JS-CSS-HTML	Formatter
- JSHint
- Prettier	– Code	Formatter
- Terminal
- TSLint
- TypeScript	Hero
- TypeScript	Importer

introducir en la terminal
 ```
ionic generate page userInfo
 ```
 en app.module.ts añadir en imports de  @NgModule 
 ```ts
 import { UserInfoPageModule } from '../pages/user-info/user-info.module'; //carga automaticamente
    UserInfoPageModule
 ```
 en home.html añadimos
  ```html
<button ion-button (click)="verUsuario()">ver usuario</button>
  ```
 en home.ts añadimos
 ```ts
 import { UserInfoPage } from '../user-info/user-info';//carga automaticamente
 
 verUsuario(){
    this.navCtrl.push(UserInfoPage);
  }
  ```
