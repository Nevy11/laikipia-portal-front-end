import {
  AfterViewInit,
  Component,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { EvaluationTableComponent } from './evaluation-table/evaluation-table.component';
import { TitleEvaluationComponent } from './title-evaluation/title-evaluation.component';

@Component({
  selector: 'hinv-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrl: './evaluations.component.scss',
})
export class EvaluationsComponent implements AfterViewInit {
  vcr = inject(ViewContainerRef);
  ngAfterViewInit(): void {
    this.vcr.createComponent(TitleEvaluationComponent);
    // this.vcr.createComponent(EvaluationTableComponent);
  }
}
