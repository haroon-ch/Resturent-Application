import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ApicallService } from 'src/app/provider/apicall.service';
import { GlobalService } from 'src/app/provider/global.service';

@Component({
  selector: 'app-expensedetail',
  templateUrl: './expensedetail.page.html',
  styleUrls: ['./expensedetail.page.scss'],
})
export class ExpensedetailPage implements OnInit {
  data: any;
  dat: any;
  constructor(private router: Router, private menu: MenuController, private apicall: ApicallService, public global: GlobalService) { }
  sign: any;
  ex:any={e_id: null , discription: null, amount: null};
  ngOnInit() {
    this.sign = "se";
    console.log(history.state.data) ;
    this.ex.e_id = history.state.data.e_id;
    this.global.Expensedetails.subscribe(res => {
      this.dat = res;
      this.data = res;
    });
  }
  addex(){
    console.log(this.ex);
    this.apicall.api_addexpensedetails(this.ex);
    this.ex.discription="";
    this.ex.amount="";
  }
  async filterex(evt) {
    this.data = this.dat;
    var val = evt.target.value;

    if (val && val.trim() != '') {
      this.data = this.data.filter((item) => {
        return ((item.s_name.toLowerCase()).startsWith(val.toLowerCase()));
      })
    }
  }
}
