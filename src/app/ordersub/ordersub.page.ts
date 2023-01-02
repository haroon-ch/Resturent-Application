import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ApicallService } from '../provider/apicall.service';
import { GlobalService } from '../provider/global.service';

@Component({
  selector: 'app-ordersub',
  templateUrl: './ordersub.page.html',
  styleUrls: ['./ordersub.page.scss'],
})
export class OrdersubPage implements OnInit {

  private currentNumber = 1;
  public value: any=0;

  private increment(){
    this.currentNumber++;
  }
  private decrement(){
    this.currentNumber--;
  }

  Cat: any;
  default: string;
  price: any = 1;
  name: any;
  image: any;
  number: any = 1;
  description: any;
  quanttity: any;
  addtocart: any = { m_id: '', item_name: '', quantity: '', price: '', image: ''};
  cart: {}[] = [];
  check: {}[] = [];
  discount: any;
  calculate: any;
  orignal: any;
  dis: string;
  orig: number;
  data: any;
  menu: any;
  temp: any;
  save: any;
  badgeValue: any;
  constructor(private cdr: ChangeDetectorRef,public toast: ToastController, private global: GlobalService, public apicall: ApicallService) {
  }
  ngAfterContentChecked() {
    this.cdr.detectChanges();
 // call or add here your code
}
  ionViewWillEnter() {
    this.global.Cimage.subscribe(res => {
      this.data = res;
      this.image=this.data[0].image;
      this.name=this.data[0].mc_name;
    });
    this.global.Menusub.subscribe(res => {
      this.menu = res;
      this.price = this.menu[0].m_price;
      this.default=this.menu[0].m_id;
    });
      if (this.discount != 100) {
        this.orig=this.price ;
        this.dis = "none";
      }
      this.global.Cart.subscribe(res =>{
        this.check=res;
      });
    

  }
 

  ngOnInit() {
    this.global.CartQuantity.subscribe(res=>{
      this.badgeValue = res;
    })
    this.global.Cimage.subscribe(res => {
      this.data = res;
      this.image=this.data[0].image;
      this.name=this.data[0].mc_name;
    });
    this.global.Menusub.subscribe(res => {
      this.menu = res;
      this.price = this.menu[0].m_price;
      this.default=this.menu[0].m_id;
    });
    if (this.discount != 100) {
      this.orig=this.price ;
      this.dis = "none";
    }
    this.global.Cart.subscribe(res =>{
      this.check=res;
    });


  }
  function(quantity: any, num: any) {
    if (num == 1) {
      if (this.number != 1) {
        this.number--;
      }
      quantity=this.quanttity
    }
    else if (num == 2) {
      if (this.number != 10) {
        this.number++;
      }
      quantity=this.quanttity
    }
    this.quanttity = quantity;
    for (let index = 0; index < this.menu.length; index++) {
      if (quantity == this.menu[index].m_id) {
        this.save = this.menu[index].m_price;
        // if (this.discount != 100) {
        //   this.calculate = this.price;
        //   this.orignal = this.price;
        //   this.calculate = (this.calculate / 100) * this.discount;
        //   this.price = this.price - this.calculate;
        //   this.orig=this.price;
        // }
        this.price = this.number * this.save;
      }
    }
  
  }



  async order(value) {
    this.badgeValue++;
    this.global.set_CartQuantity(this.badgeValue);
    this.addtocart.m_id=this.quanttity
    this.temp=this.menu.filter(data=>data.m_id==this.addtocart.m_id)
    this.addtocart.item_name=this.temp[0].m_name;
    this.addtocart.quantity=this.number;
    this.addtocart.price=this.save;
    this.addtocart.image=this.image;

    if (this.check.length == 0) {
      this.cart.push(this.addtocart);
      this.global.set_Cart(this.cart);
      this.value++;
      console.log(this.cart,"First");
    } else {
      this.cart = this.check;
      this.cart.push(this.addtocart);
      this.global.set_Cart(this.cart);
      console.log(this.cart,"Remaining"); 
    }

    const toast = await this.toast.create({
      message: 'Added to Cart',
      duration: 2000,
      buttons: [
        {
          side: 'end',
          icon: 'cart',
          text: 'View Cart',
          handler: () => {
          }
        },
      ]
    });
    toast.present();
    this.addtocart = {};

  }
}
