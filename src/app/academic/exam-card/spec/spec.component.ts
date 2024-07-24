import {
  AfterViewInit,
  Component,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { SpecExamCardComponent } from '../spec-exam-card/spec-exam-card.component';

@Component({
  selector: 'hinv-spec',
  templateUrl: './spec.component.html',
  styleUrl: './spec.component.scss',
})
export class SpecComponent implements AfterViewInit {
  vcr = inject(ViewContainerRef);

  ngAfterViewInit(): void {
    this.vcr.createComponent(SpecExamCardComponent);
  }
}
