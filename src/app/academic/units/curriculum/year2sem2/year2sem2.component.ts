import { Component, inject } from '@angular/core';
import { CurriculumService } from '../curriculum.service';

@Component({
  selector: 'hinv-year2sem2',
  templateUrl: './year2sem2.component.html',
  styleUrl: './year2sem2.component.scss',
})
export class Year2sem2Component {
  curriculumService = inject(CurriculumService);
  displayedColumns: string[] = ['unitCode', 'unitName', 'option'];
  dataSource = this.curriculumService.curriculum2sem2;
}
