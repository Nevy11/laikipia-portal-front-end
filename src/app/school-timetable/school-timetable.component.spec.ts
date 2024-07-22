import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolTimetableComponent } from './school-timetable.component';

describe('SchoolTimetableComponent', () => {
  let component: SchoolTimetableComponent;
  let fixture: ComponentFixture<SchoolTimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchoolTimetableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
