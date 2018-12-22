import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlizniKombiComponent } from './klizni-kombi.component';

describe('KlizniKombiComponent', () => {
  let component: KlizniKombiComponent;
  let fixture: ComponentFixture<KlizniKombiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlizniKombiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlizniKombiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
