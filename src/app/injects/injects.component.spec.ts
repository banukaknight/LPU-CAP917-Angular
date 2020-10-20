import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectsComponent } from './injects.component';

describe('InjectsComponent', () => {
  let component: InjectsComponent;
  let fixture: ComponentFixture<InjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
