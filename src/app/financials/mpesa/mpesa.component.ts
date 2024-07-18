import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MpesaDialogComponent } from './mpesa-dialog/mpesa-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'hinv-mpesa',
  templateUrl: './mpesa.component.html',
  styleUrl: './mpesa.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MpesaComponent {
  readonly dialog = inject(MatDialog);

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(MpesaDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
