import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { KcbComponent } from '../kcb.component';

@Component({
  selector: 'hinv-kcb-dialogue',
  templateUrl: './kcb-dialogue.component.html',
  styleUrl: './kcb-dialogue.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KcbDialogueComponent {
  readonly dialogRef = inject(MatDialogRef<KcbComponent>);
  accountNumber: number = 123121212;
}
