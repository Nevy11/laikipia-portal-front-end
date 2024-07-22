import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolTimetableRoutingModule } from './school-timetable-routing.module';
import { SchoolTimetableComponent } from './school-timetable.component';
import { LessonsComponent } from './lessons/lessons.component';
import { ExamsComponent } from './exams/exams.component';
import { MatTableModule } from '@angular/material/table';
import { CourseShowingComponent } from './course-showing/course-showing.component';

@NgModule({
  declarations: [SchoolTimetableComponent, LessonsComponent, ExamsComponent, CourseShowingComponent],
  imports: [CommonModule, SchoolTimetableRoutingModule, MatTableModule],
})
export class SchoolTimetableModule {}
