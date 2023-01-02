import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpensedetailPage } from './expensedetail.page';

describe('ExpensedetailPage', () => {
  let component: ExpensedetailPage;
  let fixture: ComponentFixture<ExpensedetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensedetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpensedetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
