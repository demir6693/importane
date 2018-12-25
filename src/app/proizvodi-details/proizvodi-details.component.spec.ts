import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProizvodiDetailsComponent } from './proizvodi-details.component';

describe('ProizvodiDetailsComponent', () => {
  let component: ProizvodiDetailsComponent;
  let fixture: ComponentFixture<ProizvodiDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProizvodiDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProizvodiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
