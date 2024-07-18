import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInfo2Component } from './student-info2.component';

describe('StudentInfo2Component', () => {
  let component: StudentInfo2Component;
  let fixture: ComponentFixture<StudentInfo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentInfo2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentInfo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
