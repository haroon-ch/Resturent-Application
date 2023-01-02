import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubcatPage } from './subcat.page';

describe('SubcatPage', () => {
  let component: SubcatPage;
  let fixture: ComponentFixture<SubcatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubcatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
