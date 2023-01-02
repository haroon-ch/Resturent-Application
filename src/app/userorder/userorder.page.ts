import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';
import {ApicallService} from '../provider/apicall.service';
import {GlobalService} from '../provider/global.service';

@Component({
  selector: 'app-userorder',
  templateUrl: './userorder.page.html',
  styleUrls: ['./userorder.page.scss'],
})
export class UserorderPage implements OnInit {
  public folder: string;
  sign: any;
  pending: any;
  all: any;
  completed: any;
  cancelled: any;
  data: any = {id: null, status: null};
  constructor(private menu: MenuController, public apicall: ApicallService, public global: GlobalService) { }

  ngOnInit() {
    this.folder = 'Café Verona';
    this.sign = 'Pending';
    this.menu.enable(true);
    this.apicall.getorderuser();
    this.global.All.subscribe(res => {
      this.all = res;
    });
    this.global.Pending.subscribe(res => {
      this.pending = res;
      console.log(this.pending);
    });
    this.global.Completed.subscribe(res => {
      this.completed = res;
    });
    this.global.Cancelled.subscribe(res => {
      this.cancelled = res;
    });

  }
  deliver(id){
    this.data.status = 'completed';
    this.data.id = id;
    this.apicall.editorder(this.data);
  }
  cancel(id){
    this.data.status = 'cancelled';
    this.data.id = id;
    this.apicall.editorder(this.data);
    console.log(this.data);
  }
  getdetails(id){
    this.apicall.editorder(this.data);
  }
}
