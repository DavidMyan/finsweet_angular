import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAuthorComponent } from './single-author.component';

describe('SingleAuthorComponent', () => {
  let component: SingleAuthorComponent;
  let fixture: ComponentFixture<SingleAuthorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleAuthorComponent]
    });
    fixture = TestBed.createComponent(SingleAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
