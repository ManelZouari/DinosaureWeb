import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosaureProfileComponent } from './dinosaure-profile.component';

describe('DinosaureProfileComponent', () => {
  let component: DinosaureProfileComponent;
  let fixture: ComponentFixture<DinosaureProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinosaureProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosaureProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
