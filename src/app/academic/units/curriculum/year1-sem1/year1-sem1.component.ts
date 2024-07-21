import { Component, inject } from '@angular/core';
import { CurriculumService } from '../curriculum.service';

@Component({
  selector: 'hinv-year1-sem1',
  templateUrl: './year1-sem1.component.html',
  styleUrl: './year1-sem1.component.scss',
})
export class Year1Sem1Component {
  curriculumService = inject(CurriculumService);
  displayedColumns: string[] = ['unitCode', 'unitName', 'option'];
  dataSource = this.curriculumService.curriculum;
}
