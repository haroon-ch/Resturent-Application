import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { GlobalService } from './global.service';
import { AlertService } from './alert.service';
import { NavController, MenuController } from '@ionic/angular';
import {  Router } from '@angular/router';
import { async } from 'rxjs/internal/scheduler/async';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  response: any;
  all: any;
  prgres: number;
  less: any;
  public data: any;

  constructor(public menuCtrl: MenuController,public router:Router, private authservice: AuthService, private global: GlobalService, private Alert: AlertService, private navigate: NavController) {
    // this.authservice.observeHttp.subscribe(data => 
    //   { 
    //     this.prgres=parseInt(JSON.stringify(data))/100; 
    //     console.log(this.prgres);
    //     if(this.prgres==1){
    //     this.getmenu();
    //     this.navigate.navigateBack("/menu");
    //     this.Alert.call("New Categeory Added");
    //     }
    //   }
    //   )  
   }
  api_login(signin: any) {
    this.authservice.con(signin, 'login').then(async (res) => {
      this.response = JSON.parse(String(res));
      

      if (this.response.error === false) {
        this.global.set_User(this.response.user);
        this.Alert.loginAlert();
        this.navigate.navigateForward("/ordercat")
        return;
      }
      this.Alert.invalidlogin();
      console.log(this.response.error);
      // tslint:disable-next-line: whitespace


    }, (err) => { this.Alert.connection(); });
  }
  api_getallproducts() {
    this.authservice.getdata('viewrawcat').then((result) => {
      this.global.set_Products(JSON.parse(String(result)));
    }, (err) => {
      this.Alert.connection();
      console.log(err);
    });
  }
  addcat(data: any) {
    this.authservice.con(data, 'addrawcat').then(async (res) => {
      this.response = JSON.parse(String(res).toString());
      if (this.response.error === false) {
        this.Alert.call("New Categeory Added");
        this.api_getallproducts();
        return;
      }
    }, (err) => {
      console.log(err);
      this.Alert.connection();
    });
  }
  
  addmenucat(data: any) {
    this.authservice.con(data, 'insertmenucat').then(async (res) => {
      this.response = JSON.parse(String(res).toString());
      if (this.response.error === false) {
        this.getmenu();
        this.navigate.navigateBack("/menu");
        this.Alert.call("New Categeory Added");
        return;
      }
    }, (err) => {
      console.log(err);
      this.Alert.connection();
    });
  }
  editcat(data: any) {
    this.authservice.con(data, 'editrawcat').then(async (res) => {
      this.response = JSON.parse(String(res).toString());
      if (this.response.error === false) {
        this.Alert.call("Categeory Updated");
        this.api_getallproducts();
        return;
      }
    }, (err) => {
      console.log(err);
      this.Alert.connection();
    });
  }
  editsubcat(data: any) {
    this.authservice.con(data, 'editrawsub').then(async (res) => {
      this.response = JSON.parse(String(res).toString());
      if (this.response.error === false) {
        this.Alert.call("Item Editted");
        this.getsub(data.callid);
        return;
      }
    }, (err) => {
      console.log(err);
      this.Alert.connection();
    });
  }
  getsub(id: any) {
    this.authservice.getdata('viewrawsub/' + id).then((data) => {
      this.response = JSON.parse(String(data));
      this.global.set_Subcat(JSON.parse(String(data)));
      console.log(this.response);
      this.navigate.navigateForward("/subcat")
    },
      (err) => {
        this.Alert.connection();
        console.log(err);
      });
  }
  getdetails(id: any) {

    this.authservice.getdata('getsubhistory/' + id).then((data) => {
      this.response = JSON.parse(String(data));
      this.global.set_Cart(JSON.parse(String(data)));
      console.log(this.response);
      this.navigate.navigateForward("/stockdetail");
    },
      (err) => {
        this.Alert.connection();
        console.log(err);
      });
  }
  getmenudetails(id: any) {
    this.authservice.getdata('getallmenu/' + id).then((data) => {
      this.response = JSON.parse(String(data));
      console.log(this.response);
      this.global.set_Menusub(JSON.parse(String(data)));
    },
      (err) => {
        this.Alert.connection();
      });
  }
  getmenu() {
    this.authservice.getdata('getallmenucategory').then((data) => {
      console.log(data);
      this.response = JSON.parse(String(data));
      this.global.set_Menu(JSON.parse(String(data)));
    },
      (err) => {
        this.Alert.connection();
      });
  }
  getorder() {
    this.authservice.getdata('getallorder').then((data) => {
      this.all=(JSON.parse(String(data)));
      this.global.set_All(this.all);
      this.global.set_Pending(this.all.filter(data => data.o_status == "pending"));
      this.global.set_Cancelled(this.all.filter(data => data.o_status == "cancelled"));
      this.global.set_Completed(this.all.filter(data => data.o_status == "completed"));
    },
      (err) => {
        this.Alert.connection();
      });
  }
  getorderuser() {
    this.authservice.getdata('getallorderuser').then((data) => {
          this.all=(JSON.parse(String(data)));
          this.global.set_All(this.all);
          this.global.set_Pending(this.all.filter(data => data.o_status == "pending"));
          this.global.set_Cancelled(this.all.filter(data => data.o_status == "cancelled"));
          this.global.set_Completed(this.all.filter(data => data.o_status == "completed"));
        },
        (err) => {
          this.Alert.connection();
        });
  }
  getstock() {
    this.authservice.getdata('getallstock').then((data) => {
      this.response = JSON.parse(String(data));
      console.log(this.response)
      this.less=this.response.filter(data=>data.is_remaining<data.min_quantity);
      this.global.set_Stock(this.response);
      this.global.set_Less(this.less);
      console.log(this.response);
    },
      (err) => {
        this.Alert.connection();
        console.log(err);
      });
  }
  addsub(data: any) {
    this.authservice.con(data, 'addrawsub').then(async (res) => {
      this.response = JSON.parse(String(res).toString());
      if (this.response.error === false) {
        this.Alert.call("Added New Item");
        this.getsub(data.id);
        return;
      }
    }, (err) => {
      console.log(err);
      this.Alert.connection();
    });
  }
  addorder(data: any) {
    this.authservice.con(data, 'addorder').then(async (res) => {
      this.response = JSON.parse(String(res).toString());

      console.log(this.response);
    }, (err) => {
      console.log(err);
      this.Alert.connection();
    });
  }


  updateorder(data: any) {
    this.authservice.con(data, 'updateorder').then(async (res) => {
      this.response = JSON.parse(String(res).toString());
      console.log(this.response);
    }, (err) => {
      console.log(err);
      this.Alert.connection();
    });
  }

  getorderitemstest(id: any) {

    this.authservice.getdata('getorderitemtest/' + id).then((data) => {
          this.response = JSON.parse(String(data));
          console.log(this.response);
          this.getgradients1(this.response);
          this.global.set_Cart(this.response);
        },
        (err) => {
          this.Alert.connection();
          console.log(err);
        });
  }

  getgradients1(data: any) {
    this.authservice.con(data, 'getordergradients').then(async (res) => {
      this.data = JSON.parse(String(res));
      console.log(this.data);
      this.updatordergradients(this.data);
    }, (err) => {
      this.Alert.connection();
      console.log(err);
    });
  }

  updatordergradients(data: any) {
    this.authservice.con(data, 'updatordergradients').then(async (res) => {
      this.response = JSON.parse(String(res).toString());
      console.log(this.response);
      if (this.response.error === false) {
        this.Alert.call("Order Placed");
      }
    }, (err) => {
      console.log(err);
      this.Alert.connection();
    });
  }
  api_showtransaction(data: any) {;
    this.authservice.con(data, 'gettransaction').then(async (res) => {
      this.response = JSON.parse(String(res).toString());
      this.global.set_Transactiondetail(this.response);
    }, (err) => {
      console.log(err);
      this.Alert.connection();
    });
  }
  editorder(data: any) {
    this.authservice.con(data, 'updateorderstatus').then(async (res) => {
      this.response = JSON.parse(String(res).toString());
      if (this.response.error === false) {
        this.Alert.call("Order Status Updated");
        this.getorder();
        return;
      }
    }, (err) => {
      console.log(err);
      this.Alert.connection();
    });
  }
  insertmenusub(data: any) {
    this.authservice.con(data, 'insertmenusubcat').then(async (res) => {
      this.response = JSON.parse(String(res).toString());
      if (this.response.error === false) {
        this.Alert.call("Added New Item");
        // this.router.navigate(["menuitem"]);
        this.global.Id.subscribe(res=>{
          this.getmenudetails(res);
          this.navigate.navigateBack(["/menuitem"]);
        });
        return;
      }
    }, (err) => {
      console.log(err);
      this.Alert.connection();
    });
  }

  insertstock(data: any) {
    this.authservice.con(data,'insertpurchase').then(async (res) => {
      this.response = JSON.parse(String(res).toString());
      if (this.response.error === false) {
        this.Alert.call("Stock Inserted");
        this.navigate.navigateBack("/subcat");
        return;
      }
    }, (err) => {
      console.log(err);
      this.Alert.connection();
    });
  }

  api_addorder(data1: any) {
    this.authservice.con(data1, 'addorder').then((res) => {
      console.log(res);
      this.response = JSON.parse(String(res));
      console.log(this.response.message);
      if (this.response.error === true && this) {
        if (this.response.error1 === true) {
          this.Alert.oldincorrect();
          return;
        }
        this.Alert.connection();
        return;
      }
      if (this.response.error === false) {
        this.Alert.passupdate();
      }
    }, (err) => { this.Alert.connection(); });

  }

  getprofile() {
    this.global.User.subscribe((user) => {
      console.log('user from global = ' + JSON.stringify(user));
      this.authservice.getdata('getprofile/' + user.userid).then((data) => {
        this.global.set_User(JSON.parse(String(data)));
        console.log(' user profile = ' + data);
      });
    });
  }


  api_city() {
    this.authservice.getdata('getcity').then((result) => {
      this.global.set_City(JSON.parse(String(result)));
    }, (err) => {
      this.Alert.connection();
      console.log(err);
    });
  }
  api_subcat() {
    this.authservice.getdata('getallsub').then((result) => {
     
    }, (err) => {
      this.Alert.connection();
      console.log(err);
    });
  }
  api_subcat1() {
    this.authservice.getdata('getallsub1').then((result) => {
      this.global.set_SubServices1(JSON.parse(String(result)));
    }, (err) => {
      this.Alert.connection();
      console.log(err);
    });
  }
  api_subcat2() {
    this.authservice.getdata('getallsub2').then((result) => {
      this.global.set_SubServices2(JSON.parse(String(result)));
    }, (err) => {
      this.Alert.connection();
      console.log(err);
    });
  }

  api_getcustomer() {
    this.authservice.getdata('getcustomer').then((result) => {
      this.global.set_Customer(JSON.parse(String(result)));
    }, (err) => {
      this.Alert.connection();
      console.log(err);
    });
  }
  api_getcustomerdetails(id) {
    this.authservice.getdata('getcustomerdetail/'+id).then((result) => {
      this.data = JSON.parse(String(result));
      this.global.set_Customerdetails(this.data);
      console.log(this.data);
      // this.router.navigate(['customerdetail']);
    }, (err) => {
      this.Alert.connection();
      console.log(err);
    });
  }

  api_addcustomer(data: any) {
    this.authservice.con(data, 'insertcustomer').then(async (res) => {
      this.response = JSON.parse(String(res).toString());
      if (this.response.error === false) {
        this.Alert.call("New Customer Added");
        this.api_getcustomer();
        return;
      }
    }, (err) => {
      console.log(err);
      this.Alert.connection();
    });
  }
  api_updatecustomerbalance(data: any) {
    this.authservice.con(data, 'updatecustomerbalance').then(async (res) => {
      this.data = JSON.parse(String(res));
    }, (err) => {
      this.Alert.connection();
      console.log(err);
    });
  }
  api_getseller() {
    this.authservice.getdata('getseller').then((result) => {
      this.global.set_Seller(JSON.parse(String(result)));
    }, (err) => {
      this.Alert.connection();
      console.log(err);
    });
  }

  api_getsellerdetails(id) {
    this.authservice.getdata('getsellerdetail/'+id).then((result) => {
      this.data = JSON.parse(String(result));
      this.global.set_Sellerdetails(this.data);
      console.log(this.data);
    }, (err) => {
      this.Alert.connection();
      console.log(err);
    });
  }
  api_updatesellerbalance(data: any) {
    this.authservice.con(data, 'updatesellerbalance').then(async (res) => {
      this.data = JSON.parse(String(res));
    }, (err) => {
      this.Alert.connection();
      console.log(err);
    });
  }

  api_addseller(data: any) {
    this.authservice.con(data, 'insertseller').then(async (res) => {
      this.response = JSON.parse(String(res).toString());
      if (this.response.error === false) {
        this.Alert.call("New Customer Added");
        this.api_getcustomer();
        return;
      }
    }, (err) => {
      console.log(err);
      this.Alert.connection();
    });
  }

  api_getexpense() {
    this.authservice.getdata('getexpense').then((result) => {
      this.global.set_Expense(JSON.parse(String(result)));
    }, (err) => {
      this.Alert.connection();
      console.log(err);
    });
  }


  api_addexpense(data: any) {
    this.authservice.con(data, 'insertexpense').then(async (res) => {
      this.response = JSON.parse(String(res).toString());
      if (this.response.error === false) {
        this.Alert.call("New Customer Added");
        this.api_getexpense();
        return;
      }
    }, (err) => {
      console.log(err);
      this.Alert.connection();
    });
  }

  api_addexpensedetails(data: any) {
    this.authservice.con(data, 'insertexpensedetail').then(async (res) => {
      this.response = JSON.parse(String(res).toString());
      if (this.response.error === false) {
        this.Alert.call("New Customer Added");
        return;
      }
    }, (err) => {
      console.log(err);
      this.Alert.connection();
    });
  }

  api_getexpensedetails(id) {
    this.authservice.getdata('getexpensedetail/'+id).then((result) => {
      this.data = JSON.parse(String(result));
      this.global.set_Expensedetails(this.data);
      console.log(this.data);
    }, (err) => {
      this.Alert.connection();
      console.log(err);
    });
  }

  api_totalpurchase(data: any) {
    this.authservice.con(data, 'gettotalsale').then(async (res) => {
      this.data = JSON.parse(String(res));
      this.global.set_Totalsale(this.data);

    }, (err) => {
      this.Alert.connection();
      console.log(err);
    });
    this.authservice.con(data, 'gettotalexpense').then(async (res) => {
      this.data = JSON.parse(String(res));
      this.global.set_Totalex(this.data);
    }, (err) => {
      this.Alert.connection();
      console.log(err);
    });
    this.authservice.con(data, 'gettotalpurchase').then(async (res) => {
      this.data = JSON.parse(String(res));
      this.global.set_Totalpur(this.data);
    }, (err) => {
      this.Alert.connection();
      console.log(err);
    });
  }

// update order api
  getorderitems(id: any) {

    this.authservice.getdata('getorderitems/' + id).then((data) => {
          this.response = JSON.parse(String(data));
          console.log(this.response);
          this.global.set_Cart(this.response);
         // this.navigate.navigateForward('/cart');
        },
        (err) => {
          this.Alert.connection();
          console.log(err);
        });
  }

  getmenugradients(id: any) {

    this.authservice.getdata('getmenugradients/' + id).then((data) => {
          this.response = JSON.parse(String(data));
          this.global.set_Cart(JSON.parse(String(data)));
          console.log(this.response);
          this.global.set_Oid(this.response);
          // this.navigate.navigateForward('/cart');
        },
        (err) => {
          this.Alert.connection();
          console.log(err);
        });
  }




  deletemenu(data: any) {
    this.authservice.con(data, 'deletemenu').then(async (res) => {
      this.response = JSON.parse(String(res).toString());
      if (this.response.error === false) {
        this.Alert.call('menu deleted');
        return;
      }
    }, (err) => {
      console.log(err);
      this.Alert.connection();
    });
  }



  // getoderdetails addedy by haroon

  async getDetails(id:any) {
    await this.authservice.getdata('getorderdetails/'+id).then((result) => {
        this.data = JSON.parse(String(result));
       console.log(this.data);
        this.global.set_Oid(this.data);
      }, (err) => {
        console.log(err);
      });
    }

}

