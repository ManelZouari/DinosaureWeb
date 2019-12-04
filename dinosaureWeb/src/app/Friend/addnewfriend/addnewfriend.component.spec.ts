import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewfriendComponent } from './addnewfriend.component';

describe('AddnewfriendComponent', () => {
  let component: AddnewfriendComponent;
  let fixture: ComponentFixture<AddnewfriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewfriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewfriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
