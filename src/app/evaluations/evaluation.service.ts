import { Injectable } from '@angular/core';
import { Evaluations } from './evaluations';

@Injectable({
  providedIn: 'root',
})
export class EvaluationService {
  constructor() {}
  // export interface Evaluations {
  //   index: number;
  //   level: string;
  //   startDate: string;
  //   endDate: string;
  //   takeEvaluation: string;
  // }

  EvaluationsData: Evaluations[] = [
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
}
