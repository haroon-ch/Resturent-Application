import { Injectable } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public Alert: AlertController, public nav: NavController) { }
  async loginAlert() {
    const alert = await this.Alert.create({
      header: 'Welcome',
      message: 'Your Are Successfully Login',
      buttons: [
        {
          text: 'Okay',
        }
      ]
    });
    await alert.present();
}
async signup() {
  const alert = await this.Alert.create({
    header: 'Congrats',
    subHeader: 'Your Are Successfully Registered',
    message: 'Now please Login',
    buttons: ['ok']
  });
  await alert.present();
}
async password() {
  const alert = await this.Alert.create({
    header: 'Sorry',
    message: 'Password not Matched',
    buttons: ['ok']
  });
  await alert.present();
}
async email() {
  const alert = await this.Alert.create({
    message: 'Invalid Email',
    buttons: ['ok']
  });
  await alert.present();
}
async invalidlogin() {
  const alert = await this.Alert.create({
    message: 'Invalid User name or Password',
    buttons: ['ok']
  });
  await alert.present();
}
async connection() {
  const alert = await this.Alert.create({
    subHeader: 'Check your Internet connection',
    message: 'Connection failed!',
    buttons: ['ok']
  });
  await alert.present();
}
async invalidpass() {
  const alert = await this.Alert.create({
    subHeader: 'please inter Valid password',
    buttons: ['ok']
  });
  await alert.present();
}
async call(message: any) {
  const alert = await this.Alert.create({
    header: 'One Bite',
    subHeader: message,
    buttons: ['ok']
  });
  await alert.present();
}
async country() {
  const alert = await this.Alert.create({
    message: 'Sorry We Dont Deliver to Any Country Except Orange',
    buttons: [{
      text: 'Okay',
      handler: () => {
        this.nav.navigateForward('/Home');
      },
    }]
  });
  await alert.present();
}
async allready() {
  const alert = await this.Alert.create({
    header: 'Ooops',
    subHeader: 'This Email is Already Exist',
    message: 'Please login',
    buttons: ['ok']
  });
  await alert.present();
}
async oldincorrect() {
  const alert = await this.Alert.create({
    header: 'Ooops',
    subHeader: 'Old Password Incorrect',
    message: 'Please Try Again',
    buttons: ['ok']
  });
  await alert.present();
}
async newmatch() {
  const alert = await this.Alert.create({
    header: 'Ooops',
    subHeader: 'New Passwords Dont Match',
    message: 'Try Again',
    buttons: ['Ok']
  });
  await alert.present();
}
async updateprofile() {
  const alert = await this.Alert.create({
    header: 'Succesfull',
    subHeader: 'Profile updated',
    buttons: [
      {
        text: 'Okay',
        handler: () => {
          this.nav.navigateForward('/tabs/tab3');
        },
      }
    ]
  });
  await alert.present();
}
async passupdate() {
  const alert = await this.Alert.create({
    header: 'Succesfull',
    subHeader: 'Password updated',
    buttons: [
      {
        text: 'Okay',
        handler: () => {
          this.nav.navigateForward('/editprofile');
        },
      }
    ]
  });
  await alert.present();
}
async addpost() {
  const alert = await this.Alert.create({
    header: 'Succesfull',
    subHeader: 'Your Add has Been Posted',
    buttons: [
      {
        text: 'Okay',
        handler: () => {
          this.nav.navigateForward('/tabs/tab3');
        },
      }
    ]
  });
  await alert.present();
}
async services() {
  const alert = await this.Alert.create({
    header: 'Ooops',
    subHeader: 'please select appropriate services related  sub service',
    buttons: ['ok']
  });
  await alert.present();
}
}
