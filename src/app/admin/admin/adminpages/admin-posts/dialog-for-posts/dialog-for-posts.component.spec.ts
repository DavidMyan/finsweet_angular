import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogForPostsComponent } from './dialog-for-posts.component';

describe('DialogForPostsComponent', () => {
  let component: DialogForPostsComponent;
  let fixture: ComponentFixture<DialogForPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogForPostsComponent]
    });
    fixture = TestBed.createComponent(DialogForPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
