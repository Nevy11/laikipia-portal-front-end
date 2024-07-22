import { Component, inject } from '@angular/core';
import { EvaluationService } from '../evaluation.service';
import { CdkDrag, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'hinv-evaluation-table',
  templateUrl: './evaluation-table.component.html',
  styleUrl: './evaluation-table.component.scss',
})
export class EvaluationTableComponent {
  columns: string[] = [
    'index',
    'level',
    'startDate',
    'endDate',
    'takeEvaluation',
  ];
  evalService = inject(EvaluationService);
  dataSource = EvaluationsData;
  exchange(events: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, events.previousIndex, events.currentIndex);
  }
}
export interface Evaluations {
  index: number;
  level: string;
  startDate: string;
  endDate: string;
  takeEvaluation: string;
}

const EvaluationsData: Evaluations[] = [
  {
    index: 0,
    level: '1',
    startDate: '17/5/2003',
    endDate: 'endDate',
    takeEvaluation: 'takeEValuation',
  },
  {
    index: 1,
    level: 'level',
    startDate: 'startDate',
    endDate: 'endDate',
    takeEvaluation: 'takeEValuation',
  },
  {
    index: 2,
    level: 'level',
    startDate: 'startDate',
    endDate: 'endDate',
    takeEvaluation: 'takeEValuation',
  },
  {
    index: 3,
    level: 'level',
    startDate: 'startDate',
    endDate: 'endDate',
    takeEvaluation: 'takeEValuation',
  },
  {
    index: 4,
    level: 'level',
    startDate: 'startDate',
    endDate: 'endDate',
    takeEvaluation: 'takeEValuation',
  },
  {
    index: 5,
    level: 'level',
    startDate: 'startDate',
    endDate: 'endDate',
    takeEvaluation: 'takeEValuation',
  },
];
