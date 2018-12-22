import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysProzoraVrataComponent } from './sys-prozora-vrata.component';

describe('SysProzoraVrataComponent', () => {
  let component: SysProzoraVrataComponent;
  let fixture: ComponentFixture<SysProzoraVrataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysProzoraVrataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysProzoraVrataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
