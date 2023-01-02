import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ApicallService } from '../provider/apicall.service';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  signin: any={username:"",password:"",role:""}
  constructor(private menu: MenuController,private apicall:ApicallService) { }
  ngOnInit() {
  this.folder="Café Verona"
  this.menu.enable(false);
  }

  login(){
    console.log(this.signin);
    this.apicall.api_login(this.signin);
  }
}
