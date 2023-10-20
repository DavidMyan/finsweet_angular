import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogForCategoryComponent } from './dialog-for-category.component';

describe('DialogForCategoryComponent', () => {
  let component: DialogForCategoryComponent;
  let fixture: ComponentFixture<DialogForCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogForCategoryComponent]
    });
    fixture = TestBed.createComponent(DialogForCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
