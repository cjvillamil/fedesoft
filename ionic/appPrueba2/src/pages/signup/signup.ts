import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers';
import { MainPage } from '../';
import { Api } from '../../providers/api/api';//import { Api } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { username: string, correo: string, password: string, nombre:string, apellido:string} = {
    username: '',
    correo: '',
    password: '',
    nombre: '',
    apellido: ''
  };

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public apiService:Api
    ) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  doSignup() {
    this.apiService.post('users/signup',this.account).subscribe(
      (registro)=>{
        let datoUsuario={
          username:this.account.username,
          password:this.account.password
        }
        this.apiService.post('users/login',datoUsuario).subscribe(
          (usuario)=>{
            console.log(usuario);
          },
          (error)=>{
            console.log("--------",error);
          }
        );
      },
      (err)=>{
        console.log("*********",err);
      }
    );
    // Attempt to login in through our User service
    /*this.user.signup(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {

      this.navCtrl.push(MainPage);

      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });*/
  }
}