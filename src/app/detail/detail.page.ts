import { Component, OnInit } from '@angular/core';
import {ActionSheetController, AlertController, LoadingController, MenuController} from '@ionic/angular';
import { ApicallService } from 'src/app/provider/apicall.service';
import { GlobalService } from 'src/app/provider/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  company: any;
  co: any = { name: null, other: '' };
  sign: string;
  seller: any;
  se: any = { name: null, address: null, mobile_no: null};
  type: any;
  ty: any = { name: null, address: null, other: '' };
  customer: any;
  cu: any = { name: null, address: null, mobile_no: null };
  expense: any;
  ex: any = { name: null };
  custome: any;
  expens: any;
  typ: any;
  selle: any;
  compan: any;
  updatedetail: any = {customer_id: null , received : null};
  public del: any = { s_id: null };
  public s_id: any;
  constructor(public loadingController: LoadingController , private router: Router, private alert: AlertController, private actionSheetCtrl: ActionSheetController, private menu: MenuController, private apicall: ApicallService, public global: GlobalService) { }


  ngOnInit() {
    this.sign = 'cu';
    this.apicall.api_getseller();
    this.global.Seller.subscribe(res => {
      this.selle = res;
      this.seller = res;
    });
    this.apicall.api_getcustomer();
    this.global.Customer.subscribe(res => {
      this.custome = res;
      this.customer = res;
    });
    this.apicall.api_getexpense();
    this.global.Expense.subscribe(res => {
      this.expens = res;
      this.expense = res;
    });
  }

  async filterex(evt) {
    this.expense = this.expens;
    let val = evt.target.value;

    if (val && val.trim() != '') {
      this.expense = this.expense.filter((item) => {
        return ((item.name.toLowerCase()).startsWith(val.toLowerCase()));
      });
    }
  }
  addex() {
    this.apicall.api_addexpense(this.ex);
    this.ex.name = null;
  }
  // tslint:disable-next-line:variable-name
  detailex(e_id) {
    console.log(e_id);
    this.apicall.api_getexpensedetails(e_id);
    this.router.navigate(['expensedetail'], {state : {data: {e_id} }});
  }


  async filterse(evt) {
    this.seller = this.selle;
    let val = evt.target.value;

    if (val && val.trim() != '') {
      this.seller = this.seller.filter((item) => {
        return ((item.name.toLowerCase()).startsWith(val.toLowerCase()));
      });
    }
  }
  addse() {
    this.apicall.api_addseller(this.se);
    this.se.name = null;
    this.se.address = null;
    this.se.mobile_no = null;
  }
  // tslint:disable-next-line:variable-name
  deletese(s_id) {
    console.log(this.del);
    this.apicall.api_getsellerdetails(s_id);
    this.router.navigate(['sellerdetail'], {state : {data: {s_id} }});
  }
  async filtercu(evt) {
    this.customer = this.custome;
    let val = evt.target.value;
    if (val && val.trim() != '') {
      this.customer = this.customer.filter((item) => {
        return ((item.name.toLowerCase()).startsWith(val.toLowerCase()));
      });
    }
  }
  addcu() {
    console.log(this.cu);
    this.apicall.api_addcustomer(this.cu);
    this.cu.name = null;
    this.cu.address = null;
  }
  // tslint:disable-next-line:variable-name
  details(c_id) {
    this.apicall.api_getcustomerdetails(c_id);
    this.router.navigate(['showdetail'], {state : {data: {c_id} }});
  }
  // tslint:disable-next-line:variable-name
  // async customerdetail(c_id) {
  //   const buttons = [
  //     {
  //       text: 'See Detail',
  //       icon: 'eye',
  //       handler: () => {
  //           this.apicall.api_getcustomerdetails(c_id);
  //           this.router.navigate(['showdetail']);
  //       }
  //     },
  //     {
  //       text: ' Add Credit',
  //       icon: 'add',
  //       handler: () => {
  //         this.credit(id);
  //       }
  //     },
  //     {
  //       text: 'Cancel',
  //       icon: 'close',
  //       role: 'cancel',
  //     }
  //   ];
  //
  //   const actionSheet = await this.actionSheetCtrl.create({
  //     header: 'Select One',
  //     buttons
  //   });
  //   await actionSheet.present();
  // }
  async credit(id: any) {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Al-Nafay',
      mode: 'ios',
      subHeader: 'Add Credit',
      inputs: [
        {
          name: 'name',
          type: 'number',
          placeholder: 'Amount'
        }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        }, {
          text: 'Credit',
          handler: (alertData) => {
            this.updatedetail.customer_id = id;
            this.updatedetail.received = alertData.name;
            console.log(this.updatedetail);
           /// this.apicall.api_updatecustomerbalance(this.updatedetail);
          }
        }
      ]
    });

    await alert.present();
  }
  // tslint:disable-next-line:variable-name
  detailcustomer(customer_id) {
    this.presentLoadingWithOptions();
  //  this.apicall.api_getcustomerdetails(customer_id);
    this.presentLoadingWithOptions();
    // this.router.navigate(['customerdetail']);

  }
  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: 'circular',
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
