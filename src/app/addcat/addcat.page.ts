import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CameraSource, Camera, CameraResultType } from '@capacitor/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { ApicallService } from '../provider/apicall.service';
import { AuthService } from '../provider/auth.service';
import { GlobalService } from '../provider/global.service';

@Component({
  selector: 'app-addcat',
  templateUrl: './addcat.page.html',
  styleUrls: ['./addcat.page.scss'],
})
export class AddcatPage implements OnInit {
  folder: string;
  data:any={name:null,other:null};
  selectedArray:any;
  images: string;
  prgres:any=0;
  constructor(public alertCtrl: AlertController,public auth:AuthService,public global:GlobalService,public route:Router, private actionSheetCtrl: ActionSheetController,public apicall:ApicallService) { 
    this.auth.observeHttp.subscribe(async data =>
      {
        this.prgres=parseInt(JSON.stringify(data))/100;
        if(this.prgres==1){
          this.alertCtrl.dismiss();
          this.apicall.getmenu();
          this.route.navigate(["/menu"]);
        }
      }
      )
  }

  ngOnInit() {
    this.folder="One Bite";
    this.global.User.subscribe(res => {
      if(res==""){
        this.route.navigate(["/home"])
      }
    });
  }
  async selectImageSource() {
    const buttons = [
      {
        text: 'Take Photo',
        icon: 'camera',
        handler: () => {
          this.addImage(CameraSource.Camera);
        }
      },
      {
        text: 'Choose From Photos Photo',
        icon: 'image',
        handler: () => {
          this.addImage(CameraSource.Photos);
        }
      }
    ];
 
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Select Image Source',
      buttons
    });
    await actionSheet.present();
  }
 
  async addImage(source: CameraSource) {
    const image = await Camera.getPhoto({
      quality: 60,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source
    });
    this.data.other=image.base64String;
    this.images="data:image/jpeg;base64,"+image.base64String;
  }
  
  async add(){
    console.log(this.data);
    this.apicall.addmenucat(this.data);
    const alert = await this.alertCtrl.create({
      header: "Uploading...",
      message:"<ion-spinner></ion-spinner>"
    });
      alert.present();
      console.log(this.prgres);
    this.apicall.getmenu();
  }
 
}

