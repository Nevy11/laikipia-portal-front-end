import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseShowingComponent } from './course-showing.component';

describe('CourseShowingComponent', () => {
  let component: CourseShowingComponent;
  let fixture: ComponentFixture<CourseShowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseShowingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseShowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
