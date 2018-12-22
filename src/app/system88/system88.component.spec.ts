import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { System88Component } from './system88.component';

describe('System88Component', () => {
  let component: System88Component;
  let fixture: ComponentFixture<System88Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ System88Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(System88Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
