import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DilaogForActionComponent } from './dilaog-for-action.component';

describe('DilaogForActionComponent', () => {
  let component: DilaogForActionComponent;
  let fixture: ComponentFixture<DilaogForActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DilaogForActionComponent]
    });
    fixture = TestBed.createComponent(DilaogForActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
