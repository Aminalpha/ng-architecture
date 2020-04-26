import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCounterComponent } from './my-counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../counter.reducer';

describe('MyCounterComponent', () => {
  let component: MyCounterComponent;
  let fixture: ComponentFixture<MyCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCounterComponent ],
      imports: [ StoreModule.forRoot({count: counterReducer}) ],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
