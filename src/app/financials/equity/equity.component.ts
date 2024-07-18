import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EquityDialogComponent } from './equity-dialog/equity-dialog.component';

@Component({
  selector: 'hinv-equity',
  templateUrl: './equity.component.html',
  styleUrl: './equity.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EquityComponent {
  readonly dialog = inject(MatDialog);

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(EquityDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
