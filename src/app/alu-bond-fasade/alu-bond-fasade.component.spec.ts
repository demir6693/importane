import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AluBondFasadeComponent } from './alu-bond-fasade.component';

describe('AluBondFasadeComponent', () => {
  let component: AluBondFasadeComponent;
  let fixture: ComponentFixture<AluBondFasadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AluBondFasadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AluBondFasadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
