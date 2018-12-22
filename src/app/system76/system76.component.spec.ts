import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { System76Component } from './system76.component';

describe('System76Component', () => {
  let component: System76Component;
  let fixture: ComponentFixture<System76Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ System76Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(System76Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
