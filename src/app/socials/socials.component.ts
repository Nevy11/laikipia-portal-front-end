import {
  AfterViewInit,
  Component,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { EventsComponent } from './events/events.component';
import { NewsComponent } from './news/news.component';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { LargeNewsComponent } from './large-news/large-news.component';

@Component({
  selector: 'hinv-socials',
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.scss',
})
export class SocialsComponent implements AfterViewInit {
  vcr = inject(ViewContainerRef);
  breakpointObserver = inject(BreakpointObserver);
  ngAfterViewInit(): void {
    this.breakpointObserver.observe(Breakpoints.Large).subscribe((resp) => {
      console.log(resp);
      if (resp.matches) {
        this.vcr.clear();
        this.vcr.createComponent(EventsComponent);
        this.vcr.createComponent(NoticeBoardComponent);
        this.vcr.createComponent(LargeNewsComponent);
      } else {
        this.breakpointObserver
          .observe(Breakpoints.XLarge)
          .subscribe((resp) => {
            if (resp.matches) {
              this.vcr.clear();
              this.vcr.createComponent(EventsComponent);
              this.vcr.createComponent(NoticeBoardComponent);
              this.vcr.createComponent(LargeNewsComponent);
            } else {
              this.vcr.clear();
              this.vcr.createComponent(EventsComponent);
              this.vcr.createComponent(NoticeBoardComponent);
              this.vcr.createComponent(NewsComponent);
            }
          });
      }
    });
  }
}
