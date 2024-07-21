import {
  AfterViewInit,
  Component,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { AdminExamCardComponent } from '../admin-exam-card/admin-exam-card.component';
import { StudentInfoExamCardComponent } from '../admin-exam-card/student-info-exam-card/student-info-exam-card.component';

@Component({
  selector: 'hinv-previous-exam-card',
  templateUrl: './previous-exam-card.component.html',
  styleUrl: './previous-exam-card.component.scss',
})
export class PreviousExamCardComponent implements AfterViewInit {
  vcr = inject(ViewContainerRef);
  ngAfterViewInit(): void {
    this.vcr.createComponent(AdminExamCardComponent);
  }
}
