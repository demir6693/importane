import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlizniComponent } from './klizni.component';

describe('KlizniComponent', () => {
  let component: KlizniComponent;
  let fixture: ComponentFixture<KlizniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlizniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlizniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
