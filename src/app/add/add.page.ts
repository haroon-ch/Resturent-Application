import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from '../provider/apicall.service';
import { GlobalService } from '../provider/global.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  public folder: string;
  data:any={id:"",quantity:"",price:"",dealer:""}
  user: any;
  constructor(public route:Router,private global:GlobalService,private apicall: ApicallService) { }
  ngOnInit() {
  this.folder="One Bite";
  this.global.User.subscribe(res => {
    if(res==""){
      this.route.navigate(["/home"])
    }
  });

  }
  add(){
    this.global.Selected.subscribe(res=>{
      this.data.id=res;
    });
    this.apicall.insertstock(this.data);
  }

}
