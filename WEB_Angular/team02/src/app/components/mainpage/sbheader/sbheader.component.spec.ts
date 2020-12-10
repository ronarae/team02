import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbheaderComponent } from './sbheader.component';

describe('SbheaderComponent', () => {
  let component: SbheaderComponent;
  let fixture: ComponentFixture<SbheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
