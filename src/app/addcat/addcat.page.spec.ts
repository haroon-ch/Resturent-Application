import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddcatPage } from './addcat.page';

describe('AddcatPage', () => {
  let component: AddcatPage;
  let fixture: ComponentFixture<AddcatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddcatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
