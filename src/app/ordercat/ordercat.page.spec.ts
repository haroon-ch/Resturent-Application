import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrdercatPage } from './ordercat.page';

describe('OrdercatPage', () => {
  let component: OrdercatPage;
  let fixture: ComponentFixture<OrdercatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdercatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrdercatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
