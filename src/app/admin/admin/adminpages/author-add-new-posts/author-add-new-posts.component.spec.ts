import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorAddNewPostsComponent } from './author-add-new-posts.component';

describe('AuthorAddNewPostsComponent', () => {
  let component: AuthorAddNewPostsComponent;
  let fixture: ComponentFixture<AuthorAddNewPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorAddNewPostsComponent]
    });
    fixture = TestBed.createComponent(AuthorAddNewPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
