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
 import { UserInfoPageModule } from '../pages/user-info/user-info.module'; //se importa automaticamente
 import { HttpClientModule } from '@angular/common/http';//se importa automaticamente
    HttpClientModule,
    UserInfoPageModule
 ```
 en home.html añadimos
  ```html
<button ion-button (click)="verUsuario()">ver usuario</button>
  ```
 en home.ts añadimos
 ```ts
 import { UserInfoPage } from '../user-info/user-info';//se importa automaticamente
 
 verUsuario(){
    this.navCtrl.push(UserInfoPage);
  }
  ```
en el archivo user-info.ts de la carpeta user-info añadimos:
 ```ts
 import { UserServiceProvider } from '../../providers/user-service/user-service';//se importa automaticamente
 
 //antes del constructor
 usuario;
  errMsg;
 //como parametros del constructor añadir
 , public userService:UserServiceProvider
 
 // en la función ionViewDidLoad añadir
  this.userService.getOneUser()
    .subscribe((userData)=>{
      this.usuario=userData;
      console.log(this.usuario);
    },(err)=>{
      this.errMsg = err;
    });
 
 ```

en http://json2ts.com/ copiamos el json de https://randomuser.me/api y generamos el ts

en nuestro proyecto en la carpeta src creamos una carpeta llamada  shared y en ella añadimos el archivo User.ts donde copiamos todo el ts que generó la pagina http://json2ts.com/

Luego borramos la primera y la ultima linea de ese archivo 
```ts
declare module namespace {//primera linea
}//última
```
tambien eliminamos todos los export menos el ultimo
```ts
export interface RootObject {
        results: Result[];
        info: Info;
    }
//y cambiarlo por 

export interface User {
    results: Result[];
    info: Info;
}
```
en el archivo user-service.ts
```ts
//cambiar esto
 getOneUser(){
    return this.http.get('https://randomuser.me/api');
  }
  
  //por esto
   getOneUser():Observable<User>{
    return this.http.get<User>('https://randomuser.me/api?results=50');
  }
  //automaticamente se generan los imports validar que sean
  import { Observable } from 'rxjs';
import { User } from '../../shared/Usuario';
  
 ```
 luego en el archivo user-info.ts a la variable usuario le asignamos el tipo User así:
 
 ```ts
 import { User } from '../../shared/Usuario';//se importa automaticamente 
 usuario:User;
 ```
 
 luego en el archvio user-info.html podemos hacer diferentes cosas
 ```html
 <!--
  Generated template for the UserInfoPage page.

  See http://ionicframework.com/docs/components/#navigation for more info on
  Ionic pages and navigation.
-->
<ion-header>

    <ion-navbar>
        <ion-title>userInfo</ion-title>
    </ion-navbar>

</ion-header>


<ion-content padding>
    <div *ngIf="!usuario">
        cargando...
        <ion-spinner name="bubbles"></ion-spinner>
        <hr>
    </div>
    <div *ngIf="usuario">
        <div *ngFor="let us of usuario.results">
            <ion-list>
                <ion-item>
                    <ion-avatar item-start>
                        <img src="{{us.picture.large}}">
                    </ion-avatar>
                    <h2>{{us.name.title}} {{us.name.first}} {{us.name.last}}</h2>
                    <h3>
                        <ion-icon name="calendar"></ion-icon> {{us.dob.date}}</h3>
                    <h3>
                        <ion-icon name="mail-open"></ion-icon> {{us.email}}</h3>
                    <h3>
                        <ion-icon name="call"></ion-icon> {{us.phone}}</h3>
                </ion-item>
            </ion-list>
            <!-- <ion-card>
                <img src="{{us.picture.large}}" />
                <ion-card-content>
                    <ion-card-title>
                        {{us.name.title}} {{us.name.first}} {{us.name.last}}
                    </ion-card-title>
                    <p>
                        <ion-list>
                            <ion-item>
                                <div *ngIf="us.gender=='female'">
                                    <ion-icon name="woman"></ion-icon> is a Woman
                                </div>
                                <div *ngIf="us.gender!='female'">
                                    <ion-icon name="man"></ion-icon> is a Man
                                </div>

                            </ion-item>
                        </ion-list>
                    </p>
                </ion-card-content>
            </ion-card>
          -->

            <!--si existiera un array dentro de otro array se podría recorrer así
      <div *ngFor= "let otro of result.weew"></div>-->
        </div>
    </div>
</ion-content>
```

