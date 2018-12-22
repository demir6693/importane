import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { System70Component } from './system70.component';

describe('System70Component', () => {
  let component: System70Component;
  let fixture: ComponentFixture<System70Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ System70Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(System70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
