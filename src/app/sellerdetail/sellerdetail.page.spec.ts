import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SellerdetailPage } from './sellerdetail.page';

describe('SellerdetailPage', () => {
  let component: SellerdetailPage;
  let fixture: ComponentFixture<SellerdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SellerdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
