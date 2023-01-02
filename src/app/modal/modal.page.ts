import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { GlobalService } from '../provider/global.service';
import { ApicallService } from '../provider/apicall.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  

  public data : any;
  public oid:any;
  constructor( public route:Router, public modalController: ModalController,
    private global:GlobalService,private apiCall:ApicallService,
    ) { }

  ngOnInit() {
    console.log(this.data);
    // this.GetOrderDetails();
  }

  // getOrderdetailsfunction
  async GetOrderDetails(id) {
  
    }


  back(){
    this.route.navigate(['order'])
  }

}
