import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookFormTDFComponent } from './add-book-form-tdf.component';

describe('AddBookFormTDFComponent', () => {
  let component: AddBookFormTDFComponent;
  let fixture: ComponentFixture<AddBookFormTDFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBookFormTDFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookFormTDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
