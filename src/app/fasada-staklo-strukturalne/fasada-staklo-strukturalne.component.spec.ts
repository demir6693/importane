import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FasadaStakloStrukturalneComponent } from './fasada-staklo-strukturalne.component';

describe('FasadaStakloStrukturalneComponent', () => {
  let component: FasadaStakloStrukturalneComponent;
  let fixture: ComponentFixture<FasadaStakloStrukturalneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FasadaStakloStrukturalneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FasadaStakloStrukturalneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
