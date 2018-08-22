import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { UserInfoPage } from '../user-info/user-info';

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
  verUsuario(){
    this.navCtrl.push(UserInfoPage);
  }
}
