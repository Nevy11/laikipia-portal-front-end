import { Component, inject } from '@angular/core';
import { CurriculumService } from '../curriculum.service';

@Component({
  selector: 'hinv-year3sem1',
  templateUrl: './year3sem1.component.html',
  styleUrl: './year3sem1.component.scss',
})
export class Year3sem1Component {
  curriculumService = inject(CurriculumService);
  displayedColumns: string[] = ['unitCode', 'unitName', 'option'];
  dataSource = this.curriculumService.curriculum3sem1;
}
