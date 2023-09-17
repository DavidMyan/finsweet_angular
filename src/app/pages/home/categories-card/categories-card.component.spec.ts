import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesCardComponent } from './categories-card.component';

describe('CategoriesCardComponent', () => {
  let component: CategoriesCardComponent;
  let fixture: ComponentFixture<CategoriesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesCardComponent]
    });
    fixture = TestBed.createComponent(CategoriesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
