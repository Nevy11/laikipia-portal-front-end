import { Component, inject } from '@angular/core';
import { CurriculumService } from '../curriculum.service';

@Component({
  selector: 'hinv-year3sem2',
  templateUrl: './year3sem2.component.html',
  styleUrl: './year3sem2.component.scss',
})
export class Year3sem2Component {
  curriculumService = inject(CurriculumService);
  displayedColumns: string[] = ['unitCode', 'unitName', 'option'];
  dataSource = this.curriculumService.curriculum3sem2;
}
