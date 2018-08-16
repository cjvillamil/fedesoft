Crear una carpeta y abrirla con visual code
luego en Ionic 
https://ionicframework.com/ seleccionar Developers -> Installation
seleccionar Install with CLI
```js
npm install -g ionic
```
para crear nuestra app ejecutamos el siguiente comando en consola
```js
ionic start appPrueba tabs
```
luego 
```
cd myApp 
ionic serve
```
luego ir al navegador en 

http://localhost:8100/ionic-lab 

y seleccionar la plataforma en la que queremos visualizar.

luego ir añadiendo funcionalidades:
en el archivo variables.scss de la carpeta theme modificamos así:
```scss
$colors: (
  primary:    #3dcf3d,
  secondary:  #66d966,
  danger:     #b2ff6b,
  light:      #b8edb8,
  dark:       #33cc33
);
```
en el archivo home.html
```html
<ion-header>
  <ion-navbar>
    <ion-title>Home</ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding>
  <h2>Welcome to Ionic!</h2>
  <ion-item>
    <ion-label floating>Nombre</ion-label>
    <ion-input  [(ngModel)]="persona.nombre" type="text"></ion-input>
  </ion-item>
  <ion-item>
    <ion-label floating>Edad</ion-label>
    <ion-input  [(ngModel)]="persona.edad" type="text"></ion-input>
  </ion-item>
  <ion-item>
    <ion-label floating>E-mail</ion-label>
    <ion-input  [(ngModel)]="persona.email" type="text"></ion-input>
  </ion-item>
  <ion-item>
    <ion-label floating>Dirección</ion-label>
    <ion-input  [(ngModel)]="persona.direccion" type="text"></ion-input>
  </ion-item>
  <p>
    This starter project comes with simple tabs-based layout for apps
    that are going to primarily use a Tabbed UI.
  </p>
  <p>
    Take a look at the <code>src/pages/</code> directory to add or change tabs,
    update any existing page or create new pages.
  </p>
  <ion-item>
    <ion-label>Start Time </ion-label>
    <ion-datetime 
      displayFormat="MMM/YY/DD H:mm-A" 
      pickerFormat="MMM YY DD h mm A" [(ngModel)]="fecha"></ion-datetime>
  </ion-item>
  <button (click)="verPersona()" ion-button color="secondary" round>Ver Persona</button>
  <button ion-button round>{{persona.nombre}}</button>
  <button (click)="verFecha()" ion-button color="light" round>Ver Fecha</button>
  <button ion-button color="light" round>Light Round</button>
  <button ion-button round>Primary Round</button>
  <button ion-button color="secondary" round>Secondary Round</button>
  <button ion-button color="danger" round>Danger Round</button>
  <button ion-button color="dark" round>Dark Round</button>
  <ion-card>

    <ion-item>
      <ion-avatar item-start>
        <img src="https://rtvc-assets-radionacional-v2.s3.amazonaws.com/s3fs-public/styles/imagen_1800x700/public/senalradio/articulo-noticia/galeriaimagen/cano-cristales-los-ochos-1024x681.jpg">
      </ion-avatar>
      <h2>Marty McFly</h2>
      <p>{{fecha2|date:'fullDate'}}</p>
    </ion-item>
  
    <img src="http://www.quo.es/var/quo/storage/images/naturaleza/paisajes-hermosos/article-2363926-1ad1d71b000005dc-535_964x934/972166-1-esl-ES/article-2363926-1ad1d71b000005dc-535_964x934_full_landscape.jpg">
  
    <ion-card-content>
      <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>
    </ion-card-content>
  
    <ion-row>
      <ion-col>
        <button ion-button icon-start clear small>
          <ion-icon name="thumbs-up"></ion-icon>
          <div>12 Likes</div>
        </button>
      </ion-col>
      <ion-col>
        <button ion-button icon-start clear small>
          <ion-icon name="text"></ion-icon>
          <div>4 Comments</div>
        </button>
      </ion-col>
      <ion-col center text-center>
        <ion-note>
          11h ago
        </ion-note>
      </ion-col>
    </ion-row>
  
  </ion-card>
</ion-content>

```
en el archivo home.ts
```ts
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

interface usuario{
  nombre:string;
  edad:number;
  email:string;
  direccion:string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  fecha: string = new Date().toISOString();
  fecha2: string = new Date().toISOString();
  persona: usuario;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.persona = {
      nombre:"",
      edad:27,
      email:"",
      direccion:""
    }
  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Hora Establecida!',
      subTitle: 'Hemos cambiado la fecha!!!',
      buttons: ['OK']
    });
    alert.present();
  }
  verFecha(){
    this.fecha2 = this.fecha;
    this.showAlert();
  }
  verPersona(){
    const alert = this.alertCtrl.create({
      title: 'Datos Persona',
      subTitle: 'Nombre: '+this.persona.nombre+'<br>Edad: '+this.persona.edad,
      buttons: ['Cerrar']
    });
    alert.present();
  }
}

```
