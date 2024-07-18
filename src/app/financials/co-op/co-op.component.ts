import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoOpDialogueComponent } from './co-op-dialogue/co-op-dialogue.component';

@Component({
  selector: 'hinv-co-op',
  templateUrl: './co-op.component.html',
  styleUrl: './co-op.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoOpComponent {
  readonly dialog = inject(MatDialog);

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(CoOpDialogueComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
