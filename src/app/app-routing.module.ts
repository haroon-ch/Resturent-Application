import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'items',
    loadChildren: () => import('./items/items.module').then( m => m.ItemsPageModule)
  },
  {
    path: 'cat',
    loadChildren: () => import('./cat/cat.module').then( m => m.CatPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'stock',
    loadChildren: () => import('./stock/stock.module').then( m => m.StockPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'menuitem',
    loadChildren: () => import('./menuitem/menuitem.module').then( m => m.MenuitemPageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'subcat',
    loadChildren: () => import('./subcat/subcat.module').then( m => m.SubcatPageModule)
  },
  {
    path: 'addcat',
    loadChildren: () => import('./addcat/addcat.module').then( m => m.AddcatPageModule)
  },
  {
    path: 'addsub',
    loadChildren: () => import('./addsub/addsub.module').then( m => m.AddsubPageModule)
  },
  {
    path: 'stockdetail',
    loadChildren: () => import('./stockdetail/stockdetail.module').then( m => m.StockdetailPageModule)
  },
  {
    path: 'ordercat',
    loadChildren: () => import('./ordercat/ordercat.module').then( m => m.OrdercatPageModule)
  },
  {
    path: 'ordersub',
    loadChildren: () => import('./ordersub/ordersub.module').then( m => m.OrdersubPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'transactions',
    loadChildren: () => import('./transactions/transactions.module').then( m => m.TransactionsPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'showdetail',
    loadChildren: () => import('./showdetail/showdetail.module').then( m => m.ShowdetailPageModule)
  },
  {
    path: 'sellerdetail',
    loadChildren: () => import('./sellerdetail/sellerdetail.module').then( m => m.SellerdetailPageModule)
  },
  {
    path: 'expensedetail',
    loadChildren: () => import('./expensedetail/expensedetail.module').then( m => m.ExpensedetailPageModule)
  },
  {
    path: 'userorder',
    loadChildren: () => import('./userorder/userorder.module').then( m => m.UserorderPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'test1',
    loadChildren: () => import('./test1/test1.module').then( m => m.Test1PageModule)
  },  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
