import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrdersubPage } from './ordersub.page';

describe('OrdersubPage', () => {
  let component: OrdersubPage;
  let fixture: ComponentFixture<OrdersubPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersubPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
