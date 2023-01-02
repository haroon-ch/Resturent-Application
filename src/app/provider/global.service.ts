import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }
  private user = new BehaviorSubject<any>('');
  public User = this.user.asObservable();
  private cat = new BehaviorSubject<any>('');
  public Cat = this.cat.asObservable();
  private city = new BehaviorSubject<any>('');
  public City = this.city.asObservable();
  private products = new BehaviorSubject<any>('');
  public Products = this.products.asObservable();
  private badge = new BehaviorSubject<any>('');
  public Badge = this.badge.asObservable();
  private selected = new BehaviorSubject<any>('');
  public Selected = this.selected.asObservable();
  private cart = new BehaviorSubject<any>('');
  public Cart = this.cart.asObservable();
  private subcat = new BehaviorSubject<any>('');
  public Subcat = this.subcat.asObservable();
  private subservices1 = new BehaviorSubject<any>('');
  public SubServices1 = this.subservices1.asObservable();
  private subservices2 = new BehaviorSubject<any>('');
  public SubServices2 = this.subservices2.asObservable();
  private usersdata = new BehaviorSubject<any>('');
  public Usersdata = this.usersdata.asObservable();
  private id = new BehaviorSubject<any>('');
  public Id = this.id.asObservable();
  private postsbyid = new BehaviorSubject<any>('');
  public Postsbyid = this.postsbyid.asObservable();
  private worker1 = new BehaviorSubject<any>('');
  public Worker1 = this.worker1.asObservable();
  private order = new BehaviorSubject<any>('');
  public Order = this.order.asObservable();
  private profile = new BehaviorSubject<any>('');
  public Profile = this.profile.asObservable();
  private image = new BehaviorSubject<any>('');
  public Image = this.image.asObservable();
  private stock = new BehaviorSubject<any>('');
  public Stock = this.stock.asObservable();
  private menu = new BehaviorSubject<any>('');
  public Menu = this.menu.asObservable();
  private menusub = new BehaviorSubject<any>('');
  public Menusub = this.menusub.asObservable();
  set_User(user: any) {
    this.user.next(user);
  }
  private catid = new BehaviorSubject<any>('');
  public Catid = this.catid.asObservable();
  set_Catid(catid: any) {
    this.catid.next(catid);
  }
  private all = new BehaviorSubject<any>('');
  public All = this.all.asObservable();
  set_All(all: any) {
    this.all.next(all);
  }
  private pending = new BehaviorSubject<any>('');
  public Pending = this.pending.asObservable();
  set_Pending(pending: any) {
    this.pending.next(pending);
  }
  private cancelled = new BehaviorSubject<any>('');
  public Cancelled = this.cancelled.asObservable();
  set_Cancelled(cancelled: any) {
    this.cancelled.next(cancelled);
  }
  private completed = new BehaviorSubject<any>('');
  public Completed = this.completed.asObservable();
  set_Completed(completed: any) {
    this.completed.next(completed);
  }
  private cimage = new BehaviorSubject<any>('');
  public Cimage = this.cimage.asObservable();
  set_Cimage(cimage: any) {
    this.cimage.next(cimage);
  }
  private less = new BehaviorSubject<any>('');
  public Less = this.less.asObservable();
  set_Less(less: any) {
    this.less.next(less);
  }
  private transactiondetail = new BehaviorSubject<any>('');
  public Transactiondetail = this.transactiondetail.asObservable();
  set_Transactiondetail(transactiondetail: any) {
    this.transactiondetail.next(transactiondetail);
  }
  set_Cat(cat: any) {
    this.cat.next(cat);
  }
  set_City(city: any) {
    this.city.next(city);
  }
  set_Stock(stock: any) {
    this.stock.next(stock);
  }
  set_Products(products: any) {
    this.products.next(products);
  }
  set_Selected(selected: any) {
    this.selected.next(selected);
  }
  set_Badge(badge: any) {
    this.badge.next(badge);
  }
  set_Cart(cart: any) {
    this.cart.next(cart);
  }
  set_Menu(menu: any) {
    this.menu.next(menu);
  }
  set_Menusub(menusub: any) {
    this.menusub.next(menusub);
  }
  set_Subcat(subcat: any) {
    this.subcat.next(subcat);
  }
  set_SubServices1(subservices1: any) {
    this.subservices1.next(subservices1);
  }
  set_SubServices2(subservices1: any) {
    this.subservices2.next(subservices1);
  }
  
  set_id(id: any) {
    this.id.next(id);
  }
  set_Postsbyid(postsbyid: any) {
    this.postsbyid.next(postsbyid);
  }
  set_Worker1(worker1: any) {
    this.worker1.next(worker1);
  }
  set_Order(order: any) {
    this.order.next(order);
  }
  set_Profile(profile: any) {
    this.profile.next(profile);
  }
  set_image(image: any) {
    this.image.next(image);
  }
  set_paimage(image: any) {
    this.image.next(image);
  }

  private customer = new BehaviorSubject<any>('');
  public Customer = this.customer.asObservable();
  set_Customer(customer: any) {
    this.customer.next(customer);
  }
  private customerdetails = new BehaviorSubject<any>('');
  public Customerdetails = this.customerdetails.asObservable();
  set_Customerdetails(customerdetails: any) {
    this.customerdetails.next(customerdetails);
  }

  private sellerdetails = new BehaviorSubject<any>('');
  public Sellerdetails = this.sellerdetails.asObservable();
  set_Sellerdetails(sellerdetails: any) {
    this.sellerdetails.next(sellerdetails);
  }

  private expensedetails = new BehaviorSubject<any>('');
  public Expensedetails = this.expensedetails.asObservable();
  set_Expensedetails(expensedetails: any) {
    this.expensedetails.next(expensedetails);
  }

  private seller = new BehaviorSubject<any>('');
  public Seller = this.seller.asObservable();
  set_Seller(seller: any) {
    this.seller.next(seller);
  }

  private expense = new BehaviorSubject<any>('');
  public Expense = this.expense.asObservable();
  set_Expense(expense: any) {
    this.expense.next(expense);
  }

  private totalsale = new BehaviorSubject<any>('');
  public Totalsale = this.totalsale.asObservable();
  set_Totalsale(totalsale: any) {
    this.totalsale.next(totalsale);
  }

  private totalex = new BehaviorSubject<any>('');
  public Totalex = this.totalex.asObservable();

  set_Totalex(totalex: any) {
    this.totalex.next(totalex);
  }

  private totalpur = new BehaviorSubject<any>('');
  public Totalpur = this.totalpur.asObservable();

  set_Totalpur(totalpur: any) {
    this.totalpur.next(totalpur);
  }


  private orderitem = new BehaviorSubject<any>('');
  public Orderitem = this.orderitem.asObservable();

  set_Orderitem(orderitem: any) {
    this.orderitem.next(orderitem);
  }

  private oid = new BehaviorSubject<any>('');
  public Oid = this.oid.asObservable();

  set_Oid(oid: any) {
    this.oid.next(oid);
  }

  
  private cartQuantity = new BehaviorSubject<any>('');
  public CartQuantity = this.cartQuantity.asObservable();

  set_CartQuantity(cartQuantity: any) {
    this.cartQuantity.next(cartQuantity);
  }

}
