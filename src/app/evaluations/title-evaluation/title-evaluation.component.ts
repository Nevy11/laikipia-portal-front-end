import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hinv-title-evaluation',
  templateUrl: './title-evaluation.component.html',
  styleUrl: './title-evaluation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleEvaluationComponent {
  yourChoice: string = 'evaluation';
}
