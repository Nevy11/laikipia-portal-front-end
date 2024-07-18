import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MpesaComponent } from '../mpesa.component';

@Component({
  selector: 'hinv-mpesa-dialog',
  templateUrl: './mpesa-dialog.component.html',
  styleUrl: './mpesa-dialog.component.scss',
})
export class MpesaDialogComponent {
  readonly dialogRef = inject(MatDialogRef<MpesaComponent>);
  close: boolean = true;
  payFees() {
    alert('Please Enter your password to proceed with the mpesa payment');
    this.close = true;
  }
}
