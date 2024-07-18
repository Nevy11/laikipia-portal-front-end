import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'hinv-equity-dialog',
  templateUrl: './equity-dialog.component.html',
  styleUrl: './equity-dialog.component.scss',
})
export class EquityDialogComponent {
  readonly dialogRef = inject(MatDialogRef<EquityDialogComponent>);
  accountNumber: number = 777323423423423;
  payFees() {
    alert('Please Enter your password to proceed with the mpesa payment');
  }
}
