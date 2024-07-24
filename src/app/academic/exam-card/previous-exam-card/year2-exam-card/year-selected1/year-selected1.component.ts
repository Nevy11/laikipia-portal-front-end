import {
  AfterViewInit,
  Component,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { Year1ExamCardComponent } from '../../year1-exam-card/year1-exam-card.component';

@Component({
  selector: 'hinv-year-selected1',
  templateUrl: './year-selected1.component.html',
  styleUrl: './year-selected1.component.scss',
})
export class YearSelected1Component implements AfterViewInit {
  vcr = inject(ViewContainerRef);
  ngAfterViewInit(): void {
    this.vcr.createComponent(Year1ExamCardComponent);
  }
}
