import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form2validateComponent } from './form2validate.component';

describe('Form2validateComponent', () => {
  let component: Form2validateComponent;
  let fixture: ComponentFixture<Form2validateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form2validateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form2validateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
