import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, MenuController} from '@ionic/angular';
import {Router} from '@angular/router';
import {ApicallService} from '../provider/apicall.service';
import {GlobalService} from '../provider/global.service';

@Component({
  selector: 'app-sellerdetail',
  templateUrl: './sellerdetail.page.html',
  styleUrls: ['./sellerdetail.page.scss'],
})
export class SellerdetailPage implements OnInit {

  data: any;
  public last: any;
  public history: any = {invoice_id: null  , name : 'customer' , type : null, quantity: null,  action : null , user: null};
  updatedetail: any = {s_id: '' ,  net_balance : '' , received : ''};

  // tslint:disable-next-line:variable-name
  public rece: any = {s_id: null,  total: null , debit: null, net_balance: 0};
  constructor(public loadingController: LoadingController, private alert: AlertController , private router: Router , private menu: MenuController, private apicall: ApicallService, public global: GlobalService) { }

  ngOnInit() {
    console.log(history.state.data) ;
    this.rece.s_id = history.state.data.s_id;
    this.global.Sellerdetails.subscribe(res => {
      console.log(res);
      this.data = res;
      if (Object.keys(this.data).length === 0) {
        this.rece.net_balance = 0;
        console.log(this.rece.net_balance);
      }
      else {
        this.last = this.data[this.data.length - 1];
        this.rece.net_balance = this.last.net_balance;
        console.log(this.rece.net_balance);
        // console.log(this.last.net_balance);
      }
    });
  }
  async updatecustomerbalance()
  {
    // this.rece.c_id = this.data[0].c_id;
    //
    this.updatedetail.received = this.rece;
    console.log(this.rece);
    this.apicall.api_updatesellerbalance(this.rece);
    this.router.navigate(['detail']);

  }
  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: "circular",
      duration: 200,
      message: 'Order Is Being Placed',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true
    });
    await loading.present();

    const {} = await loading.onDidDismiss();
  }
}
