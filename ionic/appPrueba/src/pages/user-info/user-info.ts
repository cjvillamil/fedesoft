import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { User } from '../../shared/Usuario';

/**
 * Generated class for the UserInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-info',
  templateUrl: 'user-info.html',
})
export class UserInfoPage {
  usuario:User;
  errMsg;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userService:UserServiceProvider
  ) {
  }

  ionViewDidLoad() {
    this.userService.getOneUser()
    .subscribe((userData)=>{
      this.usuario=userData;
      console.log(this.usuario);
    },(err)=>{
      this.errMsg = err;
    });
    console.log('ionViewDidLoad UserInfoPage');
  }

}
