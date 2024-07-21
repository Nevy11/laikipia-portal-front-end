import {
  AfterViewInit,
  Component,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { EventsComponent } from './events/events.component';
import { NewsComponent } from './news/news.component';
import { NoticeBoardComponent } from './notice-board/notice-board.component';

@Component({
  selector: 'hinv-socials',
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.scss',
})
export class SocialsComponent implements AfterViewInit {
  vcr = inject(ViewContainerRef);
  ngAfterViewInit(): void {
    this.vcr.createComponent(EventsComponent);
    this.vcr.createComponent(NoticeBoardComponent);
    this.vcr.createComponent(NewsComponent);
  }
}
