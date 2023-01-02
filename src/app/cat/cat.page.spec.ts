import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatPage } from './cat.page';

describe('CatPage', () => {
  let component: CatPage;
  let fixture: ComponentFixture<CatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
