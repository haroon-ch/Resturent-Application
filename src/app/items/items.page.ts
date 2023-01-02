import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { GlobalService } from '../provider/global.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  public folder: string;

  constructor(public global : GlobalService, public route:Router,private menu: MenuController) { }

  ngOnInit() {
  this.folder="Café Verona";
  this.menu.enable(true);
  this.global.User.subscribe(res => {
    if(res==""){
      this.route.navigate(["/home"])
    }
  });
  }

}
