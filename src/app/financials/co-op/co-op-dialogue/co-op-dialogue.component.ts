import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CoOpComponent } from '../co-op.component';

@Component({
  selector: 'hinv-co-op-dialogue',
  templateUrl: './co-op-dialogue.component.html',
  styleUrl: './co-op-dialogue.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoOpDialogueComponent {
  readonly dialogRef = inject(MatDialogRef<CoOpComponent>);
  accountNumber: number = 123121212;
}
