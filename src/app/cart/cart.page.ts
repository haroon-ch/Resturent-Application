import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertService } from '../provider/alert.service';
import { ApicallService } from '../provider/apicall.service';
import { GlobalService } from '../provider/global.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  number = 1;
  user: any = { customer_name: 'Anonymous' };
  cart: any;
  display0: any = '';
  display1: any = '';
  subtotal: number;
  discount: any =0;
  total: number;
  sub: number;
  data: any;
 public badgeValue: any = 0;
  oid: any = { o_id: '' };
  constructor(public route: Router, private global: GlobalService, public apicall: ApicallService, public Alert: AlertService, public navigate: NavController) {

  }
 async ionViewWillEnter() {
    this.global.CartQuantity.subscribe(res=>{
      this.badgeValue = res;
    })
    console.log(this.badgeValue)
   await this.global.Cart.subscribe((res) => {
      this.cart = res;
      console.log(this.cart);
      if (this.cart.length == 0) {
        this.display0 = 'none';
        this.display1 = 'show';
      }
      else {
        this.display0 = 'show';
        this.display1 = 'none';
      }
    });
    this.gettotal();
  }
  ngOnInit() {
    
    this.global.CartQuantity.subscribe(res=>{
      this.badgeValue = res;
    })

    this.global.Oid.subscribe((res) => {
      this.oid.o_id = res;
    });
    this.global.User.subscribe(res => {
      if (res == '') {
        this.route.navigate(['/home']);
      }
    });
  }
  close(i: any) {
    console.log(i);
    this.cart.splice(i, 1);
    this.gettotal();
    this.global.set_Cart(this.cart);
 
    this.badgeValue--;
    this.global.set_CartQuantity(this.badgeValue);
    console.log(this.badgeValue);
  }
  add(i: any) {
    if (this.cart[i].quantity ) {
      this.cart[i].quantity++;
      this.global.set_Cart(this.cart);
    }
    this.gettotal();
  }
  minus(i: any) {
    if (this.cart[i].quantity != 1) {
      this.cart[i].quantity--;
      this.global.set_Cart(this.cart);
    }
    this.gettotal();
  }
  gettotal() {
    this.subtotal = 0;
    for (let index = 0; index < this.cart.length; index++) {
      this.sub = this.cart[index].quantity * this.cart[index].price;
      this.subtotal = this.sub + this.subtotal;
      

      
    }
    this.total = this.subtotal;
  }
  addorder() {
    this.data = { user: this.user, cart: this.cart };

    console.log(this.data);
    this.apicall.addorder(this.data);
    this.global.set_Cart('');
    this.cart = [];
    this.data = '';
    this.apicall.getorder();
    this.route.navigate(['order']);

  }

  updateorder() {
    this.data = { user: this.oid, cart: this.cart };
    console.log(this.data);
    this.apicall.updateorder(this.data);
    this.global.set_Cart('');
    this.global.set_Oid('');
    this.cart = [];
    this.data = '';
    this.apicall.getorder();
    this.route.navigate(['order']);

  }
}
