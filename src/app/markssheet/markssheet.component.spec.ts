import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkssheetComponent } from './markssheet.component';

describe('MarkssheetComponent', () => {
  let component: MarkssheetComponent;
  let fixture: ComponentFixture<MarkssheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkssheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkssheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
