import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSBComponent } from './header-sb.component';

describe('HeaderSBComponent', () => {
  let component: HeaderSBComponent;
  let fixture: ComponentFixture<HeaderSBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
