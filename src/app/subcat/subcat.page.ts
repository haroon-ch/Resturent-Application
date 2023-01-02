import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { ApicallService } from '../provider/apicall.service';
import { GlobalService } from '../provider/global.service';

@Component({
  selector: 'app-subcat',
  templateUrl: './subcat.page.html',
  styleUrls: ['./subcat.page.scss'],
})
export class SubcatPage implements OnInit {
  folder: string;
  // subcat: any;
  add: any = { id: "", name: "",min_quantity:"" };
  del:any={id:""};
  editdata:any={id:null,name:null,callid:null,min_quantity:null};
  id: any;
  subcat: any;
  filterTerm: string;
  constructor(private route:Router,private actionSheetController: ActionSheetController, private alert: AlertController, private global: GlobalService, private apicall: ApicallService) { }

  ngOnInit() {
    this.folder = "One Bite";
    this.global.Subcat.subscribe(res => {
      this.subcat = res;
      console.log(res);
    });
    this.global.Catid.subscribe(res => {
      this.id = res;
      console.log(res);
    })
  }


  // async filterorder(evt) {
  //   this.subcat = this.subct;
  //   var val = evt.target.value;
  //   if (val && val.trim() != '') {
  //     this.subcat = this.subcat.filter((item) => {
  //       return ((item.is_name.toLowerCase()).startsWith(val.toLowerCase()));
  //     });
  //   }

  // }


  async addnew() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'One Bite',
      mode: 'ios',
      subHeader: 'Add New Item',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: "Name"
        }, {
          name: 'min',
          type: 'number',
          placeholder: "Minimum Quantity"
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        }, {
          text: 'Okay',
          handler: (alertData) => {
            this.add.name = alertData.name;
            this.add.min_quantity = alertData.min;
            this.add.id = this.id;
            console.log(this.add);
            this.apicall.addsub(this.add);
          }
        }
      ]
    });

    await alert.present();
  }

  async sheet(id,name,cid,min) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Manage',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Add Purchase',
        icon: 'add-outline',
        handler: () => {
          this.global.set_Selected(id);
          this.route.navigate(['/add']);
        }
      },
      {
        text: 'Edit Item',
        icon: 'pencil-outline',
        handler: () => {
          this.edit(id, name,min);
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
  async edit(id, name,min) {
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
        },
        {
          name: 'min',
          type: 'number',
          placeholder: min
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        }, {
          text: 'Update',
          handler: (alertData) => {
            this.editdata.name = alertData.name;
            this.editdata.min_quantity = alertData.min;
            this.editdata.id = id;
            this.editdata.callid=this.id;
            this.apicall.editsubcat(this.editdata);
          }
        }
      ]
    });

    await alert.present();
  }
}


