import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuitemPage } from './menuitem.page';

describe('MenuitemPage', () => {
  let component: MenuitemPage;
  let fixture: ComponentFixture<MenuitemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuitemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuitemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
