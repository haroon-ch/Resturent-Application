import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../provider/apicall.service';
import { GlobalService } from '../provider/global.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {
  data: any = {id: null, start: null, end: null};
  data1: any = {start: null, end: null};
  filter = [{id: 1, name: 'Orders'}, {id: 2, name: 'Transactions'}];
  private transactions: any;
  folder: any;
  sign: string;
  public totalsale: any;
  public totalex: any;
  public totalpur: any;
  constructor(public apicall: ApicallService, public global: GlobalService) { }


  ngOnInit() {
    this.folder = 'Café Verona';
    this.sign = 'in';
  }
  check(){
    this.data.start = this.data.start.slice(0, 10);
    this.data.end = this.data.end.slice(0, 10);
    console.log(this.data);
    this.apicall.api_showtransaction(this.data);
    this.global.Transactiondetail.subscribe(res => {
      this.transactions = res;
      console.log(this.transactions);
    });
  }
  // tslint:disable-next-line:variable-name
  // showdetail(invoice_id)
  // {
  //   this.apicall.api_getinvoicedetail(invoice_id);
  //   console.log(invoice_id);
  // }
  show() {
    this.data1.start = this.data.start.slice(0, 10);
    this.data1.end = this.data.end.slice(0, 10);
    console.log(this.data1);
    this.apicall.api_totalpurchase(this.data1);
    this.global.Totalsale.subscribe(res => {
      this.totalsale = res;
      console.log(this.totalsale);
    });
    this.global.Totalex.subscribe(res => {
      this.totalex = res;
      console.log(this.totalex);
    });
    this.global.Totalpur.subscribe(res => {
      this.totalpur = res;
      console.log(this.totalpur);
    });
  }
}
