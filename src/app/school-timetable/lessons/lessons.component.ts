import { Component, inject } from '@angular/core';
import { SchoolTimetableService } from '../school-timetable.service';

@Component({
  selector: 'hinv-lessons',
  templateUrl: './lessons.component.html',
  styleUrl: './lessons.component.scss',
})
export class LessonsComponent {
  columns: string[] = [
    'day',
    'earlyMorning',
    'midMorning',
    'afterlunch',
    'evening',
  ];
  schoolTimetableService = inject(SchoolTimetableService);
  dataSource = this.schoolTimetableService.lessonsTimetable;
}
