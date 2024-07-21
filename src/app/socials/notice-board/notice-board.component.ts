import {
  AfterViewInit,
  Component,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { NoticeBoardContentComponent } from './notice-board-content/notice-board-content.component';

@Component({
  selector: 'hinv-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrl: './notice-board.component.scss',
})
export class NoticeBoardComponent implements AfterViewInit {
  vcr = inject(ViewContainerRef);
  ngAfterViewInit(): void {
    this.vcr.createComponent(NoticeBoardContentComponent);
  }
}
