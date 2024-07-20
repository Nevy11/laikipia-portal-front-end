import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'hinv-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurriculumComponent {
  readonly panelOpenState = signal(false);
}
