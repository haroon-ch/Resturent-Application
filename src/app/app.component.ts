import { Component, OnInit } from '@angular/core';

import { LoadingController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { GlobalService } from './provider/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      id:1,
      title: 'Add Order',
      url: '/ordercat',
      icon: 'heart'
    },
    {
      id:2,
      title: 'Add Raw Items',
      url: '/cat',
      icon: 'mail'
    },
    {
      id:3,
      title: 'View Stock',
      url: '/stock',
      icon: 'paper-plane'
    },
    {
      id:4,
      title: 'Add Menu',
      url: '/menu',
      icon: 'heart'
    },
    {
      id:5,
      title: 'Order Details',
      url: '/order',
      icon: 'archive'
    },
    // {
    //   id:6,
    //   title: 'Clent Order',
    //   url: '/userorder',
    //   icon: 'archive'
    // },
    {
      id:7,
      title: 'Account Detail',
      url: '/detail',
      icon: 'archive'
    },
    {
      id:8,
      title: 'See All Transactions',
      url: '/transactions',
      icon: 'calendar'
    },
    {
      id:9,
      title: 'Logout',
      url: '/',
      icon: 'power'
    },
    
  ];
  user: any;
  router(route,id) {
    if (this.user.i_role == "admin") {
      this.rout.navigate([route]);
    }
    else if(this.user.i_role == "staff" && id==1 || id==2 || id==6){
      this.rout.navigate([route]);
    }
    else{
      this.presentLoadingWithOptions();
    }
  }
  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 500,
      message: "Sorry You Don't have access to this Feature",
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public global:GlobalService,
    public rout:Router,
    public loadingController: LoadingController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.global.User.subscribe(res => {
      this.user = res;
    });
  }
}
