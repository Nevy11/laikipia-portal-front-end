import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { PreviousExamCardComponent } from './previous-exam-card/previous-exam-card.component';

@Component({
  selector: 'hinv-exam-card',
  templateUrl: './exam-card.component.html',
  styleUrl: './exam-card.component.scss',
})
export class ExamCardComponent implements AfterViewInit {
  @ViewChild('previous', { static: true }) previous!: ElementRef;
  selectedButton: string = 'cExamCard';
  ngAfterViewInit(): void {
    if (this.selectedButton === 'pExamCard') {
      this.previous.nativeElement.createComponent(PreviousExamCardComponent);
    }
  }
}
