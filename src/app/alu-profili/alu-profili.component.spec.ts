import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AluProfiliComponent } from './alu-profili.component';

describe('AluProfiliComponent', () => {
  let component: AluProfiliComponent;
  let fixture: ComponentFixture<AluProfiliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AluProfiliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AluProfiliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
