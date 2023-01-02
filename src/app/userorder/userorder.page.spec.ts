import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserorderPage } from './userorder.page';

describe('UserorderPage', () => {
  let component: UserorderPage;
  let fixture: ComponentFixture<UserorderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserorderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
