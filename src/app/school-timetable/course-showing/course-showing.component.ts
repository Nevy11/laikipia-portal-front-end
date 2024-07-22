import { Component } from '@angular/core';

@Component({
  selector: 'hinv-course-showing',
  templateUrl: './course-showing.component.html',
  styleUrl: './course-showing.component.scss',
})
export class CourseShowingComponent {
  course = 'BACHELOR OF SCIENCE COMPUTER SCIENCE';
  admissionYear = 2022;
  sem = 1;
}
