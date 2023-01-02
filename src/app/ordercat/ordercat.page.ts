import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, LoadingController, MenuController } from '@ionic/angular';
import { ApicallService } from '../provider/apicall.service';
import { GlobalService } from '../provider/global.service';

@Component({
  selector: 'app-ordercat',
  templateUrl: './ordercat.page.html',
  styleUrls: ['./ordercat.page.scss'],
})
export class OrdercatPage implements OnInit {
  public folder: string;
  selected: any;
  badgeValue: any;


  constructor(public loadingController: LoadingController, private actionSheetController: ActionSheetController, private route: Router, private menu: MenuController, private apicall: ApicallService, private global: GlobalService) { }
  data: any;
  dat: any=[];
  ngOnInit() {
    
    this.global.CartQuantity.subscribe(res=>{
      this.badgeValue = res;
    })

    this.apicall.getmenu();
    this.global.Menu.subscribe(res => {
      this.data=null;
      console.log(this.data,"ng");
      this.dat = res;
      this.data = res;
    });
    this.folder = 'One Bite';
    this.menu.enable(true);
  }
  
  async sheet(id, img){
    this.apicall.getmenudetails(id);
    this.selected = this.data.filter(data => data.mc_id == id);
    this.presentLoading();

    console.log(this.selected);
    this.global.set_Cimage(this.selected);
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 1000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    this.route.navigate(['/ordersub']);
  }
  async filterorder(evt) {
    this.data = this.dat;
    var val = evt.target.value;
    if (val && val.trim() != '') {
      this.data = this.data.filter((item) => {
        return ((item.mc_name.toLowerCase()).startsWith(val.toLowerCase()));
      });
    }

  }

}
