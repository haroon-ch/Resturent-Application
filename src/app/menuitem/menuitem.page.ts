import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActionSheetController, AlertController, MenuController, ToastController} from '@ionic/angular';
import { ApicallService } from '../provider/apicall.service';
import { GlobalService } from '../provider/global.service';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.page.html',
  styleUrls: ['./menuitem.page.scss'],
})
export class MenuitemPage implements OnInit {
  Cat: any;
  public mid: any = {m_id: null};
  public gradients: any;

  constructor(public alertController: AlertController , private actionSheetController: ActionSheetController, public route: Router, private cdr: ChangeDetectorRef, public toast: ToastController, private global: GlobalService, public apicall: ApicallService) {
  }

  ngAfterContentChecked() {
    this.cdr.detectChanges();
    // call or add here your code
  }

  ionViewWillEnter() {


  }

  addnew() {
    this.route.navigate(["/addsub"]);
  }

  ngOnInit() {
    this.global.Menusub.subscribe((res) => {
      this.Cat = res;
      console.log(this.Cat);
    });
  }

  back(){
    this.route.navigate(['menu'])
  }

  async sheet(id) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Manage',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Delete',
          icon: 'eye-outline',
          handler: () => {
            console.log(id);
            this.mid.m_id = id;
            this.apicall.deletemenu(this.mid);
            this.route.navigate(['/menu']);

          }
        },
        {
          text: 'Show Gradients',
          icon: 'eye-outline',
          handler: () => {
            console.log(id);
            this.mid.m_id = id;
            this.apicall.getmenugradients(this.mid.m_id);
            this.global.Oid.subscribe((res) => {
              this.gradients = res;
              console.log(this.gradients);
            });
            this.presentAlert();
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
          }
        }]
    });
    await actionSheet.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: '',
      buttons: ['OK']
    });

    await alert.present();

    const {role} = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
