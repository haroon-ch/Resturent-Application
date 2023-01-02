import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowdetailPage } from './showdetail.page';

describe('ShowdetailPage', () => {
  let component: ShowdetailPage;
  let fixture: ComponentFixture<ShowdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
