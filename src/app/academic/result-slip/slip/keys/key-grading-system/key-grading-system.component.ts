import { Component, inject } from '@angular/core';
import { KeysService } from '../keys.service';

@Component({
  selector: 'hinv-key-grading-system',
  templateUrl: './key-grading-system.component.html',
  styleUrl: './key-grading-system.component.scss',
})
export class KeyGradingSystemComponent {
  keyService = inject(KeysService);
  displayedColumns: string[] = ['grade', 'points'];
  dataSource = this.keyService.keyGrading;
}
