import {
  AfterViewInit,
  Component,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { PreviousExamCardComponent } from '../previous-exam-card/previous-exam-card.component';

@Component({
  selector: 'hinv-previous',
  templateUrl: './previous.component.html',
  styleUrl: './previous.component.scss',
})
export class PreviousComponent implements AfterViewInit {
  vcr = inject(ViewContainerRef);
  ngAfterViewInit(): void {
    this.vcr.createComponent(PreviousExamCardComponent);
  }
}
