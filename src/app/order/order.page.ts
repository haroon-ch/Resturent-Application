import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { ApicallService } from '../provider/apicall.service';
import { GlobalService } from '../provider/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  public folder: string;
  sign: any;
  pending: any;
  all: any;
  completed: any;
  cancelled: any;
  data: any = {id: null, status: null};
  constructor(private menu: MenuController,public router:Router,public navCtrl : NavController,private modalController: ModalController,  public apicall: ApicallService, public global: GlobalService) { }

  ngOnInit() {
    this.folder = 'One Bite';
    this.sign = 'Pending';
    this.menu.enable(true);
    this.apicall.getorder();
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
    this.apicall.getorderitemstest(id);
    this.apicall.editorder(this.data);

  }
  cancel(id){
    this.data.status = 'cancelled';
    this.data.id = id;
    this.apicall.editorder(this.data);
    console.log(this.data);
  }
  update(id){
  this.global.set_Oid(id);
  this.apicall.getorderitems(id);
  this.router.navigate(['ordercat'])
  }
  getdetails(id){
    this.apicall.editorder(this.data);
  }



  // show order details  
 async show_details(id){
  const x = id.o_id;
  console.log(x);  
    await this.apicall.getDetails(x);
    console.log(id);
    // this.router.navigate(['modal'])
  }



  

  OpenModal(){
    this.router.navigate(['modal'])
  }

}
