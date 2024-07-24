import { Component, ViewContainerRef, inject } from '@angular/core';
import { Year1ExamCardComponent } from '../../year1-exam-card/year1-exam-card.component';

@Component({
  selector: 'hinv-one',
  templateUrl: './one.component.html',
  styleUrl: './one.component.scss',
})
export class OneComponent {
  vcr = inject(ViewContainerRef);
  ngAfterViewInit(): void {
    this.vcr.createComponent(Year1ExamCardComponent);
  }
}
