import { Component, inject } from '@angular/core';
import { CurriculumService } from '../curriculum.service';

@Component({
  selector: 'hinv-year2sem1',
  templateUrl: './year2sem1.component.html',
  styleUrl: './year2sem1.component.scss',
})
export class Year2sem1Component {
  curriculumService = inject(CurriculumService);
  displayedColumns: string[] = ['unitCode', 'unitName', 'option'];
  dataSource = this.curriculumService.curriculum2sem1;
}
