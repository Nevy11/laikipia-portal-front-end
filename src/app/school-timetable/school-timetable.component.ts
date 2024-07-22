import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { ExamsComponent } from './exams/exams.component';
import { LessonsComponent } from './lessons/lessons.component';
import { CourseShowingComponent } from './course-showing/course-showing.component';

@Component({
  selector: 'hinv-school-timetable',
  templateUrl: './school-timetable.component.html',
  styleUrl: './school-timetable.component.scss',
})
export class SchoolTimetableComponent implements AfterViewInit {
  vcr = inject(ViewContainerRef);
  ngAfterViewInit(): void {
    this.vcr.createComponent(CourseShowingComponent);
    this.vcr.createComponent(ExamsComponent);
  }
}
