import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Alu11000Component } from './alu11000.component';

describe('Alu11000Component', () => {
  let component: Alu11000Component;
  let fixture: ComponentFixture<Alu11000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Alu11000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Alu11000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
