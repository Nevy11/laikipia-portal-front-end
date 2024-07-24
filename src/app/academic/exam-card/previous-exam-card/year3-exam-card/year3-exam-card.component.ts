import { Component } from '@angular/core';

@Component({
  selector: 'hinv-year3-exam-card',
  templateUrl: './year3-exam-card.component.html',
  styleUrl: './year3-exam-card.component.scss',
})
export class Year3ExamCardComponent {
  yearSelected: string = '1';

  // currentSelectedYear!: string;
  // favoriteSeason!: string;
  // seasons: string[] = ['year1', 'Year2', 'Year3'];
}
