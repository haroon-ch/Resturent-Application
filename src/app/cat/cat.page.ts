import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, MenuController } from '@ionic/angular';
import { ApicallService } from '../provider/apicall.service';
import { GlobalService } from '../provider/global.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.page.html',
  styleUrls: ['./cat.page.scss'],
})
export class CatPage implements OnInit {
  public folder: string;
  products: any;
  add:any={name:""};
  editt:any={id:"",name:""}
  constructor(private actionSheetController:ActionSheetController, private alert:AlertController,private menu: MenuController, private apicall: ApicallService, private global: GlobalService) { }

  ngOnInit() {
  this.folder="Café Verona";
  this.menu.enable(true);
  this.apicall.api_getallproducts();
  this.global.Products.subscribe(res => {
    this.products = res;
    console.log(res)
  })
  }


    async getsub(id,name) {
      const actionSheet = await this.actionSheetController.create({
        header: 'Manage',
        cssClass: 'my-custom-class',
        buttons: [
          {
            text: 'View Details',
            icon: 'eye-outline',
            handler: () => {
              this.apicall.getsub(id);
              this.global.set_Catid(id);
            }
          },{
          text: 'Edit Item',
          icon: 'pencil-outline',
          handler: () => {
            this.edit(id,name);
            
          }
        },{
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            
          }
        }]
      });
      await actionSheet.present();
    }
    
    
  
  async addnew() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'One Bite',
      mode:'ios',
      subHeader: 'Add New Categeory',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Item Name'
        }],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
          }, {
            text: 'Add',
            handler: (alertData) => {
              this.add.name=alertData.name;
              this.apicall.addcat(this.add);
            }
          }
        ]
    });

    await alert.present();
  }
  async edit(id, name) {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'One Bite',
      mode: 'ios',
      subHeader: 'Edit Item',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: name
        }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        }, {
          text: 'Update',
          handler: (alertData) => {
            console.log("edit")
            this.editt.id=id;
            this.editt.name=alertData.name;
            this.apicall.editcat(this.editt);
          }
        }
      ]
    });
    await alert.present();
  }
}