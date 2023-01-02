import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApicallService } from '../provider/apicall.service';
import { GlobalService } from '../provider/global.service';

@Component({
  selector: 'app-stockdetail',
  templateUrl: './stockdetail.page.html',
  styleUrls: ['./stockdetail.page.scss'],
})
export class StockdetailPage implements OnInit {
  folder: string;
  details: any;

  constructor(private menu: MenuController, private apicall: ApicallService, private global: GlobalService) { }

  ngOnInit() {
    this.folder = "Café Verona";
    this.menu.enable(true);
    this.apicall.getstock();
    this.global.Cart.subscribe(res => {
      this.details = res;
    })
  }

}
