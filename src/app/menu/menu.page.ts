import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, MenuController } from '@ionic/angular';
import { ApicallService } from '../provider/apicall.service';
import { GlobalService } from '../provider/global.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public folder: string;


  constructor(private actionSheetController: ActionSheetController, private route: Router, public menu: MenuController, public apicall: ApicallService, public global: GlobalService) {
    this.apicall.getmenu();
    this.global.Menu.subscribe(res => {
      this.data = res;
    });
   }
  data: any;
  ngOnInit() {
    this.apicall.getmenu();
    this.global.Menu.subscribe(res => {
      this.data = res;
      console.log(this.data);
    });
    this.folder = 'Café Verona';
    this.menu.enable(true);
  }
  async sheet(id){
    const actionSheet = await this.actionSheetController.create({
      header: 'Manage',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'View Details',
          icon: 'eye-outline',
          handler: () => {
            console.log(id);
            this.apicall.getmenudetails(id);
            this.global.set_id(id);
            this.route.navigate(['/menuitem']);
          }
        }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
        }
      }]
    });
    await actionSheet.present();
  }
  addnew(){
    this.route.navigate(['/addcat']);
  }
  doRefresh(event) {
    this.apicall.getmenu();
    this.global.Menu.subscribe(res => {
      this.data = res;
    });
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
