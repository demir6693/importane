import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlizniPodiznoComponent } from './klizni-podizno.component';

describe('KlizniPodiznoComponent', () => {
  let component: KlizniPodiznoComponent;
  let fixture: ComponentFixture<KlizniPodiznoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlizniPodiznoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlizniPodiznoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
