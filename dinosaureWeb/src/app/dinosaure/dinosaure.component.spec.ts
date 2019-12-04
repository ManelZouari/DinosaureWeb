import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosaureComponent } from './dinosaure.component';

describe('DinosaureComponent', () => {
  let component: DinosaureComponent;
  let fixture: ComponentFixture<DinosaureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinosaureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosaureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
