import { Component, inject } from '@angular/core';
import { CurriculumService } from '../curriculum.service';

@Component({
  selector: 'hinv-year1sem2',
  templateUrl: './year1sem2.component.html',
  styleUrl: './year1sem2.component.scss',
})
export class Year1sem2Component {
  curriculumService = inject(CurriculumService);
  displayedColumns: string[] = ['unitCode', 'unitName', 'option'];
  dataSource = this.curriculumService.curriculum;
}
