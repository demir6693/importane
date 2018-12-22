import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Alu965Component } from './alu965.component';

describe('Alu965Component', () => {
  let component: Alu965Component;
  let fixture: ComponentFixture<Alu965Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Alu965Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Alu965Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
