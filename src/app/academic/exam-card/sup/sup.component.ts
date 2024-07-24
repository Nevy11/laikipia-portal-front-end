import {
  AfterViewInit,
  Component,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { SupExamCardComponent } from '../sup-exam-card/sup-exam-card.component';

@Component({
  selector: 'hinv-sup',
  templateUrl: './sup.component.html',
  styleUrl: './sup.component.scss',
})
export class SupComponent implements AfterViewInit {
  vcr = inject(ViewContainerRef);
  ngAfterViewInit(): void {
    this.vcr.createComponent(SupExamCardComponent);
  }
}
