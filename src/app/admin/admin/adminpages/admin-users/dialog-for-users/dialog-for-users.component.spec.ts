import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogForUsersComponent } from './dialog-for-users.component';

describe('DialogForUsersComponent', () => {
  let component: DialogForUsersComponent;
  let fixture: ComponentFixture<DialogForUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogForUsersComponent]
    });
    fixture = TestBed.createComponent(DialogForUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
