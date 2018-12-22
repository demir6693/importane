import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FasadaStakloComponent } from './fasada-staklo.component';

describe('FasadaStakloComponent', () => {
  let component: FasadaStakloComponent;
  let fixture: ComponentFixture<FasadaStakloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FasadaStakloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FasadaStakloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
