import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ApicallService } from '../provider/apicall.service';
import { GlobalService } from '../provider/global.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage implements OnInit {
  public folder: string;
  stock: any;
  stoc: any=[];
  sign: string;
  less: any;
  les: any=[];
  constructor(private menu: MenuController, private apicall: ApicallService, private global: GlobalService) { }

  ngOnInit() {
    this.sign="Purchase"
    this.folder = "Café Verona";
    this.menu.enable(true);
    this.apicall.getstock();
    this.global.Stock.subscribe(res => {
      this.stock=null;
      console.log(this.less,"ng");
      this.stoc = res;
      this.stock = res;
    });
    this.global.Less.subscribe(res => {
      this.less=null;
      console.log(this.less,"ng");
      this.les = res;
      this.less = res;
    });
  }
  detail(id) {
    this.apicall.getdetails(id);
  }


  async filterorder(evt) {
    this.less = this.les;
    var val = evt.target.value;
    if (val && val.trim() != '') {
      this.less = this.less.filter((item) => {
        return ((item.is_name.toLowerCase()).startsWith(val.toLowerCase()));
      });
    }

  }
  async filtero(evt) {
    this.stock = this.stoc;
    var val = evt.target.value;
    if (val && val.trim() != '') {
      this.stock = this.stock.filter((item) => {
        return ((item.is_name.toLowerCase()).startsWith(val.toLowerCase()));
      });
    }

  }

}
