import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddsubPage } from './addsub.page';

describe('AddsubPage', () => {
  let component: AddsubPage;
  let fixture: ComponentFixture<AddsubPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsubPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddsubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
