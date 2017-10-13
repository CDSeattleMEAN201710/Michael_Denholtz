import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhsComponent } from './ghs.component';

describe('GhsComponent', () => {
  let component: GhsComponent;
  let fixture: ComponentFixture<GhsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
