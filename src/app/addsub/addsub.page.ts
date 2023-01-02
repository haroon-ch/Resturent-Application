import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/core';
import { ActionSheetController } from '@ionic/angular';
import { ApicallService } from '../provider/apicall.service';
import { GlobalService } from '../provider/global.service';
@Component({
  selector: 'app-addsub',
  templateUrl: './addsub.page.html',
  styleUrls: ['./addsub.page.scss'],
})
export class AddsubPage implements OnInit {
  folder: string;
  data:any={menu:{},gradients:[]};
  selectedArray: any = [];
  images: string;
  public medicne5:any;
  stock: any;
  Menu={id:"",name:"",cost:"",price:""};
  constructor(public route:Router, private actionSheetCtrl: ActionSheetController,public apicall:ApicallService,public global:GlobalService) { }

  ngOnInit() {
    this.folder="Café Verona";
    this.apicall.getstock();
    this.global.Stock.subscribe(res=>{
      this.stock=res;
    });
    this.global.Id.subscribe(res=>{
      this.Menu.id=res;
    });
    this.global.User.subscribe(res => {
      if(res==""){
        this.route.navigate(["/home"])
      }
    });
  }
  onChange(){
    console.log(this.selectedArray);

  }
  check(){
    this.data.menu=this.Menu;
    this.data.gradients=this.selectedArray;
    this.apicall.insertmenusub(this.data);
    console.log(JSON.stringify(this.data));
    this.route.navigate(["menu"]);
  }


}
