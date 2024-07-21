import { Component, inject } from '@angular/core';
import { CurriculumService } from '../curriculum.service';

@Component({
  selector: 'hinv-year4sem2',
  templateUrl: './year4sem2.component.html',
  styleUrl: './year4sem2.component.scss',
})
export class Year4sem2Component {
  curriculumService = inject(CurriculumService);
  displayedColumns: string[] = ['unitCode', 'unitName', 'option'];
  dataSource = this.curriculumService.curriculum;
}
