import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInStudentComponent } from './check-in-student.component';

describe('CheckInStudentComponent', () => {
  let component: CheckInStudentComponent;
  let fixture: ComponentFixture<CheckInStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckInStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
