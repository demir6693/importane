import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FasadaStakloNstrukturalneComponent } from './fasada-staklo-nstrukturalne.component';

describe('FasadaStakloNstrukturalneComponent', () => {
  let component: FasadaStakloNstrukturalneComponent;
  let fixture: ComponentFixture<FasadaStakloNstrukturalneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FasadaStakloNstrukturalneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FasadaStakloNstrukturalneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
