import { Component, inject } from '@angular/core';
import { CurriculumService } from '../curriculum.service';

@Component({
  selector: 'hinv-year4sem1',
  templateUrl: './year4sem1.component.html',
  styleUrl: './year4sem1.component.scss',
})
export class Year4sem1Component {
  curriculumService = inject(CurriculumService);
  displayedColumns: string[] = ['unitCode', 'unitName', 'option'];
  dataSource = this.curriculumService.curriculum;
}
