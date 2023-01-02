import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, MenuController} from '@ionic/angular';
import { ApicallService } from 'src/app/provider/apicall.service';
import { GlobalService } from 'src/app/provider/global.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-showdetail',
  templateUrl: './showdetail.page.html',
  styleUrls: ['./showdetail.page.scss'],
})
export class ShowdetailPage implements OnInit {
  data: any;
  public last: any;
  public history: any = {invoice_id: null  , name : 'customer' , type : null, quantity: null,  action : null , user: null};
  updatedetail: any = {customer_id: '' ,  net_balance : '' , received : ''};

  // tslint:disable-next-line:variable-name
  public rece: any = {c_id: null,  total: null , debit: null, net_balance: 0};
  constructor(public loadingController: LoadingController, private alert: AlertController , private router: Router , private menu: MenuController, private apicall: ApicallService, public global: GlobalService) { }

  ngOnInit() {
    console.log(history.state.data) ;
    this.rece.c_id = history.state.data.c_id;
    this.global.Customerdetails.subscribe(res => {
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
    this.updatedetail.received = this.rece;
    console.log(this.rece.c_id);
    this.apicall.api_updatecustomerbalance(this.rece);
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
