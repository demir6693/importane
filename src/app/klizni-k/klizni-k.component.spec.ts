import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlizniKComponent } from './klizni-k.component';

describe('KlizniKComponent', () => {
  let component: KlizniKComponent;
  let fixture: ComponentFixture<KlizniKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlizniKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlizniKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
